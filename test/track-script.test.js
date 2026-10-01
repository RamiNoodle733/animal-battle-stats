'use strict';

// Runs astro/src/scripts/track.js against a small fake browser: a fresh copy of
// the module per page load, all loads in one tab sharing its sessionStorage.
const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const source = fs.readFileSync(path.join(__dirname, '..', 'astro/src/scripts/track.js'), 'utf8');
const GLOBALS = ['window', 'navigator', 'location', 'document', 'screen', 'sessionStorage', 'localStorage', 'fetch', 'addEventListener', 'setInterval', 'clearInterval'];
const saved = Object.fromEntries(GLOBALS.map((name) => [name, Object.getOwnPropertyDescriptor(globalThis, name)]));
let loads = 0;

function install(values) {
    for (const [name, value] of Object.entries(values)) {
        Object.defineProperty(globalThis, name, { value, configurable: true, writable: true });
    }
}

test.after(() => {
    for (const name of GLOBALS) {
        if (saved[name]) Object.defineProperty(globalThis, name, saved[name]);
        else delete globalThis[name];
    }
});

function fakeStorage() {
    const store = new Map();
    return {
        getItem: (key) => (store.has(key) ? store.get(key) : null),
        setItem: (key, value) => store.set(key, String(value)),
        removeItem: (key) => store.delete(key)
    };
}

function fakeTab() {
    return {
        storage: fakeStorage(),
        local: fakeStorage(),
        requests: [],
        beacons: []
    };
}

async function loadPage(tab, { pathname, search = '', referrer = '', hostname = 'animalbattlestats.com', userAgent = 'Mozilla/5.0 Chrome/140' }) {
    const listeners = {};
    const on = (type, handler) => { (listeners[type] ||= []).push(handler); };
    const env = {
        window: globalThis,
        navigator: {
            userAgent,
            webdriver: false,
            language: 'en-US',
            sendBeacon: (url, blob) => { tab.beacons.push({ url, blob }); return true; }
        },
        location: { hostname, pathname, search, origin: `https://${hostname}`, href: `https://${hostname}${pathname}${search}` },
        document: { referrer, visibilityState: 'visible', addEventListener: on },
        screen: { width: 390, height: 844 },
        sessionStorage: tab.storage,
        localStorage: tab.local,
        fetch: async (url, options) => {
            tab.requests.push({ url, body: JSON.parse(options.body) });
            return { ok: true };
        },
        addEventListener: on,
        setInterval: () => 1,
        clearInterval: () => {}
    };
    install(env);
    loads += 1;
    await import(`data:text/javascript;base64,${Buffer.from(`${source}\n// page load ${loads}`).toString('base64')}`);
    return {
        fire(type, event = {}) {
            install(env); // this page is the one in front again
            for (const handler of listeners[type] || []) handler(event);
        },
        clickInternalLink() {
            tab.storage.setItem('abs:nav', String(Date.now()));
        }
    };
}

const urls = (tab) => tab.requests.map((request) => request.url);
const notifies = (tab) => tab.requests.filter((request) => request.url === '/api/animals?action=notify');

test('every page view posts a site visit; the visit counter only counts the first', async () => {
    const tab = fakeTab();
    const landing = await loadPage(tab, { pathname: '/', referrer: 'https://www.google.com/' });
    assert.deepEqual(urls(tab), [
        '/api/animals?action=notify',
        '/api/community?action=visit',
        '/api/community?action=ping'
    ]);
    const [first] = notifies(tab);
    assert.equal(first.body.page, '/');
    assert.equal(first.body.referrer, 'https://www.google.com/');
    assert.equal(first.body.pages, 1);
    assert.equal(first.body.language, 'en-US');
    assert.equal(first.body.screenSize, '390x844');
    assert.ok(first.body.sessionId);
    assert.deepEqual(tab.requests.at(-1).body, { page: '/' });

    // An internal click is a full page load on this site, and not leaving it.
    landing.clickInternalLink();
    landing.fire('pagehide');
    assert.equal(tab.beacons.length, 0);
    tab.requests.length = 0;
    const second = await loadPage(tab, { pathname: '/rankings', referrer: 'https://animalbattlestats.com/' });
    assert.deepEqual(urls(tab), ['/api/animals?action=notify', '/api/community?action=ping']);
    const [view] = notifies(tab);
    assert.equal(view.body.page, '/rankings');
    assert.equal(view.body.pages, 2);
    assert.equal(view.body.sessionId, first.body.sessionId);
    assert.equal(tab.storage.getItem('abs:nav'), null);

    // Closing the tab without an internal click just before is leaving the site.
    second.fire('pagehide');
    assert.equal(tab.beacons.length, 1);
    const leave = JSON.parse(await tab.beacons[0].blob.text());
    assert.equal(leave.type, 'site_leave');
    assert.equal(leave.page, '/rankings');
    assert.equal(leave.pages, 2);
    assert.equal(leave.sessionId, first.body.sessionId);
    assert.equal(tab.storage.getItem('abs:session'), null);

    // Coming back to it from the back/forward cache is a page view in a new visit.
    tab.requests.length = 0;
    second.fire('pageshow', { persisted: true });
    assert.deepEqual(urls(tab), [
        '/api/animals?action=notify',
        '/api/community?action=visit',
        '/api/community?action=ping'
    ]);
    const [restored] = notifies(tab);
    assert.equal(restored.body.pages, 1);
    assert.equal(restored.body.referrer, null);
    assert.notEqual(restored.body.sessionId, first.body.sessionId);
});

test('bots and local development send nothing', async () => {
    const botTab = fakeTab();
    await loadPage(botTab, { pathname: '/', userAgent: 'Googlebot/2.1' });
    assert.equal(botTab.requests.length, 0);

    const localTab = fakeTab();
    await loadPage(localTab, { pathname: '/', hostname: 'localhost' });
    assert.equal(localTab.requests.length, 0);
});

test('Versus sends the matchup it shows; other pages send no query', async () => {
    const tab = fakeTab();
    await loadPage(tab, { pathname: '/compare', search: '?a=human&b=gorilla&na=10' });
    assert.equal(notifies(tab)[0].body.search, '?a=human&b=gorilla&na=10');
    const other = fakeTab();
    await loadPage(other, { pathname: '/stats/cassowary', search: '?utm_source=x' });
    assert.equal(notifies(other)[0].body.search, '');
});

test('an untracked browser sends no page views, visits or exits, only presence', async () => {
    const tab = fakeTab();
    tab.local.setItem('abs:untracked', 'manual');
    const page = await loadPage(tab, { pathname: '/stats/cassowary' });
    assert.deepEqual(urls(tab), ['/api/community?action=ping']);
    page.fire('pagehide');
    assert.equal(tab.beacons.length, 0);
});

test('signing in with an untracked account stops this browser; tracking it again starts it', async () => {
    const tab = fakeTab();
    const first = await loadPage(tab, { pathname: '/' });
    first.fire('abs:user', { detail: { username: 'RamiNoodle733', untracked: true } });
    assert.equal(tab.local.getItem('abs:untracked'), 'account');

    tab.requests.length = 0;
    const second = await loadPage(tab, { pathname: '/rankings' });
    assert.deepEqual(urls(tab), ['/api/community?action=ping']);

    second.fire('abs:user', { detail: { username: 'RamiNoodle733', untracked: false } });
    assert.equal(tab.local.getItem('abs:untracked'), null);

    // The owner's own switch stays on whoever signs in.
    tab.local.setItem('abs:untracked', 'manual');
    second.fire('abs:user', { detail: { username: 'Someone', untracked: false } });
    assert.equal(tab.local.getItem('abs:untracked'), 'manual');
});
