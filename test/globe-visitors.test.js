'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { readGlobeVisitors } = require('../lib/globe-visitors');

function activity(rows) {
    const state = { closed: false };
    const cursor = {
        async *[Symbol.asyncIterator]() { yield* rows; },
        async close() { state.closed = true; }
    };
    const query = { select() { return this; }, sort() { return this; }, maxTimeMS() { return this; }, lean() { return this; }, cursor() { return cursor; } };
    return { find: () => query, state };
}
test('streamed counts deduplicate returning visitors independently in each bucket', async () => {
    const rows = [
        { visitorHash: 'a', eventType: 'vote', page: '/vote', locationKey: 'houston', coordinates: { lat: 29, lng: -95 }, occurredAt: '2026-10-21T01:00:00Z' },
        { visitorHash: 'a', eventType: 'vote', page: '/vote', locationKey: 'houston', coordinates: { lat: 29, lng: -95 }, occurredAt: '2026-10-21T13:00:00Z' },
        { visitorHash: 'a', eventType: 'comment', page: '/community', locationKey: 'katy', coordinates: { lat: 29, lng: -95 }, occurredAt: '2026-10-22T13:00:00Z' },
        { visitorHash: 'b', eventType: 'vote', page: '/vote', locationKey: 'houston', coordinates: { lat: 29, lng: -95 }, occurredAt: '2026-10-21T13:00:00Z' },
        { visitorHash: 'c', eventType: 'vote', page: null, locationKey: 'houston', occurredAt: '2026-10-21T01:00:00Z' }
    ];
    const source = activity(rows);
    const result = await readGlobeVisitors(source, { trendSince: new Date('2026-10-21T12:00:00Z') });
    assert.equal(result.total, 3);
    assert.deepEqual([...result.locations], [['houston', 2], ['katy', 1]]);
    assert.deepEqual([...result.pages], [['/vote', 2], ['/community', 1]]);
    assert.deepEqual([...result.actions], [['vote', 3], ['comment', 1]]);
    assert.deepEqual([...result.days], [['2026-10-21', 2], ['2026-10-22', 1]]);
    assert.equal(source.state.closed, true);
    assert.doesNotMatch(JSON.stringify(result), /visitorHash/);
});
test('empty or missing visitor identities do not invent unique visitors', async () => {
    const source = activity([{ visitorHash: null }, {}, { visitorHash: '' }]);
    const result = await readGlobeVisitors(source);
    assert.equal(result.total, 0);
    assert.equal(result.actions.size, 0);
    assert.equal(source.state.closed, true);
});
test('large streams count visitors without collecting all identities in the result', async () => {
    const source = activity(Array.from({ length: 50000 }, (_, i) => ({ visitorHash: String(Math.floor(i / 2)).padStart(8, '0'), eventType: 'site_visit', page: '/', occurredAt: '2026-10-21T00:00:00Z' })));
    const result = await readGlobeVisitors(source);
    assert.equal(result.total, 25000);
    assert.equal(result.pages.get('/'), 25000);
    assert.equal(result.days.get('2026-10-21'), 25000);
    assert.equal(result.actions.size, 1);
});
