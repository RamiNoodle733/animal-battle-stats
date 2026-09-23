# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 168 / 225
- **Verified full-body transparent PNGs committed:** 0 / 168
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Quokka — *Setonix brachyurus*
- **Next pending animal:** Quoll
- **Latest completion:** 2026-09-23 05:00 America/Chicago
- **Latest new-animal image status:** Quokka - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. A reusable 3959x2969 CC BY 2.0 exact-*Setonix brachyurus* Rottnest photograph has strong provenance and resolution, but source metadata does not explicitly establish adulthood or sex and the available inspection path did not certify the complete tail plus every foot/appendage. No PNG was created.
- **Latest legacy image audit:** Hyena, resolved to Spotted Hyena (*Crocuta crocuta*). A 3106x2397 CC BY-SA 2.0 source explicitly identifies a female and has reusable provenance, materially improving sex/provenance over the old candidate. However, the source does not explicitly establish adulthood and strict complete tail/all-foot framing could not be certified, so status remains `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Next legacy image audit:** Iguana. Megalodon remains a structural extinct-photo blocker. Hellbender, Hornet, Ibex, Kudu, Lionfish, Gecko, Giraffe, Guanaco, Hercules Beetle, Pronghorn and Pufferfish are source-verified and awaiting binary cutout/commit tooling.
- **Latest checkpoint:** `audits/CHECKPOINT-150.md`; next checkpoint at 175 completed research files.

## Selection and image rules
Each run uses `DATA_PROGRESS.md` ordering but ignores its old checkmarks, choosing the first roster animal without a completed staging report. `IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Research completion and image completion are separate counts. A URL, JPEG, candidate PNG or uninspected cutout is not a completed image.

## Active normalization / uncertainty notes
- Ratings are absolute across all 225 animals, not pound-for-pound.
- Unsupported bite-pressure values remain 0.0. Force is never converted to PSI without defensible contact area.
- Maximum speed remains 0.0 where no defensible species-specific maximum exists. Speed is not Agility.
- Stamina separates sustained movement from burst speed and from passive environmental tolerance.
- Special must not double-count ordinary size, toughness, cognition, flight or sociality.
- Group behavior can raise Tactics contextually but does not multiply one individual's Raw Power, Attack or Defense.
- **Quokka control:** *Setonix brachyurus*, healthy prime adult male, 3.5 kg / 49.0 cm head-body / ~77.0 cm nose-to-tail / 0.0 m/s unresolved maximum / 10.0 y / 0.0 PSI unsupported. Attack 18.0 / Defense 18.0 / Agility 73.0 / Stamina 56.0 / Intelligence 49.0 / Special 48.0. Male-biased size and size-correlated male hierarchy justify the canonical sex. Hopping, climbing and thicket-runway use raise Agility without pound-for-pound power leakage. Water economy raises Stamina/Special only modestly because drought persistence is not continuous high-output exercise.
- **Python control:** Reticulated python *Malayopython reticulatus*, healthy prime adult female, 50.0 kg / 500.0 cm total length / 0.0 m/s unresolved maximum / 20.0 y managed-care representative / 0.0 PSI unsupported. Attack 72.0 / Defense 47.0 / Agility 52.0 / Stamina 52.0 / Intelligence 44.0 / Special 82.0. Direct species-specific constriction experiments support diameter-scaled pressure, while neuroanatomy/physiology strongly supports infrared pit targeting. The later `Reticulated Python` roster entry is a duplicate under current live taxonomy and must not drift independently without explicit taxon reassignment.
- **Puffin control:** Atlantic Puffin *Fratercula arctica*, healthy prime adult male, 0.50 kg / 29.0 cm body length / 0.0 m/s unresolved top speed / 30.0 y / 0.0 PSI unsupported. Attack 19.0 / Defense 21.0 / Agility 78.0 / Stamina 87.0 / Intelligence 59.0 / Special 76.0.
- **Pufferfish control:** White-spotted Puffer *Arothron hispidus*, healthy wild adult, sex unknown, 1.5 kg / 45.0 cm TL / 0.0 m/s unsupported maximum / 15.0 y low-confidence captive-derived lifespan / 0.0 PSI unsupported. Attack 23.0 / Defense 56.0 / Agility 72.0 / Stamina 44.0 / Intelligence 47.0 / Special 97.0.
- **Pronghorn control:** *Antilocapra americana*, healthy prime adult male, 51.0 kg / 95.0 cm shoulder / 140.0 cm length / 24.6 m/s sourced maximum / 9.0 y / 0.0 PSI unsupported. Attack 47.0 / Defense 34.0 / Agility 94.0 / Stamina 96.0 / Intelligence 60.0 / Special 84.0.
- **Proboscis Monkey control:** *Nasalis larvatus*, healthy prime adult male, 21.2 kg / 75.5 cm head-body dimension / 142.0 cm proposed total length / 0.0 m/s unsupported maximum / 20.0 y moderate-low confidence / 0.0 PSI unsupported. Attack 34.0 / Defense 31.0 / Agility 85.0 / Stamina 69.0 / Intelligence 74.0 / Special 84.0.
- **Praying Mantis control:** Chinese mantis *Tenodera sinensis*, healthy prime adult female, 0.006 kg / 10.0 cm body length / 0.0 m/s unsupported maximum / 0.4 y adult lifespan / 0.0 PSI unsupported. Attack 12.0 / Defense 9.0 / Agility 80.0 / Stamina 43.0 / Intelligence 48.0 / Special 84.0.
- **Porcupine control:** North American porcupine *Erethizon dorsatum*, healthy prime mature male, 10.5 kg / 80.0 cm total length / 0.0 m/s unsupported maximum / 15.0 y / 0.0 PSI unsupported. Attack 35.0 / Defense 67.0 / Agility 48.0 / Stamina 64.0 / Intelligence 51.0 / Special 92.0.
- **Polar Bear control:** *Ursus maritimus*, healthy prime mature male, 500.0 kg / 140.0 cm shoulder / 260.0 cm total length / 8.9 m/s conservative short sprint / 18.0 y / 0.0 PSI unsupported. Attack 78.0 / Defense 72.0 / Agility 62.0 / Stamina 88.0 / Intelligence 73.0 / Special 77.0.
- **Poison Dart Frog control:** Golden Poison Frog *Phyllobates terribilis*, healthy prime wild adult female, 0.006 kg / 5.2 cm SVL / 0.0 m/s unsupported maximum / 10.0 y / 0.0 PSI. Attack 6.0 / Defense 43.0 / Agility 76.0 / Stamina 44.0 / Intelligence 36.0 / Special 99.0.
- **Platypus control:** *Ornithorhynchus anatinus*, healthy prime mature male, 1.7 kg / 50.0 cm total length / 0.0 m/s unsupported maximum / 12.5 y / 0.0 PSI. Attack 31.0 / Defense 22.0 / Agility 80.0 / Stamina 73.0 / Intelligence 61.0 / Special 94.0.
- **Piranha control:** Red-bellied piranha *Pygocentrus nattereri*, healthy prime sexually mature adult, 1.2 kg / 30.0 cm total length / 0.0 m/s unsupported maximum / 10.0 y / 0.0 PSI unresolved. Attack 37.0 / Defense 20.0 / Agility 82.0 / Stamina 55.0 / Intelligence 59.0 / Special 67.0.
- **Peregrine Falcon control:** *Falco peregrinus*, mature female 1.0 kg. Attack 34.0 / Defense 18.0 / Agility 96.0 / Stamina 78.0 / Intelligence 70.0 / Special 93.0.
- **Pelican control:** American White Pelican *Pelecanus erythrorhynchos*, mature male 6.9 kg. Attack 28.0 / Defense 22.0 / Agility 72.0 / Stamina 84.0 / Intelligence 64.0 / Special 73.0.
- **Black Bear comparison:** *Ursus americanus*, mature male 120.0 kg. Attack 56.0 / Defense 49.0 / Agility 70.0 / Stamina 66.0 / Intelligence 68.0 / Special 61.0.
- **Green Anaconda comparison:** *Eunectes murinus*, mature female 50.0 kg. Attack 70.0 / Defense 51.0 / Agility 46.0 / Stamina 49.0 / Intelligence 43.0 / Special 75.0.
- **Hedgehog comparison:** *Erinaceus europaeus*, mature male 1.0 kg. Attack 11.0 / Defense 43.0 / Agility 41.0 / Stamina 52.0 / Intelligence 38.0 / Special 69.0.
- **Duplicate-roster control:** `Anaconda` and `Green Anaconda` currently resolve to the *Eunectes murinus* complex. `Python` and `Reticulated Python` currently both resolve to *Malayopython reticulatus*. Duplicate pairs should remain normalized until explicitly separated or merged.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Puffin | 0.50 kg adult male *F. arctica* | 19.0 | 21.0 | 78.0 | 87.0 | 59.0 | 76.0 |
| Python | 50.0 kg adult female *M. reticulatus* | 72.0 | 47.0 | 52.0 | 52.0 | 44.0 | 82.0 |
| Quokka | 3.5 kg adult male *S. brachyurus* | 18.0 | 18.0 | 73.0 | 56.0 | 49.0 | 48.0 |

## Checkpoints
`audits/CHECKPOINT-150.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **175 completed research files**.

## Image pipeline status
168 research reports are complete, but **0 verified transparent PNG binaries are committed**. Current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.
