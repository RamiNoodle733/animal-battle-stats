# Image delivery audit and backfill queue

**Research reports completed:** 30 / 225 (through Blue Whale). **Full-body transparent PNG assets verified and committed in this staging image directory:** 0 / 30. A source-photo link is not an approved PNG.

`IMAGE_REQUIREMENTS.md` is mandatory. Visually inspect whole-body framing and exact taxon, replace inadequate photos, then produce a genuine alpha-transparent PNG with approved binary tools and inspect it before counting completion.

| Animal | Full-body source status | Transparent PNG committed | Action |
|---|---|---|---|
| African Elephant | **Verified replacement source:** 6000×4000 adult male *Loxodonta africana*, Charles J. Sharp, CC BY-SA 4.0 | No | Binary cutout/commit pending |
| African Lion | **Verified replacement source:** 5356×3367 adult male *Panthera leo melanochaita*, Bernard DUPONT, CC BY-SA 2.0; complete side-view body including paws and tail visible | No | Binary cutout/commit pending |
| African Wild Dog | **Verified replacement/source:** 3002×2001 adult male *Lycaon pictus*, Charles J. Sharp, CC BY-SA 3.0; walking side view, exact species and male explicitly categorized | No | Binary cutout/commit pending |
| Albatross | **SOURCE FOUND - FULL-BODY NOT VERIFIED:** exact *Diomedea exulans*, Antoine Lamielle, Crozet Islands, 5568×3132, CC BY-SA 4.0 | No | Strictly verify both complete wing tips, tail and feet; separate Crozet 03 candidate rejected because left wing tip is clipped |
| Alligator | Unverified | No | Audit complete snout/tail/feet |
| Alpaca | Unverified | No | Audit legs/feet and ears |
| Anaconda | Unverified | No | Audit entire head-to-tail snake |
| Anglerfish | Unverified | No | Audit entire fish, fins and lure |
| Anteater | Unverified | No | Audit entire snout/tail/feet |
| Arctic Fox | Unverified | No | Audit tail and paws |
| Arctic Wolf | Unverified | No | Audit paws/tail |
| Armadillo | Unverified | No | Audit entire tail/feet |
| Army Ant | Unverified | No | Audit entire single soldier, all legs/antennae |
| Axolotl | Unverified | No | Audit head, tail, limbs/gills |
| Baboon | Unverified | No | Audit full body, tail, hands/feet |
| Bactrian Camel | Unverified | No | Audit all four feet and full head/humps |
| Badger | Unverified | No | Audit full body/paws/tail |
| Bald Eagle | Unverified | No | Audit wings/talons/tail |
| Barn Owl | Unverified | No | Audit wings/talons/tail |
| Barracuda | Unverified | No | Audit whole head/fins/tail |
| Beaver | Unverified | No | Audit complete tail/paws |
| Beluga Whale | Unverified | No | Audit whole whale and flukes |
| Bighorn Sheep | Unverified | No | Audit ram horns/legs/feet |
| Bison | Unverified | No | Audit bull head/tail/all four legs |
| Black Bear | **Verified source:** 1944×1855 exact-species public-domain full-body photograph; sex unknown | No | Binary cutout/commit pending; verified male source preferred later |
| Black Mamba | **Verified source:** 4320×2592 exact-species Bernard DUPONT photograph, CC BY-SA 2.0; complete coiled snake | No | Binary cutout/commit pending |
| Black Panther | **SOURCE FOUND - FULL-BODY NOT VERIFIED:** exact melanistic *Panthera pardus*, wild Nagarhole photograph, 2093×1407, CC BY-SA 4.0 | No | Strictly verify all paws and full tail or replace; then cutout/commit |
| Black Rhinoceros | **Verified source:** 3456×2168 adult male *Diceros bicornis*, Jonathunder, GFDL 1.2 only; full head/horns, torso, four feet and tail visible | No | Binary cutout/commit pending |
| Black Widow | **SOURCE FOUND - FULL-BODY NOT VERIFIED:** female *Latrodectus hesperus*, Marshal Hedin, 1500×1061, CC BY 2.0 | No | Prefer larger adult-female source and strictly verify all 8 legs before cutout |
| Blue Whale | **SOURCE FOUND - FULL-BODY NOT VERIFIED:** NOAA adult *Balaenoptera musculus*, 1792×1128, public domain | No | Strictly verify complete head-to-fluke silhouette and fins; then cutout/commit |

## Image count and acceptance rule

- `30` is a text-research count, not the number of valid images.
- `0` remains the verified image-binary count. Update it only after inspecting the committed binary and verifying complete anatomy plus genuine alpha transparency.
- A verified source URL is progress but does not count as a completed PNG.
- Connected GitHub `create_file`/`update_file` tools accept UTF-8 text, not PNG binary. Do not fake `.png` files.

## Findings and blockers

- **2026-09-17 African Elephant:** Source upgraded to Charles J. Sharp's 6000×4000 Kruger adult-male photograph, Wikimedia Quality Image, CC BY-SA 4.0. Status `FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING`.
- **2026-09-17 African Lion:** Bernard DUPONT 5356×3367 adult-male Kruger side view, CC BY-SA 2.0, complete paws and tail. Status `FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING`.
- **2026-09-17 African Wild Dog:** Charles J. Sharp's 3002×2001 wild adult male *Lycaon pictus*, Okavango Delta, CC BY-SA 3.0, retained as verified full-body source; cutout pending.
- **2026-09-17 Albatross:** Legacy audit searched the Commons *Diomedea exulans* collection and broader web imagery. A clearly rendered 5054×2843 Crozet flight photograph (`2020-11 Crozet Islands - Wandering albatross 03.jpg`) was rejected because the left wing tip is visibly clipped. Antoine Lamielle's separate `2020-11 Crozet Islands - Wandering albatross 07.jpg` is exact species, 5568×3132, own work, CC BY-SA 4.0, and a strong high-resolution candidate, but this run could not strictly establish complete wing-tip/feet framing from the available rendering. It therefore remains `SOURCE FOUND - FULL-BODY NOT VERIFIED`, not falsely approved. Source page: https://commons.wikimedia.org/wiki/File:2020-11_Crozet_Islands_-_Wandering_albatross_07.jpg ; original: https://upload.wikimedia.org/wikipedia/commons/b/b6/2020-11_Crozet_Islands_-_Wandering_albatross_07.jpg .
- **2026-09-17 Black Bear:** Exact-species 1944×1855 public-domain full-body photograph retained; sex unknown.
- **2026-09-17 Black Mamba:** Bernard DUPONT 4320×2592 Kruger photograph retained, exact *Dendroaspis polylepis*, CC BY-SA 2.0, complete coiled snake.
- **2026-09-17 Black Panther:** Exact wild melanistic *Panthera pardus* 2093×1407 CC BY-SA 4.0 candidate remains not strictly whole-body verified.
- **2026-09-17 Black Rhinoceros:** 3456×2168 adult male *Diceros bicornis*, full-body source, GFDL 1.2 only; cutout pending.
- **2026-09-17 Black Widow:** Marshal Hedin's 1500×1061 female *L. hesperus* CC BY 2.0 candidate remains slightly below preferred resolution and not strict eight-leg verified.
- **2026-09-17 Blue Whale:** New report records NOAA's public-domain 1792×1128 adult eastern-Pacific *Balaenoptera musculus* photograph (`Bluewhale877.jpg`). Exact species, adult status, dimensions and provenance are verified, but strict complete head-to-fluke and fin framing remains pending before cutout. Source page: https://commons.wikimedia.org/wiki/File:Bluewhale877.jpg .
- **Binary blocker:** Current GitHub writer is text-only. A binary-capable Git client/codebot or image upload method is required to create/commit actual transparent PNG assets. No image is marked complete until the committed PNG exists and passes alpha plus silhouette inspection.
- **Next legacy audit:** Albatross remains first because no candidate has yet passed the strict complete-body visual test.