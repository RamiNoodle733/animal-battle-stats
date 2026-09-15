'use strict';
const assert = require('node:assert/strict');
const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ executablePath: process.env.ABS_BROWSER_EXECUTABLE || 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
    try {
        for (const width of [320, 390]) {
            const page = await browser.newPage({ viewport: { width, height: 700 } });
            await page.route('**/classic-arcade-restoration.css*', async route => {
                await new Promise(resolve => setTimeout(resolve, 1200));
                await route.continue();
            });
            await page.addInitScript(() => {
                window.headerFrames = [];
                const sample = () => {
                    const nodes = ['auth-login-btn', 'audio-toggle-btn-mobile', 'about-info-btn-mobile'].map(id => document.getElementById(id));
                    if (nodes.every(Boolean)) {
                        const rects = nodes.map(node => node.getBoundingClientRect());
                        const visible = rects.every(r => r.width > 0 && r.height > 0);
                        const loading = document.getElementById('app-loading-screen');
                        const covered = loading && getComputedStyle(loading).opacity !== '0' && !loading.classList.contains('hidden');
                        if (visible && !covered) window.headerFrames.push({
                            overlap: rects[0].right > rects[1].left || rects[1].right > rects[2].left,
                            widths: rects.map(r => r.width)
                            ,path: location.pathname, rects: rects.map(r => [r.left,r.right]), styles: [...document.querySelectorAll('link[rel="stylesheet"]')].filter(e => e.href.includes('classic-arcade')).map(e => [e.href,!!e.sheet])
                        });
                    }
                    requestAnimationFrame(sample);
                };
                requestAnimationFrame(sample);
            });
            const base = process.argv[2] || 'http://127.0.0.1:3000';
            await page.goto(`${base}/battle`);
            await page.locator('a[href="/stats"]').first().click();
            await page.waitForFunction(() => window.app && document.documentElement.classList.contains('app-loaded'));
            await page.waitForTimeout(1700);
            const frames = await page.evaluate(() => window.headerFrames);
            const bad = frames.filter(frame => frame.overlap);
            console.log({ width, visibleFrames: frames.length, overlappingFrames: bad.length });
            if (bad.length) console.log(bad[0]);
            assert(frames.length && !bad.length, 'Visible header overlaps while route CSS loads');
            await page.close();
        }
    } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
