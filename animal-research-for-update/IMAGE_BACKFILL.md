# Image delivery audit and backfill queue

**Research reports completed:** 99 / 225 (through Howler Monkey). **Full-body transparent PNG assets verified and committed:** 0 / 99. A source-photo URL is not an approved PNG.

`IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Exact species, healthy adult, complete anatomy, real-photo provenance, adequate quality and genuine alpha transparency are all required before image completion. Current connected GitHub write actions are UTF-8 text-only, so verified source photos remain pending rather than being faked as PNGs.

## Queue policy
Animals already source-verified or already audited are skipped until binary tooling becomes available or a materially better source resolves an outstanding verification issue. The oldest unresolved source-quality candidate is addressed each run.

| Animal | Current status | Next action |
|---|---|---|
| Gecko | REPLACEMENT SOURCE NEEDED | Audited; explicit adult male source remains only 1008px; skip unless materially better source appears |
| Giant Centipede | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; 4000x3000 complete-anatomy reusable source, but adulthood not explicit; skip unless adulthood is resolved |
| Giant Squid | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; exact female/reusable sources found, but strict adult + all-arm/tentacle-tip visibility not simultaneously verified; skip unless better source appears |
| Gibbon | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; exact *Hylobates lar* reusable 4000x3085 source found, but explicit adulthood/sex and strict unobscured hands/feet are not simultaneously verified; skip unless better source appears |
| Gila Monster | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; reusable exact-species high-resolution and BLM public-domain sources found; skip unless materially better source appears |
| Giraffe | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; 1712x2288 reusable bull source has complete standing framing, but adulthood is not explicit; skip unless age is resolved |
| Golden Eagle | SOURCE FOUND - FULL-BODY NOT VERIFIED | **Audited; explicit adult male source plus reusable 2000px exact-species sources found, but adult + reusable + strict full wings/feet/tail framing not simultaneously verified; skip unless better source appears** |
| Goliath Birdeater | SOURCE FOUND - FULL-BODY NOT VERIFIED | **NEXT UNRESOLVED SOURCE AUDIT: adult/every leg-tip** |
| Goose | SOURCE FOUND - FULL-BODY NOT VERIFIED | Full body visually verified; adulthood/sex not explicit |
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
| Hercules Beetle | SOURCE FOUND - FULL-BODY NOT VERIFIED | 5861x3853 exact male complete museum specimen; healthy living-adult requirement still unresolved |
| Hippopotamus | SOURCE FOUND - FULL-BODY NOT VERIFIED | 2592x1944 reusable exact-species land-standing candidate; adult/sex/toes/tail strictness unresolved |
| Honey Badger | SOURCE FOUND - FULL-BODY NOT VERIFIED | 4475x3042 exact-species CC BY-SA 2.0 single male; adulthood/strict feet-tail verification unresolved |
| Hornet | FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING | Exact adult queen *Vespa crabro*, 2048x1536 CC BY-SA 4.0, complete subject visually checked; binary cutout pending |
| Howler Monkey | SOURCE FOUND - FULL-BODY NOT VERIFIED | Exact adult male *A. caraya*, 3888x2588 CC BY-SA 2.0; adult/sex explicit but full tail/all appendages not visible |

## Latest findings

### 2026-09-20 Golden Eagle legacy audit
The staged Golden Eagle profile uses *Aquila chrysaetos* and correctly selects a mature female as the stronger canonical sex because golden eagles show reversed sexual size dimorphism. Broad searching included Commons, Flickr, Audubon/Cornell-style bird sources and exact adult-sex queries.

Strong explicit-adult discovery:
- **Source page:** https://www.flickr.com/photos/65771669@N07/39918347401/
- **Identity:** explicitly captioned **Adult male golden eagle (*Aquila chrysaetos*)** by photographer Jon David Nelson.
- **Age/sex:** explicit adult male.
- **Reuse:** page says `Some rights reserved`, but the accessible page does not expose enough license detail here to promote it as a redistribution-ready source.
- **Full-body:** strict full wings/feet/tail framing was not simultaneously certified from the accessible page.

Strong reusable exact-species alternative:
- **Source page:** https://commons.wikimedia.org/wiki/File:Golden_Eagle_(Aquila_chrysaetos)_(50350784957).jpg
- **Original Commons file:** https://upload.wikimedia.org/wikipedia/commons/7/70/Golden_Eagle_%28Aquila_chrysaetos%29_%2850350784957%29.jpg
- **Resolution:** 2000x1500 on Commons; metadata records a larger 5472x3648 camera original.
- **License:** CC BY-SA 2.0, FlickrReview-confirmed.
- **Identity:** exact *Aquila chrysaetos* in Pakistan.
- **Remaining blocker:** source does not explicitly state adult age/sex, so even promising full-subject framing cannot satisfy the mandatory adult standard.

The existing report candidate `Golden_Eagle_in_flight_-_5.jpg` is not replaced merely for novelty. None of the newly inspected sources simultaneously improves all mandatory dimensions: exact species, explicit adult, preferably canonical female, strict complete anatomy and reusable provenance.

**Outcome:** status remains `SOURCE FOUND - FULL-BODY NOT VERIFIED`. No PNG is claimed.

**Next unresolved source-quality legacy audit: Goliath Birdeater.**

### 2026-09-20 Howler Monkey new-animal image
Preferred identity reference:
- **Source page:** https://commons.wikimedia.org/wiki/File:Black_Howler_Monkey_(adult_male)_4.jpg
- **Original image:** https://live.staticflickr.com/1017/668025754_29f4abe265_o.jpg
- **Resolution:** **3888x2588**
- **Taxon:** exact *Alouatta caraya*
- **Age/sex:** explicitly **adult male**
- **Creator:** Ryan E. Poplin
- **License:** **CC BY-SA 2.0**, verified by the Commons Flickr upload/review record
- **Visual check:** healthy-looking single adult male, but the framing does not certify the entire tail and every appendage. It therefore fails the mandatory complete-anatomy requirement.
- **Status:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`.

A source photograph with excellent species/adult/sex provenance is not treated as finished merely because it is high resolution. No transparent PNG is claimed because there is not yet a compliant complete-body source and the connected GitHub writer is text-only.

## Recent prior decisive findings
- **Giraffe:** reusable 1712x2288 source explicitly identifies a bull and shows complete standing framing, but adulthood is not explicit.
- **Gila Monster:** reusable exact-species high-resolution and BLM public-domain sources found, but adulthood plus strict every-toe/complete-tail framing not simultaneously verified.
- **Gibbon:** exact *Hylobates lar* reusable 4000x3085 source found; adult/sex and strict hands/feet unresolved.
- **Giant Squid:** exact reusable NOAA/Smithsonian female sources found, but strict adult plus all arm/tentacle-tip visibility not simultaneously verified.
- **Giant Centipede:** exact *Scolopendra gigantea* 4000x3000 CC BY-SA 3.0 source visually contains complete anatomy, but adulthood is not explicit.
- **Gecko:** exact adult male reusable source exists but only 1008x460; high-resolution candidates lack simultaneous adult and strict full-body proof.
- **Condor:** `FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING`, exact adult *Vultur gryphus* 2403x1570 CC BY-SA 2.0.
- **Colossal Squid:** `REPLACEMENT SOURCE NEEDED`; famous Te Papa specimen is explicitly immature.
- **Deathstalker Scorpion:** `LICENSE UNVERIFIED - DO NOT COMMIT`; exact adult source lacks verified redistribution permission.
- **Donkey:** `LICENSE UNVERIFIED - DO NOT COMMIT`; explicit adult breeding jack source is All Rights Reserved.

## Count and blocker
- `99` is completed text research, not completed images.
- `0` remains the verified transparent-PNG count.
- Current connected GitHub writers accept UTF-8 text, not PNG binary. No JPEG rename, base64 text, opaque checkerboard or fake `.png` is created.
- Source-verified animals are skipped until new binary tooling permits actual PNG production or a superior source resolves an outstanding verification issue.
- **Next unresolved source-quality legacy audit: Goliath Birdeater.**
