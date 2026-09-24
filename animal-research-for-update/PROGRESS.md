# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 187 / 225
- **Verified full-body transparent PNGs committed:** 0 / 187
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Sea Otter (*Enhydra lutris*)
- **Next pending animal:** Seal
- **Latest completion:** 2026-09-24 00:00 America/Chicago
- **Latest new-animal image status:** Sea Otter - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Public-domain 1800×1200 USFWS exact-species source was visually inspected; overall body and tail are visible, but the resting pose does not cleanly expose every limb/foot and metadata does not explicitly establish adulthood/sex. No PNG is claimed.
- **Latest legacy image audit:** Mandrill (*Mandrillus sphinx*). Reusable exact adult-male candidates were found, including a 1586×1198 CC BY 2.0 file and a 3799×2848 CC BY-SA alpha-male file, but direct inspection shows obscured/cropped limbs in the former and a head/shoulder portrait in the latter. Status `REPLACEMENT SOURCE NEEDED`.
- **Next legacy image audit:** Narwhal. Source-verified animals awaiting binary cutout/commit tooling remain separate from unresolved source-quality cases.
- **Latest checkpoint:** `audits/CHECKPOINT-175.md`; next checkpoint at 200 completed research files.

## Selection and image rules
Each run uses `DATA_PROGRESS.md` ordering but ignores old checkmarks, choosing the first roster animal without a completed staging report. `IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Research completion and image completion are separate counts. A URL, JPEG, candidate PNG or uninspected cutout is not a completed image.

## Active normalization / uncertainty notes
- Ratings are absolute across all 225 animals, not pound-for-pound.
- Unsupported bite-pressure values remain 0.0. Force is never converted to PSI without defensible contact area.
- Maximum speed remains 0.0 where no defensible species-specific maximum exists. Institutional maxima are labeled with their evidence limits. Speed is not Agility.
- Stamina separates sustained movement from burst speed, fasting tolerance, passive environmental tolerance and current-assisted displacement.
- Special must not double-count ordinary size, toughness, cognition, flight or sociality.
- Group behavior can raise Tactics contextually but does not multiply one individual's Raw Power, Attack or Defense.
- Generic roster labels must be resolved to an explicit taxon before physical fields and image requirements can be scientifically coherent.
- **Sea Otter control:** *Enhydra lutris*, healthy prime adult male, 36.0 kg / 130.0 cm total length / 2.5 m/s institutional underwater maximum / 18.0 y / 0.0 PSI unresolved. Attack 40.0 / Defense 37.0 / Agility 86.0 / Stamina 79.0 / Intelligence 87.0 / Special 89.0. USGS telemetry supports multi-hour daily foraging; 2024 *Science* research directly supports fitness-relevant tool use. Canonical size is species-level and deliberately above southern-male average but below northern-male maximum.
- **Sea Lion control:** *Zalophus californianus*, healthy prime adult male, 300.0 kg / 240.0 cm nose-to-tail / unresolved standardized height / 11.2 m/s institutional swim maximum / 25.0 y canonical lifespan / 0.0 PSI unresolved. Attack 55.0 / Defense 49.0 / Agility 84.0 / Stamina 84.0 / Intelligence 78.0 / Special 72.0.
- **Sawfish control:** generic `Pristidae` resolved to largetooth sawfish *Pristis pristis*, healthy large mature adult female, 300.0 kg / 500.0 cm total length / 36.0 y / 0.0 PSI unresolved. Attack 76.0 / Defense 58.0 / Agility 61.0 / Stamina 68.0 / Intelligence 48.0 / Special 88.0.
- **Saltwater Crocodile control:** *Crocodylus porosus*, healthy prime adult male, 500.0 kg / 500.0 cm total length / 70.0 y / 0.0 PSI unresolved; direct 16,414 N bite force retained as N. Attack 92.0 / Defense 83.0 / Agility 52.0 / Stamina 46.0 / Intelligence 58.0 / Special 80.0.
- **Salamander control:** generic `Caudata` resolved to Eastern Tiger Salamander *Ambystoma tigrinum*, healthy post-metamorphic adult male, 0.125 kg / 25.0 cm total length / 16.0 y / 0.0 PSI unresolved. Attack 7.0 / Defense 14.0 / Agility 50.0 / Stamina 42.0 / Intelligence 32.0 / Special 74.0.
- **Sailfish control:** *Istiophorus platypterus*, healthy prime adult female, 70.0 kg / 270.0 cm total length / 8.3 m/s theoretical muscle-based maximum / 13.0 y / 0.0 PSI. Attack 52.0 / Defense 38.0 / Agility 89.0 / Stamina 79.0 / Intelligence 53.0 / Special 82.0.
- **Sable Antelope control:** *Hippotragus niger*, healthy prime adult male, 235.0 kg / 140.0 cm shoulder / 230.0 cm head-body. Attack 62.0 / Defense 48.0 / Agility 72.0 / Stamina 69.0 / Intelligence 48.0 / Special 57.0.
- **Ring-tailed Lemur control:** *Lemur catta*, healthy prime adult male, 2.5 kg. Attack 22.0 / Defense 20.0 / Agility 81.0 / Stamina 59.0 / Intelligence 74.0 / Special 65.0.
- **Rhinoceros control:** southern white rhinoceros *Ceratotherium simum simum*, mature male 2300.0 kg. Attack 86.0 / Defense 82.0 / Agility 56.0 / Stamina 73.0 / Intelligence 49.0 / Special 53.0.
- **Duplicate-roster control:** `Anaconda` and `Green Anaconda` currently resolve to the *Eunectes murinus* complex. `Python` and `Reticulated Python` both resolve to *Malayopython reticulatus* and are intentionally held to identical canonical specimen/ratings until explicitly separated or merged.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Sawfish | 300.0 kg adult female *P. pristis* | 76.0 | 58.0 | 61.0 | 68.0 | 48.0 | 88.0 |
| Sea Lion | 300.0 kg adult male *Z. californianus* | 55.0 | 49.0 | 84.0 | 84.0 | 78.0 | 72.0 |
| Sea Otter | 36.0 kg adult male *E. lutris* | 40.0 | 37.0 | 86.0 | 79.0 | 87.0 | 89.0 |

## Checkpoints
`audits/CHECKPOINT-175.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. Next checkpoint: **200 completed research files**.

## Image pipeline status
187 research reports are complete, but **0 verified transparent PNG binaries are committed**. Current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.