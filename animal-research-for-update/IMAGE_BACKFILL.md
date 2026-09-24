# Image delivery audit and backfill queue

**Research reports completed:** 194 / 225 (through Sloth). **Full-body transparent PNG assets verified and committed:** 0 / 194. A source-photo URL is not an approved PNG.

`IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Exact species, healthy adult, complete anatomy, real-photo provenance, adequate quality and genuine alpha transparency are required. Current connected GitHub write actions are UTF-8 text-only, so source photos remain pending rather than being faked as PNGs.

## Queue policy
Animals already source-verified are skipped until binary tooling becomes available. The oldest unresolved source-quality candidate is addressed each run. `REPLACEMENT SOURCE NEEDED`, `SOURCE FOUND - FULL-BODY NOT VERIFIED`, and licensing blockers remain unresolved until a genuinely better source is found.

## Active unresolved source-quality queue
Giant Squid; Gibbon; Gila Monster; Golden Eagle; Goliath Birdeater; Goose; Gorilla; Gray Wolf; Great Horned Owl; Great White Shark; Green Anaconda; Hammerhead Shark; Harpy Eagle; Hedgehog; Hippopotamus; Honey Badger; Howler Monkey; Hummingbird; Huntsman Spider; Hyena; Iguana; Impala; Jackal; Jaguar; Japanese Macaque; Kangaroo; King Cobra; King Crab; Kiwi; Koala; Komodo Dragon; Kookaburra; Leatherback Sea Turtle; Leopard; Llama; Lobster; Lynx; Macaw; Mandrill; Narwhal; Nautilus; Opossum; Orangutan; Orca; Osprey; **Ostrich**; **Otter (NEXT)**; Pangolin; Peacock; Pelican; Peregrine Falcon; Piranha; Platypus; Poison Dart Frog; Polar Bear; Porcupine; Praying Mantis; Proboscis Monkey; Puffin; Python; Quokka; Quoll; Raccoon; Rattlesnake; Raven; Red Fox; Red Panda; Red-Eyed Tree Frog; Red-tailed Hawk; Sailfish; Salamander; Saltwater Crocodile; Sawfish; Sea Lion; Sea Otter; Seal; Secretary Bird; Serval; Shoebill; Siberian Tiger; Skunk; Sloth; Megalodon.

## 2026-09-24 Ostrich legacy audit
Roster Ostrich is exact species ***Struthio camelus*** and the canonical research specimen is a prime adult male.

Broad search included Google-style image discovery, Wikimedia Commons male categories, wild-national-park photographs and commercial/photographer discovery leads. A particularly strong reusable source is:

- Source page: https://commons.wikimedia.org/wiki/File:Common_Ostrich_(Struthio_camelus)_male_(32682739181).jpg
- Original: https://upload.wikimedia.org/wikipedia/commons/7/7f/Common_Ostrich_%28Struthio_camelus%29_male_%2832682739181%29.jpg
- **3621×3648**, exact *Struthio camelus*, explicitly male.
- Wild provenance: Potlekkertjie Loop, Karoo National Park, Western Cape, South Africa.
- Photographer: Bernard DUPONT.
- License: **CC BY-SA 2.0**, independently reviewed by FlickreviewR.
- Commons confirms exact species, male sex, original dimensions, photographer, location and reuse license.
- The current image-fetch path timed out on the original binary, so strict visual confirmation of the entire head, neck, torso, both legs, both feet/toes, wing/body outline and tail could not be completed. Source metadata also does not explicitly state adulthood.

Additional exact-male reusable candidates were found at 3745×3648, 4222×3185, 2378×3568 and larger dimensions, but this run did not promote any candidate without the mandatory visual distal-anatomy check and explicit/plausibly verifiable adulthood.

**Result:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`. This is a strong high-resolution wild male reusable lead, but the full-body and adult requirements are not both verified. No cutout or PNG is claimed. The existing `animals/ostrich.md` payload is too large for the current connector to return untruncated, so a safe whole-file rewrite to insert the candidate URLs was not attempted. The provenance is recorded here rather than risking corruption. **Otter is next practical unresolved legacy audit.**

## 2026-09-24 Sloth new-animal image audit
Roster Sloth is exact species ***Bradypus tridactylus***, pale-throated three-toed sloth.

Strongest reusable lead:
- Source page: https://commons.wikimedia.org/wiki/File:Pale-throated_Sloth_(Bradypus_tridactylus)_male_(10628624664).jpg
- Original: https://upload.wikimedia.org/wikipedia/commons/0/06/Pale-throated_Sloth_%28Bradypus_tridactylus%29_male_%2810628624664%29.jpg
- **3231×2122**, exact *Bradypus tridactylus*, explicitly male.
- Provenance: Route de Mana, French Guiana; Bernard DUPONT; scanned slide from 1998.
- License: **CC BY-SA 2.0**, Flickr license independently reviewed by FlickreviewR.
- Exact species, sex, dimensions and license are strong. However, current tooling did not provide a reliable strict original-resolution visual check of every distal limb/claw and the complete body silhouette, and source metadata does not explicitly establish adulthood.

**Result:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`. No PNG created or claimed.

## 2026-09-24 Osprey legacy audit
Roster Osprey is exact species ***Pandion haliaetus***. Females are generally larger, but this run found an unusually well-documented reusable male source and assessed it strictly rather than inferring sex from plumage.

Broad search included Google-style image discovery, Wikimedia Commons, government/USFWS searches and full-body flying/perched candidates.

### Strongest explicit-age/sex reusable lead
- Source page: https://commons.wikimedia.org/wiki/File:Osprey_-_Pandion_haliaetus_-_Male.jpg
- Original: https://upload.wikimedia.org/wikipedia/commons/0/0a/Osprey_-_Pandion_haliaetus_-_Male.jpg
- **1139×1627**, exact *Pandion haliaetus*.
- Source description explicitly identifies the individual as **male** and **4 years old** (`Blue 041`), so adulthood and sex are unusually well established.
- Photographer: Caroline Legg; source Flickr photograph.
- License: **CC BY 4.0**, independently reviewed by FlickreviewR 2 on 28 August 2026.
- Direct visual inspection of the original confirms a healthy-looking perched adult with head, torso and wings inside frame. However, the perch/needles overlap the feet and lower tail region, preventing the clean all-appendage silhouette required by `IMAGE_REQUIREMENTS.md`.
- Longest dimension is 1627 px, just above the preferred minimum but below the 2000+ target.

**Result:** `REPLACEMENT SOURCE NEEDED`.

## Recent unresolved audits retained
- **Orca:** 1632×1104 public-domain USFWS source explicitly identifies a male, but water hides ventral body, pectoral fins and flukes. `REPLACEMENT SOURCE NEEDED`.
- **Orangutan:** 5184×3456 CC BY-SA 4.0 exact *Pongo pygmaeus* male lead; oversized original was not renderable for strict appendage inspection and adulthood/flanged maturity are not explicit. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Opossum:** 2048×1365 CC BY 4.0 walking candidate clips/reaches the rear/tail edge; separate ASM/MDD record explicitly says adult but redistribution/high-resolution complete framing not established. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Nautilus:** 2848×3798 CC BY-SA 4.0 exact-species living candidate has strong provenance, but adulthood and strict visibility of numerous tentacles remain unresolved. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Narwhal:** explicit adult-male ASM record exists, but redistribution permission and complete tusk-to-fluke framing were not established. `LICENSE UNVERIFIED - DO NOT COMMIT`.
- **Mandrill:** exact adult-male reusable photographs exist, but inspected candidates obscure/crop distal limbs or are portraits. `REPLACEMENT SOURCE NEEDED`.
- **Macaw:** explicit adult wild *Ara macao* source exists, but perch/tail framing and redistribution permission fail simultaneous verification. `LICENSE UNVERIFIED - DO NOT COMMIT`.
- **Lynx:** standing exact-*Lynx lynx* candidate cleanly shows body/legs/feet/tail but lacks explicit adulthood/sex. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Lobster:** high-resolution reusable exact-*Homarus americanus* crevice photographs hide abdomen/tail and walking appendages. `REPLACEMENT SOURCE NEEDED`.
- **Llama:** 3000×2000 CC BY-SA 4.0 exact-species candidate is seated/overlapped; existing standing candidate lacks explicit adulthood/sex. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Leopard:** existing 4355×2630 reusable male source has complete-body framing but lacks explicit adulthood. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Leatherback Sea Turtle:** 1784×1168 NOAA public-domain exact-species source explicitly says adult, but strict complete-body visibility was not certified. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Sable Antelope:** 5184×3648 CC BY-SA 4.0 Featured/Quality image explicitly documents an adult male, but vegetation overlaps lower legs/feet and tail isolation is imperfect. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
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
- `194` is completed text research, not completed images.
- `0` remains the verified transparent-PNG count.
- Current connected GitHub writers accept UTF-8 text, not PNG binary. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or fake `.png` is created.
- The legacy Orangutan and Ostrich research files are large enough that the current connector truncates their fetched UTF-8 payload before a safe full-file replacement can be constructed. Their latest audits remain recorded here.
- Megalodon cannot satisfy a real-adult-photograph rule because it is extinct.
- Giant Squid remains unresolved because available preserved-adult imagery does not satisfy the healthy-living-adult requirement.
- **Next practical unresolved source-quality legacy audit: Otter.**
