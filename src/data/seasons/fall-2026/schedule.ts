import type { ScheduledWeek } from "../../types";

// Lane assignments from the LeagueSecretary schedule PDF, as team-number pairs for
// lanes 1-2, 3-4, ... 15-16. Position rounds are set from standings, so they have no pairs.
export const scheduledWeeks: ScheduledWeek[] = [
  { week: 1, date: "09/10/2026", pairs: [[1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12], [13, 14], [15, 16]] },
  { week: 2, date: "09/17/2026", pairs: [[13, 12], [6, 15], [8, 3], [10, 5], [11, 7], [9, 2], [1, 16], [4, 14]] },
  { week: 3, date: "09/24/2026", pairs: [[9, 16], [8, 14], [15, 10], [11, 3], [5, 2], [7, 13], [4, 12], [1, 6]] },
  { week: 4, date: "10/01/2026", pairs: [[7, 4], [1, 10], [14, 11], [15, 2], [3, 13], [16, 5], [6, 9], [12, 8]] },
  { week: 5, date: "10/08/2026", pairs: [[8, 5], [2, 12], [13, 1], [14, 16], [15, 4], [6, 3], [10, 7], [9, 11]] },
  { week: 6, date: "10/15/2026", pairs: [[10, 3], [9, 13], [12, 16], [4, 1], [6, 14], [15, 8], [5, 11], [2, 7]] },
  { week: 7, date: "10/22/2026", pairs: [[15, 11], [7, 16], [4, 9], [12, 6], [8, 1], [10, 14], [3, 2], [13, 5]] },
  { week: 8, date: "10/29/2026", pairs: [[6, 7], [11, 1], [2, 14], [8, 9], [10, 12], [5, 4], [15, 13], [16, 3]] },
  { week: 9, date: "11/05/2026", pairs: [[4, 13], [15, 3], [11, 8], [1, 14], [2, 16], [12, 9], [7, 5], [6, 10]] },
  { week: 10, date: "11/12/2026", pairs: [[12, 1], [10, 8], [3, 5], [2, 4], [14, 9], [13, 16], [11, 6], [7, 15]] },
  { week: 11, date: "11/19/2026", pairs: [[11, 10], [13, 2], [16, 4], [5, 15], [7, 3], [8, 6], [9, 1], [14, 12]] },
  { week: 12, date: "12/03/2026", pairs: [] }, // Position Round
  { week: 13, date: "12/10/2026", pairs: [] }, // Divisional Position Round
  { week: 14, date: "12/17/2026", pairs: [] }, // Divisional Position Round
  { week: 15, date: "01/07/2027", pairs: [] }, // Divisional Position Round
];
