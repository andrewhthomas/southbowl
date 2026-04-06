export const league = {
  name: "Thirsty Thursday Winter 2026",
  center: "Southbowl",
  address: "19 E Oregon Ave, Philadelphia, PA",
  phone: "(215) 389-2695",
  day: "Thursday",
  time: "6:30 PM",
  startDate: "02/05/2026",
  lastUpdated: "03/26/2026",
  leagueId: 144228,
};

export interface Bowler {
  name: string;
  team: string;
  games: number;
  pins: number;
  average: number;
  highGame: number;
  highSeries: number;
  handicap: number;
  gender: "M" | "W";
  enteringAverage: number;
}

// Real bowler data from LeagueSecretary.com — only active bowlers (games > 0)
export const bowlers: Bowler[] = [
  { name: "Adam", team: "General Strike Now!", games: 24, pins: 3189, average: 132, highGame: 204, highSeries: 464, handicap: 79, gender: "M", enteringAverage: 0 },
  { name: "Breanne", team: "Bowlerinas", games: 3, pins: 431, average: 143, highGame: 148, highSeries: 431, handicap: 69, gender: "W", enteringAverage: 144 }, // absent week 8
  { name: "Buzz", team: "General Strike Now!", games: 21, pins: 2241, average: 106, highGame: 145, highSeries: 358, handicap: 102, gender: "M", enteringAverage: 0 },
  { name: "Chris", team: "General Strike Now!", games: 21, pins: 2509, average: 119, highGame: 161, highSeries: 386, handicap: 90, gender: "M", enteringAverage: 0 },
  { name: "Dan", team: "Pin Pals", games: 18, pins: 2080, average: 115, highGame: 147, highSeries: 364, handicap: 94, gender: "M", enteringAverage: 123 },
  { name: "Dewey", team: "Pin Pals", games: 21, pins: 3357, average: 159, highGame: 216, highSeries: 523, handicap: 54, gender: "M", enteringAverage: 157 },
  { name: "Dionne", team: "ITTY BITTY SPLITTY", games: 18, pins: 2004, average: 111, highGame: 149, highSeries: 381, handicap: 98, gender: "M", enteringAverage: 0 },
  { name: "Ezra", team: "DIRTY DAN AND THE PINHEADS", games: 24, pins: 2520, average: 105, highGame: 151, highSeries: 394, handicap: 103, gender: "W", enteringAverage: 0 },
  { name: "Gabe", team: "DIRTY DAN AND THE PINHEADS", games: 9, pins: 1167, average: 129, highGame: 171, highSeries: 428, handicap: 81, gender: "M", enteringAverage: 0 },
  { name: "Jacob", team: "DIRTY DAN AND THE PINHEADS", games: 24, pins: 3516, average: 146, highGame: 224, highSeries: 498, handicap: 66, gender: "M", enteringAverage: 0 },
  { name: "Jahmir", team: "PISTOL PETE'S", games: 9, pins: 1573, average: 174, highGame: 211, highSeries: 573, handicap: 41, gender: "M", enteringAverage: 0 }, // absent week 8
  { name: "John", team: "General Strike Now!", games: 21, pins: 2451, average: 116, highGame: 173, highSeries: 412, handicap: 93, gender: "M", enteringAverage: 0 },
  { name: "Rebecca", team: "DIRTY DAN AND THE PINHEADS", games: 5, pins: 491, average: 98, highGame: 106, highSeries: 310, handicap: 109, gender: "W", enteringAverage: 0 },
  { name: "Ricky", team: "Oh, That Team!", games: 3, pins: 291, average: 97, highGame: 113, highSeries: 291, handicap: 110, gender: "M", enteringAverage: 0 },
  { name: "Ryan", team: "Pin Pals", games: 18, pins: 3524, average: 195, highGame: 245, highSeries: 633, handicap: 22, gender: "M", enteringAverage: 170 },
  { name: "Shannon", team: "Bowlerinas", games: 3, pins: 477, average: 159, highGame: 161, highSeries: 477, handicap: 54, gender: "W", enteringAverage: 0 },
  { name: "Thibault", team: "DIRTY DAN AND THE PINHEADS", games: 1, pins: 99, average: 99, highGame: 99, highSeries: 99, handicap: 108, gender: "M", enteringAverage: 0 },
  { name: "Todd", team: "Pin Pals", games: 24, pins: 3677, average: 153, highGame: 194, highSeries: 511, handicap: 60, gender: "M", enteringAverage: 149 },
  { name: "Vicki", team: "Bowlerinas", games: 21, pins: 2621, average: 124, highGame: 175, highSeries: 450, handicap: 86, gender: "W", enteringAverage: 130 },
  { name: "Wesley", team: "DIRTY DAN AND THE PINHEADS", games: 6, pins: 772, average: 128, highGame: 164, highSeries: 430, handicap: 82, gender: "M", enteringAverage: 0 },
  { name: "B, Bev", team: "Oh, That Team!", games: 21, pins: 3076, average: 146, highGame: 205, highSeries: 530, handicap: 66, gender: "W", enteringAverage: 158 },
  { name: "B, Michelle", team: "Oh, That Team!", games: 15, pins: 1976, average: 131, highGame: 185, highSeries: 442, handicap: 80, gender: "W", enteringAverage: 131 }, // absent week 8
  { name: "Baron, Dan", team: "Tuesday Night Strikers", games: 15, pins: 2326, average: 155, highGame: 198, highSeries: 537, handicap: 58, gender: "M", enteringAverage: 178 },
  { name: "Berry, Jackie", team: "Balls on Fire", games: 3, pins: 160, average: 53, highGame: 62, highSeries: 160, handicap: 150, gender: "W", enteringAverage: 0 },
  { name: "Blickwidel, Teddy", team: "Danger D!", games: 21, pins: 2730, average: 130, highGame: 187, highSeries: 465, handicap: 81, gender: "M", enteringAverage: 0 },
  { name: "Boyle, Steve", team: "Bowl Movements", games: 18, pins: 2525, average: 140, highGame: 219, highSeries: 478, handicap: 72, gender: "M", enteringAverage: 0 },
  { name: "Brown, Cleon", team: "Balls on Fire", games: 3, pins: 315, average: 105, highGame: 128, highSeries: 315, handicap: 103, gender: "M", enteringAverage: 0 },
  { name: "C, Frank", team: "Bowlerinas", games: 18, pins: 2034, average: 113, highGame: 138, highSeries: 383, handicap: 96, gender: "M", enteringAverage: 121 },
  { name: "C, Mario", team: "Oh, That Team!", games: 20, pins: 2301, average: 115, highGame: 139, highSeries: 373, handicap: 94, gender: "M", enteringAverage: 0 },
  { name: "C, Tom", team: "ITTY BITTY SPLITTY", games: 6, pins: 744, average: 124, highGame: 128, highSeries: 374, handicap: 86, gender: "M", enteringAverage: 0 },
  { name: "Castro, Bill", team: "Bowl Movements", games: 18, pins: 2954, average: 164, highGame: 195, highSeries: 539, handicap: 50, gender: "M", enteringAverage: 173 },
  { name: "Castro, Michele", team: "Bowl Movements", games: 12, pins: 1348, average: 112, highGame: 152, highSeries: 391, handicap: 97, gender: "W", enteringAverage: 0 },
  { name: "Conroy, Dave", team: "Balls on Fire", games: 9, pins: 822, average: 91, highGame: 121, highSeries: 311, handicap: 116, gender: "M", enteringAverage: 0 },
  { name: "Conroy, Stacey", team: "Balls on Fire", games: 6, pins: 517, average: 86, highGame: 122, highSeries: 292, handicap: 120, gender: "W", enteringAverage: 0 },
  { name: "Conroy, Victoria", team: "Balls on Fire", games: 12, pins: 834, average: 69, highGame: 88, highSeries: 226, handicap: 135, gender: "W", enteringAverage: 0 },
  { name: "Demarco, Mike", team: "ITTY BITTY SPLITTY", games: 17, pins: 2681, average: 157, highGame: 215, highSeries: 554, handicap: 56, gender: "M", enteringAverage: 0 },
  { name: "Demauro, Derek", team: "PISTOL PETE'S", games: 18, pins: 3264, average: 181, highGame: 223, highSeries: 593, handicap: 35, gender: "M", enteringAverage: 171 },
  { name: "Eisenhart, Sefton", team: "LANE LIZARDS", games: 3, pins: 323, average: 107, highGame: 132, highSeries: 323, handicap: 101, gender: "M", enteringAverage: 0 },
  { name: "F, Vince", team: "Minds In The Gutter", games: 23, pins: 3530, average: 153, highGame: 234, highSeries: 597, handicap: 60, gender: "M", enteringAverage: 167 },
  { name: "Falcone, Dante", team: "Danger D!", games: 18, pins: 2024, average: 112, highGame: 154, highSeries: 386, handicap: 97, gender: "M", enteringAverage: 0 },
  { name: "Finnerty, Erin", team: "BLAME IT ON THE LANE", games: 21, pins: 2396, average: 114, highGame: 147, highSeries: 423, handicap: 95, gender: "W", enteringAverage: 0 },
  { name: "Fogg, Melissa", team: "BLAME IT ON THE LANE", games: 12, pins: 994, average: 82, highGame: 106, highSeries: 282, handicap: 124, gender: "W", enteringAverage: 0 },
  { name: "Gallagher, Mb", team: "BLAME IT ON THE LANE", games: 3, pins: 243, average: 81, highGame: 89, highSeries: 243, handicap: 125, gender: "W", enteringAverage: 0 },
  { name: "Graves, Wes", team: "Bowl Movements", games: 21, pins: 2670, average: 127, highGame: 167, highSeries: 434, handicap: 83, gender: "M", enteringAverage: 136 },
  { name: "Hammond, Chris", team: "LANE LIZARDS", games: 12, pins: 1694, average: 141, highGame: 180, highSeries: 478, handicap: 71, gender: "M", enteringAverage: 0 },
  { name: "Harris, Zach", team: "PISTOL PETE'S", games: 21, pins: 4278, average: 203, highGame: 277, highSeries: 741, handicap: 15, gender: "M", enteringAverage: 216 },
  { name: "Hong, James", team: "Danger D!", games: 18, pins: 2887, average: 160, highGame: 225, highSeries: 526, handicap: 54, gender: "M", enteringAverage: 0 },
  { name: "J, John", team: "Bowl Yeller", games: 21, pins: 3350, average: 159, highGame: 209, highSeries: 539, handicap: 54, gender: "M", enteringAverage: 152 },
  { name: "K, Nick", team: "General Strike Now!", games: 3, pins: 370, average: 123, highGame: 137, highSeries: 370, handicap: 87, gender: "M", enteringAverage: 0 },
  { name: "Karam, Nikki", team: "BLAME IT ON THE LANE", games: 12, pins: 1496, average: 124, highGame: 198, highSeries: 395, handicap: 86, gender: "W", enteringAverage: 0 },
  { name: "L, John", team: "Bowlerinas", games: 12, pins: 1986, average: 165, highGame: 218, highSeries: 571, handicap: 49, gender: "M", enteringAverage: 0 },
  { name: "Lee, Joe", team: "LANE LIZARDS", games: 24, pins: 4329, average: 180, highGame: 246, highSeries: 623, handicap: 36, gender: "M", enteringAverage: 175 },
  { name: "Lenton, Colin", team: "Bowl Movements", games: 12, pins: 1710, average: 142, highGame: 183, highSeries: 478, handicap: 70, gender: "M", enteringAverage: 167 },
  { name: "Londres, Dave", team: "Bowl Movements", games: 12, pins: 1755, average: 146, highGame: 173, highSeries: 474, handicap: 66, gender: "M", enteringAverage: 131 },
  { name: "Los, King", team: "PISTOL PETE'S", games: 3, pins: 614, average: 204, highGame: 252, highSeries: 614, handicap: 14, gender: "M", enteringAverage: 0 },
  { name: "M, Kerry", team: "Bowl Yeller", games: 18, pins: 2208, average: 122, highGame: 164, highSeries: 420, handicap: 88, gender: "M", enteringAverage: 131 },
  { name: "M, Maureen", team: "ITTY BITTY SPLITTY", games: 3, pins: 220, average: 73, highGame: 80, highSeries: 220, handicap: 132, gender: "W", enteringAverage: 0 },
  { name: "M, Ty", team: "Minds In The Gutter", games: 24, pins: 2933, average: 122, highGame: 164, highSeries: 428, handicap: 88, gender: "M", enteringAverage: 0 },
  { name: "Maduzia, Korynn", team: "Bowl Strike Dracula", games: 21, pins: 2674, average: 127, highGame: 172, highSeries: 447, handicap: 83, gender: "W", enteringAverage: 117 },
  { name: "Maggs, Will", team: "LANE LIZARDS", games: 3, pins: 258, average: 86, highGame: 110, highSeries: 258, handicap: 120, gender: "M", enteringAverage: 0 },
  { name: "Marino, Sal", team: "Bowlerinas", games: 9, pins: 1506, average: 167, highGame: 200, highSeries: 526, handicap: 47, gender: "M", enteringAverage: 182 },
  { name: "Mastrobuoni, Joe", team: "Balls on Fire", games: 15, pins: 1878, average: 125, highGame: 161, highSeries: 407, handicap: 85, gender: "M", enteringAverage: 0 },
  { name: "Mc, Ellen", team: "PISTOL PETE'S", games: 18, pins: 1547, average: 85, highGame: 120, highSeries: 328, handicap: 121, gender: "W", enteringAverage: 0 },
  { name: "Mcglone, Pat", team: "Balls on Fire", games: 9, pins: 1367, average: 151, highGame: 192, highSeries: 506, handicap: 62, gender: "M", enteringAverage: 0 },
  { name: "Miller, Joan", team: "BLAME IT ON THE LANE", games: 3, pins: 301, average: 100, highGame: 107, highSeries: 301, handicap: 108, gender: "W", enteringAverage: 0 },
  { name: "O'Malley, Bridget", team: "ITTY BITTY SPLITTY", games: 24, pins: 2290, average: 95, highGame: 177, highSeries: 381, handicap: 112, gender: "W", enteringAverage: 0 },
  { name: "P, Nick", team: "Minds In The Gutter", games: 24, pins: 3652, average: 152, highGame: 220, highSeries: 510, handicap: 61, gender: "M", enteringAverage: 0 },
  { name: "R, Dan", team: "Bowl Yeller", games: 9, pins: 1301, average: 144, highGame: 166, highSeries: 437, handicap: 68, gender: "M", enteringAverage: 0 },
  { name: "R, Lauren", team: "Oh, That Team!", games: 18, pins: 2303, average: 127, highGame: 175, highSeries: 405, handicap: 83, gender: "W", enteringAverage: 123 }, // absent week 8
  { name: "Riggar, Andrew", team: "LANE LIZARDS", games: 9, pins: 1238, average: 137, highGame: 203, highSeries: 528, handicap: 74, gender: "M", enteringAverage: 0 },
  { name: "Robinson, James", team: "ITTY BITTY SPLITTY", games: 24, pins: 2428, average: 101, highGame: 157, highSeries: 379, handicap: 107, gender: "M", enteringAverage: 0 },
  { name: "Rossi, Jess", team: "BLAME IT ON THE LANE", games: 18, pins: 2369, average: 131, highGame: 184, highSeries: 461, handicap: 80, gender: "W", enteringAverage: 0 },
  { name: "Rossi, Pete", team: "PISTOL PETE'S", games: 9, pins: 1583, average: 175, highGame: 209, highSeries: 585, handicap: 40, gender: "M", enteringAverage: 0 },
  { name: "Russell, Mark", team: "LANE LIZARDS", games: 21, pins: 3626, average: 172, highGame: 236, highSeries: 551, handicap: 43, gender: "M", enteringAverage: 169 },
  { name: "S, David", team: "Minds In The Gutter", games: 18, pins: 3335, average: 185, highGame: 234, highSeries: 588, handicap: 31, gender: "M", enteringAverage: 174 },
  { name: "S, Todd", team: "DIRTY DAN AND THE PINHEADS", games: 3, pins: 352, average: 117, highGame: 133, highSeries: 352, handicap: 92, gender: "M", enteringAverage: 0 },
  { name: "Scordia, Steph", team: "BLAME IT ON THE LANE", games: 3, pins: 267, average: 89, highGame: 94, highSeries: 267, handicap: 117, gender: "W", enteringAverage: 0 },
  { name: "Shapiro, Zach", team: "Danger D!", games: 3, pins: 389, average: 129, highGame: 167, highSeries: 389, handicap: 81, gender: "M", enteringAverage: 0 },
  { name: "Smith, Brandon", team: "Bowl Strike Dracula", games: 21, pins: 3479, average: 165, highGame: 212, highSeries: 561, handicap: 49, gender: "M", enteringAverage: 165 },
  { name: "Snyder, Nicole", team: "BLAME IT ON THE LANE", games: 6, pins: 829, average: 138, highGame: 168, highSeries: 486, handicap: 73, gender: "W", enteringAverage: 0 },
  { name: "Spiller, Eric", team: "Tuesday Night Strikers", games: 12, pins: 1618, average: 134, highGame: 182, highSeries: 443, handicap: 77, gender: "M", enteringAverage: 145 }, // absent week 8
  { name: "Spivak, Daniel", team: "DIRTY DAN AND THE PINHEADS", games: 24, pins: 3689, average: 153, highGame: 185, highSeries: 513, handicap: 60, gender: "M", enteringAverage: 0 },
  { name: "Slusarezyk, Stephen", team: "ITTY BITTY SPLITTY", games: 3, pins: 539, average: 179, highGame: 191, highSeries: 539, handicap: 36, gender: "M", enteringAverage: 179 },
  { name: "Spenillo, Daniel", team: "DIRTY DAN AND THE PINHEADS", games: 3, pins: 428, average: 142, highGame: 145, highSeries: 428, handicap: 70, gender: "M", enteringAverage: 142 },
  { name: "Srogonick, Casey", team: "Bowl Strike Dracula", games: 18, pins: 3167, average: 175, highGame: 214, highSeries: 595, handicap: 40, gender: "M", enteringAverage: 179 },
  { name: "Sun, Andrew", team: "PISTOL PETE'S", games: 6, pins: 1283, average: 213, highGame: 235, highSeries: 643, handicap: 6, gender: "M", enteringAverage: 190 }, // absent week 8
  { name: "Termini, Jason", team: "LANE LIZARDS", games: 21, pins: 3682, average: 175, highGame: 278, highSeries: 651, handicap: 40, gender: "M", enteringAverage: 166 },
  { name: "Thomas, Andrew", team: "Bowl Strike Dracula", games: 21, pins: 3589, average: 170, highGame: 209, highSeries: 556, handicap: 45, gender: "M", enteringAverage: 160 },
  { name: "V, Andrew", team: "Bowl Yeller", games: 21, pins: 3295, average: 156, highGame: 233, highSeries: 556, handicap: 57, gender: "M", enteringAverage: 147 },
  { name: "Ventresca, Anthony", team: "Balls on Fire", games: 3, pins: 242, average: 80, highGame: 85, highSeries: 242, handicap: 126, gender: "M", enteringAverage: 0 },
  { name: "W, Lee", team: "Bowl Yeller", games: 6, pins: 719, average: 119, highGame: 165, highSeries: 412, handicap: 90, gender: "M", enteringAverage: 0 },
  { name: "Waldron, Evan", team: "Tuesday Night Strikers", games: 15, pins: 2382, average: 158, highGame: 202, highSeries: 542, handicap: 55, gender: "M", enteringAverage: 146 },
  { name: "Walker, Paul", team: "Tuesday Night Strikers", games: 15, pins: 2656, average: 177, highGame: 247, highSeries: 697, handicap: 38, gender: "M", enteringAverage: 162 },
  { name: "Woods, Jack", team: "Danger D!", games: 21, pins: 3010, average: 143, highGame: 189, highSeries: 501, handicap: 69, gender: "M", enteringAverage: 0 },
  { name: "Z, Darren", team: "Bowl Yeller", games: 3, pins: 240, average: 80, highGame: 109, highSeries: 240, handicap: 126, gender: "M", enteringAverage: 0 },
  { name: "Betit, Shaun", team: "Pin Pals", games: 3, pins: 659, average: 219, highGame: 225, highSeries: 659, handicap: 0, gender: "M", enteringAverage: 219 },
];

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

// Official rosters from LeagueSecretary.com team list
export const teamRosters: Record<string, string[]> = {
  "Tuesday Night Strikers": ["Baron, Dan", "Waldron, Evan", "Spiller, Eric", "Walker, Paul"],
  "BLAME IT ON THE LANE": ["Karam, Nikki", "Rossi, Jess", "Scordia, Steph", "Miller, Joan", "Finnerty, Erin", "Fogg, Melissa", "Gallagher, Mb", "Snyder, Nicole"],
  "Bowl Yeller": ["J, John", "M, Kerry", "V, Andrew", "W, Colleen", "W, Jake", "W, Lee", "Russell, Billy", "R, Dan", "Z, Darren"],
  "Danger D!": ["Woods, Jack", "Falcone, Dante", "Hong, James", "Blickwidel, Teddy", "Wixted, Claire", "Shapiro, Zach"],
  "Bowl Strike Dracula": ["Smith, Brandon", "Maduzia, Korynn", "Srogonick, Casey", "Thomas, Andrew"],
  "Bowlerinas": ["Vicki", "C, Frank", "L, John", "Breanne", "Shannon", "Marino, Sal"],
  "Minds In The Gutter": ["S, David", "R, Jack", "F, Steve", "F, Vince", "P, Nick", "M, Ty"],
  "Bowl Movements": ["Graves, Wes", "Boyle, Steve", "Londres, Dave", "Lenton, Colin", "Castro, Michele", "Castro, Bill", "Camerote, Josh"],
  "PISTOL PETE'S": ["Rossi, Pete", "Sun, Andrew", "Demauro, Derek", "Harris, Zach", "Jahmir", "Holmes, Byron", "K, Evan", "Jones, Tysheem", "Wilson, Shawn", "Internoscia, Brielle", "Los, King", "Mc, Ellen"],
  "Pin Pals": ["Dewey", "Ryan", "Todd", "Dan"],
  "Oh, That Team!": ["R, Lauren", "B, Bev", "B, Michelle", "C, Mario", "R, Nicole", "Ricky"],
  "ITTY BITTY SPLITTY": ["Robinson, James", "O'Malley, Bridget", "Demarco, Mike", "Dionne", "M, Maureen", "C, Tom", "Slusarezyk, Stephen"],
  "LANE LIZARDS": ["Russell, Mark", "Termini, Jason", "Lee, Joe", "Riggar, Andrew", "Hammond, Chris", "Maggs, Will", "Eisenhart, Sefton"],
  "Balls on Fire": ["Conroy, Victoria", "Conroy, Stacey", "Mastrobuoni, Joe", "Conroy, Dave", "Berry, Jackie", "Ventresca, Anthony", "Hope, Christine", "Rockey, Ethan", "Mcguire, Mike", "Mecca, Natalia", "Brown, Cleon", "Mcglone, Pat"],
  "DIRTY DAN AND THE PINHEADS": ["Spivak, Daniel", "Ezra", "Jacob", "Gabe", "Wesley", "Rebecca", "S, Todd", "Thibault"],
  "General Strike Now!": ["Adam", "John", "Chris", "Buzz", "K, Nick"],
};

// Real standings from LeagueSecretary.com (updated through Week 8)
export const standings: Team[] = [
  { rank: 1, num: 13, name: "LANE LIZARDS", wins: 22, losses: 10, pct: 0.69, avg: 641, pinfall: 13456, highGame: 769, highSeries: 2198 },
  { rank: 2, num: 8, name: "Bowl Movements", wins: 21, losses: 11, pct: 0.66, avg: 552, pinfall: 11581, highGame: 617, highSeries: 1798 },
  { rank: 3, num: 16, name: "General Strike Now!", wins: 21, losses: 11, pct: 0.66, avg: 477, pinfall: 10020, highGame: 564, highSeries: 1510 },
  { rank: 4, num: 10, name: "Pin Pals", wins: 19, losses: 13, pct: 0.59, avg: 615, pinfall: 12906, highGame: 719, highSeries: 2077 },
  { rank: 5, num: 2, name: "BLAME IT ON THE LANE", wins: 19, losses: 9, pct: 0.68, avg: 458, pinfall: 9609, highGame: 515, highSeries: 1496 },
  { rank: 6, num: 3, name: "Bowl Yeller", wins: 19, losses: 13, pct: 0.59, avg: 480, pinfall: 10090, highGame: 665, highSeries: 1823 },
  { rank: 7, num: 7, name: "Minds In The Gutter", wins: 17, losses: 15, pct: 0.53, avg: 614, pinfall: 12892, highGame: 701, highSeries: 1961 },
  { rank: 8, num: 4, name: "Danger D!", wins: 17, losses: 15, pct: 0.53, avg: 462, pinfall: 9705, highGame: 652, highSeries: 1795 },
  { rank: 9, num: 11, name: "Oh, That Team!", wins: 15, losses: 17, pct: 0.47, avg: 511, pinfall: 10733, highGame: 561, highSeries: 1586 },
  { rank: 10, num: 15, name: "DIRTY DAN AND THE PINHEADS", wins: 15.5, losses: 16.5, pct: 0.48, avg: 525, pinfall: 11032, highGame: 622, highSeries: 1681 },
  { rank: 11, num: 6, name: "Bowlerinas", wins: 13.5, losses: 18.5, pct: 0.42, avg: 458, pinfall: 9623, highGame: 635, highSeries: 1822 },
  { rank: 12, num: 5, name: "Bowl Strike Dracula", wins: 13, losses: 19, pct: 0.41, avg: 551, pinfall: 11575, highGame: 717, highSeries: 1999 },
  { rank: 13, num: 9, name: "PISTOL PETE'S", wins: 12, losses: 20, pct: 0.38, avg: 652, pinfall: 13701, highGame: 742, highSeries: 2202 },
  { rank: 14, num: 12, name: "ITTY BITTY SPLITTY", wins: 12, losses: 20, pct: 0.38, avg: 458, pinfall: 9609, highGame: 546, highSeries: 1520 },
  { rank: 15, num: 1, name: "Tuesday Night Strikers", wins: 8, losses: 24, pct: 0.25, avg: 364, pinfall: 7638, highGame: 690, highSeries: 1940 },
  { rank: 16, num: 14, name: "Balls on Fire", wins: 5, losses: 23, pct: 0.18, avg: 337, pinfall: 7080, highGame: 513, highSeries: 1437 },
];

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

export const schedule: WeekResult[] = [
  {
    // Real scores from Week 1 scoresheet PDF
    week: 1, date: "02/05/2026",
    matches: [
      { team1: "Tuesday Night Strikers", team2: "BLAME IT ON THE LANE", score1: 0, score2: 2499, wins1: 0, wins2: 4, lanes: [1, 2] as [number, number] },
      { team1: "Bowl Yeller", team2: "Danger D!", score1: 2501, score2: 0, wins1: 3, wins2: 0, lanes: [3, 4] as [number, number] },
      { team1: "Bowl Strike Dracula", team2: "Bowlerinas", score1: 2557, score2: 0, wins1: 4, wins2: 0, lanes: [5, 6] as [number, number] },
      { team1: "Minds In The Gutter", team2: "Bowl Movements", score1: 2562, score2: 2539, wins1: 3, wins2: 1, lanes: [7, 8] as [number, number] },
      { team1: "PISTOL PETE'S", team2: "Pin Pals", score1: 2508, score2: 2559, wins1: 1, wins2: 3, lanes: [9, 10] as [number, number] },
      { team1: "Oh, That Team!", team2: "ITTY BITTY SPLITTY", score1: 2463, score2: 2486, wins1: 2, wins2: 2, lanes: [11, 12] as [number, number] },
      { team1: "LANE LIZARDS", team2: "Balls on Fire", score1: 2563, score2: 2477, wins1: 4, wins2: 0, lanes: [13, 14] as [number, number] },
      { team1: "DIRTY DAN AND THE PINHEADS", team2: "General Strike Now!", score1: 2542, score2: 2482, wins1: 3, wins2: 1, lanes: [15, 16] as [number, number] },
    ],
  },
  {
    // Real scores from Week 2 scoresheet PDF
    week: 2, date: "02/12/2026",
    matches: [
      { team1: "LANE LIZARDS", team2: "ITTY BITTY SPLITTY", score1: 2521, score2: 2558, wins1: 1, wins2: 3, lanes: [1, 2] as [number, number] },
      { team1: "Bowlerinas", team2: "DIRTY DAN AND THE PINHEADS", score1: 2489, score2: 2383, wins1: 3.5, wins2: 0.5, lanes: [3, 4] as [number, number] },
      { team1: "Bowl Movements", team2: "Bowl Yeller", score1: 2632, score2: 0, wins1: 4, wins2: 0, lanes: [5, 6] as [number, number] },
      { team1: "Pin Pals", team2: "Bowl Strike Dracula", score1: 2518, score2: 2677, wins1: 1, wins2: 3, lanes: [7, 8] as [number, number] },
      { team1: "Oh, That Team!", team2: "Minds In The Gutter", score1: 2570, score2: 2618, wins1: 1, wins2: 3, lanes: [9, 10] as [number, number] },
      { team1: "PISTOL PETE'S", team2: "BLAME IT ON THE LANE", score1: 2635, score2: 2523, wins1: 3, wins2: 1, lanes: [11, 12] as [number, number] },
      { team1: "Tuesday Night Strikers", team2: "General Strike Now!", score1: 2603, score2: 2666, wins1: 1, wins2: 3, lanes: [13, 14] as [number, number] },
      { team1: "Danger D!", team2: "Balls on Fire", score1: 2526, score2: 1877, wins1: 4, wins2: 0, lanes: [15, 16] as [number, number] },
    ],
  },
  {
    // Real scores from Week 3 scoresheet PDF
    week: 3, date: "02/19/2026",
    matches: [
      { team1: "PISTOL PETE'S", team2: "General Strike Now!", score1: 2522, score2: 2653, wins1: 0, wins2: 4, lanes: [1, 2] as [number, number] },
      { team1: "Bowl Movements", team2: "Balls on Fire", score1: 2642, score2: 0, wins1: 4, wins2: 0, lanes: [3, 4] as [number, number] },
      { team1: "DIRTY DAN AND THE PINHEADS", team2: "Pin Pals", score1: 2620, score2: 2559, wins1: 3, wins2: 1, lanes: [5, 6] as [number, number] },
      { team1: "Oh, That Team!", team2: "Bowl Yeller", score1: 2461, score2: 2486, wins1: 1, wins2: 3, lanes: [7, 8] as [number, number] },
      { team1: "Bowl Strike Dracula", team2: "BLAME IT ON THE LANE", score1: 2551, score2: 2565, wins1: 1, wins2: 3, lanes: [9, 10] as [number, number] },
      { team1: "Minds In The Gutter", team2: "LANE LIZARDS", score1: 2553, score2: 2047, wins1: 4, wins2: 0, lanes: [11, 12] as [number, number] },
      { team1: "Danger D!", team2: "ITTY BITTY SPLITTY", score1: 2799, score2: 2631, wins1: 3, wins2: 1, lanes: [13, 14] as [number, number] },
      { team1: "Tuesday Night Strikers", team2: "Bowlerinas", score1: 2534, score2: 2503, wins1: 3, wins2: 1, lanes: [15, 16] as [number, number] },
    ],
  },
  {
    // Real scores from Week 4 scoresheet PDF
    week: 4, date: "02/26/2026",
    matches: [
      { team1: "Minds In The Gutter", team2: "Danger D!", score1: 2529, score2: 2549, wins1: 1, wins2: 3, lanes: [1, 2] as [number, number] },
      { team1: "Tuesday Night Strikers", team2: "Pin Pals", score1: 2570, score2: 2584, wins1: 2, wins2: 2, lanes: [3, 4] as [number, number] },
      { team1: "Balls on Fire", team2: "Oh, That Team!", score1: 2520, score2: 2528, wins1: 1, wins2: 3, lanes: [5, 6] as [number, number] },
      { team1: "DIRTY DAN AND THE PINHEADS", team2: "BLAME IT ON THE LANE", score1: 2465, score2: 2588, wins1: 0, wins2: 4, lanes: [7, 8] as [number, number] },
      { team1: "Bowl Yeller", team2: "LANE LIZARDS", score1: 2642, score2: 2725, wins1: 1, wins2: 3, lanes: [9, 10] as [number, number] },
      { team1: "General Strike Now!", team2: "Bowl Strike Dracula", score1: 2492, score2: 0, wins1: 4, wins2: 0, lanes: [11, 12] as [number, number] },
      { team1: "Bowlerinas", team2: "PISTOL PETE'S", score1: 2578, score2: 2587, wins1: 1, wins2: 3, lanes: [13, 14] as [number, number] },
      { team1: "ITTY BITTY SPLITTY", team2: "Bowl Movements", score1: 2407, score2: 2390, wins1: 3, wins2: 1, lanes: [15, 16] as [number, number] },
    ],
  },
  {
    // Real scores from Week 5 scoresheet PDF
    week: 5, date: "03/05/2026",
    matches: [
      { team1: "Bowl Movements", team2: "Bowl Strike Dracula", score1: 2635, score2: 2612, wins1: 3, wins2: 1, lanes: [1, 2] as [number, number] },
      { team1: "BLAME IT ON THE LANE", team2: "ITTY BITTY SPLITTY", score1: 2690, score2: 2503, wins1: 3, wins2: 1, lanes: [3, 4] as [number, number] },
      { team1: "LANE LIZARDS", team2: "Tuesday Night Strikers", score1: 2583, score2: 2580, wins1: 3, wins2: 1, lanes: [5, 6] as [number, number] },
      { team1: "Balls on Fire", team2: "General Strike Now!", score1: 2397, score2: 2535, wins1: 0, wins2: 4, lanes: [7, 8] as [number, number] },
      { team1: "DIRTY DAN AND THE PINHEADS", team2: "Danger D!", score1: 2509, score2: 2456, wins1: 3, wins2: 1, lanes: [9, 10] as [number, number] },
      { team1: "Bowlerinas", team2: "Bowl Yeller", score1: 2655, score2: 2714, wins1: 1, wins2: 3, lanes: [11, 12] as [number, number] },
      { team1: "Pin Pals", team2: "Minds In The Gutter", score1: 2512, score2: 2387, wins1: 3, wins2: 1, lanes: [13, 14] as [number, number] },
      { team1: "PISTOL PETE'S", team2: "Oh, That Team!", score1: 2372, score2: 2536, wins1: 1, wins2: 3, lanes: [15, 16] as [number, number] },
    ],
  },
  {
    // Real scores from Week 6 scoresheet PDF
    week: 6, date: "03/12/2026",
    matches: [
      { team1: "Pin Pals", team2: "Bowl Yeller", score1: 2542, score2: 2639, wins1: 1, wins2: 3, lanes: [1, 2] as [number, number] },
      { team1: "PISTOL PETE'S", team2: "LANE LIZARDS", score1: 2404, score2: 2651, wins1: 0, wins2: 4, lanes: [3, 4] as [number, number] },
      { team1: "ITTY BITTY SPLITTY", team2: "General Strike Now!", score1: 2584, score2: 2588, wins1: 1, wins2: 3, lanes: [5, 6] as [number, number] },
      { team1: "Danger D!", team2: "Tuesday Night Strikers", score1: 2716, score2: 0, wins1: 4, wins2: 0, lanes: [7, 8] as [number, number] },
      { team1: "Bowlerinas", team2: "Balls on Fire", score1: 2644, score2: 2688, wins1: 1, wins2: 3, lanes: [9, 10] as [number, number] },
      { team1: "DIRTY DAN AND THE PINHEADS", team2: "Bowl Movements", score1: 2637, score2: 2566, wins1: 2, wins2: 2, lanes: [11, 12] as [number, number] },
      { team1: "Bowl Strike Dracula", team2: "Oh, That Team!", score1: 2607, score2: 2521, wins1: 3, wins2: 1, lanes: [13, 14] as [number, number] },
      { team1: "BLAME IT ON THE LANE", team2: "Minds In The Gutter", score1: 2364, score2: 2311, wins1: 3, wins2: 1, lanes: [15, 16] as [number, number] },
    ],
  },
  {
    // Real scores from Week 7 scoresheet PDF
    week: 7, date: "03/19/2026",
    matches: [
      { team1: "DIRTY DAN AND THE PINHEADS", team2: "Oh, That Team!", score1: 2569, score2: 2527, wins1: 3, wins2: 1, lanes: [1, 2] as [number, number] },
      { team1: "Minds In The Gutter", team2: "General Strike Now!", score1: 2585, score2: 2482, wins1: 3, wins2: 1, lanes: [3, 4] as [number, number] },
      { team1: "Danger D!", team2: "PISTOL PETE'S", score1: 2440, score2: 2660, wins1: 0, wins2: 4, lanes: [5, 6] as [number, number] },
      { team1: "ITTY BITTY SPLITTY", team2: "Bowlerinas", score1: 2657, score2: 2658, wins1: 1, wins2: 3, lanes: [7, 8] as [number, number] },
      { team1: "Bowl Movements", team2: "Tuesday Night Strikers", score1: 2423, score2: 0, wins1: 2, wins2: 0, lanes: [9, 10] as [number, number] },
      { team1: "Pin Pals", team2: "Balls on Fire", score1: 2678, score2: 2462, wins1: 4, wins2: 0, lanes: [11, 12] as [number, number] },
      { team1: "Bowl Yeller", team2: "BLAME IT ON THE LANE", score1: 2667, score2: 2561, wins1: 3, wins2: 1, lanes: [13, 14] as [number, number] },
      { team1: "LANE LIZARDS", team2: "Bowl Strike Dracula", score1: 2584, score2: 2438, wins1: 4, wins2: 0, lanes: [15, 16] as [number, number] },
    ],
  },
  {
    // Real scores from Week 8 scoresheet PDF
    week: 8, date: "03/26/2026",
    matches: [
      { team1: "Bowlerinas", team2: "Minds In The Gutter", score1: 2558, score2: 2498, wins1: 3, wins2: 1, lanes: [1, 2] as [number, number] },
      { team1: "Oh, That Team!", team2: "Tuesday Night Strikers", score1: 2434, score2: 2373, wins1: 3, wins2: 1, lanes: [3, 4] as [number, number] },
      { team1: "BLAME IT ON THE LANE", team2: "Balls on Fire", score1: 0, score2: 0, wins1: 0, wins2: 0, lanes: [5, 6] as [number, number] },
      { team1: "Bowl Movements", team2: "PISTOL PETE'S", score1: 2623, score2: 2484, wins1: 4, wins2: 0, lanes: [7, 8] as [number, number] },
      { team1: "Pin Pals", team2: "ITTY BITTY SPLITTY", score1: 2611, score2: 2495, wins1: 4, wins2: 0, lanes: [9, 10] as [number, number] },
      { team1: "Bowl Strike Dracula", team2: "Danger D!", score1: 2471, score2: 2581, wins1: 1, wins2: 3, lanes: [11, 12] as [number, number] },
      { team1: "DIRTY DAN AND THE PINHEADS", team2: "LANE LIZARDS", score1: 2565, score2: 2792, wins1: 1, wins2: 3, lanes: [13, 14] as [number, number] },
      { team1: "General Strike Now!", team2: "Bowl Yeller", score1: 2444, score2: 2475, wins1: 1, wins2: 3, lanes: [15, 16] as [number, number] },
    ],
  },
  {
    week: 9, date: "04/02/2026",
    matches: [
      { team1: "Danger D!", team2: "LANE LIZARDS", score1: 0, score2: 0, wins1: 0, wins2: 0, lanes: [1, 2] as [number, number] },
      { team1: "DIRTY DAN AND THE PINHEADS", team2: "Bowl Yeller", score1: 0, score2: 0, wins1: 0, wins2: 0, lanes: [3, 4] as [number, number] },
      { team1: "Oh, That Team!", team2: "Bowl Movements", score1: 0, score2: 0, wins1: 0, wins2: 0, lanes: [5, 6] as [number, number] },
      { team1: "Tuesday Night Strikers", team2: "Balls on Fire", score1: 0, score2: 0, wins1: 0, wins2: 0, lanes: [7, 8] as [number, number] },
      { team1: "BLAME IT ON THE LANE", team2: "General Strike Now!", score1: 0, score2: 0, wins1: 0, wins2: 0, lanes: [9, 10] as [number, number] },
      { team1: "ITTY BITTY SPLITTY", team2: "PISTOL PETE'S", score1: 0, score2: 0, wins1: 0, wins2: 0, lanes: [11, 12] as [number, number] },
      { team1: "Minds In The Gutter", team2: "Bowl Strike Dracula", score1: 0, score2: 0, wins1: 0, wins2: 0, lanes: [13, 14] as [number, number] },
      { team1: "Bowlerinas", team2: "Pin Pals", score1: 0, score2: 0, wins1: 0, wins2: 0, lanes: [15, 16] as [number, number] },
    ],
  },
  {
    week: 10, date: "04/09/2026",
    matches: [
      { team1: "ITTY BITTY SPLITTY", team2: "Tuesday Night Strikers", score1: 0, score2: 0, wins1: 0, wins2: 0, lanes: [1, 2] as [number, number] },
      { team1: "Pin Pals", team2: "Bowl Movements", score1: 0, score2: 0, wins1: 0, wins2: 0, lanes: [3, 4] as [number, number] },
      { team1: "Bowl Yeller", team2: "Bowl Strike Dracula", score1: 0, score2: 0, wins1: 0, wins2: 0, lanes: [5, 6] as [number, number] },
      { team1: "BLAME IT ON THE LANE", team2: "Danger D!", score1: 0, score2: 0, wins1: 0, wins2: 0, lanes: [7, 8] as [number, number] },
      { team1: "Balls on Fire", team2: "PISTOL PETE'S", score1: 0, score2: 0, wins1: 0, wins2: 0, lanes: [9, 10] as [number, number] },
      { team1: "LANE LIZARDS", team2: "General Strike Now!", score1: 0, score2: 0, wins1: 0, wins2: 0, lanes: [11, 12] as [number, number] },
      { team1: "Oh, That Team!", team2: "Bowlerinas", score1: 0, score2: 0, wins1: 0, wins2: 0, lanes: [13, 14] as [number, number] },
      { team1: "Minds In The Gutter", team2: "DIRTY DAN AND THE PINHEADS", score1: 0, score2: 0, wins1: 0, wins2: 0, lanes: [15, 16] as [number, number] },
    ],
  },
  {
    week: 11, date: "04/16/2026",
    matches: [
      { team1: "Oh, That Team!", team2: "Pin Pals", score1: 0, score2: 0, wins1: 0, wins2: 0, lanes: [1, 2] as [number, number] },
      { team1: "LANE LIZARDS", team2: "BLAME IT ON THE LANE", score1: 0, score2: 0, wins1: 0, wins2: 0, lanes: [3, 4] as [number, number] },
      { team1: "General Strike Now!", team2: "Danger D!", score1: 0, score2: 0, wins1: 0, wins2: 0, lanes: [5, 6] as [number, number] },
      { team1: "Bowl Strike Dracula", team2: "DIRTY DAN AND THE PINHEADS", score1: 0, score2: 0, wins1: 0, wins2: 0, lanes: [7, 8] as [number, number] },
      { team1: "Minds In The Gutter", team2: "Bowl Yeller", score1: 0, score2: 0, wins1: 0, wins2: 0, lanes: [9, 10] as [number, number] },
      { team1: "Bowl Movements", team2: "Bowlerinas", score1: 0, score2: 0, wins1: 0, wins2: 0, lanes: [11, 12] as [number, number] },
      { team1: "PISTOL PETE'S", team2: "Tuesday Night Strikers", score1: 0, score2: 0, wins1: 0, wins2: 0, lanes: [13, 14] as [number, number] },
      { team1: "Balls on Fire", team2: "ITTY BITTY SPLITTY", score1: 0, score2: 0, wins1: 0, wins2: 0, lanes: [15, 16] as [number, number] },
    ],
  },
  {
    week: 12, date: "04/23/2026",
    matches: [], // Position Round - matchups TBD based on standings
  },
];

// Derived stats from real bowler data
const activeBowlers = bowlers.filter(b => b.games >= 9);

export const topBowlers = {
  highAverage: activeBowlers.slice().sort((a, b) => b.average - a.average).slice(0, 20),
  highGame: bowlers.slice().sort((a, b) => b.highGame - a.highGame).slice(0, 20),
  highSeries: bowlers.slice().sort((a, b) => b.highSeries - a.highSeries).slice(0, 20),
  mostImproved: bowlers
    .filter(b => b.enteringAverage > 0 && b.games >= 9 && b.average > b.enteringAverage)
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

export const navItems = [
  { label: "Dashboard", href: "/" },
  { label: "Schedule", href: "/schedule" },
  { label: "Standings", href: "/standings" },
  { label: "Teams", href: "/teams" },
  { label: "Bowlers", href: "/bowlers" },
  { label: "Statistics", href: "/statistics" },
];
