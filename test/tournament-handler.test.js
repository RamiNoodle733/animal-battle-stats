'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
process.env.JWT_SECRET ||= 'test-secret-that-is-long-enough-for-hmac-verification';

const auth = require('../lib/auth');
const { findAnimal } = require('../lib/canonical-animals');
const TournamentSubmission = require('../lib/models/TournamentSubmission');

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

test('ranked tournament start uses a server-selected roster and server UUID', async () => {
    const dbPath = require.resolve('../lib/mongodb');
    const limiterPath = require.resolve('../lib/distributed-rate-limit');
    const apiPath = require.resolve('../api/battles');
    const priorDb = require.cache[dbPath];
    const priorLimiter = require.cache[limiterPath];
    require.cache[dbPath] = {
        id: dbPath,
        filename: dbPath,
        loaded: true,
        exports: { connectToDatabase: async () => {} }
    };
    require.cache[limiterPath] = {
        id: limiterPath,
        filename: limiterPath,
        loaded: true,
        exports: { enforceRateLimit: async () => true, requestIdentity: (_req, id) => `user:${id}` }
    };
    delete require.cache[apiPath];
    const handler = require('../api/battles');
    const originalCreate = TournamentSubmission.create;
    let created;
    TournamentSubmission.create = async (value) => { created = value; return value; };

    try {
        const token = auth.signToken({ userId: '507f1f77bcf86cd799439011', username: 'Rami' });
        const res = response();
        await handler({
            method: 'POST',
            query: { action: 'tournament_start' },
            headers: { authorization: `Bearer ${token}` },
            body: { bracketSize: 8, type: 'Mammal', participants: Array(8).fill('Attacker Pick') }
        }, res);

        assert.equal(res.code, 201);
        assert.match(res.body.submissionId, /^[0-9a-f-]{36}$/i);
        assert.equal(res.body.participants.length, 8);
        assert.equal(new Set(res.body.participants).size, 8);
        assert.ok(!res.body.participants.includes('Attacker Pick'));
        for (const name of res.body.participants) {
            assert.equal(findAnimal(name)?.type, 'Mammal');
        }
        assert.equal(created.submissionId, res.body.submissionId);
        assert.deepEqual(created.participants, res.body.participants);
        assert.equal(created.status, 'active');
    } finally {
        TournamentSubmission.create = originalCreate;
        delete require.cache[apiPath];
        if (priorDb) require.cache[dbPath] = priorDb;
        else delete require.cache[dbPath];
        if (priorLimiter) require.cache[limiterPath] = priorLimiter;
        else delete require.cache[limiterPath];
    }
});
