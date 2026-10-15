'use strict';
const test=require('node:test');
const assert=require('node:assert/strict');
const {welcomeProfileEconomy,ensureProfileCard}=require('../lib/profile-card');
const User=require('../lib/models/User');
const {cardFor}=require('../lib/collection');

test('welcome card preserves existing cards, starter choice and economy and is granted once',()=>{
    const original={starter:'harpy-eagle',pass:{xp:50},cards:{'harpy-eagle':{at:12,from:'starter'}}};
    const gifted=welcomeProfileEconomy(original,'African Lion');
    assert.equal(gifted.cards['african-lion'].from,'welcome');assert.equal(gifted.starter,'harpy-eagle');assert.equal(gifted.pass.xp,50);
    assert.equal(original.cards['african-lion'],undefined);
    assert.deepEqual(welcomeProfileEconomy(gifted,'Aardvark'),gifted);
    const owned=welcomeProfileEconomy(original,'Harpy Eagle');assert.deepEqual(owned.cards['harpy-eagle'],original.cards['harpy-eagle']);
});
test('new password and provider accounts own their automatically assigned profile animal',async()=>{
    for(const provider of [null,'google','roblox','github']) {
        const user=new User({username:'Preview',email:'preview@example.invalid',...(provider?{authProviders:[{provider,providerUserId:'123'}]}:{password:'password123'})});
        await user.validate();
        assert.equal(user.economy.cards[cardFor(user.profileAnimal).slug].from,'welcome');
        assert.equal(user.economy.profileGift,cardFor(user.profileAnimal).slug);
    }
});
test('legacy upgrade reaches Mongo as a conditional merge pipeline and keeps fresh save state',async()=>{
    const original={updateOne:User.collection.updateOne,findById:User.findById};
    const user=User.hydrate({_id:'507f1f77bcf86cd799439011',profileAnimal:'African Lion'});
    let writes=0;
    User.collection.updateOne=async(filter,pipeline)=>{
        writes++;assert.deepEqual(filter['economy.profileGift'],{$exists:false});assert.equal(filter.$or[0].profileAnimal,'African Lion');
        assert.ok(Array.isArray(pipeline));assert.ok(pipeline[0].$set.economy.$mergeObjects);return {modifiedCount:1};
    };
    User.findById=()=>({select:()=>({lean:async()=>({profileAnimal:'African Lion',economy:{profileGift:'african-lion',pass:{xp:99},cards:{'african-lion':{at:1,from:'welcome'},aardvark:{at:2,from:'daily'}}}})})});
    try {await ensureProfileCard(User,user);assert.equal(user.economy.pass.xp,99);assert.ok(user.economy.cards.aardvark);assert.equal(user.isModified('economy'),false);await ensureProfileCard(User,user);assert.equal(writes,1);}
    finally {User.collection.updateOne=original.updateOne;User.findById=original.findById;}
});
