# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 13 / 225
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Army Ant
- **Next pending animal:** Axolotl
- **Latest completion:** 2026-09-16 18:00 America/Chicago
- **Latest image status:** Army Ant — `SOURCE FOUND - PNG COMMIT PENDING`

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
- **Arctic Wolf taxonomy:** *Canis lupus arctos* is retained as the traditional High Arctic research label, but North American gray-wolf subspecies boundaries remain debated. Production should not overstate taxonomic certainty.
- **Arctic Wolf size:** Canonical male is 40.0 kg based on Toronto Zoo's 34–46 kg male range. Do not import 70–80 kg mainland gray-wolf extremes into this baseline.
- **Arctic Wolf speed:** Direct Ellesmere measurements establish routine travel at 8.7 km/h and den-bound travel at 10.0 km/h, not maximum sprint speed. Keep `speed_mps: 0.0` until a defensible Arctic-specific maximum is found.
- **Arctic Wolf bite force:** Keep `bite_force_psi: 0.0`. Comparative wolf cranial biomechanics does not justify fabricating a species-specific pressure value.
- **Arctic Wolf lifespan:** `8.0 years` is a provisional wild ecological recommendation with lower confidence than the physical-size fields. Revisit if a High Arctic longevity dataset is found.
- **Arctic Wolf pack effect:** Do not silently convert cooperative muskox-hunting success into individual one-on-one Attack. Pack Pressure is explicitly context-dependent.
- **Arctic Wolf ratings:** Attack 52.0 is provisionally above African Wild Dog 47.0 and far below African Lion 79.0/Alligator 84.0. Stamina 86.0 is supported by direct travel and territory data but should be revisited after Gray Wolf, Reindeer/Caribou and other endurance anchors.
- **Arctic Wolf image:** Selected real 2678×2316 image explicitly labeled male on Wikimedia Commons, Drew Avery, CC BY 2.0. It is captive, so later production may prefer a verified wild adult-male candidate. Current connector cannot safely commit binary PNG; source and original-image URL are recorded in the report.
- **Armadillo taxonomy:** Canonical U.S./Mexican nine-banded animal is now treated as *Dasypus mexicanus* following the 2025 Systematic Biology revision and current 2026 mammalogy usage. Classic U.S. literature uses *D. novemcinctus* sensu lato, so preserve geographic provenance when migrating legacy measurements.
- **Armadillo physical fields:** Canonical mass 5.5 kg and total length 75.0 cm are well supported under the legacy North American species concept. Height, maximum speed and bite PSI remain 0.0 rather than promoting weak or inaccessible values.
- **Armadillo ratings:** Attack 14.0 is intentionally low under absolute scaling despite strong digging forelimbs. Defense 47.0 and Special 54.0 recognize true osteoderm armor without treating it as complete shell immunity. Revisit armor spacing after pangolins, turtles/tortoises and other armored taxa.
- **Armadillo image:** Selected real 4000×3000 NPS photograph from Big Thicket National Preserve, Texas, public domain. Source uses the old *D. novemcinctus* label but geography places it in current *D. mexicanus*. Sex is unstated; a verified adult male can supersede it later. Binary PNG remains pending.
- **Army Ant canon:** Standardized as *Eciton burchellii* and a healthy adult major/soldier worker, not a queen or an abstract whole colony. Direct major dry mass is 9.3–11.4 mg; canonical `weight_kg` 0.0000104 is explicitly dry mass pending a strong live-mass value.
- **Army Ant scaling:** Attack 1.8, Defense 0.9, and Raw Power 0.3 deliberately enforce absolute scaling. Do not import colony swarm lethality into an individual soldier. Agility 66.0 is allowed because fine maneuverability is a different axis from absolute force.
- **Army Ant speed/bite/lifespan:** Keep `speed_mps: 0.0` because raid-front or traffic speed is not individual maximum sprint speed. Keep bite PSI 0.0. Worker lifespan 0.3 years is a low-confidence approximation of “several months.”
- **Army Ant colony context:** Colony estimates vary widely, roughly 100,000–2,000,000 depending on source/context. Living architecture and leaderless raids are recorded as colony-dependent traits rather than individual intelligence/power.
- **Army Ant image:** Selected real 2188×1610 *E. burchellii* macro photograph from Ecuador by Graham Wise, CC BY 2.0, with an Alex Wild CC0 fallback. Primary metadata does not explicitly certify caste, so a verified full-body major may supersede it. Binary PNG remains pending.

## Image pipeline status

All 13 completed research reports contain a primary image source or candidate. Binary transparent PNG promotion remains pending where the GitHub connector cannot safely write binary assets. No placeholder or text-encoded fake PNGs are permitted. Final image promotion must follow the repository's provenance and strict asset-audit workflow.