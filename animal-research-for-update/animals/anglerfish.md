# Anglerfish Research Overhaul

## 1. Identity and canonical specimen

- **Common site name:** Anglerfish
- **Research canon:** Krøyer's deep-sea anglerfish / northern seadevil
- **Scientific name:** *Ceratias holboelli* Krøyer, 1845
- **Family:** Ceratiidae
- **Status:** Living
- **Canonical combat specimen:** representative healthy **adult female**, approximately 77 cm total length. Females are the only sensible combat form because this species has extreme sexual dimorphism and sexual parasitism. FishBase reports females commonly around 77 cm TL and up to 120 cm TL, while free-living males are extraordinarily small and males later attach to females.
- **Taxonomic note:** The roster label `Anglerfish` is extremely broad. Lophiiformes contains many very different fishes. This research explicitly standardizes the ABS entry to *Ceratias holboelli*, a large bathypelagic ceratioid with the iconic lure and extreme female/male dimorphism.

### Sexual dimorphism and population notes

This is one of the most extreme vertebrate examples of sexual dimorphism. Adult females are large predatory fishes, while males are dwarfed and adapted primarily to locate and attach to females. Permanent attachment creates tissue fusion and shared circulation. The combat profile must therefore use a female and should never average male and female body sizes.

The species is circumglobal in tropical to temperate oceans, with records extending into boreal/subarctic waters. Geographic variation is poorly characterized compared with common shallow-water fishes.

## 2. Physical measurements

### Length

- **Canonical recommendation:** **77.0 cm total length**
- **Female common length:** 77 cm TL
- **Female maximum:** 120 cm TL
- **Male/free-living male values:** radically smaller and not suitable for the canonical combat specimen
- **Confidence:** High for length scale

FishBase directly reports a common female length of 77 cm TL and maximum female length of 120 cm TL. A published Spanish adult female specimen measured 480 mm standard length, demonstrating that mature females substantially below the maximum are normal.

### Weight / mass

- **Canonical recommendation:** **0.0 kg pending defensible adult-female mass data**
- **Confidence:** Low

No sufficiently authoritative sex-specific mass dataset was located in this pass. A tertiary source gives approximately 13.1 kg, but this is not strong enough to establish an ABS canonical value. Do not infer mass from maximum length or import the tertiary figure as fact. A future morphometric or museum-record search should resolve this field.

### Height

- **Canonical recommendation:** **0.0 cm**

Fish body depth is more meaningful than standing height. ABS should eventually add a `body_depth_cm` field for fishes rather than force a terrestrial height convention onto this animal. One published 480 mm SL female had a body depth of 200 mm, showing the species' deep-bodied form.

### Speed

- **Canonical recommendation:** **0.0 m/s**
- **Confidence:** Low

No reliable measured maximum swimming-speed study for *C. holboelli* was found. The species is an ambush-oriented bathypelagic predator, and generic web claims should not be promoted into a canonical top speed.

### Lifespan

- **Canonical recommendation:** **0.0 years**
- **Confidence:** Low

A defensible species-specific lifespan estimate was not located. Deep-sea ecology alone is not enough to manufacture a lifespan.

### Bite force

- **Canonical recommendation:** **0.0 PSI**
- **Confidence:** Low

The species has a large mouth and numerous inward-oriented teeth useful for prey retention, but no standardized measured bite-force value was found. Do not convert morphology into invented PSI.

### Natural weapons and specialized structures

- Large mouth relative to the head and body
- Numerous pointed, inward-oriented teeth that resist prey escape
- Modified first dorsal spine forming the **illicium**, terminating in the luminous **esca**
- Very dark body coloration suited to deep-water concealment
- Flexible predatory feeding apparatus suited to capturing scarce prey

A published 480 mm SL adult female had a 94.2 mm illicium, about 19.6% of standard length, illustrating how prominent the lure apparatus can be.

### Defensive structures

No heavy armor, shell, thick hide, major spines, or robust megafaunal defensive structure is present. Its main defenses are environmental: darkness, depth, concealment, low encounter rates, and the difficulty many organisms have operating in its pressure/depth regime.

## 3. Canonical proposed factual fields

```text
weight_kg: 0.0
height_cm: 0.0
length_cm: 77.0
speed_mps: 0.0
lifespan_years: 0.0
bite_force_psi: 0.0
```

`0.0` here means no sufficiently defensible canonical value was established during this pass, not biological absence unless the field itself is inapplicable. Length is the strongest current physical field.

### Recommended future structured fields

```text
canonical_sex: female
body_length_type: total_length
female_common_length_cm: 77.0
female_max_length_cm: 120.0
habitat_min_depth_m: 400
habitat_max_depth_m: 4400
usual_habitat_min_depth_m: 400
usual_habitat_max_depth_m: 2000
sexual_parasitism: true
bioluminescent_lure: true
```

## 4. Combat biology

### Primary weapon

The primary direct weapon is the mouth. The jaws and recurved/inward-pointing teeth are built to seize prey and make escape difficult. This is effective against prey within the fish's size envelope but does not translate into high absolute damage against large terrestrial or marine roster animals.

### Secondary weapon: deception and lure

The illicium and luminous esca are the defining predatory system. In darkness, the lure can draw prey into striking distance without an energetically expensive pursuit. This is highly valuable in the deep sea, where food encounters can be rare.

### Offensive mechanics

The female is an ambush predator rather than a pursuit specialist. The practical sequence is concealment in darkness, lure presentation, close approach by prey, rapid engulfing/seizing, and retention by the teeth. Its offense is therefore strongly environment-dependent. In an illuminated neutral arena against an opponent that recognizes the fish, much of the lure's advantage disappears.

### Defense and durability

Absolute physical defense is low. A 77 cm soft-bodied fish cannot trade trauma with crocodilians, large sharks, big cats, giant constrictors, or megafauna. Deep-water adaptation is ecologically impressive but should not be mis-scored as armor.

### Locomotion and maneuverability

The animal can position itself in three-dimensional water, but there is no evidence for exceptional high-speed pursuit or acrobatic maneuverability. It should not receive inflated Agility from being a fish. Its locomotor strategy is compatible with energy conservation and ambush.

### Endurance

Evidence is insufficient for a strong species-specific endurance claim. Bathypelagic life rewards low-energy efficiency, but metabolic economy is not the same as demonstrated high sustained-output performance. Stamina should therefore remain modest.

### Senses

Deep-sea ceratioids are specialized for a low-light, low-encounter environment. Sensory biology is important to prey detection and especially mate finding, but the present pass found stronger evidence for the reproductive system than quantitative sensory performance. Do not overstate vision or smell without species-specific measurements.

### Intelligence and tactics

The lure-based ambush strategy is specialized and effective, but there is no evidence that *C. holboelli* possesses high flexible problem-solving intelligence. The behavior is better represented under Special/Abilities than by inflating Intelligence.

### Hunting behavior

It is a deep-water predator that minimizes pursuit costs by bringing prey close. The dark body and luminous lure form a combined stealth/deception system. Its feeding morphology emphasizes securing prey once the strike occurs.

### Intraspecific fighting

There is no strong evidence that adult females are specialized for violent territorial combat. Male biology is overwhelmingly shaped by mate finding and attachment rather than combat between similarly sized adults.

### Predator defense

The strongest predator defense is avoiding detection and occupying extreme depths. The species has been reported from the diets/stomachs of larger oceanic predators, so it is clearly not physically invulnerable.

### Aggression / ferocity

Predatory commitment toward edible prey can be strong, but this should not be confused with generalized willingness to fight large dangerous opponents. Ferocity is therefore moderate-low on the full ABS scale.

### Environmental strengths

- Darkness strongly improves concealment and lure effectiveness.
- Deep water excludes many potential opponents and predators.
- Three-dimensional water permits lure positioning and ambush angles unavailable on land.
- Low-food environments reward the energy-efficient sit-and-lure strategy.

### Environmental limitations

- On land it is functionally helpless.
- In bright shallow water, lure-based deception loses much of its value.
- Pressure/temperature specialization means a generic neutral arena poorly represents its natural performance.
- It lacks armor and high absolute mass.

### Major weaknesses

1. Low absolute body mass relative to serious roster combatants.
2. Little structural armor.
3. Specialized ambush offense rather than high-speed pursuit.
4. Extreme dependence on aquatic habitat.
5. Lure is less useful against opponents that do not interpret it as prey.
6. Sparse direct performance data creates uncertainty around speed, endurance, and force.

### Matchup archetypes

**Good matchups:** small aquatic prey-sized opponents susceptible to lure/ambush; organisms with poor ability to detect the predator in darkness; small soft-bodied fishes or invertebrates that can be engulfed or held by the teeth.

**Bad matchups:** large sharks, crocodilians, marine mammals, large predatory fishes, armored animals, highly mobile opponents too large to swallow, and virtually any terrestrial matchup outside water.

## 5. Proposed ABS substats

All scores are absolute across the 225-animal roster.

| Substat | Score | Justification |
|---|---:|---|
| Size | 18.0 | A 77 cm female is substantial for a ceratioid but small compared with major vertebrate combatants. |
| Raw Power | 14.0 | No evidence of high absolute muscular/mechanical force. |
| Weaponry | 32.0 | Large mouth plus numerous inward-pointing teeth are effective on prey, but lack the force/reach of elite roster weapons. |
| Protection | 8.0 | No heavy armor or robust defensive covering. |
| Toughness | 18.0 | Deep-sea physiology is specialized, but trauma resistance should not be inferred from depth tolerance. |
| Maneuverability | 39.0 | Functional three-dimensional aquatic positioning, but no evidence for exceptional speed or turning performance. |
| Endurance | 34.0 | Energy-efficient ecology is plausible, but high sustained-output endurance is unproven. |
| Tactics | 43.0 | Lure-based ambush is highly specialized and effective in context, but behaviorally narrow. |
| Senses | 52.0 | Strong deep-sea specialization is expected, but species-specific quantitative evidence remains limited. |
| Ferocity | 34.0 | Effective predator of suitable prey, not a demonstrated generalized fighter. |
| Abilities | 70.0 | Bioluminescent lure and extreme deep-sea specialization are genuinely unusual matchup-changing mechanisms. |

## 6. Proposed six headline ABS ratings

- **Attack: 27.0** — Dangerous to appropriately sized prey through a large grasping mouth and teeth, but low absolute force and mass keep it far below serious large predators.
- **Defense: 16.0** — Environmental concealment helps avoid attacks, but physical protection is poor.
- **Agility: 39.0** — Adequate aquatic control for ambush positioning, without evidence for exceptional acceleration or maneuverability.
- **Stamina: 34.0** — Likely economical rather than high-output; direct endurance data are lacking.
- **Intelligence: 35.0** — Specialized predatory behavior without evidence of advanced flexible cognition.
- **Special: 76.0** — The luminous lure, abyssal concealment, and extraordinarily specialized reproductive/deep-sea biology make Special the clear standout category. The score reflects matchup-changing biology, not raw combat strength.

## 7. Abilities and traits

### Special abilities

1. **Abyssal Lantern** — The modified dorsal spine and luminous esca provide a biological lure that can draw prey toward the mouth in darkness. Its matchup value rises sharply in dark aquatic environments where visual deception is effective.
2. **Blackwater Ambush** — Dark coloration, deep-water habitat, and an energy-conserving ambush strategy make the female difficult for suitable prey to detect before close-range attack. This is concealment and positioning, not magical invisibility.

### Unique traits

1. **Living Mate Fusion** — Males can permanently attach to females and establish anatomical/tissue integration. Research on sexually parasitic anglerfishes shows major immune-system modifications associated with tolerating this fusion.
2. **Extreme Female Giantism** — The combat-capable female is enormously larger than the reproductive male form, making sex selection essential when defining the species' ABS specimen.

## 8. Expanded profile content

### Habitat

Bathypelagic/open-ocean deep water. FishBase reports 400 to 4,400 m, usually about 400 to 2,000 m.

### Geographic range

Circumglobal across tropical and temperate oceans, with adults also recorded in boreal/subarctic waters. FishBase gives a broad latitudinal range of roughly 67°N to 45°S.

### Diet

Predatory. Exact species-level diet composition is less well documented in accessible authoritative sources than its morphology and reproduction. The large mouth, inward-oriented teeth, and luminous lure establish an ambush-predator feeding mode. Production copy should avoid unsupported lists of specific prey species unless sourced separately.

### Ecology

*C. holboelli* lives where sunlight is absent or extremely weak and prey encounters are sparse. Its body plan is therefore built around finding or attracting rare food rather than chasing continuously. It is one of the largest members of Ceratiidae.

### Social structure

Not social in the conventional pack/herd sense. The extraordinary exception is reproductive attachment: tiny males locate females and may become permanently fused to them.

### Reproduction / life history

Females are oviparous. FishBase notes planktonic larvae and that eggs are presumably released in floating gelatinous rafts. Sexual parasitism solves a fundamental deep-sea problem: finding a mate in an enormous, sparsely populated habitat. Research published in *Science* in 2020 showed that permanent male-female attachment in deep-sea anglerfishes is associated with major modifications to adaptive immune functions.

### Conservation status

FishBase reports **Least Concern**, based on the IUCN assessment dated 9 May 2013. The species is widely distributed and not presently treated as threatened globally.

### Major adaptations

- Luminous prey lure
- Dark deep-sea coloration
- Oversized predatory mouth
- Inward-pointing prey-retaining teeth
- Low-encounter ambush ecology
- Extreme sexual dimorphism
- Sexual parasitism and tissue fusion
- Immune-system modifications associated with reproductive fusion

### Human interaction

Direct interaction with humans is minimal because the fish normally occupies deep oceanic water. Most human knowledge comes from trawled/captured specimens, museum collections, taxonomy, deep-sea research, and comparative evolutionary studies rather than routine live observation.

### Fun facts

- A common adult female length is around **77 cm**, while the reproductive male form can be tiny by comparison.
- Females can reach about **120 cm**, making *C. holboelli* unusually large among deep-sea ceratioids.
- A documented 48 cm standard-length female had an illicium about **9.42 cm** long, nearly one-fifth of standard length.
- The species has been recorded as deep as **4,400 m**.
- Male-female fusion is so extensive that anglerfish sexual parasitism has become an important model for understanding immune tolerance.
- The famous grotesque appearance is functional: a huge mouth and retaining teeth are valuable where missing a rare meal can be costly.

### Concise site-ready summary

Krøyer's deep-sea anglerfish is a bathypelagic ambush predator built for darkness rather than open combat. The large female uses a luminous lure to bring scarce prey within reach of a wide, tooth-lined mouth. Its physical Attack and Defense are modest on an absolute roster scale, but its specialized deep-sea biology, bioluminescent deception, and extraordinary male-female reproductive fusion give it one of the stranger Special profiles in the database.

### Detailed narrative profile

The name “anglerfish” covers many unrelated-looking members of Lophiiformes, so ABS needs a precise representative. *Ceratias holboelli* is a strong choice because it embodies the classic deep-sea anglerfish concept while also being among the largest warty seadevils. The canonical animal is an adult female. That choice is not cosmetic: the sexes effectively live different biological lives.

A female drifts and maneuvers through dark midwater hundreds to thousands of meters below the surface. In this environment, continuous pursuit is expensive and encounters with prey can be rare. The anglerfish solves that problem by turning part of its dorsal fin into fishing equipment. Its illicium projects a luminous esca near the mouth, creating a close-range target for other organisms in a habitat with almost no sunlight. When prey comes close enough, the fish can use its oversized mouth and pointed inward-oriented teeth to seize and retain it.

That system is formidable as an ecological specialization but should not be confused with high absolute combat power. A roughly 77 cm fish with no heavy armor and no demonstrated extreme bite force is nowhere near the damage output or durability of an alligator, lion, giant constrictor, or elephant. ABS therefore gives it restrained Attack and Defense scores. Its real competitive identity is Special: it changes the information environment around a matchup by using light and concealment in darkness.

Reproduction is even stranger. The male is dwarfed and built to solve the problem of locating a female in the enormous deep ocean. In sexually parasitic anglerfishes, a male can attach to a female and the pair can fuse tissues and circulation. Genomic research has shown that these reproductive systems are associated with extraordinary changes in adaptive immunity, helping explain how the female tolerates what would resemble a permanent tissue graft in other vertebrates.

For battle simulation, environment matters more for this species than for many roster animals. In deep black water against small prey, the anglerfish's lure, camouflage, and three-dimensional ambush geometry are meaningful advantages. In bright water against a large informed opponent, its most distinctive weapon loses much of its deception value. On land, it is effectively nonfunctional. That extreme environmental dependence should remain explicit rather than being hidden inside inflated universal scores.

## 9. Image Asset

- **Status:** `SOURCE FOUND - PNG COMMIT PENDING`
- **Preferred source page:** https://science.mnhn.fr/institution/mnhn/collection/ic/item/2003-1598?listIndex=261
- **Direct museum image:** https://mediaphoto.mnhn.fr/media/1406026447359SPLtqrm8BPSy2tZO
- **Specimen verification:** Muséum national d’Histoire naturelle identifies specimen MNHN-IC-2003-1598 as *Ceratias holboelli*, **female**, **adult**, collected west of Ireland at 1,230 m.
- **Why selected:** This is a real photograph of an explicitly verified adult female of the exact canonical species, not an illustration or AI reconstruction. It therefore satisfies the biological specimen requirement better than the many historical illustrations online.
- **Target asset path:** `animal-research-for-update/images/anglerfish.png`
- **Processing note:** The current GitHub text-content connector cannot safely commit a binary PNG. A later asset pass should obtain the museum image at the best permitted resolution, verify reuse terms, perform non-generative background removal, and run the repository's provenance/promotion pipeline before production use.
- **Transparent fallback note:** Wikimedia Commons lists a `Ceratias holbolli transparent.png`, but it appears derived from a museum-specimen photograph and should not be promoted until its exact source/license and adult-female identity are verified.

## 10. Evidence and source ledger

### FishBase — *Ceratias holboelli* summary
URL: https://www.fishbase.se/summary/Ceratias-holboelli.html

Supports: taxonomy; bathypelagic habitat; 400–4,400 m depth range and usual 400–2,000 m range; circumglobal distribution; 77 cm common female length; 120 cm maximum female length; sexual parasitism; oviparity; planktonic larvae; IUCN Least Concern status.

Confidence: **High** for database-reported fields, with original references retained by FishBase.

### Drioli & Vigne / Graellsia adult-female capture record
URL: https://www.researchgate.net/publication/270078295_Captura_demersal_de_una_hembra_adulta_del_pez_ceratioideo_Ceratias_holboelli_Kroyer_1845_Lophiiformes_Ceratiidae_con_un_macho_parasito_en_la_costa_del_norte_de_Espana_golfo_de_Vizcaya_NE_Atlantico

Supports: directly measured adult female of 480 mm SL, body depth 200 mm, illicium 94.2 mm (19.6% SL), attached 12.5 mm male; discussion of depth occurrence.

Confidence: **High** for specimen measurements. ResearchGate is used as an accessible copy/discovery route for the published paper.

### Swann et al. 2020, *Science* — The immunogenetics of sexual parasitism
URL: https://pubmed.ncbi.nlm.nih.gov/32732279/
DOI: https://doi.org/10.1126/science.aaz9445

Supports: permanent male-female anatomical joining in deep-sea anglerfishes and major evolutionary modifications/losses in adaptive immune functions associated with sexual parasitism.

Confidence: **Very high**, peer-reviewed primary research.

### University of Washington summary of Swann et al.
URL: https://environment.uw.edu/news/2020/08/deep-sea-anglerfishes-have-evolved-a-new-type-of-immune-system/

Supports: accessible institutional explanation of tissue fusion, shared circulation, reproductive significance, and immune-system findings.

Confidence: **High**, university summary tied to the primary paper.

### Max Planck Society — Immune functions traded in for reproductive success
URL: https://www.mpg.de/15212439/immune-functions-traded-in-for-reproductive-success

Supports: independent institutional explanation of sexual parasitism and immune-system modification.

Confidence: **High**.

### Muséum national d’Histoire naturelle specimen MNHN-IC-2003-1598
URL: https://science.mnhn.fr/institution/mnhn/collection/ic/item/2003-1598?listIndex=261
Image: https://mediaphoto.mnhn.fr/media/1406026447359SPLtqrm8BPSy2tZO

Supports: real photographic image candidate; exact species; specimen explicitly recorded as **female** and **adult**; North Atlantic collection data and 1,230 m collection depth.

Confidence: **Very high** for specimen identity/sex/stage.

### National Museum of Marine Biology & Aquarium specimen record
URL: https://helloocean.nmmba.gov.tw/nmmba_front/SpecimenDetail.aspx?id=56285

Supports: independent museum specimen of *C. holboelli*, 210 mm standard length, confirming museum occurrence and measurement conventions.

Confidence: **High**.

### Wikimedia Commons category
URL: https://commons.wikimedia.org/wiki/Category:Ceratias_holboelli

Supports: image-discovery audit and existence of historical illustrations, museum photographs, and a transparent derivative. Not used as the main biological source.

Confidence: **Moderate-high** for media metadata; individual files require their own provenance review.

## Confidence and caveats

- **High confidence:** species identity, extreme female/male dimorphism, canonical use of adult female, female length scale, bathypelagic depth range, circumglobal distribution, oviparity, sexual parasitism, and immune-system association.
- **Moderate confidence:** qualitative combat interpretation of mouth/teeth/lure and environment dependence.
- **Low confidence / intentionally unresolved:** adult female mass, top speed, lifespan, standardized bite force, quantitative sensory performance, and sustained-output endurance.
- Do not fill unresolved fields from unsourced popular fact pages simply to avoid zeros.
- The generic site label `Anglerfish` should eventually display the canonical species name so users do not assume the ratings represent every anglerfish.

## 11. Cross-animal calibration notes

Compared with the seven already-researched animals:

- **African Elephant:** Anglerfish must be dramatically lower in absolute Attack, Defense, Size, Raw Power, and Toughness. Its only clear comparative advantage is specialized deep-water biology and lure-based Special.
- **African Lion:** Lion has vastly greater universal damage potential, terrestrial mobility, physical durability, and combat flexibility. Anglerfish should not approach lion Attack simply because its teeth look dramatic.
- **African Wild Dog:** Wild dog is much stronger in sustained locomotion, group tactics, and general combat versatility. Anglerfish exceeds it in unusual biological specialization, not conventional combat.
- **Albatross:** Both are highly environment-specialized oceanic animals. Albatross is the much stronger endurance anchor; anglerfish should not inherit high Stamina merely from living in an extreme habitat.
- **Alligator:** Alligator's measured bite force, armor, mass, and grappling mechanics put it in a completely different physical tier. This is an important anti-inflation comparison.
- **Alpaca:** Despite the anglerfish's predatory morphology, an adult alpaca has far greater absolute body mass and terrestrial force. Anglerfish's Attack advantage is mainly against prey-sized aquatic targets, while its Special score is much higher.
- **Anaconda:** Anaconda has far greater absolute grappling/constriction power and physical matchup relevance against medium-large vertebrates. Anglerfish is more biologically unusual but much weaker in direct combat.

### Audit flags for later normalization

- **Special 76.0** is deliberately high relative to physical scores. Revisit after electric eel, octopus, cone snail, venomous snakes, bombardier beetle, mantis shrimp, and other specialist animals establish the full Special distribution.
- **Attack 27.0** should remain low unless future force data demonstrate unexpectedly high absolute jaw performance.
- **Agility 39.0 / Stamina 34.0** are provisional because species-specific locomotor performance data are sparse.
- Do not let the visual intimidation of deep-sea anglerfishes create score inflation.