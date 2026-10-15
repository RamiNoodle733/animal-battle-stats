# Google reporting refresh — October 15, 2026

The website repair release v4.15.0 is live at commit `43538dc42f8e6748230cd1b06387bf11fb16c0fd`; its GitHub validation and production release jobs passed. Live checks confirmed all 344 animal IDs, the new Events location selectors, owned-card avatars, and a real community thread with replies. The Roblox game checkout was not changed.

## Search Console

- The domain property accepted `https://animalbattlestats.com/sitemap.xml` again on October 15. The live sitemap contains 1,352 URLs; Google's previously discovered count is 1,346 and its last-read date is still September 29. Submission does not mean Google has reprocessed it yet.
- The page-indexing report, last updated October 11, shows 227 indexed and 1,139 excluded pages: 1,110 discovered but not indexed, 17 crawled but not indexed, five intentional noindex pages, three redirects, one alternate canonical, and three old 404s.
- Validation of `/login`, `/signup` and `/reset-password` started October 12 and is still pending. These routes already return 200; retain intentional noindex on account pages.
- `/collection` is discovered but not indexed. An individual indexing request failed because Search Console could not connect to reCAPTCHA. The sitemap submission succeeded. No indexing success is claimed.

## Analytics

- The existing ABS property `521413666` is receiving `sign_up`, `roblox_play_click` and `social_click`, and all three remain key events. The existing Social platform event dimension remains configured.
- Registered `card_collect` as a key event and added the event-scoped Collection source dimension for `collection_source`. The website emits it only after the server confirms a newly added card, with source `starter`, `daily` or `buy`, and a catalogue animal slug. `daily_card_claim` records successful daily claims, including duplicates redeemed for points. These events send no account identifiers, emails or comment content. New events need new traffic; the configuration initially shows no stream data.
- The current last-seven-days Home cards show approximately 1.9K active users, 2.1K sessions and 15 key events. Source rows include 1.8K direct sessions and 143 Google organic sessions; Singapore accounts for about 1.7K active users. These rounded figures and the traffic concentration warrant quality investigation, not a claim that all traffic is automated.
- Prioritize a daily-card/community matchup loop, tagged social links and helpful Compare entry pages. Assess collected cards, returning visitors and Roblox play intent before spending on promotion.

## Provider setup deferred

The owner approved registration of all three sign-in apps and the displayed Google/Roblox policy steps. The ABS Google project and web client, GitHub OAuth app `3935594`, and Roblox OAuth app were created. No new credentials were entered into Vercel. The owner then explicitly chose to skip credential setup. These providers remain inactive; email delivery is also unconfigured. Future activation still needs secrets, Google audience/branding, Roblox redirects/scopes/availability, redeployment and end-to-end sign-in/linking checks. Do not register duplicate apps or describe them as active.
