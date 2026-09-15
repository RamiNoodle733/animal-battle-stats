'use strict';
const assert = require('node:assert/strict');
const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch({ executablePath: process.env.ABS_BROWSER_EXECUTABLE || 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
    try {
        for (const [width, height] of [[320, 568], [390, 700], [430, 932]]) {
            const page = await browser.newPage({ viewport: { width, height } });
            await page.goto(`${process.argv[2] || 'http://127.0.0.1:3000'}/compare`);
            await page.waitForFunction(() => window.ComparePageEnhancements && window.app?.state.view === 'compare');
            await page.waitForFunction(() => document.querySelector('.fighter-left .c-tournament-dashboard'));
            await page.waitForFunction(() => window.app.state.compare.selectingSide === 'left' && !window.app.state.isLoading);
            await page.evaluate(() => {
                window.app.setSelectingSide('left');
                window.app.selectFighter(window.app.state.animals[0]);
                window.app.setSelectingSide('right');
                window.app.selectFighter(window.app.state.animals[1]);
            });
            await page.waitForFunction(() => !document.querySelector('#fight-btn').disabled);
            for (const side of ['left', 'right']) {
                const medals = page.locator(`.fighter-${side} .c-tournament-dashboard`);
                await medals.scrollIntoViewIfNeeded();
                const fits = await medals.evaluate(e => {
                    const r = e.getBoundingClientRect();
                    const panel = e.closest('.fighter-section').getBoundingClientRect();
                    const action = document.querySelector('#fight-btn').getBoundingClientRect();
                    return r.height > 0 && r.top >= panel.top && r.bottom <= panel.bottom + 1 && r.bottom <= action.top;
                });
                assert(fits, `${width}: ${side} medals clipped or covered`);
            }
            await page.locator('#expand-details-btn').click();
            const analysis = page.locator('#compare-analysis');
            assert(await analysis.evaluate(e => e.open && e.scrollWidth <= e.clientWidth + 1));
            assert.equal(await analysis.locator('tbody tr').count(), 11);
            await page.keyboard.press('Escape');
            assert(await analysis.evaluate(e => !e.open));
            console.log(`PASS Compare medals and analysis ${width}x${height}`);
            await page.close();
        }
    } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
