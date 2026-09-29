import type { ScheduledWeek } from "../../types";

// Lane assignments from the LeagueSecretary schedule PDF, as team-number pairs for
// lanes 1-2, 3-4, and so on. Weeks 1-2 were the old 16-team draw; from week 3 the league
// reissued the schedule for 12 teams. Position rounds are set from standings, so no pairs.
export const scheduledWeeks: ScheduledWeek[] = [
  { week: 1, date: "09/10/2026", pairs: [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16]] },
  { week: 2, date: "09/17/2026", pairs: [[13, 12], [6, 15], [8, 3], [10, 5], [11, 7], [9, 2], [1, 16], [4, 14]] },
  { week: 3, date: "09/24/2026", pairs: [[9, 3], [1, 10], [11, 4], [5, 12], [8, 2], [6, 7]] },
  { week: 4, date: "10/01/2026", pairs: [[7, 12], [5, 8], [9, 2], [10, 4], [11, 6], [1, 3]] },
  { week: 5, date: "10/08/2026", pairs: [[11, 8], [9, 7], [1, 5], [6, 3], [10, 12], [2, 4]] },
  { week: 6, date: "10/15/2026", pairs: [[10, 6], [11, 1], [3, 8], [12, 2], [7, 4], [9, 5]] },
  { week: 7, date: "10/22/2026", pairs: [[5, 7], [4, 12], [2, 10], [1, 9], [6, 8], [3, 11]] },
  { week: 8, date: "10/29/2026", pairs: [[12, 9], [10, 5], [7, 11], [4, 6], [2, 3], [8, 1]] },
  { week: 9, date: "11/05/2026", pairs: [[6, 1], [2, 11], [8, 12], [3, 5], [4, 9], [7, 10]] },
  { week: 10, date: "11/12/2026", pairs: [[3, 10], [8, 9], [4, 1], [2, 7], [5, 11], [12, 6]] },
  { week: 11, date: "11/19/2026", pairs: [[8, 4], [7, 3], [6, 9], [11, 10], [12, 1], [5, 2]] },
  { week: 12, date: "12/03/2026", pairs: [] }, // Position Round
  { week: 13, date: "12/10/2026", pairs: [] }, // Divisional Position Round
  { week: 14, date: "12/17/2026", pairs: [] }, // Divisional Position Round
  { week: 15, date: "01/07/2027", pairs: [] }, // Divisional Position Round
];
