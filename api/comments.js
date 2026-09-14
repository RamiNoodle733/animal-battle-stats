/**
 * API Route: /api/comments
 * Handles comments on animals and comparisons with replies and voting
 */

const { connectToDatabase } = require('../lib/mongodb');
const Comment = require('../lib/models/Comment');
const Animal = require('../lib/models/Animal');
const { getAuthUser, authorizeRequest } = require('../lib/auth');
const { awardUserReward } = require('../lib/rewards');
const { notifyDiscord } = require('../lib/discord');
const { maskBlockedTerms } = require('../lib/moderation');
const { setCorsHeaders } = require('../lib/cors');
const { enforceRateLimit, requestIdentity } = require('../lib/distributed-rate-limit');
const mongoose = require('mongoose');
const { buildAtomicVotePipeline } = require('../lib/atomic-vote');
const { serializeCommunityItem } = require('../lib/community-serializer');
const { enforceRequestSecurity } = require('../lib/request-security');
const { collectDescendantIds } = require('../lib/community-tree');

function boundedInteger(value, fallback, min, max) {
    if (value === undefined) return fallback;
    if (!['string', 'number'].includes(typeof value) || String(value).trim() === '') return null;
    const parsed = Number(value);
    return Number.isInteger(parsed) && parsed >= min && parsed <= max ? parsed : null;
}

function exactNameRegex(value) {
    const escaped = value.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    return new RegExp(`^${escaped}$`, 'i');
}

module.exports = async function handler(req, res) {
    setCorsHeaders(req, res, {
        methods: 'GET, POST, PATCH, DELETE, OPTIONS',
        credentials: true
    });
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (!enforceRequestSecurity(req, res, { maxBodyBytes: 16 * 1024 })) return;

    try {
        await connectToDatabase();

        switch (req.method) {
            case 'GET':
                return await handleGet(req, res);
            case 'POST':
                return await handlePost(req, res);
            case 'PATCH':
                return await handlePatch(req, res);
            case 'DELETE':
                return await handleDelete(req, res);
            default:
                return res.status(405).json({ success: false, error: 'Method not allowed' });
        }
    } catch (error) {
        console.error('Comment API Error:', error);
        return res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

// Helper: Build comment tree with replies
function buildCommentTree(comments) {
    const commentMap = {};
    const rootComments = [];
    
    // First pass: create map
    comments.forEach(c => {
        const comment = c.toObject ? c.toObject() : c;
        comment.replies = [];
        commentMap[comment._id.toString()] = comment;
    });
    
    // Second pass: build tree
    comments.forEach(c => {
        const comment = commentMap[c._id.toString()];
        if (comment.parentId) {
            const parent = commentMap[comment.parentId.toString()];
            if (parent) {
                parent.replies.push(comment);
            }
        } else {
            rootComments.push(comment);
        }
    });
    
    // Sort replies by oldest first (ascending createdAt)
    Object.values(commentMap).forEach(comment => {
        if (comment.replies.length > 0) {
            comment.replies.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        }
    });
    
    return rootComments;
}

// GET: Get comments for an animal or comparison (with replies nested)
async function handleGet(req, res) {
    try {
        const { animalId, animalName, comparison } = req.query;
        const limit = boundedInteger(req.query.limit, 100, 1, 100);
        if (limit === null) return res.status(400).json({ success: false, error: 'Invalid limit' });
        if (animalId && !mongoose.isValidObjectId(animalId)) return res.status(400).json({ success: false, error: 'Invalid animal ID' });
        if (animalName !== undefined && (typeof animalName !== 'string' || !animalName.trim() || animalName.length > 100)) return res.status(400).json({ success: false, error: 'Invalid animal name' });
        if (comparison !== undefined && (typeof comparison !== 'string' || !comparison.trim() || comparison.length > 220)) return res.status(400).json({ success: false, error: 'Invalid comparison key' });

        const query = { isHidden: false };
        
        if (animalId) {
            query.targetType = 'animal';
            query.animalId = animalId;
        } else if (animalName) {
            query.targetType = 'animal';
            // Escape special regex characters in animal name
            const escapedName = animalName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            query.animalName = { $regex: new RegExp(`^${escapedName}$`, 'i') };
        } else if (comparison) {
            query.targetType = 'comparison';
            query.comparisonKey = comparison;
        }

        const comments = await Comment.find(query)
            .sort({ createdAt: -1 })
            .limit(limit)
            .lean();
        
        // Try to get current user data, but don't fail if User model has issues
        const viewer = getAuthUser(req);
        const userMap = {};
        let canModerate = false;
        try {
            const User = require('../lib/models/User');
            const authorIds = [...new Set(comments.map(c => c.authorId?.toString()).filter(Boolean))];
            if (viewer?.id && !authorIds.includes(viewer.id)) authorIds.push(viewer.id);
            if (authorIds.length > 0) {
                const users = await User.find({ _id: { $in: authorIds } })
                    .select('_id displayName username profileAnimal role')
                    .lean();
                
                users.forEach(u => {
                    userMap[u._id.toString()] = {
                        displayName: u.displayName || u.username,
                        username: u.username,
                        profileAnimal: u.profileAnimal
                    };
                    if (viewer?.id === u._id.toString()) canModerate = ['admin', 'moderator'].includes(u.role);
                });
            }
        } catch (userError) {
            console.error('Error fetching user data for comments:', userError);
            // Continue without user data - will use stored comment data
        }

        // Update comments with current user data
        const updatedComments = comments.map(c => {
            const authorId = c.authorId?.toString();
            const currentUser = authorId ? userMap[authorId] : null;
            return serializeCommunityItem({
                ...c,
            }, {
                viewerId: viewer?.id,
                canModerate,
                authorUsername: currentUser?.displayName || c.authorUsername,
                profileAnimal: currentUser?.profileAnimal ?? c.profileAnimal
            });
        });
        
        const tree = buildCommentTree(updatedComments);
        // Count ALL comments (including replies) for the total
        const totalCount = await Comment.countDocuments(query);

        return res.status(200).json({
            success: true,
            count: totalCount,
            data: tree
        });
    } catch (error) {
        console.error('handleGet error:', error);
        return res.status(500).json({ success: false, error: 'Failed to load comments' });
    }
}

// POST: Create a new comment or reply
async function handlePost(req, res) {
    const user = getAuthUser(req);
    if (!user) {
        return res.status(401).json({ success: false, error: 'Authentication required' });
    }
    if (!await enforceRateLimit(res, {
        scope: 'comment-post',
        identity: requestIdentity(req, user.id),
        max: 8,
        windowMs: 10 * 60 * 1000
    })) return;

    const { targetType, animalId, animalName, comparisonKey, content, parentId, isAnonymous } = req.body || {};

    if (typeof content !== 'string' || content.trim().length === 0) {
        return res.status(400).json({ success: false, error: 'Comment content required' });
    }

    if (content.length > 1000) {
        return res.status(400).json({ success: false, error: 'Comment too long (max 1000 characters)' });
    }
    if (isAnonymous !== undefined && typeof isAnonymous !== 'boolean') return res.status(400).json({ success: false, error: 'isAnonymous must be true or false' });
    if (parentId && !mongoose.isValidObjectId(parentId)) return res.status(400).json({ success: false, error: 'Invalid parent comment ID' });

    const trimmedContent = content.trim();
    const publicContent = maskBlockedTerms(trimmedContent);

    // Get user's profile info for display
    const User = require('../lib/models/User');
    const userDoc = await User.findById(user.id).select('displayName profileAnimal');

    const commentData = {
        content: publicContent,
        authorId: user.id,
        authorUsername: userDoc?.displayName || user.username,
        profileAnimal: userDoc?.profileAnimal || null,
        isAnonymous: !!isAnonymous,
        upvotes: [],
        downvotes: []
    };
    let notificationType;
    let notificationData;
    let rewardAction;

    // If this is a reply, get parent info
    if (parentId) {
        const parent = await Comment.findOne({ _id: parentId, isHidden: false });
        if (!parent) {
            return res.status(404).json({ success: false, error: 'Parent comment not found' });
        }
        commentData.parentId = parentId;
        commentData.targetType = parent.targetType;
        commentData.animalId = parent.animalId;
        commentData.animalName = parent.animalName;
        commentData.comparisonKey = parent.comparisonKey;
        
        // Notify Discord about reply (show actual username even for anonymous, for moderation)
        const displayName = isAnonymous ? `Anonymous (${user.username})` : user.username;
        const parentAuthor = parent.isAnonymous ? 'Anonymous' : parent.authorUsername;
        notificationType = 'comment_reply';
        notificationData = {
            user: displayName,
            replyTo: parentAuthor,
            target: parent.animalName || parent.comparisonKey || 'Unknown',
            content: publicContent.substring(0, 100) + (publicContent.length > 100 ? '...' : '')
        };
        rewardAction = 'reply';
    } else {
        // New top-level comment
        if (!targetType) {
            return res.status(400).json({ success: false, error: 'Target type required' });
        }
        commentData.targetType = targetType;
        
        if (targetType === 'animal') {
            if (!animalId && !animalName) {
                return res.status(400).json({ success: false, error: 'Animal ID or name required' });
            }
            if (animalId && !mongoose.isValidObjectId(animalId)) return res.status(400).json({ success: false, error: 'Invalid animal ID' });
            if (animalName !== undefined && (typeof animalName !== 'string' || !animalName.trim() || animalName.length > 100)) return res.status(400).json({ success: false, error: 'Invalid animal name' });
            const animal = animalId
                ? await Animal.findById(animalId).select('_id name').lean()
                : await Animal.findOne({ name: { $regex: exactNameRegex(animalName) } }).select('_id name').lean();
            if (!animal) return res.status(400).json({ success: false, error: 'Unknown animal' });
            commentData.animalId = animal._id;
            commentData.animalName = animal.name;
        } else if (targetType === 'comparison') {
            if (!comparisonKey) {
                return res.status(400).json({ success: false, error: 'Comparison key required' });
            }
            if (typeof comparisonKey !== 'string' || comparisonKey.length > 220) return res.status(400).json({ success: false, error: 'Invalid comparison key' });
            const pair = comparisonKey.split(/\s+vs\s+/i).map((name) => name.trim()).filter(Boolean);
            if (pair.length !== 2 || pair[0].toLowerCase() === pair[1].toLowerCase() || pair.some((name) => name.length > 100)) {
                return res.status(400).json({ success: false, error: 'Comparison key must identify two different animals' });
            }
            const animals = await Animal.find({ name: { $in: pair.map(exactNameRegex) } }).select('name').lean();
            if (animals.length !== 2) return res.status(400).json({ success: false, error: 'Unknown comparison animal' });
            commentData.comparisonKey = animals.map((animal) => animal.name).sort().join(' vs ');
        } else {
            return res.status(400).json({ success: false, error: 'Invalid target type' });
        }
        
        // Notify Discord about new comment (show actual username even for anonymous, for moderation)
        const displayName = isAnonymous ? `Anonymous (${user.username})` : user.username;
        notificationType = 'comment';
        notificationData = {
            user: displayName,
            target: targetType === 'animal' ? animalName : comparisonKey,
            content: publicContent.substring(0, 100) + (publicContent.length > 100 ? '...' : '')
        };
        rewardAction = 'comment';
    }

    const comment = await Comment.create(commentData);
    let reward = null;
    try {
        reward = await awardUserReward({
            userId: user.id,
            action: rewardAction,
            sourceId: comment._id.toString()
        });
    } catch (rewardError) {
        console.error('Comment reward failed:', rewardError.message);
    }

    await notifyDiscord(notificationType, notificationData, req);

    return res.status(201).json({
        success: true,
        data: serializeCommunityItem(comment, { viewerId: user.id }),
        reward
    });
}

// DELETE: Delete a comment (only by author)
async function handleDelete(req, res) {
    const authorization = await authorizeRequest(req);
    if (!authorization.ok) {
        return res.status(authorization.status).json({ success: false, error: authorization.error });
    }
    const user = authorization.auth;

    const { commentId, id } = req.query;
    const targetId = commentId || id;
    if (!targetId) {
        return res.status(400).json({ success: false, error: 'Comment ID required' });
    }
    if (!mongoose.isValidObjectId(targetId)) return res.status(400).json({ success: false, error: 'Invalid comment ID' });

    const comment = await Comment.findById(targetId);
    if (!comment) {
        return res.status(404).json({ success: false, error: 'Comment not found' });
    }

    const isOwner = comment.authorId?.toString() === user.id;
    const isModerator = ['admin', 'moderator'].includes(authorization.user.role);
    if (!isOwner && !isModerator) {
        return res.status(403).json({ success: false, error: 'Not authorized to delete this comment' });
    }

    // Notify Discord about deletion
    const displayName = comment.isAnonymous ? 'Anonymous' : user.username;
    await notifyDiscord('comment_deleted', {
        user: displayName,
        target: comment.animalName || comment.comparisonKey || 'Unknown',
        content: comment.content
    }, req);

    // Remove the complete reply subtree so nested replies cannot become
    // unreachable orphan records when an ancestor is deleted.
    const descendants = await collectDescendantIds(targetId, (parentIds) => (
        Comment.find({ parentId: { $in: parentIds } }).select('_id').lean()
    ));
    await Comment.deleteMany({ _id: { $in: [targetId, ...descendants] } });

    return res.status(200).json({
        success: true,
        message: 'Comment deleted'
    });
}

// PATCH: Upvote/downvote a comment
async function handlePatch(req, res) {
    const user = getAuthUser(req);
    if (!user) {
        return res.status(401).json({ success: false, error: 'Authentication required' });
    }
    if (!await enforceRateLimit(res, {
        scope: 'comment-vote',
        identity: requestIdentity(req, user.id),
        max: 60,
        windowMs: 5 * 60 * 1000
    })) return;

    const { id } = req.query;
    const { action } = req.body || {};

    if (!id) {
        return res.status(400).json({ success: false, error: 'Comment ID required' });
    }
    if (!mongoose.isValidObjectId(id)) return res.status(400).json({ success: false, error: 'Invalid comment ID' });

    const userId = user.id;
    const normalizedAction = action === 'upvote' ? 'up' : action === 'downvote' ? 'down' : null;
    if (!normalizedAction) {
        return res.status(400).json({ success: false, error: 'Invalid action. Use upvote or downvote' });
    }
    const objectUserId = new mongoose.Types.ObjectId(userId);
    const comment = await Comment.findOneAndUpdate(
        { _id: id, isHidden: false },
        buildAtomicVotePipeline({ userId: objectUserId, vote: normalizedAction, toggle: true }),
        { returnDocument: 'after' }
    );
    if (!comment) return res.status(404).json({ success: false, error: 'Comment not found' });

    const score = comment.upvotes.length - comment.downvotes.length;
    const userVote = comment.upvotes.some(id => id.toString() === userId) ? 'up' : 
                     comment.downvotes.some(id => id.toString() === userId) ? 'down' : null;

    if (userVote === normalizedAction) {
        const authorName = comment.isAnonymous ? 'Anonymous' : comment.authorUsername;
        await notifyDiscord(`comment_${action}`, {
            user: user.username,
            commentAuthor: authorName,
            target: comment.animalName || comment.comparisonKey || 'Unknown'
        }, req);
    }

    return res.status(200).json({
        success: true,
        score,
        userVote,
        upvotes: comment.upvotes.length,
        downvotes: comment.downvotes.length
    });
}
