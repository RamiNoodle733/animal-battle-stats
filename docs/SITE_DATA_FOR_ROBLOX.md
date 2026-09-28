# Site data the Roblox game can use

Notes from the website overhaul (September 2026) for whoever works on the
Roblox game. Nothing here changes the game; these are the site-side changes
and the hooks the site already reads.

## Animal data (`animal_stats.json`)

- Schema is unchanged. All 317 animals now carry researched stats
  (`research_status: "researched"`, `research_updated` date); none keeps the
  original placeholder values any more. Version 3.5.0 replaced the last 26
  (Spider Monkey to Zebra), whose old ratings were broken.
- Versions 3.4.0 to 3.6.0 added 92 new animals (all living species or
  domestic breeds). Their slugs are the file names in
  `animal-research-for-update/new-animals/`. The game keeps its own roster,
  so these only appear in the game if it adds them.
- `speed_mps` and `bite_force_psi` of `0` mean "no reliable measurement",
  not zero. Treat 0 as unknown.
- `special_abilities` and `unique_traits` changed for researched animals.
- `image` is now always `/images/animals/<slug>.png?v=<12-char hash>`. Strip
  the query string to get the file path. Bison, Honey Badger, Musk Ox, Puffin
  and Zebra moved from `.jpg` to `.png`; the old `.jpg` files are still there.

## Animal images (`images/animals/<slug>.png`)

- 216 animals have new real-photo cutouts from Wikimedia Commons: adult
  animals, transparent background, cropped to the animal, up to 1200 px.
  The Megalodon is a scientific life reconstruction. Siberian Tiger,
  Saltwater Crocodile, Yak, Bongo and Colossal Squid kept their images.
- Every new photo's author and license is in `data/image-credits.json`
  (title, sourcePage, artist, license, licenseUrl). The licenses are CC BY,
  CC BY-SA, CC0 or public domain. If the game shows these photos, it needs a
  credits screen listing the photographer and license (and CC BY-SA cutouts
  stay under CC BY-SA). The site's version is https://animalbattlestats.com/credits.
- The 48 animals added in 3.4.0 have cutouts from the same pipeline, with
  credits in the same file.
- `data/animal-image-dimensions.json` was regenerated for the new files.

## Live game numbers on the site

The site's Roblox panel (Community page, /roblox) shows players online,
visits, favorites and votes as soon as the game has a public place:

- `data/roblox-game.json` holds the ids (placeId 118592355937726, universeId 10767969314) and
  `status`, which is `"live"` since the 2026-09-27 launch (the env vars `ROBLOX_PLACE_ID` /
  `ROBLOX_UNIVERSE_ID` on Vercel still override the ids).

Global leaderboards are read through Roblox Open Cloud when
`ROBLOX_OPEN_CLOUD_KEY` (DataStore read access, set in Vercel) is present.
The site reads these OrderedDataStores, scope `global`, top 10 by value:

| Store               | Meaning            |
| ------------------- | ------------------ |
| `ABS_LB_POWER`      | Team power         |
| `ABS_LB_COLLECTION` | Animals collected  |
| `ABS_LB_WINS`       | Battles won        |
| `ABS_LB_SHOW`       | Best show streak   |

Each entry's key must be the player's numeric `UserId` (as a string) and
its value a whole number. The site shows only Roblox display names, never
user ids or avatars. The game writes these stores in that format (LeaderboardService).

## Trailer, gameplay videos and screenshots on /roblox

`data/roblox-game.json` also holds `trailer`, `videos` (the Gameplay grid) and
`screenshots`. A video is a YouTube id or a video file in `images/roblox/`; until
one is set its slot says "Video pending" (details in DEPLOYMENT.md). With no
screenshots set, the page uses the game's own screenshots from its Roblox page.

## The website's PLAY button

It links to `https://www.roblox.com/games/start?placeId=118592355937726&launchData=site`, so
`PlayerService` sees `LaunchData = "site"` and gives a first-time player the Stat Scholar
title and Stat Card frame. The `/roblox` page also lists the codes from `Config/Codes.luau`
(copied into `data/roblox-game.json` `codes`; keep them in step when codes change).

## Roblox accounts on the site

Players can connect their Roblox account (Roblox OAuth, see DEPLOYMENT.md). A
linked account's profile shows the player's value on each `ABS_LB_*` store above,
read by UserId through Open Cloud, so those stores double as the per-player stats
the site shows. Nothing is needed in the game for this.
