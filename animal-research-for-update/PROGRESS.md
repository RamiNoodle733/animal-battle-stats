# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 7 / 225
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Anaconda
- **Next pending animal:** Anglerfish
- **Latest completion:** 2026-09-16 12:04 America/Chicago
- **Latest image status:** Anaconda — `SOURCE FOUND - PNG COMMIT PENDING`

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
- **African Lion bite force:** Peer-reviewed modeled canine-force estimates vary substantially by method. Keep `bite_force_psi: 0.0` until ABS has a defensible force/contact-area convention; consider adding newton fields.
- **African Lion mane:** Do not treat the mane as heavy protective armor. Field wounding research found no compelling protective effect; it is better supported as a sexually selected signal/intimidation trait.
- **African Lion ratings:** Revisit Attack/Agility/Stamina spacing after African Wild Dog, Cheetah, Spotted Hyena, Jaguar, Leopard, Siberian Tiger, Gorilla, Cape Buffalo, Hippopotamus and Rhinoceros are researched.
- **African Lion image:** Real high-resolution standing adult male source located on Wikimedia Commons. Current connector cannot safely commit the transparent binary PNG, so source and direct-image resolver are recorded in the report.
- **African Wild Dog length:** Sources mix head-body and broader length conventions. `100.0 cm` is explicitly head-body; future schema should split tail length.
- **African Wild Dog bite force:** Peer-reviewed anatomy/biomechanics supports exceptional relative bite mechanics but not a standardized in-vivo PSI value. Keep `bite_force_psi: 0.0` pending a force/contact-area standard.
- **African Wild Dog hunting style:** Do not describe all hunts as long coordinated persistence chases. Instrumented woodland studies show many short opportunistic pursuits and additive group feeding, while other populations use longer chases.
- **African Wild Dog ratings:** Stamina 82.0 is an early endurance anchor. Revisit after Gray Wolf, Dhole, Cheetah, Spotted Hyena and long-distance herbivore profiles establish the wider endurance distribution.
- **African Wild Dog image:** Real 3002×2001 wild adult-male source located on Wikimedia Commons from the Okavango Delta. Current connector cannot safely commit the transparent binary PNG.
- **Albatross taxon:** The live label “Albatross” is underspecified. Research canon is the wandering albatross (*Diomedea exulans*), the largest and strongest living albatross. Production should make the taxon explicit.
- **Albatross height:** Keep `height_cm: 0.0` until ABS defines a standardized bird-height convention.
- **Albatross speed:** `20.0 m/s` uses an empirically grounded GPS/wind airspeed regime. Do not replace it with much higher theoretical dynamic-soaring model predictions as though they were measured representative top speeds.
- **Albatross bite force:** Keep `0.0`; no defensible standardized PSI measurement was found.
- **Albatross ratings:** Stamina 96.0 is intentionally an elite absolute endurance anchor based on multi-day, multi-thousand-kilometer travel and low-cost dynamic soaring. Revisit after other extreme migratory/endurance specialists are researched.
- **Albatross image:** Selected real 2400×1503 *Diomedea exulans* photo on Wikimedia Commons with CC0 provenance. Current connector cannot safely commit binary PNG.
- **Alligator taxon:** The live label `Alligator` is underspecified. Research canon is American alligator (*Alligator mississippiensis*), not Chinese alligator.
- **Alligator mass:** `200.0 kg` is an adult-male combat-specimen recommendation, deliberately above pooled averages and far below record 400+ kg males.
- **Alligator height:** Keep `0.0` until ABS defines a crocodilian standing-height convention.
- **Alligator speed:** Keep `0.0` for now. Future schema should separate land and aquatic speed.
- **Alligator bite force:** Direct in-vivo bite-force evidence is excellent and reaches 9,452 N and 13,172 N in cited studies, but these are forces, not PSI. Keep `bite_force_psi: 0.0` until ABS defines contact area or adds newton fields.
- **Alligator ratings:** Attack 84.0 and Raw Power 82.0 should be revisited after Saltwater Crocodile, Hippopotamus, Great White Shark, Orca and Megalodon establish upper mechanical-force anchors.
- **Alligator image:** Selected a real 3504×2336 large-adult American alligator photograph by Steve Hillebrand/USFWS on Wikimedia Commons, marked public domain. Current connector cannot safely commit the transparent binary PNG.
- **Alpaca taxon:** Use *Vicugna pacos* as the preferred modern research name while retaining *Lama pacos* as an older synonym used by ADW and some institutions. Alpaca is domesticated, so production should not imply a normal wild population/IUCN status.
- **Alpaca mass/size:** `65.0 kg`, `100.0 cm` shoulder height and `150.0 cm` head-body length are representative adult-male recommendations inside broad institutional ranges, not maxima.
- **Alpaca speed:** Keep `speed_mps: 0.0` until a strong measured locomotor source is found.
- **Alpaca bite force:** Keep `bite_force_psi: 0.0`. Male fighting teeth >3 cm are well documented, but no standardized combat bite PSI was found.
- **Alpaca ratings:** Stamina 60.0 is based mainly on experimentally supported high-altitude oxygen physiology plus sustained grazing locomotion, not evidence of elite chase performance. Attack 25.0 should remain far below specialist predators despite male fighting teeth.
- **Alpaca image:** Selected real 2400×1600 male *Vicugna pacos* photograph on Wikimedia Commons. Current connector cannot safely commit binary PNG.
- **Anaconda taxon:** The roster label `Anaconda` is underspecified. Research canon is the green anaconda / traditional *Eunectes murinus* concept. The 2024 proposed split recognizing northern *E. akayima* remains contested, with subsequent peer-reviewed work treating it as a junior synonym. Preserve this uncertainty for production taxonomy.
- **Anaconda canonical sex:** Use an adult female, not a male. Green anacondas have extreme female-biased size dimorphism, so the female is the larger/stronger combat form.
- **Anaconda representative size:** `50.0 kg` and `450.0 cm` are deliberately representative large-adult-female recommendations, not record values. Revisit if a strong modern sex-specific wild morphometric dataset yields a better central estimate.
- **Anaconda speed:** Keep `speed_mps: 0.0` until measured aquatic/terrestrial locomotor data justify a canonical value. Future schema should split water and land speed.
- **Anaconda bite force:** Keep `bite_force_psi: 0.0`. The bite anchors prey for constriction, but no defensible standardized PSI measurement was found.
- **Anaconda ratings:** Attack 70.0 and Raw Power 66.0 intentionally recognize dangerous constriction without treating a 50 kg snake as megafaunal. Revisit after Boa Constrictor, Python, Reticulated Python, Jaguar, Saltwater Crocodile, Gorilla and larger megafauna establish the full grapple/power ladder.
- **Anaconda image:** USGS native-range Brazil photograph selected as primary candidate and marked Public Domain; sex is not stated. A 3602×2371 public-domain Wikimedia photo is recorded as fallback. Current connector cannot safely commit binary PNG, so later production should verify an adult-female candidate and perform non-generative background removal.
