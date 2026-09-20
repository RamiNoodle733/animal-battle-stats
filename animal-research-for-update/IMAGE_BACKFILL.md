# Image delivery audit and backfill queue

**Research reports completed:** 102 / 225 (through Hyena). **Full-body transparent PNG assets verified and committed:** 0 / 102. A source-photo URL is not an approved PNG.

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
| Goose | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; 2091x1394 CC BY-SA standing source and 2048x1536 CC0 alternative; adulthood not explicit |
| Gorilla | REPLACEMENT SOURCE NEEDED | **Audited; explicit male western lowland gorilla source is only 1174x1321; larger reusable silverback candidates do not simultaneously establish exact taxon/adulthood plus strict unobscured complete anatomy** |
| Gray Wolf | SOURCE FOUND - FULL-BODY NOT VERIFIED | **NEXT UNRESOLVED SOURCE AUDIT: complete adult full-body candidate** |
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
| Huntsman Spider | REPLACEMENT SOURCE NEEDED | Exact adult female *H. maxima* complete-body source only 640x480; larger reusable candidates remain below 1600px |
| Hyena | SOURCE FOUND - FULL-BODY NOT VERIFIED | Exact female *C. crocuta*, 3639x5143 CC BY-SA 2.0; visual inspection shows all four feet but tail is not visibly complete and adulthood is not explicit |

## 2026-09-20 Gorilla legacy audit
Broad search covered Wikimedia Commons exact western-lowland-gorilla categories, silverback queries and reusable high-resolution candidates.

**Strongest explicit-sex/exact-taxon candidate:**
- Source page: https://commons.wikimedia.org/wiki/File:Gorilla_gorilla_gorilla_Nbg.jpg
- Original: https://upload.wikimedia.org/wikipedia/commons/2/2e/Gorilla_gorilla_gorilla_Nbg.jpg
- Resolution: **1174x1321**
- Taxon: explicitly **male western lowland gorilla, *Gorilla gorilla gorilla***
- License: **CC BY-SA 3.0 / GFDL**
- Framing: single silverback, body and limbs visible.
- Blocker: below the preferred 1600px longest-side threshold, and the current cropped version does not justify lowering the mandatory image-quality standard.

**Larger sources checked:**
- https://commons.wikimedia.org/wiki/File:Silverback_Gorilla_01.jpg - **5184x3456**, CC BY 4.0, categorized as *Gorilla gorilla gorilla* in zoos, but description merely says “Gorilla”/silverback and the reclining pose is poor for strict unobscured limb isolation.
- Wikimedia's western-gorilla zoo/category collections contain multiple 2000-5000px files, but the recovered metadata did not simultaneously establish exact taxon, adult male status and clean complete anatomy strongly enough to replace the existing candidate.

**Outcome:** Gorilla remains **REPLACEMENT SOURCE NEEDED**. Do not use a portrait, group, reclining/obscured pose or sub-1600 source simply to close the queue. No PNG is claimed.

**Next unresolved source-quality legacy audit: Gray Wolf.**

## 2026-09-20 Hyena new-animal image
- Source page: https://commons.wikimedia.org/wiki/File:Spotted_Hyena_(Crocuta_crocuta)_female_..._(53024319975).jpg
- Original image: https://upload.wikimedia.org/wikipedia/commons/9/9f/Spotted_Hyena_%28Crocuta_crocuta%29_female_..._%2853024319975%29.jpg
- Resolution: **3639x5143**
- Taxon: exact *Crocuta crocuta*
- Sex: explicitly **female**
- License: **CC BY-SA 2.0**, Flickr license independently reviewed on Commons
- Visual result: genuine single-animal photograph; head, torso and all four feet are visible, but the tail is not visibly complete. Source metadata does not explicitly establish adulthood.
- Alternative checked: Diego Delso's **6603x4402** exact-species CC BY-SA Kruger photograph. It is high quality but does not improve the strict sex/adult/tail combination.
- Status: **SOURCE FOUND - FULL-BODY NOT VERIFIED**. No PNG is claimed.

## Count and blocker
- `102` is completed text research, not completed images.
- `0` remains the verified transparent-PNG count.
- Current connected GitHub writers accept UTF-8 text, not PNG binary. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or fake `.png` is created.
- **Next unresolved source-quality legacy audit: Gray Wolf.**
