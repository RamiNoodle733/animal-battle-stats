# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 156 / 225
- **Verified full-body transparent PNGs committed:** 0 / 156
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Peregrine Falcon (*Falco peregrinus*)
- **Next pending animal:** Piranha
- **Latest completion:** 2026-09-22 17:05 America/Chicago
- **Latest new-animal image status:** Peregrine Falcon - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Exact-species 1795x2111 USFWS photograph explicitly verifies female sex and reusable provenance, but adulthood and strict complete foot/toe/tail visibility were not simultaneously certified. No PNG was claimed.
- **Latest legacy image audit:** Great White Shark (*Carcharodon carcharias*) - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Broad Commons/photographer review found multiple 3000-5000+ px reusable exact-species photographs and an explicitly adult male photographer source, but no candidate simultaneously established healthy adulthood, preferred fighting sex, complete all-fin/head-tail silhouette and redistribution permission. Existing 3264x2448 public-domain Sharkdiver source remains the primary reusable candidate without false promotion.
- **Next legacy image audit:** Green Anaconda. Megalodon remains a structural extinct-photo blocker. Hellbender, Hornet, Ibex, Kudu, Lionfish, Gecko and Giraffe remain source-verified and awaiting binary cutout/commit tooling.
- **Latest checkpoint:** `audits/CHECKPOINT-150.md`; next checkpoint at 175 completed research files.

## Selection and image rules
Each run uses `DATA_PROGRESS.md` ordering but ignores its old checkmarks, choosing the first roster animal without a completed staging report. `IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Research completion and image completion are separate counts. A URL, JPEG, candidate PNG or uninspected cutout is not a completed image.

## Active normalization / uncertainty notes
- Ratings are absolute across all 225 animals, not pound-for-pound.
- Unsupported bite-pressure values remain 0.0. Force is never converted to PSI without defensible contact area.
- Maximum speed remains 0.0 where no defensible species-specific maximum exists. Speed is not Agility.
- Stamina separates sustained movement from burst speed.
- Special must not double-count ordinary size, toughness, cognition, flight or sociality.
- Group behavior can raise Tactics contextually but does not multiply one individual's Raw Power, Attack or Defense.
- **Peregrine Falcon control:** *Falco peregrinus*, healthy prime mature female, 1.0 kg / 47.0 cm body length / 51.0 m/s natural stoop / 13.0 y / 0.0 PSI unresolved. Attack 34.0 / Defense 18.0 / Agility 96.0 / Stamina 78.0 / Intelligence 70.0 / Special 93.0. Stoop speed is movement-mode specific and is not allowed to inflate raw power, defense or sustained output.
- **Pelican control:** American White Pelican *Pelecanus erythrorhynchos*, healthy prime mature male, 6.9 kg / 155.0 cm total length / 0.0 m/s unsupported maximum / 14.0 y / 0.0 PSI unresolved. Attack 28.0 / Defense 22.0 / Agility 72.0 / Stamina 84.0 / Intelligence 64.0 / Special 73.0. Large wingspan is treated as mobility/endurance, not raw power; cooperative fishing raises tactics but does not multiply individual attack.
- **Peacock control:** Indian Peafowl *Pavo cristatus*, healthy prime mature breeding male, 5.0 kg / 220.0 cm including train / 0.0 m/s unsupported maximum / 18.0 y / 0.0 PSI unresolved. Attack 29.0 / Defense 19.0 / Agility 70.0 / Stamina 58.0 / Intelligence 64.0 / Special 62.0. The 2.2 m visual silhouette is mostly ornament and is not allowed to inflate absolute power.
- **Pangolin control:** Sunda pangolin *Manis javanica*, healthy prime mature male, 7.0 kg / 110.0 cm total length / 0.0 m/s unsupported maximum / 0.0 y unresolved species-specific lifespan / 0.0 PSI (edentulous). Attack 28.0 / Defense 66.0 / Agility 59.0 / Stamina 50.0 / Intelligence 54.0 / Special 88.0.
- **Otter control:** *Lontra canadensis*, mature male 12.0 kg. Attack 35.0 / Defense 29.0 / Agility 91.0 / Stamina 76.0 / Intelligence 78.0 / Special 77.0.
- **Ostrich control:** *Struthio camelus*, mature male 130.0 kg. Attack 58.0 / Defense 37.0 / Agility 83.0 / Stamina 89.0 / Intelligence 52.0 / Special 64.0.
- **Osprey control:** *Pandion haliaetus*, mature female 1.8 kg. Attack 31.0 / Defense 17.0 / Agility 87.0 / Stamina 82.0 / Intelligence 65.0 / Special 83.0.
- **Oryx control:** *Oryx gazella*, mature male 230.0 kg. Attack 60.0 / Defense 49.0 / Agility 66.0 / Stamina 82.0 / Intelligence 61.0 / Special 81.0.
- **Orca control:** *Orcinus orca*, mature male 5000.0 kg. Attack 94.0 / Defense 78.0 / Agility 84.0 / Stamina 88.0 / Intelligence 99.0 / Special 94.0.
- **Golden Eagle comparison:** *Aquila chrysaetos*, mature female 5.0 kg. Attack 40.0 / Defense 21.0 / Agility 88.0 / Stamina 79.0 / Intelligence 66.0 / Special 70.0.
- **Duplicate-roster control:** `Anaconda` and `Green Anaconda` currently resolve to the *Eunectes murinus* complex and should remain normalized until explicitly separated or merged.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Peacock | 5.0 kg mature male *P. cristatus* | 29.0 | 19.0 | 70.0 | 58.0 | 64.0 | 62.0 |
| Pelican | 6.9 kg mature male *P. erythrorhynchos* | 28.0 | 22.0 | 72.0 | 84.0 | 64.0 | 73.0 |
| Peregrine Falcon | 1.0 kg mature female *F. peregrinus* | 34.0 | 18.0 | 96.0 | 78.0 | 70.0 | 93.0 |

## Checkpoints
`audits/CHECKPOINT-150.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **175 completed research files**.

## Image pipeline status
156 research reports are complete, but **0 verified transparent PNG binaries are committed**. Current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.