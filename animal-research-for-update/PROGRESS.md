# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 42 / 225
- **Verified full-body transparent PNGs committed:** 0 / 42
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Capuchin Monkey
- **Next pending animal:** Capybara
- **Latest completion:** 2026-09-17 22:58 America/Chicago
- **Latest new-animal image status:** Capuchin Monkey - `SOURCE FOUND - FULL-BODY NOT VERIFIED`; exact *Sapajus apella*, Basile Morin, 3935x3935, CC BY-SA 4.0. Direct inspection confirms complete head, torso, four extremities and tail, but source metadata does not establish adulthood or sex, so it is not promoted to the mandatory adult standard.
- **Latest legacy image audit:** Axolotl - high-resolution exact-species candidates were inspected. `Axolotl Wild Type.jpg` is explicitly an adult male *Ambystoma mexicanum*, 4760x1324, CC BY-SA 4.0, but the strict all-four-limbs rule is not satisfied because the side-on pose visibly exposes only the near-side limbs. Other inspected sources were lower resolution, group images, or did not improve strict appendage visibility. Status is `REPLACEMENT SOURCE NEEDED` rather than falsely passing a strong-looking photograph.
- **Next legacy image audit:** Baboon
- **Latest checkpoint:** `audits/CHECKPOINT-025.md`

## Selection rule

On each run, read `DATA_PROGRESS.md` for the canonical 225-animal roster and choose the first animal in that list without a completed staging research file. Old `DATA_PROGRESS.md` checkboxes do not count for this overhaul.

## Image rule

`IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Text-research completion and transparent-PNG completion are separate counts. A source URL is not a completed image. See `IMAGE_BACKFILL.md`.

## Active normalization / uncertainty notes

Detailed evidence and older watch items remain in the individual animal reports and `audits/CHECKPOINT-025.md`. Current high-priority items are:

- Upper megafauna Attack/Defense anchors remain provisional until more rhinos, elephants, hippos and large bovids are complete.
- Unsupported bite-pressure values stay at 0.0 when only force or folklore values exist; force is not converted to PSI without contact area.
- Maximum speed stays at 0.0 where no defensible species-specific measurement or strong agency value is available; top speed is not substituted for Agility.
- Stamina normalization must continue separating pursuit endurance, migration, environmental tolerance and dehydration resistance.
- Special must not double-count ordinary size, horns, toughness or sociality.
- Image completion remains separate from text completion. Source verification alone does not increment the transparent-PNG count.
- Capuchin Monkey is a key anti-compression case: high Intelligence/Agility are compatible with low absolute Attack/Defense at only about 4 kg.

### Recent animal notes

- **Bongo:** *Tragelaphus eurycerus*, mature male 300 kg. Attack 59.0 / Defense 49.0; horns 75-99 cm; speed and bite PSI unresolved.
- **Bottlenose Dolphin:** *Tursiops truncatus*, mature Sarasota male 260 kg. Agility 88.0 / Intelligence 94.0 / Special 92.0; bite PSI unresolved.
- **Box Jellyfish:** *Chironex fleckeri*, mature medusa around 2 kg. Special 98.0 reflects venom system while Defense remains 10.0.
- **Bull Shark:** *Carcharhinus leucas*, adult female 111 kg / 284 cm. Theoretical posterior bite force up to 5,914 N is not converted to PSI.
- **Bullet Ant:** *Paraponera clavata*, mature worker 2.2 cm. Raw Power 0.8 preserves absolute ant-to-vertebrate scaling; Special 96.0.
- **Bullfrog:** *Lithobates catesbeianus*, mature territorial male 0.5 kg / 15 cm SVL. Primary dataset documented 2.2 m maximum jump; speed and bite PSI unresolved.
- **Camel:** *Camelus dromedarius*, mature male 550 kg. Stamina 91.0; speed and bite PSI unresolved rather than copied from weak web values.
- **Camel Spider:** *Galeodes arabs*, mature female around 5.1 cm body length. Genus-level bite test reached 2.12 N; species-specific PSI and instrumented maximum speed unresolved.
- **Cape Buffalo:** *Syncerus caffer caffer*, mature bull 750 kg / 150 cm shoulder / 270 cm head-body. Attack 76.0 / Defense 70.0 / Agility 55.0 / Stamina 73.0 / Intelligence 56.0 / Special 52.0. Speed and bite PSI remain 0.0.
- **Capuchin Monkey:** *Sapajus apella*, mature male 4.0 kg / 45.0 cm head-body. Proposed Attack 23.0 / Defense 17.0 / Agility 84.0 / Stamina 56.0 / Intelligence 92.0 / Special 72.0. Tool-choice experiments support high cognition, but physical ratings remain low on the absolute roster scale. `speed_mps` and bite PSI remain 0.0.

## 25-animal checkpoint

`audits/CHECKPOINT-025.md` found no immediate numerical inversion requiring forced correction. Main watch areas are upper-band megafauna anchors, cross-mode Stamina comparisons, and avoiding Special double-counting. The next scheduled recalibration checkpoint is at 50 completed research files.

## Image pipeline status

42 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have verified full-body sources, while others remain pending, unsuitable or license-blocked. Current GitHub write tools accept UTF-8 text only, so no fake PNGs are created. `IMAGE_BACKFILL.md` is the canonical legacy-image audit record.
