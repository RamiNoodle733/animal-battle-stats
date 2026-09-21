# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 130 / 225
- **Verified full-body transparent PNGs committed:** 0 / 130
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Marlin / Blue Marlin (*Makaira nigricans*)
- **Next pending animal:** Meerkat
- **Latest completion:** 2026-09-21 15:02 America/Chicago
- **Latest new-animal image status:** Marlin - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. A 4608x3357 public-domain NOAA exact-*M. nigricans* photograph and a 4032x3024 CC BY 4.0 IFREMER alternative were found; adulthood/sex and strict complete-anatomy verification remain unresolved. No PNG completion claimed.
- **Latest legacy image audit:** Leopard - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. The retained reusable 4355x2630 exact male source has full anatomy but no explicit adulthood. A 5760x3840 explicit-adult-male side-view commercial source was found but redistribution permission was not established; a reusable explicit-adult Commons alternative is only 1367x1620 and has a weaker tree-resting pose.
- **Next legacy image audit:** Lionfish. Kudu is already source-verified and joins Hellbender, Hornet and Ibex in cutout/commit pending status while the GitHub writer is text-only.
- **Latest checkpoint:** `audits/CHECKPOINT-125.md`; next checkpoint at 150 completed research files.

## Selection and image rules
Each run uses `DATA_PROGRESS.md` ordering but ignores its old checkmarks, choosing the first roster animal without a completed staging report. `IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Research completion and image completion are separate counts. A URL, JPEG, candidate PNG or uninspected cutout is not a completed image.

## Active normalization / uncertainty notes
- Ratings are absolute across all 225 animals, not pound-for-pound.
- Unsupported bite-pressure values remain 0.0. Force is never converted to PSI without defensible contact area.
- Maximum speed remains 0.0 where no defensible species-specific maximum exists. Observed tag speed is not silently promoted to a physiological ceiling, and speed is not Agility.
- Stamina separates sustained movement and migration from burst speed.
- Special must not double-count ordinary size, toughness, cognition, flight or sociality.
- Pack/flock/colony behavior can raise Tactics contextually but does not multiply one individual's Raw Power, Attack or Defense.
- **Marlin control:** Blue Marlin *Makaira nigricans*, healthy mature female, 250.0 kg / 300.0 cm / 0.0 m/s unresolved maximum / 20.0 y / 0.0 PSI. Attack 58.0 / Defense 41.0 / Agility 78.0 / Stamina 90.0 / Intelligence 62.0 / Special 70.0. Historical extreme speed claims rejected; satellite-tag movement supports elite endurance.
- **Mantis Shrimp control:** Peacock Mantis Shrimp *Odontodactylus scyllarus*, mature large male, 0.08 kg / 15.0 cm / 0.0 m/s / 6.0 y / 0.0 PSI. Attack 34.0 / Defense 24.0 / Agility 84.0 / Stamina 50.0 / Intelligence 68.0 / Special 97.0.
- **Manta Ray control:** Giant Oceanic Manta *Mobula birostris*, mature female, 1400.0 kg / 500.0 cm disc width / 0.0 m/s / 45.0 y / 0.0 PSI. Attack 42.0 / Defense 57.0 / Agility 72.0 / Stamina 89.0 / Intelligence 76.0 / Special 70.0.
- **Maned Wolf control:** *Chrysocyon brachyurus*, mature male, 23.0 kg. Attack 35.0 / Defense 27.0 / Agility 78.0 / Stamina 72.0 / Intelligence 67.0 / Special 65.0.
- **Mandrill control:** *Mandrillus sphinx*, mature male, 32.0 kg. Attack 47.0 / Defense 34.0 / Agility 76.0 / Stamina 60.0 / Intelligence 82.0 / Special 61.0.
- **Manatee control:** West Indian Manatee *Trichechus manatus*, mature female, 500.0 kg. Attack 36.0 / Defense 50.0 / Agility 48.0 / Stamina 78.0 / Intelligence 58.0 / Special 77.0.
- **Magpie control:** Eurasian Magpie *Pica pica*, mature male 0.23 kg. Attack 15.0 / Defense 12.0 / Agility 84.0 / Stamina 61.0 / Intelligence 91.0 / Special 58.0.
- **Macaw control:** Scarlet Macaw *Ara macao*, mature adult 1.2 kg. Attack 24.0 / Defense 17.0 / Agility 86.0 / Stamina 65.0 / Intelligence 86.0 / Special 64.0.
- **Lynx control:** Eurasian Lynx *Lynx lynx*, mature male 24.0 kg. Attack 48.0 / Defense 31.0 / Agility 85.0 / Stamina 68.0 / Intelligence 67.0 / Special 66.0.
- **Lobster control:** American Lobster *Homarus americanus*, mature hard-shell male 1.0 kg. Attack 28.0 / Defense 36.0 / Agility 35.0 / Stamina 57.0 / Intelligence 48.0 / Special 60.0.
- **Llama control:** *Lama glama*, mature intact male 150.0 kg. Attack 40.0 / Defense 36.0 / Agility 60.0 / Stamina 77.0 / Intelligence 60.0 / Special 54.0.
- **Lionfish control:** Red Lionfish *Pterois volitans*, mature male 0.5 kg. Attack 25.0 / Defense 38.0 / Agility 52.0 / Stamina 55.0 / Intelligence 58.0 / Special 87.0.
- **Leopard control:** *Panthera pardus*, mature male 60.0 kg. Attack 60.0 / Defense 43.0 / Agility 84.0 / Stamina 62.0 / Intelligence 68.0 / Special 63.0.
- **Leatherback Sea Turtle control:** *Dermochelys coriacea*, mature adult female 400.0 kg. Attack 35.0 / Defense 60.0 / Agility 59.0 / Stamina 95.0 / Intelligence 49.0 / Special 89.0.
- **Kudu control:** Greater Kudu *Tragelaphus strepsiceros*, mature male 230.0 kg. Attack 58.0 / Defense 43.0 / Agility 72.0 / Stamina 60.0 / Intelligence 49.0 / Special 61.0.
- **Kangaroo control:** Red Kangaroo *Osphranter rufus*, mature male 80.0 kg. Attack 52.0 / Defense 38.0 / Agility 80.0 / Stamina 86.0 / Intelligence 51.0 / Special 68.0.
- **Japanese Macaque control:** *Macaca fuscata*, mature male 11.3 kg. Attack 31.0 / Defense 28.0 / Agility 79.0 / Stamina 67.0 / Intelligence 84.0 / Special 72.0.
- **Jaguar control:** *Panthera onca*, mature Pantanal male 100.0 kg. Attack 68.0 / Defense 48.0 / Agility 82.0 / Stamina 64.0 / Intelligence 70.0 / Special 75.0.
- **Hyena control:** Spotted Hyena *Crocuta crocuta*, mature female 75.0 kg. Attack 61.0 / Defense 53.0 / Agility 61.0 / Stamina 83.0 / Intelligence 78.0 / Special 72.0.
- **Duplicate-roster control:** `Anaconda` and `Green Anaconda` currently both resolve to *Eunectes murinus* / green-anaconda complex and should remain normalized until explicitly separated or merged.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Manta Ray | 1400.0 kg mature female *M. birostris* | 42.0 | 57.0 | 72.0 | 89.0 | 76.0 | 70.0 |
| Mantis Shrimp | 0.08 kg mature large male *O. scyllarus* | 34.0 | 24.0 | 84.0 | 50.0 | 68.0 | 97.0 |
| Marlin | 250.0 kg mature female *M. nigricans* | 58.0 | 41.0 | 78.0 | 90.0 | 62.0 | 70.0 |

## Checkpoints
`audits/CHECKPOINT-125.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **150 completed research files**.

## Image pipeline status
130 research reports are complete, but **0 verified transparent PNG binaries are committed**. Hellbender, Hornet, Ibex and Kudu have reusable full-body source candidates, but current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or other fake image is created. `IMAGE_BACKFILL.md` remains the legacy audit queue.