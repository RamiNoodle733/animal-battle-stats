// Writes dist/sitemap.xml from the built pages, with image entries for every
// animal and matchup page. Pages marked noindex and 404 are skipped.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const SITE = 'https://animalbattlestats.com';
const SKIP = new Set(['404.html']);

const profiles = JSON.parse(fs.readFileSync(path.join(root, 'data', 'animal-profiles.json'), 'utf8')).animals;
// ABS Originals episodes get video entries (Google video search).
const showFile = path.join(root, 'data', 'show-episodes.json');
const showEpisodes = fs.existsSync(showFile) ? JSON.parse(fs.readFileSync(showFile, 'utf8')).episodes : [];
const showNames = Object.fromEntries(JSON.parse(fs.readFileSync(path.join(root, 'data', 'shows.json'), 'utf8')).shows.map((show) => [show.slug, show.name]));
const episodeByPath = new Map(showEpisodes.map((episode) => [`/shows/${episode.show}/${episode.slug}`, episode]));
const showDates = (slug) => showEpisodes.filter((episode) => !slug || episode.show === slug).map((episode) => String(episode.uploadDate || '').slice(0, 10)).filter(Boolean).sort();
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
            if (['_astro', 'images', 'data'].includes(entry.name) && !prefix) continue;
            files.push(...htmlFiles(path.join(directory, entry.name), relative));
        } else if (entry.name.endsWith('.html') && !SKIP.has(relative)) {
            files.push(relative);
        }
    }
    return files;
}

function lastmodFor(pathname) {
    const episode = episodeByPath.get(pathname);
    if (episode?.uploadDate) return episode.uploadDate.slice(0, 10);
    const show = pathname.match(/^\/shows(?:\/([a-z0-9-]+))?$/);
    if (show) return showDates(show[1]).at(-1) || latestResearch;
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
    const episode = episodeByPath.get(pathname);
    const video = episode ? {
        thumbnail: `${SITE}/images/og/shows/${episode.id}.jpg`,
        title: `${showNames[episode.show] || episode.show} Episode ${episode.number}: ${episode.title}`,
        description: episode.summary || episode.hook,
        player: `https://www.youtube.com/embed/${episode.youtube}`,
        duration: Math.round(Number(episode.seconds) || 0),
        published: episode.uploadDate
    } : null;
    if (episode) images.push({ loc: `${SITE}/images/shows/${episode.id}.webp` });
    entries.push({ loc: canonical, lastmod: lastmodFor(pathname), images, video });
}

const unique = [...new Map(entries.map((entry) => [entry.loc, entry])).values()]
    .sort((a, b) => (a.loc === `${SITE}/` ? -1 : b.loc === `${SITE}/` ? 1 : a.loc.localeCompare(b.loc)));

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${unique.map((entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${entry.lastmod}</lastmod>${entry.images.map((image) => `
    <image:image><image:loc>${escapeXml(image.loc)}</image:loc></image:image>`).join('')}${entry.video ? `
    <video:video>
      <video:thumbnail_loc>${escapeXml(entry.video.thumbnail)}</video:thumbnail_loc>
      <video:title>${escapeXml(entry.video.title)}</video:title>
      <video:description>${escapeXml(entry.video.description)}</video:description>
      <video:player_loc>${escapeXml(entry.video.player)}</video:player_loc>
      <video:duration>${entry.video.duration}</video:duration>${entry.video.published ? `
      <video:publication_date>${escapeXml(entry.video.published)}</video:publication_date>` : ''}
      <video:family_friendly>yes</video:family_friendly>
    </video:video>` : ''}
  </url>`).join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(dist, 'sitemap.xml'), xml);
console.log(`Wrote dist/sitemap.xml with ${unique.length} URLs.`);
