# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 47 / 225
- **Verified full-body transparent PNGs committed:** 0 / 47
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Cheetah
- **Next pending animal:** Chimpanzee
- **Latest completion:** 2026-09-18 04:00 America/Chicago
- **Latest new-animal image status:** Cheetah - `SOURCE FOUND - FULL-BODY NOT VERIFIED`; exact explicit male *Acinonyx jubatus*, Bernard DUPONT, 4206x2942, CC BY-SA 2.0. Direct inspection confirms strong body/paw detail but the tail reaches/crosses the left frame edge, so the mandatory complete-tail standard is not met. Continue seeking a reuse-permitted explicit adult male with the whole tail inside frame. Binary PNG tooling remains unavailable.
- **Latest legacy image audit:** Barn Owl - two high-resolution exact-*Tyto alba* reuse-permitted flight candidates found: 6629x3318 CC0 and 4616x3296 CC BY 2.0. Strict adulthood plus complete wings/talons/tail visibility was not simultaneously established from the available render path, so status remains `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Next legacy image audit:** Barracuda
- **Latest checkpoint:** `audits/CHECKPOINT-025.md`

## Selection rule

On each run, read `DATA_PROGRESS.md` for the canonical 225-animal roster and choose the first animal in that list without a completed staging research file. Old `DATA_PROGRESS.md` checkboxes do not count for this overhaul.

## Image rule

`IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Text-research completion and transparent-PNG completion are separate counts. A source URL is not a completed image. See `IMAGE_BACKFILL.md`.

## Active normalization / uncertainty notes

Detailed evidence and older watch items remain in the individual animal reports and `audits/CHECKPOINT-025.md`. Current high-priority items are:

- Upper megafauna Attack/Defense anchors remain provisional until more rhinos, elephants, hippos and large bovids are complete.
- Unsupported bite-pressure values stay at 0.0 when only force, morphology or folklore values exist; force is not converted to PSI without contact area.
- Maximum speed stays at 0.0 where no defensible species-specific measurement or strong agency/institutional value is available; top speed is not substituted for Agility.
- Stamina normalization must continue separating pursuit endurance, migration, environmental tolerance and dehydration resistance.
- Special must not double-count ordinary size, horns, toughness or sociality.
- Image completion remains separate from text completion. Source verification alone does not increment the transparent-PNG count.
- Chameleon is a useful specialization-vs-absolute-power calibration case: a roughly 45 g female can score Special 88.0 and Senses 88.0 because of ballistic tongue and visual tracking systems while remaining Attack 12.0 and Defense 8.0 on the absolute roster scale.
- Cheetah is a key speed-vs-agility calibration case. Its directly measured wild maximum of about 25.9 m/s supports Speed 98.0, while field-measured acceleration, braking and lateral acceleration support Agility 97.0. Those values must not leak into Attack, Defense or Stamina.

### Recent animal notes

- **Bull Shark:** *Carcharhinus leucas*, adult female 111 kg / 284 cm. Theoretical posterior bite force up to 5,914 N is not converted to PSI.
- **Bullet Ant:** *Paraponera clavata*, mature worker 2.2 cm. Raw Power 0.8 preserves absolute ant-to-vertebrate scaling; Special 96.0.
- **Bullfrog:** *Lithobates catesbeianus*, mature territorial male 0.5 kg / 15 cm SVL. Primary dataset documented 2.2 m maximum jump; speed and bite PSI unresolved.
- **Camel:** *Camelus dromedarius*, mature male 550 kg. Stamina 91.0; speed and bite PSI unresolved rather than copied from weak web values.
- **Camel Spider:** *Galeodes arabs*, mature female around 5.1 cm body length. Genus-level bite test reached 2.12 N; species-specific PSI and instrumented maximum speed unresolved.
- **Cape Buffalo:** *Syncerus caffer caffer*, mature bull 750 kg. Attack 76.0 / Defense 70.0 / Agility 55.0 / Stamina 73.0 / Intelligence 56.0 / Special 52.0.
- **Capuchin Monkey:** *Sapajus apella*, mature male 4.0 kg. Attack 23.0 / Defense 17.0 / Agility 84.0 / Stamina 56.0 / Intelligence 92.0 / Special 72.0.
- **Capybara:** *Hydrochoerus hydrochaeris*, dominant adult male 54.0 kg / 120.0 cm. Attack 31.0 / Defense 29.0 / Agility 65.0 / Stamina 52.0 / Intelligence 52.0 / Special 63.0.
- **Caracal:** *Caracal caracal*, mature male 17.0 kg / 85.0 cm head-body. Attack 44.0 / Defense 25.0 / Agility 90.0 / Stamina 53.0 / Intelligence 60.0 / Special 61.0.
- **Cassowary:** *Casuarius casuarius*, mature female 65.0 kg / 165.0 cm standing height. Attack 57.0 / Defense 39.0 / Agility 73.0 / Stamina 58.0 / Intelligence 49.0 / Special 60.0.
- **Chameleon:** roster label resolved to *Chamaeleo chamaeleon*, healthy mature non-gravid female about 45 g. Attack 12.0 / Defense 8.0 / Agility 65.0 / Stamina 31.0 / Intelligence 48.0 / Special 88.0. Legacy 36 km/h speed and 100 PSI bite are rejected as unsupported.
- **Cheetah:** *Acinonyx jubatus*, mature male 46.0 kg / 80.0 cm shoulder / 130.0 cm head-body. Canonical speed 25.9 m/s from instrumented wild hunting data. Attack 41.0 / Defense 24.0 / Agility 97.0 / Stamina 43.0 / Intelligence 62.0 / Special 76.0. Bite PSI remains 0.0 rather than using unsupported internet figures.

## 25-animal checkpoint

`audits/CHECKPOINT-025.md` found no immediate numerical inversion requiring forced correction. Main watch areas are upper-band megafauna anchors, cross-mode Stamina comparisons, and avoiding Special double-counting. The next scheduled recalibration checkpoint is at 50 completed research files.

## Image pipeline status

47 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have verified full-body sources, while others remain pending, unsuitable or license-blocked. Current GitHub write tools accept UTF-8 text only, so no fake PNGs are created. `IMAGE_BACKFILL.md` is the canonical legacy-image audit record.
