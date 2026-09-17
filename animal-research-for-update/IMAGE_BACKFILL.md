# Image delivery audit and backfill queue

**Research reports completed:** 33 / 225 (through Bongo). **Full-body transparent PNG assets verified and committed in this staging image directory:** 0 / 33. A source-photo link is not an approved PNG.

`IMAGE_REQUIREMENTS.md` is mandatory. Visually inspect whole-body framing and exact taxon, replace inadequate photos, then produce a genuine alpha-transparent PNG with approved binary tools and inspect it before counting completion.

| Animal | Full-body source status | Transparent PNG committed | Action |
|---|---|---|---|
| African Elephant | **Verified replacement source:** 6000×4000 adult male *Loxodonta africana*, Charles J. Sharp, CC BY-SA 4.0 | No | Binary cutout/commit pending |
| African Lion | **Verified replacement source:** 5356×3367 adult male *Panthera leo melanochaita*, Bernard DUPONT, CC BY-SA 2.0; complete side-view body including paws and tail visible | No | Binary cutout/commit pending |
| African Wild Dog | **Verified replacement/source:** 3002×2001 adult male *Lycaon pictus*, Charles J. Sharp, CC BY-SA 3.0; walking side view | No | Binary cutout/commit pending |
| Albatross | **Full-body framing verified, but candidate is LICENSE UNVERIFIED - DO NOT COMMIT:** exact *Diomedea exulans* Mats Hildeman flight photograph, 2025 | No | Find a reuse-permitted equivalent before binary cutout |
| Alligator | **Verified source:** 3504×2336 large *Alligator mississippiensis*, Steve Hillebrand/USFWS, public domain; complete snout-to-tail body and four limbs visible | No | Binary cutout/commit pending |
| Alpaca | **SOURCE FOUND - FULL-BODY NOT VERIFIED:** exact *Vicugna pacos*, 4288×3216, Peter O'Connor, CC BY-SA 2.0 | No | Strictly verify complete ears, four feet, tail, adulthood and preferably male sex; replace if any clipping is present |
| Anaconda | Unverified | No | Audit entire head-to-tail snake after Alpaca resolves |
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
| Black Panther | **SOURCE FOUND - FULL-BODY NOT VERIFIED:** exact melanistic *Panthera pardus*, 2093×1407, CC BY-SA 4.0 | No | Strictly verify all paws and full tail or replace |
| Black Rhinoceros | **Verified source:** 3456×2168 adult male *Diceros bicornis*, Jonathunder, GFDL 1.2 only; full body visible | No | Binary cutout/commit pending |
| Black Widow | **SOURCE FOUND - FULL-BODY NOT VERIFIED:** female *Latrodectus hesperus*, 1500×1061, CC BY 2.0 | No | Prefer larger adult-female source and verify all 8 legs |
| Blue Whale | **SOURCE FOUND - FULL-BODY NOT VERIFIED:** NOAA adult *Balaenoptera musculus*, 1792×1128, public domain | No | Verify complete silhouette and fins |
| Boa Constrictor | **SOURCE FOUND - FULL-BODY NOT VERIFIED:** exact *Boa constrictor*, Singapore Zoo, 2048×1536, CC BY-SA 2.0 Germany | No | Verify complete head-to-tail coil and adulthood |
| Bobcat | **Verified source:** 1600×1160 wild adult male *Lynx rufus*, Jean-Lou Justine, CC BY-SA 3.0; complete side-view body, four paws and short tail visible | No | Binary cutout/commit pending |
| Bongo | **SOURCE FOUND - FULL-BODY NOT VERIFIED:** exact male *Tragelaphus eurycerus*, Joe Schneid, 2848×4288, CC BY-SA 3.0, Commons Quality Image | No | Strictly verify every hoof and full tail before cutout |

## Image count and acceptance rule

- `33` is a text-research count, not the number of valid images.
- `0` remains the verified image-binary count. Update it only after inspecting the committed binary and verifying complete anatomy plus genuine alpha transparency.
- A verified source URL is progress but does not count as a completed PNG.
- Connected GitHub `create_file`/`update_file` tools accept UTF-8 text, not PNG binary. Do not fake `.png` files.

## Findings and blockers

- **2026-09-17 African Elephant:** 6000×4000 adult-male Charles J. Sharp source retained; cutout pending.
- **2026-09-17 African Lion:** 5356×3367 adult-male Bernard DUPONT source retained; cutout pending.
- **2026-09-17 African Wild Dog:** 3002×2001 adult-male Charles J. Sharp source retained; cutout pending.
- **2026-09-17 Albatross:** WikiAves candidate visibly satisfies framing but reproduction requires permission; do not commit.
- **2026-09-17 Alligator:** 3504×2336 Steve Hillebrand/USFWS public-domain source verified full-body; cutout pending.
- **2026-09-17 Alpaca:** New exact-species Commons candidate located at https://commons.wikimedia.org/wiki/File:Alpaca_(Vicugna_pacos)_(8121536510).jpg . Commons verifies a 4288×3216 JPEG by Peter O'Connor under CC BY-SA 2.0 and identifies *Vicugna pacos*. Strict whole-body/adult-male suitability was not established strongly enough from available rendering, so status remains `SOURCE FOUND - FULL-BODY NOT VERIFIED`; no binary was redistributed.
- **2026-09-17 Black Bear:** exact-species public-domain full-body source retained.
- **2026-09-17 Black Mamba:** 4320×2592 exact-species complete-coil source retained.
- **2026-09-17 Black Panther:** exact melanistic leopard candidate remains not strictly verified.
- **2026-09-17 Black Rhinoceros:** adult-male full-body source retained; cutout pending.
- **2026-09-17 Black Widow:** candidate remains below preferred resolution and not strict eight-leg verified.
- **2026-09-17 Blue Whale:** NOAA public-domain source remains strict whole-body-not-verified.
- **2026-09-17 Boa Constrictor:** 2048×1536 Commons exact-species photograph remains strict full head-to-tail/adulthood unverified.
- **2026-09-17 Bobcat:** 1600×1160 Jean-Lou Justine wild male source verified complete; cutout pending.
- **2026-09-17 Bongo:** Joe Schneid Commons Quality Image is 2848×4288, exact *Tragelaphus eurycerus*, explicitly male and CC BY-SA 3.0. Strict all-hoof/full-tail framing is not yet verified, so it remains a candidate rather than an approved full-body source.
- **Binary blocker:** Current GitHub writer is text-only. A binary-capable Git client/codebot or image upload method is required to create/commit actual transparent PNG assets. No image is marked complete until the committed PNG exists and passes alpha plus silhouette inspection.
- **Next legacy audit:** Alpaca remains the oldest unresolved image. Do not advance to Anaconda until Alpaca is either strictly verified or replaced with a suitable full-body source.