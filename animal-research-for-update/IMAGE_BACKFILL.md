# Image delivery audit and backfill queue

**Research reports completed when this audit opened:** 24 / 225 (through Bison). **Full-body transparent PNG assets verified and committed in this staging image directory:** 0 / 24. The previous reports generally have source-photo links, not actual transparent cutouts. Do not confuse an image-source link with an approved image. This audit does not invalidate finished biological research.

`IMAGE_REQUIREMENTS.md` is mandatory. For every entry below, visually inspect full-body framing and exact taxon, replace inadequate photos, produce a genuine alpha-transparent PNG using approved tools, inspect, and commit the binary to `images/<slug>.png` when the tool supports binary writes and reuse permissions are sufficient. Source metadata and proof of the checks belong in the original animal report. Until that happens, the asset is **not complete**.

| Animal | Original photo candidate | Full-body suitability | Transparent PNG committed | Action |
|---|---|---|---|---|
| African Elephant | In report | Unverified | No | Audit full body, replace if needed, cut out and commit |
| African Lion | In report | Unverified | No | Audit full body, replace if needed, cut out and commit |
| African Wild Dog | In report | Unverified | No | Audit full body, replace if needed, cut out and commit |
| Albatross | In report | Unverified | No | Audit full body including wings/feet, cut out and commit |
| Alligator | In report | Unverified | No | Audit complete snout/tail/feet, cut out and commit |
| Alpaca | In report | Unverified | No | Audit legs/feet and ears, cut out and commit |
| Anaconda | In report | Unverified | No | Audit entire head-to-tail snake, cut out and commit |
| Anglerfish | In report | Unverified | No | Audit entire fish, fins and lure, cut out and commit |
| Anteater | In report | Unverified | No | Audit entire snout/tail/feet, cut out and commit |
| Arctic Fox | In report | Unverified | No | Audit tail and paws, cut out and commit |
| Arctic Wolf | In report | Unverified | No | Audit paws/tail, cut out and commit |
| Armadillo | In report | Unverified | No | Audit entire tail/feet, cut out and commit |
| Army Ant | In report | Unverified | No | Audit entire single soldier, all six legs/antennae, cut out and commit |
| Axolotl | In report | Unverified | No | Audit head, tail, limbs/gills, cut out and commit |
| Baboon | In report | Unverified | No | Audit full body, tail, hands/feet, cut out and commit |
| Bactrian Camel | In report | Unverified | No | Audit all four feet and full head/humps, cut out and commit |
| Badger | In report | Unverified | No | Audit full body/paws/tail, cut out and commit |
| Bald Eagle | In report | Unverified | No | Audit wings/talons/tail, cut out and commit |
| Barn Owl | In report | Unverified | No | Audit wings/talons/tail, cut out and commit |
| Barracuda | In report | Unverified | No | Audit whole head/fins/tail, cut out and commit |
| Beaver | In report | Unverified | No | Audit complete tail/paws, cut out and commit |
| Beluga Whale | In report | Unverified | No | Audit whole whale and flukes, cut out and commit |
| Bighorn Sheep | In report | Unverified | No | Audit ram horns/legs/feet, cut out and commit |
| Bison | In report | Unverified | No | Audit bull head/tail/all four legs, cut out and commit |

## Image count and acceptance rule

- `24` is a text-research count, **not** the number of valid images.
- `0` is the verified image-binary count at opening. Update it only after inspecting the committed binary file and verifying full-body framing and genuine alpha transparency.
- If a candidate is cropped, change its report's primary image to a fully framed photo, adding source-page and direct-file links. A new photo URL is an improvement but still does **not** count as a complete PNG.
- When the connected GitHub writer cannot upload binary files, explicitly leave `FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING` or `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Do not label a source as complete, create a fake `.png`, or claim that image backfill is finished.
- The hourly research automation should backfill at least one oldest unverified existing image *when practical* alongside its normal one-animal research. If image acquisition/processing is unavailable, record the concrete blocker and continue. Later production/codebot work can bulk-process the full backlog using binary-capable tooling.

## Findings and blockers

- 2026-09-17: Existing research reports were counted as complete despite all staged transparent PNG files still pending; the old quality standard allowed close-ups or incomplete body framing. The mandatory criteria are tightened in `IMAGE_REQUIREMENTS.md`.
- Binary upload: the connected GitHub `create_file` and `update_file` tools accept UTF-8 text, not PNG binary. Do not pretend the image file was uploaded through them. A binary-capable Git client/codebot or other supported image upload method is needed to finish actual asset commits.
- Discovery: use broad image search and favor complete-body composition over a large close-up. Retain lightweight original page URL, source photo URL and reuse status so later batch processing is reproducible.