/**
 * API Route: /api/battles
 * Records tournament battle results and updates ELO ratings
 * Also handles tournament completion/quit notifications
 * AND matchup vote tracking (consolidated from matchup-votes.js)
 * 
 * Actions via query param:
 * - ?action=tournament_complete - Record tournament finish
 * - ?action=tournament_quit - Record tournament quit  
 * - ?action=matchup_votes - Get/record matchup vote stats (GET/POST)
 */

const { connectToDatabase } = require('../lib/mongodb');
const BattleStats = require('../lib/models/BattleStats');
const { findAnimal, sampleAnimals } = require('../lib/canonical-animals');
const MatchupVote = require('../lib/models/MatchupVote');
const MatchupVoteBallot = require('../lib/models/MatchupVoteBallot');
const TournamentSubmission = require('../lib/models/TournamentSubmission');
const SiteStats = require('../lib/models/SiteStats');
const { getAuthUser } = require('../lib/auth');
const { awardUserReward } = require('../lib/rewards');
const { notifyDiscord } = require('../lib/discord');
const { setCorsHeaders } = require('../lib/cors');
const { enforceRequestSecurity } = require('../lib/request-security');
const mongoose = require('mongoose');
const { randomUUID } = require('node:crypto');
const { enforceRateLimit, requestIdentity } = require('../lib/distributed-rate-limit');
const {
    TournamentValidationError,
    validateTournamentId,
    validateTournamentStart,
    validateTournamentMatchRequest,
    validateTournamentSubmission
} = require('../lib/tournament-integrity');

// ELO K-factor (how much ratings change per battle)
const K_FACTOR = 20;

function generateMatchupKey(animal1, animal2) {
    const sorted = [animal1, animal2].sort();
    return `${sorted[0]}::${sorted[1]}`;
}

module.exports = async function handler(req, res) {
    setCorsHeaders(req, res, {
        methods: 'GET, POST, OPTIONS',
        credentials: true
    });
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (!enforceRequestSecurity(req, res, { maxBodyBytes: 32 * 1024 })) return;

    try {
        await connectToDatabase();

        const { action } = req.query;

        // Route by action
        if (action === 'tournament_start' && req.method === 'POST') {
            return await handleTournamentStart(req, res);
        }
        if (action === 'tournament_complete' && req.method === 'POST') {
            return await handleTournamentComplete(req, res);
        }
        if (action === 'tournament_quit' && req.method === 'POST') {
            return await handleTournamentQuit(req, res);
        }
        if (action === 'matchup_votes') {
            if (req.method === 'GET') return await getMatchupVotes(req, res);
            if (req.method === 'POST') return await recordMatchupVote(req, res);
        }

        switch (req.method) {
            case 'POST':
                return await recordBattle(req, res);
            case 'GET':
                return await getBattleStats(req, res);
            default:
                return res.status(405).json({ success: false, error: 'Method not allowed' });
        }
    } catch (error) {
        console.error('Battles API Error:', error);
        return res.status(500).json({ success: false, error: 'Internal server error' });
    }
};

function parseBody(req) {
    if (typeof req.body !== 'string') return req.body || {};
    try { return JSON.parse(req.body); } catch (_error) { return {}; }
}

async function handleTournamentStart(req, res) {
    const user = getAuthUser(req);
    if (!user) return res.status(401).json({ success: false, error: 'Authentication required' });
    let start;
    try {
        start = validateTournamentStart(parseBody(req));
    } catch (error) {
        if (error instanceof TournamentValidationError) {
            return res.status(400).json({ success: false, error: error.message });
        }
        throw error;
    }
    if (!await enforceRateLimit(res, {
        scope: 'tournament-start',
        identity: requestIdentity(req, user.id),
        max: 10,
        windowMs: 60 * 60 * 1000
    })) return;
    const sampled = sampleAnimals(start.bracketSize, { type: start.type });
    if (sampled.length !== start.bracketSize) return res.status(400).json({ success: false, error: 'Not enough animals for this tournament type' });
    const participants = sampled.map((animal) => animal.name);
    const submissionId = randomUUID();
    await TournamentSubmission.create({
        submissionKey: `${user.id}:${submissionId}`,
        submissionId,
        userId: user.id,
        bracketSize: start.bracketSize,
        participantCount: participants.length,
        participants,
        matchHistory: [],
        status: 'active',
        expiresAt: new Date(Date.now() + (4 * 60 * 60 * 1000))
    });
    return res.status(201).json({ success: true, submissionId, participants });
}

// ============================================
// MATCHUP VOTES (consolidated from matchup-votes.js)
// ============================================

async function getMatchupVotes(req, res) {
    const { animal1, animal2 } = req.query;
    if (!animal1 || !animal2) {
        return res.status(400).json({ success: false, error: 'Both animal1 and animal2 required' });
    }
    try {
        const matchupKey = generateMatchupKey(animal1, animal2);
        const matchup = await MatchupVote.findOne({ matchupKey });
        if (!matchup) {
            return res.status(200).json({
                success: true,
                data: { animal1Name: animal1, animal2Name: animal2, animal1Votes: 0, animal2Votes: 0, totalVotes: 0, animal1Percentage: 50, animal2Percentage: 50, hasVotes: false }
            });
        }
        const sorted = [animal1, animal2].sort();
        const isOriginalOrder = sorted[0] === animal1;
        const leftVotes = isOriginalOrder ? matchup.animal1Votes : matchup.animal2Votes;
        const rightVotes = isOriginalOrder ? matchup.animal2Votes : matchup.animal1Votes;
        const total = matchup.totalVotes || (leftVotes + rightVotes);
        const leftPct = total > 0 ? Math.round((leftVotes / total) * 100) : 50;
        return res.status(200).json({
            success: true,
            data: { animal1Name: animal1, animal2Name: animal2, animal1Votes: leftVotes, animal2Votes: rightVotes, totalVotes: total, animal1Percentage: leftPct, animal2Percentage: 100 - leftPct, hasVotes: total > 0 }
        });
    } catch (error) {
        console.error('Error getting matchup votes:', error);
        return res.status(500).json({ success: false, error: 'Failed to get matchup votes' });
    }
}

async function recordMatchupVote(req, res) {
    const user = getAuthUser(req);
    if (!user) return res.status(401).json({ success: false, error: 'Authentication required' });
    if (!await enforceRateLimit(res, {
        scope: 'matchup-vote',
        identity: requestIdentity(req, user.id),
        max: 30,
        windowMs: 10 * 60 * 1000
    })) return;

    const { animal1, animal2, votedFor } = req.body || {};
    if (!animal1 || !animal2 || !votedFor) {
        return res.status(400).json({ success: false, error: 'animal1, animal2, and votedFor required' });
    }
    if ([animal1, animal2, votedFor].some((value) => typeof value !== 'string' || value.length > 100)) {
        return res.status(400).json({ success: false, error: 'Invalid animal name' });
    }
    if (animal1 === animal2) {
        return res.status(400).json({ success: false, error: 'A matchup requires two different animals' });
    }
    if (votedFor !== animal1 && votedFor !== animal2) {
        return res.status(400).json({ success: false, error: 'votedFor must match animal1 or animal2' });
    }

    try {
        const matchupKey = generateMatchupKey(animal1, animal2);
        const sorted = [animal1, animal2].sort();
        const isVotedForFirst = votedFor === sorted[0];

        const validAnimals = sorted.filter((name) => findAnimal(name)?.name === name).length;
        if (validAnimals !== 2) {
            return res.status(400).json({ success: false, error: 'Both matchup animals must exist' });
        }

        const dayKey = new Date().toISOString().split('T')[0];
        try {
            await MatchupVoteBallot.create({
                matchupKey,
                userId: user.id,
                dayKey,
                votedFor,
                votedAt: new Date()
            });
        } catch (error) {
            if (error?.code !== 11000) throw error;
            const existing = await MatchupVote.findOne({ matchupKey });
            return res.status(200).json({
                success: true,
                duplicate: true,
                data: formatMatchupVote(existing, animal1, animal2, votedFor),
                reward: null,
                message: 'You already voted on this matchup today.'
            });
        }

        const increments = isVotedForFirst
            ? { animal1Votes: 1, totalVotes: 1 }
            : { animal2Votes: 1, totalVotes: 1 };
        const matchup = await MatchupVote.findOneAndUpdate(
            { matchupKey },
            {
                $setOnInsert: { animal1Name: sorted[0], animal2Name: sorted[1] },
                $set: { lastVoteAt: new Date() },
                $inc: increments
            },
            { upsert: true, returnDocument: 'after', setDefaultsOnInsert: true }
        );

        let reward = null;
        try {
            reward = await awardUserReward({
                userId: user.id,
                action: 'daily_matchup_vote',
                sourceId: dayKey
            });
        } catch (rewardError) {
            console.error('Matchup reward failed:', rewardError.message);
        }

        await notifyDiscord('vote', {
            user: user.username,
            animal: `${animal1} vs ${animal2}`,
            voteType: votedFor
        }, req);

        return res.status(200).json({
            success: true,
            duplicate: false,
            data: formatMatchupVote(matchup, animal1, animal2, votedFor),
            reward
        });
    } catch (error) {
        console.error('Error recording matchup vote:', error);
        return res.status(500).json({ success: false, error: 'Failed to record matchup vote' });
    }
}

function formatMatchupVote(matchup, animal1, animal2, votedFor = null) {
    if (!matchup) {
        return {
            animal1Name: animal1,
            animal2Name: animal2,
            animal1Votes: 0,
            animal2Votes: 0,
            totalVotes: 0,
            animal1Percentage: 50,
            animal2Percentage: 50,
            votedFor,
            majorityWinner: null
        };
    }

    const sorted = [animal1, animal2].sort();
    const isOriginalOrder = sorted[0] === animal1;
    const leftVotes = isOriginalOrder ? matchup.animal1Votes : matchup.animal2Votes;
    const rightVotes = isOriginalOrder ? matchup.animal2Votes : matchup.animal1Votes;
    const leftPct = matchup.totalVotes > 0 ? Math.round((leftVotes / matchup.totalVotes) * 100) : 50;
    return {
        animal1Name: animal1,
        animal2Name: animal2,
        animal1Votes: leftVotes,
        animal2Votes: rightVotes,
        totalVotes: matchup.totalVotes,
        animal1Percentage: leftPct,
        animal2Percentage: 100 - leftPct,
        votedFor,
        majorityWinner: leftVotes > rightVotes ? animal1 : (rightVotes > leftVotes ? animal2 : null)
    };
}

/**
 * Handle tournament completion notification
 * Also saves tournament placements (1st, 2nd, 3rd, 4th)
 */
async function handleTournamentComplete(req, res) {
    const authenticatedUser = getAuthUser(req);
    if (!authenticatedUser) {
        return res.status(401).json({ success: false, error: 'Authentication required' });
    }
    const body = parseBody(req);
    
    let tournament;
    try {
        tournament = validateTournamentSubmission(body);
    } catch (error) {
        if (error instanceof TournamentValidationError) {
            return res.status(400).json({ success: false, error: error.message });
        }
        throw error;
    }

    const submissionKey = `${authenticatedUser.id}:${tournament.submissionId}`;
    const issued = await TournamentSubmission.findOne({ submissionKey });
    if (!issued) {
        return res.status(400).json({ success: false, error: 'Tournament was not issued by the server' });
    }
    if (issued.status === 'completed') {
        return res.status(200).json({ success: true, duplicate: true, reward: null, message: 'This tournament completion was already recorded.' });
    }
    // The submission lists round-one entrants winner-first, so compare the
    // roster as a set; the exact history check below pins the bracket order
    // (every recorded match was validated against the server bracket).
    const issuedParticipants = issued.participants.map(String).sort();
    const issuedHistory = issued.matchHistory.map(({ round, winner, loser }) => ({ round, winner, loser }));
    if (issued.status !== 'active'
        || issued.expiresAt <= new Date()
        || issued.bracketSize !== tournament.bracketSize
        || JSON.stringify(issuedParticipants) !== JSON.stringify([...tournament.participants].sort())
        || JSON.stringify(issuedHistory) !== JSON.stringify(tournament.matchHistory)) {
        return res.status(409).json({ success: false, error: 'Tournament result does not match the server-owned bracket' });
    }

    const increments = new Map(tournament.participants.map((name) => [name, { tournamentsPlayed: 1 }]));
    increments.get(tournament.champion).tournamentsFirst = 1;
    increments.get(tournament.runnerUp).tournamentsSecond = 1;
    tournament.thirdFourth.forEach((name) => { increments.get(name).tournamentsThird = 1; });

    const session = await mongoose.startSession();
    try {
        await session.withTransaction(async () => {
            const consumed = await TournamentSubmission.findOneAndUpdate(
                { submissionKey, status: 'active' },
                { $set: {
                    status: 'completed',
                    champion: tournament.champion,
                    completedAt: new Date(),
                    rankingKey: `${authenticatedUser.id}:${new Date().toISOString().split('T')[0]}`,
                    // Active sessions expire quickly; completed daily ranking
                    // claims must remain beyond the guarded UTC day.
                    expiresAt: new Date(Date.now() + (8 * 24 * 60 * 60 * 1000))
                } },
                { session, returnDocument: 'after' }
            );
            if (!consumed) throw new TournamentValidationError('Tournament was already consumed');
            const existingStats = await BattleStats.find({ animalName: { $in: tournament.participants } }).session(session);
            const statsByName = new Map(existingStats.map((stats) => [stats.animalName, stats]));
            for (const animalName of tournament.participants) {
                if (!statsByName.has(animalName)) statsByName.set(animalName, new BattleStats({ animalName }));
            }
            for (const match of tournament.matchHistory) {
                const winnerStats = statsByName.get(match.winner);
                const loserStats = statsByName.get(match.loser);
                const expectedWinner = 1 / (1 + Math.pow(10, (loserStats.battleRating - winnerStats.battleRating) / 400));
                const expectedLoser = 1 - expectedWinner;
                winnerStats.battleRating = Math.round(winnerStats.battleRating + K_FACTOR * (1 - expectedWinner));
                loserStats.battleRating = Math.round(loserStats.battleRating + K_FACTOR * (0 - expectedLoser));
                winnerStats.tournamentWins += 1;
                winnerStats.tournamentBattles += 1;
                loserStats.tournamentBattles += 1;
            }
            for (const [animalName, increment] of increments) {
                const stats = statsByName.get(animalName);
                stats.tournamentsPlayed += increment.tournamentsPlayed || 0;
                stats.tournamentsFirst += increment.tournamentsFirst || 0;
                stats.tournamentsSecond += increment.tournamentsSecond || 0;
                stats.tournamentsThird += increment.tournamentsThird || 0;
                stats.lastBattleAt = new Date();
                await stats.save({ session });
            }
            await SiteStats.updateOne(
                { key: 'global' },
                {
                    $inc: { totalTournaments: 1 },
                    $set: { lastUpdated: new Date() },
                    $setOnInsert: { totalVisits: 0, totalComparisons: 0 }
                },
                { upsert: true, session }
            );
        });
    } catch (error) {
        const dailyRankingConflict = error?.code === 11000
            && (error?.keyPattern?.rankingKey === 1 || error?.keyValue?.rankingKey);
        if (dailyRankingConflict || error instanceof TournamentValidationError) {
            return res.status(200).json({
                success: true,
                duplicate: true,
                reward: null,
                message: dailyRankingConflict
                    ? 'Your ranked tournament for today was already recorded.'
                    : 'This tournament completion was already recorded.'
            });
        }
        console.error('Error saving tournament completion:', error);
        return res.status(500).json({ success: false, error: 'Failed to record tournament completion' });
    } finally {
        await session.endSession();
    }

    await notifyDiscord('tournament_complete', {
        user: authenticatedUser.username,
        bracketSize: tournament.bracketSize,
        totalMatches: tournament.totalMatches,
        champion: tournament.champion,
        runnerUp: tournament.runnerUp,
        thirdFourth: tournament.thirdFourth.join(', '),
        matchHistory: tournament.matchHistory
    }, req);

    let reward = null;
    try {
        reward = await awardUserReward({
            userId: authenticatedUser.id,
            action: 'tournament_participate',
            // Participation can be recorded repeatedly, but the progression
            // reward is intentionally capped to one verified completion/day.
            sourceId: new Date().toISOString().split('T')[0]
        });
    } catch (rewardError) {
        console.error('Tournament reward failed:', rewardError.message);
    }

    return res.status(200).json({ success: true, duplicate: false, reward });
}

/**
 * Handle tournament quit notification
 */
async function handleTournamentQuit(req, res) {
    const authenticatedUser = getAuthUser(req);
    if (!authenticatedUser) {
        return res.status(401).json({ success: false, error: 'Authentication required' });
    }
    if (!await enforceRateLimit(res, {
        scope: 'tournament-quit',
        identity: requestIdentity(req, authenticatedUser.id),
        max: 5,
        windowMs: 10 * 60 * 1000
    })) return;

    // Parse body - handle both JSON and text/plain from sendBeacon
    let body = req.body;
    if (typeof body === 'string') {
        try { body = JSON.parse(body); } catch (_e) { body = {}; }
    }
    
    let submissionId;
    try {
        submissionId = validateTournamentId(body?.submissionId);
    } catch (error) {
        if (error instanceof TournamentValidationError) return res.status(400).json({ success: false, error: error.message });
        throw error;
    }
    const submissionKey = `${authenticatedUser.id}:${submissionId}`;
    const issued = await TournamentSubmission.findOne({ submissionKey, status: 'active' })
        .select('bracketSize matchHistory expiresAt')
        .lean();
    if (!issued || issued.expiresAt <= new Date()) {
        return res.status(404).json({ success: false, error: 'Tournament is missing or expired' });
    }
    const bracketSize = issued.bracketSize;
    const totalMatches = bracketSize - 1;
    const completedMatches = issued.matchHistory.length;
    const matchHistory = issued.matchHistory.slice(0, 63).map(({ winner, loser }) => ({ winner, loser }));
    
    await notifyDiscord('tournament_quit', {
        user: authenticatedUser.username,
        bracketSize,
        totalMatches,
        completedMatches,
        matchHistory
    }, req);
    
    return res.status(200).json({ success: true });
}

/**
 * Record a tournament battle result
 * POST /api/battles
 * Body: { winner: "Animal Name", loser: "Animal Name" }
 */
async function recordBattle(req, res) {
    const authenticatedUser = getAuthUser(req);
    if (!authenticatedUser) {
        return res.status(401).json({ success: false, error: 'Authentication required' });
    }

    const { submissionId: rawSubmissionId, matchIndex, round, winner, loser } = parseBody(req);

    if (!rawSubmissionId || !winner || !loser) {
        return res.status(400).json({ 
            success: false, 
            error: 'A server tournament id plus winner and loser are required'
        });
    }

    if (winner === loser) {
        return res.status(400).json({ 
            success: false, 
            error: 'Winner and loser cannot be the same animal' 
        });
    }

    if ([winner, loser].some((name) => typeof name !== 'string' || name.length > 100)) {
        return res.status(400).json({ success: false, error: 'Invalid animal name' });
    }

    let submissionId;
    try {
        submissionId = validateTournamentId(rawSubmissionId);
    } catch (error) {
        if (error instanceof TournamentValidationError) return res.status(400).json({ success: false, error: error.message });
        throw error;
    }

    const submissionKey = `${authenticatedUser.id}:${submissionId}`;
    let resultData;
    let duplicate = false;
    const session = await mongoose.startSession();
    try {
        await session.withTransaction(async () => {
            const issued = await TournamentSubmission.findOne({ submissionKey, status: 'active' }).session(session);
            if (!issued || issued.expiresAt <= new Date()) {
                throw new TournamentValidationError('Tournament is missing, expired, or already completed');
            }
            const request = validateTournamentMatchRequest(issued, { matchIndex, round, winner, loser });
            duplicate = request.duplicate;
            const match = request.match;
            if (duplicate) return;
            const persisted = await BattleStats.find({ animalName: { $in: issued.participants } }).session(session);
            const ratingState = new Map(issued.participants.map((name) => [name, { rating: 1000, wins: 0, battles: 0 }]));
            for (const stats of persisted) ratingState.set(stats.animalName, {
                rating: stats.battleRating,
                wins: stats.tournamentWins,
                battles: stats.tournamentBattles
            });
            for (const prior of issued.matchHistory) {
                const priorWinner = ratingState.get(prior.winner);
                const priorLoser = ratingState.get(prior.loser);
                const expected = 1 / (1 + Math.pow(10, (priorLoser.rating - priorWinner.rating) / 400));
                priorWinner.rating = Math.round(priorWinner.rating + K_FACTOR * (1 - expected));
                priorLoser.rating = Math.round(priorLoser.rating + K_FACTOR * (0 - (1 - expected)));
                priorWinner.wins += 1;
                priorWinner.battles += 1;
                priorLoser.battles += 1;
            }
            const winnerStats = ratingState.get(winner);
            const loserStats = ratingState.get(loser);
            const ratingA = winnerStats.rating;
            const ratingB = loserStats.rating;
            const expectedA = 1 / (1 + Math.pow(10, (ratingB - ratingA) / 400));
            const expectedB = 1 - expectedA;
            const newRatingA = Math.round(ratingA + K_FACTOR * (1 - expectedA));
            const newRatingB = Math.round(ratingB + K_FACTOR * (0 - expectedB));

            issued.matchHistory.push(match);
            await issued.save({ session });
            resultData = {
                winner: {
                    name: winner,
                    oldRating: ratingA,
                    newRating: newRatingA,
                    change: newRatingA - ratingA,
                    wins: winnerStats.wins + 1,
                    battles: winnerStats.battles + 1
                },
                loser: {
                    name: loser,
                    oldRating: ratingB,
                    newRating: newRatingB,
                    change: newRatingB - ratingB,
                    battles: loserStats.battles + 1
                }
            };
        });
        return res.status(200).json({ success: true, duplicate, data: resultData || null });
    } catch (error) {
        if (error instanceof TournamentValidationError) {
            return res.status(409).json({ success: false, error: error.message });
        }
        console.error('Error recording battle:', error);
        return res.status(500).json({ success: false, error: 'Failed to record battle' });
    } finally {
        await session.endSession();
    }
}

/**
 * Get battle stats for one or all animals
 * GET /api/battles?animal=AnimalName (optional)
 */
async function getBattleStats(req, res) {
    const { animal } = req.query;

    try {
        if (animal) {
            // Get stats for specific animal
            const stats = await BattleStats.findOne({ animalName: animal });
            if (!stats) {
                return res.status(200).json({
                    success: true,
                    data: {
                        animalName: animal,
                        battleRating: 1000,
                        tournamentWins: 0,
                        tournamentBattles: 0,
                        winRate: 50
                    }
                });
            }
            return res.status(200).json({ success: true, data: stats });
        }

        // Get all battle stats
        const allStats = await BattleStats.find({}).lean();
        
        // Convert to map for easy lookup
        const statsMap = {};
        allStats.forEach(s => {
            statsMap[s.animalName] = {
                battleRating: s.battleRating,
                tournamentWins: s.tournamentWins,
                tournamentBattles: s.tournamentBattles,
                winRate: s.tournamentBattles > 0 
                    ? Math.round((s.tournamentWins / s.tournamentBattles) * 100)
                    : 50
            };
        });

        return res.status(200).json({ success: true, data: statsMap });

    } catch (error) {
        console.error('Error getting battle stats:', error);
        return res.status(500).json({ success: false, error: 'Failed to get battle stats' });
    }
}
