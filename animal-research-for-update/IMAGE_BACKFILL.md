# Image delivery audit and backfill queue

**Research reports completed:** 94 / 225 (through Hellbender). **Full-body transparent PNG assets verified and committed:** 0 / 94. A source-photo URL is not an approved PNG.

`IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Exact species, healthy adult, complete anatomy, real-photo provenance, adequate quality and genuine alpha transparency are all required before image completion. Current connected GitHub write actions are UTF-8 text-only, so verified source photos remain pending rather than being faked as PNGs.

## Queue policy
Animals already source-verified or already audited are skipped until binary tooling becomes available or a materially better source resolves an outstanding verification issue. The oldest unresolved source-quality candidate is addressed each run.

| Animal | Current status | Next action |
|---|---|---|
| Gecko | REPLACEMENT SOURCE NEEDED | Audited; explicit adult male source remains only 1008px; skip unless materially better source appears |
| Giant Centipede | SOURCE FOUND - FULL-BODY NOT VERIFIED | **Audited; 4000x3000 complete-anatomy reusable source, but adulthood not explicit; skip unless adulthood is resolved** |
| Giant Squid | SOURCE FOUND - FULL-BODY NOT VERIFIED | **NEXT UNRESOLVED SOURCE AUDIT: adult/all arm tips** |
| Gibbon | SOURCE FOUND - FULL-BODY NOT VERIFIED | Adult/unobscured hand |
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

## Latest findings

### 2026-09-20 Giant Centipede legacy audit
The existing staging profile resolves Giant Centipede to **Amazonian giant centipede / *Scolopendra gigantea***. Broad search reviewed Commons, GBIF/iNaturalist-derived material and other web photographs rather than restricting discovery to one provider.

Strongest reusable candidate found:
- **Source page:** https://commons.wikimedia.org/wiki/File:Scolopendra_gigantea.jpg
- **Original image:** https://upload.wikimedia.org/wikipedia/commons/8/8b/Scolopendra_gigantea.jpg
- **Resolution:** **4000x3000**
- **Taxon:** exact *Scolopendra gigantea*, photographed in Vieques, Puerto Rico
- **Creator:** Katka Nemčoková
- **License:** **CC BY-SA 3.0**
- **Visual inspection:** original was opened and inspected. The animal is a single real centipede in a U-shaped pose with head, complete trunk, antennae, walking legs and terminal appendages inside the frame. No watermark, group, illustration or AI substitution is present.
- **Unresolved:** source metadata does **not explicitly establish adulthood**. Because adulthood is mandatory under `IMAGE_REQUIREMENTS.md`, visual size/appearance is not used to infer adult status.

A newer 2026 zoo photograph at 1153x1792 and a 4608x3456 aquarium photograph were also found, but neither provided stronger explicit adult verification. The 4000x3000 wild source is therefore retained as the preferred candidate while adult verification remains open.

**Status:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`. This is an improvement over the previous generic replacement-source state, but it is not a completed image and not yet eligible for cutout promotion. No PNG was produced because the connected GitHub writer remains text-only.

**Next unresolved source-quality legacy audit: Giant Squid.**

### 2026-09-20 Hellbender new-animal image
Preferred source:
- **Source page:** https://www.fws.gov/media/adult-eastern-hellbender
- **Original:** FWS page original download, **3072x2304**
- **Taxon:** exact Eastern Hellbender, *Cryptobranchus alleganiensis alleganiensis*
- **Adult:** explicitly verified by USFWS as "Adult hellbender in the wild in New York."
- **Sex:** unknown, not inferred visually
- **Creator/credit:** Ken Roblee/New York Department of Environmental Conservation
- **License:** **Public Domain** per USFWS
- **Visual standard:** source selection was checked for complete-animal framing rather than accepted from dimensions/search text alone.
- **Status:** `FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING`.

No transparent PNG is claimed. The current GitHub connector cannot write the required PNG binary, so background removal, RGBA/alpha verification and final silhouette inspection remain pending.

## Recent prior decisive findings
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
- `94` is completed text research, not completed images.
- `0` remains the verified transparent-PNG count.
- Current connected GitHub writers accept UTF-8 text, not PNG binary. No JPEG rename, base64 text, opaque checkerboard or fake `.png` is created.
- Source-verified animals are skipped until new binary tooling permits actual PNG production or a superior source resolves an outstanding verification issue.
- **Next unresolved source-quality legacy audit: Giant Squid.**