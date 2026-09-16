# Anteater Research Overhaul

## 1. Identity and canonical specimen

- **Common name:** Anteater
- **Research canon:** Giant anteater
- **Scientific name:** *Myrmecophaga tridactyla*
- **Family:** Myrmecophagidae
- **Status:** Living species
- **Exact ABS animal represented:** The roster label `Anteater` is underspecified. This research standardizes it to the giant anteater, the largest living anteater and the form most appropriate for a battle-stat profile. It must not be pooled with tamanduas or silky anteaters.
- **Canonical specimen:** Representative healthy mature adult, approximately 40 kg. Sex is not used as a strong combat selector because the best species synthesis reports little sexual dimorphism, although some zoo summaries report males somewhat heavier.
- **Dimorphism note:** Mammalian Species reports little sexual dimorphism. Zoo datasets also show substantial overlap in mass between sexes. Therefore a normal robust adult is preferable to forcing an unusually large male baseline.

## 2. Physical measurements

### Mass

The 2018 Mammalian Species synthesis reports an average mass of about **33 kg**. Smithsonian gives **27-45 kg**, while San Diego Zoo gives a broader managed-population range reaching 64 kg. A 2024 zoo dataset of animals at least one year old reported means of 45.2 kg for females and 46.6 kg for males, illustrating that managed animals can be heavier than wild averages.

- **Canonical mass:** **40.0 kg**
- **Representative wild/institutional range:** approximately **27-45 kg**
- **Managed individuals:** can exceed this substantially
- **Confidence:** High

### Length

Mammalian Species reports mean total length near **2,000 mm**, with an adult northern-South-America range of **1,740-2,817 mm** in one dataset. Smithsonian gives 1.8-2.4 m total length. Head-body and total-length conventions differ substantially because the bushy tail is long.

- **Canonical total length:** **200.0 cm**
- **Tail:** commonly about **64.5-90 cm**
- **Confidence:** High for total-length scale, moderate for cross-source convention

### Height

Institutional descriptions commonly place giant anteaters around 60 cm at the shoulder, but standardized primary morphometric support is weaker than for mass and total length.

- **Canonical shoulder height:** **60.0 cm**
- **Confidence:** Moderate

### Speed

Smithsonian states that giant anteaters can gallop at over 30 mph / 48 km/h when necessary. This is an authoritative institutional figure but was not traced in this run to a primary instrumented locomotor study. To avoid false precision in a field intended as measured top speed, the canonical schema value remains unresolved.

- **Canonical `speed_mps`:** **0.0** pending primary/validated locomotor measurement
- **Qualitative:** capable of a short gallop, swimming, and competent terrestrial movement despite its unusual knuckle-walking forelimbs
- **Confidence in exact maximum:** Low

### Lifespan

Wild lifespan is poorly established. Smithsonian reports up to 26 years in human care; San Diego Zoo reports median life expectancy of 10.5 years for females and 14.8 for males in its population context.

- **Canonical lifespan:** **15.0 years**
- **Captive maximum:** about **26 years** reported
- **Confidence:** Moderate

### Foreclaws and weapon dimensions

The forelimbs are exceptionally muscular and carry enlarged claws, especially the third manual claw. A peer-reviewed Brazilian paper reports claws reaching **6.5 cm**. Some zoo sources report larger apparent claw dimensions, but 6.5 cm is retained as the conservative research anchor because it is directly tied to scientific literature.

- **Canonical major-claw length anchor:** **6.5 cm**
- **Function:** ripping open ant/termite nests, digging, and powerful defensive slashing/grappling
- **Confidence:** High

### Bite force and dentition

Giant anteaters are **edentulous**, meaning they have no teeth, and their jaw musculature is strongly reduced. Their mouth is a specialized feeding apparatus, not a combat bite weapon.

- **Canonical `bite_force_psi`:** **0.0**
- **Reason:** no meaningful toothed combat bite; do not assign an internet PSI value
- **Confidence:** High

### Tongue and feeding apparatus

The tongue is narrow, muscular and highly protrusible. Scientific synthesis describes extension beyond the mouth of over 350 mm in some adults, while institutional summaries commonly cite approximately **60-61 cm** maximum extension. Tongue cycles can approach **150-160 per minute**. This is a feeding specialization, not a damaging battle weapon.

### Defensive structures

The animal has no armor, horns or protective shell. Its main defense is active: powerful forelimbs and claws, plus body size and the ability to rear bipedally with the tail helping stabilize the posture. Coarse hair is not treated as meaningful armor.

## 3. Canonical proposed factual fields

```json
{
  "weight_kg": 40.0,
  "height_cm": 60.0,
  "length_cm": 200.0,
  "speed_mps": 0.0,
  "lifespan_years": 15.0,
  "bite_force_psi": 0.0
}
```

### Canonical-value reasoning

- **40.0 kg:** robust representative adult within authoritative wild/institutional ranges, without using heavy managed extremes.
- **60.0 cm:** reasonable shoulder-height convention, but should be revisited if a strong morphometric dataset is located.
- **200.0 cm:** matches the Mammalian Species mean total-length scale and Smithsonian's broad 1.8-2.4 m range.
- **0.0 m/s:** exact top speed remains unresolved rather than promoting a non-primary speed claim into false precision.
- **15.0 years:** practical representative lifespan while distinguishing it from the 26-year captive maximum.
- **0.0 PSI:** giant anteaters lack teeth and have strongly reduced jaw musculature; the combat weapon is the foreclaw system.

## 4. Combat biology

### Primary weapons

**Enlarged foreclaws backed by unusually powerful forelimbs.** Mammalian Species notes that forelimb musculature weighs roughly twice the hindlimb musculature. The claws evolved to tear open resistant insect nests, but the same system can inflict deep punctures and lacerations.

This is not hypothetical danger. Peer-reviewed medical literature documents rare human fatalities in which defensive giant anteaters caused penetrating wounds, severe hemorrhage and femoral-artery injury. The species is normally nonaggressive, so these cases demonstrate weapon potential rather than typical behavior.

### Secondary weapons

- Forelimb grappling or an `embrace` that can hold an opponent in claw range
- Body mass and leverage while reared upright
- Short-distance galloping escape rather than a dedicated secondary striking weapon

The long snout and tongue are not scored as serious weapons.

### Offensive mechanics

The giant anteater is not a predator of vertebrates and does not normally initiate lethal combat. When cornered it can rear onto its hindlimbs, stabilize itself with its large tail, extend its forelimbs, grapple, and slash/puncture with the claws. This creates a dangerous close-range defensive envelope. The mechanism is strongest against an opponent that commits frontally and enters grappling distance.

### Defense and durability

Dedicated passive protection is limited. There is no shell, thick hide or heavy skeletal armor. Defense comes from deterrence, reach, dangerous claws, a moderately large mammalian body and the ability to stand and counterattack. Large felids such as jaguars and pumas remain predators, proving that the claw system is not invulnerability.

### Locomotion and maneuverability

Giant anteaters protect their foreclaws by walking on the sides/knuckles of the forefeet. Their anatomy is specialized for digging and forceful forelimb use rather than cursorial pursuit. They can gallop when pressed and can swim. In a fight they have useful upper-body reach and can pivot/rear, but they are less agile than similarly sized pursuit carnivores.

### Endurance and stamina

They travel through large home ranges while foraging, but physiology imposes limits. Giant anteaters have an unusually low body temperature and low capacity for physiological thermoregulation. A 2022 tracking study of 52 animals found temperature-dependent changes in movement and forest use. This argues against treating them as elite sustained-output fighters even though they routinely cover ground while foraging.

### Senses

Smell is the dominant sensory channel. Smithsonian reports highly developed olfaction and the ability to identify ant/termite types before opening nests. Eyes and ears are small and sight is comparatively weak. A classic Nature paper confirms strong olfactory specialization but cautions that claims of extraordinary acuity should not be exaggerated beyond evidence.

### Intelligence, learning and tactics

The species shows competent foraging decisions, habitat selection, scent-based discrimination, threat assessment and flexible activity timing, but there is no evidence for primate/corvid/cetacean-level problem solving or sophisticated cooperative tactics. Combat tactics are simple and effective: avoid danger, flee if possible, then rear and counter with claws if trapped.

### Hunting behavior

It is a specialist insectivore, not a vertebrate hunter. It opens colonies with claws and harvests ants/termites with rapid tongue movements. This specialization matters for anatomy but should not be misread as predatory combat experience.

### Intraspecific fighting

Giant anteaters are generally solitary. Documented aggressive encounters include posturing and foreclaw strikes. This provides evidence that the claw system is also used against conspecifics, though frequent lethal fighting is not the norm.

### Predator defense

Jaguars and pumas are major natural predators. The standard defensive response is escape when possible. When cornered, the anteater rears and uses its foreclaws. Camera-trap and field observations show direct confrontations with jaguars, and scientific/medical literature demonstrates that the claws can cause catastrophic wounds.

### Aggression / ferocity

Baseline aggression is low. Medical reports explicitly characterize serious attacks as extremely rare and generally defensive, associated with provocation, hunting or handling. Therefore the species receives substantial Weaponry but only modest Ferocity.

### Environmental strengths

- Savannas and grasslands with room to detect and avoid threats
- Forest and wetland mosaics where scent-based foraging works well
- Capable swimmer
- Strong digging and obstacle-opening forelimbs

### Environmental limitations

- Thermal sensitivity and relatively low physiological thermoregulatory capacity
- Poorer visual acuity than many predators
- No aquatic combat specialization despite swimming ability
- Close-range weapon system requires the opponent to enter claw range
- No armor if a large predator gets around the forelimbs

### Major weaknesses

1. No damaging bite and no teeth
2. Limited passive armor
3. Low baseline aggression
4. Claws are dangerous but short-ranged
5. Specialized digging forelimbs do not produce pursuit-predator agility
6. Thermal physiology constrains sustained activity in unfavorable conditions
7. Large felids can successfully prey upon the species

### Good matchup archetypes

- Smaller or similarly sized unarmored opponents that must close frontally
- Attackers vulnerable to deep claw punctures or vascular trauma
- Opponents that underestimate it and enter grappling range

### Bad matchup archetypes

- Heavier large carnivores able to attack from angles and control the neck/back
- Heavily armored reptiles
- Large horned or tusked herbivores with superior reach/mass
- Great apes or megafauna with overwhelming absolute power
- Ranged biological attackers such as potent venom-delivery specialists if they can avoid the forelimbs

## 5. Proposed ABS substats

All ratings use the absolute 225-animal scale.

| Substat | Score | Rationale |
|---|---:|---|
| Size | **23.0** | ~40 kg is substantial against tiny animals but small beside the roster's large predators, bovids, bears, great apes and megafauna. |
| Raw Power | **40.0** | Forelimbs are exceptionally developed for digging and grappling, but total-body absolute force remains far below large predators and megafauna. |
| Weaponry | **56.0** | 6.5 cm claws, powerful forelimbs and documented penetrating/fatal wounds make the weapon system much more serious than body size alone suggests. |
| Protection | **19.0** | Coarse hair and moderate body mass, but no real armor or thick defensive hide. |
| Toughness | **38.0** | Robust enough to confront predators defensively, but still killable by jaguars/pumas and lacks specialized trauma resistance. |
| Maneuverability | **41.0** | Can gallop, rear, pivot and swim, but digging-specialized forelimbs and knuckle walking limit pursuit-style agility. |
| Endurance | **45.0** | Regular wide-ranging foraging supports moderate endurance, offset by low body temperature and thermoregulatory constraints. |
| Tactics | **38.0** | Simple but effective avoid-flee-rear-counter defensive sequence; no complex cooperative combat behavior. |
| Senses | **58.0** | Strong olfactory specialization is highly useful, while weak vision prevents a higher all-around score. |
| Ferocity | **26.0** | Dangerous when cornered but normally peaceful and avoidance-oriented. |
| Abilities | **48.0** | Unusual claw-grapple architecture and specialized olfaction are meaningful, but neither is a broad supernatural-style matchup breaker. |

## 6. Proposed six headline ABS ratings

| Headline stat | Score | Justification |
|---|---:|---|
| **Attack** | **53.0** | Powerful claw strikes and grappling can cause deep laceration, vascular injury and rare fatalities. Still limited by 40 kg body scale, short reach and absence of a bite weapon. |
| **Defense** | **38.0** | Active claw deterrence and moderate body robustness help, but passive protection is weak and large felids can kill it. |
| **Agility** | **41.0** | Competent escape gallop and defensive repositioning, but not a pursuit or acrobatic specialist. |
| **Stamina** | **45.0** | Wide-ranging foraging supports sustained movement, while low body temperature and thermal sensitivity constrain high-output endurance. |
| **Intelligence** | **42.0** | Strong scent-guided foraging and flexible activity patterns, but limited evidence for advanced problem solving or tactical complexity. |
| **Special** | **49.0** | The rearing claw-grapple defense and extreme feeding/olfactory specialization are distinctive, though only the claw system strongly changes combat matchups. |

### Calibration interpretation

The giant anteater is an important anti-compression case. At ~40 kg it should not approach alligator, lion or anaconda absolute physical power, yet its Attack must be meaningfully above a similarly sized harmless grazer because the foreclaws are demonstrably capable of penetrating major vessels and causing lethal trauma. Attack **53.0** therefore sits above Alpaca **25.0**, but well below African Lion **79.0**, Alligator **84.0**, and the much larger African Elephant **97.0**. Its low aggression prevents weapon lethality from leaking into Ferocity.

## 7. Exactly two special abilities and two unique traits

### Special abilities

1. **Claw Embrace** - When trapped at close range, the giant anteater can rear, seize or brace against an attacker with its powerful forelimbs, and bring enlarged claws into repeated puncturing/slashing range. Medical cases establish that this can produce catastrophic vascular injury.
2. **Scent Mapper** - Highly developed olfaction allows fine scent-guided prey and environmental discrimination. In a matchup it improves detection and close-range awareness, while not compensating fully for weak vision.

### Unique traits

1. **Knuckle-Sheathed Arsenal** - The animal walks with its enlarged foreclaws folded/protected, preserving a digging and defensive weapon system that would otherwise interfere with normal locomotion.
2. **Edentulous Specialist** - It has no teeth and strongly reduced jaw musculature, shifting virtually all meaningful combat offense away from the mouth and into the forelimbs, an unusual configuration for a mammal of its size.

## 8. Expanded profile content

### Habitat

Giant anteaters occupy a broad mosaic including grasslands, savannas, wetlands, tropical forests and forest edges across Central and South America. Temperature can influence when they are active and how strongly they use forest cover.

### Geographic range

The species occurs from portions of Central America through much of South America east of the Andes into northern Argentina. It has disappeared from parts of its former range.

### Diet

Specialist insectivore feeding primarily on ants and termites, with occasional other soft-bodied foods reported. It opens nests with the foreclaws and uses a long sticky tongue for rapid collection.

### Ecology

Giant anteaters are important predators of colonial insects and are generally solitary wide-ranging foragers. Radio-tracking in the Pantanal found male home ranges around 4.0-7.5 km² in one small sample, illustrating substantial daily landscape use.

### Social structure

Mostly solitary except for mating associations and mothers with offspring. Individuals use scent and marking behavior. Aggressive encounters can include posturing and claw strikes.

### Reproduction / life history

- Gestation around **180-190 days**
- Usually **one offspring**
- Young ride on the mother's back
- Maturity around **2-3 years** in zoo summaries
- Slow reproduction contributes to conservation vulnerability

### Conservation status

**Vulnerable**. Major threats include habitat loss and fragmentation, fires, road mortality, hunting and conflict with domestic dogs. Populations have disappeared from parts of the historical range.

### Major adaptations

- Enlarged digging/defensive foreclaws
- Forelimb musculature heavily emphasized relative to hindlimbs
- Knuckle-style forefoot posture protecting claws
- Long protrusible tongue with rapid cycling
- Reduced jaw musculature and complete loss of teeth
- Strong olfactory specialization
- Bushy tail used in thermoregulatory/resting behavior and balance

### Human interaction

Usually avoids people. Serious attacks are rare, but peer-reviewed medical reports document fatal defensive injuries when giant anteaters were cornered, hunted or otherwise threatened. This makes them a good example of why low aggression and low predatory intent do not imply low weapon danger.

### Strong fun facts

1. Giant anteaters are the largest living anteaters and average roughly two meters in total length.
2. They have **no teeth**.
3. Their tongue can move roughly **150-160 times per minute** while feeding.
4. The tongue is supported by an unusually specialized muscular system extending toward the sternum.
5. They protect their huge foreclaws by walking on the sides/knuckles of the forefeet.
6. Forelimb musculature has been reported at roughly twice the mass of hindlimb musculature.
7. They can swim despite their strongly terrestrial appearance.
8. Their defensive claws have caused rare fatal vascular injuries in humans.
9. Their activity and habitat use shift with environmental temperature because their thermoregulatory physiology is unusual for a mammal of this size.
10. A mother carries her single young on her back, where the youngster's markings can visually blend with hers.

### Concise site-ready summary

The giant anteater (*Myrmecophaga tridactyla*) is a roughly 40 kg South American insect specialist with no teeth, a long sticky tongue and some of the most formidable foreclaws of any mammal its size. It normally avoids conflict, but when cornered it can rear upright and slash or grapple with powerful forelimbs, a defense capable of causing deep and even fatal wounds. Its poor passive armor and modest agility keep it below major predators overall, while its claw system gives it far more Attack than its peaceful diet suggests.

### Detailed narrative profile

The roster's generic `Anteater` entry is best represented by the giant anteater, *Myrmecophaga tridactyla*. It is the largest living member of the anteater lineage and one of the most morphologically specialized terrestrial mammals. A representative adult weighs around 40 kg and measures roughly two meters from snout to tail tip, though much of that apparent length comes from its elongated skull and enormous bushy tail.

Almost everything about its feeding anatomy is strange by ordinary mammalian standards. It has no teeth, reduced jaw musculature, a tiny mouth opening and a long narrow tongue capable of extremely rapid protrusion and retraction. Its primary prey is not subdued by biting. Instead, the animal tears open ant and termite nests using massive forelimbs, then harvests insects with sticky saliva and rapid tongue movements.

Those nest-opening forelimbs are what transform the giant anteater from a seemingly harmless specialist into a legitimate close-range threat. The third manual claw is especially enlarged, and scientific literature reports claws reaching about 6.5 cm. The forelimb musculature is disproportionately developed. When threatened, an anteater can rear onto its hindlimbs, use its tail and stance for stability, and meet an attacker with the claws. Rare human fatalities from penetrating vascular trauma establish that these weapons are not merely intimidating.

That does not make the giant anteater a high-tier predator. It lacks a killing bite, armor, pursuit anatomy and predatory tactics. Jaguars and pumas can prey upon it. Its normal response is avoidance or escape, and serious attacks are exceptional defensive events. Its physiology also includes a low body temperature and limited thermoregulatory capacity, with field studies showing movement patterns shifting in response to ambient temperature.

ABS should therefore treat the animal as a dangerous defensive specialist rather than a miniature apex predator. Its Attack comes from unusually effective claws, while its Defense, Agility and Ferocity remain moderate or low. This separation preserves the absolute roster scale and avoids turning one impressive adaptation into inflated scores across every category.

### Useful future structured fields

- `taxon_scope`: `Myrmecophaga tridactyla`
- `measurement_length_type`: `total_length`
- `major_claw_length_cm`: `6.5`
- `tongue_extension_cm`: `60.0` as an institutional maximum-style field, not a canonical combat metric
- `edentulous`: `true`
- `primary_weapon`: `foreclaws`
- `locomotion_modes`: `walk, gallop, swim`
- `activity_thermoregulation_sensitive`: `true`
- `canonical_speed_evidence_status`: `unresolved`

## 9. Image Asset

- **Target local asset:** `animal-research-for-update/images/anteater.png`
- **Status:** `SOURCE FOUND - PNG COMMIT PENDING`
- **Selected source page:** https://commons.wikimedia.org/wiki/File:Giant_Anteater_(Myrmecophaga_tridactyla).jpg
- **Direct image resolver:** https://commons.wikimedia.org/wiki/Special:Redirect/file/Giant_Anteater_(Myrmecophaga_tridactyla).jpg
- **Image type:** Real photograph of *Myrmecophaga tridactyla* in Emas National Park, Brazil
- **Resolution:** 5184 × 3422 original
- **Reuse note:** Wikimedia Commons lists the source as CC BY 2.0. Production must retain required attribution/provenance when promoted.
- **Sex/stage note:** The page verifies the species and wild setting but does not explicitly state sex. Because strong sexual dimorphism is not established in the scientific synthesis, this is acceptable as a primary adult-species candidate pending visual/provenance review.
- **Transparency:** Original is JPEG with natural background. Later asset processing should perform non-generative subject cutout/background removal and then run the repository's strict provenance audit and promotion workflow.

## 10. Evidence and source ledger

| Source | Direct URL | Supports | Reported finding / context | Confidence / caveat |
|---|---|---|---|---|
| Gaudin et al., Mammalian Species, *Myrmecophaga tridactyla* | https://academic.oup.com/mspecies/article/50/956/1/4968042 | Taxonomy, dimensions, mean mass, dimorphism, forelimb anatomy, tongue/jaw anatomy | Mean mass ~33 kg; average total length ~2,000 mm; little sexual dimorphism; forelimb musculature ~2× hindlimb; no teeth/reduced jaw system; rapid tongue cycling | **Very high**; core species synthesis |
| Smithsonian National Zoo | https://nationalzoo.si.edu/animals/giant-anteater | Size, habitat, locomotion, lifespan, senses, feeding, defensive posture | 27-45 kg; 1.8-2.4 m; can gallop and swim; up to 26 years in care; highly developed smell; rear/use claws defensively | **High** institutional source; speed not treated as primary instrumented measurement |
| San Diego Zoo Wildlife Alliance | https://animals.sandiegozoo.org/animals/giant-anteater | Managed size/lifespan, life history, low body temperature, diet | 27-64 kg; 100-120 cm body plus 70-90 cm tail; sex overlap; low body temperature; single young | **High** institutional source; managed population differs from wild |
| Braga et al. / Brazilian Zoology paper on marking behavior | https://doi.org/10.1590/S1984-46702010000100002 | Claw length, dimensions, solitary behavior | Claws may reach 6.5 cm; body 100-190 cm plus 64-90 cm tail | **High** peer-reviewed; claw value cites earlier literature |
| Haddad Jr. & Nunes 2016, Wilderness & Environmental Medicine | https://journals.sagepub.com/doi/10.1016/j.wem.2016.07.003 | Weapon lethality, defensive behavior | Rare fatal human attack; claws caused penetrating wounds and femoral-artery injury; attacks generally defensive | **Very high** for injury mechanism; rare events should not inflate aggression |
| Grillo et al. 2022, Jornal Vascular Brasileiro | https://www.jvascbras.org/journal/jvb/article/doi/10.1590/1677-5449.210081 | Claw injury and 6.5 cm dimension | Non-lethal vascular injury case; claws can reach 6.5 cm | **High** clinical case report |
| Giroux et al. 2022, Integrative Zoology | https://onlinelibrary.wiley.com/doi/10.1111/1749-4877.12539 | Stamina/environment/thermoregulation | Tracked 52 animals; movement and forest use changed with temperature; low heat-production capacity implicated | **Very high** field tracking evidence |
| Medri & Mourão 2005, Journal of Zoology | https://www.cambridge.org/core/journals/journal-of-zoology/article/abs/home-range-of-giant-anteaters-myrmecophaga-tridactyla-in-the-pantanal-wetland-brazil/523912BCB7C5BCF21CFAD9EB935F4552 | Home range and sustained landscape use | Male ranges 4.0-7.5 km² in small Pantanal sample; one female 11.9 km² | **High**, small sample |
| McAdam & Way 1967, Nature | https://www.nature.com/articles/214316a0 | Olfactory specialization | Strongly developed olfactory system/discrimination; warns that extraordinary acuity claims exceeded evidence | **High** for caution against the repeated `40× human` claim |
| Animal Diversity Web | https://animaldiversity.org/accounts/Myrmecophaga_tridactyla/ | Diet, predation, claws, tongue, predator defense | Ants/termites; jaguars/pumas major predators; claws used in defense; tongue ~150 cycles/min | **High** educational synthesis |
| Pitman & Safina 2023, Frontiers in Ecology and the Environment | https://esajournals.onlinelibrary.wiley.com/doi/10.1002/fee.2630 | Anti-predator significance of claws | Notes claws as potentially lethal defense against attacking jaguars/humans | **High**, interpretive natural-history note |
| Wikimedia Commons selected image | https://commons.wikimedia.org/wiki/File:Giant_Anteater_(Myrmecophaga_tridactyla).jpg | Image provenance | Real wild giant anteater, Emas National Park, Brazil; 5184×3422; CC BY 2.0 | **High** for image identity/provenance; sex unstated |

### Evidence conflicts and caveats

- **Sexual dimorphism:** Some zoo pages say males are heavier, but the Mammalian Species synthesis describes little sexual dimorphism and a modern zoo dataset shows large overlap. Do not exaggerate a male-female combat gap.
- **Mass:** Wild averages around 33 kg coexist with much heavier zoo individuals. `40.0 kg` is deliberately representative and not a record.
- **Length:** Sources mix head-body and total length. ABS should add an explicit measurement-convention field.
- **Speed:** Smithsonian's >30 mph claim is institutionally credible but lacks a primary instrumented study in this run. Keep schema speed at `0.0` until validated.
- **Smell:** Repeated claims that smell is `40 times` human should not be promoted as a measured fact. The Nature paper specifically notes lack of evidence for extraordinary acuity despite clear olfactory specialization.
- **Aggression:** Fatal attacks demonstrate weapon capacity, not normal temperament. The animal is generally avoidance-oriented.

## 11. Cross-animal calibration notes

- **Versus Alpaca:** Both are medium mammals, but the giant anteater's foreclaws are much more dangerous and clinically documented to penetrate major vessels. Attack **53.0** versus Alpaca **25.0** is therefore intentional. Their body scale remains comparable enough that anteater Defense does not become predator-tier.
- **Versus African Wild Dog:** The wild dog is smaller but a dedicated cursorial predator with a damaging bite, coordinated hunting and much better endurance/agility. Anteater has the more dramatic single defensive weapon, while the wild dog should remain superior in Agility, Stamina, Tactics and practical predatory offense.
- **Versus African Lion:** Lion remains decisively superior in Attack, agility, predatory grappling, bite/claw redundancy and killing experience. Anteater claws can deter/injure a big cat but do not justify predator parity.
- **Versus Alligator:** Alligator's much greater mass, bite mechanics, protection and aquatic specialization keep it far above the anteater in Attack/Defense. Anteater's land maneuverability is better, but not enough to erase the power gap.
- **Versus Anaconda:** A representative large female anaconda is heavier and possesses constriction as a sustained killing system. Anteater may be dangerous at initial contact, but should not exceed the anaconda's overall Attack.
- **Versus African Elephant:** No physical category should be compressed toward elephant scale. The anteater's impressive proportional forelimb specialization remains orders of magnitude below megafaunal raw power.
- **Future audit:** Revisit Attack **53.0** after Wolverine, Honey Badger, Giant Armadillo, Jaguar, Puma/Cougar, Gorilla and other claw/grapple specialists are researched. The key invariant is that weapon lethality should be recognized without allowing a 40 kg defensive insectivore to drift into large-predator power bands.