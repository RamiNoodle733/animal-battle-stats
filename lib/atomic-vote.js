'use strict';

function withoutUser(field, userId) {
    return { $setDifference: [{ $ifNull: [field, []] }, [userId]] };
}

function withUser(field, userId) {
    return { $setUnion: [{ $ifNull: [field, []] }, [userId]] };
}

function buildAtomicVotePipeline({ userId, vote, toggle = false }) {
    if (!userId || !['up', 'down', 'clear'].includes(vote)) {
        throw new TypeError('A valid user and vote are required');
    }

    const upvotesWithoutUser = withoutUser('$upvotes', userId);
    const downvotesWithoutUser = withoutUser('$downvotes', userId);
    if (vote === 'clear') {
        return [{ $set: { upvotes: upvotesWithoutUser, downvotes: downvotesWithoutUser } }];
    }

    const targetField = vote === 'up' ? '$upvotes' : '$downvotes';
    const targetValue = toggle
        ? {
            $cond: [
                { $in: [userId, { $ifNull: [targetField, []] }] },
                withoutUser(targetField, userId),
                withUser(targetField, userId)
            ]
        }
        : withUser(targetField, userId);

    return [{
        $set: vote === 'up'
            ? { upvotes: targetValue, downvotes: downvotesWithoutUser }
            : { upvotes: upvotesWithoutUser, downvotes: targetValue }
    }];
}

module.exports = { buildAtomicVotePipeline };
