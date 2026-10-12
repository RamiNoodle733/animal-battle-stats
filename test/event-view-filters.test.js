'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
const { applyEventViewFilters } = require('../lib/event-view-filters');

test('account exclusions combine with other filters and never change storage settings', () => {
    const query = { eventType: 'vote', username: { $regex: 'Rami' } };
    const filters = applyEventViewFilters(query, { hideMe: '1', exclude: 'Other,OTHER, @RamiNoodle733', country: 'us', device: 'Mobile' }, 'RamiNoodle733');
    assert.deepEqual(filters.excluded, ['other', 'raminoodle733']);
    assert.equal(query.$nor.length, 2);
    assert.equal(query.$nor[1].username.$regex, '^raminoodle733$');
    assert.equal(query.username.$regex, 'Rami');
    assert.equal(query.country, 'US');
});
test('all accounts are visible when exclusions are empty', () => {
    const query = {};
    applyEventViewFilters(query, {}, 'RamiNoodle733');
    assert.deepEqual(query, {});
});
test('malformed exclusions, devices, countries and inverted dates are rejected', () => {
    for (const params of [{ exclude: '.*' }, { exclude: Array(51).fill('Bob').join(',') }, { country: 'United States' }, { device: 'bot' }]) {
        assert.throws(() => applyEventViewFilters({}, params, 'Owner'));
    }
    assert.throws(() => applyEventViewFilters({ occurredAt: { $gte: new Date('2026-10-12'), $lte: new Date('2026-10-01') } }, {}, 'Owner'));
});
