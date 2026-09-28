#!/usr/bin/env node
'use strict';

// Renders the social posts in social/posts/*.json into ready-to-post slides:
//
//   .cache/social/out/<id>/tiktok/NN.png     1080x1920: TikTok photo mode,
//                                            Shorts, Reels and Stories
//   .cache/social/out/<id>/instagram/NN.png  1080x1350: Instagram and
//                                            Facebook carousels
//   .cache/social/out/<id>/caption.txt       caption, hashtags and credits
//   .cache/social/out/index.json             every post, for the gallery
//
// Post types (see social/README.md):
//   story   written slides over photos from social/media.json
//   versus  two animals, stats from the site's data and battle model
//   top     a countdown of five animals by one rating
//   quiz    guess the animal from its silhouette
//
// Animal photos, ratings and verdicts come from the site's own data and
// battle model, so a post never disagrees with animalbattlestats.com. Text is
// drawn as vector paths from the bundled @fontsource fonts, like the social
// cards (scripts/images/build-og.js).
//
// Usage: node scripts/social/render-posts.js [post-id ...]
// Story photos must be downloaded first: python scripts/social/fetch-media.py

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const metrics = require('../../lib/animal-metrics');
const battleModel = require('../../js/battle-engine');

const ROOT = path.resolve(__dirname, '..', '..');
const POSTS = path.join(ROOT, 'social', 'posts');
const MEDIA = path.join(ROOT, '.cache', 'social', 'media');
const OUT = path.join(ROOT, '.cache', 'social', 'out');
const MEDIA_INFO = JSON.parse(fs.readFileSync(path.join(ROOT, 'social', 'media.json'), 'utf8'));

// TikTok and Instagram cover the bottom of the screen with the caption and
// buttons, and the right edge with the like/comment column: text stays clear.
const FORMATS = {
    tiktok: { W: 1080, H: 1920, top: 190, bottom: 1520, left: 80, right: 940, title: 118, body: 50 },
    instagram: { W: 1080, H: 1350, top: 170, bottom: 1250, left: 80, right: 1000, title: 100, body: 44 }
};

const SERIES = {
    survival: { label: 'SURVIVAL STORIES', color: '#3cc4ff' },
    animal: { label: 'TRUE ANIMAL STORIES', color: '#ffc53d' },
    versus: { label: 'WHO WOULD WIN?', color: '#ff6b00' },
    top: { label: 'TOP 5', color: '#25e2a8' },
    quiz: { label: 'ANIMAL QUIZ', color: '#b08cff' }
};

const BIOMES = {
    savanna: '#e8a13a', forest: '#5fe08a', jungle: '#3ddc97', wetlands: '#4fd1c5',
    desert: '#ff9f4a', mountains: '#a9c4ff', arctic: '#c6ecff', ocean: '#28b6ff', arena: '#ff6b00'
};

const STATS = [
    ['attack', 'ATTACK', '#ff5a3c'],
    ['defense', 'DEFENSE', '#3f8cff'],
    ['agility', 'AGILITY', '#25e2a8'],
    ['stamina', 'STAMINA', '#ffc53d'],
    ['intelligence', 'INTELLIGENCE', '#b08cff'],
    ['special', 'SPECIAL', '#ff4fc3']
];

// ---------------------------------------------------------------- data

const slugify = metrics.slugify;
const RECORDS = JSON.parse(fs.readFileSync(path.join(ROOT, 'animal_stats.json'), 'utf8'));
const PROFILES = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'animal-profiles.json'), 'utf8')).animals || {};
const RANKED = new Map(metrics.rankAnimals(RECORDS).map((animal) => [slugify(animal.name), animal]));

function animal(slug) {
    const record = RANKED.get(slug);
    if (!record) throw new Error(`unknown animal: ${slug}`);
    return { ...record, slug, profile: PROFILES[slug] || {}, file: path.join(ROOT, record.image.split('?')[0]) };
}

const fmt = (value) => (Number.isInteger(Number(value)) ? String(Number(value)) : Number(value).toFixed(1));
const fmtWeight = (kg) => (!kg ? 'Unknown' : kg >= 1000 ? `${fmt(+(kg / 1000).toFixed(1))} t` : kg >= 1 ? `${Math.round(kg)} kg` : `${Math.round(kg * 1000)} g`);
const fmtLength = (cm) => (!cm ? 'Unknown' : cm >= 100 ? `${fmt(+(cm / 100).toFixed(1))} m` : `${Math.round(cm)} cm`);
const fmtSpeed = (mps) => (!mps ? 'No reliable measure' : `${Math.round(mps * 3.6)} km/h`);

// ---------------------------------------------------------------- text as paths

let FONTS = null;
async function loadFonts() {
    const { create } = await import('fontkitten');
    const load = (pkg, file) => ({ font: create(fs.readFileSync(path.join(ROOT, 'node_modules', '@fontsource', pkg, 'files', file))), glyphs: new Map() });
    FONTS = {
        display: load('big-shoulders-display', 'big-shoulders-display-latin-900-normal.woff2'),
        body: load('inter', 'inter-latin-700-normal.woff2'),
        heavy: load('inter', 'inter-latin-800-normal.woff2')
    };
}

function glyph(face, char) {
    if (!face.glyphs.has(char)) {
        const code = char.codePointAt(0);
        const g = face.font.hasGlyphForCodePoint(code) ? face.font.glyphForCodePoint(code) : face.font.glyphForCodePoint(32);
        face.glyphs.set(char, { d: g.path.toSVG(), advance: g.advanceWidth });
    }
    return face.glyphs.get(char);
}

function measure(faceName, value, size, tracking = 0) {
    const face = FONTS[faceName];
    const chars = [...value];
    return (chars.reduce((sum, char) => sum + glyph(face, char).advance, 0) * size) / face.font.unitsPerEm + tracking * Math.max(0, chars.length - 1);
}

function text(faceName, value, { x, y, size, anchor = 'start', fill = '#fff', tracking = 0, opacity = 1, stroke = null, strokeWidth = 0 }) {
    const face = FONTS[faceName];
    const scale = size / face.font.unitsPerEm;
    const width = measure(faceName, value, size, tracking);
    const left = anchor === 'middle' ? x - width / 2 : anchor === 'end' ? x - width : x;
    let cursor = 0;
    const parts = [];
    for (const char of value) {
        const g = glyph(face, char);
        if (g.d) parts.push(`<path transform="translate(${cursor.toFixed(1)} 0)" d="${g.d}"/>`);
        cursor += g.advance + tracking / scale;
    }
    const paint = `fill="${fill}"${opacity < 1 ? ` opacity="${opacity}"` : ''}${stroke ? ` stroke="${stroke}" stroke-width="${(strokeWidth / scale).toFixed(1)}" stroke-linejoin="round" paint-order="stroke"` : ''}`;
    return `<g transform="translate(${left.toFixed(1)} ${y.toFixed(1)}) scale(${scale.toFixed(5)} ${(-scale).toFixed(5)})" ${paint}>${parts.join('')}</g>`;
}

// Greedy word wrap; the size shrinks until the text fits in maxLines.
function wrap(faceName, value, size, maxWidth, maxLines = 99, minSize = size * 0.6) {
    let current = size;
    for (;;) {
        const lines = [];
        for (const paragraph of String(value).split('\n')) {
            let line = '';
            for (const word of paragraph.split(/\s+/).filter(Boolean)) {
                const next = line ? `${line} ${word}` : word;
                if (line && measure(faceName, next, current) > maxWidth) {
                    lines.push(line);
                    line = word;
                } else {
                    line = next;
                }
            }
            lines.push(line);
        }
        const fits = lines.length <= maxLines && lines.every((line) => measure(faceName, line, current) <= maxWidth);
        if (fits || current <= minSize) return { lines, size: current };
        current = Math.max(minSize, Math.floor(current * 0.93));
    }
}

function block(faceName, value, { x, y, size, maxWidth, maxLines, fill = '#fff', lineHeight = 1.18, anchor = 'start', stroke = 'rgba(0,0,0,.55)', strokeWidth = 0 }) {
    const { lines, size: fitted } = wrap(faceName, value, size, maxWidth, maxLines);
    const step = fitted * lineHeight;
    const svg = lines.map((line, index) => text(faceName, line, { x, y: y + fitted + index * step, size: fitted, fill, anchor, stroke: strokeWidth ? stroke : null, strokeWidth })).join('');
    return { svg, height: fitted + (lines.length - 1) * step, size: fitted };
}

// ---------------------------------------------------------------- shared pieces

function svgDoc(W, H, body, defs = '') {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><defs>${defs}</defs>${body}</svg>`;
}

function header(f, series, right) {
    const { color, label } = SERIES[series];
    const pad = 22;
    const size = f.W > 1000 ? 34 : 30;
    const width = measure('display', label, size, 2) + pad * 2;
    const y = f.top - 110;
    return `<rect x="${f.left}" y="${y}" width="${width}" height="${size + 22}" rx="6" fill="${color}"/>
        ${text('display', label, { x: f.left + pad, y: y + size + 4, size, fill: '#0b0e1a', tracking: 2 })}
        ${right ? text('display', right, { x: f.left + width + 20, y: y + size + 4, size, fill: '#fff', tracking: 2 }) : ''}
        ${text('display', 'ANIMALBATTLESTATS.COM', { x: f.left, y: y + size + 66, size: 26, fill: '#eef2ff', tracking: 2.5, opacity: 0.85 })}`;
}

function counter(f, index, total) {
    const dots = [];
    const gap = 16;
    const size = 10;
    const width = total * size + (total - 1) * gap;
    const x0 = (f.right + f.left) / 2 - width / 2;
    for (let i = 0; i < total; i += 1) {
        dots.push(`<rect x="${x0 + i * (size + gap)}" y="${f.top - 150}" width="${size}" height="${size}" rx="${size / 2}" fill="#fff" opacity="${i === index ? 0.95 : 0.35}"/>`);
    }
    return dots.join('');
}

// Dark, hex-patterned arena background in one or two biome glows.
function arena(f, left = 'arena', right = null) {
    const a = BIOMES[left] || BIOMES.arena;
    const b = right ? (BIOMES[right] || BIOMES.arena) : null;
    return svgDoc(f.W, f.H, `
        <rect width="${f.W}" height="${f.H}" fill="url(#base)"/>
        <rect width="${f.W}" height="${f.H}" fill="url(#ga)"/>
        ${b ? `<rect width="${f.W}" height="${f.H}" fill="url(#gb)"/>` : ''}
        <rect width="${f.W}" height="${f.H}" fill="url(#hex)"/>
        <rect width="${f.W}" height="${f.H}" fill="url(#vig)"/>
        <rect width="${f.W}" height="8" fill="url(#trim)"/>`, `
        <linearGradient id="base" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#101a3c"/><stop offset="1" stop-color="#050814"/></linearGradient>
        <radialGradient id="ga" cx="${b ? 0.3 : 0.5}" cy="${b ? 0.35 : 0.45}" r="0.6"><stop offset="0" stop-color="${a}" stop-opacity=".45"/><stop offset="1" stop-color="${a}" stop-opacity="0"/></radialGradient>
        ${b ? `<radialGradient id="gb" cx="0.7" cy="0.65" r="0.6"><stop offset="0" stop-color="${b}" stop-opacity=".45"/><stop offset="1" stop-color="${b}" stop-opacity="0"/></radialGradient>` : ''}
        <radialGradient id="vig" cx=".5" cy=".5" r=".75"><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".6"/></radialGradient>
        <pattern id="hex" width="28" height="48.5" patternUnits="userSpaceOnUse"><path d="M14 0 28 8.08v16.17L14 32.33 0 24.25V8.08zM14 32.33 28 40.42V56.58M14 32.33 0 40.42V56.58" fill="none" stroke="#b4c3ff" stroke-opacity=".08" stroke-width="1.2"/></pattern>
        <linearGradient id="trim" x1="0" x2="1"><stop offset="0" stop-color="#00d4ff"/><stop offset=".5" stop-color="#6ce7ff"/><stop offset="1" stop-color="#ff6b00"/></linearGradient>`);
}

// A photo filling the frame, darkened where the text sits. Slide options:
//   focus: which part of the photo to keep when cropping (sharp position)
//   crop:  [x0, y0, x1, y1] fractions, a close-up taken before fitting
//   fit:   "contain" shows the whole photo (maps, badges) over a blurred copy
async function photoBase(f, key, { focus = 'centre', crop = null, fit = 'cover' } = {}) {
    const file = path.join(MEDIA, `${key}.jpg`);
    if (!fs.existsSync(file)) throw new Error(`missing photo ${key}: run python scripts/social/fetch-media.py`);
    let source = sharp(file);
    if (crop) {
        const { width, height } = await sharp(file).metadata();
        const [x0, y0, x1, y1] = crop;
        source = sharp(await source.extract({ left: Math.round(x0 * width), top: Math.round(y0 * height), width: Math.round((x1 - x0) * width), height: Math.round((y1 - y0) * height) }).toBuffer());
    }
    const buffer = await source.toBuffer();
    let photo;
    if (fit === 'contain') {
        const backdrop = await sharp(buffer).resize(f.W, f.H, { fit: 'cover' }).blur(40).modulate({ brightness: 0.55 }).toBuffer();
        const front = await sharp(buffer).resize(f.W, Math.round(f.H * 0.62), { fit: 'inside' }).toBuffer();
        const meta = await sharp(front).metadata();
        photo = await sharp(backdrop).composite([{ input: front, left: Math.round((f.W - meta.width) / 2), top: Math.round(f.H * 0.12) }]).toBuffer();
    } else {
        photo = await sharp(buffer).resize(f.W, f.H, { fit: 'cover', position: focus }).modulate({ brightness: 0.92 }).toBuffer();
    }
    const shade = svgDoc(f.W, f.H, `<rect width="${f.W}" height="${f.H}" fill="url(#top)"/><rect width="${f.W}" height="${f.H}" fill="url(#bot)"/>`,
        `<linearGradient id="top" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#050814" stop-opacity=".85"/><stop offset=".22" stop-color="#050814" stop-opacity="0"/></linearGradient>
         <linearGradient id="bot" x1="0" y1="0" x2="0" y2="1"><stop offset=".35" stop-color="#050814" stop-opacity="0"/><stop offset=".72" stop-color="#050814" stop-opacity=".82"/><stop offset="1" stop-color="#050814" stop-opacity=".95"/></linearGradient>`);
    return sharp(photo).composite([{ input: Buffer.from(shade) }]).toBuffer();
}

async function cutout(file, maxW, maxH, { silhouette = null } = {}) {
    let image = sharp(file).trim({ threshold: 1 }).resize(Math.round(maxW), Math.round(maxH), { fit: 'inside' });
    if (silhouette) {
        const buffer = await image.ensureAlpha().png().toBuffer();
        const { width, height } = await sharp(buffer).metadata();
        const alpha = await sharp(buffer).extractChannel('alpha').toBuffer();
        return { input: await sharp({ create: { width, height, channels: 3, background: silhouette } }).joinChannel(alpha).png().toBuffer(), width, height };
    }
    const input = await image.png().toBuffer();
    const { width, height } = await sharp(input).metadata();
    return { input, width, height };
}

async function compose(base, layers, overlay, file) {
    const list = [...layers, { input: Buffer.from(overlay) }];
    await sharp(base).composite(list).png({ compressionLevel: 9 }).toFile(file);
}

// ---------------------------------------------------------------- story slides

async function storySlide(f, post, slide, index, total) {
    const base = await photoBase(f, slide.image, slide);
    const series = post.series;
    const color = SERIES[series].color;
    const width = f.right - f.left;
    const parts = [header(f, series, post.part ? `PART ${post.part}/${post.parts}` : null), counter(f, index, total)];
    // Text sits at the bottom of the safe area: measure every part, then draw
    // each one at its final position.
    const pieces = slide.kind === 'end'
        ? [
            ['display', slide.title || 'TO BE CONTINUED...', { size: f.title * 1.05, maxLines: 3, fill: color, strokeWidth: 4 }],
            ['body', slide.text || '', { size: f.body, maxLines: 6, lineHeight: 1.32, strokeWidth: 3 }]
        ]
        : [
            slide.kicker && ['display', slide.kicker, { size: f.body * 0.9, maxLines: 2, fill: color, strokeWidth: 3 }],
            slide.title && ['display', slide.title, { size: slide.kind === 'cover' ? f.title : f.title * 0.72, maxLines: 4, strokeWidth: 4 }],
            slide.text && ['body', slide.text, { size: f.body, maxLines: 8, lineHeight: 1.32, strokeWidth: 3 }]
        ].filter(Boolean);
    const gap = 30;
    const heights = pieces.map(([face, value, options]) => block(face, value, { ...options, x: f.left, y: 0, maxWidth: width }).height);
    let y = f.bottom - heights.reduce((sum, h) => sum + h, 0) - gap * (pieces.length - 1);
    pieces.forEach(([face, value, options], i) => {
        parts.push(block(face, value, { ...options, x: f.left, y, maxWidth: width }).svg);
        y += heights[i] + gap;
    });
    return { base, layers: [], overlay: svgDoc(f.W, f.H, parts.join('')) };
}

// ---------------------------------------------------------------- versus slides

function statRows(f, a, b, keys, top) {
    const rows = [];
    const barW = (f.right - f.left - 40) / 2;
    const rowH = f.H > 1500 ? 230 : 190;
    keys.forEach((key, i) => {
        const [, label, color] = STATS.find(([k]) => k === key);
        const y = top + i * rowH;
        const av = a[key] || 0;
        const bv = b[key] || 0;
        const mid = (f.left + f.right) / 2;
        rows.push(text('display', label, { x: mid, y: y + 44, size: 48, anchor: 'middle', fill: color, tracking: 3 }));
        rows.push(`<rect x="${mid - 20 - barW}" y="${y + 74}" width="${barW}" height="40" rx="8" fill="#2a3150"/>`);
        rows.push(`<rect x="${mid - 20 - barW * av / 100}" y="${y + 74}" width="${barW * av / 100}" height="40" rx="8" fill="${color}" opacity="${av >= bv ? 1 : 0.55}"/>`);
        rows.push(`<rect x="${mid + 20}" y="${y + 74}" width="${barW}" height="40" rx="8" fill="#2a3150"/>`);
        rows.push(`<rect x="${mid + 20}" y="${y + 74}" width="${barW * bv / 100}" height="40" rx="8" fill="${color}" opacity="${bv >= av ? 1 : 0.55}"/>`);
        rows.push(text('display', fmt(av), { x: f.left, y: y + 176, size: 60, fill: av >= bv ? '#fff' : '#9aa3c0' }));
        rows.push(text('display', fmt(bv), { x: f.right, y: y + 176, size: 60, anchor: 'end', fill: bv >= av ? '#fff' : '#9aa3c0' }));
    });
    return rows.join('');
}

async function versusSlides(f, post) {
    const a = animal(post.left);
    const b = animal(post.right);
    const result = battleModel.compare(a, b);
    const aWins = result.probability >= 0.5;
    const winner = aWins ? a : b;
    const loser = aWins ? b : a;
    const odds = Math.round((aWins ? result.probability : 1 - result.probability) * 100);
    const strength = odds >= 85 ? 'DECISIVE' : odds >= 70 ? 'CLEAR EDGE' : odds >= 58 ? 'SLIGHT EDGE' : 'TOSS-UP';
    const lead = result.factors[0];
    const mid = (f.left + f.right) / 2;
    const bgA = String(a.biome || 'arena').toLowerCase();
    const bgB = String(b.biome || 'arena').toLowerCase();
    const slides = [];
    const total = 7;
    const pair = async (hImg, yImg) => {
        const L = await cutout(a.file, f.W * 0.46, hImg);
        const R = await cutout(b.file, f.W * 0.46, hImg);
        return [
            { input: L.input, left: Math.round(f.W * 0.27 - L.width / 2), top: Math.round(yImg + hImg - L.height) },
            { input: R.input, left: Math.round(f.W * 0.73 - R.width / 2), top: Math.round(yImg + hImg - R.height) }
        ];
    };
    const names = (y) => text('display', a.name.toUpperCase(), { x: f.W * 0.27, y, size: 54, anchor: 'middle', stroke: '#050814', strokeWidth: 5 })
        + text('display', b.name.toUpperCase(), { x: f.W * 0.73, y, size: 54, anchor: 'middle', stroke: '#050814', strokeWidth: 5 });

    // 1: hook
    {
        const top = f.top + 40;
        const hImg = f.H > 1500 ? 620 : 470;
        const layers = await pair(hImg, top + 250);
        const svg = header(f, 'versus') + counter(f, 0, total)
            + block('display', post.hook || `${a.name} vs ${b.name}`.toUpperCase(), { x: mid, y: top, size: f.title, maxWidth: f.right - f.left, maxLines: 2, anchor: 'middle', strokeWidth: 4 }).svg
            + text('display', 'VS', { x: mid, y: top + 250 + hImg * 0.6, size: 170, anchor: 'middle', fill: SERIES.versus.color, stroke: '#050814', strokeWidth: 8 })
            + names(top + 250 + hImg + 80)
            + block('body', post.question || 'Who wins a real fight? Swipe for the stats, then comment your pick.', { x: mid, y: top + 250 + hImg + 130, size: f.body, maxWidth: f.right - f.left, maxLines: 4, anchor: 'middle', lineHeight: 1.3 }).svg;
        slides.push({ base: await sharp(Buffer.from(arena(f, bgA, bgB))).png().toBuffer(), layers, overlay: svgDoc(f.W, f.H, svg) });
    }
    // 2: tale of the tape
    {
        const rows = [
            ['WEIGHT', fmtWeight(a.weight_kg), fmtWeight(b.weight_kg)],
            ['LENGTH', fmtLength(a.length_cm), fmtLength(b.length_cm)],
            ['TOP SPEED', fmtSpeed(a.speed_mps), fmtSpeed(b.speed_mps)],
            ['POWER INDEX', fmt(a.powerIndex), fmt(b.powerIndex)],
            ['TIER', a.tier, b.tier]
        ];
        const top = f.top + 20;
        const hImg = f.H > 1500 ? 330 : 250;
        const layers = await pair(hImg, top + 150);
        let svg = header(f, 'versus') + counter(f, 1, total)
            + text('display', 'TALE OF THE TAPE', { x: mid, y: top + 90, size: 84, anchor: 'middle', fill: SERIES.versus.color, stroke: '#050814', strokeWidth: 4 })
            + names(top + 150 + hImg + 70);
        const rowH = f.H > 1500 ? 132 : 100;
        rows.forEach(([label, av, bv], i) => {
            const y = top + 150 + hImg + 130 + i * rowH;
            svg += `<rect x="${f.left - 20}" y="${y}" width="${f.right - f.left + 40}" height="${rowH - 14}" rx="10" fill="#0b0e1a" opacity=".72"/>`;
            svg += text('display', label, { x: mid, y: y + rowH * 0.58, size: 34, anchor: 'middle', fill: '#9aa3c0', tracking: 2 });
            svg += text('display', av, { x: f.left, y: y + rowH * 0.62, size: av.length > 12 ? 36 : 52 });
            svg += text('display', bv, { x: f.right, y: y + rowH * 0.62, size: bv.length > 12 ? 36 : 52, anchor: 'end' });
        });
        slides.push({ base: await sharp(Buffer.from(arena(f, bgA, bgB))).png().toBuffer(), layers, overlay: svgDoc(f.W, f.H, svg) });
    }
    // 3-5: stat rounds
    const rounds = [['attack', 'defense'], ['agility', 'stamina'], ['intelligence', 'special']];
    for (const [r, keys] of rounds.entries()) {
        const top = f.top + 20;
        const hImg = f.H > 1500 ? 380 : 260;
        const layers = await pair(hImg, top + 150);
        const svg = header(f, 'versus') + counter(f, 2 + r, total)
            + text('display', `ROUND ${r + 1}`, { x: mid, y: top + 90, size: 84, anchor: 'middle', fill: SERIES.versus.color, stroke: '#050814', strokeWidth: 4 })
            + names(top + 150 + hImg + 70)
            + statRows(f, a, b, keys, top + 150 + hImg + 110);
        slides.push({ base: await sharp(Buffer.from(arena(f, bgA, bgB))).png().toBuffer(), layers, overlay: svgDoc(f.W, f.H, svg) });
    }
    // 6: verdict
    {
        const top = f.top + 20;
        const hImg = f.H > 1500 ? 720 : 470;
        const W = await cutout(winner.file, f.W * 0.8, hImg);
        const layers = [{ input: W.input, left: Math.round(mid - W.width / 2), top: Math.round(top + 190 + hImg - W.height) }];
        const svg = header(f, 'versus') + counter(f, 5, total)
            + text('display', 'OUR VERDICT', { x: mid, y: top + 90, size: 84, anchor: 'middle', fill: SERIES.versus.color, stroke: '#050814', strokeWidth: 4 })
            + text('display', `${winner.name.toUpperCase()} WINS`, { x: mid, y: top + 190 + hImg + 110, size: Math.min(110, 110 * (f.right - f.left) / measure('display', `${winner.name.toUpperCase()} WINS`, 110)), anchor: 'middle', stroke: '#050814', strokeWidth: 5 })
            + text('display', `${odds}% OF FIGHTS  ·  ${strength}`, { x: mid, y: top + 190 + hImg + 190, size: 58, anchor: 'middle', fill: SERIES.versus.color })
            + block('body', post.verdict || `Biggest edge: ${lead.label.toLowerCase()}. The ${loser.name}'s best shot is its ${[...STATS].sort(([x], [y]) => ((loser[y] || 0) - (winner[y] || 0)) - ((loser[x] || 0) - (winner[x] || 0)))[0][1].toLowerCase()}.`, { x: mid, y: top + 190 + hImg + 230, size: f.body * 0.9, maxWidth: f.right - f.left, maxLines: 4, anchor: 'middle', lineHeight: 1.3 }).svg;
        slides.push({ base: await sharp(Buffer.from(arena(f, String(winner.biome || 'arena').toLowerCase()))).png().toBuffer(), layers, overlay: svgDoc(f.W, f.H, svg) });
    }
    // 7: call to action
    {
        const svg = header(f, 'versus') + counter(f, 6, total)
            + block('display', 'DO YOU AGREE?', { x: mid, y: f.top + 200, size: f.title * 1.1, maxWidth: f.right - f.left, maxLines: 2, anchor: 'middle', fill: SERIES.versus.color }).svg
            + block('body', `Comment ${a.name.toUpperCase()} or ${b.name.toUpperCase()}.\n\nEvery animal's full stats, sources and 250+ more matchups: animalbattlestats.com`, { x: mid, y: f.top + 420, size: f.body * 1.05, maxWidth: f.right - f.left, maxLines: 9, anchor: 'middle', lineHeight: 1.35 }).svg
            + text('display', 'NEXT MATCHUP? TELL US IN THE COMMENTS', { x: mid, y: f.bottom - 20, size: 44, anchor: 'middle', fill: '#eef2ff' });
        slides.push({ base: await sharp(Buffer.from(arena(f, bgA, bgB))).png().toBuffer(), layers: [], overlay: svgDoc(f.W, f.H, svg) });
    }
    return { slides, facts: { winner: winner.name, loser: loser.name, odds, strength, lead: lead.label } };
}

// ---------------------------------------------------------------- top 5

// Research facts are written for the site; social slides skip the ones full
// of jargon, and a post can set its own fact per animal ("facts": {slug: text}).
const JARGON = /[;µ]|telemetry|taxonom|translocat|morpha|\bdB\b|isotop|et al|per cent|study found/i;

function shortFact(entry, max = 150, override = null) {
    if (override) return override;
    const facts = entry.profile.funFacts || [];
    const fact = facts.find((item) => item.length <= max && !JARGON.test(item)) || entry.profile.summary || '';
    return fact.length <= max ? fact : `${fact.slice(0, max - 3).replace(/\s+\S*$/, '')}...`;
}

async function topSlides(f, post) {
    // "power" ranks by the site's power index; anything else is a rating.
    const key = post.stat === 'power' ? 'powerIndex' : post.stat;
    const [, label, color] = post.stat === 'power' ? [null, 'POWER', '#25e2a8'] : STATS.find(([k]) => k === key);
    const newAnimals = () => fs.readdirSync(path.join(ROOT, 'animal-research-for-update', 'new-animals'))
        .filter((name) => name.endsWith('.json') && !name.endsWith('.example.json')).map((name) => name.replace(/\.json$/, ''));
    const pool = post.animals
        ? post.animals.map(animal)
        : post.pool === 'new'
            ? newAnimals().map(animal)
        : [...RANKED.keys()].map(animal).filter((entry) => !entry.profile.extinct && entry.research_status === 'researched');
    const ranked = pool.sort((x, y) => (y[key] || 0) - (x[key] || 0) || y.powerIndex - x.powerIndex).slice(0, 5);
    const mid = (f.left + f.right) / 2;
    const total = 7;
    const slides = [];
    // cover: the five in a row
    {
        const layers = [];
        const hImg = f.H > 1500 ? 300 : 220;
        for (const [i, entry] of ranked.entries()) {
            const c = await cutout(entry.file, f.W * 0.34, hImg);
            const col = i % 3;
            const row = Math.floor(i / 3);
            const cx = row === 0 ? f.W * (0.2 + col * 0.3) : f.W * (0.35 + col * 0.3);
            const cy = f.top + 460 + row * (hImg + 40);
            layers.push({ input: c.input, left: Math.round(cx - c.width / 2), top: Math.round(cy + hImg - c.height) });
        }
        const svg = header(f, 'top') + counter(f, 0, total)
            + block('display', post.hook, { x: mid, y: f.top + 20, size: f.title, maxWidth: f.right - f.left, maxLines: 3, anchor: 'middle', strokeWidth: 4 }).svg
            + block('body', post.subtitle || `Ranked by our ${label.toLowerCase()} rating. Number 1 might surprise you.`, { x: mid, y: f.bottom - 150, size: f.body, maxWidth: f.right - f.left, maxLines: 3, anchor: 'middle', lineHeight: 1.3 }).svg;
        slides.push({ base: await sharp(Buffer.from(arena(f, 'arena'))).png().toBuffer(), layers, overlay: svgDoc(f.W, f.H, svg) });
    }
    for (let i = ranked.length - 1; i >= 0; i -= 1) {
        const entry = ranked[i];
        const hImg = f.H > 1500 ? 700 : 480;
        const c = await cutout(entry.file, f.W * 0.86, hImg);
        const top = f.top + 150;
        const layers = [{ input: c.input, left: Math.round(mid - c.width / 2), top: Math.round(top + hImg - c.height) }];
        const svg = header(f, 'top') + counter(f, 5 - i, total)
            + text('display', `#${i + 1}`, { x: f.left, y: f.top + 150, size: 190, fill: color, stroke: '#050814', strokeWidth: 6, opacity: 0.95 })
            + text('display', entry.name.toUpperCase(), { x: mid, y: top + hImg + 110, size: Math.min(104, 104 * (f.right - f.left) / measure('display', entry.name.toUpperCase(), 104)), anchor: 'middle', stroke: '#050814', strokeWidth: 5 })
            + text('display', `${label} ${fmt(entry[key])}${post.stat === 'power' ? '' : '/100'}`, { x: mid, y: top + hImg + 190, size: 60, anchor: 'middle', fill: color })
            + block('body', shortFact(entry, 150, post.facts?.[entry.slug]), { x: mid, y: top + hImg + 230, size: f.body * 0.86, maxWidth: f.right - f.left, maxLines: 4, anchor: 'middle', lineHeight: 1.3 }).svg;
        slides.push({ base: await sharp(Buffer.from(arena(f, String(entry.biome || 'arena').toLowerCase()))).png().toBuffer(), layers, overlay: svgDoc(f.W, f.H, svg) });
    }
    {
        const svg = header(f, 'top') + counter(f, 6, total)
            + block('display', post.outro || 'WHO DID WE MISS?', { x: mid, y: f.top + 220, size: f.title * 1.05, maxWidth: f.right - f.left, maxLines: 3, anchor: 'middle', fill: color }).svg
            + block('body', 'Comment the animal you think deserves a spot.\n\nFull rankings for all 273 animals: animalbattlestats.com', { x: mid, y: f.top + 540, size: f.body * 1.05, maxWidth: f.right - f.left, maxLines: 8, anchor: 'middle', lineHeight: 1.35 }).svg;
        slides.push({ base: await sharp(Buffer.from(arena(f, 'arena'))).png().toBuffer(), layers: [], overlay: svgDoc(f.W, f.H, svg) });
    }
    return { slides, facts: { ranking: ranked.map((entry) => `${entry.name} ${fmt(entry[key])}`) } };
}

// ---------------------------------------------------------------- quiz

async function quizSlides(f, post) {
    const mid = (f.left + f.right) / 2;
    const total = post.rounds.length * 2 + 2;
    const slides = [];
    {
        const first = animal(post.rounds[0].answer);
        const hImg = f.H > 1500 ? 760 : 520;
        const c = await cutout(first.file, f.W * 0.85, hImg, { silhouette: '#0b0e1a' });
        const glow = Buffer.from(svgDoc(f.W, f.H, `<ellipse cx="${mid}" cy="${f.top + 330 + hImg / 2}" rx="${f.W * 0.44}" ry="${hImg * 0.55}" fill="#c6ecff" opacity=".22"/>`));
        const layers = [{ input: glow }, { input: c.input, left: Math.round(mid - c.width / 2), top: Math.round(f.top + 330 + (hImg - c.height) / 2) }];
        const svg = header(f, 'quiz') + counter(f, 0, total)
            + block('display', post.hook || 'GUESS THE ANIMAL FROM ITS SHADOW', { x: mid, y: f.top + 20, size: f.title, maxWidth: f.right - f.left, maxLines: 3, anchor: 'middle', strokeWidth: 4 }).svg
            + block('body', `${post.rounds.length} rounds. Keep score and comment your total at the end.`, { x: mid, y: f.bottom - 120, size: f.body, maxWidth: f.right - f.left, maxLines: 3, anchor: 'middle', lineHeight: 1.3 }).svg;
        slides.push({ base: await sharp(Buffer.from(arena(f, 'arena'))).png().toBuffer(), layers, overlay: svgDoc(f.W, f.H, svg) });
    }
    for (const [r, round] of post.rounds.entries()) {
        const answer = animal(round.answer);
        const hImg = f.H > 1500 ? 720 : 480;
        const top = f.top + 150;
        const shadow = await cutout(answer.file, f.W * 0.85, hImg, { silhouette: '#0b0e1a' });
        const options = round.options.map((slug, i) => `${'ABC'[i]}.  ${animal(slug).name}`);
        let svg = header(f, 'quiz', `ROUND ${r + 1}/${post.rounds.length}`) + counter(f, 1 + r * 2, total)
            + text('display', 'WHO IS IT?', { x: mid, y: top + 10, size: 96, anchor: 'middle', fill: SERIES.quiz.color, stroke: '#050814', strokeWidth: 4 });
        options.forEach((option, i) => {
            const y = top + hImg + 90 + i * (f.H > 1500 ? 110 : 84);
            svg += `<rect x="${f.left}" y="${y}" width="${f.right - f.left}" height="${f.H > 1500 ? 90 : 70}" rx="12" fill="#0b0e1a" opacity=".8" stroke="${SERIES.quiz.color}" stroke-opacity=".6" stroke-width="3"/>`;
            svg += text('display', option.toUpperCase(), { x: f.left + 30, y: y + (f.H > 1500 ? 64 : 50), size: f.H > 1500 ? 54 : 44 });
        });
        slides.push({
            base: await sharp(Buffer.from(arena(f, 'arena'))).png().toBuffer(),
            layers: [
                { input: Buffer.from(svgDoc(f.W, f.H, `<ellipse cx="${mid}" cy="${top + 40 + hImg / 2}" rx="${f.W * 0.44}" ry="${hImg * 0.55}" fill="#c6ecff" opacity=".22"/>`)) },
                { input: shadow.input, left: Math.round(mid - shadow.width / 2), top: Math.round(top + 40 + (hImg - shadow.height) / 2) }
            ],
            overlay: svgDoc(f.W, f.H, svg)
        });
        const photo = await cutout(answer.file, f.W * 0.85, hImg);
        const right = String.fromCharCode(65 + round.options.indexOf(round.answer));
        const reveal = header(f, 'quiz', `ROUND ${r + 1}/${post.rounds.length}`) + counter(f, 2 + r * 2, total)
            + text('display', `IT'S ${right}!`, { x: mid, y: top + 10, size: 96, anchor: 'middle', fill: SERIES.quiz.color, stroke: '#050814', strokeWidth: 4 })
            + text('display', answer.name.toUpperCase(), { x: mid, y: top + hImg + 150, size: Math.min(104, 104 * (f.right - f.left) / measure('display', answer.name.toUpperCase(), 104)), anchor: 'middle', stroke: '#050814', strokeWidth: 5 })
            + block('body', shortFact(answer, 150, round.fact), { x: mid, y: top + hImg + 190, size: f.body * 0.86, maxWidth: f.right - f.left, maxLines: 4, anchor: 'middle', lineHeight: 1.3 }).svg;
        slides.push({
            base: await sharp(Buffer.from(arena(f, String(answer.biome || 'arena').toLowerCase()))).png().toBuffer(),
            layers: [{ input: photo.input, left: Math.round(mid - photo.width / 2), top: Math.round(top + 40 + (hImg - photo.height) / 2) }],
            overlay: svgDoc(f.W, f.H, reveal)
        });
    }
    {
        const svg = header(f, 'quiz') + counter(f, total - 1, total)
            + block('display', 'HOW MANY DID YOU GET?', { x: mid, y: f.top + 220, size: f.title * 1.05, maxWidth: f.right - f.left, maxLines: 3, anchor: 'middle', fill: SERIES.quiz.color }).svg
            + block('body', `Comment your score out of ${post.rounds.length}.\n\nMeet all 273 animals: animalbattlestats.com`, { x: mid, y: f.top + 540, size: f.body * 1.05, maxWidth: f.right - f.left, maxLines: 8, anchor: 'middle', lineHeight: 1.35 }).svg;
        slides.push({ base: await sharp(Buffer.from(arena(f, 'arena'))).png().toBuffer(), layers: [], overlay: svgDoc(f.W, f.H, svg) });
    }
    return { slides, facts: {} };
}

// ---------------------------------------------------------------- captions

function caption(post) {
    // The verdict stays on the last slide: a caption that names the winner
    // gives people no reason to swipe.
    const lines = [post.caption.trim(), '', (post.hashtags || []).map((tag) => `#${tag}`).join(' ')];
    const artist = (name) => {
        const clean = name.replace(/\s+/g, ' ').replace(/\s*\(\d{4}[–-]\d{4}\)/, '').trim().replace(/^(.+?) \1$/, '$1');
        return /^unknown/i.test(clean) ? 'unknown photographer' : clean;
    };
    const credits = [...new Set((post.slides || []).map((slide) => slide.image).filter(Boolean))]
        .map((key) => MEDIA_INFO[key])
        .filter(Boolean)
        .map((media) => `${artist(media.artist)} (${media.license.toLowerCase()})`);
    if (credits.length) lines.push('', `Photos: ${[...new Set(credits)].join('; ')}, via Wikimedia Commons.`);
    return `${lines.join('\n')}\n`;
}

// ---------------------------------------------------------------- main

async function renderPost(post) {
    const outDir = path.join(OUT, post.id);
    const summary = { id: post.id, type: post.type, series: post.series, title: post.title, part: post.part || null, parts: post.parts || null, slides: 0, facts: {} };
    for (const [name, f] of Object.entries(FORMATS)) {
        const dir = path.join(outDir, name);
        fs.rmSync(dir, { recursive: true, force: true });
        fs.mkdirSync(dir, { recursive: true });
        let built;
        if (post.type === 'story') {
            const slides = [];
            for (const [i, slide] of post.slides.entries()) slides.push(await storySlide(f, post, slide, i, post.slides.length));
            built = { slides, facts: {} };
        } else if (post.type === 'versus') {
            built = await versusSlides(f, post);
        } else if (post.type === 'top') {
            built = await topSlides(f, post);
        } else if (post.type === 'quiz') {
            built = await quizSlides(f, post);
        } else {
            throw new Error(`${post.id}: unknown type ${post.type}`);
        }
        for (const [i, slide] of built.slides.entries()) {
            await compose(slide.base, slide.layers, slide.overlay, path.join(dir, `${String(i + 1).padStart(2, '0')}.png`));
        }
        summary.slides = built.slides.length;
        summary.facts = built.facts;
    }
    const text = caption(post);
    fs.writeFileSync(path.join(outDir, 'caption.txt'), text);
    summary.caption = text;
    return summary;
}

async function main() {
    await loadFonts();
    const wanted = new Set(process.argv.slice(2));
    const files = fs.readdirSync(POSTS).filter((name) => name.endsWith('.json')).sort();
    const posts = files.map((name) => ({ ...JSON.parse(fs.readFileSync(path.join(POSTS, name), 'utf8')), id: name.replace(/\.json$/, '') }));
    const indexPath = path.join(OUT, 'index.json');
    const index = fs.existsSync(indexPath) ? JSON.parse(fs.readFileSync(indexPath, 'utf8')) : {};
    for (const post of posts) {
        if (wanted.size && !wanted.has(post.id)) continue;
        const started = Date.now();
        index[post.id] = await renderPost(post);
        console.log(`${post.id}: ${index[post.id].slides} slides x ${Object.keys(FORMATS).length} formats (${((Date.now() - started) / 1000).toFixed(1)}s)`);
    }
    for (const id of Object.keys(index)) if (!posts.some((post) => post.id === id)) delete index[id];
    fs.mkdirSync(OUT, { recursive: true });
    fs.writeFileSync(indexPath, JSON.stringify(index, null, 1));
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
