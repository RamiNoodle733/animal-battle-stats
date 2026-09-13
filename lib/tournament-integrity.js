'use strict';

const SUBMISSION_ID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

class TournamentValidationError extends Error {}

function validateTournamentId(value) {
    const id = cleanName(value, 'submissionId');
    if (!SUBMISSION_ID_PATTERN.test(id)) throw new TournamentValidationError('submissionId must be a UUID');
    return id;
}

function cleanName(value, field) {
    if (typeof value !== 'string' || !value.trim() || value.length > 100) {
        throw new TournamentValidationError(`${field} must be a valid animal name`);
    }
    return value.trim();
}

function validateTournamentStart(input) {
    if (!input || typeof input !== 'object' || Array.isArray(input)) {
        throw new TournamentValidationError('Tournament start must be an object');
    }
    const bracketSize = Number(input.bracketSize);
    if (!Number.isInteger(bracketSize) || ![8, 16, 32, 64].includes(bracketSize)) {
        throw new TournamentValidationError('Bracket size must be 8, 16, 32, or 64');
    }
    const type = input.type === 'all' ? 'all' : cleanName(input.type, 'type');
    if (!/^[a-zA-Z][a-zA-Z -]{0,49}$/.test(type)) throw new TournamentValidationError('Tournament type is invalid');
    return Object.freeze({ bracketSize, type });
}

function expectedNextMatch(participants, history) {
    const bracketSize = participants.length;
    const totalMatches = bracketSize - 1;
    if (history.length >= totalMatches) return null;
    let offset = 0;
    let entrants = [...participants];
    for (let round = 1; entrants.length > 1; round += 1) {
        const matchCount = entrants.length / 2;
        if (history.length < offset + matchCount) {
            const matchIndex = history.length - offset;
            return { round, participants: [entrants[matchIndex * 2], entrants[(matchIndex * 2) + 1]] };
        }
        entrants = history.slice(offset, offset + matchCount).map((match) => match.winner);
        offset += matchCount;
    }
    return null;
}

function validateNextTournamentMatch(session, input) {
    const winner = cleanName(input?.winner, 'winner');
    const loser = cleanName(input?.loser, 'loser');
    const round = Number(input?.round);
    const expected = expectedNextMatch(session.participants || [], session.matchHistory || []);
    if (!expected) throw new TournamentValidationError('Tournament has no remaining matches');
    const samePair = expected.participants.includes(winner) && expected.participants.includes(loser) && winner !== loser;
    if (!samePair || round !== expected.round) {
        throw new TournamentValidationError('Battle does not match the next server-owned bracket match');
    }
    return Object.freeze({ round, winner, loser });
}

function validateTournamentMatchRequest(session, input) {
    const matchIndex = Number(input?.matchIndex);
    const history = session.matchHistory || [];
    if (!Number.isInteger(matchIndex) || matchIndex < 0 || matchIndex > history.length) {
        throw new TournamentValidationError('matchIndex must identify the next or previously recorded match');
    }
    if (matchIndex < history.length) {
        const recorded = history[matchIndex];
        const same = Number(recorded.round) === Number(input.round)
            && recorded.winner === input.winner
            && recorded.loser === input.loser;
        if (!same) throw new TournamentValidationError('Recorded match cannot be replaced');
        return Object.freeze({ duplicate: true, match: { round: Number(recorded.round), winner: recorded.winner, loser: recorded.loser } });
    }
    return Object.freeze({ duplicate: false, match: validateNextTournamentMatch(session, input) });
}

function validateTournamentSubmission(input) {
    if (!input || typeof input !== 'object' || Array.isArray(input)) {
        throw new TournamentValidationError('Tournament submission must be an object');
    }
    const submissionId = validateTournamentId(input.submissionId);
    const bracketSize = Number(input.bracketSize);
    const totalMatches = Number(input.totalMatches);
    if (!Number.isInteger(bracketSize) || bracketSize < 8 || bracketSize > 64 || (bracketSize & (bracketSize - 1)) !== 0) {
        throw new TournamentValidationError('Bracket size must be 8, 16, 32, or 64');
    }
    if (totalMatches !== bracketSize - 1 || !Array.isArray(input.matchHistory) || input.matchHistory.length !== totalMatches) {
        throw new TournamentValidationError('Complete match history required');
    }

    const rounds = Math.log2(bracketSize);
    const normalized = input.matchHistory.map((match, index) => {
        if (!match || typeof match !== 'object' || Array.isArray(match)) {
            throw new TournamentValidationError(`Match ${index + 1} is invalid`);
        }
        const winner = cleanName(match.winner, `Match ${index + 1} winner`);
        const loser = cleanName(match.loser, `Match ${index + 1} loser`);
        const round = Number(match.round);
        if (winner === loser || !Number.isInteger(round) || round < 1 || round > rounds) {
            throw new TournamentValidationError(`Match ${index + 1} has invalid participants or round`);
        }
        return { round, winner, loser };
    });

    let priorWinners = null;
    let firstRoundParticipants = null;
    let finalMatch = null;
    let semifinalLosers = [];
    for (let round = 1; round <= rounds; round += 1) {
        const matches = normalized.filter((match) => match.round === round);
        const expectedMatches = bracketSize / (2 ** round);
        if (matches.length !== expectedMatches) {
            throw new TournamentValidationError(`Round ${round} must contain ${expectedMatches} matches`);
        }
        const participants = matches.flatMap((match) => [match.winner, match.loser]);
        if (new Set(participants).size !== participants.length) {
            throw new TournamentValidationError(`Round ${round} repeats a participant`);
        }
        if (priorWinners) {
            const expected = [...priorWinners].sort();
            const actual = [...participants].sort();
            if (expected.length !== actual.length || expected.some((name, index) => name !== actual[index])) {
                throw new TournamentValidationError(`Round ${round} participants must be prior-round winners`);
            }
        } else {
            firstRoundParticipants = participants;
        }
        priorWinners = matches.map((match) => match.winner);
        if (round === rounds - 1) semifinalLosers = matches.map((match) => match.loser);
        if (round === rounds) finalMatch = matches[0];
    }

    const champion = cleanName(input.champion, 'champion');
    if (!finalMatch || finalMatch.winner !== champion) {
        throw new TournamentValidationError('Champion must be the final match winner');
    }
    return Object.freeze({
        submissionId,
        bracketSize,
        totalMatches,
        champion,
        runnerUp: finalMatch.loser,
        thirdFourth: semifinalLosers,
        participants: firstRoundParticipants,
        matchHistory: normalized
    });
}

module.exports = {
    TournamentValidationError,
    validateTournamentId,
    validateTournamentStart,
    validateNextTournamentMatch,
    validateTournamentMatchRequest,
    validateTournamentSubmission
};
