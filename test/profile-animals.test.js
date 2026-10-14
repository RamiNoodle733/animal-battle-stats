'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
process.env.JWT_SECRET ||= 'test-secret-that-is-long-enough-for-hmac-verification';
const { listAnimals } = require('../lib/canonical-animals');
const { STARTER_ANIMALS, randomProfileAnimal, canonicalProfileAnimal } = require('../lib/profile-animals');
const User = require('../lib/models/User');
const Animal = require('../lib/models/Animal');
const { signToken } = require('../lib/auth');
const dbPath = require.resolve('../lib/mongodb');
require.cache[dbPath] = { id: dbPath, filename: dbPath, loaded: true, exports: { connectToDatabase: async () => {} } };
const handler = require('../api/auth');
const token = signToken({ userId: '64b7f0c2a1b2c3d4e5f60718', username: 'Preview' }, { expiresIn: 60 });
const req = (action, body = {}, method = 'POST') => ({ method, query: { action }, body, headers: { host: 'animalbattlestats.com', origin: 'https://animalbattlestats.com', authorization: `Bearer ${token}` } });
const res = () => ({ headers: {}, statusCode: 200, setHeader(k,v) { this.headers[k.toLowerCase()] = v; }, getHeader(k) { return this.headers[k.toLowerCase()]; }, status(n) { this.statusCode=n; return this; }, json(body) { this.body=body; return this; } });

test('all current roster names and slugs are valid profile animals', () => {
    for (const animal of listAnimals()) {
        assert.equal(canonicalProfileAnimal(` ${animal.name.toLowerCase()} `), animal.name);
        assert.equal(canonicalProfileAnimal(animal.slug), animal.name);
    }
    assert.equal(canonicalProfileAnimal('invented animal'), null);
});
test('automatic avatars exclude pigs and boar relatives and preserve explicit choices', () => {
    const names = new Set(STARTER_ANIMALS.map(a=>a.name));
    assert.ok(names.size > 100);
    assert.ok(STARTER_ANIMALS.every(a=>!/pig|boar|warthog|peccary/i.test(a.name)));
    for (let i=0;i<100;i++) assert.ok(names.has(randomProfileAnimal()));
    const account = new User({ username:'Preview', email:'preview@example.invalid', password:'testpassword' });
    assert.ok(names.has(account.profileAnimal));
    assert.equal(new User({ profileAnimal: 'African Lion' }).profileAnimal, 'African Lion');
});
test('profile updates validate against the current catalogue without a legacy database lookup', async () => {
    const old = { user: User.findById, animal: Animal.findOne };
    const user = new User({ username:'Preview', email:'preview@example.invalid', password:'testpassword' });
    user.save = async () => user;
    User.findById = async () => user;
    Animal.findOne = () => { throw new Error('Legacy catalogue must not be queried'); };
    try {
        for (const animal of listAnimals()) {
            const response = res();
            await handler(req('profile', { profileAnimal: animal.name }, 'PUT'), response);
            assert.equal(response.statusCode, 200, animal.name);
            assert.equal(user.profileAnimal, animal.name);
        }
        const response = res();
        await handler(req('profile', { profileAnimal:'invented animal' }, 'PUT'), response);
        assert.equal(response.statusCode, 400);
    } finally { User.findById=old.user; Animal.findOne=old.animal; }
});
test('avatar backfill is admin-only and uses atomic missing-avatar conditions', async () => {
    const old = { findById:User.findById, find:User.find, bulkWrite:User.bulkWrite, countDocuments:User.countDocuments };
    let role='user'; let operations=[];
    User.findById = () => ({ select: async () => ({ role }) });
    User.find = () => ({ select: () => ({ limit: () => ({ lean:async()=>[{_id:'one'},{_id:'two'}] }) }) });
    User.bulkWrite = async (ops) => { operations=ops; return { modifiedCount:2 }; };
    User.countDocuments = async () => 0;
    try {
        const denied=res(); await handler(req('assign-profile-animals'),denied);
        assert.equal(denied.statusCode,403); assert.equal(operations.length,0);
        role='admin'; const allowed=res(); await handler(req('assign-profile-animals'),allowed);
        assert.equal(allowed.statusCode,200); assert.deepEqual(allowed.body.data,{assigned:2,remaining:0});
        assert.equal(operations.length,2);
        for (const op of operations) { assert.equal(op.updateOne.filter.profileAnimal,null); assert.ok(canonicalProfileAnimal(op.updateOne.update.$set.profileAnimal)); }
        User.find = () => ({ select: () => ({ limit: () => ({ lean:async()=>[] }) }) });
        const repeated=res(); await handler(req('assign-profile-animals'),repeated);
        assert.deepEqual(repeated.body.data,{assigned:0,remaining:0});
    } finally { Object.assign(User,old); }
});
