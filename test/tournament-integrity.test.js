'use strict';

const test = require('node:test');
const assert = require('node:assert/strict');
process.env.JWT_SECRET ||= 'test-secret-that-is-long-enough-for-hmac-verification';
const {
    TournamentValidationError,
    validateTournamentStart,
    validateNextTournamentMatch,
    validateTournamentMatchRequest,
    validateTournamentSubmission
} = require('../lib/tournament-integrity');
const TournamentSubmission = require('../lib/models/TournamentSubmission');

const submissionId = '123e4567-e89b-42d3-a456-426614174000';
function validEight() {
    return {
        submissionId, bracketSize: 8, totalMatches: 7, champion: 'A',
        matchHistory: [
            { round: 1, winner: 'A', loser: 'B' }, { round: 1, winner: 'C', loser: 'D' },
            { round: 1, winner: 'E', loser: 'F' }, { round: 1, winner: 'G', loser: 'H' },
            { round: 2, winner: 'A', loser: 'C' }, { round: 2, winner: 'E', loser: 'G' },
            { round: 3, winner: 'A', loser: 'E' }
        ]
    };
}

test('valid tournament derives placements from a complete binary bracket', () => {
    const result = validateTournamentSubmission(validEight());
    assert.equal(result.champion, 'A');
    assert.equal(result.runnerUp, 'E');
    assert.deepEqual(result.thirdFourth, ['C', 'G']);
    assert.deepEqual(new Set(result.participants), new Set(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']));
});

test('client-provided placements and malformed brackets cannot forge results', () => {
    for (const mutate of [
        (value) => { value.champion = 'B'; },
        (value) => { value.matchHistory[4].loser = 'D'; },
        (value) => { value.matchHistory[6].round = 2; },
        (value) => { value.matchHistory[1].winner = 'A'; },
        (value) => { value.matchHistory.pop(); },
        (value) => { value.submissionId = 'guessable'; },
        (value) => { value.bracketSize = 4; }
    ]) {
        const value = validEight();
        mutate(value);
        assert.throws(() => validateTournamentSubmission(value), TournamentValidationError);
    }
});

test('server session start accepts only bounded bracket and type filters', () => {
    assert.deepEqual(validateTournamentStart({ bracketSize: 8, type: 'Mammal' }), { bracketSize: 8, type: 'Mammal' });
    assert.deepEqual(validateTournamentStart({ bracketSize: 16, type: 'all' }), { bracketSize: 16, type: 'all' });
    assert.throws(() => validateTournamentStart({ bracketSize: 8, type: { $ne: null } }), TournamentValidationError);
    assert.throws(() => validateTournamentStart({ bracketSize: 8, type: 'Mammal!' }), TournamentValidationError);
});

test('each ranked match must be the next match in the server-owned bracket', () => {
    const session = { participants: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], matchHistory: [] };
    session.matchHistory.push(validateNextTournamentMatch(session, { round: 1, winner: 'B', loser: 'A' }));
    assert.throws(() => validateNextTournamentMatch(session, { round: 1, winner: 'A', loser: 'B' }), TournamentValidationError);
    for (const match of [
        { round: 1, winner: 'C', loser: 'D' }, { round: 1, winner: 'E', loser: 'F' },
        { round: 1, winner: 'G', loser: 'H' }, { round: 2, winner: 'B', loser: 'C' },
        { round: 2, winner: 'G', loser: 'E' }, { round: 3, winner: 'G', loser: 'B' }
    ]) session.matchHistory.push(validateNextTournamentMatch(session, match));
    assert.throws(() => validateNextTournamentMatch(session, { round: 3, winner: 'G', loser: 'B' }), /no remaining matches/);
});

test('lost match responses can be retried idempotently but not replaced', () => {
    const session = {
        participants: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'],
        matchHistory: [{ round: 1, winner: 'A', loser: 'B' }]
    };
    assert.equal(validateTournamentMatchRequest(session, { matchIndex: 0, round: 1, winner: 'A', loser: 'B' }).duplicate, true);
    assert.throws(() => validateTournamentMatchRequest(session, { matchIndex: 0, round: 1, winner: 'B', loser: 'A' }), /cannot be replaced/);
    assert.equal(validateTournamentMatchRequest(session, { matchIndex: 1, round: 1, winner: 'C', loser: 'D' }).duplicate, false);
    assert.throws(() => validateTournamentMatchRequest(session, { matchIndex: 2, round: 1, winner: 'E', loser: 'F' }), TournamentValidationError);
});

test('submission indexes enforce unique server session ids and expiry cleanup', () => {
    const unique = TournamentSubmission.schema.indexes().find(([fields]) => fields.submissionKey === 1);
    assert.equal(unique?.[1]?.unique, true);
    const sessionId = TournamentSubmission.schema.indexes().find(([fields]) => fields.submissionId === 1);
    assert.equal(sessionId?.[1]?.unique, true);
    const expiry = TournamentSubmission.schema.indexes().find(([fields]) => fields.expiresAt === 1);
    assert.equal(expiry?.[1]?.expireAfterSeconds, 0);
    const dailyRanking = TournamentSubmission.schema.indexes().find(([fields]) => fields.rankingKey === 1);
    assert.equal(dailyRanking?.[1]?.unique, true);
    assert.equal(dailyRanking?.[1]?.sparse, true);
});
