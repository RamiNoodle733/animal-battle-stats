# Hummingbird Research Overhaul

## 1. Identity and canonical specimen
- **Common name:** Hummingbird, resolved to Ruby-throated Hummingbird
- **Scientific name:** *Archilochus colubris* (Linnaeus, 1758), Trochilidae
- **Status:** Living
- **Exact animal:** The roster's family-level label is resolved to one well-studied species rather than mixing family-wide maxima.
- **Canonical specimen:** healthy fully mature **adult female**, **0.0038 kg**, **8.5 cm total length**, about **10.0 cm wingspan**.
- **Sex choice:** females are larger. ADW gives about 3.4 g males and 3.8 g females; banding references describe females as roughly 15-25% larger in mass/wing chord. Males are more territorial, so male aggression is documented but not silently assigned to the larger female.
- **Dimorphism:** males have a ruby gorget, forked tail, smaller frame and shorter bill; females are larger, longer-billed and white-throated with white-tipped outer tail feathers.
- **Variation:** migration fattening can raise mass 35-70%, so migration-loaded birds are not the baseline.

## 2. Physical measurements
Cornell gives **2-6 g**, **7-9 cm length**, and **8-11 cm wingspan**. ADW gives about **3.4 g male / 3.8 g female** and 7.5-9.0 cm. Smithsonian independently gives adults at 7-9 cm and 8-11 cm wingspan.

- `weight_kg`: **0.0038**
- `length_cm`: **8.5**
- representative wingspan: **10.0 cm**
- `height_cm`: **0.0**, because standing height is not a useful standardized field.

Banding measurements place exposed culmen around **15-18 mm in males** and **17-21 mm in females**. The bill is principally a feeding tool but can jab in aerial disputes. Tiny feet are primarily for perching; Cornell notes Ruby-throats cannot normally walk or hop and instead shuffle.

Smithsonian gives hummingbirds near 30 mph in direct flight and above 45 mph in dives, but these are group-level statements rather than a clean *A. colubris* maximum. Primary *A. colubris* work tested strenuous hovering and fast wind-tunnel flight without yielding a suitable ecological maximum. Therefore `speed_mps`: **0.0**.

Cornell reports about **53 wingbeats/s**. Peer-reviewed aerodynamic work shows specialized hovering kinematics; Warrick et al. found the downstroke produces roughly three times the lift of the upstroke, while later work found near-continuous lift through wing turnaround. Hummingbirds can hover, brake sharply, move sideways and fly backward.

Cornell's oldest known Ruby-throat was a female at least **9 years 2 months** old. This is a record, not mean wild lifespan. A robust wild mean was not recovered, so `lifespan_years`: **5.0** is a conservative representative value with moderate-low confidence. The old 15-year placeholder is rejected.

No defensible species-specific bite pressure was found. `bite_force_psi`: **0.0**. The old 100 PSI value is rejected.

## 3. Canonical proposed factual fields
```json
{
  "weight_kg": 0.0038,
  "height_cm": 0.0,
  "length_cm": 8.5,
  "speed_mps": 0.0,
  "lifespan_years": 5.0,
  "bite_force_psi": 0.0
}
```
Future useful fields: `canonical_sex=female`, `wingspan_cm=10.0`, `bill_length_cm=1.9`, `hovering_wingbeat_hz=53.0`, `torpor_capable=true`, and explicit multidirectional flight modes.

## 4. Combat biology
### Offense
Absolute-force offense is extremely low. The bill can jab and the feet can grasp, but neither is a dedicated killing system. Cornell documents males defending flowers/feeders through chases, dogfights and occasional bill jabs. This matters against similarly tiny animals but cannot be scaled into serious vertebrate damage.

### Defense and toughness
There is no armor, thick hide or meaningful impact protection. Defense is avoidance. Tiny size, acceleration, hovering, abrupt braking and multidirectional flight make acquisition difficult, but a clean strike from a much larger animal is likely catastrophic.

### Locomotion and agility
This is the defining advantage. Ruby-throats stop abruptly, hover and adjust up/down/sideways/backwards. Experimental hummingbird work shows optic flow stabilizes hovering, asymmetric wingbeats help execute turns, and hummingbirds can negotiate openings narrower than a wingspan. These are direct maneuverability traits, not speed proxies.

### Endurance and physiology
Hovering is metabolically extreme, yet Ruby-throats are long-distance migrants. Smithsonian reports trans-Gulf flight bouts around **18-20 hours**; migration studies document broad-origin birds at Gulf stopovers and older males with larger fuel loads and longer potential flight ranges. Stamina is strong when fueled, but tiny reserves and frequent refueling prevent unlimited-output interpretation.

Torpor is a separate energy-saving system. A 2026 *A. colubris* physiology study found major ATP-demand suppression, including a **43% decrease in Na+/K+ ATPase activity**. Torpor is not an active-fight boost.

### Senses, intelligence and tactics
Vision is central to precision flight. Experiments show moving visual backgrounds alter hovering stability, demonstrating optic-flow dependence. Cornell notes color vision extending into ultraviolet. Ruby-throats learn resource locations, defend profitable patches, adjust movement during aerial contests and navigate long migrations. This supports good spatial/tactical cognition below corvid/parrot tool specialists.

### Fighting and predation
Males perform territorial chases, dogfights and occasional bill jabs. Females are larger but are not assigned maximum male aggression. The species eats nectar plus insects and spiders and is not a predatory-killing specialist. Predator defense depends on escape, cover, vigilance and tiny target size.

### Environmental strengths and weaknesses
**Strengths:** open escape space; cluttered vegetation where precise hovering matters; flower-rich habitat for refueling; vertical environments that defeat terrestrial pursuit.

**Weaknesses:** almost no passive protection; negligible absolute mass/force; expensive active flight; poor terrestrial locomotion; food/cold constraints; any clean hit from a much larger opponent can be decisive.

### Matchups
More favorable against tiny fragile opponents unable to track or reach a hovering target. Strongly unfavorable against medium/large vertebrates once contact occurs, aerial predators with reach, web/ambush traps that negate flight, and cramped environments without maneuver room.

## 5. Proposed ABS substats
| Substat | Score | Justification |
|---|---:|---|
| Size | **0.8** | 3.8 g is near the roster floor. |
| Raw Power | **1.5** | Exceptional mass-specific output remains negligible absolute force. |
| Weaponry | **5.0** | Pointed bill can jab tiny rivals but is not a serious roster-wide weapon. |
| Protection | **1.5** | Feathers and light skeleton provide essentially no armor. |
| Toughness | **5.0** | Physiologically capable but mechanically fragile. |
| Speed | **70.0** | Fast flight is real, but no unsupported species maximum is promoted. |
| Maneuverability | **98.0** | Hover, reverse/lateral flight, braking, tight turning and aperture control support near-ceiling placement. |
| Endurance | **82.0** | Migration-scale sustained flight when fueled, tempered by tiny reserves. |
| Recovery | **67.0** | Refueling and torpor aid energy recovery, not trauma repair. |
| Tactics | **60.0** | Territorial aerial contests and spatial resource use support flexible tactics. |
| Senses | **82.0** | Strong visual/optic-flow control and UV-capable color vision. |
| Ferocity | **38.0** | Male territorial aggression is real but not universalized to the female. |
| Abilities | **78.0** | Multidirectional hovering plus torpor are unusual matchup-relevant systems. |

## 6. Proposed six headline ratings
- **Attack 5.0:** tiny mass and slender bill cap absolute damage.
- **Defense 8.0:** extraordinary evasion cannot substitute for passive protection after contact.
- **Agility 98.0:** near-ceiling maneuverability based on biomechanics, not speed.
- **Stamina 82.0:** sustained migratory flight is exceptional, with fuel dependence retained.
- **Intelligence 61.0:** strong spatial learning and tactical flight below tool-specialist birds.
- **Special 79.0:** multidirectional hover control and torpor are rare systems without inflating power.

## 7. Exactly two special abilities and exactly two unique traits
### Special abilities
1. **Six-Axis Hover Control** - specialized wing kinematics permit sustained hover, reverse and sideways flight, abrupt braking and tight repositioning.
2. **Metabolic Shutdown** - torpor sharply suppresses energy expenditure during cold or food limitation; 2026 physiology confirms downregulated ATP-demand pathways.

### Unique traits
1. **Gulf-Crossing Fuel Cycle** - pre-migratory fat loading can support exceptionally long flight bouts, including trans-Gulf migration.
2. **Female-Biased Frame** - females are larger and longer-billed than males, so the canonical stronger specimen is female despite better-documented male territoriality.

## 8. Expanded profile
### Habitat, range, diet and ecology
Ruby-throats breed across eastern North America and winter mainly in Mexico/Central America. They use woodland, forest edge, fields, orchards, gardens, riparian areas, scrub and tropical dry forest. Migration research confirms birds from natal latitudes roughly 30-50° N reaching Gulf Coast stopovers. Diet is floral nectar plus insects and spiders, coupling rapid carbohydrate intake with animal protein and a pollination role.

### Social and life history
Outside mating they are largely solitary/resource-oriented. Males defend profitable flowers/feeders. Pair association is brief; females build the nest and perform parental care. Cornell reports 1-2 broods, 12-14 day incubation and 18-22 day nestling periods.

### Conservation and humans
Smithsonian lists the species as **Least Concern** and not endangered, while noting hazards including window collisions and domestic cats. Feeders and native flowering gardens create frequent human contact.

### Adaptations
Hover-specialized wing stroke, near-continuous lift, extreme aerobic metabolism, torpor, long nectar-feeding bill/tongue, visual stabilization, and seasonal migration fat loading.

### Fun facts
- About **53 wingbeats/s** according to Cornell.
- Feet are so reduced that normal walking/hopping is replaced by shuffling.
- Sustained hovering and backward flight are routine capabilities.
- Smithsonian reports roughly **18-20 hour** trans-Gulf flight capability.
- Cornell's oldest known banded bird was at least **9 years 2 months** old.
- The male gorget is iridescent and can look dark away from the reflecting angle.

### Site-ready summary
The Ruby-throated Hummingbird is a 3-4 g aerial specialist with almost no armor or absolute attack power but extraordinary control of three-dimensional space. It can hover, reverse, brake and maneuver through clutter while sustaining migration-scale flight when fueled. It is an elite Agility specialist, not a pound-for-pound reason to inflate physical power.

### Narrative profile
A Ruby-throat survives a matchup by refusing the force contest. At a few grams it cannot trade damage or absorb a serious hit, but its wings let it occupy and abandon tiny volumes of air with precision most vertebrates cannot match. The same physiology is expensive, demanding frequent refueling and seasonal fat loading, while torpor provides a radically different low-energy survival state. Its ABS identity is extreme Agility plus strong flight endurance and unusual physiology, paired with near-floor Attack, Protection and Raw Power.

## 9. Mandatory image audit
- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/hummingbird.png` **not created**
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Ruby-throated_Hummingbird_7377.jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/e/e5/Ruby-throated_Hummingbird_7377.jpg
- `file_format_verified`: source JPEG verified; no staging PNG exists
- `alpha_verified`: **false**
- `full_body_verified`: **false**; body/tail are visible but strict wing/feet completeness and unobscured silhouette are not certified
- `adult_verified`: **true**, Commons metadata keywords explicitly say Adult
- `sex_verified_or_unknown`: **male**, explicit metadata
- `license_status`: **CC BY-SA 2.0**, Commons Flickr-upload review confirmed
- `notes`: exact *A. colubris*, 2148x1637. Useful adult-male reference but not canonical female. No PNG is claimed because strict full-body suitability remains unresolved and connected GitHub writes are UTF-8 text-only.

## 10. Evidence and source ledger
| Source | Direct URL | Claim supported | Confidence / conflict |
|---|---|---|---|
| Cornell ID | https://www.allaboutbirds.org/guide/Ruby-throated_Hummingbird/id | 7-9 cm, 2-6 g, 8-11 cm, sex appearance | High |
| Cornell life history | https://www.allaboutbirds.org/guide/Ruby-throated_Hummingbird/lifehistory | precision flight, territorial chases/bill jabs, nesting | High |
| Cornell overview | https://www.allaboutbirds.org/guide/Ruby-throated_Hummingbird | ~53 wingbeats/s, reduced walking, UV/color vision, 9 y 2 mo record | High; longevity is record |
| Smithsonian National Zoo | https://nationalzoo.si.edu/animals/ruby-throated-hummingbird | adult size, migration, conservation | High |
| Smithsonian Migratory Bird Center | https://www.nationalzoo.si.edu/migratory-birds/hummingbirds | 18-20 h Gulf flight, torpor | High; some family-level context |
| Animal Diversity Web | https://animaldiversity.org/accounts/Archilochus_colubris/ | 3.4 g male / 3.8 g female, length, dimorphism | Moderate-high |
| Chai & Dudley 1999 | https://doi.org/10.1086/303179 | exact-species flight-performance experiments | High primary |
| Warrick et al. 2005 | https://doi.org/10.1038/nature03647 | hovering aerodynamics | High primary |
| Warrick et al. 2009 | https://doi.org/10.1098/rspb.2009.1003 | near-continuous lift | High primary |
| Goller & Altshuler 2014 | https://doi.org/10.1073/pnas.1415975111 | optic-flow hovering control | High experimental context |
| Zenzal et al. 2018 | https://doi.org/10.1186/s40462-017-0120-2 | exact-species migration/Gulf stopovers | High primary |
| Zenzal et al. 2016 | https://academic.oup.com/auk/article/133/2/237/5149176 | sex/age fuel loads and potential flight range | High primary |
| 2026 AJP study | https://journals.physiology.org/doi/10.1152/ajpregu.00071.2026 | torpor ATP-demand suppression | High exact-species physiology |
| Commons image | https://commons.wikimedia.org/wiki/File:Ruby-throated_Hummingbird_7377.jpg | adult male, 2148x1637, CC BY-SA 2.0 | High identity/license; strict full-body unresolved |

### Confidence and conflicts
The roster label is family-level but canonical values are species-specific. Speed claims often mix direct flight, dives and other species, so `speed_mps` stays 0.0. The 5-year lifespan field is moderate-low confidence and clearly separated from the 9 y 2 mo record. Canonical female size is not combined with male-specific territorial intensity.

## 11. Cross-animal normalization
- **Hornet:** hummingbird has greater absolute mass/endurance, but hornet venom is the more dangerous unusual offensive mechanism.
- **Harpy/Golden Eagle:** shared flight cannot compress the enormous Attack/Defense/Raw Power gap to large raptors.
- **Dragonfly:** both are aerial maneuver specialists; hummingbird adds vertebrate cognition and migration endurance without proportional-strength leakage.
- **Howler Monkey:** hummingbird is far more maneuverable in air but physically negligible beside a 7 kg primate.
- **Anti-inflation:** 98.0 Agility is supported by maneuver mechanics and does not propagate into Attack, Defense or Raw Power.
- **Speed/agility:** no unverified top-speed value drives Agility.
- **Double-counting:** migration supports Stamina; torpor supports Special/recovery economy; neither is physical Defense.
