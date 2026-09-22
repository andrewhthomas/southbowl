# Southbowl

A static stats site for a bowling league (currently "Thirsty Thursday Fall 2026" at
Southbowl, 19 E Oregon Ave, Philadelphia). Standings, schedules, team and bowler pages,
per-week recaps, and season statistics, all rendered from hand-maintained data files.
Past seasons stay browsable from the season picker in the sidebar.

Built with [Astro](https://astro.build) (static output), React 19 islands, and Tailwind v4,
deployed to Cloudflare.

## Getting started

Requires Node >= 22.12.

```sh
npm install
npm run dev      # Dev server at http://localhost:4321
```

## Commands

| Command                  | Action                                            |
| :----------------------- | :------------------------------------------------ |
| `npm run dev`            | Start the local dev server at `localhost:4321`    |
| `npm run build`          | Build the production site to `./dist/`            |
| `npm run preview`        | Preview the production build locally              |
| `npm run generate-types` | Regenerate Cloudflare types (`wrangler types`)    |
| `npx wrangler deploy`    | Deploy `./dist` as Cloudflare assets (after build)|

## Project structure

```text
src/
├── components/
│   └── SeasonPicker.astro # Season dropdown
├── data/            # All site content (see below)
│   ├── seasons/<id>/  # One folder per season (recaps.ts, schedule.ts, index.ts)
│   ├── seasons.ts     # Season registry (newest first = current), nav
│   ├── derive.ts      # Computes standings/bowlers/schedule from recaps
│   └── types.ts       # Shared data types
├── layouts/
│   └── Layout.astro # Shared shell: sidebar/mobile nav, theme toggle
├── lib/utils.ts     # cn(), fmt(), toSlug(), icons
├── pages/[...season]/ # Routes; current season at /, past seasons at /<id>/
└── styles/global.css # Tailwind v4 theme tokens (@theme) + light-mode overrides
```

## Updating league data

The site has no CMS. Content is hand-entered from LeagueSecretary.com PDF scoresheets.

To add a week of results for the current season:

1. Add the scoresheet to `weekRecaps` in `src/data/seasons/fall-2026/recaps.ts`.
2. Bump `lastUpdated` in `src/data/seasons/fall-2026/index.ts`.

Standings, bowler stats, rosters, and results are computed from the recaps. Upcoming
matchups come from the lane assignments in `schedule.ts`.

To start a new season, add a folder under `src/data/seasons/` and put it first in the
list in `src/data/seasons.ts`. The previous season moves to `/<id>/` automatically.
