# Howler Monkey Research Overhaul

## 1. Identity and canonical specimen

- **Common name:** Howler Monkey, resolved here to Black-and-gold Howler Monkey / Black Howler Monkey
- **Scientific name:** *Alouatta caraya* (Humboldt, 1812)
- **Family:** Atelidae
- **Status:** Living
- **Exact ABS animal represented:** The generic roster label `Howler Monkey` is resolved to *Alouatta caraya*. This is a specific, well-studied howler species and prevents mixing measurements among the many *Alouatta* species.
- **Canonical specimen:** Healthy fully mature adult male, **7.0 kg**, **60.0 cm head-body length**, with an approximately **60 cm prehensile tail**.
- **Why male:** *A. caraya* is strongly sexually dimorphic. A northern Argentina field population found adult males averaging **6.7 kg** and females **4.4 kg**. Argentina's National Parks species account gives males/females together at 4-9.5 kg and identifies adult males as larger. Mature males are also the primary long-distance roarers and participate in male-male aggression.
- **Age/sex appearance:** Adult males are black. Females are yellow-brown. Juvenile males retain female-like coloration for years, so a black male source is useful but black coloration alone is not used to infer exact age unless the source says adult.
- **Population variation:** Body size, diet, activity, group structure and conservation pressure vary geographically. Values below prioritize *A. caraya* evidence and label genus-level evidence when used.

## 2. Physical measurements

### Mass

A classic northern Argentina study of 261 individuals documented strong sexual dimorphism. A later population paper reports males averaging **6.7 kg** and females **4.4 kg**. Zoo Zagreb gives males **5.3-9.6 kg** and females **3.6-6.5 kg**. Argentina's SIB/Parques Nacionales gives **4-9.5 kg** for the species.

- **Canonical adult male mass:** **7.0 kg**
- **Credible male range:** approximately **5.3-9.6 kg** in institutional references
- **Confidence:** High for male-biased size; moderate-high for a single representative 7.0 kg value.
- **Reasoning:** 7.0 kg is close to the field mean and does not normalize a 9.5+ kg upper-end male.

### Head-body length and tail

Argentina's SIB gives head-body length **42-61 cm** and tail **53-65 cm**. Zoo Zagreb gives males **60-65 cm** body length and notes a tail about as long as the body.

- **Canonical `length_cm`: 60.0 cm** head-body length
- **Canonical tail context:** approximately **60.0 cm**
- **Total extended span:** roughly 120 cm for a representative male, but the site's `length_cm` should remain head-body length so tail-inclusive and tail-exclusive mammals are not mixed.
- **Confidence:** High.

### Height

A standardized standing or shoulder height is not a normal measurement for this arboreal primate. Deriving one from photographs would add false precision.

- **Canonical `height_cm`: 0.0**

### Speed and locomotion

No defensible species-specific maximum sprint or climbing speed was found. Argentina's National Parks account describes movement as slow and deliberate. Howlers are arboreal quadrupeds and climbers whose combat-relevant movement depends more on support choice, balance and a prehensile tail than on maximum velocity.

- **Canonical `speed_mps`: 0.0**
- **Important distinction:** slow routine travel does not erase strong branch control. Speed and Agility are scored separately.

### Lifespan

Animal Diversity Web/EOL reports captive averages around **20 years** and a documented maximum around **32.4 years** for a wild-born female that later lived in captivity. These are not equivalent to wild mean life expectancy.

- **Canonical `lifespan_years`: 20.0**
- **Confidence:** Moderate.
- **Caveat:** 20 years is a species-reference longevity value, not a claim that the average wild animal survives two decades.

### Bite, teeth and jaws

Howlers possess large jaws and teeth suitable for processing plant material and can bite during close conflict. The male skull becomes strongly dimorphic in adulthood, including rostral and zygomatic dimensions. No reliable *A. caraya* bite-pressure PSI measurement was found.

- **Canonical `bite_force_psi`: 0.0**
- **Do not substitute:** generic monkey bite PSI claims, human analogies or jaw dimensions cannot be converted into PSI without measured force and defensible contact area.

### Prehensile tail

The long tail is a major locomotor adaptation. ADW describes a strong prehensile tail with a hairless tactile underside that functions much like a fifth hand. Comparative anatomical work reports the *A. caraya* prehensile tail at about **6.5% of total body mass**, illustrating unusually substantial investment in the appendage.

The tail is treated as a support, balance and positional-control structure, not as a constricting weapon.

### Hyoid and vocal apparatus

Howler monkeys possess a specialized enlarged hyoid/laryngeal apparatus. Comparative work shows that larger hyoids lower formant frequencies and can increase the acoustic impression of male body size. Species-specific *A. caraya* studies confirm that adult-male roars are individually distinctive and primarily function in long-range group spacing and occupancy signaling.

The roar is not scored as a damaging sonic attack. Its value is communication, intimidation, spacing and avoidance of costly physical contests.

## 3. Canonical proposed factual fields

```json
{
  "weight_kg": 7.0,
  "height_cm": 0.0,
  "length_cm": 60.0,
  "speed_mps": 0.0,
  "lifespan_years": 20.0,
  "bite_force_psi": 0.0
}
```

### Canonical-value reasoning

- **7.0 kg:** representative mature male close to the 6.7 kg field mean.
- **0.0 cm height:** no defensible standardized height measurement.
- **60.0 cm length:** representative mature male head-body length within institutional ranges.
- **0.0 m/s:** no strong species-specific maximum-speed measurement.
- **20.0 years:** defensible species-reference longevity while separating it from the 32.4-year maximum record.
- **0.0 PSI:** no credible species-specific pressure measurement.

### Future structured fields

```json
{
  "canonical_sex": "male",
  "tail_length_cm": 60.0,
  "tail_type": "fully prehensile with tactile hairless underside",
  "locomotion_mode": "arboreal quadrupedal climbing",
  "vocal_system": "enlarged hyoid/laryngeal resonator"
}
```

## 4. Combat biology

### Primary and secondary weapons

The primary physical weapon is the bite. Hands and feet provide grasping control and can shove, pull or stabilize the body during a close encounter. The prehensile tail provides positional support rather than a killing weapon. The roar is a conflict-management mechanism rather than direct tissue-damaging weaponry.

At only about 7 kg, even a large adult male remains a small combatant on the full ABS roster. Its primate dexterity and teeth matter against small opponents but cannot justify cat, canid or great-ape levels of absolute force.

### Offensive mechanics

A howler's plausible physical offense is close-range: grip a support or opponent, bite, push or pull, then reposition. Male-male aggression is documented in the wild, but the species is not specialized for predatory killing. Its dentition and digestive ecology are overwhelmingly herbivorous/folivorous.

The most important pre-contact behavior is acoustic. Playback experiments with stranger-group roars caused alpha males to roar more, leave sooner and travel toward simulated intrusions. Roars can therefore advertise occupancy and reinforce a dispute before costly physical contact.

### Defensive adaptations and durability

There is no armor, thick hide, shell or specialized impact protection. Fur provides little defense from serious teeth or talons. A secured bite or crush from a much larger animal is dangerous.

Defense instead depends on canopy access, balance, group vigilance, spatial awareness and the ability to remain on supports that many terrestrial opponents cannot use. Genus-level predator-defense accounts also describe warning signals and group mobbing/chasing responses.

### Locomotion and maneuverability

*A. caraya* is deliberately moving rather than speed-specialized. Four grasping extremities plus a muscular prehensile tail give strong stability on branches. The tactile underside of the tail can maintain contact while hands or feet change support.

This produces good three-dimensional control but should not be confused with the explosive leaping or rapid brachiation of more specialized primates. On open ground, much of the positional advantage disappears.

### Endurance and stamina

An 11-month Brazilian field study recorded **64.7% resting, 18.5% travel, 10.1% feeding, 4.4% social behavior and 2.3% other activity**. This low-energy activity budget is consistent with a leaf-heavy diet. It is energy-conserving physiology, not evidence of elite high-output endurance.

Stamina is therefore moderate-low for sustained combat. The animal can maintain daily arboreal travel and prolonged occupancy, but is not a pursuit athlete.

### Senses

Forward-facing vision supports branch placement and depth judgment. Touch is unusually important because the tail's naked underside provides tactile information. Hearing is highly combat-relevant socially because individuals distinguish and respond to long-range roars. Olfaction also contributes to food and social information, but extraordinary kilometer-scale smell claims were not used as hard facts.

### Intelligence, learning and tactics

Howlers are socially organized primates capable of individual vocal recognition, context-dependent responses and spatially appropriate reactions to neighboring or invading groups. Species-specific playback work shows that alpha males change both calling and movement depending on where stranger calls are simulated.

This supports solid tactical and social cognition. It does not justify capuchin-level tool/problem-solving scores or great-ape-level cognitive ratings, because the strongest *A. caraya* evidence is communication and social/spatial decision-making rather than flexible tool use.

### Fighting and intraspecific aggression

Direct aggression between *A. caraya* males has been documented in fragmented northern Argentine forests. Male competition must nevertheless be interpreted alongside the roar system, which can settle or structure disputes before chases and fights. Mature males are therefore capable of dangerous conspecific conflict without being obligate high-frequency fighters.

### Predation and predator defense

Howlers are primarily plant eaters rather than predators. Genus-level documented predators include pumas, ocelots, tayras, harpy eagles, crested eagles, black hawk-eagles and caracaras. Adults benefit from body size relative to smaller New World monkeys, canopy access, warning behavior and group responses, but aerial predators can bypass many arboreal escape advantages.

### Environmental strengths

- Forest canopy with continuous branches
- Elevated supports inaccessible to many terrestrial opponents
- Dense habitat where prehensile-tail stability matters
- Social environments where long-range calls reduce surprise and coordinate spacing
- Branch networks allowing repeated changes in vertical position

### Environmental limitations

- Open ground removes most of the tail-assisted canopy advantage
- Slow routine movement makes long terrestrial escape poor
- Water is not a preferred combat environment
- No armor or specialized killing weapon
- Leaf-adapted energy economy is poorly suited to prolonged maximal exertion
- Aerial predators can attack within the canopy space

### Major weaknesses

1. Only about 7 kg in the canonical male.
2. No armor or thick protective tissue.
3. No specialized claws, venom, horns or high-force predatory jaw system.
4. Slow routine locomotion and a rest-heavy energy budget.
5. Tail advantage is terrain-dependent.
6. Physical attack requires close range.

### Matchup archetypes

**More favorable:** small fragile animals in complex arboreal terrain; opponents unable to climb; contests where elevation, gripping stability and intimidation can prevent clean engagement.

**Unfavorable:** medium and large carnivores; raptors able to contest canopy space; great apes and large monkeys with much greater absolute power; armored opponents; open-ground pursuit situations; any opponent able to absorb the first bite and force a grapple.

## 5. Proposed ABS substats

All values use the absolute 225-animal scale in `CALIBRATION.md`.

| Substat | Score | Evidence-based justification |
|---|---:|---|
| Size | **14.0** | A 7 kg male is substantial for a New World monkey but tiny against medium predators, great apes and megafauna. |
| Raw Power | **20.0** | Strong grasping primate for its size, but low absolute mass sharply caps force. |
| Weaponry | **24.0** | Teeth and grasping control can injure similar-sized animals, but there is no dedicated killing weapon. |
| Protection | **8.0** | Fur only; no armor, shell or thick hide. |
| Toughness | **23.0** | Adult primate robustness is meaningful at small-animal scale, but serious bites, talons or crushing trauma are decisive. |
| Speed | **28.0** | Routine movement is explicitly slow/deliberate and no maximum-speed measurement supports inflation. |
| Maneuverability | **75.0** | Four grasping extremities plus a strong tactile prehensile tail provide excellent branch stability and repositioning. |
| Endurance | **43.0** | Daily travel is sustained, but the 64.7% rest activity budget argues against elite high-output endurance. |
| Recovery | **44.0** | Ordinary primate healing and resilience, with no exceptional regenerative mechanism. |
| Tactics | **72.0** | Context-sensitive playback responses and social spacing behavior show useful tactical flexibility. |
| Senses | **70.0** | Strong visual/tactile arboreal integration plus sophisticated acoustic discrimination. |
| Ferocity | **45.0** | Male aggression occurs, but much conflict is managed acoustically rather than by relentless attack. |
| Abilities | **69.0** | Prehensile tail and specialized roar system meaningfully alter movement and social confrontation without directly increasing raw damage. |

## 6. Proposed six headline ABS ratings

| Headline | Score | Justification |
|---|---:|---|
| **Attack** | **27.0** | Bite plus grasping control can hurt small opponents, but low mass and lack of predatory weapons cap absolute damage. |
| **Defense** | **20.0** | Canopy evasion is useful but passive protection is poor once contact is forced. |
| **Agility** | **76.0** | Excellent branch stability, tactile tail control and three-dimensional repositioning, while routine travel remains slow. |
| **Stamina** | **43.0** | Folivorous energy conservation and a rest-heavy activity budget are not high-output combat endurance. |
| **Intelligence** | **70.0** | Individual vocal recognition, social decision-making and context-sensitive territorial responses support strong cognition below tool-specialist capuchins and great apes. |
| **Special** | **73.0** | A fully prehensile tactile tail plus enlarged long-range vocal apparatus provide two distinctive matchup-relevant systems. |

### Cross-animal normalization

- **Versus Capuchin Monkey:** Howler is heavier but substantially less maneuverable/cognitively flexible in object use. It receives slightly more Raw Power but clearly lower Intelligence and Agility than the staged capuchin.
- **Versus Gibbon:** Howler should remain below a gibbon in dynamic arboreal locomotion. Its advantage is tail-assisted stability and vocal spacing, not speed.
- **Versus Chimpanzee/Gorilla:** the absolute physical gap must remain huge. A 7 kg howler cannot inherit great-ape power because all are primates.
- **Versus Honey Badger:** howler has better canopy control and social-acoustic specialization but far lower practical attack and physical durability.
- **Anti-inflation check:** the roar is not sonic damage, the tail is not a constrictor, and no pound-for-pound strength feat is converted into high absolute power.

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities

1. **Hyoid Resonance** - An enlarged hyoid and specialized vocal tract produce low-frequency, high-amplitude roars used for long-range group spacing and occupancy signaling. In a matchup this is intimidation and communication, not a damaging sonic blast.
2. **Fifth-Hand Anchor** - The long prehensile tail, with its tactile hairless underside, can grip supports and stabilize the body while the hands and feet reposition, greatly improving canopy control.

### Unique traits

1. **Black-and-Gold Dimorphism** - Mature males are black and materially heavier, while adult females remain yellow-brown, making sex and maturity unusually visible when source metadata confirms age.
2. **Energy-Saving Folivore** - A leaf-heavy diet is paired with a rest-dominated daily budget, trading explosive sustained output for economical life in the canopy.

## 8. Expanded profile content

### Habitat and range

*A. caraya* occurs in South America, including Argentina, Paraguay, eastern Bolivia and Brazil. It occupies tropical/subtropical forest, gallery/riparian forest, semideciduous forest and forest-savanna mosaics. Argentina's National Parks database records it across multiple protected areas and forest structural types.

### Diet and ecology

The species is primarily folivorous but seasonally uses fruit, flowers and buds. In an 11-month Cerrado-Pantanal ecotone study, observed diet was **72.8% leaves, 14.8% flowers, 8.2% fruits and 4.2% buds**. Feeding choices shift with seasonal availability.

By consuming fruit and passing seeds, howlers also contribute to seed dispersal and forest regeneration. Their ability to use leaves lets them occupy habitats where high-energy fruit is seasonally limited, but it also encourages an energy-conserving activity strategy.

### Social structure

Groups are multi-individual social units. A northern Argentina population had mean troop sizes around **7.2-8.9**, while another classic study found mean family size around seven. Group composition varies, and males can occur in multi-male groups with age grading and competition.

Roars are central to intergroup spacing. Playback evidence indicates males distinguish the spatial context of an apparent intrusion and alter both roaring and movement. Individual roar signatures may allow recognition of callers and reduce unnecessary physical conflict.

### Reproduction and life history

Gestation is around six months in institutional and Argentine references, usually producing one infant. Young depend heavily on the mother and later ride dorsally. Argentina's National Parks account places female sexual maturity around five years and male maturity around seven years, while other sources report somewhat earlier reproductive ages. The conflict is retained rather than averaged into false precision.

### Conservation

The Argentina SIB page reports the current IUCN global category as **Least Concern**, while Argentina's national SAREM assessment lists the species as **Vulnerable (2025)**. This difference is important: broad global status can coexist with serious regional habitat loss, fragmentation, hunting or disease risk.

### Major adaptations

- Fully prehensile tactile tail for arboreal support
- Enlarged hyoid/laryngeal vocal system
- Leaf-processing digestive ecology and low-energy activity strategy
- Forward-facing vision and grasping hands/feet
- Social long-distance acoustic spacing

### Human interaction

Habitat clearing and selective logging threaten populations because forest structure and plant diversity are central to feeding and movement. Howlers also occur in fragmented landscapes, where isolation can intensify conflict and exposure to human infrastructure. They have historically been hunted in parts of their range and are maintained in zoos.

### Genuine fun facts

- A northern Argentina field population found males averaging 6.7 kg versus 4.4 kg for females.
- Adult males are black, while females remain yellow-brown.
- The prehensile tail can account for about 6.5% of body mass in anatomical comparative data.
- In one 11-month field study, the monkeys spent 64.7% of observations resting.
- The same study found leaves made up 72.8% of feeding records.
- Roars from individual adult males contain enough acoustic information to classify callers significantly above chance.
- Passive acoustic monitoring found a strong dawn calling peak and 74.9% of detected roars in the wet season at one Pantanal site.

### Concise site-ready summary

The black-and-gold howler monkey is a slow-moving South American canopy primate built around grip, balance and communication rather than brute-force combat. A mature black male weighs about 7 kg, anchors itself with a tactile prehensile tail and uses an enlarged hyoid apparatus to broadcast powerful roars that help space neighboring groups. Its bite and grasp can matter against small opponents, but its strongest ABS advantages are canopy maneuverability, social-acoustic awareness and the ability to avoid direct contests.

### Rich narrative profile

A howler monkey's intimidating reputation begins with sound, not speed. Mature males carry a greatly enlarged vocal apparatus that turns respiratory cycles into low, far-carrying roars. Field experiments show that these calls are not simply random noise: males respond differently when a stranger's roar appears to come from inside the group's space versus at a border. The roar can therefore prevent some fights by advertising occupancy and can focus attention when an intrusion appears real.

Physically, *A. caraya* is a compact arboreal specialist. Its hands and feet grasp branches, while the long tail acts as another load-bearing contact. That architecture allows controlled movement in a three-dimensional canopy even though the species is not a high-speed primate. The tradeoff is energetic. Leaves dominate the diet in many populations, and field activity budgets show very high resting time. This is a monkey optimized to remain stable, digest difficult plant food and defend space economically, not to chase prey for kilometers.

In an ABS fight, environment matters enormously. Branches give the howler angles and escape paths unavailable to many ground animals. On flat open terrain, however, the same 7 kg male has little passive defense and only modest natural weapons. Its roar cannot injure an opponent, and its tail cannot magically constrict one. The profile therefore keeps physical scores low while rewarding the genuine biology: precise arboreal anchoring, social-acoustic assessment and a specialized resonating system unique among the roster's primates.

### Future field proposals

- `canonical_sex`
- `tail_length_cm`
- `prehensile_tail` boolean
- `daily_rest_percent`
- `primary_diet_strategy`
- `vocalization_role`
- `conservation_global`
- `conservation_regional`

## 9. Mandatory image section

- **image_status:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`
- **png_repo_path:** `animal-research-for-update/images/howler-monkey.png` (**not created**)
- **source_page_url:** https://commons.wikimedia.org/wiki/File:Black_Howler_Monkey_(adult_male)_4.jpg
- **original_photo_url:** https://live.staticflickr.com/1017/668025754_29f4abe265_o.jpg
- **source resolution:** **3888 x 2588**
- **taxon:** exact *Alouatta caraya*
- **adult_verified:** Yes. Commons explicitly describes an **adult male**.
- **sex_verified_or_unknown:** Male verified by source metadata.
- **license_status:** **CC BY-SA 2.0**, verified by Commons/Flickr review.
- **file_format_verified:** Source is JPEG, not a finished PNG.
- **alpha_verified:** No. No cutout exists.
- **full_body_verified:** **No.** Visual inspection shows the adult male clearly, but the framing does not certify the entire tail and all appendages. It therefore fails the mandatory complete-anatomy standard despite excellent age/sex/species provenance.
- **notes:** This is a strong identity/adulthood reference but not a finished image candidate. Search also found high-resolution exact-species photographs without simultaneous explicit adulthood and complete-anatomy proof. Do not commit a cutout until a genuinely full-body adult source is visually verified. The connected GitHub writer is text-only and cannot create a real PNG binary anyway.

## 10. Evidence and source ledger

| Source | Direct URL | Supports | Finding | Confidence / caveat |
|---|---|---|---|---|
| Thorington, Ruiz & Eisenberg, *American Journal of Primatology* | https://pubmed.ncbi.nlm.nih.gov/32160719/ | Mass, dimorphism, population/group structure | Males averaged 6.7 kg, females 4.4 kg; mean troop size 7.2-8.9; strong dimorphism | High, field population |
| Pope 1966, *AJPA* | https://doi.org/10.1002/ajpa.1330240308 | Demography, dimorphism | 261 individuals; sexually dimorphic body weights and family structure | High, classic primary study |
| Argentina SIB / Parques Nacionales | https://sib.gob.ar/especies/alouatta-caraya | Taxonomy, dimensions, habitat, maturity, regional conservation | 42-61 cm body, 53-65 cm tail, 4-9.5 kg; adult male larger; SAREM 2025 Vulnerable; IUCN LC | High institutional; some life-history values differ from other sources |
| Zoo Zagreb | https://zoo.hr/crni-urlikavac-alouatta-caraya/ | Sex-specific size | Males 60-65 cm and 5.3-9.6 kg; females smaller | Moderate-high institutional |
| ADW | https://animaldiversity.org/accounts/Alouatta_caraya/ | Morphology, tail, diet, behavior, lifespan context | 6.7 kg male/4.4 kg female average; strong tactile prehensile tail; folivory | Moderate-high synthesis |
| Russo 2015, *Anatomical Record* | https://doi.org/10.1002/ar.23004 | Tail anatomy | Comparative literature reports *A. caraya* prehensile tail at 6.5% of body mass | High comparative anatomy; value originates in cited earlier work |
| Rímoli et al., *Oecologia Australis* | https://revistas.ufrj.br/index.php/oa/article/view/8247 | Activity and diet | 64.7% rest; 18.5% travel; diet 72.8% leaves, 14.8% flowers, 8.2% fruits, 4.2% buds | High, 11-month field study |
| Holzmann & Córdoba 2022, *International Journal of Primatology* | https://doi.org/10.1007/s10764-022-00290-2 | Adult male roar individuality | 8 adult males, 119 cycles; individual acoustic signatures classified above chance | High, peer reviewed |
| Holzmann & Areta 2020, *Ethology* | https://doi.org/10.1111/eth.12962 | Roar structure across habitats | High-amplitude low-frequency roars retained communication value across habitat gradient | High, peer reviewed |
| Kitchen et al. 2006, *Behaviour* | https://doi.org/10.1163/156853906778691568 | Roar function/tactics | Playback supports intergroup spacing/occupancy function and context-dependent male response | High, experimental field behavior |
| Pérez-Granados & Schuchmann 2021, *AJP* | https://pubmed.ncbi.nlm.nih.gov/33539555/ | Calling timing | Dawn peak; 74.9% of detected roars in wet season at study site | High, passive acoustic monitoring |
| Kowalewski, Bravo & Zunino, *Neotropical Primates* | https://doi.org/10.62015/np.1995.v3.302 | Male aggression | Direct report of aggression among *A. caraya* males in northern Argentina | Moderate-high; short behavioral report |
| Dunn et al. 2015, *Current Biology* | https://pubmed.ncbi.nlm.nih.gov/26592343/ | Hyoid/vocal mechanism | Howler hyoid size affects formants and male competition across species | High comparative evidence; not all findings species-specific |
| Wikimedia Commons, Ryan E. Poplin | https://commons.wikimedia.org/wiki/File:Black_Howler_Monkey_(adult_male)_4.jpg | Image identity/adult/sex/license | Exact adult male *A. caraya*, 3888x2588, CC BY-SA 2.0 | High provenance, but fails strict full-body framing |

## 11. Confidence, conflicts and final verification

### High-confidence conclusions

- Exact taxon resolved to *Alouatta caraya*.
- Mature males are substantially larger and differently colored than females.
- A representative male around 7 kg is defensible.
- The tail is fully prehensile and tactically important for canopy support.
- The enlarged vocal apparatus and roar are central to intergroup spacing.
- The species is a slow, rest-heavy, primarily folivorous canopy primate.

### Moderate/low-confidence fields

- `speed_mps` remains **0.0** because no defensible maximum was recovered.
- `bite_force_psi` remains **0.0** because no credible species-specific PSI measurement was recovered.
- Lifespan 20.0 is a reference longevity choice, not wild mean life expectancy.
- Intelligence 70.0 is editorial and intentionally below staged tool-specialist capuchins because species-specific cognition evidence is strongest for communication/spatial decisions.

### Source conflicts retained

- Institutional sources differ on male sexual maturity, with some reporting roughly 2-3 years and Argentina's National Parks account about 7 years. No artificial midpoint is created.
- Global IUCN Least Concern and Argentina SAREM 2025 Vulnerable are different geographic assessments, not a contradiction to erase.
- Body ranges differ among field and zoo sources. The canonical 7.0 kg male is anchored to the field mean rather than the largest captive/reference value.

### README/CALIBRATION compliance check

- Healthy representative adult and stronger fighting sex selected: **yes**.
- Absolute roster scale used: **yes**.
- Unsupported PSI avoided: **yes**.
- Speed kept separate from Agility: **yes**.
- Exactly **2** special abilities: **yes**.
- Exactly **2** unique traits: **yes**.
- Six one-decimal headline ratings: **yes**.
- All current major substats addressed: **yes**.
- Source ledger with direct URLs/confidence/conflicts: **yes**.
- Mandatory image fields and honest pending status: **yes**.
- Production data/site/live images modified: **no**.
