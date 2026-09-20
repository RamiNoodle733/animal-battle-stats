# Hummingbird Research Overhaul

## 1. Identity and canonical specimen

- **Common name:** Hummingbird, resolved here to Ruby-throated Hummingbird
- **Scientific name:** *Archilochus colubris* (Linnaeus, 1758)
- **Family:** Trochilidae
- **Status:** Living
- **Exact ABS animal represented:** The production roster gives only `Hummingbird` / Trochilidae. This report resolves that broad family label to the Ruby-throated Hummingbird, *Archilochus colubris*, a well-studied North American species. Family-wide maxima from giant or unusually fast hummingbirds are not mixed into this specimen.
- **Canonical specimen:** Healthy fully mature **adult female**, **0.0038 kg**, **8.5 cm total length**, approximately **10.0 cm wingspan**.
- **Why female:** Unlike many combat-roster animals, female Ruby-throated Hummingbirds are larger. ADW gives about 3.4 g for males and 3.8 g for females; field/banding references describe females as roughly 15-25% larger in mass/wing chord. Males are more conspicuously territorial, but the larger female is selected under the project's stronger-sex rule while sex-specific aggression is documented separately.
- **Sexual dimorphism:** Adult males have the ruby gorget, forked dark tail, smaller body and shorter bill. Females are larger, lack the male gorget, and have longer bills and white-tipped outer tail feathers.
- **Population/season variation:** Pre-migratory birds can increase mass dramatically through fat deposition, so migration-loaded maxima are not used as normal adult mass.

## 2. Physical measurements

### Mass
Cornell gives a species range of **2-6 g**. ADW reports approximately **3.4 g male / 3.8 g female**. A long-running banding reference reports breeding males about **2.8-3.5 g**, females roughly 0.5 g heavier, with autumn hyperphagia increasing mass 35-70% and exceptional migration-loaded birds exceeding 5 g.

- **Canonical mass:** **0.0038 kg (3.8 g)** adult female
- **Credible ordinary adult context:** roughly 2-6 g across sex/season, with ~3.8 g a useful non-fattened female center
- **Confidence:** High.

### Length and wingspan
Cornell reports **7-9 cm total length** and **8-11 cm wingspan**; Smithsonian independently gives the same ranges.

- **Canonical `length_cm`: 8.5 cm**
- **Representative wingspan:** **10.0 cm**
- **Canonical `height_cm`: 0.0** because standing height is not a standard useful field for this tiny bird.
- **Confidence:** High.

### Bill and feet
Banding measurements place typical exposed culmen around **15-18 mm in males and 17-21 mm in females**. The bill is a feeding tool but can also be used in close aerial disputes. The feet are extremely small and specialized primarily for perching; Cornell notes the species cannot walk or hop normally and instead shuffles along a perch.

### Flight speed
Smithsonian reports hummingbirds near **30 mph (13.4 m/s)** in direct flight and above 45 mph in courtship dives, but those statements are group-level rather than a clean species-specific maximum. The primary *A. colubris* flight-performance literature demonstrates demanding wind-tunnel and hovering performance without supplying a single robust ecological top-speed field value suitable for this schema.

- **Canonical `speed_mps`: 0.0**
- **Reason:** do not convert a family-level or display-dive figure into a species maximum.

### Wingbeat and flight mechanics
Cornell reports about **53 wingbeats/s** for Ruby-throated Hummingbirds. Experimental hummingbird research shows hovering is sustained by highly specialized wing kinematics; aerodynamic work found the downstroke produces about three times the lift of the upstroke, while later work found near-continuous lift through wing turnaround. Hummingbirds can hover, brake sharply, fly sideways and backwards, and execute extremely tight turns.

### Lifespan
Cornell's banding record lists a female at **at least 9 years 2 months**. This is a longevity record, not mean wild lifespan. Because a robust mean adult life expectancy was not recovered in this run, the canonical field uses a conservative reference value rather than the old 15-year placeholder.

- **Canonical `lifespan_years`: 5.0**
- **Confidence:** Moderate-low as a representative lifespan field; high that 15 years should not be retained as a normal value.
- **Known record context:** at least 9 years 2 months.

### Bite force
No defensible *A. colubris* bite-pressure measurement was found. The old 100 PSI value is unsupported.

- **Canonical `bite_force_psi`: 0.0**

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

### Future structured fields

```json
{
  "canonical_sex": "female",
  "wingspan_cm": 10.0,
  "bill_length_cm": 1.9,
  "hovering_wingbeat_hz": 53.0,
  "flight_modes": ["forward", "hover", "backward", "sideways"],
  "torpor_capable": true
}
```

## 4. Combat biology

### Weapons and offensive mechanics
A hummingbird has almost no absolute-force offense on a 225-animal roster containing large predators and megafauna. Its pointed bill can jab in close aerial disputes, and the feet can grasp, but neither is a dedicated killing system. Cornell documents aggressive males defending flowers/feeders through chases, dogfights and occasional bill jabs. Against similarly tiny fragile animals this matters; against vertebrates even modestly larger, practical damage is negligible.

### Defense and durability
There is no armor, thick hide, shell or meaningful impact protection. Defense is overwhelmingly avoidance. Tiny size, rapid acceleration, hovering, instant braking and multidirectional flight make acquisition difficult, but a successful hit from a much larger animal is likely catastrophic.

### Agility and maneuverability
This is the species' defining combat-relevant strength. Ruby-throats can stop abruptly, hover, and adjust up/down/sideways/backwards. Experimental hummingbird studies show visual optic flow is actively used to stabilize hovering. Other controlled studies demonstrate asymmetric wingbeat kinematics during tight turns and sideways/ballistic strategies for negotiating openings narrower than a wingspan. Agility is therefore elite even though raw speed is not used as a substitute.

### Stamina and energetics
Hovering is metabolically extreme, but Ruby-throats are also long-distance migrants. Smithsonian reports Ruby-throated Hummingbirds can cross the Gulf of Mexico in a single 18-20 hour flight, and migration research confirms broad-origin migrants using Gulf Coast stopovers. Older males can carry larger fuel loads and achieve longer potential flight ranges. This supports strong sustained flight endurance when fueled, but not unlimited combat output.

At night or during energetic stress, hummingbirds can use torpor. A 2026 physiological study on *A. colubris* found major ATP-demand suppression during torpor, including a 43% decrease in Na+/K+ ATPase activity. Torpor is an energy-survival mechanism, not an active-fight boost.

### Senses
Vision is exceptional for precise flight control. Experimental work demonstrates that moving visual backgrounds alter hovering stability, showing heavy reliance on optic flow. Hummingbirds also have good color vision including ultraviolet sensitivity. Hearing and spatial memory support territory/resource use, but no unsupported super-sense claims are added.

### Intelligence and tactics
Ruby-throats learn spatial resource locations, defend profitable feeding patches, modulate movement in aerial contests and undertake long-distance migration. Experimental flight work also shows locomotor adjustment with sensory conditions. This supports good avian spatial learning and tactical control, but there is no basis for corvid/parrot-level tool/problem-solving scores.

### Fighting behavior
Adult males aggressively defend food territories with chases, dogfights and occasional bill jabs. Females are larger but males are the more documented territorial fighter. The canonical female therefore gains size but does not inherit male-specific aggression without qualification.

### Predation and predator defense
The species relies on rapid flight, cover, vigilance and tiny target size. Smithsonian notes risks including larger predators, domestic cats and window collisions. The bird is not a predator specialist, though it catches small insects and spiders in addition to taking nectar.

### Environmental strengths
- Dense vegetation and clutter where precise hovering and aperture negotiation matter
- Open air with escape space
- Flower-rich habitat that supports rapid refueling
- Vertical environments where multidirectional flight defeats terrestrial pursuit

### Environmental limitations and weaknesses
- Almost no passive protection
- Extremely low absolute mass and force
- Energy-intensive active flight
- Tiny feet provide poor terrestrial locomotion
- Cold/food scarcity can force energy conservation
- Any clean strike, bite, talon hit or collision from a much larger opponent can end the matchup

### Matchup archetypes
**More favorable:** tiny arthropods or similarly tiny fragile opponents that cannot track or reach a hovering target; contests dominated by evasion rather than damage.

**Unfavorable:** essentially every medium or large vertebrate if contact occurs, aerial predators with superior reach, web/ambush traps that negate flight, and enclosed spaces without maneuver room.

## 5. Proposed ABS substats

| Substat | Score | Justification |
|---|---:|---|
| Size | **0.8** | 3.8 g is near the extreme low end of the entire roster. |
| Raw Power | **1.5** | Extraordinary mass-specific flight muscle output does not translate to meaningful absolute combat force. |
| Weaponry | **5.0** | A pointed 17-21 mm female bill can jab tiny rivals but is not a serious roster-wide weapon. |
| Protection | **1.5** | Feathers and a light avian skeleton offer essentially no armor. |
| Toughness | **5.0** | Physiologically capable but mechanically fragile against larger opponents. |
| Speed | **70.0** | Fast flight is real, but no species-specific maximum is promoted and speed is kept distinct from maneuverability. |
| Maneuverability | **98.0** | Sustained hover, reverse/sideways flight, abrupt braking and experimentally demonstrated tight-turn/aperture control place it near the roster ceiling. |
| Endurance | **82.0** | Extreme metabolic flight plus migration-scale sustained flight when fueled, tempered by tiny energy reserves and refueling dependence. |
| Recovery | **67.0** | Rapid refueling and torpor aid energetic recovery, but neither repairs traumatic injury unusually fast. |
| Tactics | **60.0** | Territorial aerial contests, spatial resource use and precise flight control support flexible small-bird tactics. |
| Senses | **82.0** | Vision and optic-flow processing are central to extraordinary flight precision; UV-capable color vision adds resource detection value. |
| Ferocity | **38.0** | Territorial males can be aggressive, but the canonical female is not assigned male territoriality wholesale. |
| Abilities | **78.0** | Hover/reverse multidirectional flight plus torpor are rare, matchup-relevant systems, without inflating damage. |

## 6. Proposed six headline ABS ratings

| Headline | Score | Justification |
|---|---:|---|
| **Attack** | **5.0** | Tiny mass and a slender bill sharply cap absolute damage despite aerial jabbing behavior. |
| **Defense** | **8.0** | Evasion is superb but passive protection is almost absent once struck. |
| **Agility** | **98.0** | One of the roster's strongest candidates for a true maneuverability extreme: hover, reverse, lateral movement, abrupt braking and tight turns. |
| **Stamina** | **82.0** | Migration and sustained flight are exceptional for a 3.8 g bird, though energy reserves are small and active metabolism is costly. |
| **Intelligence** | **61.0** | Strong spatial/resource learning and tactical flight behavior, below tool-specialist parrots and corvids. |
| **Special** | **79.0** | Unique sustained hovering/multidirectional flight and deep torpor create unusual matchup and survival options without adding physical power. |

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities
1. **Six-Axis Hover Control** - Specialized wing kinematics permit sustained hovering, reverse and sideways flight, abrupt braking and very tight repositioning. This is primarily an evasion/positioning ability, not an Attack multiplier.
2. **Metabolic Shutdown** - Torpor can sharply suppress energy expenditure during cold or food-limited periods; 2026 physiology documents substantial downregulation of ATP-demand pathways. It improves survival/recovery economy, not active combat strength.

### Unique traits
1. **Gulf-Crossing Fuel Cycle** - Pre-migratory hyperphagia and fat storage can support exceptionally long migratory flight bouts, including trans-Gulf movements.
2. **Female-Biased Frame** - Females are larger and longer-billed than males, reversing the common roster assumption that the male must automatically be the stronger canonical specimen.

## 8. Expanded profile content

### Habitat and range
Ruby-throated Hummingbirds breed broadly across eastern North America and winter mainly in Mexico and Central America, using deciduous/open woodland, forest edges, fields, orchards, gardens, riparian areas, scrub and tropical dry forest. Migration research confirms birds from natal latitudes spanning roughly 30-50° N converging on Gulf Coast stopovers.

### Diet and ecology
They consume floral nectar and also catch insects and spiders. Nectar supplies rapid carbohydrate energy while arthropods provide protein and other nutrients. Their pollination role links them tightly to flowering-plant communities.

### Social structure
Outside mating, they are largely solitary and strongly resource-oriented. Males can defend profitable flowers and feeders through aerial pursuit. Pair bonds are brief; males do not provide prolonged parental care.

### Reproduction and life history
Cornell reports 1-2 broods, incubation around 12-14 days and nestling periods around 18-22 days. The female builds the tiny nest and performs parental care. The oldest known banded Ruby-throat cited by Cornell was a female at least 9 years 2 months old.

### Conservation and human interaction
Smithsonian lists the species as Least Concern and not endangered, while noting anthropogenic hazards such as window collisions and domestic cats. Feeders and native flowering gardens bring the species into frequent contact with people.

### Major adaptations
- Highly specialized hovering wing stroke and near-continuous lift production
- Extremely high aerobic metabolism during flight
- Torpor for overnight energetic conservation
- Long slender bill and extensible tongue for nectar feeding
- Exceptional visual stabilization and three-dimensional flight control
- Seasonal fat loading for migration

### Genuine fun facts
- Cornell reports roughly **53 wingbeats per second**.
- The feet are so reduced for aerial life that the bird cannot normally walk or hop; it shuffles on a perch.
- Ruby-throats can hover and fly backward.
- Smithsonian reports trans-Gulf flights lasting roughly **18-20 hours**.
- The oldest known banded individual in Cornell's account was a female at least **9 years 2 months** old.
- The male's ruby gorget is iridescent and can appear dark when viewed away from the reflecting angle.

### Concise site-ready summary
The Ruby-throated Hummingbird is a 3-4 g aerial specialist whose almost nonexistent armor and attack power are offset by extraordinary flight control. It can hover, reverse, brake abruptly and maneuver through clutter while sustaining migration-scale flight when fueled. In ABS terms it is an elite Agility specialist, not a pound-for-pound excuse to inflate physical power.

### Narrative profile
A Ruby-throated Hummingbird fights the roster by refusing the kind of fight most animals are built to win. At only a few grams it cannot trade force, absorb a serious strike or overpower a meaningful vertebrate opponent. Its advantage is control of space. The wings can support a stationary hover, reverse the bird out of danger, redirect it laterally and brake with precision that conventional forward-flight birds cannot match.

That control is expensive. Hummingbirds run some of the most demanding vertebrate flight metabolisms, refuel repeatedly, store fat before migration and can retreat into torpor when the energetic equation becomes unfavorable. The same biology that makes them astonishing endurance migrants does not make them durable fighters. Their high ABS values belong in Agility, flight endurance, sensory control and unusual physiology, while Attack, Defense, Size and Raw Power remain near the bottom of the absolute roster.

## 9. Mandatory image audit

- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/hummingbird.png` **not created**
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Ruby-throated_Hummingbird_7377.jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/8/87/Ruby-throated_Hummingbird_7377.jpg
- `file_format_verified`: source is JPEG; no staging PNG exists
- `alpha_verified`: **false**
- `full_body_verified`: **false** under strict IMAGE_REQUIREMENTS standard
- `adult_verified`: **true**; Commons EXIF keywords explicitly say Adult
- `sex_verified_or_unknown`: **male**, explicitly in metadata
- `license_status`: **CC BY-SA 2.0 on Commons, Flickr upload-bot reviewed**
- `notes`: Exact *A. colubris*, 2148x1637, adult male, reusable provenance. The connected GitHub writer is text-only and cannot commit a PNG binary. Although the flight photograph is promising, strict visibility of the complete wings, tail and feet was not certified strongly enough to mark the source full-body. No PNG completion is claimed. The canonical combat specimen is female because females are larger; this male remains only an image candidate.

## 10. Evidence and source ledger

| Source | Direct URL | Supports | Confidence / caveat |
|---|---|---|---|
| Cornell Lab, All About Birds, Ruby-throated Hummingbird identification | https://www.allaboutbirds.org/guide/Ruby-throated_Hummingbird/id | 7-9 cm length, 2-6 g mass, 8-11 cm wingspan, adult sex appearance, precision flight | High institutional species account |
| Cornell Lab, life history | https://www.allaboutbirds.org/guide/Ruby-throated_Hummingbird/lifehistory | hovering/multidirectional flight, male territorial chases and bill jabs, nesting | High |
| Cornell Lab, overview | https://www.allaboutbirds.org/guide/Ruby-throated_Hummingbird | ~53 wingbeats/s, reduced walking, UV/color vision, 9 y 2 mo banding longevity | High; longevity is a record, not mean lifespan |
| Smithsonian National Zoo | https://nationalzoo.si.edu/animals/ruby-throated-hummingbird | adult size, trans-Gulf migration, conservation context | High |
| Smithsonian Migratory Bird Center, Hummingbirds | https://www.nationalzoo.si.edu/migratory-birds/hummingbirds | 18-20 h Gulf flight, torpor, hummingbird flight context | High, some statements family-level |
| Animal Diversity Web | https://animaldiversity.org/accounts/Archilochus_colubris/ | 3.4 g male / 3.8 g female, 7.5-9 cm, dimorphism | Moderate-high secondary academic account |
| Chai & Dudley 1999, American Naturalist | https://doi.org/10.1086/303179 | *A. colubris* maximum-flight-performance experiments, hovering and fast forward flight constraints | High peer-reviewed primary research |
| Warrick, Tobalske & Powers 2005, Nature | https://doi.org/10.1038/nature03647 | hovering aerodynamics; downstroke/upstroke lift asymmetry | High peer-reviewed |
| Warrick et al. 2009, Proceedings B | https://doi.org/10.1098/rspb.2009.1003 | near-continuous lift through wing turnaround | High peer-reviewed |
| Goller & Altshuler 2014, PNAS | https://doi.org/10.1073/pnas.1415975111 | optic-flow control of hovering stability | High peer-reviewed; hummingbird experimental model, not used for species-specific physical values |
| Sapir & Dudley 2012, JEB | https://journals.biologists.com/jeb/article/215/20/3603/11012/Backward-flight-in-hummingbirds-employs-unique | backward flight mechanics/energetics | High peer-reviewed; hummingbird model evidence |
| Badger et al. 2016, Royal Society Interface | https://doi.org/10.1098/rsif.2016.0110 | turning control and asymmetric wingbeats | High peer-reviewed; Anna's hummingbird, used only for family flight-mechanics context |
| Zenzal et al. 2018, Movement Ecology | https://doi.org/10.1186/s40462-017-0120-2 | Ruby-throat migration origins and Gulf stopover ecology | High peer-reviewed exact species |
| Zenzal et al. 2016, The Auk | https://academic.oup.com/auk/article/133/2/237/5149176 | sex/age migration fuel loads and potential flight range | High peer-reviewed exact species |
| 2026 American Journal of Physiology study | https://journals.physiology.org/doi/10.1152/ajpregu.00071.2026 | torpor ATP-demand suppression, 43% Na+/K+ ATPase reduction | High peer-reviewed exact species |
| Commons image record | https://commons.wikimedia.org/wiki/File:Ruby-throated_Hummingbird_7377.jpg | exact species, adult male metadata, 2148x1637, CC BY-SA 2.0 provenance | High for identity/license; strict complete anatomy not verified |

### Conflicts and uncertainty
- The production `Trochilidae` label is family-level. All canonical numbers here are explicitly *A. colubris* and should not be presented as universal hummingbird maxima.
- Published/web speed numbers often mix level flight, dives and other hummingbird species. `speed_mps` remains 0.0.
- 5.0 years is a conservative representative lifespan field, not a measured wild mean. The robust fact is the 9 y 2 mo banding record.
- The canonical female is larger, while most direct territorial-fighting observations concern males. Ratings do not silently combine maximum female size with maximum male aggression.

## 11. Cross-animal normalization notes

- **Versus Hornet:** Hummingbird has greater absolute mass and far greater sustained aerial range, but the hornet's sting gives it a much stronger unusual offensive mechanism. Hummingbird therefore wins Agility/Endurance but not venom-based Special lethality.
- **Versus Harpy/Golden Eagle:** all are flying birds, but the hummingbird must remain vastly below large raptors in Attack, Defense and Raw Power. Shared flight cannot compress the physical gap.
- **Versus Dragonfly:** both are extreme aerial maneuverers. The hummingbird gains vertebrate cognition and migration endurance; the dragonfly's insect flight mechanics remain a distinct comparison rather than an excuse to force a tie.
- **Versus Howler Monkey:** the hummingbird is dramatically more maneuverable in open three-dimensional space but has negligible physical attack and protection compared with even a 7 kg primate.
- **Anti-inflation check:** 98.0 Agility is intentionally near-ceiling because direct biomechanics support unusual maneuverability. It does not propagate into Attack, Defense or Raw Power.
- **Speed/agility check:** no unverified top-speed figure is used to justify Agility. Hovering, reversal, braking, turning and aperture negotiation are the basis.
- **Double-counting check:** torpor primarily supports Special/recovery economy; migration supports Stamina; neither is counted as physical Defense.
