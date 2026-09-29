# ABS Originals on the site (/shows)

The animated series (BREAKOUT, DEDUCTION, FASTEST) are made in the Shorts workspace
(`Documents/ChatGPT/Animal Battle Stats Shorts`). The site shows them at `/shows`,
`/shows/<show>` and `/shows/<show>/<episode>`.

## Files

| File | What it holds | Edited by |
|---|---|---|
| `data/shows.json` | each show: name, tagline, logline, genre, accent colour, YouTube playlist ids, cast (character, animal slug, role, blurb); the social accounts | hand |
| `data/show-episodes.json` | every released episode: title, hook, summary, YouTube/TikTok/X ids, length, upload date, transcript; the full-season videos with chapters | `scripts/shows/sync-shows.mjs` |
| `images/shows/<id>.webp`, `<id>-640.webp`, `<show>-logo.webp` | episode and season posters, show logos | the sync script |
| `images/og/shows/<id>.jpg` | 1200x630 social cards | the sync script |
| `lib/shows.js` | episodes and follow accounts for the API (watch rewards) | code |
| `astro/src/lib/shows.js` | build-time data and structured data (TVSeries, TVEpisode, VideoObject) | code |

## After a new episode is on YouTube

1. In the Shorts workspace the episode is in `data/releases.json` with `yt_wide_id`, and
   `tools/yt_poster.py <id>` has written its poster (it keeps a copy in `out/posters/`).
2. In the site worktree: `node scripts/shows/sync-shows.mjs` (reads the Shorts workspace,
   fetches the upload date from YouTube once, writes the JSON and images).
3. A new character: add it to the show's `characters` in `data/shows.json` (spoiler-free blurb).
4. Build, commit, push. The sitemap, llms.txt and the rewards pick the episode up by themselves.

## Rewards (lib/economy.js, api/auth.js)

- `episode_watch`: 25 BattlePoints, 20 XP, 15 pass XP, once per episode per player. The page asks
  `action=watch-start` for a signed ticket when playback starts and trades it at `action=watch`
  when the episode has played through; the server pays only after 70% of the episode's length has
  passed in real time.
- `social_follow`: 30 BattlePoints once per account in `data/shows.json` `platforms`.
- Looks: a title per show (all its episodes), the ABS Originals frame (every episode), ABS Insider (3 follows).

## Analytics

GA4 (`G-NQ328W18LX`, Base.astro) gets `episode_play`, `episode_complete`, `episode_next_click`,
`episode_autoplay_next`, `social_follow_click` and `show_outbound_click` events.
