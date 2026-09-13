'use strict';

class InputError extends Error {}

function record(value) {
    if (!value || typeof value !== 'object' || Array.isArray(value)) {
        throw new InputError('Parameters must be an object');
    }
    return value;
}

function text(value, name, max = 100) {
    if (value === undefined) return undefined;
    if (typeof value !== 'string' || value.length > max) {
        throw new InputError(`${name} must be text of at most ${max} characters`);
    }
    return value.trim();
}

function number(value, name, { min = 0, max = 100, integer = false, fallback } = {}) {
    if (value === undefined) return fallback;
    if (!['string', 'number'].includes(typeof value) || String(value).trim() === '') {
        throw new InputError(`${name} must be a number`);
    }
    const parsed = Number(value);
    if (!Number.isFinite(parsed) || parsed < min || parsed > max || (integer && !Number.isInteger(parsed))) {
        throw new InputError(`${name} must be ${integer ? 'an integer' : 'a number'} between ${min} and ${max}`);
    }
    return parsed;
}

function boolean(value, name) {
    if (value === undefined) return undefined;
    if (value === true || value === 'true') return true;
    if (value === false || value === 'false') return false;
    throw new InputError(`${name} must be true or false`);
}

function choice(value, name, values, fallback) {
    if (value === undefined) return fallback;
    if (!values.includes(value)) throw new InputError(`Invalid ${name}`);
    return value;
}

const sorts = ['name', 'attack', 'defense', 'agility', 'stamina', 'intelligence', 'special', 'special_attack', 'weight_kg', 'height_cm', 'length_cm', 'speed_mps', 'bite_force_psi', 'size_score'];

function searchParams(value) {
    const input = record(value);
    const output = {};
    for (const key of ['q', 'type', 'class', 'size']) output[key] = text(input[key], key, key === 'q' ? 200 : 100);
    for (const stat of ['Attack', 'Defense', 'Agility', 'Stamina', 'Intelligence']) {
        for (const bound of ['min', 'max']) output[`${bound}${stat}`] = number(input[`${bound}${stat}`], `${bound}${stat}`);
        if (output[`min${stat}`] > output[`max${stat}`]) throw new InputError(`Minimum ${stat} exceeds maximum`);
    }
    for (const key of ['social', 'nocturnal']) output[key] = boolean(input[key], key);
    output.sort = choice(input.sort, 'sort', sorts, 'name');
    output.order = choice(input.order, 'order', ['asc', 'desc'], 'asc');
    output.page = number(input.page, 'page', { min: 1, max: 1000, integer: true, fallback: 1 });
    output.limit = number(input.limit, 'limit', { min: 1, max: 500, integer: true, fallback: 50 });
    return output;
}

function randomParams(value) {
    const input = record(value);
    return {
        count: number(input.count, 'count', { min: 1, max: 10, integer: true, fallback: 1 }),
        type: text(input.type, 'type'),
        exclude: text(input.exclude, 'exclude', 25000)
    };
}

module.exports = { InputError, searchParams, randomParams };
