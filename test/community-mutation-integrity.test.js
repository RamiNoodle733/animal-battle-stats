'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

process.env.JWT_SECRET ||= 'test-secret-that-is-long-enough-for-hmac-verification';
const auth = require('../lib/auth');
const Animal = require('../lib/models/Animal');
const ChatMessage = require('../lib/models/ChatMessage');
const Comment = require('../lib/models/Comment');
const mongoose = require('mongoose');
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

async function withHandlers(run) {
    const dbPath = require.resolve('../lib/mongodb');
    const limiterPath = require.resolve('../lib/distributed-rate-limit');
    const commentsPath = require.resolve('../api/comments');
    const chatPath = require.resolve('../api/chat');
    const priorDb = require.cache[dbPath];
    const priorLimiter = require.cache[limiterPath];
    require.cache[dbPath] = { id: dbPath, filename: dbPath, loaded: true, exports: { connectToDatabase: async () => {} } };
    require.cache[limiterPath] = {
        id: limiterPath,
        filename: limiterPath,
        loaded: true,
        exports: {
            enforceRateLimit: async () => true,
            requestIdentity: (_req, userId) => `user:${userId}`
        }
    };
    delete require.cache[commentsPath];
    delete require.cache[chatPath];

    try {
        await run({ comments: require('../api/comments'), chat: require('../api/chat') });
    } finally {
        delete require.cache[commentsPath];
        delete require.cache[chatPath];
        if (priorDb) require.cache[dbPath] = priorDb; else delete require.cache[dbPath];
        if (priorLimiter) require.cache[limiterPath] = priorLimiter; else delete require.cache[limiterPath];
    }
}

test('chat and comment votes reach the database through real Mongoose pipeline queries', async () => {
    const userId = '507f1f77bcf86cd799439011';
    const targetId = '507f1f77bcf86cd799439012';
    const token = auth.signToken({ userId, username: 'Rami' });
    await withHandlers(async ({ chat, comments }) => {
        for (const [model, handler, query, bodies] of [
            [ChatMessage, chat, {}, [{ voteType: 'up' }, { voteType: 'down' }, { voteType: 'clear' }]],
            [Comment, comments, { id: targetId }, [{ action: 'upvote' }, { action: 'downvote' }]]
        ]) {
            const original = model.collection.findOneAndUpdate;
            let calls = 0;
            model.collection.findOneAndUpdate = async (_filter, pipeline, options) => {
                calls += 1;
                assert.ok(Array.isArray(pipeline));
                assert.equal(options.returnDocument, 'after');
                // Return no selected vote to avoid an external notification in this test.
                return { _id: new mongoose.Types.ObjectId(targetId), upvotes: [], downvotes: [] };
            };
            try {
                for (const body of bodies) {
                    const res = response();
                    await handler({ method: 'PATCH', query, headers: { authorization: `Bearer ${token}` }, body: { messageId: targetId, ...body } }, res);
                    assert.equal(res.code, 200, JSON.stringify(res.body));
                    assert.equal(res.body.success, true);
                }
                assert.equal(calls, bodies.length);
            } finally {
                model.collection.findOneAndUpdate = original;
            }
        }
    });
});

test('comment and chat reads reject malformed or unbounded pagination before Mongo queries', async () => {
    await withHandlers(async ({ comments, chat }) => {
        for (const [handler, query] of [
            [comments, { limit: '1000' }],
            [comments, { limit: '1oops' }],
            [chat, { limit: '-1' }],
            [chat, { feed: 'true', skip: '10001' }],
            [chat, { before: 'not-a-date' }]
        ]) {
            const res = response();
            await handler({ method: 'GET', query, headers: {} }, res);
            assert.equal(res.code, 400, JSON.stringify({ query, body: res.body }));
        }
    });
});

test('comment and chat writes reject malformed content, booleans, and ids as client errors', async () => {
    await withHandlers(async ({ comments, chat }) => {
        const token = auth.signToken({ userId: '507f1f77bcf86cd799439011', username: 'Rami' });
        const headers = { authorization: `Bearer ${token}` };
        const cases = [
            [comments, { targetType: 'animal', animalName: 'Lion', content: 7 }],
            [comments, { targetType: 'animal', animalName: 'Lion', content: 'Hi', isAnonymous: 'false' }],
            [comments, { content: 'Reply', parentId: 'bad-id' }],
            [chat, { content: 7 }],
            [chat, { content: 'Reply', parentId: 'bad-id' }]
        ];
        for (const [handler, body] of cases) {
            const res = response();
            await handler({ method: 'POST', query: {}, headers, body }, res);
            assert.equal(res.code, 400, JSON.stringify({ body, response: res.body }));
        }
    });
});

test('new comment targets must resolve to canonical animals', async () => {
    const originalFindOne = Animal.findOne;
    const originalFindById = User.findById;
    Animal.findOne = () => ({ select: () => ({ lean: async () => null }) });
    User.findById = () => ({ select: async () => ({ displayName: 'Rami', profileAnimal: null }) });
    try {
        await withHandlers(async ({ comments }) => {
            const token = auth.signToken({ userId: '507f1f77bcf86cd799439011', username: 'Rami' });
            const res = response();
            await comments({
                method: 'POST',
                query: {},
                headers: { authorization: `Bearer ${token}` },
                body: { targetType: 'animal', animalName: 'Invented Beast', content: 'Test' }
            }, res);
            assert.equal(res.code, 400);
            assert.match(res.body.error, /unknown animal/i);
        });
    } finally {
        Animal.findOne = originalFindOne;
        User.findById = originalFindById;
    }
});

test('legacy chat records without an author fail deletion authorization safely', async () => {
    const originalMessageFind = ChatMessage.findById;
    const originalUserFind = User.findById;
    ChatMessage.findById = async () => ({ _id: '507f1f77bcf86cd799439012', authorId: null });
    User.findById = async () => ({ role: 'user' });

    try {
        await withHandlers(async ({ chat }) => {
            const token = auth.signToken({ userId: '507f1f77bcf86cd799439011', username: 'Rami' });
            const res = response();
            await chat({
                method: 'DELETE',
                query: { messageId: '507f1f77bcf86cd799439012' },
                headers: { authorization: `Bearer ${token}` }
            }, res);

            assert.equal(res.code, 403);
            assert.match(res.body.error, /not authorized/i);
        });
    } finally {
        ChatMessage.findById = originalMessageFind;
        User.findById = originalUserFind;
    }
});
