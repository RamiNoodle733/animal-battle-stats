#!/usr/bin/env node
// Mobile Safari audit: loads pages in WebKit as an iPhone (Safari's visible
// area with its toolbars), scrolls every scrolling area to the end and
// reports anything that ends behind the dock or is clipped with no way to
// scroll to it. Screenshots go to .cache/shots/mobile/.
//
//   node scripts/preview-dist.js 4321   (in another terminal)
//   node scripts/verification/mobile-audit.mjs / /stats /shows ... [--device "iPhone SE"] [--live-api]
import fs from 'node:fs';
import path from 'node:path';
import { webkit, devices } from 'playwright';

const args = process.argv.slice(2);
const option = (name, fallback) => { const i = args.indexOf(name); return i >= 0 ? args[i + 1] : fallback; };
const deviceName = option('--device', 'iPhone 13');
const base = option('--base', 'http://localhost:4321');
const skip = new Set([option('--device', null), option('--base', null), option('--size', null)]);
const paths = args.filter((arg) => !arg.startsWith('--') && !skip.has(arg));
const out = path.resolve('.cache/shots/mobile');
fs.mkdirSync(out, { recursive: true });

// Safari's visible page area is shorter than the screen: toolbars take ~150px.
// --size WxH overrides the viewport (e.g. 375x548: an iPhone SE 2/3 in Safari).
const device = { ...devices[deviceName] };
const size = option('--size', null);
device.viewport = size
    ? { width: Number(size.split('x')[0]), height: Number(size.split('x')[1]) }
    : { width: device.viewport.width, height: device.viewport.height - (deviceName.includes('SE') ? 110 : 0) };

const browser = await webkit.launch();
const context = await browser.newContext({ ...device });
const report = {};
for (const target of paths) {
    const page = await context.newPage();
    const errors = [];
    page.on('pageerror', (error) => errors.push(error.message));
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
    await page.waitForTimeout(1800);
    const name = target.replace(/[^a-z0-9]+/gi, '_').replace(/^_|_$/g, '') || 'home';
    await page.screenshot({ path: path.join(out, `${name}-top.png`) });
    const findings = await page.evaluate(async () => {
        const issues = [];
        const vh = window.innerHeight;
        const dock = document.querySelector('.dock');
        const dockTop = dock && getComputedStyle(dock).display !== 'none' ? dock.getBoundingClientRect().top : vh;
        const describe = (el) => `${el.tagName.toLowerCase()}${el.id ? `#${el.id}` : ''}.${[...el.classList].join('.')}`;
        const visible = (el) => { const r = el.getBoundingClientRect(); const s = getComputedStyle(el); return r.width > 0 && r.height > 0 && s.visibility !== 'hidden' && s.display !== 'none'; };
        // every scroller: scroll to its end and check the end is on screen
        const scrollers = [...document.querySelectorAll('*')].filter((el) => {
            const s = getComputedStyle(el);
            return /(auto|scroll)/.test(s.overflowY) && el.scrollHeight > el.clientHeight + 4 && visible(el);
        });
        for (const el of scrollers) {
            el.scrollTop = el.scrollHeight;
            await new Promise((resolve) => setTimeout(resolve, 120));
            const r = el.getBoundingClientRect();
            if (r.bottom > dockTop + 2) issues.push(`scroller ends ${Math.round(r.bottom - dockTop)}px under the dock/screen: ${describe(el)}`);
        }
        // clipped content with no scroll: overflow hidden and taller content (skip art boxes)
        const artish = /card|art|podium|stage|f-art|tart|thumb|pk-art|carousel|ring|slot|hp|odds|sbar|bar|meter|marquee|tk-|ticker|glance|chips|tabs|seg|name|plate|title|meta|clip|visually-hidden|cm-|ss-preview|player|poster|logo/i;
        for (const el of document.querySelectorAll('body *')) {
            if (!visible(el)) continue;
            const s = getComputedStyle(el);
            if (s.overflowY !== 'hidden' && s.overflow !== 'hidden') continue;
            if (el.scrollHeight <= el.clientHeight + 6) continue;
            if (artish.test(el.className?.toString() || '')) continue;
            if (!el.innerText || el.innerText.trim().length < 3) continue;
            issues.push(`clipped ${el.scrollHeight - el.clientHeight}px (no scroll): ${describe(el)}`);
        }
        // horizontal overflow of the page
        if (document.documentElement.scrollWidth > window.innerWidth + 1) issues.push(`page is ${document.documentElement.scrollWidth - window.innerWidth}px wider than the screen`);
        // tap targets smaller than 32px (links and buttons with text or an icon)
        const small = [...document.querySelectorAll('a[href], button')].filter((el) => {
            if (!visible(el)) return false;
            const r = el.getBoundingClientRect();
            return r.top < vh && r.bottom > 0 && (r.height < 28 || r.width < 28) && !el.closest('.search-results, .prose, p, .faq');
        }).slice(0, 8).map((el) => `${describe(el)} ${Math.round(el.getBoundingClientRect().width)}x${Math.round(el.getBoundingClientRect().height)}`);
        if (small.length) issues.push(`small tap targets: ${small.join(' | ')}`);
        return issues;
    });
    // end-of-scroll screenshot of the main screen
    await page.screenshot({ path: path.join(out, `${name}-end.png`) });
    report[target] = { issues: findings, errors };
    await page.close();
}
await browser.close();
console.log(JSON.stringify(report, null, 1));
