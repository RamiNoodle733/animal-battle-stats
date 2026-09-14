'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
const { collectDescendantIds } = require('../lib/community-tree');

test('community deletion traversal includes every nested descendant once', async () => {
    const children = new Map([
        ['root', [{ _id: 'reply-a' }, { _id: 'reply-b' }]],
        ['reply-a', [{ _id: 'grandchild' }]],
        ['reply-b', [{ _id: 'grandchild' }]],
        ['grandchild', []]
    ]);
    const queried = [];
    const descendants = await collectDescendantIds('root', async (parents) => {
        queried.push([...parents]);
        return parents.flatMap((parent) => children.get(String(parent)) || []);
    });

    assert.deepEqual(descendants, ['reply-a', 'reply-b', 'grandchild']);
    assert.deepEqual(queried, [['root'], ['reply-a', 'reply-b'], ['grandchild']]);
});

test('community deletion traversal validates its lookup contract', async () => {
    await assert.rejects(() => collectDescendantIds(null, async () => []), TypeError);
    await assert.rejects(() => collectDescendantIds('root', null), TypeError);
});
