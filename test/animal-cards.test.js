'use strict';

// The collectible cards: the renderer's data helpers, the art every card can
// ask for, and the card data written into each animal page (dist/ contracts
// skip without a build).
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');
const built = fs.existsSync(path.join(dist, 'stats', 'cassowary.html'));
// abs-card.js is a browser module with no imports: load it as one.
const source = fs.readFileSync(path.join(root, 'astro/src/scripts/abs-card.js'), 'utf8');
const loadCard = () => import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);
const ui = (file) => path.join(root, 'images', 'ui', file);

test('abilities get a fitting metal icon, and every icon exists', async () => {
    const { moveIcon } = await loadCard();
    assert.equal(moveIcon('Dagger-Toe Kick'), 'claws');
    assert.equal(moveIcon('Thermal Casque'), 'fire');
    assert.equal(moveIcon('Neurotoxic Bite'), 'venom');
    assert.equal(moveIcon('Pack Coordination'), 'friends');
    assert.equal(moveIcon('Ambush Strike'), 'moon');
    assert.equal(moveIcon('Odd Name', 'It sprints at full speed'), 'wind');
    assert.equal(moveIcon('Odd Name', '', 'trait'), 'star');
    assert.equal(moveIcon('Odd Name'), 'bolt');
    const names = [...source.matchAll(/\],? '([a-z]+)'\]/g)].map((match) => match[1]);
    for (const name of new Set([...names, 'star', 'bolt'])) assert.ok(fs.existsSync(path.join(root, 'images/ui/icons', `${name}.svg`)), `icons/${name}.svg`);
});

test('a card can be built from the client index, the Human included', async () => {
    const { cardFromIndex } = await loadCard();
    const lite = { n: 'Gray Wolf', s: 'gray-wolf', sci: 'Canis lupus', g: 'mammals', b: 'forest', tier: 'B', p: 60.5, r: 68, m: '/x.webp', ar: 1.6, k: 1.2, atk: 61, def: 45, agi: 70, sta: 80, int: 66, spl: 40, w: 40, v: 17.8, ht: 80, bf: 400, cls: 'Pack Hunter', ab: ['Pack Coordination', 'Long Chase'] };
    const wolf = cardFromIndex(lite, 344);
    assert.equal(wolf.tier, 'b');
    assert.equal(wolf.power, '60.5');
    assert.equal(wolf.group, 'Mammals');
    assert.deepEqual(wolf.measures, [['Weight', '40 kg'], ['Height', '80 cm'], ['Top speed', '64 km/h'], ['Bite force', '400 PSI']]);
    assert.equal(wolf.signature.name, 'Pack Coordination');
    const human = cardFromIndex({ ...lite, n: 'Human', s: 'human', h: 1, tier: 'H', r: null, g: undefined, b: 'arena' }, 344);
    assert.equal(human.tier, 'h');
    assert.equal(human.rank, null);
    assert.equal(human.group, '');
});

test('every tier and biome has its card art', () => {
    for (const tier of ['s', 'a', 'b', 'c', 'd', 'f', 'h']) {
        for (const file of [`card-frame-${tier}.png`, `card-shards-${tier}.webp`, `tier-${tier}.svg`]) assert.ok(fs.existsSync(ui(file)), file);
    }
    const biomes = new Set(Object.values(require('../data/animal-biomes.json').animals).map((biome) => biome.toLowerCase()));
    for (const biome of biomes) assert.ok(fs.existsSync(ui(`card-biome-${biome}.webp`)), `card-biome-${biome}.webp`);
    for (const file of ['holo.webp', 'foil-s.webp', 'hex-card.webp', 'hex-bg.webp', 'stage.webp', 'vs.svg', 'btn-gold.png']) assert.ok(fs.existsSync(ui(file)), file);
});

test('every animal page carries its card data', { skip: !built && 'dist/ not built' }, () => {
    const pages = fs.readdirSync(path.join(dist, 'stats')).filter((file) => file.endsWith('.html'));
    assert.ok(pages.length >= 300);
    for (const file of pages) {
        const html = fs.readFileSync(path.join(dist, 'stats', file), 'utf8');
        const match = html.match(/<script type="application\/json" id="abs-card">([\s\S]*?)<\/script>/);
        assert.ok(match, `${file}: card data`);
        const card = JSON.parse(match[1]);
        assert.equal(`${card.slug}.html`, file);
        assert.match(card.tier, /^[sabcdf]$/);
        assert.ok(card.rank >= 1 && card.rank <= card.total, `${file}: rank`);
        assert.equal(Object.keys(card.stats).length, 6);
        assert.ok(card.moves.length > 0 && card.moves.length <= 4, `${file}: moves`);
        assert.ok(card.signature?.name, `${file}: signature move`);
        assert.ok(fs.existsSync(path.join(dist, card.art.src.split('?')[0])), `${file}: art ${card.art.src}`);
        // the files the 3D card and the share pictures use instead of drawing
        for (const key of ['front', 'back', 'base', 'top']) {
            assert.match(card.files?.[key] || '', new RegExp(`^/images/cards/${card.slug}(-${key})?\\.webp\\?v=[0-9a-f]{10}$`), `${file}: files.${key}`);
            assert.ok(fs.existsSync(path.join(dist, card.files[key].split('?')[0])), `${file}: ${card.files[key]}`);
        }
        assert.ok(html.includes('data-card') && html.includes('data-share'), `${file}: card and share buttons`);
    }
});

test('the card code loads only when someone opens a card or shares', { skip: !built && 'dist/ not built' }, () => {
    for (const file of ['stats/cassowary.html', 'compare.html']) {
        const html = fs.readFileSync(path.join(dist, file), 'utf8');
        assert.doesNotMatch(html, /<script[^>]+src="[^"]*(share-card|card-viewer|abs-card)[^"]*"/, file);
        assert.doesNotMatch(html, /<link[^>]+href="[^"]*cards\.[^"]*\.css"/, file);
    }
});

// Link previews, search results and AI answers show these: each page names its
// drawn card files by a versioned address, and the files are in the build.
test('every animal and matchup page shows its drawn battle cards', { skip: !built && 'dist/ not built' }, () => {
    const exists = (src) => fs.existsSync(path.join(dist, src.split('?')[0]));
    const versioned = /^\/images\/(cards|og)\/[a-z0-9/-]+\.(webp|jpg)\?v=[0-9a-f]{10}$/;
    const pages = [
        ...fs.readdirSync(path.join(dist, 'stats')).filter((file) => file.endsWith('.html')).map((file) => `stats/${file}`),
        ...fs.readdirSync(path.join(dist, 'compare')).filter((file) => file.endsWith('.html')).map((file) => `compare/${file}`),
        'compare.html'
    ];
    assert.ok(pages.length >= 1000);
    for (const file of pages) {
        const html = fs.readFileSync(path.join(dist, file), 'utf8');
        const og = html.match(/<meta property="og:image" content="https:\/\/animalbattlestats\.com([^"]+)"/)?.[1];
        assert.match(og || '', versioned, `${file}: og:image`);
        assert.ok(exists(og), `${file}: ${og}`);
        assert.match(html, /<meta property="og:image:alt" content="[^"]*battle card/, `${file}: og:image:alt`);
        if (file.startsWith('stats/')) {
            const slug = path.basename(file, '.html');
            for (const side of [`${slug}.webp`, `${slug}-back.webp`]) {
                const src = html.match(new RegExp(`<img[^>]+src="(/images/cards/${side}\\?v=[0-9a-f]+)"`))?.[1];
                assert.match(src || '', versioned, `${file}: ${side}`);
                assert.ok(exists(src), `${file}: ${src}`);
            }
            assert.match(html, /"@type":"ImageObject","@id":"[^"]+#card"/, `${file}: card ImageObject`);
        } else if (file !== 'compare.html') {
            const src = html.match(/<img class="verdict-cards" src="([^"]+)"/)?.[1];
            assert.equal(src, og, `${file}: face-off picture`);
        }
    }
});
