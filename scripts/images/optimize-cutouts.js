#!/usr/bin/env node
'use strict';

// Shrinks the pipeline's cutouts (images/animals/<slug>.png written by
// make_cutouts.py) for the repository: at most 1024 px on the long side (the
// site's largest variant is 960 px and Roblox uploads cap at 1024) and a
// high-quality 256-colour palette PNG, visually identical at card sizes and
// about a quarter of the size. Only slugs listed in
// .cache/image-pipeline/cutouts.json are touched; files already optimized
// are skipped, so it is safe to re-run.

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.resolve(__dirname, '..', '..');
const STATE = path.join(ROOT, '.cache', 'image-pipeline', 'cutouts.json');
const MAX_SIDE = 1024;

async function main() {
    const slugs = Object.keys(JSON.parse(fs.readFileSync(STATE, 'utf8')));
    let changed = 0;
    let before = 0;
    let after = 0;
    for (const slug of slugs) {
        const file = path.join(ROOT, 'images', 'animals', `${slug}.png`);
        if (!fs.existsSync(file)) continue;
        const input = fs.readFileSync(file);
        const meta = await sharp(input).metadata();
        before += input.length;
        if (meta.paletteBitDepth && Math.max(meta.width, meta.height) <= MAX_SIDE) {
            after += input.length;
            continue;
        }
        const output = await sharp(input)
            .resize({ width: MAX_SIDE, height: MAX_SIDE, fit: 'inside', withoutEnlargement: true })
            .png({ palette: true, quality: 92, effort: 10, dither: 1 })
            .toBuffer();
        fs.writeFileSync(file, output);
        after += output.length;
        changed += 1;
    }
    console.log(`Optimized ${changed} cutouts: ${(before / 1e6).toFixed(1)} MB -> ${(after / 1e6).toFixed(1)} MB.`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
