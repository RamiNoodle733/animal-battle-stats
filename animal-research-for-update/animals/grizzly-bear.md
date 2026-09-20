# Grizzly Bear Research Overhaul

## Research status
- **ABS roster name:** Grizzly Bear
- **Canonical taxon:** North American grizzly bear, *Ursus arctos horribilis*
- **Living/extinct:** Living
- **Canonical specimen:** healthy mature adult male in prime active-season condition, Greater Yellowstone/interior North American context, not a coastal/Kodiak brown bear and not a record individual
- **Research confidence:** high for taxonomy, sex dimorphism, Yellowstone mass, shoulder height, claws, speed as an agency natural-history value, lifespan, hibernation and ecology; moderate for representative total length and combat scoring; low for bite pressure PSI

## 1. Identity and canonical specimen
The roster explicitly names *Ursus arctos horribilis*, so this profile is the North American grizzly rather than the much larger Kodiak/coastal brown-bear phenotype. USFWS reports adult males in the contiguous United States averaging roughly **200–300 kg**, while Yellowstone's long-term summary gives an adult-male mean of **187 kg** and a known GYE maximum of 324 kg. Grand Teton gives adult males about 180–360 kg. Geographic productivity and season strongly affect mass.

ABS should use a healthy mature male because males are materially larger and dominate the upper fighting-size class. A canonical **220.0 kg** male is recommended: larger than Yellowstone's all-adult male mean but comfortably within Lower-48 representative ranges and far below exceptional, coastal or record bears. This avoids silently turning “grizzly” into a 350–600 kg coastal brown bear.

## 2. Physical measurements
### Mass and dimensions
- Yellowstone: adult male average **187 kg**, female **122 kg**; heaviest known GYE male **324 kg**.
- USFWS Lower 48: adult males generally average **200–300 kg**, females **110–160 kg**.
- Yellowstone adults stand about **1.0–1.07 m at the shoulder**; Montana FWP gives about 3.5–4.5 ft at the hump.
- Broad brown-bear references span roughly 1.0–2.8 m length, reflecting enormous sex/population variation. A representative interior male total length of **210.0 cm** is recommended with moderate confidence rather than pretending a Yellowstone male mean was directly measured in the reviewed sources.

### Speed and locomotion
Yellowstone NPS reports **35–40 mph** and Montana FWP **up to 35 mph**. These are authoritative natural-history values, not instrumented sprint trials. Use **15.6 m/s (35 mph)** conservatively. Grizzlies are plantigrade but can accelerate rapidly, swim, climb to some degree, traverse steep slopes, and travel long distances. Montana FWP reports movements of **20–40 miles/day**.

### Lifespan
Yellowstone gives **20–30 years**, oldest known GYE individual 31; USFWS says about 25 years generally with some wild bears exceeding 35. Canonical `lifespan_years`: **25.0**.

### Bite force
A recent forensic brown-bear paper cites approximately **2200 N** bite force, while biomechanical literature contains model-derived force estimates. Force is not pressure. No defensible grizzly-specific tooth contact area was located, so converting N to PSI would fabricate precision. The legacy **1,160 PSI** is rejected. Canonical `bite_force_psi`: **0.0** (unknown/unreliable, not literally no bite).

### Claws, teeth and body defenses
Yellowstone reports front claws averaging **45 mm (1.8 in)** with an exceptional maximum **150 mm (5.9 in)**; Grand Teton gives a typical descriptive range of **2–4 in**. Claws are long and relatively straight compared with black-bear claws, optimized heavily for digging but still capable of hooking/raking. Grizzlies have 42 teeth and robust canines; ADW gives brown-bear intercanine distance around 6–8 cm. Protection is not armor: dense fur, skin, fat, large muscle mass, robust skeleton and deep torso provide trauma buffering.

## 3. Canonical proposed factual fields
| Field | Proposed value | Basis / caveat |
|---|---:|---|
| `weight_kg` | **220.0** | Representative prime interior adult male; between Yellowstone mean and broader Lower-48 male averages. |
| `height_cm` | **107.0** | Approximate shoulder/hump height from Yellowstone adult description. |
| `length_cm` | **210.0** | Representative adult male total length; moderate confidence due population variation. |
| `speed_mps` | **15.6** | Conservative 35 mph NPS/FWP natural-history top speed; not instrumented. |
| `lifespan_years` | **25.0** | Representative wild lifespan. |
| `bite_force_psi` | **0.0** | No defensible pressure measurement/contact area located. |

## 4. Combat biology
### Weapons and offensive mechanics
A grizzly is a massive close-range grappler. Its jaws deliver a high-force carnivoran bite, while powerful forelimbs can pull, pin, shove and rake. Long claws add hooking and tearing but should not be portrayed as cat-like slicing blades. Body mass and shoulder musculature make rushes, wrestling and positional control dangerous. The shoulder hump is musculature associated strongly with digging and forelimb power, not literal armor.

### Defense and toughness
At ~220 kg the canonical male has far more trauma buffer than a wolf, big dog or medium cat and substantially more than the staged 120 kg black bear. Dense fur, fat and muscle protect soft tissue, but there is no shell, osteoderm or thick horn boss. Eyes, muzzle, abdomen and limbs remain vulnerable. Defense should therefore be strong rather than mythical.

### Locomotion and endurance
Despite mass, grizzlies can sprint around 35 mph according to multiple agencies. Fine turning and aerial control remain far below cats and small mammals, so speed does not become elite Agility. Long home ranges and 20–40 mile travel days support strong sustained movement. Hibernation is an extraordinary survival physiology: Yellowstone males average about 131 days denned, lose roughly 15–30% body mass, and reduce heart rate from 40–50 to 8–19 bpm. That is not equivalent to maximal fight endurance and is kept distinct.

### Senses and cognition
Olfaction is a major bear strength; vision includes color and strong night vision according to Yellowstone. Brown bears show meaningful behavioral flexibility. Peer-reviewed work documents individual differences in fishing skill and temperament, wild tool use with deliberate rock manipulation, experimental problem solving/trial-and-error learning, and touchscreen conditional discrimination in grizzlies. Intelligence is therefore substantially above the old placeholder-style score, without approaching great-ape/corvid ceilings.

### Hunting, fighting and tactics
Grizzlies are opportunistic omnivores rather than dedicated pursuit carnivores. Yellowstone field research recorded **60 observed elk-calf predation events and 29 confirmed kills**; some individual bears became deliberate seasonal predators, and one caught five calves in 15 minutes. Long-term work found ungulates can supply a large share of active-season energy, but much adult large-ungulate intake is scavenged; no adult-bison predation was observed in the cited Yellowstone study.

Intraspecific conflict can be severe. Modern forensic work documents lethal brown-bear attacks and uses bite spacing to distinguish likely adult-male aggressors. Competition at carcasses, concentrated foods and mating opportunities involves assessment, displacement, biting, swatting and wrestling. Individual temperament varies, so “berserker” stereotypes should not be treated as species physiology.

### Environmental strengths
- Forest-meadow mosaics, mountains, river basins and rough ground.
- Cold climates where dense pelage, fat and denning physiology matter.
- Close terrain where a large grappler can force contact.
- Water crossings: capable swimmer, though not aquatic-specialized.

### Limitations and weaknesses
- No true armor.
- Heavy body limits fine evasive maneuverability.
- Heat and prolonged maximal exertion are less favorable than cool conditions.
- Long claws are primarily digging-adapted rather than retractile cutting weapons.
- Large horned/tusked megafauna can outrange the bear and exceed its mass.
- Aquatic specialists and aerial opponents can deny its preferred contact geometry.

### Matchup archetypes
**Favorable:** smaller terrestrial mammals forced into close contact, many medium predators, lightly protected opponents unable to avoid grappling.

**Dangerous:** near-tonne bovids, rhinos/hippos/elephants, giant crocodilians, opponents with heavy armor or long penetrating horns/tusks, and biological bypass mechanisms such as potent venom/electricity.

## 5. Proposed ABS substats
All scores are absolute across the 225-animal roster.

| Substat | Score | Justification |
|---|---:|---|
| Size | **57.0** | 220 kg is large predator scale, but far below bison/buffalo and true megafauna. |
| Raw Power | **65.0** | Powerful forequarters and grappling leverage, above black bear and around large-predator tier, far below near-tonne bovids. |
| Weaponry | **65.0** | Strong jaws, canines and long claws provide redundant close-range damage without horn/tusk reach. |
| Protection | **48.0** | Fur, fat, muscle and body depth help, but no armor. |
| Toughness | **66.0** | Robust ursid frame and substantial mass support strong functional resilience. |
| Speed | **70.0** | ~15.6 m/s agency sprint value is impressive at this mass. |
| Maneuverability | **57.0** | Agile for size and competent on rough terrain, but inertia limits fine evasion. |
| Endurance | **74.0** | 20–40 mile travel days and large ranges support strong sustained movement. |
| Recovery | **58.0** | Strong mammalian condition/seasonal physiology, no exceptional regeneration. |
| Tactics | **73.0** | Flexible foraging/hunting, individual learning and problem solving support high behavioral adaptability. |
| Senses | **82.0** | Exceptional olfaction plus useful vision/night vision and hearing. |
| Ferocity | **69.0** | Serious lethal intraspecific conflict and defensive aggression, moderated by avoidance and strong individual variation. |
| Abilities | **62.0** | Hibernation physiology and powerful digging/terrain use are distinctive but not direct bypass weapons. |

## 6. Proposed six headline ABS ratings
| Rating | Score | Justification |
|---|---:|---|
| **Attack** | **66.0** | 220 kg grappler with high-force jaws, claws and forelimb control; above black bear but below horned near-tonne bovids and giant apex predators. |
| **Defense** | **59.0** | Strong mass/toughness and dense covering, without armor or megafaunal body depth. |
| **Agility** | **59.0** | Fast and capable for size, but top speed is not mistaken for fine maneuverability. |
| **Stamina** | **75.0** | Long daily travel and strong active-season endurance; hibernation physiology is not double-counted as fighting output. |
| **Intelligence** | **75.0** | Strong learning, object manipulation, behavioral flexibility and individualized hunting, below great apes/corvids. |
| **Special** | **63.0** | Hibernation/metabolic control and digging/terrain versatility are unusual but do not bypass armor like venom/electricity. |

## 7. Exactly two special abilities and exactly two unique traits
### Special abilities
1. **Shoulder-Hump Grapple** — Massive shoulder and forelimb musculature, long claws and plantigrade leverage let a grizzly dig, hook, pull, shove and control opponents at close range.
2. **Winter Metabolic Fortress** — Months-long true hibernation sharply reduces heart/respiration rates while preserving enough body temperature for arousal, an exceptional survival adaptation rather than instant combat regeneration.

### Unique traits
1. **Interior Heavyweight** — A representative grizzly is substantially larger and more powerfully armed than a black bear while remaining distinctly smaller than Kodiak/coastal brown-bear giants.
2. **Adaptive Omnivore** — Individuals can switch among roots, insects, nuts, fish, carrion and active ungulate predation, with documented learning and strong behavioral individuality.

## 8. Expanded profile content
### Habitat and range
Grizzlies occupy portions of Alaska, western Canada and recovering populations in the contiguous northwestern United States, using forests, meadows, mountains, river basins and subalpine habitats. Male home ranges can be enormous and vary strongly with food density.

### Diet and ecology
Opportunistic omnivore. Foods include grasses, roots, berries, pine nuts, insects, rodents, fish, carrion and ungulates. Yellowstone research shows both active predation and scavenging, with diet changing as resources change. Bears redistribute nutrients through digging, carcass use and seed consumption.

### Social structure
Generally solitary except mothers with offspring, courtship and temporary aggregations at concentrated food. Home ranges overlap; they are not rigid territorial carnivores. Dominance and spacing at rich foods can create intense competition.

### Reproduction and life history
Mating occurs in late spring/summer with delayed implantation. Yellowstone females first reproduce around 5.8 years on average, average litter size is about 2.04, and average interbirth interval about 2.78 years. Slow reproduction is central to conservation vulnerability.

### Conservation and humans
The brown bear species is widespread globally, while North American grizzly populations have a complex jurisdiction-specific conservation history. USFWS reports recovering but geographically restricted Lower-48 populations. Human-caused mortality remains a major management issue. Conflict often involves food conditioning, livestock, hunters/carcasses or surprise encounters. Bear-safe food storage and distance are critical coexistence tools.

### Adaptations
- Massive shoulder/forelimb musculature and long digging claws.
- Exceptional olfaction.
- Seasonal hyperphagia and large fat stores.
- True hibernation with major cardiovascular/metabolic suppression.
- Broad diet and strong behavioral flexibility.
- High sprint speed despite large plantigrade build.

### Genuine fun facts
- Yellowstone adult males average about 187 kg, much less than the giant coastal/Kodiak bears often used in sensational comparisons.
- Yellowstone reports average front claws around 45 mm, while rare claws can be dramatically longer.
- A Yellowstone study observed one grizzly catching five elk calves within 15 minutes.
- Wild brown-bear tool use has been documented: one bear repeatedly manipulated rocks to rub its body.
- Yellowstone grizzlies can lose roughly 15–30% of body mass while denning.
- Adult males in Yellowstone average about 131 days in dens.
- Brown bears show stable individual differences in fishing skill, activity and social confidence.

### Concise site-ready summary
The grizzly is a large interior brown bear built for close-range control: a prime male combines roughly 220 kg of mass with powerful jaws, long claws, massive forequarters, fast bursts, exceptional smell and flexible behavior. Its real strength is versatility rather than mythical one-swipe claims. It is far stronger than a black bear but remains well below near-tonne bovids and giant megafauna in absolute force.

### Rich narrative profile
A grizzly wins space by making close contact expensive. Its forequarters are built to dig and move heavy substrate, and those same muscles support grappling, swatting and body control. Jaws and canines provide the primary damaging bite while claws add purchase and raking. At 220 kg, this is a serious predator-sized weapon system, but ABS should resist folklore: there is no scientific basis here for “one swipe kills a moose,” a universal 1,160 PSI bite, or coastal-bear mass silently assigned to an interior grizzly.

The species is also more behaviorally flexible than its bruiser stereotype suggests. Yellowstone bears learn seasonal elk-calf hunting, individuals differ strongly in fishing competence and temperament, and brown bears have demonstrated tool use, puzzle solving and conditional discrimination. That raises Tactics and Intelligence, while exceptional smell raises Senses. Hibernation is biologically extreme but is kept mostly in Special and survival context rather than triple-counted as Defense, Stamina and Recovery.

### Future structured-field proposals
`canonical_sex`, `population_context`, `seasonal_mass_range_kg`, `claw_length_cm`, `hibernates`, `denning_days`, `daily_travel_km`, `bite_force_n_estimate`, `bite_force_measurement_type`, `evidence_confidence`.

## Mandatory image section
- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/grizzly-bear.png` **(not present; no PNG claimed)**
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Yellowstone_grizzly.jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/3/3d/Yellowstone_grizzly.jpg
- `file_format_verified`: source is a real JPEG photograph, **1837×1476**
- `alpha_verified`: **false**; no staged PNG exists
- `full_body_verified`: **not certified**. Source is a wild exact-taxon Yellowstone grizzly photograph, but strict every-paw/tail visibility was not established strongly enough to promote it.
- `adult_verified`: **not explicit in source metadata**
- `sex_verified_or_unknown`: **unknown**
- `license_status`: **CC BY 2.0**, Flickr license reviewed by Wikimedia Commons
- `notes`: A separate USFWS image explicitly identifies a sedated adult male grizzly but is only 967×698 and unsuitable as the primary healthy-natural-pose asset. No transparent PNG completion is claimed because current GitHub writers are text-only.

## 9. Evidence and source ledger
| Source | Direct URL | Supports | Finding / context | Confidence / caveat |
|---|---|---|---|---|
| Yellowstone NPS, Grizzly Bear Facts | https://www.nps.gov/yell/learn/yellowstone-grizzly-bear-facts.htm | Mass, speed, claws, lifespan, denning, physiology, reproduction | Male mean 187 kg; 35–40 mph; avg claw 45 mm; 20–30 y; denning/heart-rate data | High agency synthesis; speed not instrumented |
| USFWS Grizzly Bear profile | https://www.fws.gov/species/grizzly-bear-ursus-arctos-horribilis | Taxon, Lower-48 mass, life history, hibernation, conservation | Males avg 200–300 kg; females 110–160 kg; ~25 y; adult >4 y | High |
| Yellowstone NPS Bear Ecology | https://www.nps.gov/yell/learn/nature/bear.htm | Height, mass range, habitat, diet, home range | Adults ~3.5 ft shoulder; male 200–700 lb; large male ranges | High |
| Montana FWP, Bears in Montana | https://fwp.mt.gov/conservation/wildlife-management/bear/all-about-bears | Size, speed, daily travel, behavior | 400–500 lb male average; 35 mph; 20–40 mi/day | High agency synthesis |
| Grand Teton NPS | https://www.nps.gov/grte/planyourvisit/bearsingrandteton.htm | Sex-specific mass, claws | males 180–360 kg; front claws 2–4 in | High |
| ADW, *Ursus arctos* | https://animaldiversity.org/accounts/Ursus_arctos/ | Broad brown-bear dimensions, intercanine spacing, geographic variation | 80–600+ kg; 1–2.8 m; canines 6–8 cm apart | Moderate-high synthesis; broader species than grizzly |
| French & French 1990 / USGS | https://www.usgs.gov/publications/predatory-behavior-grizzly-bears-feeding-elk-calves-yellowstone-national-park | Hunting behavior | 60 predation observations, 29 kills; learned individual specialization | High peer-reviewed field study |
| Mattson 1997 / USGS | https://www.usgs.gov/publications/use-ungulates-yellowstone-grizzly-bears-ursus-arctos | Ungulate diet/predation vs scavenging | substantial ungulate energy; 30% acquired edibles by predation; no adult-bison predation observed | High peer-reviewed field synthesis |
| Deecke 2012 | https://research.cumbria.ac.uk/en/publications/tool-use-in-the-brown-bear-ursus-arctos/ | Cognition/tool use | wild brown bear manipulated rocks as tools | High, one observed individual |
| Johnson-Ulrich et al. 2026 PubMed | https://pubmed.ncbi.nlm.nih.gov/42161137/ | Behavioral flexibility | seven brown bears across multi-access/reversal/object tasks | High recent study, small sample |
| Fagen & Fagen 1996 | https://doi.org/10.1111/j.1439-0310.1996.tb01119.x | Individual behavior | stable differences in fishing skill, confidence, activity, irritability | High field study |
| Animals 2026 forensic study | https://www.mdpi.com/2076-2615/16/7/1119 | Intraspecific attacks, bite-force context | lethal attack reconstruction; cites ~2200 N brown-bear bite | Moderate for force because value is cited, not directly measured there |
| Oldfield et al. 2012 | https://doi.org/10.1111/j.1469-7998.2011.00862.x | Bite biomechanics | FEA shows brown bear strong ursid cranial mechanical performance | High model study; force is not PSI |
| Wikimedia Commons | https://commons.wikimedia.org/wiki/File:Yellowstone_grizzly.jpg | Image provenance | wild *U. a. horribilis*, 1837×1476, CC BY 2.0 | Strong provenance; adult/sex/full-body strictness unresolved |

## 10. Confidence, conflicts and cross-animal normalization
- **Mass conflict:** “brown bear” can mean interior grizzlies or much larger coastal/Kodiak animals. This report explicitly uses an interior grizzly and 220 kg male. Do not import 389 kg coastal-male averages from broader *U. arctos* summaries.
- **Speed:** 35–40 mph is repeated by agencies but is not treated as laboratory-measured maximum. Canonical value uses the conservative end.
- **Bite:** 2200 N and other model outputs are force, not PSI. `bite_force_psi` stays 0.0.
- **Attack normalization:** Grizzly **66.0** is above Black Bear 56.0 due larger mass, longer claws and stronger forequarters, but below Cape Buffalo 76.0 and below the most massive specialized predators/megafauna.
- **Raw Power:** **65.0** sits below Gorilla 68.0 only slightly and well below Bison 78.0. This avoids folklore-driven bear inflation while recognizing the grizzly's larger mass than the staged gorilla.
- **Defense:** 59.0 is above Black Bear 49.0 and near Gorilla 58.0, but below Bison 68.0 and Cape Buffalo 70.0 because fur/muscle are not armor.
- **Agility:** 59.0 remains far below small cats, raptors and flying specialists despite high sprint speed.
- **Stamina:** 75.0 reflects long travel and active-season endurance but remains below wolf 89.0 persistence specialization.
- **Intelligence:** 75.0 is above simple large-herbivore controls and below Gorilla 89.0/corvid ceilings; tool use and experimental flexibility justify the increase.
- **Special:** 63.0 is meaningful but intentionally below venom/electric/camouflage specialists.

## Final verification
Representative healthy adult: **yes**. Larger fighting sex: **male selected**. Dimorphism/population variation: **documented**. Unsupported PSI: **rejected**. Six factual schema fields: **addressed**. Current substats: **rescored independently**. Six headline ratings: **one decimal each**. Special abilities: **exactly 2**. Unique traits: **exactly 2**. Ecology/profile/fun facts/source ledger/conflicts/calibration: **included**. Image standard: **candidate only, no PNG completion claimed**.