#!/usr/bin/env node
'use strict';

// Screenshots pages from the local preview for visual review.
// Usage: node scripts/verification/shoot.js <path> [--width 1440] [--height 900] [--pages 3] [--out name]
// Captures consecutive viewport-sized frames down the page (--pages), so long
// pages stay readable. Output: .cache/shots/<name>-<n>.png

const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const args = process.argv.slice(2);
const option = (name, fallback) => {
    const index = args.indexOf(name);
    return index >= 0 ? args[index + 1] : fallback;
};
const target = args.find((arg, index) => !arg.startsWith('--') && !(index > 0 && args[index - 1].startsWith('--'))) || '/';
const width = Number(option('--width', 1440));
const height = Number(option('--height', 900));
const pages = Number(option('--pages', 1));
const base = option('--base', 'http://localhost:4321');
const name = option('--out', target.replace(/[^a-z0-9]+/gi, '_').replace(/^_|_$/g, '') || 'home');
const out = path.resolve(__dirname, '..', '..', '.cache', 'shots');

function browserPath() {
    const rootDir = path.join(process.env.LOCALAPPDATA || '', 'ms-playwright');
    const dirs = fs.existsSync(rootDir) ? fs.readdirSync(rootDir).filter((dir) => /^chromium-\d+$/.test(dir)).sort() : [];
    for (const dir of dirs.reverse()) {
        const exe = path.join(rootDir, dir, 'chrome-win64', 'chrome.exe');
        if (fs.existsSync(exe)) return exe;
    }
    return undefined;
}

(async () => {
    fs.mkdirSync(out, { recursive: true });
    const browser = await chromium.launch({ executablePath: browserPath() });
    const context = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1, isMobile: width < 600, hasTouch: width < 600 });
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
    page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()); });
    // --live-api answers read-only API calls from production, so pages that
    // need the database can be reviewed locally. Writes are blocked.
    if (args.includes('--live-api')) {
        await page.route('**/api/**', async (route) => {
            const request = route.request();
            if (request.method() !== 'GET') return route.abort();
            const url = new URL(request.url());
            const response = await fetch(`https://animalbattlestats.com${url.pathname}${url.search}`, { headers: { Accept: 'application/json' } });
            return route.fulfill({ status: response.status, contentType: response.headers.get('content-type') || 'application/json', body: Buffer.from(await response.arrayBuffer()) });
        });
    }
    await page.goto(`${base}${target}`, { waitUntil: 'load', timeout: 45000 });
    await page.waitForTimeout(1500);
    // --click <selector> taps an element first, e.g. a tab.
    const click = option('--click', null);
    if (click) {
        await page.click(click);
        await page.waitForTimeout(1200);
    }
    const total = await page.evaluate(() => document.documentElement.scrollHeight);
    const files = [];
    for (let index = 0; index < pages; index += 1) {
        const y = index * height;
        if (y >= total) break;
        await page.evaluate((top) => window.scrollTo(0, top), y);
        await page.waitForTimeout(350);
        const file = path.join(out, `${name}-${index + 1}.png`);
        await page.screenshot({ path: file });
        files.push(file);
    }
    console.log(JSON.stringify({ files, pageHeight: total, errors: errors.slice(0, 8) }, null, 1));
    await browser.close();
})().catch((error) => {
    console.error(error);
    process.exit(1);
});
