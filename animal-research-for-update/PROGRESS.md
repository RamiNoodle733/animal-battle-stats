# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 179 / 225
- **Verified full-body transparent PNGs committed:** 0 / 179
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Rhinoceros - Southern white rhinoceros (*Ceratotherium simum simum*)
- **Next pending animal:** Ring-tailed Lemur
- **Latest completion:** 2026-09-23 16:02 America/Chicago
- **Latest new-animal image status:** Rhinoceros - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. A 3798x2848 CC BY-SA 3.0 exact-species male Commons source was opened at original resolution; head, torso and horns are visible but foreground vegetation overlaps the lower feet, and adulthood is not explicit. A separate 6000x4000 CC BY-SA 4.0 Commons Quality Image explicitly identifies an adult southern white rhinoceros, but sex and strict complete-body silhouette were not simultaneously verified. No PNG is claimed.
- **Latest legacy image audit:** Komodo Dragon (*Varanus komodoensis*). A 2250x3000 CC BY-SA 3.0 Commons source explicitly identifies an adult and was opened at original resolution, but the tail/body extend out of frame and the complete silhouette fails the mandatory standard. Status remains `REPLACEMENT SOURCE NEEDED`.
- **Next legacy image audit:** Kookaburra. Megalodon remains a structural extinct-photo blocker. Hellbender, Hornet, Ibex, Kudu, Lionfish, Gecko, Giraffe, Guanaco, Hercules Beetle, Pronghorn and Pufferfish are source-verified and awaiting binary cutout/commit tooling.
- **Latest checkpoint:** `audits/CHECKPOINT-175.md`; next checkpoint at 200 completed research files.

## Selection and image rules
Each run uses `DATA_PROGRESS.md` ordering but ignores old checkmarks, choosing the first roster animal without a completed staging report. `IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Research completion and image completion are separate counts. A URL, JPEG, candidate PNG or uninspected cutout is not a completed image.

## Active normalization / uncertainty notes
- Ratings are absolute across all 225 animals, not pound-for-pound.
- Unsupported bite-pressure values remain 0.0. Force is never converted to PSI without defensible contact area.
- Maximum speed remains 0.0 where no defensible species-specific maximum exists. Strike/dive/exercise speed is not automatically maximum travel speed, and speed is not Agility.
- Stamina separates sustained movement from burst speed, fasting tolerance and passive environmental tolerance.
- Special must not double-count ordinary size, toughness, cognition, flight or sociality.
- Group behavior can raise Tactics contextually but does not multiply one individual's Raw Power, Attack or Defense.
- **Rhinoceros control:** roster generic resolved to southern white rhinoceros *Ceratotherium simum simum*, healthy prime mature male, 2300.0 kg / 180.0 cm shoulder / 380.0 cm head-body / 11.1 m/s short gallop / 40.0 y / 0.0 PSI. Attack 86.0 / Defense 82.0 / Agility 56.0 / Stamina 73.0 / Intelligence 49.0 / Special 53.0. It is intentionally above the 1200 kg Black Rhinoceros in absolute Attack/Defense while slightly lower in Agility; horn/mass are not double-counted into Special.
- **Reticulated Python control:** *Malayopython reticulatus*, healthy prime adult female, 50.0 kg / 500.0 cm total length / 0.0 m/s unresolved maximum / 20.0 y / 0.0 PSI. Attack 72.0 / Defense 47.0 / Agility 52.0 / Stamina 52.0 / Intelligence 44.0 / Special 82.0. Direct constriction-pressure evidence supports Attack/Abilities; infrared labial pits support Senses/Special; fasting tolerance is not inflated into aerobic Stamina.
- **Reindeer control:** *Rangifer tarandus*, healthy prime adult male, 170.0 kg / 120.0 cm shoulder / 200.0 cm head-body / 0.0 m/s unresolved maximum / 15.0 y / 0.0 PSI. Attack 55.0 / Defense 46.0 / Agility 66.0 / Stamina 93.0 / Intelligence 50.0 / Special 80.0.
- **Red-tailed Hawk control:** *Buteo jamaicensis*, healthy prime adult female, 1.2 kg / 58.0 cm total length / ~125 cm wingspan context / 0.0 m/s unresolved maximum / 20.0 y / 0.0 PSI. Attack 35.0 / Defense 23.0 / Agility 90.0 / Stamina 74.0 / Intelligence 65.0 / Special 74.0.
- **Red-Eyed Tree Frog control:** *Agalychnis callidryas*, healthy prime adult female, 0.014 kg / 7.0 cm SVL / 0.0 m/s / 5.0 y / 0.0 PSI. Attack 3.0 / Defense 9.0 / Agility 85.0 / Stamina 41.0 / Intelligence 35.0 / Special 64.0.
- **Red Panda control:** *Ailurus fulgens*, healthy prime adult, 5.0 kg / 60.0 cm head-body / 102.0 cm total derived / 0.0 m/s / 10.0 y / 0.0 PSI. Attack 24.0 / Defense 24.0 / Agility 77.0 / Stamina 49.0 / Intelligence 58.0 / Special 67.0.
- **Red Fox control:** *Vulpes vulpes*, healthy prime adult male, 7.2 kg / 105.0 cm representative length / 13.3 m/s synthesis maximum / 3.0 y / 0.0 PSI. Attack 28.0 / Defense 25.0 / Agility 82.0 / Stamina 67.0 / Intelligence 73.0 / Special 78.0.
- **Raven control:** *Corvus corax*, healthy prime northern adult male, 1.3 kg / 63.0 cm / 11.1 m/s observed GPS movement rate / 21.0 y / 0.0 PSI. Attack 17.0 / Defense 18.0 / Agility 89.0 / Stamina 87.0 / Intelligence 95.0 / Special 67.0.
- **Pronghorn control:** *Antilocapra americana*, adult male, 51.0 kg / 140.0 cm / 24.6 m/s / 9.0 y / 0.0 PSI. Attack 47.0 / Defense 34.0 / Agility 94.0 / Stamina 96.0 / Intelligence 60.0 / Special 84.0.
- **Polar Bear control:** *Ursus maritimus*, mature male 500.0 kg. Attack 78.0 / Defense 72.0 / Agility 62.0 / Stamina 88.0 / Intelligence 73.0 / Special 77.0.
- **Duplicate-roster control:** `Anaconda` and `Green Anaconda` currently resolve to the *Eunectes murinus* complex. `Python` and `Reticulated Python` both resolve to *Malayopython reticulatus*. The Python/Reticulated Python pair is intentionally held to identical canonical specimen and ratings until explicitly separated or merged.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Reindeer | 170.0 kg adult male *R. tarandus* | 55.0 | 46.0 | 66.0 | 93.0 | 50.0 | 80.0 |
| Reticulated Python | 50.0 kg adult female *M. reticulatus* | 72.0 | 47.0 | 52.0 | 52.0 | 44.0 | 82.0 |
| Rhinoceros | 2300.0 kg adult male *C. s. simum* | 86.0 | 82.0 | 56.0 | 73.0 | 49.0 | 53.0 |

## Checkpoints
`audits/CHECKPOINT-175.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. The sampled control chain found no prior staging score requiring correction. Next checkpoint: **200 completed research files**.

## Image pipeline status
179 research reports are complete, but **0 verified transparent PNG binaries are committed**. Current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.