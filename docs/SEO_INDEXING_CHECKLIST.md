# SEO Indexing Checklist

## What Was Wrong

Google Search Console could read `https://animalbattlestats.com/sitemap.xml`, but most sitemap URLs were SPA fallback pages. Animal URLs such as `/stats/african-elephant` returned `200`, yet the initial HTML was the same `index.html` shell as the homepage:

- Homepage title and description.
- Homepage canonical URL.
- No crawlable animal-specific profile content before JavaScript.
- Multiple template headings from inactive views.

That made many discovered animal URLs look duplicate or thin to crawlers even though the client-side app could render them for users.

## What Changed

- The first SEO fix rendered crawlable pages through `api/seo.js`, but that added a 13th Vercel Serverless Function and failed on the Hobby plan.
- Public SEO routes now use committed static prerendered HTML files instead of a serverless renderer.
- Animal pages at `/stats/<slug>` include unique title, description, canonical, H1, structured data, stats, habitat, diet, measurements, description, and internal links.
- `sitemap.xml` is generated from `animal_stats.json` and includes only canonical public URLs.
- `robots.txt` remains permissive and points to the sitemap.
- `scripts/seo-audit.mjs` checks sitemap URLs for status, redirects, title, description, canonical, noindex, and H1 coverage.

## How To Run The Audit

Regenerate static SEO pages and the sitemap:

```bash
npm run seo:prerender
npm run seo:sitemap
```

Audit production:

```bash
npm run seo:audit -- --write
```

Audit a local clean-URL static server:

```bash
npm run build
npm run preview:readonly -- 3000 dist
# In another terminal:
npm run seo:audit -- --sitemap sitemap.xml --base http://127.0.0.1:3000
```

The JSON report is written to `reports/seo-audit.json` when `--write` is passed.

## Google Search Console After Deploy

1. Inspect these URLs first:
   - `https://animalbattlestats.com/`
   - `https://animalbattlestats.com/stats`
   - `https://animalbattlestats.com/stats/african-elephant`
   - `https://animalbattlestats.com/stats/great-white-shark`
   - `https://animalbattlestats.com/rankings`
2. Use URL Inspection and confirm Google sees the final canonical as the inspected URL.
3. Confirm rendered HTML contains the animal name, stats, habitat, diet, and profile content.
4. Resubmit `https://animalbattlestats.com/sitemap.xml` if the sitemap timestamp has not refreshed.
5. Request validation for:
   - Discovered - currently not indexed
   - Crawled - currently not indexed
   - Page with redirect, if any old examples remain

## Ongoing Checks

- Run `npm run seo:prerender` whenever animal data or route SEO templates change.
- Run `npm run seo:sitemap` whenever animal data changes.
- Run `npm run seo:audit -- --write` after each deployment that touches routes, metadata, sitemap, or animal data.
- Keep auth, profile, API, and other private or low-value utility routes out of the sitemap.
- Do not use `robots.txt` for noindex behavior.

## Battle preview and search crawlers (2.11.0)

- Build now regenerates the sitemap. `/battle` and `/methodology` contain static visible content and self-canonicals. Pair parameters canonicalize to `/battle`; they are not thousands of separately indexed matchup pages. Editorial pair pages remain a future quality-gated feature.
- `OAI-SearchBot` serves search discovery. `GPTBot` is a separate training-policy control. Both were already allowed; the training policy has not been changed. See [OpenAI's crawler documentation](https://platform.openai.com/docs/bots).
- After deployment fetch `/robots.txt`, `/sitemap.xml`, `/battle`, `/methodology` and a sample animal profile using the `OAI-SearchBot` user-agent. Check 200 responses, page content and no blocking X-Robots-Tag. A user-agent probe checks routing only; use CDN logs and official crawler IP ranges to verify genuine crawler traffic when that access is available.
- In Search Console inspect canonical/rendered content and sitemap ingestion. The local audit does not prove indexing, rankings or AI citations. Follow [Google's AI search guidance](https://developers.google.com/search/docs/appearance/ai-features) and accurate visible-content schema.
- Keep private routes and unsupported/empty pages out of the sitemap; do not use robots disallow as a substitute for noindex. Do not attach QAPage or fabricated review markup to the preview.
