# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 145 / 225
- **Verified full-body transparent PNGs committed:** 0 / 145
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Okapi (*Okapia johnstoni*)
- **Next pending animal:** Opossum
- **Latest completion:** 2026-09-22 05:57 America/Chicago
- **Latest new-animal image status:** Okapi - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. A 2193x3289 CC BY-SA 3.0 exact-*O. johnstoni* Commons photograph explicitly identifies the animal as male, and direct inspection confirms the entire animal is framed, including head, torso, four legs/hooves and tail. Adulthood is not explicit, so no cutout-ready claim is made.
- **Latest legacy image audit:** Giant Centipede - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. The 4000x3000 CC BY-SA 3.0 Vieques *Scolopendra gigantea* source was opened at original resolution. Head, trunk, antennae, terminal legs and the visible walking-leg series are inside frame, but adulthood is not documented, so it remains pending rather than being promoted.
- **Next legacy image audit:** Giant Squid. Megalodon remains a structural blocker because the mandatory real-adult-photograph requirement cannot be satisfied for an extinct species. Hellbender, Hornet, Ibex, Kudu, Lionfish and Gecko are source-verified and awaiting binary cutout/commit tooling.
- **Latest checkpoint:** `audits/CHECKPOINT-125.md`; next checkpoint at 150 completed research files.

## Selection and image rules
Each run uses `DATA_PROGRESS.md` ordering but ignores its old checkmarks, choosing the first roster animal without a completed staging report. `IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Research completion and image completion are separate counts. A URL, JPEG, candidate PNG or uninspected cutout is not a completed image.

## Active normalization / uncertainty notes
- Ratings are absolute across all 225 animals, not pound-for-pound.
- Unsupported bite-pressure values remain 0.0. Force is never converted to PSI without defensible contact area.
- Maximum speed remains 0.0 where no defensible species-specific maximum exists. Observed cruise, track or sustainable speed is not silently promoted to a physiological ceiling, and speed is not Agility.
- Stamina separates sustained movement from burst speed.
- Special must not double-count ordinary size, toughness, cognition, flight or sociality.
- Pack/flock/colony behavior can raise Tactics contextually but does not multiply one individual's Raw Power, Attack or Defense.
- **Okapi control:** *Okapia johnstoni*, healthy prime mature male, 275.0 kg / 150.0 cm shoulder / 250.0 cm body length / 0.0 m/s unsupported maximum / 17.0 y / 0.0 PSI. Attack 53.0 / Defense 44.0 / Agility 61.0 / Stamina 67.0 / Intelligence 56.0 / Special 52.0. Male selected over larger female because territorial males bear ossicones and documented headbanging; no unsupported sprint or kick-force number used.
- **Octopus control:** Giant Pacific Octopus *Enteroctopus dofleini*, healthy mature male, 30.0 kg / 250.0 cm total length / 0.0 m/s unsupported maximum / 5.0 y / 0.0 PSI. Attack 47.0 / Defense 36.0 / Agility 94.0 / Stamina 58.0 / Intelligence 94.0 / Special 98.0.
- **Ocelot control:** *Leopardus pardalis*, healthy prime mature male, 13.0 kg / 90.0 cm head-body / 0.0 m/s unsupported maximum / 10.0 y / 0.0 PSI. Attack 38.0 / Defense 27.0 / Agility 88.0 / Stamina 64.0 / Intelligence 72.0 / Special 72.0.
- **Nautilus control:** *Nautilus pompilius*, healthy mature male, 0.55 kg / 15.0 cm shell diameter / 0.25 m/s directly measured Fiji maximum / 20.0 y / 0.0 PSI. Attack 14.0 / Defense 35.0 / Agility 50.0 / Stamina 65.0 / Intelligence 46.0 / Special 85.0.
- **Narwhal control:** *Monodon monoceros*, healthy prime mature male, 1200.0 kg / 460.0 cm body length / 0.0 m/s unsupported maximum / 100.0 y / 0.0 PSI. Attack 61.0 / Defense 59.0 / Agility 51.0 / Stamina 92.0 / Intelligence 74.0 / Special 90.0.
- **Naked Mole Rat control:** *Heterocephalus glaber*, healthy fully grown large subordinate/defender, 0.057 kg / 10.0 cm body length / 0.0 m/s unsupported maximum / 37.0 y / 0.0 PSI. Attack 14.0 / Defense 24.0 / Agility 72.0 / Stamina 83.0 / Intelligence 76.0 / Special 96.0.
- **Musk Ox control:** *Ovibos moschatus*, healthy fully mature bull, 320.0 kg / 120.0 cm shoulder / 225.0 cm head-body / 0.0 m/s unsupported maximum / 12.0 y / 0.0 PSI. Attack 64.0 / Defense 61.0 / Agility 50.0 / Stamina 72.0 / Intelligence 59.0 / Special 74.0.
- **Mountain Goat control:** *Oreamnos americanus*, healthy prime mature male, 110.0 kg / 100.0 cm shoulder / 165.0 cm head-body / 0.0 m/s unsupported maximum / 14.0 y / 0.0 PSI. Attack 51.0 / Defense 42.0 / Agility 88.0 / Stamina 70.0 / Intelligence 62.0 / Special 78.0.
- **Moray Eel control:** Giant Moray *Gymnothorax javanicus*, healthy large mature adult, 25.0 kg / 220.0 cm / 0.0 m/s unsupported maximum / 39.0 y / 0.0 PSI. Attack 49.0 / Defense 32.0 / Agility 74.0 / Stamina 51.0 / Intelligence 70.0 / Special 86.0.
- **Moose control:** *Alces alces*, healthy prime mature bull, 550.0 kg / 200.0 cm shoulder / 300.0 cm total length / 15.6 m/s secondary-source maximum / 15.0 y / 0.0 PSI. Attack 69.0 / Defense 50.0 / Agility 58.0 / Stamina 70.0 / Intelligence 55.0 / Special 60.0.
- **Monitor Lizard control:** *Varanus salvator*, mature large male, 20.0 kg / 200.0 cm. Attack 48.0 / Defense 35.0 / Agility 73.0 / Stamina 57.0 / Intelligence 64.0 / Special 67.0.
- **Mongoose control:** Javan Mongoose *Urva javanica*, mature male, 0.8 kg. Attack 20.0 / Defense 16.0 / Agility 86.0 / Stamina 62.0 / Intelligence 64.0 / Special 66.0.
- **Monarch Butterfly control:** *Danaus plexippus*, mature migratory male, ~0.0005 kg. Attack 1.0 / Defense 15.0 / Agility 82.0 / Stamina 90.0 / Intelligence 43.0 / Special 89.0.
- **Megalodon control:** †*Otodus megalodon*, IRSNB P 9893 reconstruction, ~30,000 kg. Attack 100.0 / Defense 96.0 / Agility 58.0 / Stamina 92.0 / Intelligence 58.0 / Special 88.0.
- **Meerkat control:** *Suricata suricatta*, mature male, ~0.75 kg. Attack 18.0 / Defense 17.0 / Agility 82.0 / Stamina 65.0 / Intelligence 88.0 / Special 78.0.
- **Marlin control:** Blue Marlin *Makaira nigricans*, mature female, 250.0 kg. Attack 58.0 / Defense 41.0 / Agility 78.0 / Stamina 90.0 / Intelligence 62.0 / Special 70.0.
- **Mantis Shrimp control:** Peacock Mantis Shrimp *Odontodactylus scyllarus*, mature large male, 0.08 kg. Attack 34.0 / Defense 24.0 / Agility 84.0 / Stamina 50.0 / Intelligence 68.0 / Special 97.0.
- **Manta Ray control:** Giant Oceanic Manta *Mobula birostris*, mature female, 1400.0 kg. Attack 42.0 / Defense 57.0 / Agility 72.0 / Stamina 89.0 / Intelligence 76.0 / Special 70.0.
- **Elk comparison control:** *Cervus canadensis*, mature bull 320.0 kg. Attack 62.0.
- **Duplicate-roster control:** `Anaconda` and `Green Anaconda` currently both resolve to *Eunectes murinus* / green-anaconda complex and should remain normalized until explicitly separated or merged.

## Recent animals
| Animal | Canonical specimen | Attack | Defense | Agility | Stamina | Intelligence | Special |
|---|---|---:|---:|---:|---:|---:|---:|
| Ocelot | 13.0 kg prime mature male *L. pardalis* | 38.0 | 27.0 | 88.0 | 64.0 | 72.0 | 72.0 |
| Octopus | 30.0 kg mature male *E. dofleini* | 47.0 | 36.0 | 94.0 | 58.0 | 94.0 | 98.0 |
| Okapi | 275.0 kg prime mature male *O. johnstoni* | 53.0 | 44.0 | 61.0 | 67.0 | 56.0 | 52.0 |

## Checkpoints
`audits/CHECKPOINT-125.md` reviewed inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak sourcing and duplicate ability concepts. No prior staging score required correction. Next checkpoint: **150 completed research files**.

## Image pipeline status
145 research reports are complete, but **0 verified transparent PNG binaries are committed**. Hellbender, Hornet, Ibex, Kudu, Lionfish and Gecko have reusable full-body source candidates, but current connected GitHub `create_file` / `update_file` actions accept UTF-8 text only. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or other fake image is created. Megalodon additionally exposes a structural rule conflict for extinct animals because the mandatory standard requires a real photograph of an adult. `IMAGE_BACKFILL.md` remains the legacy audit queue.