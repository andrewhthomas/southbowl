export interface LeagueInfo {
  name: string;
  center: string;
  address: string;
  phone: string;
  day: string;
  time: string;
  startDate: string;
  lastUpdated: string;
  leagueId?: number;
  totalWeeks?: number;
}

export interface Bowler {
  name: string;
  team: string;
  games: number;
  pins: number;
  average: number;
  highGame: number;
  highSeries: number;
  handicap: number;
  gender?: "M" | "W";
  enteringAverage: number; // 0 = no established average
}

export interface Team {
  rank: number;
  num: number;     // team number
  name: string;
  wins: number;   // can be fractional (e.g. 11.5)
  losses: number;  // can be fractional (e.g. 12.5)
  pct: number;
  avg: number;     // team average
  pinfall: number;
  highGame: number;  // team high scratch game
  highSeries: number; // team high scratch series
}

export interface WeekResult {
  week: number;
  date: string;
  matches: {
    team1: string;
    team2: string;
    score1: number;
    score2: number;
    wins1: number;
    wins2: number;
    lanes?: [number, number];
  }[];
}

export interface ScheduledWeek {
  week: number;
  date: string;
  pairs: [number, number][]; // team numbers by lane pair (1-2, 3-4, ...)
}

export interface BowlerScore {
  name: string;
  avg: number;
  hdcp: number;
  // null = no bowled score: either absent (absentee score is included in total)
  // or a sub bowled that game instead (not included in total)
  games: (number | null)[];
  total: number;
  hdcpTotal: number;
}

export interface TeamScore {
  name: string;
  num: number;
  bowlers: BowlerScore[];
  scratchByGame: number[];
  hdcpByGame: number[];
  totalByGame: number[];
  scratchTotal: number;
  hdcpTotal: number;
  grandTotal: number;
  pointsWon: number;
}

export interface DetailedMatch {
  lanes: [number, number];
  team1: TeamScore;
  team2: TeamScore;
}

export interface WeekRecap {
  week: number;
  date: string;
  matches: DetailedMatch[];
}

export interface SeasonData {
  id: string;     // URL segment for the season's archive, e.g. "winter-2026"
  label: string;  // shown in the season picker
  league: LeagueInfo;
  bowlers: Bowler[];
  teamRosters: Record<string, string[]>;
  standings: Team[];
  schedule: WeekResult[];
  weekRecaps: WeekRecap[];
}
