# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 41 / 225
- **Verified full-body transparent PNGs committed:** 0 / 41
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Cape Buffalo
- **Next pending animal:** Capuchin Monkey
- **Latest completion:** 2026-09-17 21:59 America/Chicago
- **Latest new-animal image status:** Cape Buffalo — `FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING`; exact *Syncerus caffer caffer* male, Charles J. Sharp, 4992×3328, CC BY-SA 4.0; direct original inspection confirms complete head, torso, all four legs/hooves and tail in frame
- **Latest legacy image audit:** Army Ant — several exact *Eciton burchellii* reuse-permitted photographs were inspected. The 4201×2801 La Selva source shows a complete isolated soldier-like individual but the ant occupies too few source pixels for a strong cutout; other high-resolution sources are group/trail images. No candidate was falsely promoted.
- **Next legacy image audit:** Axolotl
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

### Recent animal notes

- **Bongo:** *Tragelaphus eurycerus*, mature male 300 kg. Attack 59.0 / Defense 49.0; horns 75–99 cm; speed and bite PSI unresolved.
- **Bottlenose Dolphin:** *Tursiops truncatus*, mature Sarasota male 260 kg. Agility 88.0 / Intelligence 94.0 / Special 92.0; bite PSI unresolved.
- **Box Jellyfish:** *Chironex fleckeri*, mature medusa around 2 kg. Special 98.0 reflects venom system while Defense remains 10.0.
- **Bull Shark:** *Carcharhinus leucas*, adult female 111 kg / 284 cm. Theoretical posterior bite force up to 5,914 N is not converted to PSI.
- **Bullet Ant:** *Paraponera clavata*, mature worker 2.2 cm. Raw Power 0.8 preserves absolute ant-to-vertebrate scaling; Special 96.0.
- **Bullfrog:** *Lithobates catesbeianus*, mature territorial male 0.5 kg / 15 cm SVL. Primary dataset documented 2.2 m maximum jump; speed and bite PSI unresolved.
- **Camel:** *Camelus dromedarius*, mature male 550 kg. Stamina 91.0; speed and bite PSI unresolved rather than copied from weak web values.
- **Camel Spider:** *Galeodes arabs*, mature female around 5.1 cm body length. Genus-level bite test reached 2.12 N; species-specific PSI and instrumented maximum speed unresolved.
- **Cape Buffalo:** *Syncerus caffer caffer*, mature bull 750 kg / 150 cm shoulder / 270 cm head-body. Proposed Attack 76.0 / Defense 70.0 / Agility 55.0 / Stamina 73.0 / Intelligence 56.0 / Special 52.0. Horn span 72.5–134 cm and curve length 66–116 cm. Live 92.3/91.1 Attack/Defense placeholders were independently rejected as inflated. `speed_mps` and bite PSI remain 0.0. Verified adult-male full-body source; binary cutout pending.

## 25-animal checkpoint

`audits/CHECKPOINT-025.md` found no immediate numerical inversion requiring forced correction. Main watch areas are upper-band megafauna anchors, cross-mode Stamina comparisons, and avoiding Special double-counting. The next scheduled recalibration checkpoint is at 50 completed research files.

## Image pipeline status

41 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have verified full-body sources, while others remain pending, unsuitable or license-blocked. Current GitHub write tools accept UTF-8 text only, so no fake PNGs are created. `IMAGE_BACKFILL.md` is the canonical legacy-image audit record.
