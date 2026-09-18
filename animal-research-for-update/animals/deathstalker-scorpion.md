# Deathstalker Scorpion (*Leiurus quinquestriatus*)

## 1. Identity and canonical specimen

- **Common name:** Deathstalker scorpion
- **Scientific name:** *Leiurus quinquestriatus* (Hemprich & Ehrenberg, 1829), family Buthidae.
- **Exact animal represented:** true *L. quinquestriatus*, not every yellow scorpion sold or historically reported under the broad "deathstalker" label. Modern *Leiurus* revisions have split several populations formerly lumped with this species, so older geographic and venom literature requires taxonomic caution.
- **Status:** living.
- **Canonical combat specimen:** healthy large adult female, **2.0 g** and **9.0 cm total length**. Adult diagnosis in the modern genus revision is 69-90 mm, with an adult female syntype measured at exactly 90 mm; ADW gives a broader 1.0-2.5 g range. Female is selected because adult females can reach the upper end of documented body size. A 2025 venom-gland study found sex differences and suggested male venom may be more toxic, but that conclusion is not yet strong enough to outweigh the female's directly documented larger body size for a representative combat specimen.
- **Dimorphism:** modern diagnostic data report male pectinal counts of 30-39 and female counts of 26-38, with sex differences in pedipalp proportions. A 2025 study also found histological/protein-profile differences between male and female venom apparatuses. Sex-specific whole-venom lethality remains insufficiently standardized for a canonical numeric adjustment.
- **Population/taxonomic caution:** historical records often treated *L. quinquestriatus* as much more geographically expansive than current revisions justify. Older experimental results are retained only where the source explicitly identifies *L. quinquestriatus*, with the caveat that legacy population names may not map perfectly onto modern species limits.

## 2. Physical measurements

### Mass
ADW reports **1.0-2.5 g**. Canonical recommendation: **2.0 g (0.0020 kg)**, a robust but non-record adult.

### Length
The 2014 *Leiurus* revision diagnoses adults at **69-90 mm**. Its adult female syntype is **90.0 mm** total length, including a 56.7 mm metasoma + telson. Jordan University notes adults may reach about 9 cm and gives about 6 cm as an average in its regional account. Canonical total length: **9.0 cm** for the deliberately large adult-female combat specimen.

### Height
No biologically standardized standing-height field was found for this species. A scorpion's posture varies substantially with leg spread and metasomal carriage. **Do not invent `height_cm`; use 0.0.**

### Speed and strike mechanics
No defensible species-specific maximum running speed in m/s was found. The site's old 36 km/h value has no acceptable provenance and is rejected. Literature summarized in biodiversity records reports a defensive tail strike up to roughly **128 cm/s**, but this is **stinger-tip/strike velocity, not locomotor speed** and must not populate `speed_mps`.

### Lifespan
ADW explicitly states that species-specific lifespan is not readily available and only gives a broad 4-25 year range for scorpions generally. Captive-care pages commonly claim roughly 3-6 years, but these are too weak for a canonical species field. **Use `lifespan_years: 0.0` pending a primary life-history study.**

### Bite force
The primary offensive delivery system is the telson sting, not a vertebrate-style bite. No defensible bite-pressure measurement exists. **Use `bite_force_psi: 0.0`.**

### Venom and natural weapons
- Peer-reviewed comparative work reports *L. quinquestriatus* mammalian mouse LD50 values around **0.25-0.33 mg/kg** in the cited literature, while broader reviews report roughly **0.16-0.50 mg/kg** depending on method/source. LD50 is a toxicity assay, not a guaranteed lethal dose in another species.
- A 2022 comparative study found *L. quinquestriatus* at the extreme high-potency end of a 36-species scorpion dataset, with **0.16 mg/kg** as the lowest LD50 in that dataset and exceptionally slender chelae.
- The telson contains paired venom glands. Histological work confirms a specialized venom apparatus, and modern work documents sexual dimorphism in gland structure and protein profiles.
- The adult female syntype's **telson length was 10.7 mm**, movable pedipalp finger **13.5 mm**, and chela length **18.7 mm**. These are direct specimen measurements, not population averages.
- Venom includes multiple ion-channel-active peptides. Chlorotoxin was originally characterized from *L. quinquestriatus* venom and is a compact 36-amino-acid peptide, but it should not be portrayed as the sole cause of whole-venom lethality.

### Armor/defenses
The chitinous exoskeleton is useful against abrasion, dehydration and very small arthropod attacks, but at only about 2 g it provides negligible absolute protection against medium or large vertebrate force. The narrow body and crevice use are more important defenses than armor thickness.

## 3. Canonical proposed factual fields

| Field | Proposed value | Confidence | Rationale |
|---|---:|---|---|
| `weight_kg` | **0.0020** | Medium | Robust adult within ADW 1.0-2.5 g range; not a record specimen. |
| `height_cm` | **0.0** | High | No standardized defensible standing-height measurement. |
| `length_cm` | **9.0** | High | Adult diagnosis reaches 90 mm; adult female syntype exactly 90 mm. |
| `speed_mps` | **0.0** | High | No defensible maximum running-speed measurement; strike speed is not locomotion. |
| `lifespan_years` | **0.0** | Medium | Species-specific reliable lifespan unavailable in ADW; weak captive claims excluded. |
| `bite_force_psi` | **0.0** | High | No defensible bite-pressure measurement and sting is the primary weapon. |

**Future structured fields:** `venom_mouse_ld50_mg_kg`, `venom_assay_route`, `telson_length_mm`, `sting_strike_speed_mps`, `adult_mass_g`, and `pectinal_tooth_count` would describe this animal much better than a fabricated bite PSI.

## 4. Combat biology

### Weapons and offensive mechanics
The deathstalker's combat system is a small-grappler-plus-venom-delivery package. Slender pedipalps seize or position small prey, while the flexible metasoma arcs the telson forward to sting. Its physical force is tiny on the 225-animal absolute scale. The danger comes from chemical potency and the ability to inject venom through the aculeus.

Against arthropod-scale opponents, this is a formidable weapon because prey can be held and repeatedly stung. Against much larger vertebrates, a successful sting can be medically consequential, but the scorpion cannot assume that mouse LD50 values scale linearly to every opponent. Thick hide, fur, feathers, scales, body mass and venom susceptibility all matter. A tiny venom yield and very short reach prevent Special from becoming universal instant-kill Attack.

### Defense and durability
The exoskeleton protects against desert abrasion and minor contact, and the animal can shelter under stones or in shallow burrows. Absolute Defense is extremely low because a foot, hoof, beak, mammalian bite or comparable large-force strike can overwhelm a 2 g body. Venom may deter contact, but deterrence is not counted as passive armor.

### Locomotion and maneuverability
Eight-legged terrestrial locomotion gives excellent close-range orientation around rocks and crevices. The body can reverse, pivot and keep the metasoma ready while the pedipalps face a threat. No unsupported internet sprint figure is used. Agility is therefore based on short-range control and strike repositioning rather than maximum speed.

### Endurance and environmental tolerance
It is adapted to arid and hyper-arid habitats and avoids daytime thermal extremes by sheltering under rocks or in shallow burrows. This indicates strong ecological tolerance and energy economy, not proof of sustained high-output fighting. Stamina is kept moderate-low on the absolute roster scale.

### Senses
Scorpions combine eyes, tactile hairs and pectines. Modern pecten research supports chemo- and mechanosensory sampling of the substrate, and older *L. quinquestriatus* behavioral work is foundational in scorpion sensory physiology. ADW specifically describes touch and vibration use for prey capture and communication. These senses are highly useful at ground level but do not justify vertebrate-like long-range visual acuity.

### Intelligence and tactics
Behavior is effective but largely stereotyped: shelter by day, forage/ambush at night, detect substrate cues, seize prey and deploy the sting. It can modulate encounters enough to mate and avoid unnecessary conflict, but there is no evidence for complex flexible problem solving comparable with birds or mammals. Intelligence stays low in absolute roster terms while Tactics is somewhat higher because the weapon-delivery sequence is efficient.

### Fighting, predation and aggression
ADW describes small insects, spiders, centipedes, worms and other scorpions as prey/food categories for scorpions including deathstalkers. Field ecology from Syria documents interspecific and intraspecific scorpion predation. Cannibalism exists, but a peer-reviewed review found no evidence that *L. quinquestriatus* routinely practices post-mating self-sacrificial sexual cannibalism; two observed male cannibalism cases occurred early in courtship after prolonged food deprivation.

### Environmental strengths
- Rocky, arid terrain with narrow refuges.
- Night conditions where substrate-borne cues and concealment matter.
- Close quarters against arthropod-scale opponents where a sting can be delivered quickly.

### Environmental limitations
- Exposed open terrain against birds or fast vertebrates.
- Cold conditions that reduce ectotherm performance.
- Deep water and aquatic matchups.
- Thick-skinned or heavily armored targets where the tiny aculeus cannot reliably reach vulnerable tissue.

### Major weaknesses
Extreme size disadvantage, short reach, fragile absolute body structure, dependence on successful venom delivery, and uncertain venom efficacy across distantly related opponent taxa.

### Matchup archetypes
- **Best:** similarly sized arthropods and small soft-bodied targets susceptible to venom.
- **Mixed:** small vertebrates that can be stung but can also kill the scorpion instantly if they land a strike.
- **Worst:** large mammals, large birds, heavily armored reptiles/arthropods, and aquatic animals. Venom potency does not erase delivery and dosage constraints.

## 5. Proposed ABS substats

All scores use the absolute 0.1-100.0 roster scale, not pound-for-pound scaling.

| Substat | Score | Justification |
|---|---:|---|
| Raw Power | **1.2** | About 2 g of body mass and slender chelae provide negligible absolute mechanical force. |
| Weaponry | **35.0** | Excellent sting delivery for its scale, but millimeter reach and tiny absolute force constrain cross-roster effectiveness. |
| Ferocity | **32.0** | Will sting and prey on arthropods, yet does not warrant folklore-driven aggression inflation. |
| Protection | **5.0** | Exoskeleton is useful at arthropod scale but offers little against large-force attacks. |
| Toughness | **7.0** | Desert-adapted and resilient to routine environmental stress, but tiny body is easily catastrophically damaged. |
| Maneuverability | **66.0** | Strong close-ground control, rapid reorientation and flexible tail positioning. |
| Speed | **32.0** | No verified running maximum; score reflects quick short-range movement without inventing a sprint value. |
| Endurance | **42.0** | Strong energy economy/arid survival, but no evidence for prolonged high-output locomotion. |
| Recovery | **27.0** | Ectothermic economy helps after routine exertion, but serious structural injury is poorly tolerated. |
| Tactics | **37.0** | Efficient ambush/grab/sting sequence and shelter use, but limited behavioral flexibility. |
| Senses | **58.0** | Pectines, tactile hairs and vibration sensitivity provide strong substrate awareness. |
| Abilities | **96.0** | Venom is among the most potent measured in scorpions and is the defining matchup-changing mechanism. |

## 6. Proposed six headline ABS ratings

| Rating | Score | Justification |
|---|---:|---|
| **Attack** | **19.0** | Venom can make a successful sting disproportionately consequential, but absolute size, reach, penetration and dose are severe constraints. |
| **Defense** | **6.0** | Exoskeleton and hiding behavior cannot compensate for a roughly 2 g body against roster-scale force. |
| **Agility** | **64.0** | Strong close-range pivoting, appendage control and tail repositioning, without confusing an unverified sprint speed with agility. |
| **Stamina** | **42.0** | Desert energy economy is useful, but sustained combat-output evidence is limited. |
| **Intelligence** | **20.0** | Effective sensory-guided predation and mating behavior, but little evidence for complex flexible cognition. |
| **Special** | **96.0** | Extreme neurotoxic venom is genuinely matchup-changing, while remaining below a universal ceiling because delivery/dose and taxon susceptibility vary. |

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities
1. **Neurotoxic Needle** - the telson injects an exceptionally potent ion-channel-active venom cocktail; a successful penetration can disable prey vastly larger than the scorpion's mechanical strength would suggest.
2. **Pectine Ground Radar** - paired ventral pectines and other mechanosensory structures sample substrate-borne chemical/mechanical information, improving close-range prey, mate and terrain detection.

### Unique traits
1. **Five-Keeled Desert Frame** - the characteristic carination and slender buthid body fit a crevice-using arid-land predator rather than a heavy-clawed crusher.
2. **Slender-Chela Venom Tradeoff** - comparative scorpion research places *L. quinquestriatus* at the extreme slender-chela/high-venom-potency end of the studied spectrum.

## 8. Expanded profile content

### Habitat and range
True *L. quinquestriatus* occupies dry desert and scrub habitats of North Africa and parts of the Middle East, using multiple substrate types but generally avoiding open sand dunes. It shelters beneath stones and in small/shallow burrows. Exact modern range should be interpreted conservatively because several populations historically called *L. quinquestriatus* have been reassigned within *Leiurus*.

### Diet and ecology
A nocturnal terrestrial carnivore feeding primarily on insects and other small terrestrial invertebrates, including arachnids and sometimes other scorpions. It functions as both predator and prey in desert arthropod communities. Centipedes, other scorpions and vertebrate predators can kill it.

### Social structure and reproduction
Primarily solitary outside reproductive encounters. Courtship relies on close tactile/substrate communication. A laboratory observational study reported gestation periods of **155-227 days** and litters of **35-87** in seven females, expanding earlier reported ranges. As in scorpions generally, newborns ride on the mother's dorsum until after the first molt.

### Conservation
No robust global population estimate or high-confidence current IUCN assessment was verified in this run. Avoid assigning a conservation category from weak secondary pages. Local collection and human persecution may occur, but population trend should remain unfilled until an authoritative assessment is located.

### Major adaptations
- Potent peptide-rich venom delivered by a flexible telson.
- Slender pedipalps optimized more for prey control than crushing.
- Pectines and tactile/vibration sensing for nocturnal ground-level information.
- Yellow/sandy coloration and crevice use in arid environments.
- Behavioral avoidance of daytime heat.

### Human interaction
This is a medically important scorpion. Clinical severity is strongly body-mass dependent, with children at much greater risk of severe systemic envenomation. A Scorpion Files summary notes an Israeli study in which most victims had localized reactions, while severe cases can be dangerous and antivenom is available in relevant regions. It should not be handled casually.

### Genuine fun facts
- The modern species diagnosis gives adults up to about **90 mm**, while historical/secondary sources often quote somewhat larger maxima.
- An adult female syntype measured **56.7 mm from metasoma through telson**, more than half of its 90 mm total length.
- Comparative work across 36 scorpion species found the deathstalker at the **most potent end of the mammalian LD50 dataset** and among the most slender-chela forms.
- Chlorotoxin, a peptide first isolated from this venom, became a major biomedical research molecule because of its unusual binding properties.
- The claim that females routinely eat males after mating is exaggerated: a peer-reviewed review found no post-mating cannibalism in its observations and only two pre-mating/early-courtship cases after prolonged food deprivation.
- Pectines are comb-like sensory organs unique to scorpions and sweep close to the ground as the animal moves.

### Concise site-ready summary
The deathstalker is a tiny desert scorpion whose physical power is negligible on an absolute animal scale, but whose sting carries one of the most potent scorpion venoms measured. It hunts small arthropods using tactile and vibration cues, slender pincers and a fast, flexible telson. Its battle profile is an extreme specialist: very low raw force and durability, strong close-range maneuverability, and elite chemical weaponry that matters only if the tiny stinger can successfully deliver venom.

### Rich narrative profile
At roughly two grams, the deathstalker is a useful test of whether Animal Battle Stats can distinguish proportional danger from absolute force. Its pincers cannot compete mechanically with the jaws, claws or hooves of larger roster animals, and its exoskeleton is not meaningful armor against a vertebrate strike. Almost all of its cross-size threat is concentrated in a millimeter-scale delivery system at the end of a highly mobile metasoma.

That system is formidable. *Leiurus quinquestriatus* sits near the extreme of measured scorpion venom potency, with mammalian LD50 estimates far below those of many other scorpions. Yet toxicity is not the same as automatic battle lethality. Assay route, venom quantity, opponent body mass, tissue penetration and taxon-specific susceptibility all change the outcome. This is why its Special score approaches the roster's elite ceiling while Attack stays low.

The animal's sensory biology completes the package. Ground-sweeping pectines, tactile hairs and vibration sensitivity let a nocturnal predator operate where vision is limited. In a crevice or under a stone against another arthropod, that combination can be devastating. In an exposed matchup against a bird, mammal or large reptile, the same animal is one accurate strike away from catastrophic damage. It is a chemical specialist, not a miniature tank.

## 9. Image requirement

- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/deathstalker-scorpion.png` **(not created)**
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Leiurus_quinquestriatus_by_Danny_S.-1.jpg
- `original_photo_url`: https://commons.wikimedia.org/wiki/Special:Redirect/file/Leiurus%20quinquestriatus%20by%20Danny%20S.-1.jpg
- `file_format_verified`: source is JPEG, 2212x2357; no staging PNG exists
- `alpha_verified`: **No**
- `full_body_verified`: **No**. The candidate is exact-species, high-resolution and visually appears to contain the scorpion's main silhouette, but this run did not certify every leg tip, both pedipalps and the complete telson/aculeus at original resolution strongly enough to pass the mandatory standard.
- `adult_verified`: **No**. Commons identifies exact species but does not state adult life stage. A separate 3957x2638 Commons image explicitly states **sub-adult female** and was therefore rejected.
- `sex_verified_or_unknown`: unknown
- `license_status`: **CC BY-SA 4.0, redistribution permitted with attribution/share-alike**
- `notes`: Do not promote the source URL as a finished asset. GitHub's available create/update writer is UTF-8 text-only, so no genuine transparent PNG binary can be committed in this run. Seek an explicitly adult, complete-body exact-species source before cutout if possible.

## 10. Source ledger

| Source | Direct URL | Supports | Confidence / caveat |
|---|---|---|---|
| Lowe, Yağmur & Kovařík, 2014, *A review of the genus Leiurus* via Plazi | https://treatment.plazi.org/id/038C87BF20031912FF0E8BCADC10F9EA/3 | Adult diagnosis 69-90 mm, female syntype 90 mm, telson/chela measurements, pectinal dimorphism, taxonomy | **High**. Primary taxonomic revision. |
| Animal Diversity Web, *Leiurus quinquestriatus* | https://animaldiversity.org/accounts/Leiurus_quinquestriatus/ | 1.0-2.5 g, habitat, burrow/shelter use, diet, vibration/tactile behavior, predators, lifespan uncertainty | **Medium-high**. University-curated secondary synthesis; some older taxonomy. |
| Jordan University of Science and Technology species account | https://www.just.edu.jo/FacultiesandDepartments/FacultyofScienceandArts/Pages/Leiurus-quinquestriatus.aspx | Regional diagnosis, adult length, pectinal counts, Jordan occurrence | **High-medium**. Institutional account drawing on regional literature. |
| Ward et al. 2017, *Target-Specificity in Scorpions* | https://www.mdpi.com/2072-6651/9/10/312 | Comparative LD50 values and strong target-specificity warning | **High**. Peer-reviewed comparative experimental/literature synthesis. |
| van der Meijden et al. 2022, *Smaller Body Sizes and Narrower Chelae Have Highest Venom Potency* | https://www.mdpi.com/2072-6651/14/3/219 | 36-species comparison, *L. quinquestriatus* 0.16 mg/kg endpoint and extreme slender chelae | **High**. Peer-reviewed comparative study. |
| The Scorpion Files, NTNU | https://www.ntnu.no/ub/scorpion-files/l_quinquestriatus.php | Dry habitat, shelter, medically important venom, 0.16-0.50 mg/kg literature range | **High-medium**. Specialist academic database; some distribution reflects historical taxonomy. |
| Taib & Jarrar 1993 | https://doi.org/10.1080/03946975.1993.10539215 | Venom apparatus histology/histochemistry | **High**. Peer-reviewed primary study. |
| Said et al. 2025 | https://doi.org/10.1186/s41936-025-00469-y | Sex differences in venom gland structure/protein profiles; tentative male-toxicity implication | **High for measured anatomy; medium for toxicity implication**. Whole-venom lethality by sex was not directly established as a universal field value. |
| Peretti, Acosta & Benton 1999 | https://doi.org/10.1111/j.1095-8312.1999.tb01184.x | Sexual-cannibalism correction | **High**. Peer-reviewed behavioral review/observations. |
| Shehab, Amr & Lindsell 2011 | https://doi.org/10.3906/zoo-0904-19 | Syrian desert scorpion ecology, inter/intraspecific predation context | **High**. Peer-reviewed field ecology. |
| Ross 2009 | https://www.researchgate.net/publication/250043921_Notes_on_gestation_periods_and_litter_size_in_the_arenicolous_buthid_scorpion_Leiurus_quinquestriatus_Ehrenberg_1828_Scorpiones_Buthidae | Gestation 155-227 d and litter 35-87 in seven laboratory females | **Medium-high**. Small observational sample; legacy population taxonomy caveat. |
| Gaffin et al. 2025 | https://www.mdpi.com/2813-3323/3/3/12 | General scorpion pectines process chemo/mechanosensory ground information | **High for pecten function generally**, not species-exclusive. |
| Wikimedia Commons, Danny S. | https://commons.wikimedia.org/wiki/File:Leiurus_quinquestriatus_by_Danny_S.-1.jpg | Exact-species candidate, 2212x2357, CC BY-SA 4.0 | **High provenance, insufficient adult/full-body verification**. |
| Wikimedia Commons, RichardMcJimsey | https://commons.wikimedia.org/wiki/File:Leiurusquinquestriatus.jpg | Explicit sub-adult female rejection candidate, 3957x2638, CC BY-SA 4.0 | **High provenance; rejected because not adult**. |

## 11. Confidence and conflicts

- **Taxonomy:** high confidence in the canonical name, but historical range and older experimental populations require caution after *Leiurus* splitting.
- **Length:** high confidence for 69-90 mm modern adult diagnosis. ADW's 80-110 mm range conflicts upward with the modern revision, so 110 mm is not used as canonical.
- **Mass:** medium confidence. ADW's 1.0-2.5 g range is useful but lacks the sex/population resolution of the taxonomic measurements.
- **Venom potency:** high confidence that the venom is exceptionally potent; medium confidence in any single LD50 number because assay route, extraction, sex, population and target change results. Report the range/context rather than pretending 0.16 or 0.25 mg/kg is universal.
- **Speed:** low evidence. Old 36 km/h placeholder rejected outright.
- **Lifespan:** low evidence. Species field remains 0.0 rather than importing general scorpion longevity or hobby claims.
- **Image:** exact species and license are strong, adulthood/full-body certification remains unresolved.

## 12. Cross-animal normalization notes

- **Versus Coconut Crab:** deathstalker is orders of magnitude smaller and must be vastly below the 3 kg Coconut Crab's Attack 39.0 and Defense 28.0 in mechanical combat. Its advantage is chemical specialization, not strength.
- **Versus Black Widow:** both are tiny venom specialists. Deathstalker's active telson delivery, exceptionally potent scorpion venom and repeatable close-range sting justify elite Special, but neither should receive medium-animal physical ratings.
- **Versus Cuttlefish:** Cuttlefish Special 93.0 comes from camouflage and dynamic body systems at 2.5 kg. Deathstalker Special 96.0 is higher because venom can directly disable susceptible opponents, while its Attack 19.0 and Defense 6.0 preserve the enormous mass gap.
- **Versus Crow and Cockatoo:** cognition stays far below the birds. A specialized sensory system is not evidence of flexible intelligence.
- **Anti-leakage check:** venom is counted primarily in Abilities/Special and secondarily in Weaponry/Attack. It does **not** inflate Raw Power, Protection, Toughness, Stamina or Intelligence.
- **Speed/agility check:** the reported tail-strike velocity is not used as `speed_mps` and does not become a high Speed score. Agility reflects close-range body/tail control.

## 13. Future field proposals

1. Add `venom_ld50_mg_kg` only with companion `assay_species` and `assay_route` fields so toxicity numbers cannot be stripped of context.
2. Add `venom_yield_mg` only after a primary standardized extraction study is selected.
3. Add `sting_strike_speed_mps` separately from locomotor speed.
4. Preserve taxonomic provenance/date because historical "deathstalker" datasets can contain populations now assigned to other *Leiurus* species.
5. Obtain an explicitly adult, exact-species macro photograph with every leg, pedipalp and complete metasoma/aculeus visible, then create and visually inspect a genuine RGBA cutout when binary-capable tooling is available.
