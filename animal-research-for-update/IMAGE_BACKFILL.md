# Image delivery audit and backfill queue

**Research reports completed:** 116 / 225 (through Kudu). **Full-body transparent PNG assets verified and committed:** 0 / 116. A source-photo URL is not an approved PNG.

`IMAGE_REQUIREMENTS.md` is mandatory and retroactive. Exact species, healthy adult, complete anatomy, real-photo provenance, adequate quality and genuine alpha transparency are required. Current connected GitHub write actions are UTF-8 text-only, so source photos remain pending rather than being faked as PNGs.

## Queue policy
Animals already source-verified or audited are skipped until binary tooling becomes available or a materially better source resolves an outstanding verification issue. The oldest unresolved source-quality candidate is addressed each run.

| Animal | Current status | Next action |
|---|---|---|
| Gecko | REPLACEMENT SOURCE NEEDED | Audited; explicit adult male source remains only 1008px |
| Giant Centipede | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; 4000x3000 reusable source, adulthood not explicit |
| Giant Squid | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; adult + every arm/tentacle tip unresolved |
| Gibbon | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; adult/sex and strict hands/feet unresolved |
| Gila Monster | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; adulthood plus every toe/tail unresolved |
| Giraffe | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; reusable bull source, adulthood not explicit |
| Golden Eagle | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; adult + reuse + complete anatomy not simultaneous |
| Goliath Birdeater | REPLACEMENT SOURCE NEEDED | Audited; explicit adult female reusable source only 720x525 |
| Goose | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; adulthood not explicit |
| Gorilla | REPLACEMENT SOURCE NEEDED | Audited; explicit male source too small; larger sources fail simultaneous strictness |
| Gray Wolf | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; adult/sex + strict tail/feet unresolved |
| Great Horned Owl | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; 6240x4160 public-domain NPS source; adult + complete anatomy unresolved |
| Great White Shark | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; explicit male source; strict adult + all fins/head-tail unresolved |
| Green Anaconda | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; adult/sex + complete head-tail visibility not simultaneous |
| Grizzly Bear | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; skip |
| Guanaco | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; adult/sex/full-body strictness unresolved |
| Hammerhead Shark | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; exact species/reuse strong, Commons version cropped |
| Harpy Eagle | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; adult/sex and strict feet/tail/wings unresolved |
| Hedgehog | REPLACEMENT SOURCE NEEDED | Audited; featured source fails strict anatomy |
| Hellbender | FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING | Exact adult, public-domain 3072x2304 USFWS; binary cutout pending |
| Hercules Beetle | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; adult/imago; strict all-six-feet/appendage tips unresolved |
| Hippopotamus | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; adult/sex and strict tail/feet unresolved |
| Honey Badger | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; explicit male still loses rear body/tail at frame edge |
| Hornet | FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING | Exact adult queen *Vespa crabro*, 2048x1536 CC BY-SA 4.0 |
| Howler Monkey | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; exact adult male, tail/complete appendages not visible |
| Hummingbird | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; 6000x4000 Public Domain female; adulthood/strict anatomy unresolved |
| Huntsman Spider | REPLACEMENT SOURCE NEEDED | Audited; exact adult female *Heteropoda maxima* remains only 640x480 |
| Hyena | SOURCE FOUND - FULL-BODY NOT VERIFIED | Audited; explicit female source loses tail/rear silhouette at frame edge; adulthood not explicit |
| Ibex | FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING | **Verified this run:** exact adult male *Capra ibex*, 3233x2155 CC BY-SA 4.0; full silhouette, all four legs/hooves and short tail visually present; binary cutout pending |
| Iguana | SOURCE FOUND - FULL-BODY NOT VERIFIED | **NEXT UNRESOLVED SOURCE AUDIT:** exact male; seek explicit adulthood plus strict all-feet/tail completeness |
| Impala | SOURCE FOUND - FULL-BODY NOT VERIFIED | Strong male framing, adulthood not explicit; adult alternative loses tail |
| Jackal | SOURCE FOUND - FULL-BODY NOT VERIFIED | Complete standing anatomy; adulthood/sex not explicit |
| Jaguar | SOURCE FOUND - FULL-BODY NOT VERIFIED | Exact male Pantanal source; adulthood/strict completeness unresolved |
| Japanese Macaque | SOURCE FOUND - FULL-BODY NOT VERIFIED | Tail hidden/rear feet unclear; adult/sex not explicit |
| Kangaroo | SOURCE FOUND - FULL-BODY NOT VERIFIED | Every foot/tail endpoint and adulthood not strict |
| King Cobra | SOURCE FOUND - FULL-BODY NOT VERIFIED | Exact female; adulthood and entire head-tail silhouette not verified |
| King Crab | SOURCE FOUND - FULL-BODY NOT VERIFIED | Explicit male source clips appendage tips |
| Kiwi | SOURCE FOUND - FULL-BODY NOT VERIFIED | Exact species; adulthood/sex/every-toe unresolved |
| Koala | SOURCE FOUND - FULL-BODY NOT VERIFIED | Exact male; tree overlap blocks every-foot/digit certification; adulthood not explicit |
| Komodo Dragon | SOURCE FOUND - FULL-BODY NOT VERIFIED | Wild exact-species candidate; adulthood/sex and strict all-toe/tail-tip completeness unresolved |
| Kookaburra | SOURCE FOUND - FULL-BODY NOT VERIFIED | Exact *D. novaeguineae*, 4000x6000 CC BY-SA; perch obscures feet/toes and adulthood/sex are not explicit |
| Kudu | FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING | **New this run:** explicit adult male *T. strepsiceros*, 3008x2000 CC BY-SA 2.0; full head/body/legs/hooves/tail/horns visually verified; binary cutout pending |

## 2026-09-21 Ibex legacy audit
Broad search covered general web image discovery and Wikimedia Commons for exact *Capra ibex*, explicit mature male status, reusable provenance, high resolution and strict whole-body framing.

**Verified full-body source:**
- Source page: https://commons.wikimedia.org/wiki/File:Capra_ibex_in_Gran_Paradiso_National_Park.jpg
- Original image URL: https://upload.wikimedia.org/wikipedia/commons/f/f3/Capra_ibex_in_Gran_Paradiso_National_Park.jpg
- Resolution: **3233x2155** JPEG.
- Taxon/adult/sex: exact *Capra ibex*; Commons caption explicitly says **adult male**.
- Provenance: own work by Irene Vercellino, **CC BY-SA 4.0**.
- Visual inspection: complete horn tips, head, torso, all four legs and hooves, and the short tail are inside the frame. No appendage is clipped by the image boundary. Terrain/grass does not prevent recognition of the hoof silhouettes.
- Result: **FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING**. The source meets the mandatory source-photo standard. It is not counted as a completed image because no transparent PNG binary has been created or committed.

This materially upgrades Ibex from `SOURCE FOUND - FULL-BODY NOT VERIFIED`. The source page and original image URL were already recorded in `animals/ibex.md`; this audit resolves the prior strict whole-body/adulthood uncertainty. The connected writer remains text-only, so the PNG step is still blocked.

## 2026-09-21 Kudu new-animal image
- Preferred source page: https://commons.wikimedia.org/wiki/File:Tragelaphus_strepsiceros_-Chobe_River_front,_Botswana-8.jpg
- Original image URL: https://upload.wikimedia.org/wikipedia/commons/b/b6/Tragelaphus_strepsiceros_-Chobe_River_front%2C_Botswana-8.jpg
- Resolution: **3008x2000** JPEG.
- Taxon/adult/sex: exact Greater Kudu *Tragelaphus strepsiceros*; source description explicitly identifies an **adult male**.
- Provenance/license: Joachim Huber, originally Flickr, Commons-verified **CC BY-SA 2.0**.
- Visual inspection: complete head, torso, four legs and hooves, tail, and horn silhouette are inside the frame. The animal is isolated enough against open ground/water for a future faithful cutout.
- Status: **FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING**. No PNG completion is claimed.

## Count and blocker
- `116` is completed text research, not completed images.
- `0` remains the verified transparent-PNG count.
- Current connected GitHub writers accept UTF-8 text, not PNG binary. No JPEG rename, base64-text pseudo-PNG, opaque checkerboard or fake `.png` is created.
- **Next unresolved source-quality legacy audit: Iguana.**
