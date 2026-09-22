# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 138 / 225
- **Verified full-body transparent PNGs committed:** 0 / 138
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Mountain Goat (*Oreamnos americanus*)
- **Next pending animal:** Musk Ox
- **Latest completion:** 2026-09-21 23:00 America/Chicago
- **Latest new-animal image status:** Mountain Goat - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. A 2663x1804 public-domain exact-species male USFWS source was visually inspected. Head, horns and torso are clear, but the animal is lying in vegetation and the lower limbs/feet are obscured; adulthood is not explicit. No PNG completion claimed.
- **Latest legacy image audit:** Mandrill - `LICENSE UNVERIFIED - DO NOT COMMIT`. The existing 3799x2848 reusable alpha-male Commons source was visually inspected and is a portrait with the body/limbs cropped, so it fails the mandatory complete-body standard. Broad search found multiple visibly complete adult-male commercial photographs, including high-resolution Getty/iStock candidates, but repository redistribution rights were not established. No asset was downloaded or committed.
- **Next legacy image audit:** Maned Wolf. Hellbender, Hornet, Ibex, Kudu and Lionfish are source-verified and awaiting binary cutout/commit tooling.
- **Latest checkpoint:** `audits/CHECKPOINT-125.md`; next checkpoint at 150 completed research files.

## Selection and image rules
Each run uses `DATA_PROGRESS.md` ordering but ignores its old checkmarks, choosing the first roster animal without a completed staging report. `IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Research completion and image completion are separate counts. A URL, JPEG, candidate PNG or uninspected cutout is not a completed image.

## Active normalization / uncertainty notes
- Ratings are absolute across all 225 animals, not pound-for-pound.
- Unsupported bite-pressure values remain 0.0. Force is never converted to PSI without defensible contact area.
- Maximum speed remains 0.0 where no defensible species-specific maximum exists. Observed cruise/sustainable speed is not silently promoted to a physiological ceiling, and speed is not Agility.
- Stamina separates sustained movement from burst speed.
- Special must not double-count ordinary size, toughness, cognition, flight or sociality.
- Pack/flock/colony behavior can raise Tactics contextually but does not multiply one individual's Raw Power, Attack or Defense.
- **Mountain Goat control:** *Oreamnos americanus*, healthy prime mature male, 110.0 kg / 100.0 cm shoulder / 165.0 cm head-body / 0.0 m/s unsupported maximum / 14.0 y / 0.0 PSI. Attack 51.0 / Defense 42.0 / Agility 88.0 / Stamina 70.0 / Intelligence 62.0 / Special 78.0. Mass is moderate-high confidence but varies strongly by population/source; Agility is high for cliff control, not for unsupported top speed. Special reflects escape-terrain geometry without duplicating Raw Power.
- **Moray Eel control:** Giant Moray *Gymnothorax javanicus*, healthy large mature adult of unknown sex, 25.0 kg / 220.0 cm / 0.0 m/s unsupported maximum / 39.0 y demonstrated age / 0.0 PSI. Attack 49.0 / Defense 32.0 / Agility 74.0 / Stamina 51.0 / Intelligence 70.0 / Special 86.0.
- **Moose control:** broad-roster *Alces alces*, healthy prime mature bull in hard-antler rut condition, 550.0 kg / 200.0 cm shoulder / 300.0 cm total length / 15.6 m/s secondary-source maximum / 15.0 y / 0.0 PSI. Attack 69.0 / Defense 50.0 / Agility 58.0 / Stamina 70.0 / Intelligence 55.0 / Special 60.0.
- **Monitor Lizard control:** Asian/Common Water Monitor *Varanus salvator*, mature large male, 20.0 kg / 200.0 cm. Attack 48.0 / Defense 35.0 / Agility 73.0 / Stamina 57.0 / Intelligence 64.0 / Special 67.0.
- **Mongoose control:** Javan Mongoose *Urva javanica*, mature male, 0.8 kg. Attack 20.0 / Defense 16.0 / Agility 86.0 / Stamina 62.0 / Intelligence 64.0 / Special 66.0.
- **Monarch Butterfly control:** *Danaus plexippus*, mature migratory male, ~0.0005 kg. Attack 1.0 / Defense 15.0 / Agility 82.0 / Stamina 90.0 / Intelligence 43.0 / Special 89.0.
- **Megalodon control:** †*Otodus megalodon*, IRSNB P 9893 reconstruction, ~30,000 kg. Attack 100.0 / Defense 96.0 / Agility 58.0 / Stamina 92.0 / Intelligence 58.0 / Special 88.0.
- **Meerkat control:** *Suricata suricatta*, mature male, ~0.75 kg. Attack 18.0 / Defense 17.0 / Agility 82.0 / Stamina 65.0 / Intelligence 88.0 / Special 78.0.
- **Marlin control:** Blue Marlin *Makaira nigricans*, mature female, 250.0 kg. Attack 58.0 / Defense 41.0 / Agility 78.0 / Stamina 90.0 / Intelligence 62.0 / Special 70.0.
- **Mantis Shrimp control:** Peacock Mantis Shrimp *Odontodactylus scyllarus*, mature large male, 0.08 kg. Attack 34.0 / Defense 24.0 / Agility 84.0 / Stamina 50.0 / Intelligence 68.0 / Special 97.0.
- **Manta Ray control:** Giant Oceanic Manta *Mobula birostris*, mature female, 1400.0 kg. Attack 42.0 / Defense 57.0 / Agility 72.0 / Stamina 89.0 / Intelligence 76.0 / Special 70.0.
- **Maned Wolf control:** *Chrysocyon brachyurus*, mature male, 23.0 kg. Attack 35.0 / Defense 27.0 / Agility 78.0 / Stamina 72.0 / Intelligence 67.0 / Special 65.0.
- **Mandrill control:** *Mandrillus sphinx*, mature male, 32.0 kg. Attack 47.0 / Defense 34.0 / Agility 76.0 / Stamina 60.0 / Intelligence 82.0 / Special 61.0.
- **Elk comparison control:** *Cervus canadensis*, mature bull 320.0 kg. Attack 62.0. Mountain Goat is intentionally far below Elk/Moose in Size and Raw Power while retaining much higher terrain-specific maneuverability.
- **Duplicate-roster control:** `Anaconda` and `Green Anaconda` currently both resolve to *Eunectes murinus* / green-anaconda complex and should remain normalized until explicitly separated or merged.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Moose | 550.0 kg prime mature bull *A. alces* | 69.0 | 50.0 | 58.0 | 70.0 | 55.0 | 60.0 |
| Moray Eel | 25.0 kg large mature *G. javanicus*, sex unknown | 49.0 | 32.0 | 74.0 | 51.0 | 70.0 | 86.0 |
| Mountain Goat | 110.0 kg prime mature male *O. americanus* | 51.0 | 42.0 | 88.0 | 70.0 | 62.0 | 78.0 |

## Checkpoints
`audits/CHECKPOINT-125.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **150 completed research files**.

## Image pipeline status
138 research reports are complete, but **0 verified transparent PNG binaries are committed**. Hellbender, Hornet, Ibex, Kudu and Lionfish have reusable full-body source candidates, but current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or other fake image is created. Megalodon additionally exposes a structural rule conflict for extinct animals because the mandatory standard requires a real photograph of an adult. `IMAGE_BACKFILL.md` remains the legacy audit queue.