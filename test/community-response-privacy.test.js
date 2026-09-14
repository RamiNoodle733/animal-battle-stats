'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

process.env.JWT_SECRET ||= 'test-secret-that-is-long-enough-for-hmac-verification';

const Comment = require('../lib/models/Comment');
const { serializeCommunityItem } = require('../lib/community-serializer');

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

test('community serialization exposes aggregate and viewer state without account or voter IDs', () => {
    const viewerId = '507f1f77bcf86cd799439011';
    const strangerId = '507f1f77bcf86cd799439012';
    const serialized = serializeCommunityItem({
        _id: '507f1f77bcf86cd799439099',
        authorId: viewerId,
        authorUsername: 'Rami',
        profileAnimal: 'Lion',
        content: 'hello',
        upvotes: [viewerId, strangerId],
        downvotes: [],
        replies: [{
            _id: '507f1f77bcf86cd799439098',
            authorId: strangerId,
            authorUsername: 'Guest',
            content: 'reply',
            upvotes: [],
            downvotes: [viewerId]
        }]
    }, { viewerId });

    assert.equal(serialized.upvoteCount, 2);
    assert.equal(serialized.downvoteCount, 0);
    assert.equal(serialized.score, 2);
    assert.equal(serialized.userVote, 'up');
    assert.equal(serialized.canDelete, true);
    assert.equal(serialized.replies[0].userVote, 'down');
    assert.equal(serialized.replies[0].canDelete, false);

    const json = JSON.stringify(serialized);
    assert.doesNotMatch(json, /authorId|upvotes|downvotes/);
    assert.doesNotMatch(json, new RegExp(strangerId));
});

test('anonymous community serialization removes profile linkage', () => {
    const serialized = serializeCommunityItem({
        _id: 'comment-id',
        authorId: 'account-id',
        authorUsername: 'Secret Name',
        profileAnimal: 'Lion',
        isAnonymous: true,
        content: 'anonymous post',
        upvotes: [],
        downvotes: []
    });

    assert.equal(serialized.authorUsername, 'Anonymous');
    assert.equal(serialized.profileAnimal, null);
    assert.doesNotMatch(JSON.stringify(serialized), /account-id|Secret Name|Lion/);
});

test('comments GET failures return a generic error without database details', async () => {
    const originalFind = Comment.find;
    const dbPath = require.resolve('../lib/mongodb');
    const apiPath = require.resolve('../api/comments');
    const priorDb = require.cache[dbPath];
    const originalConsoleError = console.error;
    require.cache[dbPath] = { id: dbPath, filename: dbPath, loaded: true, exports: { connectToDatabase: async () => {} } };
    Comment.find = () => { throw new Error('mongodb://private-host/sensitive-database'); };
    console.error = () => {};
    delete require.cache[apiPath];

    try {
        const handler = require('../api/comments');
        const res = response();
        await handler({ method: 'GET', query: {}, headers: {} }, res);
        assert.equal(res.code, 500);
        assert.deepEqual(res.body, { success: false, error: 'Failed to load comments' });
        assert.doesNotMatch(JSON.stringify(res.body), /mongodb|private-host|sensitive/);
    } finally {
        Comment.find = originalFind;
        console.error = originalConsoleError;
        delete require.cache[apiPath];
        if (priorDb) require.cache[dbPath] = priorDb;
        else delete require.cache[dbPath];
    }
});

test('public community clients and endpoints do not depend on leaked account IDs or voter arrays', () => {
    const root = path.resolve(__dirname, '..');
    const communityApi = fs.readFileSync(path.join(root, 'api/community.js'), 'utf8');
    const manager = fs.readFileSync(path.join(root, 'js/community-manager.js'), 'utf8');
    const rankings = fs.readFileSync(path.join(root, 'js/rankings.js'), 'utf8');

    assert.doesNotMatch(communityApi, /\bodId\s*:/);
    assert.doesNotMatch(manager, /authorId|data-user-id|\.upvotes\?\.|\.downvotes\?\./);
    assert.doesNotMatch(rankings, /comment\.authorId|data-user-id|comment\.upvotes\?\.|comment\.downvotes\?\./);
    assert.match(manager, /item\.userVote === 'up'/);
    assert.match(rankings, /comment\.canDelete === true/);
});
