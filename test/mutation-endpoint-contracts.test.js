'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

process.env.JWT_SECRET ||= 'test-secret-that-is-long-enough-for-hmac-verification';

const auth = require('../lib/auth');
const Animal = require('../lib/models/Animal');
const BattleStats = require('../lib/models/BattleStats');
const ChatMessage = require('../lib/models/ChatMessage');
const Comment = require('../lib/models/Comment');
const SiteStats = require('../lib/models/SiteStats');
const TournamentSubmission = require('../lib/models/TournamentSubmission');
const User = require('../lib/models/User');
const Vote = require('../lib/models/Vote');
const XpClaim = require('../lib/models/XpClaim');

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

async function withApi(apiName, mocks, run) {
    const paths = Object.fromEntries(Object.keys(mocks).map((name) => [name, require.resolve(name)]));
    const prior = Object.fromEntries(Object.entries(paths).map(([name, path]) => [name, require.cache[path]]));
    const apiPath = require.resolve(`../api/${apiName}`);
    const priorApi = require.cache[apiPath];

    for (const [name, exports] of Object.entries(mocks)) {
        const path = paths[name];
        require.cache[path] = { id: path, filename: path, loaded: true, exports };
    }
    delete require.cache[apiPath];

    try {
        await run(require(`../api/${apiName}`));
    } finally {
        delete require.cache[apiPath];
        if (priorApi) require.cache[apiPath] = priorApi;
        for (const [name, path] of Object.entries(paths)) {
            if (prior[name]) require.cache[path] = prior[name];
            else delete require.cache[path];
        }
    }
}

const databaseMock = { connectToDatabase: async () => {} };

test('forgot-password throttling preserves the generic non-enumerating response', async () => {
    let userLookupCalled = false;
    const originalFindOne = User.findOne;
    User.findOne = async () => { userLookupCalled = true; return null; };

    try {
        await withApi('auth', {
            '../lib/mongodb': databaseMock,
            '../lib/distributed-rate-limit': {
                consumeRateLimit: async () => ({ allowed: false }),
                clientAddress: () => '203.0.113.10'
            }
        }, async (handler) => {
            const res = response();
            await handler({
                method: 'POST',
                query: { action: 'forgot-password' },
                headers: {},
                body: { email: 'TARGET@EXAMPLE.COM' }
            }, res);

            assert.equal(res.code, 200);
            assert.deepEqual(res.body, {
                success: true,
                message: 'If an account matches that email, a password reset link has been sent.'
            });
            assert.equal(userLookupCalled, false, 'throttled requests must not query or email an account');
        });
    } finally {
        User.findOne = originalFindOne;
    }
});

test('profile updates reject unknown animals and persist canonical animal names', async () => {
    const originalFindById = User.findById;
    const originalAnimalFindOne = Animal.findOne;
    const user = {
        _id: '507f1f77bcf86cd799439011',
        username: 'Rami',
        displayName: 'Rami',
        profileAnimal: null,
        usernameChanges: [],
        saveCalls: 0,
        async save() { this.saveCalls += 1; }
    };
    User.findById = async () => user;

    try {
        await withApi('auth', { '../lib/mongodb': databaseMock }, async (handler) => {
            const token = auth.signToken({ userId: user._id, username: user.username });
            const baseRequest = {
                method: 'PUT',
                query: { action: 'profile' },
                headers: { authorization: `Bearer ${token}` }
            };

            Animal.findOne = () => ({ select: () => ({ lean: async () => null }) });
            const unknown = response();
            await handler({ ...baseRequest, body: { profileAnimal: 'invented beast' } }, unknown);
            assert.equal(unknown.code, 400);
            assert.match(unknown.body.error, /unknown profile animal/i);
            assert.equal(user.saveCalls, 0);

            Animal.findOne = (query) => {
                assert.equal(query.name.$regex.test('African Elephant'), true);
                return { select: () => ({ lean: async () => ({ name: 'African Elephant' }) }) };
            };
            const canonical = response();
            await handler({ ...baseRequest, body: { profileAnimal: 'african elephant' } }, canonical);
            assert.equal(canonical.code, 200);
            assert.equal(user.profileAnimal, 'African Elephant');
            assert.equal(user.saveCalls, 1);
        });
    } finally {
        User.findById = originalFindById;
        Animal.findOne = originalAnimalFindOne;
    }
});

test('community stats expose persisted comparison and tournament counters without fabricated fallbacks', async () => {
    const originals = {
        userCount: User.countDocuments,
        voteCount: Vote.countDocuments,
        commentCount: Comment.countDocuments,
        chatCount: ChatMessage.countDocuments,
        battleAggregate: BattleStats.aggregate,
        statsFind: SiteStats.findOne
    };
    User.countDocuments = async () => 20;
    Vote.countDocuments = async () => 8;
    Comment.countDocuments = async () => 3;
    ChatMessage.countDocuments = async () => 2;
    BattleStats.aggregate = async () => [{ totalMatches: 77 }];
    SiteStats.findOne = async () => ({ totalVisits: 11, totalComparisons: 0, totalTournaments: 0 });

    try {
        await withApi('community', { '../lib/mongodb': databaseMock }, async (handler) => {
            const res = response();
            await handler({ method: 'GET', query: { action: 'stats' }, headers: {} }, res);

            assert.equal(res.code, 200);
            assert.deepEqual(res.body.data, {
                totalUsers: 20,
                totalVotes: 8,
                totalComments: 5,
                totalMatches: 77,
                totalComparisons: 0,
                totalTournaments: 0,
                totalVisits: 11,
                onlineNow: 0
            });
        });
    } finally {
        User.countDocuments = originals.userCount;
        Vote.countDocuments = originals.voteCount;
        Comment.countDocuments = originals.commentCount;
        ChatMessage.countDocuments = originals.chatCount;
        BattleStats.aggregate = originals.battleAggregate;
        SiteStats.findOne = originals.statsFind;
    }
});

test('daily animal vote resolves a concurrent first-vote upsert without duplicating the vote', async () => {
    const animalId = '507f1f77bcf86cd799439012';
    const userId = '507f1f77bcf86cd799439011';
    const originals = {
        animalFind: Animal.findById,
        voteFind: Vote.findOne,
        voteUpsert: Vote.findOneAndUpdate,
        voteUpdate: Vote.updateOne,
        voteCounts: Vote.getVoteCounts,
        claimFind: XpClaim.findOne,
        claimRecord: XpClaim.recordClaim
    };
    let retryFilter;
    let retryUpdate;
    Animal.findById = () => ({ select: () => ({ lean: async () => ({ _id: animalId, name: 'Lion' }) }) });
    Vote.findOne = () => ({ select: () => ({ lean: async () => null }) });
    Vote.findOneAndUpdate = async () => {
        const duplicate = new Error('duplicate key');
        duplicate.code = 11000;
        throw duplicate;
    };
    Vote.updateOne = async (filter, update) => { retryFilter = filter; retryUpdate = update; return { matchedCount: 1 }; };
    Vote.getVoteCounts = async () => ({ upvotes: 1, downvotes: 0, score: 1 });
    XpClaim.findOne = async () => ({ _id: '507f1f77bcf86cd799439099', rewardStatus: 'applied' });
    XpClaim.recordClaim = async () => { throw new Error('existing claim must not be recreated'); };

    try {
        await withApi('votes', {
            '../lib/mongodb': databaseMock,
            '../lib/distributed-rate-limit': {
                enforceRateLimit: async () => true,
                requestIdentity: (_req, id) => `user:${id}`
            },
            '../lib/rewards': { awardUserReward: async () => { throw new Error('applied claim must not be rewarded twice'); } },
            '../lib/discord': { notifyDiscord: async () => ({ success: true }) }
        }, async (handler) => {
            const token = auth.signToken({ userId, username: 'Rami' });
            const res = response();
            await handler({
                method: 'POST',
                query: {},
                headers: { authorization: `Bearer ${token}` },
                body: { animalId, voteType: 'up' }
            }, res);

            assert.equal(res.code, 200);
            assert.equal(res.body.action, 'created');
            assert.deepEqual(retryFilter, {
                animalId,
                votedBy: userId,
                voteDate: Vote.getTodayString()
            });
            assert.deepEqual(retryUpdate, {
                $set: { animalName: 'Lion', votedByUsername: 'Rami', voteType: 'up' }
            });
        });
    } finally {
        Animal.findById = originals.animalFind;
        Vote.findOne = originals.voteFind;
        Vote.findOneAndUpdate = originals.voteUpsert;
        Vote.updateOne = originals.voteUpdate;
        Vote.getVoteCounts = originals.voteCounts;
        XpClaim.findOne = originals.claimFind;
        XpClaim.recordClaim = originals.claimRecord;
    }
});

test('tournament quit telemetry is derived from the owned active server session', async () => {
    const originalFindOne = TournamentSubmission.findOne;
    let lookup;
    let notification;
    TournamentSubmission.findOne = (query) => {
        lookup = query;
        return {
            select: () => ({
                lean: async () => ({
                    bracketSize: 8,
                    matchHistory: [{ winner: 'Lion', loser: 'Tiger' }],
                    expiresAt: new Date(Date.now() + 60_000)
                })
            })
        };
    };

    try {
        await withApi('battles', {
            '../lib/mongodb': databaseMock,
            '../lib/distributed-rate-limit': {
                enforceRateLimit: async () => true,
                requestIdentity: (_req, id) => `user:${id}`
            },
            '../lib/discord': {
                notifyDiscord: async (event, data) => { notification = { event, data }; return { success: true }; }
            }
        }, async (handler) => {
            const userId = '507f1f77bcf86cd799439011';
            const submissionId = '123e4567-e89b-42d3-a456-426614174000';
            const token = auth.signToken({ userId, username: 'Rami' });
            const res = response();
            await handler({
                method: 'POST',
                query: { action: 'tournament_quit' },
                headers: { authorization: `Bearer ${token}` },
                body: {
                    submissionId,
                    bracketSize: 64,
                    totalMatches: 63,
                    completedMatches: 62,
                    matchHistory: [{ winner: 'Fabricated', loser: 'Telemetry' }]
                }
            }, res);

            assert.equal(res.code, 200);
            assert.deepEqual(lookup, { submissionKey: `${userId}:${submissionId}`, status: 'active' });
            assert.deepEqual(notification, {
                event: 'tournament_quit',
                data: {
                    user: 'Rami',
                    bracketSize: 8,
                    totalMatches: 7,
                    completedMatches: 1,
                    matchHistory: [{ winner: 'Lion', loser: 'Tiger' }]
                }
            });
        });
    } finally {
        TournamentSubmission.findOne = originalFindOne;
    }
});
