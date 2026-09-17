# Baboon Research Overhaul

## 1. Identity and canonical specimen

- **Common name:** Baboon
- **Canonical ABS taxon:** Olive baboon / Anubis baboon
- **Scientific name:** *Papio anubis* (Lesson, 1827)
- **Family:** Cercopithecidae
- **Status:** Living
- **Exact animal represented:** A representative wild adult male olive baboon, rather than an unspecified average across the genus *Papio*. This choice gives the generic roster label a reproducible species-level biological identity.
- **Canonical specimen:** Healthy, fully mature, naturally foraging adult male, approximately **24.0 kg**. University of Wisconsin's Primate Info Net reports wild males averaging 24 kg and wild females 14.7 kg; crop-raiding males average about 27.4 kg, so the naturally foraging value is preferred.
- **Sexual dimorphism:** Strong. Males are roughly twice female mass, have much larger canines, heavier cranial architecture and a shoulder/head mane. Male-male competition is consequential to mating success. A mature male is therefore the correct combat specimen.
- **Population variation:** Body mass responds substantially to food access. Human-food/crop-raiding populations can be heavier than naturally foraging populations. Hybridization occurs with neighboring baboon taxa in contact zones, so this profile should not silently generalize every *Papio* population to *P. anubis*.

## 2. Physical measurements

### Mass

University of Wisconsin Primate Info Net summarizes wild males at **24 kg average**, versus **14.7 kg** for wild females. Crop-raiding males average about **27.4 kg**, demonstrating ecological effects on mass. Animal Diversity Web similarly gives males around 25 kg and females around 14 kg.

- **Canonical mass:** **24.0 kg**
- **Representative wild male:** about 24–25 kg
- **Sex contrast:** female about 14–15 kg
- **Confidence:** High

### Height

Primate Info Net reports average height around **700 mm for males** and 600 mm for females. Because primate height conventions can be less intuitive than shoulder height in quadrupedal mammals, this is retained as the best institutional canonical value rather than extrapolating from photographs.

- **Canonical height:** **70.0 cm**
- **Confidence:** Moderate-high

### Body and total length

Animal Diversity Web reports an average male head-body length of **760 mm**, with approximately **560 mm of tail** added. Primate Info Net reports tail length 380–584 mm. The site schema has only one `length_cm` field, so this report recommends total nose-to-tail length while explicitly documenting the convention.

- **Canonical head-body length:** **76.0 cm**
- **Canonical tail:** **56.0 cm**
- **Canonical total length for `length_cm`:** **132.0 cm**
- **Confidence:** High for component averages, moderate-high for combining them into the site's total-length field

### Movement speed

A peer-reviewed dynamic-pressure study measured adult *P. anubis* walking, running and galloping from **0.46 to 4.0 m/s**. This is a direct experimental locomotor range, but 4.0 m/s was the upper study speed, not a demonstrated species maximum. Popular 45–48 km/h claims are widespread but were not traced in this run to a strong primary maximum-speed measurement.

- **Canonical `speed_mps`:** **0.0** pending a defensible maximum-speed measurement
- **Direct experimentally studied locomotion:** up to **4.0 m/s** in the cited runway experiment
- **Confidence:** High for the experimental context; low for any claimed species maximum

### Lifespan

Animal Diversity Web gives a male captive average of **25.2 years** from demographic records and notes that *Papio* can reach roughly 30–40 years in the wild at genus level, with higher captive maxima in some species. Species-specific wild mean lifespan is not cleanly established by the sources reviewed.

- **Canonical `lifespan_years`:** **25.2 years** as a documented male demographic value, explicitly captive-context
- **Confidence:** Moderate; production could eventually benefit from separate wild/captive longevity fields

### Bite force and dentition

Adult males possess conspicuously enlarged canines, heavy facial/cranial ridges and a lower first premolar modified to hone the upper canine. These are serious close-range weapons. However, this run did not locate a reliable in-vivo *P. anubis* bite-pressure measurement with defensible contact area.

- **Canonical `bite_force_psi`:** **0.0**
- **Reason:** no defensible species-specific PSI measurement found; comparative primate estimates must not be converted into invented pressure
- **Canine dimension:** sexually dimorphic and large, but no single crown-length number is promoted here because this run did not resolve a sufficiently strong representative adult-male measurement source
- **Confidence:** High that canines are the primary natural weapon; low for numerical pressure or representative canine length

### Defensive structures and body form

Olive baboons have no armor. The mature male's advantages are body mass, robust skull/neck/shoulders, thick coat, mobility, threat displays and social support. The mane is not treated as armor. Hands and feet support versatile terrestrial quadrupedal locomotion and climbing. Ischial callosities are sitting adaptations, not battle protection.

## 3. Canonical proposed factual fields

```json
{
  "weight_kg": 24.0,
  "height_cm": 70.0,
  "length_cm": 132.0,
  "speed_mps": 0.0,
  "lifespan_years": 25.2,
  "bite_force_psi": 0.0
}
```

### Canonical-value reasoning

- **24.0 kg:** direct institutional summary of naturally foraging wild males; avoids food-supplemented crop-raider inflation.
- **70.0 cm:** reported average adult-male height.
- **132.0 cm:** 76 cm male head-body plus 56 cm tail, with total-length convention made explicit.
- **0.0 m/s:** 4.0 m/s is experimentally documented locomotion, not a measured maximum; weak internet sprint claims are rejected.
- **25.2 years:** documented male captive demographic average; caveat retained because a clean wild mean was not established.
- **0.0 PSI:** no fabricated pressure.

## 4. Combat biology

### Primary weapons

The primary weapon is the mouth, especially the long male canines. The skull has robust ridges and the dentition includes a honing complex that maintains the upper canine edge. A committed bite can puncture and tear soft tissue. Unlike a canid, however, a baboon also has grasping hands and can combine biting with close-range pulling, shoving and positional control.

### Secondary weapons and offensive mechanics

Forelimbs and hands are not clawed killing weapons, but they provide grip, balance, manipulation and the ability to seize or stabilize an opponent during a close encounter. Body weight and strong limbs support lunging, wrestling and forceful threat displays. The most dangerous sequence is therefore a rapid close, grasp or positional disruption, followed by canine use, rather than a long-distance chase attack.

### Defensive adaptations and durability

There is no shell, thick hide or specialized trauma-resistant structure. Defense comes from a robust adult male frame, mobility, situational awareness, threat displays and the ability to retaliate dangerously. A leopard remains capable of killing baboons, demonstrating that the male's dangerous canines do not translate into high passive protection.

### Locomotion and maneuverability

Olive baboons are mainly terrestrial quadrupeds but retain strong climbing ability. Experimental work shows speed-dependent hand-posture changes: at faster locomotion, they shift toward greater palmar contact to distribute higher ground-reaction forces. A 2021 gait study also documents context-sensitive kinematic adjustments on branches. This supports good terrain versatility and control rather than treating a disputed top-speed figure as agility.

### Endurance and stamina

Animal Diversity Web reports average troop daily movement around **5.8 km**, while *Papio* generally ranges several kilometers daily to forage. Baboons can subsist on relatively low-quality foods and travel between feeding and sleeping sites. Their terrestrial walking mechanics show substantial pendular energy recovery during slow walking, supporting efficient routine travel. They are not specialized persistence predators, so stamina should be strong but not wolf/albatross-tier.

### Senses

Vision is especially important in this diurnal primate, supplemented by hearing and smell. Threat detection, social monitoring and visually mediated communication matter constantly. The sensory package is flexible and combat-useful but lacks a rare modality such as echolocation or electroreception.

### Intelligence, learning and tactics

This is a major strength. Olive baboons live in complex multi-male, multi-female troops with stable relationships, dominance hierarchies, alliances and context-sensitive aggression. Animal Diversity Web describes males forming coalitions capable of overturning a simple dominance relationship. Research on social instability also documents rank-dependent coalition and aggression dynamics. These capacities imply strong opponent assessment and behavioral flexibility, although troop-level coordination must not be counted as if a lone baboon had multiple bodies.

### Hunting and predatory behavior

Olive baboons are omnivores, not dedicated macropredators. Their diet includes fruits, grasses, roots, seeds, insects, eggs, carrion and small vertebrates. They can kill animal prey opportunistically, but the adult male's canines evolved in a social/competitive system as well as feeding. ABS Attack therefore recognizes dangerous weaponry without treating the baboon like a similarly sized specialist carnivore.

### Intraspecific fighting

Male competition can be intense. Dominance influences reproductive access, larger/younger/stronger males have competitive advantages, and escalated fighting occurs under social instability. Canines function as credible weapons in this system. Baboons also possess an extensive threat-display repertoire, allowing some conflicts to be resolved without full contact.

### Predator defense

Leopards and chimpanzees are documented predators. Olive baboons can mob leopards, with adult males often leading attacks. This is important evidence of courage, coordination and threat response, but mobbing is a group defense and must not be converted into a one-on-one claim that a single baboon dominates a leopard.

### Aggression and ferocity

A mature male can escalate forcefully against rivals, predators or threats, and baboons can injure humans if provoked. At the same time, their social system relies heavily on signals, rank assessment and conflict management. Ferocity is therefore substantial but not indiscriminate.

### Environmental strengths

- Excellent ground/arboreal versatility
- Strong performance in savanna, woodland, steppe and some forest environments
- Omnivory and tolerance of low-quality foods
- Visual awareness and complex social information processing
- Grasping hands and climbing access can create escape/repositioning options unavailable to many terrestrial mammals

### Environmental limitations

- No armor
- Main damaging weapon requires very close range
- Hands lack claws and are more useful for control than tissue damage
- Adult male is only about 24 kg, limiting absolute power against large predators and megafauna
- Social advantages shrink in a strict one-on-one matchup
- Not an aquatic specialist and lacks specialized cold/heat battle mechanisms

### Major weaknesses

1. Modest absolute mass compared with big cats, wolves, bears and large herbivores.
2. No passive armor or specialized hide.
3. Canine attack exposes head and neck to counterattack.
4. No venom, toxin, electricity or ranged weapon.
5. Grasping ability is useful but cannot substitute for the killing claws of a felid.
6. Group mobbing and coalition advantages are largely unavailable in a solo battle.

### Good matchup archetypes

- Smaller unarmored vertebrates
- Similar-sized animals with weak close-range weaponry
- Opponents vulnerable to canine puncture and grappling disruption
- Less maneuverable opponents in terrain where climbing/repositioning matters

### Bad matchup archetypes

- Similar-sized specialist carnivores with stronger killing bites/claws
- Armored animals that deny canine penetration
- Large horned/hoofed herbivores
- Big cats, large canids, crocodilians and megafauna
- Venomous or otherwise contact-punishing specialists where grappling creates extra risk

## 5. Proposed ABS substats

| Substat | Score | Evidence-based rationale |
|---|---:|---|
| Size | **29.0** | A 24 kg male is substantial for a monkey but small on the full roster beside wolves, big cats and megafauna. |
| Raw Power | **34.0** | Strong, robust primate with useful grip and wrestling force, but absolute muscular output is constrained by 24 kg mass. |
| Weaponry | **48.0** | Large honed male canines are dangerous puncture/tearing weapons; hands add control but not claws. |
| Protection | **13.0** | Fur and robust build provide little true armor. |
| Toughness | **40.0** | Strong terrestrial primate construction and willingness to fight, but no unusual trauma resistance. |
| Speed | **51.0** | Capable quadrupedal runner; score remains conservative because a defensible species maximum is unresolved. |
| Maneuverability | **72.0** | Strong ground control plus climbing, grasping and substrate-sensitive locomotor adjustments. |
| Endurance | **63.0** | Several-kilometer daily travel and efficient terrestrial walking support sustained activity without implying persistence-predator extremes. |
| Recovery | **52.0** | Normal robust primate recovery; no unusual regenerative system. |
| Tactics | **78.0** | Complex hierarchy, coalition formation, opponent assessment and flexible social strategy are unusually strong battle-relevant cognition. |
| Senses | **65.0** | Strong diurnal vision and integrated primate awareness, without a rare sensory modality. |
| Ferocity | **66.0** | Adult males engage serious dominance conflict and can lead predator mobbing, while behavior remains risk-sensitive and signal-rich. |
| Abilities | **57.0** | Grasping/climbing versatility and sophisticated threat/social tactics are meaningful, but there is no venom/electric/chemical mechanism. |

## 6. Proposed six headline ABS ratings

| Headline | Score | Justification |
|---|---:|---|
| **Attack** | **45.0** | A mature male's honed canines and close-range control make it dangerous, but its 24 kg body and lack of carnivore claws keep absolute damage below wolf-class predators. |
| **Defense** | **31.0** | Robust frame, awareness and mobility help it remain functional, but there is no armor and documented predators can kill baboons. |
| **Agility** | **72.0** | Excellent terrestrial/arboreal versatility, grasping, balance and context-sensitive locomotor control justify a high agility score independent of disputed sprint speed. |
| **Stamina** | **63.0** | Daily multi-kilometer travel and efficient walking support good sustained output, below dedicated endurance specialists. |
| **Intelligence** | **78.0** | Coalition behavior, hierarchy tracking, social assessment and flexible tactics place the baboon among the stronger cognitive combatants researched so far. |
| **Special** | **57.0** | Grasping/climbing versatility and sophisticated social-threat systems can alter matchups, but there is no rare physiological disabling mechanism. |

### Calibration interpretation

The olive baboon must remain far above Army Ant and Axolotl in absolute Attack and Raw Power, but below Arctic Wolf because the wolf is substantially heavier and a more specialized macropredatory killer. Its Attack can approach but should remain below Anteater's provisional 53.0 because the giant anteater is much larger and has documented severe claw trauma. Baboon Agility and Intelligence can legitimately exceed those animals because these categories are not simple body-force proxies. Defense must remain well below Armadillo because the baboon lacks osteoderm armor.

## 7. Exactly two special abilities and two unique traits

### Special abilities

1. **Canine Clinch** — A mature male combines grasping, close positional control and enlarged self-honing canines, making a successful clinch substantially more dangerous than a similarly sized animal's ordinary bite.
2. **Vertical Escape** — Strong climbing ability and grasping hands let the baboon rapidly exploit trees, rocks and uneven structures for evasion or repositioning when the environment permits it.

### Unique traits

1. **Coalition Mind** — Olive baboons track dominance relationships and can form tactical social alliances, evidence of sophisticated opponent assessment. In solo ABS combat this informs Intelligence but does not grant imaginary allies.
2. **Savanna Generalist** — Broad omnivory, low-quality-food tolerance and flexible terrestrial/arboreal behavior allow useful performance across unusually varied habitats.

## 8. Expanded profile content

### Habitat

Savannas, grasslands, steppe, scrub, woodland and some rainforest/forest environments. Olive baboons also use agricultural and human-modified landscapes.

### Geographic range

The olive baboon is the most broadly distributed baboon species, occurring across a large belt of central sub-Saharan Africa with isolated populations extending into Saharan mountain regions. Contact zones with other *Papio* taxa can include hybridization.

### Diet

Highly omnivorous. Documented foods include fruit, gums, grasses, seeds, flowers, roots, rhizomes, corms, tubers, insects, other arthropods, eggs, small vertebrates and carrion. This breadth is central to the species' ecological flexibility.

### Ecology

Olive baboons are major terrestrial omnivorous foragers. Digging can aerate soil, and fruit/seed consumption contributes to seed dispersal. Their ecological role also includes predation on small animals and serving as prey for larger predators.

### Social structure

The usual unit is a multi-male, multi-female troop. Animal Diversity Web reports average troops around 39–97 individuals. Dominance, kinship, friendships, consortships and coalitions shape access to resources and mates. Social cognition is therefore a daily survival system, not an occasional novelty.

### Reproduction and life history

Mating is polygynandrous. Male rank and competitive ability influence consort access, but female choice and male alliances complicate a simple strength hierarchy. Naturally foraging males may not reach full adult size until roughly 7–10 years. Weaning is reported around 420 days. Nutrition strongly changes maturation rate and adult size.

### Conservation status

The species is currently treated as **Least Concern** by IUCN and is widespread. It is listed under CITES Appendix II with other baboons. Local conflict can still be intense because crop raiding and habituation lead to persecution even when the species is not globally threatened.

### Major adaptations

- Strong sexual dimorphism with enlarged male weaponry
- Self-maintaining canine honing complex
- Terrestrial quadrupedal efficiency plus retained climbing competence
- Grasping hands and feet
- Cheek pouches for efficient foraging
- Broad omnivory and low-quality-food tolerance
- Complex visual/vocal social signaling
- Coalition-capable social cognition

### Human interaction

Olive baboons occur near farms and settlements, where they can raid crops and exploit anthropogenic food. Food supplementation can measurably increase body mass. They can injure humans if cornered or provoked and are also widely used in biomedical and behavioral research. Human-baboon conflict is therefore both ecological and management-relevant.

### Strong fun facts

1. Adult males are roughly twice the mass of females, one of the most combat-relevant examples of sexual dimorphism in the current early roster.
2. The lower first premolar acts as a honing surface for the enlarged upper canine.
3. Troops can average dozens of individuals, yet males may still form smaller tactical coalitions within the larger social network.
4. Olive baboons can mob leopards, and adult males are reported leading these attacks.
5. Naturally foraging and crop-raiding populations can differ noticeably in adult body mass because access to calorie-rich human foods changes growth.
6. Their hands change contact posture as locomotor speed rises, distributing increasing forces across more of the palm.
7. They combine primarily terrestrial life with enough climbing competence to sleep in trees or use rocky/cliff refuges.

### Concise site-ready summary

The olive baboon is a 24 kg, highly social African primate whose mature males combine enlarged honed canines, grasping hands, strong terrain versatility and sophisticated opponent assessment. It lacks armor and cannot match large specialist predators in absolute power, but its agility, social intelligence and dangerous close-range bite make it a formidable mid-sized combatant.

### Detailed narrative profile

A mature male olive baboon is built around versatility rather than one overwhelming physical statistic. At roughly 24 kg, it is far smaller than a lion, alligator or large wolf and should never receive inflated strength merely because primates are impressive relative to body mass. What makes it dangerous is the interaction of several systems: a robust terrestrial frame, long male canines maintained by a honing premolar, grasping extremities, strong climbing competence, acute visual awareness and a brain continuously trained on social threats and opportunities.

In a fight, the baboon's best route is not trading raw force with a larger opponent. It benefits from mobility, intimidation, positional disruption and a rapid close-range canine attack. Grasping hands can help control position, but they should not be mythologized into human-style punching power or felid-like claw damage. Against a smaller or poorly armed opponent, the canine system is a major threat. Against a large carnivore or armored animal, the baboon's modest mass and lack of protection become decisive weaknesses.

Its intelligence deserves separation from troop power. Olive baboons track rank, relationships and social context, form coalitions and change aggressive behavior according to circumstances. Those facts support strong tactical cognition in a solo animal, but they do not justify adding the strength of 50 troopmates to its stats. Likewise, documented leopard mobbing demonstrates risk tolerance and coordinated defense rather than proving that one male routinely beats leopards.

Ecologically, the species is unusually adaptable. It can forage across savanna, steppe, woodland and forest margins, eat an exceptionally broad diet, walk kilometers per day and still climb effectively. That flexibility is why Agility, Stamina and Intelligence can all be strong even while Defense remains modest. In full-roster ABS scaling, the olive baboon should feel dangerous because of versatility and tactical close-range weapon use, not because its physical force has been exaggerated to great-ape or big-cat levels.

### Useful future structured-field ideas

- `body_length_cm` and `tail_length_cm` separately, avoiding ambiguous total-length comparisons
- `locomotion_speed_measured_mps` plus `speed_context`, separate from maximum speed
- `weapon_length_mm` with weapon type and sex context
- `sexual_dimorphism_mass_ratio`
- `social_group_size_range`
- `daily_travel_km`
- `locomotion_modes` such as terrestrial/climbing
- `weapon_evidence_type` and `bite_force_evidence_type`
- `wild_lifespan_years` versus `captive_lifespan_years`

## Image Asset

- **Target path:** `animal-research-for-update/images/baboon.png`
- **Status:** `SOURCE FOUND - PNG COMMIT PENDING`
- **Primary candidate:** Real photograph explicitly identified as a **male olive baboon (*Papio anubis*)** in Serengeti Park, Tanzania, photographed 30 June 2009 by D. Gordon E. Robertson.
- **Source page:** https://commons.wikimedia.org/wiki/File:Olive_Baboon,_male.jpg
- **Direct/original image:** https://commons.wikimedia.org/wiki/Special:Redirect/file/Olive%20Baboon%2C%20male.jpg
- **Resolution:** 3840 × 2160
- **License shown by source:** CC BY-SA 3.0 (also GFDL listed on Commons)
- **Why selected:** Exact species and sex are explicit, image is high-resolution, adult male is representative of the canonical combat sex, and the source has clear reusable-license metadata.
- **Asset caveat:** Source JPEG has a normal background. No binary file is being faked or text-encoded. Transparent-background PNG creation/promotion remains for the repository's binary asset pipeline and provenance audit.

## 9. Evidence and source ledger

| Source | Direct URL | Claims supported | Reported value/finding | Context | Confidence / caveat |
|---|---|---|---|---|---|
| Wisconsin National Primate Research Center, Olive baboon factsheet | https://primate.wisc.edu/primate-info-net/pin-factsheets/pin-factsheet-olive-baboon/ | Mass, height, tail, dimorphism, maturation, morphology | Wild males avg 24 kg; females 14.7 kg; crop-raiding males 27.4 kg; male height about 700 mm; tail 380–584 mm | Species-level synthesis citing primary literature | **High** for mass/dimorphism; institutional secondary synthesis |
| Animal Diversity Web, *Papio anubis* | https://animaldiversity.org/accounts/Papio_anubis/ | Identity, length, diet, habitat, troop behavior, daily range, predation, reproduction, longevity, conservation | Male ~25 kg; male head-body 760 mm + tail 560 mm; daily range avg 5.8 km; troops 39–97; male captive average lifespan 25.2 y | Species account | **High-moderate**; older synthesis but detailed and referenced |
| Patel & Wunderlich 2010, The Anatomical Record | https://doi.org/10.1002/ar.21128 | Direct locomotor speed context and hand-pressure mechanics | Two adults studied walking/running/galloping over 0.46–4.0 m/s; faster speeds increased palmar contact | Experimental captive adults | **High** for measured trial conditions; **not a top-speed study** |
| Druelle et al. 2021, Journal of Experimental Biology / PubMed | https://pubmed.ncbi.nlm.nih.gov/34292320/ | Gait efficiency and substrate-sensitive locomotion | Slow ground walking <0.9 m/s; pendular energy exchange 57% avg, max observed 84%; branch walking changes control mechanics | Experimental locomotion | **High** for gait findings |
| Druelle et al. 2017, Journal of Anatomy | https://onlinelibrary.wiley.com/doi/10.1111/joa.12602 | Growth and adult morphometrics context | Longitudinal full-body measurements of 14 females and 16 males from infancy to adulthood | Captive longitudinal cohort | **High** for ontogenetic/morphometric framework |
| Sapolsky 1983, American Journal of Primatology / PubMed | https://pubmed.ncbi.nlm.nih.gov/31986851/ | Male aggression, rank and coalition context | Social instability increased escalated fighting and coalition/consortship harassment among high-ranking males | Observational/endocrine troop study | **High** for behavioral context |
| Castles 1998, Ethology | https://doi.org/10.1111/j.1439-0310.1998.tb00057.x | Conflict complexity and reconciliation | Wild olive baboons showed reconciliation across age-sex classes and relatively intolerant dominance style | Wild troop | **High** for post-conflict behavior |
| Animal Diversity Web, genus *Papio* | https://animaldiversity.org/accounts/Papio/ | Genus-level longevity, daily ranging, social structure | Up to 45 y captive in genus; wild maxima probably 30–40 y; several km daily travel | Genus-level comparison | **Moderate** for *P. anubis* inference; not species-specific |
| Wikimedia Commons, male olive baboon | https://commons.wikimedia.org/wiki/File:Olive_Baboon,_male.jpg | Image provenance | Male *P. anubis*, Serengeti, Tanzania; 3840×2160; CC BY-SA 3.0 | Exact species/sex photograph | **High** for image identity/provenance as described by uploader |
| IUCN status mirrored in ADW current account | https://animaldiversity.org/accounts/Papio_anubis/ | Conservation | Least Concern; CITES Appendix II | Species level | **Moderate-high**; final production migration should refresh directly against current IUCN assessment |

### Explicit rejected or unresolved claims

- **Internet top-speed claims around 45–48 km/h:** not promoted. Direct experimental work demonstrates locomotion through 4.0 m/s but does not establish maximum sprint speed.
- **Bite force in PSI:** not promoted. No defensible species-specific pressure measurement was found.
- **Exact adult-male canine length:** not promoted in this run because a strong representative measurement was not resolved. Large male canines are qualitatively well established.
- **Wild average lifespan:** not conflated with the documented 25.2-year captive male demographic value.

## 10. Confidence, caveats and cross-animal calibration

### Confidence summary

- **Identity:** High
- **Canonical sex:** High
- **Mass:** High
- **Height:** Moderate-high
- **Total length:** Moderate-high, with explicit head-body/tail convention
- **Maximum speed:** Low, therefore canonical field remains 0.0
- **Lifespan:** Moderate because best numeric species-specific value is captive-context
- **Bite PSI:** Unresolved, therefore 0.0
- **Combat weapon interpretation:** High qualitatively
- **Headline ratings:** Moderate, pending later full-roster normalization

### Cross-animal calibration notes

- **Army Ant:** Baboon Raw Power and Attack must be vastly higher in absolute terms despite the ant's impressive proportional performance. This file preserves that gap.
- **Axolotl:** Baboon has dramatically greater absolute damage, terrestrial mobility and tactical cognition. Axolotl remains far higher in regeneration-driven Special/Recovery.
- **Armadillo:** Baboon is much more agile and tactically flexible, but the armadillo's osteoderm protection should remain clearly superior.
- **Arctic Fox:** Baboon is several times heavier and has more dangerous close-range canine/grappling mechanics; fox remains a stronger cold specialist.
- **Arctic Wolf:** Wolf at 40 kg remains clearly above baboon in specialist predatory Attack and endurance. Baboon should exceed wolf in manipulative/climbing agility and complex primate tactical cognition.
- **Anteater:** Giant anteater remains above baboon in provisional Attack because of much greater mass and documented devastating claw trauma; baboon is substantially more tactically flexible.
- **African Lion / Alligator:** Both must remain far above baboon in absolute Attack and physical threat. No primate-intelligence bonus should erase those mechanical gaps.

### Normalization watch items

1. Revisit **Attack 45.0** when macaques, chimpanzee, gorilla, leopard and other similar calibration animals are complete.
2. Revisit **Intelligence 78.0** once more primates, corvids, cetaceans and elephants establish the roster's cognitive distribution.
3. Revisit **Agility 72.0** against arboreal monkeys/cats to ensure climbing competence is not double-counted with general maneuverability.
4. Keep `speed_mps` at 0.0 unless a true species maximum is sourced.
5. Keep `bite_force_psi` at 0.0 unless a defensible force/contact-area pressure measurement is sourced.
6. Production migration should refresh the current IUCN assessment directly.

## Completion verification

- Identity/taxon and canonical specimen: **complete**
- Physical measurements/ranges/uncertainty: **complete**
- Canonical factual fields: **complete**
- Combat biology/environment/weaknesses/matchups: **complete**
- All current schema substats: **complete with one-decimal ratings**
- Six headline ratings: **complete with one-decimal ratings**
- Proposed special abilities: **exactly 2**
- Proposed unique traits: **exactly 2**
- Expanded ecology/life history/human interaction/fun facts: **complete**
- Site-ready summary and detailed narrative: **complete**
- Future structured fields: **complete**
- Image candidate/source/status: **complete; PNG binary pending**
- Source ledger/direct URLs/claim mapping: **complete**
- Confidence/caveats/calibration: **complete**
