# Image delivery audit and backfill queue

**Research reports completed:** 196 / 225 (through Snapping Turtle). **Full-body transparent PNG assets verified and committed:** 0 / 196. A source-photo URL is not an approved PNG.

`IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Exact species, healthy adult, complete anatomy, real-photo provenance, adequate quality and genuine alpha transparency are required. Current connected GitHub write actions are UTF-8 text-only, so source photos remain pending rather than being faked as PNGs.

## Queue policy
Animals already source-verified are skipped until binary tooling becomes available. The oldest unresolved source-quality candidate is addressed each run. `REPLACEMENT SOURCE NEEDED`, `SOURCE FOUND - FULL-BODY NOT VERIFIED`, and licensing blockers remain unresolved until a genuinely better source is found.

## Active unresolved source-quality queue
Giant Squid; Gibbon; Gila Monster; Golden Eagle; Goliath Birdeater; Goose; Gorilla; Gray Wolf; Great Horned Owl; Great White Shark; Green Anaconda; Hammerhead Shark; Harpy Eagle; Hedgehog; Hippopotamus; Honey Badger; Howler Monkey; Hummingbird; Huntsman Spider; Hyena; Iguana; Impala; Jackal; Jaguar; Japanese Macaque; Kangaroo; King Cobra; King Crab; Kiwi; Koala; Komodo Dragon; Kookaburra; Leatherback Sea Turtle; Leopard; Llama; Lobster; Lynx; Macaw; Mandrill; Narwhal; Nautilus; Opossum; Orangutan; Orca; Osprey; Ostrich; Otter; **Pangolin**; **Peacock (NEXT)**; Pelican; Peregrine Falcon; Piranha; Platypus; Poison Dart Frog; Polar Bear; Porcupine; Praying Mantis; Proboscis Monkey; Puffin; Python; Quokka; Quoll; Raccoon; Rattlesnake; Raven; Red Fox; Red Panda; Red-Eyed Tree Frog; Red-tailed Hawk; Sailfish; Salamander; Saltwater Crocodile; Sawfish; Sea Lion; Sea Otter; Seal; Secretary Bird; Serval; Shoebill; Siberian Tiger; Skunk; Sloth; Sloth Bear; Snapping Turtle; Megalodon.

## 2026-09-24 Pangolin legacy audit
Roster Pangolin is resolved in the completed report to **Sunda pangolin, *Manis javanica***, with a prime mature male as canonical fighter.

Broad discovery included Google-style search, Wikimedia Commons/iNaturalist material, USFWS/Flickr provenance, photographer/wildlife pages and other image results. The strongest newly documented reusable lead is:

- Source page: https://commons.wikimedia.org/wiki/File:Manis_javanica_101596.jpg
- Original image: https://upload.wikimedia.org/wikipedia/commons/d/d1/Manis_javanica_101596.jpg
- Exact *Manis javanica*, photographed in Indonesia on 30 March 2012.
- **1920×1280** JPEG, direct photograph.
- Photographer: Firman / iNaturalist photo 101596.
- License: **CC BY 4.0**, independently reviewed by iNaturalistReviewBot on Commons.

Visual search inspection shows a real Sunda pangolin with the head, torso and limbs visible, but the long tail runs to/through the frame edge rather than giving a clean complete tail-tip silhouette. The source metadata also does not explicitly establish adulthood or sex. A separate 2048×1536 CC BY 4.0 Singapore source and several high-resolution Commons candidates were found, but none inspected or documented this run simultaneously established exact adult status, canonical male sex and strict head-to-tail/all-feet framing.

A 413×600 USFWS/Commons file has excellent public-domain provenance but is far below the preferred resolution and is not a stronger primary candidate. A Thai National Parks result explicitly labels one photographed *M. javanica* as **sub-adult**, so it is unsuitable for the adult requirement.

**Result:** `REPLACEMENT SOURCE NEEDED`. The 1920×1280 CC BY 4.0 source is retained as a useful provenance lead but fails the strict complete-tail/adult requirement. No PNG created or claimed. **Peacock is next practical unresolved legacy audit.**

## 2026-09-24 Snapping Turtle new-animal image audit
Roster Snapping Turtle is exact species **Common Snapping Turtle, *Chelydra serpentina***; canonical research specimen is a large healthy mature male.

Primary reusable lead:
- Source page: https://commons.wikimedia.org/wiki/File:Common_Snapping_Turtle_white_background_(2).jpg
- Original: https://upload.wikimedia.org/wikipedia/commons/2/28/Common_Snapping_Turtle_white_background_%282%29.jpg
- **5055×2528** exact-species male, approximately **40 lb**, photographed by Sam Stukel at Gavins Point National Fish Hatchery.
- Simple white source background is favorable for a faithful cutout.
- Public Domain Mark on the originating USFWS Mountain Prairie Flickr record, reviewed by Commons.
- Current visual tooling did not establish every foot/limb and the complete tail at original resolution, and the metadata does not literally label the specimen adult/mature.

Alternate adult-verified lead:
- https://commons.wikimedia.org/wiki/File:Common_Snapping_Turtle_(Chelydra_serpentina)on_a_Walk_(51325755497).jpg
- **6000×4000**, exact species, explicitly **mature male**, USFWS public domain.
- Direct 960 px visual inspection showed the tail and portions of the distal feet obscured by the body/grass, so it was rejected as primary despite excellent biological provenance.

**Result:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`. No cutout or PNG is claimed.

## 2026-09-24 Otter legacy audit
Roster Otter is **North American river otter, *Lontra canadensis***. Existing ADW source is exact species, live, explicitly adult/sexually mature and CC BY-NC-SA 3.0, but current direct-image tooling cannot certify complete all-feet/head-to-tail framing. **Result:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`.

## Recent unresolved audits retained
- **Ostrich:** 3621×3648 CC BY-SA 2.0 wild Karoo National Park exact-*Struthio camelus* male; original binary timed out and adulthood is not explicit. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Osprey:** 1139×1627 CC BY 4.0 exact *Pandion haliaetus*, explicitly 4-year-old male; perch/needles overlap feet and lower tail. `REPLACEMENT SOURCE NEEDED`.
- **Orca:** 1632×1104 public-domain USFWS source explicitly identifies a male, but water hides ventral body, pectoral fins and flukes. `REPLACEMENT SOURCE NEEDED`.
- **Orangutan:** 5184×3456 CC BY-SA 4.0 exact *Pongo pygmaeus* male lead; oversized original not renderable for strict appendage inspection and adulthood/flanged maturity not explicit. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Opossum:** 2048×1365 CC BY 4.0 walking candidate clips/reaches rear/tail edge; separate ASM/MDD record explicitly says adult but redistribution/high-resolution complete framing not established. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Nautilus:** 2848×3798 CC BY-SA 4.0 exact-species living candidate has strong provenance, but adulthood and strict visibility of numerous tentacles remain unresolved. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Narwhal:** explicit adult-male ASM record exists, but redistribution permission and complete tusk-to-fluke framing were not established. `LICENSE UNVERIFIED - DO NOT COMMIT`.
- **Mandrill:** exact adult-male reusable photographs exist, but inspected candidates obscure/crop distal limbs or are portraits. `REPLACEMENT SOURCE NEEDED`.
- **Macaw:** explicit adult wild *Ara macao* source exists, but perch/tail framing and redistribution permission fail simultaneous verification. `LICENSE UNVERIFIED - DO NOT COMMIT`.
- **Lynx:** standing exact-*Lynx lynx* candidate cleanly shows body/legs/feet/tail but lacks explicit adulthood/sex. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Lobster:** high-resolution reusable exact-*Homarus americanus* crevice photographs hide abdomen/tail and walking appendages. `REPLACEMENT SOURCE NEEDED`.
- **Llama:** 3000×2000 CC BY-SA 4.0 exact-species candidate is seated/overlapped; existing standing candidate lacks explicit adulthood/sex. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Leopard:** existing 4355×2630 reusable male source has complete-body framing but lacks explicit adulthood. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Leatherback Sea Turtle:** 1784×1168 NOAA public-domain exact-species source explicitly says adult, but strict complete-body visibility was not certified. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Sailfish:** 2560×1536 CC BY 4.0 IFREMER exact-species source has strong provenance, but adulthood, sex and strict silhouette are not simultaneously established. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Salamander:** 4450×2708 USFWS/Public Domain Mark exact *Ambystoma tigrinum* photo passes framing but does not explicitly establish adulthood or sex. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Saltwater Crocodile:** exact-species reusable candidate has excellent visible anatomy, but source metadata does not explicitly establish adulthood or sex. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Sawfish:** 3752×2501 CC BY 2.0 exact-*Pristis pristis* candidate has strong provenance, but adulthood/sex and strict rostrum-to-tail framing are not simultaneously verified. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Sea Lion:** explicit-male candidates clip rear body/hindquarters. `REPLACEMENT SOURCE NEEDED`.
- **Sea Otter:** public-domain 1800×1200 USFWS source has good provenance but resting pose does not expose every limb/foot and adulthood/sex are not explicit. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Seal:** 2100×1368 USFWS public-domain source has good provenance but foreflippers are not cleanly exposed and adulthood/sex are not explicit. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Secretary Bird:** 4320×2592 CC BY-SA 2.0 wild exact-species source lacks explicit adulthood/sex and strict foot/toe plus tail verification. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Serval:** 5184×3456 CC BY 2.0 exact-species wild source has strong provenance but adulthood/sex and strict complete-body framing are not simultaneously established. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Shoebill:** 1438×2126 CC BY 3.0 exact-species photo has directly verified complete framing, but source metadata does not explicitly establish adulthood or sex. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Siberian Tiger:** 4928×3264 CC0 exact-population lead has excellent reuse provenance but current fetch could not render oversized original for strict inspection and metadata lacks explicit adulthood/sex. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Skunk:** 4288×2848 CC BY 2.0 exact-species source has complete head/body/tail but snow overlaps distal feet and adulthood/sex are not explicit. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Sloth:** 3231×2122 CC BY-SA 2.0 exact-*B. tridactylus* male source has strong provenance but adulthood and strict complete-body framing are not simultaneously verified. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Sloth Bear:** 3802×2535 CC BY-SA 4.0 wild male *M. u. inornatus* has one rear limb/foot substantially self-occluded; separate ADW source verifies adulthood but not strict framing. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.

## Source-verified cutout backlog
These have already passed source/full-body review and should not be repeatedly re-researched while GitHub binary writing remains unavailable:
- Hellbender: exact adult, public-domain 3072×2304 USFWS source.
- Hornet: exact adult queen *Vespa crabro*, 2048×1536 CC BY-SA 4.0.
- Ibex: exact adult male *Capra ibex*, 3233×2155 CC BY-SA 4.0.
- Kudu: explicit adult male *Tragelaphus strepsiceros*, 3008×2000 CC BY-SA 2.0.
- Lionfish: explicit adult ~250 mm lionfish, public-domain USGS/NOAA source.
- Gecko: explicit adult male *Gekko gecko*, 1008×460 CC BY 3.0; regenerated tail documented.
- Giraffe: explicit adult male, 2500×2500 CC BY 2.0.
- Guanaco: explicit adult *Lama guanicoe*, 3648×2736 CC BY-SA 3.0/GFDL; sex unknown.
- Hercules Beetle: live newly emerged male *Dynastes hercules*, 4000×2248 CC BY 2.0.
- Pronghorn: explicit adult male *Antilocapra americana*, 5071×3581 CC BY-SA 4.0 Quality Image.
- Pufferfish: exact *Arothron hispidus*, 6069×4046 CC BY-SA 4.0 Featured/Quality Image.

## Structural and tooling blockers
- `196` is completed text research, not completed images.
- `0` remains the verified transparent-PNG count.
- Current connected GitHub writers accept UTF-8 text, not PNG binary. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or fake `.png` is created.
- Some oversized legacy research files can be truncated by the connector, so image provenance is retained here when a safe full-file rewrite is not possible.
- Megalodon cannot satisfy a real-adult-photograph rule because it is extinct.
- Giant Squid remains unresolved because available preserved-adult imagery does not satisfy the healthy-living-adult requirement.
- **Next practical unresolved source-quality legacy audit: Peacock.**
