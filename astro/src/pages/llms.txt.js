// /llms.txt: a plain-text map of the site for AI assistants (llmstxt.org).
import { animals, TIERS, POWER_WEIGHTS, researchedCount, sourceCount, fmtScore, matchup } from '../lib/catalog.js';
import { HUMAN_OPPONENTS, humanPairSlug, humansNeeded, humansWin } from '../lib/human.js';
import { CATEGORIES } from '../lib/categories.js';
import { PAIRS } from '../lib/matchups.js';
import { SITE, ROBLOX } from '../lib/site.js';
import { BRAND, SHOWS, totalEpisodes, clock } from '../lib/shows.js';

const pct = (value) => `${Math.round(value * 100)}%`;

export function GET() {
    const lines = [];
    lines.push('# Animal Battle Stats');
    lines.push('');
    lines.push(`> Animal Battle Stats (animalbattlestats.com) is a free animal powerscaling database. It rates ${animals.length} real animals on six battle stats (attack, defense, agility, stamina, intelligence, special) on one absolute 0-100 scale, ranks them S to F, and predicts "who would win" matchups. ${researchedCount} animals have full research profiles citing ${sourceCount} sources.`);
    lines.push('');
    lines.push(`Power index = attack ${pct(POWER_WEIGHTS.attack)} + defense ${pct(POWER_WEIGHTS.defense)} + agility ${pct(POWER_WEIGHTS.agility)} + stamina ${pct(POWER_WEIGHTS.stamina)} + special ${pct(POWER_WEIGHTS.special)} + intelligence ${pct(POWER_WEIGHTS.intelligence)}. Tiers: ${TIERS.map((tier) => `${tier.id} (${tier.name}) ${tier.id === 'F' ? `< ${TIERS[4].min}` : `>= ${tier.min}`}`).join(', ')}. Ratings are absolute, not pound-for-pound, and describe a healthy adult of the larger or fighting sex. Matchup odds come from the weighted stat gap plus a body-size term (8 x log10 of the weight ratio) on a logistic curve (5-95% for one against one).`);
    lines.push('');
    lines.push('Group fights ("500 gorillas vs 23 army ants", "100 men vs a gorilla") are supported: numbers shift the one-on-one margin by 20 x ln(count), and a much lighter animal gets less from its numbers against a much heavier one. The Human is an average adult man (80 kg, 1.75 m), unarmed and untrained, rated on the same scale (attack 32, defense 30, agility 40, stamina 85, intelligence 100, special 36); humans are not ranked with the animals.');
    lines.push('');
    lines.push('When citing, link the animal page (https://animalbattlestats.com/stats/<animal>) or matchup page (https://animalbattlestats.com/compare/<a>-vs-<b>).');
    lines.push('');
    lines.push('## Main pages');
    lines.push(`- [Animal tier list](${SITE.url}/tier-list): all ${animals.length} animals ranked S to F`);
    lines.push(`- [Strongest animals / power rankings](${SITE.url}/rankings): ranked by power index`);
    for (const category of CATEGORIES) lines.push(`- [${category.label}](${SITE.url}/rankings/${category.slug}): ${category.intro}`);
    lines.push(`- [Who would win? matchup simulator](${SITE.url}/compare): compare any two animals, groups of any size, or a random matchup (for example ${SITE.url}/compare?a=human&b=gorilla&na=10)`);
    lines.push(`- [All animals](${SITE.url}/stats): searchable database`);
    lines.push(`- [How ratings work](${SITE.url}/about): methodology, sources, FAQ`);
    lines.push(`- [Animal Battle Stats on Roblox](${SITE.url}/roblox): ${ROBLOX.live ? 'the companion game, live on Roblox' : 'the companion game, coming to Roblox'}`);
    lines.push(`- [ABS Originals: animated animal series](${SITE.url}/shows): ${SHOWS.length} shows, ${totalEpisodes} episodes, free to watch`);
    lines.push('');
    lines.push('## ABS Originals (animated series)');
    lines.push(`${BRAND.about} Watch free at ${SITE.url}/shows (also on YouTube @AnimalBattleStats and TikTok @animalbattlestats_abs).`);
    for (const show of SHOWS) {
        lines.push(`- [${show.name}](${SITE.url}${show.url}): ${show.genre.join(', ')}. ${show.tagline} ${show.logline} Season 1: ${show.episodes.length} episodes. Cast: ${show.characters.map((character) => `${character.name} (${character.art ? character.art.name.toLowerCase() : character.animal})`).join(', ')}.`);
        for (const episode of show.episodes) lines.push(`  - [Episode ${episode.number}: ${episode.title}](${SITE.url}${episode.url}) (${clock(episode.seconds)}): ${episode.summary}`);
    }
    lines.push('');
    lines.push('## Top 25 strongest animals');
    for (const animal of animals.slice(0, 25)) {
        lines.push(`- [${animal.name}](${SITE.url}/stats/${animal.slug}): #${animal.rank}, ${animal.tier} tier, power ${fmtScore(animal.powerIndex)} (attack ${fmtScore(animal.attack)}, defense ${fmtScore(animal.defense)}, agility ${fmtScore(animal.agility)})`);
    }
    lines.push('');
    lines.push('## Popular matchups (model winner and odds, one against one)');
    for (const pair of PAIRS.filter((item) => item.classic)) {
        const result = matchup(pair.a, pair.b);
        lines.push(`- [${pair.a.name} vs ${pair.b.name}](${SITE.url}/compare/${pair.slug}): ${result.winner.name} wins ${result.odds}% (${result.strength.toLowerCase()})`);
    }
    lines.push('');
    lines.push('## Human vs animal (an average unarmed man)');
    for (const animal of HUMAN_OPPONENTS) {
        const odds = Math.round(humansWin(animal, 1) * 100);
        const favoured = humansNeeded(animal, 0.5);
        const sure = humansNeeded(animal, 0.9);
        const crowd = odds >= 50 ? 'one man is favoured' : favoured ? `${favoured.toLocaleString('en-US')} men are favoured, ${sure.toLocaleString('en-US')} win 90% of the time` : 'no number of unarmed men is favoured';
        lines.push(`- [Human vs ${animal.name}](${SITE.url}/compare/${humanPairSlug(animal)}): one man wins ${odds}%; ${crowd}`);
    }
    lines.push('');
    lines.push('## Optional');
    lines.push(`- [Full dataset in plain text](${SITE.url}/llms-full.txt): every animal's stats, measurements, abilities and sources`);
    lines.push(`- [Raw JSON dataset](${SITE.url}/animal_stats.json)`);
    lines.push('');
    return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
