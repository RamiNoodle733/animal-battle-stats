// Visit analytics for the Discord/Slack activity feed, as the old app sent
// them: one "site visit" per browser session (with landing page, referrer,
// screen and language), the session visit counter, and "left site" with the
// session length and pages viewed when the tab closes or goes to another site.
// The server takes the signed-in player from the session cookie.
const SESSION_KEY = 'abs:session';
const NAV_KEY = 'abs:nav';
const NOTIFY = '/api/animals?action=notify';

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

let session = null;
try { session = JSON.parse(read(SESSION_KEY)); } catch { session = null; }
const fresh = !session || !Number.isFinite(session.start);
if (fresh) session = { start: Date.now(), pages: 0 };
session.pages += 1;
write(SESSION_KEY, JSON.stringify(session));

if (!automated && !local) {
    // A marker set by the previous page was for getting here; only this page's own marks count.
    write(NAV_KEY, null);
    if (fresh) {
        post(NOTIFY, {
            page: location.pathname,
            referrer: document.referrer || 'Direct',
            screenSize: `${screen.width}x${screen.height}`,
            language: navigator.language || 'Unknown'
        });
        post('/api/community?action=visit', {});
    }

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
        if (Date.now() - (Number(read(NAV_KEY)) || 0) < 5000) return;
        const current = (() => { try { return JSON.parse(read(SESSION_KEY)); } catch { return null; } })() || session;
        const body = JSON.stringify({
            type: 'site_leave',
            page: location.pathname,
            duration: duration(Math.max(0, Math.round((Date.now() - current.start) / 1000))),
            pages: current.pages
        });
        if (navigator.sendBeacon) navigator.sendBeacon(NOTIFY, new Blob([body], { type: 'application/json' }));
        // Coming back later in this tab starts a new visit.
        write(SESSION_KEY, null);
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
