# Image delivery audit and backfill queue

**Research reports completed:** 190 / 225 (through Serval). **Full-body transparent PNG assets verified and committed:** 0 / 190. A source-photo URL is not an approved PNG.

`IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Exact species, healthy adult, complete anatomy, real-photo provenance, adequate quality and genuine alpha transparency are required. Current connected GitHub write actions are UTF-8 text-only, so source photos remain pending rather than being faked as PNGs.

## Queue policy
Animals already source-verified are skipped until binary tooling becomes available. The oldest unresolved source-quality candidate is addressed each run. `REPLACEMENT SOURCE NEEDED`, `SOURCE FOUND - FULL-BODY NOT VERIFIED`, and licensing blockers remain unresolved until a genuinely better source is found.

## Active unresolved source-quality queue
Giant Squid; Gibbon; Gila Monster; Golden Eagle; Goliath Birdeater; Goose; Gorilla; Gray Wolf; Great Horned Owl; Great White Shark; Green Anaconda; Hammerhead Shark; Harpy Eagle; Hedgehog; Hippopotamus; Honey Badger; Howler Monkey; Hummingbird; Huntsman Spider; Hyena; Iguana; Impala; Jackal; Jaguar; Japanese Macaque; Kangaroo; King Cobra; King Crab; Kiwi; Koala; Komodo Dragon; Kookaburra; Leatherback Sea Turtle; Leopard; Llama; Lobster; Lynx; Macaw; Mandrill; Narwhal; Nautilus; **Opossum**; **Orangutan (NEXT)**; Orca; Osprey; Ostrich; Otter; Pangolin; Peacock; Pelican; Peregrine Falcon; Piranha; Platypus; Poison Dart Frog; Polar Bear; Porcupine; Praying Mantis; Proboscis Monkey; Puffin; Python; Quokka; Quoll; Raccoon; Rattlesnake; Raven; Red Fox; Red Panda; Red-Eyed Tree Frog; Red-tailed Hawk; Sailfish; Salamander; Saltwater Crocodile; Sawfish; Sea Lion; Sea Otter; Seal; Secretary Bird; Serval; Megalodon.

## 2026-09-24 Opossum legacy audit
Roster Opossum is ***Didelphis virginiana***. A healthy mature adult male is preferred because males are generally larger.

Broad search included Commons, Animal Diversity Web, the American Society of Mammalogists/Mammal Diversity Database, government-linked material, Flickr and general image discovery.

Current reusable candidate:
- Source page: https://commons.wikimedia.org/wiki/File:Didelphis_virginiana_189957925.jpg
- Original: https://upload.wikimedia.org/wikipedia/commons/e/ee/Didelphis_virginiana_189957925.jpg
- **2048×1365**, exact *D. virginiana*, **CC BY 4.0**, iNaturalist license reviewed by Commons.
- Direct visual inspection confirms a genuine walking animal with visible head, body and feet, but the rear/tail region reaches/exits the right frame edge. It therefore fails the strict complete-tail silhouette requirement. Source metadata also does not explicitly establish adulthood or sex.

Stronger adulthood lead:
- American Society of Mammalogists image #630 / Mammal Diversity Database: https://www.mammalogy.org/index.php/image-library/didelphis-virginiana-630 and https://www.mammaldiversity.org/taxon/1000023/
- Explicitly captioned **“Side view of adult”**, exact *D. virginiana*, Boone, North Carolina, 1979.
- This resolves adulthood biologically but this run did not establish redistribution permission or a high-resolution original that simultaneously passes the full tail/all-feet rule. It is therefore a provenance lead, not a committable asset.
- ADW also has several CC BY-NC-SA 3.0 exact-species photographs explicitly tagged adult/sexually mature, but no inspected candidate simultaneously established a superior complete-body silhouette.

**Result:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Do not cut out the current Commons image because its tail/rear is clipped. **Orangutan is next practical unresolved legacy audit.**

## 2026-09-24 Serval new-animal image audit
Roster Serval is exact species ***Leptailurus serval***. A healthy adult male is preferred because males are larger on average.

Best reusable lead:
- Source page: https://commons.wikimedia.org/wiki/File:Serval,_South_Luangwa_National_Park_(51871420026).jpg
- **5184×3456**, wild South Luangwa National Park, exact species, real photograph, **CC BY 2.0**, Flickr license reviewed by Commons.
- Source metadata does not explicitly establish adulthood or sex. Strict visibility of head, all feet/limbs and complete tail was not certified strongly enough in this run.

Rejected alternate:
- https://commons.wikimedia.org/wiki/File:Leptailurus_serval_-Serengeti_National_Park,_Tanzania-8.jpg
- **1600×1121**, exact species, wild Serengeti, **CC BY 3.0**.
- Direct visual discovery shows the rear/tail clipped at the right frame edge, so it fails the mandatory complete-body rule despite otherwise strong side-view framing.

**Result:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`. No PNG created or claimed.

## Recent unresolved audits retained
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
- `190` is completed text research, not completed images.
- `0` remains the verified transparent-PNG count.
- Current connected GitHub writers accept UTF-8 text, not PNG binary. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or fake `.png` is created.
- Megalodon cannot satisfy a real-adult-photograph rule because it is extinct.
- Giant Squid remains unresolved because available preserved-adult imagery does not satisfy the healthy-living-adult requirement.
- **Next practical unresolved source-quality legacy audit: Orangutan.**