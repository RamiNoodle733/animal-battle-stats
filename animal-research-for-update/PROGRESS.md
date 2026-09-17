# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 26 / 225
- **Verified full-body transparent PNGs committed:** 0 / 26
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Black Mamba
- **Next pending animal:** Black Panther
- **Latest completion:** 2026-09-17 07:02 America/Chicago
- **Latest new-animal image status:** Black Mamba — `FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING`
- **Latest legacy image audit:** African Lion — `SOURCE FOUND - FULL-BODY NOT VERIFIED`
- **Latest checkpoint:** `audits/CHECKPOINT-025.md`

## Selection rule

On each run, read `DATA_PROGRESS.md` for the canonical 225-animal roster and choose the first animal in that list without a completed staging research file. Old `DATA_PROGRESS.md` checkboxes do not count for this overhaul.

## Image rule

`IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Text-research completion and transparent-PNG completion are separate counts. A source URL is not a completed image. See `IMAGE_BACKFILL.md`.

## Unresolved research conflicts / future audit notes

Detailed evidence remains in each animal report. Active normalization watch items include:

- **African Elephant:** Canon mature bull 5,500 kg. Attack 92.0 / Defense 94.0 remain provisional terrestrial-megafauna anchors. Bite PSI remains 0.0. Image source upgraded to verified 6000×4000 adult male; binary cutout pending.
- **African Lion:** Length conventions and bite-force models conflict. Do not treat mane as heavy armor. Legacy image search found strong adult-male candidates, including 12000×8000 CC0 `Male lion walking.jpg`, but strict whole-body visual verification remains pending.
- **African Wild Dog:** Stamina 82.0 is an early endurance anchor; do not generalize all hunts as persistence chases.
- **Albatross:** Wandering albatross canon. Stamina 96.0 needs normalization against later extreme migrants.
- **Alligator:** Direct bite force in newtons is strong but PSI remains 0.0 without defensible contact area. Attack 84.0 / Raw Power 82.0 need upper-force normalization.
- **Alpaca:** Speed and bite PSI remain 0.0; Stamina 60.0 reflects altitude physiology rather than chase performance.
- **Anaconda:** Green-anaconda taxonomy remains unsettled; canonical specimen adult female. Revisit constriction/power spacing after giant snakes.
- **Anglerfish:** Adult female *Ceratias holboelli*. Mass, speed, lifespan and bite PSI unresolved; normalize Special 76.0 later.
- **Anteater:** Giant anteater canon. Keep speed/bite PSI 0.0 and revisit Attack 53.0 after more claw specialists.
- **Arctic Fox:** Total length includes tail. Stamina 79.0 / Special 72.0 need later normalization.
- **Arctic Wolf:** Traditional *Canis lupus arctos* label retained with caveat. Stamina 86.0 provisional.
- **Armadillo:** North American nine-banded canon treated as *Dasypus mexicanus*. Defense 47.0 / Special 54.0 need armored-taxon comparison.
- **Army Ant:** *Eciton burchellii* major/soldier. Individual scores intentionally exclude colony-level feats.
- **Axolotl:** Special 74.0 / Recovery 88.0 recognize regeneration without treating delayed healing as immediate Defense.
- **Baboon:** Olive baboon adult male. Attack 45.0, Agility 72.0 and Intelligence 78.0 need primate/carnivore normalization.
- **Bactrian Camel:** Domestic *Camelus bactrianus*. Stamina 90.0 provisional; Attack 59.0 / Defense 57.0 need large-herbivore comparison.
- **Badger:** European badger adult male. Seasonal mass varies; Attack 38.0 / Defense 39.0 need mustelid comparison.
- **Bald Eagle:** Adult female canon. Grip-pressure claims rejected. Agility 79.0 / Senses 82.0 / Stamina 75.0 need raptor normalization.
- **Barn Owl:** Adult female canon. Attack 13.0 preserves absolute-force gap; Senses 94.0 / Special 82.0 need sensory-specialist normalization.
- **Barracuda:** Great barracuda canon. `speed_mps` 6.2 uses modern physiology estimate while historical burst data conflict. Bite PSI 0.0.
- **Beaver:** North American beaver. Modeled incisor force 550–740 N but PSI remains 0.0. Do not count dams/lodges as portable Defense.
- **Beluga Whale:** Adult male 1,500 kg / 430 cm. Maximum speed and bite PSI remain 0.0. Stamina 84.0 / Intelligence 79.0 / Senses 91.0 / Special 80.0 need marine-specialist normalization.
- **Bighorn Sheep:** Mature ram 110 kg. `speed_mps` 9.0 is peer-reviewed ramming approach speed, not maximum sprint. Attack 58.0 / Agility 74.0 need later ungulate comparison.
- **Bison:** Mature bull 900 kg. `speed_mps` 15.3 uses Yellowstone 35 mph agency figure, not an instrumented trial. Attack 72.0 / Defense 68.0 need megaherbivore comparison.
- **Black Bear:** American black bear mature male canon at 120 kg. `speed_mps` 13.4 is conservative amid agency claims. Bite PSI remains 0.0. Attack 56.0 / Defense 49.0 preserve absolute gap below Bison; hibernation is not combat stamina.
- **Black Mamba:** *Dendroaspis polylepis*, representative 2.5 m / 1.6 kg adult. `speed_mps` 5.3 uses a conservative 19 km/h short-burst natural-history value rather than treating folklore as instrumented measurement. Lifespan 11.0 is an older captive record and wild longevity remains poorly known. Bite PSI stays 0.0. Attack 66.0 reflects successful venom delivery rather than mechanical force; Raw Power 8.0 and Defense 18.0 preserve the absolute mass gap. Special 94.0 is a provisional venom-specialist anchor requiring comparison with later extreme venom/electric taxa. Image candidate is exact-species 4320×2592 CC BY-SA 2.0; binary cutout pending.

## 25-animal checkpoint

`audits/CHECKPOINT-025.md` found no immediate numerical inversion requiring forced correction. Main watch areas are upper-band megafauna anchors, cross-mode Stamina comparisons, and avoiding Special double-counting. Image accounting remains explicitly separate.

## Image pipeline status

26 research reports are complete, but **0 verified transparent PNG binaries are committed**. African Elephant has a verified high-resolution adult-male source. Black Bear and Black Mamba have verified full-body source candidates. African Lion remains under strict legacy image audit because candidate metadata is strong but whole-body visual verification has not yet been established to the standard required by `IMAGE_REQUIREMENTS.md`. Current GitHub write tools accept UTF-8 text only, so no fake PNGs are created.