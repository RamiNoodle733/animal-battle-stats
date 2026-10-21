'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { publicProfileUrl } = require('../lib/player-profile');
const { serializeCommunityItem } = require('../lib/community-serializer');

test('profile links target the current login name rather than a display name', () => {
    assert.equal(publicProfileUrl({ username: 'RamiNoodle733', displayName: 'Rami' }), '/profile/RamiNoodle733');
    assert.equal(publicProfileUrl({ username: 'New_Name', displayName: 'A different name' }), '/profile/New_Name');
    assert.equal(publicProfileUrl(null), null);
    assert.equal(publicProfileUrl({ displayName: 'Deleted player' }), null);
});

test('moderated names cannot be recovered from public profile links', () => {
    assert.equal(publicProfileUrl({ username: 'Private_Name', requiresUsernameChange: true }), null);
    assert.equal(publicProfileUrl({ username: 'Test_Fuck_Name' }), null);
});

test('anonymous posts and nested replies never expose a profile link, including to moderators', () => {
    for (const canModerate of [false, true]) {
        const post = serializeCommunityItem({
            authorUsername: 'Rami', isAnonymous: true,
            profileUrl: '/profile/RamiNoodle733',
            replies: [{ authorUsername: 'Rami', isAnonymous: true, profileUrl: '/profile/RamiNoodle733' }]
        }, { canModerate, profileUrl: '/profile/RamiNoodle733' });
        assert.equal(post.profileUrl, null);
        assert.equal(post.replies[0].profileUrl, null);
        assert.doesNotMatch(JSON.stringify(post), /RamiNoodle733/);
    }
});

test('feed reserialization preserves a named reply link independently of an anonymous parent', () => {
    const reply = serializeCommunityItem({ authorUsername: 'Display Name' }, { profileUrl: '/profile/Actual_Name' });
    const post = serializeCommunityItem({ isAnonymous: true, replies: [reply] });
    assert.equal(post.profileUrl, null);
    assert.equal(post.replies[0].profileUrl, '/profile/Actual_Name');
    assert.equal(post.replies[0].authorUsername, 'Display Name');
});

test('private profile moderation data rejects guests and an ordinary account with a forged admin claim', async () => {
    process.env.JWT_SECRET ||= 'profile-permissions-test-secret-with-sufficient-length';
    const jwt = require('jsonwebtoken');
    const User = require('../lib/models/User');
    const dbPath = require.resolve('../lib/mongodb');
    const apiPath = require.resolve('../api/auth');
    const priorDb = require.cache[dbPath];
    const priorApi = require.cache[apiPath];
    const priorFindById = User.findById;
    const priorFind = User.find;
    let listed = false;
    User.findById = async () => ({ username: 'Ordinary_Player', role: 'user', createdAt: '2026-09-01T00:00:00Z' });
    User.find = () => { listed = true; throw new Error('Private players must not be queried'); };
    require.cache[dbPath] = { id: dbPath, filename: dbPath, loaded: true, exports: { connectToDatabase: async () => {} } };
    delete require.cache[apiPath];
    try {
        const handler = require('../api/auth');
        const token = jwt.sign({ userId: '507f1f77bcf86cd799439011', username: 'Ordinary_Player', role: 'admin' }, process.env.JWT_SECRET, { algorithm: 'HS256' });
        for (const [authorization, expected] of [[null, 401], [`Bearer ${token}`, 403]]) {
            const res = { headers: {}, setHeader(name, value) { this.headers[name] = value; }, getHeader(name) { return this.headers[name]; }, status(code) { this.code = code; return this; }, json(body) { this.body = body; return this; }, end() {} };
            await handler({ method: 'GET', query: { action: 'admin', op: 'users', q: 'Actual_Name' }, headers: authorization ? { authorization } : {} }, res);
            assert.equal(res.code, expected);
            assert.equal(res.body.success, false);
            assert.equal(listed, false);
        }
    } finally {
        User.findById = priorFindById;
        User.find = priorFind;
        delete require.cache[apiPath];
        if (priorApi) require.cache[apiPath] = priorApi;
        if (priorDb) require.cache[dbPath] = priorDb;
        else delete require.cache[dbPath];
    }
});
