import type { SeasonData } from "../../types";
import { deriveSeason, type TeamIdentity } from "../../derive";
import { weekRecaps } from "./recaps";
import { scheduledWeeks } from "./schedule";

// Current team names by number. From week 3 the league dropped to 12 teams and reused
// numbers, so these are the week 3 numbers.
const teamNames: Record<number, string> = {
  1: "ITTY BITTY SPLITTY",
  2: "PISTOL PETE'S",
  3: "LANE LIZARDS",
  4: "Oh, That Team!",
  5: "Bowl Strike Dracula",
  6: "FoBros+Co",
  7: "Bowl Movements",
  8: "Bowl Yeller",
  9: "Pin Pals",
  10: "Spare Parts",
  11: "Wild Turkeys",
  12: "Bowlerinas",
};

// Weeks 1-2 used the old 16-team numbering. Wild Turkeys and Spare Parts moved into the
// numbers freed by the four teams that never bowled, and LeagueSecretary carried their
// records with them, so map the early sheets onto the teams that continued.
const earlyNumbers: Record<number, number | null> = {
  15: 11, // Wild Turkeys
  16: 10, // Spare Parts
  10: null, // Tuesday Night Strikers, never bowled
  11: null, // BLAME IT ON THE LANE, never bowled
  13: null, // Minds In The Gutter, never bowled
  14: null, // DIRTY DAN AND THE PINHEADS, never bowled
};
const identity: TeamIdentity = (week, num) =>
  week > 2 ? num : num in earlyNumbers ? earlyNumbers[num] : num;

// Team 6 is charged for week 1, when it bowled as Danger D! and forfeited, so its record
// starts there rather than at its first game as FoBros+Co.
const recordStarts = { 6: 1 };

export default {
  id: "fall-2026",
  label: "Fall 2026",
  league: {
    // LeagueSecretary and the scoresheet PDFs call this "Thirsty Thursday Winter 2027"
    name: "Thirsty Thursday Fall 2026",
    leagueId: 144228,
    center: "Southbowl",
    address: "19 E Oregon Ave, Philadelphia, PA",
    phone: "(215) 389-2695",
    day: "Thursday",
    time: "6:30 PM",
    startDate: "09/10/2026",
    lastUpdated: "09/24/2026",
    totalWeeks: 15,
  },
  // Standings, bowler stats, rosters, and results are computed from the scoresheets
  ...deriveSeason({ recaps: weekRecaps, teamNames, scheduled: scheduledWeeks, identity, recordStarts }),
  weekRecaps,
} satisfies SeasonData;
