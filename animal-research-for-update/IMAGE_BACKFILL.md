# Image delivery audit and backfill queue

**Research reports completed:** 189 / 225 (through Secretary Bird). **Full-body transparent PNG assets verified and committed:** 0 / 189. A source-photo URL is not an approved PNG.

`IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Exact species, healthy adult, complete anatomy, real-photo provenance, adequate quality and genuine alpha transparency are required. Current connected GitHub write actions are UTF-8 text-only, so source photos remain pending rather than being faked as PNGs.

## Queue policy
Animals already source-verified are skipped until binary tooling becomes available. The oldest unresolved source-quality candidate is addressed each run. `REPLACEMENT SOURCE NEEDED`, `SOURCE FOUND - FULL-BODY NOT VERIFIED`, and licensing blockers remain unresolved until a genuinely better source is found.

## Active unresolved source-quality queue
Giant Squid; Gibbon; Gila Monster; Golden Eagle; Goliath Birdeater; Goose; Gorilla; Gray Wolf; Great Horned Owl; Great White Shark; Green Anaconda; Hammerhead Shark; Harpy Eagle; Hedgehog; Hippopotamus; Honey Badger; Howler Monkey; Hummingbird; Huntsman Spider; Hyena; Iguana; Impala; Jackal; Jaguar; Japanese Macaque; Kangaroo; King Cobra; King Crab; Kiwi; Koala; Komodo Dragon; Kookaburra; Leatherback Sea Turtle; Leopard; Llama; Lobster; Lynx; Macaw; Mandrill; Narwhal; **Nautilus**; **Opossum (NEXT)**; Orangutan; Orca; Osprey; Ostrich; Otter; Pangolin; Peacock; Pelican; Peregrine Falcon; Piranha; Platypus; Poison Dart Frog; Polar Bear; Porcupine; Praying Mantis; Proboscis Monkey; Puffin; Python; Quokka; Quoll; Raccoon; Rattlesnake; Raven; Red Fox; Red Panda; Red-Eyed Tree Frog; Red-tailed Hawk; Sailfish; Salamander; Saltwater Crocodile; Sawfish; Sea Lion; Sea Otter; Seal; Secretary Bird; Megalodon.

## 2026-09-24 Nautilus legacy audit
Roster Nautilus is ***Nautilus pompilius***. A healthy mature living individual is required. Broad searching included Commons, NOAA, museum material and scientific imagery.

Best reusable live-animal lead:
- Source page: https://commons.wikimedia.org/wiki/File:Nautilus_pompilius_(front).jpg
- Original is **2848×3798**, exact *Nautilus pompilius*, photographed alive at Pairi Daiza, and reusable under **CC BY-SA 4.0**.
- The photograph shows a living animal with shell, hood and tentacles, but source metadata does **not explicitly establish adulthood**. Strict visibility of all tentacles is also difficult because numerous appendages naturally overlap.
- Another Commons/iNaturalist file, https://commons.wikimedia.org/wiki/File:Nautilus_pompilius_76271178.jpg, is **1536×2048 CC BY 4.0**, but direct inspection showed a detached/dead shell in a person's hand rather than a healthy living animal, so it is rejected despite its dimensions and exact-species metadata.
- NOAA's chambered-nautilus species page has a genuine living *N. pompilius* photograph and explicitly states that mature shells are typically 5-9 inches, but the page does not identify the pictured specimen's life stage/sex and the displayed photo is not sufficient to certify every tentacle under the strict silhouette rule.
- Scientific adult imagery exists, including FAO/Smithsonian material explicitly captioning *N. pompilius* adult, but this run did not establish a redistribution-safe, high-resolution original that also passed the complete living-animal silhouette requirement.

**Result:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`. The 2848×3798 Commons live-animal source is the current reusable candidate, but adulthood and strict complete-appendage visibility remain unresolved. No binary was committed. **Opossum is next practical unresolved legacy audit.**

## 2026-09-24 Secretary Bird new-animal image audit
Roster Secretary Bird is exact species ***Sagittarius serpentarius***.

Best reusable candidate located:
- Source page: https://commons.wikimedia.org/wiki/File:Secretary_Bird_(Sagittarius_serpentarius)_(6022013778).jpg
- Original: https://upload.wikimedia.org/wikipedia/commons/4/49/Secretary_Bird_%28Sagittarius_serpentarius%29_%286022013778%29.jpg
- **4320×2592**, wild Kruger National Park bird, exact species, real photograph, **CC BY-SA 2.0**, Flickr license reviewed by Commons.
- Source metadata does not explicitly establish adulthood or sex, and the available inspection path did not establish every foot/toe plus the complete tail silhouette strongly enough to certify the mandatory standard.
- A second reusable wild Serengeti candidate is 1832×2517 and exact species, but grass/vegetation overlaps the feet and its metadata likewise does not explicitly establish adult life stage.

**Result:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`. No PNG created or claimed.

## 2026-09-24 Narwhal legacy audit
Roster Narwhal is exact species ***Monodon monoceros***. A mature adult male is the preferred fighting specimen because males are larger and usually carry the long tusk.

Broad discovery produced a biologically excellent adult-male record:
- American Society of Mammalogists Mammal Images Library #5742: https://mammalsociety.org/image-library/monodon-monoceros-5742
- The page explicitly identifies **adult male**, exact *Monodon monoceros*, photographed at Pond Inlet, Nunavut on 20 June 2018, with tusk out of water.
- This is much stronger adulthood/sex provenance than generic narwhal search images.
- However, the page provides a `Request Full Size Image` mechanism and site copyright notice but no reusable image license on the record. Redistribution permission therefore was **not established**.
- The page presentation also did not establish strict complete tusk-to-fluke body framing strongly enough to pass the mandatory silhouette rule.

**Result:** `LICENSE UNVERIFIED - DO NOT COMMIT`. Keep the ASM page as an adult-male provenance lead only. No image binary was redistributed and no PNG was created.

## 2026-09-24 Seal new-animal image audit
Roster Seal is exact species ***Phoca vitulina***. A healthy adult male is preferred because males are somewhat larger.

Best provenance-safe candidate inspected:
- Source page: https://commons.wikimedia.org/wiki/File:Harbor_seal_phoca_vitulina.jpg
- Original: https://upload.wikimedia.org/wikipedia/commons/1/16/Harbor_seal_phoca_vitulina.jpg
- **2100×1368**, U.S. Fish and Wildlife Service, public domain, structured data identifies *Phoca vitulina richardii*.
- Original-resolution inspection shows the head, trunk and hind-flipper end, but the foreflippers are not cleanly exposed. The metadata also does not explicitly establish adulthood or sex.

**Result:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`.

## Recent unresolved audits retained
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
- `189` is completed text research, not completed images.
- `0` remains the verified transparent-PNG count.
- Current connected GitHub writers accept UTF-8 text, not PNG binary. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or fake `.png` is created.
- Megalodon cannot satisfy a real-adult-photograph rule because it is extinct.
- Giant Squid remains unresolved because available preserved-adult imagery does not satisfy the healthy-living-adult requirement.
- **Next practical unresolved source-quality legacy audit: Opossum.**