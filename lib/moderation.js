/**
 * Moderation for public names (usernames, display names) and user text (chat,
 * comments). The owner's word lists and the rules for reading them live in
 * config/moderation.json; extra terms can be added without a deploy in
 * MODERATION_BLOCKED_TERMS (or the legacy BANNED_WORDS), comma-separated, with
 * the same '*', '=' and '~' prefixes.
 *
 * Names: a term is blocked anywhere in the name (after innocent words from the
 * allow list are taken out), or, for '=' terms, as a whole word of the name
 * (split at separators, digits and capital letters, so BigAssLion has "ass" but
 * Classic does not).
 * Text: terms are masked as whole words (with common endings); '*' terms are
 * masked inside longer words too; '~' terms are never masked in text.
 */

const moderationConfig = require('../config/moderation.json');

const LEET_MAP = {
    '0': 'o',
    '1': 'i',
    '!': 'i',
    '|': 'i',
    '3': 'e',
    '4': 'a',
    '@': 'a',
    '5': 's',
    '$': 's',
    '7': 't',
    '+': 't',
    '8': 'b'
};
const CHAR_VARIANTS = {
    a: 'a4@',
    b: 'b8',
    e: 'e3',
    i: 'i1!|',
    o: 'o0',
    s: 's5$',
    t: 't7+'
};
const SEPARATOR_REGEX_SOURCE = '[\\s\\-_.|/\\\\*]*';
// Word endings that keep a whole-word term blocked (asses, dicks, raping).
const SUFFIXES = ['', 's', 'es', 'y', 'ies', 'er', 'ers', 'ing', 'ed', 'ie', 'z'];
const SUFFIX_REGEX_SOURCE = '(?:s|es|y|ies|er|ers|ing|ed|ie|z)?';

const NAME_ERROR = 'That name isn\'t allowed here. Please choose another one.';

function leet(text) {
    return String(text || '').replace(/[0134578!|@$+]/g, (char) => LEET_MAP[char] || char);
}

function stripAccents(text) {
    return String(text || '').normalize('NFKD').replace(/[̀-ͯ]/g, '');
}

// Lowercase letters and digits only, leetspeak read as letters.
function plainForm(text) {
    return leet(stripAccents(text).toLowerCase()).replace(/[^a-z0-9]/g, '');
}

function squash(text) {
    return text.replace(/(.)\1+/g, '$1');
}

/** The squashed plain form (kept for callers that compare normalized text). */
function normalizeForModeration(text) {
    return squash(plainForm(text));
}

function normalizeText(text) {
    return normalizeForModeration(text);
}

function parseTerm(raw, category) {
    let term = String(raw || '').trim();
    const flags = { strong: false, whole: false, namesOnly: false };
    while (term && '*=~'.includes(term[0])) {
        if (term[0] === '*') flags.strong = true;
        if (term[0] === '=') flags.whole = true;
        if (term[0] === '~') flags.namesOnly = true;
        term = term.slice(1);
    }
    const plain = plainForm(term);
    if (!plain) return null;
    return {
        raw: term,
        plain,
        // Squashed matching (fuuuck) only for terms without double letters, so
        // "titty" never matches "entity" and "god" never matches "good".
        squashable: squash(plain) === plain,
        category: category.name,
        text: category.text && !flags.namesOnly,
        newNamesOnly: category.newNamesOnly,
        ...flags
    };
}

let cache = null;
function rules() {
    const envValue = process.env.MODERATION_BLOCKED_TERMS || process.env.BANNED_WORDS || '';
    if (cache && cache.envValue === envValue) return cache;
    const categories = Object.entries(moderationConfig.categories || {}).map(([name, def]) => ({
        name,
        text: def.text !== false,
        newNamesOnly: Boolean(def.newNamesOnly),
        terms: Array.isArray(def.terms) ? def.terms : []
    }));
    const extra = envValue.split(',').map((term) => term.trim()).filter(Boolean);
    if (extra.length) categories.push({ name: 'custom', text: true, newNamesOnly: false, terms: extra });
    const terms = [];
    for (const category of categories) {
        for (const raw of category.terms) {
            const term = parseTerm(raw, category);
            if (term) terms.push(term);
        }
    }
    const allow = (moderationConfig.allow || []).map(plainForm).filter(Boolean).sort((a, b) => b.length - a.length);
    cache = { envValue, terms, allow, textRegexes: terms.filter((term) => term.text).map(buildTextRegex) };
    return cache;
}

// The words of a name: split at separators, at digits and at lower-to-upper case
// changes, with leetspeak read as letters inside a word (B1tch is one word).
function nameTokens(text) {
    const words = stripAccents(text)
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
        .split(/[^A-Za-z0-9!|@$+]+/)
        .filter(Boolean);
    const tokens = [];
    for (const word of words) {
        const lower = word.toLowerCase();
        tokens.push(...leet(lower).split(/[^a-z]+/).filter(Boolean));
        if (/\d/.test(lower)) tokens.push(...lower.split(/[^a-z]+/).filter(Boolean));
    }
    return tokens;
}

/**
 * The first blocked term in a public name, or null.
 * options.newName: also apply the terms kept for new names (reserved words).
 */
function findBlockedName(text, { newName = false } = {}) {
    const { terms, allow } = rules();
    let plain = plainForm(text);
    if (!plain) return null;
    for (const word of allow) plain = plain.split(word).join('|');
    const pieces = plain.split('|').filter(Boolean);
    const squashedPieces = pieces.map(squash);
    const tokens = nameTokens(text);
    for (const term of terms) {
        if (term.newNamesOnly && !newName) continue;
        if (term.whole) {
            // A whole word of the name, and not part of an allowed phrase (Maine Coon).
            if (pieces.some((piece) => piece.includes(term.plain)) && tokens.some((token) => SUFFIXES.some((suffix) => token === term.plain + suffix))) return term;
            continue;
        }
        if (pieces.some((piece) => piece.includes(term.plain))) return term;
        if (term.squashable && squashedPieces.some((piece) => piece.includes(term.plain))) return term;
    }
    return null;
}

function containsBlockedTerm(text) {
    return Boolean(findBlockedName(text));
}

function escapeRegexChar(char) {
    return char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function characterPattern(char) {
    const variants = CHAR_VARIANTS[char] || char;
    return `[${variants.split('').map(escapeRegexChar).join('')}]+`;
}

function buildTextRegex(term) {
    const body = term.plain.split('').map(characterPattern).join(SEPARATOR_REGEX_SOURCE);
    if (term.strong) return new RegExp(body, 'gi');
    return new RegExp(`(?<![a-z0-9])${body}${SUFFIX_REGEX_SOURCE}(?![a-z0-9])`, 'gi');
}

function maskMatch(match) {
    return '*'.repeat(Math.max(4, plainForm(match).length));
}

/** User text with every blocked word replaced by asterisks. */
function maskBlockedTerms(text) {
    let masked = String(text || '');
    for (const regex of rules().textRegexes) {
        regex.lastIndex = 0;
        masked = masked.replace(regex, maskMatch);
    }
    return masked;
}

/**
 * Checks a username or display name. options.newName for a name being chosen
 * now (signup, rename), which also rules out reserved words like "admin".
 */
function validatePublicName(text, { newName = false } = {}) {
    const value = String(text || '').trim();
    if (!value) {
        return { valid: false, error: 'Public name cannot be empty' };
    }
    const term = findBlockedName(value, { newName });
    if (term) {
        return { valid: false, error: NAME_ERROR, category: term.category };
    }
    return { valid: true };
}

/**
 * Whether other people should see a stand-in instead of this player's name: an
 * admin censored it, or it breaks the name rules. It stays hidden until the
 * player picks a name that passes.
 */
function isNameHidden(user) {
    if (!user) return false;
    if (user.requiresUsernameChange) return true;
    return Boolean(findBlockedName(user.displayName || user.username) || findBlockedName(user.username));
}

function hiddenName(user) {
    const id = String(user?._id || user?.id || '');
    return `Player ${id.slice(-4) || '0000'}`;
}

/** The name other people see. */
function publicName(user) {
    if (!user) return 'Player';
    return isNameHidden(user) ? hiddenName(user) : (user.displayName || user.username || 'Player');
}

module.exports = {
    NAME_ERROR,
    containsBlockedTerm,
    findBlockedName,
    hiddenName,
    isNameHidden,
    maskBlockedTerms,
    normalizeForModeration,
    normalizeText,
    publicName,
    validatePublicName
};
