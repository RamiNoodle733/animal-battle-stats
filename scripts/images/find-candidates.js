#!/usr/bin/env node
'use strict';

// Finds real, freely licensed photographs of every roster animal on Wikimedia
// Commons and downloads review thumbnails.
//
// For each animal: resolve the species' Wikidata item from its scientific
// name, then gather Commons files that depict it (structured "depicts" data,
// the species category and text search), keep only reusable licenses and
// large bitmaps, score them (adult, full body, preferred sex, quality
// assessments) and download the best thumbnails for cutout screening.
//
// Output: .cache/image-pipeline/candidates/<slug>/*.jpg and candidates.json
// Usage: node scripts/images/find-candidates.js [--animal "Name"]... [--limit 14] [--refresh]

const fs = require('node:fs');
const fsp = require('node:fs/promises');
const path = require('node:path');

const ROOT = path.resolve(__dirname, '..', '..');
const OUT = path.join(ROOT, '.cache', 'image-pipeline');
const CANDIDATE_DIR = path.join(OUT, 'candidates');
const RESULT_PATH = path.join(OUT, 'candidates.json');
const USER_AGENT = 'AnimalBattleStatsImagePipeline/2.0 (https://animalbattlestats.com; animalbattlestats@gmail.com)';
const COMMONS = 'https://commons.wikimedia.org/w/api.php';
const WIKIDATA = 'https://www.wikidata.org/w/api.php';

const args = process.argv.slice(2);
const only = new Set(optionValues('--animal').map((name) => name.toLowerCase()));
const limit = Number(optionValue('--limit', '14'));
const refresh = args.includes('--refresh');

function optionValues(name) {
    const values = [];
    for (let index = 0; index < args.length; index += 1) {
        if (args[index] === name && args[index + 1]) values.push(args[index + 1]);
    }
    return values;
}

function optionValue(name, fallback) {
    return optionValues(name).at(-1) || fallback;
}

function slugify(value) {
    return String(value || '').toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function getJson(url, attempt = 0) {
    const response = await fetch(url, { headers: { 'User-Agent': USER_AGENT, Accept: 'application/json' } });
    if ((response.status === 429 || response.status >= 500) && attempt < 5) {
        const retry = Number(response.headers.get('retry-after')) || (2 ** attempt) * 2;
        await wait(Math.min(retry, 30) * 1000);
        return getJson(url, attempt + 1);
    }
    if (!response.ok) throw new Error(`${response.status} for ${url}`);
    return response.json();
}

async function download(url, file, attempt = 0) {
    const response = await fetch(url, { headers: { 'User-Agent': USER_AGENT } });
    if ((response.status === 429 || response.status >= 500) && attempt < 5) {
        await wait((2 ** attempt) * 2000);
        return download(url, file, attempt + 1);
    }
    if (!response.ok) throw new Error(`${response.status} downloading ${url}`);
    await fsp.writeFile(file, Buffer.from(await response.arrayBuffer()));
}

function qs(params) {
    return new URLSearchParams({ format: 'json', formatversion: '2', origin: '*', ...params }).toString();
}

// ---- Species identity -------------------------------------------------------

async function wikidataIdFor(scientificName, commonName) {
    const tries = [scientificName, scientificName.split(' ').slice(0, 2).join(' ')].filter(Boolean);
    for (const name of [...new Set(tries)]) {
        const data = await getJson(`${WIKIDATA}?${qs({ action: 'query', list: 'search', srsearch: `haswbstatement:P225="${name}"`, srlimit: '3' })}`);
        const hit = data?.query?.search?.[0];
        if (hit) return hit.title;
    }
    // Fall back to the English Wikipedia article for the common name.
    const wiki = await getJson(`https://en.wikipedia.org/w/api.php?${qs({ action: 'query', titles: commonName, redirects: '1', prop: 'pageprops', ppprop: 'wikibase_item' })}`);
    const page = wiki?.query?.pages?.[0];
    return page?.pageprops?.wikibase_item || null;
}

// ---- Commons search ---------------------------------------------------------

const ALLOWED_LICENSE = /^(cc0|public domain|pd|cc[ -]by(?:[ -]sa)?(?:[ -]\d\.\d)?(?:[ -][a-z]{2,3})?|attribution|cc by-sa|cc by)/i;
const BLOCKED_LICENSE = /(nc|nd|non-?commercial|no ?deriv|fair use|copyrighted|all rights)/i;

async function commonsSearch(query, max = 40) {
    const data = await getJson(`${COMMONS}?${qs({
        action: 'query',
        generator: 'search',
        gsrsearch: query,
        gsrnamespace: '6',
        gsrlimit: String(max),
        prop: 'imageinfo',
        iiprop: 'url|size|mime|extmetadata',
        iiurlwidth: '640',
        iiextmetadatafilter: 'LicenseShortName|License|Artist|Credit|ImageDescription|Categories|ObjectName|AttributionRequired|Assessments|DateTimeOriginal'
    })}`);
    return data?.query?.pages || [];
}

async function commonsFiles(titles) {
    if (!titles.length) return [];
    const data = await getJson(`${COMMONS}?${qs({
        action: 'query',
        titles: titles.join('|'),
        prop: 'imageinfo',
        iiprop: 'url|size|mime|extmetadata',
        iiurlwidth: '640',
        iiextmetadatafilter: 'LicenseShortName|License|Artist|Credit|ImageDescription|Categories|ObjectName|AttributionRequired|Assessments|DateTimeOriginal'
    })}`);
    return data?.query?.pages || [];
}

function stripHtml(value) {
    return String(value || '').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"').replace(/&#0?39;/g, "'").replace(/\s+/g, ' ').trim();
}

const JUVENILE = /\b(juvenile|juveniles|cub|cubs|calf|calves|chick|chicks|baby|babies|young|youngster|pup|pups|puppy|kitten|fawn|foal|joey|larva|larvae|tadpole|hatchling|nestling|fledgling|immature|subadult|sub-adult|infant|newborn|egg|eggs|nest)\b/i;
const NOT_A_PHOTO_OF_LIVING = /\b(skull|skeleton|skeletal|bones?|taxidermy|taxidermied|stuffed|mounted|preserved|carcass|dead|roadkill|killed|hunted|trophy|statue|sculpture|model|replica|drawing|illustration|painting|sketch|diagram|map|range map|stamp|coin|logo|plush|toy|lego|cartoon|render|3d|x-ray|ct scan|microscop|sem image|footprint|tracks?|scat|dropping|feather|pelt|fur sample|hide|skin sample|meat|food|cooked|market|in formalin|jar)\b/i;
const CROPPED = /\b(head|heads|portrait|face|close-?up|closeup|macro of|detail|eye|eyes|mouth|teeth|tooth|jaw|paw|paws|foot|feet|claw|claws|tail|horn detail|antler detail|beak|bill detail|profile head|headshot)\b/i;
const GROUP = /\b(group|herd|flock|pack|pride|pair|pairs|couple|mating|copulat|family|mother|with (?:her |its )?(?:young|cub|calf|chick)|and (?:a |an |the )?[a-z]+s?\b|together|troop|pod|school of|colony|crowd)\b/i;
const QUALITY = /(featured pictures|quality images|valued images|picture of the day|pictures of the year)/i;
const ARTWORK_CATEGORY = /\b(paintings?|drawings?|illustrations?|engravings?|etchings?|lithographs?|woodcuts?|sculptures?|statues?|taxidermy|taxidermied|skeletons?|skulls?|fossils?|stuffed animals|museum specimens|biodiversity heritage library|scientific illustrations?|postage stamps|coats of arms)\b/i;
const GOOD_POSE = /\b(full[ -]?body|side view|side profile|lateral|standing|walking|running|swimming|in flight|flying|adult)\b/i;
const MALE = /\b(male|males|bull|stag|buck|boar|ram|rooster|cock|drake|silverback|tom|jack|tusker|dog fox|billy)\b/i;
const FEMALE = /\b(female|females|cow|hen|queen|sow|doe|vixen|ewe|lioness|tigress|jenny|nanny|peahen)\b/i;

function licenseOf(meta) {
    const short = stripHtml(meta?.LicenseShortName?.value);
    const url = stripHtml(meta?.License?.value);
    return { short, key: url || short };
}

function describe(page) {
    const info = page.imageinfo?.[0];
    if (!info) return null;
    const meta = info.extmetadata || {};
    const title = page.title.replace(/^File:/, '');
    const description = stripHtml(meta.ImageDescription?.value).slice(0, 500);
    const categories = stripHtml(meta.Categories?.value).replace(/\|/g, ' | ');
    const license = licenseOf(meta);
    return {
        title: page.title,
        name: title,
        sourcePage: `https://commons.wikimedia.org/wiki/${encodeURIComponent(page.title.replace(/ /g, '_')).replace(/%3A/i, ':').replace(/%2F/g, '/')}`,
        url: info.url,
        thumbUrl: info.thumburl,
        width: info.width,
        height: info.height,
        mime: info.mime,
        license: license.short,
        artist: stripHtml(meta.Artist?.value).slice(0, 200),
        credit: stripHtml(meta.Credit?.value).slice(0, 200),
        description,
        categories: categories.slice(0, 1200),
        assessments: stripHtml(meta.Assessments?.value)
    };
}

function scoreCandidate(file, { preferredSex, extinct, isInvertebrate }) {
    const text = `${file.name} ${file.description} ${file.categories}`;
    const titleText = `${file.name} ${file.description}`;
    const reasons = [];
    let score = 0;
    const longSide = Math.max(file.width, file.height);
    score += Math.min(20, (longSide - 1000) / 150);
    if (QUALITY.test(file.categories) || file.assessments) { score += 18; reasons.push('quality'); }
    if (GOOD_POSE.test(titleText)) { score += 6; reasons.push('pose'); }
    if (JUVENILE.test(titleText)) { score -= 40; reasons.push('juvenile'); }
    if (!extinct && NOT_A_PHOTO_OF_LIVING.test(titleText) && !(isInvertebrate && /specimen/i.test(titleText))) { score -= 60; reasons.push('not-living'); }
    if (!extinct && ARTWORK_CATEGORY.test(file.categories)) { score -= 60; reasons.push('artwork'); }
    if (CROPPED.test(file.name)) { score -= 22; reasons.push('crop'); }
    if (GROUP.test(file.name)) { score -= 14; reasons.push('group'); }
    const female = FEMALE.test(titleText);
    const male = !female && MALE.test(titleText.replace(/female/gi, ''));
    if (preferredSex === 'male') {
        if (male) { score += 14; reasons.push('male'); }
        if (female) { score -= 12; reasons.push('female'); }
    } else if (preferredSex === 'female') {
        if (female) { score += 14; reasons.push('female'); }
        if (male) { score -= 10; reasons.push('male'); }
    }
    if (/\bzoo\b|captive|captivity|enclosure/i.test(text)) score -= 2;
    if (file.height > file.width * 1.35) { score -= 4; reasons.push('portrait-frame'); }
    return { score: Math.round(score * 10) / 10, reasons };
}

function isUsable(file) {
    if (!file) return false;
    if (!/^image\/(jpeg|png|webp|tiff)$/.test(file.mime)) return false;
    if (Math.max(file.width, file.height) < 1000 || Math.min(file.width, file.height) < 600) return false;
    if (!file.license || BLOCKED_LICENSE.test(file.license) || !ALLOWED_LICENSE.test(file.license.replace(/^Public domain.*$/i, 'Public domain'))) return false;
    return true;
}

// Hand-tuned searches for animals where the automatic search found the wrong
// subject (a wrong Wikidata match, a place named after the animal, fruit for
// "kiwi"). Categories are Commons species categories; deepcat includes their
// subcategories (males, in the wild, by country).
const OVERRIDES = {
    alligator: ['deepcat:"Alligator mississippiensis" filew:>1500', '"American alligator" filew:>1500 -river -refuge'],
    beaver: ['incategory:"Castor canadensis" filew:>1500', 'incategory:"Castor fiber" filew:>1500', '"beaver" on land filew:>1500 -lodge -dam'],
    'beluga-whale': ['incategory:"Delphinapterus leucas" filew:>1200', 'incategory:"Delphinapterus leucas in captivity" filew:>1200', '"Delphinapterus leucas" -Airbus -A300 filew:>1200'],
    bongo: ['deepcat:"Tragelaphus eurycerus" filew:>1500', '"bongo" antelope filew:>1500'],
    cockatoo: ['deepcat:"Cacatua galerita" filew:>1500', '"sulphur-crested cockatoo" filew:>1500'],
    dingo: ['deepcat:"Canis lupus dingo" filew:>1500', '"dingo" Australia filew:>1500 -dog'],
    gecko: ['deepcat:"Gekko gecko" filew:>1500', '"tokay gecko" filew:>1500'],
    'howler-monkey': ['deepcat:"Alouatta caraya" male filew:>1500', '"black howler" male filew:>1500', 'deepcat:"Alouatta" male filew:>1500'],
    kiwi: ['deepcat:"Apteryx" filew:>1200', '"kiwi" Apteryx bird filew:>1200'],
    llama: ['deepcat:"Lama glama" standing filew:>1500', '"llama" standing filew:>1500'],
    lobster: ['deepcat:"Homarus americanus" filew:>1500', '"American lobster" live filew:>1500', 'deepcat:"Homarus gammarus" filew:>1500'],
    marlin: ['deepcat:"Makaira nigricans" filew:>1200', '"blue marlin" filew:>1200', 'deepcat:"Istiompax indica" filew:>1200'],
    moose: ['deepcat:"Alces alces" bull filew:>1500', '"bull moose" filew:>1500', 'deepcat:"Alces alces" male standing filew:>1500'],
    otter: ['deepcat:"Lontra canadensis" filew:>1500', '"river otter" filew:>1500'],
    swordfish: ['incategory:"Xiphias gladius" filew:>1000', '"Xiphias gladius" NOAA', '"Xiphias gladius" -food -dish -cooked filew:>1000'],
    orca: ['incategory:"Orcinus orca breaching" filew:>1500', '"killer whale" breaching filew:>1500', '"Killerwhales jumping"', 'incategory:"Orcinus orca jumping" filew:>1200'],
    tuna: ['deepcat:"Thunnus thynnus" filew:>1200', '"bluefin tuna" filew:>1200', 'deepcat:"Thunnus albacares" filew:>1200']
};

async function candidatesFor(animal, profile, qid) {
    const scientific = animal.scientific_name;
    const binomial = scientific.split(' ').slice(0, 2).join(' ');
    const preferredSex = profile?.specimenSex === 'female' ? 'female' : profile?.specimenSex === 'male' ? 'male' : 'any';
    const sexWord = preferredSex === 'female' ? 'female' : preferredSex === 'male' ? 'male' : '';
    const queries = [];
    const override = OVERRIDES[slugify(animal.name)];
    if (override) {
        queries.push(...override.map((query) => [query, 50]));
    } else if (qid) {
        queries.push([`haswbstatement:P180=${qid} filew:>1000`, 50]);
        queries.push([`haswbstatement:P180=${qid} incategory:"Quality images"`, 30]);
        if (sexWord) queries.push([`haswbstatement:P180=${qid} ${sexWord} filew:>1000`, 30]);
    }
    if (!override) {
        queries.push([`incategory:"${binomial}" filew:>1000`, 40]);
        queries.push([`"${binomial}" filew:>1000`, 30]);
        if (sexWord) queries.push([`"${animal.name}" ${sexWord} filew:>1000`, 25]);
        queries.push([`"${animal.name}" filew:>1200`, 25]);
    }

    const seen = new Map();
    for (const [query, max] of queries) {
        try {
            for (const page of await commonsSearch(query, max)) {
                if (!seen.has(page.title)) seen.set(page.title, page);
            }
        } catch (error) {
            console.warn(`  search failed (${query}): ${error.message}`);
        }
        await wait(250);
    }

    // Leads recorded by the research task (Commons file pages it inspected).
    const leadTitles = [];
    const lead = profile?.imageLead?.sourcePage || '';
    const match = lead.match(/commons\.wikimedia\.org\/wiki\/(File:[^?#]+)/i);
    if (match) leadTitles.push(decodeURIComponent(match[1]).replace(/_/g, ' '));
    if (leadTitles.length) {
        try {
            for (const page of await commonsFiles(leadTitles)) {
                if (!page.missing) seen.set(page.title, { ...page, researchLead: true });
            }
        } catch (error) {
            console.warn(`  lead lookup failed: ${error.message}`);
        }
    }

    const context = {
        preferredSex,
        extinct: Boolean(profile?.extinct),
        isInvertebrate: ['Insect', 'Arachnid', 'Invertebrate', 'Crustacean', 'Cephalopod', 'Cnidarian', 'Arthropod'].includes(animal.type)
    };
    const files = [];
    for (const page of seen.values()) {
        const file = describe(page);
        if (!isUsable(file)) continue;
        const { score, reasons } = scoreCandidate(file, context);
        files.push({ ...file, researchLead: Boolean(page.researchLead), score: page.researchLead ? score + 8 : score, reasons });
    }
    files.sort((a, b) => b.score - a.score);
    return { preferredSex, files };
}

async function main() {
    fs.mkdirSync(CANDIDATE_DIR, { recursive: true });
    const animals = JSON.parse(fs.readFileSync(path.join(ROOT, 'animal_stats.json'), 'utf8'));
    const profiles = JSON.parse(fs.readFileSync(path.join(ROOT, 'data', 'animal-profiles.json'), 'utf8')).animals;
    const results = fs.existsSync(RESULT_PATH) ? JSON.parse(fs.readFileSync(RESULT_PATH, 'utf8')) : {};

    const todo = animals.filter((animal) => !only.size || only.has(animal.name.toLowerCase()));
    let index = 0;
    for (const animal of todo) {
        index += 1;
        const slug = slugify(animal.name);
        if (results[slug] && !refresh && !only.size) continue;
        const profile = profiles[slug];
        process.stdout.write(`[${index}/${todo.length}] ${animal.name} (${animal.scientific_name}) `);
        let qid = null;
        try {
            qid = await wikidataIdFor(animal.scientific_name, animal.name);
        } catch (error) {
            console.warn(`wikidata failed: ${error.message}`);
        }
        const { preferredSex, files } = await candidatesFor(animal, profile, qid);
        const top = files.slice(0, limit);
        const dir = path.join(CANDIDATE_DIR, slug);
        fs.mkdirSync(dir, { recursive: true });
        for (const [position, file] of top.entries()) {
            const local = path.join(dir, `${String(position + 1).padStart(2, '0')}.jpg`);
            file.local = path.relative(ROOT, local).replace(/\\/g, '/');
            if (fs.existsSync(local) && !refresh) continue;
            try {
                await download(file.thumbUrl, local);
            } catch (error) {
                file.downloadError = error.message;
            }
            await wait(120);
        }
        results[slug] = {
            name: animal.name,
            scientificName: animal.scientific_name,
            qid,
            preferredSex,
            totalFound: files.length,
            candidates: top
        };
        fs.writeFileSync(RESULT_PATH, JSON.stringify(results, null, 1));
        console.log(`qid=${qid || '-'} found=${files.length} kept=${top.length}`);
    }
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
