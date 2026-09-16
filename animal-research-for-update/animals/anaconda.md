# Anaconda

## 1. Identity and canonical specimen

- **Common name:** Anaconda
- **Research canon:** Green anaconda / green-anaconda complex
- **Scientific name used for ABS:** *Eunectes murinus* (Linnaeus, 1758), with an explicit taxonomy caveat below
- **Family:** Boidae
- **Living/extinct:** Living
- **Canonical combat specimen:** Representative healthy **adult female**, because green anacondas have extreme female-biased sexual size dimorphism. This is an exception to any male-default shortcut: the female is plainly the larger, heavier, more powerful fighting form.
- **Representative canonical body:** approximately 4.5 m total length and 50.0 kg, deliberately below exceptional/record females and above the much smaller adult male.

### Taxonomy caveat

The familiar label “green anaconda” is currently taxonomically contested. Rivas et al. (2024) proposed a northern lineage as *Eunectes akayima* and retained *E. murinus* for the southern lineage, based primarily on deep genetic divergence and later morphological work. Subsequent work has treated *E. akayima* as a junior synonym of *E. murinus*. Because the live ABS roster simply says `Anaconda`, this research file uses the traditional green-anaconda concept and *E. murinus* as the stable site-facing name, while flagging the dispute for a later taxonomy pass. Production should not silently imply that this controversy is settled.

### Sexual dimorphism and population notes

Green anacondas are among the most sexually size-dimorphic snakes. Females are dramatically larger and heavier than males. Animal Diversity Web summarizes males at roughly 3 m versus females around 6 m in older pooled literature, while the Muséum national d’Histoire naturelle gives roughly 3–5 m for males and 6–8 m for females. These broad institutional ranges include very large animals and should not be mistaken for sex-specific wild means. Published field work is more conservative, and the largest well-documented wild females are far below the mythical 9–12 m claims often repeated online. ABS should use a large but representative adult female rather than a record specimen.

## 2. Physical measurements

### Mass

- **Recommended representative adult-female mass:** **50.0 kg**
- **Context:** Large females can substantially exceed this. Institutional sources cite maxima around 182–250 kg, but these are maxima/upper claims, not representative field means.
- **Confidence:** Moderate. Sex-specific wild means vary by population and sampling, and giant-anaconda folklore badly contaminates tertiary size claims.

### Length

- **Recommended representative total length:** **450.0 cm**
- **Context:** A healthy mature female commonly occupies the large 4–5 m class in field-based summaries. Smithsonian and other institutions cite possible maxima approaching 9 m, but such upper figures should not become the ABS baseline.
- **Confidence:** Moderate-high for the representative 4.5 m class; low for extreme historical claims.

### Height

- **Recommended `height_cm`:** **0.0**
- A conventional standing height is not biologically meaningful for a snake. Do not invent one.

### Speed

- **Recommended `speed_mps`:** **0.0**
- Green anacondas are powerful aquatic movers and comparatively cumbersome on land, but no sufficiently strong primary source was located that justifies a single canonical maximum in m/s. Future schema should separate aquatic and terrestrial locomotion.

### Lifespan

- **Recommended lifespan:** **10.0 years** in the wild as the current site-facing representative value.
- Smithsonian reports about 10 years average in the wild and late 20s in human care. Other zoological sources similarly report roughly 20–30 years captive.

### Bite force

- **Recommended `bite_force_psi`:** **0.0**
- No defensible standardized in-vivo PSI measurement was found. The bite is important primarily as an anchoring mechanism for subsequent coiling and constriction, not as the snake’s main damage engine. Do not import unsupported web claims.

### Natural weapons and defensive structures

- Numerous recurved teeth provide a strong prey-holding system.
- The major weapon is the entire muscular trunk: the snake wraps prey and produces repeated circumferential compression.
- Large girth and mass make an adult female difficult for smaller opponents to dislodge once coils are established.
- Smooth scales and an aquatic body plan aid movement through vegetation and water but are not armor in the mammalian-hide/crocodilian-osteoderm sense.
- Dorsally positioned eyes and nostrils allow much of the body to remain submerged during surveillance and ambush.

## 3. Canonical proposed factual fields

```json
{
  "weight_kg": 50.0,
  "height_cm": 0.0,
  "length_cm": 450.0,
  "speed_mps": 0.0,
  "lifespan_years": 10.0,
  "bite_force_psi": 0.0
}
```

These are representative research recommendations, not record values. The mass and length intentionally represent a formidable healthy adult female without turning an exceptional giant into the default animal.

## 4. Combat biology

### Primary weapon: constriction

The green anaconda is a nonvenomous ambush constrictor. It seizes with the mouth, rapidly loops the body around prey, and tightens the coils. Modern constrictor physiology shows that constriction is not merely passive “suffocation”; compression can rapidly compromise circulation. For ABS purposes, this is a highly matchup-dependent weapon: once several powerful coils are established around a vulnerable torso, the fight changes dramatically, but the snake first has to obtain and maintain that positional control.

### Secondary weapon: anchoring bite

The bite is a delivery and control tool. Recurved teeth help hold struggling prey while the body establishes coils. It can cause laceration and is especially dangerous because a successful bite can transition directly into constriction, but there is no good basis for assigning a fabricated PSI number.

### Offensive mechanics

1. Remain concealed or partially submerged.
2. Strike from short range.
3. Hold with recurved teeth.
4. Throw one or more body loops around the target.
5. Tighten as the prey struggles and continue adjusting coil position.
6. Swallow prey whole after incapacitation.

This makes the anaconda much stronger in a grapple than in an open exchange where a mobile opponent can avoid the initial bite/coils.

### Defense and durability

A 50 kg adult female has substantial absolute mass, muscular tissue and a long body that does not present a single compact torso. Coiling can protect the head, and Smithsonian/ADW describe defensive balling that both shields the head and preserves the ability to strike. However, the snake lacks rigid armor. Severe puncture, tearing, crushing, trampling or attacks to the head remain serious threats.

### Locomotion and maneuverability

The animal is optimized for wetlands. Dorsal eyes/nostrils, heavy musculature and a semi-aquatic body plan make it an effective stealth swimmer and aquatic ambusher. On open dry land, its bulk and elongate body make rapid repositioning less effective than that of many mammalian predators. “Fast swimmer” should not be translated into an inflated general Agility score.

### Endurance and stamina

Green anacondas excel at low-output ambush, waiting and prolonged grappling rather than sustained high-speed pursuit. Ectothermy reduces energetic demand but also limits repeated high-output performance compared with endurance-adapted mammals and birds. Their stamina is therefore moderate in a fight, despite excellent patience.

### Senses

- Forked tongue and vomeronasal/Jacobson’s system provide strong chemical tracking.
- Dorsally positioned eyes and nostrils support near-surface aquatic surveillance.
- Like other boids, they possess specialized sensory biology useful at close range, but this should not be exaggerated into supernatural detection.

### Intelligence and tactics

The anaconda is an effective specialized ambush predator but does not show the flexible social tactics, manipulation, planning or broad problem-solving repertoire of high-intelligence mammals and birds. Its combat strategy is efficient and stereotyped: conceal, seize, coil, compress.

### Hunting behavior

It is primarily an aquatic or waterside ambush hunter. Documented/credible prey categories include fish, birds, reptiles and mammals, with larger individuals capable of taking relatively large vertebrate prey. Shedd notes that anacondas may drag seized prey into water, which can improve positional control and swallowing safety.

### Intraspecific fighting and reproduction

Breeding can involve multiple males around a female. Extreme female-biased size dimorphism is central to the species’ biology, and female cannibalism of males has been reported. The larger female is therefore the appropriate ABS combat representative.

### Predator defense

Juveniles and smaller adults are vulnerable to caimans, jaguars and other predators. Large females face much lower predation pressure. Defensive options include retreat into water or mud, concealment, biting, and coiling into a protective posture.

### Aggression / ferocity

Anacondas are capable of forceful defensive behavior and dangerous predation, but folklore greatly exaggerates routine attacks on people. Human attacks are rare. A 2024 medical report documents a genuine predatory attempt on a child in Brazil in which the snake bit, coiled and maintained constriction despite repeated attempts to remove it, illustrating real persistence without justifying “man-eater” mythology.

### Environmental strengths

- Shallow water, swamps, flooded grasslands, slow rivers and dense bankside vegetation
- Murky environments that reward camouflage and surprise
- Matchups where the opponent must enter close grappling range
- Water deep enough to reduce a terrestrial opponent’s footing

### Environmental limitations

- Open dry ground
- Cold conditions that suppress ectothermic performance
- Environments where a fast opponent can maintain distance
- Matchups against much larger animals that cannot be effectively encircled or controlled

### Major weaknesses

- No rigid armor
- Head and neck remain critical targets
- Poor ranged threat
- Strong dependence on getting the first secure hold
- Large body can be exposed to claws, tusks, horns, trampling or biting during an unsuccessful coil attempt
- Performance is environment- and temperature-dependent

### Matchup archetypes

**Good matchups:** similarly sized or smaller animals that enter close range, have limited cutting/piercing weapons, and cannot prevent the snake from establishing coils.

**Bad matchups:** much larger megafauna, heavily armored opponents, large crocodilians, powerful clawing/biting predators able to attack the head while resisting coils, and highly mobile opponents in open dry terrain.

## 5. Proposed ABS substats

All scores use the absolute 225-animal scale.

| Substat | Score | Evidence-based rationale |
|---|---:|---|
| Size | **56.0** | A representative 50 kg, 4.5 m female is physically large but far below megafauna in mass. Length must not be mistaken for elephant-class body scale. |
| Raw Power | **66.0** | Exceptional trunk musculature and whole-body grappling force give strong absolute power for a 50 kg animal, but not megafaunal force. |
| Weaponry | **72.0** | Recurved bite plus full-body constriction is a dangerous integrated weapon system once contact is secured. |
| Protection | **36.0** | Muscular bulk and coiling help, but there is no shell, osteoderm armor or exceptionally thick protective hide. |
| Toughness | **60.0** | Large muscular body can absorb some trauma and maintain a grapple, but critical head injury and severe tearing remain decisive. |
| Maneuverability | **45.0** | Good close-body control and strong aquatic movement, offset by poor open-ground repositioning and a long exposed body. |
| Endurance | **48.0** | Strong ambush patience and sustained coiling, but not a high-output endurance specialist. |
| Tactics | **46.0** | Highly effective ambush-to-grapple sequence but relatively stereotyped compared with flexible mammalian hunters. |
| Senses | **57.0** | Strong chemical sensing plus aquatic eye/nostril placement provide useful close-range detection. |
| Ferocity | **61.0** | Can bite repeatedly and persist in constriction, but should not inherit sensationalized “man-eater” reputation. |
| Abilities | **72.0** | Constriction plus semi-aquatic ambush are strongly matchup-changing specializations. |

## 6. Proposed six headline ABS ratings

| Rating | Score | Rationale |
|---|---:|---|
| **Attack** | **70.0** | A successful bite-to-coil transition can incapacitate substantial prey. Attack stays well below Alligator 84.0 because the alligator brings much greater directly measured bite force, armored mass and immediate tissue-damage potential. |
| **Defense** | **51.0** | Muscular bulk, large size and defensive coiling are meaningful, but the snake lacks rigid armor and is vulnerable to severe puncture/tearing. |
| **Agility** | **45.0** | Effective body control and aquatic maneuvering, but bulk and terrestrial limitations prevent a high general agility rating. |
| **Stamina** | **48.0** | Excellent patience and adequate grappling persistence, but not sustained high-output locomotor endurance. |
| **Intelligence** | **42.0** | Competent specialized predator with sensory-guided ambush behavior, but limited evidence for broad tactical flexibility. |
| **Special** | **73.0** | Whole-body constriction combined with semi-submerged ambush is a genuinely matchup-changing biological package. |

## 7. Abilities and traits

### Special abilities

1. **Crushing Coil** — After a secure bite, the anaconda can wrap multiple muscular loops around a target and repeatedly tighten them, converting close contact into circulatory/compressive incapacitation. The ability is powerful but requires successful positional control.
2. **Waterline Ambush** — Dorsally placed eyes and nostrils, camouflage and semi-aquatic locomotion allow the snake to remain largely submerged before launching a short-range attack, giving it a major first-contact advantage in wetlands.

### Unique traits

1. **Heavyweight Serpent** — Green anacondas are among the heaviest living snakes, with females developing extraordinary girth and muscular mass relative to most serpents.
2. **Female Giant** — Extreme female-biased sexual size dimorphism means the adult female, not the male, is the physically dominant form and the correct ABS combat representative.

## 8. Expanded profile content

### Habitat

Tropical freshwater wetlands, swamps, shallow slow-moving rivers and streams, flooded grasslands and rainforest waterways. Green anacondas spend extensive time in or immediately beside water.

### Geographic range

Traditionally described across northern/tropical South America, including major Amazon and Orinoco systems and adjacent wetlands. Exact species-level range boundaries should be revisited if ABS adopts the proposed *E. akayima* split.

### Diet

Carnivorous. Depending on body size and opportunity, prey includes fish, birds, reptiles and mammals. Large individuals can tackle relatively large vertebrates, but viral stories about routine predation on humans are not representative.

### Ecology

A large semi-aquatic ambush predator. Its ecological niche is built around concealment, short-range seizure and constriction rather than long pursuit. Large adults have few regular predators; juveniles and smaller adults are much more vulnerable.

### Social structure

Mostly solitary outside reproduction. Breeding can involve aggregations of multiple males around a female.

### Reproduction and life history

Green anacondas bear live young. Institutional accounts commonly describe litters in the tens. Large female body size is tightly linked to reproductive biology and fecundity.

### Conservation

Smithsonian currently presents the green anaconda as **Least Concern**, while older databases may show Not Evaluated. CITES lists anacondas in Appendix II. Taxonomic changes complicate older range-wide status summaries, so a future production pass should confirm the status under whichever species concept ABS adopts.

### Major adaptations

- Extreme female body size and girth
- Whole-body constriction
- Recurved prey-holding teeth
- Dorsal eyes and nostrils
- Aquatic camouflage
- Strong chemical sensing
- Ability to remain concealed in shallow wetland habitats

### Human interaction

The species is culturally famous and often sensationalized. Actual serious attacks are rare, though a sufficiently large snake is physically capable of dangerous constriction. Habitat loss, persecution and trade can affect populations, and fear-driven killing is a recurring human-conflict issue.

### Fun facts

- The green anaconda is generally considered the **heaviest living snake**, even though the reticulated python can exceed it in length.
- Females are dramatically larger than males, one of the most striking examples of female-biased size dimorphism among snakes.
- Its eyes and nostrils sit high on the head, allowing it to monitor the surface while much of the body remains submerged.
- An anaconda’s bite is not the finale of its attack. It is often the anchor that lets the body establish the truly dangerous weapon: the coils.
- Individual spot patterns can help distinguish snakes, functioning as useful natural identification marks for researchers.
- Giant-anaconda folklore is full of poorly verified length claims. ABS should distinguish documented animals from stories.

### Concise site-ready summary

The green anaconda is a heavyweight semi-aquatic constrictor built to turn one close-range mistake into a crushing grapple. A large adult female combines recurved prey-holding teeth, immense trunk musculature, aquatic camouflage and waterline ambush tactics. It is terrifying once its coils are established, but it lacks rigid armor, has limited open-ground mobility and depends heavily on securing first contact.

### Detailed narrative profile

Anaconda fights are positional. The snake does not need claws, horns or venom because nearly its entire body is a weapon. From shallow water or dense cover, a green anaconda can expose little more than its eyes and nostrils, wait for an opponent to enter striking range, seize with recurved teeth and immediately begin wrapping. Each additional loop improves control and makes escape more difficult. Against an opponent near or below its own size that cannot effectively attack the head, this can become a losing spiral very quickly.

That strength is also the source of important limitations. A 4.5 m snake is long, but length is not the same as mass or armor. The representative ABS female is around 50 kg, placing her far below elephants, hippos, rhinos and other megafauna in absolute body scale. She also lacks the osteoderms of a crocodilian or the compact mobility of a cat. On dry open ground, an opponent that avoids the first strike can exploit the anaconda’s comparatively awkward repositioning. A failed coil can leave large sections of the body exposed to teeth, claws, horns or trampling.

Water changes the matchup. The anaconda becomes stealthier, better supported and harder for many terrestrial animals to read or maneuver against. Its dorsal eyes and nostrils are classic aquatic-ambush adaptations, and its camouflage makes the first contact difficult to predict. This environment dependence is why ABS should not reduce the animal to a single “strong snake” stereotype. It is a specialized wetland grappler whose power spikes when terrain lets it force close contact.

### Useful future structured fields

- `sex_used_for_profile`
- `measurement_convention`
- `aquatic_speed_mps`
- `terrestrial_speed_mps`
- `constriction_pressure_kpa` only if supported by a primary species-specific measurement
- `bite_force_newtons` where measured
- `primary_environment`
- `ambush_dependency`
- `taxonomy_status`
- `source_confidence`

## 9. Image Asset

- **Target local asset:** `animal-research-for-update/images/anaconda.png`
- **Status:** `SOURCE FOUND - PNG COMMIT PENDING`
- **Primary candidate:** USGS “Green Anaconda”, photographed in the native range in Brazil
- **Source page:** https://www.usgs.gov/media/images/green-anaconda
- **Source notes:** Real photograph, native-range green anaconda, U.S. Geological Survey page marks the image **Public Domain**. The page does not identify sex, so the later production-image pass should visually/metadata-review whether it is a suitably large adult female before promotion.
- **High-resolution fallback:** Wikimedia Commons, `Eunectes murinus (1).jpg`, 3602 × 2371, public domain
- **Fallback source page:** https://commons.wikimedia.org/wiki/File:Eunectes_murinus_(1).jpg
- **Fallback direct-image resolver:** https://commons.wikimedia.org/wiki/Special:Redirect/file/Eunectes%20murinus%20(1).jpg
- **Processing requirement:** Later pipeline should make a non-generative clean background cutout and save a genuine transparent PNG. Do not use an illustration or generated replacement.

The current GitHub connector safely writes UTF-8 text but does not provide a safe binary-image upload action, so no fake `.png` file is committed.

## 10. Evidence and source ledger

| Source | URL | Supports | Reported finding / context | Confidence / caveat |
|---|---|---|---|---|
| Smithsonian’s National Zoo, Green anaconda | https://nationalzoo.si.edu/animals/green-anaconda | Taxonomy, size maxima, habitat, range, lifespan, behavior, conservation | Females much larger; up to 9 m/250 kg cited as upper size; ~10 y wild lifespan; slow freshwater habitats; defensive coiling | High institutional source, but upper size is a maximum, not representative |
| Animal Diversity Web, *Eunectes murinus* | https://animaldiversity.org/accounts/Eunectes_murinus/ | Dimorphism, anatomy, habitat, predation, defensive behavior | Strong female-biased dimorphism; dorsal nostrils/eyes; males ~3 m vs females ~6 m in older summary; large females face less predation | Good secondary academic synthesis; some older giant-size figures should be treated cautiously |
| Muséum national d’Histoire naturelle | https://www.mnhn.fr/fr/anaconda-vert | Sex-specific broad length ranges, mass, lifespan, hunting | Females 6–8 m, males 3–5 m, 70–100 kg broad profile; aquatic ambush/constriction | Strong institution, but size ranges are broad and not means |
| Shedd Aquarium | https://www.sheddaquarium.org/animals/reptiles/anaconda | Aquatic ecology, prey, upper size, dragging prey into water | Semi-aquatic ambush, mammals/reptiles/birds/fish; up to 8 m/182 kg | Strong institution; upper values are maxima |
| Rivas et al. 2024, Diversity | https://doi.org/10.3390/d16020127 | Taxonomy controversy | Proposed northern *E. akayima* distinct from southern *E. murinus* based on deep genetic divergence | Peer reviewed; species split remains contested |
| Rivas et al. 2024, Diversity follow-up | https://doi.org/10.3390/d16070418 | Taxonomy clarification, dimorphism | Formal clarification/description of *E. akayima* and morphological/SSD discussion | Peer reviewed; contested by other taxonomic treatments |
| Onary et al. 2025, Journal of Vertebrate Paleontology | https://www.tandfonline.com/doi/abs/10.1080/02724634.2025.2572967 | Current taxonomy caveat | Treats *E. akayima* as junior synonym of *E. murinus* following contrary taxonomic view | Peer reviewed; demonstrates dispute is unresolved |
| Haddad & Duarte 2024 | https://journals.sagepub.com/doi/abs/10.1177/10806032241230242 | Human interaction, persistence of constriction | Documented predatory attempt on a child; snake maintained bite/coils despite attempts to remove it | Peer-reviewed case report; single event, not population-level aggression evidence |
| USGS Green Anaconda image | https://www.usgs.gov/media/images/green-anaconda | Image candidate | Real native-range Brazil photograph; page marks Public Domain | Excellent provenance; sex not stated |
| Wikimedia Commons `Eunectes murinus (1).jpg` | https://commons.wikimedia.org/wiki/File:Eunectes_murinus_(1).jpg | High-resolution image fallback | 3602×2371 real photograph, public domain | Strong reusable fallback; sex not stated |

## 11. Confidence and caveats

- **High confidence:** species is a huge semi-aquatic constrictor; females greatly exceed males; constriction and ambush are the primary combat system; eyes/nostrils are dorsally positioned; wetlands are its optimal environment.
- **Moderate confidence:** `50.0 kg` and `450.0 cm` as a representative ABS adult female. These are deliberately editorial representative values chosen within credible adult-female biology rather than claimed field means.
- **Low confidence / intentionally unset:** top speed and bite PSI. Keep both `0.0` until strong measurement data exists.
- **Taxonomic uncertainty:** the proposed northern/southern green-anaconda split remains disputed. ABS should preserve a taxonomy note instead of presenting one side as settled fact.
- **Image caveat:** the strongest reusable candidates found do not explicitly identify sex. Production should prefer a verified adult female if a better source becomes available.

## 12. Cross-animal calibration notes

- **Versus African Elephant:** Anaconda must remain vastly lower in Size, Raw Power, Attack and Defense. A long snake is not megafaunal merely because its body length is several meters.
- **Versus African Lion:** Anaconda has less open-ground mobility and immediate tissue-damage capability, but a more decisive specialized grapple if full coils are established. Its Special should exceed the lion because constriction plus aquatic ambush is a rarer matchup-changing mechanism.
- **Versus African Wild Dog:** Anaconda has far greater single-animal grappling power but much lower sustained pursuit, social tactics and endurance mobility.
- **Versus Albatross:** Anaconda massively exceeds it in direct grappling Attack/Defense, while albatross remains vastly superior in long-duration travel Stamina.
- **Versus Alligator:** Alligator remains clearly higher in Attack and Defense because of directly measured extreme bite force, compact armored body and osteoderms. Anaconda is more flexible as a grappler but should not outrank a large alligator in raw damage or protection.
- **Versus Alpaca:** Anaconda is lighter than some alpacas but far better armed for lethal one-on-one combat. This is a useful reminder that Attack is not a mass ranking.
- **Future normalization:** Revisit Attack 70.0 and Raw Power 66.0 after Green Anaconda, Reticulated Python, Python, Boa Constrictor, Saltwater Crocodile, Jaguar, Gorilla, Hippopotamus and Megalodon are all represented. The biggest risk is constrictor hype inflating a 50 kg snake toward megafaunal force tiers.
