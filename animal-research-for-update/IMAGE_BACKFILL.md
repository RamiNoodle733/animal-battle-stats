# Image delivery audit and backfill queue

**Research reports completed:** 29 / 225 (through Black Widow). **Full-body transparent PNG assets verified and committed in this staging image directory:** 0 / 29. A source-photo link is not an approved PNG.

`IMAGE_REQUIREMENTS.md` is mandatory. Visually inspect whole-body framing and exact taxon, replace inadequate photos, then produce a genuine alpha-transparent PNG with approved binary tools and inspect it before counting completion.

| Animal | Full-body source status | Transparent PNG committed | Action |
|---|---|---|---|
| African Elephant | **Verified replacement source:** 6000×4000 adult male *Loxodonta africana*, Charles J. Sharp, CC BY-SA 4.0 | No | Binary cutout/commit pending |
| African Lion | **Verified replacement source:** 5356×3367 adult male *Panthera leo melanochaita*, Bernard DUPONT, CC BY-SA 2.0; complete side-view body including paws and tail visible | No | Binary cutout/commit pending |
| African Wild Dog | **Verified replacement/source:** 3002×2001 adult male *Lycaon pictus*, Charles J. Sharp, CC BY-SA 3.0; walking side view, exact species and male explicitly categorized | No | Binary cutout/commit pending |
| Albatross | Unverified | No | **Next legacy image audit: audit full body including wings/feet** |
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

## Image count and acceptance rule

- `29` is a text-research count, not the number of valid images.
- `0` remains the verified image-binary count. Update it only after inspecting the committed binary and verifying complete anatomy plus genuine alpha transparency.
- A verified source URL is progress but does not count as a completed PNG.
- Connected GitHub `create_file`/`update_file` tools accept UTF-8 text, not PNG binary. Do not fake `.png` files.

## Findings and blockers

- **2026-09-17 African Elephant:** Source upgraded to Charles J. Sharp's 6000×4000 Kruger adult-male photograph, Wikimedia Quality Image, CC BY-SA 4.0. Status `FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING`.
- **2026-09-17 African Lion:** Bernard DUPONT 5356×3367 adult-male Kruger side view, CC BY-SA 2.0, complete paws and tail. Status `FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING`.
- **2026-09-17 African Wild Dog:** Legacy source audited. Charles J. Sharp's `African wild dog lycaon pictus.jpg` is a 3002×2001 real wild *Lycaon pictus* photographed in Botswana's Okavango Delta. Commons explicitly categorizes it as `Lycaon pictus (male)`, `Walking Lycaon pictus`, and `Side views of Lycaon pictus`; source is own work and CC BY-SA 3.0. The source is retained/upgraded to verified full-body-source status for staging, with binary cutout pending. Source page: https://commons.wikimedia.org/wiki/File:African_wild_dog_lycaon_pictus.jpg ; original: https://upload.wikimedia.org/wikipedia/commons/7/7d/African_wild_dog_lycaon_pictus.jpg .
- **2026-09-17 Black Bear:** Exact-species 1944×1855 public-domain full-body photograph retained; sex unknown.
- **2026-09-17 Black Mamba:** Bernard DUPONT 4320×2592 Kruger photograph retained, exact *Dendroaspis polylepis*, CC BY-SA 2.0, complete coiled snake.
- **2026-09-17 Black Panther:** Exact wild melanistic *Panthera pardus* 2093×1407 CC BY-SA 4.0 candidate remains not strictly whole-body verified.
- **2026-09-17 Black Rhinoceros:** 3456×2168 adult male *Diceros bicornis*, full-body source, GFDL 1.2 only; cutout pending.
- **2026-09-17 Black Widow:** New report uses Marshal Hedin's 1500×1061 female *L. hesperus* CC BY 2.0 photograph as a candidate. It is slightly below the preferred 1600-pixel target and is conservatively marked full-body-not-verified; seek a larger adult-female image with all eight legs unmistakably in frame.
- **Binary blocker:** Current GitHub writer is text-only. A binary-capable Git client/codebot or image upload method is required to create/commit actual transparent PNG assets. No image is marked complete until the committed PNG exists and passes alpha plus silhouette inspection.
- **Next legacy audit:** Albatross.