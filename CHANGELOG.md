# Changelog

## 2.14.0 — 2026-09-14

- Added a shared request boundary to every serverless API. Unsafe requests now have route-specific 4–64 KiB application budgets and are rejected before database access or business side effects; Vercel retains its fixed platform payload ceiling.
- Cookie-authenticated mutations require a configured trusted origin, while explicit Bearer clients and intentionally public operations follow explicit allowlists. Browser lifecycle and presence telemetry is same-origin only, and lifecycle notifications now have a distributed abuse budget.
- Public comment, chat and feed responses no longer expose author account IDs, voter ID arrays, deletion metadata or community presence/leaderboard ObjectIds. They return aggregate vote counts plus viewer-specific vote and delete permissions instead.
- Anonymous comments no longer reveal stored usernames or profile animals. Community and rankings interfaces now consume the privacy-safe response contract without losing voting, replies or owner/moderator deletion controls.
- Deleting a comment or chat message now traverses the complete nested reply subtree, preventing unreachable orphan replies. Empty presence heartbeats are handled safely, and comment read failures no longer expose internal database errors.
- Added request-origin, body-budget, response-privacy and recursive-tree regression suites, plus independent security review of the combined boundary.

## 2.13.0 — 2026-09-13

- Added MongoDB-backed rate limits for password-reset requests, community posts and votes, daily animal votes, ranked tournament actions, fight analytics and anonymous visit counting. Limits now work across serverless instances instead of relying on process memory.
- Profile, comment and chat mutations reject malformed, oversized or non-canonical values before database access. Animal and matchup discussion targets must resolve to real canonical animals, and pagination is bounded.
- Community comment/chat votes now update atomically. Daily animal voting uses its unique user/animal/day key with safe concurrent-insert recovery, preventing lost updates and duplicate rows under races.
- Prestige now commits only when level, prestige and XP still match the state the server validated, so a concurrent reward cannot be erased. Tournament quit analytics are derived from the authenticated server-issued session rather than client totals.
- Public comparison and tournament totals are incremented only on accepted server actions. Community statistics no longer substitute fabricated visit, comparison or tournament estimates when persisted totals are absent.
- Added focused mutation, atomic-vote, distributed-limit and prestige regression suites, including duplicate-bucket and concurrent-state-change cases.

## 2.12.0 — 2026-09-13

- Reoriented the homepage around the core question, “Who would win?”, with two keyboard-accessible animal selectors, one simulation action, three popular matchups, and Tournament moved into the secondary navigation.
- The selector becomes usable from the fast 32-animal home response, then hydrates all 225 canonical animals in the background. Submitted choices use stable slugs and open the reproducible `/battle` result.
- Ranked tournaments now require an authenticated, expiring server-issued session and a server-selected roster. Every match must follow the issued bracket and has an idempotent match index, so forged, reordered, replayed, or response-lost submissions cannot inflate results.
- ELO, win/loss, and placement writes are committed atomically only after a complete verified bracket. One unique ranked completion and progression reward is allowed per account per UTC day; guests can continue playing locally without ranked writes.
- Tournament validation derives placements from the bracket rather than trusting client placement fields. Recording failures keep the current match available for a safe retry and show a user-facing error.
- Homepage metadata now describes the transparent matchup experience. Responsive verification covers 320, 390, 768, 1366, and 1440px layouts, full-roster hydration, duplicate-selection errors, and actual battle URL navigation.

## 2.11.0 — 2026-09-13

- New experimental battle-model preview at `/battle`: choose any two of the 225 animals, inspect weighted ratings and physical measurements, and copy a reproducible link with model and data-release versions.
- Public `/methodology` explains the exact formula, editorial weights, low confidence, missing-data policy and known limitations. Model version: `0.1.0-preview`. This analytical rating model does not yet simulate terrain, body-size scaling, humans or groups; it reports no invented simulation count.
- Source-backed wildlife measurements, editorial scores and hypothetical probabilities are distinguished. Legacy zero/unknown physical values are shown as Unknown in the new tool; source records and existing community rankings are unchanged.
- Added battle links to animal profiles and homepage copy. All static navigation destinations now remain available on small screens.
- Search/random APIs reject operator-shaped filters and invalid or excessive pagination/sample sizes before database access; zero stat bounds now work. Malformed authentication cookies fail closed without request crashes.
- Production builds regenerate the sitemap and include the new static pages. Search crawler policy is documented separately from the unchanged training policy.
- Preserved the complete master specification and added an executable milestone plan with acceptance gates, priorities and explicit future work.

## 2.10.0 — Previous release

Arcade presentation, route-specific performance and community/tournament improvements. Historical implementation is recorded in git commit `a7aecb5`.
