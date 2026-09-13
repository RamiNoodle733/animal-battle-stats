'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { InputError, searchParams, randomParams } = require('../lib/api-input');

test('search rejects Mongo operators, arrays, unknown sorts and malformed bodies', () => {
    for (const field of ['type', 'class', 'size', 'q']) {
        for (const value of [{ $ne: null }, ['Mammal'], 42]) {
            assert.throws(() => searchParams({ [field]: value }), InputError);
        }
    }
    for (const value of [null, undefined, [], 'q=lion', { sort: '__proto__' }, { order: 'sideways' }]) {
        assert.throws(() => searchParams(value), InputError);
    }
});

test('pagination and range bounds are finite, bounded and preserve true zero', () => {
    for (const limit of [0, -1, 'NaN', '1oops', 501, Infinity, {}, '']) {
        assert.throws(() => searchParams({ limit }), InputError);
    }
    for (const page of [0, -1, 0.5, 1001]) assert.throws(() => searchParams({ page }), InputError);
    const params = searchParams({ minAttack: 0, maxAttack: '0', social: false, nocturnal: 'true', limit: '225' });
    assert.equal(params.maxAttack, 0);
    assert.equal(params.social, false);
    assert.equal(params.nocturnal, true);
    assert.equal(params.limit, 225);
    assert.equal(params.page, 1);
    assert.throws(() => searchParams({ minAttack: 60, maxAttack: 50 }), InputError);
    assert.throws(() => searchParams({ social: 'maybe' }), InputError);
});

test('random cannot pass invalid sample sizes or operator filters to MongoDB', () => {
    assert.equal(randomParams({}).count, 1);
    assert.equal(randomParams({ count: '10' }).count, 10);
    for (const count of [-1, 0, 11, 'abc', '2bad', [], null]) assert.throws(() => randomParams({ count }), InputError);
    assert.throws(() => randomParams({ type: { $exists: true } }), InputError);
    assert.throws(() => randomParams({ exclude: ['lion'] }), InputError);
});

test('API handlers reject unsafe input before connecting to a database', async () => {
    // Replace only the connection dependency; these cases must never touch MongoDB.
    const dbPath = require.resolve('../lib/mongodb');
    const previous = require.cache[dbPath];
    let connections = 0;
    require.cache[dbPath] = { id: dbPath, filename: dbPath, loaded: true, exports: {
        connectToDatabase: async () => { connections += 1; throw new Error('Unexpected database connection'); }
    } };
    try {
        for (const [route, req] of [
            ['search', { method: 'POST', body: { type: { $ne: '' } } }],
            ['search', { method: 'POST', body: undefined }],
            ['search', { method: 'GET', query: { limit: 0 } }],
            ['random', { method: 'GET', query: { count: -1 } }]
        ]) {
            const handler = require(`../api/${route}`);
            const res = { setHeader() {}, status(code) { this.code = code; return this; }, json(body) { this.body = body; return this; } };
            await handler({ headers: {}, ...req }, res);
            assert.equal(res.code, 400);
            assert.equal(res.body.success, false);
        }
        assert.equal(connections, 0);
    } finally {
        if (previous) require.cache[dbPath] = previous;
        else delete require.cache[dbPath];
    }
});
