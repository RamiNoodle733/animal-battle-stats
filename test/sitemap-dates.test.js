'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { sitemapLastmod } = require('../lib/sitemap-dates');
const today = '2026-10-17';

test('significant page updates advance stale research dates without refreshing unchanged pages', () => {
    const updates = { '/': today, '/collection': today, '/stats/*': today };
    assert.equal(sitemapLastmod('/', '2026-09-28', updates, today), today);
    assert.equal(sitemapLastmod('/collection', '2026-09-28', updates, today), today);
    assert.equal(sitemapLastmod('/stats/african-lion', '2026-09-27', updates, today), today);
    assert.equal(sitemapLastmod('/compare/lion-vs-tiger', '2026-09-28', updates, today), '2026-09-28');
    assert.equal(sitemapLastmod('/stats-archive', '2026-09-28', updates, today), '2026-09-28');
});

test('newer research wins and repeated builds do not invent newer modification dates', () => {
    const updates = { '/stats/*': '2026-10-12' };
    assert.equal(sitemapLastmod('/stats/orca', '2026-10-16T10:00:00Z', updates, today), '2026-10-16');
    assert.equal(sitemapLastmod('/stats/orca', '2026-10-16', updates, '2026-11-01'), '2026-10-16');
});

test('invalid, missing and future dates are omitted instead of becoming misleading freshness signals', () => {
    for (const value of ['invalid', '2026-02-31', '2026-13-01', '2027-01-01', null, undefined]) {
        assert.equal(sitemapLastmod('/unknown', value, {}, today), null);
        assert.equal(sitemapLastmod('/unknown', '2026-09-28', { '/unknown': value }, today), '2026-09-28');
    }
});
