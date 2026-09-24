#!/usr/bin/env node
'use strict';

// Merges the automated research reports (animal-research-for-update/animals/*.md)
// into the site's canonical data.
//
//   data/legacy-animal-stats.json   frozen pre-research catalogue (never edited)
//   animal_stats.json               canonical catalogue = legacy + research overlay
//   data/animal-profiles.json       rich research content for profile pages
//   data/research-import-report.json per-animal parse status and warnings
//
// animal_stats.json keeps its original schema because other consumers read it
// (the API, the Astro pages and the Roblox game's data build). New fields are
// additive only. Animals without a finished report keep their legacy values.
//
// Usage: node scripts/research/import-research.js [--check]
//   --check  exit 1 when the generated files are out of date (no writes)

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { execFileSync } = require('child_process');
const { parseResearchProfile } = require('./parse-research-profile');

const ROOT = path.resolve(__dirname, '..', '..');
const RESEARCH_DIR = path.join(ROOT, 'animal-research-for-update', 'animals');
const LEGACY_PATH = path.join(ROOT, 'data', 'legacy-animal-stats.json');
const CANONICAL_PATH = path.join(ROOT, 'animal_stats.json');
const PROFILES_PATH = path.join(ROOT, 'data', 'animal-profiles.json');
const REPORT_PATH = path.join(ROOT, 'data', 'research-import-report.json');
const OVERRIDES_PATH = path.join(ROOT, 'data', 'research-overrides.json');

const HEADLINE_KEYS = ['attack', 'defense', 'agility', 'stamina', 'intelligence', 'special'];
const SUBSTAT_KEYS = [
    'raw_power', 'maneuverability', 'endurance', 'recovery', 'tactics', 'senses',
    'ferocity', 'weaponry', 'protection', 'toughness', 'speed', 'abilities'
];
const FACT_KEYS = ['weight_kg', 'height_cm', 'length_cm', 'speed_mps', 'lifespan_years', 'bite_force_psi'];

function slugify(value) {
    return String(value || '')
        .toLowerCase()
        .normalize('NFKD')
        .replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-|-$/g, '');
}

function readJson(filePath, fallback) {
    if (!fs.existsSync(filePath)) return fallback;
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

function stableJson(value) {
    return `${JSON.stringify(value, null, 2)}\n`;
}

// Animal images are served with a one-year immutable cache, so their URLs
// carry a content hash: replacing a cutout changes the URL everywhere.
function versionImage(record) {
    let asset = String(record.image || '').split(/[?#]/, 1)[0];
    // A transparent PNG cutout at the conventional path replaces older JPEG photos.
    const cutout = `/images/animals/${slugify(record.name)}.png`;
    if (asset !== cutout && fs.existsSync(path.join(ROOT, cutout.slice(1)))) asset = cutout;
    const file = path.join(ROOT, asset.replace(/^\/+/, ''));
    if (!asset.startsWith('/images/animals/') || !fs.existsSync(file)) return record;
    const hash = crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex').slice(0, 12);
    return { ...record, image: `${asset}?v=${hash}` };
}

function round1(value) {
    return Math.round(Number(value) * 10) / 10;
}

// Last commit date per research file, from one git call. Returns an empty map
// when history is unavailable (shallow CI clones); callers fall back to the
// date already recorded for an unchanged file.
function researchCommitDates() {
    const dates = new Map();
    try {
        const log = execFileSync('git', [
            'log', '--format=@@%cI', '--name-only', '--', 'animal-research-for-update/animals'
        ], { cwd: ROOT, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'] });
        let current = null;
        for (const line of log.split('\n')) {
            if (line.startsWith('@@')) {
                current = line.slice(2, 12);
            } else if (line.trim() && current) {
                const slug = path.basename(line.trim(), '.md');
                if (!dates.has(slug)) dates.set(slug, current);
            }
        }
    } catch {
        // No git available: handled by the caller.
    }
    return dates;
}

function ensureLegacySnapshot() {
    if (fs.existsSync(LEGACY_PATH)) return readJson(LEGACY_PATH);
    const current = readJson(CANONICAL_PATH, []);
    if (current.some((animal) => animal.research_status)) {
        throw new Error('animal_stats.json already contains research data; restore data/legacy-animal-stats.json from git instead of re-snapshotting.');
    }
    fs.writeFileSync(LEGACY_PATH, stableJson(current));
    return current;
}

function pickScientificName(legacyName, researchName) {
    if (!researchName) return legacyName;
    // Keep a more specific legacy trinomial (e.g. Panthera tigris altaica).
    if (legacyName && legacyName.startsWith(`${researchName} `)) return legacyName;
    return researchName;
}

function validateProfile(profile) {
    const problems = [];
    const missingHeadline = HEADLINE_KEYS.filter((key) => typeof profile.headline[key] !== 'number');
    if (missingHeadline.length) problems.push(`missing headline ratings: ${missingHeadline.join(', ')}`);
    const outOfRange = HEADLINE_KEYS.filter((key) => profile.headline[key] < 0 || profile.headline[key] > 100);
    if (outOfRange.length) problems.push(`headline ratings out of range: ${outOfRange.join(', ')}`);
    return problems;
}

function buildCanonicalRecord(legacy, profile, researchedAt, override) {
    const substats = {};
    for (const key of SUBSTAT_KEYS) {
        const value = profile.substats[key];
        substats[key] = typeof value === 'number' ? round1(value) : round1(profile.headline[fallbackHeadline(key)]);
    }
    const facts = {};
    for (const key of FACT_KEYS) {
        facts[key] = typeof profile.facts[key] === 'number' ? round1(profile.facts[key]) : legacy[key];
    }
    // Tiny animals need more precision than one decimal place.
    if (profile.facts.weight_kg > 0 && profile.facts.weight_kg < 1) facts.weight_kg = Number(profile.facts.weight_kg);
    // Research uses 0.0 for "no defensible measurement". Body mass drives game
    // scaling elsewhere (the Roblox build sizes hordes by it), so an unresolved
    // mass keeps the legacy estimate here; the profile marks it as unverified.
    if (!(facts.weight_kg > 0) && legacy.weight_kg > 0) facts.weight_kg = legacy.weight_kg;

    const record = {
        ...legacy,
        agility: round1(profile.headline.agility),
        attack: round1(profile.headline.attack),
        bite_force_psi: facts.bite_force_psi,
        defense: round1(profile.headline.defense),
        description: profile.description.length > 200
            ? `${profile.description.slice(0, 199).replace(/\s+\S*$/, '')}…`
            : profile.description,
        height_cm: facts.height_cm,
        intelligence: round1(profile.headline.intelligence),
        length_cm: facts.length_cm,
        lifespan_years: facts.lifespan_years,
        scientific_name: pickScientificName(legacy.scientific_name, profile.scientificName),
        special_abilities: profile.abilities.map((ability) => ability.name).filter(Boolean),
        speed_mps: facts.speed_mps,
        stamina: round1(profile.headline.stamina),
        substats,
        unique_traits: profile.traits.map((trait) => trait.name).filter(Boolean),
        updatedAt: `${researchedAt}T00:00:00.000Z`,
        weight_kg: facts.weight_kg,
        special: round1(profile.headline.special),
        research_status: 'researched',
        research_updated: researchedAt
    };
    if (record.special_abilities.length < 2) record.special_abilities = legacy.special_abilities;
    if (record.unique_traits.length < 2) record.unique_traits = legacy.unique_traits;
    return override ? { ...record, ...override } : record;
}

function fallbackHeadline(substat) {
    return {
        raw_power: 'attack', weaponry: 'attack', ferocity: 'attack',
        protection: 'defense', toughness: 'defense',
        maneuverability: 'agility', speed: 'agility',
        endurance: 'stamina', recovery: 'stamina',
        tactics: 'intelligence', senses: 'intelligence',
        abilities: 'special'
    }[substat];
}

function buildProfileEntry(legacy, profile, meta) {
    return {
        name: legacy.name,
        status: 'researched',
        researchedAt: meta.researchedAt,
        sourceFile: `animal-research-for-update/animals/${meta.slug}.md`,
        contentHash: meta.contentHash,
        scientificName: pickScientificName(legacy.scientific_name, profile.scientificName),
        specimen: profile.specimen,
        specimenSex: profile.specimenSex,
        extinct: profile.extinct,
        summary: profile.summary,
        narrative: profile.narrative,
        sections: profile.sections,
        conservationStatus: profile.conservationStatus,
        funFacts: profile.funFacts,
        abilities: profile.abilities,
        traits: profile.traits,
        combat: profile.combat,
        derivedSubstats: profile.derivedSubstats,
        facts: profile.facts,
        unverifiedFacts: ['weight_kg', 'height_cm', 'length_cm', 'speed_mps', 'lifespan_years', 'bite_force_psi']
            .filter((key) => !(profile.facts[key] > 0)),
        sources: profile.sources,
        imageLead: profile.image
    };
}

function main() {
    const checkOnly = process.argv.includes('--check');
    const legacyAnimals = ensureLegacySnapshot();
    const overrides = readJson(OVERRIDES_PATH, {});
    const previousProfiles = readJson(PROFILES_PATH, { animals: {} }).animals || {};
    const commitDates = researchCommitDates();
    const today = new Date().toISOString().slice(0, 10);

    const researchFiles = fs.existsSync(RESEARCH_DIR)
        ? new Set(fs.readdirSync(RESEARCH_DIR).filter((file) => file.endsWith('.md')).map((file) => path.basename(file, '.md')))
        : new Set();

    const canonical = [];
    const profiles = {};
    const report = { researched: 0, legacy: 0, rejected: 0, animals: {} };

    for (const legacy of legacyAnimals) {
        const slug = slugify(legacy.name);
        if (!researchFiles.has(slug)) {
            canonical.push(versionImage({ ...legacy, research_status: 'legacy', research_updated: null }));
            profiles[slug] = { name: legacy.name, status: 'legacy' };
            report.legacy += 1;
            report.animals[slug] = { status: 'legacy' };
            continue;
        }

        const markdown = fs.readFileSync(path.join(RESEARCH_DIR, `${slug}.md`), 'utf8');
        const contentHash = crypto.createHash('sha256').update(markdown).digest('hex').slice(0, 16);
        const profile = parseResearchProfile(markdown, { slug });
        const problems = validateProfile(profile);
        if (problems.length) {
            canonical.push(versionImage({ ...legacy, research_status: 'legacy', research_updated: null }));
            profiles[slug] = { name: legacy.name, status: 'legacy' };
            report.rejected += 1;
            report.animals[slug] = { status: 'rejected', problems, warnings: profile.warnings };
            continue;
        }

        const previous = previousProfiles[slug];
        const researchedAt = commitDates.get(slug)
            || (previous && previous.contentHash === contentHash && previous.researchedAt)
            || today;
        canonical.push(versionImage(buildCanonicalRecord(legacy, profile, researchedAt, overrides[legacy.name])));
        profiles[slug] = buildProfileEntry(legacy, profile, { slug, contentHash, researchedAt });
        report.researched += 1;
        report.animals[slug] = profile.warnings.length
            ? { status: 'researched', warnings: profile.warnings }
            : { status: 'researched' };
    }

    const unknownFiles = [...researchFiles].filter((slug) => !legacyAnimals.some((animal) => slugify(animal.name) === slug));
    if (unknownFiles.length) report.unknownResearchFiles = unknownFiles;

    const outputs = [
        [CANONICAL_PATH, stableJson(canonical)],
        [PROFILES_PATH, stableJson({ schemaVersion: 1, animals: profiles })],
        [REPORT_PATH, stableJson(report)]
    ];

    if (checkOnly) {
        const stale = outputs.filter(([filePath, content]) => !fs.existsSync(filePath) || fs.readFileSync(filePath, 'utf8') !== content);
        if (stale.length) {
            console.error(`Research data is out of date: ${stale.map(([filePath]) => path.relative(ROOT, filePath)).join(', ')}. Run npm run research:import.`);
            process.exit(1);
        }
        console.log(`Research data is current (${report.researched} researched, ${report.legacy} legacy).`);
        return;
    }

    for (const [filePath, content] of outputs) fs.writeFileSync(filePath, content);
    console.log(`Research import: ${report.researched} researched, ${report.legacy} awaiting research, ${report.rejected} rejected.`);
    if (unknownFiles.length) console.warn(`Research files without a roster animal: ${unknownFiles.join(', ')}`);
}

main();
