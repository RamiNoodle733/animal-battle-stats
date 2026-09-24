# Image delivery audit and backfill queue

**Research reports completed:** 187 / 225 (through Sea Otter). **Full-body transparent PNG assets verified and committed:** 0 / 187. A source-photo URL is not an approved PNG.

`IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Exact species, healthy adult, complete anatomy, real-photo provenance, adequate quality and genuine alpha transparency are required. Current connected GitHub write actions are UTF-8 text-only, so source photos remain pending rather than being faked as PNGs.

## Queue policy
Animals already source-verified are skipped until binary tooling becomes available. The oldest unresolved source-quality candidate is addressed each run. `REPLACEMENT SOURCE NEEDED`, `SOURCE FOUND - FULL-BODY NOT VERIFIED`, and licensing blockers remain unresolved until a genuinely better source is found.

## Active unresolved source-quality queue
Giant Squid; Gibbon; Gila Monster; Golden Eagle; Goliath Birdeater; Goose; Gorilla; Gray Wolf; Great Horned Owl; Great White Shark; Green Anaconda; Hammerhead Shark; Harpy Eagle; Hedgehog; Hippopotamus; Honey Badger; Howler Monkey; Hummingbird; Huntsman Spider; Hyena; Iguana; Impala; Jackal; Jaguar; Japanese Macaque; Kangaroo; King Cobra; King Crab; Kiwi; Koala; Komodo Dragon; Kookaburra; Leatherback Sea Turtle; Leopard; Llama; Lobster; Lynx; Macaw; **Mandrill**; **Narwhal (NEXT)**; Nautilus; Opossum; Orangutan; Orca; Osprey; Ostrich; Otter; Pangolin; Peacock; Pelican; Peregrine Falcon; Piranha; Platypus; Poison Dart Frog; Polar Bear; Porcupine; Praying Mantis; Proboscis Monkey; Puffin; Python; Quokka; Quoll; Raccoon; Rattlesnake; Raven; Red Fox; Red Panda; Red-Eyed Tree Frog; Red-tailed Hawk; Sailfish; Salamander; Saltwater Crocodile; Sawfish; Sea Lion; Sea Otter; Megalodon.

## 2026-09-24 Mandrill legacy audit
Roster Mandrill is exact species ***Mandrillus sphinx*** and the canonical fighting specimen is a fully mature adult male.

Broad discovery found strong-provenance adult-male material, but no candidate passed strict complete-body visibility:
- Wikimedia Commons `Male Mandrill.jpg`: https://commons.wikimedia.org/wiki/File:Male_Mandrill.jpg
- Original: https://upload.wikimedia.org/wikipedia/commons/f/f9/Male_Mandrill.jpg
- **1586×1198, CC BY 2.0**, exact species, explicitly captioned **adult male**. The Commons file was Flickr-license reviewed.
- Direct inspection shows the adult male moving through vegetation/branches, but the pose and foreground obscure/crop the distal limbs and prevent a clean all-feet silhouette. It therefore fails `IMAGE_REQUIREMENTS.md` despite excellent adulthood/sex provenance.
- A higher-resolution Commons source explicitly labeled **alpha male** is 3799×2848 and CC BY-SA 3.0: https://commons.wikimedia.org/wiki/File:Mandrillus_sphinx_(alpha_male).jpg ; original https://upload.wikimedia.org/wikipedia/commons/f/f7/Mandrillus_sphinx_%28alpha_male%29.jpg . Direct inspection shows a head/shoulder portrait, not a whole animal, so it is rejected.
- A Flickr page explicitly titled `MANDRILL - adult male - (Mandrillus sphinx)` reports a 2976×3545 original, but reuse permission was not established in this run and full-body framing was not promoted from metadata alone.

**Result:** `REPLACEMENT SOURCE NEEDED`. Exact adult-male reusable photographs exist, but the visually checked reusable candidates fail complete anatomy. No PNG created. **Narwhal is next practical unresolved legacy audit.**

## 2026-09-24 Sea Otter new-animal image audit
Roster Sea Otter resolves to species ***Enhydra lutris***. A strong adult male is preferred because males are materially larger, but adulthood itself is mandatory and sex must not be inferred visually.

Best reusable candidate inspected:
- Source page: https://commons.wikimedia.org/wiki/File:Sea_otter_marine_mammal_enhydra_lutris.jpg
- Original: https://upload.wikimedia.org/wikipedia/commons/7/79/Sea_otter_marine_mammal_enhydra_lutris.jpg
- **1800×1200**, exact species, public-domain U.S. Fish and Wildlife Service photograph.
- Direct inspection shows a single real sea otter on rocks with head, body and tail visible, but the resting pose does not cleanly expose every limb/foot and the source metadata does not explicitly establish adulthood or sex.
- A second public-domain USFWS image, `Fast swimming sea otter enhydra lutris.jpg`, is 2130×1372, but water/splash obscures the strict full silhouette and adulthood/sex are again not explicit.

**Result:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`. The 1800×1200 USFWS source is retained as a provenance-safe candidate, not a completed image. No PNG created.

## 2026-09-23 Macaw legacy audit
Roster Macaw resolves to Scarlet Macaw ***Ara macao***. Fresh EcoRegistros discovery explicitly establishes an adult wild exact-species bird, but the feet are overlapped by the perch, tail-tip framing is not certified, and the page does not state redistribution permission. **Result:** `LICENSE UNVERIFIED - DO NOT COMMIT`.

## Recent unresolved audits retained
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
- `187` is completed text research, not completed images.
- `0` remains the verified transparent-PNG count.
- Current connected GitHub writers accept UTF-8 text, not PNG binary. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or fake `.png` is created.
- Megalodon cannot satisfy a real-adult-photograph rule because it is extinct.
- Giant Squid remains unresolved because available preserved-adult imagery does not satisfy the healthy-living-adult requirement.
- **Next practical unresolved source-quality legacy audit: Narwhal.**