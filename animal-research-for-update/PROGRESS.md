# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 181 / 225
- **Verified full-body transparent PNGs committed:** 0 / 181
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Sable Antelope (*Hippotragus niger*)
- **Next pending animal:** Sailfish
- **Latest completion:** 2026-09-23 17:59 America/Chicago
- **Latest new-animal image status:** Sable Antelope - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. A 5184x3648 CC BY-SA 4.0 Featured/Quality/Valued exact-species photograph explicitly documents an adult male. Direct inspection shows brush/grass overlapping portions of the lower legs/feet and the tail is not cleanly isolated, so it does not pass the strict complete-body standard. No PNG is claimed.
- **Latest legacy image audit:** Leatherback Sea Turtle (*Dermochelys coriacea*). Broad replacement search found a 1784x1168 NOAA public-domain image explicitly documented as an adult, improving age and licensing provenance, but strict complete-body visibility could not be certified. It remains `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Next legacy image audit:** Leopard. Source-verified animals awaiting binary cutout/commit tooling remain separate from unresolved source-quality cases.
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
- **Sable Antelope control:** *Hippotragus niger*, healthy prime adult male, 235.0 kg / 140.0 cm shoulder / 230.0 cm head-body / 0.0 m/s unresolved maximum / 16.0 y / 0.0 PSI. Attack 62.0 / Defense 48.0 / Agility 72.0 / Stamina 69.0 / Intelligence 48.0 / Special 57.0. Peer-reviewed comparative horn length ~122 cm is used instead of upper-end 165 cm trophy/zoo figures; long horns raise weaponry/Attack but are not double-counted as passive armor.
- **Ring-tailed Lemur control:** *Lemur catta*, healthy prime adult male, 2.5 kg / 103.0 cm total length / unresolved standardized height / 0.0 m/s unresolved maximum / 16.0 y / 0.0 PSI. Attack 22.0 / Defense 20.0 / Agility 81.0 / Stamina 59.0 / Intelligence 74.0 / Special 65.0.
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
| Rhinoceros | 2300.0 kg adult male *C. s. simum* | 86.0 | 82.0 | 56.0 | 73.0 | 49.0 | 53.0 |
| Ring-tailed Lemur | 2.5 kg adult male *L. catta* | 22.0 | 20.0 | 81.0 | 59.0 | 74.0 | 65.0 |
| Sable Antelope | 235.0 kg adult male *H. niger* | 62.0 | 48.0 | 72.0 | 69.0 | 48.0 | 57.0 |

## Checkpoints
`audits/CHECKPOINT-175.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. Next checkpoint: **200 completed research files**.

## Image pipeline status
181 research reports are complete, but **0 verified transparent PNG binaries are committed**. Current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.