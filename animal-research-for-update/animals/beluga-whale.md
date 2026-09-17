# Beluga Whale Research Overhaul

## 1. Identity and canonical specimen

- **Common name:** Beluga Whale / white whale
- **Scientific name:** *Delphinapterus leucas* (Pallas, 1776)
- **Family:** Monodontidae
- **Status:** Living
- **Exact animal represented:** The roster's “Beluga Whale” is standardized as *Delphinapterus leucas* across its Arctic/sub-Arctic range, not a single endangered population segment.
- **Canonical specimen:** Healthy mature **adult male**, **1,500.0 kg** and **430.0 cm total length**.
- **Why male:** Sexual dimorphism is material. ADW describes males as about 25% larger than females; sex-specific summaries place males roughly 3.4–4.6 m and around/up to 1,500 kg. The St. Lawrence population averages about 4.2 m for adult males versus 3.6 m for females.
- **Population variation:** Body size differs among stocks. The 1,500 kg / 4.3 m canonical animal is a representative large adult male, not a record. Reports of 1,600+ kg or unusually long animals are retained as upper-range context rather than used as the baseline.

## 2. Physical measurements

### Mass

- **Canonical mass:** **1,500.0 kg**
- **Broad adult range:** ADW reports 400–1,600 kg across adults and sexes; NOAA gives an overall average of about 3,150 lb (~1,429 kg).
- **Sex context:** Males are materially larger; sex-specific zoological summaries put adult males around 1,500 kg.
- **Confidence:** Moderate-high. Population and sex strongly affect mass, but 1.5 t is well supported for a mature male and is not an extreme record.

### Length and height

- **Canonical `length_cm`:** **430.0 cm total length**
- **Male context:** St. Lawrence adult males average about 4.2 m; other sex-specific summaries give approximately 3.4–4.6 m males.
- **Canonical `height_cm`:** **0.0 cm**
- **Reason:** A standing terrestrial height is not biologically meaningful for a fully aquatic cetacean. Do not substitute body depth for height without a schema convention.
- **Confidence:** High for representative length; high that terrestrial-style height should remain unset.

### Swimming speed

Belugas are capable swimmers but are not built as extreme high-speed odontocetes. Popular references repeat values around 22 km/h, but this research pass did not locate a strong primary maximum-speed experiment suitable for the schema's “top speed” field. Peer-reviewed telemetry provides robust dive rates, depths and durations rather than a validated horizontal maximum sprint.

- **Canonical `speed_mps`:** **0.0 m/s**
- **Reason:** Preserve uncertainty rather than convert a repeated secondary maximum into a factual field.
- **Confidence:** High that routine locomotion and diving are well documented; low for a defensible maximum horizontal speed.

### Lifespan

- **Canonical `lifespan_years`:** **70.0 years**
- **NOAA:** lifespan can reach roughly 90 years; the oldest recorded animal had 80 tooth growth-layer groups and tooth wear may cause underestimation.
- **Social-research context:** modern beluga social research describes a lifespan around 70 years.
- **Interpretation:** 70.0 is a representative long-life value rather than the species maximum.
- **Confidence:** Moderate-high; aging methodology has been revised historically and maxima should not be confused with typical lifespan.

### Teeth and bite force

Belugas are toothed whales with roughly **32–40 conical teeth**. NOAA reports 16–20 teeth in each jawbone (32–40 total). The teeth are useful for grasping prey rather than specialized slicing or bone-crushing.

- **Canonical `bite_force_psi`:** **0.0**
- **Reason:** No defensible species-specific bite-pressure measurement with transparent force/contact-area methodology was found.
- **Confidence:** High that the tooth count and grasping role are defensible; low for any PSI claim, so the field remains zero.

### Defensive structures and body design

- Blubber can account for **up to about 40% of body weight** according to NOAA, providing insulation, energy storage and meaningful soft-tissue bulk.
- ADW reports blubber around **15 cm thick** in places.
- Belugas lack a dorsal fin and instead possess a tough dorsal ridge, reducing ice-related injury and allowing movement beneath ice.
- Unlike most cetaceans, the neck vertebrae are not fused, permitting substantial head movement.
- Adult white coloration can provide visual blending in icy environments, but it is not physical armor.

### Diving performance

Peer-reviewed satellite telemetry recorded mean daily maximum depths of **483–665 m**, with a deepest dive of **872 m** in one Devon Island study. Most dives were under 18 minutes. Eastern Chukchi work documented dives commonly extending into 200–1000 m Atlantic-layer habitat and occasional dives up to 21 minutes. NOAA summarizes capability to about **1,000 m for up to 25 minutes**. A later review reports a longest published dive of **31.4 minutes**.

These are genuine endurance/foraging capabilities but are not treated as continuous combat output.

## 3. Canonical proposed factual fields

```json
{
  "weight_kg": 1500.0,
  "height_cm": 0.0,
  "length_cm": 430.0,
  "speed_mps": 0.0,
  "lifespan_years": 70.0,
  "bite_force_psi": 0.0
}
```

### Why these values

- **1,500.0 kg:** representative mature male scale supported by sex-specific species accounts; below exceptional reported maxima.
- **430.0 cm:** centered within credible adult-male ranges and close to measured population means.
- **0.0 cm height:** no meaningful standing-height field for this fully aquatic body plan.
- **0.0 m/s speed:** no sufficiently strong maximum horizontal-speed measurement located.
- **70.0 years:** representative modern longevity estimate, below NOAA's maximum-scale 80–90-year evidence.
- **0.0 PSI:** no defensible pressure measurement.

### Useful future structured fields

```json
{
  "canonical_species": "Delphinapterus leucas",
  "canonical_sex": "adult male",
  "tooth_count_range": [32, 40],
  "blubber_mass_fraction_max": 0.40,
  "blubber_thickness_cm_reported": 15.0,
  "deepest_peer_reviewed_tagged_dive_m": 872.0,
  "noaa_dive_depth_capability_m": 1000.0,
  "noaa_dive_duration_capability_min": 25.0,
  "longest_reported_dive_min_review": 31.4,
  "hearing_sensitive_band_khz": [16.0, 100.0],
  "echolocation": true,
  "backward_swimming": true,
  "locomotor_style": "fully aquatic Arctic odontocete"
}
```

## 4. Combat biology

### Primary and secondary weapons

**Primary weapon:** a large, muscular cetacean body capable of forceful contact, shoving and ramming at close range. At 1.5 tonnes, body momentum matters more in absolute combat terms than the beluga's modest conical dentition.

**Secondary weapon:** 32–40 conical teeth can grasp and wound at close range. They are not the specialized shearing teeth of an orca or shark and should not be assigned unsupported crushing-force mythology.

### Offensive mechanics

Belugas normally capture fish and invertebrates rather than large vertebrate prey. Their mouths and teeth are therefore less specialized for killing large opponents than those of major macropredatory cetaceans. Offensive potential comes from body mass, close-range bite/grab capability and maneuvering in three dimensions. Attack is strong in absolute terms because a 1.5-tonne animal can deliver substantial mechanical force, but it remains well below giant marine predators with purpose-built killing weapons.

### Defensive adaptations and durability

Large body mass and exceptionally thick blubber provide meaningful cushioning and thermal reserve. The rounded, robust body is substantial, but there is no rigid armor. Killer whales and polar bears can prey on belugas, demonstrating that blubber and size do not make them invulnerable. The lack of a dorsal fin and presence of a tough dorsal ridge are specifically useful under ice.

### Locomotion and maneuverability

Belugas sacrifice some streamlining for exceptional control. The unfused neck permits lateral and vertical head movement unusual among cetaceans, broad pectoral flippers aid control, and belugas can swim backward. These traits are valuable in ice, shallow estuaries and close maneuvering. They should raise maneuverability without pretending the animal is a top-speed specialist.

### Endurance and stamina

Deep repeated diving, migrations, long seasonal movements and 20+ minute breath-hold capability support high stamina. Telemetry shows repeated deep foraging dives over extended tracking periods. This is strong sustained aquatic performance, though it should remain below the most extreme long-distance and deep-diving marine-mammal anchors where evidence warrants.

### Senses

This is one of the beluga's strongest combat-relevant systems. Belugas echolocate through a flexible melon. NOAA-reviewed work shows two pulse generators combining into a single sonar click, potentially enabling control of signal energy/frequency and acoustic steering. Wild Bristol Bay belugas showed sensitive hearing below 80 dB from 16–100 kHz, with many responding at 120 kHz and some to 150 kHz. Echolocation is a major advantage in dark, turbid or ice-covered water.

### Intelligence, learning and tactics

Belugas are highly social odontocetes with flexible communication and association patterns. A 2020 *Scientific Reports* study across ten Arctic locations found dynamic group types involving kin and non-kin, including unrelated adult males traveling together. These societies create opportunities for social learning and culture. This supports high intelligence, communication and behavioral flexibility, but the rating remains below a hypothetical ceiling because complex sociality alone does not prove maximal one-on-one combat tactics.

### Hunting behavior

Belugas eat fish and diverse invertebrates including salmon, cod, herring, smelt, flatfish, octopus, squid, crabs, shrimp, clams, snails and worms. Echolocation helps locate prey. They are versatile foragers rather than specialists in subduing large dangerous prey.

### Intraspecific fighting and aggression

Adult males can form male groups and show mating competition, but the species is not treated as an extreme combat-ferocity specialist. The evidence base emphasizes complex social organization and foraging more than routine damaging fights.

### Predator defense

Known predators include killer whales and polar bears. Belugas can exploit shallow water, estuaries and ice structure, and group vigilance may help detection. Their ability to maneuver around ice can create escape routes unavailable to larger dorsal-finned cetaceans.

### Environmental strengths

- Arctic and sub-Arctic coastal waters, pack ice and estuaries.
- Excellent acoustic navigation where visibility is poor.
- No dorsal fin to snag or strike overhead ice.
- Thick insulation for near-freezing water.
- Flexible neck and reverse swimming for confined-space maneuvering.
- Deep-diving capability expands vertical escape and foraging space.

### Environmental limitations

- Fully aquatic; stranded or removed from water, combat capability collapses.
- Less streamlined and less speed-specialized than many dolphins and major oceanic predators.
- Thick blubber helps survival but does not stop deep bites from killer whales or other large weapons.
- Echolocation can be degraded by intense anthropogenic noise.
- Teeth are comparatively simple grasping tools.

### Major weaknesses

1. No rigid armor or specialized long weapon.
2. Dentition is less destructive than that of large macropredatory marine opponents.
3. Maximum sprint speed is uncertain and the body is not optimized for extreme pursuit speed.
4. Dependence on surfacing for air creates predictable respiratory constraints.
5. Underwater noise can interfere with an exceptionally important sensory channel.
6. Large predators such as killer whales can overcome adults.

### Matchup archetypes

**Good matchups:** smaller aquatic opponents that cannot penetrate thick blubber effectively; low-visibility matchups where echolocation dominates; confined icy water where flexible steering and lack of a dorsal fin improve movement.

**Bad matchups:** large sharks or killer whales with superior cutting/gripping weaponry; opponents with a major size advantage; attacks that inflict deep penetrating trauma despite blubber; any terrestrial scenario.

## 5. Proposed ABS substats

| Substat | Score | Evidence-based rationale |
|---|---:|---|
| Size | **72.0** | A 1.5-tonne, 4.3 m adult male is very large on the full roster, but far below the largest whales and extinct giants. |
| Raw Power | **69.0** | Large muscular body and aquatic thrust create strong absolute mechanical force without evidence for extreme specialized striking. |
| Weaponry | **48.0** | Conical teeth can grasp and wound, but they are modest compared with major shark, crocodilian, tusk or macropredatory cetacean weapons. |
| Protection | **64.0** | Thick blubber and large body volume provide meaningful cushioning/insulation; no rigid armor. |
| Toughness | **70.0** | Large-bodied marine mammal with substantial energy reserves and cold-water resilience, yet vulnerable to killer whales and polar bears. |
| Speed | **49.0** | Competent swimmer but not a validated high-speed specialist; no unsupported maximum is promoted. |
| Maneuverability | **71.0** | Flexible neck, reverse swimming, broad flippers and three-dimensional aquatic control are unusually useful in confined water and ice. |
| Endurance | **84.0** | Repeated deep dives, long breath holds and seasonal movements support very strong sustained aquatic performance. |
| Recovery | **50.0** | Normal mammalian healing; no exceptional regeneration mechanism. |
| Tactics | **72.0** | Flexible social structure, communication, learning opportunities and sophisticated foraging support strong behavioral adaptability. |
| Senses | **91.0** | Sensitive ultrasonic hearing plus active echolocation are elite battle-relevant sensing tools, especially in darkness/turbidity. |
| Ferocity | **45.0** | Capable large odontocete but not a specialized large-prey killer or unusually conflict-driven species. |
| Abilities | **78.0** | Biosonar, flexible neck/reverse swimming, ice-adapted dorsal ridge and extreme cold-water physiology create multiple distinctive matchup tools. |

## 6. Proposed six headline ABS ratings

| Headline | Score | Justification |
|---|---:|---|
| **Attack** | **61.0** | 1.5-tonne body mass provides substantial absolute impact/grapple force, but simple conical teeth and lack of large-prey killing specialization prevent predator-tier extremes. |
| **Defense** | **66.0** | Large body and thick blubber confer strong survivability, while absence of rigid armor and documented predation by killer whales/polar bears cap the score. |
| **Agility** | **70.0** | Not a speed specialist, but reverse swimming, an unusually mobile neck and precise three-dimensional control create excellent aquatic maneuverability. |
| **Stamina** | **84.0** | Deep repeated dives, long breath holds and seasonal movement provide strong direct evidence for sustained performance. |
| **Intelligence** | **79.0** | Complex vocal communication, dynamic multi-level societies, social learning opportunities and flexible group membership support high cognition without assuming human-like reasoning. |
| **Special** | **80.0** | Active echolocation, sensitive hearing and unusual under-ice locomotor anatomy are genuinely matchup-changing biological specializations. |

## 7. Abilities and traits

### Proposed special abilities

1. **Arctic Biosonar** — The flexible melon focuses broadband echolocation clicks while highly sensitive hearing receives returning echoes, allowing prey/opponent localization and navigation in darkness, turbid water and under ice.
2. **Ice-Maze Reversal** — An unfused, mobile neck, broad control surfaces, reverse-swimming ability and finless dorsal profile let the beluga reposition in confined icy water where less flexible cetaceans are disadvantaged.

### Proposed unique traits

1. **Sea Canary** — Belugas possess an exceptionally diverse vocal repertoire and sophisticated acoustic communication, supporting coordination and social learning.
2. **Blubber Fortress** — A very thick insulating layer, reported up to about 40% of body mass, provides cold tolerance, energy reserve and meaningful soft-tissue bulk without being falsely treated as rigid armor.

## 8. Expanded profile content

### Habitat

Arctic and sub-Arctic seas, coastal waters, estuaries, river mouths, pack-ice margins and seasonally deeper offshore habitat. Belugas tolerate near-freezing marine water and also enter comparatively warm, low-salinity estuaries.

### Geographic range

Circumpolar Northern Hemisphere populations occur around Alaska, Canada, Greenland and Russia, with population-specific migration patterns and strong seasonal site fidelity in many areas.

### Diet

Generalist carnivore feeding on fishes and benthic/pelagic invertebrates. NOAA lists salmon, eulachon, cod, herring, smelt, flatfish, octopus, squid, crabs, shrimp, clams, snails and sandworms among prey.

### Ecology

Belugas connect coastal, estuarine and offshore Arctic food webs. Seasonal movements track prey, ice and reproductive habitat. Their acoustic dependence also makes them particularly relevant to studies of vessel noise and industrial disturbance.

### Social structure

Groups range from a few animals to large aggregations. Modern genetic/network research rejects a simplistic exclusively matrilineal model: groups include close kin, paternal kin and unrelated animals, and membership can be dynamic. Adult male groups are a recurring group type.

### Reproduction and life history

NOAA reports female maturity around 6–14 years, with males somewhat later. Gestation is approximately 15 months; calves nurse for at least two years, and females generally calve every 2–3 years. Births often occur in relatively warm summer waters because newborns lack adult-level blubber insulation.

### Conservation status

Species-wide status should be verified directly against the current IUCN assessment before production migration. Population status varies sharply. Under the U.S. ESA, NOAA lists the **Cook Inlet distinct population segment as Endangered**; all belugas are protected under the U.S. Marine Mammal Protection Act, and some stocks are designated depleted. Do not apply Cook Inlet's endangered status to every global beluga.

### Major adaptations

- Thick blubber for Arctic insulation and energy storage.
- No dorsal fin, reducing heat loss/injury and aiding under-ice travel.
- Tough dorsal ridge.
- Unfused cervical vertebrae and unusually mobile head/neck.
- Reverse swimming.
- Flexible melon and active echolocation.
- Sensitive high-frequency hearing.
- White adult coloration in an ice-dominated environment.
- Deep-diving physiology and long breath holds.

### Human interaction

Belugas have long cultural and subsistence importance to Arctic Indigenous communities. Contemporary threats include climate-driven habitat change, contaminants, prey limitation, disease, vessel traffic, ocean noise, strandings and habitat disturbance. Some populations are much more threatened than the species-wide picture suggests.

### Strong fun facts

- “Beluga” comes from a word associated with whiteness; adults become characteristically white while calves are dark gray.
- The nickname **“canary of the sea”** comes from the species' unusually varied vocalizations.
- Belugas can turn their heads side to side because their neck vertebrae are not fused like those of most cetaceans.
- They can swim backward, a rare and useful ability for navigating confined ice habitat.
- Peer-reviewed tags have recorded dives to **872 m**, while NOAA summarizes capability to around 1,000 m.
- Wild belugas have demonstrated sensitive hearing across a very broad ultrasonic range, with some individuals responding to 150 kHz.
- Beluga social groups are not simply extended maternal families; unrelated adults can travel together for long periods.

### Concise site-ready summary

The beluga is a 1.5-tonne Arctic toothed whale built less for raw predatory violence than for survival and sensory control in an icy three-dimensional world. Thick blubber, deep-diving endurance, a flexible neck, reverse swimming and exceptional biosonar make it difficult to surprise or outmaneuver underwater. Its simple conical teeth keep Attack below similarly sized specialist predators, but elite hearing, echolocation and cold-water adaptations give it unusually high Stamina, Intelligence and Special ratings.

### Detailed narrative profile

A mature male beluga is a substantial marine mammal, yet its most remarkable advantages are not the obvious ones. Its rounded body carries an enormous insulating investment in blubber, allowing life in water near the freezing point and providing both energy reserve and soft-tissue bulk. The missing dorsal fin is another Arctic solution: instead of a tall fin vulnerable beneath ice, the back carries a tough ridge. Its cervical vertebrae remain unfused, producing a degree of head mobility rare among whales, and the animal can even reverse through the water.

The sensory package is more consequential still. Belugas actively interrogate their environment with echolocation clicks transmitted through the melon and received through an exceptionally sensitive auditory system. In darkness, turbid estuaries or beneath ice, this is a major information advantage. Research on wild animals shows broad high-frequency sensitivity, while experimental work indicates sophisticated control over sonar pulse production.

That sophistication extends into social life. Belugas form dynamic groups that can contain close relatives, distant relatives and unrelated animals. Long-lived individuals have many opportunities for social learning, communication and the persistence of population-specific behavior. This justifies high intelligence without converting “social” into an automatic maximum score.

In a direct fight, however, the beluga is not an orca. Its teeth are relatively simple conical graspers, its normal prey is fish and invertebrates, and it lacks a specialized slicing jaw, tusk or rigid armor. A 1.5-tonne body still makes forceful contact dangerous, and thick blubber raises survivability, but a similarly sized predator with superior penetrating weapons has the matchup advantage. The beluga is best understood as an endurance, sensory and maneuvering specialist whose unusual Arctic toolkit matters most when the environment allows it to use depth, ice and acoustics.

## 9. Image Asset

- **Target path:** `animal-research-for-update/images/beluga-whale.png`
- **Status:** `SOURCE FOUND - PNG COMMIT PENDING`
- **Primary candidate:** Real photograph of *Delphinapterus leucas*, full/near-full lateral body view, 2000 × 1260 original.
- **Source page:** https://commons.wikimedia.org/wiki/File:Beluga_Whale_Delphinapterus_Leucas.jpg
- **Direct image URL:** https://commons.wikimedia.org/wiki/Special:Redirect/file/Beluga%20Whale%20Delphinapterus%20Leucas.jpg
- **Creator:** EgorovaSvetlana
- **License shown on source page:** CC BY-SA 4.0
- **Sex:** Not documented. Final production image pass should prefer a verified adult male if an equally strong reusable full-body image is found.
- **Caveat:** The source photograph is captive. It is nevertheless exact-species, adult-appearing, high resolution and clearly shows body morphology. A strong wild adult-male image would be preferable for production.
- **Binary note:** Current GitHub contents writer in this run safely writes UTF-8 text, not arbitrary PNG binary. No fake or text-encoded PNG is created.

## 10. Evidence and source ledger

| Source | Direct URL | Claims supported | Reported finding/context | Confidence / caveat |
|---|---|---|---|---|
| NOAA Fisheries, Beluga Whale | https://www.fisheries.noaa.gov/species/beluga-whale | taxonomy, overall mass/length, teeth, blubber, habitat, diet, dive capability, reproduction, threats, U.S. status | Avg ~3,150 lb; up to 16 ft; 32–40 teeth; blubber up to 40%; dives around 1,000 m / 25 min; lifespan up to ~90 y | **High.** Government species authority; some values are broad species summaries rather than sex-specific measurements. |
| Animal Diversity Web, *Delphinapterus leucas* | https://animaldiversity.org/accounts/Delphinapterus_leucas/ | sexual dimorphism, body range, neck, blubber thickness | males ~25% larger; adult 400–1,600 kg; flexible neck; ~15 cm blubber | **Moderate-high.** University-curated secondary species account; broad ranges mix populations/sexes. |
| COSEWIC St. Lawrence Beluga status report | https://www.canada.ca/en/environment-climate-change/services/species-risk-public-registry/cosewic-assessments-status-reports/beluga-whale-st-lawrence-estuary-2014.html | sex-specific body length and population variation | adult SLE females avg 3.6 m, males 4.2 m; adult lengths vary by population | **High** for St. Lawrence context; not a global male mean. |
| Heide-Jørgensen et al., *ARCTIC* (1998) | https://journalhosting.ucalgary.ca/index.php/arctic/article/view/64097 | deep-diving performance | daily max means 483–665 m; deepest 872 m; most dives <18 min | **High.** Peer-reviewed satellite telemetry, six animals. |
| Citta et al., *ARCTIC* (2013) | https://journalhosting.ucalgary.ca/index.php/arctic/article/view/67373 | deep-dive behavior | dives commonly 1–18 min; up to 21 min; deep use of 200–1000 m layer | **High.** Peer-reviewed telemetry; population/context specific. |
| Martin et al., *ARCTIC* (2001) | https://journalhosting.ucalgary.ca/index.php/arctic/article/view/63844 | shallow-water diving | max dive 15.6 min in western Hudson Bay; behavior varies with depth | **High.** Peer-reviewed; summer shallow-water context. |
| Polar Research review (2021) | https://polarresearch.net/index.php/polar/article/view/5499/14035 | dive-duration synthesis | longest reported dive 31.4 min; average ranges vary widely | **Moderate-high.** Peer-reviewed synthesis; 31.4 min is a maximum, not canonical routine duration. |
| Mooney et al., Journal of Experimental Biology | https://doi.org/10.1242/jeb.171959 | wild hearing sensitivity | <80 dB thresholds 16–100 kHz; 76% responded to ≥120 kHz; individual variation | **High.** Peer-reviewed wild population testing. |
| Castellote/Lammers NOAA peer-reviewed research page | https://www.fisheries.noaa.gov/resource/peer-reviewed-research/beluga-whale-produces-two-pulses-form-its-sonar-signal | echolocation mechanism | two signal generators combine pulses through melon; potential acoustic steering/control | **High.** Peer-reviewed experimental evidence. |
| O’Corry-Crowe et al., *Scientific Reports* (2020) | https://www.nature.com/articles/s41598-020-67314-w | social structure, kinship, social learning context | dynamic group types; kin and non-kin; unrelated adult males may travel together | **High.** Peer-reviewed multi-location genetic/network study. |
| Wikimedia Commons image page | https://commons.wikimedia.org/wiki/File:Beluga_Whale_Delphinapterus_Leucas.jpg | image identity, resolution, creator, license | exact species; 2000×1260; EgorovaSvetlana; CC BY-SA 4.0 | **High** for provenance; captive animal and sex not documented. |

### Evidence conflicts and rejected claims

- **Body size:** Published summaries differ because they mix stocks, sexes and maxima. The canonical 1,500 kg / 4.3 m male is deliberately representative rather than selecting the largest 1,600+ kg or 5+ m claims.
- **Top speed:** Repeated secondary values around 22 km/h were not promoted because this pass did not locate sufficiently transparent primary maximum-speed methodology.
- **Bite PSI:** No reliable species-specific pressure measurement was located. Tooth count and feeding function are retained; PSI remains 0.0.
- **Lifespan:** Maximum-scale evidence reaches 80 GLGs / roughly 90 years, while social-literature summaries commonly use ~70 years. The canonical 70.0 is representative, not a maximum.
- **Conservation:** Cook Inlet ESA Endangered status is population-specific and must not be mislabeled as the global species status.

## 11. Confidence and caveats

- **High confidence:** taxonomy; adult male larger than female; general 4+ m / tonne-plus male scale; tooth count; thick blubber; lack of dorsal fin; mobile neck; echolocation; hearing performance; deep-diving capability; Arctic/sub-Arctic ecology; complex social structure.
- **Moderate confidence:** exact 1,500.0 kg and 430.0 cm canonical representative values because populations differ; 70.0-year representative lifespan.
- **Low/unresolved:** true maximum horizontal speed; bite pressure in PSI; exact sex of selected image.
- Ratings are editorial ABS proposals based on measured biology and calibration rules, not measured scientific quantities.

## 12. Cross-animal calibration notes

- **Versus Bactrian Camel (580 kg):** Beluga is ~2.6× heavier and receives clearly higher Size/Defense, but the camel's 90.0 Stamina remains above beluga's 84.0 because camel endurance is an extreme terrestrial loaded-travel/dehydration specialization. This distinction should be revisited when more marine migrants are researched.
- **Versus Barracuda (17 kg):** Beluga's absolute Raw Power and Defense are vastly higher, while Barracuda retains more specialized cutting Weaponry relative to its body. This prevents the beluga's size from automatically making its teeth superior.
- **Versus Bald Eagle/Barn Owl:** Beluga's Senses 91.0 is deliberately elite but below Barn Owl's provisional 94.0. These senses operate through different media and should receive a broader sensory normalization later rather than being compared as identical mechanisms.
- **Versus Beaver (23 kg):** Both are aquatic maneuvering specialists, but beluga's 1.5-tonne scale creates a large absolute physical gap. Beaver engineering does not close that gap in combat.
- **Attack 61.0** is intentionally much lower than the already-researched American alligator's provisional 84.0 despite beluga's greater mass because alligator jaws are directly measured, purpose-built high-force weapons. This is an important anti-size-inflation comparison.
- **Defense 66.0** credits mass/blubber but does not treat blubber as armor. Later normalization against Blue Whale, Orca, Walrus, Elephant Seal, Hippopotamus and large sharks is required.
- **Intelligence 79.0** is close to the provisional Baboon 78.0, reflecting strong but differently evidenced cognition. Future primate, dolphin, corvid and orca files should determine whether this region needs more separation.
- **Special 80.0** is driven primarily by biosonar and under-ice locomotor anatomy. Do not double-count echolocation into Attack or generic Intelligence.

### Calibration verdict

No current comparison demands immediate changes to prior research files. The main future audit risks are marine-mammal Defense inflation from body mass/blubber, overvaluing sociality as combat Intelligence, and sensory score compression among echolocating cetaceans, owls and other specialists. Beluga should remain a high-endurance, high-sensory specialist with strong absolute bulk but only moderate-to-strong offensive weapon quality.