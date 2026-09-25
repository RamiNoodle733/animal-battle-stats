#!/usr/bin/env node
'use strict';

// Generates responsive WebP variants of every animal image at build time, so
// the repository only stores one master PNG per animal.
//
// Output (not committed):
//   .cache/image-variants/<slug>-<hash>-<width>.webp
//   .cache/image-variants/manifest.json   { slug: { src, width, height, hash, variants: [...] } }
// build-production.js copies the files to dist/images/animals/v/.
// Existing variants are reused, so repeat builds only encode changed images.

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const sharp = require('sharp');

const ROOT = path.resolve(__dirname, '..', '..');
const OUT = path.join(ROOT, '.cache', 'image-variants');
const PUBLIC_PREFIX = '/images/animals/v/';
const WIDTHS = [256, 512, 960];

function slugify(value) {
    return String(value || '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

function resolveMaster(imagePath) {
    const clean = String(imagePath || '').split(/[?#]/)[0].replace(/^\//, '');
    const file = path.join(ROOT, clean);
    return fs.existsSync(file) ? file : null;
}

async function prepare(file) {
    const image = sharp(file, { failOn: 'none' }).rotate();
    const meta = await image.metadata();
    let pipeline = image.ensureAlpha();
    if (meta.hasAlpha) {
        // Crop empty transparent margins so every card frames the animal the same way.
        const { data, info } = await sharp(file).ensureAlpha().extractChannel(3).raw().toBuffer({ resolveWithObject: true });
        let top = info.height, left = info.width, right = -1, bottom = -1, solid = 0;
        for (let y = 0; y < info.height; y += 1) {
            const row = y * info.width;
            for (let x = 0; x < info.width; x += 1) {
                const alpha = data[row + x];
                if (alpha > 12) {
                    if (x < left) left = x;
                    if (x > right) right = x;
                    if (y < top) top = y;
                    if (y > bottom) bottom = y;
                }
                if (alpha > 128) solid += 1;
            }
        }
        if (right > left && bottom > top) {
            const pad = Math.round(Math.max(right - left, bottom - top) * 0.02);
            const extract = {
                left: Math.max(0, left - pad),
                top: Math.max(0, top - pad),
                width: Math.min(info.width, right + pad + 1) - Math.max(0, left - pad),
                height: Math.min(info.height, bottom + pad + 1) - Math.max(0, top - pad)
            };
            pipeline = sharp(file, { failOn: 'none' }).ensureAlpha().extract(extract);
            // fill: share of the cropped frame the animal covers (sparse shapes
            // like birds in flight or coiled snakes are drawn a little larger).
            const fill = Math.round((solid / (extract.width * extract.height)) * 1000) / 1000;
            return { pipeline, width: extract.width, height: extract.height, transparent: true, fill };
        }
    }
    return { pipeline, width: meta.width, height: meta.height, transparent: Boolean(meta.hasAlpha) };
}

async function main() {
    fs.mkdirSync(OUT, { recursive: true });
    const animals = JSON.parse(fs.readFileSync(path.join(ROOT, 'animal_stats.json'), 'utf8'));
    const manifestPath = path.join(OUT, 'manifest.json');
    const previous = fs.existsSync(manifestPath) ? JSON.parse(fs.readFileSync(manifestPath, 'utf8')) : {};
    const manifest = {};
    const keep = new Set(['manifest.json']);
    let encoded = 0;

    for (const animal of animals) {
        const slug = slugify(animal.name);
        const file = resolveMaster(animal.image);
        if (!file) {
            console.warn(`No image file for ${animal.name}: ${animal.image}`);
            continue;
        }
        const hash = crypto.createHash('sha1').update(fs.readFileSync(file)).digest('hex').slice(0, 10);
        const cached = previous[slug];
        if (cached && cached.hash === hash && typeof cached.fill === 'number' && cached.variants.every((variant) => fs.existsSync(path.join(OUT, path.basename(variant.src))))) {
            manifest[slug] = cached;
            cached.variants.forEach((variant) => keep.add(path.basename(variant.src)));
            continue;
        }
        const { pipeline, width, height, transparent, fill = 1 } = await prepare(file);
        const master = await pipeline.png().toBuffer();
        const variants = [];
        for (const target of WIDTHS) {
            // Small masters get one variant at their own width instead of upscaled copies.
            if (target > width && variants.length) break;
            const name = `${slug}-${hash}-${target}.webp`;
            const info = await sharp(master)
                .resize({ width: Math.min(target, width), withoutEnlargement: true })
                .webp({ quality: 82, alphaQuality: 90, effort: 5 })
                .toFile(path.join(OUT, name));
            variants.push({ src: `${PUBLIC_PREFIX}${name}`, width: info.width, height: info.height });
            keep.add(name);
        }
        manifest[slug] = { hash, width, height, transparent, fill, variants };
        encoded += 1;
    }

    for (const entry of fs.readdirSync(OUT)) {
        if (!keep.has(entry)) fs.rmSync(path.join(OUT, entry), { force: true });
    }
    fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 1)}\n`);
    console.log(`Image variants: ${Object.keys(manifest).length} animals (${encoded} newly encoded).`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
