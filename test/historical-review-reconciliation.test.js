'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

test('every numbered historical backend finding has an explicit current disposition', () => {
    const reconciliation = fs.readFileSync(
        path.join(__dirname, '..', 'docs', 'SECURITY_REVIEW_RECONCILIATION.md'),
        'utf8'
    );

    for (const [prefix, count] of [['L', 35], ['A', 60]]) {
        for (let issue = 1; issue <= count; issue += 1) {
            assert.match(reconciliation, new RegExp(`\\b${prefix}${issue}\\b`, 'u'), `${prefix}${issue} is not reconciled`);
        }
    }
    assert.doesNotMatch(reconciliation, /\| (?:critical|high) unresolved \|/iu);
});
