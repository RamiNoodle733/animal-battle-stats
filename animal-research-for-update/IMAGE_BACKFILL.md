# Image delivery audit and backfill queue

**Research reports completed:** 101 / 225 (through Huntsman Spider). **Full-body transparent PNG assets verified and committed:** 0 / 101. A source-photo URL is not an approved PNG.

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
| Goliath Birdeater | REPLACEMENT SOURCE NEEDED | Audited; explicit adult female reusable source only 720x525; skip unless better source appears |
| Goose | SOURCE FOUND - FULL-BODY NOT VERIFIED | **Audited; 2091x1394 CC BY-SA standing exact-species source and 2048x1536 CC0 alternative found; complete standing framing is promising but adulthood/sex are not explicit** |
| Gorilla | REPLACEMENT SOURCE NEEDED | **NEXT UNRESOLVED SOURCE AUDIT: unobscured 1600+ complete silverback** |
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
| Huntsman Spider | REPLACEMENT SOURCE NEEDED | Exact adult female *H. maxima* complete-body CC BY-SA 3.0 source found but only 640x480; higher-res exact-species reusable candidates recovered remain below 1600px |

## 2026-09-20 Goose legacy audit
Broad search covered Wikimedia Commons quality-image collections, USFWS media and exact-species standing/full-body queries for Canada Goose (*Branta canadensis*), matching the existing roster's Goose resolution.

**Strongest clean standing candidate:**
- Source page: https://commons.wikimedia.org/wiki/File:Canada_Goose_Standing.jpg
- Original image redirect: https://commons.wikimedia.org/wiki/Special:Redirect/file/Canada_Goose_Standing.jpg
- Resolution: **2091x1394**
- Taxon: exact *Branta canadensis*
- License: **CC BY-SA 3.0**
- Framing: single standing goose, useful side/three-quarter full-body framing with feet and tail in frame.
- Blocker: source metadata does not explicitly identify the bird as an adult or establish sex. Sex should not be inferred visually.

**Other reusable candidates checked:**
- https://commons.wikimedia.org/wiki/File:Canada_goose_(Branta_canadensis).jpg - exact species, **2048x1536**, **CC0**, Don Edwards San Francisco Bay NWR; metadata does not explicitly establish adult/sex.
- https://commons.wikimedia.org/wiki/File:Canada_Goose_Branta_canadensis_1393.jpg - exact species, **4775x2868**, **CC BY 4.0**, Ottawa; high resolution but no explicit adult/sex metadata in the recovered file record.
- https://commons.wikimedia.org/wiki/File:Canada_goose_(branta_canadensis).jpg - exact species, **4934x3289**, **CC BY-SA 3.0**, Charles J. Sharp; the recovered metadata categorizes a swimming bird and is less suitable for a clean complete-foot cutout than the standing candidate.
- USFWS public-domain sources were also checked. Several are groups, broods, nests, habitat scenes or subspecies-specific images and do not improve the strict complete single-adult plus age/sex documentation combination.

**Outcome:** Goose remains **SOURCE FOUND - FULL-BODY NOT VERIFIED**. The 2091x1394 standing source is the current preferred framing candidate, but mandatory adulthood is not explicitly verified. No PNG is claimed.

**Next unresolved source-quality legacy audit: Gorilla.**

## 2026-09-20 Huntsman Spider new-animal image
- Source page: https://commons.wikimedia.org/wiki/File:Heteropoda_maxima_f.jpg
- Original image redirect: https://commons.wikimedia.org/wiki/Special:Redirect/file/Heteropoda_maxima_f.jpg
- Resolution: **640x480**
- Taxon: exact *Heteropoda maxima*
- Age/sex: metadata explicitly identifies **adult female**
- License: **CC BY-SA 3.0**
- Visual/source suitability: complete spider is visible, including all eight long legs, but the source is far below the preferred 1600+ longest-side requirement and is inadequate for a high-quality fine-leg transparent cutout.
- Alternatives: reusable exact-species Commons candidates at **738x900** and **900x817** were also found, but remain below standard and have weaker age metadata.
- Status: **REPLACEMENT SOURCE NEEDED**. Do not promote a low-resolution image merely to close the queue.

## Count and blocker
- `101` is completed text research, not completed images.
- `0` remains the verified transparent-PNG count.
- Current connected GitHub writers accept UTF-8 text, not PNG binary. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or fake `.png` is created.
- **Next unresolved source-quality legacy audit: Gorilla.**
