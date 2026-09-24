# Site data the Roblox game can use

Notes from the website overhaul (September 2026) for whoever works on the
Roblox game. Nothing here changes the game; these are the site-side changes
and the hooks the site already reads.

## Animal data (`animal_stats.json`)

- Schema is unchanged. 199 of 225 animals now carry researched stats
  (`research_status: "researched"`, `research_updated` date); the rest keep
  their original values (`"legacy"`).
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
- `data/animal-image-dimensions.json` was regenerated for the new files.

## Live game numbers on the site

The site's Roblox panel (Community page, /roblox) shows players online,
visits, favorites and votes as soon as the game has a public place:

- set `placeId` (or `universeId`) in `data/roblox-game.json`, or the
  `ROBLOX_PLACE_ID` / `ROBLOX_UNIVERSE_ID` environment variables on Vercel.

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
user ids or avatars. The game does not write these stores yet.
