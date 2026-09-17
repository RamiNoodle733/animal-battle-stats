# Image delivery audit and backfill queue

**Research reports completed:** 26 / 225 (through Black Mamba). **Full-body transparent PNG assets verified and committed in this staging image directory:** 0 / 26. A source-photo link is not an approved PNG.

`IMAGE_REQUIREMENTS.md` is mandatory. Visually inspect whole-body framing and exact taxon, replace inadequate photos, then produce a genuine alpha-transparent PNG with approved binary tools and inspect it before counting completion.

| Animal | Full-body source status | Transparent PNG committed | Action |
|---|---|---|---|
| African Elephant | **Verified replacement source:** 6000×4000 adult male *Loxodonta africana*, Charles J. Sharp, CC BY-SA 4.0; report updated | No | Binary cutout/commit pending |
| African Lion | **SOURCE FOUND - FULL-BODY NOT VERIFIED:** multiple strong adult-male candidates found, including 12000×8000 CC0 walking male; current report candidate is 2048×1366 standing side-view male | No | **Next legacy image audit: visually verify entire tail/head/all four feet before promotion** |
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
| Black Mamba | **Verified source:** 4320×2592 exact-species Bernard DUPONT photograph, CC BY-SA 2.0; complete coiled snake selected | No | Binary cutout/commit pending |

## Image count and acceptance rule

- `26` is a text-research count, not the number of valid images.
- `0` remains the verified image-binary count. Update it only after inspecting the committed binary and verifying complete anatomy plus genuine alpha transparency.
- A verified source URL is progress but does not count as a completed PNG.
- Connected GitHub `create_file`/`update_file` tools accept UTF-8 text, not PNG binary. Do not fake `.png` files.

## Findings and blockers

- **2026-09-17 African Elephant:** The old image record was replaced with Charles J. Sharp's 6000×4000 Kruger adult-male photograph, Wikimedia Quality Image, CC BY-SA 4.0. Status remains `FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING`.
- **2026-09-17 African Lion:** Legacy audit searched multiple exact-species adult-male photographs. The current report candidate is a 2048×1366 standing side-view male from Kenya (CC BY 3.0). A stronger 12000×8000 CC0 file titled `Male lion walking.jpg` was also located. Search metadata strongly supports full-body suitability, but this run did not obtain a reliable visual rendering proving the entire head, tail and all four feet are inside the frame. Per `IMAGE_REQUIREMENTS.md`, status is therefore kept honest as `SOURCE FOUND - FULL-BODY NOT VERIFIED` rather than falsely promoting it. Candidate: https://commons.wikimedia.org/wiki/File:Male_lion_walking.jpg
- **2026-09-17 Black Bear:** Exact-species 1944×1855 public-domain full-body photograph retained; sex unknown.
- **2026-09-17 Black Mamba:** New report selects Bernard DUPONT's 4320×2592 Kruger photograph, exact *Dendroaspis polylepis*, CC BY-SA 2.0, with the complete coiled snake selected for later isolation. Source: https://commons.wikimedia.org/wiki/File:Black_Mamba_(Dendroaspis_polylepis)_(6002570670).jpg
- **Binary blocker:** Current GitHub writer is text-only. A binary-capable Git client/codebot or image upload method is required to create/commit actual transparent PNG assets. No image is marked complete until that happens.
- **Next legacy audit:** African Lion remains next because the strict visual whole-body check is not yet satisfied.