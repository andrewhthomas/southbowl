import type { SeasonData } from "../../types";
import { deriveSeason } from "../../derive";
import { weekRecaps } from "./recaps";

// Team names by number, as they settled from week 3 on. The sheets shuffled names and
// numbers during the first two weeks; LeagueSecretary keeps each week's scores with the
// number, so these names own those early results too.
const teamNames: Record<number, string> = {
  1: "Tuesday Night Strikers",
  2: "Bowling is EZ",
  3: "Bowl Yeller",
  4: "Lane Lizards",
  5: "Bowl Strike Dracula",
  6: "Bowlerinas",
  7: "Minds In The Gutter",
  8: "Bowl Movements",
  9: "Damnit D-Mo",
  10: "Pin Pals",
  11: "Oh, That Team!",
  12: "Afterschool Gifted",
  13: "Split Happens",
  14: "Balls on Fire",
};

export default {
  id: "fall-2025",
  label: "Fall 2025",
  league: {
    name: "Thirsty Thursday Fall 2025",
    center: "Southbowl",
    address: "19 E Oregon Ave, Philadelphia, PA",
    phone: "(215) 389-2695",
    day: "Thursday",
    time: "6:30 PM",
    startDate: "09/11/2025",
    lastUpdated: "01/15/2026",
    leagueId: 144228,
    totalWeeks: 14,
  },
  // Standings, bowler stats, rosters, and results are computed from the scoresheets
  ...deriveSeason({ recaps: weekRecaps, teamNames }),
  weekRecaps,
} satisfies SeasonData;
