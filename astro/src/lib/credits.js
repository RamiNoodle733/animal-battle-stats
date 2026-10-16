// Photo provenance for the animal cutouts. data/image-credits.json is written by
// the image pipeline (scripts/images/*); older reviewed entries come from
// data/animal-image-sources.json. The Roblox game's own photo credits come with
// its data (data/roblox-game-data.json photoCredits, exported from the game's
// Data/PhotoCredits): the game shows no names and points players here, so every
// photo it uses is listed on /credits, the site's own credit first.
import legacyRegistry from '../../../data/animal-image-sources.json';
import creditsFile from '../../../data/image-credits.json';
import gameData from '../../../data/roblox-game-data.json';

const bySlug = new Map();

function slugify(value) {
    return String(value || '').toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '')
        .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

for (const entry of legacyRegistry.entries || []) {
    if (entry.status !== 'active') continue;
    bySlug.set(slugify(entry.animal), {
        title: entry.sourceTitle,
        sourcePage: entry.sourcePage,
        artist: entry.creator,
        license: entry.license,
        licenseUrl: entry.licenseUrl,
        modified: 'Background removed'
    });
}

for (const [slug, entry] of Object.entries(creditsFile.animals || {})) {
    bySlug.set(slug, entry);
}

export function creditFor(slug) {
    return bySlug.get(slug) || null;
}

export function allCredits() {
    return [...bySlug.entries()].map(([slug, credit]) => ({ slug, ...credit }));
}

// A Commons file title the way the game keeps it (tools/build-animal-data.js
// cleanTitle there): no "File:", no extension, spaces for underscores.
export function fileTitle(text) {
    return String(text || '').replace(/^File:/, '').replace(/\.(jpe?g|png|tiff?)$/i, '').replace(/_/g, ' ').trim();
}

const gameBySlug = new Map((gameData.photoCredits || []).map((entry) => [entry.id, entry]));
const siteByTitle = new Map();
for (const [slug, credit] of bySlug) {
    if (!siteByTitle.has(fileTitle(credit.title))) siteByTitle.set(fileTitle(credit.title), { slug, credit });
}

// The photo the Roblox game's card uses, when it is not the site's own photo of
// that animal (null when it is the same photo, or the animal isn't in the game).
// `sameAs`: the site animal whose photo it is (the game's Megalodon wears the
// great white's); sourcePage falls back to that animal's.
export function gamePhotoFor(slug) {
    const game = gameBySlug.get(slug);
    if (!game) return null;
    const site = bySlug.get(slug);
    if (site && fileTitle(site.title) === game.title) return null;
    const match = siteByTitle.get(game.title);
    return {
        ...game,
        sameAs: match ? match.slug : null,
        sourcePage: game.sourcePage || (match ? match.credit.sourcePage : null),
        licenseUrl: game.licenseUrl || (match ? match.credit.licenseUrl : null)
    };
}
