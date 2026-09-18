# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 49 / 225
- **Verified full-body transparent PNGs committed:** 0 / 49
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Clouded Leopard
- **Next pending animal:** Cockatoo
- **Latest completion:** 2026-09-18 06:00 America/Chicago
- **Latest new-animal image status:** Clouded Leopard - `SOURCE FOUND - FULL-BODY NOT VERIFIED`; exact male *Neofelis nebulosa*, Ian Dugdale, 2048x1536, CC BY 4.0, wild in Kaeng Krachan National Park. Source explicitly establishes species and sex, but adulthood plus every paw/complete tail were not strict-verified from the available rendering. Binary PNG tooling remains unavailable.
- **Latest legacy image audit:** Beaver - exact *Castor canadensis* Courtney Celley/USFWS source, 8800x5867, public domain. Strong high-resolution provenance candidate, but the available search/render evidence did not establish explicit adulthood plus complete tail/all paws simultaneously, so it is not promoted as a verified full-body source.
- **Next legacy image audit:** Beluga Whale
- **Latest checkpoint:** `audits/CHECKPOINT-025.md`

## Selection rule

On each run, read `DATA_PROGRESS.md` for the canonical 225-animal roster and choose the first animal in that list without a completed staging research file. Old `DATA_PROGRESS.md` checkboxes do not count for this overhaul.

## Image rule

`IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Text-research completion and transparent-PNG completion are separate counts. A source URL is not a completed image. See `IMAGE_BACKFILL.md`.

## Active normalization / uncertainty notes

- Upper megafauna Attack/Defense anchors remain provisional until more rhinos, elephants, hippos and large bovids are complete.
- Unsupported bite-pressure values stay at 0.0 when only force, morphology or folklore values exist. Force is not converted to PSI without contact area.
- Maximum speed stays at 0.0 where no defensible species-specific measurement or strong agency/institutional value is available. Top speed is not substituted for Agility.
- Stamina normalization must continue separating pursuit endurance, migration, environmental tolerance and dehydration resistance.
- Special must not double-count ordinary size, horns, toughness, cognition or sociality.
- Image completion remains separate from text completion. Source verification alone does not increment the transparent-PNG count.
- Chameleon remains a specialization-vs-absolute-power calibration case: roughly 45 g, Special 88.0, Attack 12.0, Defense 8.0.
- Cheetah remains a speed-vs-agility case: directly measured wild maximum around 25.9 m/s supports Speed 98.0 and acceleration/braking evidence supports Agility 97.0 without leakage into Attack/Defense/Stamina.
- Chimpanzee remains a proportional-strength/cognition case: peer-reviewed muscle work supports about 1.35x human-sized dynamic force/power, not folklore-level super strength.
- Clouded Leopard is a new proportional-specialization case: a 22 kg male receives elite Agility 94.0 and Special 80.0 for arboreal mechanics and extreme canines, while Attack remains 49.0 and Defense 27.0 to preserve absolute size scaling.

### Recent animal notes

- **Camel:** *Camelus dromedarius*, mature male 550 kg. Stamina 91.0; speed and bite PSI unresolved.
- **Camel Spider:** *Galeodes arabs*, mature female around 5.1 cm body length. Genus-level bite test reached 2.12 N; species-specific PSI and maximum speed unresolved.
- **Cape Buffalo:** *Syncerus caffer caffer*, mature bull 750 kg. Attack 76.0 / Defense 70.0 / Agility 55.0 / Stamina 73.0 / Intelligence 56.0 / Special 52.0.
- **Capuchin Monkey:** *Sapajus apella*, mature male 4.0 kg. Attack 23.0 / Defense 17.0 / Agility 84.0 / Stamina 56.0 / Intelligence 92.0 / Special 72.0.
- **Capybara:** *Hydrochoerus hydrochaeris*, dominant adult male 54.0 kg. Attack 31.0 / Defense 29.0 / Agility 65.0 / Stamina 52.0 / Intelligence 52.0 / Special 63.0.
- **Caracal:** *Caracal caracal*, mature male 17.0 kg. Attack 44.0 / Defense 25.0 / Agility 90.0 / Stamina 53.0 / Intelligence 60.0 / Special 61.0.
- **Cassowary:** *Casuarius casuarius*, mature female 65.0 kg. Attack 57.0 / Defense 39.0 / Agility 73.0 / Stamina 58.0 / Intelligence 49.0 / Special 60.0.
- **Chameleon:** *Chamaeleo chamaeleon*, mature non-gravid female about 45 g. Attack 12.0 / Defense 8.0 / Agility 65.0 / Stamina 31.0 / Intelligence 48.0 / Special 88.0.
- **Cheetah:** *Acinonyx jubatus*, mature male 46.0 kg. Attack 41.0 / Defense 24.0 / Agility 97.0 / Stamina 43.0 / Intelligence 62.0 / Special 76.0.
- **Chimpanzee:** *Pan troglodytes*, mature male 46.0 kg. Attack 46.0 / Defense 31.0 / Agility 83.0 / Stamina 57.0 / Intelligence 96.0 / Special 75.0.
- **Clouded Leopard:** *Neofelis nebulosa*, mature male 22.0 kg / 95.0 cm head-body / 35.0 cm shoulder. Attack 49.0 / Defense 27.0 / Agility 94.0 / Stamina 52.0 / Intelligence 64.0 / Special 80.0. Unsupported popular 40 mph speed rejected; bite-force estimates retained as force rather than fabricated PSI.

## 25-animal checkpoint

`audits/CHECKPOINT-025.md` found no immediate numerical inversion requiring forced correction. Main watch areas are upper-band megafauna anchors, cross-mode Stamina comparisons, and avoiding Special double-counting. The next scheduled recalibration checkpoint is at **50 completed research files**.

## Image pipeline status

49 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have verified full-body sources, while others remain pending, unsuitable or license-blocked. Current GitHub write tools accept UTF-8 text only, so no fake PNGs are created. `IMAGE_BACKFILL.md` is the canonical legacy-image audit record.
