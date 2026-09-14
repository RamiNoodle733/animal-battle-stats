'use strict';

const EVIDENCE_FIELDS = Object.freeze({
    weight_kg: 'kg',
    height_cm: 'cm',
    length_cm: 'cm',
    speed_mps: 'm/s',
    lifespan_years: 'years',
    bite_force_psi: 'psi'
});

const VALUE_STATES = Object.freeze(['known', 'unknown', 'not_applicable', 'actual_zero']);
const EVIDENCE_BASES = Object.freeze(['measured', 'estimated']);
const CONFIDENCE_LEVELS = Object.freeze(['low', 'moderate', 'high']);
const SOURCE_QUALITY = Object.freeze({
    'peer-reviewed': 1,
    government: 0.9,
    university: 0.85,
    museum: 0.8,
    zoo: 0.75,
    conservation: 0.7,
    'reference-work': 0.6
});
const DECLARED_CONFIDENCE = Object.freeze({ low: 0.6, moderate: 0.8, high: 1 });

function isFiniteNumber(value) {
    return typeof value === 'number' && Number.isFinite(value);
}

function isIsoDate(value) {
    if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}/u.test(value)) return false;
    return Number.isFinite(Date.parse(value));
}

function isHttpUrl(value) {
    if (typeof value !== 'string') return false;
    try {
        const url = new URL(value);
        return url.protocol === 'https:' || url.protocol === 'http:';
    } catch {
        return false;
    }
}

function validateEvidenceRecord(record) {
    const errors = [];
    if (!record || typeof record !== 'object' || Array.isArray(record)) return ['record must be an object'];
    if (typeof record.animal !== 'string' || !record.animal.trim()) errors.push('animal is required');
    if (!Object.hasOwn(EVIDENCE_FIELDS, record.field)) errors.push('field is not supported');
    if (!VALUE_STATES.includes(record.state)) errors.push('state is invalid');

    const expectedUnit = EVIDENCE_FIELDS[record.field];
    if (expectedUnit && record.unit !== expectedUnit) errors.push(`unit must be ${expectedUnit}`);
    if (record.state === 'known' && !isFiniteNumber(record.value)) errors.push('known values require a finite value');
    if (record.state === 'actual_zero' && record.value !== 0) errors.push('actual_zero requires value 0');
    if (['unknown', 'not_applicable'].includes(record.state) && record.value != null) {
        errors.push(`${record.state} must not carry a numeric value`);
    }

    for (const key of ['minimum', 'maximum', 'typical']) {
        if (record[key] != null && !isFiniteNumber(record[key])) errors.push(`${key} must be finite`);
    }
    if (isFiniteNumber(record.minimum) && isFiniteNumber(record.maximum) && record.minimum > record.maximum) {
        errors.push('minimum cannot exceed maximum');
    }
    if (isFiniteNumber(record.typical) && isFiniteNumber(record.minimum) && record.typical < record.minimum) {
        errors.push('typical cannot be below minimum');
    }
    if (isFiniteNumber(record.typical) && isFiniteNumber(record.maximum) && record.typical > record.maximum) {
        errors.push('typical cannot exceed maximum');
    }

    if (!EVIDENCE_BASES.includes(record.basis)) errors.push('basis must be measured or estimated');
    if (!CONFIDENCE_LEVELS.includes(record.confidence)) errors.push('confidence is invalid');
    if (typeof record.dataRelease !== 'string' || !record.dataRelease.trim()) errors.push('data release is required');
    for (const key of ['sex', 'ageClass', 'notes']) {
        if (record[key] != null && typeof record[key] !== 'string') errors.push(`${key} must be a string`);
    }
    if (typeof record.notes === 'string' && record.notes.length > 1000) errors.push('notes cannot exceed 1000 characters');
    if (!record.source || typeof record.source !== 'object') {
        errors.push('source metadata is required');
    } else {
        if (!isHttpUrl(record.source.url)) errors.push('source URL must be http(s)');
        if (typeof record.source.title !== 'string' || !record.source.title.trim()) errors.push('source title is required');
        if (typeof record.source.publisher !== 'string' || !record.source.publisher.trim()) errors.push('source publisher is required');
        if (!Object.hasOwn(SOURCE_QUALITY, record.source.quality)) errors.push('source quality is invalid');
        if (record.source.publishedAt != null && !isIsoDate(record.source.publishedAt)) errors.push('source date is invalid');
        if (!isIsoDate(record.source.accessedAt)) errors.push('accessed date is required');
    }
    if (!isIsoDate(record.reviewedAt)) errors.push('reviewed date is required');
    return errors;
}

function assessEvidence(records, fields = Object.keys(EVIDENCE_FIELDS)) {
    const requiredFields = [...new Set(fields)].filter((field) => Object.hasOwn(EVIDENCE_FIELDS, field));
    const valid = (Array.isArray(records) ? records : []).filter((record) => validateEvidenceRecord(record).length === 0);
    const latestByField = new Map();
    valid.forEach((record) => {
        if (!requiredFields.includes(record.field)) return;
        const prior = latestByField.get(record.field);
        if (!prior || Date.parse(record.reviewedAt) > Date.parse(prior.reviewedAt)) latestByField.set(record.field, record);
    });

    const reviewed = [...latestByField.values()];
    const coverage = requiredFields.length === 0 ? 0 : reviewed.length / requiredFields.length;
    if (reviewed.length === 0) {
        return { confidence: 'unavailable', coverage: 0, reviewedFields: 0, totalFields: requiredFields.length };
    }

    const averageQuality = reviewed.reduce((sum, record) => sum + SOURCE_QUALITY[record.source.quality], 0) / reviewed.length;
    const estimatedShare = reviewed.filter((record) => record.basis === 'estimated').length / reviewed.length;
    const declaredConfidence = reviewed.reduce((sum, record) => sum + DECLARED_CONFIDENCE[record.confidence], 0) / reviewed.length;
    const score = coverage * averageQuality * (1 - estimatedShare * 0.35) * declaredConfidence;
    const confidence = score >= 0.72 ? 'high' : score >= 0.4 ? 'moderate' : 'low';
    return { confidence, coverage, reviewedFields: reviewed.length, totalFields: requiredFields.length };
}

function latestEvidenceByField(records, fields = Object.keys(EVIDENCE_FIELDS)) {
    const supported = new Set(fields.filter((field) => Object.hasOwn(EVIDENCE_FIELDS, field)));
    const latest = new Map();
    (Array.isArray(records) ? records : []).forEach((record) => {
        if (!supported.has(record?.field) || validateEvidenceRecord(record).length) return;
        const prior = latest.get(record.field);
        if (!prior || Date.parse(record.reviewedAt) > Date.parse(prior.reviewedAt)) latest.set(record.field, record);
    });
    return [...latest.values()].sort((left, right) => fields.indexOf(left.field) - fields.indexOf(right.field));
}

module.exports = {
    EVIDENCE_FIELDS,
    VALUE_STATES,
    EVIDENCE_BASES,
    CONFIDENCE_LEVELS,
    SOURCE_QUALITY,
    DECLARED_CONFIDENCE,
    validateEvidenceRecord,
    assessEvidence,
    latestEvidenceByField
};
