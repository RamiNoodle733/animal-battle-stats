'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const read = (file) => fs.readFileSync(path.join(root, file), 'utf8');

test('correction intake requires identity, claim type, context, source metadata and attestation', () => {
    const form = read('.github/ISSUE_TEMPLATE/data-correction.yml');
    for (const id of ['animal', 'claim-type', 'field', 'current-value', 'proposed-correction', 'biological-context', 'source-url', 'source-title', 'source-publisher', 'source-date', 'rationale', 'attestation']) {
        assert.match(form, new RegExp(`id: ${id.replace('-', '\\-')}(?:\\r?\\n|$)`));
    }
    assert.match(form, /do not substitute zero for missing data/i);
    assert.match(form, /did not invent a citation, observation, or scientific certainty/i);
    assert.doesNotMatch(form, /0 if none/i);
});

test('every generated animal profile exposes the structured correction route', () => {
    const animals = JSON.parse(read('animal_stats.json'));
    assert.equal(animals.length, 225);
    for (const animal of animals) {
        const slug = animal.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        const html = read(`stats/${slug}.html`);
        assert.match(html, /github\.com\/RamiNoodle733\/animal-battle-stats\/issues\/new\?template=data-correction\.yml/);
    }
});
