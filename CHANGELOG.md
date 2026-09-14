# Changelog

## 2.19.0 — 2026-09-14

- Rebuilt `/battle` as a compact ABS game arena with facing animal portraits, in-place selectors, a central run control, probability meter and result actions instead of a disconnected long-form tool.
- Preserved the complete static answer, model explanation, weighted ratings, physical-data disclosure and limitations in crawlable HTML while presenting them through keyboard-accessible Summary, Ratings, Physical Data and Limits panels.
- Added Battle and Tournament to the interactive app’s desktop and mobile navigation, connecting the arena directly to Stats, Compare, Rankings and Community in both directions.
- The battle browser gate now verifies portrait updates, tab visibility, arrow-key tab navigation, the six-destination shell, share/reload/back behavior, mobile overflow, no-JavaScript content and one-viewport desktop presentation.

## 2.18.0 — 2026-09-14

- Added an executable search-contract layer for canonical, robots, sitemap, social-card, structured-data, image-alt and crawlable-link validation across all 234 public URLs.
- Added local and production verification for OAI-SearchBot access, query canonicalization, clean-URL redirects, true 404 responses and reachable public destinations while preserving the independent GPTBot policy.
- The full SEO crawler now parses and validates JSON-LD and checks Open Graph, X/Twitter and image-alt contracts on every sitemap URL instead of checking only status and basic metadata.
- Corrected the homepage Open Graph URL to match its self-canonical URL and reduced the legacy multi-view document from eight H1 elements to one without changing visible route headings.
- Added a production deployment checklist that separates application-level crawler evidence from Search Console, indexing and upstream firewall checks that require external account access.

## 2.17.0 — 2026-09-14

- Added a validated per-field animal evidence contract covering values, ranges, units, explicit missing-value states, measured/estimated basis, confidence, review dates and traceable source metadata.
- Added an additive MongoDB evidence model and an empty versioned evidence manifest. No legacy measurement is silently promoted to reviewed evidence.
- Added a read-only 225-animal evidence audit. It distinguishes positive unreviewed catalogue values from ambiguous zeros, including 55 unresolved legacy bite-force zeros.
- Every static animal profile now publishes its current evidence coverage and warns when displayed physical measurements remain unreviewed, with links to the source policy and battle methodology.
- Documented the required dry-run, backup, idempotent apply verification and release-scoped rollback workflow for future reviewed evidence imports.

## 2.16.0 — 2026-09-14

- Completed the historical backend review reconciliation: all 35 library and 60 API findings now have an explicit current disposition, evidence, or named downstream milestone instead of being treated as a stale failure list.
- Signup now rejects operator-shaped/non-string credentials and invalid email syntax before account lookup or creation, while retaining model validation as a second boundary.
- Community leaderboard progression now uses the authoritative shared XP curve and reports level-100 completion without divide-by-infinity or a drifting duplicate formula.
- Legacy chat records with a missing author now fail deletion authorization safely. Comment and chat schemas enforce non-empty trimmed content.
- Username-change history is pruned to the active seven-day policy window, and duplicate explicit timestamp fields were removed in favor of Mongoose timestamps.
- Added behavioral regressions for the new boundaries and a coverage test that accounts for every numbered historical review finding.

## 2.15.0 — 2026-09-14

- Login and signup attempt budgets now use atomic MongoDB-backed buckets shared across serverless instances, with separate network and normalized-account limits instead of process-local memory.
- Throttled authentication requests stop before account lookup or creation, return a generic response plus `Retry-After`, and successful authentication clears only the account bucket so a valid login cannot reset an attacker's network budget.
- Password login now returns the same failure response for missing accounts, incorrect passwords and Google-only accounts, avoiding account-provider disclosure while retaining a general Google sign-in hint.
- Public profile responses no longer expose internal account identifiers. Authenticated self-profile responses retain the identifier required by existing owner-specific clients.
- Added endpoint-level login/signup throttle, account-disclosure and public-profile privacy regressions, plus deterministic distributed-bucket cleanup coverage.

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
