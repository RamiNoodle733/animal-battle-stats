'use strict';

// ABS Originals for the API: which episodes exist (for watch rewards), how long
// each one runs, and which social accounts a player can follow for a reward.
// Show info lives in data/shows.json; episodes in data/show-episodes.json
// (scripts/shows/sync-shows.mjs).

const showsFile = require('../data/shows.json');
const episodesFile = require('../data/show-episodes.json');

const SHOWS = Object.freeze(showsFile.shows.map((show) => Object.freeze({
    slug: show.slug,
    name: show.name,
    episodes: episodesFile.episodes.filter((episode) => episode.show === show.slug).length
})));

const EPISODES = Object.freeze(episodesFile.episodes.map((episode) => Object.freeze({
    id: episode.id,
    show: episode.show,
    number: episode.number,
    title: episode.title,
    seconds: Number(episode.seconds) || 60
})));
const EPISODE_BY_ID = new Map(EPISODES.map((episode) => [episode.id, episode]));

// The accounts a player can follow once each for a reward (the site cannot see
// follows, so this pays for opening the account from the site, once).
const FOLLOW_PLATFORMS = Object.freeze(Object.keys(showsFile.platforms));

// A watch counts after most of the episode has played: the server checks that
// this much real time passed between the start token and the claim.
function minWatchSeconds(episode) {
    return Math.max(20, Math.floor((Number(episode?.seconds) || 60) * 0.7));
}

module.exports = {
    EPISODES,
    EPISODE_BY_ID,
    FOLLOW_PLATFORMS,
    SHOWS,
    minWatchSeconds
};
