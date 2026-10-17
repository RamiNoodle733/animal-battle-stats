'use strict';

function validDate(value, today) {
    if (typeof value !== 'string') return null;
    const date = value.slice(0, 10);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || date > today) return null;
    const parsed = new Date(`${date}T00:00:00Z`);
    return Number.isFinite(parsed.getTime()) && parsed.toISOString().slice(0, 10) === date ? date : null;
}

// Significant page/link updates and new research are independent. Record the
// later real change; a rebuild by itself must never make every page "new".
function sitemapLastmod(pathname, researchDate, updates = {}, today = new Date().toISOString().slice(0, 10)) {
    const candidates = [researchDate, updates[pathname]];
    for (const [pattern, date] of Object.entries(updates)) {
        if (pattern.endsWith('/*') && pathname.startsWith(pattern.slice(0, -1))) candidates.push(date);
    }
    return candidates.map((value) => validDate(value, today)).filter(Boolean).sort().at(-1) || null;
}

module.exports = { sitemapLastmod };
