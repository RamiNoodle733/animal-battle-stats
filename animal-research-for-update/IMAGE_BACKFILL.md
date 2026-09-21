# Image delivery audit and backfill queue

**Research reports completed:** 114 / 225 (through Komodo Dragon). **Full-body transparent PNG assets verified and committed:** 0 / 114. A source-photo URL is not an approved PNG.

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
| Huntsman Spider | REPLACEMENT SOURCE NEEDED | **Audited this run:** exact adult female *Heteropoda maxima* remains only 640x480; larger candidates fail exact adult/taxon/reuse verification |
| Hyena | SOURCE FOUND - FULL-BODY NOT VERIFIED | **NEXT UNRESOLVED SOURCE AUDIT:** exact female *C. crocuta* source exists; search for explicit adult + strict tail/all-feet completeness |
| Ibex | SOURCE FOUND - FULL-BODY NOT VERIFIED | Exact adult male; strict tail/all four feet not certified |
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

## 2026-09-20 Huntsman Spider legacy audit
Broad search covered general web image search, Wikimedia Commons, BOLD-linked material and commercial/exotic-animal listings.

**Best exact adult candidate remains:**
- Source page: https://commons.wikimedia.org/wiki/File:Heteropoda_maxima_f.jpg
- Original image URL: https://upload.wikimedia.org/wikipedia/commons/8/82/Heteropoda_maxima_f.jpg
- Resolution: **640x480**
- Taxon/sex/age: exact *Heteropoda maxima*, **adult female explicitly stated**.
- Source/provenance: Commons file derived from BOLD Systems; author M. Sajjad Mirza / National Institute for Biotechnology and Genetic Engineering, Pakistan.
- Result: exact adult and sex are unusually strong, but 640px is far below the preferred 1600+ standard and does not support a high-quality site cutout.

**Other candidates checked:**
- `Heteropoda maxima.jpg` on Commons is reusable CC BY 2.0 but only **900x817** and does not explicitly establish adult female status.
- A 3000x3000 commercial listing found through broad image search is explicitly **female subadult** and identified as *Heteropoda cf. maxima*, so it fails both mandatory adulthood and exact-taxon certainty.
- Other larger web results lacked sufficiently clear reuse permission, adult verification, or exact-species certainty. They were not promoted merely for resolution.

**Outcome:** Huntsman Spider remains **REPLACEMENT SOURCE NEEDED**. The old 640x480 adult-female file is retained as a taxonomic/sex reference but not as an acceptable primary cutout source. No PNG completion is claimed. The next unresolved legacy audit is Hyena.

## 2026-09-20 Komodo Dragon new-animal image
- Preferred source page: https://commons.wikimedia.org/wiki/File:Varanus_komodoensis,_Komodo_Island,_Indonesia,_20250822_1324_2788.jpg
- Original image URL: https://upload.wikimedia.org/wikipedia/commons/3/31/Varanus_komodoensis%2C_Komodo_Island%2C_Indonesia%2C_20250822_1324_2788.jpg
- Taxon: exact *Varanus komodoensis*, wild Komodo Island photograph.
- Visual/search result: useful broad body framing, but strict adulthood, sex and every toe/tail-tip visibility are not all certified from source metadata/inspection.
- Rejected explicit-male alternative: https://commons.wikimedia.org/wiki/File:Raja_the_Komodo_dragon_(Varanus_komodoensis)_in_Perth_Zoo,_February_2021_01.jpg is **3264x2448**, CC BY-SA 4.0 and explicitly male, but the metadata explicitly calls Raja **young**, so it fails the adult requirement.
- Stock-photo results with attractive full-body framing were not selected because previews/watermarks or redistribution terms are unsuitable for this staging asset workflow.
- Status: **SOURCE FOUND - FULL-BODY NOT VERIFIED**. No PNG binary is claimed or fabricated.

## Count and blocker
- `114` is completed text research, not completed images.
- `0` remains the verified transparent-PNG count.
- Current connected GitHub writers accept UTF-8 text, not PNG binary. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or fake `.png` is created.
- **Next unresolved source-quality legacy audit: Hyena.**
