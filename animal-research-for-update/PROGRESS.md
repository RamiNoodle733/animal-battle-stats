# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 0 / 225
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress

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

Do not mark an animal complete unless its research file satisfies `README.md` and `CALIBRATION.md`.