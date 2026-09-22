import type { Bowler, SeasonData, WeekResult } from "./types";
import winter2026 from "./seasons/winter-2026";

export type * from "./types";

// Newest first. The first season is the current one and is served at the site root;
// the rest are archived under /<id>/.
const seasonData: SeasonData[] = [winter2026];

export interface Season extends SeasonData {
  base: string; // URL prefix: "" for the current season, "/<id>" for archived ones
  isCurrent: boolean;
  topBowlers: ReturnType<typeof computeTopBowlers>;
}

export const seasons: Season[] = seasonData.map((s, i) => ({
  ...s,
  base: i === 0 ? "" : `/${s.id}`,
  isCurrent: i === 0,
  topBowlers: computeTopBowlers(s.bowlers, s.schedule),
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
