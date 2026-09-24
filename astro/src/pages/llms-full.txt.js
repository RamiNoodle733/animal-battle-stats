// /llms-full.txt: the whole roster as plain text for AI assistants.
import { animals, STATS, BIOMES, fmtScore, fmtWeight, fmtLength, fmtSpeed, fmtBite, fmtYears } from '../lib/catalog.js';
import { SITE } from '../lib/site.js';

export function GET() {
    const out = [`# Animal Battle Stats: full dataset (${animals.length} animals)`, '', `Source: ${SITE.url}. Ratings are 0-100 on one absolute scale. Blank measurements mean no reliable measurement exists.`, ''];
    for (const animal of animals) {
        const profile = animal.profile || {};
        const facts = [
            ['Weight', fmtWeight(animal.weight_kg)], ['Length', fmtLength(animal.length_cm)], ['Height', fmtLength(animal.height_cm)],
            ['Top speed', fmtSpeed(animal.speed_mps)], ['Bite force', fmtBite(animal.bite_force_psi)], ['Lifespan', fmtYears(animal.lifespan_years)]
        ].filter(([key, value]) => value && !((profile.unverifiedFacts || []).includes({ Weight: 'weight_kg' }[key]))).map(([key, value]) => `${key} ${value.metric}${value.imperial ? ` (${value.imperial})` : ''}`);
        out.push(`## ${animal.name} (${animal.scientific_name})`);
        out.push(`URL: ${SITE.url}/stats/${animal.slug}`);
        out.push(`Rank #${animal.rank} of ${animals.length} | ${animal.tier} tier | power index ${fmtScore(animal.powerIndex)} | ${animal.type}, ${animal.class} | home biome: ${BIOMES[animal.biome]?.label || 'n/a'}${profile.conservationStatus ? ` | IUCN: ${profile.conservationStatus}` : ''}`);
        out.push(`Stats: ${STATS.map((stat) => `${stat.label} ${fmtScore(animal[stat.key])}`).join(', ')}`);
        if (facts.length) out.push(`Measurements: ${facts.join('; ')}`);
        if (profile.specimen) out.push(`Rated specimen: ${profile.specimen.split(/(?<=[.!?])\s+(?=[A-Z])/)[0]}`);
        const abilities = (profile.abilities || []).map((item) => `${item.name}${item.description ? `: ${item.description}` : ''}`);
        if (abilities.length) out.push(`Abilities: ${abilities.join(' | ')}`);
        else if (animal.special_abilities?.length) out.push(`Abilities: ${animal.special_abilities.join(', ')}`);
        const traits = (profile.traits || []).map((item) => item.name);
        if (traits.length) out.push(`Traits: ${traits.join(', ')}`);
        out.push(`Summary: ${profile.summary || animal.description || ''}`);
        const sources = (profile.sources || []).slice(0, 4).map((source) => `${source.title} <${source.url}>`);
        if (sources.length) out.push(`Key sources: ${sources.join('; ')}`);
        out.push('');
    }
    return new Response(out.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
