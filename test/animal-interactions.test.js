'use strict';
const test = require('node:test');
const assert = require('node:assert/strict');
process.env.JWT_SECRET ||= 'test-secret-that-is-long-enough-for-hmac-verification';
const mongoose = require('mongoose');
const { animalId } = require('../lib/animal-identity');
const { listAnimals, findAnimal } = require('../lib/canonical-animals');
const legacy = require('../data/legacy-animal-stats.json');
const Vote = require('../lib/models/Vote');
const XpClaim = require('../lib/models/XpClaim');
const Comment = require('../lib/models/Comment');
const Animal = require('../lib/models/Animal');
const User = require('../lib/models/User');
const { signToken } = require('../lib/auth');
for (const [name, exports] of Object.entries({ mongodb: { connectToDatabase: async()=>{} }, 'distributed-rate-limit': { enforceRateLimit: async()=>true, requestIdentity:()=> 'test' }, discord: { notifyDiscord:async()=>{} }, rewards: { awardUserReward:async()=>({awarded:false}) } })) {
    const id=require.resolve(`../lib/${name}`); require.cache[id]={id,filename:id,loaded:true,exports};
}
const votes = require('../api/votes');
const comments = require('../api/comments');
const token=signToken({ userId:'507f1f77bcf86cd799439011', username:'Preview' });
const req=(body,query={},method='POST')=>({method,query,body,headers:{authorization:`Bearer ${token}`}});
const res=()=>({setHeader(){},getHeader(){},status(n){this.code=n;return this;},json(b){this.body=b;return this;}});
const chain=(data)=>({sort(){return this;},limit(){return this;},select(){return this;},lean:async()=>data});

test('all animals have unique stable Mongo IDs; every historical ID stays unchanged',()=>{
    const animals=listAnimals();
    assert.equal(new Set(animals.map(a=>a._id)).size,animals.length);
    for(const a of animals){assert.ok(mongoose.isValidObjectId(a._id),a.name);assert.equal(findAnimal(a._id).name,a.name);}
    for(const a of legacy.filter(a=>a._id)) assert.equal(findAnimal(a.name)._id,a._id);
    assert.equal(animalId({name:'Aardvark',slug:'aardvark'}),findAnimal('aardvark')._id);
});

test('the full roster can be voted on and discussed without legacy Mongo animal documents',async()=>{
    Animal.findById=Animal.findOne=()=>{throw Error('Do not query the old catalogue');};
    Vote.findOne=()=>chain(null); Vote.findOneAndUpdate=async()=>({});
    Vote.getVoteCounts=async()=>({upvotes:1,downvotes:0,score:1});
    XpClaim.findOne=async()=>({rewardStatus:'applied'});
    User.findById=()=>({select:async()=>({username:'Preview'})});
    let written;
    Comment.create=async(data)=>{written=data;return {...data,_id:'507f1f77bcf86cd799439099'};};
    for(const a of listAnimals()) {
        const v=res(); await votes(req({animalId:a._id,voteType:'up'}),v); assert.equal(v.code,200,a.name);
        const c=res(); await comments(req({targetType:'animal',animalName:a.name,content:'A test comment',isAnonymous:true}),c);
        assert.equal(c.code,201,a.name);assert.equal(written.animalId,a._id);assert.equal(c.body.data.authorUsername,'Anonymous');assert.equal(c.body.data.profileAnimal,null);
    }
    const c=res();await comments(req({targetType:'comparison',comparisonKey:'Aardvark vs African Lion',content:'A matchup'}),c);assert.equal(c.code,201);
    const unknown=res();await votes(req({animalId:'ffffffffffffffffffffffff',voteType:'up'}),unknown);assert.equal(unknown.code,404);
});

test('thread reads keep an old root, direct replies and nested replies together without author identity leaks',async()=>{
    const root='507f1f77bcf86cd799439090', child='507f1f77bcf86cd799439091', nested='507f1f77bcf86cd799439092';
    const records=[{_id:root,parentId:null,content:'Old root',isAnonymous:true,authorUsername:'Private'}, {_id:child,parentId:root,content:'Reply'}, {_id:nested,parentId:child,content:'Nested reply'}];
    Comment.find=(q)=>chain(q._id?records.filter(r=>r._id===q._id):records.filter(r=>q.parentId?.$in?.includes(r.parentId)));
    User.find=()=>chain([]);
    const response=res();await comments(req({}, {thread:root,limit:'1'},'GET'),response);
    assert.equal(response.code,200);assert.equal(response.body.data[0].replies[0].replies[0].content,'Nested reply');
    assert.doesNotMatch(JSON.stringify(response.body),/Private/);
    const missing=res();await comments(req({}, {thread:'507f1f77bcf86cd799439093'},'GET'),missing);assert.equal(missing.code,404);
});

test('Arena anonymous posting persists the flag and never exposes the profile publicly',async()=>{
    const ChatMessage=require('../lib/models/ChatMessage');
    const chat=require('../api/chat');
    User.findById=()=>({select:async()=>({username:'Preview',profileAnimal:'African Lion'})});
    let saved;
    ChatMessage.create=async(data)=>{saved=new ChatMessage(data);return saved;};
    const response=res();await chat(req({content:'Anonymous arena post',isAnonymous:true}),response);
    assert.equal(response.code,201);assert.equal(saved.isAnonymous,true);assert.equal(response.body.data.authorUsername,'Anonymous');assert.equal(response.body.data.profileAnimal,null);
    const invalid=res();await chat(req({content:'Bad flag',isAnonymous:'true'}),invalid);assert.equal(invalid.code,400);
});
