# Image delivery audit and backfill queue

**Research reports completed:** 100 / 225 (through Hummingbird). **Full-body transparent PNG assets verified and committed:** 0 / 100. A source-photo URL is not an approved PNG.

`IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Exact species, healthy adult, complete anatomy, real-photo provenance, adequate quality and genuine alpha transparency are required. Current connected GitHub write actions are UTF-8 text-only, so source photos remain pending rather than being faked as PNGs.

## Queue policy
Animals already source-verified or audited are skipped until binary tooling becomes available or a materially better source resolves an outstanding verification issue. The oldest unresolved source-quality candidate is addressed each run.

| Animal | Current status | Next action |
|---|---|---|
| Gecko | REPLACEMENT SOURCE NEEDED | Audited; explicit adult male source remains only 1008px; skip unless materially better source appears |
| Giant Centipede | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; 4000x3000 complete-anatomy reusable source, adulthood not explicit |
| Giant Squid | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; exact female/reusable sources found, strict adult + every arm/tentacle tip unresolved |
| Gibbon | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; exact reusable 4000x3085 source, adult/sex and strict hands/feet unresolved |
| Gila Monster | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; reusable high-resolution and BLM public-domain sources, adulthood plus every toe/tail unresolved |
| Giraffe | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; 1712x2288 reusable bull source complete standing frame, adulthood not explicit |
| Golden Eagle | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; explicit adult male plus reusable exact-species sources, but adult + reuse + complete wings/feet/tail not simultaneous |
| Goliath Birdeater | REPLACEMENT SOURCE NEEDED | **Audited; explicit adult female reusable source is only 720x525; high-res exact-species sources do not explicitly establish healthy adulthood; skip unless better source appears** |
| Goose | SOURCE FOUND - FULL-BODY NOT VERIFIED | **NEXT UNRESOLVED SOURCE AUDIT: adulthood/sex on existing full-body candidate** |
| Gorilla | REPLACEMENT SOURCE NEEDED | Unobscured 1600+ complete silverback |
| Gray Wolf | SOURCE FOUND - FULL-BODY NOT VERIFIED | Complete silhouette; adulthood missing |
| Great Horned Owl | SOURCE FOUND - FULL-BODY NOT VERIFIED | Feet/tail/adulthood unresolved |
| Great White Shark | SOURCE FOUND - FULL-BODY NOT VERIFIED | Adult/sex/fins unresolved |
| Green Anaconda | SOURCE FOUND - FULL-BODY NOT VERIFIED | Adult/sex/head-to-tail unresolved |
| Grizzly Bear | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; skip |
| Guanaco | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; adult/sex/full-body strictness unresolved |
| Hammerhead Shark | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; exact species/reuse strong, Commons version cropped |
| Harpy Eagle | SOURCE FOUND - FULL-BODY NOT VERIFIED | Promising complete perched source, adulthood/sex unresolved |
| Hedgehog | SOURCE FOUND - FULL-BODY NOT VERIFIED | 2500x1662 reusable candidate, adulthood/all feet/tiny tail unresolved |
| Hellbender | FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING | Exact adult eastern hellbender, public-domain 3072x2304 USFWS source; binary cutout pending |
| Hercules Beetle | SOURCE FOUND - FULL-BODY NOT VERIFIED | 5861x3853 exact male complete museum specimen; healthy living-adult requirement unresolved |
| Hippopotamus | SOURCE FOUND - FULL-BODY NOT VERIFIED | Reusable exact-species standing candidate; adult/sex/toes/tail unresolved |
| Honey Badger | SOURCE FOUND - FULL-BODY NOT VERIFIED | 4475x3042 exact-species CC BY-SA 2.0 male; adulthood/strict feet-tail unresolved |
| Hornet | FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING | Exact adult queen *Vespa crabro*, 2048x1536 CC BY-SA 4.0; binary cutout pending |
| Howler Monkey | SOURCE FOUND - FULL-BODY NOT VERIFIED | Exact adult male *A. caraya*, 3888x2588 CC BY-SA 2.0; full tail/all appendages not visible |
| Hummingbird | SOURCE FOUND - FULL-BODY NOT VERIFIED | Exact adult male *A. colubris*, 2148x1637 CC BY-SA 2.0; strict wing/feet completeness not certified; canonical female preferred |

## 2026-09-20 Goliath Birdeater legacy audit
Broad search covered Commons, zoo/photographer pages and exact adult-female queries for *Theraphosa blondi*.

**Explicit adult living source:**
- Source page: https://commons.wikimedia.org/wiki/File:THERAPHOSA_BLONDI_HEMBRA_ADULTA.jpg
- Original image: https://upload.wikimedia.org/wikipedia/commons/c/c3/THERAPHOSA_BLONDI_HEMBRA_ADULTA.jpg
- Identity/age/sex: file title and description explicitly identify *Theraphosa blondi*, adult female.
- License: CC BY-SA 2.5 with Wikimedia VRT permission confirmed.
- Resolution: only **720x525**, below the preferred 1600+ standard and poor for fine-leg/hair cutout work.

**High-resolution alternatives checked:**
- https://commons.wikimedia.org/wiki/File:Goliath_Tarantula_(Theraphosa_blondi)_(26062223168).jpg is exact species, wild and **4295x3071**, CC BY-SA 2.0, but metadata does not explicitly establish adulthood or sex.
- https://commons.wikimedia.org/wiki/File:Theraphosa_blondi_MHNT.jpg is an explicitly female **5041x7360** specimen image, but it is a mounted museum specimen and fails the healthy living-adult requirement.
- Adult-female molt images are high resolution but depict molts/exuviae rather than a healthy living animal and are rejected.

**Outcome:** status is **REPLACEMENT SOURCE NEEDED** because the only explicit adult-female living source recovered is too low-resolution, while high-resolution exact-species sources do not satisfy all mandatory adult/healthy criteria. No PNG is claimed.

**Next unresolved source-quality legacy audit: Goose.**

## 2026-09-20 Hummingbird new-animal image
- Source page: https://commons.wikimedia.org/wiki/File:Ruby-throated_Hummingbird_7377.jpg
- Original image: https://upload.wikimedia.org/wikipedia/commons/e/e5/Ruby-throated_Hummingbird_7377.jpg
- Resolution: **2148x1637**
- Taxon: exact *Archilochus colubris*
- Age/sex: metadata explicitly says **Adult / Male**
- License: **CC BY-SA 2.0**, Commons Flickr upload-bot review confirmed
- Visual check: single real adult bird in flight; body and tail are visible, but strict complete wing/feet visibility and an unobscured cutout silhouette are not certified strongly enough.
- Canonical-sex caveat: the research profile uses the larger adult female; this male is not ideal even if framing were resolved.
- Status: **SOURCE FOUND - FULL-BODY NOT VERIFIED**.

## Count and blocker
- `100` is completed text research, not completed images.
- `0` remains the verified transparent-PNG count.
- Current connected GitHub writers accept UTF-8 text, not PNG binary. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or fake `.png` is created.
- **Next unresolved source-quality legacy audit: Goose.**
