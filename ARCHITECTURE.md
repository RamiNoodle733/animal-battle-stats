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
│   ├── collection.js       # The card collection's rules: cards, prices, starters, card of the day
│   ├── discord.js          # Discord webhook integration
│   ├── page-labels.js      # Names pages for people ("Cassowary", "Lion vs Tiger")
│   ├── roblox-game.js      # The Roblox game's public numbers and leaderboards
│   ├── roblox-save.js      # Reads a linked player's game save (Open Cloud) into a trainer card
│   ├── roblox-sync.js      # Keeps that card on the user and brings game animals into the collection
│   ├── tracking-settings.js # Untracked accounts, what goes to Discord
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
| `/collection` (and `/collection?u=<username>`) | `collection.astro` |
| `/vote` (`#rank`, `?m=<a>-vs-<b>`, `?ch=<challenge>`) | `vote.astro` |
| `/powerscaling` | `powerscaling.astro` |
| `/login`, `/signup`, `/forgot-password`, `/reset-password` | `AuthScreen.astro` via the matching page |
| `/about`, `/credits`, `/roblox`, `/404` | matching `.astro` page |
| `/llms.txt`, `/llms-full.txt`, `/data/*.json` | `.js` endpoints rendered at build time |

`vercel.json` rewrites `/profile/<username>` and `/community/<tab>` to their pages and redirects retired URLs (`/battle`, `/methodology`, `/battlepoints`, `/app`).

### Phones

At 760px and below the page itself scrolls (abs.css, "Phones: the page itself scrolls"): `body.game` takes its natural height, the HUD sticks to the top and the dock to the bottom, `.screen-grid` panels take their natural height and `.scroll` boxes stop scrolling inside themselves (a box that must keep its own scroll carries `.keep-scroll`). Pages add their own phone rules on top (the animal card's height, the Versus call row above the dock). Desktop keeps the one-screen game frame with scrolling panels.

### Animal pages: vote and Size & speed

Under the card, the fan vote (underrated or overrated at its rank, `api/votes.js`). In the Stats tab, Size & speed (`astro/src/lib/body.js`): the measurements the Facts tab trusts, each next to an everyday comparison and its rank among all animals, and a drawing of the animal beside a person (credit card or coin for small animals) where the photo's longest side is the animal's biggest dimension.

### Build-time data
`astro/src/lib/catalog.js` reads `animal_stats.json`, `data/animal-profiles.json` and the image manifests once per build and derives ratings, tiers, ranks, images and matchups for every page. Animal, matchup, tier and ranking pages therefore ship their content as complete HTML; live data (votes, comments, community, accounts) is fetched by client scripts.

### Client scripts
Interactive behaviour lives in `astro/src/scripts/` as plain DOM modules, imported from the pages that need them:

- `site.js` - shared by every screen: HUD menus, quick search (`/data/animals-lite.json`), sound effects, card tilt, signed-in player chip
- `versus.js` - Versus screen: odds, stat duel and the animated fight using `js/battle-engine.js` (the favourite always wins, 50-50 is a draw, the same matchup always plays out the same way; holding the screen or Space fast-forwards it)
- `tournament.js` - bracket play; ranked brackets for signed-in players go through the server-owned bracket API
- `community.js`, `comments.js`, `votes.js`, `world.js` - community hub, comment threads, animal votes, visitor globe
- `auth.js`, `profile.js` - sign-in forms and player profiles
- `vote.js` - the Vote page: deals matchups (every matchup page that is not dead even, classics first) and animals; picks go to the same APIs as Versus calls and the list's arrows (`votes.js`), guests' votes are kept on the device and cast after login (`rememberVote` / `flushPendingVotes` in `votes.js`), and challenges are a friend's picks encoded in the link
- `collection.js` - the card collection binder: a player's cards, the starter pick, the card of the day and buying a card by name; `?u=<name>` shows someone else's, read-only. Animals in the Roblox game carry a Roblox mark (and their level there, once collected)
- `roblox-trainer.js` - the trainer card: a linked player's progress in the Roblox game, drawn from `/data/roblox-lite.json` (profiles, public profiles); `roblox.js` also fills the /roblox page's This week tab (the game's Weekly Cup, Family of the Week, featured island and timed events, with live countdowns)
- `sfx.js`, `track.js` - synthesized sound effects and visit analytics
- The collectible cards, loaded only when someone opens a card or shares (dynamic `import()`, so no page carries them up front):
  - `abs-card.js` - draws an animal's card on a canvas: the front (art over its biome and tier shards, power, crest, archetype tag, name plate, card number) and the back (number strip, portrait, stat bars, abilities, the signature move). Every other card feature uses it, so they always match
  - `card-scenes.js` - the share pictures (1080x1350): the card, front and back, and the Versus face-off with the result; and the link previews (1200x630): an animal's card with its stats, a matchup's two cards with the odds, and each section page's title beside a fan, podium or pair of cards (`astro/src/lib/previews.js` lists the sections)
  - `card-reel.js` - the 9:16 videos, drawn frame by frame and recorded with `MediaRecorder` (MP4 where the browser can, WebM otherwise), with their soundtrack
  - `reel-audio.js` - the videos' soundtracks, synthesized with Web Audio and rendered offline: a beat in A minor and the hits timed to the animation (flips, stat bars, VS slam, K.O.)
  - `card-gif.js` - the same videos as looping GIFs (`gifenc`): one palette, and each frame keeps only the pixels that changed
  - `card-viewer.js` - the 3D card on animal pages (`/stats/<animal>#card` opens it): drag to turn, tap or arrow keys to flip, live foil and glare
  - `share-card.js` - the share sheet for animals and matchups: format tabs (picture, video, GIF), the native share sheet with the file attached, Save to Photos on iPhone and iPad, save and copy link
  - `card-styles.js` - adds `styles/cards.css` the first time the viewer or the share sheet opens

The card data for each animal is written into its page at build time (`astro/src/lib/card.js`, a `<script type="application/json" id="abs-card">`); Versus builds cards from `/data/animals-lite.json` (`cardFromIndex`).

The build also draws every card as image files with the same renderer, on a Node canvas (`scripts/images/build-cards.mjs`, `@napi-rs/canvas`): `/images/cards/<slug>.webp` and `<slug>-back.webp` (750x1050), the front in two layers for the 3D card's live foil (`<slug>-base.webp`, `<slug>-top.webp`; the 3D card and the share pictures use these files instead of drawing the card on the phone), a small front for lists (`<slug>-thumb.webp`, 360 wide: the collection binder and the profile), the animal page preview `/images/og/<slug>.jpg`, and a preview for every matchup page, `/images/og/vs/<a>-vs-<b>.jpg` (the Human pages too, and `/images/og/compare.jpg`). They are what link previews, Google and AI assistants show for those pages: `og:image`, the pages' JSON-LD `ImageObject`s, the image sitemap and `llms.txt` all point at them. `cardFiles()` and `matchupPreview()` in `card.js` give each file an address versioned by a hash of what it is drawn from, so a changed card gets a new address (images are cached for a year). Unchanged cards are reused between builds (`.cache/cards/manifest.json`).

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

### The card collection

Players collect the battle cards, one of each animal. Nothing is random and nothing is sold for money: `lib/collection.js` holds the rules (the roster, prices by tier, the three starters, and the card of the day, which is the home page's Animal of the day), and `lib/rewards.js` makes every change inside the same economy transaction as BattlePoints, with a `RewardClaim` key so each one happens once. Cards are kept in `user.economy.cards` (`{ <slug>: { at, from } }`).

| Way | When | Code |
|-----|------|------|
| Starter | one of three, once | `claimStarter`, `POST /api/auth?action=collect {op:'starter'}` |
| Card of the day | once a UTC day; BattlePoints instead if already collected | `claimDailyCard`, `{op:'daily'}` |
| Calling a fight right | the card of the animal backed | `grantCard(..., 'call')` in `api/battles.js` |
| Finishing a ranked tournament | the champion's card | `grantCard(..., 'tournament')` in `api/battles.js` |
| Buying by name | S 500, A 300, B 160, C 100, D 60, F 40 BattlePoints | `buyCard`, `{op:'buy'}` |

`GET /api/auth?action=collection` returns the player's own collection (with the card of the day and the starters left to pick); `&username=` returns anyone's (which cards and how they got them). Profiles include a summary (`collectionSummary`). A new card is posted to the activity feed and Discord as `card_collected`.

### The Roblox link

Progress flows from the game to the site, read only (Roblox only allows in-game rewards for off-platform things as public promos, so nothing flows back):

- `data/roblox-game-data.json` is exported from the game's own modules (`tools/export-site-data.luau` in the game repo, run with Lune) and copied here by `scripts/roblox/import-game-data.js`: every game animal's rarity, island, family and moves, the islands and bosses, trophies, trainer and trophy level tables, looks, codes, and the game's weekly schedule and timed events. Pages use it at build time (animal pages' "In the Roblox game" strip, the binder's Roblox marks, the /roblox codes) and the browser gets a trimmed copy at `/data/roblox-lite.json`.
- `lib/roblox-save.js` reads a linked player's save (`ABS_Players_v1`, entry `u<robloxUserId>`, through Open Cloud) and turns it into a trainer card (`parseSave`): trainer level, animals with level and stars, team, islands (seal, boss, Showdown medal, LEGEND tier), trophies and trophy level, Weekly Cup, Sky Trail, Photo Safari, and whether they are in a server now. Public profiles get it without the wallet (`publicSnapshot`).
- `lib/roblox-sync.js` (`syncPlayer`) refreshes it when it is older than a minute (your own pages) or 30 minutes (someone else's), keeps it on the user (`robloxGame`), and calls `syncGameCards` in `lib/rewards.js`, which adds each game animal to the collection (`from: 'roblox'`) in the economy transaction and posts one `roblox_cards` event.
- API: `GET /api/auth?action=roblox-player` (yours, `&sync=1` to read now), `POST ?action=roblox-settings { showPublic }` (whether your public profile names your Roblox account; its progress shows either way), the collection (`roblox: { levels, added }`) and public profile (`roblox: { game, account }`) responses. The owner's Events > Settings shows whether saves can be read (`checkAccess`).

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
