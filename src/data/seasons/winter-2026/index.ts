import type { SeasonData } from "../../types";
import { league, bowlers, teamRosters, standings, schedule } from "./league";
import { weekRecaps } from "./recaps";

export default {
  id: "winter-2026",
  label: "Winter 2026",
  league,
  bowlers,
  teamRosters,
  standings,
  schedule,
  weekRecaps,
} satisfies SeasonData;
