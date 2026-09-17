# Bactrian Camel Research Overhaul

## 1. Identity and canonical specimen

- **Common name:** Bactrian Camel
- **Scientific name:** *Camelus bactrianus*
- **Family:** Camelidae
- **Status:** Living, domesticated species
- **Exact animal represented:** Domestic Bactrian camel, *Camelus bactrianus*, not the distinct wild camel *Camelus ferus*.
- **Canonical specimen:** Healthy fully mature adult male, approximately **580.0 kg**, in good body condition. Males are materially larger and are the primary fighting sex during rut, so a male is the appropriate combat specimen.
- **Sexual dimorphism:** Meaningful. Animal Diversity Web reports males larger; breed data summarized by IVIS include Mongolian males 525 kg versus females 493 kg, Sunite males 676 kg versus females 584 kg, and Xinjiang males 580 kg versus females 480 kg. A 2026 high-altitude study also found significantly greater body length and circumference in males.
- **Population/breed variation:** Very large. Domestic breeds and husbandry produce substantial variation in mass and dimensions. Kazakh Bactrians can approach 750 kg males, while other populations are lighter. Record or unusually heavy breeds are not used as the canonical animal.

## 2. Physical measurements

### Mass

Institutional summaries commonly place adults around 300-690 kg, while San Diego Zoo gives 450-500 kg without sex separation. Breed-specific data are more useful for a male combat specimen: IVIS reports adult males at 525 kg (Mongolian), 580 kg (Xinjiang) and 676 kg (Sunite). A 2024 Kazakh study reports males up to 750 kg, emphasizing breed variation.

- **Canonical mass:** **580.0 kg**
- **Broad adult range:** about **300-690 kg**, with some large-breed males reaching roughly 750 kg
- **Rationale:** 580 kg is a directly reported adult male value for Xinjiang Bactrians and sits between lighter and heavier male breed means, avoiding an exceptional upper-end specimen.
- **Confidence:** Moderate-high

### Height

Animal Diversity Web reports shoulder height **1.80-2.30 m**. IVIS breed data give males around 172-196 cm depending on population, and San Diego Zoo gives 1.6-1.8 m shoulder height for Bactrians generally.

- **Canonical shoulder height:** **180.0 cm**
- **Credible adult context:** roughly 1.7-2.3 m depending on breed and measurement set
- **Confidence:** Moderate; breed and measurement conventions vary.

### Length

Animal Diversity Web reports head-body length **2.25-3.45 m**, with a 0.35-0.55 m tail. San Diego Zoo gives 3.2-3.5 m length. Because the site's single length field is most useful as body length rather than combining an inconsistently measured tail, this report uses a representative head-body value.

- **Canonical `length_cm`:** **300.0 cm**
- **Reported head-body range:** **225-345 cm**
- **Tail:** about **35-55 cm**
- **Confidence:** Moderate-high

### Movement speed

Zoo New England reports Bactrian camels can run at **10-20 mph** (4.5-8.9 m/s), but this is an institutional husbandry summary rather than an instrumented maximum-speed study. Faster figures circulate online but were not traced to sufficiently strong primary measurement during this run.

- **Canonical `speed_mps`:** **0.0**
- **Supported institutional running context:** approximately **4.5-8.9 m/s**
- **Reason:** no defensible instrumented species maximum located; do not turn a secondary range into false precision.
- **Confidence:** Moderate for the zoo range, low for a true maximum.

### Lifespan

San Diego Zoo and Zoo New England report median life expectancy around **17.8 years**, while other zoological summaries describe 20-40 years in managed settings and possible longevity near 50 years. These represent different metrics, so median and maximum should not be conflated.

- **Canonical `lifespan_years`:** **17.8 years**
- **Long-lived individuals:** can reach several decades
- **Confidence:** Moderate-high for the reported institutional median.

### Bite force, teeth and fighting weapons

Bactrian camels retain prominent caniniform teeth. A 2023 Journal of Morphology paper documents the cranial arrangement of maxillary caniniform teeth and functional accommodation for long teeth. During male competition, documented fighting includes biting and forceful physical engagement. No defensible *C. bactrianus* bite-pressure PSI measurement was located.

- **Canonical `bite_force_psi`:** **0.0**
- **Reason:** no reliable species-specific pressure measurement with contact area.
- **Primary weapons:** large jaws/caniniform teeth, body mass, neck leverage and powerful limbs.
- **Secondary weapons:** kicking/trampling/body shoving in close conflict.
- **Confidence:** High for weapon presence and behavior; low for numerical bite pressure.

### Defensive structures and environmental physiology

The camel has no armor, but a 580 kg body, robust skeleton, thick seasonal coat, tough foot pads and substantial soft-tissue bulk make it difficult for small opponents to incapacitate. Its greatest defenses are physiological rather than trauma armor. Camel research supports tolerance of water loss exceeding 25% body mass, broad body-temperature fluctuation, highly concentrated excretion, unusual osmoregulation and expandable oval erythrocytes. Bactrian humps store fat, not water. FAO reports humps about 25-35 cm high and roughly 25-35 kg fat each in well-conditioned animals.

## 3. Canonical proposed factual fields

```json
{
  "weight_kg": 580.0,
  "height_cm": 180.0,
  "length_cm": 300.0,
  "speed_mps": 0.0,
  "lifespan_years": 17.8,
  "bite_force_psi": 0.0
}
```

### Canonical-value reasoning

- **580.0 kg:** directly reported adult male Xinjiang breed value and representative of a substantial but non-record male.
- **180.0 cm:** conservative representative shoulder height within multiple institutional/breed datasets.
- **300.0 cm:** representative head-body value within the 225-345 cm ADW range.
- **0.0 m/s:** no instrumented top-speed measurement was found strong enough for canonical use.
- **17.8 years:** reported zoological median rather than confusing maximum longevity with expectation.
- **0.0 PSI:** bite is real and dangerous, but pressure is not fabricated.

## 4. Combat biology

### Primary and secondary weapons

A mature male combines enormous mass with a long, mobile neck and dangerous dentition. Rutting males use intimidation first, but escalated contests include biting and physical fighting. At close range, a camel can use the mouth to seize and injure while leveraging its neck and body. Limbs provide secondary danger through kicks, stamps and sheer collision force. This is not a specialized predator's killing system, but the absolute mass behind contact makes it consequential.

### Offensive mechanics

The best combat sequence is close-range control: advance behind body mass, threaten or bite with the elevated head, use neck reach to attack from unusual angles, and use the limbs/body to destabilize a smaller opponent. Against a much smaller animal, trampling and mass disparity matter more than bite specialization. Against another large ungulate, lack of horns/tusks limits penetration and reach compared with dedicated weapons.

### Defense and toughness

Bactrian camels lack true armor. Their protection comes from size, height, thick winter pelage, robust body construction and the difficulty of rapidly disabling a large ungulate. Environmental hardiness should not be mistaken for puncture resistance. A large carnivore that reaches vulnerable soft tissue can still inflict serious injury.

### Locomotion and maneuverability

Camels use a pacing gait and broad padded feet suited to loose and rocky desert substrates. They can run, but a tall, long-necked 580 kg camel is not a tight-turning specialist. Maneuverability is therefore moderate rather than high. The feet provide unusually good flotation and stability on sand, while mud, slick ground and constrained terrain reduce their advantage.

### Endurance and stamina

This is an elite strength. High-altitude Bactrian research describes long travel while carrying **200-250 kg** over rough terrain. FAO describes exceptional water conservation, and camel genomic work supports specialized water/fat metabolism and renal osmoregulation. These are genuine sustained-performance advantages, not merely survival trivia.

### Senses

Vision and smell are useful, with eyelashes, brows, ear hair and closable nostrils protecting sensory surfaces in dust and sand. There is no evidence for a rare sensory modality. Sensory scoring should therefore reflect solid terrestrial awareness plus environmental shielding, not supernatural detection.

### Intelligence and tactics

Bactrian camels are trainable domestic animals with social hierarchy and opponent assessment. Rutting males use staged intimidation displays before escalating to combat, demonstrating risk-sensitive signaling. They do not show the flexible tactical cognition of primates or sophisticated cooperative predators, so Intelligence belongs in the moderate band.

### Intraspecific fighting and aggression

Adult males are the fighting sex. During rut, a dominant male defends access to females, challenges intruding males and may escalate from urination/defecation/tail displays to biting and physical fighting. Males may reduce feeding during rut and rely on stored energy. Outside reproductive competition, the species should not be treated as constantly aggressive.

### Predator defense

Adult size is itself a major deterrent. Smaller predators face height, kicking risk and difficulty reaching a disabling target. Large coordinated predators can overcome camelids, so this is deterrence through scale and retaliation rather than invulnerability.

### Environmental strengths

- Exceptional cold-desert and arid-environment tolerance
- Thick seasonal coat and broad thermal tolerance
- Strong high-altitude performance and hypoxia adaptation
- Broad padded feet for sand and rough terrain
- Extreme dehydration tolerance and rapid rehydration capability
- Large fat reserves in two humps
- Ability to sustain loaded travel over difficult terrain

### Environmental limitations

- Tall, heavy frame reduces tight-space maneuverability
- No horns, tusks, claws, venom or armor
- Strong environmental physiology does not prevent mechanical trauma
- Peak sprint speed is poorly quantified and is not the core adaptation
- Soft substrates favor it more than slick or cramped environments

### Major weaknesses

1. No penetrating weapon comparable to horns, tusks or carnivore claws.
2. Vulnerable soft tissue despite thick coat and large size.
3. Relatively slow turning and repositioning against smaller agile attackers.
4. Bite requires close engagement.
5. Environmental endurance can be overvalued if incorrectly converted into immediate combat durability.

### Matchup archetypes

**Good matchups:** substantially smaller unarmored animals, opponents that struggle to reach high vulnerable targets, low-endurance opponents in prolonged engagements, and animals disadvantaged on sand/rough cold-desert terrain.

**Bad matchups:** large horned/tusked megaherbivores, powerful big cats or pack predators able to access the neck/flanks, armored opponents resistant to biting/trampling, and highly agile attackers capable of repeatedly entering and exiting the camel's turning radius.

## 5. Proposed ABS substats

| Substat | Score | Evidence-based rationale |
|---|---:|---|
| Size | **68.0** | A representative 580 kg male is a genuinely large roster animal, but far below elephant/hippo/rhino and extinct giant ceilings. |
| Raw Power | **65.0** | Large body, powerful load-bearing limbs and ability to carry 200-250 kg support strong absolute mechanical power. |
| Weaponry | **49.0** | Dangerous bite/caniniform teeth and kicks, but no dedicated horns, tusks, claws or macropredator killing apparatus. |
| Protection | **37.0** | Thick coat and large frame provide some shielding, but there is no armor or exceptionally thick hide system. |
| Toughness | **65.0** | Large robust body plus exceptional physiological stress tolerance, while avoiding treating dehydration resistance as wound resistance. |
| Speed | **43.0** | Capable runner but no strong measured maximum; speed is not the species' main combat advantage. |
| Maneuverability | **38.0** | Competent on difficult desert terrain but constrained by large mass, height and long body/neck. |
| Endurance | **90.0** | Loaded high-altitude travel, water conservation and broad environmental tolerance make sustained performance elite. |
| Recovery | **62.0** | Exceptional rapid rehydration/osmotic resilience is biologically unusual, though tissue regeneration is ordinary mammalian. |
| Tactics | **47.0** | Social hierarchy and staged rut assessment show useful behavioral flexibility without primate/corvid-level cognition. |
| Senses | **52.0** | Good terrestrial senses plus strong dust/sand protection, but no rare modality. |
| Ferocity | **55.0** | Rutting males can engage in serious biting contests, but aggression is context-dependent. |
| Abilities | **72.0** | Dehydration tolerance, thermal flexibility, high-altitude physiology and fat reserves strongly alter prolonged/environmental matchups. |

## 6. Proposed six headline ABS ratings

| Headline | Score | Justification |
|---|---:|---|
| **Attack** | **59.0** | A 580 kg male can inflict major blunt and bite trauma, but lacks specialized penetrating weapons, keeping it below similarly massive horned/tusked combatants. |
| **Defense** | **57.0** | Large body and robustness make rapid incapacitation difficult, but absence of armor prevents a higher score. |
| **Agility** | **39.0** | Strong footing on desert terrain but limited tight-turning performance due to size and build. |
| **Stamina** | **90.0** | One of the roster's strongest sustained-environment performers, supported by load carriage, water conservation and extreme-climate physiology. |
| **Intelligence** | **50.0** | Trainable, socially aware and capable of staged rival assessment, but not an upper-tier cognitive specialist. |
| **Special** | **72.0** | Extreme dehydration, thermal, hypoxia and desert adaptations materially alter long-duration and harsh-environment matchups. |

### Calibration interpretation

Absolute scaling is critical. The Bactrian camel is vastly above Army Ant, Axolotl, Arctic Fox and Baboon in raw mechanical power because its representative male mass is roughly 580 kg. Its Attack is only moderately above Baboon/Anteater because the camel lacks specialized cutting or penetrating weapons. It should exceed Arctic Wolf in Defense by sheer size, but the wolf remains substantially more agile and is a more specialized killer per unit mass. Stamina at 90.0 sits above the provisional Arctic Wolf 86.0 because the camel combines sustained loaded travel with unusually strong dehydration and environmental physiology, while remaining below the wandering albatross's provisional 96.0 extreme migration anchor. This score should be revisited when dromedary Camel, wild ungulates and other desert endurance specialists are researched.

## 7. Exactly two special abilities and two unique traits

### Special abilities

1. **Desert Reservoir** — Two large fat-storage humps and extreme water-conservation physiology let a healthy Bactrian camel sustain useful activity through prolonged food/water scarcity without pretending the humps contain water.
2. **Thermal Buffer** — Seasonal insulation, controlled sweating and broad body-temperature tolerance reduce physiological cost across severe cold-desert temperature swings.

### Unique traits

1. **Highland Hauler** — Bactrian camels can carry roughly 200-250 kg loads over rough high-altitude terrain, reflecting exceptional combined strength and endurance.
2. **Osmotic Resilience** — Oval, highly expandable erythrocytes and specialized renal/osmoregulatory physiology help tolerate severe dehydration and rapid rehydration.

## 8. Expanded profile content

### Habitat and range

Domestic Bactrian camels are associated with the cold deserts, steppes, rocky plains and high-altitude landscapes of Central and East Asia, including Mongolia, China and parts of Central/South Asia. Domestic populations should not be conflated with the geographically restricted wild camel *Camelus ferus*.

### Diet and ecology

Primarily herbivorous browsers/grazers capable of using dry, thorny, salty and bitter vegetation that many livestock avoid. Domestic animals function as major pastoral resources rather than occupying a pristine wild trophic niche. They provide transport, milk, meat, fiber and other products.

### Social structure

Camel social groups can include an adult male with females and young, with bachelor males outside breeding groups. Dominant males defend reproductive access during rut. Domestication and husbandry can strongly alter natural grouping patterns.

### Reproduction and life history

Females generally mature earlier than males. San Diego Zoo summarizes gestation at roughly 12-14 months, usually producing one calf. Males reach reproductive maturity later and become behaviorally dangerous during rut. Long generation times and substantial parental investment are typical of a large camelid.

### Conservation status

The domestic *Camelus bactrianus* is not the Critically Endangered wild camel. Conservation sources that label a two-humped camel as Critically Endangered are generally discussing *Camelus ferus*. This distinction is essential for the future site. The wild camel is a separate species and should not supply the domestic Bactrian's conservation status.

### Major adaptations

- Two fat-storing humps
- Dense winter coat with seasonal shedding
- Closable nostrils, long lashes and hairy ears against dust
- Broad padded feet
- Exceptional water conservation and concentrated excretion
- Large tolerated body-water losses
- Flexible body-temperature regulation
- Expandable oval erythrocytes
- High-altitude/hypoxia physiological adaptation in highland populations

### Human interaction

Bactrian camels have been crucial pack and transport animals across Inner Asia and Silk Road landscapes. Modern high-altitude studies specifically note logistics use and interest from the Indian military because of load capacity in terrain where conventional pack animals carry less. Adult rutting males can be dangerous and require experienced handling.

### Fun facts

- The two humps store **fat, not water**.
- FAO material describes each well-conditioned hump as holding roughly **25-35 kg of fat**.
- Camels can tolerate body-water losses that would be fatal to most mammals.
- Their red blood cells are oval and unusually expandable during rehydration.
- Their natural gait is a pace, moving both legs on one side together.
- A Bactrian's winter coat is dramatically shed as warm weather arrives.
- Domestic Bactrian camel and wild camel are separate species, despite decades of sources conflating them.

### Concise site-ready summary

The Bactrian camel is a massive two-humped cold-desert specialist built less for explosive killing than for surviving and working when other large mammals fail. A mature male brings roughly half a tonne of body mass, a dangerous bite, powerful limbs and serious rutting aggression, while its true superpower is endurance: fat reserves, extreme water conservation, thermal flexibility and high-altitude physiology let it keep functioning across punishing terrain and climate.

### Detailed narrative profile

A Bactrian camel looks awkward until the environment becomes hostile. Then its design makes sense. The broad feet spread hundreds of kilograms across loose ground, the winter coat insulates against severe cold, lashes and closable nostrils protect the face from blowing grit, and two humps localize large energy reserves. Internally, water-saving kidneys, unusual blood-cell geometry and flexible thermoregulation allow dehydration and rehydration stresses that would incapacitate many mammals.

In combat, however, those survival adaptations must not be mistaken for armor. The camel remains a large soft-bodied ungulate. Its threat comes from scale and reach: a mature male can bite, shove, kick and trample, and rutting males are willing to fight rivals. Yet a horned bovid or tusked megaherbivore has more specialized offensive hardware, and a big cat has a more refined killing system. The Bactrian's ABS identity is therefore a powerful endurance bruiser rather than an apex damage dealer.

That distinction also makes its matchup profile unusual. A small opponent faces an enormous height and mass problem. A similarly sized opponent with dedicated horns or claws can exploit the camel's lack of armor. In a short neutral-arena fight its adaptations are useful but not overwhelming. In cold, dry, high-altitude or prolonged conditions, its physiological advantages become increasingly important.

### Useful future structured fields

- `canonical_taxon_scope`: domestic species vs wild species
- `measurement_convention`: head-body vs total length
- `adult_male_mass_range_kg`
- `load_capacity_kg`
- `dehydration_tolerance_percent_body_mass`
- `hump_fat_kg_each`
- `thermal_tolerance_notes`
- `locomotion_speed_evidence_type`: measured / institutional / anecdotal
- `conservation_scope`: domesticated / wild taxon

## 9. Image Asset

- **Target path:** `animal-research-for-update/images/bactrian-camel.png`
- **Status:** `SOURCE FOUND - PNG COMMIT PENDING`
- **Primary candidate:** Real high-resolution *Camelus bactrianus* photograph at San Diego Zoo by Bernard Gagnon. Wikimedia Commons marks it a Quality Image and CC BY-SA 3.0. The animal is shown nearly full-body and is suitable for a profile cutout. Sex is not explicitly documented on the file page, so a later production image pass should prefer a verified adult male if an equally strong reusable photograph is located.
- **Source page:** https://commons.wikimedia.org/wiki/File:Bactrian_camel.jpg
- **Direct original image:** https://upload.wikimedia.org/wikipedia/commons/8/82/Bactrian_camel.jpg
- **Original dimensions:** 3256 × 2128
- **Creator:** Bernard Gagnon
- **License stated on source:** CC BY-SA 3.0 (also GFDL option)
- **Binary note:** Current GitHub text writer does not safely upload arbitrary PNG binary. No fake/text-encoded image is committed.

## 10. Evidence and source ledger

| Source | Direct URL | Claims supported | Context / caveat | Confidence |
|---|---|---|---|---|
| Animal Diversity Web, *Camelus bactrianus* | https://animaldiversity.org/accounts/Camelus_bactrianus/ | 300-690 kg adult range; 2.25-3.45 m body length; 1.80-2.30 m shoulder height; male larger; social/rutting behavior | Institutional synthesis; some older conservation wording may conflate wild and domestic taxa | High for morphology/behavior |
| San Diego Zoo, Camel | https://animals.sandiegozoo.org/animals/camel | 450-500 kg, 3.2-3.5 m length, 1.6-1.8 m shoulder height, median life expectancy 17.8 y, reproduction | Zoo summary, not sex-specific | Moderate-high |
| IVIS, The Genus Camelus | https://www.ivis.org/library/theriogenology-camelidae-anatomy-physiology-pathology-and-artificial-breeding/genus-camelus | Breed-specific male/female mass and height: Mongolian, Sunite, Xinjiang | Breed means vary substantially; useful for representative male selection | High |
| Lamo et al. 2020, BMC Veterinary Research | https://link.springer.com/article/10.1186/s12917-020-02481-6 | High-altitude morphometry, blood physiology, erythrocytes, endurance/load carriage 200-250 kg, hypoxia adaptation | Small Ladakh sample, mostly males; population-specific | High |
| 2026 sexual-dimorphism study | https://link.springer.com/article/10.1007/s44338-026-00215-w | Adult males had significantly higher body length/circumference; male work-performance context | Very small high-altitude sample, four adults per sex | Moderate-high |
| FAO, Biological Characteristics | https://www.fao.org/4/x1700t/x1700t05.htm | 1-2% body-mass water loss/day under deprivation; exceptional 2-3 week survival context; >100 L rehydration; 34-40 C daily temperature fluctuation; hump dimensions/fat | Husbandry synthesis; conditions matter | High-moderate |
| Wu et al. 2014, Nature Communications | https://www.nature.com/articles/ncomms6188 | Genomic/transcriptomic desert adaptation, water/fat metabolism, renal osmoregulation, >25% water-loss tolerance | Camelid comparative genomics; mechanistic rather than combat study | High |
| Journal of Morphology camelid dentition paper | https://onlinelibrary.wiley.com/doi/10.1002/jmor.21554 | Bactrian cranial caniniform teeth and accommodation of long caniniform teeth | Morphological evidence, not bite-force measurement | High |
| Zoo New England, Bactrian Camel | https://www.zoonewengland.org/franklin-park-zoo/animals/mammals/hoofed/bactrian-camel/ | 10-20 mph institutional running range; group behavior; pack-animal context | Not an instrumented maximum-speed study | Moderate |
| 2024 Kazakhstan biology study repository | https://repository.enu.kz/handle/enu/16099 | Kazakh males up to 750 kg; sexual dimorphism; breed size variation | Large-breed context, not canonical average | Moderate-high |
| Wikimedia Commons, Bernard Gagnon | https://commons.wikimedia.org/wiki/File:Bactrian_camel.jpg | Image identity, 3256×2128 original, quality assessment, creator, CC BY-SA 3.0 | Captive animal; sex not explicitly identified | High for image provenance |

### Conflicts and caveats

- **Taxonomy/conservation:** older zoo and web material often calls the wild camel a wild Bactrian camel and attaches Critically Endangered status to “Bactrian camel.” Modern taxonomy distinguishes domestic *C. bactrianus* from wild *C. ferus*. This profile uses the domestic species.
- **Mass:** broad adult values mix sexes and breeds. The canonical 580 kg is a reported adult male breed value, not a claim that every male weighs exactly 580 kg.
- **Height/length:** breed, age and measurement convention produce substantial spread.
- **Speed:** 10-20 mph is retained only as institutional context. `speed_mps` remains 0.0 until a strong measured maximum is found.
- **Bite force:** no PSI is promoted. Dentition and fighting behavior prove a functional bite without proving pressure.
- **Dehydration:** extreme tolerance depends on conditions, hydration state and workload. It should not be interpreted as immunity to fatigue or injury.

## 11. Confidence and cross-animal calibration notes

**Overall research confidence:** Moderate-high. Morphology, physiology and husbandry are well documented, while maximum running speed and bite pressure remain unresolved.

Cross-roster checks against completed research:

- **Army Ant:** Bactrian Camel must be orders of magnitude higher in Size, Raw Power, Attack and Defense. Proportional arthropod feats cannot narrow this gap.
- **Axolotl:** Camel is overwhelmingly higher in direct combat physics; axolotl remains much higher only in regeneration-specific recovery biology.
- **Baboon:** Camel is roughly 24 times the canonical mass and therefore far higher in Raw Power/Defense, while Baboon remains far higher in Agility and Intelligence.
- **Anteater:** Camel is much larger and more powerful overall, but the anteater's long claws are more specialized tissue-damaging weapons, preventing simple mass-based Attack inflation.
- **Arctic Wolf:** Camel has much greater mass and passive survivability; wolf remains a more efficient killer and more agile. Camel's Stamina edge reflects harsh-environment and loaded-travel physiology rather than chase performance.
- **Armadillo:** Camel's Defense comes from scale/toughness, while armadillo's protection is true osteoderm armor. Do not equate the mechanism even if headline scores later converge.
- **Albatross:** Camel Stamina 90.0 remains below the provisional 96.0 migration extreme, preserving a meaningful upper endurance anchor.

### Future normalization watch

Revisit **Stamina 90.0** after dromedary Camel, Pronghorn, Wild Horse, Reindeer and other long-distance specialists are researched. Revisit Attack/Defense after Bison, Cape Buffalo, Moose, Rhinoceros and other 500+ kg terrestrial fighters establish stronger megafaunal spacing. Do not increase Special merely because several desert adaptations describe the same underlying water-conservation system.