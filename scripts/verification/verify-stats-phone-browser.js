'use strict';
const assert = require('node:assert/strict');
const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ executablePath: process.env.ABS_BROWSER_EXECUTABLE || 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
    try {
        for (const [width, height] of [[320, 568], [390, 700], [430, 932]]) {
            const page = await browser.newPage({ viewport: { width, height } });
            await page.goto(`${process.argv[2] || 'http://127.0.0.1:3000'}/stats`);
            await page.waitForFunction(() => window.app?.state.animals.length > 100);
            await page.waitForFunction(() => document.querySelector('#character-name')?.clientHeight >= 18);
            await page.evaluate(() => {
                // Stress wrapping independently of today's roster spelling.
                document.querySelector('#character-scientific').textContent = 'Gorilla gorilla gorilla — scientific identification';
            });
            const layout = await page.evaluate(() => {
                const name = document.querySelector('#character-name');
                const scientific = document.querySelector('#character-scientific');
                const record = document.querySelector('#battle-record-badge');
                const panel = document.querySelector('.character-display-area');
                return {
                    nameHeight: name.clientHeight,
                    fits: scientific.scrollWidth <= scientific.clientWidth + 1,
                    separated: scientific.getBoundingClientRect().bottom <= record.getBoundingClientRect().top,
                    overflow: panel.scrollWidth - panel.clientWidth
                };
            });
            assert(layout.nameHeight >= 18, JSON.stringify(layout));
            assert(layout.fits && layout.separated && layout.overflow <= 1, JSON.stringify(layout));
            await page.locator('#quick-info-bar').scrollIntoViewIfNeeded();
            assert(await page.locator('#quick-info-bar').isVisible());
            console.log(`PASS Stats identity and reachable measurements ${width}x${height}`);
            await page.close();
        }
    } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
