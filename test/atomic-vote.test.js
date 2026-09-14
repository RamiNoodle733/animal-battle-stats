'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');

const { buildAtomicVotePipeline } = require('../lib/atomic-vote');

test('explicit votes atomically add one side and remove the other', () => {
    const userId = 'user-object-id';
    const up = buildAtomicVotePipeline({ userId, vote: 'up' });
    assert.deepEqual(up, [{ $set: {
        upvotes: { $setUnion: [{ $ifNull: ['$upvotes', []] }, [userId]] },
        downvotes: { $setDifference: [{ $ifNull: ['$downvotes', []] }, [userId]] }
    } }]);

    const down = buildAtomicVotePipeline({ userId, vote: 'down' });
    assert.ok(down[0].$set.downvotes.$setUnion);
    assert.ok(down[0].$set.upvotes.$setDifference);
});

test('clear removes both votes and toggle uses one database expression', () => {
    const userId = 'user-object-id';
    const clear = buildAtomicVotePipeline({ userId, vote: 'clear' });
    assert.ok(clear[0].$set.upvotes.$setDifference);
    assert.ok(clear[0].$set.downvotes.$setDifference);

    const toggle = buildAtomicVotePipeline({ userId, vote: 'up', toggle: true });
    assert.ok(toggle[0].$set.upvotes.$cond);
    assert.ok(toggle[0].$set.downvotes.$setDifference);
});

test('invalid atomic votes fail closed', () => {
    assert.throws(() => buildAtomicVotePipeline({ userId: 'user', vote: 'sideways' }), /valid user and vote/);
    assert.throws(() => buildAtomicVotePipeline({ vote: 'up' }), /valid user and vote/);
});
