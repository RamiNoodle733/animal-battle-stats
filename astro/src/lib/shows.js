// ABS Originals at build time: shows (data/shows.json), episodes and full
// seasons (data/show-episodes.json, from scripts/shows/sync-shows.mjs), and the
// structured data every show page shares.
import showsFile from '../../../data/shows.json';
import episodesFile from '../../../data/show-episodes.json';
import { getAnimal } from './catalog.js';
import { SITE, absoluteUrl } from './site.js';

export const BRAND = showsFile.brand;
export const PLATFORMS = showsFile.platforms;
export const TIKTOK_PROFILE = PLATFORMS.tiktok.url;
export const X_PROFILE = PLATFORMS.x.url;

// Rewards for watching and following (lib/economy.js ACTIONS: episode_watch, social_follow).
export const WATCH_REWARD = { coins: 25, xp: 20 };
export const FOLLOW_REWARD = { coins: 30, xp: 15 };

export const showUrl = (show) => `/shows/${show.slug}`;
export const episodeUrl = (episode) => `/shows/${episode.show}/${episode.slug}`;
export const youtubeWatch = (id, start = 0) => `https://www.youtube.com/watch?v=${id}${start ? `&t=${start}s` : ''}`;
export const youtubeShort = (id) => `https://www.youtube.com/shorts/${id}`;
export const youtubeEmbed = (id) => `https://www.youtube-nocookie.com/embed/${id}`;
export const youtubePlaylist = (id) => `https://www.youtube.com/playlist?list=${id}`;
export const tiktokVideo = (id) => `${TIKTOK_PROFILE}/video/${id}`;
export const xPost = (id) => `${X_PROFILE}/status/${id}`;
export const poster = (id, small = false) => `/images/shows/${id}${small ? '-640' : ''}.webp`;
export const posterSet = (id) => `/images/shows/${id}-640.webp 640w, /images/shows/${id}.webp 1280w`;
export const socialCard = (id) => `/images/og/shows/${id}.jpg`;
export const logo = (show) => `/images/shows/${show.slug}-logo.webp`;

// "1:04" and ISO 8601 "PT1M4S".
export function clock(seconds) {
    const total = Math.max(0, Math.round(Number(seconds) || 0));
    const hours = Math.floor(total / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const rest = String(total % 60).padStart(2, '0');
    return hours ? `${hours}:${String(minutes).padStart(2, '0')}:${rest}` : `${minutes}:${rest}`;
}
export function isoDuration(seconds) {
    const total = Math.max(0, Math.round(Number(seconds) || 0));
    const minutes = Math.floor(total / 60);
    return `PT${minutes ? `${minutes}M` : ''}${total % 60}S`;
}
export const minutes = (seconds) => Math.max(1, Math.round((Number(seconds) || 0) / 60));

export const EPISODES = episodesFile.episodes.map((episode) => ({ ...episode, url: episodeUrl(episode) }));
export const SEASONS = episodesFile.seasons;

export const SHOWS = showsFile.shows.map((show) => {
    const episodes = EPISODES.filter((episode) => episode.show === show.slug).sort((a, b) => a.number - b.number);
    const season = SEASONS.find((entry) => entry.show === show.slug) || null;
    const characters = show.characters.map((character) => ({ ...character, art: getAnimal(character.animal) || null }));
    return {
        ...show,
        url: showUrl(show),
        episodes,
        season,
        characters,
        runtime: episodes.reduce((sum, episode) => sum + (Number(episode.seconds) || 0), 0),
        firstAired: episodes.map((episode) => episode.uploadDate).filter(Boolean).sort()[0] || null,
        lastAired: episodes.map((episode) => episode.uploadDate).filter(Boolean).sort().at(-1) || null,
        xThread: episodes[0]?.x ? xPost(episodes[0].x) : X_PROFILE
    };
}).filter((show) => show.episodes.length);

export const getShow = (slug) => SHOWS.find((show) => show.slug === slug);

// The show roles an animal plays ({ show, character }), for its stats page.
export function rolesFor(animalSlug) {
    return SHOWS.flatMap((show) => show.characters.filter((character) => character.animal === animalSlug).map((character) => ({ show, character })));
}
export const totalEpisodes = SHOWS.reduce((sum, show) => sum + show.episodes.length, 0);

// Episode neighbours inside a show.
export function neighbours(episode) {
    const list = getShow(episode.show).episodes;
    const index = list.findIndex((entry) => entry.id === episode.id);
    return { previous: list[index - 1] || null, next: list[index + 1] || null };
}

// The characters who speak in an episode, matched to the show's cast when possible.
export function speakers(episode) {
    const show = getShow(episode.show);
    const names = [...new Set(episode.transcript.map((line) => line.who))];
    return names.map((name) => {
        const key = name.toLowerCase().replace(/^the\s+/, '').replace(/^(sgt|warden)\.?\s+/, '');
        const cast = show.characters.find((character) => {
            const castKey = character.name.toLowerCase().replace(/^the\s+/, '').replace(/^(sgt|warden)\.?\s+/, '');
            return castKey === key;
        });
        return { name, cast: cast || null };
    });
}

// ---------------------------------------------------------------- structured data

const organization = { '@id': `${SITE.url}/#organization` };

export function seriesId(show) {
    return `${absoluteUrl(showUrl(show))}#series`;
}

export function videoObject(episode, show) {
    return {
        '@type': 'VideoObject',
        '@id': `${absoluteUrl(episode.url)}#video`,
        name: `${show.name} Episode ${episode.number}: ${episode.title}`,
        description: episode.summary || episode.hook,
        thumbnailUrl: [absoluteUrl(poster(episode.id)), absoluteUrl(socialCard(episode.id)), `https://i.ytimg.com/vi/${episode.youtube}/hqdefault.jpg`],
        uploadDate: episode.uploadDate,
        duration: isoDuration(episode.seconds),
        embedUrl: youtubeEmbed(episode.youtube),
        contentUrl: youtubeWatch(episode.youtube),
        url: absoluteUrl(episode.url),
        inLanguage: 'en',
        isFamilyFriendly: true,
        publisher: organization,
        ...(episode.transcript.length ? { transcript: episode.transcript.map((line) => `${line.who}: ${line.text}`).join('\n') } : {})
    };
}

export function episodeLd(episode, show) {
    return {
        '@type': 'TVEpisode',
        '@id': `${absoluteUrl(episode.url)}#episode`,
        name: episode.title,
        alternateName: `${show.name} Episode ${episode.number}`,
        episodeNumber: episode.number,
        url: absoluteUrl(episode.url),
        description: episode.summary || episode.hook,
        image: absoluteUrl(socialCard(episode.id)),
        datePublished: episode.uploadDate ? episode.uploadDate.slice(0, 10) : undefined,
        timeRequired: isoDuration(episode.seconds),
        partOfSeries: { '@id': seriesId(show) },
        partOfSeason: { '@type': 'TVSeason', seasonNumber: 1, name: `${show.name} Season 1` },
        productionCompany: organization,
        video: { '@id': `${absoluteUrl(episode.url)}#video` }
    };
}

export function seriesLd(show, { withEpisodes = true } = {}) {
    return {
        '@type': 'TVSeries',
        '@id': seriesId(show),
        name: show.name,
        alternateName: [show.title, `${show.name} (ABS Originals)`],
        description: show.logline,
        url: absoluteUrl(show.url),
        image: absoluteUrl(socialCard(`${show.slug}-s1`)),
        genre: show.genre,
        inLanguage: 'en',
        isFamilyFriendly: true,
        keywords: show.keywords.join(', '),
        numberOfSeasons: 1,
        numberOfEpisodes: show.episodes.length,
        startDate: show.firstAired ? show.firstAired.slice(0, 10) : undefined,
        productionCompany: organization,
        publisher: organization,
        sameAs: [youtubePlaylist(show.youtube.full), youtubePlaylist(show.youtube.shorts)],
        ...(show.season ? { trailer: { '@type': 'VideoObject', name: show.season.title, description: `Every episode of ${show.name} season 1 in one video.`, thumbnailUrl: absoluteUrl(poster(show.season.id)), uploadDate: show.season.uploadDate, duration: isoDuration(show.season.seconds), embedUrl: youtubeEmbed(show.season.youtube), contentUrl: youtubeWatch(show.season.youtube) } } : {}),
        ...(withEpisodes ? {
            containsSeason: {
                '@type': 'TVSeason',
                seasonNumber: 1,
                name: `${show.name} Season 1`,
                numberOfEpisodes: show.episodes.length,
                episode: show.episodes.map((episode) => ({
                    '@type': 'TVEpisode',
                    episodeNumber: episode.number,
                    name: episode.title,
                    url: absoluteUrl(episode.url)
                }))
            }
        } : {})
    };
}

export function breadcrumbs(items) {
    return {
        '@type': 'BreadcrumbList',
        itemListElement: items.map(([name, path], index) => ({ '@type': 'ListItem', position: index + 1, name, item: absoluteUrl(path) }))
    };
}
