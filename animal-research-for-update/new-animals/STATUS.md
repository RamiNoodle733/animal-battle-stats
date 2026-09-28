# New animals: status and next steps

An animal joins the live roster when three things exist (the research import
checks this and lists the rest as pending):
1. `animals/<slug>.md`, a research report that passes
   `node scripts/research/check-new-animal.js <slug>`
2. `new-animals/<slug>.json`, its catalogue entry
3. `images/animals/<slug>.png`, its cutout photo with a credit in
   `data/image-credits.json`

Research instructions for agents: `BRIEF.md` (one agent per 5-6 animals; each
animal needs about 12 web searches).

## Live since 3.4.0 (48)

All 48 new animals are researched, have credited cutout photos and are in
the catalogue (release 3.4.0, 2026-09-28). To add more, follow the steps
below for each new slug.

## Photos (needs commons.wikimedia.org, upload.wikimedia.org, en.wikipedia.org and www.wikidata.org allowed)

1. `pip install "rembg[cpu]" scipy` (models download from GitHub on first use)
2. `NODE_USE_ENV_PROXY=1 node scripts/images/find-candidates.js --animal "Bengal Tiger" ...`
   (includes pending new animals; in cloud sessions Node's fetch only uses the
   network proxy with `NODE_USE_ENV_PROXY=1`). When the Commons API answers
   429 on shared cloud addresses, use `python scripts/images/find-candidates-html.py <slug> ...`,
   which reads Commons web pages instead. For domestic breeds and hard cases,
   add the right Commons category to its `EXTRA` table (e.g. "Kangal Çoban
   Köpeği", "Toro de lidia"), or the species category's generic photos crowd
   out the breed. Run one finder at a time; parallel runs trip Wikimedia's
   robot-policy limit.
3. `python scripts/images/screen_candidates.py <slug> ...`, then review the
   candidates and record picks in `.cache/image-pipeline/choices.json`
   (`{"<slug>": {"key": "03"}}`)
4. `python scripts/images/make_cutouts.py <slug> ...` (writes the PNG and credit)
5. `npm run build`, check each new animal page, then release (version bump,
   CHANGELOG, push to main)
