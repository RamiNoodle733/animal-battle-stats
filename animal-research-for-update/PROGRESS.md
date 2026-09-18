# 225-Animal Research Overhaul Progress

- **Target:** 225 animals
- **Completed research files:** 56 / 225
- **Verified full-body transparent PNGs committed:** 0 / 56
- **Research source list:** `../DATA_PROGRESS.md`
- **Output directory:** `animals/`
- **Status:** In progress
- **Most recently completed:** Crow
- **Next pending animal:** Cuttlefish
- **Latest completion:** 2026-09-18 12:58 America/Chicago
- **Latest new-animal image status:** Crow - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Exact *Corvus brachyrhynchos*, 5568x3712, CC BY 4.0. Exact taxon, resolution and reuse terms are strong, but the source does not explicitly establish adulthood/sex and strict all-toes/full-tail framing was not certified.
- **Latest legacy image audit:** Blue Whale - `SOURCE FOUND - FULL-BODY NOT VERIFIED`. `Bluewhale877.jpg` is exact *Balaenoptera musculus*, explicitly adult, 1792x1128 and public domain NOAA/NMFS material. Strict complete flipper/fluke silhouette could not be certified through the available render path, so it was not promoted from metadata alone.
- **Next legacy image audit:** Boa Constrictor.
- **Latest checkpoint:** `audits/CHECKPOINT-050.md`; next checkpoint at 75 completed research files.

## Selection rule

On each run, read `DATA_PROGRESS.md` for the canonical 225-animal roster and choose the first animal in that list without a completed staging research file. Old `DATA_PROGRESS.md` checkboxes do not count for this overhaul.

## Image rule

`IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Text-research completion and transparent-PNG completion are separate counts. A source URL is not a completed image. See `IMAGE_BACKFILL.md`.

## Active normalization / uncertainty notes

- Upper megafauna Attack/Defense anchors remain provisional until more rhinos, elephants, hippos and large bovids are complete.
- Unsupported bite-pressure values stay at 0.0 when only force, morphology or folklore values exist. Force is not converted to PSI without contact area.
- Maximum speed stays at 0.0 where no defensible species-specific measurement or strong agency/institutional value is available. Top speed is not substituted for Agility.
- Stamina normalization must continue separating pursuit endurance, migration, soaring-assisted travel, environmental tolerance, low routine metabolism and dehydration resistance.
- Special must not double-count ordinary size, horns, toughness, cognition, flight or sociality.
- Image completion remains separate from text completion. Source verification alone does not increment the transparent-PNG count.
- Chameleon remains a specialization-vs-absolute-power control: roughly 45 g, Special 88.0, Attack 12.0, Defense 8.0.
- Cheetah remains a speed-vs-agility control: directly measured wild maximum around 25.9 m/s supports Speed 98.0 and acceleration/braking evidence supports Agility 97.0 without leakage into Attack/Defense/Stamina.
- Chimpanzee remains a proportional-strength/cognition control: peer-reviewed muscle work supports about 1.35x human-sized dynamic force/power, not folklore-level super strength.
- Clouded Leopard remains a proportional-specialization control: a 22 kg male receives elite Agility 94.0 and Special 80.0 for arboreal mechanics and extreme canines, while Attack remains 49.0 and Defense 27.0.
- Cockatoo remains a force-vs-pressure and cognition-vs-physical-power control: peer-reviewed *C. galerita* bite force is retained in newtons rather than fabricated PSI, while 0.8 kg body mass keeps physical combat ratings low.
- Coconut Crab remains a proportional-strength control: direct pinch-force measurements reached 1,765.2 N and published allometry predicts ~3,300 N at 4 kg, but canonical 3 kg animal remains Attack 39.0 / Defense 28.0.
- Colossal Squid remains a size-vs-armor and low-metabolism-vs-stamina control: canonical 470 kg supports Attack 67.0 but soft tissue keeps Defense 43.0; giant eyes support Senses/Special, not Intelligence.
- Condor remains a travel-endurance-vs-powered-stamina and size-vs-weaponry control: soaring-assisted distance does not become continuous muscular output, and lack of raptorial talons constrains Attack.
- Cougar remains a mass-vs-specialization and speed-vs-agility control: canonical 70 kg adult male is Attack 55.0 / Defense 34.0 / Agility 92.0.
- Coyote remains a generalist-success-vs-combat-power control: canonical 15 kg adult male is Attack 38.0 / Defense 25.0 / Agility 82.0 / Stamina 74.0 / Intelligence 76.0 / Special 61.0.
- **Crow is a cognition-vs-physical-power control:** canonical 0.5 kg adult male is Attack 14.0 / Defense 9.0 / Agility 82.0 / Stamina 68.0 / Intelligence 96.0 / Special 67.0. Species-specific face recognition, social learning and mobbing evidence supports elite cognition without leaking into raw force or protection.

### Recent animal notes

- **Caracal:** *Caracal caracal*, mature male 17.0 kg. Attack 44.0 / Defense 25.0 / Agility 90.0 / Stamina 53.0 / Intelligence 60.0 / Special 61.0.
- **Cassowary:** *Casuarius casuarius*, mature female 65.0 kg. Attack 57.0 / Defense 39.0 / Agility 73.0 / Stamina 58.0 / Intelligence 49.0 / Special 60.0.
- **Chameleon:** *Chamaeleo chamaeleon*, mature non-gravid female about 45 g. Attack 12.0 / Defense 8.0 / Agility 65.0 / Stamina 31.0 / Intelligence 48.0 / Special 88.0.
- **Cheetah:** *Acinonyx jubatus*, mature male 46.0 kg. Attack 41.0 / Defense 24.0 / Agility 97.0 / Stamina 43.0 / Intelligence 62.0 / Special 76.0.
- **Chimpanzee:** *Pan troglodytes*, mature male 46.0 kg. Attack 46.0 / Defense 31.0 / Agility 83.0 / Stamina 57.0 / Intelligence 96.0 / Special 75.0.
- **Clouded Leopard:** *Neofelis nebulosa*, mature male 22.0 kg. Attack 49.0 / Defense 27.0 / Agility 94.0 / Stamina 52.0 / Intelligence 64.0 / Special 80.0.
- **Cockatoo:** *Cacatua galerita*, mature male 0.8 kg. Attack 21.0 / Defense 13.0 / Agility 86.0 / Stamina 59.0 / Intelligence 94.0 / Special 76.0.
- **Coconut Crab:** *Birgus latro*, large mature male 3.0 kg. Attack 39.0 / Defense 28.0 / Agility 45.0 / Stamina 50.0 / Intelligence 43.0 / Special 78.0.
- **Colossal Squid:** *Mesonychoteuthis hamiltoni*, mature adult-scale female canonical 470.0 kg. Attack 67.0 / Defense 43.0 / Agility 55.0 / Stamina 48.0 / Intelligence 52.0 / Special 88.0.
- **Condor:** *Gymnogyps californianus*, mature male 10.0 kg. Attack 34.0 / Defense 22.0 / Agility 70.0 / Stamina 82.0 / Intelligence 69.0 / Special 74.0.
- **Cougar:** *Puma concolor*, mature male 70.0 kg. Attack 55.0 / Defense 34.0 / Agility 92.0 / Stamina 58.0 / Intelligence 68.0 / Special 67.0.
- **Coyote:** *Canis latrans*, mature male 15.0 kg. Attack 38.0 / Defense 25.0 / Agility 82.0 / Stamina 74.0 / Intelligence 76.0 / Special 61.0.
- **Crow:** *Corvus brachyrhynchos*, mature male canonical 0.5 kg, 48.0 cm length, 95.0 cm wingspan. Attack 14.0 / Defense 9.0 / Agility 82.0 / Stamina 68.0 / Intelligence 96.0 / Special 67.0. `speed_mps`, `lifespan_years`, and `bite_force_psi` remain 0.0 because this run did not find defensible representative values for those exact schema semantics; the USGS 18 y 4 mo record is preserved separately as maximum verified longevity.

## 50-animal checkpoint

`audits/CHECKPOINT-050.md` reviewed stat inflation, inverted comparisons, compression, proportional-strength leakage, speed/agility confusion, double-counting, weak-source bite claims and duplicate ability concepts. No prior numerical file required forced correction at that checkpoint. The next scheduled recalibration checkpoint is at **75 completed research files**.

## Image pipeline status

56 research reports are complete, but **0 verified transparent PNG binaries are committed**. Several animals have verified full-body sources, while others remain pending, unsuitable or license-blocked. Current GitHub `create_file` / `update_file` actions accept UTF-8 text only, so no fake PNGs are created. `IMAGE_BACKFILL.md` is the canonical legacy-image audit record.
