# Image delivery audit and backfill queue

**Research reports completed:** 96 / 225 (through Hippopotamus). **Full-body transparent PNG assets verified and committed:** 0 / 96. A source-photo URL is not an approved PNG.

`IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Exact species, healthy adult, complete anatomy, real-photo provenance, adequate quality and genuine alpha transparency are all required before image completion. Current connected GitHub write actions are UTF-8 text-only, so verified source photos remain pending rather than being faked as PNGs.

## Queue policy
Animals already source-verified or already audited are skipped until binary tooling becomes available or a materially better source resolves an outstanding verification issue. The oldest unresolved source-quality candidate is addressed each run.

| Animal | Current status | Next action |
|---|---|---|
| Gecko | REPLACEMENT SOURCE NEEDED | Audited; explicit adult male source remains only 1008px; skip unless materially better source appears |
| Giant Centipede | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; 4000x3000 complete-anatomy reusable source, but adulthood not explicit; skip unless adulthood is resolved |
| Giant Squid | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; exact female/reusable sources found, but strict adult + all-arm/tentacle-tip visibility not simultaneously verified; skip unless better source appears |
| Gibbon | SOURCE FOUND - FULL-BODY NOT VERIFIED | **Audited; exact *Hylobates lar* reusable 4000x3085 source found, but explicit adulthood/sex and strict unobscured hands/feet are not simultaneously verified; skip unless better source appears** |
| Gila Monster | SOURCE FOUND - FULL-BODY NOT VERIFIED | **NEXT UNRESOLVED SOURCE AUDIT: adult/toes/tail** |
| Giraffe | SOURCE FOUND - FULL-BODY NOT VERIFIED | Adult/hooves/tail |
| Golden Eagle | SOURCE FOUND - FULL-BODY NOT VERIFIED | Adult/sex |
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

## Latest findings

### 2026-09-20 Gibbon legacy audit
The staging profile resolves broad `Gibbon` to **white-handed / lar gibbon, *Hylobates lar***. Broad search covered Commons, image search, Flickr-derived Commons material and zoo/stock results.

Strong reusable candidate:
- **Source page:** https://commons.wikimedia.org/wiki/File:Hylobates_lar_gibbon.jpg
- **Original image:** https://upload.wikimedia.org/wikipedia/commons/8/83/Hylobates_lar_gibbon.jpg
- **Resolution:** **4000x3085**
- **Taxon:** exact *Hylobates lar* according to the file description and Commons category
- **Creator:** Thomas Tolkien
- **License:** **CC BY 2.0**, Flickr license reviewed by Commons
- **Strengths:** high resolution, real photograph, single exact-species zoo subject, reusable provenance.
- **Blockers:** source metadata does not explicitly identify the pictured individual as an adult or give sex, and this run could not strictly certify that both hands and both feet are completely unobscured for cutout purposes. A separate 1280x853 Commons file includes adult male weight information in its description but does not identify the pictured individual as an adult male and falls below the preferred 1600px threshold. Getty has an explicitly labeled adult hanging *H. lar* with complete-looking anatomy, but redistribution rights are unsuitable for staging binary reuse.

**Status:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`. No PNG is claimed. Current GitHub writer remains text-only.

**Next unresolved source-quality legacy audit: Gila Monster.**

### 2026-09-20 Hippopotamus new-animal image
Preferred reusable candidate:
- **Source page:** https://commons.wikimedia.org/wiki/File:Hippopotamus.jpg
- **Original image:** https://upload.wikimedia.org/wikipedia/commons/6/6b/Hippopotamus.jpg
- **Resolution:** **2592x1944**
- **Taxon:** exact *Hippopotamus amphibius*, standing on land at Rome Zoo
- **License:** Commons states GFDL reuse terms
- **Strengths:** real photograph, one land-standing animal, adequate resolution and reusable provenance.
- **Blockers:** metadata does not explicitly establish adulthood or sex, and strict visibility of every toe plus the complete short tail was not certified strongly enough to satisfy `IMAGE_REQUIREMENTS.md`.
- **Alternate:** https://commons.wikimedia.org/wiki/File:Hippopotamus_%28_Hippopotamus_amphibius%29.jpg , 4320x2431, CC BY-SA 4.0, exact species, but it likewise does not solve adult/sex/full-body strictness.
- **Status:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`.

No transparent PNG is claimed because the connected GitHub writer accepts UTF-8 text, not PNG binary.

## Recent prior decisive findings
- **Giant Squid:** exact reusable NOAA/Smithsonian female sources found, but strict adult plus all arm/tentacle-tip visibility not simultaneously verified.
- **Giant Centipede:** exact *Scolopendra gigantea* 4000x3000 CC BY-SA 3.0 source visually contains complete anatomy, but adulthood is not explicit.
- **Gecko:** exact adult male reusable source exists but only 1008x460; high-resolution candidates lack simultaneous adult and strict full-body proof.
- **Gazelle:** exact *Gazella dorcas* 6000x4000 CC BY-SA 4.0; adult/sex and strict hoof/tail proof unresolved.
- **Galapagos Tortoise:** 3504x2336 reusable candidate; strict all-limbs/tail/adult-sex proof unresolved.
- **Gaboon Viper:** exact *B. gabonica* 2865x1714 CC BY-SA 4.0 candidate; adulthood/head-to-tail strictness unresolved.
- **Flying Squirrel:** exact *Pteromys volans* 5435x3628 CC BY-SA 4.0 source; adulthood/all appendages unresolved.
- **Flamingo:** misleading adult-flight Commons result resolved to Lesser Flamingo and rejected; exact *P. roseus* candidate retained.
- **Ferret:** high-resolution reusable exact domestic-ferret material exists, but inspected candidates obscure posterior anatomy/tail.
- **Emperor Scorpion:** explicit adult male reusable source exists but only 364x484; stronger candidate lacks adulthood proof.
- **Emperor Penguin:** explicit-adult reusable source is group/1400px; stronger single-subject source lacks explicit adulthood.
- **Elk:** 5481x3654 male Roosevelt elk CC BY-SA 4.0; adulthood/strict hoof-tail framing unresolved.
- **Electric Eel:** exact mature *E. electricus* 6016x4016 CC BY 4.0; strict complete silhouette not certified.
- **Condor:** `FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING`, exact adult *Vultur gryphus* 2403x1570 CC BY-SA 2.0.
- **Colossal Squid:** `REPLACEMENT SOURCE NEEDED`; famous Te Papa specimen is explicitly immature.
- **Deathstalker Scorpion:** `LICENSE UNVERIFIED - DO NOT COMMIT`; exact adult source lacks verified redistribution permission.
- **Donkey:** `LICENSE UNVERIFIED - DO NOT COMMIT`; explicit adult breeding jack source is All Rights Reserved.

## Count and blocker
- `96` is completed text research, not completed images.
- `0` remains the verified transparent-PNG count.
- Current connected GitHub writers accept UTF-8 text, not PNG binary. No JPEG rename, base64 text, opaque checkerboard or fake `.png` is created.
- Source-verified animals are skipped until new binary tooling permits actual PNG production or a superior source resolves an outstanding verification issue.
- **Next unresolved source-quality legacy audit: Gila Monster.**
