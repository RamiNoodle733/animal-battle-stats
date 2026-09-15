'use strict';
const assert = require('node:assert/strict');
const { chromium } = require('playwright');
(async () => {
    const b = await chromium.launch({ executablePath: process.env.ABS_BROWSER_EXECUTABLE || 'C:/Program Files/Google/Chrome/Application/chrome.exe' });
    try {
        for (const width of [320, 390]) {
            const p = await b.newPage({ viewport: { width, height: 700 } });
            const base = process.argv[2] || 'http://127.0.0.1:3000';
            for (const route of ['stats', 'compare']) {
                await p.goto(`${base}/${route}`);
                await p.waitForFunction(() => window.app && !app.state.isLoading && document.querySelector('link[href*="classic-arcade-restoration"]')?.sheet);
                await p.waitForTimeout(400);
                await p.evaluate(() => { app.state.isGridVisible = true; app.updateGridVisibility(); });
                await p.waitForTimeout(450);
                const panel = p.locator(route === 'stats' ? '.character-display-area' : '.fight-screen');
                const before = await panel.boundingBox();
                await p.locator('#toggle-grid-btn').click();
                await p.waitForTimeout(450);
                const after = await panel.boundingBox();
                assert(after.height >= before.height + 100, `${route} failed expansion: ${JSON.stringify({ before, after })}`);
                await p.screenshot({ path: `.cache/followup-${route}-${width}.png` });
                console.log(width, route, 'expands', before.height, after.height);
                if (route === 'stats') {
                    const clear = await p.locator('#stats-view .stat-group-container').evaluateAll(groups => groups.every(group => {
                        const bar = group.querySelector('.stat-bar-wrapper').getBoundingClientRect();
                        const sub = group.querySelector('.substat-container').getBoundingClientRect();
                        return sub.top >= bar.bottom;
                    }));
                    assert(clear, 'Substat labels overlap the primary bars');
                }
                if (route === 'compare') {
                    await p.evaluate(() => {
                        app.setSelectingSide('left');
                        app.selectFighter(app.state.animals.find(a => a.name === 'Megalodon'));
                    });
                    assert.match(await p.locator('#c-weight-1').innerText(), /60K/);
                }
            }
            await p.locator('#auth-login-btn').click();
            await p.waitForURL('**/login');
            console.log(width, 'Login tap reaches login');
            await p.goto(`${base}/community/map`);
            await p.waitForSelector('#community-globe-canvas');
            await p.waitForTimeout(800);
            const overflow = await p.locator('.community-sidebar-column').evaluate(e => e.scrollWidth - e.clientWidth);
            assert(overflow <= 1, `Map horizontal overflow: ${overflow}`);
            await p.screenshot({ path: `.cache/followup-map-${width}.png` });
            await p.goto(`${base}/`);
            await p.waitForFunction(() => window.HomepageController?.animations.mobile.width > 0);
            await p.waitForTimeout(700);
            await p.screenshot({ path: `.cache/followup-home-${width}.png` });
            const footer = await p.locator('.portal-footer').boundingBox();
            assert(footer.y + footer.height <= 689, 'Home footer lacks bottom clearance');
            await p.goto(`${base}/rankings`);
            await p.waitForTimeout(900);
            assert(!(await p.locator('#rankings-view .hero-top-row').isVisible()));
            assert(await p.locator('#hero-tournament-btn').isVisible());
            await p.close();
        }
    } finally { await b.close(); }
})().catch(e => { console.error(e); process.exitCode = 1; });
