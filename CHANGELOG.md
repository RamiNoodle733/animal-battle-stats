# Changelog

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
