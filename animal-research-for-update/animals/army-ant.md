# Army Ant Research Overhaul

## 1. Identity and canonical specimen

- **Common name:** Army Ant / Burchell's army ant
- **Scientific name:** *Eciton burchellii* (Westwood, 1842)
- **Family:** Formicidae; subfamily Dorylinae
- **Status:** Living
- **Exact ABS animal represented:** The classic New World swarm-raiding army ant, standardized here as *Eciton burchellii* rather than treating the many unrelated army-ant species worldwide as interchangeable.
- **Canonical combat specimen:** A representative healthy adult **major/soldier worker**, the colony caste specialized for defense. Powell & Franks measured *E. burchellii* majors at **9.3–11.4 mg** dry mass. A midpoint-scale **10.4 mg dry mass** and about **10.5 mm body length** are used as the combat baseline, while explicitly recognizing that live mass would be higher than dry mass.
- **Why a soldier:** Workers are sterile females. Majors are the largest worker caste and bear enlarged sickle-shaped mandibles specialized for defense. This follows the ABS rule to use the materially stronger/fighting form without pretending the queen is a normal combatant.
- **Worker polymorphism:** The species has extreme worker polymorphism. Animal Diversity Web reports workers about **3–12 mm** long. Most raiding/transport workers are smaller than majors, and majors are primarily defenders rather than prey carriers.
- **Sexual/caste dimorphism:** The reproductive queen is much larger than workers but is not the primary fighting form. Males are reproductive rather than the canonical combat caste. Caste, more than sex, is the meaningful combat distinction here.

## 2. Physical measurements

### Mass

Powell & Franks (Functional Ecology, 2006) directly measured constant dry weight across Eciton worker size classes. *E. burchellii* majors were **9.3–11.4 mg dry mass**.

- **Canonical research mass:** **0.0000104 kg dry mass** (10.4 mg)
- **Measured major dry-mass range:** **0.0000093–0.0000114 kg**
- **Important caveat:** This is dry mass, not fresh/live body mass. It is the strongest direct caste-specific measurement found, so the report preserves the measurement basis rather than inventing a wet-mass conversion.
- **Confidence:** High for dry mass; low for exact live mass.

### Length

Animal Diversity Web reports *E. burchellii* workers at **3–12 mm**. The soldier/major occupies the upper end of that range.

- **Canonical soldier length:** **1.1 cm** (10.5 mm representative recommendation)
- **Worker range:** **0.3–1.2 cm**
- **Confidence:** High for worker range, moderate-high for the representative major recommendation.

### Height

No standardized standing-height field is biologically useful for this ant and no strong canonical measurement was found.

- **Canonical `height_cm`: 0.0**

### Speed and locomotion

Army ants are fast, highly coordinated terrestrial runners at insect scale, but colony raid-front advance is not individual top speed. AntWiki describes a raiding column advancing up to roughly **20 m/hour**, while Powell & Franks experimentally showed that larger workers move faster and that workers plug trail potholes to increase prey-delivery traffic speed. Neither is a defensible maximum sprint measurement for a major.

- **Canonical `speed_mps`: 0.0**
- **Reason:** no robust species-and-caste-specific maximum sprint value was found; raid-front speed must not be mislabeled as individual speed.

### Lifespan

Animal Diversity Web states workers live for **several months**, while queens can live several years. Exact individual worker longevity is difficult to measure because colonies are nomadic.

- **Canonical `lifespan_years`: 0.3 years** as a cautious several-month worker placeholder
- **Confidence:** Low-moderate; retain as approximate rather than precise biological maximum.

### Mandibles

Majors have conspicuously elongated, pointed, falcate mandibles specialized for defense. Powell & Franks explicitly identify majors by these sickle-shaped defensive mandibles. They are excellent hooks/clamps relative to ant body size but have poor absolute reach and force at the full 225-animal scale. No sufficiently strong direct mandible-length measurement was found during this run, so no invented millimeter value is promoted.

### Sting / venom

Animal Diversity Web describes workers as having a well-developed sting and records the species as capable of painful venomous stings. The species uses stings to subdue prey, while mandibles grip and pull appendages. No defensible venom LD50, delivered dose, or major-caste-specific sting performance value was found, so venom potency is not exaggerated.

### Bite force

No reliable direct force or pressure measurement was found for *E. burchellii* majors.

- **Canonical `bite_force_psi`: 0.0**
- **Reason:** a pressure number would be fabricated; mandible function is documented qualitatively instead.

### Exoskeleton / defense

Like other ants, the soldier has a chitinous exoskeleton that is useful against tiny arthropod-scale hazards but provides negligible absolute protection against vertebrate-scale crushing, trampling, pecking, or biting. Small size itself can make the ant hard to target, but evasion is not armor.

## 3. Canonical proposed factual fields

```json
{
  "weight_kg": 0.0000104,
  "height_cm": 0.0,
  "length_cm": 1.1,
  "speed_mps": 0.0,
  "lifespan_years": 0.3,
  "bite_force_psi": 0.0
}
```

### Canonical-value reasoning

- **weight_kg 0.0000104:** direct midpoint of the measured 9.3–11.4 mg major dry-mass range. Must be labeled dry mass until a strong live-mass measurement is found.
- **height_cm 0.0:** no useful standardized value.
- **length_cm 1.1:** representative upper-worker/soldier value within the authoritative 3–12 mm worker range.
- **speed_mps 0.0:** avoids confusing raid-front progression with individual sprint speed.
- **lifespan_years 0.3:** approximate interpretation of “several months,” explicitly low confidence.
- **bite_force_psi 0.0:** no defensible pressure measurement.

## 4. Combat biology

### Primary and secondary weapons

The soldier's primary weapon is its pair of huge falcate mandibles, which are specialized for colony defense. At the species level workers also possess a functional sting used in prey subdual. Both systems are formidable at arthropod scale, but the canonical soldier is only about a centimeter long and roughly ten milligrams dry mass, so absolute damage remains tiny against most of the ABS roster.

### Offensive mechanics

A major can hook and clamp a small target with its sickle-shaped jaws, remain attached, and contribute to a massed defense. Ordinary raiding workers grip, pull apart appendages, sting prey, and collectively transport pieces. The key calibration distinction is that the famous destructive “army” is a colony-level emergent weapon. A single soldier does not receive the damage output of 100,000 to 2,000,000 nestmates.

### Defensive adaptations and durability

The exoskeleton protects against abrasion and tiny opponents. Soldiers can physically guard raid columns and bivouacs. Against large animals, however, one worker has virtually no resistance to crushing force. Its best defense is being extremely small, difficult to target, and dangerous enough at skin level to discourage contact when many nestmates are present.

### Locomotion and maneuverability

Long legs, low mass, tarsal hooks, and precise six-legged control give excellent fine-scale maneuverability. Workers negotiate complex forest litter, vegetation, living bridges, and dense traffic. This legitimately supports moderate Agility even while Size, Raw Power, Attack, and Defense remain near the roster floor.

### Endurance / stamina

Workers participate in raids and migrations lasting many hours, and nomadic-phase colonies move bivouacs nightly. This supports strong insect-scale sustained activity. Absolute Stamina should still be kept moderate rather than elite because individual metabolic/endurance measurements are sparse and colony continuity cannot be credited to one worker.

### Senses

Vision is limited: workers have highly reduced eyes. Chemical communication and contact cues dominate navigation and coordination. Pheromone trails permit highly effective collective route following. An individual separated from colony chemical context loses much of that advantage.

### Intelligence, tactics, and social coordination

Army ants are a classic case where simple individual rules generate sophisticated colony-level outcomes. There is no leader directing the raid. Pheromone following, local interactions, size-based task specialization, bridge construction, and pothole plugging collectively optimize traffic. Individual Intelligence therefore remains low on a cross-animal cognitive scale, while colony coordination is documented separately rather than smuggled into an individual score.

### Hunting behavior

*E. burchellii* is a swarm raider. Dense fan-shaped raids can involve up to roughly 200,000 workers. Colonies prey mainly on other social insects and diverse litter arthropods, with occasional attacks on small vertebrates documented. A mature colony can capture around 30,000 prey items in a day. These are colony feats, not single-ant feats.

### Intraspecific fighting

Workers from different colonies do not recognize one another as nestmates and can fight. Majors are specialized for defense and are not major prey-transport workers, reinforcing their use as the canonical combat caste.

### Aggression / ferocity

Workers vigorously defend the bivouac and colony. Raids are relentless at colony scale. For an individual major, willingness to clamp an intruder is high, but this behavioral intensity cannot override the ant's minute absolute damage capacity.

### Environmental strengths

- Humid, shaded tropical forest floor and understory
- Complex litter where tiny size and long legs aid movement
- Colony trails where pheromone information and nestmates are available
- Narrow gaps where living bridges or body-plugging improve traffic
- Arthropod-scale opponents vulnerable to gripping and stinging

### Environmental limitations

- Heat and desiccation exposure outside humid shaded habitat
- Large open surfaces that remove cover
- Isolation from pheromone trails and nestmates
- Water, crushing, trampling, or large-animal attacks
- Major caste mandibles are specialized for defense rather than cutting large prey

### Major weaknesses

1. Near-floor absolute body mass and mechanical force
2. Extremely short reach on a full-roster scale
3. Exoskeleton offers negligible protection against large opponents
4. Much of the species' famous lethality is collective, not individual
5. Reduced visual system
6. No defensible evidence for vertebrate-threatening venom dose from one worker
7. Specialized major mandibles are hooks/clamps, not high-throughput cutting jaws

### Good matchup archetypes

- Other tiny arthropods near its own size
- Soft-bodied insects that can be gripped or stung
- Small opponents in cluttered substrate where fine maneuverability matters
- Colony-context encounters where many workers can coordinate, if a separate team mode is ever implemented

### Bad matchup archetypes

- Virtually any vertebrate in a one-on-one fight
- Heavily armored arthropods much larger than one soldier
- Opponents that can crush, engulf, wash away, or flick off the ant
- Open, hot, dry environments

## 5. Proposed ABS substats

| Substat | Score | Evidence-based rationale |
|---|---:|---|
| Size | **0.1** | Roughly 10 mg dry mass and ~1.1 cm length place a soldier essentially at the roster floor in absolute body scale. |
| Raw Power | **0.3** | Impressive proportional force does not translate into meaningful absolute force against medium or large animals. |
| Natural Weapons | **3.5** | Falcate defensive mandibles plus a sting are sophisticated tools, but their absolute damage and reach are tiny. |
| Armor | **0.8** | Chitin is useful at insect scale but negligible against most roster opponents. |
| Resilience | **0.7** | A worker can function through minor arthropod-scale wear, but crushing trauma is decisive. |
| Speed | **20.0** | Active terrestrial runner at its own scale, but no defensible maximum is available and speed is not inflated from raid-front movement. |
| Maneuverability | **67.0** | Tiny size, six-legged control, long legs, hooks, and clutter navigation provide genuinely high evasive precision. |
| Endurance | **44.0** | Long raids and migrations support sustained activity, while individual physiological limits remain poorly quantified. |
| Recovery | **4.0** | No exceptional regeneration; severe structural injury is not readily recoverable. |
| Tactics | **12.0** | Individual behavioral rules are effective but simple; extraordinary organization emerges from many workers. |
| Senses | **25.0** | Strong chemical/contact orientation but extremely reduced vision and heavy dependence on colony context. |
| Ferocity | **63.0** | Soldiers are dedicated defenders that readily engage threats, though ferocity does not increase absolute damage. |
| Unique Abilities | **20.0** | Falcate clamping, sting, tarsal hooking, and collective architecture are unusual, but much of the strongest effect requires nestmates. |

## 6. Proposed six headline ABS ratings

| Headline | Score | Justification |
|---|---:|---|
| **Attack** | **1.8** | A soldier has specialized jaws and species-level stinging capability, but ~10 mg dry mass keeps individual absolute damage near the dataset floor. |
| **Defense** | **0.9** | Chitin and small target size help against tiny threats, but one ant has almost no resistance to vertebrate-scale force. |
| **Agility** | **66.0** | Fine-scale turning, obstacle negotiation, long legs, low inertia, and tarsal grip legitimately make maneuverability the soldier's standout individual combat stat. |
| **Stamina** | **44.0** | Workers sustain long raids and migrations, but colony persistence is not individual stamina and direct physiological data are limited. |
| **Intelligence** | **11.0** | Individual cognition is relatively simple; complex raid organization is emergent collective behavior rather than mammal-like tactical reasoning. |
| **Special** | **24.0** | Defensive falcate mandibles, sting capability, chemical coordination, and living-architecture behaviors are unusual, but most high-impact effects depend on the colony. |

## 7. Exactly two special abilities and two unique traits

### Special abilities

1. **Falcate Lock** — The major's elongated sickle-shaped mandibles are specialized for defense and can hook and clamp small intruders. The mechanism is highly effective at ant scale but has extremely short absolute reach.
2. **Venom Pin** — *E. burchellii* workers possess a functional sting used in prey subdual. It can add pain and chemical injury after close contact, but no unsupported potency or vertebrate-lethality claim is assigned to a single worker.

### Unique traits

1. **Living Architecture** — Tarsal hooks let workers interlock into bridges, bivouacs, and even size-matched trail “pothole” plugs that improve colony traffic. This trait is real but explicitly requires nestmates.
2. **Swarm Algorithm** — Pheromone trails and local worker interactions generate leaderless fan-shaped raids and coordinated transport. In a one-on-one ABS matchup this is mainly contextual; in a future colony/team mode it would become a major tactical trait.

## 8. Expanded profile content

### Habitat

Humid, shaded Neotropical forests, especially forest floor and understory environments with dense litter and protected bivouac sites. Thermal ecology research shows that high exposed-surface temperatures can constrain movement, reinforcing the importance of forest cover.

### Geographic range

Neotropical Central and South America. Authoritative databases and museum-linked taxonomy place *E. burchellii* broadly through tropical America; literature commonly reports Mexico/Central America south through much of tropical South America. Exact subspecies boundaries and northern/southern limits should be treated conservatively in production copy.

### Diet

Obligate animal prey at the colony level, especially other ants and social-insect brood plus cockroaches, crickets, spiders, scorpions, beetles, and other litter arthropods. Occasional attacks on small vertebrates occur, but these do not imply that one worker is a vertebrate predator.

### Ecology

A keystone swarm predator whose raids restructure litter-arthropod activity and flush prey for ant-following birds. The colony alternates statary and nomadic phases tied to brood development. During the nomadic phase, raids and bivouac relocations occur daily.

### Social structure

Highly eusocial colonies with one queen, brood, and hundreds of thousands of workers divided into size/task classes. Published colony estimates vary substantially, from roughly 100,000 to 2,000,000 adults/workers depending on source and colony state. The variation should be preserved rather than forcing a single “normal” number.

### Reproduction / life history

Queens are wingless. New colonies form by fission rather than a lone queen independently founding a nest. Brood development regulates the colony's alternation between statary and nomadic phases. Workers live months; queens can live years.

### Conservation status

No species-level IUCN threatened category was identified during this run. Eciton ecology is nevertheless strongly tied to intact, humid forest. A 2021 review argues that Eciton army ants can serve as umbrella species for Neotropical forest conservation because colonies require large, connected forest areas and support diverse associated organisms.

### Major adaptations

- Extreme worker polymorphism and task specialization
- Falcate major mandibles for defense
- Functional sting for prey subdual
- Pheromone-guided leaderless swarm raids
- Tarsal hooks enabling living bridges and bivouacs
- Dynamic worker “pothole” plugging that smooths traffic
- Nomadic/statary cycle synchronized with brood demand

### Human interaction

The species can bite and sting painfully but does not usually present a major danger to humans. Raids can temporarily clear many arthropods from buildings or forest-floor areas. Claims about using soldier heads as emergency sutures exist in ethnographic/popular accounts, but this report does not elevate that anecdote into a core biological stat.

### Strong fun facts

- A mature colony can contain hundreds of thousands of workers, with some sources giving values up to about two million.
- Up to roughly 200,000 workers can participate in a major raid.
- The temporary nest, or bivouac, is made from the ants' own linked bodies rather than a permanent constructed nest.
- Workers can use their bodies to plug holes in a rough trail, creating a smoother living roadway for prey carriers.
- Majors are specialized defenders and were absent from prey-transport samples in comparative Eciton research.
- Army-ant raids support entire communities of ant-following birds, mites, beetles, and other associated organisms.

### Concise site-ready summary

Burchell's army ant is a tiny but intensely specialized Neotropical predator. A single soldier is only about a centimeter long and has almost no absolute power against large animals, but it carries huge hooked defensive jaws and belongs to one of nature's most coordinated hunting societies. Colonies form living nests, bridges, and trail repairs while launching leaderless swarm raids involving tens of thousands of workers. In individual ABS combat its raw Attack and Defense stay near the roster floor; its real strengths are fine-scale Agility and extraordinary colony-dependent behavior.

### Detailed narrative profile

The army ant is one of the clearest tests of ABS's absolute-scaling rule. *Eciton burchellii* looks terrifying under a macro lens, and at arthropod scale it is. A major worker has a pale enlarged head and long black sickle-shaped mandibles designed for defense. Yet the same major has a directly measured dry mass of only about ten milligrams. A gorilla, wolf, alligator, or even armadillo operates in a completely different mechanical universe. Giving the ant a high Attack because it is “strong for its size” would be exactly the pound-for-pound leakage the overhaul is designed to eliminate.

What makes the species exceptional is organization. Individual workers follow local chemical and tactile information, but collectively they create broad swarm fronts, transport networks, living bridges, bivouacs, and dynamically repaired trails. There is no commander. The impressive intelligence belongs mainly to the distributed system rather than to a single ant brain. ABS should therefore separate individual combat ratings from colony-context traits.

The canonical soldier is still the correct individual fighter. Majors are the largest worker caste and their falcate jaws are explicitly specialized for defense. They can clamp tiny opponents, while workers more generally possess a sting used to subdue prey. Long legs and extremely low inertia make the ant agile through leaf litter and narrow spaces. Against similarly tiny arthropods, those features are meaningful. Against almost any vertebrate, the soldier's offensive and defensive values collapse toward the absolute floor.

This distinction creates a useful future design opportunity. A standard ABS profile should remain one soldier versus one opponent. A separate colony/team mode could model “Swarm Strength,” worker count, raid frontage, collective transport, bridge construction, and attrition. That would let the real ecological power of army ants shine without corrupting one-on-one scaling.

### Useful future structured-field ideas

- `canonical_caste`: major/soldier worker
- `worker_length_range_mm`: 3–12
- `major_dry_mass_mg`: 9.3–11.4
- `colony_size_range`: source-dependent, roughly 100,000–2,000,000
- `raid_participants_max_estimate`: ~200,000
- `social_combat_mode`: eusocial swarm
- `sting_present`: true
- `vision_reduced`: true
- `living_architecture`: true
- `individual_vs_colony_scaling_note`: required

## 9. Image Asset

- **Target path:** `animal-research-for-update/images/army-ant.png`
- **Status:** `SOURCE FOUND - PNG COMMIT PENDING`
- **Primary source page:** https://commons.wikimedia.org/wiki/File:Eciton_burchellii_(14336577830).jpg
- **Direct original image:** https://upload.wikimedia.org/wikipedia/commons/4/49/Eciton_burchellii_%2814336577830%29.jpg
- **Image details:** Real macro photograph of *Eciton burchellii* from Ecuador, **2188×1610**, photographed by Graham Wise; Wikimedia Commons records CC BY 2.0.
- **Why selected:** Exact species, real high-resolution photograph, clear near-full-body macro view, natural specimen rather than illustration/render/AI image, no watermark visible in the source asset.
- **Fallback:** https://commons.wikimedia.org/wiki/File:Eciton_burchellii_army_ants.jpg is an 800×600 Alex Wild photograph released under CC0 and visibly includes the species' worker/soldier forms.
- **Caveat:** Primary image metadata identifies the species but does not explicitly certify caste/sex. A later production image pass may replace it with a verified full-body major if a stronger licensed candidate is found.
- **Binary note:** Current GitHub text writer does not safely create binary PNG assets. No fake or text-encoded PNG was committed.

## 10. Evidence and source ledger

| Source | Direct URL | Claim / field supported | Reported value or finding | Context | Confidence / caveat |
|---|---|---|---|---|---|
| Powell & Franks, Functional Ecology (2006), “Ecology and the evolution of worker morphological diversity” | https://besjournals.onlinelibrary.wiley.com/doi/10.1111/j.1365-2435.2006.01184.x | Major mass, caste function, polymorphism | *E. burchellii* majors **9.3–11.4 mg dry mass**; majors have sickle-shaped defensive mandibles and were not prey transporters | Three colonies sampled on Barro Colorado Island, Panama | **High**; dry mass, not live mass |
| Animal Diversity Web, *Eciton burchellii* | https://animaldiversity.org/accounts/Eciton_burchellii/ | Worker length, sting, diet, raids, lifespan, colony biology | Workers **3–12 mm**; well-developed sting; workers live several months; large swarm raids and broad prey spectrum | Species account drawing on classic army-ant literature | **Moderate-high**; secondary synthesis |
| Powell & Franks, Animal Behaviour / University of Bristol, “How a few help all” | https://research-information.bris.ac.uk/en/publications/how-a-few-help-all-living-pothole-plugs-speed-prey-delivery-in-th/ | Living pothole plugging, traffic optimization | Workers size-match to holes; plugging increases mean speed of prey-laden traffic | Experimental study of *E. burchellii* trails | **High** |
| Meisel, Ecological Applications (2006), “Thermal Ecology Of The Neotropical Army Ant Eciton Burchellii” | https://doi.org/10.1890/1051-0761%282006%29016%5B0913%3ATEOTNA%5D2.0.CO%3B2 | Environmental limitation / thermal ecology | High exposed surface temperatures can constrain colonies; study compared primary forest and fragments | Costa Rica field study | **High** |
| Kaspari et al., Journal of Animal Ecology (2011) | https://besjournals.onlinelibrary.wiley.com/doi/10.1111/j.1365-2656.2011.01826.x | Raid ecology, worker size context | Eciton swarm fronts averaged ~8 m in sampled raids; modal Eciton worker length ~5.6 mm | 20 Eciton raids across multiple Neotropical countries | **High**, genus-level raid sample rather than only *E. burchellii* |
| Diversity (2021), “Eciton Army Ants—Umbrella Species for Conservation in Neotropical Forests” | https://www.mdpi.com/1424-2818/13/3/136 | Colony size, diet, nomadic cycle, prey capture, conservation ecology | *E. burchellii* estimates **500,000–2,000,000 workers** in cited literature; ~30,000 prey items/day possible; nomadic/statary cycle | Review synthesizing Eciton research | **Moderate-high**; colony estimates vary by study |
| AntWiki, *Eciton burchellii* | https://www.antwiki.org/wiki/Eciton_burchellii | Colony/raid context, leaderless advance, bivouac behavior | Literature synthesis gives 150,000–700,000 workers in one classic estimate and describes chemical-trail-driven leaderless advance | Specialist ant reference | **Moderate**; use as synthesis, not sole numerical anchor |
| Wikimedia Commons, Graham Wise photograph | https://commons.wikimedia.org/wiki/File:Eciton_burchellii_(14336577830).jpg | Primary image provenance | Exact-species real photograph, 2188×1610, Ecuador, CC BY 2.0 | Image asset | **High** for provenance/species label; caste not explicitly certified |
| Wikimedia Commons, Alex Wild photograph | https://commons.wikimedia.org/wiki/File:Eciton_burchellii_army_ants.jpg | Fallback image provenance | Real *E. burchellii* photograph, 800×600, CC0 | Image asset fallback | **High** for provenance |

### Evidence conflicts and uncertainty

- **Colony size:** Published estimates vary substantially. This report preserves a broad range rather than declaring a single exact colony size.
- **Mass:** The strongest caste-specific measurement is **dry mass**. No unsupported wet-mass multiplier is applied.
- **Speed:** Raid-front advance and prey-traffic speed are not individual maximum sprint speed. `speed_mps` therefore remains 0.0.
- **Lifespan:** “Several months” is stronger than any precise worker longevity value found. The 0.3-year canonical field is explicitly approximate.
- **Venom:** Presence and prey-subdual use are supported, but potency/dose is not quantified here. No LD50 or vertebrate-lethality claim is invented.
- **Mandible force:** No direct force/PSI measurement found. Proportional strength is not converted into absolute Attack inflation.

## 11. Cross-animal calibration notes

This profile is intentionally the strongest anti-pound-for-pound test so far in the overhaul.

- **Versus Armadillo:** Army Ant Attack **1.8** must be vastly below Armadillo **14.0**, and Defense **0.9** vastly below Armadillo **47.0**. A 10 mg dry-mass ant cannot be mechanically compressed into the same combat band as a 5.5 kg armored mammal merely because its jaws look formidable under magnification.
- **Versus Arctic Fox / Arctic Wolf / African Wild Dog:** Absolute Raw Power and Attack remain orders of magnitude lower. Colony swarm feats are not imported into individual damage.
- **Versus Anglerfish and Albatross:** Tiny size does not prevent high Agility where low inertia and fine locomotor control genuinely matter. This is why Agility **66.0** can coexist with near-floor Attack/Defense.
- **Intelligence calibration:** The leaderless raid is an emergent colony phenomenon. Individual Intelligence **11.0** is deliberately low, while “Swarm Algorithm” records the biological phenomenon without pretending a single ant reasons like a canid or bird.
- **Special calibration:** Special **24.0** recognizes unusual weapons and eusocial mechanisms but stays far below high-impact individual mechanisms such as the anglerfish's deep-sea lure specialization or the Arctic fox's whole-body polar suite.
- **Future audit flag:** When Bullet Ant, Hornet, Black Widow, Tarantula Hawk, Giant Centipede, and other arthropods are researched, check that all tiny-animal Attack/Defense scores preserve absolute mechanical gaps while venomous species receive appropriate Special/weapon effects without converting venom notoriety into body-scale power.

## Verification checklist

- Independent research from scratch: **yes**
- Canonical fighting form documented: **yes, adult major/soldier worker**
- Physical facts and uncertainty: **yes**
- Canonical schema fields: **yes**
- Combat biology and matchup archetypes: **yes**
- Full ABS substats with one decimal: **yes**
- Six headline ratings with one decimal: **yes**
- Exactly 2 special abilities: **yes**
- Exactly 2 unique traits: **yes**
- Expanded profile and future fields: **yes**
- Direct source ledger and claim mapping: **yes**
- Image source and direct URL: **yes**
- Cross-animal calibration: **yes**
- Production/live data modified: **no**
