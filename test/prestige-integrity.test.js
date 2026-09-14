'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

process.env.JWT_SECRET ||= 'test-secret-that-is-long-enough-for-hmac-verification';

const auth = require('../lib/auth');
const User = require('../lib/models/User');

function response() {
    return {
        headers: {},
        setHeader(name, value) { this.headers[name] = value; },
        getHeader(name) { return this.headers[name]; },
        status(code) { this.code = code; return this; },
        json(body) { this.body = body; return this; },
        end() { return this; }
    };
}

test('prestige reward is guarded by the exact eligible state', async () => {
    const dbPath = require.resolve('../lib/mongodb');
    const discordPath = require.resolve('../lib/discord');
    const apiPath = require.resolve('../api/auth');
    const priorDb = require.cache[dbPath];
    const priorDiscord = require.cache[discordPath];
    require.cache[dbPath] = {
        id: dbPath,
        filename: dbPath,
        loaded: true,
        exports: { connectToDatabase: async () => {} }
    };
    require.cache[discordPath] = {
        id: discordPath,
        filename: discordPath,
        loaded: true,
        exports: { notifyDiscord: async () => ({ success: true }) }
    };
    delete require.cache[apiPath];
    const handler = require('../api/auth');
    const originalFindById = User.findById;
    const originalFindOneAndUpdate = User.findOneAndUpdate;
    const eligibleUser = {
        _id: '507f1f77bcf86cd799439011',
        username: 'Rami',
        level: 100,
        xp: 123,
        prestige: 2,
        battlePoints: 50
    };
    let updateFilter;
    User.findById = async () => eligibleUser;
    User.findOneAndUpdate = async (filter) => {
        updateFilter = filter;
        return null;
    };

    try {
        const token = auth.signToken({ userId: eligibleUser._id, username: eligibleUser.username });
        const res = response();
        await handler({
            method: 'POST',
            query: { action: 'prestige' },
            headers: { authorization: `Bearer ${token}` },
            body: {}
        }, res);

        assert.deepEqual(updateFilter, {
            _id: eligibleUser._id,
            level: 100,
            prestige: 2,
            xp: 123
        });
        assert.equal(res.code, 409);
        assert.equal(res.body.success, false);
        assert.match(res.body.error, /state changed/i);
    } finally {
        User.findById = originalFindById;
        User.findOneAndUpdate = originalFindOneAndUpdate;
        delete require.cache[apiPath];
        if (priorDb) require.cache[dbPath] = priorDb;
        else delete require.cache[dbPath];
        if (priorDiscord) require.cache[discordPath] = priorDiscord;
        else delete require.cache[discordPath];
    }
});
