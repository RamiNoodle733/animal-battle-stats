# Image delivery audit and backfill queue

**Research reports completed:** 92 / 225 (through Harpy Eagle). **Full-body transparent PNG assets verified and committed:** 0 / 92. A source-photo URL is not an approved PNG.

`IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Exact species, healthy adult, complete anatomy, real-photo provenance, adequate quality and genuine alpha transparency are all required before image completion. Current connected GitHub write actions are UTF-8 text-only, so verified source photos remain pending rather than being faked as PNGs.

## Queue policy
Animals already source-verified or already audited are skipped until binary tooling becomes available or a materially better source resolves an outstanding verification issue. The oldest unresolved source-quality candidate is addressed each run.

Earlier source-verified animals remain binary-pending as recorded in their research files and prior revisions of this ledger. Earlier audited unresolved animals retain their report status and are not repeatedly revisited. The active unresolved queue from this point is:

| Animal | Current status | Next action |
|---|---|---|
| Gazelle | SOURCE FOUND - FULL-BODY NOT VERIFIED | **Audited; skip unless better explicit-adult reusable source appears** |
| Gecko | REPLACEMENT SOURCE NEEDED | **NEXT UNRESOLVED SOURCE AUDIT: 1600+ adult male** |
| Giant Centipede | REPLACEMENT SOURCE NEEDED | 1600+ adult |
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

## Latest findings

### 2026-09-20 Gazelle legacy audit
The existing staging report resolves generic `Gazelle` to **Dorcas gazelle (*Gazella dorcas*)**, so image searching was constrained to that exact taxon rather than generic gazelles.

Existing reusable candidate:
- **Source page:** https://commons.wikimedia.org/wiki/File:Gazelle_dorcas_dans_le_parc_national_de_Bouhedma_-_tunisie.jpg
- **Original image:** https://upload.wikimedia.org/wikipedia/commons/1/14/Gazelle_dorcas_dans_le_parc_national_de_Bouhedma_-_tunisie.jpg
- **Resolution:** **6000x4000**
- **Taxon:** exact *Gazella dorcas*
- **Creator:** Skander zarrad
- **Location/date:** Bouhedma National Park, Tunisia; 13 July 2023
- **License:** **CC BY-SA 4.0**
- **Provenance:** own work; genuine JPEG photograph; Commons file page and license verified.
- **Strict audit:** resolution and reuse rights are excellent, but the Commons metadata does not explicitly establish adulthood or sex, and the available tooling did not permit opening the original 17.17 MB binary for strict every-hoof/tail pixel-level certification. It therefore cannot be promoted merely from dimensions or the page description.

Broad search also found a photograph explicitly captioned **“Adult male”** *Gazella dorcas* in the Negev, but Flickr marks it **All Rights Reserved**, so it is not suitable for redistribution/committed cutout despite excellent biological identification. An American Society of Mammalogists page also explicitly identifies a side-view adult male, but the current tool result does not establish a high-resolution reusable original suitable for the required 1600+ target.

**Status remains:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`.

No PNG was produced. Current GitHub writer remains UTF-8 text-only. The existing Gazelle report already records the preferred Commons source page and original-image URL, so it was not rewritten redundantly.

**Next unresolved source-quality legacy audit: Gecko.**

### 2026-09-20 Harpy Eagle new-animal image
Preferred reusable candidate found during broad image and Commons search:
- **Source page:** https://commons.wikimedia.org/wiki/File:Gavi%C3%A3o-real_%28Harpia_harpyja%29.jpg
- **Original image:** https://upload.wikimedia.org/wikipedia/commons/7/73/Gavi%C3%A3o-real_%28Harpia_harpyja%29.jpg
- **Resolution:** **2081x2271**
- **Taxon:** exact *Harpia harpyja*
- **Creator:** Luiz Fernando Matos
- **License:** **CC BY-SA 4.0**
- **Visual search inspection:** one perched bird is shown with head, torso, folded wings, both feet/talons and tail visible, making it substantially stronger than headshots and obstructed alternatives.
- **Unresolved:** source metadata does not explicitly establish adulthood or sex, and the original binary could not be opened through the available image-processing path for strict pixel-level complete-body certification.
- **Status:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`.

No PNG was produced.

## Recent prior decisive findings
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
- `92` is completed text research, not completed images.
- `0` remains the verified transparent-PNG count.
- Current connected GitHub writers accept UTF-8 text, not PNG binary. No JPEG rename, base64 text, opaque checkerboard or fake `.png` is created.
- Source-verified animals are skipped until new binary tooling permits actual PNG production or a superior source resolves an outstanding verification issue.
- **Next unresolved source-quality legacy audit: Gecko.**