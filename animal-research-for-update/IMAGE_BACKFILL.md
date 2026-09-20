# Image delivery audit and backfill queue

**Research reports completed:** 93 / 225 (through Hedgehog). **Full-body transparent PNG assets verified and committed:** 0 / 93. A source-photo URL is not an approved PNG.

`IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Exact species, healthy adult, complete anatomy, real-photo provenance, adequate quality and genuine alpha transparency are all required before image completion. Current connected GitHub write actions are UTF-8 text-only, so verified source photos remain pending rather than being faked as PNGs.

## Queue policy
Animals already source-verified or already audited are skipped until binary tooling becomes available or a materially better source resolves an outstanding verification issue. The oldest unresolved source-quality candidate is addressed each run.

Earlier source-verified animals remain binary-pending as recorded in their research files and prior revisions of this ledger. Earlier audited unresolved animals retain their report status and are not repeatedly revisited. The active unresolved queue from this point is:

| Animal | Current status | Next action |
|---|---|---|
| Gecko | REPLACEMENT SOURCE NEEDED | **Audited; explicit adult male source remains only 1008px; skip unless materially better source appears** |
| Giant Centipede | REPLACEMENT SOURCE NEEDED | **NEXT UNRESOLVED SOURCE AUDIT: 1600+ adult** |
| Giant Squid | SOURCE FOUND - FULL-BODY NOT VERIFIED | Adult/all arm tips |
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
| Harpy Eagle | SOURCE FOUND - FULL-BODY NOT VERIFIED | New research; promising complete perched source, adulthood/sex and strict original certification unresolved |
| Hedgehog | SOURCE FOUND - FULL-BODY NOT VERIFIED | New research; 2500x1662 exact-species reusable candidate, adulthood/all feet/tiny tail unresolved |

## Latest findings

### 2026-09-20 Gecko legacy audit
The staging report resolves generic `Gecko` to **Tokay Gecko (*Gekko gecko*)**, so broad image discovery was constrained to that exact taxon.

The strongest biologically verified existing source remains:
- **Source page:** https://commons.wikimedia.org/wiki/File:Tokay_gecko_(Gekko_gecko)_adult_male.jpg
- **Original:** https://upload.wikimedia.org/wikipedia/commons/6/67/Tokay_gecko_%28Gekko_gecko%29_adult_male.jpg
- **Resolution:** **1008x460**
- **Taxon:** exact *Gekko gecko*
- **Adult/sex:** explicitly **adult male**, USNM 573671, SVL 142 mm, TL 236 mm
- **License:** **CC BY 3.0**
- **Problem:** below the mandatory preferred 1600px threshold and extracted/cropped from a scientific figure; not a strong clean staging cutout source.

Broad search reviewed the Commons *Gekko gecko* category and other web sources. Reusable exact-species files exist at 1987x1486, 2048px, 2648x2232, 3024x4032, 3615x2180, 4096x2334, 4608x3456 and 6235x4157, and a 3168x4752 Pixabay exact-species photograph was also found. However, the recovered metadata did not explicitly establish adulthood for those high-resolution candidates, and strict complete head-to-tail plus every-toe visibility was not simultaneously verified. Commercial listings explicitly identify adult males but do not establish redistribution rights appropriate for committing a cutout.

**Status remains:** `REPLACEMENT SOURCE NEEDED`. No lower-quality or adulthood-unknown image was promoted merely to advance the queue. No PNG was produced because the connected GitHub writer remains text-only.

**Next unresolved source-quality legacy audit: Giant Centipede.**

### 2026-09-20 Hedgehog new-animal image
The staging profile resolves generic `Hedgehog` / production `Erinaceinae` to **Western European Hedgehog (*Erinaceus europaeus*)**.

Preferred reusable candidate:
- **Source page:** https://commons.wikimedia.org/wiki/File:West_European_Hedgehog_(Erinaceus_europaeus)1.jpg
- **Original image:** https://upload.wikimedia.org/wikipedia/commons/8/82/West_European_Hedgehog_%28Erinaceus_europaeus%291.jpg
- **Resolution:** **2500x1662**
- **Taxon:** exact *E. europaeus*
- **Creator:** Hrald
- **License:** **CC BY-SA 3.0 / GFDL**
- **Provenance:** own-work wild photograph from Emmerdennen, Netherlands.
- **Unresolved:** metadata does not explicitly state adulthood or sex, and strict visibility of every foot plus the very short tail could not be certified. Since adulthood is mandatory, this remains a candidate only.
- **Status:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`.

No PNG was produced.

## Recent prior decisive findings
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
- `93` is completed text research, not completed images.
- `0` remains the verified transparent-PNG count.
- Current connected GitHub writers accept UTF-8 text, not PNG binary. No JPEG rename, base64 text, opaque checkerboard or fake `.png` is created.
- Source-verified animals are skipped until new binary tooling permits actual PNG production or a superior source resolves an outstanding verification issue.
- **Next unresolved source-quality legacy audit: Giant Centipede.**