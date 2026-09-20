# Image delivery audit and backfill queue

**Research reports completed:** 97 / 225 (through Honey Badger). **Full-body transparent PNG assets verified and committed:** 0 / 97. A source-photo URL is not an approved PNG.

`IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Exact species, healthy adult, complete anatomy, real-photo provenance, adequate quality and genuine alpha transparency are all required before image completion. Current connected GitHub write actions are UTF-8 text-only, so verified source photos remain pending rather than being faked as PNGs.

## Queue policy
Animals already source-verified or already audited are skipped until binary tooling becomes available or a materially better source resolves an outstanding verification issue. The oldest unresolved source-quality candidate is addressed each run.

| Animal | Current status | Next action |
|---|---|---|
| Gecko | REPLACEMENT SOURCE NEEDED | Audited; explicit adult male source remains only 1008px; skip unless materially better source appears |
| Giant Centipede | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; 4000x3000 complete-anatomy reusable source, but adulthood not explicit; skip unless adulthood is resolved |
| Giant Squid | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; exact female/reusable sources found, but strict adult + all-arm/tentacle-tip visibility not simultaneously verified; skip unless better source appears |
| Gibbon | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; exact *Hylobates lar* reusable 4000x3085 source found, but explicit adulthood/sex and strict unobscured hands/feet are not simultaneously verified; skip unless better source appears |
| Gila Monster | SOURCE FOUND - FULL-BODY NOT VERIFIED | **Audited; reusable exact-species high-resolution and BLM public-domain sources found, but adulthood plus strict every-toe/complete-tail framing not simultaneously verified; skip unless materially better source appears** |
| Giraffe | SOURCE FOUND - FULL-BODY NOT VERIFIED | **NEXT UNRESOLVED SOURCE AUDIT: adult/hooves/tail** |
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
| Honey Badger | SOURCE FOUND - FULL-BODY NOT VERIFIED | 4475x3042 exact-species CC BY-SA 2.0 single male; adulthood/strict feet-tail verification unresolved |

## Latest findings

### 2026-09-20 Gila Monster legacy audit
The staging profile already resolves the animal to exact **Gila monster, *Heloderma suspectum***. This run searched broadly across Commons, Bureau of Land Management material, zoo imagery, Flickr-derived sources and general image search rather than accepting the first provider.

Strong reusable candidates checked:
- **Existing primary:** https://commons.wikimedia.org/wiki/File:Gila_monster_(Heloderma_suspectum).jpg, **4358x2586**, exact species, CC BY-SA 4.0. It remains high-resolution and reusable, but metadata does not establish adulthood and strict every-toe plus complete-tail visibility is unresolved.
- **Madrid Zoo alternate:** https://commons.wikimedia.org/wiki/File:Heloderma_suspectum.001_-_Zoo_Aquarium_de_Madrid.JPG, **3264x2448**, exact species, CC BY-SA 4.0. Exact taxon and reuse are strong; adulthood and strict appendage framing remain unresolved.
- **BLM 2020 alternate:** https://commons.wikimedia.org/wiki/File:Gila_monster_(54962886152).jpg, **1536x2048**, exact Gila monster photographed on BLM public land near Tucson, **Public Domain** as U.S. federal-government work. Commons records the original Flickr image URL as https://live.staticflickr.com/65535/54962886152_4de3ab85e9_o.jpg. This has especially clean provenance but still does not explicitly establish adulthood, and strict full-body suitability could not be certified strongly enough to displace the existing higher-resolution candidate.
- General image search also surfaced clear exact-species zoo and field photographs, but several crop the tail or body, are rights-managed, or lack explicit adulthood.

**Outcome:** no candidate simultaneously clears exact species + healthy adult + strict complete anatomy + adequate quality + reusable provenance. Existing report already records its source page and original-photo URL, so the unresolved primary is retained rather than replaced by another unverified candidate. Status remains `SOURCE FOUND - FULL-BODY NOT VERIFIED`. No PNG is claimed.

**Next unresolved source-quality legacy audit: Giraffe.**

### 2026-09-20 Honey Badger new-animal image
Preferred candidate:
- **Source page:** https://commons.wikimedia.org/wiki/File:Ratel_(Mellivora_capensis)_(52752818915).jpg
- **Original image:** https://upload.wikimedia.org/wikipedia/commons/6/65/Ratel_%28Mellivora_capensis%29_%2852752818915%29.jpg
- **Resolution:** **4475x3042**
- **Taxon:** exact *Mellivora capensis*
- **Sex:** Commons categories identify one male organism
- **Creator:** Bernard DUPONT
- **License:** **CC BY-SA 2.0**, original Flickr license reviewed by Commons
- **Strengths:** genuine high-resolution photograph, single standing animal, exact species, verified male and reusable provenance.
- **Blockers:** adulthood is not explicit in the file metadata, and this run could not certify strict visibility of every foot/toe plus the complete tail from the original binary. The American Society of Mammalogists image library independently has an exact-species side view explicitly described as “feet and tail visible,” but the Commons candidate has stronger immediately verified resolution/reuse metadata.
- **Status:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`.

No transparent PNG is claimed because the connected GitHub writer accepts UTF-8 text, not PNG binary.

## Recent prior decisive findings
- **Gibbon:** exact *Hylobates lar* reusable 4000x3085 source found; adult/sex and strict hands/feet unresolved.
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
- `97` is completed text research, not completed images.
- `0` remains the verified transparent-PNG count.
- Current connected GitHub writers accept UTF-8 text, not PNG binary. No JPEG rename, base64 text, opaque checkerboard or fake `.png` is created.
- Source-verified animals are skipped until new binary tooling permits actual PNG production or a superior source resolves an outstanding verification issue.
- **Next unresolved source-quality legacy audit: Giraffe.**
