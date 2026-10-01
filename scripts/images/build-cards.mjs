#!/usr/bin/env node
// The battle cards as image files, drawn at build time by the site's own card
// renderer (astro/src/scripts/abs-card.js and card-scenes.js, the code the 3D
// viewer and the share sheet run) on a Node canvas, so a card file is the same
// card a visitor sees:
//
//   .cache/cards/cards/<slug>.webp, <slug>-back.webp  each animal's card (750x1050)
//   .cache/cards/cards/<slug>-base.webp, <slug>-top.webp  the front in two layers,
//                                                     for the 3D card's live foil
//   .cache/cards/og/<slug>.jpg                        animal page preview: the card and its stats
//   .cache/cards/og/vs/<a>-vs-<b>.jpg                 matchup page preview: the two cards squared up
//   .cache/cards/og/vs/human-vs-<animal>.jpg          the same for the Human pages
//   .cache/cards/og/compare.jpg                       the Versus screen's preview
//   .cache/cards/og/section/<id>.jpg                  section pages: a hand of cards and the title
//
// These are what link previews, search results and AI answers show for each
// animal and matchup page. Input: .cache/astro-dist/data/card-jobs.json (from
// the Astro build). Unchanged cards are reused (manifest.json).
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { createCanvas, loadImage, GlobalFonts, DOMMatrix, Path2D } from '@napi-rs/canvas';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..');
const jobsFile = path.join(root, '.cache', 'astro-dist', 'data', 'card-jobs.json');
const out = path.join(root, '.cache', 'cards');
const manifestFile = path.join(out, 'manifest.json');
const DESIGN = 1; // bump after a visual change that the hashed inputs do not cover
const CARD_WIDTH = 750;
const FACE_WIDTH = 300; // the card fronts as the matchup previews show them

// Drawing is quick; encoding is the slow part, and runs on libuv's thread pool.
// Size the pool to the machine and keep that many images encoding at once.
const THREADS = Math.max(2, Math.min(16, os.availableParallelism?.() || os.cpus().length || 4));
process.env.UV_THREADPOOL_SIZE ||= String(THREADS);
const inflight = new Set();
async function later(task) {
    const running = task().catch((error) => { console.warn(`Battle card failed: ${error.message}`); });
    inflight.add(running);
    running.finally(() => inflight.delete(running));
    while (inflight.size >= THREADS * 2) await Promise.race(inflight);
}
const drain = () => Promise.all(inflight);

if (!fs.existsSync(jobsFile)) {
    console.warn('Battle cards skipped: card-jobs.json was not built.');
    process.exit(0);
}
const jobs = JSON.parse(fs.readFileSync(jobsFile, 'utf8'));

// ---------------------------------------------------------------- the renderer

// The renderer is written for the browser as plain ES modules; a copy in a
// "type: module" folder lets Node load it as one.
const lib = path.join(root, '.cache', 'card-render');
fs.mkdirSync(lib, { recursive: true });
fs.writeFileSync(path.join(lib, 'package.json'), '{ "type": "module" }\n');
const sources = ['abs-card.js', 'card-scenes.js'].map((name) => {
    const source = fs.readFileSync(path.join(root, 'astro', 'src', 'scripts', name), 'utf8');
    fs.writeFileSync(path.join(lib, name), source);
    return source;
});

// The few browser pieces it touches.
globalThis.DOMMatrix = DOMMatrix;
globalThis.Path2D = Path2D;
globalThis.document = { createElement: () => createCanvas(1, 1), fonts: { load: async () => [] } };

const FONTS = [
    ['big-shoulders-display', 'Big Shoulders Display', ['700-normal', '800-normal', '900-normal']],
    ['inter', 'Inter', ['400-normal', '600-normal', '700-normal', '800-normal', '600-italic']]
];
for (const [pkg, family, faces] of FONTS) {
    for (const face of faces) GlobalFonts.registerFromPath(path.join(root, 'node_modules', '@fontsource', pkg, 'files', `${pkg}-latin-${face}.woff2`), family);
}

const { setImageLoader, cardAssets, renderSide, frontLayers, release } = await import(pathToFileURL(path.join(lib, 'abs-card.js')).href);
const scenes = await import(pathToFileURL(path.join(lib, 'card-scenes.js')).href);

// Site paths to files: the repository's images, and the encoded animal photos.
function fileFor(src) {
    const clean = String(src).split(/[?#]/)[0];
    const file = clean.startsWith('/images/animals/v/')
        ? path.join(root, '.cache', 'image-variants', clean.slice('/images/animals/v/'.length))
        : path.join(root, clean);
    return file.startsWith(root + path.sep) ? file : null;
}
setImageLoader(async (src) => {
    const file = fileFor(src);
    if (!file || !fs.existsSync(file)) return null;
    try {
        return await loadImage(fs.readFileSync(file));
    } catch {
        return null;
    }
});

// ---------------------------------------------------------------- what changed

const digest = (value) => crypto.createHash('sha1').update(value).digest('hex');
// Anything the drawing depends on besides the card data: the renderer and the art.
const uiDir = path.join(root, 'images', 'ui');
const artFiles = [
    ...fs.readdirSync(uiDir).filter((name) => /\.(png|webp|svg)$/.test(name)).map((name) => path.join(uiDir, name)),
    ...fs.readdirSync(path.join(uiDir, 'icons')).map((name) => path.join(uiDir, 'icons', name)),
    path.join(root, 'images', 'logo.png')
];
const base = digest(JSON.stringify([DESIGN, sources.map(digest), artFiles.map((file) => digest(fs.readFileSync(file)))]));
const hash = (value) => digest(base + JSON.stringify(value)).slice(0, 16);

let manifest = {};
try { manifest = JSON.parse(fs.readFileSync(manifestFile, 'utf8')); } catch { manifest = {}; }
const nextManifest = {};
const fresh = (name, key) => manifest[name] === key && fs.existsSync(path.join(out, name));
const write = (name, buffer) => {
    const file = path.join(out, name);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, buffer);
};

// ---------------------------------------------------------------- draw

const started = Date.now();
const S = await scenes.sceneArt();
const bySlug = new Map([...jobs.animals, ...jobs.fighters].map((card) => [card.slug, card]));
// Each card front, small and encoded, for the matchup previews.
const faceFiles = new Map();
const shrink = (image) => {
    const small = createCanvas(FACE_WIDTH, Math.round((FACE_WIDTH * image.height) / image.width));
    small.getContext('2d').drawImage(image, 0, 0, small.width, small.height);
    return small;
};
let drawn = 0;

for (const card of jobs.animals) {
    const key = hash(card);
    const names = [`cards/${card.slug}.webp`, `cards/${card.slug}-back.webp`, `og/${card.slug}.jpg`, `cards/${card.slug}-base.webp`, `cards/${card.slug}-top.webp`];
    names.forEach((name) => { nextManifest[name] = key; });
    if (names.every((name) => fresh(name, key))) continue;
    const A = await cardAssets(card);
    if (!A.art) console.warn(`Battle card for ${card.slug}: no art at ${card.art?.src}`);
    // Drawing snapshots its sources, so each canvas can be freed once drawn from.
    const front = renderSide(card, A, 'front', CARD_WIDTH, { sheen: 0.32 });
    const back = renderSide(card, A, 'back', CARD_WIDTH);
    const layers = frontLayers(card, A, CARD_WIDTH);
    const preview = createCanvas(scenes.PREVIEW.w, scenes.PREVIEW.h);
    scenes.drawAnimalPreview(preview.getContext('2d'), card, front, S);
    const small = shrink(front);
    drawn += 1;
    await later(async () => {
        const [frontFile, backFile, previewFile, baseFile, topFile, faceFile] = await Promise.all([
            front.encode('webp', 90), back.encode('webp', 90), preview.encode('jpeg', 88),
            layers.under.encode('webp', 88), layers.over.encode('webp', 90), small.encode('png')
        ]);
        [frontFile, backFile, previewFile, baseFile, topFile].forEach((file, index) => write(names[index], file));
        faceFiles.set(card.slug, faceFile);
        release(front, back, preview, layers.under, layers.over, small);
    });
}
// Fighters that only appear in matchups (the Human): their fronts, small.
for (const card of jobs.fighters) {
    const front = renderSide(card, await cardAssets(card), 'front', CARD_WIDTH, { sheen: 0.32 });
    const small = shrink(front);
    faceFiles.set(card.slug, await small.encode('png'));
    release(front, small);
}
await drain();
const animalsDone = Date.now();

// The matchup previews: both card fronts squared up.
const faces = new Map();
function face(slug) {
    if (!faces.has(slug)) {
        if (faces.size > 80) faces.delete(faces.keys().next().value);
        faces.set(slug, (async () => {
            if (faceFiles.has(slug)) return loadImage(faceFiles.get(slug));
            // a card that was not redrawn this time: shrink its file
            const small = shrink(await loadImage(fs.readFileSync(path.join(out, 'cards', `${slug}.webp`))));
            const file = await small.encode('png');
            release(small);
            faceFiles.set(slug, file);
            return loadImage(file);
        })());
    }
    return faces.get(slug);
}
let pairs = 0;
for (const job of jobs.matchups) {
    const a = bySlug.get(job.a);
    const b = bySlug.get(job.b);
    if (!a || !b) continue;
    const pair = { ...job, name: `og/${job.file}.jpg` };
    const key = hash([pair, a, b]);
    nextManifest[pair.name] = key;
    if (fresh(pair.name, key)) continue;
    const canvas = createCanvas(scenes.PREVIEW.w, scenes.PREVIEW.h);
    scenes.drawMatchupPreview(canvas.getContext('2d'), a, b, { a: await face(a.slug), b: await face(b.slug) }, S, { odds: pair.oddsA, draw: pair.draw });
    pairs += 1;
    await later(async () => {
        write(pair.name, await canvas.encode('jpeg', 88));
        release(canvas);
    });
}
await drain();

// The section pages: their title beside a fan of cards (full-size fronts).
let sections = 0;
const fullCard = (slug, side = '') => loadImage(fs.readFileSync(path.join(out, 'cards', `${slug}${side}.webp`)));
for (const job of jobs.sections || []) {
    const name = `og/${job.file}.jpg`;
    const key = hash(['section', job]);
    nextManifest[name] = key;
    if (fresh(name, key)) continue;
    const faces = await Promise.all(job.cards.map((card) => fullCard(card.slug)));
    const back = job.layout === 'pair' && job.cards[0] ? await fullCard(job.cards[0].slug, '-back') : null;
    const canvas = createCanvas(scenes.PREVIEW.w, scenes.PREVIEW.h);
    scenes.drawSectionPreview(canvas.getContext('2d'), job, faces, S, { back });
    sections += 1;
    await later(async () => {
        write(name, await canvas.encode('jpeg', 88));
        release(canvas);
    });
}
await drain();

// Drop files for animals and pages that no longer exist.
for (const name of Object.keys(manifest)) {
    if (!nextManifest[name]) fs.rmSync(path.join(out, name), { force: true });
}
fs.writeFileSync(manifestFile, JSON.stringify(nextManifest));
const total = Object.keys(nextManifest).length;
const seconds = (ms) => `${(ms / 1000).toFixed(1)}s`;
console.log(`Battle cards: ${drawn} animals (${seconds(animalsDone - started)}), ${pairs} matchups and ${sections} section previews (${seconds(Date.now() - animalsDone)}) drawn, ${total - drawn * 5 - pairs - sections} files reused, ${THREADS} threads.`);
