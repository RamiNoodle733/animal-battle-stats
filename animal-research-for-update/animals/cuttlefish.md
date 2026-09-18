# Cuttlefish

## 1. Identity and canonical specimen

- **Common name:** Common cuttlefish / European common cuttlefish
- **Scientific name:** *Sepia officinalis* Linnaeus, 1758
- **Order / family:** Sepiida / Sepiidae
- **Living/extinct:** Living
- **Exact ABS animal:** The live profile only says Sepiida, which is too broad for species-level research. This staging report standardizes the roster entry to the common cuttlefish, *Sepia officinalis*, the best-supported interpretation of the generic English name and a heavily studied species.
- **Canonical specimen:** Healthy mature large male from the temperate European part of the range, **2.5 kg**, **40.0 cm mantle length**, approximately **50.0 cm total relaxed body length**. Large males are appropriate because Monterey Bay Aquarium specifically notes large males can reach 49 cm, while ADW documents adult male breeding patterning.
- **Variation:** ADW reports 30 cm maximum mantle length in subtropical populations versus 49 cm in temperate populations and 2-4 kg across those geographic extremes. Fisheries samples can be much smaller; an Algerian sample of 1,364 animals had mean dorsal mantle lengths around 12 cm for both sexes. The canonical animal is therefore a robust mature temperate male, not an average fishery-catch animal and not the 4 kg maximum.

## 2. Physical measurements and functional anatomy

### Mass and dimensions

Animal Diversity Web reports *S. officinalis* at **2-4 kg** across geographic populations, with mantle length up to **45-49 cm** and a largest recorded mantle length of **60 cm**. Monterey Bay Aquarium gives a typical 20-30 cm size and says large males can reach **49 cm**. SeaLifeBase likewise reports maximum published weight **4.0 kg**, maximum mantle length **49.0 cm**, and common mantle length 15-25 cm in West Saharan fisheries.

For ABS, **2.5 kg** and **40.0 cm mantle length** represent a large adult male without silently using a maximum. A relaxed total length of **50.0 cm** is proposed as the site's `length_cm`; arm posture makes total length more variable than mantle length, so a future `mantle_length_cm` field is preferable.

### Height

A standing-height field is not meaningful for this aquatic soft-bodied animal. Recommended `height_cm`: **0.0**.

### Speed

No primary or strong institutional source located in this run provided a standardized maximum swimming speed for adult *S. officinalis*. Generic web values such as 25 or 36 km/h are therefore not accepted as canonical measurements. The animal uses continuous fin undulation for precise low-speed motion and siphon-driven jet propulsion for rapid escape. Recommended `speed_mps`: **0.0** pending a defensible species-specific measurement.

### Lifespan

Multiple marine sources converge on a short life cycle. MarLIN reports **1-2 years**, with mortality shortly after spawning, and Monterey Bay Aquarium explains that colder water slows growth and lengthens life while warmer water accelerates growth and reproduction. Recommended `lifespan_years`: **1.5** as the midpoint of the well-supported adult life-cycle range, with temperature dependence explicitly retained.

### Beak, arms and tentacles

The mouth carries a hard cephalopod beak. Eight sucker-bearing arms hold and manipulate prey. Two longer specialized feeding tentacles can retract and then shoot forward to seize prey; Monterey Bay Aquarium notes that the strike is so rapid it is difficult to see with the naked eye. These are capture and retention systems rather than evidence for a high mammalian-style bite score.

No defensible *S. officinalis* bite pressure in PSI was found. `bite_force_psi` is therefore **0.0**. No force estimate is converted to pressure without measured contact area.

### Cuttlebone and defenses

Unlike squid and octopuses, cuttlefish retain a porous internal shell, the **cuttlebone**, which regulates buoyancy. It is not external armor: the mantle, head and arms remain soft and vulnerable. The animal's more important defenses are neurally controlled camouflage, three-dimensional skin papillae, ink release, burial, evasive fin control and jet escape.

## 3. Canonical proposed factual fields

| Field | Proposed value | Basis / caveat |
|---|---:|---|
| `weight_kg` | **2.5** | Robust mature temperate male; below 4 kg published maximum. |
| `height_cm` | **0.0** | Standing height is not biologically meaningful. |
| `length_cm` | **50.0** | Representative relaxed total length; mantle length is the better scientific metric. |
| `speed_mps` | **0.0** | No defensible standardized species-specific maximum verified. |
| `lifespan_years` | **1.5** | Midpoint of the well-supported 1-2 year life cycle. |
| `bite_force_psi` | **0.0** | No defensible pressure measurement. |
| proposed `mantle_length_cm` | **40.0** | More repeatable cephalopod dimension for canonical adult. |
| proposed `max_mass_kg` | **4.0** | Published upper mass, context only, not canonical specimen. |

## 4. Combat biology

### Offensive mechanics

The common cuttlefish is an ambush predator of crustaceans, mollusks, fish and other cuttlefish. It visually tracks prey, approaches with controlled fin motion, positions the head and arms, then launches two feeding tentacles. The terminal clubs seize prey and retract it into the arm crown, where the eight arms secure it for the beak and radula.

The weapon system is excellent for small aquatic prey but has a low absolute ceiling on a roster containing large vertebrates. A 2.5 kg soft-bodied cephalopod cannot receive medium-predator Attack merely because its tentacle strike is fast.

### Fighting behavior

Male fighting is directly documented. Allen et al. (2017) filmed an escalated wild male contest in Turkey. Rival males progressed through intense zebra displays and physical escalation culminating in **biting and inking**. This supports real close-range aggression during reproductive competition and prevents treating the species as behaviorally passive.

### Camouflage and skin control

*Sepia officinalis* uses chromatophores and structural reflectors to alter body pattern rapidly. It can also raise and flatten three-dimensional papillae. Allen et al. (2009) experimentally showed that visual cues from natural substrates control papilla expression. Later work showed that cuttlefish classify three-dimensional visual scenes and select categorical camouflage patterns rather than simply copying a two-dimensional retinal image.

This is a major matchup-changing defense, but it should primarily raise Special and Tactics rather than passive Defense. Camouflage helps avoid being attacked; it does not make soft tissue withstand a successful bite.

### Ink and jet escape

When threatened, the animal can eject a cloud of dark ink while using siphon-driven jet propulsion to leave the attack line. Ink can disrupt visual tracking and create a short escape window. Jetting is burst movement and should not be confused with sustained swimming speed or stamina.

### Locomotion and maneuverability

A fin runs along the mantle and permits precise hovering, reverse movement, vertical adjustments and low-speed positioning. The siphon adds fast directional bursts. This combination produces excellent underwater maneuverability, especially in cluttered benthic habitat, while absolute travel speed remains unresolved.

### Endurance and metabolism

Common cuttlefish are not sustained high-output pursuit animals. PBS summarizes behavioral observations that cuttlefish spend roughly 95% of their time resting, while the cuttlebone reduces the energetic cost of maintaining buoyancy. Their ecology emphasizes patient concealment, efficient hovering and short feeding bouts rather than continuous chase. Stamina should therefore be moderate, not inflated by buoyancy efficiency.

### Senses

Vision is highly developed and central to hunting, communication and camouflage. The distinctive W-shaped pupil and broad visual system support prey targeting and scene classification. Their camouflage response demonstrates sophisticated processing of edges, contrast and three-dimensional environmental structure. Chemosensory information also contributes at close range, but vision is the dominant battle-relevant channel documented here.

### Intelligence and behavioral flexibility

Cognition is unusually strong for an invertebrate and is supported by species-specific experiments rather than generic cephalopod reputation. In a Royal Society study, six *S. officinalis* tolerated delays of **50-130 seconds** to obtain preferred prey, and individuals that waited longer also learned visual discrimination and reversal tasks faster. The paper also summarizes evidence that common cuttlefish remember what, where and when components of previous foraging encounters and alter foraging according to learned prey availability.

This supports elite invertebrate Intelligence, but ABS should not equate laboratory self-control with human-like general reasoning. The score remains below the strongest primate and corvid anchors.

### Predator defense

Predators include sharks, dolphins, seals, fishes and other cephalopods. The defensive sequence is layered: avoid detection through background matching or burial, use disruptive pattern/texture if exposed, ink when pursued, then jet away. The cuttlebone contributes buoyancy rather than meaningful armor.

### Environmental strengths

- Sandy, muddy, rocky or seagrass bottoms where camouflage can exploit texture and contrast
- Dim or structurally complex water where ambush and visual disruption matter
- Aquatic matchups against small prey that can be enveloped by arms
- Short-range engagements where tentacle strike, ink and rapid pattern change matter

### Environmental limitations

- Terrestrial combat is catastrophic because locomotion and respiration are aquatic
- Soft mantle and arms have little passive protection
- Cuttlebone is internal and brittle, not a shield
- Ink is less useful against nonvisual tracking or at point-blank contact
- Jet escape is burst-biased and cannot substitute for prolonged high-output endurance
- Large predators can overwhelm its absolute mass and tissue strength

### Matchup archetypes

**Favorable:** small crustaceans, mollusks, small fish and similarly sized soft-bodied aquatic prey that can be surprised, seized and held.

**Mixed:** similarly sized agile aquatic predators where camouflage and ink can create initiative but the cuttlefish lacks heavy armor.

**Unfavorable:** large fish, marine mammals, sharks, armored opponents, highly electroreceptive/nonvisual hunters, and virtually any terrestrial forced-combat scenario.

## 5. Proposed ABS substats

| Substat | Score | Justification |
|---|---:|---|
| Size | **16.0** | Canonical 2.5 kg is small on the full 225-animal scale. |
| Raw Power | **18.0** | Arms and mantle are capable for prey handling, but absolute muscular force is low. |
| Weaponry | **30.0** | Fast feeding tentacles, sucker-bearing arms and beak form an effective small-prey capture package. |
| Protection | **12.0** | Internal cuttlebone is not external armor; mantle and appendages remain soft. |
| Toughness | **18.0** | Flexible body tolerates maneuvering and grappling but has low resistance to major trauma. |
| Speed | **43.0** | Jet bursts are useful, but no verified maximum is used. |
| Maneuverability | **91.0** | Fin undulation plus directional jetting enables exceptional underwater precision and repositioning. |
| Endurance | **46.0** | Efficient buoyancy and patient ecology, but not a sustained high-output pursuit specialist. |
| Recovery | **34.0** | No evidence here supports exceptional regeneration comparable with dedicated regenerative specialists. |
| Tactics | **91.0** | Flexible prey valuation, reversal learning, self-control, visual scene classification and context-sensitive hunting. |
| Senses | **86.0** | Excellent visual processing directly drives prey targeting, signaling and camouflage choice. |
| Ferocity | **39.0** | Predatory and capable of escalated male biting, but generally concealment/escape oriented against larger threats. |
| Abilities | **91.0** | Dynamic camouflage, papillae, ink, buoyancy control and jetting create an unusually deep special toolkit. |

## 6. Proposed six headline ABS ratings

| Rating | Score | Justification |
|---|---:|---|
| **Attack** | **27.0** | Excellent capture mechanics against small prey, but only 2.5 kg and without a quantified high-force bite. |
| **Defense** | **18.0** | Camouflage prevents contact but passive protection is very low once struck. |
| **Agility** | **91.0** | Precise fin control, hovering and jet repositioning produce elite aquatic maneuverability independent of top-speed folklore. |
| **Stamina** | **47.0** | Buoyancy is efficient, but the ecology is dominated by rest and brief active bouts rather than pursuit endurance. |
| **Intelligence** | **92.0** | Direct *S. officinalis* experiments support self-control, reversal learning, flexible foraging and sophisticated visual classification. |
| **Special** | **93.0** | Dynamic color/pattern/texture camouflage, ink, jetting and cuttlebone buoyancy form one of the roster's most unusual defensive toolkits. |

## 7. Abilities and traits

### Proposed special abilities, exactly 2

1. **Living Camouflage** - Chromatophores, structural reflectors and neurally controlled skin papillae rapidly alter color pattern and three-dimensional texture, reducing detection and disrupting targeting in visually complex habitat.
2. **Ink-Jet Breakaway** - A threatened cuttlefish can release a visual ink screen and immediately use siphon jet propulsion to break line of attack, combining sensory disruption with burst repositioning.

### Proposed unique traits, exactly 2

1. **Cuttlebone Trim** - The porous internal cuttlebone controls buoyancy, allowing low-energy hovering and precise depth management without converting the structure into fictional external armor.
2. **Patient Predator Mind** - Common cuttlefish combine learned prey valuation, reversal learning and demonstrated delayed gratification with a sit-and-wait hunting style, supporting unusually deliberate foraging decisions for an invertebrate.

## 8. Expanded profile content

### Habitat and range

The species is neritic and demersal, occurring from the subtidal zone to about **200 m**. Its accepted range centers on the eastern Atlantic and Mediterranean, extending through the North Sea and into parts of the Baltic and along northwestern Africa. Sandy and muddy bottoms, seagrass and other structured coastal habitats provide concealment and spawning substrate.

### Diet and ecology

Common cuttlefish are carnivorous and take shrimp, crabs, other crustaceans, snails, clams, fish and other cuttlefish. They are important mid-level predators and also prey for larger fishes, sharks, marine mammals and cephalopods. Seasonal movements bring adults into shallower coastal water for spawning and into deeper water at other times.

### Social and reproductive behavior

They are not permanently social, but reproduction creates intense interactions. Mature males use conspicuous zebra signaling and may physically contest access to females. Females attach clusters of eggs to substrate. Development and growth are strongly temperature dependent, and adults generally die after the reproductive period, producing a short, fast life history.

### Conservation and human interaction

Monterey Bay Aquarium reports the common cuttlefish as **Least Concern** under the IUCN assessment it cites, while emphasizing heavy Mediterranean fishing and the species' commercial importance. It is harvested for food in many countries. Its dark ink historically supplied sepia pigment, and washed-up cuttlebones remain familiar calcium/mineral supplements for captive birds.

### Major adaptations

- Eight prey-holding arms plus two retractile feeding tentacles
- Hard beak and radula
- Continuous mantle fin for fine swimming control
- Siphon jet for burst escape
- Chromatophore and reflector-based dynamic body patterning
- Three-dimensional skin papillae
- Ink defense
- Internal cuttlebone for buoyancy
- Large visually sophisticated nervous system
- Short, fast-growing life cycle

### Genuine fun facts

- The color name **sepia** comes from cuttlefish ink.
- A common cuttlefish has eight arms plus two specialized retractile feeding tentacles.
- Large males can reach about **49 cm** according to Monterey Bay Aquarium.
- Experimental cuttlefish waited as long as **130 seconds** for preferred prey in a delayed-gratification task.
- The animals can change not only skin pattern but also three-dimensional skin texture using papillae.
- Wild male contests can escalate from zebra displays to biting and inking.
- The cuttlebone is an internal buoyancy structure, not a vertebrate bone.
- Temperature strongly affects growth rate and lifespan.

### Concise site-ready summary

The common cuttlefish is a 2-3 kg cephalopod built around deception, precision and behavioral flexibility rather than brute force. It stalks small prey with exceptional visual control, fires two retractile tentacles to seize targets, and secures them with eight arms and a hard beak. Against predators it can change color, pattern and skin texture, release ink and jet away. Laboratory work also shows strong learning and self-control, making Intelligence and Special its standout ABS categories while its soft body keeps Attack and Defense low.

### Detailed narrative profile

The cuttlefish is a useful ABS calibration case because it is extraordinarily capable without being physically powerful in absolute terms. Its body mass is only a few kilograms and most of its exposed anatomy is soft. That sharply limits Raw Power, Protection, Attack and Defense when compared with wolves, big cats, apes, crocodilians or megafauna.

What the animal does possess is control. Its long mantle fin provides precise low-speed positioning while the siphon supplies a separate burst-mobility system. The two feeding tentacles can launch from a concealed posture, grab small prey and retract it into an eight-arm cage. This is highly effective predation at the correct scale, but it does not justify pretending the beak has a fabricated PSI value or that the animal can overpower much larger vertebrates.

Its defensive system is even more specialized. Common cuttlefish do not merely turn brown. Experiments show visually controlled selection of camouflage patterns and three-dimensional papillae expression. Pattern change, texture change, burial, ink and jet escape form a layered sequence that can prevent or break targeting. ABS therefore gives Special a near-elite score while keeping passive Defense low. Avoidance is not armor.

Cognition adds another layer. In controlled experiments *S. officinalis* learned discrimination reversals and delayed taking an immediately available food item for up to 50-130 seconds when a preferred reward would become available. Other work summarized in the same literature documents what-where-when memory and flexible prey scheduling. These findings justify a very high Intelligence rating, but not a vertebrate-like physical score. The resulting profile is deliberately polarized: low absolute force and toughness, elite aquatic maneuverability, elite cognition, and an exceptional camouflage/escape toolkit.

### Useful future structured fields

- `canonical_species: Sepia officinalis`
- `canonical_sex: male`
- `mantle_length_cm: 40.0`
- `max_published_mass_kg: 4.0`
- `locomotion_modes: fin swimming, jet propulsion, benthic hovering`
- `camouflage_modes: uniform, mottle, disruptive, papillae texture`
- `ink_defense: true`
- `cuttlebone_buoyancy: true`

## 9. Image Asset

- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/cuttlefish.png`
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Sepia_com%C3%BAn_(Sepia_officinalis),_franja_marina_Teno-Rasca,_Tenerife,_Espa%C3%B1a,_2022-01-05,_DD_141.jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/4/42/Sepia_com%C3%BAn_%28Sepia_officinalis%29%2C_franja_marina_Teno-Rasca%2C_Tenerife%2C_Espa%C3%B1a%2C_2022-01-05%2C_DD_141.jpg
- `file_format_verified`: Source JPEG, **3868×2579**; final PNG not created.
- `alpha_verified`: **No**
- `full_body_verified`: **No.** Exact-species high-resolution wild photograph is available, but strict visibility of every arm/tentacle and complete mantle/fin silhouette was not certified sufficiently to pass the mandatory standard.
- `adult_verified`: **No.** Source identifies exact species but does not explicitly label age/maturity.
- `sex_verified_or_unknown`: **Unknown**
- `license_status`: **CC BY-SA 4.0**, Diego Delso; derivative reuse allowed with attribution/share-alike.
- `notes`: The source is a 3868×2579 Wikimedia Commons Quality Image and far exceeds preferred resolution, but adulthood and strict complete appendage visibility remain unresolved. A 3408×2556 Hans Hillewaert candidate was visually rejected as primary because the posterior mantle reaches/leaves the frame. Do not treat either source URL as a finished asset. Current connected GitHub write actions are UTF-8 text-only, so no transparent PNG is claimed.

## 10. Evidence and source ledger

| Source | Direct URL | Claims supported | Context / reported finding | Confidence / caveat |
|---|---|---|---|---|
| Monterey Bay Aquarium, Common cuttlefish | https://www.montereybayaquarium.org/animals-the-ocean/animals-a-to-z/common-cuttlefish | Taxon, diet, range, size, tentacle strike, camouflage, life-history temperature effects, fisheries | 20-30 cm typical; large males to 49 cm; two fast prey tentacles | **High**, major aquarium/institution |
| Animal Diversity Web, *Sepia officinalis* | https://animaldiversity.org/accounts/Sepia_officinalis/ | Morphology, geographic size variation, depth, adult male patterning | 2-4 kg; up to 45-49 cm mantle by region; 0-200 m | **High-moderate**, curated university reference |
| SeaLifeBase, *Sepia officinalis* | https://www.sealifebase.ca/summary/Sepia-officinalis | Maximum mass/mantle length, common fishery size, habitat/range | 4.0 kg maximum published weight; 49 cm ML; common 15-25 cm | **Moderate-high**, compiled database; maxima are not averages |
| MarLIN, Common cuttlefish | https://www.marlin.ac.uk/species/detail/1098 | Lifespan, post-spawning mortality, maturity/recruitment | 1-2 year lifespan; mortality after spawning | **High-moderate**, marine evidence review |
| Schnell et al. 2021, Proceedings B | https://doi.org/10.1098/rspb.2020.3161 | Self-control, discrimination/reversal learning, cognition | n=6; delay maintenance 50-130 s; longer delay correlated with learning performance | **High**, peer-reviewed experiment; small sample |
| Allen et al. 2009, Journal of Comparative Physiology A | https://doi.org/10.1007/s00359-009-0430-y | 3D skin papillae and visual camouflage control | Nine papilla sets; visual substrate cues evoke camouflage patterns | **High**, peer-reviewed experiment |
| Visual perception and camouflage response, 2021 | https://pubmed.ncbi.nlm.nih.gov/34109984/ | 3D visual scene classification/camouflage | Categorical 3D body-pattern response to physical environment | **High**, peer-reviewed |
| Adamo et al. 2006, Biological Bulletin | https://www.journals.uchicago.edu/doi/full/10.2307/4134557 | Context-sensitive hunting patterning | Body pattern during hunting responds to external/contextual cues | **High**, peer-reviewed |
| Allen et al. 2017, American Naturalist | https://doi.org/10.1086/692009 | Male competition/fighting | Wild contest escalated through zebra display to biting and inking | **High**, peer-reviewed field observation; one documented sequence |
| Marine Biological Laboratory | https://www.mbl.edu/research/research-organisms/common-cuttlefish | Cuttlebone, arms/tentacles, fin, chromatophores | Internal gas-filled cuttlebone; eight arms and two capture tentacles | **High**, research institution |
| Wikimedia Commons, Diego Delso DD 141 | https://commons.wikimedia.org/wiki/File:Sepia_com%C3%BAn_(Sepia_officinalis),_franja_marina_Teno-Rasca,_Tenerife,_Espa%C3%B1a,_2022-01-05,_DD_141.jpg | Image taxon, resolution, provenance/license | Exact *S. officinalis*, 3868×2579, CC BY-SA 4.0 | **High** for provenance; adulthood/full-body strictness unresolved |

### Conflicts and uncertainty

- **Size:** geographic and sample effects are large. Fishery means can be around 12 cm mantle while temperate maxima approach 49 cm and 4 kg. The canonical 2.5 kg / 40 cm mantle animal intentionally represents a robust mature male rather than either extreme.
- **Total length:** mantle length is the scientifically cleaner field. Arm posture makes total length variable, so `length_cm=50.0` is lower confidence than `mantle_length_cm=40.0`.
- **Speed:** common web values were rejected because a strong species-specific standardized maximum was not verified.
- **Bite:** no defensible PSI measurement was found. `0.0` means unresolved, not literally force-free.
- **Cognition:** experimental evidence is strong but some tasks have small sample sizes. Intelligence is high because multiple independent capacities converge, not because one six-animal study is treated as definitive.
- **Conservation:** the IUCN Least Concern assessment cited by institutional sources should be checked again at production migration because assessment dates and taxonomic coverage can change.

## 11. Cross-animal normalization notes

- **Versus Coconut Crab (3.0 kg):** similar mass does not imply similar Attack. Coconut Crab has directly measured extreme claw force and a harder exoskeleton, so Cuttlefish Attack 27.0 / Defense 18.0 stay below Coconut Crab 39.0 / 28.0. Cuttlefish dominates Agility, Intelligence and Special.
- **Versus Crow (0.5 kg):** Cuttlefish is heavier and has a more elaborate prey-capture apparatus, so Attack is higher. Both are cognition-heavy profiles; Crow remains higher in broad social threat learning, while Cuttlefish receives much higher Special for camouflage/ink/jet systems.
- **Versus Colossal Squid (470 kg):** cephalopod kinship must not compress the enormous absolute size gap. Colossal Squid remains vastly higher in Attack through sheer mass and hooked capture structures. Cuttlefish is more directly evidenced for flexible cognition and fine camouflage.
- **Versus Chameleon:** both are camouflage specialists with low absolute physical power. Cuttlefish receives higher Special because dynamic pattern/texture control combines with ink and jet escape, while neither gets artificial Defense from concealment.
- **Speed/agility control:** `speed_mps=0.0` does not prevent Agility 91.0. Fine fin control and jet repositioning directly support maneuverability even without a trustworthy maximum-speed number.
- **No proportional-strength leakage:** the tentacle strike is impressive at prey scale, but 2.5 kg body mass keeps Raw Power and Attack low across the full roster.

## Verification checklist

- Exact taxon standardized and uncertainty documented: **yes**
- Representative adult and sex rationale: **yes**
- Physical ranges and canonical fields: **yes**
- Unsupported speed/bite values rejected: **yes**
- Combat mechanics, defenses, senses, cognition, ecology and weaknesses: **yes**
- Current ABS substats with one-decimal scores: **yes**
- Six headline ratings with one decimal: **yes**
- Exactly two special abilities: **yes**
- Exactly two unique traits: **yes**
- Source ledger with direct URLs/confidence/conflicts: **yes**
- Cross-roster normalization: **yes**
- Image status follows mandatory standard without claiming a URL is a PNG: **yes**
