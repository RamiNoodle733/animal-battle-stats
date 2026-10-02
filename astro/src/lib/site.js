import robloxGame from '../../../data/roblox-game.json';
import gameData from '../../../data/roblox-game-data.json';
import roster from '../../../animal_stats.json';

export const SITE = Object.freeze({
    name: 'Animal Battle Stats',
    shortName: 'ABS',
    url: 'https://animalbattlestats.com',
    tagline: 'The animal powerscaling database',
    description: `Research-backed battle stats, tier lists, rankings and "who would win" matchups for ${roster.length} real animals, plus the Animal Battle Stats game on Roblox.`,
    email: 'animalbattlestats@gmail.com',
    logo: '/images/logo.png',
    founder: 'Rami Abdelrazzaq',
    repo: 'https://github.com/RamiNoodle733/animal-battle-stats'
});

export const SOCIAL = Object.freeze([
    { name: 'YouTube', url: 'https://www.youtube.com/@AnimalBattleStats' },
    { name: 'TikTok', url: 'https://www.tiktok.com/@animalbattlestats_abs' },
    { name: 'Instagram', url: 'https://www.instagram.com/animalbattlestats' },
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61594841433992' },
    { name: 'X', url: 'https://x.com/AnimalBattStats' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/109601979/' },
    { name: 'Discord', url: 'https://discord.gg/BAaJFCXNTN' },
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
// Codes: the game's own redeem codes (Config/Codes.luau, through data/roblox-game-data.json), posted
// publicly as Roblox requires, so the list always matches the game. data/roblox-game.json can word a
// code's reward; otherwise it is described from what the code gives. `ends` (YYYY-MM-DD, UTC) hides
// one when it stops working.
const rewardText = new Map((robloxGame.codes || []).map((entry) => [entry.code, entry.reward]));
const describeCode = (entry) => ['Coins', entry.wildTracks ? `${entry.wildTracks} Wild Tracks` : null, entry.look ? `the ${entry.look}` : null].filter(Boolean).join(', ').replace(/, ([^,]*)$/, ' and $1');
const codes = (gameData.codes || [])
    .map((entry) => ({ code: entry.code, reward: rewardText.get(entry.code) || describeCode(entry), ends: entry.ends || null }))
    .filter((entry) => /^[A-Z0-9]{2,30}$/.test(entry.code) && (!entry.ends || Date.parse(`${entry.ends}T00:00:00Z`) > Date.now()));
export const ROBLOX = Object.freeze({
    ...robloxGame,
    live: robloxLive,
    // PLAY buttons: a deep link whose launchData "site" tells the game the player came
    // from the website, so a first-time player gets the game's join gift (PlayerService).
    playUrl: robloxLive ? `https://www.roblox.com/games/start?placeId=${robloxGame.placeId}&launchData=site` : null,
    // The game's page on Roblox, for structured data and plain links.
    gameUrl: robloxLive ? `https://www.roblox.com/games/${robloxGame.placeId}` : null,
    codes,
    trailer: trailer.ready ? trailer : null,
    videos: (robloxGame.videos || []).map(video).filter((entry) => entry.title),
    screenshots: (robloxGame.screenshots || [])
        .filter((shot) => mediaUrl(shot?.src))
        .map((shot) => ({ src: shot.src, alt: shot.alt || 'Animal Battle Stats on Roblox' }))
});

export const NAV = Object.freeze([
    { key: 'animals', href: '/stats', label: 'Animals' },
    { key: 'compare', href: '/compare', label: 'Who Would Win' },
    { key: 'shows', href: '/shows', label: 'Shows' },
    { key: 'rankings', href: '/rankings', label: 'Rankings' },
    { key: 'tiers', href: '/tier-list', label: 'Tier List' },
    { key: 'tournament', href: '/tournament', label: 'Tournament' },
    { key: 'community', href: '/community', label: 'Community' }
]);

export function absoluteUrl(path = '/') {
    return new URL(path, SITE.url).href;
}
