'use strict';

function asObject(value) {
    return value?.toObject ? value.toObject() : (value || {});
}

function sameId(left, right) {
    return Boolean(left && right && String(left) === String(right));
}

function voteState(item, viewerId) {
    if (!viewerId) return null;
    if ((item.upvotes || []).some((id) => sameId(id, viewerId))) return 'up';
    if ((item.downvotes || []).some((id) => sameId(id, viewerId))) return 'down';
    if (item.userVote === 'up' || item.userVote === 'down') return item.userVote;
    return null;
}

/**
 * Serialize a comment or chat document for an untrusted client. Account IDs and
 * voter membership never cross this boundary; authorization-derived booleans do.
 */
function serializeCommunityItem(value, options = {}) {
    const item = asObject(value);
    const viewerId = options.viewerId || null;
    const anonymous = Boolean(item.isAnonymous);
    const upvoteCount = Array.isArray(item.upvotes) ? item.upvotes.length : Number(item.upvoteCount) || 0;
    const downvoteCount = Array.isArray(item.downvotes) ? item.downvotes.length : Number(item.downvoteCount) || 0;
    const result = {
        _id: item._id,
        content: item.content,
        authorUsername: anonymous ? 'Anonymous' : (options.authorUsername || item.authorUsername || 'Unknown'),
        profileAnimal: anonymous ? null : (options.profileAnimal ?? item.profileAnimal ?? null),
        isAnonymous: anonymous,
        parentId: item.parentId || null,
        createdAt: item.createdAt,
        updatedAt: item.updatedAt,
        upvoteCount,
        downvoteCount,
        score: upvoteCount - downvoteCount,
        userVote: voteState(item, viewerId),
        canDelete: Boolean(options.canModerate || item.canDelete || sameId(item.authorId, viewerId))
    };

    ['targetType', 'animalId', 'animalName', 'comparisonKey', 'animalImage', 'replyCount', 'parentContent', 'parentUsername']
        .forEach((field) => {
            if (item[field] !== undefined) result[field] = item[field];
        });

    if (Array.isArray(item.replies)) {
        const nestedOptions = { viewerId, canModerate: options.canModerate };
        result.replies = item.replies.map((reply) => serializeCommunityItem(reply, nestedOptions));
    }

    return result;
}

module.exports = { serializeCommunityItem, voteState };
