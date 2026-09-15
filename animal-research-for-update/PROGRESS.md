# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 1 / 225
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** African Elephant
- **Next pending animal:** African Lion
- **Latest completion:** 2026-09-15 07:01 America/Chicago
- **Latest image status:** African Elephant — `SOURCE FOUND - PNG COMMIT PENDING`

## Selection rule

On each run, read `DATA_PROGRESS.md` for the canonical 225-animal roster and choose the first animal in that list that does not yet have a completed file under `animal-research-for-update/animals/`.

The old checkboxes in `DATA_PROGRESS.md` only track an earlier physical-stat effort. They do **not** mean an animal is complete for this overhaul. All 225 animals must receive a new research file.

## Automation bookkeeping

After each successful animal research commit, update this file with:

- completed count
- most recently completed animal
- next pending animal
- date/time of latest completion
- any unresolved research conflicts worth revisiting
- image status for the completed animal

Do not mark an animal complete unless its research file satisfies `README.md` and `CALIBRATION.md`.

## Unresolved research conflicts / future audit notes

- **African Elephant:** Canonical entry is explicitly *Loxodonta africana* (African savanna/bush elephant), not a pooled savanna + forest elephant profile.
- **African Elephant length:** Institutional body-length figures vary with measurement convention. `660.0 cm` is a representative site value with moderate confidence and should be revisited if a stronger primary morphometric dataset is found.
- **African Elephant bite force:** Keep `0.0` unless a reliable measured/biomechanical jaw-force source is found. Do not import unsourced internet PSI claims.
- **African Elephant ratings:** First-animal decimal ratings are provisional calibration anchors. Revisit during cross-roster normalization, especially after Gorilla, Hippopotamus, Rhinoceros, Blue Whale, Orca, Great White Shark, Saltwater Crocodile, and Megalodon are researched.
- **African Elephant image:** High-resolution real adult-bull source located on Wikimedia Commons, but current connector cannot safely commit a binary transparent PNG. Source and direct-image resolver are recorded in the animal report for later cutout/promotion.
