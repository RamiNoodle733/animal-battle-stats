'use strict';

// Owner wording rules for everything the site says about animals: no Greek or
// Roman mythology, no other religions' gods or figures, and no shirk or
// superstition (luck, fate, magic, spirits, oracles, totems...). Research
// reports are written by people and AI and can drift into that language, so
// scripts/research/import-research.js runs every generated record and
// profile through cleanRecord / cleanProfile. test/wording.test.js keeps the
// generated data clean.
//
// Names of real things stay as they are: species names people search for
// (Harpy Eagle, Hercules Beetle...), Latin scientific names, places (the
// Atlas Mountains, Phoenix in Arizona) and the titles and links of sources.

// Archetype labels shown on every card.
const CLASS_RENAMES = Object.freeze({
    Titan: 'Heavyweight',
    Mage: 'Mastermind',
    Bard: 'Loudmouth',
    'Speed Demon': 'Speedster',
    Berserker: 'Brawler'
});

// [pattern, replacement] applied to prose, in order. Replacements keep the
// sentence meaning; a function gets the match and keeps its capitalisation.
const keepCase = (word) => (match) => (match[0] === match[0].toUpperCase() ? word.charAt(0).toUpperCase() + word.slice(1) : word);
const TEXT_RULES = [
    // Ability and trait names
    [/\bTitanic Lunge\b/g, 'Massive Lunge'],
    [/\bPrairie Juggernaut\b/g, 'Prairie Bulldozer'],
    [/\bRolling Colossus\b/g, 'Rolling Giant'],
    [/\bIsland Colossus\b/g, 'Island Giant'],
    [/\bFlock Siren\b/g, 'Flock Alarm'],
    [/\bGhostwing Approach\b/g, 'Silent-Wing Approach'],
    [/\bGhost-Range Generalist\b/g, 'Wide-Range Generalist'],
    [/\bGrey-Ghost Freeze\b/g, 'Grey-Shadow Freeze'],
    [/\bPink Ghost of the Slope\b/g, 'Pink Shadow of the Slope'],
    [/\bSpeed Demon\b/g, 'Speedster'],
    [/\bghosts\b/gi, keepCase('shadows')],
    [/\bghost\b/gi, keepCase('shadow')],
    // Folklore and belief, removed or said plainly
    [/ The genus name Lachesis refers to the Greek Fate who measured out each person's life, and muta \("mute"\) refers to/g, ' The species name muta ("mute") refers to'],
    [/Welcomed as a bird of good luck in much of Europe, where it nests on houses and churches\. Folklore that storks deliver babies is widespread, especially in Slavic cultures\. /g, 'Welcomed in much of Europe, where it nests on houses and rooftops. '],
    [/ The zebra is a totem animal for the Shona people of Zimbabwe, and zebras appear in southern African rock art\./g, ' Zebras appear in southern African rock art.'],
    [/"Takhi," the Mongolian name, is usually translated as "spirit\."/g, '"Takhi" is the Mongolian name for the wild horse.'],
    [/A San legend says it can kill a giraffe by biting its jugular; this is folklore, not fact\./g, 'An old story says it can kill a giraffe by biting its jugular; that is a tall tale, not fact.'],
    [/others call that a legend, so it is not counted here/g, 'others call that a tall tale, so it is not counted here'],
    [/a many-tonne kraken wrestling ships/g, 'a many-tonne sea monster wrestling ships'],
    [/2026 Milano Cortina Winter Olympics and Paralympics/g, '2026 Winter Games in Milan and Cortina'],
    [/to Olympic National Park in 2008/g, 'to a national park in Washington state in 2008'],
    [/released in Olympic National Park between/g, 'released in a Washington state national park between'],
    [/The cobra is central to Indian culture and folklore and is closely associated with snake charmers\./g, 'The cobra is one of the best-known snakes in India.'],
    [/and are embedded in European and Asian folklore\./g, 'and are well known across Europe and Asia.'],
    [/and it carries a heavy load of folklore across its range\./g, 'and it has a bad reputation across its range.'],
    [/where they also have roles in folk medicine and ceremonies\./g, 'where they are still raised for food today.'],
    [/timber work, transport, ceremony and war/g, 'timber work, transport and war'],
    [/because they take poultry and are the subject of local folklore\./g, 'because they take poultry.'],
    [/Despite old folklore portraying/g, 'Despite old stories portraying'],
    [/; "takhi" means spirit/g, ''],
    [/2026 Olympic mascots/g, '2026 Winter Games mascots'],
    [/\b([Aa]|[Tt]he) titan\b(?! beetle)/g, '$1 heavyweight'],
    [/\bUnlike the mythology\b/g, 'Unlike the popular stories'],
    [/and in the myths of many cultures/g, 'and in the stories of many cultures'],
    [/are not armor-negating magic\b/g, 'are not armor-piercing weapons'],
    // Myth (as "misconception") and magic (as "unrealistic")
    [/\bmythologized\b/g, 'exaggerated'],
    [/\bmythology\b/gi, keepCase('exaggeration')],
    [/\bmythical\b/gi, keepCase('exaggerated')],
    [/\bmyths\b/gi, keepCase('misconceptions')],
    [/\bmyth\b/gi, keepCase('misconception')],
    [/\bnot magical invisibility\b/g, 'not true invisibility'],
    [/\bnot magical damage\b/g, 'not extra damage'],
    [/\bmagically\b/gi, keepCase('somehow')],
    [/\bmagical\b/gi, keepCase('unrealistic')],
    [/\bmagic\b/gi, keepCase('trick')],
    // Biology terms named after mythology, said plainly
    [/\bmedusae\b/gi, keepCase('jellyfish')],
    [/\bmedusa\b/gi, keepCase('jellyfish')],
    // "a mythical" / "a magical" became "a exaggerated" / "a unrealistic"
    [/\b([Aa]) (exaggerat|unrealistic)/g, '$1n $2']
];
// Insect young ("nymphs"): larvae for dragonflies, young for everything else.
const NYMPH_RULES = {
    larva: [[/\bnymphs\b/gi, keepCase('larvae')], [/\bnymph\b/gi, keepCase('larva')]],
    young: [[/\bnymphs\b/gi, keepCase('young')], [/\bnymph\b/gi, keepCase('young insect')]]
};
const AQUATIC_YOUNG = new Set(['dragonfly']);

// Keys whose strings are names of real things or references: left untouched.
const KEEP_KEYS = new Set(['url', 'title', 'scientificName', 'scientific_name', 'sourceFile', 'contentHash', 'image', 'slug', 'name_scientific']);

function cleanText(text, slug = '') {
    if (typeof text !== 'string' || !text) return text;
    let out = text;
    for (const [pattern, replacement] of TEXT_RULES) out = out.replace(pattern, replacement);
    for (const [pattern, replacement] of NYMPH_RULES[AQUATIC_YOUNG.has(slug) ? 'larva' : 'young']) out = out.replace(pattern, replacement);
    return out;
}

function cleanDeep(value, slug, key = '') {
    if (KEEP_KEYS.has(key)) return value;
    if (typeof value === 'string') return cleanText(value, slug);
    if (Array.isArray(value)) return value.map((item) => cleanDeep(item, slug));
    if (value && typeof value === 'object') {
        const out = {};
        for (const [childKey, child] of Object.entries(value)) out[childKey] = cleanDeep(child, slug, childKey);
        return out;
    }
    return value;
}

function cleanClass(label) {
    return Object.hasOwn(CLASS_RENAMES, label) ? CLASS_RENAMES[label] : label;
}

// A roster record (animal_stats.json): class label, combat style and prose.
function cleanRecord(record, slug = '') {
    const out = cleanDeep(record, slug);
    if (out.class) out.class = cleanClass(out.class);
    if (out.battle_profile?.combat_style) out.battle_profile = { ...out.battle_profile, combat_style: cleanClass(out.battle_profile.combat_style) };
    return out;
}

// A research profile (data/animal-profiles.json entry).
function cleanProfile(profile, slug = '') {
    return cleanDeep(profile, slug);
}

module.exports = { CLASS_RENAMES, cleanText, cleanClass, cleanRecord, cleanProfile };
