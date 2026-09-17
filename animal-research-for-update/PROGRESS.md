# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 23 / 225
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Bighorn Sheep
- **Next pending animal:** Bison
- **Latest completion:** 2026-09-17 04:01 America/Chicago
- **Latest image status:** Bighorn Sheep — `SOURCE FOUND - PNG COMMIT PENDING`

## Selection rule

On each run, read `DATA_PROGRESS.md` for the canonical 225-animal roster and choose the first animal in that list that does not yet have a completed file under `animal-research-for-update/animals/`.

The old checkboxes in `DATA_PROGRESS.md` only track an earlier physical-stat effort. They do **not** mean an animal is complete for this overhaul. All 225 animals must receive a new research file.

## Automation bookkeeping

After each successful animal research commit, update this file with:

- completed count
- most recently completed animal
- next pending animal
- date/time of latest completion
- any unresolved research conflicts worth revisiting
- image status for the completed animal

Do not mark an animal complete unless its research file satisfies `README.md` and `CALIBRATION.md`.

## Unresolved research conflicts / future audit notes

Detailed evidence and caveats remain in each completed animal report. Active cross-roster normalization watch items include:

- **African Elephant:** Revisit representative length and early decimal anchors after more megafauna. Bite PSI remains 0.0 absent defensible evidence.
- **African Lion:** Length conventions and bite-force models conflict. Do not treat mane as heavy armor.
- **African Wild Dog:** Stamina 82.0 is an early endurance anchor; do not generalize all hunts as persistence chases.
- **Albatross:** Wandering albatross canon. Stamina 96.0 needs later normalization against extreme migrants.
- **Alligator:** Direct bite force is strong in newtons but PSI remains 0.0 without contact area. Attack 84.0 / Raw Power 82.0 need upper-force normalization.
- **Alpaca:** Speed and bite PSI remain 0.0; Stamina 60.0 reflects altitude physiology rather than chase performance.
- **Anaconda:** Green-anaconda taxonomy remains unsettled; canonical specimen is adult female. Revisit constriction/power spacing after giant snakes.
- **Anglerfish:** Adult female *Ceratias holboelli*. Mass, speed, lifespan and bite PSI remain unresolved; normalize Special 76.0 later.
- **Anteater:** Giant anteater canon. Keep speed/bite PSI 0.0 and revisit Attack 53.0 after more claw specialists.
- **Arctic Fox:** Total length includes tail. Stamina 79.0 / Special 72.0 need later normalization.
- **Arctic Wolf:** Traditional *Canis lupus arctos* label retained with subspecies caveat. Stamina 86.0 is provisional.
- **Armadillo:** North American nine-banded canon treated as *Dasypus mexicanus*. Defense 47.0 / Special 54.0 need armored-taxon comparison.
- **Army Ant:** *Eciton burchellii* major/soldier. Dry-mass baseline remains a caveat. Individual scores intentionally exclude colony-level feats.
- **Axolotl:** Special 74.0 / Recovery 88.0 recognize regeneration without treating delayed healing as immediate Defense.
- **Baboon:** Olive baboon adult male. Attack 45.0, Agility 72.0 and Intelligence 78.0 need primate/carnivore normalization.
- **Bactrian Camel:** Domestic *Camelus bactrianus*. Stamina 90.0 is provisional; Attack 59.0 / Defense 57.0 need large-herbivore comparison.
- **Badger:** European badger adult male. Seasonal mass varies; Attack 38.0 / Defense 39.0 / Toughness 43.0 need mustelid/carnivore comparison.
- **Bald Eagle:** Adult female canon. Grip-pressure claims rejected. Agility 79.0 / Senses 82.0 / Stamina 75.0 need raptor normalization.
- **Barn Owl:** Adult female canon. Attack 13.0 preserves absolute-force gap; Senses 94.0 / Special 82.0 need later sensory-specialist normalization.
- **Barracuda:** Great barracuda canon. `speed_mps` 6.2 uses modern physiology estimate while historical burst data conflict. Bite PSI remains 0.0.
- **Beaver:** North American beaver canon. Modeled incisor force is 550–740 N but PSI remains 0.0. Do not count dams/lodges as portable Defense.
- **Beluga Whale:** Canon is *Delphinapterus leucas*, representative adult male at 1,500.0 kg and 430.0 cm. Keep `height_cm`, maximum `speed_mps` and `bite_force_psi` at 0.0. Repeated ~22 km/h speed claims were not promoted without sufficiently transparent primary maximum-speed methodology. Attack 61.0 intentionally stays below specialized macropredators despite large body mass; Defense 66.0 credits bulk/blubber without treating blubber as armor. Stamina 84.0, Intelligence 79.0, Senses 91.0 and Special 80.0 require later normalization against Orca, Bottlenose Dolphin, Narwhal, Sperm Whale, Blue Whale, Elephant Seal and other marine specialists. Cook Inlet ESA Endangered status is population-specific, not global. Selected exact-species CC BY-SA 4.0 image is captive and sex is not documented; a verified wild adult-male image would be preferable if found during production image promotion.
- **Bighorn Sheep:** Canon is a representative mature *Ovis canadensis* ram at 110.0 kg, 100.0 cm shoulder height and 170.0 cm length. `speed_mps` 9.0 is a peer-reviewed ramming approach speed, not a proven species maximum sprint. The 3,400 N impact figure is a biomechanical estimate, not a universal collision value. Attack 58.0 / Weaponry 67.0 credit the dedicated horn-ram system while Defense 48.0 avoids turning localized head-impact protection into whole-body armor. Agility 74.0 reflects exceptional steep-rock control rather than speed. Revisit against Bison, Cape Buffalo, Elk, Moose, Mountain Goat, Musk Ox and Ibex. Selected image is a verified adult ram, public domain, 1,149×766; transparent PNG promotion remains pending.

## Image pipeline status

All 23 completed research reports contain a primary image source or candidate. Binary transparent PNG promotion remains pending where the GitHub connector cannot safely write binary assets. No placeholder or text-encoded fake PNGs are permitted. Final image promotion must follow the repository's provenance and strict asset-audit workflow.