// Usage: node scripts/research/check-new-animal.js <slug> [<slug> ...]
// Parses a research report with the site's parser and checks the catalogue sidecar.
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..', '..');
const { parseResearchProfile } = require(path.join(ROOT, 'scripts/research/parse-research-profile.js'));
const EVO = /evolv|evolution|adapt|ancest|lineage|descended from|natural selection|sexual(ly)? select|phylogen|vestigial|closest (living )?relative|million years|millions of years|prehistoric/i;
const TYPES = ['Mammal', 'Bird', 'Reptile', 'Fish', 'Insect', 'Amphibian', 'Arachnid', 'Cnidarian', 'Invertebrate', 'Arthropod', 'Marsupial', 'Crustacean', 'Cephalopod'];
const SIZES = ['Tiny', 'Small', 'Medium', 'Large', 'Extra Large', 'Colossal'];
const BIOMES = ['SAVANNA', 'FOREST', 'JUNGLE', 'WETLANDS', 'DESERT', 'MOUNTAINS', 'ARCTIC', 'OCEAN'];
const slugOf = (v) => String(v).toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
// Animals already on the site (legacy ones getting their first report) need no sidecar.
const legacySlugs = new Set(require(path.join(ROOT, 'data/legacy-animal-stats.json')).map((animal) => slugOf(animal.name)));
let bad = 0;
for (const slug of process.argv.slice(2)) {
    const problems = [];
    const file = path.join(ROOT, 'animal-research-for-update/animals', `${slug}.md`);
    const side = path.join(ROOT, 'animal-research-for-update/new-animals', `${slug}.json`);
    if (!fs.existsSync(file)) { console.log(`${slug}: MISSING report`); bad += 1; continue; }
    const text = fs.readFileSync(file, 'utf8');
    const p = parseResearchProfile(text, { slug });
    for (const k of ['attack', 'defense', 'agility', 'stamina', 'intelligence', 'special']) if (!(typeof p.headline?.[k] === 'number')) problems.push(`headline ${k} missing`);
    const subs = Object.values(p.substats || {}).filter((v) => typeof v === 'number').length;
    if (subs < 12) problems.push(`only ${subs}/12 substats parsed`);
    if ((p.abilities || []).length !== 2) problems.push(`${(p.abilities || []).length} abilities (need 2)`);
    if ((p.traits || []).length !== 2) problems.push(`${(p.traits || []).length} traits (need 2)`);
    for (const k of ['weight_kg', 'length_cm']) if (!(p.facts?.[k] > 0)) problems.push(`fact ${k} missing`);
    if (!p.summary || p.summary.length < 120) problems.push('summary missing/short');
    if (p.extinct) problems.push('marked extinct: new animals must be living species people have seen alive');
    if ((p.narrative || []).length < 2) problems.push('narrative < 2 paragraphs');
    if ((p.funFacts || []).length < 4) problems.push('fewer than 4 fun facts');
    for (const k of ['habitat', 'diet', 'social', 'conservation', 'features']) if (!p.sections?.[k]) problems.push(`section ${k} missing`);
    if ((p.sources || []).length < 5) problems.push(`only ${(p.sources || []).length} sources`);
    if (p.warnings?.length) problems.push(`parser warnings: ${p.warnings.join('; ')}`);
    const lines = text.split('\n');
    lines.forEach((line, i) => { if (EVO.test(line) && !/https?:\/\//.test(line)) problems.push(`wording line ${i + 1}: ${line.trim().slice(0, 90)}`); });
    if (legacySlugs.has(slug)) { /* existing animal: its catalogue entry is live already */ }
    else if (!fs.existsSync(side)) problems.push('MISSING new-animals sidecar json');
    else {
        const j = JSON.parse(fs.readFileSync(side, 'utf8'));
        if (!TYPES.includes(j.type)) problems.push(`sidecar type "${j.type}" not in ${TYPES.join('/')}`);
        if (!SIZES.includes(j.size)) problems.push(`sidecar size "${j.size}" not in ${SIZES.join('/')}`);
        if (!BIOMES.includes(j.biome)) problems.push(`sidecar biome "${j.biome}" not in ${BIOMES.join('/')}`);
        for (const k of ['name', 'scientific_name', 'class', 'habitat', 'description']) if (!j[k]) problems.push(`sidecar ${k} missing`);
        if (!Array.isArray(j.diet) || !j.diet.length) problems.push('sidecar diet missing');
        if (typeof j.isNocturnal !== 'boolean' || typeof j.isSocial !== 'boolean') problems.push('sidecar isNocturnal/isSocial must be booleans');
        const bp = j.battle_profile || {};
        if (!['Close', 'Mid range', 'Long range'].includes(bp.preferred_range)) problems.push('battle_profile.preferred_range must be Close/Mid range/Long range');
        if (!bp.primary_environment || !bp.combat_style) problems.push('battle_profile primary_environment/combat_style missing');
        if ((bp.strengths || []).length !== 3 || (bp.weaknesses || []).length !== 3) problems.push('battle_profile needs 3 strengths and 3 weaknesses');
        if (EVO.test(JSON.stringify(j))) problems.push('sidecar has evolution wording');
        const s = (v) => String(v).toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        if (s(j.name) !== slug) problems.push(`sidecar name "${j.name}" slugifies to ${s(j.name)}, not ${slug}`);
    }
    if (problems.length) { bad += 1; console.log(`${slug}: ${problems.length} problem(s)\n  - ${problems.join('\n  - ')}`); }
    else console.log(`${slug}: OK  A${p.headline.attack} D${p.headline.defense} Ag${p.headline.agility} St${p.headline.stamina} I${p.headline.intelligence} Sp${p.headline.special} | ${p.facts.weight_kg} kg | ${(p.sources || []).length} sources`);
}
process.exit(bad ? 1 : 0);
