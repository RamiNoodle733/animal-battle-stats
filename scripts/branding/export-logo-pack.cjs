#!/usr/bin/env node
'use strict';

// Size/format exports of the approved raster artwork, with a reproducible
// Claude handoff. No game repository is read or written by this script.
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');
const sharp = require('sharp');
const root = path.resolve(__dirname, '../..');
const brand = require('../../data/brand.json');
const args = process.argv.slice(2);
const packArg = args.indexOf('--pack-dir');
if (packArg < 0 || !args[packArg + 1] || !path.isAbsolute(args[packArg + 1])) throw new Error('Provide an absolute --pack-dir.');
const pack = path.resolve(args[packArg + 1]);
const install = args.includes('--install');
const source = path.join(root, 'branding', brand.id, 'source.png');
const transparent = { r: 0, g: 0, b: 0, alpha: 0 };
const palette = { teal: '#087c8b', red: '#b7192b', navy: '#0b1433', silver: '#c3cbd9', white: '#f8fafc', charcoal: '#0b0c0e', siteGold: '#f6b400' };
const files = [];
const mkdir = (file) => fs.mkdirSync(path.dirname(file), { recursive: true });
const hash = (buffer) => crypto.createHash('sha256').update(buffer).digest('hex');
async function write(name, buffer) {
    const file = path.join(pack, name);
    mkdir(file);
    fs.writeFileSync(file, buffer);
    const info = /\.(png|webp|jpg)$/.test(name) ? await sharp(buffer).metadata() : {};
    files.push({ file: name, bytes: buffer.length, sha256: hash(buffer), ...(info.width ? { width: info.width, height: info.height, alpha: info.hasAlpha } : {}) });
    return buffer;
}
function ico(images) {
    const header = Buffer.alloc(6 + 16 * images.length);
    header.writeUInt16LE(1, 2);
    header.writeUInt16LE(images.length, 4);
    let offset = header.length;
    for (let i = 0; i < images.length; i++) {
        const { size, buffer } = images[i];
        const p = 6 + i * 16;
        header[p] = size === 256 ? 0 : size;
        header[p + 1] = header[p];
        header.writeUInt16LE(1, p + 4);
        header.writeUInt16LE(32, p + 6);
        header.writeUInt32LE(buffer.length, p + 8);
        header.writeUInt32LE(offset, p + 12);
        offset += buffer.length;
    }
    return Buffer.concat([header, ...images.map((image) => image.buffer)]);
}
async function main() {
    const approved = fs.readFileSync(source);
    await write('source/approved-B-original.png', approved);
    const cropped = await sharp(approved).trim({ threshold: 8 }).png().toBuffer();
    const mark = async (size, fill = transparent, occupancy = 0.94) => {
        const inset = Math.round(size * (1 - occupancy) / 2);
        const inner = size - 2 * inset;
        const logo = await sharp(cropped).resize(inner, inner, { fit: 'contain', background: transparent }).png().toBuffer();
        return sharp({ create: { width: size, height: size, channels: 4, background: fill } }).composite([{ input: logo, left: inset, top: inset }]).png({ compressionLevel: 9 }).toBuffer();
    };
    const exported = new Map();
    for (const size of [32, 48, 64, 128, 256, 512, 1024]) {
        const buffer = await write(`marks/abs-mark-${size}.png`, await mark(size));
        exported.set(size, buffer);
        if (size >= 128 && size <= 512) await write(`web/mark-${size}.webp`, await sharp(buffer).webp({ quality: 92, alphaQuality: 100, effort: 6 }).toBuffer());
    }
    await write('marks/abs-mark-master.png', approved);
    const web = {
        'favicon-16.png': await mark(16, transparent, 1),
        'favicon-32.png': await mark(32, transparent, 1),
        'apple-touch-icon.png': await mark(180, palette.charcoal, 0.84),
        'icon-192.png': await mark(192, palette.charcoal, 0.84),
        'icon-512.png': await mark(512, palette.charcoal, 0.84),
        'icon-maskable-512.png': await mark(512, palette.charcoal, 0.56)
    };
    for (const [name, buffer] of Object.entries(web)) await write(`web/${name}`, buffer);
    await write('web/favicon.ico', ico(await Promise.all([16, 32, 48, 256].map(async (size) => ({ size, buffer: await mark(size, transparent, 1) })))));
    await write('roblox/abs-mark-1024-transparent.png', exported.get(1024));
    await write('roblox/abs-icon-512-dark.png', web['icon-512.png']);
    await write('social/abs-avatar-1080.png', await mark(1080, palette.charcoal, 0.84));

    // Outlined site typography avoids a system-font dependency in the lockups.
    const { create } = await import('fontkitten');
    const font = create(fs.readFileSync(path.join(root, 'node_modules/@fontsource/big-shoulders-display/files/big-shoulders-display-latin-900-normal.woff2')));
    function words(text, x, y, size, fill, tracking = 0) {
        const scale = size / font.unitsPerEm;
        let cursor = 0;
        const shapes = [...text].map((char) => {
            const glyph = font.glyphForCodePoint(char.codePointAt(0));
            const shape = `<path transform="translate(${cursor} 0)" d="${glyph.path.toSVG()}"/>`;
            cursor += glyph.advanceWidth + tracking / scale;
            return shape;
        });
        return `<g fill="${fill}" transform="translate(${x} ${y}) scale(${scale} ${-scale})">${shapes.join('')}</g>`;
    }
    const emblem = exported.get(512).toString('base64');
    for (const [name, ink] of [['dark', '#f8fafc'], ['light', '#14171d']]) {
        const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="360" viewBox="0 0 1200 360"><image x="15" y="20" width="320" height="320" href="data:image/png;base64,${emblem}"/>${words('ANIMAL BATTLE', 365, 165, 142, ink, 1)}${words('STATS', 370, 288, 103, '#f6b400', 19)}</svg>`;
        await write(`wordmarks/abs-wordmark-for-${name}-background.svg`, Buffer.from(svg));
        await write(`wordmarks/abs-wordmark-for-${name}-background.png`, await sharp(Buffer.from(svg)).png().toBuffer());
    }
    const shareLogo = await mark(490);
    const shareSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="#0b0c0e"/><path d="M60 565H1140" stroke="#f6b400" stroke-width="5"/>${words('ANIMAL', 600, 260, 142, '#f8fafc', 2)}${words('BATTLE STATS', 600, 395, 102, '#f8fafc', 1)}${words('ANIMALBATTLESTATS.COM', 605, 480, 34, '#c3cbd9', 2)}</svg>`;
    const share = await sharp(Buffer.from(shareSvg)).composite([{ input: shareLogo, left: 55, top: 55 }]).jpeg({ quality: 94 }).toBuffer();
    await write('social/abs-share-1200x630.jpg', share);
    await write('palette.json', Buffer.from(`${JSON.stringify(palette, null, 2)}\n`));
    await write('palette.css', Buffer.from(`:root {\n${Object.entries(palette).map(([key, value]) => `  --abs-${key}: ${value};`).join('\n')}\n}\n`));
    const readme = `# ABS logo pack — B / Satin / v1\n\nApproved 2026-10-16. These exports use the B Satin artwork with D's broader proportions.\n\n## Start here\n\n- Transparent master: marks/abs-mark-master.png (1254 x 1254).\n- General UI: marks/abs-mark-512.png or web/mark-256.webp.\n- Roblox UI: roblox/abs-mark-1024-transparent.png.\n- Roblox square icon: roblox/abs-icon-512-dark.png.\n- Social avatar: social/abs-avatar-1080.png.\n- Horizontal name + mark: wordmarks/abs-wordmark-for-dark-background.png; choose the light-background file for light surfaces.\n- Website favicons, Apple icon and installable app icons: web/.\n- Exact approved file: source/approved-B-original.png.\n\n## For Claude / Roblox\n\nImport the selected PNG through Roblox Studio's Asset Manager using the correct ABS project and use the asset ID Roblox returns. This folder does not upload or publish anything. For an ImageLabel use ScaleType.Fit, preserve the square image aspect ratio, and use BackgroundTransparency = 1 for transparent marks. Use the 1024 transparent mark for menus, loading screens and collection UI; use the opaque dark icon for square app-style tiles. Keep the whole mark: ABS letters, all paw parts and the bars behind. Do not stretch, recolor, move parts, add a new badge, or trace a different logo. No changes were made to the Roblox checkout or Studio place by this pack.\n\n## Layout and color\n\nAllow clear space of roughly 1/8 of the logo width. Use a dark charcoal surface where possible. Keep its aspect ratio and use contain/Fit. The gradient artwork is authoritative; palette.json and palette.css give companion UI colors, not a recoloring recipe. The site's gold is an accent for surrounding UI, not a gold recoloring of B. Use 32 px or larger for normal UI and the provided favicon files at smaller sizes. The maskable icon deliberately has extra safe padding.\n\n## Source and file formats\n\nThe approved master is preserved byte-for-byte. Other marks are deterministic size/format/padding exports, not redesigned variants. PNG and WebP preserve transparency. The wordmark SVG contains the raster mark plus outlined Big Shoulders Display type; it is not a full vector tracing of the logo. The website uses Big Shoulders Display 900 and Inter; fonts are not bundled here. manifest.json records dimensions and SHA-256 hashes for checking copies. The source image is 1254 px square; 1024 px exports stay within that resolution.\n\n## Website\n\nThe website assets use /images/branding/abs-satin-v1/ to avoid stale year-long image caches. The shared brand data is data/brand.json. Rebuild with node scripts/branding/export-logo-pack.cjs --pack-dir "${pack}" --install from the website checkout.\n`;
    await write('README-FOR-CLAUDE.md', Buffer.from(readme));
    fs.writeFileSync(path.join(pack, 'manifest.json'), `${JSON.stringify({ brand: brand.id, approvedVariant: 'B', sourceSha256: hash(approved), files }, null, 2)}\n`);
    if (install) {
        const out = path.join(root, 'images/branding', brand.id);
        fs.mkdirSync(out, { recursive: true });
        for (const [name, buffer] of Object.entries(web)) fs.writeFileSync(path.join(out, name), buffer);
        fs.writeFileSync(path.join(out, 'mark-512.png'), exported.get(512));
        for (const size of [128, 256, 512]) fs.copyFileSync(path.join(pack, `web/mark-${size}.webp`), path.join(out, `mark-${size}.webp`));
        // Older external links still resolve; the site itself uses new URLs.
        fs.copyFileSync(path.join(out, 'mark-512.png'), path.join(root, 'images/logo.png'));
        for (const [name, buffer] of Object.entries(web)) {
            if (name !== 'icon-maskable-512.png') fs.writeFileSync(path.join(root, 'images', name), buffer);
        }
    }
    console.log(JSON.stringify({ pack, sourceSha256: hash(approved), files: files.length, installed: install }, null, 2));
}
main().catch((error) => { console.error(error.message); process.exitCode = 1; });
