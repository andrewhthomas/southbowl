import type { SeasonData } from "../../types";
import { deriveSeason } from "../../derive";
import { weekRecaps } from "./recaps";

// Current team names by number. A rename (team 6 was "Danger D!" on the week 1 sheet)
// only needs updating here; recaps keep the name each sheet printed.
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
  10: "Tuesday Night Strikers",
  11: "BLAME IT ON THE LANE",
  12: "Bowlerinas",
  13: "Minds In The Gutter",
  14: "DIRTY DAN AND THE PINHEADS",
  15: "Wild Turkeys",
  16: "Spare Parts",
};

export default {
  id: "fall-2026",
  label: "Fall 2026",
  league: {
    // LeagueSecretary and the scoresheet PDFs call this "Thirsty Thursday Winter 2027"
    name: "Thirsty Thursday Fall 2026",
    center: "Southbowl",
    address: "19 E Oregon Ave, Philadelphia, PA",
    phone: "(215) 389-2695",
    day: "Thursday",
    time: "6:30 PM",
    startDate: "09/10/2026",
    lastUpdated: "09/17/2026",
  },
  // Standings, bowler stats, rosters, and results are computed from the scoresheets
  ...deriveSeason(weekRecaps, teamNames),
  weekRecaps,
} satisfies SeasonData;
