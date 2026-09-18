# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 52 / 225
- **Verified full-body transparent PNGs committed:** 0 / 52
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Colossal Squid
- **Next pending animal:** Condor
- **Latest completion:** 2026-09-18 09:02 America/Chicago
- **Latest new-animal image status:** Colossal Squid - `REPLACEMENT SOURCE NEEDED`. Exact adult-scale female specimens are documented and photographed by Te Papa, but available images depict dying/dead/preserved animals and therefore fail the mandatory healthy-adult standard. The first confirmed live wild footage announced in 2025 is a juvenile about 30 cm long. No compliant healthy adult source was found this run.
- **Latest legacy image audit:** Bison - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Exact *Bison bison* bull, Yellowstone, 2816x2120, public domain. Commons metadata explicitly establishes bull and exact species, but the original-image fetch timed out, so all four hooves plus tail were not visually certified and the candidate was not promoted.
- **Next legacy image audit:** Advance past already source-verified Black Bear and Black Mamba unless binary tooling becomes available; otherwise address the next oldest unresolved/non-verified entry in `IMAGE_BACKFILL.md`.
- **Latest checkpoint:** `audits/CHECKPOINT-050.md`; next checkpoint at 75 completed research files.

## Selection rule

On each run, read `DATA_PROGRESS.md` for the canonical 225-animal roster and choose the first animal in that list without a completed staging research file. Old `DATA_PROGRESS.md` checkboxes do not count for this overhaul.

## Image rule

`IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Text-research completion and transparent-PNG completion are separate counts. A source URL is not a completed image. See `IMAGE_BACKFILL.md`.

## Active normalization / uncertainty notes

- Upper megafauna Attack/Defense anchors remain provisional until more rhinos, elephants, hippos and large bovids are complete.
- Unsupported bite-pressure values stay at 0.0 when only force, morphology or folklore values exist. Force is not converted to PSI without contact area.
- Maximum speed stays at 0.0 where no defensible species-specific measurement or strong agency/institutional value is available. Top speed is not substituted for Agility.
- Stamina normalization must continue separating pursuit endurance, migration, environmental tolerance, low routine metabolism and dehydration resistance.
- Special must not double-count ordinary size, horns, toughness, cognition, flight or sociality.
- Image completion remains separate from text completion. Source verification alone does not increment the transparent-PNG count.
- Chameleon remains a specialization-vs-absolute-power control: roughly 45 g, Special 88.0, Attack 12.0, Defense 8.0.
- Cheetah remains a speed-vs-agility control: directly measured wild maximum around 25.9 m/s supports Speed 98.0 and acceleration/braking evidence supports Agility 97.0 without leakage into Attack/Defense/Stamina.
- Chimpanzee remains a proportional-strength/cognition control: peer-reviewed muscle work supports about 1.35x human-sized dynamic force/power, not folklore-level super strength.
- Clouded Leopard remains a proportional-specialization control: a 22 kg male receives elite Agility 94.0 and Special 80.0 for arboreal mechanics and extreme canines, while Attack remains 49.0 and Defense 27.0.
- Cockatoo remains a force-vs-pressure and cognition-vs-physical-power control: peer-reviewed *C. galerita* bite force is retained in newtons rather than fabricated PSI, while 0.8 kg body mass keeps physical combat ratings low.
- Coconut Crab remains a proportional-strength control: direct pinch-force measurements reached 1,765.2 N and the published allometry predicts ~3,300 N at 4 kg, but the canonical 3 kg animal remains Attack 39.0 / Defense 28.0.
- **Colossal Squid is a size-vs-armor and low-metabolism-vs-stamina control:** canonical corrected mass 470.0 kg and hooked capture anatomy support Attack 67.0, but soft unarmored tissue keeps Defense 43.0. Peer-reviewed low routine metabolism supports an ambush strategy and must not be misread as elite combat Stamina. Giant 27-28 cm eyes support Senses/Special, not Intelligence.

### Recent animal notes

- **Cape Buffalo:** *Syncerus caffer caffer*, mature bull 750 kg. Attack 76.0 / Defense 70.0 / Agility 55.0 / Stamina 73.0 / Intelligence 56.0 / Special 52.0.
- **Capuchin Monkey:** *Sapajus apella*, mature male 4.0 kg. Attack 23.0 / Defense 17.0 / Agility 84.0 / Stamina 56.0 / Intelligence 92.0 / Special 72.0.
- **Capybara:** *Hydrochoerus hydrochaeris*, dominant adult male 54.0 kg. Attack 31.0 / Defense 29.0 / Agility 65.0 / Stamina 52.0 / Intelligence 52.0 / Special 63.0.
- **Caracal:** *Caracal caracal*, mature male 17.0 kg. Attack 44.0 / Defense 25.0 / Agility 90.0 / Stamina 53.0 / Intelligence 60.0 / Special 61.0.
- **Cassowary:** *Casuarius casuarius*, mature female 65.0 kg. Attack 57.0 / Defense 39.0 / Agility 73.0 / Stamina 58.0 / Intelligence 49.0 / Special 60.0.
- **Chameleon:** *Chamaeleo chamaeleon*, mature non-gravid female about 45 g. Attack 12.0 / Defense 8.0 / Agility 65.0 / Stamina 31.0 / Intelligence 48.0 / Special 88.0.
- **Cheetah:** *Acinonyx jubatus*, mature male 46.0 kg. Attack 41.0 / Defense 24.0 / Agility 97.0 / Stamina 43.0 / Intelligence 62.0 / Special 76.0.
- **Chimpanzee:** *Pan troglodytes*, mature male 46.0 kg. Attack 46.0 / Defense 31.0 / Agility 83.0 / Stamina 57.0 / Intelligence 96.0 / Special 75.0.
- **Clouded Leopard:** *Neofelis nebulosa*, mature male 22.0 kg. Attack 49.0 / Defense 27.0 / Agility 94.0 / Stamina 52.0 / Intelligence 64.0 / Special 80.0.
- **Cockatoo:** *Cacatua galerita*, mature male 0.8 kg. Attack 21.0 / Defense 13.0 / Agility 86.0 / Stamina 59.0 / Intelligence 94.0 / Special 76.0.
- **Coconut Crab:** *Birgus latro*, large mature male 3.0 kg. Attack 39.0 / Defense 28.0 / Agility 45.0 / Stamina 50.0 / Intelligence 43.0 / Special 78.0.
- **Colossal Squid:** *Mesonychoteuthis hamiltoni*, mature adult-scale female canonical 470.0 kg / 420.0 cm measured preserved total length / 250.0 cm mantle. Attack 67.0 / Defense 43.0 / Agility 55.0 / Stamina 48.0 / Intelligence 52.0 / Special 88.0. `speed_mps` and `bite_force_psi` remain 0.0 because no defensible species-specific maximum speed or bite pressure exists. Lifespan 5.2 years is explicitly low-confidence pending validation of beak-increment periodicity.

## 50-animal checkpoint

`audits/CHECKPOINT-050.md` reviewed stat inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak-source bite claims and duplicate ability concepts. No prior numerical file required forced correction at that checkpoint. Key watch areas remain upper-band megafauna anchors, cross-mode Stamina comparisons, Special double-counting and generic ability naming. The next scheduled recalibration checkpoint is at **75 completed research files**.

## Image pipeline status

52 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have verified full-body sources, while others remain pending, unsuitable or license-blocked. Current GitHub `create_file` / `update_file` actions accept UTF-8 text only, so no fake PNGs are created. `IMAGE_BACKFILL.md` is the canonical legacy-image audit record.
