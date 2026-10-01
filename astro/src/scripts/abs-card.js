// The collectible ABS card, drawn on a canvas. The front is the site's card at
// full size (the animal over its biome and the tier shards, power, crest, the
// archetype tag, the name plate and the card number); the back follows the
// Injustice card back (number strip, portrait, stat bars, abilities and the
// signature move). One renderer feeds the 3D viewer, the share pictures and
// the videos, so they always match. Cards are laid out on a 500x700 grid;
// callers scale the context. Art: images/ui/card-* (build-ui-cards.py).

export const CARD_W = 500;
export const CARD_H = 700;

const DISPLAY = '"Big Shoulders Display", Impact, sans-serif';
const BODY = 'Inter, system-ui, sans-serif';
const GOLD = '#f6b400';
const GOLD_2 = '#ffd34d';
const MUTED = '#8d929b';
const TEXT_2 = '#c5c9d1';

export const TIER_COLOURS = {
    s: ['#ffc933', '#fff1b0'], a: ['#ff7a1a', '#ffc488'], b: ['#2fa8ff', '#a8dcff'],
    c: ['#37cf7a', '#b0f0cc'], d: ['#9a7cff', '#d8ccff'], f: ['#8a909c', '#d4d7de'], h: ['#b4bac6', '#f1f2f5']
};
const TIER_STARS = { s: 5, a: 4, b: 3, c: 2, d: 1, f: 0, h: 0 };
// How strongly the foil shows: the higher the tier, the brighter the card.
const HOLO = { s: 0.62, a: 0.5, b: 0.42, c: 0.38, d: 0.34, f: 0.3, h: 0.3 };

// The stat icons and colours (UiIcon.astro and abs.css), on a 24px grid.
export const STAT_ROWS = [
    ['attack', 'Attack', '#ff4150', 'M4.2 19.6L12.6 3.4l1.9 1-8.4 16.2zM9.6 20.8L17.4 5.6l1.9 1-7.8 15.2zM15.3 21.2l4.6-9 1.9 1-4.6 9z'],
    ['defense', 'Defense', '#3f7dff', 'M12 2.4l8.2 3.1v6.1c0 5-3.4 8.7-8.2 10-4.8-1.3-8.2-5-8.2-10V5.5z'],
    ['agility', 'Agility', '#3bd65a', 'M3.5 5.5h3.2l6.3 6.5-6.3 6.5H3.5l6.3-6.5zM11.5 5.5h3.2l6.3 6.5-6.3 6.5h-3.2l6.3-6.5z'],
    ['stamina', 'Stamina', '#ff8d24', 'M12 20.8C5 15.8 2.8 12.6 2.8 9.1 2.8 6.3 5 4 7.8 4c1.8 0 3.2 1 4.2 2.5C13 5 14.4 4 16.2 4 19 4 21.2 6.3 21.2 9.1c0 3.5-2.2 6.7-9.2 11.7z'],
    ['intelligence', 'Intellect', '#a35bff', 'M12 2.6a6.6 6.6 0 0 0-3.9 11.9c.7.5 1.1 1.3 1.1 2.2v.5h5.6v-.5c0-.9.4-1.7 1.1-2.2A6.6 6.6 0 0 0 12 2.6zM9.2 18.6h5.6v1.3c0 .8-.6 1.5-1.4 1.5h-2.8c-.8 0-1.4-.7-1.4-1.5z'],
    ['special', 'Special', '#20cfe6', 'M13.6 2L4.8 13.4h6.1L9.8 22l9.4-12.2h-6.3z']
];

// Which metal icon (images/ui/icons) suits an ability, from its name, then its description.
const MOVE_ICONS = [
    [/venom|toxi|poison|sting|spit/, 'venom'],
    [/electr|shock|volt/, 'bolt'],
    [/heat|therm|fire|sun|warm/, 'fire'],
    [/roar|call|howl|alarm|loud|scream|song|voice|sound|mouth/, 'roar'],
    [/armou?r|shell|hide|plate|scute|scale|thick|tough|shield|casque|helmet|skull|quill|spine/, 'shield'],
    [/speed|sprint|fast|dash|swift|burst|rocket|quick|accelerat/, 'wind'],
    [/jump|leap|climb|fly|flight|glide|soar|dive|stoop|aerial|wing/, 'ascend'],
    [/night|nocturnal|dark|shadow|stealth|camou|ambush|silent|hidden|disguise/, 'moon'],
    [/pack|herd|flock|swarm|colony|group|social|team|crowd/, 'friends'],
    [/smart|clever|tool|brain|tactic|memory|learn|problem|mimic/, 'book'],
    [/eye|vision|sight|sense|smell|scent|hear|echo|detect|track/, 'target'],
    [/heavy|giant|mass|weight|size|bulk|huge|colossal/, 'tower'],
    [/endur|stamina|migrat|travel|marathon|hardy|surviv|recover|regenerat/, 'heart'],
    [/charge|ram|horn|tusk|antler|head-?butt|gore|trample|stomp/, 'burst'],
    [/grip|grapple|constrict|crush|squeeze|hug|wrestl|coil|lock|hold|pin/, 'paw'],
    [/bite|jaw|fang|teeth|tooth|claw|talon|kick|slash|strike|swipe|toe|spur|beak|pinc/, 'claws']
];
export function moveIcon(name, text = '', kind = 'ability') {
    for (const source of [name, text]) {
        const lower = String(source || '').toLowerCase();
        const hit = MOVE_ICONS.find(([pattern]) => pattern.test(lower));
        if (hit) return hit[1];
    }
    return kind === 'trait' ? 'star' : 'bolt';
}

// ---------------------------------------------------------------- card data

const GROUP_LABELS = { mammals: 'Mammals', birds: 'Birds', reptiles: 'Reptiles', sea: 'Sea creatures', amphibians: 'Amphibians', bugs: 'Bugs & spiders' };
const num = (value, digits = 0) => Number(value).toLocaleString('en-US', { maximumFractionDigits: digits, minimumFractionDigits: 0 });
export const fmtScore = (value) => { const n = Number(value) || 0; return Number.isInteger(n) ? String(n) : n.toFixed(1); };
function weightText(kg) {
    const v = Number(kg);
    if (!(v > 0)) return null;
    if (v < 0.001) return `${num(v * 1e6, v < 0.00001 ? 1 : 0)} mg`;
    if (v < 1) return `${num(v * 1000, v < 0.01 ? 1 : 0)} g`;
    if (v >= 1000) return `${num(v / 1000, 1)} t`;
    return `${num(v, v < 100 ? 1 : 0)} kg`;
}
const lengthText = (cm) => (Number(cm) > 0 ? (cm >= 100 ? `${num(cm / 100, 2)} m` : `${num(cm, 1)} cm`) : null);
const speedText = (mps) => (Number(mps) > 0 ? `${num(mps * 3.6)} km/h` : null);
const biteText = (psi) => (Number(psi) > 0 ? `${num(psi)} PSI` : null);

// A card from an /data/animals-lite.json entry (Versus and anything client-side).
export function cardFromIndex(entry, total) {
    const human = Boolean(entry.h);
    return {
        slug: entry.s,
        name: entry.n,
        sci: entry.sci || '',
        tier: String(entry.tier || 'F').toLowerCase(),
        tierLabel: human ? 'H' : entry.tier,
        power: fmtScore(entry.p),
        rank: entry.r || null,
        total,
        group: human ? '' : (GROUP_LABELS[entry.g] || ''),
        cls: entry.cls || entry.c || '',
        biome: entry.b || 'arena',
        art: { src: entry.m || entry.i, ar: entry.ar || 1, k: entry.k || 1 },
        stats: { attack: entry.atk, defense: entry.def, agility: entry.agi, stamina: entry.sta, intelligence: entry.int, special: entry.spl },
        measures: [
            ['Weight', weightText(entry.w)],
            [entry.len ? 'Length' : 'Height', lengthText(entry.len || entry.ht)],
            ['Top speed', speedText(entry.v)],
            ['Bite force', biteText(entry.bf)]
        ],
        moves: (entry.ab || []).map((name) => ({ name, kind: 'ability' })),
        signature: entry.ab?.[0] ? { name: entry.ab[0], text: '' } : null
    };
}

// ---------------------------------------------------------------- assets

// The build (scripts/images/build-cards.mjs) draws the same cards in Node and
// hands in its own loader (src -> Promise<image|null>).
let customLoader = null;
export function setImageLoader(loader) {
    customLoader = loader;
    images.clear();
}

const images = new Map();
export function loadImage(src) {
    if (!src) return Promise.resolve(null);
    if (!images.has(src) && customLoader) images.set(src, customLoader(src));
    if (!images.has(src)) {
        images.set(src, new Promise((resolve) => {
            const img = new Image();
            img.decoding = 'async';
            img.onload = () => resolve(img);
            // a failed image is not remembered, so trying again downloads it again
            img.onerror = () => { images.delete(src); resolve(null); };
            img.src = src;
        }));
    }
    return images.get(src);
}

let fonts = null;
export function fontsReady() {
    if (!fonts) {
        const faces = [`700 40px ${DISPLAY}`, `800 40px ${DISPLAY}`, `900 40px ${DISPLAY}`, `600 16px ${BODY}`, `700 16px ${BODY}`, `800 16px ${BODY}`, `italic 600 16px ${BODY}`];
        fonts = Promise.all(faces.map((face) => document.fonts?.load(face).catch(() => null))).catch(() => null);
    }
    return fonts;
}

// Everything one card needs, loaded once and cached by the browser.
export async function cardAssets(card) {
    const tier = card.tier;
    const biome = card.biome && card.biome !== 'arena' ? `/images/ui/card-biome-${card.biome}.webp` : null;
    const icons = [...new Set((card.moves || []).slice(0, 4).map((move) => move.icon || moveIcon(move.name, move.text, move.kind)))];
    const [frame, shards, scene, hex, art, crest, logo, holo, foil, tag, ...iconImages] = await Promise.all([
        loadImage(`/images/ui/card-frame-${tier}.png`),
        loadImage(`/images/ui/card-shards-${tier}.webp`),
        loadImage(biome),
        loadImage('/images/ui/hex-card.webp'),
        loadImage(card.art?.src),
        loadImage(`/images/ui/tier-${tier}.svg`),
        loadImage('/images/logo.png'),
        loadImage('/images/ui/holo.webp'),
        tier === 's' ? loadImage('/images/ui/foil-s.webp') : null,
        loadImage('/images/ui/btn-gold.png'),
        ...icons.map((name) => loadImage(`/images/ui/icons/${name}.svg`)),
        fontsReady()
    ]);
    return { frame, shards, scene, hex, art, crest, logo, holo, foil, tag, icons: Object.fromEntries(icons.map((name, index) => [name, iconImages[index]])) };
}

// The card as the build drew it (scripts/images/build-cards.mjs; the page
// names the files in card.files): the front, the back, and the front in two
// layers for live foil (base: the background; top: everything over the foil).
// Four downloads instead of drawing the card, which is slow on a phone. Null
// when the card has no files or they will not load.
export async function cardFaces(card) {
    const files = card.files;
    if (!files?.front || !files.back || !files.base || !files.top) return null;
    const [front, back, base, top] = await Promise.all([files.front, files.back, files.base, files.top].map(loadImage));
    return front && back && base && top ? { front, back, base, top } : null;
}

// ---------------------------------------------------------------- drawing helpers

export function roundRect(ctx, x, y, w, h, r) {
    const radius = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + w, y, x + w, y + h, radius);
    ctx.arcTo(x + w, y + h, x, y + h, radius);
    ctx.arcTo(x, y + h, x, y, radius);
    ctx.arcTo(x, y, x + w, y, radius);
    ctx.closePath();
}

// Device pixels per card unit: shadows ignore the transform, so they scale by hand.
export function unit(ctx) {
    const m = ctx.getTransform();
    return Math.hypot(m.a, m.b) || 1;
}

let blurScratch = null;
// Something blurred under the drawing (a drop shadow, a glow), drawn at a
// quarter of the size and scaled up: a full-size blur is slow on a CPU canvas
// (the build draws every card in Node) and looks the same. `paint(s, w, h)`
// draws the shape at (0, 0); its shadow, in `colour`, is what lands.
function blurred(ctx, x, y, w, h, { blur, colour, offsetY = 0 }, paint) {
    const k = unit(ctx) * 0.25;
    const pad = blur * 2;
    const sw = Math.max(1, Math.ceil((w + pad * 2) * k));
    const sh = Math.max(1, Math.ceil((h + pad * 2) * k));
    blurScratch ||= document.createElement('canvas');
    const scratch = blurScratch;
    scratch.width = sw;
    scratch.height = sh;
    const s = scratch.getContext('2d');
    s.setTransform(1, 0, 0, 1, 0, 0);
    s.clearRect(0, 0, sw, sh);
    // the shape is drawn off the canvas; only its shadow lands on it
    s.shadowColor = colour;
    s.shadowBlur = blur * k;
    s.shadowOffsetX = sw + 10;
    s.translate(pad * k - sw - 10, pad * k);
    s.scale(k, k);
    paint(s, w, h);
    ctx.drawImage(scratch, x - pad, y - pad + offsetY, w + pad * 2, h + pad * 2);
}
const imageShadow = (ctx, img, x, y, w, h, options) => blurred(ctx, x, y, w, h, options, (s) => s.drawImage(img, 0, 0, w, h));

const font = (weight, size, family = DISPLAY, style = '') => `${style ? `${style} ` : ''}${weight} ${size}px ${family}`;

// Largest size (down to `min`) at which `text` fits `maxWidth`.
function fit(ctx, text, weight, size, maxWidth, min = 10, family = DISPLAY) {
    let current = size;
    ctx.font = font(weight, current, family);
    while (ctx.measureText(text).width > maxWidth && current > min) {
        current -= 1;
        ctx.font = font(weight, current, family);
    }
    return current;
}

// Letter-spaced capitals (canvas letterSpacing is not everywhere yet).
function spaced(ctx, text, x, y, spacing, align = 'left') {
    const chars = [...text];
    const widths = chars.map((char) => ctx.measureText(char).width);
    const total = widths.reduce((sum, w) => sum + w, 0) + spacing * (chars.length - 1);
    let cursor = align === 'center' ? x - total / 2 : align === 'right' ? x - total : x;
    const saved = ctx.textAlign;
    ctx.textAlign = 'left';
    chars.forEach((char, index) => {
        ctx.fillText(char, cursor, y);
        cursor += widths[index] + spacing;
    });
    ctx.textAlign = saved;
    return total;
}
function spacedWidth(ctx, text, spacing) {
    return [...text].reduce((sum, char) => sum + ctx.measureText(char).width, 0) + spacing * ([...text].length - 1);
}

// Word-wrapped lines, at most `maxLines`, the last one ending in an ellipsis if cut.
export function wrap(ctx, text, maxWidth, maxLines) {
    const words = String(text || '').split(/\s+/).filter(Boolean);
    const lines = [];
    let line = '';
    for (let index = 0; index < words.length; index += 1) {
        const next = line ? `${line} ${words[index]}` : words[index];
        if (ctx.measureText(next).width <= maxWidth || !line) {
            line = next;
            continue;
        }
        lines.push(line);
        line = words[index];
        if (lines.length === maxLines) {
            line = '';
            let last = lines[maxLines - 1];
            while (last && ctx.measureText(`${last}…`).width > maxWidth) last = last.replace(/\s*\S+$/, '');
            lines[maxLines - 1] = `${last.replace(/[,;:.]$/, '')}…`;
            return lines;
        }
    }
    if (line) lines.push(line);
    return lines;
}

// Two lines as even as the words allow ("BLACK-NECKED / SPITTING COBRA",
// not "BLACK-NECKED SPITTING / COBRA").
export function balance(ctx, text, maxWidth) {
    const words = String(text).split(/\s+/).filter(Boolean);
    if (words.length < 2) return wrap(ctx, text, maxWidth, 2);
    let best = null;
    for (let cut = 1; cut < words.length; cut += 1) {
        const lines = [words.slice(0, cut).join(' '), words.slice(cut).join(' ')];
        const widest = Math.max(...lines.map((line) => ctx.measureText(line).width));
        if (!best || widest < best.widest) best = { lines, widest };
    }
    return best.lines;
}

// A 9-slice image (the frames and the gold tag plate), edges under the corners
// with a half-unit overlap so no hairline shows between the pieces.
export function nineSlice(ctx, img, x, y, w, h, slice, border) {
    if (!img) return;
    const iw = img.naturalWidth || img.width;
    const ih = img.naturalHeight || img.height;
    const s = slice;
    const b = border;
    const o = 0.5;
    ctx.drawImage(img, s, s, iw - 2 * s, ih - 2 * s, x + b - o, y + b - o, w - 2 * b + 2 * o, h - 2 * b + 2 * o);
    ctx.drawImage(img, s, 0, iw - 2 * s, s, x + b - o, y, w - 2 * b + 2 * o, b);
    ctx.drawImage(img, s, ih - s, iw - 2 * s, s, x + b - o, y + h - b, w - 2 * b + 2 * o, b);
    ctx.drawImage(img, 0, s, s, ih - 2 * s, x, y + b - o, b, h - 2 * b + 2 * o);
    ctx.drawImage(img, iw - s, s, s, ih - 2 * s, x + w - b, y + b - o, b, h - 2 * b + 2 * o);
    ctx.drawImage(img, 0, 0, s, s, x, y, b, b);
    ctx.drawImage(img, iw - s, 0, s, s, x + w - b, y, b, b);
    ctx.drawImage(img, 0, ih - s, s, s, x, y + h - b, b, b);
    ctx.drawImage(img, iw - s, ih - s, s, s, x + w - b, y + h - b, b, b);
}
// The frame art is 9-slice with a transparent centre: draw only the ring.
function frame(ctx, img, x, y, w, h, band) {
    if (!img) return;
    const k = band / 30; // the band is 30px wide in the art
    const iw = img.naturalWidth || img.width;
    const s = 88;
    const b = s * k;
    const o = 0.5;
    ctx.drawImage(img, s, 0, iw - 2 * s, s, x + b - o, y, w - 2 * b + 2 * o, b);
    ctx.drawImage(img, s, iw - s, iw - 2 * s, s, x + b - o, y + h - b, w - 2 * b + 2 * o, b);
    ctx.drawImage(img, 0, s, s, iw - 2 * s, x, y + b - o, b, h - 2 * b + 2 * o);
    ctx.drawImage(img, iw - s, s, s, iw - 2 * s, x + w - b, y + b - o, b, h - 2 * b + 2 * o);
    ctx.drawImage(img, 0, 0, s, s, x, y, b, b);
    ctx.drawImage(img, iw - s, 0, s, s, x + w - b, y, b, b);
    ctx.drawImage(img, 0, iw - s, s, s, x, y + h - b, b, b);
    ctx.drawImage(img, iw - s, iw - s, s, s, x + w - b, y + h - b, b, b);
}

function cover(ctx, img, x, y, w, h, focusY = 0.5) {
    if (!img) return;
    const iw = img.naturalWidth || img.width;
    const ih = img.naturalHeight || img.height;
    const scale = Math.max(w / iw, h / ih);
    const dw = iw * scale;
    const dh = ih * scale;
    ctx.drawImage(img, x + (w - dw) / 2, y + (h - dh) * focusY, dw, dh);
}

function hexFill(ctx, hex, x, y, w, h, alpha = 1) {
    if (!hex) return;
    const pattern = ctx.createPattern(hex, 'repeat');
    if (!pattern) return;
    pattern.setTransform?.(new DOMMatrix().scale(0.5));
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.fillStyle = pattern;
    ctx.fillRect(x, y, w, h);
    ctx.restore();
}

// Equal-area art (the site's .animal-art rule): the same visual area whatever the shape.
function artBox(art, img, boxW, boxH, fitK) {
    const ar = art?.ar || (img ? img.naturalWidth / img.naturalHeight : 1) || 1;
    const k = art?.k || 1;
    const w = Math.min(boxW, fitK * k * boxH, boxH * ar);
    return { w, h: w / ar };
}

function chevron(ctx, x, y, w, h) {
    ctx.beginPath();
    ctx.moveTo(x, y - h / 2);
    ctx.lineTo(x + w, y);
    ctx.lineTo(x, y + h / 2);
    ctx.closePath();
    ctx.fillStyle = GOLD;
    ctx.fill();
}

function starPath(ctx, cx, cy, r) {
    ctx.beginPath();
    for (let i = 0; i < 10; i += 1) {
        const radius = i % 2 ? r * 0.45 : r;
        const angle = -Math.PI / 2 + (i * Math.PI) / 5;
        ctx.lineTo(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius);
    }
    ctx.closePath();
}
function stars(ctx, x, y, count, r = 7, gap = 3) {
    for (let i = 0; i < 5; i += 1) {
        starPath(ctx, x + r + i * (2 * r + gap), y, r);
        ctx.fillStyle = i < count ? GOLD : 'rgba(255,255,255,0.16)';
        ctx.fill();
    }
    return 5 * (2 * r + gap) - gap;
}

function barcode(card) {
    return [...`${card.slug}${card.rank ?? ''}`].flatMap((char) => [1 + (char.charCodeAt(0) % 3), 1 + ((char.charCodeAt(0) >> 2) % 2)]).slice(0, 34);
}

const icon = (path) => new Path2D(path);
const statIcons = new Map();
export function statIcon(ctx, key, path, x, y, size, colour) {
    if (!statIcons.has(key)) statIcons.set(key, icon(path));
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(size / 24, size / 24);
    ctx.fillStyle = colour;
    ctx.fill(statIcons.get(key));
    ctx.restore();
}

// The slanted segmented bar (abs.css .sbar): ten skewed segments, lit to `value`.
export function segBar(ctx, x, y, w, h, value, colour) {
    const gap = h * 0.22;
    const seg = (w - gap * 9) / 10;
    const skew = Math.tan((24 * Math.PI) / 180) * h;
    for (let i = 0; i < 10; i += 1) {
        const sx = x + i * (seg + gap);
        const lit = Math.max(0, Math.min(1, (value - i * 10) / 10));
        const shape = () => {
            ctx.beginPath();
            ctx.moveTo(sx + skew / 2, y);
            ctx.lineTo(sx + seg + skew / 2, y);
            ctx.lineTo(sx + seg - skew / 2, y + h);
            ctx.lineTo(sx - skew / 2, y + h);
            ctx.closePath();
        };
        shape();
        ctx.fillStyle = 'rgba(255,255,255,0.08)';
        ctx.fill();
        if (lit > 0) {
            ctx.save();
            shape();
            ctx.clip();
            ctx.fillStyle = colour;
            ctx.fillRect(sx - skew, y, (seg + skew) * lit + (lit === 1 ? skew : 0), h);
            ctx.restore();
        }
        ctx.save();
        shape();
        ctx.clip();
        const gloss = ctx.createLinearGradient(0, y, 0, y + h);
        gloss.addColorStop(0, 'rgba(255,255,255,0.34)');
        gloss.addColorStop(0.5, 'rgba(255,255,255,0.04)');
        gloss.addColorStop(1, 'rgba(0,0,0,0.22)');
        ctx.fillStyle = gloss;
        ctx.fillRect(sx - skew, y, seg + 2 * skew, h);
        ctx.restore();
    }
}

// ---------------------------------------------------------------- foil

let holoScratch = null;
// The holographic foil over the card's background: the foil tile slides with
// `phase` (the light's angle) and shows in a diagonal band where the light
// catches it, plus a soft gloss. `phase` 0..1 sweeps the band across the card.
function drawHolo(ctx, A, card, x, y, w, h, phase, strength = 1) {
    if (!A.holo || phase == null) return;
    // drawn at half resolution: the foil is soft, and it is redrawn every video frame
    const k = unit(ctx) * 0.5;
    const pw = Math.max(1, Math.round(w * k));
    const ph = Math.max(1, Math.round(h * k));
    holoScratch ||= document.createElement('canvas');
    const scratch = holoScratch;
    if (scratch.width !== pw || scratch.height !== ph) { scratch.width = pw; scratch.height = ph; }
    const s = scratch.getContext('2d');
    s.setTransform(1, 0, 0, 1, 0, 0);
    s.globalCompositeOperation = 'source-over';
    s.clearRect(0, 0, pw, ph);
    const pattern = s.createPattern(A.holo, 'repeat');
    const tile = 0.62 * k;
    pattern.setTransform?.(new DOMMatrix().translate(-phase * 340 * k, -phase * 120 * k).scale(tile));
    s.fillStyle = pattern;
    s.fillRect(0, 0, pw, ph);
    // the band where the light catches the foil
    const t = -0.35 + phase * 1.7;
    const band = s.createLinearGradient(0, 0, pw, ph);
    const stop = (offset, alpha) => band.addColorStop(Math.max(0, Math.min(1, offset)), `rgba(0,0,0,${alpha})`);
    stop(t - 0.42, 0.12);
    stop(t - 0.16, 0.55);
    stop(t, 1);
    stop(t + 0.16, 0.55);
    stop(t + 0.42, 0.12);
    s.globalCompositeOperation = 'destination-in';
    s.fillStyle = band;
    s.fillRect(0, 0, pw, ph);
    // color-dodge lifts the colours already there; screen adds the rainbow
    // over the dark plates, where a dodge alone shows nothing
    const amount = (HOLO[card.tier] ?? 0.35) * strength;
    ctx.save();
    ctx.globalCompositeOperation = 'color-dodge';
    ctx.globalAlpha = amount;
    ctx.drawImage(scratch, x, y, w, h);
    ctx.globalCompositeOperation = 'screen';
    ctx.globalAlpha = amount * 0.5;
    ctx.drawImage(scratch, x, y, w, h);
    ctx.restore();
}

// A soft gloss stripe over the whole face, at the same angle as the foil band.
function drawGloss(ctx, x, y, w, h, phase, strength = 1) {
    if (phase == null) return;
    const t = -0.35 + phase * 1.7;
    const g = ctx.createLinearGradient(x, y, x + w, y + h);
    const stop = (offset, alpha) => g.addColorStop(Math.max(0, Math.min(1, offset)), `rgba(255,255,255,${alpha})`);
    stop(t - 0.22, 0);
    stop(t - 0.05, 0.07 * strength);
    stop(t, 0.13 * strength);
    stop(t + 0.05, 0.07 * strength);
    stop(t + 0.22, 0);
    ctx.save();
    ctx.globalCompositeOperation = 'screen';
    ctx.fillStyle = g;
    ctx.fillRect(x, y, w, h);
    ctx.restore();
}

// ---------------------------------------------------------------- the front

const FIELD = { x: 12, y: 12, w: 476, h: 520 };
const PLATE_Y = 532;

// layer: 'all', or 'under' (the background the foil sits on) and 'over'
// (everything above the foil), so the 3D viewer can slide live foil between them.
export function drawFront(ctx, card, A, { layer = 'all', sheen = 0.32, foil = 1 } = {}) {
    const [tierColour] = TIER_COLOURS[card.tier] || TIER_COLOURS.f;
    const under = layer === 'all' || layer === 'under';
    const over = layer === 'all' || layer === 'over';

    ctx.save();
    roundRect(ctx, 10, 10, CARD_W - 20, CARD_H - 20, 22);
    ctx.clip();

    if (under) {
        ctx.fillStyle = '#16171b';
        ctx.fillRect(0, 0, CARD_W, CARD_H);
        hexFill(ctx, A.hex, 0, 0, CARD_W, CARD_H);
        if (A.scene) {
            const sw = FIELD.w;
            const sh = sw * (4 / 3);
            ctx.drawImage(A.scene, FIELD.x, FIELD.y + FIELD.h - sh * 0.82, sw, sh);
        }
        if (A.shards) ctx.drawImage(A.shards, FIELD.x, FIELD.y, FIELD.w, CARD_H - 24);
        if (A.foil) {
            ctx.save();
            ctx.globalCompositeOperation = 'screen';
            ctx.globalAlpha = 0.8;
            ctx.drawImage(A.foil, FIELD.x - 40 + (sheen ?? 0.3) * 80, FIELD.y - 30, FIELD.w * 1.25, FIELD.h * 1.25);
            ctx.restore();
        }
    }
    if (layer === 'all') drawHolo(ctx, A, card, FIELD.x, FIELD.y, FIELD.w, FIELD.h, sheen, foil);

    if (over) {
        // vignette: darker edges, and the field fades into the plate
        const v = ctx.createRadialGradient(270, 300, 120, 270, 300, 430);
        v.addColorStop(0, 'rgba(0,0,0,0)');
        v.addColorStop(1, 'rgba(0,0,0,0.55)');
        ctx.fillStyle = v;
        ctx.fillRect(FIELD.x, FIELD.y, FIELD.w, FIELD.h);
        const fade = ctx.createLinearGradient(0, PLATE_Y - 90, 0, PLATE_Y);
        fade.addColorStop(0, 'rgba(0,0,0,0)');
        fade.addColorStop(1, 'rgba(0,0,0,0.45)');
        ctx.fillStyle = fade;
        ctx.fillRect(FIELD.x, PLATE_Y - 90, FIELD.w, 90);

        // the band down the left
        const band = ctx.createLinearGradient(12, 0, 44, 0);
        band.addColorStop(0, 'rgba(0,0,0,0.3)');
        band.addColorStop(1, 'rgba(0,0,0,0.58)');
        ctx.fillStyle = band;
        ctx.fillRect(12, 12, 32, PLATE_Y - 12);
        ctx.fillStyle = tierColour;
        ctx.globalAlpha = 0.55;
        ctx.fillRect(43.5, 12, 1.2, PLATE_Y - 12);
        ctx.globalAlpha = 1;
        ctx.save();
        ctx.translate(29, (PLATE_Y + 12) / 2);
        ctx.rotate(-Math.PI / 2);
        ctx.font = font(800, 14);
        ctx.fillStyle = 'rgba(255,255,255,0.55)';
        ctx.textBaseline = 'middle';
        spaced(ctx, 'ANIMAL BATTLE STATS', 0, 1, 4.6, 'center');
        ctx.restore();

        // the animal
        if (A.art) {
            const box = artBox(card.art, A.art, 420, 412, 1.0);
            const cx = 270;
            const bottom = PLATE_Y - 12;
            imageShadow(ctx, A.art, cx - box.w / 2, bottom - box.h, box.w, box.h, { blur: 26, offsetY: 18, colour: 'rgba(0,0,0,0.7)' });
            ctx.drawImage(A.art, cx - box.w / 2, bottom - box.h, box.w, box.h);
        }
        drawGloss(ctx, FIELD.x, FIELD.y, FIELD.w, FIELD.h, sheen, foil);

        // power, top left
        roundRect(ctx, 56, 26, 100, 78, 11);
        ctx.fillStyle = 'rgba(8,9,11,0.84)';
        ctx.fill();
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = 'rgba(255,255,255,0.18)';
        ctx.stroke();
        ctx.textAlign = 'center';
        ctx.textBaseline = 'alphabetic';
        ctx.fillStyle = card.tier === 's' ? GOLD_2 : '#fff';
        fit(ctx, card.power, 900, 52, 86, 30);
        ctx.fillText(card.power, 106, 78);
        ctx.font = font(800, 12, BODY);
        ctx.fillStyle = GOLD_2;
        spaced(ctx, 'PWR', 106, 96, 2.6, 'center');

        // tier crest, top right
        if (A.crest) {
            imageShadow(ctx, A.crest, 406, 22, 70, 83, { blur: 8, offsetY: 3, colour: 'rgba(0,0,0,0.55)' });
            ctx.drawImage(A.crest, 406, 22, 70, 83);
        }

        // the name plate
        const plate = ctx.createLinearGradient(0, PLATE_Y, 0, CARD_H);
        plate.addColorStop(0, '#191a1f');
        plate.addColorStop(1, '#0a0b0d');
        ctx.fillStyle = plate;
        ctx.fillRect(0, PLATE_Y, CARD_W, CARD_H - PLATE_Y);
        const glow = ctx.createLinearGradient(0, PLATE_Y, 0, PLATE_Y + 26);
        glow.addColorStop(0, `${tierColour}55`);
        glow.addColorStop(1, `${tierColour}00`);
        ctx.fillStyle = glow;
        ctx.fillRect(0, PLATE_Y, CARD_W, 26);
        ctx.fillStyle = tierColour;
        ctx.fillRect(0, PLATE_Y - 1.5, CARD_W, 3);

        // name: one line if it fits at a good size, else two
        const name = card.name.toUpperCase();
        ctx.textAlign = 'left';
        ctx.fillStyle = '#fff';
        let size = fit(ctx, name, 900, 64, 404, 40);
        let lines = [name];
        if (ctx.measureText(name).width > 404) {
            ctx.font = font(900, 40);
            lines = balance(ctx, name, 404);
            size = Math.min(...lines.map((line) => fit(ctx, line, 900, 38, 404, 26)));
        }
        ctx.font = font(900, size);
        const lineH = size * 0.92;
        const nameTop = lines.length > 1 ? 546 : 548;
        lines.forEach((line, index) => ctx.fillText(line, 58, nameTop + size * 0.78 + index * lineH));
        const nameBottom = nameTop + size * 0.78 + (lines.length - 1) * lineH;
        chevron(ctx, 30, nameBottom - size * 0.36, 15, 22);

        // scientific name and group
        const subY = Math.min(nameBottom + 26, 640);
        ctx.font = font(600, 16, BODY, 'italic');
        ctx.fillStyle = TEXT_2;
        const sci = card.sci || card.group;
        ctx.fillText(sci, 58, subY);
        const sciW = ctx.measureText(sci).width;
        if (card.sci && card.group) {
            ctx.font = font(600, 15, BODY);
            ctx.fillStyle = MUTED;
            ctx.fillText(`  ·  ${card.group}`, 58 + sciW, subY);
        }

        // footer: the card number and the brand
        ctx.fillStyle = 'rgba(255,255,255,0.1)';
        ctx.fillRect(30, 650, 440, 1);
        ctx.textBaseline = 'alphabetic';
        if (card.rank) {
            ctx.font = font(800, 12, BODY);
            ctx.fillStyle = MUTED;
            const noW = spaced(ctx, 'NO.', 30, 674, 1.6);
            ctx.font = font(900, 24);
            ctx.fillStyle = '#fff';
            ctx.fillText(String(card.rank), 30 + noW + 6, 675);
            const rankW = ctx.measureText(String(card.rank)).width;
            ctx.font = font(700, 18);
            ctx.fillStyle = MUTED;
            ctx.fillText(`/${card.total}`, 30 + noW + 6 + rankW + 2, 675);
        } else {
            ctx.font = font(800, 12, BODY);
            ctx.fillStyle = MUTED;
            spaced(ctx, 'NOT RANKED', 30, 674, 1.6);
        }
        ctx.font = font(800, 13);
        ctx.fillStyle = 'rgba(243,244,246,0.75)';
        spaced(ctx, 'ANIMAL BATTLE STATS', 434, 673, 2.4, 'right');
        if (A.logo) ctx.drawImage(A.logo, 440, 652, 30, 30);

        // the archetype tag, a gold plate astride the plate line (the "BOSS" tab)
        if (card.cls && A.tag) {
            const label = card.cls.toUpperCase();
            ctx.font = font(900, 17);
            const tw = spacedWidth(ctx, label, 1.8) + 30;
            blurred(ctx, 474 - tw, PLATE_Y - 16, tw, 32, { blur: 8, offsetY: 3, colour: 'rgba(0,0,0,0.5)' }, (s, w, h) => {
                roundRect(s, 0, 0, w, h, 8);
                s.fillStyle = '#000';
                s.fill();
            });
            nineSlice(ctx, A.tag, 474 - tw, PLATE_Y - 16, tw, 32, 24, 9);
            ctx.fillStyle = '#1d1400';
            ctx.textBaseline = 'middle';
            spaced(ctx, label, 474 - tw / 2, PLATE_Y + 1, 1.8, 'center');
            ctx.textBaseline = 'alphabetic';
        }
        ctx.textAlign = 'left';
    }
    ctx.restore();
    if (over) frame(ctx, A.frame, 0, 0, CARD_W, CARD_H, 15);
}

// ---------------------------------------------------------------- the back

// fill 0..1 animates the stat bars (the video fills them in).
export function drawBack(ctx, card, A, { fill = 1 } = {}) {
    const [tierColour] = TIER_COLOURS[card.tier] || TIER_COLOURS.f;
    ctx.save();
    roundRect(ctx, 10, 10, CARD_W - 20, CARD_H - 20, 22);
    ctx.clip();
    ctx.fillStyle = '#131417';
    ctx.fillRect(0, 0, CARD_W, CARD_H);
    hexFill(ctx, A.hex, 0, 0, CARD_W, CARD_H, 0.85);
    const shade = ctx.createLinearGradient(0, 0, 0, CARD_H);
    shade.addColorStop(0, 'rgba(0,0,0,0.28)');
    shade.addColorStop(1, 'rgba(0,0,0,0.5)');
    ctx.fillStyle = shade;
    ctx.fillRect(0, 0, CARD_W, CARD_H);
    const tint = ctx.createRadialGradient(400, 120, 10, 400, 120, 360);
    tint.addColorStop(0, `${tierColour}26`);
    tint.addColorStop(1, `${tierColour}00`);
    ctx.fillStyle = tint;
    ctx.fillRect(0, 0, CARD_W, CARD_H);

    // the number strip: barcode, number and stars
    const head = ctx.createLinearGradient(0, 12, 0, 66);
    head.addColorStop(0, 'rgba(0,0,0,0.62)');
    head.addColorStop(1, 'rgba(0,0,0,0.38)');
    ctx.fillStyle = head;
    ctx.fillRect(0, 12, CARD_W, 54);
    ctx.fillStyle = tierColour;
    ctx.fillRect(0, 65, CARD_W, 2.5);
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    let bx = 34;
    for (const w of barcode(card)) {
        ctx.fillRect(bx, 27, w * 1.7, 26);
        bx += w * 1.7 + 2.2;
        if (bx > 248) break;
    }
    ctx.textAlign = 'right';
    ctx.textBaseline = 'alphabetic';
    const starsW = 5 * 15 + 4 * 3;
    stars(ctx, 470 - starsW, 40, TIER_STARS[card.tier] ?? 0, 7.5, 3);
    const numberRight = 470 - starsW - 14;
    if (card.rank) {
        ctx.font = font(700, 19);
        ctx.fillStyle = MUTED;
        ctx.fillText(`/${card.total}`, numberRight, 48);
        const totalW = ctx.measureText(`/${card.total}`).width;
        ctx.font = font(900, 28);
        ctx.fillStyle = '#fff';
        ctx.fillText(String(card.rank), numberRight - totalW - 1, 49);
    } else {
        ctx.font = font(800, 18);
        ctx.fillStyle = MUTED;
        ctx.fillText('HUMAN', numberRight, 48);
    }
    ctx.textAlign = 'left';

    // portrait, left
    const P = { x: 30, y: 84, w: 182, h: 236 };
    ctx.save();
    roundRect(ctx, P.x, P.y, P.w, P.h, 12);
    ctx.clip();
    ctx.fillStyle = '#16171b';
    ctx.fillRect(P.x, P.y, P.w, P.h);
    hexFill(ctx, A.hex, P.x, P.y, P.w, P.h);
    if (A.scene) cover(ctx, A.scene, P.x, P.y, P.w, P.h, 0.62);
    if (A.shards) ctx.drawImage(A.shards, P.x - 20, P.y, P.w + 40, P.h * 1.1);
    const pv = ctx.createRadialGradient(P.x + P.w / 2, P.y + P.h * 0.55, 30, P.x + P.w / 2, P.y + P.h * 0.55, 170);
    pv.addColorStop(0, 'rgba(0,0,0,0)');
    pv.addColorStop(1, 'rgba(0,0,0,0.55)');
    ctx.fillStyle = pv;
    ctx.fillRect(P.x, P.y, P.w, P.h);
    if (A.art) {
        const box = artBox(card.art, A.art, P.w - 18, P.h - 70, 0.95);
        imageShadow(ctx, A.art, P.x + (P.w - box.w) / 2, P.y + P.h - 12 - box.h, box.w, box.h, { blur: 12, offsetY: 8, colour: 'rgba(0,0,0,0.65)' });
        ctx.drawImage(A.art, P.x + (P.w - box.w) / 2, P.y + P.h - 12 - box.h, box.w, box.h);
    }
    ctx.restore();
    ctx.save();
    ctx.globalAlpha = 0.95;
    frame(ctx, A.frame, P.x - 4, P.y - 4, P.w + 8, P.h + 8, 6);
    ctx.restore();
    if (A.crest) {
        imageShadow(ctx, A.crest, P.x + P.w - 46, P.y + 10, 36, 43, { blur: 6, offsetY: 2, colour: 'rgba(0,0,0,0.55)' });
        ctx.drawImage(A.crest, P.x + P.w - 46, P.y + 10, 36, 43);
    }
    roundRect(ctx, P.x + 10, P.y + 10, 58, 44, 8);
    ctx.fillStyle = 'rgba(8,9,11,0.84)';
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(255,255,255,0.18)';
    ctx.stroke();
    ctx.textAlign = 'center';
    ctx.fillStyle = card.tier === 's' ? GOLD_2 : '#fff';
    fit(ctx, card.power, 900, 28, 50, 16);
    ctx.fillText(card.power, P.x + 39, P.y + 38);
    ctx.font = font(800, 8, BODY);
    ctx.fillStyle = GOLD_2;
    spaced(ctx, 'PWR', P.x + 39, P.y + 49, 1.6, 'center');
    ctx.textAlign = 'left';

    // name plate under the portrait
    const N = { x: 30, y: 328, w: 182, h: 52 };
    const np = ctx.createLinearGradient(0, N.y, 0, N.y + N.h);
    np.addColorStop(0, '#1b1c21');
    np.addColorStop(1, '#0b0c0e');
    roundRect(ctx, N.x, N.y, N.w, N.h, 8);
    ctx.fillStyle = np;
    ctx.fill();
    ctx.fillStyle = tierColour;
    ctx.fillRect(N.x + 6, N.y, N.w - 12, 2);
    chevron(ctx, N.x + 10, N.y + N.h / 2 + 1, 9, 14);
    const backName = card.name.toUpperCase();
    ctx.fillStyle = '#fff';
    const nameSize = fit(ctx, backName, 900, 32, N.w - 36, 15);
    if (ctx.measureText(backName).width > N.w - 36) {
        ctx.font = font(900, 17);
        const two = balance(ctx, backName, N.w - 36);
        ctx.font = font(900, Math.min(...two.map((line) => fit(ctx, line, 900, 17, N.w - 36, 11))));
        two.forEach((line, index) => ctx.fillText(line, N.x + 26, N.y + 24 + index * 16));
    } else ctx.fillText(backName, N.x + 26, N.y + N.h / 2 + nameSize * 0.36);

    // measurements under it
    const rows = (card.measures || []).slice(0, 4);
    let my = 398;
    for (const [labelText, value] of rows) {
        ctx.fillStyle = 'rgba(255,255,255,0.08)';
        ctx.fillRect(34, my + 9, 174, 1);
        ctx.font = font(700, 10, BODY);
        ctx.fillStyle = MUTED;
        spaced(ctx, labelText.toUpperCase(), 34, my, 1.3);
        ctx.textAlign = 'right';
        ctx.fillStyle = value ? '#fff' : '#62666e';
        fit(ctx, value || '—', 800, 20, 92, 12);
        ctx.fillText(value || '—', 208, my + 2);
        ctx.textAlign = 'left';
        my += 28;
    }

    // stats, right
    const heading = (text, x, y) => {
        ctx.fillStyle = GOLD;
        ctx.beginPath();
        ctx.moveTo(x + 3, y - 15);
        ctx.lineTo(x + 7, y - 15);
        ctx.lineTo(x + 4, y + 1);
        ctx.lineTo(x, y + 1);
        ctx.closePath();
        ctx.fill();
        ctx.font = font(900, 21);
        ctx.fillStyle = '#fff';
        spaced(ctx, text, x + 14, y, 1.8);
    };
    heading('STATS', 228, 104);
    let sy = 118;
    for (const [key, labelText, colour, path] of STAT_ROWS) {
        const value = Math.max(0, Math.min(100, Number(card.stats?.[key]) || 0));
        const shown = value * fill;
        statIcon(ctx, key, path, 228, sy + 1, 17, colour);
        ctx.font = font(800, 15);
        ctx.fillStyle = '#f3f4f6';
        spaced(ctx, labelText.toUpperCase(), 251, sy + 14, 0.9);
        // elite stats (90+) glow
        if (value >= 90 && fill >= 1) {
            blurred(ctx, 318, sy + 3, 104 * (shown / 100), 13, { blur: 8, colour: `${colour}aa` }, (s, w, h) => {
                s.fillStyle = '#000';
                s.fillRect(0, 0, w, h);
            });
        }
        segBar(ctx, 318, sy + 3, 104, 13, shown, colour);
        ctx.textAlign = 'right';
        const max = value >= 100 && fill >= 1;
        const text = max ? 'MAX' : fmtScore(Math.round(shown * 10) / 10 === value ? value : Math.round(shown));
        ctx.font = font(900, max ? 18 : 25);
        if (value >= 90 && fill >= 1) {
            const tw = ctx.measureText(text).width;
            blurred(ctx, 470 - tw, sy - 2, tw, 22, { blur: 10, colour: 'rgba(246,180,0,0.55)' }, (s, w, h) => {
                s.fillStyle = '#000';
                s.fillRect(0, h * 0.15, w, h * 0.75);
            });
        }
        ctx.fillStyle = value >= 90 ? GOLD_2 : value < 40 ? MUTED : '#fff';
        ctx.fillText(text, 470, sy + 17);
        ctx.textAlign = 'left';
        sy += 31;
    }

    // abilities and traits, with the metal icons
    heading('ABILITIES', 228, 330);
    let ay = 344;
    for (const move of (card.moves || []).slice(0, 4)) {
        const name = move.icon || moveIcon(move.name, move.text, move.kind);
        const img = A.icons?.[name];
        if (img) ctx.drawImage(img, 228, ay + 1, 23, 23);
        const tag = move.kind === 'trait' ? 'TRAIT' : 'ABILITY';
        ctx.font = font(800, 8.5, BODY);
        const tagW = spacedWidth(ctx, tag, 1.2);
        ctx.fillStyle = move.kind === 'trait' ? '#20cfe6' : GOLD_2;
        spaced(ctx, tag, 470, ay + 16, 1.2, 'right');
        const label = move.name.toUpperCase();
        ctx.fillStyle = '#fff';
        const room = 470 - 258 - tagW - 10;
        const size = fit(ctx, label, 800, 17, room, 11);
        ctx.fillText(label, 258, ay + 13 + size * 0.36);
        const used = ctx.measureText(label).width;
        ctx.fillStyle = 'rgba(255,255,255,0.22)';
        for (let dx = 258 + used + 6; dx < 470 - tagW - 6; dx += 5) ctx.fillRect(dx, ay + 17, 2, 2);
        ay += 31;
    }

    // conservation status, the chip from the animal page
    if (card.status) {
        const danger = /Endangered|Vulnerable|Critically|Threatened/.test(card.status);
        const colour = danger ? '#ff4150' : card.status === 'Extinct' ? '#ff8d24' : '#3bd65a';
        const label = card.status.toUpperCase();
        ctx.font = font(800, 10.5, BODY);
        const chipW = spacedWidth(ctx, label, 1.3) + 36;
        const chipY = Math.max(ay + 8, 476);
        roundRect(ctx, 228, chipY, chipW, 26, 7);
        ctx.fillStyle = `${colour}1c`;
        ctx.fill();
        ctx.lineWidth = 1.2;
        ctx.strokeStyle = `${colour}90`;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(243, chipY + 13, 4, 0, Math.PI * 2);
        ctx.fillStyle = colour;
        ctx.fill();
        ctx.fillStyle = danger ? '#ff9aa2' : card.status === 'Extinct' ? '#ffc488' : '#8fe9a2';
        spaced(ctx, label, 254, chipY + 17, 1.3);
    }

    // the signature move (the box at the bottom of an Injustice back)
    const B = { x: 30, y: 516, w: 440, h: 124 };
    roundRect(ctx, B.x, B.y, B.w, B.h, 10);
    ctx.fillStyle = 'rgba(0,0,0,0.5)';
    ctx.fill();
    ctx.lineWidth = 1;
    ctx.strokeStyle = 'rgba(255,255,255,0.14)';
    ctx.stroke();
    ctx.fillStyle = GOLD;
    ctx.fillRect(B.x, B.y + 12, 4, B.h - 24);
    if (card.signature) {
        ctx.font = font(800, 10, BODY);
        ctx.fillStyle = GOLD_2;
        spaced(ctx, 'SIGNATURE MOVE', B.x + 18, B.y + 22, 1.8);
        ctx.fillStyle = '#fff';
        const title = card.signature.name.toUpperCase();
        fit(ctx, title, 900, 24, B.w - 36, 14);
        ctx.fillText(title, B.x + 18, B.y + 47);
        ctx.font = font(600, 13.5, BODY);
        ctx.fillStyle = TEXT_2;
        const text = card.signature.text || '';
        wrap(ctx, text, B.w - 36, 3).forEach((line, index) => ctx.fillText(line, B.x + 18, B.y + 70 + index * 18));
    }

    // footer: the brand
    if (A.logo) ctx.drawImage(A.logo, 28, 648, 34, 34);
    ctx.font = font(800, 16);
    ctx.fillStyle = '#f3f4f6';
    spaced(ctx, 'ANIMAL BATTLE STATS', 70, 665, 2.4);
    ctx.font = font(600, 10.5, BODY);
    ctx.fillStyle = MUTED;
    ctx.fillText('animalbattlestats.com', 70, 680);
    ctx.textAlign = 'right';
    ctx.font = font(800, 14);
    ctx.fillStyle = TEXT_2;
    const tierLine = card.tierLabel === 'H' ? 'NOT RANKED' : `${card.group ? `${card.group.toUpperCase()}  ·  ` : ''}${card.tierLabel || card.tier.toUpperCase()} TIER`;
    spaced(ctx, tierLine, 470, 672, 1.4, 'right');
    ctx.textAlign = 'left';
    ctx.restore();
    frame(ctx, A.frame, 0, 0, CARD_W, CARD_H, 15);
}

// ---------------------------------------------------------------- rendering

// The front in two layers, so live foil can go between them (the 3D viewer,
// the videos): `under` is the background, `over` everything above the foil.
export function frontLayers(card, A, width) {
    return {
        under: renderSide(card, A, 'front', width, { layer: 'under' }),
        over: renderSide(card, A, 'front', width, { layer: 'over', sheen: null })
    };
}
// The foil over the front's background (card units), at light angle `phase`.
export function drawFoil(ctx, card, A, phase, strength = 1) {
    ctx.save();
    roundRect(ctx, 10, 10, CARD_W - 20, CARD_H - 20, 22);
    ctx.clip();
    drawHolo(ctx, A, card, FIELD.x, FIELD.y, FIELD.w, FIELD.h, phase, strength);
    ctx.restore();
}
// The gloss stripe across a whole face (card units).
export function drawSheen(ctx, phase, strength = 1) {
    ctx.save();
    roundRect(ctx, 10, 10, CARD_W - 20, CARD_H - 20, 22);
    ctx.clip();
    drawGloss(ctx, 10, 10, CARD_W - 20, CARD_H - 20, phase, strength);
    ctx.restore();
}

// Frees canvases at once (iOS Safari caps the memory all canvases share and is
// slow to give it back on its own).
export function release(...canvases) {
    for (const canvas of canvases.flat()) {
        // only canvases: the card files are shared images
        if (!canvas?.getContext) continue;
        canvas.width = 0;
        canvas.height = 0;
    }
}

// One side on its own canvas, `width` pixels wide (the height follows).
export function renderSide(card, A, side, width, options = {}) {
    const canvas = document.createElement('canvas');
    const scale = width / CARD_W;
    canvas.width = Math.round(CARD_W * scale);
    canvas.height = Math.round(CARD_H * scale);
    const ctx = canvas.getContext('2d');
    ctx.scale(scale, scale);
    if (side === 'back') drawBack(ctx, card, A, options);
    else drawFront(ctx, card, A, options);
    return canvas;
}

// Draws a rendered face turned `angle` radians about its vertical axis, with
// perspective, by drawing it in thin vertical strips each scaled by its depth.
// (x, y) is the centre; w is the face's width when square to the camera.
let shadeScratch = null;
export function drawTurned(ctx, source, x, y, w, angle, { persp = 2.4, shade = true } = {}) {
    const h = w * (source.height / source.width);
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    if (Math.abs(cos) < 0.002) return;
    // turning away from the light darkens the face a little (on a copy, so
    // only the card's own pixels darken)
    let face = source;
    const dark = shade ? Math.min(0.5, (1 - Math.abs(cos)) * 0.6) : 0;
    if (dark > 0.01) {
        shadeScratch ||= document.createElement('canvas');
        if (shadeScratch.width !== source.width || shadeScratch.height !== source.height) {
            shadeScratch.width = source.width;
            shadeScratch.height = source.height;
        }
        const s = shadeScratch.getContext('2d');
        s.globalCompositeOperation = 'copy';
        s.drawImage(source, 0, 0);
        s.globalCompositeOperation = 'source-atop';
        s.fillStyle = `rgba(0,0,0,${dark})`;
        s.fillRect(0, 0, source.width, source.height);
        s.globalCompositeOperation = 'source-over';
        face = shadeScratch;
    }
    // Square to the camera: no perspective to draw.
    if (Math.abs(sin) < 0.004) {
        ctx.drawImage(face, x - (w * cos) / 2, y - h / 2, w * cos, h);
        return;
    }
    const distance = w * persp;
    const project = (u) => {
        // u runs -0.5..0.5 across the face; a negative cos shows it mirrored
        const pz = u * w * sin;
        const s = distance / (distance + pz);
        return { x: x + u * w * cos * s, s };
    };
    // Enough strips that each one's height steps by under half a pixel (no
    // staircase along the frame), never more than one per output pixel.
    const k = unit(ctx);
    const left = project(-0.5);
    const right = project(0.5);
    const spanPx = Math.abs(right.x - left.x) * k;
    const stepPx = Math.abs(right.s - left.s) * h * k;
    const strips = Math.max(12, Math.min(Math.ceil(spanPx / 1.5), Math.ceil(stepPx * 2), 240));
    const sw = face.width / strips;
    let a = left;
    for (let i = 0; i < strips; i += 1) {
        const b = project((i + 1) / strips - 0.5);
        const x0 = Math.min(a.x, b.x);
        const width = Math.abs(b.x - a.x) + 0.7 / k;
        const s = (a.s + b.s) / 2;
        ctx.drawImage(face, i * sw, 0, sw, face.height, x0, y - (h * s) / 2, width, h * s);
        a = b;
    }
}

// The outline of a turned face (as drawTurned draws it), for shadows and glows.
export function turnedQuad(x, y, w, h, angle, persp = 2.4) {
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const distance = w * persp;
    return [-0.5, 0.5].map((u) => {
        const s = Math.abs(sin) < 0.004 ? 1 : distance / (distance + u * w * sin);
        return { x: x + u * w * cos * s, top: y - (h * s) / 2, bottom: y + (h * s) / 2 };
    });
}
