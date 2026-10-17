'use strict';

// One rule for password forms and all three OAuth flows. Normalize dot segments
// before checking destinations; an encoded login/API path must not bypass it.
function safeReturnPath(value) {
    const raw = String(value || '').trim();
    // eslint-disable-next-line no-control-regex -- Reject URL parser control characters.
    const invalid = /[\\\u0000-\u001f\u007f]/;
    if (!raw.startsWith('/') || raw.startsWith('//') || raw.includes('://') || invalid.test(raw)) return '/';
    try {
        const base = 'https://animalbattlestats.com';
        const url = new URL(raw, base);
        const decoded = decodeURIComponent(url.pathname);
        if (decoded.startsWith('//') || invalid.test(decoded)) return '/';
        const normalized = new URL(decoded, base);
        if (normalized.origin !== base || /^\/(?:login|signup|forgot-password|reset-password|api)(?:[/?#]|$)/i.test(normalized.pathname)) return '/';
        return `${url.pathname}${url.search}${url.hash}`;
    } catch {
        return '/';
    }
}

module.exports = { safeReturnPath };
