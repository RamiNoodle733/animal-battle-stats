# New animals: status and next steps

An animal joins the live roster when three things exist (the research import
checks this and lists the rest as pending):
1. `animals/<slug>.md`, a research report that passes
   `node scripts/research/check-new-animal.js <slug>`
2. `new-animals/<slug>.json`, its catalogue entry
3. `images/animals/<slug>.png`, its cutout photo with a credit in
   `data/image-credits.json`

Research instructions for agents: `BRIEF.md` (one agent per 6 animals; each
animal needs about 12 web searches).

## Researched, waiting for photos (23)

asian-elephant, bengal-tiger, brazilian-wandering-spider, crowned-eagle,
eastern-brown-snake, eurasian-eagle-owl, gaur, gharial, giant-panda,
humpback-whale, indian-cobra, inland-taipan, kangal, kodiak-bear,
nile-crocodile, philippine-eagle, sperm-whale, steller-s-sea-eagle,
stonefish, sydney-funnel-web-spider, tibetan-mastiff, vampire-bat,
water-buffalo

## Not researched yet (25)

Name -> slug; scientific name; biome; existing animals to calibrate against.

- Whale Shark -> whale-shark; Rhincodon typus; OCEAN; great-white-shark, manta-ray, blue-whale
- Mako Shark -> mako-shark; Isurus oxyrinchus; OCEAN; great-white-shark, tiger-shark, swordfish
- Greenland Shark -> greenland-shark; Somniosus microcephalus; ARCTIC; great-white-shark, tiger-shark
- Goliath Tigerfish -> goliath-tigerfish; Hydrocynus goliath; WETLANDS; piranha, barracuda
- Black Caiman -> black-caiman; Melanosuchus niger; JUNGLE; alligator, nile-crocodile
- Alligator Snapping Turtle -> alligator-snapping-turtle; Macrochelys temminckii; WETLANDS; snapping-turtle
- Wels Catfish -> wels-catfish; Silurus glanis; WETLANDS; bull-shark, piranha
- Arapaima -> arapaima; Arapaima gigas; JUNGLE; piranha, electric-eel
- Fossa -> fossa; Cryptoprocta ferox; JUNGLE; ocelot, clouded-leopard, wolverine
- House Cat -> house-cat; Felis catus; FOREST; caracal, serval, bobcat, stoat
- Bonobo -> bonobo; Pan paniscus; JUNGLE; chimpanzee, orangutan
- Fighting Bull -> fighting-bull; Bos taurus (Toro de Lidia); SAVANNA; bison, cape-buffalo, gaur
- Markhor -> markhor; Capra falconeri; MOUNTAINS; ibex, mountain-goat
- Aardvark -> aardvark; Orycteropus afer; SAVANNA; anteater, pangolin
- Flying Fox -> flying-fox; Pteropus vampyrus; JUNGLE; vampire-bat, flying-squirrel
- Leopard Seal -> leopard-seal; Hydrurga leptonyx; ARCTIC; seal, sea-lion, walrus
- Elephant Seal -> elephant-seal; Mirounga leonina; OCEAN; walrus, sea-lion
- Gyrfalcon -> gyrfalcon; Falco rusticolus; ARCTIC; peregrine-falcon
- Bearded Vulture -> bearded-vulture; Gypaetus barbatus; MOUNTAINS; vulture, condor
- Blue-Ringed Octopus -> blue-ringed-octopus; Hapalochlaena lunulata; OCEAN; octopus, box-jellyfish
- Portuguese Man o' War -> portuguese-man-o-war; Physalia physalis; OCEAN; box-jellyfish
- Bombardier Beetle -> bombardier-beetle; Brachinus crepitans; FOREST; stag-beetle
- Titan Beetle -> titan-beetle; Titanus giganteus; JUNGLE; hercules-beetle
- Mosquito -> mosquito; Anopheles gambiae or Aedes aegypti; WETLANDS; dragonfly, army-ant
- Africanized Honey Bee -> africanized-honey-bee; Apis mellifera scutellata hybrid; SAVANNA; hornet, bullet-ant

## Photos (needs commons.wikimedia.org and upload.wikimedia.org allowed)

1. `pip install "rembg[cpu]" scipy` (models download from GitHub on first use)
2. `node scripts/images/find-candidates.js --animal "Bengal Tiger" ...` (includes
   pending new animals)
3. `python scripts/images/screen_candidates.py <slug> ...`, then review the
   candidates and record picks in `.cache/image-pipeline/choices.json`
   (`{"<slug>": {"key": "03"}}`)
4. `python scripts/images/make_cutouts.py <slug> ...` (writes the PNG and credit)
5. `npm run build`, check each new animal page, then release (version bump,
   CHANGELOG, push to main)
