# Image delivery audit and backfill queue

**Research reports completed:** 98 / 225 (through Hornet). **Full-body transparent PNG assets verified and committed:** 0 / 98. A source-photo URL is not an approved PNG.

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
| Giraffe | SOURCE FOUND - FULL-BODY NOT VERIFIED | **Audited; 1712x2288 reusable source explicitly identifies a bull *G. c. giraffa* and shows complete standing framing, but adulthood is not explicit; skip unless age is resolved** |
| Golden Eagle | SOURCE FOUND - FULL-BODY NOT VERIFIED | **NEXT UNRESOLVED SOURCE AUDIT: adult/sex/full wings-feet-tail** |
| Goliath Birdeater | SOURCE FOUND - FULL-BODY NOT VERIFIED | Adult/every leg-tip |
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

## Latest findings

### 2026-09-20 Giraffe legacy audit
The staging profile uses the legacy site concept *Giraffa camelopardalis* sensu lato and a mature bull as the canonical fighting specimen. Broad searching included Commons, general image search and exact male/bull queries rather than relying on the previous candidate.

Strongest replacement candidate:
- **Source page:** https://commons.wikimedia.org/wiki/File:Giraffe_standing.jpg
- **Original image:** https://upload.wikimedia.org/wikipedia/commons/9/9f/Giraffe_standing.jpg
- **Resolution:** **1712x2288**
- **Identity:** explicitly described as a **bull** *Giraffa camelopardalis giraffa* in natural environment, South Africa.
- **Creator:** Miroslav Duchacek.
- **License:** **CC BY-SA 3.0 / GFDL**.
- **Visual quality:** full standing animal with head, torso, all four legs/hooves and tail inside the frame; suitable resolution and simple natural background for future cutout.
- **Remaining blocker:** the file explicitly verifies male sex but does not explicitly state adult age. A bull is strongly suggestive of maturity, but IMAGE_REQUIREMENTS requires adulthood rather than inference, so status is not promoted to completed-source status.

A second 2641x2925 Commons photograph titled `South African Giraffe, Bull.JPG` also explicitly identifies a bull and has reusable CC BY-SA 3.0 provenance, but tall grass obscures portions of the lower legs, making the standing source preferable for cutout work.

**Outcome:** materially stronger full-body male candidate recorded. Status remains `SOURCE FOUND - FULL-BODY NOT VERIFIED` solely because adulthood is not explicit. No PNG is claimed.

**Next unresolved source-quality legacy audit: Golden Eagle.**

### 2026-09-20 Hornet new-animal image
Preferred candidate:
- **Source page:** https://commons.wikimedia.org/wiki/File:Queen_of_Vespa_crabro.jpg
- **Original image:** https://upload.wikimedia.org/wikipedia/commons/d/d5/Queen_of_Vespa_crabro.jpg
- **Resolution:** **2048x1536**
- **Taxon:** exact *Vespa crabro*
- **Caste/sex:** explicitly a **queen**, therefore adult female
- **Creator:** Whitesachem
- **License:** **CC BY-SA 4.0**
- **Visual check:** single living queen, complete head and abdomen, antennae, wings and limbs inside frame; no watermark or group subject. Some legs overlap naturally in the resting pose, but no appendage is edge-cropped.
- **Status:** `FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING`.

No transparent PNG is claimed because the connected GitHub writer accepts UTF-8 text, not PNG binary.

## Recent prior decisive findings
- **Gila Monster:** reusable exact-species high-resolution and BLM public-domain sources found, but adulthood plus strict every-toe/complete-tail framing not simultaneously verified.
- **Gibbon:** exact *Hylobates lar* reusable 4000x3085 source found; adult/sex and strict hands/feet unresolved.
- **Giant Squid:** exact reusable NOAA/Smithsonian female sources found, but strict adult plus all arm/tentacle-tip visibility not simultaneously verified.
- **Giant Centipede:** exact *Scolopendra gigantea* 4000x3000 CC BY-SA 3.0 source visually contains complete anatomy, but adulthood is not explicit.
- **Gecko:** exact adult male reusable source exists but only 1008x460; high-resolution candidates lack simultaneous adult and strict full-body proof.
- **Gazelle:** exact *Gazella dorcas* 6000x4000 CC BY-SA 4.0; adult/sex and strict hoof/tail proof unresolved.
- **Galapagos Tortoise:** 3504x2336 reusable candidate; strict all-limbs/tail/adult-sex proof unresolved.
- **Gaboon Viper:** exact *B. gabonica* 2865x1714 CC BY-SA 4.0 candidate; adulthood/head-to-tail strictness unresolved.
- **Flying Squirrel:** exact *Pteromys volans* 5435x3628 CC BY-SA 4.0 source; adulthood/all appendages unresolved.
- **Condor:** `FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING`, exact adult *Vultur gryphus* 2403x1570 CC BY-SA 2.0.
- **Colossal Squid:** `REPLACEMENT SOURCE NEEDED`; famous Te Papa specimen is explicitly immature.
- **Deathstalker Scorpion:** `LICENSE UNVERIFIED - DO NOT COMMIT`; exact adult source lacks verified redistribution permission.
- **Donkey:** `LICENSE UNVERIFIED - DO NOT COMMIT`; explicit adult breeding jack source is All Rights Reserved.

## Count and blocker
- `98` is completed text research, not completed images.
- `0` remains the verified transparent-PNG count.
- Current connected GitHub writers accept UTF-8 text, not PNG binary. No JPEG rename, base64 text, opaque checkerboard or fake `.png` is created.
- Source-verified animals are skipped until new binary tooling permits actual PNG production or a superior source resolves an outstanding verification issue.
- **Next unresolved source-quality legacy audit: Golden Eagle.**
