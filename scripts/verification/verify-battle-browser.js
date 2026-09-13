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
            assert.equal(await page.locator('link[rel="canonical"]').getAttribute('href'), 'https://animalbattlestats.com/battle');
            await page.locator('#animal-a').selectOption('gorilla');
            await page.locator('#animal-b').selectOption('grizzly-bear');
            await page.locator('#battle-submit').focus();
            await page.keyboard.press('Enter');
            assert.match(await page.locator('#matchup-label').innerText(), /Gorilla vs Grizzly Bear/);
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
            await page.screenshot({ path: path.join(output, `battle-${width}.png`), fullPage: true });
            await page.goto(`${base}/battle?a=missing&model=old`);
            await page.waitForFunction(() => !document.getElementById('battle-submit').disabled);
            assert.match(await page.locator('#battle-error').innerText(), /unavailable model/);
            assert.match(await page.locator('#matchup-label').innerText(), /African Lion vs Siberian Tiger/);
            await page.goto(`${base}/methodology`);
            assert.equal(await page.locator('h1').count(), 1);
            assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `methodology overflow at ${width}`);
            await page.screenshot({ path: path.join(output, `methodology-${width}.png`), fullPage: true });
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
