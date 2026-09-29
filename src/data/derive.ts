// Builds a season's bowler list, standings, rosters, and schedule from its scoresheet
// recaps, following LeagueSecretary's rules. Used by seasons that only have the
// weekly scoresheet PDFs (no LeagueSecretary standings or bowler list to copy from).
import type { Bowler, BowlerScore, ScheduledWeek, Team, WeekRecap, WeekResult } from "./types";

const GAMES_PER_WEEK = 3;
const POINTS_PER_MATCH = 4; // one per game plus one for series
// Sheets list bowlers with no established average at 120
const PLACEHOLDER_AVERAGE = 120;

export function handicapFor(average: number): number {
  return Math.max(0, Math.floor((220 - average) * 0.9));
}

// Per-game absentee score for a row's null games, or 0 when those games were bowled by a sub
export function absenteeScore(b: BowlerScore): number {
  const bowled = b.games.filter((g): g is number => g !== null);
  const missing = b.games.length - bowled.length;
  if (missing === 0) return 0;
  return Math.round((b.total - bowled.reduce((s, g) => s + g, 0)) / missing);
}

function byWeek(recaps: WeekRecap[]): WeekRecap[] {
  return [...recaps].sort((a, b) => a.week - b.week);
}

/** Maps the team number printed on a week's sheet to the team it belongs to today.
 *  Return null for a team that has left the league. */
export type TeamIdentity = (week: number, printedNum: number) => number | null;

export interface SeasonInput {
  recaps: WeekRecap[];
  /** Team number to current name. Teams missing here are left out of the standings. */
  teamNames: Record<number, string>;
  /** Fills in weeks that have not been bowled yet. */
  scheduled?: ScheduledWeek[];
  /** Needed only when the league reused team numbers mid-season. */
  identity?: TeamIdentity;
  /** Overrides the week a team's won-lost record starts, for teams the league charges for
   *  weeks before they first bowled (a forfeit) or excuses for weeks before they joined. */
  recordStarts?: Record<number, number>;
}

function* teamWeeks(recaps: WeekRecap[], identity?: TeamIdentity) {
  for (const recap of byWeek(recaps)) {
    for (const match of recap.matches) {
      for (const team of [match.team1, match.team2]) {
        const num = identity ? identity(recap.week, team.num) : team.num;
        if (num === null) continue; // team is no longer in the league
        yield { team, recap, num };
      }
    }
  }
}

export function deriveSeason({ recaps, teamNames, scheduled = [], identity, recordStarts }: SeasonInput) {
  return {
    bowlers: deriveBowlers(recaps, teamNames, identity),
    teamRosters: deriveRosters(recaps, teamNames, identity),
    standings: deriveStandings(recaps, teamNames, identity, recordStarts),
    schedule: deriveSchedule(recaps, teamNames, scheduled),
  };
}

function deriveBowlers(recaps: WeekRecap[], teamNames: Record<number, string>, identity?: TeamIdentity): Bowler[] {
  const stats = new Map<string, Omit<Bowler, "average" | "handicap">>();
  for (const { team, num } of teamWeeks(recaps, identity)) {
    for (const b of team.bowlers) {
      let s = stats.get(b.name);
      if (!s) {
        s = {
          name: b.name, team: "", games: 0, pins: 0, highGame: 0, highSeries: 0,
          enteringAverage: b.avg === PLACEHOLDER_AVERAGE ? 0 : b.avg,
        };
        stats.set(b.name, s);
      }
      s.team = teamNames[num] ?? team.name;
      const bowled = b.games.filter((g): g is number => g !== null);
      const series = bowled.reduce((sum, g) => sum + g, 0);
      s.games += bowled.length;
      s.pins += series;
      s.highGame = Math.max(s.highGame, ...bowled);
      if (bowled.length === GAMES_PER_WEEK) s.highSeries = Math.max(s.highSeries, series);
    }
  }
  return [...stats.values()]
    .filter(s => s.games > 0)
    .map(s => {
      const average = Math.floor(s.pins / s.games);
      return { ...s, average, handicap: handicapFor(average) };
    });
}

// A bowler belongs to the team they were last listed on, as long as that sheet used the
// team's current name (drops the old roster a renamed team's sheet still printed).
function deriveRosters(recaps: WeekRecap[], teamNames: Record<number, string>, identity?: TeamIdentity): Record<string, string[]> {
  const latest = new Map<string, { num: number; printedName: string }>();
  for (const { team, num } of teamWeeks(recaps, identity)) {
    for (const b of team.bowlers) latest.set(b.name, { num, printedName: team.name });
  }
  const rosters: Record<string, string[]> = Object.fromEntries(Object.values(teamNames).map(n => [n, []]));
  for (const [name, { num, printedName }] of latest) {
    const current = teamNames[num];
    if (current && printedName === current) rosters[current].push(name);
  }
  return rosters;
}

// A team's record runs from the week it first bowls (teams that join late are not charged
// for earlier weeks), playoff weeks award no points, and LeagueSecretary ranks on % won.
// Pinfall and highs count every week, playoffs included.
function deriveStandings(recaps: WeekRecap[], teamNames: Record<number, string>, identity?: TeamIdentity, recordStarts: Record<number, number> = {}): Team[] {
  interface Tally {
    wins: number; pinfall: number; hdcpPins: number; highGame: number; highSeries: number;
    regularWeeks: { week: number; points: number; scored: boolean }[]; playoffsBowled: number;
  }
  const totals = new Map<number, Tally>();
  for (const { team, recap, num } of teamWeeks(recaps, identity)) {
    const t = totals.get(num) ?? { wins: 0, pinfall: 0, hdcpPins: 0, highGame: 0, highSeries: 0, regularWeeks: [], playoffsBowled: 0 };
    t.pinfall += team.scratchTotal;
    t.hdcpPins += team.grandTotal;
    t.highGame = Math.max(t.highGame, ...team.scratchByGame);
    t.highSeries = Math.max(t.highSeries, team.scratchTotal);
    if (recap.playoff) {
      if (team.scratchTotal > 0) t.playoffsBowled += 1;
    } else {
      t.regularWeeks.push({ week: recap.week, points: team.pointsWon, scored: team.scratchTotal > 0 });
    }
    totals.set(num, t);
  }

  return [...totals.entries()]
    .filter(([num]) => teamNames[num])
    .map(([num, t]) => {
      const debut = recordStarts[num] ?? t.regularWeeks.find(w => w.scored)?.week;
      const counted = t.regularWeeks.filter(w => debut === undefined || w.week >= debut);
      const wins = counted.reduce((sum, w) => sum + w.points, 0);
      const losses = counted.length * POINTS_PER_MATCH - wins;
      const weeksBowled = counted.length + t.playoffsBowled;
      return {
        num,
        name: teamNames[num],
        wins,
        losses,
        pct: wins + losses ? wins / (wins + losses) : 0,
        avg: weeksBowled ? Math.floor(t.pinfall / (weeksBowled * GAMES_PER_WEEK)) : 0,
        pinfall: t.pinfall,
        highGame: t.highGame,
        highSeries: t.highSeries,
        hdcpPins: t.hdcpPins,
      };
    })
    // ranked on % won, ties broken on total pins with handicap
    .sort((a, b) => b.pct - a.pct || b.hdcpPins - a.hdcpPins)
    .map(({ hdcpPins, ...team }, i) => ({ rank: i + 1, ...team }));
}

// Bowled weeks come from the recaps; upcoming weeks list the scheduled pairings with no
// scores (how the schedule pages recognize them). Position rounds have no pairings yet.
function deriveSchedule(recaps: WeekRecap[], teamNames: Record<number, string>, scheduled: ScheduledWeek[]): WeekResult[] {
  const bowled: WeekResult[] = recaps.map(r => ({
    week: r.week,
    date: r.date,
    ...(r.playoff ? { playoff: true } : {}),
    matches: r.matches.map(m => ({
      team1: m.team1.name,
      team2: m.team2.name,
      score1: m.team1.grandTotal,
      score2: m.team2.grandTotal,
      wins1: m.team1.pointsWon,
      wins2: m.team2.pointsWon,
      lanes: m.lanes,
    })),
  }));
  const bowledWeeks = new Set(bowled.map(w => w.week));
  const upcoming: WeekResult[] = scheduled
    .filter(s => !bowledWeeks.has(s.week))
    .map(s => ({
      week: s.week,
      date: s.date,
      matches: s.pairs.map(([a, b], i) => ({
        team1: teamNames[a] ?? `Team ${a}`,
        team2: teamNames[b] ?? `Team ${b}`,
        score1: 0, score2: 0, wins1: 0, wins2: 0,
        lanes: [i * 2 + 1, i * 2 + 2] as [number, number],
      })),
    }));
  return [...bowled, ...upcoming].sort((a, b) => a.week - b.week);
}
