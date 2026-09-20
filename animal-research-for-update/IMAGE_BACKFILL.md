# Image delivery audit and backfill queue

**Research reports completed:** 105 / 225 (through Impala). **Full-body transparent PNG assets verified and committed:** 0 / 105. A source-photo URL is not an approved PNG.

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
| Gray Wolf | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; 6000x4000 CC BY-SA 4.0 exact Eurasian gray wolf source and 3877x2763 wild exact-species source; adulthood/sex plus strict complete tail/feet framing unresolved |
| Great Horned Owl | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; 6240x4160 public-domain Glacier NPS exact-species source plus NPS/USFS alternatives; strict adult + complete feet/tail/wings not simultaneously verified |
| Great White Shark | SOURCE FOUND - FULL-BODY NOT VERIFIED | **Audited; exact-species reusable sources up to 5472x2245, including an explicitly male CC BY-SA 2.0 shark; strict adult + complete fin/head-to-tail silhouette not simultaneously verified** |
| Green Anaconda | SOURCE FOUND - FULL-BODY NOT VERIFIED | **NEXT UNRESOLVED SOURCE AUDIT: verify adult, sex and complete head-to-tail body with reusable provenance** |
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
| Iguana | SOURCE FOUND - FULL-BODY NOT VERIFIED | Exact male *I. iguana*, 2135x2848 CC BY-SA 4.0; strong near-full-body framing but adulthood and strict unobscured all-feet/tail-tip completeness unresolved |
| Impala | SOURCE FOUND - FULL-BODY NOT VERIFIED | 5910x3940 exact male *A. melampus* reusable Kruger source has excellent framing/resolution but adulthood is not explicit; explicit-adult CC0 alternative is 1153x1881 and tail is absent |

## 2026-09-20 Great White Shark legacy audit
Broad search covered Wikimedia Commons, NOAA, NOAA Fisheries, photographer/Flickr material and Google-style image discovery.

**Strongest sex-verified reusable candidate:**
- Source page: https://commons.wikimedia.org/wiki/File:Great_White_Shark_(Carcharodon_carcharias)_male_attracted_by_a_seal-shaped_lure_..._(32902515785).jpg
- Original: https://live.staticflickr.com/3892/32902515785_41953dcb28_o.jpg
- Resolution: **5472x2245**
- Taxon: exact *Carcharodon carcharias*
- Sex: explicitly **male** in the source title/description
- Location: Gansbaai, Western Cape, South Africa
- License: **CC BY-SA 2.0**, Flickr license reviewed by Commons
- Result: excellent resolution and provenance, but the recovered source metadata does not explicitly establish adulthood and strict complete head-to-tail plus every-fin visibility was not simultaneously certified from the inspected presentation.

**Other checked candidates:**
- `Carcharodon carcharias.jpg`, 3264x2448, Public Domain, exact species at Isla Guadalupe. Visual inspection shows the tail/body cropped from the frame, so it is rejected as a mandatory full-body primary.
- `Great white shark, Carcharodon carcharias.jpg`, 4551x3079, CC BY-SA 4.0, exact species at Gansbaai. Strong resolution but no explicit adult/sex verification.
- `Great White Shark (Carcharodon carcharias) 06.jpg`, 4288x2748, CC BY-SA 4.0, exact species. Again, adult/sex and strict silhouette verification are not simultaneous.
- NOAA `fish4661.jpg`, exact *C. carcharias* and NOAA provenance, but the animal is caught by fishermen and therefore does not meet the healthy free-swimming adult preference.

**Outcome:** Great White Shark remains **SOURCE FOUND - FULL-BODY NOT VERIFIED**. No PNG is claimed. **Next unresolved source-quality legacy audit: Green Anaconda.**

## 2026-09-20 Impala new-animal image
- Preferred source page: https://commons.wikimedia.org/wiki/File:Impala_(Aepyceros_melampus)_male_Kruger.jpg
- Resolution: **5910x3940**
- Taxon: exact *Aepyceros melampus*
- Sex: explicitly male
- Setting: Kruger National Park, South Africa
- License: reusable Commons license recorded on source page
- Visual result: single real standing male with excellent resolution and strong complete-body framing, but source metadata does not explicitly say adult and strict complete-tail certification is not claimed.
- Explicit-adult alternative source page: https://commons.wikimedia.org/wiki/File:Adult_impala_male.jpg
- Explicit-adult original: https://upload.wikimedia.org/wikipedia/commons/a/a7/Adult_impala_male.jpg
- Alternative resolution: **1153x1881** current version, CC0. Visual inspection confirms an adult male and all four legs/feet in frame, but the tail is not visible, so it fails the mandatory anatomy rule and is not selected as primary.
- Status: **SOURCE FOUND - FULL-BODY NOT VERIFIED**. No PNG is claimed.

## Count and blocker
- `105` is completed text research, not completed images.
- `0` remains the verified transparent-PNG count.
- Current connected GitHub writers accept UTF-8 text, not PNG binary. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or fake `.png` is created.
- **Next unresolved source-quality legacy audit: Green Anaconda.**
