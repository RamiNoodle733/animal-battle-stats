// Visit analytics for the Discord/Slack activity feed, as the old app sent
// them: a "site visit" for every page view (page, referrer, screen, language,
// its place in the visit and a random visit id so the server can group them),
// the session visit counter once per visit, a presence heartbeat for "online
// now", and "left site" with the session length and pages viewed when the tab
// closes or goes to another site. The server takes the signed-in player from
// the session cookie.
const SESSION_KEY = 'abs:session';
const NAV_KEY = 'abs:nav';
const NOTIFY = '/api/animals?action=notify';
const PING = '/api/community?action=ping';
const PING_EVERY = 45 * 1000;

const automated = navigator.webdriver || /bot|crawl|spider|slurp|headless|lighthouse|pagespeed/i.test(navigator.userAgent);
const local = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);

function read(key) {
    try { return sessionStorage.getItem(key); } catch { return null; }
}
function write(key, value) {
    try {
        if (value === null) sessionStorage.removeItem(key);
        else sessionStorage.setItem(key, value);
    } catch { /* storage blocked */ }
}
function readSession() {
    try { return JSON.parse(read(SESSION_KEY)); } catch { return null; }
}

function post(url, body) {
    return fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        keepalive: true,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }).catch(() => {});
}

function duration(seconds) {
    if (seconds >= 3600) return `${Math.floor(seconds / 3600)}h ${Math.floor((seconds % 3600) / 60)}m`;
    if (seconds >= 60) return `${Math.floor(seconds / 60)}m ${seconds % 60}s`;
    return `${seconds}s`;
}

function visitId() {
    try { if (crypto.randomUUID) return crypto.randomUUID(); } catch { /* insecure context */ }
    return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 12)}`;
}

// Counts this page in the current visit, starting a new visit when there is none
// (first page in this tab, or coming back after leaving the site).
function countPage() {
    let current = readSession();
    const fresh = !current || !Number.isFinite(current.start);
    if (fresh) current = { start: Date.now(), pages: 0 };
    if (!current.id) current.id = visitId();
    current.pages = (Number(current.pages) || 0) + 1;
    write(SESSION_KEY, JSON.stringify(current));
    return { current, fresh };
}

let session = null;

// Presence heartbeat: on load and every PING_EVERY while the tab is visible.
let pingTimer = null;
function ping() {
    fetch(PING, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            ...(window.ABS_TOKEN ? { Authorization: `Bearer ${window.ABS_TOKEN}` } : {})
        },
        body: JSON.stringify({ page: location.pathname })
    }).catch(() => {});
}
function startPinging() {
    if (pingTimer || document.visibilityState !== 'visible') return;
    ping();
    pingTimer = setInterval(ping, PING_EVERY);
}
function stopPinging() {
    clearInterval(pingTimer);
    pingTimer = null;
}

// Every page view is posted, internal clicks included (each is a full page load).
// The visit counter only counts the first page of a visit.
function pageView(referrer) {
    const counted = countPage();
    session = counted.current;
    // A marker set by the previous page was for getting here; only this page's own marks count.
    write(NAV_KEY, null);
    post(NOTIFY, {
        page: location.pathname,
        // Only a referrer from another site shows in the feed ("Came From").
        referrer,
        screenSize: `${screen.width}x${screen.height}`,
        language: navigator.language || 'Unknown',
        pages: session.pages,
        sessionId: session.id
    });
    if (counted.fresh) post('/api/community?action=visit', {});
    startPinging();
}

if (!automated && !local) {
    pageView(document.referrer || 'Direct');

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') startPinging();
        else stopPinging();
    });

    // Moving between pages of this site is not leaving it.
    const markInternal = () => write(NAV_KEY, String(Date.now()));
    const sameOrigin = (url) => {
        try { return new URL(url, location.href).origin === location.origin; } catch { return false; }
    };
    if ('navigation' in window) {
        window.navigation.addEventListener('navigate', (event) => {
            if (sameOrigin(event.destination?.url)) markInternal();
        });
    }
    document.addEventListener('click', (event) => {
        const link = event.target.closest?.('a[href]');
        if (!link || link.target === '_blank' || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
        if (sameOrigin(link.href)) markInternal();
    }, true);
    document.addEventListener('submit', markInternal, true);

    addEventListener('pagehide', () => {
        stopPinging();
        if (Date.now() - (Number(read(NAV_KEY)) || 0) < 5000) return;
        const current = readSession() || session;
        const body = JSON.stringify({
            type: 'site_leave',
            page: location.pathname,
            duration: duration(Math.max(0, Math.round((Date.now() - current.start) / 1000))),
            pages: current.pages,
            sessionId: current.id
        });
        if (navigator.sendBeacon) navigator.sendBeacon(NOTIFY, new Blob([body], { type: 'application/json' }));
        // Coming back later in this tab starts a new visit.
        write(SESSION_KEY, null);
    });

    // Back/forward can restore this page from the browser cache without running
    // the script again; that is a page view too (and a new visit after leaving).
    // document.referrer still names the original landing then, so it is not resent.
    addEventListener('pageshow', (event) => {
        if (event.persisted) pageView(null);
    });
}

// The session cookie still identifies the player, so call this before logging out.
export function trackLogout() {
    if (automated || local) return Promise.resolve();
    return post(NOTIFY, { type: 'logout' });
}

// A signed-in player ran a Versus fight (server rate-limits one per matchup per 5 minutes).
export function trackFight(animal1, animal2) {
    if (automated || local || !window.ABS_USER) return;
    fetch('/api/rankings?action=fight', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            ...(window.ABS_TOKEN ? { Authorization: `Bearer ${window.ABS_TOKEN}` } : {})
        },
        body: JSON.stringify({ animal1, animal2 })
    }).catch(() => {});
}
