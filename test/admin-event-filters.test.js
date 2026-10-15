'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
process.env.JWT_SECRET ||= 'test-secret-that-is-long-enough-for-hmac-verification';
const dbPath = require.resolve('../lib/mongodb');
require.cache[dbPath] = { id: dbPath, filename: dbPath, loaded: true, exports: { connectToDatabase: async () => {} } };
const handler = require('../api/community');
const User = require('../lib/models/User');
const SiteActivity = require('../lib/models/SiteActivity');
const { signToken } = require('../lib/auth');
const token = signToken({ userId: '64b7f0c2a1b2c3d4e5f60718', username: 'RamiNoodle733' }, { expiresIn: 60 });
function response() {
    return { statusCode: 200, setHeader() {}, getHeader() { return undefined; }, status(code) { this.statusCode = code; return this; }, json(body) { this.body = body; return this; } };
}
async function withModels(run) {
    const original = { findById: User.findById, find: SiteActivity.find, countDocuments: SiteActivity.countDocuments };
    let finds = []; let counts = [];
    User.findById = () => ({ select: () => ({ lean: async () => ({ role: 'admin', username: 'RamiNoodle733' }) }) });
    SiteActivity.find = (query) => { finds.push(structuredClone(query)); return { sort: () => ({ limit: () => ({ select: () => ({ lean: async () => [] }) }) }) }; };
    SiteActivity.countDocuments = async (query) => { counts.push(structuredClone(query)); return 123; };
    try { await run({ finds, counts }); } finally { User.findById = original.findById; SiteActivity.find = original.find; SiteActivity.countDocuments = original.countDocuments; }
}
const request = (query) => ({ method: 'GET', query: { action: 'admin-analytics', ...query }, headers: { authorization: `Bearer ${token}` } });
test('owner-only event filters reach the database and pagination does not change totals', () => withModels(async ({ finds, counts }) => {
    const res = response();
    await handler(request({ hideMe: '1', exclude: 'Other', country: 'us', region:'TX', city:'Houston', audience:'accounts', account:'Alice', from: '2026-10-01', to: '2026-10-12' }), res);
    assert.equal(res.statusCode, 200);
    assert.equal(res.body.data.total, 123);
    assert.deepEqual(finds[0], counts[0]);
    assert.equal(finds[0].country, 'US');
    assert.equal(finds[0].region.$regex,'^TX$');assert.equal(finds[0].city.$regex,'^Houston$');assert.equal(finds[0].$and[1].username.$regex,'^Alice$');
    assert.equal(finds[0].$nor[1].username.$regex, '^raminoodle733$');
    const next = response();
    await handler(request({ cursor: '64b7f0c2a1b2c3d4e5f60719', hideMe: '1' }), next);
    assert.equal(counts.length, 1);
    assert.ok(finds[1]._id.$lt);
}));
test('dropdown choices are owner-only and state and city facets respect location dependencies',()=>withModels(async()=>{
    const original=SiteActivity.aggregate;let pipeline;
    SiteActivity.aggregate=async(p)=>{pipeline=p;return [{countries:[{_id:'US',count:50}],accounts:[{_id:'Alice',count:10}]}];};
    try {
        const res=response();await handler(request({options:'1',country:'US',region:'TX'}),res);assert.equal(res.statusCode,200);assert.equal(res.body.data.options.accounts[0]._id,'Alice');
        assert.equal(pipeline[0].$facet.cities[0].$match.country,'US');assert.equal(pipeline[0].$facet.cities[0].$match.region.$regex,'^TX$');
        User.findById=()=>({select:()=>({lean:async()=>({role:'user'})})});
        const denied=response();await handler(request({options:'1'}),denied);assert.equal(denied.statusCode,403);
        const guest=response();await handler({method:'GET',query:{action:'admin-analytics',options:'1'},headers:{}},guest);assert.equal(guest.statusCode,401);
    } finally {SiteActivity.aggregate=original;}
}));
test('invalid view filters return a useful error before querying activity', () => withModels(async ({ finds }) => {
    const res = response();
    await handler(request({ exclude: '.*' }), res);
    assert.equal(res.statusCode, 400);
    assert.match(res.body.error, /valid account names/);
    assert.equal(finds.length, 0);
}));
test('event queries remain unavailable to guests and regular players', () => withModels(async ({ finds }) => {
    const guest = response();
    await handler({ method: 'GET', query: { action: 'admin-analytics' }, headers: {} }, guest);
    assert.equal(guest.statusCode, 401);
    User.findById = () => ({ select: () => ({ lean: async () => ({ role: 'user', username: 'Other' }) }) });
    const player = response();
    await handler(request({ hideMe: '1' }), player);
    assert.equal(player.statusCode, 403);
    assert.equal(finds.length, 0);
}));
