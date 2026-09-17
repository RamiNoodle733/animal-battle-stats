# Barracuda Research Overhaul

## 1. Identity and canonical specimen

- **Common name:** Barracuda
- **Research-standardized animal:** Great Barracuda
- **Scientific name:** *Sphyraena barracuda* (Edwards, 1771)
- **Family:** Sphyraenidae
- **Status:** Living
- **Exact animal represented:** The roster's generic “Barracuda” is standardized here as the **great barracuda, *Sphyraena barracuda***, the largest and most widely recognized barracuda and the species most appropriate to the site's unqualified common name.
- **Canonical specimen:** Healthy mature adult of approximately **1.40 m total length and 17.0 kg** in normal wild condition.
- **Sex:** Sex is left unspecified for the canonical specimen. Strong species-specific evidence located in this run did not establish a sufficiently consistent combat-relevant male/female size difference to justify forcing one sex as the standard. This should be revisited if a robust sex-specific adult dataset is found.
- **Population variation:** Great barracuda are circumtropical and size structure varies among regions and fisheries. Record or near-record individuals are not used as the canonical combat animal.

FishBase reports a common total length of 140 cm, maximum reported length of 200 cm, maximum published mass of 50 kg, and maximum reported age of 18 years. Florida Museum reports a 1.7 m, 44 kg hook-and-line record and notes that fish above about 1.5 m are very large. These sources support 1.4 m as a defensible large, mature, but non-record representative. FishBase's species length-weight model predicts mass in the high-teens kilograms around this length, supporting a rounded **17.0 kg** canonical mass while preserving uncertainty.

## 2. Physical measurements

### Mass

- **Canonical mass:** **17.0 kg**
- **Published maximum:** **50.0 kg** (FishBase); Florida Museum reports a 44 kg hook-and-line record and a reported species maximum around 50 kg.
- **Interpretation:** The canonical value is deliberately far below the maximum. A 50 kg fish would represent an exceptional upper-end animal, not the representative healthy adult required by the overhaul.
- **Confidence:** Moderate. Maximum mass is well documented, but a global sex-specific mean adult mass was not located.

### Total length and height

- **Canonical `length_cm`:** **140.0 cm total length**
- **Common length:** **140 cm TL** (FishBase)
- **Maximum reported length:** **200 cm TL** (FishBase)
- **Florida Museum context:** 1.7 m record fish; individuals over 1.5 m considered very large.
- **Canonical `height_cm`:** **0.0 cm**. A standardized standing-height field is not biologically useful for this fusiform fish and should not be invented from body depth.
- **Confidence:** High for the 140 cm common-length anchor; high that 200 cm is an upper-end maximum rather than representative.

### Swimming speed

This is a useful example of why the overhaul must distinguish measured/estimated biomechanics from repeated popular claims. Florida Museum repeats an estimated top speed around 36 mph / 58 km/h, but a 2016 peer-reviewed Biology Open study used anaerobic muscle twitch contraction time and stride length to estimate maximum swimming speed. For barracuda it obtained **6.2 ± 1.0 m/s**. An older directly reported burst measurement discussed in Nature was **12.16 m/s** for a 121.6 cm, 9.08 kg great barracuda, but that historical result and its hydrodynamic interpretation were debated.

- **Canonical `speed_mps`:** **6.2 m/s**
- **Context:** biomechanically estimated maximum, not a routine cruising speed
- **Uncertainty:** ±1.0 m/s in the 2016 estimate
- **Historical burst datum:** 12.16 m/s, retained as disputed historical context rather than the canonical field
- **Rejected shortcut:** Do not simply convert the widely repeated 35-36 mph popular figure to the production field.
- **Confidence:** Moderate-high for 6.2 m/s as the best modern defensible estimate; lower for a true in-water absolute maximum.

### Lifespan

- **Canonical `lifespan_years`:** **14.0 years**
- **Florida Museum:** scale analysis of large specimens supports at least 14 years.
- **FishBase:** maximum reported age 18 years.
- **Interpretation:** 14.0 is a conservative representative longevity field with the 18-year maximum retained as context.
- **Confidence:** Moderate-high.

### Bite force and jaw mechanics

Great barracuda have unusually good biomechanical research compared with many roster animals. Habegger and colleagues modeled an ontogenetic series of 18-130 cm total length and found estimated bite force from **1-93 N anteriorly** and **3-258 N posteriorly**. Another functional-morphology study found predicted dynamic force output increasing toward the corner of the mouth, with high-speed video showing repeated bites and lateral head shakes used to cut prey. Importantly, barracuda achieve effective cutting with sharp teeth and scissor-like geometry despite having relatively low bite force for body size.

- **Canonical `bite_force_psi`:** **0.0**
- **Why zero PSI despite real force data:** Newtons are force. PSI requires force divided by a defensible contact area. The papers support bite force, but this run found no validated species-specific tooth contact-area conversion that would justify inventing PSI.
- **Useful future field:** posterior bite force can be retained in newtons with size context rather than converted to PSI.
- **Confidence:** High that the force data are real and that PSI should remain unset.

### Teeth and cutting apparatus

Great barracuda possess two rows of conspicuous sharp teeth and a large gape. The posterior oral region acts as a cutting system: a robust palatine bearing dagger-like teeth opposes the mandible, producing a scissor-like shearing action. High-speed video demonstrates ram capture followed, on larger prey, by repeated bites and short lateral head shakes that can cut prey into pieces.

This is more combat-relevant than a sensationalized PSI number. The weapon's effectiveness comes from tooth sharpness, placement, jaw geometry, rapid closure, ram momentum, and repeated shearing.

### Body and defenses

The body is elongate, streamlined and laterally compressed, with fins concentrated posteriorly and a powerful caudal region suited to rapid acceleration. There is no armor, shell, heavy hide, osteoderm system or blubber defense. Scales and the fish's flexible body provide ordinary fish protection only. Its principal defense is avoiding contact through water-column positioning, acceleration and maneuvering.

## 3. Canonical proposed factual fields

```json
{
  "weight_kg": 17.0,
  "height_cm": 0.0,
  "length_cm": 140.0,
  "speed_mps": 6.2,
  "lifespan_years": 14.0,
  "bite_force_psi": 0.0
}
```

### Why these values

- **17.0 kg:** representative high-teens mass consistent with a 140 cm common-length adult and the species length-weight relationship, not the 50 kg maximum.
- **140.0 cm:** FishBase common total length, preferable to using a record specimen.
- **0.0 cm height:** no standardized meaningful height field established.
- **6.2 m/s:** modern peer-reviewed biomechanical maximum-speed estimate, explicitly not routine cruise speed.
- **14.0 years:** directly supported minimum longevity of large specimens and a conservative field below FishBase's 18-year reported maximum.
- **0.0 PSI:** bite force exists in newtons, but pressure cannot be responsibly calculated without tooth contact area.

### Useful future structured fields

```json
{
  "canonical_species": "Sphyraena barracuda",
  "canonical_sex": "unspecified adult",
  "total_length_cm": 140.0,
  "max_reported_length_cm": 200.0,
  "max_reported_mass_kg": 50.0,
  "estimated_max_swim_speed_mps": 6.2,
  "estimated_max_swim_speed_uncertainty_mps": 1.0,
  "posterior_bite_force_n_max_in_18_to_130_cm_series": 258.0,
  "primary_weapon": "dagger-like cutting teeth and ram bite",
  "locomotor_style": "ambush burst swimmer",
  "primary_hunting_sense": "vision"
}
```

## 4. Combat biology

### Primary and secondary weapons

**Primary weapon:** the jaws and interlocking/cutting dentition. The barracuda does not need mammal-like crushing force to be dangerous. It combines a rapid ram attack with sharp teeth, a large gape, and posterior shearing geometry.

**Secondary weapon:** whole-body acceleration and momentum. Speed is not itself a blade, but it determines how quickly the mouth reaches the target, reduces reaction time, and contributes to ram capture.

### Offensive mechanics

Great barracuda are visual ambush predators. They can hover or patrol slowly, then accelerate rapidly toward a selected fish. Small prey can be engulfed. Larger prey can be struck across the body and processed with repeated bites and lateral head movements. Functional-morphology work specifically documents prey positioned near the corner of the mouth where posterior jaw mechanics and dagger-like teeth improve cutting.

This gives the barracuda more practical damage potential than its raw bite-force number alone suggests. Attack should therefore reflect weapon geometry and delivery, but not be inflated into shark-tier crushing power.

### Defense and durability

Physical protection is modest. The fish has scales and a robust predatory body but no specialized armor. A large shark, grouper or similarly powerful predator that catches it can inflict catastrophic injury. Defense comes primarily from being difficult to catch in open water, not from absorbing damage.

### Locomotion and maneuverability

The elongated body, posterior fins and strong caudal propulsion are specialized for rapid forward acceleration. This is a burst ambush design rather than an endurance-thunniform design. The 2016 biomechanical study's 6.2 ± 1.0 m/s estimate is substantial but also demonstrates why famous 35+ mph fish-speed lists should not be used uncritically.

Agility is strong in its native water column because the animal can brake, turn, change depth and launch from near-stationary positions. It is not assigned elite agility solely because it is fast.

### Endurance / stamina

Great barracuda are not simply stationary sprinters. Electronic archival tagging of two large fish off South Florida documented minimum straight-line movements of **471 km** and **1,231 km** over 15-day deployments, with brief dives exceeding 100 m. That establishes meaningful travel capacity. However, the species' attack system remains burst-oriented, so sustained high-output combat should not be equated with the long-duration cruising of specialized migratory fishes.

### Senses

Vision is the primary hunting sense emphasized by Florida Museum. Large eyes and daylight ambush behavior support strong visual targeting. The fish can track moving prey and time rapid strikes, but this run found no evidence for extraordinary electrosensation, echolocation or another rare sensory mechanism comparable with specialist sharks, dolphins or owls.

### Intelligence, learning and tactics

The barracuda displays competent predatory decision-making: waiting, visually selecting prey, exploiting surprise, matching attack geometry to prey size, and changing from engulfing to repeated cutting when prey cannot be swallowed whole. This supports moderate tactical intelligence. It does not support mammalian, corvid, parrot or cephalopod-level flexible cognition.

### Hunting behavior

Great barracuda feed primarily on fishes including jacks, grunts, groupers, snappers, small tunas, mullets, herrings and anchovies. They are opportunistic and hunt throughout the water column. Adults tend to be solitary, though small aggregations occur. Juveniles use mangrove and seagrass nursery habitat before moving toward deeper reef habitat.

### Intraspecific fighting and aggression

The species is a formidable predator but should not be scored as permanently berserk. Predatory aggression is targeted and efficient. Human incidents often involve mistaken attraction to shiny objects, speared fish, or other feeding-associated circumstances. A willingness to strike prey rapidly does not automatically imply maximal ferocity against every large opponent.

### Predator defense

Large adults have relatively few natural predators, but sharks, large tuna and goliath grouper are documented predators of smaller adults. Avoidance, burst acceleration and open-water escape are the main defenses.

### Environmental strengths

- Warm tropical and subtropical marine water.
- Coral reefs, reef edges, clear coastal water and open-water lanes that permit visual detection and acceleration.
- Three-dimensional water-column engagement allows vertical repositioning.
- Ambush geometry favors a first strike against prey that fails to detect the stationary or slowly patrolling fish.
- Mangroves and seagrass are especially important to juveniles.

### Environmental limitations

- Fully aquatic: essentially nonfunctional on land.
- Tight obstacles can reduce straight-line burst value.
- Turbid or visually poor conditions can reduce the value of its primarily visual hunting strategy.
- Burst specialization does not imply indefinite high-speed output.
- Lack of armor leaves the body vulnerable if caught by a stronger grappler or biter.

### Major weaknesses

1. No meaningful armor or specialized trauma-resistant covering.
2. Damage delivery requires bringing the head and jaws into close contact.
3. Raw bite force is modest relative to many similarly sized predatory fishes; cutting teeth compensate but do not create crushing force.
4. Burst speed can be overvalued if treated as sustained speed.
5. Vision-dependent ambush is less dominant when visibility or approach geometry is poor.
6. Larger sharks and other powerful marine predators can overpower it.
7. Total terrestrial incapacity in cross-environment hypothetical matchups.

### Matchup archetypes

**Good matchups:** smaller unarmored fishes, elongated or soft-bodied prey vulnerable to transverse cutting, slower aquatic animals that cannot evade a sudden ram strike, and opponents that rely on seeing an attack early.

**Bad matchups:** heavily armored aquatic animals, much larger sharks and marine mammals, large crushing-biters, opponents able to survive the first cut and counter-grapple, and any matchup that removes usable water.

## 5. Proposed ABS substats

| Substat | Score | Evidence-based rationale |
|---|---:|---|
| Size | **30.0** | A 17 kg, 1.4 m fish is substantial but far below large sharks, crocodilians, big terrestrial mammals and megafauna in absolute mass. |
| Raw Power | **31.0** | Strong caudal burst and capable jaws, but absolute muscular force and measured bite force remain modest on the full roster. |
| Weaponry | **61.0** | Dagger-like teeth, large gape and scissor-like posterior bite produce efficient slicing disproportionate to raw jaw force. |
| Protection | **19.0** | Scales and ordinary fish tissues offer little specialized protection. |
| Toughness | **31.0** | A robust predatory fish but not armored and vulnerable to major bites or crushing trauma. |
| Speed | **63.0** | Best modern estimate is 6.2 ± 1.0 m/s; strong burst performance, without using sensationalized 35-36 mph claims as measured fact. |
| Maneuverability | **69.0** | Strong three-dimensional aquatic control and rapid attack alignment, but elongated sprint morphology is not the roster ceiling for turning. |
| Endurance | **64.0** | Tagging documents major multi-day movements, while the attack system itself remains burst-specialized. |
| Recovery | **30.0** | Ordinary teleost healing, with no exceptional regeneration or rapid recovery mechanism established. |
| Tactics | **55.0** | Visual ambush, prey selection and switch to repeated cutting on oversized prey show effective but not high-order tactical flexibility. |
| Senses | **61.0** | Strong vision and target tracking are central to predation; no rare sensory system warrants an elite score. |
| Ferocity | **61.0** | Decisive high-speed predator with repeated cutting behavior, tempered by largely efficient rather than indiscriminate aggression. |
| Abilities | **51.0** | Burst ambush plus specialized shearing bite are matchup-relevant, but neither is a venom/electric/camouflage-tier exotic mechanism. |

## 6. Proposed six headline ABS ratings

| Headline | Score | Justification |
|---|---:|---|
| **Attack** | **48.0** | A 17 kg fish has moderate absolute attack capacity. Sharp cutting teeth and ram delivery elevate it above similarly sized animals with poor weapons, but low relative bite force prevents shark/crocodilian-style inflation. |
| **Defense** | **28.0** | Escape and water-column positioning help avoid attacks, but actual protection is weak and there is no armor. |
| **Agility** | **70.0** | Rapid acceleration, three-dimensional repositioning and precise ram alignment make it highly agile in water, without treating top speed as agility by itself. |
| **Stamina** | **64.0** | Long tag-recorded movements support strong travel stamina, while burst attack physiology keeps it below elite endurance specialists. |
| **Intelligence** | **51.0** | Competent visual ambush predator with adaptive prey-processing behavior, but limited evidence for broad flexible problem solving. |
| **Special** | **52.0** | Scissor-like cutting dentition and burst ambush are distinctive and useful, though less matchup-transforming than venom, electricity, echolocation or extreme regeneration. |

### Rating interpretation

The great barracuda is a **fast aquatic cutting specialist**, not a miniature shark with fictional bite pressure. Its strongest battle advantage is the integration of acceleration, visual targeting and a mechanically effective slicing bite. Absolute scaling keeps Attack below far larger or mechanically stronger predators even though the barracuda is exceptionally dangerous to fish-sized prey.

## 7. Exactly two special abilities and two unique traits

### Special abilities

1. **Silver Flash Ambush** — From slow patrol or near-stationary positioning, the streamlined body and caudal propulsion produce a sudden burst that sharply reduces prey reaction time and delivers the jaws into striking range.
2. **Scissor-Jaw Sever** — Dagger-like palatine and mandibular teeth, posterior bite geometry, repeated closure and short lateral head shakes let the barracuda slice prey too large to engulf whole.

### Unique traits

1. **Torpedo Frame** — An elongated body with fins concentrated toward the rear prioritizes rapid acceleration and straight-line attack efficiency over armor or heavy-body grappling.
2. **Low-Force, High-Cut Predator** — Biomechanical work shows relatively low bite force for body size, yet specialized tooth geometry allows effective flesh-and-bone cutting. This is a useful reminder that bite force alone does not determine weapon lethality.

## 8. Expanded profile content

### Habitat

Great barracuda occupy tropical and subtropical marine and estuarine environments, especially nearshore coral reefs, seagrass beds, mangroves, sandy reef-adjacent areas and open coastal water. Florida Museum reports occurrence from near the surface to roughly 100 m, while tagging work has documented brief excursions substantially deeper than 100 m.

### Geographic range

The species is broadly circumtropical. FishBase and Florida Museum document the western Atlantic from Massachusetts and Bermuda through the Caribbean and Gulf of Mexico to Brazil, plus the eastern Atlantic, Red Sea and Indo-Pacific to Hawaii and central Pacific islands. It is rare or absent in much of the eastern Pacific.

### Diet

Primarily piscivorous. Documented prey include jacks, grunts, groupers, snappers, small tunas, mullets, killifishes, herrings and anchovies, with cephalopods and occasional crustaceans also reported by institutional references. Its trophic position is high; FishBase gives a modeled trophic level around 4.5.

### Ecology

Adults are commonly solitary visual predators associated with reefs and adjacent open water. They can hover or patrol slowly, then execute short high-speed attacks. Their role is not simply to chase continuously but to exploit surprise and an efficient cutting apparatus. Juveniles use sheltered vegetated nursery habitats before shifting toward deeper reefs.

### Social structure

Adults tend toward solitary behavior but may occur in small aggregations. Younger barracuda are more likely to school. No colony or pack-level combat bonus should be assigned to the canonical adult.

### Reproduction and life history

Reproduction is less well documented than feeding mechanics. Florida Museum describes offshore spawning as probable and notes that eggs are released and fertilized in open water and dispersed by currents. Sexual maturity is around 60-66 cm in broad references, though age-at-maturity descriptions vary. Production copy should avoid overconfident spawning-season claims that are not consistent across the species' global range.

### Conservation and fisheries

Great barracuda are widely distributed and are important recreational/game fish in many regions. Florida FWC identifies them as native top reef predators. FishBase flags high fishing vulnerability despite broad distribution, which is compatible with relatively slow population turnover. Conservation labeling should be rechecked directly against the current IUCN species account during production migration rather than inferred from generic barracuda summaries.

### Major adaptations

- Streamlined, elongate burst-swimming body.
- Posterior fin placement and powerful tail for acceleration.
- Large eyes and visually guided predation.
- Large gape and prominent dagger-like teeth.
- Posterior jaw geometry specialized for cutting.
- Countershaded silver body that reduces visual contrast in open water.
- Behavioral switch between engulfing smaller prey and cutting larger prey.

### Human interaction

Great barracuda can injure humans, particularly in feeding-associated situations or around speared fish and shiny objects. They should not be portrayed as routine human hunters. Large tropical reef predators can also accumulate ciguatoxins; Florida FWC warns that consuming larger barracuda may cause ciguatera poisoning.

### Strong fun facts

1. A great barracuda can cut prey larger than its gape into manageable pieces instead of relying on swallowing everything whole.
2. High-speed video has captured repeated biting and short head shakes that position prey against the stronger posterior cutting region of the jaws.
3. Its bite force is relatively low for its body size among fishes, yet the animal remains a highly effective predator because tooth shape and cutting geometry matter enormously.
4. A modern muscle-physiology study estimated barracuda maximum swimming speed at 6.2 ± 1.0 m/s, much lower than some famous internet speed claims.
5. Two satellite-tagged great barracuda traveled minimum straight-line distances of 471 km and 1,231 km in only 15 days.
6. FishBase reports a common length around 1.4 m but a maximum reported length of 2.0 m, illustrating why record-size animals should not define the canonical ABS specimen.
7. Large barracuda can bioaccumulate ciguatoxins, making human consumption risky in some tropical regions even though the toxin is not produced by the fish itself.

### Concise site-ready summary

**Great Barracuda (*Sphyraena barracuda*) is a large tropical ambush fish built around sudden acceleration and a specialized slicing bite. A representative adult is about 1.4 m long and roughly 17 kg. Rather than relying on extraordinary crushing force, it uses dagger-like teeth, a scissor-like posterior jaw and rapid head movements to cut fish too large to swallow whole. It is highly dangerous to fish-sized prey but has little armor and remains vulnerable to substantially larger marine predators.**

### Detailed narrative profile

The great barracuda is a study in efficient weapon design. Its reputation often produces exaggerated speed and bite-force claims, but the measured biology is more interesting. A representative adult is long and streamlined rather than massively built. It can spend time hovering or moving slowly through reef habitat, relying on vision to detect a favorable target. Once the attack begins, caudal propulsion converts that quiet posture into a rapid ram toward the prey.

At contact, the barracuda's jaws solve a problem that many predators face: prey can be too large to swallow. Instead of requiring enormous crushing force, the mouth uses sharp, dagger-like teeth and favorable posterior geometry. Experimental and biomechanical work shows that prey can be struck across the body, shifted toward the corner of the mouth and cut by repeated bites and lateral head movement. The result is a predator whose practical damage output exceeds what a simple bite-force ranking would suggest.

That specialization has limits. The barracuda is not armored, does not have a shark's scale of jaw force, and is not built to wrestle massive opponents. Its best combat geometry is open water, where it can choose distance, align a burst and attempt a disabling cut before the opponent can respond. If a much larger shark, grouper or other powerful aquatic predator survives the first exchange and establishes contact, the barracuda's defensive options diminish quickly.

Its endurance also deserves nuance. Burst attacks are short, but tagging demonstrates that great barracuda can cover very large distances over days and make substantial vertical movements. The correct ABS profile is therefore neither “fragile one-second sprinter” nor “endurance superfish.” It is a mobile reef and coastal predator with strong travel capacity whose actual attack output is concentrated into rapid ambush bursts.

## 9. Image Asset

- **Target asset path:** `animal-research-for-update/images/barracuda.png`
- **Status:** `SOURCE FOUND - PNG COMMIT PENDING`
- **Primary candidate:** Real underwater photograph of an adult *Sphyraena barracuda* in French Polynesia, full lateral body visible, 2009 × 1509 original.
- **Source page URL:** https://commons.wikimedia.org/wiki/File:Sphyraenidae_-_Sphyraena_barracuda_(Great_barracuda).JPG
- **Direct image URL:** https://commons.wikimedia.org/wiki/Special:Redirect/file/Sphyraenidae%20-%20Sphyraena%20barracuda%20%28Great%20barracuda%29.JPG
- **Creator:** Hectonichus
- **License shown on source page:** CC BY-SA 4.0 (also offered under GFDL)
- **Why selected:** exact species, real underwater photograph, healthy adult appearance, high resolution, strong lateral profile and nearly complete body suitable for a future card cutout.
- **Transparency:** Source is JPEG and does not have transparent background. The current GitHub text-file writer cannot safely commit or process a binary cutout, so no fake PNG was created. A later asset pass should perform a genuine background removal, visually inspect the silhouette, then use the repository's provenance/promotion workflow.
- **Fallback candidate:** NOAA Florida Keys National Marine Sanctuary public-domain photograph showing a great barracuda with prey: https://commons.wikimedia.org/wiki/File:Barracuda_with_prey.jpg . This is biologically excellent for demonstrating feeding but less suitable as the primary card because the animal is cropped.

## 10. Evidence and source ledger

| Source | Direct URL | Claims supported | Reported finding / context | Confidence / caveat |
|---|---|---|---|---|
| FishBase, *Sphyraena barracuda* | https://www.fishbase.org/summary/Sphyraena_barracuda.html | Taxon, common/max length, max mass, maturity, age, distribution, trophic context, length-weight model | Common length 140 cm TL; max 200 cm; max published weight 50 kg; max reported age 18 y; maturity estimate 66 cm | High-moderate. FishBase aggregates primary references; individual source refs should be retained when migrating production data. |
| Florida Museum, Great Barracuda | https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/great-barracuda/ | Morphology, habitat, diet, records, longevity, predation, feeding behavior, popular speed context | 1.7 m / 44 kg hook-and-line record; reported max ~2 m / 50 kg; at least 14 y; sharp teeth and large gape; tropical/subtropical range | High for institutional synthesis. Its 35-36 mph speed statement is treated as an estimate, not the canonical measurement. |
| Svendsen et al. 2016, Biology Open / PubMed | https://pubmed.ncbi.nlm.nih.gov/27543056/ | Modern maximum-speed estimate | Barracuda estimated maximum 6.2 ± 1.0 m/s from muscle twitch contraction time and stride length | High for the methodology reported; it is a biomechanical estimate rather than direct free-swimming radar/video maximum. |
| Walters 1966, Nature | https://www.nature.com/articles/212215a0 | Historical speed conflict | Discusses Gero's 12.16 m/s burst measurement in a 121.6 cm fish and hydrodynamic criticism | Moderate. Useful conflict history, not selected as canonical speed. |
| Habegger et al. 2011, Journal of Zoology | https://zslpublications.onlinelibrary.wiley.com/doi/10.1111/j.1469-7998.2010.00745.x | Bite force through ontogeny | 1-93 N anterior and 3-258 N posterior for 18-130 cm TL series; bite force relatively low for body size | High. Theoretical/static-equilibrium estimates, not PSI. |
| Habegger et al., functional morphology / PubMed | https://pubmed.ncbi.nlm.nih.gov/18082386/ | Ram biting, cutting mechanics, jaw morphology | High-speed video; repeated bites and lateral head shakes; posterior scissor-like bite with dagger-like teeth; dynamic force up to 58 N in studied series | High for feeding mechanics. |
| Habegger 2009 USF thesis | https://digitalcommons.usf.edu/etd/1996/ | Bite-force comparison and ontogeny | Great barracuda posterior force 3-258 N; low relative bite force versus bull shark | High-moderate; thesis supporting peer-reviewed work. |
| Hansen & Kerstetter 2015, Gulf and Caribbean Research | https://aquila.usm.edu/gcr/vol26/iss1/6/ | Movement, depth use, endurance context | Two 101/104 cm FL fish moved 471 and 1,231 km MSLD over 15 days; max depths 145.2 and 186.9 m | High for those tagged individuals; N=2 means do not generalize exact distances as population averages. |
| Florida Fish and Wildlife Conservation Commission | https://myfwc.com/wildlifehabitats/profiles/saltwater/barracuda/ | Florida ecology, max size, diet, ciguatera | Native; up to 106 lb; reef top predator eating fish, squid, shrimp; ciguatera warning | High for Florida management context. |
| Virginia Aquarium | https://virginiaaquarium.com/great-barracuda | Institutional cross-check for habitat, range, lifespan and size | Estimated 14 y; nearshore reefs, seagrasses, mangroves; tropical/subtropical range | Moderate-high institutional synthesis. |
| Wikimedia Commons, Hectonichus | https://commons.wikimedia.org/wiki/File:Sphyraenidae_-_Sphyraena_barracuda_(Great_barracuda).JPG | Primary image candidate and licensing | Exact-species 2009 × 1509 underwater photo, French Polynesia, CC BY-SA 4.0 | High for image provenance shown on source page. |
| NOAA / Wikimedia Commons | https://commons.wikimedia.org/wiki/File:Barracuda_with_prey.jpg | Fallback image and visual feeding evidence | Florida Keys National Marine Sanctuary image, public domain, barracuda holding prey | High provenance; cropped body makes it weaker as primary card art. |

## 11. Confidence, caveats and unresolved questions

- **Species identity: High confidence.** Standardizing generic “Barracuda” to *Sphyraena barracuda* is the most defensible interpretation for this roster.
- **Canonical length: High confidence.** 140 cm is a published common length and avoids the 2 m maximum.
- **Canonical mass: Moderate confidence.** 17 kg is an editorial representative derived from the common-length anchor and species length-weight relationship, not a direct global adult mean. Revisit if a strong sex-specific adult mass distribution is found.
- **Sex standard: Moderate/uncertain.** Do not claim the canonical fish is male or female without stronger species-specific dimorphism evidence.
- **Speed: Moderate-high confidence.** 6.2 ± 1.0 m/s is the best modern biomechanical estimate located. Historical 12.16 m/s and popular 35-36 mph claims are retained as conflicting context rather than averaged together.
- **Bite force: High confidence in newtons, no confidence in PSI.** Do not convert 258 N to PSI without validated tooth contact area.
- **Longevity: Moderate-high confidence.** At least 14 years is institutionally supported; FishBase reports 18 years maximum.
- **Conservation status:** Recheck the exact current IUCN species account during final migration. Do not use a generic “barracuda” status as if it were automatically a current *S. barracuda* assessment.
- **Image:** Strong source found, but it is not transparent and sex is not documented. PNG cutout remains pending.

## 12. Cross-animal calibration notes

This file was calibrated against the already-researched staging animals rather than against the live Barracuda ratings.

- **Versus Army Ant (Attack 1.8):** Barracuda must be vastly higher in absolute damage output. A 17 kg vertebrate with centimeter-scale cutting dentition cannot be compressed toward an individual ant merely because the ant is proportionally formidable.
- **Versus Axolotl (Attack 2.8):** Barracuda's large mass advantage, active piscivory, ram strike and slicing dentition justify a very large Attack gap.
- **Versus Barn Owl (Attack 13.0):** Both are precision predators, but the barracuda is roughly fifty times heavier canonically and has a much larger cutting apparatus. Attack 48.0 preserves that absolute-force gap.
- **Versus Bald Eagle (Attack 36.0):** The eagle has excellent talons and aerial delivery, but the barracuda's much greater mass and repeated shearing bite justify a higher absolute Attack. This is environment-specific in delivery, not a claim that fish locomotion works outside water.
- **Versus Badger (Attack 38.0):** Barracuda receives higher Attack because of size, cutting dentition and ram delivery, but the gap remains moderate because the badger is a robust terrestrial biter/grappler while barracuda raw jaw force is not exceptional.
- **Versus Baboon (Attack 45.0):** Attack 48.0 keeps them close in overall absolute damage potential while recognizing very different mechanisms. The barracuda has superior cutting specialization; the baboon has grasping limbs and more flexible close-combat tactics.
- **Versus Arctic Wolf (Attack 52.0):** Barracuda remains slightly below the 40 kg wolf because the wolf has substantially more body mass and grappling/biting versatility, despite the fish's sharper cutting specialization.
- **Versus Bactrian Camel (Attack 59.0):** The 580 kg camel remains clearly above in absolute whole-body force and impact potential. The barracuda's weapon quality does not erase a roughly 34-fold mass gap.
- **Agility:** 70.0 is intentionally below Barn Owl 82.0 and near Baboon 72.0. Strong aquatic acceleration does not automatically equal elite turning/evasion across all animals.
- **Stamina:** 64.0 is supported by tagging but remains far below Albatross 96.0, Bactrian Camel 90.0 and Arctic Wolf 86.0. Long-distance movement evidence is not permission to turn a burst predator into an elite sustained-output anchor.
- **Special:** 52.0 reflects a distinctive mechanical feeding system but remains well below Barn Owl 82.0 and Axolotl 74.0 because specialized cutting is less biologically unusual than sound-localized silent flight or major regeneration.

### Future normalization watch

Revisit Barracuda after **Bull Shark, Marlin, Sailfish, Swordfish, Great White Shark, Tiger Shark, Mako Shark, Piranha, Moray Eel, Giant Grouper and Tuna** are researched. The most important checks will be aquatic Attack spacing, burst-speed versus Agility separation, and whether Weaponry 61.0 appropriately captures cutting efficiency without double-counting the same jaw adaptation in Special.