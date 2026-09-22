# Osprey (*Pandion haliaetus*) research report

## 1. Identity and canonical specimen
- **Common name:** Osprey / fish hawk.
- **Scientific name:** *Pandion haliaetus* (Linnaeus, 1758), family Pandionidae.
- **Living:** yes.
- **Exact animal represented:** the cosmopolitan osprey species *P. haliaetus*. Regional subspecies vary in size and plumage; this report uses the larger North American/temperate adult range for a representative combat specimen without treating a record bird as normal.
- **Canonical combat specimen:** healthy prime mature **adult female**, **1.8 kg**, **58.0 cm body length**, approximately **170 cm wingspan**.
- **Why female:** reversed sexual size dimorphism is clear. Animal Diversity Web reports North American males at 1.2-1.6 kg and females at 1.6-2.0 kg, with females about 20% heavier and 5-10% greater in wingspan on average. The larger female is therefore the stronger canonical fighting sex.
- **Population variation:** tropical/subtropical ospreys tend to be smaller than higher-latitude birds. ADW describes four subspecies and identifies *P. h. haliaetus* and *P. h. carolinensis* as among the larger forms. Size and plumage therefore should not be treated as globally invariant.

## 2. Physical dimensions and functional anatomy

### Mass, length and wingspan
ADW reports 1.2-2.0 kg overall, 55-58 cm length and 145-170 cm wingspan, while Cornell gives 54-58 cm, 1.4-2.0 kg and 150-180 cm wingspan for both sexes combined. A **1.8 kg** female is a strong but representative adult rather than the extreme upper endpoint.

- **Canonical `weight_kg`: 1.8**
- **Canonical `length_cm`: 58.0**
- **Canonical `height_cm`: 0.0**, because no standardized standing-height measure was recovered and body length is the defensible schema dimension.
- **Reference wingspan:** about **170 cm** for the canonical large female, with 145-180 cm credible broad context across sources/populations.

### Flight speed
The live catalogue's old 36 km/h value is not used as an anchor. Secondary websites commonly claim 40-50 mph or more during dives, but this run did not recover an instrumented peer-reviewed species-specific physiological maximum that cleanly distinguishes level flight, pursuit descent and gravity-assisted plunge. Therefore:

- **Canonical `speed_mps`: 0.0**
- High aerial performance is represented editorially in Speed/Agility without laundering an uncertain internet maximum into a factual field.

### Lifespan
The US Forest Service synthesis gives a greatest recorded longevity of **25 years** and survival context showing that most fledged birds die much earlier. National Wildlife Federation likewise reports an oldest known bird of 25 years. Because maximum longevity is not average lifespan, a canonical normal adult-life field should remain conservative.

- **Canonical `lifespan_years`: 15.0** as a representative upper-normal wild-life reference, while recording **25 years** as a well-supported maximum in the source ledger.
- **Uncertainty:** moderate. Sources differ on whether their lifespan summaries represent averages, maxima or banding records, so the site should eventually distinguish expected adult lifespan from maximum longevity.

### Feet, talons and fish-grip system
The feet are the main weapons and one of the most specialized raptorial grasping systems. ADW documents relatively long legs, long sharp curved claws, **spiny footpads (spicules)** and a **reversible outer toe**. The reversible fourth toe can oppose the second and third toes, producing a stronger two-forward/two-back hold on slippery fish. A peer-reviewed Ibis paper specifically discusses this reversible fourth toe as a well-known osprey adaptation for catching and carrying fish.

A 2018 *Brain and Behavior* study of fish-carrying posture found that live fish are seized with the talons rather than the bill, and that in two-foot carriage the bird usually aligns the fish head-forward under its body. In the study's Ospreys Only dataset, 112 fish were head-forward versus 10 backward. This is strong behavioral evidence that the osprey actively stabilizes captured prey and reduces aerodynamic penalty after the strike.

No defensible species-specific talon-length dataset suitable for a canonical millimeter field was recovered in this run, so no weapon dimension is fabricated.

### Bill and bite force
The hooked bill tears fish after the feet establish control. No defensible osprey bite-pressure measurement with force and contact-area methodology was found.

- **Canonical `bite_force_psi`: 0.0**
- The old live-site 100 PSI placeholder is rejected as unsupported.

### Water-entry defenses
ADW and National Wildlife Federation describe dense/oily water-resistant plumage and nostril valves that close during plunge-dives. These are real fishing adaptations, but they are not armor. They reduce the physiological and aerodynamic cost of entering water and help the bird remain functional after a strike.

## 3. Canonical proposed factual fields

```json
{
  "weight_kg": 1.8,
  "height_cm": 0.0,
  "length_cm": 58.0,
  "speed_mps": 0.0,
  "lifespan_years": 15.0,
  "bite_force_psi": 0.0
}
```

Recommended future structured fields:

```json
{
  "wingspan_cm": 170.0,
  "canonical_sex": "female",
  "locomotion_mode": "powered flight / soaring / hovering / plunge-diving / terrestrial walking",
  "maximum_documented_longevity_years": 25.0,
  "primary_weapon": "talons and specialized fish-grip feet"
}
```

## 4. Combat biology

### Primary and secondary weapons
**Primary weapon:** both feet, delivering four curved talons per foot into a target while the toes clamp. The reversible outer toe and spicules improve retention on wet, struggling prey.

**Secondary weapon:** the hooked bill, effective for tearing once prey is controlled but not the normal initial capture weapon.

### Offensive mechanics
Ospreys typically search 10-40 m above water, hover or adjust position, then descend and swing the legs forward immediately before impact. They enter feet-first and can briefly submerge. Strong wingbeats then lift bird and prey clear of the surface. This is a specialized capture sequence, not merely generic raptor flight.

ADW reports fishing success varying roughly **24-74% of dives**, depending on conditions and individual skill. The species is therefore a highly competent but not infallible strike predator. Fish are almost the entire diet, and the attack system is optimized for elongated, slippery aquatic prey rather than generalized terrestrial grappling.

### Prey scale
A Latvian study covering **1,501 prey specimens from 119 nests** found all identified prey were fish; mean measured fish length was **27.8 cm** with corresponding mean mass **368 g**. Corsican breeding ospreys commonly took mullets averaging about **297 mm and 235 g**. These direct diet data are more useful for absolute scaling than dramatic anecdotes.

The canonical 1.8 kg female can control prey representing a meaningful fraction of her body mass, but this does not justify scaling her raw power near much larger eagles, mammalian predators or megafauna.

### Defense and durability
Physical protection is low. Feathers and the light avian skeleton cannot absorb serious crushing or biting trauma. The bird's real defense is spatial: altitude, flight, rapid approach/disengagement and the ability to present talons toward a threat. Those belong primarily in Agility and tactical matchup analysis rather than being miscounted as armor.

The oily plumage and nasal valves are specialized defenses against water entry, not opponent damage. A damaged wing is a severe failure state.

### Locomotion and maneuverability
Ospreys soar, flap, hover briefly, brake, plunge feet-first and power back out of the water. Their long narrow wings and relatively slender body favor efficient aerial search and fishing. They are exceptionally maneuverable compared with terrestrial animals, but the 1.5-1.8 m wingspan requires operating space and is less suited to cramped environments than smaller birds.

Agility is therefore elite but not a roster ceiling. Top speed is deliberately kept separate from turning, braking, strike alignment and three-dimensional repositioning.

### Endurance and migration
Satellite telemetry demonstrates genuine long-distance migration. A USGS study tracked **74 adult ospreys** from four U.S. breeding populations; western birds wintered mostly in Mexico, with some reaching El Salvador and Honduras, while Minnesota birds used routes through Mexico, the Mississippi Valley/Gulf and Caribbean. A separate USGS study found adult wintering ospreys remained on wintering grounds roughly **154 days for males and 167 days for females**, with strong site fidelity and localized daily movements.

This supports strong seasonal endurance and navigation. It does not mean the bird sustains maximal flapping output continuously, because soaring, gliding, stopovers and energy conservation are important.

### Senses
Vision is the decisive hunting sense. The osprey must locate fish through an air-water interface, judge position while moving, track prey near the surface and time a feet-first interception. The species also uses acoustic and visual communication around nests. No evidence supports exotic sensory abilities beyond high-grade raptor vision and normal avian senses.

### Intelligence and tactics
Ospreys are behaviorally specialized rather than broadly tool-using. Tactical strengths include prey selection, hover/approach adjustment, timing water entry, fish repositioning after capture, nest-site fidelity and long-distance navigational memory. A Florida study found adults changed prey preference and foraging habitat as fish abundance shifted, evidence of flexible foraging rather than rigid targeting.

The fish-carriage study also shows consistent post-capture handling: head-forward alignment dominates in flight. These behaviors justify solid tactics, but not corvid, parrot, cetacean or great-ape intelligence scores.

### Hunting behavior
Diet is extraordinarily fish-dominated. ADW states fish account for at least 99% of prey items, though snakes, birds, mammals and other prey are occasionally taken. USFS notes ospreys penetrate only about **1 m** below the surface, so accessible surface and shallow-water fish are the core resource.

This specialization creates both strength and weakness. Against fish near the surface, the bird's anatomy is unusually optimized. Against armored terrestrial animals or opponents that can force sustained ground grappling, much of that specialization loses value.

### Intraspecific fighting and aggression
Ospreys defend nests and breeding territories using alarm calls, aerial approaches and diving displays. Territorial behavior supports moderate Ferocity, but the species is not a close-combat specialist against similarly sized raptors. Long adult life and the high cost of wing injury favor risk management.

### Predator defense
USFS identifies great horned owls as predators that kill adult ospreys with some regularity, while crocodilians can take roosting birds and eggs/chicks face additional threats. This is important calibration evidence: flight and talons make an osprey dangerous, but they do not make it physically durable against another capable predator.

### Environmental advantages
- Open water and shorelines provide the full fishing attack cycle.
- Altitude grants reconnaissance and initiative over terrestrial opponents.
- Open air allows repeated approach and disengagement.
- Water-resistant plumage and nasal valves permit brief plunge submersion.
- Long-distance flight and navigation provide excellent strategic mobility.

### Environmental disadvantages
- Dense forest interiors, caves and buildings restrict wing use.
- Ground grappling removes the main mobility advantage.
- Deep or turbid water can reduce prey access and visual targeting.
- Talons require close physical contact.
- Wing injury is disproportionately disabling.
- The fish-grip system is less optimized for large furry or heavily armored terrestrial opponents.

### Major weaknesses
1. Only about 1.8 kg on an absolute roster.
2. No armor or thick protective tissue.
3. Primary weapons require direct contact.
4. Grounded combat is a major failure state.
5. Extreme dietary specialization limits generalized predatory experience.
6. Large wings require space.

### Matchup archetypes
**Favorable:** small exposed vertebrates, surface aquatic prey, opponents unable to contest altitude, open environments where the osprey can choose engagement angle.

**Unfavorable:** larger raptors, cats/canids capable of surviving the initial strike, armored/shelled animals, large grapplers, cramped environments, and opponents that can seize the body or wing after contact.

## 5. Proposed ABS substats
All scores are absolute across the full 225-animal roster.

| Substat | Score | Justification |
|---|---:|---|
| Size | **7.5** | 1.8 kg is substantial for a fishing raptor but extremely small beside serious mammalian combatants and megafauna. |
| Raw Power | **11.5** | Strong flight and prey-lifting performance for body mass, but low absolute force. No pound-for-pound inflation. |
| Weaponry | **44.0** | Curved talons, bilateral grasp, reversible outer toe and spicules form an excellent specialized capture system; bill is secondary. |
| Protection | **7.0** | Water-resistant feathers help with fishing but provide little protection from bites, crushing or puncture. |
| Toughness | **15.0** | Capable of repeated water entry but physically fragile once a larger attacker lands a serious hit. |
| Maneuverability | **87.0** | Three-dimensional flight, hover adjustment, braking, feet-first plunge and water exit provide elite control. |
| Speed | **67.0** | Fast attack flight is clear, but unsupported internet dive maxima are not treated as measured fact. |
| Endurance | **82.0** | Long-distance migration plus efficient flight and strong seasonal movement evidence. |
| Recovery | **27.0** | No exceptional regeneration; wing or skeletal trauma can be disabling. |
| Tactics | **69.0** | Flexible prey/habitat selection, strike timing and consistent aerodynamic fish handling. |
| Senses | **85.0** | High-grade visual targeting through the air-water interface is central to hunting. |
| Ferocity | **53.0** | Territorial and decisive in attacks, but a specialized fisher rather than a reckless generalized fighter. |
| Abilities | **77.0** | Reversible toe, spicules, water-entry adaptations and aerial plunge geometry combine into a genuinely unusual package. |

## 6. Proposed six headline ABS ratings

| Headline | Score | Justification |
|---|---:|---|
| **Attack** | **31.0** | Excellent talon delivery and prey retention for a 1.8 kg bird, but absolute damage is far below the Golden Eagle and medium mammalian predators. |
| **Defense** | **17.0** | Flight-based avoidance is strong, physical protection is poor, and wing/body trauma is dangerous. |
| **Agility** | **87.0** | Elite aerial positioning and plunge control without equating uncertain dive speed with agility. |
| **Stamina** | **82.0** | Strong migration and efficient aerial endurance are directly supported by satellite telemetry. |
| **Intelligence** | **65.0** | Flexible prey selection, spatial memory and handling tactics, but no evidence for top-tier generalized cognition. |
| **Special** | **83.0** | The reversible toe, spicules, water-entry physiology and feet-first plunge system are unusually specialized and matchup-changing. |

### Cross-check against nearby researched controls
Golden Eagle is the clearest avian control: at 5.0 kg it has Attack 40.0, Weaponry 57.0 and comparable elite aerial maneuverability. Osprey therefore stays distinctly below it in absolute Attack/Raw Power while remaining close in aerial Agility. The osprey's Special can exceed Golden Eagle's because its fishing anatomy is more unusual, without implying greater overall combat power. Small-animal proportional feats are not allowed to erase the 2.8x mass gap.

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities
1. **Fish-Lock Talons** - A reversible outer toe, long curved claws and spiny footpads create a two-forward/two-back gripping configuration that resists slipping on wet, struggling prey.
2. **Plunge-and-Rise** - Water-resistant plumage, closable nostrils, feet-first entry and powerful wingbeats let the osprey strike through the surface and regain flight with captured fish.

### Unique traits
1. **Head-First Haul** - Captured fish are actively realigned beneath the bird with the head facing forward, a strongly documented carriage pattern that stabilizes prey and reduces drag.
2. **Cosmopolitan Fish Specialist** - The species occurs across most of the world and obtains at least about 99% of prey items from fish, an unusually narrow trophic specialization for such a widespread raptor.

## 8. Expanded profile content

### Habitat and geographic range
Ospreys occur around freshwater, estuarine and marine environments across much of the world outside Antarctica. They use rivers, lakes, reservoirs, marshes, estuaries, coasts and other waters where fish approach the surface. Northern populations commonly migrate long distances; some tropical populations are resident.

### Diet and ecology
Fish dominate the diet to an exceptional degree. Local prey changes with availability. Corsican birds heavily used mullets, while Latvian breeding birds took carp, tench and Prussian carp prominently. A Florida study showed adults shifting between sunfish and shad and changing foraging habitat as prey abundance changed. This makes the osprey both highly specialized at the trophic level and flexible within its fish prey base.

### Social structure
Ospreys are generally pair-based around breeding territories rather than pack hunters. Pairs often reuse nest sites, and both sexes participate in reproduction. The male commonly supplies fish while the female performs a larger share of incubation and brooding. The canonical battle model remains one individual and receives no multiplied score for pair behavior.

### Reproduction and life history
Typical clutches contain two to four eggs. Young fledge at roughly two months and continue receiving parental support afterward. USFS reports breeding may begin around three years but can be delayed in populations where nest sites are limiting. Long-lived adults show strong nest and winter-site fidelity.

### Conservation
The osprey is currently a conservation success story across much of North America. DDT and other contaminants caused severe twentieth-century declines and reproductive failure, but populations rebounded after restrictions. USGS continues to use ospreys as useful indicators of aquatic contaminant exposure because they occupy a high trophic position and depend strongly on fish.

### Major adaptations
- Reversible fourth toe.
- Spicules on the footpads.
- Long sharp talons and relatively long legs.
- Water-resistant oily plumage.
- Closable nostrils for plunge entry.
- Long wings for efficient aerial search.
- Behaviorally optimized head-first fish carriage.

### Human interaction
Ospreys readily use utility poles, channel markers and purpose-built nest platforms, sometimes placing them near human activity. This adaptability aided recovery in many areas, but fishing line, contaminants, collision/electrocution and habitat changes remain hazards.

### Genuine fun facts
- Ospreys can reverse the outer toe so the foot can grip fish with two toes forward and two backward.
- In a published image-based study, head-forward fish carriage overwhelmingly dominated in flight.
- ADW reports fishing success ranging from roughly 24% to 74% of dives depending on conditions and skill.
- Satellite-tagged North American adults can migrate from northern breeding grounds into Mexico, Central America, the Caribbean and South America.
- The species can briefly submerge during a fishing strike even though it is not a diving seabird.
- Adult plumage replaces the juvenile pattern by roughly 18 months according to ADW.

### Concise site-ready summary
The Osprey is a 1.8 kg fish-specialist raptor built around precision aerial capture rather than brute force. A reversible outer toe, spiny footpads, curved talons, closable nostrils and water-resistant plumage let it plunge feet-first, lock onto slippery fish and power back into the air. It has elite aerial agility and strong migratory stamina, but low physical protection and modest absolute power compared with larger predators.

### Rich narrative profile
The osprey's battle profile is a lesson in specialization. It is not a miniature eagle that should inherit large-raptor power scores by association. At roughly 1.8 kg, its absolute raw force is limited. What makes it dangerous is the precision with which nearly every part of its capture system solves the same problem: seize a moving, wet animal at the boundary between air and water and do not let go.

The attack begins with vision and geometry. The bird searches from altitude, adjusts with flapping or a brief hover, commits to a descent, then swings the feet forward before impact. Curved talons penetrate while the reversible outer toe changes grip geometry and the spicules add friction. Water-resistant feathers and nasal valves reduce the cost of entry. Strong wingbeats recover altitude. After capture, the osprey does not simply carry the fish however it landed; published observations show a strong tendency to align the fish head-forward beneath the body.

That integrated system deserves a high Special score, but calibration matters. The same bird remains physically delicate. A fox-sized mammal that survives first contact and reaches the torso can reverse the matchup quickly. A golden eagle has much more absolute mass and a more generalized terrestrial killing system. An armored animal may render the talons ineffective. The osprey is therefore an elite aerial specialist with a narrow but highly refined attack architecture, not a broadly dominant fighter.

## 9. Mandatory image assessment

- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/osprey.png` (**not created**)
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Osprey_(Pandion_haliaetus_carolinensis)_in_flight_Tofino.jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/d/dc/Osprey_%28Pandion_haliaetus_carolinensis%29_in_flight_Tofino.jpg
- `file_format_verified`: source JPEG metadata verified; final PNG absent
- `alpha_verified`: no
- `full_body_verified`: visually the 5469x3646 source shows the complete flying silhouette, both wings and tail inside frame, but the feet are tucked/partly hidden by the body and therefore strict all-appendage visibility is not certified
- `adult_verified`: no; source metadata does not explicitly state adult
- `sex_verified_or_unknown`: unknown
- `license_status`: CC BY-SA 4.0, reusable with attribution/share-alike
- `notes`: Exact *P. h. carolinensis*, photographed in Tofino, BC by Charles J. Sharp on 13 July 2026. Original was directly opened and inspected. Excellent resolution and clean sky background, but IMAGE_REQUIREMENTS requires explicit adulthood and complete visible appendages; those conditions are not simultaneous here. Current connected GitHub writer is UTF-8 text-only, so no PNG binary is fabricated.

A second real-photo candidate from Michael Orgill/iNaturalist clearly shows a complete flying osprey against blue sky, but adulthood, sex and redistribution metadata were not strong enough to displace the Commons source.

## 10. Source ledger

| Source | Direct URL | Supports | Finding | Confidence / caveat |
|---|---|---|---|---|
| Animal Diversity Web, *Pandion haliaetus* | https://animaldiversity.org/accounts/Pandion_haliaetus/ | taxonomy, size, dimorphism, morphology, diet, hunting | 1.2-2.0 kg; 55-58 cm; 145-170 cm wingspan; females larger; reversible toe, spicules, oily plumage, nasal valves; >=99% fish; 24-74% dive success | High-quality university synthesis; some values trace older literature |
| Cornell Lab, All About Birds | https://www.allaboutbirds.org/guide/Osprey/id | dimensions and behavior | 54-58 cm, 1.4-2.0 kg, 150-180 cm wingspan; hover and feet-first fishing | High institutional confidence |
| US Forest Service FEIS | https://research.fs.usda.gov/feis/species-reviews/paha | life history, depth, predators, diet | maximum recorded longevity 25 y; penetrates water to about 1 m; great horned owls kill adults; fish-dominated diet | High synthesis confidence; older review |
| Martell et al. 2001 / USGS | https://www.usgs.gov/publications/fall-migration-routes-timing-and-wintering-sites-north-american-ospreys-determined | migration | 74 adults tracked; long routes from U.S. breeding populations into Mexico/Central America/Caribbean | High, satellite telemetry |
| Washburn et al. 2014 / USGS | https://www.usgs.gov/publications/wintering-ecology-adult-north-american-ospreys | winter ecology | adults showed strong site fidelity; winter periods ~154 d males, 167 d females | High, telemetry |
| Martell et al. 2014 / USGS | https://www.usgs.gov/publications/spring-migration-adult-north-american-ospreys | migration strategy | spring timing/routes and sex/population effects; time-minimizing migration | High, telemetry |
| Allen 2018, *Brain and Behavior* | https://onlinelibrary.wiley.com/doi/10.1002/brb3.1126 | fish grip and carriage | talon capture; 112 head-forward vs 10 backward fish in one dataset; consistent stance pattern | Peer-reviewed; image-based observational design |
| Londei 2020, *Ibis* | https://onlinelibrary.wiley.com/doi/10.1111/ibi.12812 | reversible toe | rotation of fourth toe is a known osprey adaptation for stronger fish grip | Peer-reviewed morphology note |
| Kalvans & Bajinskis 2016 | https://eeb.lu.lv/EEB/201610/EEB_XIV_Kalvans.shtml | prey size and diet | 1,501 prey from 119 nests, all fish; mean measured fish 27.8 cm / 368 g | Strong field diet sample |
| Francour & Thibault 1996 | https://www.tandfonline.com/doi/abs/10.1080/00063659609461004 | marine diet | Corsican mullets averaged 297 mm and 235 g; prey tracked locally abundant surface fish | Peer-reviewed field study |
| Edwards 1988, *The Auk* | https://academic.oup.com/auk/article-pdf/105/2/244/28175545/auk0244.pdf | prey-selection flexibility | Florida adults shifted prey and foraging habitat with fish abundance | Peer-reviewed |
| National Wildlife Federation | https://www.nwf.org/Educational-Resources/Wildlife-Guide/Birds/Osprey | longevity/recovery context | oldest known 25 y; DDT decline and rebound; head-first fish carriage | Strong institutional secondary source |
| Wikimedia Commons / Charles J. Sharp | https://commons.wikimedia.org/wiki/File:Osprey_(Pandion_haliaetus_carolinensis)_in_flight_Tofino.jpg | image provenance | exact *P. h. carolinensis*, 5469x3646, CC BY-SA 4.0 | Excellent provenance/resolution; adult/sex not explicit and tucked feet fail strict verification |

### Evidence conflicts and uncertainty
- **Speed:** internet values mix level flight and attack dives. No clean instrumented maximum was found, so `speed_mps` remains 0.0.
- **Lifespan:** 25 years is a documented maximum, not an average. Canonical 15 years is an editorial representative-life field and should be revisited if the production schema defines lifespan explicitly as maximum.
- **Size:** ADW and Cornell overlap strongly but differ in wingspan limits (170 vs 180 cm), plausibly due to sampling/population/sex coverage. Canonical female wingspan 170 cm stays within both.
- **Weapon dimensions:** no defensible species-level talon-length measurement was recovered, so no millimeter figure is invented.
- **Image:** reusable high-resolution exact-taxon source is strong, but adult/sex metadata and strict foot visibility remain unresolved.

## 11. Cross-animal normalization notes
- **Golden Eagle:** 5.0 kg female, Attack 40.0. Osprey at 1.8 kg is kept at Attack 31.0 and Raw Power 11.5 despite superb proportional fishing performance. This prevents proportional-strength leakage.
- **Golden Eagle Agility 88.0 vs Osprey 87.0:** both are elite aerial predators. The osprey's specialized plunge control does not require a higher generalized maneuverability score than the larger eagle.
- **Special 83.0:** intentionally above Golden Eagle's 70.0 because reversible toe + spicules + water-entry adaptations are a rarer integrated mechanism. This does not imply greater overall power.
- **Stamina 82.0:** supported by migration telemetry, but not inflated to albatross-like ceiling territory because much movement is energy-efficient flight rather than continuous maximal muscular output.
- **Defense 17.0:** flight is not counted again as physical armor. Avoidance contributes mainly to Agility and matchup context.
- **Intelligence 65.0:** flexible fishing and navigation justify solid cognition, but sociality and migration are not used to inflate it into corvid/parrot/primate tiers.

## 12. Verification against project rules
- Representative healthy adult used, with the larger female selected for combat.
- Old site placeholders were not used as anchors; unsupported 100 PSI and 36 km/h fields were rejected.
- All ratings use one decimal and absolute roster-wide scaling.
- Measured/reported facts are separated from editorial ABS scores.
- Exactly **two** named special abilities and exactly **two** unique traits are present.
- Image compliance is kept separate from research completion; no URL/JPEG is called a completed PNG.
- No production data, site code or live image is modified by this report.