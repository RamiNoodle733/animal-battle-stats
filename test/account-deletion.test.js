'use strict';

// Deleting your own account: what goes (lib/account-deletion.js) and who may do it (api/auth.js).

const test = require('node:test');
const assert = require('node:assert/strict');

process.env.JWT_SECRET ||= 'test-secret-that-is-long-enough-for-hmac-verification';

const mongoose = require('mongoose');
const User = require('../lib/models/User');
const { signToken } = require('../lib/auth');

const MODELS = ['User', 'Vote', 'XpClaim', 'RewardClaim', 'MatchupVoteBallot', 'TournamentSubmission', 'Comment', 'ChatMessage', 'Presence', 'SiteActivity'];

function response() {
    return {
        headers: {},
        statusCode: 200,
        setHeader(name, value) { this.headers[name.toLowerCase()] = value; },
        getHeader(name) { return this.headers[name.toLowerCase()]; },
        status(code) { this.statusCode = code; return this; },
        json(body) { this.body = body; return this; },
        end() { return this; }
    };
}

function stub(modulePath, exports) {
    const resolved = require.resolve(modulePath);
    const prior = require.cache[resolved];
    require.cache[resolved] = { id: resolved, filename: resolved, loaded: true, exports };
    return () => {
        if (prior) require.cache[resolved] = prior;
        else delete require.cache[resolved];
    };
}

test('deleting an account removes its data, the replies under its posts and its votes on others, then the account', async () => {
    const userId = new mongoose.Types.ObjectId();
    const ownComment = new mongoose.Types.ObjectId();
    const replyToIt = new mongoose.Types.ObjectId();
    const ownMessage = new mongoose.Types.ObjectId();
    const calls = [];
    const models = Object.fromEntries(MODELS.map((name) => [name, require(`../lib/models/${name}`)]));
    const OPS = ['find', 'findById', 'deleteMany', 'deleteOne', 'updateMany'];
    // Each model's own overrides before the test (none, normally): restored, or removed, afterwards.
    const saved = MODELS.flatMap((name) => OPS.map((op) => [name, op, Object.prototype.hasOwnProperty.call(models[name], op) ? models[name][op] : undefined]));
    const record = (name, op) => async (...args) => {
        calls.push([name, op, ...args]);
        if (op === 'find' && name === 'Comment') return args[0].authorId ? [{ _id: ownComment }] : args[0].parentId.$in.some((id) => String(id) === String(ownComment)) ? [{ _id: replyToIt }] : [];
        if (op === 'find' && name === 'ChatMessage') return args[0].authorId ? [{ _id: ownMessage }] : [];
        if (op === 'find') return [];
        return { deletedCount: 1 };
    };
    for (const name of MODELS) for (const op of OPS.filter((op) => op !== 'findById')) models[name][op] = record(name, op);
    models.User.findById = async (id) => (String(id) === String(userId) ? { _id: userId, username: 'tiger_fan' } : null);
    try {
        delete require.cache[require.resolve('../lib/account-deletion')];
        const { deleteAccount } = require('../lib/account-deletion');
        const result = await deleteAccount(userId);
        assert.equal(result.username, 'tiger_fan');

        const deleted = (name) => calls.filter(([model, op]) => model === name && op.startsWith('delete')).map(([, , filter]) => filter);
        assert.deepEqual(deleted('Comment')[0]._id.$in.map(String), [String(ownComment), String(replyToIt)], 'own comment and the reply under it');
        assert.deepEqual(deleted('ChatMessage')[0]._id.$in.map(String), [String(ownMessage)]);
        assert.equal(String(deleted('Vote')[0].votedBy), String(userId));
        for (const name of ['MatchupVoteBallot', 'XpClaim', 'RewardClaim', 'TournamentSubmission']) assert.equal(String(deleted(name)[0].userId), String(userId), name);
        assert.equal(deleted('SiteActivity')[0].username, 'tiger_fan', 'their visit records');
        assert.equal(deleted('Presence')[0].$or[0]._id, `user:${userId}`);
        const updates = calls.filter(([, op]) => op === 'updateMany');
        assert.deepEqual(updates.map(([name]) => name).sort(), ['ChatMessage', 'Comment'], 'their votes on other posts are taken back');
        assert.ok(updates.every(([, , , , options]) => options.updatePipeline), 'pipeline updates are allowed explicitly');
        const last = calls.at(-1);
        assert.deepEqual([last[0], last[1], String(last[2]._id)], ['User', 'deleteOne', String(userId)], 'the account goes last, so a failed run can be repeated');

        assert.equal(await deleteAccount(new mongoose.Types.ObjectId()), null, 'nothing to do for an unknown account');
    } finally {
        for (const [name, op, original] of saved) {
            if (original === undefined) delete models[name][op];
            else models[name][op] = original;
        }
        delete require.cache[require.resolve('../lib/account-deletion')];
    }
});

async function withApi(run) {
    const deletedIds = [];
    const restores = [
        stub('../lib/mongodb', { connectToDatabase: async () => {} }),
        stub('../lib/discord', { notifyDiscord: async () => {} }),
        stub('../lib/distributed-rate-limit', { ...require('../lib/distributed-rate-limit'), consumeRateLimit: async () => ({ allowed: true }) }),
        stub('../lib/account-deletion', { deleteAccount: async (id) => { deletedIds.push(String(id)); return { username: 'x', removed: {} }; } })
    ];
    const apiPath = require.resolve('../api/auth');
    delete require.cache[apiPath];
    const originalFindById = User.findById;
    try {
        await run(require('../api/auth'), deletedIds);
    } finally {
        User.findById = originalFindById;
        delete require.cache[apiPath];
        restores.forEach((restore) => restore());
    }
}

async function callDelete(handler, user, body) {
    const res = response();
    const headers = user ? { authorization: `Bearer ${signToken({ userId: String(user._id), username: user.username }, { expiresIn: 60 })}` } : {};
    await handler({ method: 'POST', query: { action: 'delete-account' }, headers, body }, res);
    return res;
}

test('deleting an account needs a signed-in player and the password', () => withApi(async (handler, deletedIds) => {
    const player = new User({ username: 'zebra_fan', email: 'z@example.com', password: 'hashed' });
    player.comparePassword = async (candidate) => candidate === 'right-password';
    User.findById = () => ({ select: async () => player });

    assert.equal((await callDelete(handler, null, { password: 'right-password' })).statusCode, 401);
    const wrong = await callDelete(handler, player, { password: 'wrong' });
    assert.equal(wrong.statusCode, 400);
    assert.deepEqual(deletedIds, []);

    const ok = await callDelete(handler, player, { password: 'right-password' });
    assert.equal(ok.statusCode, 200);
    assert.deepEqual(deletedIds, [String(player._id)]);
    assert.match([].concat(ok.getHeader('Set-Cookie')).join(';'), /abs_auth_token=;/, 'signed out');
}));

test('an account without a password confirms with its username', () => withApi(async (handler, deletedIds) => {
    const robloxOnly = new User({ username: 'TigerKid_22', email: 'roblox-1@no-email.invalid', authProviders: [{ provider: 'roblox', providerUserId: '1' }] });
    User.findById = () => ({ select: async () => robloxOnly });
    assert.equal((await callDelete(handler, robloxOnly, { confirm: 'someone_else' })).statusCode, 400);
    assert.equal((await callDelete(handler, robloxOnly, { confirm: ' tigerkid_22 ' })).statusCode, 200);
    assert.deepEqual(deletedIds, [String(robloxOnly._id)]);
}));

test("the owner's account can't be deleted this way", () => withApi(async (handler, deletedIds) => {
    const owner = new User({ username: 'raminoodle733', email: 'owner@example.com', password: 'hashed' });
    owner.createdAt = new Date('2025-12-03T04:21:20.083Z');
    owner.comparePassword = async () => true;
    User.findById = () => ({ select: async () => owner });
    const res = await callDelete(handler, owner, { password: 'anything' });
    assert.equal(res.statusCode, 403);
    assert.deepEqual(deletedIds, []);
}));

test('the profile says whether the account has a password, never the hash', () => withApi(async (handler) => {
    for (const [player, expected] of [
        [new User({ username: 'zebra_fan', email: 'z@example.com', password: '$2a$10$abcdefghijklmnopqrstuv' }), true],
        [new User({ username: 'TigerKid_22', email: 'roblox-1@no-email.invalid', authProviders: [{ provider: 'roblox', providerUserId: '1' }] }), false]
    ]) {
        User.findById = () => ({ select: async (fields) => { assert.equal(fields, '+password'); return player; } });
        const res = response();
        const token = signToken({ userId: String(player._id), username: player.username }, { expiresIn: 60 });
        await handler({ method: 'GET', query: { action: 'profile' }, headers: { authorization: `Bearer ${token}` } }, res);
        assert.equal(res.statusCode, 200);
        assert.equal(res.body.data.user.hasPassword, expected, player.username);
        assert.equal(JSON.stringify(res.body).includes('$2a$'), false, 'never the hash');
    }
}));
