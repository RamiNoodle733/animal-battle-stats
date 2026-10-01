// The collectible card's data for one animal, written into its page at build
// time and drawn in the browser by scripts/abs-card.js (the 3D card, the share
// pictures and videos). Same facts as the page: unverified measurements stay off.
import { animals, GROUPS, STATS, fmtWeight, fmtLength, fmtSpeed, fmtBite, fmtYears, fmtScore } from './catalog.js';

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
