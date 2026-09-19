# Giant Squid research report

## 1. Identity and canonical specimen

- **Roster name:** Giant Squid
- **Scientific name:** *Architeuthis dux* Steenstrup, 1857
- **Family:** Architeuthidae
- **Living/extinct:** Living
- **Exact animal represented:** the giant squid *Architeuthis dux*, not the heavier Antarctic colossal squid *Mesonychoteuthis hamiltoni*.
- **Taxonomy:** a 2013 mitogenomic study of 43 *Architeuthis* samples from across the global range found no detectable mitochondrial phylogeographic structure and exceptionally low diversity, consistent with one globally distributed species, *A. dux*. This is the best-supported staging interpretation rather than splitting regional forms without evidence.
- **Canonical combat specimen:** healthy mature large female, **150.0 kg**, using the Smithsonian's well-documented 149.6 kg female as a representative large-female mass anchor rather than the 220-275 kg verified/estimated maxima or older tonne-scale folklore.
- **Sex choice:** female. Females are substantially larger than males and dominate large museum specimens. The canonical fighting specimen therefore uses a mature female.
- **Evidence limitation:** adult giant squid are exceptionally difficult to observe alive. Anatomy and size are much better established than natural behavior, speed, stamina, cognition, sociality, and lifespan. Those categories remain conservative.

## 2. Physical measurements and variation

### Mass, mantle length and total length

Smithsonian Ocean emphasizes that total length is unusually unreliable in giant squid because the two feeding tentacles are extremely extensible, can be stretched after death, and are often damaged or missing. Mantle length is the more stable scientific size metric. Smithsonian reports a longest recorded mantle around **2.25 m**, fin-to-arm length rarely above **5 m**, and a longest documented total length around **13 m**. Guinness summarizes the heaviest entire giant-squid specimen at approximately **220 kg**. Other specialist reviews have placed an upper female mass around 275 kg, but these are maxima, not representative adults.

A particularly useful Smithsonian specimen is a female caught off northern Spain in July 2005, documented at approximately **10.9 m total length**, including **6.7 m feeding tentacles**, and **149.6 kg**. That specimen demonstrates how much total length can be dominated by tentacles. For ABS, 150 kg is therefore a defensible robust-female canonical mass without turning a record individual into the norm.

Recommended dimensions:

- **Canonical mass:** **150.0 kg**
- **Canonical mantle length:** **180.0 cm** as a large-adult staging value below the 225 cm documented maximum.
- **Canonical `length_cm`: 500.0 cm**, representing a conservative fin-to-arm/body-envelope length rather than stretched tentacle-tip length. The famous 10.9 m Smithsonian female is retained as a documented total-length example, not the canonical body-length field.
- **Canonical `height_cm`: 0.0**, because standing height is not biologically meaningful.

### Feeding tentacles, arms, suckers and beak

Giant squid have eight arms and two much longer feeding tentacles. Smithsonian reports that the tentacles can extend the prey-capture envelope dramatically and terminate in clubs carrying hundreds of suckers armed with sharp chitinous rings. The eight arms also carry toothed suckers and pull captured prey toward the central beak. Smithsonian notes arm suckers can reach about **2 inches (5 cm) across** on very large animals.

The beak is a hard cutting structure that slices prey after the arms restrain it. No credible species-specific bite pressure in PSI was located. Beak effectiveness must not be converted into a fabricated pressure number.

### Eyes and sensory anatomy

Giant squid possess enormous camera-type eyes adapted to dim mesopelagic/deep-water conditions. Eye size is a major low-light sensory advantage, but the precise upper diameter varies among specimens and preservation state. This report treats large eyes as a high-confidence adaptation without turning uncertain maximum measurements into a canonical numeric field.

### Buoyancy

*Architeuthis* tissues contain ammonium ions that reduce density and help maintain near-neutral buoyancy. This is an important energetic adaptation for a large pelagic cephalopod. It reduces the cost of staying in the water column, but neutral buoyancy is not armor and does not prove high combat endurance.

### Speed and locomotion

Giant squid use mantle contraction and a funnel for jet propulsion, while posterior fins provide lower-speed control. Live observations show active swimming and prey interaction, but no robust instrumented maximum speed for mature *A. dux* was verified. Generic squid speed values are not transferred to this species.

- **Canonical `speed_mps`: 0.0**, meaning unknown, not stationary.

### Lifespan and growth

Age remains unusually uncertain. A study of three mature males from west of Ireland reported mantle lengths **975-1084 mm** and statolith-based putative ages in a very short range, supporting extremely rapid growth, but the daily-increment assumption and broader applicability remain uncertain. Animal Diversity Web summarizes a proposed attainment of adult size within roughly three years, while CEPH REF notes published maturity/lifespan estimates vary widely and remain unresolved.

- **Canonical `lifespan_years`: 3.0**, **low confidence**, used as a conservative staging estimate tied to rapid cephalopod growth literature rather than presenting it as directly measured longevity.

### Bite force

- **Canonical `bite_force_psi`: 0.0.** No defensible *A. dux* PSI measurement was verified.

## 3. Proposed canonical factual fields

```json
{
  "weight_kg": 150.0,
  "height_cm": 0.0,
  "length_cm": 500.0,
  "speed_mps": 0.0,
  "lifespan_years": 3.0,
  "bite_force_psi": 0.0
}
```

Recommended future structured fields:

- `mantle_length_cm`: **180.0**
- `documented_max_mantle_length_cm`: **225.0**
- `canonical_length_excludes_feeding_tentacle_extension`: **true**
- `documented_specimen_total_length_cm`: **1090.0** for the Smithsonian 149.6 kg female, context only
- `documented_specimen_tentacle_length_cm`: **670.0**, context only
- `mass_confidence`: **moderate**
- `lifespan_confidence`: **low**

The live site's placeholder-like values were not used as anchors. In particular, no unsupported speed or bite PSI is retained.

## 4. Combat biology

### Primary weapons and offensive mechanics

The giant squid is a long-reach aquatic grappler. Its two feeding tentacles create the initial capture envelope. The terminal clubs use many toothed suckers to attach to prey, after which the tentacles retract and the eight arms add multiple contact points. The prey is then brought to the central beak for cutting.

This is a dangerous system at 150 kg because it combines reach, redundancy and restraint. It is not equivalent to the colossal squid's swivelling hooks, and the two species should not share a generic 'giant squid hook' ability. *Architeuthis* uses toothed sucker rings rather than the prominent rotating hooks of *Mesonychoteuthis*.

### Diet and predation

Direct stomach-content work on three mature males from Irish waters identified blue whiting (*Micromesistius poutassou*), horse mackerel (*Trachurus trachurus*), Norway lobster (*Nephrops norvegicus*) and curled octopus (*Eledone cirrhosa*). Stable-isotope profiles from beaks indicate an ontogenetic trophic shift, with larger animals consuming higher-trophic prey than early life stages. The adult diet includes fish and cephalopods.

The capture system favors prey that can be intercepted, attached to and reeled into the arm crown. There is no good evidence that adult giant squid routinely attack sperm whales. Sperm whales are predators of giant squid, and sucker scars on whales are evidence of physical contact during predation encounters, not proof that squid seek whales as prey.

### Defense and toughness

At 150 kg the canonical female has meaningful absolute bulk, but its body remains largely soft tissue. It has no shell, bony skeleton, thick hide or external armor. The mantle can generate powerful jets and the arms can counter-grapple, but a large shark or toothed whale can inflict major tissue damage.

Ink provides a short-range sensory disruption mechanism, and jet propulsion can create separation. These are active defenses rather than passive durability.

### Locomotion and maneuverability

Posterior fins permit controlled swimming and stabilization. The funnel provides faster jet-driven repositioning. In open water the squid can move in three dimensions and can orient its arm crown toward a target. Its long tentacles provide reach without requiring the entire body to close distance.

The species should not receive elite Agility merely because squid can jet. A 150 kg elongated cephalopod with exceptionally long appendages faces more rotational inertia and drag than a small cuttlefish or reef squid. Direct maneuverability measurements are scarce.

### Endurance and energetic economy

Near-neutral buoyancy reduces the energetic cost of remaining suspended. That supports ecological persistence, but there are no controlled data demonstrating prolonged maximal-output combat. Repeated jetting is metabolically expensive in cephalopods. Stamina is therefore kept moderate.

### Senses

Vision is the standout battle-relevant sense. Giant eyes collect light in dim water, while mechanosensory systems detect water movement. The long capture appendages can operate beyond the immediate body envelope. The sensory score is high, but not automatically equal to the colossal squid's because the exact ecological role and comparative performance of the two giant-squid visual systems remain incompletely measured.

### Intelligence and tactics

Squid possess centralized brains and sophisticated sensorimotor control, but direct learning experiments on adult *A. dux* are essentially absent. It would be inappropriate to import octopus, cuttlefish or Humboldt-squid cognition wholesale. The animal clearly coordinates ten appendages, vision, jetting and prey capture, supporting competent predatory control. Evidence does not justify primate/corvid-level Intelligence.

### Intraspecific fighting and social behavior

Adult social organization is poorly known. Genetic evidence is consistent with high global vagility, but that says nothing about cooperative hunting. No pack multiplier or social-combat bonus is applied. Mating behavior remains largely inferred from reproductive anatomy and spermatangia found in females.

### Predator defense

Sperm whales are the iconic major predator and giant-squid beaks occur in their stomach contents. Large sharks may also prey on younger or compromised animals. Against a predator, likely useful responses include visual detection, jet escape, ink, arm/tentacle grappling and sucker attachment. These mechanisms can make capture difficult without implying that the squid is physically favored against a whale.

### Environmental strengths

- Deep pelagic water where large eyes and three-dimensional movement matter.
- Open-water targets that enter the feeding-tentacle capture envelope.
- Dim conditions that reduce the value of surface-adapted vision.
- Water-supported combat where its soft body and long appendages function normally.

### Environmental weaknesses

- Terrestrial combat is effectively nonfunctional.
- Soft tissue lacks passive armor.
- Long tentacles can be damaged, severed or controlled by much larger predators.
- High-output jetting cannot be assumed sustainable indefinitely.
- Extreme total-length figures exaggerate effective body mass because much of the length is two thin extensible tentacles.
- Large toothed whales massively outweigh the canonical animal.

### Matchup archetypes

- **Strong:** smaller pelagic fish and cephalopods that can be seized at tentacle range and reeled inward.
- **Mixed:** similarly sized soft-bodied marine predators where first secure contact and beak access determine the exchange.
- **Poor:** large sharks able to cut mantle tissue while avoiding prolonged restraint.
- **Very poor:** adult sperm whales and other much larger toothed whales.
- **Invalid outside habitat:** land-based forced fights.

## 5. Proposed ABS substats

All scores are absolute across the 225-animal roster.

| Substat | Score | Justification |
|---|---:|---|
| Size | **55.0** | 150 kg is large in absolute terms but far below terrestrial megafauna and the heaviest marine giants. |
| Raw Power | **50.0** | Large muscular mantle and many arms provide substantial grappling force, but no direct force measurement supports higher placement. |
| Weaponry | **66.0** | Two long capture tentacles, many toothed suckers, eight arms and a cutting beak form a strong redundant close-range system. |
| Protection | **18.0** | No armor, shell or thick hide; soft mantle and appendages remain vulnerable. |
| Toughness | **43.0** | Large body mass helps, but major tissue injury from sharks/whales is difficult to resist. |
| Speed | **35.0** | Jet propulsion exists, but no measured adult maximum supports a high score. |
| Maneuverability | **53.0** | Three-dimensional fin/funnel control is useful, constrained by large size and long appendages. |
| Endurance | **47.0** | Neutral buoyancy lowers routine energetic cost, but prolonged maximal jetting is not demonstrated. |
| Recovery | **38.0** | Cephalopods can heal tissue, but no matchup-scale regenerative advantage is established for *A. dux*. |
| Tactics | **50.0** | Coordinated reach-and-reel predation is effective; broader behavioral flexibility is poorly observed. |
| Senses | **88.0** | Huge low-light eyes and aquatic mechanosensation are major deep-water advantages. |
| Ferocity | **44.0** | Effective predator, but no evidence supports indiscriminate aggression or whale-hunting folklore. |
| Abilities | **80.0** | Exceptional tentacle reach, toothed sucker arrays, ink, jetting, giant eyes and ammonium-assisted buoyancy create a rare toolkit. |

## 6. Proposed six headline ABS ratings

| Rating | Score | Rationale |
|---|---:|---|
| **Attack** | **58.0** | A 150 kg long-reach grappler with toothed suckers and a cutting beak can inflict serious damage, but it lacks hooks, armor-piercing dentition or quantified bite force. |
| **Defense** | **36.0** | Bulk, ink and escape options help, but the body is unarmored and vulnerable to large marine predators. |
| **Agility** | **54.0** | Three-dimensional fin and jet control is useful without pretending an unmeasured top speed equals elite maneuverability. |
| **Stamina** | **47.0** | Efficient buoyancy supports persistence, while sustained high-output performance remains undocumented. |
| **Intelligence** | **53.0** | Sophisticated sensorimotor coordination is evident, but species-specific learning/problem-solving evidence is sparse. |
| **Special** | **86.0** | Extreme feeding-tentacle reach, toothed sucker rings, giant low-light eyes, ink, jet propulsion and unusual buoyancy are strongly matchup-distinctive. |

### Cross-check against Colossal Squid

The already researched colossal squid is **470 kg** with Attack 67.0 and Special 88.0. Giant Squid is deliberately below it in Raw Power, Attack, Defense and Toughness because the canonical animal is roughly one-third the mass and lacks the colossal squid's swivelling hooks. Giant Squid remains competitive in Special because its extreme feeding-tentacle reach is a distinct capture advantage. This avoids collapsing two biologically different giant cephalopods into the same score profile.

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities

1. **Longline Sucker Snare** - Two highly extensible feeding tentacles project a capture envelope far beyond the mantle and terminate in clubs armed with hundreds of toothed suckers, allowing prey to be seized and reeled toward the arm crown.
2. **Abyssal Eye Array** - Enormous camera-type eyes gather scarce deep-water light and support visual prey/predator detection where ordinary surface vision is heavily disadvantaged.

### Unique traits

1. **Tentacle-Dominated Giant** - Much of the animal's famous total length comes from two thin, extensible feeding tentacles, so mantle length and mass are more meaningful combat-size metrics than headline tip-to-tip length.
2. **Ammonium Buoyancy** - Ammonium-rich tissues reduce body density and help this huge soft-bodied predator remain suspended with less continuous swimming effort.

## 8. Expanded profile

### Habitat and geographic range

Genetic and specimen evidence supports a broadly distributed global species in temperate and subtropical deep oceans. Giant squid are associated with continental slopes and deep pelagic habitat, commonly inferred in roughly several hundred to around 1,000 m depth depending on region and life stage. They are uncommon in polar extremes and very warm tropical surface waters.

### Diet and ecology

Adult giant squid prey on fishes and cephalopods. Stomach-content records include blue whiting, horse mackerel, Norway lobster and curled octopus. Stable-isotope profiles show an ontogenetic increase in trophic position, indicating diet shifts toward larger/higher-trophic prey as the squid grows. Giant squid are themselves important prey of sperm whales, linking deep pelagic cephalopod biomass to marine mammals.

### Social structure

Unknown. There is no strong evidence for stable cooperative groups or pack hunting in adults. ABS treats the canonical individual as solitary.

### Reproduction and life history

Sexual dimorphism is pronounced, with females reaching much larger body size. Mature males produce numerous spermatophores; mating itself has not been directly characterized in detail. Spermatangia embedded in female tissues demonstrate sperm transfer. Growth is exceptionally rapid by vertebrate standards, but exact age at maturity and maximum lifespan remain unresolved.

### Conservation

Population size is difficult to estimate directly because the species occupies deep water and most records come from strandings, fisheries encounters, predator stomach contents and rare live observations. The 2013 mitochondrial study found extremely low global genetic diversity and no clear phylogeographic structure. That pattern may reflect population history or selective processes and should not be casually translated into either abundance or conservation security.

### Adaptations

- Two extremely long retractile feeding tentacles
- Hundreds of toothed suckers
- Eight additional prey-handling arms
- Hard cutting beak and radula
- Giant low-light eyes
- Jet propulsion through a muscular funnel
- Posterior fins for controlled swimming
- Ink defense
- Ammonium-assisted neutral buoyancy
- Rapid growth and strong sexual size dimorphism

### Human interaction

Giant squid are not known to hunt humans. Human contact consists mostly of strandings, accidental fishery capture, museum specimens and scientific expeditions. Their rarity at the surface helped generate centuries of sea-monster mythology before photography and modern specimen work established their real anatomy.

### Genuine fun facts

- The first photographs of a live giant squid in its natural environment were obtained only in the 21st century.
- In 2012 researchers filmed a giant squid in its deep natural habitat for the first time.
- Smithsonian reports a documented female about 10.9 m long and 149.6 kg, with approximately 6.7 m of that length in the feeding tentacles.
- Giant squid use toothed sucker rings, not the rotating hooks characteristic of the colossal squid.
- A 2013 mitogenomic study of 43 specimens from around the world found remarkably little mitochondrial variation and supported one global species.
- Three mature males from Irish waters measured about 0.98-1.08 m mantle length, illustrating the strong female-biased size dimorphism.
- Giant-squid beaks survive digestion and are important evidence in sperm-whale diet studies.
- Their enormous total length can be misleading because the two feeding tentacles are thin, extensible and vulnerable to postmortem stretching.

### Concise site-ready summary

The giant squid is a deep-ocean long-range grappler built around two extraordinary feeding tentacles, hundreds of toothed suckers and a cutting beak. A large female can weigh around 150 kg while extending far beyond its compact mantle with thin capture tentacles. Huge eyes, ink, jet propulsion and near-neutral buoyancy make it highly specialized for deep pelagic life, but its soft unarmored body keeps Defense well below its famous size and Special ratings.

### Rich narrative profile

*Architeuthis dux* is a perfect example of why Animal Battle Stats cannot score from reputation. Its popular image is a many-tonne kraken wrestling ships and sperm whales. The measured animal is stranger and more interesting. A robust female can be heavier than a person, but much of the spectacular headline length is concentrated in two narrow feeding tentacles. The core body is measured more honestly by mantle length and mass.

That anatomy creates a distinctive combat geometry. The squid does not need to place its mantle beside prey to begin an attack. It can extend two tentacles, attach the clubs with arrays of toothed suckers, and pull prey into eight shorter arms. Only after restraint does the beak become the main cutting weapon. The result is excellent reach and control against fish and other cephalopods, but not the crushing bite of a crocodilian or the hook system of a colossal squid.

Defense is the inverse problem. The giant squid has active escape tools but very little passive armor. Ink can disrupt vision. Jetting can rapidly change position. Giant eyes help detect events in dim water. Yet if a sperm whale or large shark makes damaging contact, the mantle and appendages are still soft tissue. Sperm-whale predation is therefore central to realistic calibration: scars and beaks document violent encounters, but they do not transform the squid into an equal-mass whale fighter.

Its cognition also demands restraint. Coordinating ten appendages, visual input, prey capture and jet propulsion requires sophisticated nervous control, but direct adult behavioral experiments are nearly nonexistent. The report therefore credits functional tactics without borrowing the most impressive cognitive findings from octopuses or cuttlefish.

The final profile is a large, unusual ambush/grapple predator with moderate absolute power, low passive protection, high sensory specialization and an exceptional capture envelope. Its strongest ABS identity is not 'sea monster'. It is a deep-water reach specialist whose biology rewards positioning and first secure contact.

### Future field proposals

1. Add `mantle_length_cm` as the primary cephalopod body-size field so extensible tentacles do not distort comparisons.
2. Add `feeding_tentacle_length_cm` separately from total length.
3. Add `capture_reach_cm` where a defensible specimen measurement exists.
4. Add `buoyancy_strategy` for pelagic animals whose routine energetic cost differs sharply from terrestrial locomotion.
5. Preserve `lifespan_confidence` because statolith-age assumptions remain unsettled.
6. Do not populate bite PSI until a species-specific force and defensible contact area are available.

## 9. Mandatory image section

- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/giant-squid.png` (**not present; not complete**)
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Female_giant_squid_NMNH.jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/6/6f/Female_giant_squid_NMNH.jpg
- `file_format_verified`: source is a real JPEG photograph; no staging PNG exists
- `alpha_verified`: **false**
- `full_body_verified`: **false** under the strict standard; the museum specimen is broadly shown but exact complete visibility of every arm/tentacle tip must be visually certified before cutout
- `adult_verified`: **not explicitly established by the image metadata used in this run**
- `sex_verified_or_unknown`: **female verified**
- `license_status`: **Public domain in the United States**, Smithsonian employee work; Commons hosts a 2912x4368 version
- `notes`: Strong exact-species, high-resolution, reusable museum-specimen candidate. It is not promoted to completed image because adulthood and strict all-appendage completeness were not both verified, and current connected GitHub write actions are UTF-8 text-only rather than binary PNG writers. No fake PNG was created.

Secondary documented candidate: https://commons.wikimedia.org/wiki/File:Architeuthis_dux_-_Smithsonain_Museum.JPG . This CC BY-SA 2.0 photograph explicitly identifies a female caught off northern Spain in July 2005, approximately 10.9 m total length and 149.6 kg, but its 1333x2000 framing and display geometry are less suitable than the higher-resolution Smithsonian public-domain candidate.

## 10. Evidence and source ledger

| Source | Direct URL | Supports | Finding / context | Confidence / caveat |
|---|---|---|---|---|
| Smithsonian Ocean, Giant Squid | https://ocean.si.edu/ocean-life/invertebrates/giant-squid | Anatomy, size, capture tentacles, sucker rings, observations | Max documented mantle about 2.25 m; fin-to-arm length rarely >5 m; total length record about 13 m; two feeding tentacles and toothed suckers | **High** institutional synthesis; total length is preservation/stretch sensitive |
| Smithsonian/Commons 2005 female | https://commons.wikimedia.org/wiki/File:Architeuthis_dux_-_Smithsonain_Museum.JPG | Canonical mass/sex and specimen dimensions | Female, July 2005 northern Spain; ~10.9 m total, ~6.7 m tentacles, 149.6 kg | **High** for displayed specimen metadata; not used as generic adult total length |
| Guinness World Records, largest cephalopods | https://www.guinnessworldrecords.com/world-records/716793-largest-cephalopods | Upper mass/length context | Giant squid at least 13 m; mantle up to 2.25 m; heaviest entire specimen ~220 kg | **Moderate-high** synthesis; maxima not canonical |
| Winkelmann et al. 2013, Proceedings B | https://doi.org/10.1098/rspb.2013.0273 | Taxonomy, global population structure | 43 global samples, no mitochondrial phylogeographic structure, exceptionally low diversity, consistent with one species | **High**, peer reviewed; mitochondrial data alone do not settle every taxonomic question forever |
| Lordan, Collins & Perales-Raya 1998 | https://doi.org/10.1017/S0025315400044866 | Mature male size, diet, rapid growth | Three mature males 975-1084 mm ML; stomach prey identified; statolith age estimates support rapid growth | **High** for measurements/diet; age periodicity assumption adds uncertainty |
| Guerra et al. 2010, ICES Journal of Marine Science | https://doi.org/10.1093/icesjms/fsq091 | Ontogenetic diet and habitat inference | Beak stable isotopes show increasing trophic position through growth and relative adult carbon-isotope stability | **High**, peer reviewed; indirect ecology inference |
| Animal Diversity Web, *Architeuthis dux* | https://animaldiversity.org/accounts/Architeuthis_dux/ | Reproduction and lifespan context | Mature males carry hundreds of spermatophores; adult-size attainment proposed within ~3 years | **Moderate** synthesis; age at maturity explicitly uncertain |
| CEPH REF, *Architeuthis dux* | https://cephref.org/species/architeuthis-dux/ | Age uncertainty and morphology | Published age/maturity estimates vary widely; many recovered specimens mature | **Moderate-high** specialist reference; quantitative lifespan unresolved |
| Smithsonian Institution collection | https://www.si.edu/object/architeuthis-dux%3Anmnhinvertebratezoology_953184 | Exact species/depth specimen evidence | *A. dux* specimen from 475 m in Gulf of Mexico; Smithsonian metadata CC0 | **High** specimen record; not canonical morphology |
| Commons, Female giant squid NMNH | https://commons.wikimedia.org/wiki/File:Female_giant_squid_NMNH.jpg | New-animal image candidate | Exact *A. dux* female museum specimen, 2912x4368, Smithsonian public-domain image | **High** provenance/license; strict adulthood/full-body not yet certified |

### Key conflicts and uncertainty

- **Maximum mass:** strong sources range from roughly 220 kg for the heaviest entire documented specimen to specialist estimates around 275 kg; older 500-1000 kg claims are not used for the canonical animal.
- **Total length:** highly sensitive to tentacle condition and stretching. Mantle length and mass are more reliable.
- **Age/lifespan:** statolith increment assumptions are not sufficiently settled for high-confidence longevity. `3.0` years is explicitly low-confidence.
- **Speed:** no adult instrumented maximum was verified, so `speed_mps` stays 0.0.
- **Bite pressure:** no defensible PSI measurement was verified, so `bite_force_psi` stays 0.0.
- **Behavior:** rare live observation means predatory tactics and social behavior carry substantially more uncertainty than anatomy.

## 11. Cross-animal normalization notes

- **Versus Colossal Squid:** Giant Squid is much lighter canonically and lacks rotating hooks, so Attack 58.0 and Defense 36.0 remain below Colossal Squid's 67.0 and 43.0. Its longer capture tentacles preserve a very high Special 86.0 without making it physically stronger.
- **Versus Giant Centipede:** the squid's 150 kg mass creates an enormous absolute Raw Power and Attack gap despite both animals possessing impressive prey-capture specializations. This prevents proportional-strength leakage.
- **Versus Cuttlefish:** cuttlefish retains far higher maneuverability and better direct cognition evidence, while giant squid dominates absolute size, reach and power. Giant Squid therefore does not inherit Cuttlefish's 90+ Agility/Intelligence merely because both are cephalopods.
- **Versus megafauna:** 150 kg is substantial but nowhere near elephant, whale or other multi-tonne anchors. Total tentacle length does not substitute for mass.
- **Speed/agility control:** no top-speed folklore is used to inflate Agility.
- **Double-counting control:** feeding tentacles primarily drive Weaponry/Attack; their unusual reach contributes secondarily to Special. Giant eyes primarily drive Senses/Special, not Intelligence. Ammonium buoyancy informs ecological economy but does not become passive Defense.

## Final verification

- Exact taxon and canonical specimen: **yes**
- Physical ranges/conflicts/uncertainty: **yes**
- Canonical schema fields: **yes**
- Combat mechanics/environment/matchups: **yes**
- Current ABS-style substats with one-decimal ratings: **yes**
- Six headline ratings with one decimal: **yes**
- Special abilities: **exactly 2**
- Unique traits: **exactly 2**
- Expanded ecology/profile/fun facts: **yes**
- Source ledger with direct URLs/confidence/conflicts: **yes**
- Cross-animal normalization: **yes**
- Mandatory image section: **yes; pending honestly, no PNG claimed**