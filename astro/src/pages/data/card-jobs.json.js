// Build-only list for scripts/images/build-cards.mjs: every animal's card data
// and every matchup page's preview, to draw the battle cards and the link
// previews that show them. The build renders the images after Astro and
// removes this file before deploy.
import { animals, getAnimal } from '../../lib/catalog.js';
import { PAIRS } from '../../lib/matchups.js';
import { cardData, matchupJob } from '../../lib/card.js';
import { HUMAN_FIGHTER, HUMAN_OPPONENTS, humanPairSlug } from '../../lib/human.js';

export function GET() {
    const lion = getAnimal('african-lion');
    const tiger = getAnimal('siberian-tiger');
    const jobs = {
        animals: animals.map(cardData),
        // Cards drawn only for matchups (no card files of their own).
        fighters: [cardData(HUMAN_FIGHTER)],
        matchups: [
            ...PAIRS.map((pair) => matchupJob(`vs/${pair.slug}`, pair.a, pair.b)),
            ...HUMAN_OPPONENTS.map((animal) => matchupJob(`vs/${humanPairSlug(animal)}`, HUMAN_FIGHTER, animal)),
            // the Versus screen's own preview: a classic
            ...(lion && tiger ? [matchupJob('compare', lion, tiger)] : [])
        ]
    };
    return new Response(JSON.stringify(jobs), { headers: { 'Content-Type': 'application/json' } });
}
