# Southbowl

A static stats site for a bowling league (currently "Thirsty Thursday Winter 2026" at
Southbowl, 19 E Oregon Ave, Philadelphia). Standings, schedules, team and bowler pages,
per-week recaps, and season statistics, all rendered from hand-maintained data files.

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
├── data/        # All site content (see below)
│   ├── league.ts    # League meta, bowlers, teams, standings, schedule, nav
│   └── recaps.ts    # Per-week detailed scoresheets
├── layouts/
│   └── Layout.astro # Shared shell: sidebar/mobile nav, theme toggle
├── lib/utils.ts     # cn(), fmt(), toSlug(), icons
├── pages/           # Routes (incl. dynamic bowlers/[slug] and recaps/[week])
└── styles/global.css # Tailwind v4 theme tokens (@theme) + light-mode overrides
```

## Updating league data

The site has no CMS. Content is hand-entered from LeagueSecretary.com PDF scoresheets.

To add a week of results, edit **two** files:

1. Add the week's matches to `schedule` in `src/data/league.ts`.
2. Add the detailed scoresheet to `weekRecaps` in `src/data/recaps.ts`.

Then bump `league.lastUpdated` in `src/data/league.ts` and refresh the affected
`bowlers` / `standings` figures.

See [CLAUDE.md](./CLAUDE.md) for additional architecture notes and gotchas.
