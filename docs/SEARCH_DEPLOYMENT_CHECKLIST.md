# Search and crawler deployment checklist

Use this checklist for every release that changes public routes, canonical metadata, structured data, internal navigation, robots rules, or CDN/security policy.

## Automated release checks

From the repository root, build first and then run:

```powershell
npm run build
npm run seo:contracts -- http://127.0.0.1:3000
npm run seo:audit -- --sitemap sitemap.xml --base http://127.0.0.1:3000
```

After the exact release commit is live, run:

```powershell
npm run seo:contracts
npm run seo:audit
```

The contract check verifies the 234 unique absolute sitemap URLs, OAI-SearchBot access, metadata and JSON-LD on representative routes, canonical query variants, true 404s, the clean `.html` redirect in production, and reachable internal destinations. The complete SEO audit checks every sitemap URL.

## SearchBot and training are separate controls

OpenAI documents `OAI-SearchBot` as the crawler used for ChatGPT search results and `GPTBot` as the control for possible training use. Their robots rules are independent. This repository explicitly allows both because that is the existing policy; enabling search discovery must never be used as a reason to change the training rule silently.

Repository and HTTP checks can prove that an OAI-SearchBot user agent is not blocked by the deployed application. They cannot prove that an upstream firewall has correctly allowed every published OpenAI crawler IP or that a page has been indexed. Check the hosting firewall/CDN dashboard against OpenAI's current published `searchbot.json` ranges when firewall rules change.

## Human/external checks

- Confirm the production `version.json` commit matches the release commit before recording results.
- Inspect representative desktop/mobile pages with JavaScript disabled; the title, direct page purpose, navigation and main content must remain visible.
- Validate changed JSON-LD with Google's Rich Results Test when its type is eligible. A valid `WebPage` or `Dataset` does not guarantee a rich result.
- In Search Console, inspect the homepage, one changed tool page and one changed animal profile. Record Google-selected canonical, crawl state and sitemap processing separately from local checks.
- Preserve one self-canonical URL per public page in both HTML and the sitemap. Do not add filter/query URLs or arbitrary animal pairs to the sitemap.
- Confirm removed public URLs use an intentional permanent redirect to the closest equivalent; unknown content must return 404 rather than the homepage.
- Do not claim indexing, ranking, AI citation, or field performance from a successful deployment check alone.

Current official references: [Google canonicalization](https://developers.google.com/search/docs/crawling-indexing/canonicalization), [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap), and [OpenAI crawler controls](https://developers.openai.com/api/docs/bots).
