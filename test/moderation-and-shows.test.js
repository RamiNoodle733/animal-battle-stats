'use strict';

// The owner's name rules (config/moderation.json), the owner account check and
// the ABS Originals watch rewards.

const test = require('node:test');
const assert = require('node:assert/strict');

const { findBlockedName, maskBlockedTerms, publicName, validatePublicName } = require('../lib/moderation');
const { EPISODES, SHOWS, minWatchSeconds } = require('../lib/shows');
const { ACTIONS, ITEM_BY_ID, earnedItems, normalizeEconomy } = require('../lib/economy');
const roster = require('../animal_stats.json');

test('names with swearing, sexual, LGBT, shirk, slur and vice words are refused', () => {
    const blocked = ['gayman', 'GayLion', 'sexking', 'S3xy_Bear', 'fuckyou', 'FuUuUck', 'BigAssLion', 'a55hole', 'b1tch', 'LionGod', 'liongod', 'GodOfWar',
        'allahuakbar', 'Jesus2', 'satan666', 'p0rnhub', 'nudes4u', 'hornylion', 'lesbianlion', 'trans_lion', 'LGBTQ', 'femboy', 'n1gger', 'hitler',
        'weedsmoker', 'drunkbear', 'casino', 'DickHead', 'whore', 's_e_x', 'f.u.c.k', 'BetKing'];
    for (const name of blocked) assert.equal(validatePublicName(name).valid, false, name);
});

test('innocent names and every animal on the site are allowed', () => {
    const allowed = ['RamiNoodle733', 'LionKing99', 'Classic_Gamer', 'Assassin', 'GrassHopper', 'GoodBoy', 'Godzilla2000', 'Essex_Lion', 'SeaweedFan', 'Therapist',
        'Raccoon_Fan', 'Cockatoo', 'Peacock', 'TwinkleToes', 'Shades', 'Ashton', 'Entity', 'Hello', 'Mississippi', 'Grapes', 'Torpedo', 'Butterfly', 'Nazir',
        'Analysis', 'Cucumber', 'MobyDick99', 'Badminton', 'Homosapiens', 'Muhammad', 'Abdullah', 'Christopher', 'Author', 'PrideOfLions', 'Maine_Coon', 'Titan'];
    for (const name of allowed) assert.equal(findBlockedName(name), null, name);
    for (const animal of roster) {
        assert.equal(validatePublicName(animal.name).valid, true, animal.name);
        assert.equal(validatePublicName(animal.name.replace(/[^A-Za-z]/g, '')).valid, true, animal.name);
    }
});

test('reserved names are only refused for new names', () => {
    assert.equal(validatePublicName('SiteAdmin').valid, true);
    assert.equal(validatePublicName('SiteAdmin', { newName: true }).valid, false);
    assert.equal(validatePublicName('RamiNoodle_real', { newName: true }).valid, false);
});

test('chat text masks bad words but not innocent ones', () => {
    const masked = maskBlockedTerms('what the fuck, that is shit and sex. The grapes in Essex are classic; the cockatoo and raccoon. Oh my god, I bet the lion wins.');
    assert.doesNotMatch(masked, /fuck|shit|\bsex\b/i);
    for (const word of ['grapes', 'Essex', 'classic', 'cockatoo', 'raccoon', 'god', 'bet']) assert.match(masked, new RegExp(word));
});

test('hidden names show as Player plus the last four characters of the id', () => {
    assert.equal(publicName({ _id: 'abcdef0123456789abcd1234', username: 'gayman' }), 'Player 1234');
    assert.equal(publicName({ _id: 'abcdef0123456789abcd1234', username: 'Lion', requiresUsernameChange: true }), 'Player 1234');
    assert.equal(publicName({ _id: 'abcdef0123456789abcd1234', username: 'Lion', displayName: 'Leo' }), 'Leo');
});

test('the owner account is recognised by username and creation time only', () => {
    process.env.JWT_SECRET ||= 'test';
    const { isOwnerAccount } = require('../lib/admin');
    assert.equal(isOwnerAccount({ username: 'RamiNoodle733', createdAt: new Date('2025-12-03T04:21:20.083Z') }), true);
    assert.equal(isOwnerAccount({ username: 'RamiNoodle733', createdAt: new Date('2025-12-03T04:21:21.000Z') }), false);
    assert.equal(isOwnerAccount({ username: 'someone', createdAt: new Date('2025-12-03T04:21:20.083Z') }), false);
});

test('every episode can pay a watch reward, and finishing a show earns its title', () => {
    assert.ok(EPISODES.length >= 26);
    assert.ok(ACTIONS.episode_watch && ACTIONS.social_follow);
    for (const episode of EPISODES) assert.ok(minWatchSeconds(episode) >= 20 && minWatchSeconds(episode) < episode.seconds, episode.id);
    const breakout = SHOWS.find((show) => show.slug === 'breakout');
    const eco = normalizeEconomy({ watched: EPISODES.filter((episode) => episode.show === 'breakout').map((episode) => episode.id) });
    assert.equal(eco.watched.length, breakout.episodes);
    const earned = earnedItems(eco);
    assert.ok(earned.includes('title_show_breakout'));
    assert.ok(!earned.includes('frame_originals'));
    const all = earnedItems(normalizeEconomy({ watched: EPISODES.map((episode) => episode.id), follows: ['youtube', 'tiktok', 'x'] }));
    assert.ok(all.includes('frame_originals') && all.includes('title_insider'));
    assert.ok(ITEM_BY_ID.get('frame_originals'));
    assert.deepEqual(normalizeEconomy({ watched: ['not-an-episode'], follows: ['myspace'] }).watched, []);
});

test('group fights: numbers help, equal groups stay even, tiny animals get less from numbers', () => {
    const engine = require('../js/battle-engine');
    const find = (name) => roster.find((animal) => animal.name === name);
    const gorilla = find('Gorilla');
    const ant = find('Army Ant');
    const lion = find('African Lion');
    const tiger = find('Siberian Tiger');
    const odds = (a, b, na, nb) => engine.compareGroups(a, b, na, nb, a.weight_kg, b.weight_kg).probability;
    assert.equal(odds(lion, tiger, 1, 1), engine.compare(lion, tiger).probability);
    assert.ok(Math.abs(odds(lion, lion, 3, 3) - 0.5) < 1e-9);
    assert.ok(odds(lion, tiger, 2, 1) > odds(lion, tiger, 1, 1));
    assert.ok(odds(gorilla, ant, 500, 23) > 0.98);
    assert.ok(odds(gorilla, ant, 1, 1000) > 0.7, 'a thousand ants still lose to a gorilla');
    assert.ok(odds(gorilla, ant, 1, 1000000) < odds(gorilla, ant, 1, 1000));
    const p = odds(gorilla, ant, 1, 1000000);
    assert.ok(p >= 0.01 && p <= 0.99);
});
