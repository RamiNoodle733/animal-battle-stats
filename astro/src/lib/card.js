// The collectible card's data for one animal, written into its page at build
// time and drawn in the browser by scripts/abs-card.js (the 3D card, the share
// pictures and videos). Same facts as the page: unverified measurements stay off.
// The build also draws every card as files (scripts/images/build-cards.mjs);
// cardFiles() and matchupPreview() name them for the pages.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { animals, GROUPS, STATS, matchup, fmtWeight, fmtLength, fmtSpeed, fmtBite, fmtYears, fmtScore } from './catalog.js';

const cap = (text) => (text ? text.charAt(0).toUpperCase() + text.slice(1) : '');
const firstSentence = (text) => String(text || '').split(/(?<=[.!?])\s+(?=[A-Z])/)[0];

export function cardData(animal) {
    const profile = animal.profile || {};
    const unverified = new Set(animal.researched ? profile.unverifiedFacts || [] : []);
    const fact = (key, format) => (unverified.has(key) ? null : format(animal[key])?.metric || null);
    const abilities = profile.abilities?.length ? profile.abilities : (animal.special_abilities || []).map((name) => ({ name, description: '' }));
    const traits = profile.traits?.length ? profile.traits : (animal.unique_traits || []).map((name) => ({ name, description: '' }));
    const move = (kind) => (item) => ({ name: item.name, text: cap(item.description), kind });
    // Two abilities and two traits; if either runs short, the other fills in.
    const pool = [...abilities.slice(0, 2).map(move('ability')), ...traits.slice(0, 2).map(move('trait'))];
    const extra = [...abilities.slice(2).map(move('ability')), ...traits.slice(2).map(move('trait'))];
    const moves = [...pool, ...extra].slice(0, 4);
    const lead = abilities[0];
    const bite = fact('bite_force_psi', fmtBite);
    return {
        slug: animal.slug,
        name: animal.name,
        sci: animal.scientific_name || '',
        tier: animal.tier.toLowerCase(),
        tierLabel: animal.tier,
        power: fmtScore(animal.powerIndex),
        rank: animal.rank,
        total: animals.length,
        group: GROUPS.find((group) => group.key === animal.group)?.label || '',
        cls: animal.class || '',
        biome: animal.biome,
        status: profile.conservationStatus || null,
        art: { src: animal.img.src, ar: animal.img.ar, k: animal.img.k },
        stats: Object.fromEntries(STATS.map((stat) => [stat.key, Number(animal[stat.key]) || 0])),
        measures: [
            ['Weight', fact('weight_kg', fmtWeight)],
            animal.length_cm ? ['Length', fact('length_cm', fmtLength)] : ['Height', fact('height_cm', fmtLength)],
            ['Top speed', fact('speed_mps', fmtSpeed)],
            bite ? ['Bite force', bite] : ['Lifespan', fact('lifespan_years', fmtYears)]
        ],
        moves,
        signature: lead ? { name: lead.name, text: cap(lead.description) || firstSentence(profile.summary || animal.description) } : null
    };
}

// For a <script type="application/json">: no "</script>" can close it early.
export const cardJson = (animal) => JSON.stringify(cardData(animal)).replace(/</g, '\\u003c');

// ---------------------------------------------------------------- the card files

export const CARD_FILE = Object.freeze({ width: 750, height: 1050 });
export const PREVIEW_FILE = Object.freeze({ width: 1200, height: 630 });

// Images are cached for a year under one name, and link previews are cached by
// address, so each file's address carries a version: a hash of everything it
// is drawn from (the card data, the renderer and the art). A change to any of
// them gives the card a new address.
const RENDERER = (() => {
    const root = process.cwd();
    const ui = path.join(root, 'images', 'ui');
    const files = [
        path.join(root, 'astro', 'src', 'scripts', 'abs-card.js'),
        path.join(root, 'astro', 'src', 'scripts', 'card-scenes.js'),
        ...fs.readdirSync(ui).filter((name) => /\.(png|webp|svg)$/.test(name)).sort().map((name) => path.join(ui, name)),
        ...fs.readdirSync(path.join(ui, 'icons')).sort().map((name) => path.join(ui, 'icons', name)),
        path.join(root, 'images', 'logo.png')
    ];
    const hash = crypto.createHash('sha1');
    for (const file of files) hash.update(fs.readFileSync(file));
    return hash.digest('hex');
})();
const version = (value) => crypto.createHash('sha1').update(RENDERER + JSON.stringify(value)).digest('hex').slice(0, 10);

// An animal's card (front and back) and its page preview.
export function cardFiles(animal) {
    const v = version(cardData(animal));
    return {
        front: `/images/cards/${animal.slug}.webp?v=${v}`,
        back: `/images/cards/${animal.slug}-back.webp?v=${v}`,
        preview: `/images/og/${animal.slug}.jpg?v=${v}`
    };
}

// A matchup's preview job (what the build draws) and its address. `file` is
// where it lands under /images/og/ ("vs/<a>-vs-<b>", or "compare").
export function matchupJob(file, a, b) {
    const result = matchup(a, b);
    return { file, a: a.slug, b: b.slug, oddsA: result.winner.slug === a.slug ? result.odds : 100 - result.odds, draw: result.draw };
}
export function matchupPreview(file, a, b) {
    return `/images/og/${file}.jpg?v=${version([matchupJob(file, a, b), cardData(a), cardData(b)])}`;
}

// Alt text that reads the card out.
export function cardAlt(animal, side = 'front') {
    const card = cardData(animal);
    if (side === 'back') return `${animal.name} battle card, back: ${STATS.map((stat) => `${stat.label.toLowerCase()} ${fmtScore(card.stats[stat.key])}`).join(', ')}${card.signature ? `; signature move ${card.signature.name}` : ''}`;
    return `${animal.name} battle card: ${card.rank ? `#${card.rank} of ${card.total}, ` : ''}${card.tierLabel} tier, power ${card.power}`;
}
