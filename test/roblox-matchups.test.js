'use strict';

// The Roblox game's matchup links (data/roblox-matchups.json, astro/src/lib/matchup-link.js): the link format and the
// daily rule must stay the game's own (the game repo's docs/MATCHUP_LINKS.md and Shared Game/Matchups), and the pages
// must link only fights the game can open. Page checks skip without a build.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
const data = require('../data/roblox-matchups.json');
const place = require('../data/roblox-game.json').placeId;
// (an ES module with no imports, loaded as the other browser modules' tests load theirs)
const linkSource = fs.readFileSync(path.join(root, 'astro/src/lib/matchup-link.js'), 'utf8');
const loadLink = () => import(`data:text/javascript;base64,${Buffer.from(linkSource).toString('base64')}`);
const dist = path.join(root, 'dist');
const built = fs.existsSync(path.join(dist, 'compare', 'siberian-tiger-vs-african-lion.html'));
const read = (file) => fs.readFileSync(path.join(dist, file), 'utf8');
const game = () => ({ place: data.place, most: data.most, ids: new Set(data.ids) });

test('the matchup data is the game\'s: its place, site animals only, each famous pair two of them', () => {
    assert.equal(data.place, place, 'the same place as data/roblox-game.json');
    assert.ok(Number.isInteger(data.step) && data.step > 0);
    const slugs = new Set(require('../lib/canonical-animals').listAnimals().map((animal) => animal.slug));
    const ids = new Set(data.ids);
    assert.equal(ids.size, data.ids.length, 'no id twice');
    for (const id of data.ids) assert.ok(slugs.has(id), `${id} is a site animal`);
    assert.ok(data.pairs.length > 0);
    for (const [a, b] of data.pairs) assert.ok(ids.has(a) && ids.has(b) && a !== b, `${a} ~ ${b}`);
    // The animals taken out of the game (pig-like ones, the aardvark) never get a link.
    for (const gone of ['warthog', 'wild-boar', 'giant-forest-hog', 'aardvark']) assert.ok(!ids.has(gone), gone);
});

test('a matchup link is the game\'s one strict form, and only for two different animals the game has', async () => {
    const { matchupUrl } = await loadLink();
    // docs/MATCHUP_LINKS.md section 1, word for word
    assert.equal(matchupUrl(game(), 'african-lion', 'bengal-tiger'), 'https://www.roblox.com/games/start?placeId=118592355937726&launchData=m%3Dafrican-lion~bengal-tiger');
    // the first animal is the one the player fights as: the order is kept
    assert.match(matchupUrl(game(), 'bengal-tiger', 'african-lion'), /launchData=m%3Dbengal-tiger~african-lion$/);
    assert.equal(matchupUrl(game(), 'african-lion', 'african-lion'), null, 'the same animal twice');
    assert.equal(matchupUrl(game(), 'warthog', 'african-lion'), null, 'an animal the game does not have');
    assert.equal(matchupUrl(game(), 'human', 'gorilla'), null, 'the Human');
    assert.equal(matchupUrl({ ...game(), place: null }, 'african-lion', 'bengal-tiger'), null, 'no place');
    assert.equal(matchupUrl({ ...game(), most: 20 }, 'african-lion', 'bengal-tiger'), null, 'launch data past the limit');
});

test('TODAY\'S MATCHUP counts the days as the game does', async () => {
    const { pairForDay, pairHref, utcDay } = await loadLink();
    // The game's export (tools/export-site-data.luau) on 2026-11-14: day 20771, the peregrine falcon and the golden eagle.
    assert.equal(utcDay(Date.UTC(2026, 10, 14, 23, 59)), 20771);
    assert.deepEqual(pairForDay(data.pairs, data.step, 20771), ['peregrine-falcon', 'golden-eagle']);
    // pairs[(day * step) % #pairs], counted from 0 here and from 1 in the game
    for (const day of [0, 1, 20771, 20772, 30000]) assert.deepEqual(pairForDay(data.pairs, data.step, day), data.pairs[(day * data.step) % data.pairs.length]);
    assert.equal(pairHref(['siberian-tiger', 'african-lion', 1]), '/compare/siberian-tiger-vs-african-lion');
    assert.equal(pairHref(['african-lion', 'siberian-tiger', 2]), '/compare/siberian-tiger-vs-african-lion');
    assert.equal(pairHref(['peregrine-falcon', 'golden-eagle', 0]), '/compare?a=peregrine-falcon&b=golden-eagle');
});

test('matchup pages link the fight in Roblox only when the game has both animals', { skip: !built && 'dist/ not built' }, () => {
    const lionTiger = read('compare/siberian-tiger-vs-african-lion.html');
    assert.match(lionTiger, /class="vs[^"]*with-rbx/);
    assert.ok(lionTiger.includes('href="https://www.roblox.com/games/start?placeId=118592355937726&amp;launchData=m%3Dsiberian-tiger~african-lion"'), 'the page\'s own pair, its first animal first');
    assert.match(lionTiger, /You fight as the <span data-rbx-as[^>]*>Siberian Tiger<\/span>/);
    assert.match(lionTiger, /Play this matchup in Roblox/);
    // an animal the game does not have: the button keeps its room, hidden, with no link
    const aardvark = read('compare/aardvark-vs-capybara.html');
    assert.match(aardvark, /class="btn rbx-play is-off[^"]*"[^>]*data-rbx-play/);
    assert.doesNotMatch(aardvark, /launchData=m%3D/);
    // the Human's pages have no button at all
    const human = fs.readdirSync(path.join(dist, 'compare')).find((file) => file.startsWith('human-vs-'));
    if (human) assert.doesNotMatch(read(`compare/${human}`), /data-rbx-play/);
});

test('the home shows TODAY\'S MATCHUP with the game\'s pairs and the same button', { skip: !built && 'dist/ not built' }, () => {
    const home = read('index.html');
    assert.match(home, /Today's matchup/);
    assert.match(home, /data-daily data-pair="[a-z0-9-]+~[a-z0-9-]+"/);
    assert.match(home, /launchData=m%3D[a-z0-9-]+~[a-z0-9-]+"/);
    const json = home.match(/<script type="application\/json" id="home-data">(.*?)<\/script>/s);
    assert.ok(json, 'home-data');
    const today = JSON.parse(json[1]).today;
    assert.equal(today.step, data.step);
    assert.equal(today.place, data.place);
    assert.deepEqual(today.pairs.map(([a, b]) => [a, b]), data.pairs, 'every famous pair, in the game\'s order');
});
