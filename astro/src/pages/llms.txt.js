// /llms.txt: a plain-text map of the site for AI assistants (llmstxt.org).
import { animals, TIERS, POWER_WEIGHTS, researchedCount, sourceCount, fmtScore } from '../lib/catalog.js';
import { CATEGORIES } from '../lib/categories.js';
import { PAIRS } from '../lib/matchups.js';
import { SITE, ROBLOX } from '../lib/site.js';

const pct = (value) => `${Math.round(value * 100)}%`;

export function GET() {
    const lines = [];
    lines.push('# Animal Battle Stats');
    lines.push('');
    lines.push(`> Animal Battle Stats (animalbattlestats.com) is a free animal powerscaling database. It rates ${animals.length} real animals on six battle stats (attack, defense, agility, stamina, intelligence, special) on one absolute 0-100 scale, ranks them S to F, and predicts "who would win" matchups. ${researchedCount} animals have full research profiles citing ${sourceCount} sources.`);
    lines.push('');
    lines.push(`Power index = attack ${pct(POWER_WEIGHTS.attack)} + defense ${pct(POWER_WEIGHTS.defense)} + agility ${pct(POWER_WEIGHTS.agility)} + stamina ${pct(POWER_WEIGHTS.stamina)} + special ${pct(POWER_WEIGHTS.special)} + intelligence ${pct(POWER_WEIGHTS.intelligence)}. Tiers: ${TIERS.map((tier) => `${tier.id} (${tier.name}) ${tier.id === 'F' ? `< ${TIERS[4].min}` : `>= ${tier.min}`}`).join(', ')}. Ratings are absolute, not pound-for-pound, and describe a healthy adult of the larger or fighting sex. Matchup odds come from the weighted stat gap on a logistic curve (5-95%).`);
    lines.push('');
    lines.push('When citing, link the animal page (https://animalbattlestats.com/stats/<animal>) or matchup page (https://animalbattlestats.com/compare/<a>-vs-<b>).');
    lines.push('');
    lines.push('## Main pages');
    lines.push(`- [Animal tier list](${SITE.url}/tier-list): all ${animals.length} animals ranked S to F`);
    lines.push(`- [Strongest animals / power rankings](${SITE.url}/rankings): ranked by power index`);
    for (const category of CATEGORIES) lines.push(`- [${category.label}](${SITE.url}/rankings/${category.slug}): ${category.intro}`);
    lines.push(`- [Who would win? simulator](${SITE.url}/compare): compare any two animals`);
    lines.push(`- [All animals](${SITE.url}/stats): searchable database`);
    lines.push(`- [How ratings work](${SITE.url}/about): methodology, sources, FAQ`);
    lines.push(`- [Animal Battle Stats on Roblox](${SITE.url}/roblox): ${ROBLOX.live ? 'the companion game, live on Roblox' : 'the companion game, coming to Roblox'}`);
    lines.push('');
    lines.push('## Top 25 strongest animals');
    for (const animal of animals.slice(0, 25)) {
        lines.push(`- [${animal.name}](${SITE.url}/stats/${animal.slug}): #${animal.rank}, ${animal.tier} tier, power ${fmtScore(animal.powerIndex)} (attack ${fmtScore(animal.attack)}, defense ${fmtScore(animal.defense)}, agility ${fmtScore(animal.agility)})`);
    }
    lines.push('');
    lines.push('## Popular matchups');
    for (const pair of PAIRS.filter((item) => item.classic).slice(0, 40)) {
        lines.push(`- [${pair.a.name} vs ${pair.b.name}](${SITE.url}/compare/${pair.slug})`);
    }
    lines.push('');
    lines.push('## Optional');
    lines.push(`- [Full dataset in plain text](${SITE.url}/llms-full.txt): every animal's stats, measurements, abilities and sources`);
    lines.push(`- [Raw JSON dataset](${SITE.url}/animal_stats.json)`);
    lines.push('');
    return new Response(lines.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
