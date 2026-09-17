# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 17 / 225
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Badger
- **Next pending animal:** Bald Eagle
- **Latest completion:** 2026-09-16 21:59 America/Chicago
- **Latest image status:** Badger — `SOURCE FOUND - PNG COMMIT PENDING`

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

Detailed evidence and caveats remain in each completed animal report. The following items are the active cross-roster normalization watchlist:

- **African Elephant:** Canon is *Loxodonta africana*. Revisit representative body length and first-animal decimal anchors after more megafauna are researched. Keep bite PSI at 0.0 absent defensible evidence.
- **African Lion:** Sources mix head-body and total length. Bite-force models differ materially, so keep PSI at 0.0 pending a force/contact-area convention. Do not treat the mane as heavy armor. Revisit ratings after other big cats and large herbivores.
- **African Wild Dog:** Do not generalize every hunt as a long persistence chase. Keep bite PSI at 0.0. Stamina 82.0 is an early endurance anchor to revisit after more cursorial predators.
- **Albatross:** Canon is wandering albatross (*Diomedea exulans*). Height remains undefined. Keep measured/empirical flight regimes distinct from theoretical maxima. Stamina 96.0 requires later normalization against other extreme migrants.
- **Alligator:** Canon is American alligator (*Alligator mississippiensis*). Direct bite force is well supported in newtons, but PSI remains 0.0 without contact area. Attack 84.0 and Raw Power 82.0 should be revisited after upper mechanical-force anchors.
- **Alpaca:** Preferred research name is *Vicugna pacos*. Speed and bite PSI remain 0.0. Stamina 60.0 reflects high-altitude physiology rather than elite chase performance.
- **Anaconda:** Canon is green anaconda/traditional *Eunectes murinus* concept; proposed *E. akayima* split remains contested. Canonical specimen is an adult female. Speed and bite PSI remain 0.0. Revisit constriction/power spacing after other giant snakes and grapplers.
- **Anglerfish:** Canon is adult female *Ceratias holboelli*. Mass, speed, lifespan and bite PSI remain unresolved. Special 76.0 should be normalized after more venom/electric/camouflage specialists.
- **Anteater:** Canon is giant anteater (*Myrmecophaga tridactyla*). Total length convention should be explicit. Keep speed and bite PSI at 0.0. Attack 53.0 is based on documented claw trauma and should be revisited after more claw/grapple specialists.
- **Arctic Fox:** Total length includes tail. Keep speed and bite PSI at 0.0. Stamina 79.0 and Special 72.0 require later normalization against other endurance and environmental specialists.
- **Arctic Wolf:** Retain *Canis lupus arctos* as traditional High Arctic label while acknowledging subspecies uncertainty. Canonical male 40.0 kg. Keep maximum speed and bite PSI at 0.0. Stamina 86.0 is a strong endurance anchor to revisit later.
- **Armadillo:** Canonical North American nine-banded animal treated as *Dasypus mexicanus* under the recent taxonomic split. Canonical 5.5 kg and 75.0 cm total length. Attack 14.0 remains low despite digging strength; Defense 47.0 and Special 54.0 require later armored-taxon comparison.
- **Army Ant:** Canon is *Eciton burchellii* major/soldier worker. Canonical 0.0000104 kg is dry mass pending strong live-mass data. Attack 1.8, Defense 0.9 and Raw Power 0.3 deliberately prevent colony feats from leaking into individual scaling. Speed and bite PSI remain 0.0.
- **Axolotl:** Canon is *Ambystoma mexicanum*, representative wild-type adult male at 0.2 kg and 25.0 cm total length. Keep maximum swim speed and bite PSI at 0.0. Special 74.0 and Recovery 88.0 recognize real regeneration without treating delayed healing as immediate Defense. Wild population remains Critically Endangered; selected captive adult-male wild-type image still needs PNG promotion.
- **Baboon:** Canon is olive baboon (*Papio anubis*), naturally foraging adult male at 24.0 kg. Total `length_cm` is explicitly head-body plus tail (132.0 cm). Keep maximum speed and bite PSI at 0.0. Attack 45.0, Agility 72.0 and Intelligence 78.0 should be revisited after chimpanzee/gorilla/macaque and additional carnivore anchors. Selected adult-male image still needs PNG promotion.
- **Bactrian Camel:** Canon is domestic *Camelus bactrianus*, not wild *Camelus ferus*. Canonical adult male is 580.0 kg, 180.0 cm shoulder height and 300.0 cm head-body length. Keep maximum speed and bite PSI at 0.0 because the 10-20 mph zoo range is not an instrumented maximum and no defensible PSI measurement was found. Stamina 90.0 is a provisional elite endurance anchor based on loaded high-altitude travel plus dehydration/thermal physiology and should be revisited after dromedary Camel, Pronghorn, Wild Horse and Reindeer. Attack 59.0 and Defense 57.0 should be normalized after Bison/Cape Buffalo/Moose/Rhinoceros. Selected 3256×2128 CC BY-SA 3.0 Wikimedia Quality Image is not sex-verified; prefer a verified adult male during final asset promotion if available.
- **Badger:** Canon is European/Eurasian badger (*Meles meles*), representative adult male at 13.0 kg, 27.5 cm shoulder height and 75.0 cm head-body length. Seasonal mass variation is substantial, so do not normalize from unusually fat autumn or record males. Keep maximum speed and bite PSI at 0.0: telemetry provides field travel speeds but not a sprint ceiling, and powerful jaw anatomy does not provide defensible PSI. Attack 38.0, Defense 39.0 and Toughness 43.0 should be revisited after Wolverine, Honey Badger, Tasmanian Devil, Bobcat and Coyote. Selected 4408×2939 CC BY 2.0 Wikimedia image is exact species but sex is not verified; prefer a verified adult male during final asset promotion if equally suitable.

## Image pipeline status

All 17 completed research reports contain a primary image source or candidate. Binary transparent PNG promotion remains pending where the GitHub connector cannot safely write binary assets. No placeholder or text-encoded fake PNGs are permitted. Final image promotion must follow the repository's provenance and strict asset-audit workflow.