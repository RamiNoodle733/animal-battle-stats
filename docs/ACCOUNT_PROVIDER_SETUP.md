# Account providers: production activation

The site supports password, Google, Roblox and GitHub accounts. OAuth identities can be connected from **Profile → Account** without moving or duplicating cards, rewards or votes. Users who already have an ABS account must sign in to it before linking another provider. Matching email addresses alone never link GitHub accounts. Disconnecting the last sign-in method is refused; OAuth-only users can add an ABS password first.

As verified on October 12, 2026, the public `/api/auth?action=providers` endpoint reports Google, Roblox and email delivery as **not configured**. GitHub also requires its own OAuth application. Code availability is not production activation: provider-owned applications and their secrets are necessary.

Create or select the applications in the owner's dashboards, then put the client IDs and secrets in **the existing ABS Vercel project's Production environment variables**. Keep secrets in the provider dashboard and Vercel; never commit them or paste them into a chat. Redeploy after adding variables. The login/signup buttons appear only when the server confirms configuration.

| Provider | Owner dashboard | Production callback | Required variables |
| --- | --- | --- | --- |
| Google | [Google Auth Platform](https://console.cloud.google.com/auth/clients) | `https://animalbattlestats.com/api/auth?action=google-callback` | `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` |
| Roblox | [Creator Hub credentials](https://create.roblox.com/dashboard/credentials) | `https://animalbattlestats.com/api/auth?action=roblox-callback` | `ROBLOX_CLIENT_ID`, `ROBLOX_CLIENT_SECRET` |
| GitHub | [OAuth applications](https://github.com/settings/developers) | `https://animalbattlestats.com/api/auth?action=github-callback` | `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` |

For Google, use a **Web application** client with authorized JavaScript origin `https://animalbattlestats.com`. Configure the consent application's public name, support address and the site's `/privacy` and `/terms` URLs. Publish the consent configuration when ready; a testing-only audience limits who can sign in.

For Roblox, register the OAuth application for this website, with `openid` and `profile` scopes and the exact callback above. Publish/approve the application as required in Creator Hub. Game-save synchronization uses a separate Open Cloud credential and is not required just to authenticate.

For GitHub, use application name **Animal Battle Stats**, homepage `https://animalbattlestats.com`, and the exact callback above. The site requests only `read:user` and `user:email`, uses PKCE, and never stores the resulting access token. Repository permissions are not needed. [GitHub's authorization documentation](https://docs.github.com/en/apps/oauth-apps/building-oauth-apps/authorizing-oauth-apps).

Email verification and recovery also need a mail provider. Set `EMAIL_WEBHOOK_URL`, `EMAIL_WEBHOOK_TOKEN` and `EMAIL_FROM` for the existing mail integration; see `DEPLOYMENT.md`. The sender domain must be verified with the chosen provider. Passwords can be changed inside Account settings without email delivery, but forgotten-password recovery cannot send mail until this is configured.

After activation, verify a new account, a returning account and linking to an existing account for each provider. Confirm that cancel/expired callbacks leave users signed out and that trying to link an identity used by another ABS account is refused. Verify a password-reset email arrives before describing recovery as enabled.

## Analytics and search checks

GA4 property **Animal Battle Stats** (`521413666`, stream `G-NQ328W18LX`) was checked in the signed-in dashboard. The previous seven days showed about 1.8K active users, 2K sessions and 258 organic-search sessions. About 1.6K users were attributed to Singapore and most sessions were Direct. This concentration deserves further investigation; geography alone does not establish bots or fake traffic, and no stored activity was removed.

The new measurement events are `sign_up`, `login`, `social_click` (`social_platform`), `roblox_interest`, and `roblox_play_click`. Account names, emails, comments, credentials and OAuth state are not sent as event parameters. Public-profile names and sensitive query parameters are removed from page locations. [GA4 event documentation](https://developers.google.com/analytics/devguides/collection/ga4/events).

On October 12, `sign_up`, `roblox_play_click` and `social_click` were registered and marked as key events in the existing GA4 property. The event-scoped **Social platform** custom dimension was saved for `social_platform`. Existing key events were preserved. These settings are ready for new traffic; they do not retroactively populate measurements that were not collected.

Search Console's October 8 report showed **219 indexed** pages, **1,119 discovered but not yet indexed**, **16 crawled but not indexed**, and three historical 404s (`/login`, `/signup`, `/reset-password`). All three now return 200 and Google validation was started October 12. Indexing status is controlled by Google and changes asynchronously; a validation request is not a claim that indexing is finished. Keep intentional noindex on account pages. Sitemap submission should use `https://animalbattlestats.com/sitemap.xml` after the release is live.
