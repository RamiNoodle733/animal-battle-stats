# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 184 / 225
- **Verified full-body transparent PNGs committed:** 0 / 184
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Saltwater Crocodile (*Crocodylus porosus*)
- **Next pending animal:** Sawfish
- **Latest completion:** 2026-09-23 21:00 America/Chicago
- **Latest new-animal image status:** Saltwater Crocodile - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. An exact-species iNaturalist CC BY-SA 3.0 discovery candidate was directly inspected and shows the complete visible head, torso, four limbs/feet and tail, but source metadata does not explicitly establish adulthood or sex. Separate ADW sources explicitly identify adult/sexually mature animals but did not simultaneously improve complete-body framing, licensing and preferred-sex evidence. No PNG is claimed.
- **Latest legacy image audit:** Lobster (*Homarus americanus*). The existing 5040x3224 CC BY 2.0 Newfoundland candidate was directly reopened and rejected as a strict full-body primary because its crevice pose hides the abdomen/tail and multiple walking appendages. A fresh 5174x3441 CC BY 2.0 exact-species alternative has the same close frontal/crevice failure. Historical explicitly male images are illustrations or weak-resolution material. Status is now `REPLACEMENT SOURCE NEEDED`.
- **Next legacy image audit:** Lynx. Source-verified animals awaiting binary cutout/commit tooling remain separate from unresolved source-quality cases.
- **Latest checkpoint:** `audits/CHECKPOINT-175.md`; next checkpoint at 200 completed research files.

## Selection and image rules
Each run uses `DATA_PROGRESS.md` ordering but ignores old checkmarks, choosing the first roster animal without a completed staging report. `IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Research completion and image completion are separate counts. A URL, JPEG, candidate PNG or uninspected cutout is not a completed image.

## Active normalization / uncertainty notes
- Ratings are absolute across all 225 animals, not pound-for-pound.
- Unsupported bite-pressure values remain 0.0. Force is never converted to PSI without defensible contact area.
- Maximum speed remains 0.0 where no defensible species-specific maximum exists. Strike/dive/exercise speed is not automatically maximum travel speed, and speed is not Agility.
- Stamina separates sustained movement from burst speed, fasting tolerance, passive environmental tolerance and current-assisted displacement.
- Special must not double-count ordinary size, toughness, cognition, flight or sociality.
- Group behavior can raise Tactics contextually but does not multiply one individual's Raw Power, Attack or Defense.
- Generic roster labels must be resolved to an explicit taxon before physical fields and image requirements can be scientifically coherent.
- **Saltwater Crocodile control:** *Crocodylus porosus*, healthy prime adult male, 500.0 kg / 500.0 cm total length / unresolved standardized height / unresolved standardized maximum speed / 70.0 y / 0.0 PSI unresolved. Direct bite measurement is retained as 16,414 N molariform force rather than mislabeled PSI. Attack 92.0 / Defense 83.0 / Agility 52.0 / Stamina 46.0 / Intelligence 58.0 / Special 80.0. Current-assisted 590 km movement is evidence for persistence/tactics, not mammalian-style aerobic stamina.
- **Salamander control:** roster generic `Caudata` resolved for staging to Eastern Tiger Salamander *Ambystoma tigrinum*, healthy post-metamorphic adult male, 0.125 kg / 25.0 cm total length / unresolved standardized height / unresolved maximum speed / 16.0 y longevity benchmark / 0.0 PSI unresolved. Attack 7.0 / Defense 14.0 / Agility 50.0 / Stamina 42.0 / Intelligence 32.0 / Special 74.0.
- **Sailfish control:** *Istiophorus platypterus*, healthy prime adult female, 70.0 kg / 270.0 cm total length / unresolved standardized height / 8.3 m/s theoretical muscle-based maximum / 13.0 y reported maximum age / 0.0 PSI. Attack 52.0 / Defense 38.0 / Agility 89.0 / Stamina 79.0 / Intelligence 53.0 / Special 82.0.
- **Sable Antelope control:** *Hippotragus niger*, healthy prime adult male, 235.0 kg / 140.0 cm shoulder / 230.0 cm head-body / 0.0 m/s unresolved maximum / 16.0 y / 0.0 PSI. Attack 62.0 / Defense 48.0 / Agility 72.0 / Stamina 69.0 / Intelligence 48.0 / Special 57.0.
- **Ring-tailed Lemur control:** *Lemur catta*, healthy prime adult male, 2.5 kg. Attack 22.0 / Defense 20.0 / Agility 81.0 / Stamina 59.0 / Intelligence 74.0 / Special 65.0.
- **Rhinoceros control:** southern white rhinoceros *Ceratotherium simum simum*, mature male 2300.0 kg. Attack 86.0 / Defense 82.0 / Agility 56.0 / Stamina 73.0 / Intelligence 49.0 / Special 53.0.
- **Reticulated Python control:** *Malayopython reticulatus*, adult female 50.0 kg. Attack 72.0 / Defense 47.0 / Agility 52.0 / Stamina 52.0 / Intelligence 44.0 / Special 82.0.
- **Reindeer control:** *Rangifer tarandus*, adult male 170.0 kg. Attack 55.0 / Defense 46.0 / Agility 66.0 / Stamina 93.0 / Intelligence 50.0 / Special 80.0.
- **Red-tailed Hawk control:** *Buteo jamaicensis*, adult female 1.2 kg. Attack 35.0 / Defense 23.0 / Agility 90.0 / Stamina 74.0 / Intelligence 65.0 / Special 74.0.
- **Red-Eyed Tree Frog control:** *Agalychnis callidryas*, adult female 0.014 kg. Attack 3.0 / Defense 9.0 / Agility 85.0 / Stamina 41.0 / Intelligence 35.0 / Special 64.0.
- **Red Panda control:** *Ailurus fulgens*, adult 5.0 kg. Attack 24.0 / Defense 24.0 / Agility 77.0 / Stamina 49.0 / Intelligence 58.0 / Special 67.0.
- **Red Fox control:** *Vulpes vulpes*, adult male 7.2 kg. Attack 28.0 / Defense 25.0 / Agility 82.0 / Stamina 67.0 / Intelligence 73.0 / Special 78.0.
- **Raven control:** *Corvus corax*, adult male 1.3 kg. Attack 17.0 / Defense 18.0 / Agility 89.0 / Stamina 87.0 / Intelligence 95.0 / Special 67.0.
- **Pronghorn control:** *Antilocapra americana*, adult male 51.0 kg. Attack 47.0 / Defense 34.0 / Agility 94.0 / Stamina 96.0 / Intelligence 60.0 / Special 84.0.
- **Polar Bear control:** *Ursus maritimus*, mature male 500.0 kg. Attack 78.0 / Defense 72.0 / Agility 62.0 / Stamina 88.0 / Intelligence 73.0 / Special 77.0.
- **Duplicate-roster control:** `Anaconda` and `Green Anaconda` currently resolve to the *Eunectes murinus* complex. `Python` and `Reticulated Python` both resolve to *Malayopython reticulatus* and are intentionally held to identical canonical specimen/ratings until explicitly separated or merged.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Sailfish | 70.0 kg adult female *I. platypterus* | 52.0 | 38.0 | 89.0 | 79.0 | 53.0 | 82.0 |
| Salamander | 0.125 kg adult male *A. tigrinum* | 7.0 | 14.0 | 50.0 | 42.0 | 32.0 | 74.0 |
| Saltwater Crocodile | 500.0 kg adult male *C. porosus* | 92.0 | 83.0 | 52.0 | 46.0 | 58.0 | 80.0 |

## Checkpoints
`audits/CHECKPOINT-175.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. Next checkpoint: **200 completed research files**.

## Image pipeline status
184 research reports are complete, but **0 verified transparent PNG binaries are committed**. Current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.