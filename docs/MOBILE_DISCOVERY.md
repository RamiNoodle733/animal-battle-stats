# Mobile discovery and account returns — v4.16.0

The phone dock exposes Animals, Versus, Vote and Tournament, followed by Menu. Cards remain available from the home menu, desktop navigation, account menu and Menu sheet. Home tiles use complete paired rows on phones; short laptops use a compact two-column menu. Popular matchups use normal server-rendered links.

An animal page links to `/collection?animal=<slug>`. Only roster slugs select a card; the page keeps its canonical `/collection` URL. The filter is a view, not an ownership check. Signing up or logging in preserves the chosen card. The collecting guide expands on demand; a server/network error offers a retry without presenting the player as signed out or erasing displayed cards.

`lib/auth-return.js` applies the same destination rules to password forms and Google, GitHub and Roblox OAuth. It normalizes paths, rejects external URLs, encoded control/backslash paths, authentication loops and API destinations, and keeps ordinary internal queries/fragments. Provider cancellation keeps the signed original destination. New Roblox users with an explicit destination return there; the default profile onboarding remains available.

Collection linking checks the public provider-availability endpoint before offering Roblox. Client configuration, public provider availability and a working game-save sync must be verified separately. This release does not change Roblox game files or save formats.

Every robots group retains public-page access and excludes `/api/`; a named group does not inherit the wildcard group's restrictions. Existing search and training crawler policies remain independent. Collection filter URLs are excluded from the sitemap. `collection_interest` records only the public animal slug and page path; it contains no account identifiers.

## Verification

- 255 automated tests passed, including provider cancellation, unsafe/encoded return paths, first Roblox signup destinations, account ownership and existing community/reward regressions.
- Production build, lint, sensitive-export guard, version agreement and all 11 route budgets passed.
- Local crawl audited all 1,352 canonical sitemap URLs with zero failures. Search contracts checked 7 crawler pages, 5 query canonical variants, true 404s and 70 internal destinations.
- Rendered Chrome previews checked 320, 390, 768 and 1366 widths for the home, animal, collection and signup screens, with no horizontal overflow or page errors. The short-laptop menu fits without clipping; Cards remains reachable in the phone Menu.
- A local account fixture checked a collection 503 → retry → owned-card result and unavailable Roblox linking. Fixture checks do not establish live provider authentication.

## External setup status

Live Google, Roblox, GitHub and email activation remains unverified and unavailable in the last production availability check. Vercel's environment API returns 403 and its CLI cannot access the project scope; Windows browser control stopped at its URL-safety check. Fresh Google Analytics/Search Console dashboard checks also require restored access. Do not equate a passing local build or completed app registration with working provider login, email delivery, game sync, search indexing or AI citations.
