# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 188 / 225
- **Verified full-body transparent PNGs committed:** 0 / 188
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Seal / Harbor Seal (*Phoca vitulina*)
- **Next pending animal:** Secretary Bird
- **Latest completion:** 2026-09-24 01:00 America/Chicago
- **Latest new-animal image status:** Seal - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Public-domain 2100×1368 USFWS exact-*P. vitulina richardii* source was opened at original resolution; head/trunk/hind-flipper end are visible, but foreflippers are not cleanly exposed and metadata does not explicitly establish adulthood/sex. ADW has explicit adult CC-licensed sources, but strict complete-body framing was not improved enough to promote. No PNG is claimed.
- **Latest legacy image audit:** Narwhal (*Monodon monoceros*). American Society of Mammalogists source #5742 explicitly identifies a wild adult male and gives excellent taxonomic/sex provenance, but the page does not provide redistribution licensing and strict tusk-to-fluke complete-body framing was not established from the available page presentation. Status `LICENSE UNVERIFIED - DO NOT COMMIT`.
- **Next legacy image audit:** Nautilus. Source-verified animals awaiting binary cutout/commit tooling remain separate from unresolved source-quality cases.
- **Latest checkpoint:** `audits/CHECKPOINT-175.md`; next checkpoint at 200 completed research files.

## Selection and image rules
Each run uses `DATA_PROGRESS.md` ordering but ignores old checkmarks, choosing the first roster animal without a completed staging report. `IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Research completion and image completion are separate counts. A URL, JPEG, candidate PNG or uninspected cutout is not a completed image.

## Active normalization / uncertainty notes
- Ratings are absolute across all 225 animals, not pound-for-pound.
- Unsupported bite-pressure values remain 0.0. Force or oral suction pressure is never converted to PSI without defensible contact area.
- Maximum speed remains 0.0 where no defensible species-specific maximum exists. Experimental velocity ranges are not silently promoted to top speed. Speed is not Agility.
- Stamina separates sustained movement and repeated diving from burst speed, fasting tolerance, passive environmental tolerance and current-assisted displacement.
- Special must not double-count ordinary size, toughness, cognition, flight or sociality.
- Group behavior can raise Tactics contextually but does not multiply one individual's Raw Power, Attack or Defense.
- Generic roster labels must be resolved to an explicit taxon before physical fields and image requirements can be scientifically coherent.
- **Seal control:** *Phoca vitulina*, healthy prime adult male, 105.0 kg / 175.0 cm total length / unresolved standardized top speed / 27.0 y / 0.0 PSI unresolved. Attack 44.0 / Defense 48.0 / Agility 82.0 / Stamina 82.0 / Intelligence 74.0 / Special 84.0. Telemetry supports repeated deep/long diving; controlled experiments support hydrodynamic trail-direction detection up to 35 s after wake generation. Canonical size is representative and not a record animal.
- **Sea Otter control:** *Enhydra lutris*, healthy prime adult male, 36.0 kg / 130.0 cm total length / 2.5 m/s institutional underwater maximum / 18.0 y / 0.0 PSI unresolved. Attack 40.0 / Defense 37.0 / Agility 86.0 / Stamina 79.0 / Intelligence 87.0 / Special 89.0.
- **Sea Lion control:** *Zalophus californianus*, healthy prime adult male, 300.0 kg / 240.0 cm nose-to-tail / 11.2 m/s institutional swim maximum / 25.0 y / 0.0 PSI unresolved. Attack 55.0 / Defense 49.0 / Agility 84.0 / Stamina 84.0 / Intelligence 78.0 / Special 72.0.
- **Sawfish control:** generic `Pristidae` resolved to largetooth sawfish *Pristis pristis*, healthy large mature adult female, 300.0 kg / 500.0 cm total length / 36.0 y / 0.0 PSI unresolved. Attack 76.0 / Defense 58.0 / Agility 61.0 / Stamina 68.0 / Intelligence 48.0 / Special 88.0.
- **Saltwater Crocodile control:** *Crocodylus porosus*, healthy prime adult male, 500.0 kg / 500.0 cm total length / 70.0 y / 0.0 PSI unresolved; direct 16,414 N bite force retained as N. Attack 92.0 / Defense 83.0 / Agility 52.0 / Stamina 46.0 / Intelligence 58.0 / Special 80.0.
- **Duplicate-roster control:** `Anaconda` and `Green Anaconda` currently resolve to the *Eunectes murinus* complex. `Python` and `Reticulated Python` both resolve to *Malayopython reticulatus* and are intentionally held to identical canonical specimen/ratings until explicitly separated or merged.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Sea Lion | 300.0 kg adult male *Z. californianus* | 55.0 | 49.0 | 84.0 | 84.0 | 78.0 | 72.0 |
| Sea Otter | 36.0 kg adult male *E. lutris* | 40.0 | 37.0 | 86.0 | 79.0 | 87.0 | 89.0 |
| Seal | 105.0 kg adult male *P. vitulina* | 44.0 | 48.0 | 82.0 | 82.0 | 74.0 | 84.0 |

## Checkpoints
`audits/CHECKPOINT-175.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. Next checkpoint: **200 completed research files**.

## Image pipeline status
188 research reports are complete, but **0 verified transparent PNG binaries are committed**. Current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.