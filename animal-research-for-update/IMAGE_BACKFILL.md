# Image delivery audit and backfill queue

**Research reports completed:** 25 / 225 (through Black Bear). **Full-body transparent PNG assets verified and committed in this staging image directory:** 0 / 25. A source-photo link is not an approved PNG.

`IMAGE_REQUIREMENTS.md` is mandatory. Visually inspect whole-body framing and exact taxon, replace inadequate photos, then produce a genuine alpha-transparent PNG with approved binary tools and inspect it before counting completion.

| Animal | Full-body source status | Transparent PNG committed | Action |
|---|---|---|---|
| African Elephant | **Verified replacement source:** 6000×4000 adult male *Loxodonta africana*, Charles J. Sharp, CC BY-SA 4.0; report updated | No | Binary cutout/commit pending |
| African Lion | Unverified | No | **Next legacy image audit** |
| African Wild Dog | Unverified | No | Audit full body, replace if needed |
| Albatross | Unverified | No | Audit full body including wings/feet |
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

## Image count and acceptance rule

- `25` is a text-research count, not the number of valid images.
- `0` remains the verified image-binary count. Update it only after inspecting the committed binary and verifying complete anatomy plus genuine alpha transparency.
- A verified source URL is progress but does not count as a completed PNG.
- Connected GitHub `create_file`/`update_file` tools accept UTF-8 text, not PNG binary. Do not fake `.png` files.

## Findings and blockers

- **2026-09-17 African Elephant:** The old image record was replaced with a stronger exact-species adult-male source: Charles J. Sharp's 6000×4000 Kruger photograph, assessed as a Wikimedia Quality Image and licensed CC BY-SA 4.0. Whole-body framing was visually selected for cutout suitability. Status is `FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING`. Source page: https://commons.wikimedia.org/wiki/File:African_bush_elephant_(Loxodonta_africana)_male_Kruger.jpg
- **2026-09-17 Black Bear:** New research report uses a 1944×1855 public-domain *Ursus americanus* photograph with complete body visible. Source does not document sex, so a verified adult male remains preferable, but this candidate is acceptable for later cutout if no better male source is found. Source page: https://commons.wikimedia.org/wiki/File:Ursus_americanus.jpg
- **Binary blocker:** Current GitHub writer is text-only. A binary-capable Git client/codebot or image upload method is required to create/commit actual transparent PNG assets. No image is marked complete until that happens.
- **Next legacy audit:** African Lion.