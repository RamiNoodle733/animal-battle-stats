# Image delivery audit and backfill queue

**Research reports completed:** 27 / 225 (through Black Panther). **Full-body transparent PNG assets verified and committed in this staging image directory:** 0 / 27. A source-photo link is not an approved PNG.

`IMAGE_REQUIREMENTS.md` is mandatory. Visually inspect whole-body framing and exact taxon, replace inadequate photos, then produce a genuine alpha-transparent PNG with approved binary tools and inspect it before counting completion.

| Animal | Full-body source status | Transparent PNG committed | Action |
|---|---|---|---|
| African Elephant | **Verified replacement source:** 6000×4000 adult male *Loxodonta africana*, Charles J. Sharp, CC BY-SA 4.0; report updated | No | Binary cutout/commit pending |
| African Lion | **SOURCE FOUND - FULL-BODY NOT VERIFIED:** 12000×8000 CC0 walking male was rechecked and Commons flags visible digital watermarking; current 2048×1366 standing male remains unverified for strict complete tail/all-four-feet framing | No | **Next legacy image audit: find a clean, unwatermarked, visibly complete adult male source** |
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
| Black Panther | **SOURCE FOUND - FULL-BODY NOT VERIFIED:** exact melanistic *Panthera pardus*, wild Nagarhole photograph, 2093×1407, CC BY-SA 4.0 | No | Strictly verify all paws and full tail or replace; then cutout/commit |

## Image count and acceptance rule

- `27` is a text-research count, not the number of valid images.
- `0` remains the verified image-binary count. Update it only after inspecting the committed binary and verifying complete anatomy plus genuine alpha transparency.
- A verified source URL is progress but does not count as a completed PNG.
- Connected GitHub `create_file`/`update_file` tools accept UTF-8 text, not PNG binary. Do not fake `.png` files.

## Findings and blockers

- **2026-09-17 African Elephant:** The old image record was replaced with Charles J. Sharp's 6000×4000 Kruger adult-male photograph, Wikimedia Quality Image, CC BY-SA 4.0. Status remains `FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING`.
- **2026-09-17 African Lion:** The 12000×8000 `Male lion walking.jpg` candidate was rechecked. Commons explicitly flags visible digital watermarking/credits in the image, so it cannot satisfy the staging rule even though it is CC0 and high resolution. Image search also surfaced several apparently complete adult males, but either they were commercial/stock sources, cropped in the rendered result, or their reusable Commons versions were not visually proven to contain the full tail plus all four feet. The existing 2048×1366 Kenya candidate therefore remains `SOURCE FOUND - FULL-BODY NOT VERIFIED`. This is not image completion.
- **2026-09-17 Black Bear:** Exact-species 1944×1855 public-domain full-body photograph retained; sex unknown.
- **2026-09-17 Black Mamba:** Bernard DUPONT's 4320×2592 Kruger photograph retained, exact *Dendroaspis polylepis*, CC BY-SA 2.0, complete coiled snake selected for later isolation.
- **2026-09-17 Black Panther:** Research report selects Wikimedia Commons `Black Panther - India.jpg`, a 2093×1407 CC BY-SA 4.0 wild melanistic *Panthera pardus* from Nagarhole. Exact phenotype/taxon and provenance are strong, but the run did not obtain a strict enough whole-frame inspection to certify every paw and complete tail, so status remains `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Binary blocker:** Current GitHub writer is text-only. A binary-capable Git client/codebot or image upload method is required to create/commit actual transparent PNG assets. No image is marked complete until that happens.
- **Next legacy audit:** African Lion remains next because a clean, reusable, strictly full-body adult-male source has not yet passed visual verification.