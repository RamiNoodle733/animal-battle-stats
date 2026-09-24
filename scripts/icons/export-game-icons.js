#!/usr/bin/env node
'use strict';

// Exports the Roblox game's in-house "chisel" icon set (the same art style as
// the ABS logo) for the website, so the site and the game share one icon
// language. Renders each glyph with the game's own renderer and rasterizes it
// to a 128 px WebP in images/icons/abs/.
// Usage: node scripts/icons/export-game-icons.js [path-to-game-repo]

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const gameRoot = process.argv[2] || process.env.ABS_GAME_DIR || 'C:/Users/User/Documents/ChatGPT/Animal Battle Stats Roblox';
const renderer = path.join(gameRoot, 'tools', 'icons', 'render.cjs');
const out = path.resolve(__dirname, '..', '..', 'images', 'icons', 'abs');

if (!fs.existsSync(renderer)) {
    console.log(`Game icon renderer not found at ${renderer}; keeping the committed icons.`);
    process.exit(0);
}

const { svgFor, GLYPHS } = require(renderer);

(async () => {
    fs.mkdirSync(out, { recursive: true });
    let count = 0;
    for (const name of Object.keys(GLYPHS)) {
        if (/^(sty|emo)/.test(name)) continue;
        const svg = svgFor(name, 'chisel', 128);
        await sharp(Buffer.from(svg)).webp({ quality: 90, alphaQuality: 100, effort: 6 }).toFile(path.join(out, `${name}.webp`));
        count += 1;
    }
    console.log(`Exported ${count} chisel icons to ${path.relative(process.cwd(), out)}`);
})().catch((error) => {
    console.error(error);
    process.exit(1);
});
