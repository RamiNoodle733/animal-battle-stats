# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 150 / 225
- **Verified full-body transparent PNGs committed:** 0 / 150
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Osprey (*Pandion haliaetus*)
- **Next pending animal:** Ostrich
- **Latest completion:** 2026-09-22 11:00 America/Chicago
- **Latest new-animal image status:** Osprey - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Charles J. Sharp's 5469x3646 CC BY-SA 4.0 exact *P. h. carolinensis* flight photograph was directly inspected. Major silhouette is complete, but adulthood/sex are not explicit and tucked feet prevent strict all-appendage verification.
- **Latest legacy image audit:** Golden Eagle - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Caroline Legg's exact-*Aquila chrysaetos* 3244x2317 CC BY 4.0 photograph has strong reusable provenance, but adulthood/sex and strict all-talon visibility are not simultaneously verified.
- **Next legacy image audit:** Goliath Birdeater. Megalodon remains a structural blocker because the mandatory real-adult-photograph requirement cannot be satisfied for an extinct species. Hellbender, Hornet, Ibex, Kudu, Lionfish, Gecko and Giraffe are source-verified and awaiting binary cutout/commit tooling.
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
- **Osprey control:** *Pandion haliaetus*, healthy prime mature female, 1.8 kg / 58.0 cm body length / ~170 cm reference wingspan / 0.0 m/s unsupported maximum / 15.0 y representative wild-life field with 25 y documented maximum / 0.0 PSI. Attack 31.0 / Defense 17.0 / Agility 87.0 / Stamina 82.0 / Intelligence 65.0 / Special 83.0. Fish-grip specialization raises Weaponry/Special, not absolute Raw Power. Old 36 km/h and 100 PSI catalogue values are rejected as unsupported.
- **Oryx control:** Gemsbok *Oryx gazella*, healthy prime mature territorial male, 230.0 kg / 123.0 cm shoulder / 190.0 cm body length / 15.6 m/s institutional maximum / 18.0 y wild average / 0.0 PSI. Attack 60.0 / Defense 49.0 / Agility 66.0 / Stamina 82.0 / Intelligence 61.0 / Special 81.0.
- **Orca control:** *Orcinus orca*, healthy prime fully mature male, 5000.0 kg / 650.0 cm / 15.6 m/s agency-reported maximum / 50.0 y mature-male upper-normal longevity / 0.0 PSI. Attack 94.0 / Defense 78.0 / Agility 84.0 / Stamina 88.0 / Intelligence 99.0 / Special 94.0.
- **Orangutan control:** Bornean Orangutan *Pongo pygmaeus*, healthy prime fully flanged mature male, 90.0 kg / 97.0 cm institutional male body size / 0.0 cm standardized head-body length unresolved / 0.0 m/s unsupported maximum / 50.0 y upper wild longevity / 0.0 PSI. Attack 57.0 / Defense 43.0 / Agility 75.0 / Stamina 63.0 / Intelligence 96.0 / Special 68.0.
- **Opossum control:** Virginia Opossum *Didelphis virginiana*, healthy prime mature male, 2.8 kg / 70.2 cm total length / 0.0 m/s unsupported maximum / 2.0 y normal wild lifespan / 0.0 PSI. Attack 25.0 / Defense 28.0 / Agility 71.0 / Stamina 56.0 / Intelligence 59.0 / Special 90.0.
- **Okapi control:** *Okapia johnstoni*, healthy prime mature male, 275.0 kg / 150.0 cm shoulder / 250.0 cm body length / 0.0 m/s unsupported maximum / 17.0 y / 0.0 PSI. Attack 53.0 / Defense 44.0 / Agility 61.0 / Stamina 67.0 / Intelligence 56.0 / Special 52.0.
- **Octopus control:** Giant Pacific Octopus *Enteroctopus dofleini*, healthy mature male, 30.0 kg / 250.0 cm total length / 0.0 m/s unsupported maximum / 5.0 y / 0.0 PSI. Attack 47.0 / Defense 36.0 / Agility 94.0 / Stamina 58.0 / Intelligence 94.0 / Special 98.0.
- **Ocelot control:** *Leopardus pardalis*, healthy prime mature male, 13.0 kg / 90.0 cm head-body / 0.0 m/s unsupported maximum / 10.0 y / 0.0 PSI. Attack 38.0 / Defense 27.0 / Agility 88.0 / Stamina 64.0 / Intelligence 72.0 / Special 72.0.
- **Nautilus control:** *Nautilus pompilius*, healthy mature male, 0.55 kg / 15.0 cm shell diameter / 0.25 m/s directly measured Fiji maximum / 20.0 y / 0.0 PSI. Attack 14.0 / Defense 35.0 / Agility 50.0 / Stamina 65.0 / Intelligence 46.0 / Special 85.0.
- **Narwhal control:** *Monodon monoceros*, healthy prime mature male, 1200.0 kg / 460.0 cm body length / 0.0 m/s unsupported maximum / 100.0 y / 0.0 PSI. Attack 61.0 / Defense 59.0 / Agility 51.0 / Stamina 92.0 / Intelligence 74.0 / Special 90.0.
- **Naked Mole Rat control:** *Heterocephalus glaber*, healthy fully grown large subordinate/defender, 0.057 kg / 10.0 cm body length / 0.0 m/s unsupported maximum / 37.0 y / 0.0 PSI. Attack 14.0 / Defense 24.0 / Agility 72.0 / Stamina 83.0 / Intelligence 76.0 / Special 96.0.
- **Musk Ox control:** *Ovibos moschatus*, healthy fully mature bull, 320.0 kg / 120.0 cm shoulder / 225.0 cm head-body / 0.0 m/s unsupported maximum / 12.0 y / 0.0 PSI. Attack 64.0 / Defense 61.0 / Agility 50.0 / Stamina 72.0 / Intelligence 59.0 / Special 74.0.
- **Mountain Goat control:** *Oreamnos americanus*, healthy prime mature male, 110.0 kg / 100.0 cm shoulder / 165.0 cm head-body / 0.0 m/s unsupported maximum / 14.0 y / 0.0 PSI. Attack 51.0 / Defense 42.0 / Agility 88.0 / Stamina 70.0 / Intelligence 62.0 / Special 78.0.
- **Moray Eel control:** Giant Moray *Gymnothorax javanicus*, healthy large mature adult, 25.0 kg / 220.0 cm / 0.0 m/s unsupported maximum / 39.0 y / 0.0 PSI. Attack 49.0 / Defense 32.0 / Agility 74.0 / Stamina 51.0 / Intelligence 70.0 / Special 86.0.
- **Moose control:** *Alces alces*, healthy prime mature bull, 550.0 kg / 200.0 cm shoulder / 300.0 cm total length / 15.6 m/s secondary-source maximum / 15.0 y / 0.0 PSI. Attack 69.0 / Defense 50.0 / Agility 58.0 / Stamina 70.0 / Intelligence 55.0 / Special 60.0.
- **Golden Eagle comparison control:** *Aquila chrysaetos*, healthy fully mature female, 5.0 kg. Attack 40.0 / Defense 21.0 / Agility 88.0 / Stamina 79.0 / Intelligence 66.0 / Special 70.0. Osprey remains below it in absolute Attack/Raw Power despite exceptional fish-grip specialization.
- **Elk comparison control:** *Cervus canadensis*, mature bull 320.0 kg. Attack 62.0.
- **Gibbon comparison control:** White-handed Gibbon *Hylobates lar*, mature male 6.5 kg. Elite canopy maneuverability must not be confused with raw power.
- **Meerkat comparison control:** *Suricata suricatta*, mature male ~0.75 kg. Attack 18.0 / Agility 82.0 / Intelligence 88.0 / Special 78.0.
- **Mongoose comparison control:** Javan Mongoose *Urva javanica*, mature male 0.8 kg. Attack 20.0 / Defense 16.0 / Agility 86.0 / Stamina 62.0 / Intelligence 64.0 / Special 66.0.
- **Duplicate-roster control:** `Anaconda` and `Green Anaconda` currently both resolve to *Eunectes murinus* / green-anaconda complex and should remain normalized until explicitly separated or merged.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Orca | 5000.0 kg prime mature male *O. orca* | 94.0 | 78.0 | 84.0 | 88.0 | 99.0 | 94.0 |
| Oryx | 230.0 kg prime territorial male *O. gazella* | 60.0 | 49.0 | 66.0 | 82.0 | 61.0 | 81.0 |
| Osprey | 1.8 kg prime mature female *P. haliaetus* | 31.0 | 17.0 | 87.0 | 82.0 | 65.0 | 83.0 |

## Checkpoints
`audits/CHECKPOINT-150.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **175 completed research files**.

## Image pipeline status
150 research reports are complete, but **0 verified transparent PNG binaries are committed**. Hellbender, Hornet, Ibex, Kudu, Lionfish, Gecko and Giraffe have reusable full-body source candidates, but current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or other fake image is created. Megalodon additionally exposes a structural rule conflict for extinct animals because the mandatory standard requires a real photograph of an adult. `IMAGE_BACKFILL.md` remains the legacy audit queue.