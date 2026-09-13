# ABS overhaul working master log

The complete source specification is [ABS_SUPER_OVERHAUL.md](ABS_SUPER_OVERHAUL.md). Executable milestones, priorities, dependencies, acceptance criteria, commands and deferred scope are in [PLAN.md](../PLAN.md). Update the plan and this evidence log at release checkpoints; neither replaces the source.

## Baseline audit — 2026-09-13

- Clean main at a7aecb5 / 2.10.0; origin is RamiNoodle733/animal-battle-stats. Live homepage reports v2.10.0. `gh issue list` returns open #5, measurements/source coverage for 225 animals.
- Architecture: `index.html` contains shared interactive views; `lib/seo-renderer.js` generates five compatibility pages. `astro/src/pages/stats/[slug].astro` builds 225 standalone profiles; About is also Astro. `scripts/prerender-seo-pages.mjs` copies Astro outputs; `scripts/build-production.js` deploys only allowlisted assets into dist. Existing URLs should remain stable.
- CSS: modular files plus legacy shell and route styles. `css/static-shell.css` supports Astro with reduced motion. Interactive pages use route-loaded JS/CSS and existing budgets. Mobile static navigation currently hides its last destination; investigate during navigation work.
- Data: 225 flat JSON records with editorial stats, physical values and some zero bite force; Mongo Animal uses special_attack while static records use special. No comprehensive per-field evidence. Images have provenance, optimized variants and dimension manifests; preserve pipeline.
- Auth/security: `lib/auth.js` requires JWT_SECRET and restricts HS256. Animal create/update/delete require admin; write allowlists exist; search regex strings are escaped; custom client rewards removed; ballot/reward unique keys exist. Historical REVIEW.md is therefore not a current failure list. Malformed cookie percent encoding still throws. Search accepts nested operator filters, unlimited/invalid pagination and arbitrary sorts; random accepts negative sample count and malformed filters. These are confirmed current defects.
- Further security work: inspect public list/chat/comment bounds, auth brute force/distributed rate limits, cookie origin/CSRF behavior, tournament completion trust and battle update race/replay protections. Authentication alone does not prove battle integrity. Current tournament writes use read-modify-save; not declared safe/completed here.
- Community: discussions, comments, moderation helpers and activity map exist. XP/BP/reward and daily vote persistence exist; BP shop is an explicit placeholder. Tournament and UI tests cover current arcade behavior; no finished Dex/tier-list/transparent simulation system identified.
- SEO: robots already allows OAI-SearchBot and GPTBot independently. Sitemap is generated separately from production build, creating a drift risk for new routes. Existing SEO audit checks status/title/description/canonical/H1 but not JSON-LD/image validity. Legacy homepage delivers multiple hidden views in initial HTML. Public Astro profiles are crawlable without client JS.
- Deployment/version: Vercel clean URLs; production allowlist; Node 24; package/lock/router/HTML version sync and dist/version.json commit stamp. No new credentials or database writes required for first slice.

## Active changes

| Problem | Solution | Status | Files | Validation | Follow-up |
| --- | --- | --- | --- | --- | --- |
| Source requirements not durable | Preserve all sections and dependency-aware execution plan | completed | docs/ABS_SUPER_OVERHAUL.md, PLAN.md | source equality and 74-section count pass | maintain milestone status |
| Unsafe public search/random inputs | Typed filters, bounded pagination, sort allowlist, 400 before database access | completed | lib/api-input.js, api/search.js, api/random.js | helper and handler behavior tests pass | extend to other list APIs |
| Malformed auth cookie crashes | Reject malformed headers/cookies as unauthenticated | completed | lib/auth.js | malformed and valid cookie regression tests pass | broader CSRF/rate-limit review |
| No documented executable battle model | Pure experimental model plus static tool and methodology | completed foundation | js/battle-engine.js, astro pages, route CSS/client | all 50,625 pairs and four browser widths pass | independent mass/environment modeling, calibrated scenarios and curated matchup pages |
| Build/sitemap drift | Generate sitemap with build and include new Astro root routes | completed | build/prerender/sitemap/preview scripts | 234 local sitemap URLs pass; build and JSON-LD checks pass | full index quality gates |
| Static navigation hides destination/overflows tablet | Keep six destinations; mobile three-column navigation; tablet wrapping | completed | css/static-shell.css | 320/390/768/1440px rendered checks; screenshots inspected | complete shared-shell navigation overhaul |

## 2.11.0 validation evidence

- `npm test`: 76 passed. Baseline before changes: 64 passed. New model tests include every ordered roster pair plus missing/extreme/symmetry/sensitivity cases.
- `npm run lint`, `npm run build`, `npm run version:check`, `npm run security:exports`, `npm run perf:budget`: pass. 234 HTML files agree on version. New model/client initial JS: 3.0 KB gzip, methodology has no client JS. No image replacements or database migrations.
- `npm run seo:audit -- --sitemap sitemap.xml --base http://127.0.0.1:3000`: 234 URLs, zero failures. The existing audit permits multiple homepage H1s; this pass does not resolve the legacy homepage architecture. New route JSON-LD parses and accurately uses WebPage, not QAPage.
- `node scripts/verification/verify-battle-browser.js http://127.0.0.1:3000`: passes 320, 390, 768, 1440px; keyboard/focus, reproducible URL reload, browser history, duplicate/unknown animals and unavailable versions, unknown measurements, static fallback. Initial 768px header failure corrected and rerun successfully. Screenshots under `.cache/browser-verification/battle` visually reviewed.
- Existing `verify:arcade`, `verify:ui-stability`, `verify:community`, `verify:responsive-images`: pass against dist read-only preview, including a full local eight-animal tournament. These do not prove production authenticated writes because preview blocks them.
- Source text preserved exactly apart from line endings/trailing newline. Full milestone completion is not claimed: mass/scenario/human/team models, evidence backfill and further P0 hardening remain in PLAN.md.
- Release prepared for main push; V5 checks must confirm the matching production commit and version. No claim of external indexing, AI citations, CDN real-crawler access or field performance measurements.

## Current official guidance consulted

- [Google AI features](https://developers.google.com/search/docs/appearance/ai-features): useful crawlable content and existing search fundamentals; no special AI schema requirement.
- [Google structured-data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies): describe visible content accurately; do not turn ordinary matchup articles into QAPage.
- [OpenAI crawler documentation](https://platform.openai.com/docs/bots): OAI-SearchBot is search discovery; GPTBot training policy is separate. Preserve the existing training choice.
- [OWASP input validation](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html): validate input types, allowed values and ranges before query construction.

## Release/rollback

Run PLAN.md validation sets, inspect generated changes, bump using the existing script and push a logical release commit to main. Verify deployed version and commit, not merely GitHub push status. Roll back a defective code-only release with a normal reviewed git revert followed by the same checks; do not reset or force push. First slice is additive and makes no database changes. Future schema changes require explicit dry runs and compatibility/rollback plans.
