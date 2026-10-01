# Animal Battle Stats - Architecture Documentation

## Overview

Animal Battle Stats is a web application for comparing animal statistics, running tournaments, and community interaction. Every public page is built to static HTML by [Astro](https://astro.build); interactive features are small client scripts that call the serverless API.

---

## Directory Structure

```
animal-stats/
├── astro/                  # The website (Astro, static output)
│   ├── public/             # Files served as-is
│   └── src/
│       ├── pages/          # One file per route (see Routes below)
│       ├── components/     # Game screens and widgets (HoloCard, Meters, Arena, VsScreen, ...)
│       ├── layouts/
│       │   └── Base.astro  # HUD, menus, SEO/social metadata, JSON-LD, abs-version meta
│       ├── scripts/        # Client scripts, bundled by Astro into /_astro/*.js
│       ├── lib/            # Build-time data: catalogue, matchups, categories, credits
│       └── styles/abs.css  # Design system
│
├── js/
│   └── battle-engine.js    # Matchup model (UMD): used by pages, client scripts and tests
│
├── api/                    # Serverless API endpoints (Vercel)
│   ├── animals.js          # Animal CRUD operations
│   ├── auth.js             # Authentication endpoints
│   ├── battles.js          # Battle/fight endpoints
│   ├── chat.js             # Community chat
│   ├── comments.js         # Animal comments
│   ├── community.js        # Community features
│   ├── random.js           # Random animal selection
│   ├── rankings.js         # Power rankings & voting
│   ├── search.js           # Animal search
│   ├── stats.js            # Site statistics
│   └── votes.js            # Voting system
│
├── lib/                    # Backend shared libraries
│   ├── auth.js             # Auth utilities (JWT, validation)
│   ├── discord.js          # Discord webhook integration
│   ├── mongodb.js          # Database connection
│   ├── xpSystem.js         # XP/leveling system
│   └── models/             # Mongoose models
│       ├── Animal.js       # Animal schema
│       ├── BattleStats.js  # Battle statistics
│       ├── ChatMessage.js  # Chat messages
│       ├── Comment.js      # Animal comments
│       ├── RankHistory.js  # Ranking history
│       ├── SiteStats.js    # Site-wide stats
│       ├── Vote.js         # User votes
│       └── XpClaim.js      # XP claims tracking
│
├── scripts/                # Build, development & migration scripts
│   ├── build-production.js # Production build into dist/
│   ├── preview-dist.js     # Local preview of dist/ with vercel.json routing
│   ├── migrations/         # Database migrations
│   ├── data-tools/         # Data import/export tools
│   └── assets/             # Audited, dry-run-first animal image pipeline
│
├── data/                   # Research profiles, image metadata, Roblox game data
├── images/                 # Static images
├── animal_stats.json       # Canonical animal catalogue
├── manifest.json           # PWA manifest
├── vercel.json             # Vercel configuration (build, redirects, rewrites, headers)
└── package.json            # Dependencies
```

---

## Frontend

### Pages
Each route is an Astro page in `astro/src/pages/`. The build writes one HTML file per page (`build.format: 'file'`) and Vercel serves them without the `.html` extension (`cleanUrls`).

| Route | Source |
|-------|--------|
| `/` | `index.astro` |
| `/stats`, `/stats/<animal>` | `stats.astro`, `stats/[slug].astro` |
| `/compare`, `/compare/<a>-vs-<b>` | `compare.astro`, `compare/[matchup].astro` |
| `/tier-list`, `/tier-list/<group>` | `tier-list.astro`, `tier-list/[group].astro` |
| `/rankings`, `/rankings/<category>` | `rankings.astro`, `rankings/[category].astro` |
| `/tournament` | `tournament.astro` |
| `/community` (and `/community/<tab>`) | `community.astro` |
| `/profile` (and `/profile/<username>`) | `profile.astro` |
| `/login`, `/signup`, `/forgot-password`, `/reset-password` | `AuthScreen.astro` via the matching page |
| `/about`, `/credits`, `/roblox`, `/404` | matching `.astro` page |
| `/llms.txt`, `/llms-full.txt`, `/data/*.json` | `.js` endpoints rendered at build time |

`vercel.json` rewrites `/profile/<username>` and `/community/<tab>` to their pages and redirects retired URLs (`/battle`, `/methodology`, `/battlepoints`, `/app`).

### Build-time data
`astro/src/lib/catalog.js` reads `animal_stats.json`, `data/animal-profiles.json` and the image manifests once per build and derives ratings, tiers, ranks, images and matchups for every page. Animal, matchup, tier and ranking pages therefore ship their content as complete HTML; live data (votes, comments, community, accounts) is fetched by client scripts.

### Client scripts
Interactive behaviour lives in `astro/src/scripts/` as plain DOM modules, imported from the pages that need them:

- `site.js` - shared by every screen: HUD menus, quick search (`/data/animals-lite.json`), sound effects, card tilt, signed-in player chip
- `versus.js` - Versus screen: odds, stat duel and the animated fight using `js/battle-engine.js` (the favourite always wins, 50-50 is a draw, the same matchup always plays out the same way; holding the screen or Space fast-forwards it)
- `tournament.js` - bracket play; ranked brackets for signed-in players go through the server-owned bracket API
- `community.js`, `comments.js`, `votes.js`, `world.js` - community hub, comment threads, animal votes, visitor globe
- `auth.js`, `profile.js` - sign-in forms and player profiles
- `sfx.js`, `track.js` - synthesized sound effects and visit analytics
- The collectible cards, loaded only when someone opens a card or shares (dynamic `import()`, so no page carries them up front):
  - `abs-card.js` - draws an animal's card on a canvas: the front (art over its biome and tier shards, power, crest, archetype tag, name plate, card number) and the back (number strip, portrait, stat bars, abilities, the signature move). Every other card feature uses it, so they always match
  - `card-scenes.js` - the share pictures (1080x1350): the card, front and back, and the Versus face-off with the result; and the link previews (1200x630): an animal's card with its stats, a matchup's two cards with the odds
  - `card-reel.js` - the 9:16 videos, drawn frame by frame and recorded with `MediaRecorder` (MP4 where the browser can, WebM otherwise)
  - `card-viewer.js` - the 3D card on animal pages (`/stats/<animal>#card` opens it): drag to turn, tap or arrow keys to flip, live foil and glare
  - `share-card.js` - the share sheet for animals and matchups: format tabs, the native share sheet with the file attached, save and copy link
  - `card-styles.js` - adds `styles/cards.css` the first time the viewer or the share sheet opens

The card data for each animal is written into its page at build time (`astro/src/lib/card.js`, a `<script type="application/json" id="abs-card">`); Versus builds cards from `/data/animals-lite.json` (`cardFromIndex`).

The build also draws every card as image files with the same renderer, on a Node canvas (`scripts/images/build-cards.mjs`, `@napi-rs/canvas`): `/images/cards/<slug>.webp` and `<slug>-back.webp` (750x1050), the animal page preview `/images/og/<slug>.jpg`, and a preview for every matchup page, `/images/og/vs/<a>-vs-<b>.jpg` (the Human pages too, and `/images/og/compare.jpg`). They are what link previews, Google and AI assistants show for those pages: `og:image`, the pages' JSON-LD `ImageObject`s, the image sitemap and `llms.txt` all point at them. `cardFiles()` and `matchupPreview()` in `card.js` give each file an address versioned by a hash of what it is drawn from, so a changed card gets a new address (images are cached for a year). Unchanged cards are reused between builds (`.cache/cards/manifest.json`).

### Styles
`astro/src/styles/abs.css` is the design system, imported once by `Base.astro`; Astro bundles it into `/_astro/*.css`. Fonts come from `@fontsource-variable` packages. `astro/src/styles/cards.css` styles the card viewer and the share sheet and ships inside their script (see above).

The surface art in `images/ui/` is rendered by the Python scripts in `scripts/assets/` (`build-ui-textures.py`, `build-ui-scenes.py`, `build-ui-badges.py`, `build-ui-icons.py`); `build-ui-cards.py` renders the full-size card art: the 9-slice metal frames, the tier shards and biome backdrops at card resolution, and the holographic foil tile.

---

## Build & Deploy

`npm run build` runs `scripts/build-production.js`, which Vercel also runs on deploy:

1. reject sensitive exports from the workspace
2. import finished research into `animal_stats.json` / `data/animal-profiles.json`
3. encode responsive image variants
4. `astro build` into `.cache/astro-dist`, then draw the section social cards (`build-og.js`) and the battle cards and page previews (`build-cards.mjs`) from the job lists it writes
5. assemble an allowlisted `dist/` (Astro output, images, public data), write `sitemap.xml` and `version.json`, and check that every page carries the package version

`node scripts/preview-dist.js 4321` serves `dist/` locally with the `vercel.json` redirects and rewrites. `npm run perf:budget` checks the gzip weight of each screen; `npm test` runs the unit and contract tests (tests that inspect pages skip until `dist/` is built).

---

## API Structure

All API endpoints are serverless functions (Vercel) in `/api/`:

| Endpoint | Methods | Description |
|----------|---------|-------------|
| `/api/animals` | GET, POST | Animal CRUD |
| `/api/search` | GET | Animal search |
| `/api/random` | GET | Random animal |
| `/api/rankings` | GET, POST | Power rankings |
| `/api/votes` | GET, POST | Vote handling |
| `/api/comments` | GET, POST | Comments |
| `/api/chat` | GET, POST | Chat messages |
| `/api/community` | GET, POST | Community data |
| `/api/stats` | GET | Site statistics |
| `/api/auth` | POST | Authentication |

---

## Data Flow

```
┌──────────────────────────────────────────────────────────┐
│                 BUILD (npm run build)                     │
│  animal_stats.json ─┐                                     │
│  data/*.json ───────┼─▶ astro/src/lib ─▶ static HTML      │
│  js/battle-engine ──┘                    (dist/)          │
└──────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────┐
│                  BROWSER                                  │
│  Static page ─▶ astro/src/scripts (site.js, versus.js,    │
│                 community.js, profile.js, ...)            │
└──────────────────────────────────────────────────────────┘
                              │ fetch
                              ▼
┌──────────────────────────────────────────────────────────┐
│                     API Layer                             │
│  /api/animals  /api/rankings  /api/community  /api/auth  │
└──────────────────────────────────────────────────────────┘
                              │
                              ▼
┌──────────────────────────────────────────────────────────┐
│                    MongoDB Atlas                          │
│  Collections: animals, votes, comments, users, chat...   │
└──────────────────────────────────────────────────────────┘
```

---

## Adding New Features

### Adding a New Page
1. Create `astro/src/pages/newpage.astro` and wrap it in `Base.astro` (title, description, `path`)
2. Put interactive behaviour in `astro/src/scripts/newpage.js` and import it from the page's `<script>`
3. Add styles to `astro/src/styles/abs.css`
4. Add a menu entry in `Base.astro` if it belongs in the HUD, and a screen to `scripts/performance/check-route-budgets.js`

### Adding API Endpoint
1. Create file in `/api/newfeature.js`
2. Export handler function
3. Use lib functions for DB access

---

## Development Guidelines

### JavaScript
- Client scripts are ES modules; keep them framework-free
- Escape every piece of user text before inserting it into the DOM
- Use `async/await` for API calls
- `npm run lint` covers `api/`, `lib/`, `js/` and `astro/src/`

### CSS
- Use the design tokens and components already in `abs.css`
- Respect `prefers-reduced-motion`

### API
- Always validate input
- Use try/catch for all DB operations
- Return consistent JSON structure
- Log errors for debugging
