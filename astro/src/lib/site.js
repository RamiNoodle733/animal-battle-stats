import robloxGame from '../../../data/roblox-game.json';

export const SITE = Object.freeze({
    name: 'Animal Battle Stats',
    shortName: 'ABS',
    url: 'https://animalbattlestats.com',
    tagline: 'The animal powerscaling database',
    description: 'Research-backed battle stats, tier lists, rankings and "who would win" matchups for 225 real animals, plus the Animal Battle Stats game on Roblox.',
    email: 'animalbattlestats@gmail.com',
    logo: '/images/logo.png',
    founder: 'Rami Abdelrazzaq',
    repo: 'https://github.com/RamiNoodle733/animal-battle-stats'
});

export const SOCIAL = Object.freeze([
    { name: 'Discord', url: 'https://discord.gg/BAaJFCXNTN' },
    { name: 'YouTube', url: 'https://www.youtube.com/@AnimalBattleStats' },
    { name: 'Instagram', url: 'https://www.instagram.com/animalbattlestats' },
    { name: 'X', url: 'https://x.com/AnimalBattStats' },
    { name: 'Reddit', url: 'https://www.reddit.com/r/AnimalBattleStats/' },
    { name: 'GitHub', url: 'https://github.com/RamiNoodle733/animal-battle-stats' }
]);

// Roblox game settings live in data/roblox-game.json so the owner can fill in
// the place/universe id after publishing without touching page code. The page
// shows the game as live (a Play button) only once `status` is "live": the ids
// can be filled in while the place is still private.
const robloxLive = Boolean(robloxGame.placeId) && robloxGame.status === 'live';
// Videos (the trailer and each gameplay clip) take either a YouTube id (the 11
// characters after watch?v=) or `src`, a video file (/images/roblox/<file>.mp4 or
// an https URL); `poster` is optional. With neither, the slot shows "Video pending".
// Screenshots: [{ "src": "/images/roblox/<file>.webp", "alt": "..." }], 16:9, shown in order.
const mediaUrl = (value) => typeof value === 'string' && (/^\/[^/]/.test(value) || /^https:\/\//.test(value));
function video(entry) {
    const youtubeId = /^[A-Za-z0-9_-]{11}$/.test(entry?.youtubeId || '') ? entry.youtubeId : null;
    const src = youtubeId || !mediaUrl(entry?.src) ? null : entry.src;
    const poster = mediaUrl(entry?.poster) ? entry.poster : youtubeId ? `https://i.ytimg.com/vi/${youtubeId}/maxresdefault.jpg` : null;
    return { title: String(entry?.title || ''), youtubeId, src, poster, animal: entry?.animal || null, ready: Boolean(youtubeId || src) };
}
const trailer = video({ title: 'Official trailer', ...robloxGame.trailer });
export const ROBLOX = Object.freeze({
    ...robloxGame,
    live: robloxLive,
    playUrl: robloxLive ? `https://www.roblox.com/games/${robloxGame.placeId}` : null,
    trailer: trailer.ready ? trailer : null,
    videos: (robloxGame.videos || []).map(video).filter((entry) => entry.title),
    screenshots: (robloxGame.screenshots || [])
        .filter((shot) => mediaUrl(shot?.src))
        .map((shot) => ({ src: shot.src, alt: shot.alt || 'Animal Battle Stats on Roblox' }))
});

export const NAV = Object.freeze([
    { key: 'animals', href: '/stats', label: 'Animals' },
    { key: 'compare', href: '/compare', label: 'Who Would Win' },
    { key: 'rankings', href: '/rankings', label: 'Rankings' },
    { key: 'tiers', href: '/tier-list', label: 'Tier List' },
    { key: 'tournament', href: '/tournament', label: 'Tournament' },
    { key: 'community', href: '/community', label: 'Community' }
]);

export function absoluteUrl(path = '/') {
    return new URL(path, SITE.url).href;
}
