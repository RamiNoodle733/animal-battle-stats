# Snapping Turtle — Common Snapping Turtle (*Chelydra serpentina*)

## 1. Identity and canonical specimen
- **Roster name:** Snapping Turtle.
- **Resolved taxon:** Common snapping turtle, *Chelydra serpentina* (Linnaeus, 1758), family Chelydridae. This is not the much larger alligator snapping turtle (*Macrochelys temminckii*).
- **Living/extinct:** Living.
- **Canonical combat specimen:** healthy prime mature **male**, **12.0 kg**, approximately **32 cm straight carapace length** and **65 cm approximate snout-to-tail-tip total length**. Adult males are the larger sex. Virginia field data reported males averaging 271.9 mm carapace length and 5.7 kg, with sampled males reaching 16.0 kg; broader references place normal adult mass around 4–16 kg and carapace length roughly 20–45+ cm. A 12 kg male therefore represents a large, combat-relevant adult without using exceptional old animals or obesity-prone captive records.
- **Dimorphism and variation:** males grow larger and have proportionally larger heads and a more posterior cloacal opening. Growth and maturity vary strongly with latitude; northern animals mature later and can attain larger sizes. Very old individuals can greatly exceed population averages, so record 25–34 kg wild turtles are not canonical.

## 2. Physical measurements
### Mass, shell and total length
- ADW: **4.0–16.0 kg** and **20–45 cm** reported length, with the latter corresponding broadly to shell-size conventions used in turtle references.
- Virginia Herpetological Society: adult males averaged **271.9 ± 57.3 mm carapace length** and **5.7 ± 3.6 kg**, range 1.53–16.0 kg; females averaged 247.8 mm and 3.8 kg.
- Mature males grow larger than females; carapace can approach **50 cm**, though most adults are smaller.
- The tail is roughly as long as the carapace. Because ABS has one `length_cm` field, **65.0 cm** is proposed as a representative approximate whole-animal snout-to-tail-tip length for the 12 kg canonical male. This is an inference from representative male shell size plus the very long tail, not a directly measured population mean.
- No biologically standardized standing height is available. `height_cm` remains **0.0**.

### Speed and locomotion
Common snapping turtles are strong aquatic swimmers and capable overland walkers, but no defensible instrumented species-specific maximum speed was found. Purdue telemetry documented movements up to **1.5 km in 24 hours**, which is displacement/endurance evidence, not top speed. `speed_mps` remains **0.0** rather than converting anecdotal walking or swimming speeds into a maximum.

### Longevity
Longevity is population-dependent and much greater than older husbandry summaries imply. Canadian COSEWIC assessment cites long-term Algonquin Park mark-recapture data suggesting **maximum age over 100 years**, with delayed northern maturity at about 15–20 years. A southeastern Michigan demographic study found females maturing at 11–16 years and very high annual adult survival. Because the site field is best treated as a representative lifespan rather than a maximum, **50.0 years** is proposed with moderate confidence; the species can demonstrably live much longer.

### Bite force and weapons
Herrel et al. (2002) directly measured in-vivo bite force in 11 *C. serpentina*: sample mean **208.98 N** with very large SD **226.10 N**. The turtles varied enormously in body size, with mean mass 3.94 kg and SD 5.81 kg, so the mean must not be treated as a universal adult-male maximum. This is genuine force data, but it is **not PSI**. Without a measured contact area, `bite_force_psi` remains **0.0**.

Primary weapons and structures:
- sharp hooked keratinous beak backed by a fast defensive neck strike;
- long muscular neck that extends far beyond the shell margin;
- strong clawed feet used in locomotion, restraint and tearing food/carrion;
- hard carapace covering the dorsal trunk;
- long muscular tail with dorsal tubercles, useful for balance rather than as a primary striking weapon.

### Defensive anatomy
The hard carapace is substantial protection against attacks to the dorsal torso, but the **plastron is unusually reduced**, leaving the limbs and much of the underside exposed. Unlike many turtles, a snapper cannot solve danger by fully withdrawing and sealing itself inside the shell. Its defensive system is therefore a combination of partial armor, toughness, threatening gape and rapid counterbite.

## 3. Canonical proposed factual fields
```yaml
weight_kg: 12.0
height_cm: 0.0
length_cm: 65.0
speed_mps: 0.0
lifespan_years: 50.0
bite_force_psi: 0.0
```

**Field confidence:** weight high; total length moderate because it is reconstructed from representative male shell size and long-tail anatomy; height unresolved; top speed unresolved; lifespan moderate; bite PSI deliberately unresolved despite measured bite force in newtons.

## 4. Combat biology
### Offensive mechanics
The snapper's practical weapon is not a mythical thousand-PSI crusher. It is a rapid, well-aimed beak strike from a long neck. The hooked cutting surfaces concentrate the measured force onto a small edge and can cause serious laceration. In feeding, the animal combines ambush, neck extension and jaw closure rather than chasing fast prey for long distances. USGS video at a fish-passage culvert documented snapping turtles attacking migratory river herring on **79% of approaches**, with a **15% capture rate**, showing opportunistic ambush behavior in a real ecological setting.

### Defense and toughness
The dorsal shell strongly reduces vulnerability to many bites, scratches and blunt attacks aimed at the trunk. Large adults have few routine natural predators. However, the reduced plastron, exposed limbs, neck and tail create major armor gaps. The shell should therefore score strongly for Protection but nowhere near an impenetrable full-body defense.

### Locomotion and maneuverability
In water, the species is a competent swimmer and can turn or reposition effectively at close range. On land it is deliberate rather than fast, but the neck strike itself is much quicker than the animal's travel speed. This distinction is important for ABS: strike speed raises weapon delivery, not general Agility to cat or bird levels.

### Endurance and physiology
Telemetry shows meaningful sustained travel, including individual 24-hour movements approaching 1.5 km. The species also survives cold northern climates through winter dormancy. These are evidence of persistence and physiological durability, but ectothermy constrains sustained high-output combat compared with similarly sized endotherms. Stamina is therefore moderate rather than elite.

### Senses
Vision, olfaction, touch and sensitivity to water vibration all contribute to prey detection. The animal can remain concealed in mud with eyes and nostrils exposed and exploit close-range movement. These senses are useful but not exceptional roster-wide special senses.

### Tactics and intelligence
Behavior is simple but context-sensitive. In water snapping turtles are often much less defensive than when exposed on land. They use concealment, ambush positions and prey bottlenecks. The culvert study is especially useful because it demonstrates repeated exploitation of a location where migratory prey became vulnerable. This supports functional tactical behavior without implying mammalian-level cognition.

### Fighting and aggression
ADW reports aggressive interactions especially among males, and Virginia/South Dakota sources describe territorial male aggression. When cornered on land, the species uses an open-mouth threat and explosive neck strike. Ferocity should reflect this willingness to counterattack, but the familiar terrestrial defensive display should not be misread as constant aggression in water.

### Predation and feeding
The species is an opportunistic omnivore consuming fish, amphibians, invertebrates, carrion, vegetation, small mammals, birds and other reptiles/turtles. It can bury into substrate with eyes and nostrils exposed and wait for prey. USGS documented direct ambush of migratory fish in culverts.

### Environmental strengths
- **Shallow/murky freshwater:** best environment for concealment, swimming and ambush.
- **Confined approaches:** long-neck strike becomes especially dangerous when opponents must enter reach.
- **Soft substrate:** camouflage and partial burial improve first-strike opportunities.

### Environmental limitations
- **Open dry ground:** exposes slow whole-body travel and the incompletely armored underside/limbs.
- **Cold active combat:** ectothermy can reduce sustained performance outside a favorable thermal range.
- **Vertical or highly agile matchups:** limited pursuit and repositioning make it difficult to force contact.

### Major weaknesses
1. Reduced plastron and exposed limbs/neck/tail.
2. Slow terrestrial repositioning despite fast local strike delivery.
3. No long-reach projectile, venom or grappling apparatus.
4. Ectothermic sustained-output limits.
5. Bite is dangerous but far below large crocodilian absolute force.

### Matchup archetypes
- **Good against:** small-to-medium opponents that must approach the head or shell, soft-bodied prey within striking range, and attackers lacking tools to exploit armor gaps.
- **Poor against:** much larger crushing predators, tall or highly mobile attackers that can attack from outside neck reach, and opponents capable of controlling/flipping the turtle or targeting limbs/underside.

## 5. Proposed ABS substats
All ratings are absolute across the 225-animal roster.

| Substat | Score | Evidence-based justification |
|---|---:|---|
| Size | 30.0 | A 12 kg male is substantial for a freshwater turtle but small against large carnivores and megafauna. |
| Raw Power | 36.0 | Strong neck, limbs and directly measured bite performance, but modest absolute body mass. |
| Weaponry | 48.0 | Hooked beak plus rapid long-neck delivery is dangerous at close range; no venom, tusks or large-carnivore jaw force. |
| Protection | 63.0 | Hard dorsal carapace is meaningful armor, reduced by the small plastron and exposed appendages. |
| Toughness | 55.0 | Robust adult with strong survival once large, but not uniformly armored and physiologically not mammal-like under prolonged trauma. |
| Maneuverability | 42.0 | Competent aquatic control and rapid local neck movement, but slow whole-body land repositioning. |
| Endurance | 51.0 | Telemetry supports sustained movement; ectothermy prevents inflating this into high-output endurance. |
| Tactics | 42.0 | Concealment and bottleneck ambush are effective, but behavioral flexibility remains limited. |
| Senses | 45.0 | Useful vision, smell, touch and vibration detection without an extreme sensory specialization. |
| Ferocity | 70.0 | Strong defensive counterattack and male aggression, while acknowledging that aquatic animals are often comparatively docile. |
| Abilities | 50.0 | Shell plus long-neck snap meaningfully change close matchups but are not rare high-end mechanisms like venom/electricity. |

## 6. Proposed six headline ABS ratings
- **Attack: 47.0** — fast close-range hooked-beak strike and measured bite performance are dangerous, but 12 kg body scale caps absolute damage below large mammalian and crocodilian predators.
- **Defense: 55.0** — strong dorsal armor and adult toughness, discounted for the reduced plastron and exposed neck/limbs/tail.
- **Agility: 42.0** — aquatic control and strike reflex are useful, but whole-body acceleration and terrestrial repositioning are limited.
- **Stamina: 51.0** — capable of sustained travel and extreme long-term survival, yet not built for prolonged high-output fighting.
- **Intelligence: 42.0** — effective ambush-site use and context-sensitive behavior without evidence for advanced flexible problem solving.
- **Special: 53.0** — the combination of partial shell armor and unusually long, rapid defensive neck strike changes close matchups, but neither mechanism approaches roster-ceiling special systems.

## 7. Abilities and traits
### Special abilities
1. **Coiled-Neck Snap** — the long neck launches the hooked beak beyond the shell margin in a rapid defensive or predatory strike, making apparently safe close approaches dangerous.
2. **Ambush Burial** — the turtle can settle into mud or shallow substrate with eyes and nostrils exposed, reducing its visual profile and enabling sudden attacks on passing prey.

### Unique traits
1. **Reduced Plastron Tradeoff** — the small lower shell leaves limbs and underside unusually exposed for a turtle, exchanging full withdrawal protection for a more mobile, large-headed body plan.
2. **Saw-Keeled Tail** — a long tail, approximately carapace-length, carries conspicuous dorsal tubercles and provides a distinctive stabilizing posterior structure.

## 8. Expanded profile content
### Habitat and range
Native across a broad portion of eastern and central North America, from southern Canada through much of the United States. It occupies ponds, lakes, marshes, swamps, rivers, streams and other fresh or occasionally brackish waters, especially habitats with muddy substrate and vegetation.

### Diet and ecology
A broad omnivore and scavenger. Animal prey includes fish, amphibians, invertebrates, reptiles, birds and small mammals, while aquatic vegetation can form a meaningful part of the diet. This flexibility makes the species both predator and recycler of carrion.

### Social structure
Primarily solitary. Social contact is concentrated around mating and aggressive encounters, especially among males. Local densities can still be high where food and habitat are favorable.

### Reproduction and life history
Mating can occur through much of the active season. Females leave water to excavate terrestrial nests and may lay dozens of eggs. Northern populations mature late. Long-lived adults have high demographic value because populations are sensitive to even modest increases in adult mortality.

### Conservation
Globally widespread and generally secure, but regional populations face wetland loss, road mortality, harvest and pollution. NatureServe currently ranks the species globally G4G5/G4, while Canadian assessments emphasize the vulnerability created by delayed maturity and long adult lifespan.

### Adaptations
- hooked keratinous beak rather than teeth;
- long, highly mobile neck;
- webbed, clawed feet;
- hard carapace with reduced plastron;
- cryptic muddy coloration;
- ability to overwinter in cold aquatic environments;
- broad omnivory and scavenging.

### Human interaction
Most conflict occurs when turtles cross roads or are handled on land. Their defensive reach is commonly underestimated. The bite can cause serious injury, but sensationalized internet PSI claims should not replace the direct force measurements available in the literature.

### Genuine fun facts
- Direct experimental work measured snapping-turtle bite force rather than merely estimating it from skull shape.
- A snapping turtle's tail can be about as long as its carapace.
- Long-term Canadian work suggests some wild individuals can exceed a century of age.
- The shell does not allow complete withdrawal because the plastron is unusually small.
- USGS researchers filmed snapping turtles exploiting fish concentrated at a road-stream culvert.
- In that study, migratory river herring were attacked on 79% of approaches, but only 15% of approaches resulted in capture.

### Concise site-ready summary
The common snapping turtle is a heavily built freshwater ambush predator whose real danger comes from a rapid long-necked beak strike backed by partial shell armor. A large adult male is tough at close range but far from invulnerable: its reduced plastron leaves the limbs and underside exposed, and its whole-body land movement is slow. Direct experiments measured bite force in newtons, so sensational PSI figures are unnecessary.

### Narrative profile
A snapping turtle is best understood as a close-range defensive specialist, not a miniature crocodile. Its carapace protects the most important dorsal trunk area, but the small plastron prevents the complete armored withdrawal used by many other turtles. Instead, *Chelydra serpentina* keeps a large head, long neck and strong limbs exposed and answers danger with reach. The hooked beak can launch well beyond the shell edge, which makes grabbing the front half of the animal a serious mistake.

In water the turtle's battle plan is quieter. It can settle into muddy substrate, expose little more than its eyes and nostrils, and wait. Field video has shown that this strategy can be opportunistically paired with landscape structure: turtles used a culvert where migratory fish became concentrated and repeatedly attacked passing herring. This is not evidence of complex planning, but it is strong evidence that real snapping-turtle predation depends on position, concealment and timing rather than chase speed.

ABS normalization should preserve both sides of that biology. The animal deserves meaningful Protection and Ferocity because a 12 kg adult with a hard carapace and rapid beak strike is a difficult close target. It should not inherit exaggerated legacy values such as 1,000 PSI, elite agility, or near-impenetrable defense. The underside and limbs remain vulnerable, large predators dwarf it in absolute force, and ectothermy limits prolonged high-output combat.

### Future structured-field proposals
- `carapace_length_cm`: 32.0 canonical male, separate from total length.
- `bite_force_n`: store direct force in newtons rather than forcing a PSI conversion.
- `plastron_coverage`: qualitative/ordinal field for turtle armor completeness.
- `strike_reach_cm`: future measurement target; useful but not assigned without direct representative data.
- `locomotion_context`: aquatic vs terrestrial movement split.

## 9. Image requirement
- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/snapping-turtle.png` (**not present; no PNG claimed**)
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Common_Snapping_Turtle_white_background_(2).jpg
- `original_photo_url`: https://upload.wikimedia.org/wikipedia/commons/2/28/Common_Snapping_Turtle_white_background_%282%29.jpg
- `file_format_verified`: source is a 5055×2528 JPEG; final PNG not produced
- `alpha_verified`: no
- `full_body_verified`: no; metadata/source are excellent but current visual tooling did not establish every limb/foot and complete tail at original resolution
- `adult_verified`: biologically very likely at ~40 lb, but source metadata does not literally use the word adult/mature, so not promoted as verified adulthood
- `sex_verified_or_unknown`: **male verified**
- `license_status`: Public Domain Mark on Flickr, reviewed by Commons; USFWS Mountain Prairie / Sam Stukel provenance
- `notes`: Strong high-resolution exact-species male candidate on a deliberately simple white background. A separate 6000×4000 USFWS source explicitly says **mature male**, but direct inspection of its 960 px preview showed the tail and portions of the feet obscured by the body/grass, so it was rejected as the primary. Current connected GitHub file writers are UTF-8 text-only; no binary cutout was fabricated.

## 10. Evidence and source ledger
| Source | Direct URL | Supports | Finding / context | Confidence / caveat |
|---|---|---|---|---|
| Animal Diversity Web | https://animaldiversity.org/accounts/Chelydra_serpentina/ | taxonomy, mass, shell size, habitat, behavior, diet, senses | 4–16 kg; 20–45 cm; ambush burial; broad omnivory; smell/vision/touch/vibration | High for general biology; older synthesis |
| Virginia Herpetological Society | https://www.virginiaherpetologicalsociety.com/reptiles/turtles/eastern-snapping-turtle/index.php | dimorphism and adult measurements | males larger; Virginia male mean 271.9 mm CL, 5.7 kg, sampled to 16 kg; larger heads | High regional field compilation; not entire range |
| Herrel et al., Journal of Evolutionary Biology (2002) | https://onlinelibrary.wiley.com/doi/full/10.1046/j.1420-9101.2002.00459.x | direct bite-force measurement | n=11 *C. serpentina*, mean 208.98 N, SD 226.10 N; repeated in-vivo maximal bites | High; mixed body sizes and not PSI |
| USGS / Biology Letters | https://www.usgs.gov/publications/wait-and-snap-eastern-snapping-turtles-chelydra-serpentina-prey-migratory-fish-road | ambush predation | river herring attacked on 79% of approaches, 15% capture rate at culvert | High, direct field video/stable isotopes; site-specific |
| Purdue University thesis | https://docs.lib.purdue.edu/dissertations/AAI1598440/ | movement/endurance | up to 1.5 km movement in 24 h; male range lengths 143–1268 m | Moderate-high; urban river study, not maximum speed |
| Government of Canada COSEWIC | https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/snapping-turtle-2008.html | longevity, maturity, life history | northern maturity 15–20 y; long-term Algonquin data suggest maximum age >100 y | High for Canadian populations; maximum is not typical lifespan |
| Congdon et al., demographic study | https://academic.oup.com/icb/article-abstract/34/3/397/148585 | survival/maturity | Michigan females mature 11–16 y; adult annual survival 0.88–0.97; generation time 25 y | High; regional population |
| NatureServe Explorer | https://explorer.natureserve.org/Taxon/ELEMENT_GLOBAL.2.103761/Chelydra_serpentina | conservation | G4G5/G4; wetland loss and harvest can drive regional declines | High, current conservation synthesis |
| Commons / USFWS Sam Stukel white-background male | https://commons.wikimedia.org/wiki/File:Common_Snapping_Turtle_white_background_(2).jpg | image provenance | exact *C. serpentina*, male, ~40 lb, 5055×2528, public-domain-marked USFWS source | High provenance; strict full-body/adulthood wording not fully verified |
| Commons / USFWS mature-male walk | https://commons.wikimedia.org/wiki/File:Common_Snapping_Turtle_(Chelydra_serpentina)on_a_Walk_(51325755497).jpg | alternate image audit | explicitly mature male, 6000×4000, public domain | High provenance/adulthood; preview inspection shows tail/feet occlusion |

### Key conflicts and uncertainty
- **Mass:** adult population averages are far below famous 30+ kg records. Canonical 12 kg deliberately represents a strong mature male without using exceptional old individuals.
- **Length:** sources often mean carapace length when reporting turtle “length.” ABS `length_cm` is therefore explicitly an approximate whole-animal reconstruction, not a copied shell value.
- **Lifespan:** older summaries often cite ~30 years, while long-term northern mark-recapture supports >100-year maxima. The proposed 50 years is representative editorial canonicalization, not a claimed mean.
- **Bite:** direct force exists in newtons. PSI is unresolved because pressure requires contact area. The old roster's 1,000 PSI placeholder is rejected.
- **Speed:** no reliable instrumented maximum was recovered. Movement-distance telemetry must not be converted into speed.

## 11. Cross-animal normalization notes
- **Below Saltwater Crocodile by a huge margin in Attack and Raw Power.** The crocodile's direct 16,414 N bite and ~500 kg canonical mass are in another absolute class; a snapper's direct sample mean bite was ~209 N.
- **Protection should be meaningful but not shell-equals-invulnerability.** The reduced plastron is a major weakness and prevents placing Defense near large armored megafauna merely because a carapace is present.
- **Above similarly sized unarmored small mammals in dorsal protection**, but not necessarily in overall combat outcome because those animals may have superior speed, agility or sustained output.
- **Agility remains moderate-low despite a fast strike.** Neck-strike speed is weapon delivery, not whole-body maneuverability.
- **Stamina is not longevity.** A century-scale possible lifespan does not imply century-scale exertion; ectothermy and measured movement ecology keep combat Stamina moderate.
- **Ferocity does not equal Attack.** The species' defensive willingness is high, but absolute damage output is limited by body size and measured bite force.

### Verification against project rules
- Representative healthy adult male used because males are the larger fighting sex.
- Absolute 0.1–100.0 roster scaling used; no pound-for-pound inflation.
- Direct bite force kept in newtons; no fabricated PSI.
- Top speed left unresolved rather than invented.
- Exactly **two** named special abilities and exactly **two** unique traits are present.
- Image source is not called complete; no transparent PNG is claimed.
