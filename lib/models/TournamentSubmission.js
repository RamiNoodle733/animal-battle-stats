'use strict';

const mongoose = require('mongoose');

const TournamentSubmissionSchema = new mongoose.Schema({
    submissionKey: { type: String, required: true, unique: true, maxlength: 160 },
    submissionId: { type: String, required: true, unique: true, maxlength: 36 },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    bracketSize: { type: Number, required: true, enum: [8, 16, 32, 64] },
    participants: [{ type: String, required: true, maxlength: 100 }],
    matchHistory: [{
        _id: false,
        round: { type: Number, required: true, min: 1, max: 6 },
        winner: { type: String, required: true, maxlength: 100 },
        loser: { type: String, required: true, maxlength: 100 }
    }],
    status: { type: String, required: true, enum: ['active', 'completed', 'abandoned'], default: 'active', index: true },
    rankingKey: { type: String, maxlength: 96 },
    champion: { type: String, default: null, maxlength: 100 },
    participantCount: { type: Number, required: true, min: 8, max: 64 },
    completedAt: { type: Date, default: null },
    expiresAt: { type: Date, required: true }
}, { timestamps: true, collection: 'tournamentsubmissions' });

TournamentSubmissionSchema.index({ userId: 1, completedAt: -1 });
TournamentSubmissionSchema.index({ rankingKey: 1 }, { unique: true, sparse: true });
TournamentSubmissionSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.models.TournamentSubmission || mongoose.model('TournamentSubmission', TournamentSubmissionSchema);
