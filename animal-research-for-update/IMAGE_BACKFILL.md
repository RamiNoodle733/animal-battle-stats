# Image delivery audit and backfill queue

**Research reports completed:** 180 / 225 (through Ring-tailed Lemur). **Full-body transparent PNG assets verified and committed:** 0 / 180. A source-photo URL is not an approved PNG.

`IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Exact species, healthy adult, complete anatomy, real-photo provenance, adequate quality and genuine alpha transparency are required. Current connected GitHub write actions are UTF-8 text-only, so source photos remain pending rather than being faked as PNGs.

## Queue policy
Animals already source-verified are skipped until binary tooling becomes available. The oldest unresolved source-quality candidate is addressed each run. `REPLACEMENT SOURCE NEEDED`, `SOURCE FOUND - FULL-BODY NOT VERIFIED`, and licensing blockers remain unresolved until a genuinely better source is found.

## Active unresolved source-quality queue
Giant Squid; Gibbon; Gila Monster; Golden Eagle; Goliath Birdeater; Goose; Gorilla; Gray Wolf; Great Horned Owl; Great White Shark; Green Anaconda; Hammerhead Shark; Harpy Eagle; Hedgehog; Hippopotamus; Honey Badger; Howler Monkey; Hummingbird; Huntsman Spider; Hyena; Iguana; Impala; Jackal; Jaguar; Japanese Macaque; Kangaroo; King Cobra; King Crab; Kiwi; Koala; Komodo Dragon; **Kookaburra**; **Leatherback Sea Turtle (NEXT)**; Leopard; Llama; Lobster; Lynx; Macaw; Mandrill; Narwhal; Nautilus; Opossum; Orangutan; Orca; Osprey; Ostrich; Otter; Pangolin; Peacock; Pelican; Peregrine Falcon; Piranha; Platypus; Poison Dart Frog; Polar Bear; Porcupine; Praying Mantis; Proboscis Monkey; Puffin; Python; Quokka; Quoll; Raccoon; Rattlesnake; Raven; Red Fox; Red Panda; Red-Eyed Tree Frog; Red-tailed Hawk; Megalodon.

## 2026-09-23 Kookaburra legacy audit
Roster Kookaburra resolves to the Laughing Kookaburra, ***Dacelo novaeguineae***, with the slightly larger adult female preferred where sex is verified.

Existing source rechecked rather than silently accepted:
- Source page: https://commons.wikimedia.org/wiki/File:Laughing_Kookaburra_(Dacelo_novaeguineae)_(CWPG).jpg
- Original: https://upload.wikimedia.org/wikipedia/commons/9/95/Laughing_Kookaburra_%28Dacelo_novaeguineae%29_%28CWPG%29.jpg
- **4000x6000**, **CC BY-SA 4.0**, exact species.
- Original-resolution visual inspection confirms head, bill, torso, wings and tail are inside the frame, but the perch hides the feet/toes. Metadata does not explicitly establish adulthood or sex.
- Broad image discovery also found attractive complete-looking perched photographs, but they did not improve simultaneously on strict appendage visibility, explicit adulthood/sex and reusable provenance.

**Result:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`. The existing report already records this source page and original URL, so no redundant report rewrite was necessary. No PNG created. **Leatherback Sea Turtle is next practical unresolved legacy audit.**

## 2026-09-23 Ring-tailed Lemur new-animal image audit
Roster Ring-tailed Lemur resolves to ***Lemur catta***. A healthy prime adult male is preferred because modern growth data found modest male-biased adult mass, though older field summaries describe near size monomorphism.

Primary inspected candidate:
- Source page: https://commons.wikimedia.org/wiki/File:Ring-tailed_lemur_(Lemur_catta).jpg
- Original: https://upload.wikimedia.org/wikipedia/commons/0/0b/Ring-tailed_lemur_%28Lemur_catta%29.jpg
- **1916x2872**, **CC BY-SA 4.0**, wild Madagascar photograph, Commons Featured Picture and Quality Image, exact species.
- Original-resolution inspection confirms the entire striped tail and most body anatomy are within frame, but vegetation overlaps portions of the limbs/feet. Metadata does not explicitly establish adulthood or sex.

**Result:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`. It is a strong reusable candidate but does not pass the strict adult + unobstructed complete-body standard. No PNG created.

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
- `180` is completed text research, not completed images.
- `0` remains the verified transparent-PNG count.
- Current connected GitHub writers accept UTF-8 text, not PNG binary. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or fake `.png` is created.
- Megalodon cannot satisfy a real-adult-photograph rule because it is extinct.
- Giant Squid remains unresolved because available preserved-adult imagery does not satisfy the healthy-living-adult requirement.
- **Next practical unresolved source-quality legacy audit: Leatherback Sea Turtle.**