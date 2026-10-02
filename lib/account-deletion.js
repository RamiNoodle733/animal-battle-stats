'use strict';

// Deleting an account (profile → Account → Delete account): the player and what is stored about
// them. Their animal votes leave the fan totals, which are counted from the votes; fight-call
// totals keep their picks only as anonymous counts. Their comments and chat messages go with the
// replies under them (as when they delete one themselves), and their votes on other people's
// posts are taken back. Claims, tournament entries, presence and their visit records go too.
// Messages already posted to the team's Discord/Slack feed can't be recalled.
//
// The account itself is removed last, so a run that fails part way can simply be run again.

const User = require('./models/User');
const Vote = require('./models/Vote');
const XpClaim = require('./models/XpClaim');
const RewardClaim = require('./models/RewardClaim');
const MatchupVoteBallot = require('./models/MatchupVoteBallot');
const TournamentSubmission = require('./models/TournamentSubmission');
const Comment = require('./models/Comment');
const ChatMessage = require('./models/ChatMessage');
const Presence = require('./models/Presence');
const SiteActivity = require('./models/SiteActivity');

// The ids of `roots` and every reply below them.
async function withReplies(Model, roots) {
    const seen = new Set(roots.map(String));
    const all = [...roots];
    let frontier = roots;
    while (frontier.length) {
        const children = await Model.find({ parentId: { $in: frontier } }, { _id: 1 }, { lean: true });
        frontier = children.map((child) => child._id).filter((id) => !seen.has(String(id)));
        frontier.forEach((id) => seen.add(String(id)));
        all.push(...frontier);
    }
    return all;
}

// Take a player's votes back off posts they voted on.
function withoutVoter(id, { score = false } = {}) {
    const drop = (field) => ({ $filter: { input: { $ifNull: [`$${field}`, []] }, cond: { $ne: ['$$this', id] } } });
    const stages = [{ $set: { upvotes: drop('upvotes'), downvotes: drop('downvotes') } }];
    if (score) stages.push({ $set: { voteScore: { $subtract: [{ $size: '$upvotes' }, { $size: '$downvotes' }] } } });
    return stages;
}

async function deleteAccount(userId) {
    const user = await User.findById(userId);
    if (!user) return null;
    const id = user._id;
    const removed = {};

    const ownComments = await Comment.find({ authorId: id }, { _id: 1 }, { lean: true });
    const commentIds = await withReplies(Comment, ownComments.map((comment) => comment._id));
    removed.comments = commentIds.length ? (await Comment.deleteMany({ _id: { $in: commentIds } })).deletedCount || 0 : 0;
    const ownMessages = await ChatMessage.find({ authorId: id }, { _id: 1 }, { lean: true });
    const messageIds = await withReplies(ChatMessage, ownMessages.map((message) => message._id));
    removed.messages = messageIds.length ? (await ChatMessage.deleteMany({ _id: { $in: messageIds } })).deletedCount || 0 : 0;
    await Comment.updateMany({ $or: [{ upvotes: id }, { downvotes: id }] }, withoutVoter(id, { score: true }), { updatePipeline: true });
    await ChatMessage.updateMany({ $or: [{ upvotes: id }, { downvotes: id }] }, withoutVoter(id), { updatePipeline: true });

    removed.votes = (await Vote.deleteMany({ votedBy: id })).deletedCount || 0;
    removed.fightCalls = (await MatchupVoteBallot.deleteMany({ userId: id })).deletedCount || 0;
    await XpClaim.deleteMany({ userId: id });
    await RewardClaim.deleteMany({ userId: id });
    await TournamentSubmission.deleteMany({ userId: id });
    await Presence.deleteMany({ $or: [{ _id: `user:${id}` }, { userId: id }] });
    removed.activity = (await SiteActivity.deleteMany({ username: user.username })).deletedCount || 0;

    await User.deleteOne({ _id: id });
    return { username: user.username, removed };
}

module.exports = { deleteAccount };
