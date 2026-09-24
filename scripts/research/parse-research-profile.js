'use strict';

// Parses one animal research report from animal-research-for-update/animals/*.md.
// The reports are written by an automated research task, so the same information
// appears in a few different Markdown shapes (YAML blocks, tables, bold bullets).
// Every extractor below accepts all shapes seen so far and records a warning
// instead of throwing when something is missing, so one odd file can never
// break the site build.

const HEADLINE_STATS = Object.freeze([
    ['attack', ['Attack']],
    ['defense', ['Defense', 'Defence']],
    ['agility', ['Agility']],
    ['stamina', ['Stamina']],
    ['intelligence', ['Intelligence']],
    ['special', ['Special attack', 'Special']]
]);

const SUBSTATS = Object.freeze([
    ['raw_power', ['Raw power', 'Raw strength']],
    ['weaponry', ['Weaponry', 'Natural weapons', 'Weapons']],
    ['ferocity', ['Ferocity', 'Aggression']],
    ['protection', ['Protection', 'Armor', 'Armour']],
    ['toughness', ['Toughness', 'Resilience', 'Durability']],
    ['maneuverability', ['Maneuverability', 'Manoeuvrability']],
    ['speed', ['Speed', 'Top speed']],
    ['endurance', ['Endurance']],
    ['recovery', ['Recovery']],
    ['tactics', ['Tactics']],
    ['senses', ['Senses']],
    ['abilities', ['Abilities', 'Unique abilities', 'Special abilities']],
    ['size', ['Size']]
]);

// Research reports sometimes skip a substat. The substats explain the headline
// ratings, so a missing one falls back to the headline rating it feeds.
const SUBSTAT_FALLBACK = Object.freeze({
    raw_power: 'attack',
    weaponry: 'attack',
    ferocity: 'attack',
    protection: 'defense',
    toughness: 'defense',
    maneuverability: 'agility',
    speed: 'agility',
    endurance: 'stamina',
    recovery: 'stamina',
    tactics: 'intelligence',
    senses: 'intelligence',
    abilities: 'special'
});

const FACT_FIELDS = Object.freeze([
    'weight_kg', 'height_cm', 'length_cm', 'speed_mps', 'lifespan_years', 'bite_force_psi'
]);

const IUCN_STATUSES = Object.freeze([
    'Critically Endangered',
    'Extinct in the Wild',
    'Near Threatened',
    'Least Concern',
    'Data Deficient',
    'Not Evaluated',
    'Endangered',
    'Vulnerable',
    'Extinct',
    'Domesticated'
]);

const NUMBER = '(-?\\d{1,3}(?:,\\d{3})+(?:\\.\\d+)?|-?\\d+(?:\\.\\d+)?)';

function escapeRegExp(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function toNumber(raw) {
    if (raw == null) return null;
    const value = Number(String(raw).replace(/,/g, ''));
    return Number.isFinite(value) ? value : null;
}

// Removes Markdown emphasis, code ticks and links, keeping the readable text.
function plainText(value) {
    return String(value || '')
        .replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, '$1')
        .replace(/\*\*([^*]+)\*\*/g, '$1')
        .replace(/(^|[\s(])\*([^*\n]+)\*(?=[\s).,;:]|$)/g, '$1$2')
        .replace(/__([^_]+)__/g, '$1')
        .replace(/`([^`]+)`/g, '$1')
        .replace(/\*\*/g, '')
        .replace(/[ \t]+/g, ' ')
        .trim();
}

function splitHeadings(text, level) {
    const marker = '#'.repeat(level);
    const pattern = new RegExp(`^${marker}\\s+(.+)$`, 'gm');
    const matches = [...text.matchAll(pattern)];
    return matches.map((match, index) => {
        const start = match.index + match[0].length;
        const end = index + 1 < matches.length ? matches[index + 1].index : text.length;
        return {
            title: plainText(match[1]).replace(/^\d+[.)]\s*/, ''),
            rawTitle: match[1],
            body: text.slice(start, end).trim()
        };
    });
}

// Patterns are ordered from most to least specific; the first pattern that
// matches any section wins, so "Evidence and source ledger" beats a physical
// section that merely mentions "evidence".
function findSection(sections, patterns, exclude = null) {
    for (const pattern of patterns) {
        const match = sections.find((section) => section !== exclude && pattern.test(section.title));
        if (match) return match;
    }
    return null;
}

function paragraphs(body) {
    return String(body || '')
        .split(/\n\s*\n/)
        .map((block) => block.trim())
        .filter((block) => block && !/^#{1,6}\s/.test(block) && !/^\|/.test(block) && !/^```/.test(block))
        .map((block) => block.split('\n').filter((line) => !/^\s*[-*]\s/.test(line) && !/^\s*\d+[.)]\s/.test(line)).join(' '))
        .map(plainText)
        .filter(Boolean);
}

function listItems(body) {
    const items = [];
    let current = null;
    for (const line of String(body || '').split('\n')) {
        const item = line.match(/^\s*(?:[-*+]|\d+[.)])\s+(.*)$/);
        if (item) {
            if (current) items.push(current);
            current = item[1];
        } else if (current && line.trim() && !/^\s*#/.test(line) && !/^\s*\|/.test(line)) {
            current += ` ${line.trim()}`;
        } else if (!line.trim() && current) {
            items.push(current);
            current = null;
        }
    }
    if (current) items.push(current);
    return items.map(plainText).filter(Boolean);
}

// Finds "<label> ... <number>" where only separators sit between the label and
// the value: `Attack: 61.0`, `| **Attack** | **76.0** |`, `weight_kg = 0.0`.
function labeledNumber(text, labels, { maxGap = 14, allowUnitText = false } = {}) {
    for (const label of labels) {
        const gap = allowUnitText ? `[\`"'*:=|\\s\\u2014\\u2013(),a-z-]{0,${maxGap}}` : `[\`"'*:=|\\s\\u2014\\u2013-]{0,${maxGap}}`;
        const pattern = new RegExp(`(?:^|[^A-Za-z_])${escapeRegExp(label)}(?![A-Za-z_])${gap}${NUMBER}`, 'im');
        const match = String(text || '').match(pattern);
        if (match) return toNumber(match[1]);
    }
    return null;
}

const BINOMIAL = /^[A-Z][a-z]+ (?:\([A-Z][a-z]+\) )?[a-z]+(?:-[a-z]+)?(?: [a-z]+(?:-[a-z]+)?)?$/;

function parseScientificName(h1, identityBody, fullText) {
    const candidates = [];
    const h1Text = String(h1 || '');
    for (const match of h1Text.matchAll(/\(\s*†?\*?_?([A-Z][a-z]+ [a-z-]+(?: [a-z-]+)?)_?\*?\s*\)/g)) candidates.push(match[1]);
    const lookIn = [String(identityBody || ''), String(fullText || '').slice(0, 5000)];
    for (const body of lookIn) {
        const taxonLine = body.match(/(?:taxon|scientific name)[^:\n]{0,30}:\**\s*†?\*([A-Z][a-z]+ [a-z-]+(?: [a-z-]+)?)\*/i);
        if (taxonLine) candidates.push(taxonLine[1]);
    }
    for (const body of lookIn) {
        for (const match of body.matchAll(/†?\*([A-Z][a-z]+ [a-z-]+(?: [a-z-]+)?)\*/g)) candidates.push(match[1]);
    }
    for (const match of h1Text.matchAll(/\(([A-Z][a-z]+ [a-z-]+(?: [a-z-]+)?)\)/g)) candidates.push(match[1]);
    const valid = candidates.map((value) => value.trim().replace(/[.,;]+$/, '')).find((value) => BINOMIAL.test(value));
    return valid || '';
}

function parseSpecimen(identityBody) {
    const body = String(identityBody || '');
    const line = body.match(/canonical (?:combat |research )?specimen[^:\n]{0,40}:\**\s*(.+)/i);
    if (line) return plainText(line[1]);
    const sub = splitHeadings(body, 3).find((section) => /canonical|specimen/i.test(section.title));
    if (sub) return paragraphs(sub.body)[0] || listItems(sub.body)[0] || '';
    // Inline sentence: "Canonical combat specimen is a healthy mature bull because ..."
    const sentence = plainText(body).match(/[^.]*canonical[^.]*specimen[^.]*\./i);
    if (sentence) return sentence[0].trim();
    const specimenSentence = plainText(body).match(/[^.]*\b(?:adult|mature|prime)\b[^.]*\b(?:male|female|bull|cow)\b[^.]*\./i);
    return specimenSentence ? specimenSentence[0].trim() : '';
}

function specimenSex(text) {
    const value = String(text || '').toLowerCase();
    if (/\bfemale\b|\bqueen\b|\bcow\b(?! elk)|\bhen\b|\bsow\b|\bdoe\b|\bvixen\b|\bewe\b/.test(value)) {
        if (!/\bmale\b(?![- ]biased)/.test(value.replace(/female/g, ''))) return 'female';
    }
    if (/\bmale\b|\bbull\b|\bboar\b|\bstag\b|\bram\b|\bbuck\b|\bcock\b|\bsilverback\b|\bdrake\b|\btom\b/.test(value)) return 'male';
    if (/\bfemale\b|\bqueen\b|\bworker\b/.test(value)) return 'female';
    return 'unspecified';
}

function parseFacts(text, canonicalBody) {
    const facts = {};
    const missing = [];
    for (const field of FACT_FIELDS) {
        let value = labeledNumber(canonicalBody, [field], { maxGap: 16 });
        if (value == null) value = labeledNumber(text, [field], { maxGap: 16 });
        if (value == null) missing.push(field);
        else facts[field] = value;
    }
    return { facts, missing };
}

function parseStatBlock(body, definitions, fallbackText) {
    const values = {};
    const missing = [];
    for (const [key, labels] of definitions) {
        let value = labeledNumber(body, labels);
        if (value == null && fallbackText) value = labeledNumber(fallbackText, labels.map((label) => `**${label}`), { maxGap: 6 });
        if (value == null || value < 0 || value > 100) missing.push(key);
        else values[key] = Math.round(value * 10) / 10;
    }
    return { values, missing };
}

function splitNamedItem(item) {
    const text = String(item || '').trim();
    // "**Name** — description" / "**Name:** description" / "Name — description"
    const bold = text.match(/^\*\*(.+?)\*\*\s*[:—–-]*\s*(.*)$/);
    if (bold) return { name: plainText(bold[1]).replace(/[:.]$/, ''), description: plainText(bold[2]).replace(/^[:—–-]\s*/, '') };
    const dash = text.match(/^(.{2,60}?)\s+[—–]\s+(.*)$/) || text.match(/^([^:]{2,60}):\s+(.*)$/);
    if (dash) return { name: plainText(dash[1]), description: plainText(dash[2]) };
    return { name: plainText(text).slice(0, 60), description: '' };
}

function rawListItems(body) {
    const items = [];
    let current = null;
    for (const line of String(body || '').split('\n')) {
        const item = line.match(/^\s*(?:[-*+]|\d+[.)])\s+(.*)$/);
        if (item) {
            if (current) items.push(current);
            current = item[1];
        } else if (current && line.trim() && !/^\s*#/.test(line)) {
            current += ` ${line.trim()}`;
        } else if (current) {
            items.push(current);
            current = null;
        }
    }
    if (current) items.push(current);
    return items;
}

function parseAbilitiesAndTraits(section) {
    const result = { abilities: [], traits: [] };
    if (!section) return result;
    const body = section.body;
    const subsections = splitHeadings(body, 3);
    let abilityBody = '';
    let traitBody = '';
    if (subsections.length) {
        const abilitySection = subsections.find((sub) => /abilit/i.test(sub.title));
        const traitSection = subsections.find((sub) => /trait/i.test(sub.title));
        abilityBody = abilitySection ? abilitySection.body : '';
        traitBody = traitSection ? traitSection.body : '';
    }
    if (!abilityBody || !traitBody) {
        // Bold or plain labels instead of ### headings.
        const abilityIndex = body.search(/(?:^|\n)\s*\**(?:proposed )?special abilities/i);
        const traitIndex = body.search(/(?:^|\n)\s*\**(?:proposed )?unique traits/i);
        if (abilityIndex >= 0 && traitIndex > abilityIndex) {
            abilityBody = body.slice(abilityIndex, traitIndex).replace(/^.*\n/, '');
            traitBody = body.slice(traitIndex).replace(/^.*\n/, '');
        } else if (traitIndex >= 0 && abilityIndex > traitIndex) {
            traitBody = body.slice(traitIndex, abilityIndex).replace(/^.*\n/, '');
            abilityBody = body.slice(abilityIndex).replace(/^.*\n/, '');
        }
    }
    const abilityItems = rawListItems(abilityBody);
    const traitItems = rawListItems(traitBody);
    if (!abilityItems.length && !traitItems.length) {
        const all = rawListItems(body);
        result.abilities = all.slice(0, 2).map(splitNamedItem);
        result.traits = all.slice(2, 4).map(splitNamedItem);
        return result;
    }
    result.abilities = abilityItems.slice(0, 2).map(splitNamedItem);
    result.traits = traitItems.slice(0, 2).map(splitNamedItem);
    return result;
}

function parseConservationStatus(text) {
    const value = String(text || '');
    let best = null;
    for (const status of IUCN_STATUSES) {
        const pattern = new RegExp(`\\b${escapeRegExp(status)}\\b`, 'i');
        const match = value.match(pattern);
        if (!match) continue;
        // "Endangered" must not win when it is part of "Critically Endangered".
        const before = value.slice(Math.max(0, match.index - 11), match.index).toLowerCase();
        if (status === 'Endangered' && before.includes('critically')) continue;
        if (status === 'Extinct' && /in the wild/i.test(value.slice(match.index, match.index + 20))) continue;
        if (!best || match.index < best.index) best = { status, index: match.index };
    }
    return best ? best.status : '';
}

function parseSources(section) {
    if (!section) return [];
    const sources = [];
    const seen = new Set();
    for (const line of section.body.split('\n')) {
        const urls = line.match(/https?:\/\/[^\s|)>\]`"']+/g);
        if (!urls) continue;
        const cells = line.includes('|')
            ? line.split('|').map((cell) => cell.trim()).filter((cell) => cell.length > 0)
            : [line.replace(/^\s*[-*]\s*/, '')];
        for (const rawUrl of urls) {
            const url = rawUrl.replace(/[.,;:]+$/, '');
            if (seen.has(url)) continue;
            seen.add(url);
            let title = '';
            let supports = '';
            let confidence = '';
            if (cells.length >= 2) {
                const urlCell = cells.findIndex((cell) => cell.includes(rawUrl));
                title = plainText(cells[urlCell === 0 ? 1 : 0].replace(/https?:\/\/\S+/g, ''));
                const rest = cells.filter((_, index) => index !== urlCell && index !== (urlCell === 0 ? 1 : 0));
                supports = plainText(rest[0] || '');
                confidence = plainText(rest[1] || '');
            } else {
                const text = plainText(cells[0]);
                const beforeUrl = text.split(url)[0] || text.split(rawUrl)[0] || '';
                title = beforeUrl.replace(/[—–:\-–—\s]+$/, '').trim();
                supports = plainText(text.slice(text.indexOf(url) + url.length)).replace(/^[—–:\-\s]+/, '');
            }
            sources.push({
                title: title || hostnameOf(url),
                url,
                supports: supports.slice(0, 400),
                confidence: confidence.slice(0, 200)
            });
        }
    }
    return sources;
}

function hostnameOf(url) {
    try {
        return new URL(url).hostname.replace(/^www\./, '');
    } catch {
        return url;
    }
}

function parseImageSection(section) {
    if (!section) return null;
    const field = (name) => {
        const match = section.body.match(new RegExp(`\`?${name}\`?\\**\\s*[:=]\\s*(.+)`, 'i'));
        return match ? plainText(match[1]) : '';
    };
    const urlIn = (value) => (String(value).match(/https?:\/\/[^\s)>\]`"']+/) || [''])[0];
    return {
        status: field('image_status'),
        sourcePage: urlIn(field('source_page_url')),
        originalUrl: urlIn(field('original_photo_url')),
        license: field('license_status'),
        sex: field('sex_verified_or_unknown'),
        notes: field('notes').slice(0, 600)
    };
}

function pickSubsection(subsections, patterns) {
    const match = subsections.find((sub) => patterns.some((pattern) => pattern.test(sub.title)));
    return match ? match.body : '';
}

function textOf(body) {
    const blocks = paragraphs(body);
    if (blocks.length) return blocks.join('\n\n');
    return listItems(body).join('\n');
}

function splitSentences(text) {
    // Split only where a sentence end is followed by whitespace and a capital,
    // so decimals such as "16.4 m" and abbreviations like "c. 30" stay intact.
    return String(text || '').split(/(?<=[.!?])\s+(?=[A-Z0-9"“(†])/).map((sentence) => sentence.trim()).filter(Boolean);
}

function firstSentences(text, maxLength = 240) {
    const clean = plainText(text).replace(/\s+/g, ' ');
    if (clean.length <= maxLength) return clean;
    let result = '';
    for (const sentence of splitSentences(clean)) {
        const next = result ? `${result} ${sentence}` : sentence;
        if (next.length > maxLength) break;
        result = next;
    }
    if (!result) result = `${clean.slice(0, maxLength - 1).replace(/\s+\S*$/, '')}…`;
    return result.trim();
}

function parseResearchProfile(markdown, { slug = '' } = {}) {
    const text = String(markdown || '').replace(/\r\n/g, '\n').replace(/^﻿/, '');
    const warnings = [];
    const h1 = (text.match(/^#\s+(.+)$/m) || [])[1] || '';
    const sections = splitHeadings(text, 2);

    const identity = findSection(sections, [/identity/i, /canonical specimen/i, /taxonomy/i]);
    const canonical = findSection(sections, [/canonical proposed factual/i, /factual fields/i, /canonical.*fields/i, /proposed factual/i]);
    const combat = findSection(sections, [/combat biology/i, /combat/i]);
    const substatSection = findSection(sections, [/substat/i]);
    const headlineSection = findSection(sections, [/headline/i, /six .*rating/i, /proposed.*ratings?$/i]);
    const abilitySection = findSection(sections, [/abilit.*trait/i, /trait.*abilit/i, /special abilities/i, /abilities/i]);
    const separateTraitSection = abilitySection && !/trait/i.test(abilitySection.title)
        ? findSection(sections, [/unique traits/i, /traits/i], abilitySection)
        : null;
    const profileSection = findSection(sections, [/expanded profile/i, /profile content/i, /expanded/i]);
    const imageSection = findSection(sections, [/image/i]);
    const sourceSection = findSection(sections, [/evidence and source/i, /source ledger/i, /evidence ledger/i, /sources?$/i, /evidence/i]);

    const scientificName = parseScientificName(h1, identity ? identity.body : '', text);
    if (!scientificName) warnings.push('scientific name not found');
    const head = text.slice(0, 6000);
    const specimen = parseSpecimen(identity ? identity.body : '') || parseSpecimen(head);
    if (!specimen) warnings.push('canonical specimen not found');
    const livingLine = head.match(/living\s*\/\s*extinct[^:\n]*:\**\s*([^\n]+)/i);
    const extinct = livingLine
        ? /^\W*extinct/i.test(plainText(livingLine[1]))
        : /\bis (?:an )?extinct\b|†\*/i.test(head);

    const { facts, missing: missingFacts } = parseFacts(text, canonical ? canonical.body : '');
    if (missingFacts.length) warnings.push(`facts missing: ${missingFacts.join(', ')}`);

    const headline = parseStatBlock(headlineSection ? headlineSection.body : '', HEADLINE_STATS, text);
    if (headline.missing.length) warnings.push(`headline ratings missing: ${headline.missing.join(', ')}`);

    const substats = parseStatBlock(substatSection ? substatSection.body : '', SUBSTATS);
    const missingSubstats = substats.missing.filter((key) => key !== 'size');
    const derivedSubstats = [];
    for (const key of missingSubstats) {
        const source = headline.values[SUBSTAT_FALLBACK[key]];
        if (source != null) {
            substats.values[key] = source;
            derivedSubstats.push(key);
        }
    }
    if (missingSubstats.length > 4) warnings.push(`substats missing: ${missingSubstats.join(', ')}`);

    let { abilities, traits } = parseAbilitiesAndTraits(abilitySection);
    if (separateTraitSection && traits.length === 0) {
        traits = rawListItems(separateTraitSection.body).slice(0, 2).map(splitNamedItem);
    }
    if (abilities.length !== 2) warnings.push(`expected 2 abilities, found ${abilities.length}`);
    if (traits.length !== 2) warnings.push(`expected 2 traits, found ${traits.length}`);

    const profileSubs = profileSection ? splitHeadings(profileSection.body, 3) : [];
    const allSubs = sections.flatMap((section) => splitHeadings(section.body, 3));
    const sub = (patterns) => pickSubsection(profileSubs, patterns) || pickSubsection(allSubs, patterns);

    const summaryBody = sub([/site-ready summary/i, /concise.*summary/i, /^summary$/i, /short summary/i]);
    const narrativeBody = sub([/narrative/i, /detailed profile/i, /long-form/i]);
    const conservationBody = sub([/conservation/i]);
    const funFactItems = listItems(sub([/fun facts?/i, /facts?$/i]));

    const summary = textOf(summaryBody);
    if (!summary) warnings.push('site-ready summary not found');

    const combatSubs = combat ? splitHeadings(combat.body, 3) : [];
    const combatList = (patterns) => listItems(pickSubsection(combatSubs, patterns));

    const profile = {
        slug,
        title: plainText(h1),
        scientificName,
        specimen,
        specimenSex: specimenSex(specimen),
        extinct,
        facts,
        headline: headline.values,
        substats: substats.values,
        derivedSubstats,
        abilities,
        traits,
        summary,
        description: firstSentences(summary || textOf(narrativeBody), 240),
        narrative: paragraphs(narrativeBody),
        sections: {
            habitat: textOf(sub([/habitat/i])),
            range: textOf(sub([/geographic range/i, /^range/i, /distribution/i])),
            diet: textOf(sub([/diet/i])),
            ecology: textOf(sub([/^ecology/i])),
            social: textOf(sub([/social/i])),
            reproduction: textOf(sub([/reproduction/i, /life history/i])),
            conservation: textOf(conservationBody),
            adaptations: textOf(sub([/adaptation/i])),
            humanInteraction: textOf(sub([/human/i]))
        },
        conservationStatus: parseConservationStatus(conservationBody || text),
        funFacts: funFactItems.slice(0, 8),
        combat: {
            weapons: textOf(pickSubsection(combatSubs, [/primary.*weapon/i, /weapons?/i, /offen/i])),
            weaknesses: combatList([/weakness/i]).slice(0, 6),
            goodMatchups: combatList([/good matchup/i, /favou?rable/i, /strong against/i]).slice(0, 6),
            badMatchups: combatList([/bad matchup/i, /unfavou?rable/i, /poor/i, /weak against/i]).slice(0, 6)
        },
        image: parseImageSection(imageSection),
        sources: parseSources(sourceSection),
        warnings
    };

    if (!profile.sources.length) warnings.push('no source URLs found');
    return profile;
}

module.exports = {
    FACT_FIELDS,
    HEADLINE_STATS,
    SUBSTATS,
    firstSentences,
    labeledNumber,
    parseResearchProfile,
    plainText,
    splitHeadings
};
