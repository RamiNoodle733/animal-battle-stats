# Alpaca Research Overhaul

## 1. Identity and canonical specimen

- **Common name:** Alpaca
- **Scientific name:** *Vicugna pacos* (older literature and some institutions still use *Lama pacos*)
- **Family:** Camelidae
- **Status:** Domesticated living camelid. There is no wild alpaca population in the ordinary species-profile sense.
- **Exact ABS animal represented:** Domestic alpaca, with a robust healthy mature male used as the canonical combat specimen because mature males develop substantially larger fighting teeth than females. Huacaya is used as the visual/body-form default because it is the more familiar type, but battle ratings are intended to represent the species rather than a fiber-show phenotype.
- **Canonical specimen:** Healthy mature adult male, approximately 65 kg, fully grown and with developed fighting teeth.
- **Sexual dimorphism:** Overall body dimorphism is modest. The major combat-relevant difference is dentition: adult males develop upper/lower incisors and lower canines into fighting teeth exceeding 3 cm, whereas these teeth are less developed in females.
- **Domestication/taxonomy note:** Genetic work supports descent of the alpaca primarily from the vicuña and the classification *Vicugna pacos*. The long history of domestication means body size, fleece, color, and conformation vary by breed and husbandry.

## 2. Physical measurements

### Mass

Authoritative sources span a useful representative range. Animal Diversity Web gives 55-65 kg, Smithsonian gives a broader adult range of 45-90 kg, and Rutgers Extension gives roughly 45-79 kg (100-175 lb). For an adult male combat specimen, **65.0 kg** is defensible without drifting toward exceptional show or obese animals.

- Representative canonical mass: **65.0 kg**
- Credible adult range: approximately **45-90 kg**
- Confidence: **High**

### Height

Institutional figures generally place alpacas around 0.8-1.3 m at the shoulder, with Smithsonian giving 0.8-1.1 m broadly and ADW 0.9-1.3 m. A robust mature male at **100.0 cm shoulder height** is a useful representative value.

- Canonical shoulder height: **100.0 cm**
- Credible range: approximately **80-130 cm**, depending on population/source convention
- Confidence: **High**

### Length

ADW and Smithsonian report broad head-and-body lengths around 1.2-2.2/2.25 m. Because measurement conventions and fleece can make visual estimates misleading, use **150.0 cm head-body length** as a conservative representative site value rather than the upper end.

- Canonical head-body length: **150.0 cm**
- Reported range: approximately **120-225 cm**
- Tail: roughly 15-25 cm in ADW/Smithsonian summaries
- Confidence: **Moderate**, due to broad source ranges and convention differences

### Speed

Many tertiary sites repeat 35-56 km/h values, but this run did not find a sufficiently strong primary or institutional locomotor measurement establishing a representative adult maximum. ABS should not convert a repeated web number into false precision.

- Canonical `speed_mps`: **0.0** pending defensible measured evidence
- Qualitative locomotion: capable of rapid flight, sure-footed movement on high-altitude terrain, and sustained low-intensity movement while grazing
- Confidence in exact maximum: **Low / unresolved**

### Lifespan

Multiple zoological and extension sources converge around 15-20 years, with Rutgers and Oklahoma State allowing healthy individuals into the low-to-mid 20s.

- Canonical lifespan: **20.0 years**
- Typical range: approximately **15-20+ years** in managed conditions
- Confidence: **High**

### Fighting teeth and bite

Mature males possess the most important dedicated weapon. Smithsonian and ADW state that upper/lower incisors and lower canines develop into fighting teeth or fangs that can exceed **3 cm**. These can lacerate rivals during male-male conflict.

No reliable standardized in-vivo bite-force PSI measurement was located. Masticatory studies exist for alpacas, but chewing-muscle coordination is not equivalent to a validated maximum combat bite PSI.

- Male fighting teeth: **>3 cm** reported
- Canonical `bite_force_psi`: **0.0**
- Reason: no defensible standardized PSI measurement found
- Confidence in fighting-tooth morphology: **High**
- Confidence in bite-force magnitude: **Insufficient for a numeric PSI field**

### Defensive structures

Alpacas lack horns, armor, thick dermal shields, or large claws. Dense fleece provides insulation and may offer slight superficial buffering, but it should not be treated as meaningful armor against serious teeth, claws, horns, or crushing attacks. Soft padded feet are adapted to terrain and grazing rather than striking like hard hooves.

### High-altitude physiology

Peer-reviewed physiological studies show unusually high hemoglobin oxygen affinity and only minor cardiorespiratory adjustment between sea level and 3,300 m. Alpacas maintained arterial oxygen saturation above 90% in one study and display blood/oxygen-transport traits suited to chronic hypoxia. This is a real endurance/environmental adaptation, but it does not mean an alpaca has elite high-output combat stamina.

## 3. Canonical proposed factual fields

```json
{
  "weight_kg": 65.0,
  "height_cm": 100.0,
  "length_cm": 150.0,
  "speed_mps": 0.0,
  "lifespan_years": 20.0,
  "bite_force_psi": 0.0
}
```

### Canonical-value reasoning

- **65.0 kg mass:** upper end of ADW's narrower 55-65 kg range, suitable for the requested mature male combat specimen while remaining well within Smithsonian's broader adult distribution.
- **100.0 cm height:** sits within convergent institutional shoulder-height ranges and avoids using unusually tall individuals.
- **150.0 cm length:** conservative representative head-body value within the very broad 1.2-2.25 m institutional range.
- **0.0 m/s speed:** intentionally unresolved rather than importing weakly sourced 35-56 km/h internet claims.
- **20.0 years lifespan:** supported by zoo and university-extension sources.
- **0.0 PSI bite force:** no standardized defensible PSI evidence found. Male fighting teeth are documented separately.

## 4. Combat biology

### Primary weapons

**Male fighting teeth.** Mature males can develop elongated incisors/canines over 3 cm. These are purpose-built by sexual selection for conflict and can cut/lacerate. Relative to the full ABS roster, however, a 65 kg herbivore with small fangs has limited absolute damage output compared with large carnivores, suids, great apes, crocodilians, or megafauna.

### Secondary weapons

- Body checks, neck pressure and wrestling during camelid conflict
- Kicking/stomping as emergency defense
- Spitting/regurgitated stomach contents as a deterrent and social weapon

Spitting is unpleasant and can disrupt vision/attention, but it is not a serious tissue-damage mechanism and should not inflate Attack.

### Offensive mechanics

The male's best close-range route is to use its reach and neck mobility to bring fighting teeth onto a rival. It can also shove or kick. It lacks the combination of jaw force, claws, crushing mass, horns, or predatory grappling needed to convert contact into catastrophic damage against a similarly sized serious predator.

### Defense and durability

Alpacas have moderate mammalian body mass, a thick fleece coat, and good footing, but little dedicated protection. Smithsonian characterizes their principal defense as flight. Dense fiber is insulation, not armor. Against a wolf-sized or larger predator, the alpaca's best survival strategy is detection, herd alarm, movement, and escape rather than absorbing attacks.

### Locomotion and maneuverability

Alpacas are adapted to uneven Andean terrain and possess soft padded feet. Their relatively light camelid build and long legs permit competent repositioning. They are more maneuverable than megafauna such as elephants and alligators on land, but they are not a specialized pursuit predator or acrobatic small animal. Exact top speed remains unresolved.

### Endurance and stamina

High-altitude physiology is the standout physical adaptation. Peer-reviewed work demonstrates high oxygen affinity and relatively small cardiorespiratory changes under chronic hypoxia. Alpacas also evolved/are managed in high-elevation grazing systems where sustained low-intensity locomotion is routine. This supports above-average endurance for a domestic herbivore, but not the extreme sustained chase output of African wild dogs or the transoceanic endurance of wandering albatrosses.

### Senses

Smithsonian reports excellent eyesight and hearing, with alarm calls used to alert the herd. This is valuable predator-detection coverage. Smell is also behaviorally useful, but no evidence found in this run supports an extreme specialized sensory score.

### Intelligence and learning

Alpacas can learn routine husbandry behaviors and respond to training. Smithsonian notes they readily learn to lead, enter vehicles, cush, and follow simple commands; London Zoo describes individuals as quick to learn new behaviors. This supports functional learning and social communication but not exceptional problem solving or tactical flexibility compared with apes, corvids, cetaceans, elephants, or top social predators.

### Social coordination

They are strongly social herd animals. Herding provides vigilance and alarm benefits, but alpacas do not display the coordinated offensive hunting tactics of wolves or African wild dogs. Sociality therefore helps Senses/Tactics modestly rather than creating a high Intelligence score by itself.

### Intraspecific fighting

Male fighting teeth are direct evidence that male-male conflict has shaped their combat anatomy. Adult males can compete for reproductive access. This is why the canonical ABS specimen is male even though overall body sexual dimorphism is limited.

### Predator defense

Primary strategy: vigilance and flight. Secondary responses include alarm calls, kicking, stomping, and spitting. Some zoological sources describe alpacas defending themselves with feet and spit, but they are not comparable to llamas commonly used as livestock guardians.

### Aggression and ferocity

Generally low. Alpacas are domesticated, social grazers and usually avoid serious conflict. Mature intact males can fight, but this does not translate into persistent predatory aggression.

### Environmental strengths

- High-altitude hypoxia
- Cool, dry Andean environments
- Uneven mountain/pasture terrain
- Open terrain where early detection and flight are useful

### Environmental limitations

- No aquatic combat specialization
- No climbing/flying specialization
- Thick fleece can contribute to heat stress in hot environments
- Poor close-quarters matchup against animals capable of grappling, pinning, or delivering deep penetrating trauma

### Major weaknesses

1. Limited absolute weapon power
2. Little true armor
3. Low willingness to press lethal combat
4. Fighting teeth require close range
5. Spitting is disruptive rather than damaging
6. No predatory grappling toolkit
7. Exact sprint ceiling is poorly documented

### Good matchup archetypes

- Much smaller unarmored animals that cannot overcome its size/reach
- Opponents vulnerable to kicks or lacerations but unable to grapple effectively
- High-altitude matchups where hypoxia penalizes poorly adapted opponents

### Bad matchup archetypes

- Medium/large carnivores with grappling bites and claws
- Armored reptiles
- Large horned/antlered ungulates
- Heavy suids
- Great apes with large strength advantage
- Any megafauna that can simply overpower a 65 kg alpaca

## 5. Proposed ABS substats

All values use the absolute 225-animal scale.

| Substat | Score | Rationale |
|---|---:|---|
| Size | **27.0** | ~65 kg is meaningful against tiny animals but low against the roster's large predators, bears, bovids, great apes, marine giants and megafauna. |
| Raw Power | **25.0** | Enough body mass for shoving/kicking, but no evidence of exceptional absolute muscular force. |
| Weaponry | **25.0** | Male >3 cm fighting teeth are real dedicated weapons; kicks add redundancy, but lethality is limited. |
| Protection | **17.0** | Dense fleece offers insulation and minor superficial buffering, not true armor. |
| Toughness | **30.0** | Healthy ungulate-like robustness, but not adapted to absorb severe predatory trauma. |
| Maneuverability | **47.0** | Competent long-legged movement and padded-foot control on uneven ground; not an agility specialist. |
| Endurance | **60.0** | High-altitude oxygen transport and grazing lifestyle support sustained function, without evidence for elite chase endurance. |
| Tactics | **35.0** | Herd vigilance, social signals and male fighting behavior, but limited offensive tactical complexity. |
| Senses | **53.0** | Excellent eyesight/hearing and herd alarm behavior are useful in combat awareness. |
| Ferocity | **22.0** | Usually avoids dangerous conflict; intact males are the main exception. |
| Abilities | **43.0** | High-altitude physiology and spit deterrence are useful niche tools but rarely decisive against much stronger opponents. |

## 6. Proposed six headline ABS ratings

| Headline stat | Score | Justification |
|---|---:|---|
| **Attack** | **25.0** | Male fighting teeth, kicks and body force can injure, but absolute lethality is low compared with serious predators and larger armed herbivores. |
| **Defense** | **25.0** | Moderate body size and fleece, but no armor; survival strategy is primarily avoidance/flight. |
| **Agility** | **47.0** | Good terrain control and competent escape movement, without evidence for exceptional acceleration/reflexes. |
| **Stamina** | **60.0** | Strong high-altitude oxygen-transport adaptation and sustained grazing locomotion, but not an extreme high-output endurance specialist. |
| **Intelligence** | **43.0** | Trainable, communicative and socially aware, but limited evidence for advanced flexible problem solving or combat tactics. |
| **Special** | **43.0** | High-altitude physiology plus regurgitated spit create genuine unusual matchup effects, but neither is broadly fight-deciding. |

### Rating interpretation

The alpaca is a useful anti-compression test. Its proportional adaptations and male-specific fighting anatomy are interesting, but the absolute scale prevents those features from pushing a ~65 kg domestic grazer into predator-level Attack or Defense. Its best relative category is Stamina because high-altitude physiology is directly supported by experimental research.

## 7. Exactly two special abilities and two unique traits

### Special abilities

1. **Thin-Air Engine** - High-affinity hemoglobin and other oxygen-transport characteristics support effective function under chronic Andean hypoxia. In high-altitude matchups this can preserve performance while a poorly adapted opponent experiences a greater oxygen penalty.
2. **Caustic Spit** - Alpacas can spit/regurgitate stomach contents as a social and defensive deterrent. It can foul the face, distract and discourage an opponent, but is not treated as corrosive damage or a lethal projectile.

### Unique traits

1. **Fighting Fangs** - Mature males develop elongated incisors/canines exceeding 3 cm, a sex-specific weapon that makes the adult male the correct ABS combat specimen.
2. **Padded Mountain Footing** - Soft padded feet and a light camelid frame provide controlled movement on grazing and uneven highland terrain while reducing ground impact.

## 8. Expanded profile content

### Habitat

The alpaca originated as a domestic high-Andean camelid associated with mountain grasslands, valleys and Altiplano/puna environments. Smithsonian describes ancestral/domestic Andean settings, while modern alpacas are raised worldwide.

### Geographic range

Historical/domestication center: Andes of Peru, Bolivia, Chile and neighboring Andean regions. Today: globally distributed in managed herds. Because alpacas are domesticated, a modern 'wild range' is misleading.

### Diet

Strict grazer/herbivore in normal husbandry and traditional systems, feeding mainly on grasses and other vegetation. Alpacas are efficient users of sparse highland forage.

### Ecology

The species is best understood as a human-managed grazer rather than a wild ecological population. Traditional Andean pastoral systems selected alpacas primarily for fiber. Their grazing, communal dung sites and herd behavior structure how they use pasture.

### Social structure

Highly social herd animals. Dominant males may maintain reproductive groups, while other management/social configurations include bachelor groups. Herd living improves vigilance and provides psychological/social stability.

### Reproduction and life history

- Induced ovulator
- Usually one cria
- Gestation approximately 332-352 days in Merck's veterinary guidance, with Smithsonian giving about 335 days
- Females mature earlier; males typically reach full reproductive maturity around 2.5-3 years
- Young are precocial and stand/nurse soon after birth
- Typical managed lifespan approximately 15-20 years, sometimes longer

### Conservation status

**Domesticated / not meaningfully assessed like a wild species.** Some zoo pages map alpacas into IUCN-style categories inconsistently, but production ABS should avoid presenting a normal wild-species Red List status without qualification. The domestic population is widespread and not threatened in the sense of a wild endangered taxon.

### Major adaptations

- High oxygen affinity suited to altitude
- Dense insulating fleece
- Efficient grazing/digestion in sparse highland environments
- Soft padded feet
- Strong herd vigilance and alarm communication
- Male fighting dentition

### Human interaction

Alpacas have been domesticated in the Andes for thousands of years, primarily for valuable fiber and secondarily for meat and other pastoral products. Modern alpacas are raised worldwide for fiber, breeding, exhibitions, companionship and agritourism. They can be trained for routine handling and are generally manageable, though intact males and poorly socialized animals require appropriate husbandry.

### Fun facts

1. Alpacas are the smallest domesticated camelids.
2. Genetic evidence strongly supports the vicuña as the primary wild ancestor of the alpaca.
3. Adult males can grow fighting teeth more than 3 cm long.
4. Their fleece occurs in many natural colors and is the principal reason for their domestication.
5. Alpacas use a variety of vocalizations and body postures, including humming and alarm calls.
6. Herds often use communal dung piles, concentrating waste away from much of their grazing area.
7. Females are induced ovulators rather than following a simple fixed estrous cycle.
8. High-altitude experiments found alpacas maintaining arterial oxygen saturation above 90% at 3,300 m with only modest cardiorespiratory adjustment.
9. Alpacas usually give birth to a single precocial cria.
10. Their soft padded feet are gentler on pasture than hard hooves.

### Concise site-ready summary

The alpaca (*Vicugna pacos*) is a domesticated South American camelid built for life in the high Andes. A mature male weighs roughly 65 kg and carries specialized fighting teeth over 3 cm long, but its normal survival strategy is vigilance and flight rather than lethal combat. Its standout adaptation is high-altitude physiology: alpaca blood has high oxygen affinity and supports effective function under chronic hypoxia. On the absolute ABS scale, this gives the alpaca respectable Stamina and a useful altitude-related Special ability while keeping Attack and Defense well below true predators and heavily armed herbivores.

### Detailed narrative profile

The alpaca is easy to underestimate because its modern image is dominated by fleece farms and companion-animal settings. Biologically, however, it is a specialized domestic camelid shaped by thousands of years of Andean pastoralism and by ancestry in one of the world's most demanding high-altitude environments. Its body is relatively light, long-legged and covered in dense insulating fiber. This combination suits open highland grazing much better than close-quarters combat.

For ABS, the mature male is the most defensible combat specimen. Male alpacas possess a real sex-specific weapon: elongated fighting teeth formed by incisors and canines that can exceed 3 cm. These teeth can cut rivals and demonstrate that male-male conflict is not merely symbolic. Even so, the absolute battle scale matters. A 65 kg alpaca does not possess the jaw mechanics of a big cat, the grappling strength of a great ape, the horns of a large bovid, or the armor of a crocodilian. Fighting teeth improve its Weaponry, but they do not transform it into a high-tier killer.

Its defensive plan is even clearer. Smithsonian describes flight as the alpaca's principal defense. Excellent sight and hearing, herd alarm behavior, long legs and competent footing help it detect danger and leave before contact. Spitting adds a memorable deterrent. Alpaca spit can include regurgitated stomach contents, making it unpleasant and potentially distracting around the eyes and face. ABS should model this as disruption, not as acid damage. The animal still has little dedicated protection once a capable predator establishes a grip.

The most scientifically distinctive part of the profile is altitude physiology. Classic experimental work on alpacas found high hemoglobin oxygen affinity and relatively minor cardiorespiratory changes across altitude. Another study measured oxygen transport at sea level and 3,300 m and reported arterial saturation remaining above 90%, with only minor adjustments consistent with tissue and blood characteristics well suited to chronic hypoxia. This is a legitimate matchup-relevant adaptation. At high elevation an alpaca may retain useful performance better than an opponent with poor hypoxia tolerance. It does not mean the alpaca can sprint or fight indefinitely, so Stamina is strong rather than elite.

Behaviorally, alpacas are social, vigilant and trainable. They communicate through vocalizations and posture, form strong herd relationships and can learn routine husbandry behaviors. Those qualities justify moderate Senses and Intelligence, but there is no basis for giving them the tactical sophistication of coordinated predators, apes, elephants, cetaceans or corvids. Their social system is mainly defensive and reproductive rather than offensive.

Overall, the alpaca occupies a clear ABS niche: low-to-moderate absolute combat power, useful mobility, strong altitude endurance, good sensory vigilance, and two unusual biological tools in fighting dentition and spit. It should beat many tiny or fragile animals through sheer scale while losing decisively to similarly sized specialist predators and most larger armed mammals. That wide separation is exactly what the absolute 0.1-100.0 research scale is intended to preserve.

### Proposed future structured fields

- `taxon_status`: domestic / wild / extinct
- `canonical_sex`: male
- `measurement_convention`: shoulder height / head-body length
- `bite_force_newtons`: nullable, separate from PSI
- `weapon_length_cm`: fighting teeth >3 cm
- `primary_weapon`: fighting teeth
- `secondary_weapon`: kick
- `locomotion_modes`: terrestrial
- `environment_specialization`: high altitude
- `altitude_tolerance`: high
- `domesticated`: true
- `speed_confidence`: unresolved
- `source_confidence` per factual field

## 9. Image Asset

- **Status:** `SOURCE FOUND - PNG COMMIT PENDING`
- **Target path:** `animal-research-for-update/images/alpaca.png`
- **Selected source page:** https://commons.wikimedia.org/wiki/File:AlpacaCloseup.jpg
- **Direct/original image:** available from the Wikimedia Commons source page as the 2400 x 1600 original JPEG
- **Specimen shown:** explicitly identified by the source as a **male alpaca (*Vicugna pacos*)** at Tierpark Grimmen
- **Why selected:** real photograph, exact species, adult male explicitly identified, high resolution, strong anatomical visibility, and a clean enough subject boundary for later non-generative background removal
- **Transparency:** source is JPEG, so a transparent PNG cutout still needs to be produced later
- **Binary commit:** not attempted because the available GitHub content writer in this run accepts UTF-8 text rather than safe binary image upload

Fallback full-body candidate if the selected crop proves unsuitable during asset processing:
https://species.wikimedia.org/wiki/File:Corazon_Full.jpg

## 10. Evidence and source ledger

### Smithsonian National Zoo - Alpaca
URL: https://nationalzoo.si.edu/animals/alpaca

Supports: adult 45-90 kg range, 1.2-2.2 m head/body length, 0.8-1.1 m shoulder height, >3 cm male fighting teeth, minimal other sexual dimorphism, grazing diet, social/herd behavior, flight as primary defense, eyesight/hearing and alarm calls, trainability, reproductive basics, domestication history.

Confidence: **High**. Major institutional zoological source.

### Animal Diversity Web - *Lama pacos*
URL: https://animaldiversity.org/accounts/Lama_pacos/

Supports: 55-65 kg adult mass, 1.2-2.25 m length, 0.9-1.3 m shoulder height, 15-25 cm tail, male fighting teeth >3 cm, polygynous social structure and general natural history.

Confidence: **High-to-moderate**. University-curated species account, though it retains older genus usage.

### Rutgers NJAES - Llamas and Alpacas
URL: https://njaes.rutgers.edu/fs917/

Supports: alpaca mass around 100-175 lb, approximately 3 ft at withers, 15-25 year lifespan, male maturity around 2.5 years, gestation and husbandry context.

Confidence: **High** for husbandry/general adult ranges.

### Penn State Extension - Llamas and Alpacas Health and Care
URL: https://extension.psu.edu/animals-and-livestock/llamas-and-alpacas/health-and-care

Supports: typical alpaca lifespan 15-20 years with proper care.

Confidence: **High**.

### London Zoo - Alpaca
URL: https://www.londonzoo.org/whats-here/animals/alpaca

Supports: 15-20 year lifespan, Andean habitat context, learning/training observations in managed male alpacas.

Confidence: **High** for zoo husbandry and general profile facts.

### Merck Veterinary Manual - Reproduction of Llamas and Alpacas
URL: https://www.merckvetmanual.com/exotic-and-laboratory-animals/llamas-and-alpacas/reproduction-of-llamas-and-alpacas

Supports: induced ovulation, reproductive parameters, gestation approximately 332-352 days, veterinary reproductive context.

Confidence: **High**.

### Kadwell et al. - Genetic analysis reveals the wild ancestors of the llama and the alpaca
URL: https://pmc.ncbi.nlm.nih.gov/articles/PMC1088918/

Supports: genetic evidence that alpaca is descended primarily from vicuña and should be classified *Vicugna pacos*.

Confidence: **High**, peer-reviewed genetic study.

### Reynafarje et al. - Oxygen transport of hemoglobin in high-altitude animals (Camelidae)
URL: https://pubmed.ncbi.nlm.nih.gov/1126888/

Supports: high oxygen affinity and multiple blood/muscle biochemical characteristics associated with high-altitude adaptation in alpacas/llamas.

Confidence: **High**, peer-reviewed physiological study, though older.

### O2 transport in the alpaca at sea level and at 3,300 m
URL: https://pubmed.ncbi.nlm.nih.gov/785566/

Supports: alpaca oxygen transport at altitude, arterial oxygen saturation remaining above 90%, minor cardiorespiratory adjustment, physiology suited to chronic hypoxia.

Confidence: **High**, direct experimental physiology.

### Williams et al. - Masticatory motor patterns in ungulates
URL: https://pubmed.ncbi.nlm.nih.gov/17436331/

Supports: alpaca jaw-muscle coordination has been scientifically studied, but does **not** provide a standardized combat bite PSI. Included specifically to prevent misuse of masticatory research as a fake PSI value.

Confidence: **High** for its actual scope.

### Wikimedia Commons - selected male alpaca image
URL: https://commons.wikimedia.org/wiki/File:AlpacaCloseup.jpg

Supports: real 2400 x 1600 photograph explicitly described as a male *Vicugna pacos*.

Confidence: **High** for image identity/provenance.

### Speed evidence conflict

Tertiary web sources commonly state roughly 35-56 km/h for alpacas, but no strong primary or institutional maximum-speed measurement was located in this run. Those values are therefore **not promoted into the canonical ABS factual field**.

Confidence in `speed_mps: 0.0` as a temporary unknown marker: **High**. Confidence in any specific maximum: **Low**.

## 11. Cross-animal calibration notes

### Versus African Elephant

The alpaca must remain vastly below the African elephant in Size, Raw Power, Attack and Defense. Its better turning ability and lighter terrestrial movement can justify higher Maneuverability/Agility, but this does not imply greater overall combat power. The alpaca's altitude physiology can produce a respectable Special/Stamina niche without closing the raw physical gap.

### Versus African Lion

A lion-sized specialist predator has far superior damage delivery, grappling, weaponry, toughness under predatory conflict, and killing behavior. The alpaca should not approach the lion's Attack. Alpaca Stamina can be respectable for different physiological reasons, especially at altitude, but it lacks pursuit-predator combat conditioning.

### Versus African Wild Dog

The wild dog is much more combat-specialized and tactically dangerous despite overlapping body-mass territory. Alpaca is larger than an individual wild dog but has much poorer predatory weapon delivery and ferocity. The wild dog's researched 82.0 Stamina remains well above the alpaca's 60.0 because it has direct field evidence for repeated high-output pursuits, whereas alpaca evidence is primarily altitude tolerance and sustained low-intensity grazing movement.

### Versus Albatross

The wandering albatross remains an extreme endurance specialist at 96.0 Stamina. Alpaca's high-altitude endurance is meaningful but belongs much lower. Alpaca has substantially greater terrestrial body force and close-range weapon potential than an albatross, so its Attack can exceed the bird's despite lacking predatory specialization.

### Versus Alligator

Alligator's experimentally measured multi-kilonewton bite, armored body and ambush mechanics place it in a completely different Attack/Defense class. Alpaca's mobility and sustained terrestrial activity exceed alligator's high-output land endurance, but it should lose badly in direct close combat.

### Future normalization flags

- Revisit **Size 27.0 / Raw Power 25.0** after Llama, Guanaco, Wild Horse, Donkey, deer/antelope and medium predators establish the 50-200 kg terrestrial spacing.
- Revisit **Stamina 60.0** after Camel, Bactrian Camel, Yak, Pronghorn, Reindeer and mountain ungulates establish altitude/desert/endurance anchors.
- Revisit **Agility 47.0** once a reliable alpaca speed/locomotion study is found. Do not use an unsourced top-speed number as a shortcut.
- Keep **Attack 25.0** conservative unless evidence shows much more severe fighting-tooth injury mechanics than currently documented.
- The alpaca should remain a clear example of why interesting proportional adaptations do not equal high absolute battle scores.
