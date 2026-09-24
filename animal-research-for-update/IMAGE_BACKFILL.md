# Image delivery audit and backfill queue

**Research reports completed:** 183 / 225 (through Salamander). **Full-body transparent PNG assets verified and committed:** 0 / 183. A source-photo URL is not an approved PNG.

`IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Exact species, healthy adult, complete anatomy, real-photo provenance, adequate quality and genuine alpha transparency are required. Current connected GitHub write actions are UTF-8 text-only, so source photos remain pending rather than being faked as PNGs.

## Queue policy
Animals already source-verified are skipped until binary tooling becomes available. The oldest unresolved source-quality candidate is addressed each run. `REPLACEMENT SOURCE NEEDED`, `SOURCE FOUND - FULL-BODY NOT VERIFIED`, and licensing blockers remain unresolved until a genuinely better source is found.

## Active unresolved source-quality queue
Giant Squid; Gibbon; Gila Monster; Golden Eagle; Goliath Birdeater; Goose; Gorilla; Gray Wolf; Great Horned Owl; Great White Shark; Green Anaconda; Hammerhead Shark; Harpy Eagle; Hedgehog; Hippopotamus; Honey Badger; Howler Monkey; Hummingbird; Huntsman Spider; Hyena; Iguana; Impala; Jackal; Jaguar; Japanese Macaque; Kangaroo; King Cobra; King Crab; Kiwi; Koala; Komodo Dragon; Kookaburra; Leatherback Sea Turtle; Leopard; **Llama**; **Lobster (NEXT)**; Lynx; Macaw; Mandrill; Narwhal; Nautilus; Opossum; Orangutan; Orca; Osprey; Ostrich; Otter; Pangolin; Peacock; Pelican; Peregrine Falcon; Piranha; Platypus; Poison Dart Frog; Polar Bear; Porcupine; Praying Mantis; Proboscis Monkey; Puffin; Python; Quokka; Quoll; Raccoon; Rattlesnake; Raven; Red Fox; Red Panda; Red-Eyed Tree Frog; Red-tailed Hawk; Sailfish; Salamander; Megalodon.

## 2026-09-23 Llama legacy audit
Roster Llama resolves to ***Lama glama***, with a healthy fully mature intact male preferred because males are the principal dominance fighters. The existing report's 4000x3000 exact-species candidate remains a visually strong standing full-body composition, but its metadata does not explicitly establish adulthood or sex.

Fresh broad search checked Commons and general image results rather than relying on one provider. The strongest new reusable source inspected was:
- Source page: https://commons.wikimedia.org/wiki/File:Lama_glama_(Lama).jpg
- Original: https://upload.wikimedia.org/wikipedia/commons/6/6a/Lama_glama_%28Lama%29.jpg
- **3000x2000**, **CC BY-SA 4.0**, exact *Lama glama*, photographed in the Italian Alps.
- Direct visual inspection shows a seated/resting animal with the body overlapping the limbs; all four feet are not cleanly visible as a strict isolated silhouette. Metadata also does not explicitly establish adulthood or sex.

Other search results included a 3888x2592 CC BY-SA 2.0 exact-species Machu Picchu photograph and newer 1200x1600 CC BY-SA 4.0 material, but none established the mandatory adult/fighting-sex/full-anatomy combination better than the existing candidate. Stock/Getty/Pngtree results were not used because licensing/watermark restrictions make them unsuitable for redistribution.

**Result:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Existing primary candidate remains in place; no weaker replacement is promoted. No PNG created. **Lobster is next practical unresolved legacy audit.**

## 2026-09-23 Salamander new-animal image audit
Roster Salamander is generic `Caudata` in the live schema; the staging report resolves it to Eastern Tiger Salamander ***Ambystoma tigrinum*** so a species-specific image can be required.

Primary reusable candidate:
- Source page: https://commons.wikimedia.org/wiki/File:Tiger_Salamander_(Ambystoma_tigrinum).jpg
- Original: https://upload.wikimedia.org/wikipedia/commons/8/88/Tiger_Salamander_%28Ambystoma_tigrinum%29.jpg
- **4450x2708**, exact *A. tigrinum*, photographed by Sam Stukel / USFWS Mountain Prairie at Gavins Point National Fish Hatchery.
- Commons records a **Public Domain Mark** and confirms Flickr license review.
- Direct visual inspection confirms a single real salamander with the entire head, torso, all four limbs/feet and full tail inside the frame against a simple pale background. This is excellent cutout geometry.
- Mandatory blocker: the reusable source metadata does **not explicitly establish adulthood or sex**.

Separate Flickr evidence was checked for adulthood. Jake M. Scott explicitly labels one subject an **adult male Eastern Tiger Salamander**, and Nick Scobel explicitly labels another a **large adult male** breeding migrant from southeast Michigan. Both Flickr pages are **All Rights Reserved**, so they are verification references only and cannot be redistributed as cutout sources without permission.

**Result:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`. The public-domain candidate passes exact-species, resolution, real-photo, full-anatomy and licensing checks but fails explicit adulthood verification. No PNG created.

## Recent unresolved audits retained
- **Leopard:** existing 4355x2630 reusable male source has previously verified complete-body framing but lacks explicit adulthood. A 4320x2592 reusable male and separate 1367x1620 explicitly adult source do not improve every mandatory dimension simultaneously. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Leatherback Sea Turtle:** 1784x1168 NOAA public-domain exact-species source explicitly says adult, but strict complete-body visibility was not certified. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Sable Antelope:** 5184x3648 CC BY-SA 4.0 Featured/Quality image explicitly documents an adult male, but brush/grass overlap lower legs/feet and tail isolation is imperfect. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Sailfish:** 2560x1536 CC BY 4.0 IFREMER exact-species source has strong provenance and metadata noting an associated backgroundless PNG, but adulthood, sex and strict complete silhouette are not simultaneously established. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.

## Source-verified cutout backlog
These have already passed source/full-body review and should not be repeatedly re-researched while GitHub binary writing remains unavailable:
- Hellbender: exact adult, public-domain 3072x2304 USFWS source.
- Hornet: exact adult queen *Vespa crabro*, 2048x1536 CC BY-SA 4.0.
- Ibex: exact adult male *Capra ibex*, 3233x2155 CC BY-SA 4.0.
- Kudu: explicit adult male *Tragelaphus strepsiceros*, 3008x2000 CC BY-SA 2.0.
- Lionfish: explicit adult ~250 mm lionfish, public-domain USGS/NOAA source.
- Gecko: explicit adult male *Gekko gecko*, 1008x460 CC BY 3.0; regenerated tail documented.
- Giraffe: explicit adult male, 2500x2500 CC BY 2.0.
- Guanaco: explicit adult *Lama guanicoe*, 3648x2736 CC BY-SA 3.0/GFDL; sex unknown.
- Hercules Beetle: live newly emerged male *Dynastes hercules*, 4000x2248 CC BY 2.0.
- Pronghorn: explicit adult male *Antilocapra americana*, 5071x3581 CC BY-SA 4.0 Quality Image.
- Pufferfish: exact *Arothron hispidus*, 6069x4046 CC BY-SA 4.0 Featured/Quality Image.

## Structural and tooling blockers
- `183` is completed text research, not completed images.
- `0` remains the verified transparent-PNG count.
- Current connected GitHub writers accept UTF-8 text, not PNG binary. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or fake `.png` is created.
- Megalodon cannot satisfy a real-adult-photograph rule because it is extinct.
- Giant Squid remains unresolved because available preserved-adult imagery does not satisfy the healthy-living-adult requirement.
- **Next practical unresolved source-quality legacy audit: Lobster.**