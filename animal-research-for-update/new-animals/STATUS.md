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

## Researched, waiting for photos (48)

All new animals are researched and pass the checker:

aardvark, africanized-honey-bee, alligator-snapping-turtle, arapaima,
asian-elephant, bearded-vulture, bengal-tiger, black-caiman,
blue-ringed-octopus, bombardier-beetle, bonobo, brazilian-wandering-spider,
crowned-eagle, eastern-brown-snake, elephant-seal, eurasian-eagle-owl,
fighting-bull, flying-fox, fossa, gaur, gharial, giant-panda,
goliath-tigerfish, greenland-shark, gyrfalcon, house-cat, humpback-whale,
indian-cobra, inland-taipan, kangal, kodiak-bear, leopard-seal, mako-shark,
markhor, mosquito, nile-crocodile, philippine-eagle, portuguese-man-o-war,
sperm-whale, steller-s-sea-eagle, stonefish, sydney-funnel-web-spider,
tibetan-mastiff, titan-beetle, vampire-bat, water-buffalo, wels-catfish,
whale-shark

## Photos (needs commons.wikimedia.org and upload.wikimedia.org allowed)

1. `pip install "rembg[cpu]" scipy` (models download from GitHub on first use)
2. `NODE_USE_ENV_PROXY=1 node scripts/images/find-candidates.js --animal "Bengal Tiger" ...`
   (includes pending new animals; in cloud sessions Node's fetch only uses the
   network proxy with `NODE_USE_ENV_PROXY=1`, and Commons may answer 429 for a
   while when the shared network is busy)
3. `python scripts/images/screen_candidates.py <slug> ...`, then review the
   candidates and record picks in `.cache/image-pipeline/choices.json`
   (`{"<slug>": {"key": "03"}}`)
4. `python scripts/images/make_cutouts.py <slug> ...` (writes the PNG and credit)
5. `npm run build`, check each new animal page, then release (version bump,
   CHANGELOG, push to main)
