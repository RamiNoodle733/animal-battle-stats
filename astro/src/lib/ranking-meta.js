// Titles, descriptions, FAQ and structured data for the ranking pages
// (/rankings and /rankings/<category>). Each one is the Animal Database,
// opened already sorted by its ranking.
import { animals, fmtScore, POWER_WEIGHTS } from './catalog.js';
import { leaderboard } from './categories.js';
import { SITE, absoluteUrl } from './site.js';

// Category key -> the Animal Database sort key.
export const DB_SORT = Object.freeze({
    attack: 'attack', defense: 'defense', agility: 'agility', stamina: 'stamina', intelligence: 'intelligence', special: 'special',
    weight_kg: 'weight', speed_mps: 'speed', bite_force_psi: 'bite', length_cm: 'length'
});

export function rankingPage(category = null) {
    const year = new Date().getFullYear();
    const ranked = category ? leaderboard(category) : animals;
    const show = category ? category.show : (animal) => fmtScore(animal.powerIndex);
    const path = category ? `/rankings/${category.slug}` : '/rankings';
    const heading = category ? category.label : 'Power rankings';
    const title = category
        ? `${category.label} in the World (${year}): Top ${ranked.length} Ranked | ${SITE.name}`
        : `Strongest Animals in the World ${year}: Animal Power Rankings of ${animals.length} Animals | ${SITE.name}`;
    const description = category
        ? `${category.intro} #1: ${ranked[0].name} (${show(ranked[0])}), #2: ${ranked[1].name}, #3: ${ranked[2].name}. Research-backed rankings with sources.`
        : `Who is the strongest animal? ${animals[0].name}, ${animals[1].name} and ${animals[2].name} top our research-backed power rankings of ${animals.length} real animals. Sort by any stat, vote, and compare.`;
    const pct = (value) => `${Math.round(value * 100)}%`;
    const land = animals.filter((animal) => animal.group !== 'sea');
    const faq = category
        ? [
            { q: `What is the #1 animal for ${category.stat.toLowerCase()}?`, a: `The ${ranked[0].name} leads with ${show(ranked[0])}, ahead of the ${ranked[1].name} (${show(ranked[1])}) and the ${ranked[2].name} (${show(ranked[2])}).` },
            { q: 'How is this ranking made?', a: category.measurement ? `${category.intro} Values describe the healthy adult each profile is rated on, with sources on every profile.` : `${category.intro} The ${category.stat.toLowerCase()} rating is on one 0–100 scale for all ${animals.length} animals, set in each animal's research report.` }
        ]
        : [
            { q: 'What is the strongest animal in the world?', a: `On our roster the ${animals[0].name} ranks #1 with a power index of ${fmtScore(animals[0].powerIndex)}, ahead of the ${animals[1].name} (${fmtScore(animals[1].powerIndex)}) and the ${animals[2].name} (${fmtScore(animals[2].powerIndex)}).` },
            { q: 'What is the strongest land animal?', a: `The ${land[0].name} is the highest-ranked land animal (power ${fmtScore(land[0].powerIndex)}), followed by the ${land[1].name} and the ${land[2].name}.` },
            { q: 'How is the power index calculated?', a: `Six battle ratings (0–100) weighted: attack ${pct(POWER_WEIGHTS.attack)}, defense ${pct(POWER_WEIGHTS.defense)}, agility ${pct(POWER_WEIGHTS.agility)}, stamina ${pct(POWER_WEIGHTS.stamina)}, special ${pct(POWER_WEIGHTS.special)}, intelligence ${pct(POWER_WEIGHTS.intelligence)}.` },
            { q: 'Do votes change the ranking?', a: 'No. Community votes show what fans think of each animal (sort by Fan votes to see them); the power ranking only uses the researched stats.' }
        ];
    // The table lists every animal: the ranked ones first, then the rest.
    const rest = animals.filter((animal) => !ranked.includes(animal));
    const list = [...ranked, ...rest];
    const jsonLd = [
        {
            '@type': 'CollectionPage',
            url: absoluteUrl(path),
            name: heading,
            description,
            isPartOf: { '@id': `${SITE.url}/#website` },
            mainEntity: {
                '@type': 'ItemList',
                name: heading,
                numberOfItems: ranked.length,
                itemListOrder: 'https://schema.org/ItemListOrderDescending',
                itemListElement: ranked.slice(0, 100).map((animal, index) => ({ '@type': 'ListItem', position: index + 1, name: `${animal.name} (${show(animal)})`, url: absoluteUrl(`/stats/${animal.slug}`) }))
            }
        },
        { '@type': 'FAQPage', mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) }
    ];
    return {
        path, heading, title, description, jsonLd, list,
        sort: category ? DB_SORT[category.key] || 'rank' : 'rank',
        about: { intro: category ? category.intro : null, faq }
    };
}
