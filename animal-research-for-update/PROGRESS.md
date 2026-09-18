# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 51 / 225
- **Verified full-body transparent PNGs committed:** 0 / 51
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Coconut Crab
- **Next pending animal:** Colossal Squid
- **Latest completion:** 2026-09-18 08:01 America/Chicago
- **Latest new-animal image status:** Coconut Crab - `SOURCE FOUND - FULL-BODY NOT VERIFIED`; exact *Birgus latro*, Lance Vanlewen, 1915x1956, CC BY-SA 4.0. Direct inspection shows complete major silhouette/appendages, but adulthood and sex are not explicit. Binary PNG tooling remains unavailable.
- **Latest legacy image audit:** Bighorn Sheep - strong exact-species male candidates found. NPS/Glacier `Bighorn ram` is 4500x3000, CC BY 2.0, and direct inspection confirms head, horns, torso, all four legs/hooves and tail region inside frame, but source metadata does not explicitly establish adulthood. A separate ADW Phil Myers image explicitly labels the subject male and adult/sexually mature but was not visually available at sufficient quality in this run. Status: `SOURCE FOUND - FULL-BODY NOT VERIFIED` pending one source that simultaneously proves adult status and strict framing.
- **Next legacy image audit:** Bison
- **Latest checkpoint:** `audits/CHECKPOINT-050.md`

## Selection rule

On each run, read `DATA_PROGRESS.md` for the canonical 225-animal roster and choose the first animal in that list without a completed staging research file. Old `DATA_PROGRESS.md` checkboxes do not count for this overhaul.

## Image rule

`IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Text-research completion and transparent-PNG completion are separate counts. A source URL is not a completed image. See `IMAGE_BACKFILL.md`.

## Active normalization / uncertainty notes

- Upper megafauna Attack/Defense anchors remain provisional until more rhinos, elephants, hippos and large bovids are complete.
- Unsupported bite-pressure values stay at 0.0 when only force, morphology or folklore values exist. Force is not converted to PSI without contact area.
- Maximum speed stays at 0.0 where no defensible species-specific measurement or strong agency/institutional value is available. Top speed is not substituted for Agility.
- Stamina normalization must continue separating pursuit endurance, migration, environmental tolerance and dehydration resistance.
- Special must not double-count ordinary size, horns, toughness, cognition, flight or sociality.
- Image completion remains separate from text completion. Source verification alone does not increment the transparent-PNG count.
- Chameleon remains a specialization-vs-absolute-power calibration case: roughly 45 g, Special 88.0, Attack 12.0, Defense 8.0.
- Cheetah remains a speed-vs-agility case: directly measured wild maximum around 25.9 m/s supports Speed 98.0 and acceleration/braking evidence supports Agility 97.0 without leakage into Attack/Defense/Stamina.
- Chimpanzee remains a proportional-strength/cognition case: peer-reviewed muscle work supports about 1.35x human-sized dynamic force/power, not folklore-level super strength.
- Clouded Leopard remains a proportional-specialization case: a 22 kg male receives elite Agility 94.0 and Special 80.0 for arboreal mechanics and extreme canines, while Attack remains 49.0 and Defense 27.0 to preserve absolute size scaling.
- Cockatoo adds another force-vs-pressure and cognition-vs-physical-power control: peer-reviewed *C. galerita* bite force is retained as 167.3 ± 24.2 N rather than fabricated PSI, while 0.8 kg body mass keeps Attack 21.0 and Defense 13.0 despite Intelligence 94.0.
- Coconut Crab is a key proportional-strength control: direct pinch-force measurements reached 1,765.2 N and the published allometry predicts ~3,300 N at 4 kg, but the canonical 3 kg animal remains Attack 39.0 / Defense 28.0. The exceptional claw is represented mainly in Weaponry and Special rather than leaking into heavyweight whole-body power.

### Recent animal notes

- **Cape Buffalo:** *Syncerus caffer caffer*, mature bull 750 kg. Attack 76.0 / Defense 70.0 / Agility 55.0 / Stamina 73.0 / Intelligence 56.0 / Special 52.0.
- **Capuchin Monkey:** *Sapajus apella*, mature male 4.0 kg. Attack 23.0 / Defense 17.0 / Agility 84.0 / Stamina 56.0 / Intelligence 92.0 / Special 72.0.
- **Capybara:** *Hydrochoerus hydrochaeris*, dominant adult male 54.0 kg. Attack 31.0 / Defense 29.0 / Agility 65.0 / Stamina 52.0 / Intelligence 52.0 / Special 63.0.
- **Caracal:** *Caracal caracal*, mature male 17.0 kg. Attack 44.0 / Defense 25.0 / Agility 90.0 / Stamina 53.0 / Intelligence 60.0 / Special 61.0.
- **Cassowary:** *Casuarius casuarius*, mature female 65.0 kg. Attack 57.0 / Defense 39.0 / Agility 73.0 / Stamina 58.0 / Intelligence 49.0 / Special 60.0.
- **Chameleon:** *Chamaeleo chamaeleon*, mature non-gravid female about 45 g. Attack 12.0 / Defense 8.0 / Agility 65.0 / Stamina 31.0 / Intelligence 48.0 / Special 88.0.
- **Cheetah:** *Acinonyx jubatus*, mature male 46.0 kg. Attack 41.0 / Defense 24.0 / Agility 97.0 / Stamina 43.0 / Intelligence 62.0 / Special 76.0.
- **Chimpanzee:** *Pan troglodytes*, mature male 46.0 kg. Attack 46.0 / Defense 31.0 / Agility 83.0 / Stamina 57.0 / Intelligence 96.0 / Special 75.0.
- **Clouded Leopard:** *Neofelis nebulosa*, mature male 22.0 kg / 95.0 cm head-body / 35.0 cm shoulder. Attack 49.0 / Defense 27.0 / Agility 94.0 / Stamina 52.0 / Intelligence 64.0 / Special 80.0.
- **Cockatoo:** *Cacatua galerita*, healthy mature male, 0.8 kg / 50.0 cm length / 103.0 cm average wingspan. Attack 21.0 / Defense 13.0 / Agility 86.0 / Stamina 59.0 / Intelligence 94.0 / Special 76.0.
- **Coconut Crab:** *Birgus latro*, large mature male canonical 3.0 kg / 40.0 cm conventional body length / ~80 cm representative leg span. Attack 39.0 / Defense 28.0 / Agility 45.0 / Stamina 50.0 / Intelligence 43.0 / Special 78.0. Direct measured pinch force reaches 1,765.2 N in the PLOS sample; ~3,300 N at 4 kg is explicitly an extrapolation, not a direct measurement. Unsupported web speed claims rejected and bite PSI remains 0.0.

## 50-animal checkpoint

`audits/CHECKPOINT-050.md` reviewed stat inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak-source bite claims and duplicate ability concepts. No prior numerical file required forced correction at this checkpoint. Key watch areas remain upper-band megafauna anchors, cross-mode Stamina comparisons, Special double-counting and generic ability naming. The next scheduled recalibration checkpoint is at **75 completed research files**.

## Image pipeline status

51 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have verified full-body sources, while others remain pending, unsuitable or license-blocked. Current GitHub `create_file` / `update_file` actions accept UTF-8 text only, so no fake PNGs are created. `IMAGE_BACKFILL.md` is the canonical legacy-image audit record.
