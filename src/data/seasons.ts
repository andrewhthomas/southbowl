import type { Bowler, SeasonData, WeekRecap, WeekResult } from "./types";
import winter2026 from "./seasons/winter-2026";
import fall2025 from "./seasons/fall-2025";
import fall2026 from "./seasons/fall-2026";

export type * from "./types";

// Newest first. The first season is the current one and is served at the site root;
// the rest are archived under /<id>/.
const seasonData: SeasonData[] = [fall2026, winter2026, fall2025];

export interface PlayoffMatch {
  team1: string;
  score1: number;
  team2: string;
  score2: number;
  winner: string | null; // null on a tie
}

export interface PlayoffRound {
  week: number;
  date: string;
  title: string;
  matches: PlayoffMatch[];
}

export interface Season extends SeasonData {
  base: string; // URL prefix: "" for the current season, "/<id>" for archived ones
  isCurrent: boolean;
  topBowlers: ReturnType<typeof computeTopBowlers>;
  playoffs: ReturnType<typeof computePlayoffs>;
}

export const seasons: Season[] = seasonData.map((s, i) => ({
  ...s,
  base: i === 0 ? "" : `/${s.id}`,
  isCurrent: i === 0,
  topBowlers: computeTopBowlers(s.bowlers, s.schedule),
  playoffs: computePlayoffs(s.weekRecaps),
}));

export const currentSeason = seasons[0];

export function seasonHref(season: Season, path: string): string {
  return season.base + path;
}

// For getStaticPaths in src/pages/[...season]/: the current season renders at the root
export function seasonPaths() {
  return seasons.map(season => ({
    params: { season: season.isCurrent ? undefined : season.id },
    props: { season },
  }));
}

export function weeksBowled(schedule: WeekResult[]): number {
  return schedule.filter(w =>
    w.matches.length > 0 && w.matches.some(m => m.score1 !== 0 || m.score2 !== 0)
  ).length;
}

// Playoff weeks in order, each one a round. Rounds are named by how many matches they
// hold, and the winner of a single closing match is the season's champion.
function computePlayoffs(weekRecaps: WeekRecap[]) {
  const rounds: PlayoffRound[] = weekRecaps
    .filter(r => r.playoff)
    .sort((a, b) => a.week - b.week)
    .map(r => {
      const matches: PlayoffMatch[] = r.matches.map(m => ({
        team1: m.team1.name,
        score1: m.team1.grandTotal,
        team2: m.team2.name,
        score2: m.team2.grandTotal,
        winner: m.team1.grandTotal === m.team2.grandTotal
          ? null
          : m.team1.grandTotal > m.team2.grandTotal ? m.team1.name : m.team2.name,
      }));
      return { week: r.week, date: r.date, title: roundTitle(matches.length), matches };
    });

  const final = rounds.at(-1);
  const champion = final?.matches.length === 1 ? final.matches[0].winner : null;
  return { rounds, champion };
}

function roundTitle(matches: number): string {
  if (matches === 1) return "Final";
  if (matches === 2) return "Semifinals";
  if (matches === 4) return "Quarterfinals";
  return `Round of ${matches * 2}`;
}

function computeTopBowlers(bowlers: Bowler[], schedule: WeekResult[]) {
  // 9 games to qualify, or every game so far early in the season
  const minGames = Math.min(9, 3 * weeksBowled(schedule));
  const qualified = bowlers.filter(b => b.games >= minGames);

  return {
    highAverage: qualified.slice().sort((a, b) => b.average - a.average).slice(0, 20),
    highGame: bowlers.slice().sort((a, b) => b.highGame - a.highGame).slice(0, 20),
    highSeries: bowlers.filter(b => b.highSeries > 0).sort((a, b) => b.highSeries - a.highSeries).slice(0, 20),
    mostImproved: qualified
      .filter(b => b.enteringAverage > 0 && b.average > b.enteringAverage)
      .map(b => ({
        name: b.name,
        team: b.team,
        enteringAvg: b.enteringAverage,
        currentAvg: b.average,
        improvement: b.average - b.enteringAverage,
      }))
      .sort((a, b) => b.improvement - a.improvement)
      .slice(0, 20),
  };
}

export const navItems = [
  { label: "Dashboard", href: "/" },
  { label: "Schedule", href: "/schedule" },
  { label: "Standings", href: "/standings" },
  { label: "Teams", href: "/teams" },
  { label: "Bowlers", href: "/bowlers" },
  { label: "Statistics", href: "/statistics" },
];
