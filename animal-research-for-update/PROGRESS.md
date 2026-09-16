# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 2 / 225
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** African Lion
- **Next pending animal:** African Wild Dog
- **Latest completion:** 2026-09-16 06:57 America/Chicago
- **Latest image status:** African Lion — `SOURCE FOUND - PNG COMMIT PENDING`

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
- **African Lion length:** Sources mix head-body and total length. `210.0 cm` is explicitly a representative head-body value. A future schema field should record measurement convention.
- **African Lion speed:** `14.7 m/s` is deliberately conservative and based on an institutional ~53 km/h sprint figure. Revisit if a strong primary field/biomechanics source establishes a better representative maximum.
- **African Lion bite force:** Peer-reviewed modeled canine-force estimates vary substantially by method (roughly 1.3 kN in an older comparative model vs ~2.6 kN in a 2024 craniometric model). Keep `bite_force_psi: 0.0` until ABS has a defensible force/contact-area convention; consider adding newton fields.
- **African Lion mane:** Do not treat the mane as heavy protective armor. Field wounding research found no compelling protective effect; it is better supported as a sexually selected signal/intimidation trait.
- **African Lion ratings:** Revisit Attack/Agility/Stamina spacing after African Wild Dog, Cheetah, Spotted Hyena, Jaguar, Leopard, Siberian Tiger, Gorilla, Cape Buffalo, Hippopotamus and Rhinoceros are researched.
- **African Lion image:** Real high-resolution standing adult male source located on Wikimedia Commons (Kenya, CC BY 3.0). Current connector cannot safely commit the transparent binary PNG, so source and direct-image resolver are recorded in the report for later cutout/promotion.
