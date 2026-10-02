// The animal page's "Size & speed" section: weight, size, speed and bite next to everyday things,
// where each ranks among every animal on the site, and a to-scale drawing of the animal beside a
// person (a credit card or a coin for small animals). Only measurements the Facts tab trusts are
// used: a researched animal's unverified values are left out, as they are there.
import { animals, fmtWeight, fmtLength, fmtSpeed, fmtBite } from './catalog.js';

const nf = (value, digits = 0) => Number(value).toLocaleString('en-US', { maximumFractionDigits: digits });
// "3.3", "12", "140"
const times = (ratio) => (ratio >= 10 ? nf(Math.round(ratio)) : nf(ratio, 1));

export function measured(animal, key) {
    const value = Number(animal[key]) || 0;
    if (!(value > 0)) return 0;
    const unverified = new Set(animal.profile?.unverifiedFacts || []);
    return animal.researched && unverified.has(key) ? 0 : value;
}

// The body's biggest dimension in cm, and whether it is a length or a height.
function size(animal) {
    const length = measured(animal, 'length_cm');
    const height = measured(animal, 'height_cm');
    if (!length && !height) return null;
    return length >= height ? { cm: length, key: 'length_cm', word: 'long' } : { cm: height, key: 'height_cm', word: 'tall' };
}

// Every animal's value for each measure, sorted, for "heavier than 92% of animals".
const SERIES = {
    weight: animals.map((animal) => measured(animal, 'weight_kg')).filter(Boolean).sort((a, b) => a - b),
    size: animals.map((animal) => size(animal)?.cm || 0).filter(Boolean).sort((a, b) => a - b),
    speed: animals.map((animal) => measured(animal, 'speed_mps')).filter(Boolean).sort((a, b) => a - b),
    bite: animals.map((animal) => measured(animal, 'bite_force_psi')).filter(Boolean).sort((a, b) => a - b)
};

// The share (0-100) of animals with a known value that this one beats.
function beats(series, value) {
    let below = 0;
    for (const other of series) if (other < value) below += 1;
    return Math.round((below / Math.max(1, series.length - 1)) * 100);
}

function weightLine(kg) {
    if (kg >= 1500) return `As heavy as ${times(kg / 1500)} cars`;
    if (kg >= 105) return `As heavy as ${times(kg / 70)} people`;
    if (kg >= 45) return 'About as heavy as a person';
    if (kg >= 3) return kg / 4.5 < 1.3 ? 'About as heavy as a house cat' : `As heavy as ${times(kg / 4.5)} house cats`;
    if (kg >= 0.1) return kg / 0.2 < 1.3 ? 'About as heavy as a smartphone' : `As heavy as ${times(kg / 0.2)} smartphones`;
    if (kg >= 0.001) return `As heavy as ${times(kg * 1000)} paperclips`;
    return `${nf(Math.round(1 / (kg * 1000)))} of them weigh as much as a paperclip`;
}

function sizeLine({ cm, word }) {
    const person = cm / 175;
    if (person >= 1.4) return `${times(person)}× a person's height`;
    if (person >= 0.85) return `About as ${word} as a person is tall`;
    if (cm >= 30) return `About ${times(cm / 30)} rulers ${word}`;
    if (cm >= 5) return `About ${times(cm / 8.56)} credit cards ${word}`;
    return cm < 2.4 ? 'Smaller than a coin' : `About ${times(cm / 2.4)} coins ${word}`;
}

function speedLine(mps) {
    const kmh = mps * 3.6;
    if (kmh >= 67) return `${times(kmh / 44.7)}× Usain Bolt's top speed`;
    if (kmh > 44.7) return 'Faster than Usain Bolt (44.7 km/h)';
    if (kmh >= 25) return 'Faster than most people can sprint';
    if (kmh >= 12) return 'About as fast as a person running';
    if (kmh >= 5) return 'About jogging speed';
    return 'Slower than a walk (5 km/h)';
}

function biteLine(psi) {
    const human = psi / 162;
    if (human >= 1.5) return `${times(human)}× a human bite`;
    if (human >= 0.7) return 'About as strong as a human bite';
    return 'Weaker than a human bite';
}

// The four measures as tiles: value, everyday comparison, and rank among all animals.
export function vitals(animal) {
    const tiles = [];
    const kg = measured(animal, 'weight_kg');
    if (kg) tiles.push({ key: 'weight', label: 'Weight', value: fmtWeight(kg), line: weightLine(kg), beats: beats(SERIES.weight, kg), more: 'Heavier', most: 'heaviest', least: 'lightest' });
    const body = size(animal);
    if (body) tiles.push({ key: 'size', label: body.word === 'long' ? 'Length' : 'Height', value: fmtLength(body.cm), line: sizeLine(body), beats: beats(SERIES.size, body.cm), more: 'Bigger', most: 'biggest', least: 'smallest' });
    const mps = measured(animal, 'speed_mps');
    if (mps) tiles.push({ key: 'speed', label: 'Top speed', value: fmtSpeed(mps), line: speedLine(mps), beats: beats(SERIES.speed, mps), more: 'Faster', most: 'fastest', least: 'slowest' });
    const psi = measured(animal, 'bite_force_psi');
    if (psi) tiles.push({ key: 'bite', label: 'Bite force', value: fmtBite(psi), line: biteLine(psi), beats: beats(SERIES.bite, psi), more: 'Stronger bite', most: 'strongest bite', least: 'weakest bite' });
    // "Heavier than 92% of animals", or the record holder's own words at either end.
    for (const tile of tiles) {
        tile.rank = tile.beats >= 100 ? `The ${tile.most} animal on the site` : tile.beats <= 0 ? `The ${tile.least} animal on the site` : `${tile.more} than ${tile.beats}% of animals`;
    }
    return tiles;
}

// Reference objects for the drawing, real sizes in metres.
const PERSON = { kind: 'person', w: 1.75 * (200 / 480), h: 1.75, label: 'a 1.75 m person' };
const CARD = { kind: 'card', w: 0.0856, h: 0.054, label: 'a credit card' };
const COIN = { kind: 'coin', w: 0.024, h: 0.024, label: 'a coin' };

// The to-scale drawing in a 240 x 100 box (CSS draws it in percentages of the box): the reference
// on the left, the animal's photo on the right, both standing on one ground line. The photo's longest
// side is taken as the animal's biggest dimension (a lion's length, a giraffe's height, a diving
// whale's length): close enough to show scale, which is why the page says "roughly".
export function scale(animal) {
    const body = size(animal);
    if (!body) return null;
    const ar = Number(animal.img?.ar) || 1;
    const longest = body.cm / 100;
    const w = ar >= 1 ? longest : longest * ar;
    const h = ar >= 1 ? longest / ar : longest;
    const biggest = Math.max(w, h);
    const ref = biggest >= 0.4 ? PERSON : biggest >= 0.04 ? CARD : COIN;
    const BOX_W = 240;
    const BOX_H = 100;
    const PAD = 6;
    const GROUND = 8;
    const gap = 0.12 * Math.max(w, ref.w);
    const unit = Math.min((BOX_H - GROUND - PAD) / Math.max(h, ref.h), (BOX_W - 2 * PAD) / (ref.w + gap + w));
    const used = (ref.w + gap + w) * unit;
    const left = (BOX_W - used) / 2;
    const pct = (value, of) => `${Math.round((value / of) * 10000) / 100}%`;
    return {
        ref: { ...ref, left: pct(left, BOX_W), width: pct(ref.w * unit, BOX_W), height: pct(ref.h * unit, BOX_H) },
        animal: { left: pct(left + (ref.w + gap) * unit, BOX_W), width: pct(w * unit, BOX_W), height: pct(h * unit, BOX_H) },
        ground: pct(GROUND, BOX_H),
        caption: `${animal.name} (${fmtLength(body.cm).metric} ${body.word}) next to ${ref.label}, roughly to scale.`
    };
}
