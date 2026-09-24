#!/usr/bin/env node
'use strict';

// Social cards (1200x630 JPEG) in the site's game style: one per animal, one
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
const DESIGN = 2; // bump after any visual change to re-render every card

const BIOMES = {
    savanna: { sky: '#3a1f2e', glow: '#ffb347', accent: '#ffc56b' },
    forest: { sky: '#10261f', glow: '#7bd48a', accent: '#6fdc8c' },
    jungle: { sky: '#0b2a24', glow: '#35e0a0', accent: '#38e6a4' },
    wetlands: { sky: '#0e2733', glow: '#66d6c4', accent: '#6fe0d0' },
    desert: { sky: '#3a1a12', glow: '#ff9f4a', accent: '#ffae62' },
    mountains: { sky: '#16203c', glow: '#a9c4ff', accent: '#b6caff' },
    arctic: { sky: '#122c4a', glow: '#c6ecff', accent: '#d4f1ff' },
    ocean: { sky: '#06203f', glow: '#28b6ff', accent: '#3cc4ff' },
    arena: { sky: '#1a1440', glow: '#ff6b00', accent: '#00d4ff' }
};
const TIERS = {
    S: ['#fff3b0', '#ffcf3f', '#a8740a'],
    A: ['#ffc27a', '#ff7a1a', '#9c3d00'],
    B: ['#9be9ff', '#22c7ff', '#0a5f8a'],
    C: ['#a8f5cf', '#3ddc97', '#16704a'],
    D: ['#d4caff', '#a08cff', '#4b3a9e'],
    F: ['#c8cfe6', '#7b86a8', '#3b4462']
};
const STATS = [
    ['attack', 'Attack', '#ff5a3c', 'claws'],
    ['defense', 'Defense', '#3f8cff', 'shield'],
    ['agility', 'Agility', '#25e2a8', 'wind'],
    ['stamina', 'Stamina', '#ffc53d', 'heart'],
    ['intelligence', 'Intelligence', '#b08cff', 'target'],
    ['special', 'Special', '#ff4fc3', 'bolt']
];

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

function tierBadge(tier, x, y, w = 64, h = 48, size = 40) {
    const [light, mid, dark] = TIERS[tier] || TIERS.F;
    const id = `tb${tier}${Math.round(x)}${Math.round(y)}`;
    const slant = w * 0.22;
    return `<defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${light}"/><stop offset=".45" stop-color="${mid}"/><stop offset="1" stop-color="${dark}"/></linearGradient></defs>
        <polygon points="${x + slant},${y} ${x + w},${y} ${x + w - slant},${y + h} ${x},${y + h}" fill="url(#${id})"/>
        ${text('display', tier, { x: x + w / 2, y: y + h / 2 + size * 0.36, size, anchor: 'middle', fill: '#0b0e1a' })}`;
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
        parts.push(`<polygon points="${shape}" fill="#5b6176"/>`);
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

function background({ biome = 'arena', biomeRight = null, accent = '#00d4ff' }) {
    const left = BIOMES[biome] || BIOMES.arena;
    const right = biomeRight ? (BIOMES[biomeRight] || BIOMES.arena) : null;
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <defs>
        <linearGradient id="base" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#101a3c"/><stop offset="1" stop-color="#050814"/></linearGradient>
        <radialGradient id="glowL" cx="${right ? 0.25 : 0.28}" cy="0.62" r="0.55"><stop offset="0" stop-color="${left.glow}" stop-opacity=".5"/><stop offset="1" stop-color="${left.glow}" stop-opacity="0"/></radialGradient>
        ${right ? `<radialGradient id="glowR" cx="0.75" cy="0.62" r="0.55"><stop offset="0" stop-color="${right.glow}" stop-opacity=".5"/><stop offset="1" stop-color="${right.glow}" stop-opacity="0"/></radialGradient>` : ''}
        <radialGradient id="vig" cx=".5" cy=".5" r=".75"><stop offset=".55" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".65"/></radialGradient>
        <pattern id="hex" width="28" height="48.5" patternUnits="userSpaceOnUse"><path d="M14 0 28 8.08v16.17L14 32.33 0 24.25V8.08zM14 32.33 28 40.42V56.58M14 32.33 0 40.42V56.58" fill="none" stroke="#b4c3ff" stroke-opacity=".08" stroke-width="1.2"/></pattern>
        <linearGradient id="trim" x1="0" x2="1"><stop offset="0" stop-color="#00d4ff"/><stop offset=".5" stop-color="#6ce7ff"/><stop offset="1" stop-color="#ff6b00"/></linearGradient>
    </defs>
    <rect width="${W}" height="${H}" fill="url(#base)"/>
    ${right
        ? `<polygon points="0,0 660,0 540,${H} 0,${H}" fill="${left.sky}" opacity=".75"/><polygon points="660,0 ${W},0 ${W},${H} 540,${H}" fill="${right.sky}" opacity=".75"/>`
        : `<rect width="${W}" height="${H}" fill="${left.sky}" opacity=".7"/>`}
    <rect width="${W}" height="${H}" fill="url(#glowL)"/>
    ${right ? `<rect width="${W}" height="${H}" fill="url(#glowR)"/>` : ''}
    <rect width="${W}" height="${H}" fill="url(#hex)"/>
    <polygon points="${right ? '560,0 640,0 520,630 440,630' : '520,0 700,0 520,630 340,630'}" fill="${accent}" opacity=".08"/>
    <g stroke="#fff" stroke-opacity=".05" stroke-width="2">${Array.from({ length: 9 }, (_, i) => `<line x1="${60 + i * 140}" y1="0" x2="${i * 140 - 120}" y2="${H}"/>`).join('')}</g>
    <rect width="${W}" height="${H}" fill="url(#vig)"/>
    <rect width="${W}" height="6" fill="url(#trim)"/>
</svg>`;
}

function floor(cx, cy, rx, accent) {
    const id = `fl${Math.round(cx)}`;
    return `<defs><radialGradient id="${id}"><stop offset="0" stop-color="${accent}" stop-opacity=".5"/><stop offset="1" stop-color="${accent}" stop-opacity="0"/></radialGradient>
        <filter id="${id}b" x="-20%" y="-50%" width="140%" height="200%"><feGaussianBlur stdDeviation="8"/></filter></defs>
        <ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${rx * 0.14}" fill="url(#${id})"/>
        <ellipse cx="${cx}" cy="${cy + 4}" rx="${rx * 0.7}" ry="${rx * 0.07}" fill="#000" opacity=".55" filter="url(#${id}b)"/>`;
}

function brand(x, y, anchor = 'end', size = 24) {
    return text('display', 'ANIMALBATTLESTATS.COM', { x, y, size, anchor, fill: '#eef2ff', tracking: 2.5, opacity: 0.92 });
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

const iconCache = new Map();
function icon(name, size) {
    const key = `${name}|${size}`;
    if (!iconCache.has(key)) {
        const file = path.join(root, 'images', 'icons', 'abs', `${name}.webp`);
        iconCache.set(key, fs.existsSync(file) ? sharp(file).resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer() : Promise.resolve(null));
    }
    return iconCache.get(key);
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
        .flatten({ background: '#050814' })
        .jpeg({ quality: 84, mozjpeg: true, chromaSubsampling: '4:4:4' })
        .toFile(file);
}

// ---------------------------------------------------------------- templates

async function animalCard(animal, total, file) {
    const accent = (TIERS[animal.tier] || TIERS.F)[1];
    const bio = BIOMES[animal.biome] || BIOMES.arena;
    const layers = [];
    const under = [floor(330, 588, 260, bio.accent)];
    await placeAnimal(layers, animal, 330, 596, 580, 500);
    const parts = [];

    // tier, rank and power
    parts.push(tierBadge(animal.tier, 640, 52, 66, 50, 42));
    parts.push(text('heavy', `RANK #${animal.rank} OF ${total}`, { x: 722, y: 86, size: 21, fill: '#c6cfeb', tracking: 2 }));
    parts.push(text('heavy', 'POWER', { x: 1150, y: 64, size: 13, anchor: 'end', fill: '#8f9bc0', tracking: 3 }));
    parts.push(text('display', fmt(animal.power), { x: 1150, y: 104, size: 46, anchor: 'end', fill: (TIERS[animal.tier] || TIERS.F)[0] }));

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
        parts.push(text('display', line, { x: 640, y: baseline, size, fill: '#fff', tracking: 1, skew: -6, stroke: '#000', strokeWidth: 6 }));
        baseline += size * 0.92;
    }
    const sciY = baseline - size * 0.92 + (lines.length === 1 ? 40 : 34);
    if (animal.sci) parts.push(text('body', animal.sci, { x: 642, y: sciY, size: 22, fill: '#8f9bc0' }));

    // stats, Injustice-style
    const top = 282;
    for (const [index, [key, label, color, iconName]] of STATS.entries()) {
        const y = top + index * 50;
        const value = animal.stats[key] || 0;
        const icn = await icon(iconName, 34);
        if (icn) layers.push({ input: icn, left: 640, top: y + 4 });
        parts.push(text('heavy', label.toUpperCase(), { x: 684, y: y + 17, size: 15, fill: '#c6cfeb', tracking: 2.4 }));
        parts.push(text('display', fmt(value), { x: 1150, y: y + 21, size: 30, anchor: 'end', fill: '#fff' }));
        parts.push(segBar(value, color, 684, y + 24, 466, 14, `sb${index}`));
    }

    const mark = await logo(40);
    layers.push({ input: mark, left: 40, top: 30 });
    parts.push(text('display', 'ANIMAL BATTLE STATS', { x: 90, y: 60, size: 24, fill: '#eef2ff', tracking: 2 }));
    parts.push(brand(1150, 612, 'end', 20));
    await render(file, { bg: background({ biome: animal.biome, accent }), under, layers, over: parts });
}

async function versusCard(a, b, oddsA, file, title = 'Who would win?') {
    const layers = [];
    const parts = [];
    const bioA = BIOMES[a.biome] || BIOMES.arena;
    const bioB = BIOMES[b.biome] || BIOMES.arena;
    const under = [floor(300, 502, 230, bioA.accent), floor(900, 502, 230, bioB.accent)];
    await placeAnimal(layers, a, 300, 508, 500, 380);
    await placeAnimal(layers, b, 900, 508, 500, 380, true);
    const vs = await icon('vs', 190);
    if (vs) layers.push({ input: vs, left: 505, top: 205 });

    parts.push(`<defs><filter id="glow" x="-20%" y="-50%" width="140%" height="200%"><feGaussianBlur stdDeviation="6" result="b"/><feFlood flood-color="#ff6b00" flood-opacity=".75"/><feComposite in2="b" operator="in"/><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>`);
    const heading = title.toUpperCase();
    parts.push(text('display', heading, { x: 600, y: 96, size: fitSize('display', heading, 70, 700, 2), anchor: 'middle', fill: '#fff', tracking: 2, skew: -6, filter: 'glow' }));
    const mark = await logo(34);
    layers.push({ input: mark, left: 36, top: 26 });
    parts.push(text('display', 'ANIMALBATTLESTATS.COM', { x: 78, y: 52, size: 19, fill: '#eef2ff', tracking: 2, opacity: 0.85 }));

    // name plates
    for (const [animal, side] of [[a, 'a'], [b, 'b']]) {
        const [x0, x1] = side === 'a' ? [40, 560] : [640, 1160];
        const color = (TIERS[animal.tier] || TIERS.F)[1];
        const plate = side === 'a'
            ? `${x0 + 14},518 ${x1},518 ${x1 - 14},574 ${x0},574`
            : `${x0},518 ${x1 - 14},518 ${x1},574 ${x0 + 14},574`;
        parts.push(`<polygon points="${plate}" fill="#050814" fill-opacity=".86" stroke="${color}" stroke-width="2"/>`);
        const badgeX = side === 'a' ? x0 + 24 : x1 - 24 - 50;
        parts.push(tierBadge(animal.tier, badgeX, 525, 50, 42, 34));
        const upper = animal.name.toUpperCase();
        const size = fitSize('display', upper, 46, 390, 1);
        parts.push(side === 'a'
            ? text('display', upper, { x: x0 + 88, y: 546 + size * 0.36, size, fill: '#fff', tracking: 1, skew: -6 })
            : text('display', upper, { x: x1 - 88, y: 546 + size * 0.36, size, anchor: 'end', fill: '#fff', tracking: 1, skew: -6 }));
    }

    // stats odds bar
    const split = 40 + (1120 * oddsA) / 100;
    parts.push(`<defs><linearGradient id="oa" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7eeaff"/><stop offset="1" stop-color="#00d4ff"/></linearGradient><linearGradient id="ob" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#ffb27a"/><stop offset="1" stop-color="#ff6b00"/></linearGradient></defs>`);
    parts.push(`<polygon points="52,586 ${split},586 ${split - 10},616 40,616" fill="url(#oa)"/><polygon points="${split + 4},586 1160,586 1148,616 ${split - 6},616" fill="url(#ob)"/>`);
    parts.push(text('display', `${oddsA}%`, { x: 64, y: 611, size: 28, fill: '#06101c' }));
    parts.push(text('display', `${100 - oddsA}%`, { x: 1136, y: 611, size: 28, anchor: 'end', fill: '#1d0800' }));
    parts.push(text('heavy', 'STATS ODDS', { x: 600, y: 610, size: 14, anchor: 'middle', fill: '#fff', tracking: 3, opacity: 0.9 }));
    await render(file, { bg: background({ biome: a.biome, biomeRight: b.biome, accent: '#ff6b00' }), under, layers, over: parts });
}

function headline(parts, title, sub, { x = 60, y = 138, width = 700, size = 104 } = {}) {
    const upper = title.toUpperCase();
    const fitted = fitSize('display', upper, size, width, 2);
    parts.push(text('display', upper, { x, y, size: fitted, fill: '#fff', tracking: 2, skew: -6, stroke: '#000', strokeWidth: 6 }));
    parts.push(`<rect x="${x}" y="${y + 18}" width="120" height="5" fill="#ff6b00"/><rect x="${x + 126}" y="${y + 18}" width="40" height="5" fill="#00d4ff"/>`);
    if (sub) parts.push(text('body', sub, { x: x + 2, y: y + 60, size: fitSize('body', sub, 27, width, 0), fill: '#c6cfeb' }));
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
            under.push(floor(cx, 588, maxW * 0.55, (BIOMES[animal.biome] || BIOMES.arena).accent));
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
            parts.push(tierBadge(letter, cx - 40, 540, 80, 56, 48));
        }
    } else if (page.kind === 'podium') {
        const steps = [[600, 1, 150, '#ffcf3f'], [390, 2, 110, '#c8cfe6'], [810, 3, 80, '#d98c4a']];
        for (const [cx, place, height, color] of steps) {
            const animal = lineup[place - 1];
            const topY = 630 - 20 - height;
            under.push(`<polygon points="${cx - 100},${topY} ${cx + 100},${topY} ${cx + 92},610 ${cx - 92},610" fill="${color}" fill-opacity=".9"/><polygon points="${cx - 100},${topY} ${cx + 100},${topY} ${cx + 96},${topY + 10} ${cx - 96},${topY + 10}" fill="#fff" fill-opacity=".4"/>`);
            under.push(text('display', `#${place}`, { x: cx, y: topY + 66, size: 56, anchor: 'middle', fill: '#0b0e1a' }));
            if (animal) await placeAnimal(layers, animal, cx, topY + 6, 230, place === 1 ? 250 : 200);
        }
    } else if (page.kind === 'cards') {
        const spots = [[340, 250, -1], [600, 205, 0], [860, 250, 1]];
        for (const [index, [cx, top]] of spots.entries()) {
            const animal = lineup[index];
            if (!animal) continue;
            const [light, mid, dark] = TIERS[animal.tier] || TIERS.F;
            const bio = BIOMES[animal.biome] || BIOMES.arena;
            const w = 220;
            const h = 300;
            const x = cx - w / 2;
            under.push(`<defs><linearGradient id="cf${index}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${light}"/><stop offset=".3" stop-color="${mid}"/><stop offset=".62" stop-color="${dark}"/><stop offset=".88" stop-color="${light}"/></linearGradient>
                <linearGradient id="ci${index}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${bio.sky}"/><stop offset="1" stop-color="#070b1a"/></linearGradient></defs>
                <rect x="${x}" y="${top}" width="${w}" height="${h}" rx="16" fill="url(#cf${index})"/>
                <rect x="${x + 6}" y="${top + 6}" width="${w - 12}" height="${h - 12}" rx="12" fill="url(#ci${index})"/>`);
            await placeAnimal(layers, animal, cx, top + h - 58, w - 30, h - 110);
            parts.push(`<rect x="${x + 6}" y="${top + h - 56}" width="${w - 12}" height="50" rx="0" fill="#03050e" fill-opacity=".82"/>`);
            const upper = animal.name.toUpperCase();
            parts.push(text('display', upper, { x: cx, y: top + h - 22, size: fitSize('display', upper, 28, w - 30, 1), anchor: 'middle', fill: '#fff', tracking: 1 }));
            parts.push(tierBadge(animal.tier, x + w - 50, top + 12, 40, 30, 24));
        }
    }
    const bio = lineup[0]?.biome || 'arena';
    await render(file, { bg: background({ biome: bio, accent: '#ff6b00' }), under, layers, over: parts });
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
