# Image delivery audit and backfill queue

**Research reports completed:** 95 / 225 (through Hercules Beetle). **Full-body transparent PNG assets verified and committed:** 0 / 95. A source-photo URL is not an approved PNG.

`IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Exact species, healthy adult, complete anatomy, real-photo provenance, adequate quality and genuine alpha transparency are all required before image completion. Current connected GitHub write actions are UTF-8 text-only, so verified source photos remain pending rather than being faked as PNGs.

## Queue policy
Animals already source-verified or already audited are skipped until binary tooling becomes available or a materially better source resolves an outstanding verification issue. The oldest unresolved source-quality candidate is addressed each run.

| Animal | Current status | Next action |
|---|---|---|
| Gecko | REPLACEMENT SOURCE NEEDED | Audited; explicit adult male source remains only 1008px; skip unless materially better source appears |
| Giant Centipede | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; 4000x3000 complete-anatomy reusable source, but adulthood not explicit; skip unless adulthood is resolved |
| Giant Squid | SOURCE FOUND - FULL-BODY NOT VERIFIED | **Audited; exact female/reusable sources found, but strict adult + all-arm/tentacle-tip visibility not simultaneously verified; skip unless better source appears** |
| Gibbon | SOURCE FOUND - FULL-BODY NOT VERIFIED | **NEXT UNRESOLVED SOURCE AUDIT: adult/unobscured hand** |
| Gila Monster | SOURCE FOUND - FULL-BODY NOT VERIFIED | Adult/toes/tail |
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

## Latest findings

### 2026-09-20 Giant Squid legacy audit
The existing staging profile resolves Giant Squid to **Giant Squid / *Architeuthis dux***. Broad search reviewed NOAA/Smithsonian material, Wikimedia Commons, museum collections and image-search results rather than relying on one provider.

Strong reusable candidates reviewed:
- **NOAA specimen MOL 1130046 source page:** https://commons.wikimedia.org/wiki/File:MOL_1130046_Architeuthis_specimen.jpg
- **Original image:** https://upload.wikimedia.org/wikipedia/commons/8/8f/MOL_1130046_Architeuthis_specimen.jpg
- **Resolution:** **4416x3312**
- **Taxon:** exact *Architeuthis dux*, trawled off Louisiana on 30 July 2009
- **Sex/specimen data:** independent specimen records identify MOL 1130046 as an intact **female**, 5.9 m estimated length and 46.7 kg
- **License:** **CC0 / Public Domain**, NOAA
- **Problem:** the available metadata does not establish that this relatively small female was sexually mature, and the photographed arrangement does not provide sufficiently strong visual proof that every arm and both long tentacular tips are intact and individually visible.

A second stronger maturity candidate was also reviewed:
- **Source page:** https://commons.wikimedia.org/wiki/File:Architeuthis_dux_-_Smithsonain_Museum.JPG
- **Original:** https://live.staticflickr.com/7025/6670824005_ab725730e9_o.jpg
- **Displayed file:** 1333x2000 on Commons; source metadata identifies a **female**, about 10.9 m and 149.6 kg, caught off northern Spain in 2005
- **License:** **CC BY-SA 2.0**
- **Adult context:** Smithsonian exhibit material describes the hall as containing an adult and a juvenile; this large female is the strong adult candidate.
- **Problem:** the museum-tank pose has arms/tentacles overlapped/coiled enough that strict visibility of all appendage tips cannot be certified for clean full-body cutout work.

A Smithsonian installation photograph of the male exhibit was also visually reviewed through image search. It shows many arms and suckers clearly but the crowded vertical arrangement overlaps appendages and does not solve the all-tip requirement.

**Status:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`. This is not a completed image. The search established excellent exact-species, reusable, sex-documented source material but did not simultaneously satisfy adult certainty and strict clean visibility of all eight arms plus both tentacles. No PNG was produced because the connected GitHub writer remains text-only.

**Next unresolved source-quality legacy audit: Gibbon.**

### 2026-09-20 Hercules Beetle new-animal image
Preferred documentation candidate:
- **Source page:** https://commons.wikimedia.org/wiki/File:Dynastes_hercules_ecuatorianus_MHNT.jpg
- **Original:** https://upload.wikimedia.org/wikipedia/commons/0/0e/Dynastes_hercules_ecuatorianus_MHNT.jpg
- **Resolution:** **5861x3853**
- **Taxon:** exact *Dynastes hercules ecuatorianus*
- **Sex:** explicitly male
- **Size:** explicitly 15.5 cm
- **Creator:** Didier Descouens / Muséum de Toulouse
- **License:** **CC BY-SA 4.0**
- **Visual standard:** featured/quality focus-stacked photograph with the complete horn-to-abdomen silhouette and six legs in frame.
- **Blocker:** it is a mounted museum specimen, not a healthy living adult. A live Photo Ark adult male was found but is rights-managed. Therefore the mandatory healthy-adult photo standard is not yet satisfied.
- **Status:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`.

No transparent PNG is claimed. The current GitHub connector cannot write the required PNG binary, and the preferred source itself still fails the living/healthy subject requirement.

## Recent prior decisive findings
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
- `95` is completed text research, not completed images.
- `0` remains the verified transparent-PNG count.
- Current connected GitHub writers accept UTF-8 text, not PNG binary. No JPEG rename, base64 text, opaque checkerboard or fake `.png` is created.
- Source-verified animals are skipped until new binary tooling permits actual PNG production or a superior source resolves an outstanding verification issue.
- **Next unresolved source-quality legacy audit: Gibbon.**