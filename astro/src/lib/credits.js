// Photo provenance for the animal cutouts. data/image-credits.json is written by
// the image pipeline (scripts/images/*); older reviewed entries come from
// data/animal-image-sources.json.
import legacyRegistry from '../../../data/animal-image-sources.json';
import creditsFile from '../../../data/image-credits.json';

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
