# Website cohesion pass — 2026-10-15

Scope: the ABS website only. Do not change the Roblox game checkout or game save format.

## Findings

- 119 of 344 catalogue animals have no `_id`. Votes reject them before writing; comments also look in the older Mongo animal collection. Preserve all existing IDs and generate deterministic Mongo-compatible IDs for additions.
- Anonymous comments already have server support; the current composer does not offer it. Feed cards have no thread action. Thread loading must include replies even when a root is older than the latest page.
- Profile avatars are currently independent of collected cards. Preserve existing choices with a one-time welcome card; new accounts receive their random avatar card. Later selections require server-verified ownership. This is a free welcome gift, not a paid random pack. Keep the three selectable starter cards and all existing collection/reward features.
- Owner Events filters need actual choices from stored activity, country/state/city dependency, account/guest selection, exact account selection, and useful exports. Apply filters before counts and pagination; keep access restricted to administrators.
- Production reports Google, Roblox, GitHub and email delivery unavailable. Provider credentials must be activated before live provider login can be called working; Vercel's connector currently refuses environment access (403).

## Implementation order

1. Repair shared animal identity and remove legacy catalogue validation from interactive routes. Cover the entire roster, unknown animals, and existing ID preservation.
2. Add navigable community threads and complete replies, anonymous composing, reply cancellation and duplicate-submit protection. Preserve moderation and privacy.
3. Make profile card ownership authoritative, grant welcome cards safely without overwriting concurrent economy changes, and show an owned-card picker and collection paths.
4. Add owner-only filter choices and account/location filters, improve the Events workspace and CSV detail, and preserve view-only exclusions.
5. Polish collection discovery and authentication feedback. Check provider setup access and document only the exact external activation work still required.
6. Verify connected flows, desktop/mobile layout, build, tests, security and route budgets. Bump the minor version, push main, and verify the exact production commit and release.

## Acceptance cases

- Every displayed animal has a stable unique ObjectId; both old and newly researched animals can be voted on and discussed without a Mongo animal document.
- A community comment opens its full thread; anonymous roots and replies show Anonymous publicly; nested replies stay visible and usable.
- New accounts own their displayed animal, existing profiles keep theirs, unowned avatars are rejected by the API, and existing cards/currency remain intact.
- Events support accounts only, guests only, specific accounts, countries, states/regions and cities, combined with dates/actions/device/exclusions; non-admins cannot read choices or events.
- Account errors are actionable, provider availability is honest, and controls fit laptop and phone widths.

## Verification and activation

- All 249 unit and API contract tests pass, including the full animal roster, anonymous threads, card ownership, concurrent welcome upgrades and admin-only event filters. Production build and JavaScript lint pass. Desktop and phone browser previews cover threads, the Events workspace, owned avatars and signed-out signup.
- The owner Events layout expands across the page on desktop. Open filters use a sidebar; phone filters collapse above the event list. Country/state/city choices come from stored events and are approximate locations.
- Google, Roblox, GitHub and email remain unavailable in production until their credentials are configured. Both the Vercel connector and the signed-in CLI deny this project's environment access; the browser setup tab requires owner login. Do not describe these providers as activated or end-to-end tested.
- Existing avatars are upgraded to welcome cards lazily on authenticated account/collection access. This preserves choices without a destructive bulk migration or changes to Roblox game saves.
