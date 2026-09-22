// Builds a season's bowler list, standings, rosters, and schedule from its scoresheet
// recaps, following LeagueSecretary's rules. Used by seasons that only have the
// weekly scoresheet PDFs (no LeagueSecretary standings or bowler list to copy from).
import type { Bowler, BowlerScore, Team, WeekRecap, WeekResult } from "./types";

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

function* teamWeeks(recaps: WeekRecap[]) {
  for (const recap of byWeek(recaps)) {
    for (const match of recap.matches) {
      yield match.team1;
      yield match.team2;
    }
  }
}

// teamNames maps team number to its current name, so renamed teams stay one team
export function deriveSeason(recaps: WeekRecap[], teamNames: Record<number, string>) {
  return {
    bowlers: deriveBowlers(recaps, teamNames),
    teamRosters: deriveRosters(recaps, teamNames),
    standings: deriveStandings(recaps, teamNames),
    schedule: deriveSchedule(recaps),
  };
}

function deriveBowlers(recaps: WeekRecap[], teamNames: Record<number, string>): Bowler[] {
  const stats = new Map<string, Omit<Bowler, "average" | "handicap">>();
  for (const team of teamWeeks(recaps)) {
    for (const b of team.bowlers) {
      let s = stats.get(b.name);
      if (!s) {
        s = {
          name: b.name, team: "", games: 0, pins: 0, highGame: 0, highSeries: 0,
          enteringAverage: b.avg === PLACEHOLDER_AVERAGE ? 0 : b.avg,
        };
        stats.set(b.name, s);
      }
      s.team = teamNames[team.num] ?? team.name;
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
function deriveRosters(recaps: WeekRecap[], teamNames: Record<number, string>): Record<string, string[]> {
  const latest = new Map<string, { num: number; printedName: string }>();
  for (const team of teamWeeks(recaps)) {
    for (const b of team.bowlers) latest.set(b.name, { num: team.num, printedName: team.name });
  }
  const rosters: Record<string, string[]> = Object.fromEntries(Object.values(teamNames).map(n => [n, []]));
  for (const [name, { num, printedName }] of latest) {
    const current = teamNames[num];
    if (current && printedName === current) rosters[current].push(name);
  }
  return rosters;
}

function deriveStandings(recaps: WeekRecap[], teamNames: Record<number, string>): Team[] {
  const totals = new Map<number, { wins: number; weeks: number; pinfall: number; hdcpPins: number; highGame: number; highSeries: number }>();
  for (const team of teamWeeks(recaps)) {
    const t = totals.get(team.num) ?? { wins: 0, weeks: 0, pinfall: 0, hdcpPins: 0, highGame: 0, highSeries: 0 };
    t.wins += team.pointsWon;
    t.weeks += 1;
    t.pinfall += team.scratchTotal;
    t.hdcpPins += team.grandTotal;
    t.highGame = Math.max(t.highGame, ...team.scratchByGame);
    t.highSeries = Math.max(t.highSeries, team.scratchTotal);
    totals.set(team.num, t);
  }
  return [...totals.entries()]
    // LeagueSecretary breaks ties on total pins with handicap
    .sort(([, a], [, b]) => b.wins - a.wins || b.hdcpPins - a.hdcpPins)
    .map(([num, t], i) => {
      const losses = t.weeks * POINTS_PER_MATCH - t.wins;
      return {
        rank: i + 1,
        num,
        name: teamNames[num] ?? `Team ${num}`,
        wins: t.wins,
        losses,
        pct: t.weeks ? t.wins / (t.wins + losses) : 0,
        avg: t.weeks ? Math.floor(t.pinfall / (t.weeks * GAMES_PER_WEEK)) : 0,
        pinfall: t.pinfall,
        highGame: t.highGame,
        highSeries: t.highSeries,
      };
    });
}

function deriveSchedule(recaps: WeekRecap[]): WeekResult[] {
  return byWeek(recaps).map(r => ({
    week: r.week,
    date: r.date,
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
}
