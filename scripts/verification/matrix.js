#!/usr/bin/env node
'use strict';

// Screenshots pages at several viewports and combines them into one review
// sheet per page (viewports side by side), for layout QA.
// Usage: node scripts/verification/matrix.js [/path ...] [--base http://localhost:4321] [--live-api]
// Output: .cache/shots/matrix/<page>.png
// --live-api answers read-only API calls from production (writes are blocked).

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { chromium } = require('playwright');

const args = process.argv.slice(2);
const option = (name, fallback) => {
    const index = args.indexOf(name);
    return index >= 0 ? args[index + 1] : fallback;
};
const base = option('--base', 'http://localhost:4321');
const liveApi = args.includes('--live-api');
const pages = args.filter((arg, index) => arg.startsWith('/') && !(index > 0 && args[index - 1].startsWith('--')));
const out = path.resolve(__dirname, '..', '..', '.cache', 'shots', 'matrix');
const VIEWPORTS = [
    { name: 'desktop', width: 1440, height: 900 },
    { name: 'laptop', width: 1280, height: 720 },
    { name: 'tablet', width: 820, height: 1180 },
    { name: 'phone', width: 390, height: 844 },
    { name: 'small', width: 360, height: 640 }
];
const SHEET_HEIGHT = 760;

function browserPath() {
    const rootDir = path.join(process.env.LOCALAPPDATA || '', 'ms-playwright');
    const dirs = fs.existsSync(rootDir) ? fs.readdirSync(rootDir).filter((dir) => /^chromium-\d+$/.test(dir)).sort().reverse() : [];
    for (const dir of dirs) {
        const exe = path.join(rootDir, dir, 'chrome-win64', 'chrome.exe');
        if (fs.existsSync(exe)) return exe;
    }
    return undefined;
}

async function shoot(browser, target, viewport) {
    const mobile = viewport.width < 600;
    const context = await browser.newContext({ viewport: { width: viewport.width, height: viewport.height }, isMobile: mobile, hasTouch: mobile, deviceScaleFactor: 1 });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    if (liveApi) {
        await page.route('**/api/**', async (route) => {
            const request = route.request();
            if (request.method() !== 'GET') return route.abort();
            const url = new URL(request.url());
            try {
                const response = await fetch(`https://animalbattlestats.com${url.pathname}${url.search}`, { headers: { Accept: 'application/json' } });
                return route.fulfill({ status: response.status, contentType: response.headers.get('content-type') || 'application/json', body: Buffer.from(await response.arrayBuffer()) });
            } catch {
                return route.abort();
            }
        });
    }
    await page.goto(`${base}${target}`, { waitUntil: 'load', timeout: 45000 });
    await page.waitForTimeout(1600);
    // Report horizontal overflow and elements spilling out of the viewport.
    const overflow = await page.evaluate(() => {
        const width = document.documentElement.clientWidth;
        const over = document.documentElement.scrollWidth - width;
        const tall = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        return { over, tall };
    });
    const buffer = await page.screenshot();
    await context.close();
    return { buffer, errors, overflow };
}

async function main() {
    fs.mkdirSync(out, { recursive: true });
    const browser = await chromium.launch({ executablePath: browserPath() });
    const report = {};
    for (const target of pages) {
        const shots = [];
        const name = target.replace(/[^a-z0-9]+/gi, '_').replace(/^_|_$/g, '') || 'home';
        for (const viewport of VIEWPORTS) {
            const result = await shoot(browser, target, viewport);
            fs.writeFileSync(path.join(out, `${name}-${viewport.name}.png`), result.buffer);
            const scale = SHEET_HEIGHT / viewport.height;
            const tile = await sharp(result.buffer).resize({ height: SHEET_HEIGHT, width: Math.round(viewport.width * scale) }).png().toBuffer();
            shots.push({ tile, width: Math.round(viewport.width * scale), viewport, errors: result.errors, overflow: result.overflow });
        }
        const gap = 12;
        const width = shots.reduce((sum, shot) => sum + shot.width, 0) + gap * (shots.length - 1);
        let left = 0;
        const composite = shots.map((shot) => {
            const entry = { input: shot.tile, left, top: 0 };
            left += shot.width + gap;
            return entry;
        });
        await sharp({ create: { width, height: SHEET_HEIGHT, channels: 3, background: '#ff00ff' } }).composite(composite).png().toFile(path.join(out, `${name}.png`));
        report[target] = shots.map((shot) => ({ viewport: shot.viewport.name, overflowX: shot.overflow.over, scrollY: shot.overflow.tall, errors: shot.errors.slice(0, 3) }));
    }
    await browser.close();
    console.log(JSON.stringify(report, null, 1));
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
