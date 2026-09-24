# Image delivery audit and backfill queue

**Research reports completed:** 186 / 225 (through Sea Lion). **Full-body transparent PNG assets verified and committed:** 0 / 186. A source-photo URL is not an approved PNG.

`IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Exact species, healthy adult, complete anatomy, real-photo provenance, adequate quality and genuine alpha transparency are required. Current connected GitHub write actions are UTF-8 text-only, so source photos remain pending rather than being faked as PNGs.

## Queue policy
Animals already source-verified are skipped until binary tooling becomes available. The oldest unresolved source-quality candidate is addressed each run. `REPLACEMENT SOURCE NEEDED`, `SOURCE FOUND - FULL-BODY NOT VERIFIED`, and licensing blockers remain unresolved until a genuinely better source is found.

## Active unresolved source-quality queue
Giant Squid; Gibbon; Gila Monster; Golden Eagle; Goliath Birdeater; Goose; Gorilla; Gray Wolf; Great Horned Owl; Great White Shark; Green Anaconda; Hammerhead Shark; Harpy Eagle; Hedgehog; Hippopotamus; Honey Badger; Howler Monkey; Hummingbird; Huntsman Spider; Hyena; Iguana; Impala; Jackal; Jaguar; Japanese Macaque; Kangaroo; King Cobra; King Crab; Kiwi; Koala; Komodo Dragon; Kookaburra; Leatherback Sea Turtle; Leopard; Llama; Lobster; Lynx; **Macaw**; **Mandrill (NEXT)**; Narwhal; Nautilus; Opossum; Orangutan; Orca; Osprey; Ostrich; Otter; Pangolin; Peacock; Pelican; Peregrine Falcon; Piranha; Platypus; Poison Dart Frog; Polar Bear; Porcupine; Praying Mantis; Proboscis Monkey; Puffin; Python; Quokka; Quoll; Raccoon; Rattlesnake; Raven; Red Fox; Red Panda; Red-Eyed Tree Frog; Red-tailed Hawk; Sailfish; Salamander; Saltwater Crocodile; Sawfish; Sea Lion; Megalodon.

## 2026-09-23 Macaw legacy audit
Roster Macaw resolves to Scarlet Macaw ***Ara macao***. Sex is not forced because the sexes are externally similar and the research report does not establish a meaningful combat-size advantage.

The old primary candidate remains rejected:
- Source page: https://commons.wikimedia.org/wiki/File:Scarlet_macaw_(Ara_scarlatta,_Ara_macao).jpg
- Original: https://upload.wikimedia.org/wikipedia/commons/c/ca/Scarlet_macaw_%28Ara_scarlatta%2C_Ara_macao%29.jpg
- **3000x2083, CC BY-SA 4.0**, exact species.
- Direct inspection in the prior audit showed a head/upper-body composition lacking the feet, full tail and whole-body silhouette. It is not acceptable under `IMAGE_REQUIREMENTS.md`.

Fresh broad image discovery found a substantially better biological record:
- Source page: https://www.ecoregistros.org/site/imagen.php?id=593996
- Direct displayed photo URL: https://ecoregistros.org/site/images/dataimages/2024/07/30/593996/4.-Yana-Yacu47.jpg
- EcoRegistros explicitly records ***Ara macao***, **adult**, wild/native, photographed at Yana Yacu, Loreto, Peru on 2017-07-06.
- Visual inspection shows nearly the entire perched bird and long tail, but the feet are overlapped by the perch and the tail runs to the lower frame edge closely enough that strict complete-tip framing is not certified.
- The page does not provide a clear redistribution license for the photograph. It is therefore not eligible to be downloaded, cut out or committed without permission.

Other Commons results were checked. A 1976x1500 file is taxonomically uncertain on its own page (possibly Red-and-green Macaw), so it was rejected. Several exact-species Commons files were too low-resolution or did not establish adulthood.

**Result:** `LICENSE UNVERIFIED - DO NOT COMMIT` for the fresh adult wild candidate, with strict full-body suitability also not fully verified. The previous cropped candidate is not restored as primary. No PNG created. **Mandrill is next practical unresolved legacy audit.**

## 2026-09-23 Sea Lion new-animal image audit
Roster Sea Lion is explicitly ***Zalophus californianus*** in the live schema, with a mature adult male preferred because males are dramatically larger and are the primary territorial fighting sex.

Candidates visually checked:
- Wikimedia/Wikipedia Monterey male: https://upload.wikimedia.org/wikipedia/commons/3/3f/California_Sea_Lion%2C_Monterey%2C_California%2C_United_States_imported_from_iNaturalist_photo_203598492.jpg
- The species page explicitly captions the individual as **male**, but direct inspection shows the rear body/hindquarters leave the right edge of the frame. It fails strict whole-body framing.
- Monterey Bay Aquarium photograph: https://www.montereybayaquarium.org/animals/animals-a-to-z/california-sea-lion ; direct displayed image https://www.montereybayaquarium.org/globalassets/mba/images/animals/marine-mammals/sea-lion-tr15-900.jpg . This also clips the rump/rear body.

Broad discovery did not produce a reusable, explicit-adult-male, high-resolution candidate that simultaneously showed the complete nose-to-hindflipper silhouette. No source was promoted merely from dimensions or a search thumbnail.

**Result:** `REPLACEMENT SOURCE NEEDED`. No PNG created.

## 2026-09-23 Lynx legacy audit
Roster Lynx resolves to Eurasian lynx ***Lynx lynx***, with a healthy fully mature adult male preferred. The old 5184x3456 explicitly male tree-resting source fails because branches/pose hide appendages. A fresh 1543x1336 CC BY 4.0 standing *L. l. carpathicus* candidate cleanly shows the head, torso, all four legs/feet and tail, but metadata does not explicitly establish adulthood or sex. **Result:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`.

## Recent unresolved audits retained
- **Lobster:** both high-resolution reusable exact-*Homarus americanus* crevice photographs hide abdomen/tail and walking appendages. `REPLACEMENT SOURCE NEEDED`.
- **Llama:** 3000x2000 CC BY-SA 4.0 exact-species candidate is seated/overlapped; existing standing candidate lacks explicit adulthood/sex. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Leopard:** existing 4355x2630 reusable male source has complete-body framing but lacks explicit adulthood. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Leatherback Sea Turtle:** 1784x1168 NOAA public-domain exact-species source explicitly says adult, but strict complete-body visibility was not certified. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Sable Antelope:** 5184x3648 CC BY-SA 4.0 Featured/Quality image explicitly documents an adult male, but vegetation overlaps lower legs/feet and tail isolation is imperfect. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Sailfish:** 2560x1536 CC BY 4.0 IFREMER exact-species source has strong provenance, but adulthood, sex and strict silhouette are not simultaneously established. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Salamander:** 4450x2708 USFWS/Public Domain Mark exact *Ambystoma tigrinum* photo passes framing but does not explicitly establish adulthood or sex. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Saltwater Crocodile:** exact-species reusable candidate has excellent visible anatomy, but source metadata does not explicitly establish adulthood or sex. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Sawfish:** 3752x2501 CC BY 2.0 exact-*Pristis pristis* candidate has strong provenance, but adulthood/sex and strict rostrum-to-tail framing are not simultaneously verified. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.

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
- `186` is completed text research, not completed images.
- `0` remains the verified transparent-PNG count.
- Current connected GitHub writers accept UTF-8 text, not PNG binary. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or fake `.png` is created.
- Megalodon cannot satisfy a real-adult-photograph rule because it is extinct.
- Giant Squid remains unresolved because available preserved-adult imagery does not satisfy the healthy-living-adult requirement.
- **Next practical unresolved source-quality legacy audit: Mandrill.**