#!/usr/bin/env node
'use strict';

const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require('playwright');
const base = (process.argv[2] || 'http://127.0.0.1:3000').replace(/\/$/, '');
const output = path.resolve(__dirname, '../../.cache/browser-verification/battle');
const executablePath = process.env.ABS_BROWSER_EXECUTABLE || [
    'C:/Program Files/Google/Chrome/Application/chrome.exe',
    'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    'C:/Program Files/Microsoft/Edge/Application/msedge.exe'
].find((candidate) => fs.existsSync(candidate));

async function main() {
    fs.mkdirSync(output, { recursive: true });
    const browser = await chromium.launch({ headless: true, ...(executablePath ? { executablePath } : {}) });
    try {
        for (const width of [320, 390, 768, 1440]) {
            const context = await browser.newContext({ viewport: { width, height: 900 }, reducedMotion: 'reduce' });
            const page = await context.newPage();
            const errors = [];
            page.on('pageerror', (error) => errors.push(error.message));
            await page.goto(`${base}/battle`);
            await page.waitForFunction(() => !document.getElementById('battle-submit').disabled);
            assert.match(await page.locator('#matchup-label').innerText(), /African Lion vs Siberian Tiger/);
            assert.equal(await page.locator('h1').count(), 1);
            assert.equal(await page.locator('.primary-nav a').count(), 6);
            assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'), 'https://animalbattlestats.com/battle');
            assert.match(await page.locator('#animal-a-image').getAttribute('src'), /african-lion/);
            await page.locator('#tab-ratings').click();
            assert.equal(await page.locator('#panel-ratings').isVisible(), true);
            assert.equal(await page.locator('#panel-summary').isVisible(), false);
            await page.locator('#tab-ratings').press('ArrowRight');
            assert.equal(await page.locator('#panel-physical').isVisible(), true);
            await page.locator('#tab-summary').click();
            await page.locator('#animal-a').selectOption('gorilla');
            await page.locator('#animal-b').selectOption('grizzly-bear');
            await page.locator('#battle-submit').focus();
            await page.keyboard.press('Enter');
            assert.match(await page.locator('#matchup-label').innerText(), /Gorilla vs Grizzly Bear/);
            assert.match(await page.locator('#animal-a-image').getAttribute('src'), /gorilla/);
            assert.match(await page.locator('#animal-b-image').getAttribute('src'), /grizzly-bear/);
            assert.equal(await page.locator('#battle-result').evaluate((el) => el === document.activeElement), true);
            const shared = page.url();
            assert.match(shared, /model=0\.1\.0-preview/);
            assert.match(shared, /data=/);
            const verdict = await page.locator('#verdict-title').innerText();
            await page.reload();
            await page.waitForFunction(() => !document.getElementById('battle-submit').disabled);
            assert.equal(await page.locator('#verdict-title').innerText(), verdict);
            await page.locator('#animal-b').selectOption('gorilla');
            await page.locator('#battle-submit').click();
            assert.match(await page.locator('#battle-error').innerText(), /different animals/);
            assert.equal(page.url(), shared);
            await page.locator('#animal-a').selectOption('african-elephant');
            await page.locator('#animal-b').selectOption('siberian-tiger');
            await page.locator('#battle-submit').click();
            assert.match(await page.locator('#measurement-rows').innerText(), /Unknown/);
            await page.goBack();
            assert.match(await page.locator('#matchup-label').innerText(), /Gorilla vs Grizzly Bear/);
            assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `overflow at ${width}`);
            if (width === 1440) assert.ok(await page.evaluate(() => document.documentElement.scrollHeight <= innerHeight + 1), 'desktop Battle arena should fit one viewport');
            await page.screenshot({ path: path.join(output, `battle-${width}.png`), fullPage: true });
            await page.goto(`${base}/battle?a=missing&model=old`);
            await page.waitForFunction(() => !document.getElementById('battle-submit').disabled);
            assert.match(await page.locator('#battle-error').innerText(), /unavailable model/);
            assert.match(await page.locator('#matchup-label').innerText(), /African Lion vs Siberian Tiger/);
            await page.goto(`${base}/methodology`);
            assert.equal(await page.locator('h1').count(), 1);
            assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `methodology overflow at ${width}`);
            await page.screenshot({ path: path.join(output, `methodology-${width}.png`), fullPage: true });
            await page.goto(`${base}/stats/african-elephant`);
            const correctionHref = await page.getByRole('link', { name: 'Report this profile' }).getAttribute('href');
            assert.match(correctionHref, /template=data-correction\.yml/);
            assert.match(correctionHref, /Data%20correction%3A%20African%20Elephant/);
            if (width === 390) {
                await page.goto(`${base}/about#corrections-title`);
                assert.equal(await page.locator('.correction-actions a').count(), 2);
                await page.locator('#corrections-title').scrollIntoViewIfNeeded();
                await page.screenshot({ path: path.join(output, 'corrections-390.png'), fullPage: false });
            }
            if (width === 390) {
                await page.goto(`${base}/stats`);
                await page.waitForFunction(() => window.app && document.getElementById('app-loading-screen')?.classList.contains('hidden'));
                await page.locator('.mobile-nav-item[data-view="battle"]').click();
                await page.waitForURL((url) => url.pathname === '/battle');
                await page.waitForFunction(() => !document.getElementById('battle-submit').disabled);
                assert.equal(await page.locator('body.battle-route').count(), 1);
            }
            assert.deepEqual(errors, []);
            await context.close();
            console.log(`Battle and methodology verified at ${width}px: keyboard, reload, history, invalid input, overflow and console.`);
        }
        const context = await browser.newContext({ javaScriptEnabled: false });
        const page = await context.newPage();
        await page.goto(`${base}/battle`);
        assert.match(await page.locator('#verdict-title').innerText(), /favored/);
        assert.match(await page.locator('noscript').innerText(), /African Lion vs Siberian Tiger/);
        assert.equal(await page.locator('#factor-rows tr').count(), 6);
        assert.equal(await page.locator('#battle-submit').isDisabled(), true);
        await context.close();
        console.log('Static answer, factor table and no-JavaScript fallback verified.');
    } finally {
        await browser.close();
    }
}
main().catch((error) => { console.error(error); process.exitCode = 1; });
