# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 169 / 225
- **Verified full-body transparent PNGs committed:** 0 / 169
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Quoll, resolved to Spotted-tailed Quoll — *Dasyurus maculatus*
- **Next pending animal:** Raccoon
- **Latest completion:** 2026-09-23 06:00 America/Chicago
- **Latest new-animal image status:** Quoll - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. A wild exact-*Dasyurus maculatus* 5472x3648 CC BY-SA 3.0 photograph from Barren Grounds Nature Reserve has strong species/provenance/resolution, but source metadata does not explicitly establish adulthood or sex and strict complete tail/every-foot visibility was not certified. No PNG was created.
- **Latest legacy image audit:** Iguana / Green Iguana (*Iguana iguana*). A newly found 4320x2432 CC BY-SA 3.0 Commons source explicitly identifies a **large adult male**, resolving the age/sex/provenance weakness of the previous primary candidate. However, strict complete tail and every-foot framing could not be visually certified through the available inspection path, so status remains `SOURCE FOUND - FULL-BODY NOT VERIFIED` rather than complete.
- **Next legacy image audit:** Impala. Megalodon remains a structural extinct-photo blocker. Hellbender, Hornet, Ibex, Kudu, Lionfish, Gecko, Giraffe, Guanaco, Hercules Beetle, Pronghorn and Pufferfish are source-verified and awaiting binary cutout/commit tooling.
- **Latest checkpoint:** `audits/CHECKPOINT-150.md`; next checkpoint at 175 completed research files.

## Selection and image rules
Each run uses `DATA_PROGRESS.md` ordering but ignores its old checkmarks, choosing the first roster animal without a completed staging report. `IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Research completion and image completion are separate counts. A URL, JPEG, candidate PNG or uninspected cutout is not a completed image.

## Active normalization / uncertainty notes
- Ratings are absolute across all 225 animals, not pound-for-pound.
- Unsupported bite-pressure values remain 0.0. Force is never converted to PSI without defensible contact area.
- Maximum speed remains 0.0 where no defensible species-specific maximum exists. Speed is not Agility.
- Stamina separates sustained movement from burst speed and passive environmental tolerance.
- Special must not double-count ordinary size, toughness, cognition, flight or sociality.
- Group behavior can raise Tactics contextually but does not multiply one individual's Raw Power, Attack or Defense.
- **Quoll control:** Spotted-tailed quoll *Dasyurus maculatus*, southern *D. m. maculatus*, healthy prime adult male, 3.5 kg / 105.0 cm proposed representative total length / 0.0 m/s unresolved maximum / 4.0 y / 0.0 PSI unsupported. Attack 32.0 / Defense 22.0 / Agility 77.0 / Stamina 64.0 / Intelligence 55.0 / Special 60.0. Relatively high bite performance and rigid skull are peer-reviewed but remain constrained by 3.5 kg absolute scale. Arboreal anatomy drives Agility rather than inflating Attack.
- **Quokka control:** *Setonix brachyurus*, healthy prime adult male, 3.5 kg / 49.0 cm head-body / ~77.0 cm nose-to-tail / 0.0 m/s / 10.0 y / 0.0 PSI. Attack 18.0 / Defense 18.0 / Agility 73.0 / Stamina 56.0 / Intelligence 49.0 / Special 48.0.
- **Python control:** Reticulated python *Malayopython reticulatus*, healthy prime adult female, 50.0 kg / 500.0 cm / 0.0 m/s / 20.0 y / 0.0 PSI. Attack 72.0 / Defense 47.0 / Agility 52.0 / Stamina 52.0 / Intelligence 44.0 / Special 82.0.
- **Puffin control:** Atlantic Puffin *Fratercula arctica*, healthy prime adult male, 0.50 kg / 29.0 cm / 0.0 m/s / 30.0 y / 0.0 PSI. Attack 19.0 / Defense 21.0 / Agility 78.0 / Stamina 87.0 / Intelligence 59.0 / Special 76.0.
- **Pufferfish control:** White-spotted Puffer *Arothron hispidus*, healthy wild adult, 1.5 kg / 45.0 cm TL / 0.0 m/s / 15.0 y low-confidence / 0.0 PSI. Attack 23.0 / Defense 56.0 / Agility 72.0 / Stamina 44.0 / Intelligence 47.0 / Special 97.0.
- **Pronghorn control:** *Antilocapra americana*, adult male, 51.0 kg / 95.0 cm shoulder / 140.0 cm length / 24.6 m/s / 9.0 y / 0.0 PSI. Attack 47.0 / Defense 34.0 / Agility 94.0 / Stamina 96.0 / Intelligence 60.0 / Special 84.0.
- **Polar Bear control:** *Ursus maritimus*, mature male 500.0 kg. Attack 78.0 / Defense 72.0 / Agility 62.0 / Stamina 88.0 / Intelligence 73.0 / Special 77.0.
- **Black Bear comparison:** *Ursus americanus*, mature male 120.0 kg. Attack 56.0 / Defense 49.0 / Agility 70.0 / Stamina 66.0 / Intelligence 68.0 / Special 61.0.
- **Green Anaconda comparison:** *Eunectes murinus*, mature female 50.0 kg. Attack 70.0 / Defense 51.0 / Agility 46.0 / Stamina 49.0 / Intelligence 43.0 / Special 75.0.
- **Hedgehog comparison:** *Erinaceus europaeus*, mature male 1.0 kg. Attack 11.0 / Defense 43.0 / Agility 41.0 / Stamina 52.0 / Intelligence 38.0 / Special 69.0.
- **Duplicate-roster control:** `Anaconda` and `Green Anaconda` currently resolve to the *Eunectes murinus* complex. `Python` and `Reticulated Python` currently both resolve to *Malayopython reticulatus*. Duplicate pairs should remain normalized until explicitly separated or merged.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Python | 50.0 kg adult female *M. reticulatus* | 72.0 | 47.0 | 52.0 | 52.0 | 44.0 | 82.0 |
| Quokka | 3.5 kg adult male *S. brachyurus* | 18.0 | 18.0 | 73.0 | 56.0 | 49.0 | 48.0 |
| Quoll | 3.5 kg adult male *D. maculatus* | 32.0 | 22.0 | 77.0 | 64.0 | 55.0 | 60.0 |

## Checkpoints
`audits/CHECKPOINT-150.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **175 completed research files**.

## Image pipeline status
169 research reports are complete, but **0 verified transparent PNG binaries are committed**. Current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.