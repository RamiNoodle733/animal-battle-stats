# Changelog

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
