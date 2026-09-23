# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 163 / 225
- **Verified full-body transparent PNGs committed:** 0 / 163
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Proboscis Monkey (*Nasalis larvatus*)
- **Next pending animal:** Pronghorn
- **Latest completion:** 2026-09-23 00:00 America/Chicago
- **Latest new-animal image status:** Proboscis Monkey - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. A 3600x2700 CC BY-SA 2.0 Commons/Flickr photograph explicitly identifies a male *N. larvatus*. Exact taxon, sex, resolution, real-photo provenance and reuse license are established, but strict complete-body visibility and adulthood were not established strongly enough to certify the mandatory standard. No PNG is claimed.
- **Latest legacy image audit:** Hippopotamus (*Hippopotamus amphibius*) - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. A 5472x3648 CC BY-SA 2.0 Commons/Flickr photograph explicitly identifies a male and provides the original-photo URL. It is a strong high-resolution reusable candidate, but source metadata does not explicitly establish adulthood and strict complete tail/all-feet visibility could not be certified, so it is not promoted to cutout-ready status.
- **Next legacy image audit:** Honey Badger. Megalodon remains a structural extinct-photo blocker. Hellbender, Hornet, Ibex, Kudu, Lionfish, Gecko, Giraffe, Guanaco and Hercules Beetle are source-verified and awaiting binary cutout/commit tooling.
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
- **Proboscis Monkey control:** *Nasalis larvatus*, healthy prime adult male, 21.2 kg / 75.5 cm head-body dimension / 142.0 cm proposed total length / 0.0 m/s unsupported maximum / 20.0 y moderate-low confidence / 0.0 PSI unsupported. Attack 34.0 / Defense 31.0 / Agility 85.0 / Stamina 69.0 / Intelligence 74.0 / Special 84.0. Low observed aggression constrains Attack/Ferocity; arboreal plus aquatic mobility raises Agility/Special without proportional-strength leakage.
- **Praying Mantis control:** Chinese mantis *Tenodera sinensis*, healthy prime adult female, 0.006 kg / 10.0 cm body length / 0.0 m/s unsupported maximum / 0.4 y adult lifespan / 0.0 PSI unsupported. Attack 12.0 / Defense 9.0 / Agility 80.0 / Stamina 43.0 / Intelligence 48.0 / Special 84.0.
- **Porcupine control:** North American porcupine *Erethizon dorsatum*, healthy prime mature male, 10.5 kg / 80.0 cm total length / 0.0 m/s unsupported maximum / 15.0 y / 0.0 PSI unsupported. Attack 35.0 / Defense 67.0 / Agility 48.0 / Stamina 64.0 / Intelligence 51.0 / Special 92.0.
- **Polar Bear control:** *Ursus maritimus*, healthy prime mature male, 500.0 kg / 140.0 cm shoulder / 260.0 cm total length / 8.9 m/s conservative short sprint / 18.0 y / 0.0 PSI unsupported. Attack 78.0 / Defense 72.0 / Agility 62.0 / Stamina 88.0 / Intelligence 73.0 / Special 77.0.
- **Poison Dart Frog control:** Golden Poison Frog *Phyllobates terribilis*, healthy prime wild adult female, 0.006 kg / 5.2 cm SVL / 0.0 m/s unsupported maximum / 10.0 y / 0.0 PSI. Attack 6.0 / Defense 43.0 / Agility 76.0 / Stamina 44.0 / Intelligence 36.0 / Special 99.0.
- **Platypus control:** *Ornithorhynchus anatinus*, healthy prime mature male, 1.7 kg / 50.0 cm total length / 0.0 m/s unsupported maximum / 12.5 y / 0.0 PSI. Attack 31.0 / Defense 22.0 / Agility 80.0 / Stamina 73.0 / Intelligence 61.0 / Special 94.0.
- **Piranha control:** Red-bellied piranha *Pygocentrus nattereri*, healthy prime sexually mature adult, 1.2 kg / 30.0 cm total length / 0.0 m/s unsupported maximum / 10.0 y / 0.0 PSI unresolved. Attack 37.0 / Defense 20.0 / Agility 82.0 / Stamina 55.0 / Intelligence 59.0 / Special 67.0.
- **Peregrine Falcon control:** *Falco peregrinus*, mature female 1.0 kg. Attack 34.0 / Defense 18.0 / Agility 96.0 / Stamina 78.0 / Intelligence 70.0 / Special 93.0.
- **Pelican control:** American White Pelican *Pelecanus erythrorhynchos*, mature male 6.9 kg. Attack 28.0 / Defense 22.0 / Agility 72.0 / Stamina 84.0 / Intelligence 64.0 / Special 73.0.
- **Peacock control:** Indian Peafowl *Pavo cristatus*, mature breeding male 5.0 kg. Attack 29.0 / Defense 19.0 / Agility 70.0 / Stamina 58.0 / Intelligence 64.0 / Special 62.0.
- **Pangolin control:** Sunda pangolin *Manis javanica*, mature male 7.0 kg. Attack 28.0 / Defense 66.0 / Agility 59.0 / Stamina 50.0 / Intelligence 54.0 / Special 88.0.
- **Otter control:** *Lontra canadensis*, mature male 12.0 kg. Attack 35.0 / Defense 29.0 / Agility 91.0 / Stamina 76.0 / Intelligence 78.0 / Special 77.0.
- **Ostrich control:** *Struthio camelus*, mature male 130.0 kg. Attack 58.0 / Defense 37.0 / Agility 83.0 / Stamina 89.0 / Intelligence 52.0 / Special 64.0.
- **Osprey control:** *Pandion haliaetus*, mature female 1.8 kg. Attack 31.0 / Defense 17.0 / Agility 87.0 / Stamina 82.0 / Intelligence 65.0 / Special 83.0.
- **Oryx control:** *Oryx gazella*, mature male 230.0 kg. Attack 60.0 / Defense 49.0 / Agility 66.0 / Stamina 82.0 / Intelligence 61.0 / Special 81.0.
- **Orca control:** *Orcinus orca*, mature male 5000.0 kg. Attack 94.0 / Defense 78.0 / Agility 84.0 / Stamina 88.0 / Intelligence 99.0 / Special 94.0.
- **Black Bear comparison:** *Ursus americanus*, mature male 120.0 kg. Attack 56.0 / Defense 49.0 / Agility 70.0 / Stamina 66.0 / Intelligence 68.0 / Special 61.0.
- **Hedgehog comparison:** *Erinaceus europaeus*, mature male 1.0 kg. Attack 11.0 / Defense 43.0 / Agility 41.0 / Stamina 52.0 / Intelligence 38.0 / Special 69.0.
- **Duplicate-roster control:** `Anaconda` and `Green Anaconda` currently resolve to the *Eunectes murinus* complex and should remain normalized until explicitly separated or merged.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Porcupine | 10.5 kg mature male *E. dorsatum* | 35.0 | 67.0 | 48.0 | 64.0 | 51.0 | 92.0 |
| Praying Mantis | 0.006 kg adult female *T. sinensis* | 12.0 | 9.0 | 80.0 | 43.0 | 48.0 | 84.0 |
| Proboscis Monkey | 21.2 kg adult male *N. larvatus* | 34.0 | 31.0 | 85.0 | 69.0 | 74.0 | 84.0 |

## Checkpoints
`audits/CHECKPOINT-150.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **175 completed research files**.

## Image pipeline status
163 research reports are complete, but **0 verified transparent PNG binaries are committed**. Current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.
