# Image delivery audit and backfill queue

**Research reports completed:** 195 / 225 (through Sloth Bear). **Full-body transparent PNG assets verified and committed:** 0 / 195. A source-photo URL is not an approved PNG.

`IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Exact species, healthy adult, complete anatomy, real-photo provenance, adequate quality and genuine alpha transparency are required. Current connected GitHub write actions are UTF-8 text-only, so source photos remain pending rather than being faked as PNGs.

## Queue policy
Animals already source-verified are skipped until binary tooling becomes available. The oldest unresolved source-quality candidate is addressed each run. `REPLACEMENT SOURCE NEEDED`, `SOURCE FOUND - FULL-BODY NOT VERIFIED`, and licensing blockers remain unresolved until a genuinely better source is found.

## Active unresolved source-quality queue
Giant Squid; Gibbon; Gila Monster; Golden Eagle; Goliath Birdeater; Goose; Gorilla; Gray Wolf; Great Horned Owl; Great White Shark; Green Anaconda; Hammerhead Shark; Harpy Eagle; Hedgehog; Hippopotamus; Honey Badger; Howler Monkey; Hummingbird; Huntsman Spider; Hyena; Iguana; Impala; Jackal; Jaguar; Japanese Macaque; Kangaroo; King Cobra; King Crab; Kiwi; Koala; Komodo Dragon; Kookaburra; Leatherback Sea Turtle; Leopard; Llama; Lobster; Lynx; Macaw; Mandrill; Narwhal; Nautilus; Opossum; Orangutan; Orca; Osprey; Ostrich; **Otter**; **Pangolin (NEXT)**; Peacock; Pelican; Peregrine Falcon; Piranha; Platypus; Poison Dart Frog; Polar Bear; Porcupine; Praying Mantis; Proboscis Monkey; Puffin; Python; Quokka; Quoll; Raccoon; Rattlesnake; Raven; Red Fox; Red Panda; Red-Eyed Tree Frog; Red-tailed Hawk; Sailfish; Salamander; Saltwater Crocodile; Sawfish; Sea Lion; Sea Otter; Seal; Secretary Bird; Serval; Shoebill; Siberian Tiger; Skunk; Sloth; Sloth Bear; Megalodon.

## 2026-09-24 Otter legacy audit
Roster Otter is **North American river otter, *Lontra canadensis***, not Eurasian *Lutra lutra*. The existing report already resolves the outdated live `Lutra canadensis` combination to accepted *Lontra canadensis* and uses a prime adult male as canonical fighter.

Broad search included Google-style image discovery, Commons, ADW, photographer pages and commercial adult-male records. The existing ADW source is biologically much stronger than generic image-search candidates:

- Source page: https://animaldiversity.org/collections/contributors/phil_myers/Mustelidae/Lontra9587/
- Original recorded in report: https://animaldiversity.org/collections/contributors/phil_myers/Mustelidae/Lontra9587/large.jpg
- Exact *Lontra canadensis*, live animal, Detroit Zoo.
- ADW explicitly labels the subject **adult/sexually mature**.
- Photographer: Phil Myers.
- License: **CC BY-NC-SA 3.0** with required photographer credit.
- The current direct-image fetch path does not expose the binary for strict original-resolution inspection, so complete head-to-tail, all-four-feet framing cannot be certified from metadata alone.

A separate commercial record from Andrew Mason/FLPA/SuperStock explicitly identifies an **adult male** and provides a 4629×3081 image, but it is rights-managed stock requiring a license and therefore is not a redistribution candidate for staging without appropriate permission. It was not used as the primary.

**Result:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Adult status and reusable noncommercial provenance are established for the ADW candidate, but strict complete-body visual verification remains unresolved. No PNG created or claimed. **Pangolin is next practical unresolved legacy audit.**

## 2026-09-24 Sloth Bear new-animal image audit
Roster Sloth Bear is exact species ***Melursus ursinus***; canonical research specimen is a prime mainland adult male.

Strongest high-resolution reusable male lead inspected this run:
- Source page: https://commons.wikimedia.org/wiki/File:Sri_Lankan_sloth_bear_(Melursus_ursinus_inornatus)_male_3.jpg
- Original: https://upload.wikimedia.org/wikipedia/commons/6/68/Sri_Lankan_sloth_bear_%28Melursus_ursinus_inornatus%29_male_3.jpg
- **3802×2535**, exact Sri Lankan subspecies *M. u. inornatus*, explicitly male.
- Wild provenance: Yala National Park, Sri Lanka; Charles J. Sharp; 27 February 2022.
- License: **CC BY-SA 4.0**; Commons Quality Image.
- Direct visual inspection of the original confirms head and torso are fully in frame and several feet/claws are clear, but one rear limb/foot is substantially occluded by the animal's own body/fur. Commons does not explicitly state adulthood.

Additional adult-verified lead:
- https://animaldiversity.org/accounts/Melursus_ursinus/pictures/collections/contributors/frank_laubach/Melursus_ursinus1/
- Exact *M. ursinus*, live animal, explicitly **adult/sexually mature**, **CC BY 3.0**.
- Current tooling did not expose a strict full-resolution visual check of the entire silhouette, so it cannot yet be promoted.

**Result:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`. No cutout or PNG is claimed.

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
- `195` is completed text research, not completed images.
- `0` remains the verified transparent-PNG count.
- Current connected GitHub writers accept UTF-8 text, not PNG binary. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or fake `.png` is created.
- Some oversized legacy research files can be truncated by the connector, so image provenance is retained here when a safe full-file rewrite is not possible.
- Megalodon cannot satisfy a real-adult-photograph rule because it is extinct.
- Giant Squid remains unresolved because available preserved-adult imagery does not satisfy the healthy-living-adult requirement.
- **Next practical unresolved source-quality legacy audit: Pangolin.**
