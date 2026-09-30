#!/usr/bin/env node
'use strict';

// Social cards (1200x630 JPEG) in the site's Injustice-card style (charcoal
// hex mesh, gold accent, the badge art in images/ui/): one per animal, one
// per static matchup page and one per section. Text is drawn as vector paths
// from the bundled @fontsource fonts, so output never depends on system fonts.
//
// Input:  .cache/astro-dist/data/og-jobs.json (emitted by the Astro build)
// Output: .cache/og/<name>.jpg and .cache/og/vs/<pair>.jpg. Unchanged cards
//         are reused (see manifest.json), so repeat builds are quick.

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const sharp = require('sharp');

const root = path.resolve(__dirname, '..', '..');
const jobsFile = path.join(root, '.cache', 'astro-dist', 'data', 'og-jobs.json');
const out = path.join(root, '.cache', 'og');
const manifestFile = path.join(out, 'manifest.json');
const W = 1200;
const H = 630;
const DESIGN = 4; // bump after any visual change to re-render every card

const GOLD = '#f6b400';
// Only a faint glow of the animal's home biome tints the charcoal.
const BIOMES = {
    savanna: { glow: '#ffb347' },
    forest: { glow: '#7bd48a' },
    jungle: { glow: '#35e0a0' },
    wetlands: { glow: '#66d6c4' },
    desert: { glow: '#ff9f4a' },
    mountains: { glow: '#a9c4ff' },
    arctic: { glow: '#c6ecff' },
    ocean: { glow: '#28b6ff' },
    arena: { glow: GOLD }
};
const TIERS = {
    S: ['#fff1b0', '#ffc933', '#8a5d00'],
    A: ['#ffc488', '#ff7a1a', '#7a2a00'],
    B: ['#a8dcff', '#2fa8ff', '#0b4a80'],
    C: ['#b0f0cc', '#37cf7a', '#145c36'],
    D: ['#d8ccff', '#9a7cff', '#3e2f8a'],
    F: ['#d4d7de', '#8a909c', '#3c4049']
};
// The site's stat colours and icons (astro/src/components/UiIcon.astro, 24px grid).
const STATS = [
    ['attack', 'Attack', '#ff4150', 'M4.2 19.6L12.6 3.4l1.9 1-8.4 16.2zM9.6 20.8L17.4 5.6l1.9 1-7.8 15.2zM15.3 21.2l4.6-9 1.9 1-4.6 9z'],
    ['defense', 'Defense', '#3f7dff', 'M12 2.4l8.2 3.1v6.1c0 5-3.4 8.7-8.2 10-4.8-1.3-8.2-5-8.2-10V5.5z'],
    ['agility', 'Agility', '#3bd65a', 'M3.5 5.5h3.2l6.3 6.5-6.3 6.5H3.5l6.3-6.5zM11.5 5.5h3.2l6.3 6.5-6.3 6.5h-3.2l6.3-6.5z'],
    ['stamina', 'Stamina', '#ff8d24', 'M12 20.8C5 15.8 2.8 12.6 2.8 9.1 2.8 6.3 5 4 7.8 4c1.8 0 3.2 1 4.2 2.5C13 5 14.4 4 16.2 4 19 4 21.2 6.3 21.2 9.1c0 3.5-2.2 6.7-9.2 11.7z'],
    ['intelligence', 'Intelligence', '#a35bff', 'M12 2.6a6.6 6.6 0 0 0-3.9 11.9c.7.5 1.1 1.3 1.1 2.2v.5h5.6v-.5c0-.9.4-1.7 1.1-2.2A6.6 6.6 0 0 0 12 2.6zM9.2 18.6h5.6v1.3c0 .8-.6 1.5-1.4 1.5h-2.8c-.8 0-1.4-.7-1.4-1.5z'],
    ['special', 'Special', '#20cfe6', 'M13.6 2L4.8 13.4h6.1L9.8 22l9.4-12.2h-6.3z']
];
const uiArt = new Map();
function uiImage(name) {
    if (!uiArt.has(name)) uiArt.set(name, fs.readFileSync(path.join(root, 'images', 'ui', `${name}.svg`)).toString('base64'));
    return `data:image/svg+xml;base64,${uiArt.get(name)}`;
}

const fmt = (value) => {
    const number = Number(value) || 0;
    return Number.isInteger(number) ? String(number) : number.toFixed(1);
};

// ---------------------------------------------------------------- text as paths

let FONTS = null;
async function loadFonts() {
    const { create } = await import('fontkitten');
    const load = (pkg, file) => {
        const font = create(fs.readFileSync(path.join(root, 'node_modules', '@fontsource', pkg, 'files', file)));
        return { font, glyphs: new Map() };
    };
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

function measure(faceName, text, size, tracking = 0) {
    const face = FONTS[faceName];
    const chars = [...text];
    const units = chars.reduce((sum, char) => sum + glyph(face, char).advance, 0);
    return (units * size) / face.font.unitsPerEm + tracking * Math.max(0, chars.length - 1);
}

// Largest size (<= size) at which the text fits maxWidth.
function fitSize(faceName, text, size, maxWidth, tracking = 0) {
    const width = measure(faceName, text, size, tracking);
    return width <= maxWidth ? size : Math.floor(size * (maxWidth / width));
}

function text(faceName, value, { x, y, size, anchor = 'start', fill = '#fff', tracking = 0, skew = 0, opacity = 1, stroke = null, strokeWidth = 0, filter = null }) {
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
    const paint = `fill="${fill}"${opacity < 1 ? ` opacity="${opacity}"` : ''}${stroke ? ` stroke="${stroke}" stroke-width="${(strokeWidth / scale).toFixed(1)}" stroke-linejoin="round" paint-order="stroke"` : ''}${filter ? ` filter="url(#${filter})"` : ''}`;
    return `<g transform="translate(${left.toFixed(1)} ${y.toFixed(1)})${skew ? ` skewX(${skew})` : ''} scale(${scale.toFixed(5)} ${(-scale).toFixed(5)})" ${paint}>${parts.join('')}</g>`;
}

// Splits a long name into two balanced lines.
function twoLines(value) {
    const words = value.split(' ');
    if (words.length < 2) return [value];
    let best = null;
    for (let i = 1; i < words.length; i += 1) {
        const lines = [words.slice(0, i).join(' '), words.slice(i).join(' ')];
        const worst = Math.max(...lines.map((line) => line.length));
        if (!best || worst < best.worst) best = { lines, worst };
    }
    return best.lines;
}

// ---------------------------------------------------------------- shapes

// The tier crest (images/ui/tier-*.svg), h pixels tall, top-left at (x, y).
function tierBadge(tier, x, y, h = 56) {
    const w = h * (120 / 142);
    const key = TIERS[tier] ? tier.toLowerCase() : 'f';
    return `<image x="${x}" y="${y}" width="${w.toFixed(1)}" height="${h}" href="${uiImage(`tier-${key}`)}"/>`;
}

function segBar(value, color, x, y, w, h, id, mirror = false) {
    const gap = 4;
    const seg = (w - gap * 9) / 10;
    const slant = h * 0.45;
    const parts = [`<defs><linearGradient id="${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".42"/><stop offset=".5" stop-color="#fff" stop-opacity=".05"/><stop offset="1" stop-color="#000" stop-opacity=".3"/></linearGradient></defs>`];
    for (let i = 0; i < 10; i += 1) {
        const fill = Math.max(0, Math.min(1, (value - i * 10) / 10));
        const index = mirror ? 9 - i : i;
        const sx = x + index * (seg + gap);
        const shape = mirror
            ? `${sx},${y} ${sx + seg - slant},${y} ${sx + seg},${y + h} ${sx + slant},${y + h}`
            : `${sx + slant},${y} ${sx + seg},${y} ${sx + seg - slant},${y + h} ${sx},${y + h}`;
        parts.push(`<polygon points="${shape}" fill="#3a3c42"/>`);
        if (fill > 0) {
            const clip = `${id}c${i}`;
            const cw = seg * fill;
            const cx = mirror ? sx + seg - cw : sx;
            parts.push(`<clipPath id="${clip}"><rect x="${cx}" y="${y}" width="${cw}" height="${h}"/></clipPath><polygon points="${shape}" fill="${color}" clip-path="url(#${clip})"/>`);
        }
        parts.push(`<polygon points="${shape}" fill="url(#${id})"/>`);
    }
    return parts.join('');
}

// The site's surface art (images/ui, from scripts/assets/*), as PNG data for librsvg.
const ART = {};
async function loadArt() {
    const png = async (file, width, height, fit = 'fill') => `data:image/png;base64,${(await sharp(path.join(root, 'images', 'ui', file)).resize(width, height, { fit }).png().toBuffer()).toString('base64')}`;
    ART.hex = await png('hex-card.webp', 156, 135);
    ART.stage = await png('stage.webp', 1200, 675, 'cover');
    for (const tier of ['s', 'a', 'b', 'c', 'd', 'f']) ART[`shards-${tier}`] = await png(`shards-${tier}.webp`, 420, 560);
}

function background({ biome = 'arena', biomeRight = null, accent = GOLD, stage = false, shards = null }) {
    const left = BIOMES[biome] || BIOMES.arena;
    const right = biomeRight ? (BIOMES[biomeRight] || BIOMES.arena) : null;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <defs>
        <pattern id="hex" width="156" height="135" patternUnits="userSpaceOnUse"><image href="${ART.hex}" width="156" height="135"/></pattern>
        <linearGradient id="base" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1e2024" stop-opacity=".2"/><stop offset="1" stop-color="#0a0b0d" stop-opacity=".75"/></linearGradient>
        <radialGradient id="glowL" cx="${right ? 0.25 : 0.28}" cy="0.62" r="0.55"><stop offset="0" stop-color="${left.glow}" stop-opacity=".16"/><stop offset="1" stop-color="${left.glow}" stop-opacity="0"/></radialGradient>
        ${right ? `<radialGradient id="glowR" cx="0.75" cy="0.62" r="0.55"><stop offset="0" stop-color="${right.glow}" stop-opacity=".16"/><stop offset="1" stop-color="${right.glow}" stop-opacity="0"/></radialGradient>` : ''}
        <radialGradient id="vig" cx=".5" cy=".5" r=".75"><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".6"/></radialGradient>
    </defs>
    ${stage
        ? `<image href="${ART.stage}" x="0" y="-22" width="${W}" height="675"/>`
        : `<rect width="${W}" height="${H}" fill="url(#hex)"/><rect width="${W}" height="${H}" fill="url(#base)"/>`}
    <rect width="${W}" height="${H}" fill="url(#glowL)"/>
    ${right ? `<rect width="${W}" height="${H}" fill="url(#glowR)"/>` : ''}
    ${shards ? `<image href="${ART[`shards-${shards}`]}" x="-60" y="-120" width="${Math.round(H * 1.2 * 0.75)}" height="${Math.round(H * 1.2)}" opacity=".8"/>` : ''}
    ${!stage && !shards ? `<polygon points="470,0 640,0 460,630 290,630" fill="${accent}" opacity=".07"/><polygon points="680,0 740,0 560,630 500,630" fill="${accent}" opacity=".05"/>` : ''}
    <rect width="${W}" height="${H}" fill="url(#vig)"/>
    <rect width="${W}" height="5" fill="${GOLD}"/>
    <rect x="8" y="13" width="${W - 16}" height="${H - 21}" rx="14" fill="none" stroke="#d6dbe4" stroke-opacity=".22" stroke-width="2"/>
</svg>`;
}

function floor(cx, cy, rx, accent = GOLD) {
    const id = `fl${Math.round(cx)}`;
    return `<defs><radialGradient id="${id}"><stop offset="0" stop-color="${accent}" stop-opacity=".5"/><stop offset="1" stop-color="${accent}" stop-opacity="0"/></radialGradient>
        <filter id="${id}b" x="-20%" y="-50%" width="140%" height="200%"><feGaussianBlur stdDeviation="8"/></filter></defs>
        <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${rx * 0.14}" fill="url(#${id})"/>
        <ellipse cx="${cx}" cy="${cy + 4}" rx="${rx * 0.7}" ry="${rx * 0.07}" fill="#000" opacity=".55" filter="url(#${id}b)"/>`;
}

function brand(x, y, anchor = 'end', size = 24) {
    return text('display', 'ANIMALBATTLESTATS.COM', { x, y, size, anchor, fill: '#f3f4f6', tracking: 2.5, opacity: 0.92 });
}

// ---------------------------------------------------------------- raster layers

// Site image URLs carry cache-busting queries (?v=...); strip them for disk paths.
function sourceFile(url) {
    return path.join(root, String(url || '').split(/[?#]/)[0].replace(/^\/+/, ''));
}

const layerCache = new Map();
async function animalLayer(animal, maxW, maxH, mirror = false) {
    const key = `${animal.slug}|${maxW}|${maxH}|${mirror}`;
    if (layerCache.has(key)) return layerCache.get(key);
    const file = sourceFile(animal.image);
    const task = (async () => {
        if (!animal.image || !fs.existsSync(file)) return null;
        let trimmed;
        try {
            trimmed = await sharp(file).ensureAlpha().trim({ threshold: 4 }).png().toBuffer();
        } catch {
            trimmed = await sharp(file).ensureAlpha().png().toBuffer();
        }
        let image = sharp(trimmed).resize({ width: maxW, height: maxH, fit: 'inside', withoutEnlargement: false });
        if (mirror) image = image.flop();
        const { data, info } = await image.png().toBuffer({ resolveWithObject: true });
        return { input: data, width: info.width, height: info.height };
    })();
    layerCache.set(key, task);
    return task;
}

const logoCache = new Map();
function logo(size) {
    if (!logoCache.has(size)) logoCache.set(size, sharp(path.join(root, 'images', 'logo.png')).resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer());
    return logoCache.get(size);
}

// Places an animal bottom-centered at (cx, bottom).
async function placeAnimal(layers, animal, cx, bottom, maxW, maxH, mirror = false) {
    const layer = await animalLayer(animal, maxW, maxH, mirror);
    if (!layer) return;
    const left = Math.min(Math.max(0, Math.round(cx - layer.width / 2)), W - layer.width);
    const top = Math.min(Math.max(0, Math.round(bottom - layer.height)), H - layer.height);
    layers.push({ input: layer.input, left, top });
}

// Layer order: background, "under" vectors (floors, frames), raster animals
// and icons, then "over" vectors (text, badges, plates).
const svgLayer = (content) => ({ input: Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${content}</svg>`), left: 0, top: 0 });
async function render(file, { bg, under = [], layers = [], over = [] }) {
    const composite = [
        ...(under.length ? [svgLayer(under.join(''))] : []),
        ...layers.filter(Boolean),
        svgLayer(over.join(''))
    ];
    fs.mkdirSync(path.dirname(file), { recursive: true });
    await sharp(Buffer.from(bg))
        .composite(composite)
        .flatten({ background: '#0b0c0e' })
        .jpeg({ quality: 84, mozjpeg: true, chromaSubsampling: '4:4:4' })
        .toFile(file);
}

// ---------------------------------------------------------------- templates

async function animalCard(animal, total, file) {
    const accent = (TIERS[animal.tier] || TIERS.F)[1];
    const layers = [];
    const under = [floor(330, 588, 260, accent)];
    await placeAnimal(layers, animal, 330, 596, 580, 500);
    const parts = [];

    // tier, rank and power
    parts.push(tierBadge(animal.tier, 640, 40, 66));
    parts.push(text('heavy', `RANK #${animal.rank} OF ${total}`, { x: 712, y: 84, size: 21, fill: '#c5c9d1', tracking: 2 }));
    parts.push(text('heavy', 'POWER', { x: 1150, y: 64, size: 13, anchor: 'end', fill: GOLD, tracking: 3 }));
    parts.push(text('display', fmt(animal.power), { x: 1150, y: 104, size: 46, anchor: 'end', fill: '#fff' }));

    // name
    const upper = animal.name.toUpperCase();
    let size = fitSize('display', upper, 100, 510, 1);
    let lines = [upper];
    // Two-line names stay small enough to clear the tier row and the stats.
    if (size < 70 && upper.includes(' ')) {
        lines = twoLines(upper);
        size = Math.min(62, ...lines.map((line) => fitSize('display', line, 62, 510, 1)));
    }
    let baseline = lines.length === 1 ? 198 : 162;
    for (const line of lines) {
        parts.push(text('display', line, { x: 640, y: baseline, size, fill: '#fff', tracking: 1, stroke: '#000', strokeWidth: 6 }));
        baseline += size * 0.92;
    }
    const sciY = baseline - size * 0.92 + (lines.length === 1 ? 40 : 34);
    if (animal.sci) parts.push(text('body', animal.sci, { x: 642, y: sciY, size: 22, fill: '#8d929b' }));

    // stats, Injustice-style
    const top = 282;
    for (const [index, [key, label, color, glyphPath]] of STATS.entries()) {
        const y = top + index * 50;
        const value = animal.stats[key] || 0;
        parts.push(`<path d="${glyphPath}" transform="translate(640 ${y + 6}) scale(1.35)" fill="${color}"/>`);
        parts.push(text('heavy', label.toUpperCase(), { x: 684, y: y + 17, size: 15, fill: '#f3f4f6', tracking: 2.4 }));
        parts.push(text('display', fmt(value), { x: 1150, y: y + 21, size: 30, anchor: 'end', fill: '#fff' }));
        parts.push(segBar(value, color, 684, y + 24, 466, 14, `sb${index}`));
    }

    const mark = await logo(40);
    layers.push({ input: mark, left: 40, top: 30 });
    parts.push(text('display', 'ANIMAL BATTLE STATS', { x: 90, y: 60, size: 24, fill: '#f3f4f6', tracking: 2 }));
    parts.push(brand(1150, 612, 'end', 20));
    await render(file, { bg: background({ biome: animal.biome, accent, shards: TIERS[animal.tier] ? animal.tier.toLowerCase() : 'f' }), under, layers, over: parts });
}

async function versusCard(a, b, oddsA, file, title = 'Who would win?') {
    const layers = [];
    const parts = [];
    const under = [floor(300, 502, 230), floor(900, 502, 230, '#d5d9e0')];
    await placeAnimal(layers, a, 300, 508, 500, 380);
    await placeAnimal(layers, b, 900, 508, 500, 380, true);
    parts.push(`<image x="510" y="224" width="180" height="134" href="${uiImage('vs')}"/>`);

    parts.push(`<defs><filter id="glow" x="-20%" y="-50%" width="140%" height="200%"><feGaussianBlur stdDeviation="6" result="b"/><feFlood flood-color="${GOLD}" flood-opacity=".55"/><feComposite in2="b" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>`);
    const heading = title.toUpperCase();
    parts.push(text('display', heading, { x: 600, y: 96, size: fitSize('display', heading, 70, 700, 2), anchor: 'middle', fill: '#fff', tracking: 2, filter: 'glow' }));
    const mark = await logo(34);
    layers.push({ input: mark, left: 36, top: 26 });
    parts.push(text('display', 'ANIMALBATTLESTATS.COM', { x: 78, y: 52, size: 19, fill: '#f3f4f6', tracking: 2, opacity: 0.85 }));

    // name plates
    for (const [animal, side] of [[a, 'a'], [b, 'b']]) {
        const [x0, x1] = side === 'a' ? [40, 560] : [640, 1160];
        const color = (TIERS[animal.tier] || TIERS.F)[1];
        parts.push(`<rect x="${x0}" y="516" width="${x1 - x0}" height="60" rx="10" fill="#0b0c0e" fill-opacity=".9" stroke="#d6dbe4" stroke-opacity=".35" stroke-width="2"/><rect x="${x0}" y="516" width="${x1 - x0}" height="3" fill="${color}"/>`);
        const badgeX = side === 'a' ? x0 + 16 : x1 - 16 - 42;
        parts.push(tierBadge(animal.tier, badgeX, 521, 50));
        const upper = animal.name.toUpperCase();
        const size = fitSize('display', upper, 46, 390, 1);
        parts.push(side === 'a'
            ? text('display', upper, { x: x0 + 72, y: 546 + size * 0.36, size, fill: '#fff', tracking: 1 })
            : text('display', upper, { x: x1 - 72, y: 546 + size * 0.36, size, anchor: 'end', fill: '#fff', tracking: 1 }));
    }

    // stats odds bar
    const split = 40 + (1120 * oddsA) / 100;
    parts.push(`<defs><linearGradient id="oa" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffd54a"/><stop offset="1" stop-color="#eaa400"/></linearGradient><linearGradient id="ob" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f1f2f5"/><stop offset="1" stop-color="#b9bec8"/></linearGradient><clipPath id="oc"><rect x="40" y="586" width="1120" height="30" rx="8"/></clipPath></defs>`);
    parts.push(`<g clip-path="url(#oc)"><rect x="40" y="586" width="${split - 40}" height="30" fill="url(#oa)"/><rect x="${split}" y="586" width="${1160 - split}" height="30" fill="url(#ob)"/><rect x="${split - 1.5}" y="586" width="3" height="30" fill="#0b0c0e"/></g>`);
    parts.push(text('display', `${oddsA}%`, { x: 54, y: 611, size: 28, fill: '#1d1400' }));
    parts.push(text('display', `${100 - oddsA}%`, { x: 1146, y: 611, size: 28, anchor: 'end', fill: '#111216' }));
    parts.push(text('heavy', 'STATS ODDS', { x: 600, y: 610, size: 14, anchor: 'middle', fill: '#111216', tracking: 3, opacity: 0.9 }));
    await render(file, { bg: background({ biome: a.biome, biomeRight: b.biome, stage: true }), under, layers, over: parts });
}

function headline(parts, title, sub, { x = 60, y = 138, width = 700, size = 104 } = {}) {
    const upper = title.toUpperCase();
    const fitted = fitSize('display', upper, size, width, 2);
    parts.push(text('display', upper, { x, y, size: fitted, fill: '#fff', tracking: 2, stroke: '#000', strokeWidth: 6 }));
    parts.push(`<rect x="${x}" y="${y + 18}" width="120" height="5" fill="${GOLD}"/><rect x="${x + 126}" y="${y + 18}" width="40" height="5" fill="#d5d9e0"/>`);
    if (sub) parts.push(text('body', sub, { x: x + 2, y: y + 60, size: fitSize('body', sub, 27, width, 0), fill: '#c5c9d1' }));
}

async function sectionCard(page, bySlug, file) {
    const layers = [];
    const parts = [];
    const under = [];
    const lineup = (page.lineup || []).map((slug) => bySlug.get(slug)).filter(Boolean);
    const mark = await logo(64);
    layers.push({ input: mark, left: 1090, top: 34 });
    headline(parts, page.title, page.sub);
    parts.push(brand(1150, 612, 'end', 22));

    if (page.kind === 'lineup') {
        const slots = [[600, 330, 380], [330, 250, 300], [870, 250, 300], [120, 200, 230], [1080, 200, 230]];
        const order = [3, 4, 1, 2, 0];
        for (const index of order) {
            const animal = lineup[index];
            if (!animal) continue;
            const [cx, maxW, maxH] = slots[index];
            under.push(floor(cx, 588, maxW * 0.55));
            await placeAnimal(layers, animal, cx, 596, maxW, maxH, cx > 600);
        }
    } else if (page.kind === 'tiers') {
        const letters = ['S', 'A', 'B', 'C', 'D', 'F'];
        for (const [index, letter] of letters.entries()) {
            const cx = 110 + index * 196;
            const animal = lineup[index];
            if (animal) {
                under.push(floor(cx, 520, 90, TIERS[letter][1]));
                await placeAnimal(layers, animal, cx, 526, 180, 200);
            }
            parts.push(tierBadge(letter, cx - 27, 534, 64));
        }
    } else if (page.kind === 'podium') {
        const steps = [[600, 1, 150, '#ffc933'], [390, 2, 110, '#c9cdd5'], [810, 3, 80, '#d38a4f']];
        for (const [cx, place, height, color] of steps) {
            const animal = lineup[place - 1];
            const topY = 630 - 20 - height;
            under.push(`<polygon points="${cx - 100},${topY} ${cx + 100},${topY} ${cx + 92},610 ${cx - 92},610" fill="${color}" fill-opacity=".9"/><polygon points="${cx - 100},${topY} ${cx + 100},${topY} ${cx + 96},${topY + 10} ${cx - 96},${topY + 10}" fill="#fff" fill-opacity=".4"/>`);
            under.push(text('display', `#${place}`, { x: cx, y: topY + 66, size: 56, anchor: 'middle', fill: '#101114' }));
            if (animal) await placeAnimal(layers, animal, cx, topY + 6, 230, place === 1 ? 250 : 200);
        }
    } else if (page.kind === 'cards') {
        const spots = [[340, 250, -1], [600, 205, 0], [860, 250, 1]];
        for (const [index, [cx, top]] of spots.entries()) {
            const animal = lineup[index];
            if (!animal) continue;
            const [light, mid, dark] = TIERS[animal.tier] || TIERS.F;
            const w = 220;
            const h = 300;
            const x = cx - w / 2;
            under.push(`<defs><linearGradient id="cf${index}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${light}"/><stop offset=".3" stop-color="${mid}"/><stop offset=".62" stop-color="${dark}"/><stop offset=".88" stop-color="${light}"/></linearGradient>
                <linearGradient id="ci${index}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#26282d"/><stop offset="1" stop-color="#0e0f12"/></linearGradient></defs>
                <rect x="${x}" y="${top}" width="${w}" height="${h}" rx="16" fill="url(#cf${index})"/>
                <rect x="${x + 6}" y="${top + 6}" width="${w - 12}" height="${h - 12}" rx="12" fill="url(#ci${index})"/>`);
            await placeAnimal(layers, animal, cx, top + h - 58, w - 30, h - 110);
            parts.push(`<rect x="${x + 6}" y="${top + h - 56}" width="${w - 12}" height="50" rx="0" fill="#0b0c0e" fill-opacity=".92"/><rect x="${x + 6}" y="${top + h - 57}" width="${w - 12}" height="2" fill="${mid}"/>`);
            const upper = animal.name.toUpperCase();
            parts.push(text('display', upper, { x: cx, y: top + h - 22, size: fitSize('display', upper, 28, w - 30, 1), anchor: 'middle', fill: '#fff', tracking: 1 }));
            parts.push(tierBadge(animal.tier, x + w - 46, top + 12, 40));
        }
    }
    const bio = lineup[0]?.biome || 'arena';
    await render(file, { bg: background({ biome: bio }), under, layers, over: parts });
}

// ---------------------------------------------------------------- run

async function pool(items, size, worker) {
    let next = 0;
    await Promise.all(Array.from({ length: size }, async () => {
        while (next < items.length) {
            const item = items[next];
            next += 1;
            await worker(item);
        }
    }));
}


async function main() {
    if (!fs.existsSync(jobsFile)) {
        console.warn('Social cards skipped: og-jobs.json was not built.');
        return;
    }
    const jobs = JSON.parse(fs.readFileSync(jobsFile, 'utf8'));
    await loadFonts();
    await loadArt();
    const bySlug = new Map(jobs.animals.map((animal) => [animal.slug, animal]));
    let manifest = {};
    try { manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8')); } catch { manifest = {}; }
    // OG_ONLY=<regex> re-renders just the matching cards (design iteration).
    const only = process.env.OG_ONLY ? new RegExp(process.env.OG_ONLY) : null;
    const nextManifest = only ? { ...manifest } : {};
    const tasks = [];
    const hash = (value) => crypto.createHash('sha1').update(JSON.stringify([DESIGN, value])).digest('hex').slice(0, 16);
    const queue = (name, inputs, run) => {
        if (only && !only.test(name)) return;
        const key = hash(inputs);
        nextManifest[name] = key;
        const file = path.join(out, name);
        if (!only && manifest[name] === key && fs.existsSync(file)) return;
        tasks.push({ name, run: () => run(file) });
    };

    for (const animal of jobs.animals) {
        // animal.image carries a content hash (?v=), so a new photo re-renders its cards.
        queue(`${animal.slug}.jpg`, [animal, jobs.total], (file) => animalCard(animal, jobs.total, file));
    }
    for (const pair of jobs.pairs) {
        const a = bySlug.get(pair.a);
        const b = bySlug.get(pair.b);
        if (!a || !b) continue;
        queue(`vs/${pair.slug}.jpg`, [pair, a, b], (file) => versusCard(a, b, pair.oddsA, file));
    }
    for (const page of jobs.pages) {
        if (page.kind === 'versus') {
            const a = bySlug.get(page.a);
            const b = bySlug.get(page.b);
            if (a && b) queue(`${page.file}.jpg`, [page, a, b], (file) => versusCard(a, b, page.oddsA, file, page.title));
        } else {
            queue(`${page.file}.jpg`, [page, (page.lineup || []).map((slug) => bySlug.get(slug))], (file) => sectionCard(page, bySlug, file));
        }
    }

    // Drop cards for pages that no longer exist.
    for (const name of Object.keys(manifest)) {
        if (!nextManifest[name]) fs.rmSync(path.join(out, name), { force: true });
    }

    const started = Date.now();
    await pool(tasks, 6, async (task) => {
        try {
            await task.run();
        } catch (error) {
            delete nextManifest[task.name];
            console.warn(`Social card failed for ${task.name}: ${error.message}`);
        }
    });
    fs.mkdirSync(out, { recursive: true });
    fs.writeFileSync(manifestFile, JSON.stringify(nextManifest));
    console.log(`Social cards: ${tasks.length} rendered, ${Object.keys(nextManifest).length - tasks.length} reused (${((Date.now() - started) / 1000).toFixed(1)}s).`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
