// Tells IndexNow search engines (Bing, Yandex, Seznam, Naver; Bing also feeds
// ChatGPT search and Copilot) which pages changed, so they recrawl quickly.
//
// Usage: node scripts/seo/indexnow.mjs [--all] [--dry-run]
//   default  URLs whose sitemap <lastmod> is within the last 3 days
//   --all    every URL in the live sitemap (after large redesigns)
// Reads the deployed sitemap, so run it after a deploy has finished.
const SITE = 'https://animalbattlestats.com';
const KEY = 'b2e2551b162d2ae09bacd477ffcda84b';
const args = new Set(process.argv.slice(2));

const sitemap = await fetch(`${SITE}/sitemap.xml`).then((response) => {
    if (!response.ok) throw new Error(`sitemap ${response.status}`);
    return response.text();
});
const cutoff = Date.now() - 3 * 24 * 60 * 60 * 1000;
const urls = [...sitemap.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g)]
    .filter(([, , lastmod]) => args.has('--all') || Date.parse(lastmod) >= cutoff)
    .map(([, loc]) => loc);

const keyCheck = await fetch(`${SITE}/${KEY}.txt`).then((response) => (response.ok ? response.text() : ''));
if (keyCheck.trim() !== KEY) throw new Error('The IndexNow key file is not live yet; deploy first.');

console.log(`${urls.length} URLs to submit${args.has('--dry-run') ? ' (dry run)' : ''}.`);
if (!urls.length || args.has('--dry-run')) process.exit(0);

// A key file deployed moments ago can still be rejected (403) while the
// engines verify it, so one retry follows a short wait.
async function submit(urlList) {
    for (let attempt = 1; attempt <= 2; attempt += 1) {
        const response = await fetch('https://api.indexnow.org/indexnow', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json; charset=utf-8' },
            body: JSON.stringify({ host: new URL(SITE).host, key: KEY, keyLocation: `${SITE}/${KEY}.txt`, urlList })
        });
        console.log(`IndexNow: ${response.status} ${response.statusText} for ${urlList.length} URLs`);
        if (response.status !== 403 || attempt === 2) return response.status < 400;
        await new Promise((resolve) => setTimeout(resolve, 30000));
    }
    return false;
}

for (let start = 0; start < urls.length; start += 10000) {
    if (!await submit(urls.slice(start, start + 10000))) process.exitCode = 1;
}
