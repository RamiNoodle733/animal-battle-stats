// Writes dist/sitemap.xml from the built pages, with image entries for every
// animal and matchup page. Pages marked noindex, app shells and 404 are skipped.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const SITE = 'https://animalbattlestats.com';
const SKIP = new Set(['app.html', '404.html']);

const profiles = JSON.parse(fs.readFileSync(path.join(root, 'data', 'animal-profiles.json'), 'utf8')).animals;
const today = new Date().toISOString().slice(0, 10);
const researchDates = Object.values(profiles).map((profile) => profile.researchedAt).filter(Boolean).sort();
const latestResearch = researchDates.at(-1) || today;

function escapeXml(value) {
    return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}

function htmlFiles(directory, prefix = '') {
    const files = [];
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
        const relative = path.posix.join(prefix, entry.name);
        if (entry.isDirectory()) {
            if (['_astro', 'images', 'css', 'js', 'data'].includes(entry.name) && !prefix) continue;
            files.push(...htmlFiles(path.join(directory, entry.name), relative));
        } else if (entry.name.endsWith('.html') && !SKIP.has(relative)) {
            files.push(relative);
        }
    }
    return files;
}

function lastmodFor(pathname) {
    const animal = pathname.match(/^\/stats\/([a-z0-9-]+)$/);
    if (animal) return profiles[animal[1]]?.researchedAt || latestResearch;
    const pair = pathname.match(/^\/compare\/([a-z0-9-]+)-vs-([a-z0-9-]+)$/);
    if (pair) return [profiles[pair[1]]?.researchedAt, profiles[pair[2]]?.researchedAt].filter(Boolean).sort().at(-1) || latestResearch;
    return latestResearch;
}

const entries = [];
for (const file of htmlFiles(dist)) {
    const html = fs.readFileSync(path.join(dist, file), 'utf8');
    if (/<meta name="robots" content="noindex/i.test(html)) continue;
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
    if (!canonical || !canonical.startsWith(SITE)) continue;
    const pathname = new URL(canonical).pathname;
    const images = [];
    const og = html.match(/<meta property="og:image" content="([^"]+)"/i)?.[1];
    if (/^\/(stats|compare)\//.test(pathname)) {
        for (const match of html.matchAll(/<img[^>]+src="(\/images\/animals\/v\/[^"]+)"[^>]*alt="([^"]*)"/g)) {
            if (images.length >= 2) break;
            if (match[2]) images.push({ loc: `${SITE}${match[1]}`, title: match[2] });
        }
        if (og) images.push({ loc: og, title: html.match(/<meta property="og:image:alt" content="([^"]+)"/i)?.[1] || '' });
    }
    entries.push({ loc: canonical, lastmod: lastmodFor(pathname), images });
}

const unique = [...new Map(entries.map((entry) => [entry.loc, entry])).values()]
    .sort((a, b) => (a.loc === `${SITE}/` ? -1 : b.loc === `${SITE}/` ? 1 : a.loc.localeCompare(b.loc)));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${unique.map((entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${entry.lastmod}</lastmod>${entry.images.map((image) => `
    <image:image><image:loc>${escapeXml(image.loc)}</image:loc></image:image>`).join('')}
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(dist, 'sitemap.xml'), xml);
console.log(`Wrote dist/sitemap.xml with ${unique.length} URLs.`);
