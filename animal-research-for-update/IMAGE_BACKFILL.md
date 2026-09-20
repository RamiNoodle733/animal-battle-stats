# Image delivery audit and backfill queue

**Research reports completed:** 103 / 225 (through Ibex). **Full-body transparent PNG assets verified and committed:** 0 / 103. A source-photo URL is not an approved PNG.

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
| Gorilla | REPLACEMENT SOURCE NEEDED | Audited; explicit male western lowland gorilla source is only 1174x1321; larger reusable silverback candidates do not simultaneously establish exact taxon/adulthood plus strict unobscured complete anatomy |
| Gray Wolf | SOURCE FOUND - FULL-BODY NOT VERIFIED | **Audited; 6000x4000 CC BY-SA 4.0 exact Eurasian gray wolf source and 3877x2763 wild exact-species source found; adulthood/sex plus strict complete tail/feet framing not simultaneously verified** |
| Great Horned Owl | SOURCE FOUND - FULL-BODY NOT VERIFIED | **NEXT UNRESOLVED SOURCE AUDIT: verify adult, complete feet/tail/wings and reusable provenance** |
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
| Hyena | SOURCE FOUND - FULL-BODY NOT VERIFIED | Exact female *C. crocuta*, 3639x5143 CC BY-SA 2.0; all four feet visible but tail not visibly complete and adulthood not explicit |
| Ibex | SOURCE FOUND - FULL-BODY NOT VERIFIED | Exact adult male *Capra ibex*, 3233x2155 CC BY-SA 4.0 Gran Paradiso source; strict entire tail/all four feet not certified |

## 2026-09-20 Gray Wolf legacy audit
Broad search covered Wikimedia Commons, USFWS-origin photographs, wild Yellowstone/Denali sources, exact-species and exact-subspecies queries, and Google-style image discovery.

**Strongest high-resolution exact-subspecies candidate:**
- Source page: https://commons.wikimedia.org/wiki/File:Eurasian_Grey_Wolf_(Canis_lupus_lupus)_(CWPG).jpg
- Original: https://upload.wikimedia.org/wikipedia/commons/2/2d/Eurasian_Grey_Wolf_%28Canis_lupus_lupus%29_%28CWPG%29.jpg
- Resolution: **6000x4000**
- Taxon: explicitly **Eurasian gray wolf, *Canis lupus lupus***
- License: **CC BY-SA 4.0**
- Provenance: photographer's own work at Cotswold Wildlife Park.
- Blocker: source metadata does not explicitly establish adulthood or sex, and strict complete tail/all-feet framing was not simultaneously certified from the recovered view.

**Wild exact-species alternative:**
- Source page: https://commons.wikimedia.org/wiki/File:Gray_Wolf_-_Canis_lupus_(51545668593).jpg
- Resolution: **3877x2763**
- Taxon: exact *Canis lupus*, wild Junction Butte pack animal in Lamar Valley.
- License: **CC BY-SA 2.0**, Flickr license reviewed on Commons.
- Blocker: adulthood/sex and strict complete anatomy remain undocumented.

**Additional adult-context alternative:**
- Source page: https://commons.wikimedia.org/wiki/File:Gray_Wolf_(Canis_lupus)_(9677910158).jpg
- Resolution: **2844x1862**, CC BY-SA 2.0.
- Description says the wolf detoured after an **adult moose**, but that establishes the prey's adulthood, not the wolf's. It is therefore not misrepresented as an adult-verified wolf.

**Outcome:** Gray Wolf remains **SOURCE FOUND - FULL-BODY NOT VERIFIED**. The audit improved resolution/provenance confidence but did not justify claiming the mandatory adult + whole-tail + all-feet standard. No PNG is claimed.

**Next unresolved source-quality legacy audit: Great Horned Owl.**

## 2026-09-20 Ibex new-animal image
- Source page: https://commons.wikimedia.org/wiki/File:Capra_ibex_in_Gran_Paradiso_National_Park.jpg
- Original image: https://upload.wikimedia.org/wikipedia/commons/f/f3/Capra_ibex_in_Gran_Paradiso_National_Park.jpg
- Resolution: **3233x2155**
- Taxon: exact *Capra ibex*
- Age/sex: caption explicitly identifies an **adult male**
- Setting: wild Gran Paradiso National Park
- License: **CC BY-SA 4.0**
- Visual/source result: healthy single-animal real photograph and excellent resolution/provenance, but strict visibility of the complete tail and every foot was not established strongly enough to certify the mandatory complete-body requirement.
- Status: **SOURCE FOUND - FULL-BODY NOT VERIFIED**. No PNG is claimed.

## Count and blocker
- `103` is completed text research, not completed images.
- `0` remains the verified transparent-PNG count.
- Current connected GitHub writers accept UTF-8 text, not PNG binary. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or fake `.png` is created.
- **Next unresolved source-quality legacy audit: Great Horned Owl.**
