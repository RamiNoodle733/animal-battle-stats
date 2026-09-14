'use strict';

const mongoose = require('mongoose');
const {
    EVIDENCE_FIELDS,
    VALUE_STATES,
    EVIDENCE_BASES,
    CONFIDENCE_LEVELS,
    SOURCE_QUALITY
} = require('../animal-evidence');

const AnimalEvidenceSchema = new mongoose.Schema({
    animal: { type: String, required: true, trim: true, index: true },
    field: { type: String, required: true, enum: Object.keys(EVIDENCE_FIELDS) },
    state: { type: String, required: true, enum: VALUE_STATES },
    value: { type: Number, default: null },
    unit: { type: String, required: true },
    minimum: { type: Number, default: null },
    maximum: { type: Number, default: null },
    typical: { type: Number, default: null },
    sex: { type: String, default: null, trim: true },
    ageClass: { type: String, default: null, trim: true },
    basis: { type: String, required: true, enum: EVIDENCE_BASES },
    confidence: { type: String, required: true, enum: CONFIDENCE_LEVELS },
    source: {
        url: { type: String, required: true, trim: true },
        title: { type: String, required: true, trim: true },
        publisher: { type: String, required: true, trim: true },
        publishedAt: { type: Date, default: null },
        accessedAt: { type: Date, required: true },
        quality: { type: String, required: true, enum: Object.keys(SOURCE_QUALITY) }
    },
    notes: { type: String, default: null, maxlength: 1000, trim: true },
    reviewedAt: { type: Date, required: true },
    dataRelease: { type: String, required: true, trim: true }
}, { timestamps: true, collection: 'animalevidence' });

AnimalEvidenceSchema.index({ animal: 1, field: 1, reviewedAt: -1 });
AnimalEvidenceSchema.index(
    { animal: 1, field: 1, 'source.url': 1, reviewedAt: 1 },
    { unique: true }
);

module.exports = mongoose.models.AnimalEvidence || mongoose.model('AnimalEvidence', AnimalEvidenceSchema);
