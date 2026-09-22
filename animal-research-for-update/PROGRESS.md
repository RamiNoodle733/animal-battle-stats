# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 152 / 225
- **Verified full-body transparent PNGs committed:** 0 / 152
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Otter / North American River Otter (*Lontra canadensis*)
- **Next pending animal:** Pangolin
- **Latest completion:** 2026-09-22 13:00 America/Chicago
- **Latest new-animal image status:** Otter - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. ADW explicitly verifies an adult/sexually mature exact-*Lontra canadensis* real photograph, but direct visual inspection shows overlapping/obscured anatomy. A 3050x2031 reusable CC BY-SA alternative also fails strict complete-tail/body plus explicit-adult verification.
- **Latest legacy image audit:** Goose / Canada Goose (*Branta canadensis*) - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. ADW provides an explicit adult/sexually mature exact-species photo under CC BY-NC-ND 3.0, but the resting pose hides one foot and the image is below preferred resolution. High-resolution reusable Commons/USFWS alternatives do not explicitly establish adulthood while simultaneously satisfying strict full-body framing.
- **Next legacy image audit:** Gorilla. Megalodon remains a structural blocker because the mandatory real-adult-photograph requirement cannot be satisfied for an extinct species. Hellbender, Hornet, Ibex, Kudu, Lionfish, Gecko and Giraffe are source-verified and awaiting binary cutout/commit tooling.
- **Latest checkpoint:** `audits/CHECKPOINT-150.md`; next checkpoint at 175 completed research files.

## Selection and image rules
Each run uses `DATA_PROGRESS.md` ordering but ignores its old checkmarks, choosing the first roster animal without a completed staging report. `IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Research completion and image completion are separate counts. A URL, JPEG, candidate PNG or uninspected cutout is not a completed image.

## Active normalization / uncertainty notes
- Ratings are absolute across all 225 animals, not pound-for-pound.
- Unsupported bite-pressure values remain 0.0. Force is never converted to PSI without defensible contact area.
- Maximum speed remains 0.0 where no defensible species-specific maximum exists. Observed cruise, track or sustainable speed is not silently promoted to a physiological ceiling, and speed is not Agility.
- Stamina separates sustained movement from burst speed.
- Special must not double-count ordinary size, toughness, cognition, flight or sociality.
- Pack/flock/colony behavior can raise Tactics contextually but does not multiply one individual's Raw Power, Attack or Defense.
- **Otter control:** North American River Otter *Lontra canadensis*, healthy prime mature male, 12.0 kg / 120.0 cm total length / 3.6 m/s conservative Smithsonian swimming maximum / 12.0 y representative wild lifespan / 0.0 PSI. Attack 35.0 / Defense 29.0 / Agility 91.0 / Stamina 76.0 / Intelligence 78.0 / Special 77.0. Direct swimming-kinematics evidence supports elite maneuverability independently of top speed; legacy 615 PSI is rejected.
- **Ostrich control:** *Struthio camelus*, healthy prime mature male, 130.0 kg / 250.0 cm standing height / 250.0 cm provisional overall length / 19.2 m/s Smithsonian sprint maximum / 35.0 y / 0.0 PSI. Attack 58.0 / Defense 37.0 / Agility 83.0 / Stamina 89.0 / Intelligence 52.0 / Special 64.0.
- **Osprey control:** *Pandion haliaetus*, healthy prime mature female, 1.8 kg / 58.0 cm body length / ~170 cm reference wingspan / 0.0 m/s unsupported maximum / 15.0 y / 0.0 PSI. Attack 31.0 / Defense 17.0 / Agility 87.0 / Stamina 82.0 / Intelligence 65.0 / Special 83.0.
- **Oryx control:** Gemsbok *Oryx gazella*, healthy prime territorial male, 230.0 kg / 123.0 cm shoulder / 190.0 cm body length / 15.6 m/s / 18.0 y / 0.0 PSI. Attack 60.0 / Defense 49.0 / Agility 66.0 / Stamina 82.0 / Intelligence 61.0 / Special 81.0.
- **Orca control:** *Orcinus orca*, healthy prime mature male, 5000.0 kg / 650.0 cm / 15.6 m/s / 50.0 y / 0.0 PSI. Attack 94.0 / Defense 78.0 / Agility 84.0 / Stamina 88.0 / Intelligence 99.0 / Special 94.0.
- **Ocelot control:** *Leopardus pardalis*, healthy prime mature male, 13.0 kg / 90.0 cm head-body / 0.0 m/s / 10.0 y / 0.0 PSI. Attack 38.0 / Defense 27.0 / Agility 88.0 / Stamina 64.0 / Intelligence 72.0 / Special 72.0.
- **Opossum control:** *Didelphis virginiana*, healthy prime mature male, 2.8 kg / 70.2 cm total length / 0.0 m/s / 2.0 y / 0.0 PSI. Attack 25.0 / Defense 28.0 / Agility 71.0 / Stamina 56.0 / Intelligence 59.0 / Special 90.0.
- **Golden Eagle comparison control:** *Aquila chrysaetos*, mature female 5.0 kg. Attack 40.0 / Defense 21.0 / Agility 88.0 / Stamina 79.0 / Intelligence 66.0 / Special 70.0.
- **Mongoose comparison control:** Javan Mongoose *Urva javanica*, mature male 0.8 kg. Attack 20.0 / Defense 16.0 / Agility 86.0 / Stamina 62.0 / Intelligence 64.0 / Special 66.0.
- **Duplicate-roster control:** `Anaconda` and `Green Anaconda` currently both resolve to *Eunectes murinus* / green-anaconda complex and should remain normalized until explicitly separated or merged.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Osprey | 1.8 kg mature female *P. haliaetus* | 31.0 | 17.0 | 87.0 | 82.0 | 65.0 | 83.0 |
| Ostrich | 130.0 kg mature male *S. camelus* | 58.0 | 37.0 | 83.0 | 89.0 | 52.0 | 64.0 |
| Otter | 12.0 kg mature male *L. canadensis* | 35.0 | 29.0 | 91.0 | 76.0 | 78.0 | 77.0 |

## Checkpoints
`audits/CHECKPOINT-150.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **175 completed research files**.

## Image pipeline status
152 research reports are complete, but **0 verified transparent PNG binaries are committed**. Hellbender, Hornet, Ibex, Kudu, Lionfish, Gecko and Giraffe have reusable full-body source candidates, but current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or other fake image is created. Megalodon additionally exposes a structural rule conflict for extinct animals because the mandatory standard requires a real photograph of an adult. `IMAGE_BACKFILL.md` remains the legacy audit queue.