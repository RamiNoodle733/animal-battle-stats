# New animals: status and next steps

An animal joins the live roster when three things exist (the research import
checks this and lists the rest as pending):
1. `animals/<slug>.md`, a research report that passes
   `node scripts/research/check-new-animal.js <slug>`
2. `new-animals/<slug>.json`, its catalogue entry
3. `images/animals/<slug>.png`, its cutout photo with a credit in
   `data/image-credits.json`

Research instructions for agents: `BRIEF.md` (one agent per 5-6 animals; each
animal needs about 12 searches and page reads).

## Live

- 3.4.0: 48 new animals (225 -> 273)
- 3.5.0: 22 new animals (273 -> 295), and the last 26 unresearched animals
  (Spider Monkey to Zebra) got reports, so every animal is researched
- 3.6.0: 22 new animals (295 -> 317), the first pets
- 3.7.0: 24 new animals (317 -> 341), the rest of the pets
- 3.8.0: 3 new animals (341 -> 344)

## Pending

- gray-whale: researched, but Commons has no full-body photograph of one
  (spyhops, surfacing backs and an 1874 Scammon illustration). Add a photo
  when one appears; the finder's EXTRA entry already names the candidates.

## Research without WebSearch

Cloud sessions cap WebSearch calls (about 200 per session). Research agents
use `scripts/research/web.py` instead (see BRIEF.md): `papers` (Europe PMC)
and `read` (a page as text). Bing through `search` mostly matches only the
first word from cloud addresses.

## Photos (needs commons.wikimedia.org, upload.wikimedia.org, en.wikipedia.org and www.wikidata.org allowed)

1. `pip install "rembg[cpu]" scipy` (models download from GitHub on first use)
2. `NODE_USE_ENV_PROXY=1 node scripts/images/find-candidates.js --animal "Bengal Tiger" ...`
   (includes pending new animals; in cloud sessions Node's fetch only uses the
   network proxy with `NODE_USE_ENV_PROXY=1`). When the Commons API answers
   429 on shared cloud addresses, use `python scripts/images/find-candidates-html.py <slug> ...`,
   which reads Commons web pages instead. For domestic breeds and hard cases,
   add the right Commons category to its `EXTRA` table (e.g. "Kangal Çoban
   Köpeği", "Toro de lidia"), or the species category's generic photos crowd
   out the breed. When the right photo is on the Wikipedia article but the
   finder misses it, name the file in `EXTRA` under `"titles"`; named files
   rank first. The finder also takes slugs of animals already on the site
   (photo replacements, with `"species"` in `EXTRA`). Run one finder at a time; parallel runs trip Wikimedia's
   robot-policy limit.
3. `python scripts/images/screen_candidates.py <slug> ...`, then review the
   candidates and record picks in `.cache/image-pipeline/choices.json`
   (`{"<slug>": {"key": "03"}}`)
4. `python scripts/images/make_cutouts.py <slug> ...` (writes the PNG and credit).
   In `choices.json`, `erase` boxes are fractions of the photo (`[x0, y0, x1, y1]`,
   add `"light"` as a fifth item to blank only bright pixels, e.g. a white bird
   behind a dark animal), `neutral` removes a colour cast (underwater, aquarium)
   and `fade` softens a body that runs off the photo edge.
5. `npm run build`, check each new animal page, then release (version bump,
   CHANGELOG, push to main)
