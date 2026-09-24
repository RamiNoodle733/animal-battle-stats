# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 193 / 225
- **Verified full-body transparent PNGs committed:** 0 / 193
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Striped Skunk (*Mephitis mephitis*)
- **Next pending animal:** Sloth
- **Latest completion:** 2026-09-24 06:00 America/Chicago
- **Latest new-animal image status:** Skunk - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. A 4288×2848 CC BY 2.0 exact-species photograph was visually inspected at original resolution. Head, torso and tail are complete, but snow overlaps distal feet and metadata does not explicitly establish adulthood or sex. No PNG is claimed.
- **Latest legacy image audit:** Osprey (*Pandion haliaetus*). A 1139×1627 CC BY 4.0 source explicitly identifies a 4-year-old male, but the perched pose and branches obscure required feet/tail silhouette. Status `REPLACEMENT SOURCE NEEDED`.
- **Next legacy image audit:** Ostrich. Source-verified animals awaiting binary cutout/commit tooling remain separate from unresolved source-quality cases.
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
- **Skunk control:** *Mephitis mephitis*, healthy prime adult male, 4.5 kg / 70.0 cm total length / unresolved standardized height and top speed / 3.0 y / 0.0 PSI unresolved. Institutional sources place directional musk range around 3.0-3.7 m and document ocular pain/temporary blindness. Attack 23.0 / Defense 34.0 / Agility 53.0 / Stamina 57.0 / Intelligence 58.0 / Special 93.0.
- **Siberian Tiger control:** Amur population of *Panthera tigris*, traditionally *P. t. altaica*; healthy prime adult male, 190.0 kg / 105.0 cm shoulder / 290.0 cm total length / provisional 16.7 m/s institutional sprint estimate / 14.0 y / 0.0 PSI unresolved. Hartstone-Rose et al. modeled *P. tigris* canine force at 703.74 kgf (~6.90 kN), retained only as modeled force. Attack 84.0 / Defense 61.0 / Agility 84.0 / Stamina 62.0 / Intelligence 66.0 / Special 61.0. Taxonomic subspecies treatment remains under review by IUCN CatSG.
- **Shoebill control:** *Balaeniceps rex*, healthy prime adult male, 5.4 kg / 130.0 cm standing height / unresolved standardized top speed / 35.0 y / 0.0 PSI unresolved. Bill about 30.5 cm long × 12.7 cm wide. Attack 34.0 / Defense 21.0 / Agility 62.0 / Stamina 56.0 / Intelligence 55.0 / Special 67.0.
- **Serval control:** *Leptailurus serval*, healthy prime adult male, 14.0 kg / 60.0 cm shoulder / 90.0 cm head-body / unresolved standardized top speed / 10.0 y / 0.0 PSI unresolved. Hartstone-Rose et al. anatomically modeled canine bite force at 68.05 kgf (~667 N), retained only as modeled force. Attack 41.0 / Defense 24.0 / Agility 92.0 / Stamina 51.0 / Intelligence 61.0 / Special 70.0.
- **Secretary Bird control:** *Sagittarius serpentarius*, healthy prime adult male, 4.0 kg / 130.0 cm standing height / 130.0 cm bill-to-tail / unresolved standardized top speed / 15.0 y / 0.0 PSI unresolved. Direct strike study measured about 195 N peak foot-strike force with ~15 ms contact in one trained male. Attack 36.0 / Defense 27.0 / Agility 83.0 / Stamina 84.0 / Intelligence 61.0 / Special 88.0.
- **Seal control:** *Phoca vitulina*, healthy prime adult male, 105.0 kg / 175.0 cm total length / unresolved standardized top speed / 27.0 y / 0.0 PSI unresolved. Attack 44.0 / Defense 48.0 / Agility 82.0 / Stamina 82.0 / Intelligence 74.0 / Special 84.0.
- **Sea Otter control:** *Enhydra lutris*, healthy prime adult male, 36.0 kg / 130.0 cm total length / 2.5 m/s institutional underwater maximum / 18.0 y / 0.0 PSI unresolved. Attack 40.0 / Defense 37.0 / Agility 86.0 / Stamina 79.0 / Intelligence 87.0 / Special 89.0.
- **Sea Lion control:** *Zalophus californianus*, healthy prime adult male, 300.0 kg / 240.0 cm nose-to-tail / 11.2 m/s institutional swim maximum / 25.0 y / 0.0 PSI unresolved. Attack 55.0 / Defense 49.0 / Agility 84.0 / Stamina 84.0 / Intelligence 78.0 / Special 72.0.
- **Sawfish control:** generic `Pristidae` resolved to largetooth sawfish *Pristis pristis*, healthy large mature adult female, 300.0 kg / 500.0 cm total length / 36.0 y / 0.0 PSI unresolved. Attack 76.0 / Defense 58.0 / Agility 61.0 / Stamina 68.0 / Intelligence 48.0 / Special 88.0.
- **Saltwater Crocodile control:** *Crocodylus porosus*, healthy prime adult male, 500.0 kg / 500.0 cm total length / 70.0 y / 0.0 PSI unresolved; direct 16,414 N bite force retained as N. Attack 92.0 / Defense 83.0 / Agility 52.0 / Stamina 46.0 / Intelligence 58.0 / Special 80.0.
- **Duplicate-roster control:** `Anaconda` and `Green Anaconda` currently resolve to the *Eunectes murinus* complex. `Python` and `Reticulated Python` both resolve to *Malayopython reticulatus* and are intentionally held to identical canonical specimen/ratings until explicitly separated or merged.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Serval | 14.0 kg adult male *L. serval* | 41.0 | 24.0 | 92.0 | 51.0 | 61.0 | 70.0 |
| Shoebill | 5.4 kg adult male *B. rex* | 34.0 | 21.0 | 62.0 | 56.0 | 55.0 | 67.0 |
| Siberian Tiger | 190.0 kg adult male Amur *P. tigris* | 84.0 | 61.0 | 84.0 | 62.0 | 66.0 | 61.0 |
| Skunk | 4.5 kg adult male *M. mephitis* | 23.0 | 34.0 | 53.0 | 57.0 | 58.0 | 93.0 |

## Checkpoints
`audits/CHECKPOINT-175.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. Next checkpoint: **200 completed research files**.

## Image pipeline status
193 research reports are complete, but **0 verified transparent PNG binaries are committed**. Current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.
