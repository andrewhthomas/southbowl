export const league = {
  name: "Thirsty Thursday Winter 2026",
  center: "Southbowl",
  address: "19 E Oregon Ave, Philadelphia, PA",
  phone: "(215) 389-2695",
  day: "Thursday",
  time: "6:30 PM",
  startDate: "02/05/2026",
  lastUpdated: "04/23/2026",
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
  { name: "Adam", team: "General Strike Now!", games: 36, pins: 4827, average: 134, highGame: 204, highSeries: 464, handicap: 77, gender: "M", enteringAverage: 0 },
  { name: "Breanne", team: "Bowlerinas", games: 12, pins: 1641, average: 136, highGame: 174, highSeries: 468, handicap: 75, gender: "W", enteringAverage: 144 },
  { name: "Buzz", team: "General Strike Now!", games: 33, pins: 3611, average: 109, highGame: 145, highSeries: 358, handicap: 99, gender: "M", enteringAverage: 0 },
  { name: "Chris", team: "General Strike Now!", games: 33, pins: 3842, average: 116, highGame: 161, highSeries: 386, handicap: 93, gender: "M", enteringAverage: 0 },
  { name: "Dan", team: "Pin Pals", games: 24, pins: 2823, average: 117, highGame: 158, highSeries: 408, handicap: 92, gender: "M", enteringAverage: 123 },
  { name: "Dewey", team: "Pin Pals", games: 30, pins: 4802, average: 160, highGame: 216, highSeries: 524, handicap: 54, gender: "M", enteringAverage: 157 },
  { name: "Dionne", team: "ITTY BITTY SPLITTY", games: 27, pins: 3053, average: 113, highGame: 186, highSeries: 408, handicap: 96, gender: "M", enteringAverage: 0 },
  { name: "Ezra", team: "DIRTY DAN AND THE PINHEADS", games: 36, pins: 3798, average: 105, highGame: 151, highSeries: 394, handicap: 103, gender: "W", enteringAverage: 0 },
  { name: "Gabe", team: "DIRTY DAN AND THE PINHEADS", games: 9, pins: 1167, average: 129, highGame: 171, highSeries: 428, handicap: 81, gender: "M", enteringAverage: 0 },
  { name: "Jacob", team: "DIRTY DAN AND THE PINHEADS", games: 36, pins: 5196, average: 144, highGame: 224, highSeries: 498, handicap: 68, gender: "M", enteringAverage: 0 },
  { name: "Jahmir", team: "PISTOL PETE'S", games: 9, pins: 1573, average: 174, highGame: 211, highSeries: 573, handicap: 41, gender: "M", enteringAverage: 0 },
  { name: "John", team: "General Strike Now!", games: 33, pins: 3901, average: 118, highGame: 173, highSeries: 425, handicap: 91, gender: "M", enteringAverage: 0 },
  { name: "L Train", team: "DIRTY DAN AND THE PINHEADS", games: 3, pins: 318, average: 106, highGame: 140, highSeries: 318, handicap: 102, gender: "M", enteringAverage: 0 },
  { name: "Rebecca", team: "DIRTY DAN AND THE PINHEADS", games: 8, pins: 786, average: 98, highGame: 106, highSeries: 310, handicap: 109, gender: "W", enteringAverage: 0 },
  { name: "Ricky", team: "Oh, That Team!", games: 3, pins: 291, average: 97, highGame: 113, highSeries: 291, handicap: 110, gender: "M", enteringAverage: 0 },
  { name: "Ryan", team: "Pin Pals", games: 27, pins: 5231, average: 193, highGame: 245, highSeries: 639, handicap: 24, gender: "M", enteringAverage: 170 },
  { name: "Shannon", team: "Bowlerinas", games: 3, pins: 477, average: 159, highGame: 161, highSeries: 477, handicap: 54, gender: "W", enteringAverage: 0 },
  { name: "Thibault", team: "DIRTY DAN AND THE PINHEADS", games: 1, pins: 99, average: 99, highGame: 99, highSeries: 99, handicap: 108, gender: "M", enteringAverage: 0 },
  { name: "Todd", team: "Pin Pals", games: 36, pins: 5550, average: 154, highGame: 211, highSeries: 519, handicap: 59, gender: "M", enteringAverage: 149 },
  { name: "Vicki", team: "Bowlerinas", games: 33, pins: 4188, average: 126, highGame: 175, highSeries: 457, handicap: 84, gender: "W", enteringAverage: 130 },
  { name: "Wesley", team: "DIRTY DAN AND THE PINHEADS", games: 9, pins: 1159, average: 128, highGame: 164, highSeries: 430, handicap: 82, gender: "M", enteringAverage: 0 },
  { name: "B, Bev", team: "Oh, That Team!", games: 30, pins: 4562, average: 152, highGame: 205, highSeries: 533, handicap: 61, gender: "W", enteringAverage: 158 },
  { name: "B, Michelle", team: "Oh, That Team!", games: 27, pins: 3612, average: 133, highGame: 195, highSeries: 456, handicap: 78, gender: "W", enteringAverage: 131 },
  { name: "Baron, Dan", team: "Tuesday Night Strikers", games: 27, pins: 4253, average: 157, highGame: 212, highSeries: 537, handicap: 56, gender: "M", enteringAverage: 178 },
  { name: "Berry, Jackie", team: "Balls on Fire", games: 3, pins: 160, average: 53, highGame: 62, highSeries: 160, handicap: 150, gender: "W", enteringAverage: 0 },
  { name: "Blickwidel, Teddy", team: "Danger D!", games: 30, pins: 4030, average: 134, highGame: 187, highSeries: 488, handicap: 77, gender: "M", enteringAverage: 0 },
  { name: "Boyle, Steve", team: "Bowl Movements", games: 21, pins: 2973, average: 141, highGame: 219, highSeries: 478, handicap: 71, gender: "M", enteringAverage: 0 },
  { name: "Brown, Cleon", team: "Balls on Fire", games: 3, pins: 315, average: 105, highGame: 128, highSeries: 315, handicap: 103, gender: "M", enteringAverage: 0 },
  { name: "C, Frank", team: "Bowlerinas", games: 27, pins: 3205, average: 118, highGame: 147, highSeries: 417, handicap: 91, gender: "M", enteringAverage: 121 },
  { name: "C, Mario", team: "Oh, That Team!", games: 32, pins: 3906, average: 122, highGame: 178, highSeries: 452, handicap: 88, gender: "M", enteringAverage: 0 },
  { name: "C, Tom", team: "ITTY BITTY SPLITTY", games: 6, pins: 744, average: 124, highGame: 128, highSeries: 374, handicap: 86, gender: "M", enteringAverage: 0 },
  { name: "Castro, Bill", team: "Bowl Movements", games: 27, pins: 4647, average: 172, highGame: 256, highSeries: 579, handicap: 43, gender: "M", enteringAverage: 173 },
  { name: "Castro, Michele", team: "Bowl Movements", games: 18, pins: 1986, average: 110, highGame: 152, highSeries: 391, handicap: 99, gender: "W", enteringAverage: 0 },
  { name: "Conroy, Dave", team: "Balls on Fire", games: 9, pins: 822, average: 91, highGame: 121, highSeries: 311, handicap: 116, gender: "M", enteringAverage: 0 },
  { name: "Conroy, Stacey", team: "Balls on Fire", games: 6, pins: 517, average: 86, highGame: 122, highSeries: 292, handicap: 120, gender: "W", enteringAverage: 0 },
  { name: "Conroy, Victoria", team: "Balls on Fire", games: 15, pins: 1058, average: 70, highGame: 88, highSeries: 226, handicap: 135, gender: "W", enteringAverage: 0 },
  { name: "Demarco, Mike", team: "ITTY BITTY SPLITTY", games: 29, pins: 4437, average: 153, highGame: 215, highSeries: 554, handicap: 60, gender: "M", enteringAverage: 0 },
  { name: "Demauro, Derek", team: "PISTOL PETE'S", games: 27, pins: 4946, average: 183, highGame: 223, highSeries: 636, handicap: 33, gender: "M", enteringAverage: 171 },
  { name: "Eisenhart, Sefton", team: "LANE LIZARDS", games: 6, pins: 669, average: 111, highGame: 144, highSeries: 346, handicap: 98, gender: "M", enteringAverage: 0 },
  { name: "F, Vince", team: "Minds In The Gutter", games: 32, pins: 5002, average: 156, highGame: 234, highSeries: 597, handicap: 57, gender: "M", enteringAverage: 167 },
  { name: "Falcone, Dante", team: "Danger D!", games: 30, pins: 3359, average: 111, highGame: 154, highSeries: 386, handicap: 98, gender: "M", enteringAverage: 0 },
  { name: "Finnerty, Erin", team: "BLAME IT ON THE LANE", games: 24, pins: 2720, average: 113, highGame: 147, highSeries: 423, handicap: 96, gender: "W", enteringAverage: 0 },
  { name: "Fogg, Melissa", team: "BLAME IT ON THE LANE", games: 18, pins: 1515, average: 84, highGame: 114, highSeries: 282, handicap: 122, gender: "W", enteringAverage: 0 },
  { name: "Gallagher, Mb", team: "BLAME IT ON THE LANE", games: 3, pins: 243, average: 81, highGame: 89, highSeries: 243, handicap: 125, gender: "W", enteringAverage: 0 },
  { name: "Graves, Wes", team: "Bowl Movements", games: 33, pins: 4243, average: 128, highGame: 170, highSeries: 442, handicap: 82, gender: "M", enteringAverage: 136 },
  { name: "Hammond, Chris", team: "LANE LIZARDS", games: 24, pins: 3561, average: 148, highGame: 267, highSeries: 575, handicap: 64, gender: "M", enteringAverage: 0 },
  { name: "Harris, Zach", team: "PISTOL PETE'S", games: 33, pins: 6468, average: 196, highGame: 277, highSeries: 741, handicap: 21, gender: "M", enteringAverage: 216 },
  { name: "Hong, James", team: "Danger D!", games: 27, pins: 4030, average: 149, highGame: 225, highSeries: 526, handicap: 63, gender: "M", enteringAverage: 0 },
  { name: "Hong, Martin", team: "Danger D!", games: 3, pins: 510, average: 170, highGame: 181, highSeries: 510, handicap: 45, gender: "M", enteringAverage: 0 },
  { name: "J, John", team: "Bowl Yeller", games: 33, pins: 5079, average: 153, highGame: 209, highSeries: 539, handicap: 60, gender: "M", enteringAverage: 152 },
  { name: "K, Nick", team: "General Strike Now!", games: 3, pins: 370, average: 123, highGame: 137, highSeries: 370, handicap: 87, gender: "M", enteringAverage: 0 },
  { name: "Karam, Nikki", team: "BLAME IT ON THE LANE", games: 18, pins: 2365, average: 131, highGame: 198, highSeries: 453, handicap: 80, gender: "W", enteringAverage: 0 },
  { name: "L, John", team: "Bowlerinas", games: 15, pins: 2415, average: 161, highGame: 218, highSeries: 571, handicap: 53, gender: "M", enteringAverage: 0 },
  { name: "Lee, Joe", team: "LANE LIZARDS", games: 36, pins: 6667, average: 185, highGame: 246, highSeries: 658, handicap: 31, gender: "M", enteringAverage: 175 },
  { name: "Lenton, Colin", team: "Bowl Movements", games: 21, pins: 3158, average: 150, highGame: 221, highSeries: 559, handicap: 63, gender: "M", enteringAverage: 167 },
  { name: "Londres, Dave", team: "Bowl Movements", games: 21, pins: 3000, average: 142, highGame: 173, highSeries: 474, handicap: 70, gender: "M", enteringAverage: 131 },
  { name: "Los, King", team: "PISTOL PETE'S", games: 3, pins: 614, average: 204, highGame: 252, highSeries: 614, handicap: 14, gender: "M", enteringAverage: 0 },
  { name: "M, Kerry", team: "Bowl Yeller", games: 27, pins: 3421, average: 126, highGame: 166, highSeries: 451, handicap: 84, gender: "M", enteringAverage: 131 },
  { name: "M, Maureen", team: "ITTY BITTY SPLITTY", games: 3, pins: 220, average: 73, highGame: 80, highSeries: 220, handicap: 132, gender: "W", enteringAverage: 0 },
  { name: "M, Ty", team: "Minds In The Gutter", games: 36, pins: 4549, average: 126, highGame: 165, highSeries: 431, handicap: 84, gender: "M", enteringAverage: 0 },
  { name: "Maduzia, Korynn", team: "Bowl Strike Dracula", games: 33, pins: 4083, average: 123, highGame: 172, highSeries: 447, handicap: 87, gender: "W", enteringAverage: 117 },
  { name: "Maggs, Will", team: "LANE LIZARDS", games: 3, pins: 258, average: 86, highGame: 110, highSeries: 258, handicap: 120, gender: "M", enteringAverage: 0 },
  { name: "Marino, Sal", team: "Bowlerinas", games: 18, pins: 3004, average: 166, highGame: 200, highSeries: 552, handicap: 48, gender: "M", enteringAverage: 182 },
  { name: "Mastrobuoni, Joe", team: "Balls on Fire", games: 24, pins: 2964, average: 123, highGame: 161, highSeries: 416, handicap: 87, gender: "M", enteringAverage: 0 },
  { name: "Mc, Ellen", team: "PISTOL PETE'S", games: 30, pins: 2746, average: 91, highGame: 142, highSeries: 372, handicap: 116, gender: "W", enteringAverage: 0 },
  { name: "Mcglone, Pat", team: "Balls on Fire", games: 15, pins: 2362, average: 157, highGame: 192, highSeries: 515, handicap: 56, gender: "M", enteringAverage: 0 },
  { name: "Mcguire, Mike", team: "Balls on Fire", games: 3, pins: 355, average: 118, highGame: 131, highSeries: 355, handicap: 91, gender: "M", enteringAverage: 0 },
  { name: "MK", team: "ITTY BITTY SPLITTY", games: 3, pins: 250, average: 83, highGame: 96, highSeries: 250, handicap: 123, gender: "M", enteringAverage: 83 },
  { name: "Mecca, Natalia", team: "Balls on Fire", games: 2, pins: 173, average: 86, highGame: 100, highSeries: 173, handicap: 120, gender: "W", enteringAverage: 0 },
  { name: "Miller, Joan", team: "BLAME IT ON THE LANE", games: 3, pins: 301, average: 100, highGame: 107, highSeries: 301, handicap: 108, gender: "W", enteringAverage: 0 },
  { name: "O'Malley, Bridget", team: "ITTY BITTY SPLITTY", games: 36, pins: 3493, average: 97, highGame: 177, highSeries: 381, handicap: 110, gender: "W", enteringAverage: 0 },
  { name: "P, Nick", team: "Minds In The Gutter", games: 36, pins: 5488, average: 152, highGame: 220, highSeries: 514, handicap: 61, gender: "M", enteringAverage: 0 },
  { name: "R, Dan", team: "Bowl Yeller", games: 12, pins: 1759, average: 146, highGame: 169, highSeries: 458, handicap: 66, gender: "M", enteringAverage: 0 },
  { name: "R, Lauren", team: "Oh, That Team!", games: 27, pins: 3496, average: 129, highGame: 175, highSeries: 413, handicap: 81, gender: "W", enteringAverage: 123 },
  { name: "Riggar, Andrew", team: "LANE LIZARDS", games: 9, pins: 1238, average: 137, highGame: 203, highSeries: 528, handicap: 74, gender: "M", enteringAverage: 0 },
  { name: "Robinson, James", team: "ITTY BITTY SPLITTY", games: 36, pins: 3866, average: 107, highGame: 164, highSeries: 383, handicap: 101, gender: "M", enteringAverage: 0 },
  { name: "Rockey, Ethan", team: "Balls on Fire", games: 2, pins: 140, average: 70, highGame: 79, highSeries: 140, handicap: 135, gender: "M", enteringAverage: 0 },
  { name: "Rossi, Jess", team: "BLAME IT ON THE LANE", games: 21, pins: 2798, average: 133, highGame: 184, highSeries: 461, handicap: 78, gender: "W", enteringAverage: 0 },
  { name: "Rossi, Pete", team: "PISTOL PETE'S", games: 21, pins: 4019, average: 191, highGame: 265, highSeries: 697, handicap: 26, gender: "M", enteringAverage: 0 },
  { name: "Russell, Mark", team: "LANE LIZARDS", games: 30, pins: 5233, average: 174, highGame: 236, highSeries: 589, handicap: 41, gender: "M", enteringAverage: 169 },
  { name: "S, David", team: "Minds In The Gutter", games: 30, pins: 5643, average: 188, highGame: 254, highSeries: 645, handicap: 28, gender: "M", enteringAverage: 174 },
  { name: "S, Todd", team: "DIRTY DAN AND THE PINHEADS", games: 3, pins: 352, average: 117, highGame: 133, highSeries: 352, handicap: 92, gender: "M", enteringAverage: 0 },
  { name: "Scordia, Steph", team: "BLAME IT ON THE LANE", games: 6, pins: 525, average: 87, highGame: 101, highSeries: 267, handicap: 119, gender: "W", enteringAverage: 0 },
  { name: "Shapiro, Zach", team: "Danger D!", games: 3, pins: 389, average: 129, highGame: 167, highSeries: 389, handicap: 81, gender: "M", enteringAverage: 0 },
  { name: "Smith, Brandon", team: "Bowl Strike Dracula", games: 30, pins: 4950, average: 165, highGame: 212, highSeries: 561, handicap: 49, gender: "M", enteringAverage: 165 },
  { name: "Snyder, Nicole", team: "BLAME IT ON THE LANE", games: 6, pins: 829, average: 138, highGame: 168, highSeries: 486, handicap: 73, gender: "W", enteringAverage: 0 },
  { name: "Spiller, Eric", team: "Tuesday Night Strikers", games: 24, pins: 3408, average: 142, highGame: 247, highSeries: 583, handicap: 70, gender: "M", enteringAverage: 145 },
  { name: "Spivak, Daniel", team: "DIRTY DAN AND THE PINHEADS", games: 33, pins: 5117, average: 155, highGame: 224, highSeries: 526, handicap: 58, gender: "M", enteringAverage: 0 },
  { name: "Slusarezyk, Stephen", team: "ITTY BITTY SPLITTY", games: 3, pins: 539, average: 179, highGame: 191, highSeries: 539, handicap: 36, gender: "M", enteringAverage: 179 },
  { name: "Spenillo, Daniel", team: "DIRTY DAN AND THE PINHEADS", games: 3, pins: 428, average: 142, highGame: 145, highSeries: 428, handicap: 70, gender: "M", enteringAverage: 142 },
  { name: "Srogonick, Casey", team: "Bowl Strike Dracula", games: 30, pins: 5423, average: 180, highGame: 232, highSeries: 618, handicap: 36, gender: "M", enteringAverage: 179 },
  { name: "Sun, Andrew", team: "PISTOL PETE'S", games: 9, pins: 1801, average: 200, highGame: 235, highSeries: 643, handicap: 18, gender: "M", enteringAverage: 190 },
  { name: "Termini, Jason", team: "LANE LIZARDS", games: 33, pins: 5692, average: 172, highGame: 278, highSeries: 651, handicap: 43, gender: "M", enteringAverage: 166 },
  { name: "Thomas, Andrew", team: "Bowl Strike Dracula", games: 27, pins: 4723, average: 174, highGame: 209, highSeries: 591, handicap: 41, gender: "M", enteringAverage: 160 },
  { name: "V, Andrew", team: "Bowl Yeller", games: 33, pins: 5112, average: 154, highGame: 233, highSeries: 556, handicap: 59, gender: "M", enteringAverage: 147 },
  { name: "Ventresca, Anthony", team: "Balls on Fire", games: 3, pins: 242, average: 80, highGame: 85, highSeries: 242, handicap: 126, gender: "M", enteringAverage: 0 },
  { name: "W, Colleen", team: "Bowl Yeller", games: 6, pins: 739, average: 123, highGame: 138, highSeries: 376, handicap: 87, gender: "W", enteringAverage: 0 },
  { name: "W, Lee", team: "Bowl Yeller", games: 6, pins: 719, average: 119, highGame: 165, highSeries: 412, handicap: 90, gender: "M", enteringAverage: 0 },
  { name: "Waldron, Evan", team: "Tuesday Night Strikers", games: 27, pins: 4205, average: 155, highGame: 202, highSeries: 542, handicap: 58, gender: "M", enteringAverage: 146 },
  { name: "Walker, Paul", team: "Tuesday Night Strikers", games: 27, pins: 4638, average: 171, highGame: 247, highSeries: 697, handicap: 44, gender: "M", enteringAverage: 162 },
  { name: "Woods, Jack", team: "Danger D!", games: 33, pins: 4958, average: 150, highGame: 204, highSeries: 534, handicap: 63, gender: "M", enteringAverage: 0 },
  { name: "Z, Darren", team: "Bowl Yeller", games: 6, pins: 448, average: 74, highGame: 109, highSeries: 240, handicap: 131, gender: "M", enteringAverage: 0 },
  { name: "Betit, Shaun", team: "Pin Pals", games: 3, pins: 659, average: 219, highGame: 225, highSeries: 659, handicap: 0, gender: "M", enteringAverage: 219 },
  { name: "R, Jack", team: "Minds In The Gutter", games: 3, pins: 597, average: 199, highGame: 205, highSeries: 597, handicap: 18, gender: "M", enteringAverage: 0 },
  { name: "W, Jake", team: "Bowl Yeller", games: 3, pins: 322, average: 107, highGame: 134, highSeries: 322, handicap: 101, gender: "M", enteringAverage: 0 },
  { name: "Camp, Sam", team: "Danger D!", games: 3, pins: 334, average: 111, highGame: 127, highSeries: 334, handicap: 98, gender: "M", enteringAverage: 0 },
  { name: "Chambers, Alex", team: "Bowl Strike Dracula", games: 3, pins: 465, average: 155, highGame: 168, highSeries: 465, handicap: 58, gender: "M", enteringAverage: 155 },
  { name: "Browsh, Alexis", team: "Bowl Strike Dracula", games: 3, pins: 290, average: 96, highGame: 104, highSeries: 290, handicap: 111, gender: "W", enteringAverage: 96 },
  { name: "Dave", team: "Bowlerinas", games: 3, pins: 424, average: 141, highGame: 149, highSeries: 424, handicap: 71, gender: "M", enteringAverage: 141 },
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
  "Danger D!": ["Woods, Jack", "Falcone, Dante", "Hong, James", "Hong, Martin", "Blickwidel, Teddy", "Wixted, Claire", "Shapiro, Zach", "Camp, Sam"],
  "Bowl Strike Dracula": ["Smith, Brandon", "Maduzia, Korynn", "Srogonick, Casey", "Thomas, Andrew", "Chambers, Alex", "Browsh, Alexis"],
  "Bowlerinas": ["Vicki", "C, Frank", "L, John", "Breanne", "Shannon", "Marino, Sal", "Dave"],
  "Minds In The Gutter": ["S, David", "R, Jack", "F, Steve", "F, Vince", "P, Nick", "M, Ty"],
  "Bowl Movements": ["Graves, Wes", "Boyle, Steve", "Londres, Dave", "Lenton, Colin", "Castro, Michele", "Castro, Bill", "Camerote, Josh"],
  "PISTOL PETE'S": ["Rossi, Pete", "Sun, Andrew", "Demauro, Derek", "Harris, Zach", "Jahmir", "Holmes, Byron", "K, Evan", "Jones, Tysheem", "Wilson, Shawn", "Internoscia, Brielle", "Los, King", "Mc, Ellen"],
  "Pin Pals": ["Dewey", "Ryan", "Todd", "Dan"],
  "Oh, That Team!": ["R, Lauren", "B, Bev", "B, Michelle", "C, Mario", "R, Nicole", "Ricky"],
  "ITTY BITTY SPLITTY": ["Robinson, James", "O'Malley, Bridget", "Demarco, Mike", "Dionne", "M, Maureen", "C, Tom", "Slusarezyk, Stephen"],
  "LANE LIZARDS": ["Russell, Mark", "Termini, Jason", "Lee, Joe", "Riggar, Andrew", "Hammond, Chris", "Maggs, Will", "Eisenhart, Sefton"],
  "Balls on Fire": ["Conroy, Victoria", "Conroy, Stacey", "Mastrobuoni, Joe", "Conroy, Dave", "Berry, Jackie", "Ventresca, Anthony", "Hope, Christine", "Rockey, Ethan", "Mcguire, Mike", "Mecca, Natalia", "Brown, Cleon", "Mcglone, Pat"],
  "DIRTY DAN AND THE PINHEADS": ["Spivak, Daniel", "Ezra", "Jacob", "Gabe", "Wesley", "Rebecca", "S, Todd", "Thibault", "L Train"],
  "General Strike Now!": ["Adam", "John", "Chris", "Buzz", "K, Nick"],
};

// Real standings from LeagueSecretary.com (updated through Week 12)
export const standings: Team[] = [
  { rank: 1, num: 13, name: "LANE LIZARDS", wins: 36, losses: 12, pct: 0.750, avg: 661, pinfall: 23822, highGame: 784, highSeries: 2198 },
  { rank: 2, num: 7, name: "Minds In The Gutter", wins: 30, losses: 18, pct: 0.625, avg: 625, pinfall: 22502, highGame: 715, highSeries: 2018 },
  { rank: 3, num: 8, name: "Bowl Movements", wins: 27, losses: 21, pct: 0.563, avg: 567, pinfall: 20424, highGame: 728, highSeries: 2004 },
  { rank: 4, num: 10, name: "Pin Pals", wins: 27, losses: 21, pct: 0.563, avg: 621, pinfall: 22389, highGame: 719, highSeries: 2077 },
  { rank: 5, num: 11, name: "Oh, That Team!", wins: 26, losses: 22, pct: 0.542, avg: 525, pinfall: 18901, highGame: 644, highSeries: 1745 },
  { rank: 6, num: 4, name: "Danger D!", wins: 26, losses: 22, pct: 0.542, avg: 498, pinfall: 17947, highGame: 666, highSeries: 1795 },
  { rank: 7, num: 16, name: "General Strike Now!", wins: 25, losses: 23, pct: 0.521, avg: 476, pinfall: 17169, highGame: 564, highSeries: 1522 },
  { rank: 8, num: 15, name: "DIRTY DAN AND THE PINHEADS", wins: 23.5, losses: 24.5, pct: 0.490, avg: 524, pinfall: 18872, highGame: 622, highSeries: 1681 },
  { rank: 9, num: 9, name: "PISTOL PETE'S", wins: 23, losses: 25, pct: 0.479, avg: 664, pinfall: 23928, highGame: 789, highSeries: 2242 },
  { rank: 10, num: 5, name: "Bowl Strike Dracula", wins: 23, losses: 25, pct: 0.479, avg: 581, pinfall: 20918, highGame: 717, highSeries: 2022 },
  { rank: 11, num: 3, name: "Bowl Yeller", wins: 23, losses: 25, pct: 0.479, avg: 507, pinfall: 18259, highGame: 665, highSeries: 1823 },
  { rank: 12, num: 6, name: "Bowlerinas", wins: 22.5, losses: 25.5, pct: 0.469, avg: 501, pinfall: 18036, highGame: 635, highSeries: 1850 },
  { rank: 13, num: 2, name: "BLAME IT ON THE LANE", wins: 21, losses: 27, pct: 0.438, avg: 382, pinfall: 13777, highGame: 515, highSeries: 1496 },
  { rank: 14, num: 12, name: "ITTY BITTY SPLITTY", wins: 16, losses: 32, pct: 0.333, avg: 465, pinfall: 16747, highGame: 546, highSeries: 1520 },
  { rank: 15, num: 1, name: "Tuesday Night Strikers", wins: 15, losses: 33, pct: 0.313, avg: 468, pinfall: 16876, highGame: 748, highSeries: 2100 },
  { rank: 16, num: 14, name: "Balls on Fire", wins: 12, losses: 36, pct: 0.250, avg: 303, pinfall: 10909, highGame: 513, highSeries: 1437 },
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
    // Real scores from Week 9 scoresheet PDF
    week: 9, date: "04/02/2026",
    matches: [
      { team1: "Danger D!", team2: "LANE LIZARDS", score1: 2362, score2: 2578, wins1: 1, wins2: 3, lanes: [1, 2] as [number, number] },
      { team1: "DIRTY DAN AND THE PINHEADS", team2: "Bowl Yeller", score1: 2506, score2: 2423, wins1: 3, wins2: 1, lanes: [3, 4] as [number, number] },
      { team1: "Oh, That Team!", team2: "Bowl Movements", score1: 2585, score2: 2553, wins1: 3, wins2: 1, lanes: [5, 6] as [number, number] },
      { team1: "Tuesday Night Strikers", team2: "Balls on Fire", score1: 2462, score2: 2589, wins1: 0, wins2: 4, lanes: [7, 8] as [number, number] },
      { team1: "BLAME IT ON THE LANE", team2: "General Strike Now!", score1: 2527, score2: 2614, wins1: 0, wins2: 4, lanes: [9, 10] as [number, number] },
      { team1: "ITTY BITTY SPLITTY", team2: "PISTOL PETE'S", score1: 2603, score2: 2875, wins1: 0, wins2: 4, lanes: [11, 12] as [number, number] },
      { team1: "Minds In The Gutter", team2: "Bowl Strike Dracula", score1: 2686, score2: 2535, wins1: 3, wins2: 1, lanes: [13, 14] as [number, number] },
      { team1: "Bowlerinas", team2: "Pin Pals", score1: 2348, score2: 2449, wins1: 1, wins2: 3, lanes: [15, 16] as [number, number] },
    ],
  },
  {
    // Real scores from Week 10 scoresheet PDF
    week: 10, date: "04/09/2026",
    matches: [
      { team1: "ITTY BITTY SPLITTY", team2: "Tuesday Night Strikers", score1: 2489, score2: 2799, wins1: 0, wins2: 4, lanes: [1, 2] as [number, number] },
      { team1: "Pin Pals", team2: "Bowl Movements", score1: 2471, score2: 2814, wins1: 0, wins2: 4, lanes: [3, 4] as [number, number] },
      { team1: "Bowl Yeller", team2: "Bowl Strike Dracula", score1: 2500, score2: 2673, wins1: 0, wins2: 4, lanes: [5, 6] as [number, number] },
      { team1: "BLAME IT ON THE LANE", team2: "Danger D!", score1: 2529, score2: 2589, wins1: 1, wins2: 3, lanes: [7, 8] as [number, number] },
      { team1: "Balls on Fire", team2: "PISTOL PETE'S", score1: 2461, score2: 2332, wins1: 3, wins2: 1, lanes: [9, 10] as [number, number] },
      { team1: "LANE LIZARDS", team2: "General Strike Now!", score1: 2730, score2: 2434, wins1: 4, wins2: 0, lanes: [11, 12] as [number, number] },
      { team1: "Oh, That Team!", team2: "Bowlerinas", score1: 2614, score2: 2542, wins1: 3, wins2: 1, lanes: [13, 14] as [number, number] },
      { team1: "Minds In The Gutter", team2: "DIRTY DAN AND THE PINHEADS", score1: 2602, score2: 2520, wins1: 3, wins2: 1, lanes: [15, 16] as [number, number] },
    ],
  },
  {
    // Real scores from Week 11 scoresheet PDF
    week: 11, date: "04/16/2026",
    matches: [
      { team1: "Oh, That Team!", team2: "Pin Pals", score1: 2699, score2: 2666, wins1: 2, wins2: 2, lanes: [1, 2] as [number, number] },
      { team1: "LANE LIZARDS", team2: "BLAME IT ON THE LANE", score1: 2568, score2: 2520, wins1: 3, wins2: 1, lanes: [3, 4] as [number, number] },
      { team1: "General Strike Now!", team2: "Danger D!", score1: 2559, score2: 2695, wins1: 0, wins2: 4, lanes: [5, 6] as [number, number] },
      { team1: "Bowl Strike Dracula", team2: "DIRTY DAN AND THE PINHEADS", score1: 2604, score2: 2494, wins1: 4, wins2: 0, lanes: [7, 8] as [number, number] },
      { team1: "Minds In The Gutter", team2: "Bowl Yeller", score1: 2603, score2: 2553, wins1: 3, wins2: 1, lanes: [9, 10] as [number, number] },
      { team1: "Bowl Movements", team2: "Bowlerinas", score1: 2565, score2: 2652, wins1: 1, wins2: 3, lanes: [11, 12] as [number, number] },
      { team1: "PISTOL PETE'S", team2: "Tuesday Night Strikers", score1: 2550, score2: 2507, wins1: 4, wins2: 0, lanes: [13, 14] as [number, number] },
      { team1: "Balls on Fire", team2: "ITTY BITTY SPLITTY", score1: 2385, score2: 2581, wins1: 0, wins2: 4, lanes: [15, 16] as [number, number] },
    ],
  },
  {
    // Real scores from Week 12 scoresheet PDF (Position Round)
    week: 12, date: "04/23/2026",
    matches: [
      { team1: "LANE LIZARDS", team2: "Bowl Movements", score1: 2707, score2: 2557, wins1: 4, wins2: 0, lanes: [1, 2] as [number, number] },
      { team1: "Minds In The Gutter", team2: "General Strike Now!", score1: 2653, score2: 2531, wins1: 4, wins2: 0, lanes: [3, 4] as [number, number] },
      { team1: "Danger D!", team2: "Pin Pals", score1: 2578, score2: 2613, wins1: 1, wins2: 3, lanes: [5, 6] as [number, number] },
      { team1: "Oh, That Team!", team2: "Bowl Strike Dracula", score1: 2624, score2: 2498, wins1: 3, wins2: 1, lanes: [7, 8] as [number, number] },
      { team1: "PISTOL PETE'S", team2: "Bowl Yeller", score1: 2575, score2: 2568, wins1: 2, wins2: 2, lanes: [9, 10] as [number, number] },
      { team1: "BLAME IT ON THE LANE", team2: "DIRTY DAN AND THE PINHEADS", score1: 0, score2: 2540, wins1: 0, wins2: 4, lanes: [11, 12] as [number, number] },
      { team1: "Bowlerinas", team2: "ITTY BITTY SPLITTY", score1: 2753, score2: 2544, wins1: 4, wins2: 0, lanes: [13, 14] as [number, number] },
      { team1: "Balls on Fire", team2: "Tuesday Night Strikers", score1: 0, score2: 2478, wins1: 0, wins2: 3, lanes: [15, 16] as [number, number] },
    ],
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
