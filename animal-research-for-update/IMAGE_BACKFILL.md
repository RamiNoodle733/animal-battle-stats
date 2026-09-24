# Image delivery audit and backfill queue

**Research reports completed:** 182 / 225 (through Sailfish). **Full-body transparent PNG assets verified and committed:** 0 / 182. A source-photo URL is not an approved PNG.

`IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Exact species, healthy adult, complete anatomy, real-photo provenance, adequate quality and genuine alpha transparency are required. Current connected GitHub write actions are UTF-8 text-only, so source photos remain pending rather than being faked as PNGs.

## Queue policy
Animals already source-verified are skipped until binary tooling becomes available. The oldest unresolved source-quality candidate is addressed each run. `REPLACEMENT SOURCE NEEDED`, `SOURCE FOUND - FULL-BODY NOT VERIFIED`, and licensing blockers remain unresolved until a genuinely better source is found.

## Active unresolved source-quality queue
Giant Squid; Gibbon; Gila Monster; Golden Eagle; Goliath Birdeater; Goose; Gorilla; Gray Wolf; Great Horned Owl; Great White Shark; Green Anaconda; Hammerhead Shark; Harpy Eagle; Hedgehog; Hippopotamus; Honey Badger; Howler Monkey; Hummingbird; Huntsman Spider; Hyena; Iguana; Impala; Jackal; Jaguar; Japanese Macaque; Kangaroo; King Cobra; King Crab; Kiwi; Koala; Komodo Dragon; Kookaburra; Leatherback Sea Turtle; **Leopard**; **Llama (NEXT)**; Lobster; Lynx; Macaw; Mandrill; Narwhal; Nautilus; Opossum; Orangutan; Orca; Osprey; Ostrich; Otter; Pangolin; Peacock; Pelican; Peregrine Falcon; Piranha; Platypus; Poison Dart Frog; Polar Bear; Porcupine; Praying Mantis; Proboscis Monkey; Puffin; Python; Quokka; Quoll; Raccoon; Rattlesnake; Raven; Red Fox; Red Panda; Red-Eyed Tree Frog; Red-tailed Hawk; Sailfish; Megalodon.

## 2026-09-23 Leopard legacy audit
Roster Leopard resolves to ***Panthera pardus***, with a mature male preferred as the larger fighting sex. The existing primary candidate remains a strong 4355x2630 CC BY-SA 2.0 male African leopard from Kruger, and the research report already records its source page and original image URL. Its whole body was previously visually verified, but the source metadata does not explicitly establish adulthood, so mandatory adulthood remains unresolved.

Fresh broad search found additional reusable evidence:
- https://commons.wikimedia.org/wiki/File:Leopard_(Panthera_pardus)_male_(6001436301).jpg is a **4320x2592 CC BY-SA 2.0** exact *P. p. pardus* male, captioned as photographed in stride at Kruger. Metadata verifies male and reuse rights, but does not explicitly say adult, so it does not solve the age requirement.
- https://commons.wikimedia.org/wiki/File:Panthera_pardus_-Vumbura_Plains,_Botswana_-adult-8.jpg explicitly identifies an **adult** *P. pardus* and is CC BY 2.0, but is only **1367x1620**, metadata language refers to the subject as female, and this run did not establish that it improves strict complete-body visibility over the existing larger male candidate.

**Result:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`. Do not replace the existing male primary with a weaker or incompletely verified source. No PNG created. **Llama is next practical unresolved legacy audit.**

## 2026-09-23 Sailfish new-animal image audit
Roster Sailfish resolves to ***Istiophorus platypterus***, with a large healthy adult female preferred because females attain the largest sizes.

Primary provenance candidate:
- Source page: https://commons.wikimedia.org/wiki/File:Voilier_de_l%27Indo-Pacifique_(Istiophorus_platypterus)_(Ifremer_00761-87277).jpg
- Original: https://upload.wikimedia.org/wikipedia/commons/e/e9/Voilier_de_l%27Indo-Pacifique_%28Istiophorus_platypterus%29_%28Ifremer_00761-87277%29.jpg
- **2560x1536**, **CC BY 4.0**, exact species, IFREMER source. Metadata states that an associated backgroundless PNG exists in the source dataset.
- However, the page does not establish that the photographed specimen is a healthy adult, sex is unknown, and strict complete head-to-tail plus all-fin visibility could not be certified together with adulthood. It therefore cannot satisfy the mandatory standard yet.
- A 1536x2048 CC BY-SA 4.0 iNaturalist/Commons exact-species source and a 1707x1067 GFDL exact-species underwater source were also found, but neither provided the missing adult/sex/full-body combination strongly enough to promote.

**Result:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`. No PNG created.

## 2026-09-23 Leatherback Sea Turtle legacy audit
Roster Leatherback Sea Turtle resolves to ***Dermochelys coriacea***. The existing 3264x2122 CC BY-SA 2.0 candidate was visually checked and is a close nesting-beach composition rather than a strict complete-body source: the full rear silhouette and all appendages are not simultaneously cleanly visible.

Broad replacement search found a stronger-provenance adult source:
- Source page: https://commons.wikimedia.org/wiki/File:LeatherbackTurtle.jpg
- Original: https://upload.wikimedia.org/wikipedia/commons/7/7f/LeatherbackTurtle.jpg
- **1784x1168**, NOAA public domain, exact species, metadata explicitly says **Adult Dermochelys coriacea** at Las Baulas National Marine Park, Costa Rica.
- This improves adulthood and licensing provenance, but strict full-body visibility could not be certified from the available retrieval in this run. A separate 2304x1728 USFWS public-domain image is explicitly a close-up and fails the whole-body requirement.

**Result:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`. No PNG created.

## 2026-09-23 Sable Antelope new-animal image audit
Roster Sable Antelope resolves to ***Hippotragus niger***, with a healthy prime adult male preferred as the larger, heavily horned territorial fighting sex.

Primary inspected candidate:
- Source page: https://commons.wikimedia.org/wiki/File:Sable_antelope_(Hippotragus_niger)_adult_male.jpg
- Original: https://upload.wikimedia.org/wikipedia/commons/9/94/Sable_antelope_%28Hippotragus_niger%29_adult_male.jpg
- **5184x3648**, **CC BY-SA 4.0**, exact species, explicitly documented **adult male**, Tswalu Kalahari Reserve, South Africa.
- Commons Featured Picture, Quality Image and Valued Image for adult male sable antelope.
- Direct visual inspection confirms excellent head/body/horn framing, but brush and grass overlap portions of the lower legs/feet and the tail is not cleanly isolated. It therefore fails the strict unobstructed complete-body standard despite unusually strong provenance.

**Result:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`. No PNG created.

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
- `182` is completed text research, not completed images.
- `0` remains the verified transparent-PNG count.
- Current connected GitHub writers accept UTF-8 text, not PNG binary. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or fake `.png` is created.
- Megalodon cannot satisfy a real-adult-photograph rule because it is extinct.
- Giant Squid remains unresolved because available preserved-adult imagery does not satisfy the healthy-living-adult requirement.
- **Next practical unresolved source-quality legacy audit: Llama.**