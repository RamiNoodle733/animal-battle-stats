# Image delivery audit and backfill queue

**Research reports completed:** 115 / 225 (through Kookaburra). **Full-body transparent PNG assets verified and committed:** 0 / 115. A source-photo URL is not an approved PNG.

`IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Exact species, healthy adult, complete anatomy, real-photo provenance, adequate quality and genuine alpha transparency are required. Current connected GitHub write actions are UTF-8 text-only, so source photos remain pending rather than being faked as PNGs.

## Queue policy
Animals already source-verified or audited are skipped until binary tooling becomes available or a materially better source resolves an outstanding verification issue. The oldest unresolved source-quality candidate is addressed each run.

| Animal | Current status | Next action |
|---|---|---|
| Gecko | REPLACEMENT SOURCE NEEDED | Audited; explicit adult male source remains only 1008px |
| Giant Centipede | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; 4000x3000 reusable source, adulthood not explicit |
| Giant Squid | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; adult + every arm/tentacle tip unresolved |
| Gibbon | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; adult/sex and strict hands/feet unresolved |
| Gila Monster | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; adulthood plus every toe/tail unresolved |
| Giraffe | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; reusable bull source, adulthood not explicit |
| Golden Eagle | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; adult + reuse + complete anatomy not simultaneous |
| Goliath Birdeater | REPLACEMENT SOURCE NEEDED | Audited; explicit adult female reusable source only 720x525 |
| Goose | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; adulthood not explicit |
| Gorilla | REPLACEMENT SOURCE NEEDED | Audited; explicit male source too small; larger sources fail simultaneous strictness |
| Gray Wolf | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; adult/sex + strict tail/feet unresolved |
| Great Horned Owl | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; 6240x4160 public-domain NPS source; adult + complete anatomy unresolved |
| Great White Shark | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; explicit male source; strict adult + all fins/head-tail unresolved |
| Green Anaconda | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; adult/sex + complete head-tail visibility not simultaneous |
| Grizzly Bear | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; skip |
| Guanaco | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; adult/sex/full-body strictness unresolved |
| Hammerhead Shark | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; exact species/reuse strong, Commons version cropped |
| Harpy Eagle | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; adult/sex and strict feet/tail/wings unresolved |
| Hedgehog | REPLACEMENT SOURCE NEEDED | Audited; featured source fails strict anatomy |
| Hellbender | FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING | Exact adult, public-domain 3072x2304 USFWS; binary cutout pending |
| Hercules Beetle | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; adult/imago; strict all-six-feet/appendage tips unresolved |
| Hippopotamus | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; adult/sex and strict tail/feet unresolved |
| Honey Badger | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; explicit male still loses rear body/tail at frame edge |
| Hornet | FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING | Exact adult queen *Vespa crabro*, 2048x1536 CC BY-SA 4.0 |
| Howler Monkey | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; exact adult male, tail/complete appendages not visible |
| Hummingbird | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; 6000x4000 Public Domain female; adulthood/strict anatomy unresolved |
| Huntsman Spider | REPLACEMENT SOURCE NEEDED | Audited; exact adult female *Heteropoda maxima* remains only 640x480 |
| Hyena | SOURCE FOUND - FULL-BODY NOT VERIFIED | **Audited this run:** explicit female 4912x3055 CC BY-SA source inspected; tail/rear silhouette is lost at frame edge and adulthood is not explicit |
| Ibex | SOURCE FOUND - FULL-BODY NOT VERIFIED | **NEXT UNRESOLVED SOURCE AUDIT:** exact adult male exists; seek strict tail/all-four-feet completeness |
| Iguana | SOURCE FOUND - FULL-BODY NOT VERIFIED | Exact male; adulthood and strict all-feet/tail completeness unresolved |
| Impala | SOURCE FOUND - FULL-BODY NOT VERIFIED | Strong male framing, adulthood not explicit; adult alternative loses tail |
| Jackal | SOURCE FOUND - FULL-BODY NOT VERIFIED | Complete standing anatomy; adulthood/sex not explicit |
| Jaguar | SOURCE FOUND - FULL-BODY NOT VERIFIED | Exact male Pantanal source; adulthood/strict completeness unresolved |
| Japanese Macaque | SOURCE FOUND - FULL-BODY NOT VERIFIED | Tail hidden/rear feet unclear; adult/sex not explicit |
| Kangaroo | SOURCE FOUND - FULL-BODY NOT VERIFIED | Every foot/tail endpoint and adulthood not strict |
| King Cobra | SOURCE FOUND - FULL-BODY NOT VERIFIED | Exact female; adulthood and entire head-tail silhouette not verified |
| King Crab | SOURCE FOUND - FULL-BODY NOT VERIFIED | Explicit male source clips appendage tips |
| Kiwi | SOURCE FOUND - FULL-BODY NOT VERIFIED | Exact species; adulthood/sex/every-toe unresolved |
| Koala | SOURCE FOUND - FULL-BODY NOT VERIFIED | Exact male; tree overlap blocks every-foot/digit certification; adulthood not explicit |
| Komodo Dragon | SOURCE FOUND - FULL-BODY NOT VERIFIED | Wild exact-species candidate; adulthood/sex and strict all-toe/tail-tip completeness unresolved; explicit-male alternatives are young |
| Kookaburra | SOURCE FOUND - FULL-BODY NOT VERIFIED | Exact *D. novaeguineae*, 4000x6000 CC BY-SA; perch obscures feet/toes and adulthood/sex are not explicit |

## 2026-09-20 Hyena legacy audit
Broad search covered general web image search and Wikimedia Commons with emphasis on exact *Crocuta crocuta*, the stronger female sex, reusable provenance, high resolution and strict complete anatomy.

**Best explicit-female candidate inspected:**
- Source page: https://commons.wikimedia.org/wiki/File:Spotted_Hyena_(Crocuta_crocuta)_female_..._(52772009649).jpg
- Original image URL: https://upload.wikimedia.org/wikipedia/commons/3/3c/Spotted_Hyena_%28Crocuta_crocuta%29_female_..._%2852772009649%29.jpg
- Resolution: **4912x3055**
- Taxon/sex: exact *Crocuta crocuta*, **female explicitly identified** by source metadata/categories.
- Provenance: Bernard DUPONT, Flickr source independently reviewed by Commons; **CC BY-SA 2.0**.
- Visual inspection: head, torso and four legs/feet are visible, but the rear silhouette reaches the right frame edge and the tail is not visibly complete. The source also does not explicitly establish adulthood.
- Result: strong sex/provenance/resolution candidate, but it fails mandatory complete-tail framing and strict adult verification. It is not promoted to full-body verified status.

**Other candidates checked:** Commons exact-species files at 6000x3220, 4596x2978, 5472x3648 and other high resolutions have strong reusable provenance, but available metadata does not simultaneously establish canonical female sex, adulthood and strict head-to-tail/all-feet completeness. Stock results with attractive side profiles were not selected because watermarked/commercial previews are unsuitable for redistribution.

**Outcome:** Hyena remains **SOURCE FOUND - FULL-BODY NOT VERIFIED**. No PNG completion is claimed. The next unresolved legacy source audit is Ibex.

## 2026-09-20 Kookaburra new-animal image
- Preferred source page: https://commons.wikimedia.org/wiki/File:Laughing_Kookaburra_(Dacelo_novaeguineae)_(CWPG).jpg
- Original image URL: https://upload.wikimedia.org/wikipedia/commons/9/95/Laughing_Kookaburra_%28Dacelo_novaeguineae%29_%28CWPG%29.jpg
- Resolution: **4000x6000** JPEG.
- Taxon: exact Laughing Kookaburra, *Dacelo novaeguineae*.
- Provenance/license: own work by Vauxford, **CC BY-SA 4.0**.
- Visual inspection: head, torso, folded wings and complete tail are well inside the frame, but the branch/perch obscures the feet and toes. Source metadata does not explicitly establish adulthood or sex.
- Status: **SOURCE FOUND - FULL-BODY NOT VERIFIED**. A source URL is not counted as a completed image and no PNG binary is claimed.

## Count and blocker
- `115` is completed text research, not completed images.
- `0` remains the verified transparent-PNG count.
- Current connected GitHub writers accept UTF-8 text, not PNG binary. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or fake `.png` is created.
- **Next unresolved source-quality legacy audit: Ibex.**
