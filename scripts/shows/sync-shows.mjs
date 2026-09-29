// Brings ABS Originals episodes from the Shorts workspace onto the site:
// data/show-episodes.json (titles, hooks, summaries, YouTube/TikTok/X ids,
// durations, upload dates and dialogue transcripts) plus the episode posters,
// season posters and show logos under images/shows/ and the social cards
// under images/og/shows/ (both deployed as /images/...).
//
// Usage: node scripts/shows/sync-shows.mjs [--shorts <dir>] [--posters <dir>] [--force]
//   --shorts   the Shorts workspace (default: ../../ChatGPT/Animal Battle Stats Shorts, or ABS_SHORTS_DIR)
//   --posters  where tools/yt_poster.py left <id>-yt.jpg and <show>-s1-yt.jpg
//              (default: <shorts>/out/posters, or ABS_POSTERS_DIR)
//   --force    rewrite images that already exist
// Only episodes with a YouTube full-episode id are published. Upload dates and
// lengths missing locally are read from each public YouTube watch page once and
// then kept in the JSON, so later runs work offline.
import fs from 'node:fs';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const argv = process.argv.slice(2);
const option = (name, fallback) => {
    const index = argv.indexOf(name);
    return index >= 0 && argv[index + 1] ? argv[index + 1] : fallback;
};
const force = argv.includes('--force');
const shorts = path.resolve(option('--shorts', process.env.ABS_SHORTS_DIR || path.join(root, '..', '..', 'ChatGPT', 'Animal Battle Stats Shorts')));
const posters = path.resolve(option('--posters', process.env.ABS_POSTERS_DIR || path.join(shorts, 'out', 'posters')));
const outFile = path.join(root, 'data', 'show-episodes.json');
const imageDir = path.join(root, 'images', 'shows');
const ogDir = path.join(root, 'images', 'og', 'shows');

const readJson = (file) => JSON.parse(fs.readFileSync(file, 'utf8'));
if (!fs.existsSync(path.join(shorts, 'data', 'releases.json'))) {
    console.error(`No Shorts workspace at ${shorts}. Pass --shorts <dir>.`);
    process.exit(1);
}

const releases = readJson(path.join(shorts, 'data', 'releases.json'));
const meta = readJson(path.join(shorts, 'data', 'youtube_meta.json'));
const shows = readJson(path.join(root, 'data', 'shows.json')).shows;
const previous = fs.existsSync(outFile) ? readJson(outFile) : { episodes: [], seasons: [] };
const before = new Map([...previous.episodes, ...previous.seasons].map((entry) => [entry.id, entry]));

const SMALL = new Set(['a', 'an', 'and', 'at', 'by', 'for', 'in', 'of', 'on', 'or', 'the', 'to']);
function titleCase(text) {
    return String(text).toLowerCase().split(/(\s+|-)/).map((word, index) => {
        if (!word.trim() || word === '-') return word;
        if (index > 0 && SMALL.has(word)) return word;
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join('');
}
const slugify = (text) => String(text).toLowerCase().normalize('NFKD').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

// The dialogue, in order, from the episode's scene file.
function transcript(showSlug, number) {
    const file = path.join(shorts, 'data', 'series', showSlug, `ep${String(number).padStart(2, '0')}.json`);
    if (!fs.existsSync(file)) return [];
    const episode = readJson(file);
    const lines = [];
    for (const scene of episode.scenes || []) {
        for (const line of scene.lines || []) {
            const text = String(line.text || '').replace(/\s+/g, ' ').trim();
            if (!text) continue;
            const who = titleCase(episode.cast?.[line.who]?.name || line.who || '');
            lines.push({ who, text });
        }
    }
    return lines;
}

function probeSeconds(file) {
    if (!fs.existsSync(file)) return null;
    try {
        const out = execFileSync('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', file], { encoding: 'utf8' });
        const seconds = Math.round(Number(out.trim()));
        return Number.isFinite(seconds) && seconds > 0 ? seconds : null;
    } catch {
        return null;
    }
}

async function youtubeFacts(videoId) {
    try {
        const response = await fetch(`https://www.youtube.com/watch?v=${videoId}`, { headers: { 'User-Agent': 'Mozilla/5.0', 'Accept-Language': 'en-US' } });
        const html = await response.text();
        return {
            uploadDate: html.match(/"uploadDate":"([^"]+)"/)?.[1] || null,
            seconds: Number(html.match(/"lengthSeconds":"(\d+)"/)?.[1]) || null
        };
    } catch {
        return { uploadDate: null, seconds: null };
    }
}

// Chapters from a season description ("1:59 Episode 3: The Warden").
function chapters(description) {
    return [...String(description || '').matchAll(/^(\d+):(\d{2})\s+Episode\s+(\d+):\s*(.+)$/gm)]
        .map((match) => ({ at: Number(match[1]) * 60 + Number(match[2]), number: Number(match[3]), title: match[4].trim() }));
}

async function writeImages(id, source) {
    if (!fs.existsSync(source)) return false;
    const large = path.join(imageDir, `${id}.webp`);
    const small = path.join(imageDir, `${id}-640.webp`);
    const og = path.join(ogDir, `${id}.jpg`);
    if (force || !fs.existsSync(large)) await sharp(source).resize(1280, 720, { fit: 'cover' }).webp({ quality: 72 }).toFile(large);
    if (force || !fs.existsSync(small)) await sharp(source).resize(640, 360, { fit: 'cover' }).webp({ quality: 70 }).toFile(small);
    if (force || !fs.existsSync(og)) {
        // 1200x630 social card: the 16:9 poster centred on a blurred copy of itself.
        const back = await sharp(source).resize(1200, 630, { fit: 'cover' }).blur(28).modulate({ brightness: 0.55 }).toBuffer();
        const front = await sharp(source).resize(1120, 630, { fit: 'inside' }).toBuffer();
        await sharp(back).composite([{ input: front, gravity: 'center' }]).jpeg({ quality: 82, mozjpeg: true }).toFile(og);
    }
    return true;
}

fs.mkdirSync(imageDir, { recursive: true });
fs.mkdirSync(ogDir, { recursive: true });

for (const show of shows) {
    const logo = path.join(shorts, 'video', 'public', 'logos', `${show.slug}.png`);
    const target = path.join(imageDir, `${show.slug}-logo.webp`);
    if (fs.existsSync(logo) && (force || !fs.existsSync(target))) {
        await sharp(logo).trim().resize({ width: 720, withoutEnlargement: true }).webp({ quality: 82, alphaQuality: 90 }).toFile(target);
    }
}

const episodes = [];
const missingPosters = [];
for (const [id, release] of Object.entries(releases)) {
    if (!release.yt_wide_id || !shows.some((show) => show.slug === release.show)) continue;
    const number = Number(String(release.ep).replace(/\D/g, ''));
    const title = titleCase(release.title);
    const copy = meta.episodes?.[id] || {};
    const old = before.get(id) || {};
    let { uploadDate = null, seconds = null } = old;
    seconds = seconds || probeSeconds(path.join(shorts, 'out', 'final', `${id}-wide.mp4`));
    if (!uploadDate || !seconds) {
        const facts = await youtubeFacts(release.yt_wide_id);
        uploadDate = uploadDate || facts.uploadDate;
        seconds = seconds || facts.seconds;
    }
    if (!(await writeImages(id, path.join(posters, `${id}-yt.jpg`)))) missingPosters.push(`${id}-yt.jpg`);
    episodes.push({
        id,
        show: release.show,
        number,
        slug: `episode-${number}-${slugify(title)}`,
        title,
        hook: copy.hook || title,
        summary: copy.summary || '',
        youtube: release.yt_wide_id,
        youtubeShort: release.yt_short_id || null,
        tiktok: release.tiktok_id || null,
        x: release.x_status || null,
        seconds,
        uploadDate,
        transcript: transcript(release.show, number)
    });
}
episodes.sort((a, b) => a.show.localeCompare(b.show) || a.number - b.number);

const seasons = [];
for (const [showSlug, season] of Object.entries(meta.seasons || {})) {
    if (!season || typeof season !== 'object' || !season.yt_id) continue;
    const id = `${showSlug}-s1`;
    const old = before.get(id) || {};
    let { uploadDate = null, seconds = null } = old;
    if (!uploadDate || !seconds) {
        const facts = await youtubeFacts(season.yt_id);
        uploadDate = uploadDate || facts.uploadDate;
        seconds = seconds || facts.seconds;
    }
    if (!(await writeImages(id, path.join(posters, `${id}-yt.jpg`)))) missingPosters.push(`${id}-yt.jpg`);
    seasons.push({ id, show: showSlug, season: 1, title: season.title, youtube: season.yt_id, seconds, uploadDate, chapters: chapters(season.description) });
}

const output = {
    _note: 'Generated by scripts/shows/sync-shows.mjs from the Shorts workspace. Do not edit by hand; edit data/shows.json for show info.',
    episodes,
    seasons
};
fs.writeFileSync(outFile, `${JSON.stringify(output, null, 2)}\n`);
console.log(`Wrote ${path.relative(root, outFile)}: ${episodes.length} episodes, ${seasons.length} full seasons.`);
if (missingPosters.length) console.warn(`No poster for: ${missingPosters.join(', ')} (run tools/yt_poster.py in the Shorts workspace, then sync again).`);
