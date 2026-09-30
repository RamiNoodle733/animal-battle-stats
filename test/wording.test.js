'use strict';

// Owner wording rules (lib/wording.js): no mythology, other religions' gods or
// shirk and superstition in anything the site says. Species names, places,
// scientific names and source titles and links are names of real things and
// are not checked here.

const test = require('node:test');
const assert = require('node:assert/strict');

const { CLASS_RENAMES, cleanText } = require('../lib/wording');
const { ITEM_BY_ID } = require('../lib/economy');
const roster = require('../animal_stats.json');
const profiles = require('../data/animal-profiles.json').animals;

const BANNED = /\b(titan(?! beetle)|titanic|juggernaut\w*|colossus|oracle\w*|olympi\w*|zeus|poseidon|hades|kraken|medusa\w*|myth\w*|magic\w*|mage|bard|berserker\w*|demons?|deit(?:y|ies)|divine|gods?|goddess\w*|totem\w*|luck\w*|spirits?|ghost\w*|aurora|fate)\b/i;
// Keys holding names of real things or references.
const SKIP = new Set(['url', 'title', 'scientificName', 'scientific_name', 'sourceFile', 'contentHash', 'image', 'imageLead', 'name']);

function strings(value, key = '', out = []) {
    if (SKIP.has(key)) return out;
    if (typeof value === 'string') out.push(value);
    else if (Array.isArray(value)) value.forEach((item) => strings(item, '', out));
    else if (value && typeof value === 'object') for (const [childKey, child] of Object.entries(value)) strings(child, childKey, out);
    return out;
}

test('no archetype label uses mythology or magic', () => {
    const bad = roster.filter((animal) => Object.hasOwn(CLASS_RENAMES, animal.class) || BANNED.test(animal.class || ''));
    assert.deepEqual(bad.map((animal) => `${animal.name}: ${animal.class}`), []);
});

test('roster text is clean', () => {
    const bad = [];
    for (const animal of roster) {
        for (const text of strings(animal)) {
            const match = text.match(BANNED);
            if (match) bad.push(`${animal.name}: "${match[0]}" in ${text.slice(0, 80)}`);
        }
    }
    assert.deepEqual(bad, []);
});

test('research profiles are clean', () => {
    const bad = [];
    for (const [slug, profile] of Object.entries(profiles)) {
        for (const text of strings(profile)) {
            const match = text.match(BANNED);
            if (match) bad.push(`${slug}: "${match[0]}" in ${text.slice(0, 80)}`);
        }
    }
    assert.deepEqual(bad, []);
});

test('reward and shop item names are clean', () => {
    const bad = [...ITEM_BY_ID.values()].filter((item) => BANNED.test(`${item.name} ${item.desc || ''}`.replace(/Northern lights/i, '')));
    assert.deepEqual(bad.map((item) => item.name), []);
});

test('cleanText rewrites mythology phrasing and keeps sentences readable', () => {
    assert.equal(cleanText('It is not a magical damage bonus.'), 'It is not an unrealistic damage bonus.');
    assert.equal(cleanText('Chimpanzees suffer from a persistent myth.'), 'Chimpanzees suffer from a persistent misconception.');
    assert.equal(cleanText('The elephant seal is a titan built for endurance.'), 'The elephant seal is a heavyweight built for endurance.');
    assert.equal(cleanText('The titan beetle is huge.'), 'The titan beetle is huge.');
    assert.equal(cleanText('Aquatic nymphs hunt.', 'dragonfly'), 'Aquatic larvae hunt.');
});
