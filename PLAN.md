# ABS super overhaul — execution plan

Source of truth: [complete specification](docs/ABS_SUPER_OVERHAUL.md). All 74 sections remain requirements. This plan consolidates repeated requirements without replacing the specification. Audit details, affected files, evidence and follow-ups live in [the working master log](docs/ABS_OVERHAUL_MASTER_PLAN.md).

Status vocabulary: **completed**, **in-progress**, **not-started**. A milestone is completed only when its acceptance criteria and checks pass; shipping a foundation does not complete the larger system. Priority is P0 (security/correctness), P1 (foundation), P2 (flagship), P3 (retention), P4 (advanced). Dependencies are release gates, not permission to omit requirements.

## Current execution boundary

Current release (2.12.0): harden ranked tournament mutations with server-issued sessions, server-selected rosters, sequential/idempotent match recording, atomic completion and daily ranking/reward claims; establish the battle-first homepage hero with fast selectors that hydrate the full roster; verify, version, commit, push and confirm production. The new collection/indexes are created through the existing Mongoose deployment path; no destructive data migration is required.

Intentionally deferred to subsequent releases: homepage sections below the hero, completed evidence backfill, editorial matchup pages, complete scenario engine, human/team models, persistent community/retention features and P4 systems. These remain scheduled below. In particular, do not publish indexed pair pages or human probabilities before evidence/model review. Existing gameplay remains available during incremental migration.

## Validation command sets

Run from repository root using Node 24 and the lockfile. Do not seed or migrate production to run checks.

- **V1 release:** `npm test`; `npm run lint`; `npm run build`; `npm run version:check`; `npm run security:exports`; `npm run perf:budget`; `git diff --check`. Build generates compatibility HTML and Astro profiles; inspect generated changes before commit.
- **V2 browser:** terminal A: `npm run preview:readonly -- 3000 dist`; terminal B: `npm run verify:ui-stability -- http://127.0.0.1:3000`; `npm run verify:responsive-images -- http://127.0.0.1:3000`; `npm run verify:community -- http://127.0.0.1:3000`; `npm run verify:arcade -- http://127.0.0.1:3000`. Inspect screenshots in `.cache/browser-verification`. Preview blocks API writes, so authenticated persistence must also be checked with test fixtures in an isolated environment.
- **V3 search:** `npm run seo:sitemap`; `npm run seo:audit -- --sitemap sitemap.xml --base http://127.0.0.1:3000`; `npm run seo:audit` after deployment. Check initial HTML without JavaScript, unique titles/descriptions/H1, canonical and OG URLs, valid JSON-LD, internal links, true 404s and sitemap coverage. Use Google Rich Results Test for eligible schema; no requirement to invent rich-result types.
- **V4 images:** `npm run assets:audit -- --report .cache/image-audit/report.json`; `npm run verify:responsive-images -- http://127.0.0.1:3000`. For actual replacements additionally use documented strict/provenance gates and visual species/license/cutout review. Never regenerate unrelated artwork.
- **V5 deployment:** `git fetch origin main`; `git status --short`; `git diff --check`; inspect staged diff; `git commit`; `git push origin main` (never force); `gh api repos/RamiNoodle733/animal-battle-stats/commits/main/status`; fetch `https://animalbattlestats.com/version.json` and check both version and commit; verify changed production routes. Use `npm run version:bump:minor` for features or `npm run version:bump:patch` for fixes before the final build. Update `CHANGELOG.md`. A successful push alone is not a verified deployment.

Future test file commands below are implementation deliverables, not claims that those files already exist. Add each suite alongside its feature, using behavior tests rather than implementation-mirroring assertions.

## Milestones

### M00 — Baseline and requirement preservation

- Priority: P0. Status: in-progress. Dependencies: none. Scope: now.
- Deliver: intact specification; this dependency plan; current architecture/security/live-site audit; issue review; baseline test/build results; rollback/release strategy.
- Acceptance: all 74 source sections map to a milestone or cross-cutting gate; historical review findings are checked against actual code; working tree and remote state recorded; source comparison differs only in line endings/trailing newline.
- Checks: `git status --short`; `git log -4 --oneline`; `gh issue list --limit 100`; V1; source/spec text comparison; section coverage check.

### M01 — API, authentication and data integrity

- Priority: P0. Status: in-progress. Dependencies: M00 inspection. Scope: input/auth and tournament integrity slices implemented; wider mutation/abuse hardening next.
- Deliver: typed/bounded public inputs, escaped search, sort allowlists, malformed auth rejection; verify admin writes and mass assignment; authorization on all mutations; distributed brute-force/spam limits; safe errors/body limits; cookie CSRF review; atomic/idempotent battle, ballot, reward and tournament writes; moderated safe comments/chat/profile URLs; secret/export controls. Reassess every historical REVIEW.md finding, including resolved items.
- Acceptance: operator-shaped input never reaches Mongo filters; invalid pagination yields 400; no unauthorized reward/write; concurrent/replayed requests cannot inflate records; no secret or private analytics in public output; public reads still work. Changes requiring data migration have dry run, compatibility window and rollback.
- Checks: V1; `node --test test/security-foundation.test.js test/api-input-validation.test.js`; add and run `node --test test/mutation-integrity.test.js` for isolated race/replay/auth cases; verify GET/OPTIONS and rejected mutations locally, never abuse production endpoints.

### M02 — Crawl and search foundation

- Priority: P1. Status: in-progress. Dependencies: M00; M01 relevant route safety. Scope: build/sitemap integration and policy implemented; comprehensive audit next.
- Deliver: static initial answers, metadata, breadcrumbs, accurate schema, OG/X cards, robots and SearchBot verification, canonical query policy, redirects/status codes, pagination/index control, deployment crawler checklist. Preserve current training-crawler policy. No thin generated pages, fake expertise/citations/reviews, or llms.txt priority diversion.
- Acceptance: every intended sitemap URL returns 200 without redirect, self-canonical and indexable; private/empty/filter pages excluded; unsupported combinations not indexed; structured data matches visible content; old URLs retain value; production search access checked separately from training access.
- Checks: V1, V3; `node --test test/astro-static-pages.test.js`; add/run `node --test test/search-contracts.test.js` for canonical, schema and sitemap contracts; production robots plus SearchBot user-agent request and external Search Console/CDN verification when available.

### M03 — Product shell, navigation and homepage

- Priority: P1. Status: in-progress. Dependencies: M01, M02. Scope: battle-first hero implemented now; full shared shell and below-hero homepage later.
- Deliver: Astro shell/shared components and tokens; WHO WOULD WIN hero with two fast selectors, presets and one simulation CTA; Daily Battle, trends, strongest animals, roster, weight champions, debates, tournament, records and search below; coherent Battle/Animals/Rankings/Tournaments/Community/Search navigation and secondary destinations; useful topic paragraph.
- Acceptance: newcomer can select and launch a battle using keyboard or phone; no duplicate navigation; existing login/profile/tournament routes and analytics retain parity; shared design primitives replace duplication incrementally. Remove obsolete HTML/CSS/JS only after parity, mobile, accessibility, URL, SEO and event checks.
- Checks: V1–V3; adapt `npm run verify:arcade` from the existing tournament-first home contract to the new approved battle-first specification; 320/390/768/1440px visual inspection; keyboard/focus/reduced-motion/error/back-navigation tests.

### M04 — Evidence, missing values and animal profiles

- Priority: P1. Status: in-progress. Dependencies: M01; M02 for profile output. Scope: model missing-value semantics implemented; full evidence/profile work next.
- Deliver: factual value/unit/range/typical/sex/age/source URL/title/publisher/date/access date/measured-estimated/confidence/notes records; source quality hierarchy; missing/unknown/not-applicable/actual-zero distinctions; reviewed migration; confidence; correction workflow; full profile hero, six scores, twelve substats, physical facts, combat profile, ranks, rivals, community and evidence. Approximate length/height/mass comparisons reuse licensed images and measured dimensions.
- Acceptance: factual evidence, editorial ratings and hypothetical predictions are visibly distinct; missing bite force never becomes a score penalty; source count/date never fabricated; extinct estimates lower confidence; all 225 animals remain accessible; profiles link methodology, records, categories, rivals, battles and tournaments.
- Checks: V1–V4; `node --test test/animal-evidence.test.js` (add); migration dry run on fixtures and documented rollback; compare all roster IDs and image paths; screenshot measurements on desktop/mobile with text equivalents.

### M05 — Transparent ABS Battle Engine

- Priority: P2. Status: in-progress. Dependencies: M01 input boundary; M04 missing-value policy. Scope: read-only experimental foundation implemented; calibrated flagship later.
- Deliver: shared pure model, explicit unequal weights, reproducible output, version, assumptions, confidence/limitations, factor contributions, advantages/weaknesses, upset conditions; tested missing-data behavior; public formula/methodology. Distinguish analytical probability from sampled simulation count. Do not count derived substats twice or imply scientific calibration.
- Acceptance: same inputs/version reproduce result; swapping opponents complements probability; neutral equal profiles tie; probabilities remain bounded; unknown measurements do not penalize score; missing evidence caps confidence; no unmodeled environment claim; results are labeled hypothetical and can launch another battle. Full completion also requires sensitivity review and evidence-backed scenario inputs.
- Checks: V1; `node --test test/battle-engine.test.js`; `node scripts/verification/verify-battle-browser.js http://127.0.0.1:3000` (add); sensitivity, missing, symmetry, extremes and no-JS fallback tests; independent source review before removing preview label.

### M06 — Scenario and permanent matchup pages

- Priority: P2. Status: not-started. Dependencies: M02, M04, M05. Scope: subsequent flagship release.
- Deliver: curated high-interest `/battle/<pair>` pages, direct verdict, model/community separation, physical/substat tables, approximate size, reasons, strengths/weaknesses, dynamics, sources/confidence, methodology, discussion, related questions/battles and sharing. Scenario schema covers terrain/biome/water/depth/day/night/distance/ambush/initiative/home habitat/adult/prime/sex/solitary/pack/bloodlusted modes with defensible modifiers only. Query URLs reproducible and canonicalized.
- Acceptance: arbitrary pairs may use tool but only editorial-quality reviewed pages index; reversed pairs canonicalize; impossible terrain has explicit unsupported result; no invented modifiers or precision; every indexed page has unique sourced value and accessible data visualizations.
- Checks: V1–V3; `node --test test/matchup-routes.test.js test/battle-scenarios.test.js` (add); desktop/mobile/browser back/share reload checks; editorial checklist on each indexable page.

### M07 — Unified search, topic graph, rankings and records

- Priority: P1 foundation / P2 model dimensions. Status: not-started. Dependencies: M02, M04, M05 for model rankings. Scope: later.
- Deliver: autocomplete and destinations for animal/pair/human/stat/strongest/fastest/category/weight queries; private aggregate demand; useful category/biome/taxon/diet/extinct/battle hubs; records; overall/model/community/land/marine/flying/type/diet/extinct/weight rankings; researched classes/champions; meaningful pound-for-pound normalization (never score divided by mass).
- Acceptance: all query families in spec sections 10/37 resolve sensibly; no orphan/thin hub pages; record units and missing data handled; factual versus model versus community ranks labeled; mobile sorting/filtering works; explanation and related navigation for each record/class/ranking.
- Checks: V1–V3; `node --test test/search-intents.test.js test/ranking-models.test.js` (add); keyboard autocomplete, filter URLs and empty-state checks; confirm aggregate logs exclude personal query histories.

### M08 — Human matchup and group models

- Priority: P2. Status: not-started. Dependencies: M04–M06 and M14 team model prerequisites. Scope: intentionally later, never fake unsupported output now.
- Deliver: sourced standardized average/athletic/trained human profiles, personal-input hypothetical boundaries, single and group comparisons, how-many queries with coordination/space/mobility/diminishing returns/engagement limits, non-graphic explanations and explicit wildlife warning.
- Acceptance: team outcome is not linear multiplication; uncertainty/unsupported cases visible; reproducible shared scenarios; factual data has sources; mathematical estimates never presented as wildlife-confrontation advice.
- Checks: V1–V3; `node --test test/human-matchups.test.js test/team-model.test.js` (add); group-size sensitivity, crowding/terrain constraints and accessible scenario forms; editorial safety/claim review.

### M09 — Community, Daily Battle and moderation

- Priority: P2. Status: not-started. Dependencies: M01, M05, M06. Scope: later.
- Deliver: daily guest predictions with optional persisted account streaks; distinct model/community outcomes; confidence and explanations; content-focused community home with trends/debates/tier lists/rankings/tournaments/comments; threads per animal/matchup/tournament/tier list; arguments for each side, helpful votes, reporting/moderation/deletion, pagination/notification design; eligible discussion SEO.
- Acceptance: stable daily identity and honest streak/accuracy semantics (model agreement is not real-world correctness); no fabricated community history; no duplicate/replayed votes; low-quality/private/empty discussions excluded from index; ranking sentiment history only if real data is persisted.
- Checks: V1–V3; `npm run verify:community -- http://127.0.0.1:3000`; `node --test test/daily-battle.test.js test/community-moderation.test.js` (add); midnight/timezone/concurrency/guest-to-account/pagination/deletion checks on fixtures.

### M10 — Profiles, achievements, Dex and XP/BP

- Priority: P3. Status: not-started. Dependencies: M01, M04, M09. Scope: intentionally deferred retention release.
- Deliver: meaningful exploration/tournament/prediction/stat achievements; natural collection progress by taxon/region/biome/extinct; polished profiles and streaks; server-owned XP; cosmetic BP frames/titles/badges/cards/themes/intros/backgrounds/showcases, never combat advantages.
- Acceptance: earned achievements persist once; anonymous exploration merges without duplicate rewards; all counters have truthful definitions; balances compatible with existing accounts; no pay-to-win; browsing remains effortless.
- Checks: V1, V2; `node --test test/achievements-dex.test.js test/reward-integrity.test.js` (add); isolated guest/account merge, retry, rollback and 225-animal progress fixtures; keyboard/profile/mobile inspection.

### M11 — Tournaments and tier lists

- Priority: P3. Status: not-started. Dependencies: M01, M07, M09, M10 reward integration. Scope: deferred retention release.
- Deliver: standard/random/class/taxon/diet/biome/continent cups, gauntlet/king-of-hill/survival/community/daily tournaments; custom roster and shared URLs; mobile brackets; tier-list S/A/B/C/D/F title/roster/public URL/share/likes/comments/remix.
- Acceptance: progression and placement verified server-side; reproducible brackets; keyboard equivalent to drag/drop; authored content moderated; ownership enforced; share/reload/clone preserves original; existing tournament parity.
- Checks: V1–V3; `npm run verify:arcade -- http://127.0.0.1:3000`; `node --test test/tournaments-v2.test.js test/tier-lists.test.js` (add); mobile bracket/keyboard reordering/unauthorized-edit/concurrent save checks.

### M12 — Sharing, analytics and content trust

- Priority: P2 results / P3 social. Status: in-progress. Dependencies: M02, M05; feature milestones as relevant. Scope: versioned matchup URLs/changelog implemented, wider work later.
- Deliver: OG cards for profiles/matchups/champions/tier lists/achievements/daily/streaks/rankings/records; meaningful events from spec section 50; second-battle and return-user metrics; observable organic/AI referrals and CWV; project identity/review dates/model versions/corrections; user-friendly changelog with data/model/rank changes.
- Acceptance: previews match visible results and version; no tracking of private content or personal history; event names and denominators documented; no claims of guaranteed indexing or AI citation; real metadata, no invented authors or history.
- Checks: V1–V3; `node --test test/product-events.test.js test/share-cards.test.js` (add); inspect generated images and share URLs; verify events once per action in local instrumentation; production referral/Search Console checks when account data is available.

### M13 — Accessibility, mobile, performance and polish

- Priority: P0 for inaccessible critical flows / P1 ongoing. Status: in-progress. Dependencies: applied within every milestone, no final-only cleanup. Scope: changed surfaces verified, comprehensive audit later.
- Deliver: labels/focus/keyboard/dialog trapping/semantic headings/alt/contrast/reduced motion/table/chart equivalents and errors; responsive 320–1440px critical routes; no overflow, loading jumps, stale versions, broken links/images or dead buttons; measure LCP/INP/CLS, JS/CSS/images/API latency and eliminate duplication incrementally.
- Acceptance: all critical routes in specification sections 45/61 pass desktop/mobile and keyboard checks; existing byte budgets hold or improve; field CWV reported only when observed, not inferred from local tests; no regression in image licensing/quality.
- Checks: V1–V4; inspect browser screenshots and console; Lighthouse or browser performance trace plus actual field data when available; manual keyboard/focus/reduced-motion checks and slow/offline request states.

### M14 — Advanced model architecture

- Priority: P4 (team prerequisites also support M08/P2). Status: not-started. Dependencies: M04–M06; team foundation can proceed before M08 without M10/M11. Scope: intentionally deferred; no dependency cycle with M08.
- Deliver: versioned extensible group/pack composition and coordination/space/social/role mechanics; extinct estimates and carefully sourced roster expansion; replay schema; ABS Lab equalized mass/speed/size, venom/armor removal, terrain, ambush and solo/pack controls away from simple UX.
- Acceptance: new controls have documented effects and reproducibility; no rushed extinct data; uncertainty propagated; old scenarios identify old model versions rather than silently rewriting history; replay and Lab explicitly hypothetical.
- Checks: V1–V3; `node --test test/team-model.test.js test/extinct-confidence.test.js test/battle-lab.test.js` (add); replay/version compatibility fixtures and perturbation tests; group/team gate must pass before M08 ships.

## Requirement coverage

Sections 1–4: M00/M01/M03. 5: M03. 6–8: M05/M06. 9–17: M02/M06/M07/M08. 18–23: M04/M05. 24–27: M07. 28: M09. 29–31: M10. 32–33: M11. 34–36: M09/M02. 37–38: M07. 39–41: M14/M08. 42: M12. 43–48: M03/M04/M13. 49: M01. 50: M12. 51–55: M02/M04/M06/M07/M12. 56–59: M03/M13. 60–62: V1–V4 and each milestone. 63: M03. 64: M04–M08/M14. 65–66: M09. 67–70: M00/M01/M12/V5. 71–74: release gates across all milestones.

## Checkpoint log

- 2026-09-13: started from clean `main`, commit `a7aecb5`, version 2.10.0; fetched origin/main. Read complete master specification and preserved it. Confirmed 225 local records, Astro static profiles/About, legacy interactive shell, Vercel allowlist build and MongoDB APIs. Open issue #5 requests factual measurement sources. Existing auth/admin/regex/reward fixes verified; remaining query validation and auth parsing defects selected for first implementation.
- 2026-09-13, 2.11.0 release checkpoint: 76 tests, lint, build, version agreement, sensitive-export guard and byte budgets pass. Local SEO audit: 234 URLs, zero failures (existing homepage multi-H1 exception remains). Existing arcade, comparison stability, community and responsive-image browser checks pass. New battle/methodology browser check passes 320/390/768/1440px, keyboard submission, focus, invalid input, URL reload/back, missing measurements and no-JavaScript fallback. Tablet header overflow found and fixed during verification. Model invariants exercised across 50,625 pairs. Production confirmation belongs to V5 after push; no claim of Search Console indexing or field Core Web Vitals.
- 2026-09-13, 2.12.0 implementation checkpoint: ranked tournaments now use server-issued four-hour sessions, server-selected type-filtered rosters, sequential and idempotent match indexes, completion-derived placements, atomic completion-only ELO/stat writes, and durable one-ranked-completion-per-account/day claims. The battle-first homepage hero launches stable `/battle` URLs, rejects duplicate selections, starts from 32 fast options and hydrates all 225. Independent security review found and drove fixes for client-owned IDs, partial-match farming, daily-claim TTL, lost-response retry races, and sequence-inconsistent preview ratings. Local release evidence: 83 tests, lint, production build, version agreement, sensitive-export guard, byte budgets, UI stability, responsive images, 234-URL SEO audit, and five-width arcade/browser verification pass; inspected 1440, 390, and 320px screenshots, with the narrow-phone decorative overlap and clipped labels corrected. V5 production confirmation follows the `main` push.

### Completed first-release slices (larger milestones remain open)

| Slice | Priority / parent | Status | Acceptance evidence |
| --- | --- | --- | --- |
| Preserve master requirements and executable plan | P0 / M00 | completed | Source text equality after newline normalization; 74 numbered sections; coverage map above |
| Search/random validation and malformed auth handling | P0 / M01 | completed | Handler tests prove invalid requests return 400 before MongoDB; auth malformed-cookie regression tests pass |
| Ranked tournament mutation integrity | P0 / M01/M11 | completed | Server-selected issued sessions; pure bracket/retry tests plus start-handler test; transaction-gated one-time daily completion; ELO/placements persist only for a complete bracket |
| Static battle and methodology build integration | P1 / M02 | completed | Build copies both pages; regenerates sitemap; canonical/schema tests and 234-URL local audit pass |
| Analytical rating model preview | P2 / M05 | completed | Shared pure formula; reproducibility, symmetry, extreme/missing and all-pair checks pass; deliberately low confidence |
| Versioned share links and data separation | P1/P2 / M04/M12 | completed | Reload/back/invalid-version checks pass; unknown physical facts do not affect probability; no source data writes |
| New-route accessibility and performance | P1 / M13 | completed | Four browser widths; keyboard/focus; no-JS static content; 3.0 KB compressed model/client JS; existing budgets pass |
| Battle-first homepage hero | P1 / M03 | completed | Browser checks at five widths; 225-option hydration, duplicate error, canonical slug navigation, focus styles, no overflow and legacy route parity |

Next implementation order: continue M01 distributed abuse controls and remaining mutation audits; advance M04 source metadata/migrations; build the remaining M03 homepage sections/shared shell; then calibrated size/environment-aware M05 and editorial-quality M06 pages. These are still requirements, not silently omitted features.
