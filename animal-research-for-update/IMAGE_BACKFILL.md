# Image delivery audit and backfill queue

**Research reports completed:** 192 / 225 (through Siberian Tiger). **Full-body transparent PNG assets verified and committed:** 0 / 192. A source-photo URL is not an approved PNG.

`IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Exact species, healthy adult, complete anatomy, real-photo provenance, adequate quality and genuine alpha transparency are required. Current connected GitHub write actions are UTF-8 text-only, so source photos remain pending rather than being faked as PNGs.

## Queue policy
Animals already source-verified are skipped until binary tooling becomes available. The oldest unresolved source-quality candidate is addressed each run. `REPLACEMENT SOURCE NEEDED`, `SOURCE FOUND - FULL-BODY NOT VERIFIED`, and licensing blockers remain unresolved until a genuinely better source is found.

## Active unresolved source-quality queue
Giant Squid; Gibbon; Gila Monster; Golden Eagle; Goliath Birdeater; Goose; Gorilla; Gray Wolf; Great Horned Owl; Great White Shark; Green Anaconda; Hammerhead Shark; Harpy Eagle; Hedgehog; Hippopotamus; Honey Badger; Howler Monkey; Hummingbird; Huntsman Spider; Hyena; Iguana; Impala; Jackal; Jaguar; Japanese Macaque; Kangaroo; King Cobra; King Crab; Kiwi; Koala; Komodo Dragon; Kookaburra; Leatherback Sea Turtle; Leopard; Llama; Lobster; Lynx; Macaw; Mandrill; Narwhal; Nautilus; Opossum; Orangutan; **Orca**; **Osprey (NEXT)**; Ostrich; Otter; Pangolin; Peacock; Pelican; Peregrine Falcon; Piranha; Platypus; Poison Dart Frog; Polar Bear; Porcupine; Praying Mantis; Proboscis Monkey; Puffin; Python; Quokka; Quoll; Raccoon; Rattlesnake; Raven; Red Fox; Red Panda; Red-Eyed Tree Frog; Red-tailed Hawk; Sailfish; Salamander; Saltwater Crocodile; Sawfish; Sea Lion; Sea Otter; Seal; Secretary Bird; Serval; Shoebill; Siberian Tiger; Megalodon.

## 2026-09-24 Orca legacy audit
Roster Orca is exact species ***Orcinus orca***. Adult males are the preferred canonical combat sex because mature males are substantially larger than females and develop disproportionately large dorsal and pectoral fins.

Broad search included Google-style discovery, Wikimedia Commons, USFWS, NOAA, photographer pages and adult-male/breaching searches.

### Strongest reusable explicit-male lead
- Source page: https://commons.wikimedia.org/wiki/File:Male_killer_whale_orcinus_orca.jpg
- Original: https://upload.wikimedia.org/wikipedia/commons/6/66/Male_killer_whale_orcinus_orca.jpg
- **1632×1104**, exact *Orcinus orca*; source title and description explicitly identify a **male killer whale**.
- Author/provenance: **U.S. Fish and Wildlife Service**.
- License: **public domain**, U.S. federal government work.
- Problem: the animal is photographed surfacing. Water hides much of the ventral body, pectoral fins and tail/flukes, so it cannot satisfy the strict head-to-tail and visible-fin silhouette requirement even though sex and reuse provenance are unusually strong.

### Additional leads checked
- `Orca Orlando Seaworld.jpg`, 2261×1496, CC BY-SA 2.0, shows an exact-species jumping orca and has reusable provenance, but the source metadata does not establish adult status or sex and strict complete-body framing was not certified.
- NOAA `Killerwhales jumping.jpg` is public-domain and exact species, but contains **two animals**, violating the one-animal requirement.
- Research/photographer pages surfaced explicitly adult-male breaching animals, but either redistribution rights were not established or the available view did not simultaneously satisfy complete-body isolation.

**Result:** `REPLACEMENT SOURCE NEEDED`. The explicit-male USFWS image is not acceptable because water obscures required anatomy. No cutout or PNG is claimed. **Osprey is next practical unresolved legacy audit.**

## 2026-09-24 Siberian Tiger new-animal image audit
Roster Siberian Tiger is the Amur population of ***Panthera tigris***, traditionally ***P. t. altaica***. A healthy prime adult male is preferred because males are materially larger.

Best reusable lead:
- Source page: https://commons.wikimedia.org/wiki/File:Siberian_Tiger_(25380471812).jpg
- Original: https://upload.wikimedia.org/wikipedia/commons/b/b4/Siberian_Tiger_%2825380471812%29.jpg
- **4928×3264**, real Siberian/Amur tiger photograph by Mathias Appel.
- License: **CC0 1.0 public-domain dedication**, Flickr license reviewed by FlickreviewR.
- The original is far above the preferred resolution threshold, but the current web fetch rejected the 13.57 MB original as too large for direct strict silhouette inspection. Source metadata also does not explicitly establish adulthood or sex.

**Result:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Strong reusable lead, but adulthood, sex and strict all-feet/tail framing are not simultaneously verified. No PNG created or claimed.

## Recent unresolved audits retained
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
- `192` is completed text research, not completed images.
- `0` remains the verified transparent-PNG count.
- Current connected GitHub writers accept UTF-8 text, not PNG binary. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or fake `.png` is created.
- The legacy Orangutan research file is large enough that the current connector truncates its fetched UTF-8 payload before a safe full-file replacement can be constructed. Its audit remains recorded here.
- Megalodon cannot satisfy a real-adult-photograph rule because it is extinct.
- Giant Squid remains unresolved because available preserved-adult imagery does not satisfy the healthy-living-adult requirement.
- **Next practical unresolved source-quality legacy audit: Osprey.**
