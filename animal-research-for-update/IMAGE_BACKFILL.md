# Image delivery audit and backfill queue

**Research reports completed:** 198 / 225 (through Snowy Owl). **Full-body transparent PNG assets verified and committed:** 0 / 198. A source-photo URL is not an approved PNG.

`IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Exact species, healthy adult, complete anatomy, real-photo provenance, adequate quality and genuine alpha transparency are required. Current connected GitHub write actions are UTF-8 text-only, so source photos remain pending rather than being faked as PNGs.

## Queue policy
Animals already source-verified are skipped until binary tooling becomes available. The oldest unresolved source-quality candidate is addressed each run. `REPLACEMENT SOURCE NEEDED`, `SOURCE FOUND - FULL-BODY NOT VERIFIED`, and licensing blockers remain unresolved until a genuinely better source is found.

## Active unresolved source-quality queue
Giant Squid; Gibbon; Gila Monster; Golden Eagle; Goliath Birdeater; Goose; Gorilla; Gray Wolf; Great Horned Owl; Great White Shark; Green Anaconda; Hammerhead Shark; Harpy Eagle; Hedgehog; Hippopotamus; Honey Badger; Howler Monkey; Hummingbird; Huntsman Spider; Hyena; Iguana; Impala; Jackal; Jaguar; Japanese Macaque; Kangaroo; King Cobra; King Crab; Kiwi; Koala; Komodo Dragon; Kookaburra; Leatherback Sea Turtle; Leopard; Llama; Lobster; Lynx; Macaw; Mandrill; Narwhal; Nautilus; Opossum; Orangutan; Orca; Osprey; Ostrich; Otter; Pangolin; Peacock; **Pelican**; **Peregrine Falcon (NEXT)**; Piranha; Platypus; Poison Dart Frog; Polar Bear; Porcupine; Praying Mantis; Proboscis Monkey; Puffin; Python; Quokka; Quoll; Raccoon; Rattlesnake; Raven; Red Fox; Red Panda; Red-Eyed Tree Frog; Red-tailed Hawk; Sailfish; Salamander; Saltwater Crocodile; Sawfish; Sea Lion; Sea Otter; Seal; Secretary Bird; Serval; Shoebill; Siberian Tiger; Skunk; Sloth; Sloth Bear; Snapping Turtle; Snow Leopard; Snowy Owl; Megalodon.

## 2026-09-24 Pelican legacy audit
Roster Pelican was already resolved by the staging report to **American White Pelican, *Pelecanus erythrorhynchos***, with a mature male as canonical fighter because males average larger.

Broad discovery covered Google-style image search, Wikimedia Commons, USFWS/Flickr, photographer galleries and Animal Diversity Web. A materially stronger source than the prior swimming candidate was found:
- Source page: https://commons.wikimedia.org/wiki/File:Adult_American_white_pelican_in_flight_(9688520370).jpg
- Original: https://upload.wikimedia.org/wikipedia/commons/a/a7/Adult_American_white_pelican_in_flight_%289688520370%29.jpg
- **2722×1310** exact-species real photograph in flight at Sonny Bono NWR.
- Source title explicitly says **Adult American white pelican in flight**.
- Mark Stewart / USFWS Pacific Southwest Region.
- Commons records both **CC BY 2.0** Flickr verification and USFWS public-domain provenance.

This is substantially better provenance/anatomy geometry than the old swimming candidate because flight can expose wings, feet and tail. However, the original 2722×1310 binary timed out through the current image fetch, so strict pixel-level confirmation that every wingtip, foot/toe and tail feather remains inside the frame could not be completed. Under `IMAGE_REQUIREMENTS.md`, metadata, title and dimensions alone are insufficient.

**Result:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`. No PNG created or claimed. The existing `pelican.md` is oversized/truncated by the connector when fetched whole, so a safe full-file rewrite was not attempted; the new source page and original URL are preserved here rather than risking loss of report content. **Peregrine Falcon is next practical unresolved legacy audit.**

## 2026-09-24 Snowy Owl new-animal image audit
Roster Snowy Owl is exact species ***Bubo scandiacus***. Because females are about 29% heavier by mass in a long Saskatchewan field dataset, the canonical fighter is a healthy adult female.

Strong reusable candidate:
- Source page: https://commons.wikimedia.org/wiki/File:%D0%91%D0%B5%D0%BB%D0%B0%D1%8F_%D1%81%D0%BE%D0%B2%D0%B0_%D0%B1%D0%BB%D0%B8%D0%B7_%D0%BA%D0%BE%D1%80%D0%B4%D0%BE%D0%BD%D0%B0_%22%D0%A1%D0%BE%D0%BC%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%22.jpg
- Original: https://upload.wikimedia.org/wikipedia/commons/3/30/%D0%91%D0%B5%D0%BB%D0%B0%D1%8F_%D1%81%D0%BE%D0%B2%D0%B0_%D0%B1%D0%BB%D0%B8%D0%B7_%D0%BA%D0%BE%D1%80%D0%B4%D0%BE%D0%BD%D0%B0_%22%D0%A1%D0%BE%D0%BC%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F%22.jpg
- **4608×3456**, wild Wrangel Island real photograph.
- Commons explicitly captions the specimen **adult female**.
- **CC BY-SA 4.0**, photographer/uploader's own work.

The original was directly inspected. Head, torso, folded wings and tail are fully visible, but rocks/vegetation obscure the distal feet. It therefore fails the strict complete-anatomy requirement despite excellent taxon, sex, adulthood, resolution and licensing provenance. A separate 2592×3888 CC BY 2.0 female zoo source was found but does not establish a better strict complete-body silhouette.

**Result:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`. No PNG created or claimed.

## Recent unresolved audits retained
- **Peacock:** 2896×1936 CC BY 2.0 Smithsonian male source has train leaving frame/obscuring lower anatomy. `REPLACEMENT SOURCE NEEDED`.
- **Pangolin:** 1920×1280 CC BY 4.0 exact *Manis javanica* source has strong provenance but tail reaches/exits frame and adulthood/sex are unverified. `REPLACEMENT SOURCE NEEDED`.
- **Otter:** exact adult/sexually mature *Lontra canadensis* ADW source is CC BY-NC-SA 3.0 but strict all-feet/head-to-tail framing remains unverified. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Ostrich:** 3621×3648 CC BY-SA 2.0 wild exact-*Struthio camelus* male; original binary timed out and adulthood is not explicit. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
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
- **Snapping Turtle:** 5055×2528 public-domain-marked USFWS exact-species male lead has excellent provenance, but strict all-feet/complete-tail framing and literal adulthood were not simultaneously verified. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.
- **Snow Leopard:** adult-male provenance candidates remain cropped/obscured, including hidden tail or snow-covered feet. `SOURCE FOUND - FULL-BODY NOT VERIFIED`.

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
- `198` is completed text research, not completed images.
- `0` remains the verified transparent-PNG count.
- Current connected GitHub writers accept UTF-8 text, not PNG binary. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or fake `.png` is created.
- Some oversized legacy research files can be truncated by the connector, so image provenance is retained here when a safe full-file rewrite is not possible.
- Megalodon cannot satisfy a real-adult-photograph rule because it is extinct.
- Giant Squid remains unresolved because available preserved-adult imagery does not satisfy the healthy-living-adult requirement.
- **Next practical unresolved source-quality legacy audit: Peregrine Falcon.**
