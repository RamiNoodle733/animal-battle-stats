# Goliath Birdeater Research Overhaul

## 1. Identity and canonical specimen

- **Common name:** Goliath Birdeater / Goliath bird-eating tarantula
- **Scientific name:** *Theraphosa blondi* (Latreille, 1804)
- **Family:** Theraphosidae
- **Status:** Living
- **Exact animal represented:** *Theraphosa blondi*, not the similar *T. stirmi* or *T. apophysis*. The World Spider Catalog accepts *T. blondi* and currently gives Venezuela, Brazil and Guyana as its distribution.
- **Canonical specimen:** Healthy mature **adult female**, approximately **0.15 kg**, with about **25 cm leg span**.
- **Why female:** Females are the long-lived, heavy-bodied sex and retain the robust adult build for years. Smithsonian reports females may live up to 20 years while males generally live only 3-6 years.
- **Variation/conflict note:** Popular sources often mix *Theraphosa* species and use exceptional 28-30 cm spans as if typical. Guinness documents up to 175 g and a 28 cm record span, but these are upper-end values, not the canonical representative baseline.

## 2. Physical measurements

### Mass and dimensions

Guinness identifies *T. blondi* as the world's largest known spider by mass, reporting **up to 175 g** and a documented **28 cm** leg span. A museum female from French Guiana is documented at **23.5 cm** across. A specialist species account gives body length up to about **11.9 cm**, leg span up to **30 cm**, and mass up to **175 g**.

For ABS, a robust but non-record mature female is better represented by **150 g** and **25 cm leg span** than by the maximum records.

- **Canonical `weight_kg`: 0.15**
- **Canonical `length_cm`: 25.0**, explicitly used as overall leg-span envelope because that is the most battle-relevant standardized dimension available for this spider.
- **Canonical `height_cm`: 0.0**, because no useful standardized standing-height dataset was found.
- **Representative body length:** roughly 10-12 cm in very large animals.
- **Confidence:** Moderate-high for maximum evidence, moderate for representative canonical midpoint because population-level adult mass distributions are sparse.

### Speed and locomotion

*T. blondi* is a terrestrial, burrow-associated ambush predator, not a pursuit specialist. A peer-reviewed theraphosid locomotion study confirms that large tarantulas use specialized attachment structures and mechanically constrained terrestrial locomotion, but this run found no defensible species-specific maximum speed measurement for *T. blondi*.

- **Canonical `speed_mps`: 0.0**
- The live 3.6 km/h value is rejected as unsupported.

### Lifespan

Smithsonian reports **10-15 years in human care**, with females reaching **up to 20 years** and males only **3-6 years**.

- **Canonical `lifespan_years`: 15.0**
- **Female maximum context:** about 20 years in human care.
- **Confidence:** High for institutional captive-longevity context, lower for wild mean lifespan.

### Fangs, venom and bite force

The paired chelicerae carry large downward-projecting fangs that penetrate prey and deliver venom. This is a mechanically important weapon, but no defensible species-specific bite pressure in PSI was recovered. The old 50 PSI value is therefore rejected.

- **Canonical `bite_force_psi`: 0.0**
- **Weapon note:** venom plus fang penetration matters far more than an invented pressure number.

### Urticating setae and stridulation

The abdomen carries detachable urticating setae used defensively. Smithsonian also documents audible defensive stridulation produced by rubbing hairs together, audible from about **15 ft**, followed by rearing and fang display when threatened. Theraphosid phylogenomics confirms urticating setae are a major evolved defensive system within the family.

### Defensive structure

The exoskeleton gives basic arthropod structural protection but is not heavy armor. The abdomen is particularly vulnerable to rupture and falls. Defense relies on threat display, irritating setae, retreat to a burrow, low profile and the deterrent effect of large fangs rather than impact resistance.

## 3. Canonical proposed factual fields

```json
{
  "weight_kg": 0.15,
  "height_cm": 0.0,
  "length_cm": 25.0,
  "speed_mps": 0.0,
  "lifespan_years": 15.0,
  "bite_force_psi": 0.0
}
```

Recommended future fields:

```json
{
  "canonical_sex": "female",
  "dimension_basis": "leg span",
  "representative_leg_span_cm": 25.0,
  "maximum_documented_leg_span_cm": 28.0,
  "maximum_reported_mass_kg": 0.175,
  "defense_system": "urticating setae + stridulation + fang threat"
}
```

## 4. Combat biology

### Weapons and offensive mechanics

The primary weapon is the paired cheliceral fang system. The spider closes distance over a very short range, seizes prey with the anterior legs/pedipalps and drives the fangs downward. Venom assists prey subdual and feeding. Against tiny prey this is formidable; on the full ABS roster, however, a 150 g spider cannot translate proportional performance into mammal-scale damage.

The second combat-relevant system is the abdominal urticating setae. These are principally defensive rather than a killing weapon. They can contaminate the face and sensitive tissues of an approaching predator and create a reason to disengage before physical contact.

### Predation and diet

Smithsonian describes a nocturnal predator capable of eating invertebrates and small vertebrates including mice, frogs, lizards and occasionally birds. The common name is therefore misleading if interpreted as dietary specialization. Birds are possible prey, not the routine defining food source. The species lives in silk-lined burrows or shelters under roots and rocks and hunts close to the forest floor.

### Defense and durability

The spider's defense is layered: remain concealed, retreat, stridulate, release urticating hairs, rear and display fangs, then bite if contact occurs. This is excellent deterrence for a small arthropod but poor absolute durability. A hard strike, crushing bite or fall can be catastrophic, especially to the abdomen.

### Locomotion and agility

Eight legs provide stable low-speed maneuvering, rapid short repositioning and strong substrate contact. Large theraphosids possess specialized adhesive structures that aid locomotion. Nevertheless, this is a heavy terrestrial tarantula optimized for close ambush and burrow life rather than long pursuit. Agility should therefore be respectable at tiny scale but not confused with high top speed or aerial maneuverability.

### Endurance

The spider's low metabolic operating mode supports long waiting periods and survival between meals. That is ecological persistence, not high-output combat stamina. Sustained fast locomotion is not its specialty. ABS Stamina therefore remains below active vertebrate endurance specialists.

### Senses

Like other tarantulas, it relies strongly on mechanical information, especially substrate and air vibrations detected through sensory hairs, rather than sharp image-forming vision. This is highly effective around a burrow entrance and in darkness but has less long-range information than vertebrate visual hunters.

### Intelligence and tactics

Behavior is effective but largely stereotyped: concealment, vibration-triggered orientation, short-range ambush, threat escalation and retreat. There is no evidence supporting complex planning comparable with birds or mammals. Its tactics score recognizes good ambush architecture without inflating cognition.

### Intraspecific behavior

Smithsonian describes the species as generally solitary, with individuals coming together to mate. This means no pack coordination benefit applies to the canonical fighter. Adult female longevity and burrow residency favor risk management rather than constant aggressive engagement.

### Environmental strengths

- Humid tropical forest floor with cover and burrow access.
- Darkness and clutter that reward vibration sensing and short ambushes.
- Confined approaches where a predator must expose its face to hairs and fangs.
- Stable terrestrial substrate for eight-legged control.

### Environmental limitations

- Exposed open terrain removes concealment.
- Large vertical falls are dangerous.
- Dry or inappropriate environmental conditions undermine normal physiology.
- Deep water and highly mobile aerial opponents are poor contexts.
- Larger vertebrates can exceed its weapons' practical penetration/control envelope.

### Major weaknesses

1. Only about 150 g representative mass.
2. Fragile abdomen and low absolute trauma tolerance.
3. No pursuit speed advantage.
4. Fang attack requires very close contact.
5. Venom is not a roster-wide instant-kill mechanism.
6. Urticating hairs deter better than they physically stop a committed large attacker.

### Matchup archetypes

**Good matchups:** similarly tiny soft-bodied animals, small arthropods, vulnerable amphibian/reptile prey within capture size, and attackers sensitive to urticating setae.

**Bad matchups:** birds or mammals able to strike from outside fang range, large armored arthropods with superior reach, heavy vertebrates, crushing opponents, and open-terrain pursuit specialists.

## 5. Proposed ABS substats

| Substat | Score | Rationale |
|---|---:|---|
| Size | **3.0** | Enormous for a spider, but 0.15 kg is tiny on the full roster. |
| Raw Power | **5.5** | Strong relative to its size, negligible beside serious vertebrate combatants. |
| Weaponry | **24.0** | Large fangs plus venom are effective at its prey scale, but absolute reach and penetration are limited. |
| Protection | **8.0** | Exoskeleton and hairs provide modest protection, with a vulnerable abdomen. |
| Toughness | **8.5** | Can withstand ordinary arthropod stresses but is highly vulnerable to crushing and falls. |
| Speed | **19.0** | Capable of short terrestrial bursts, but not a pursuit specialist and no reliable maximum is known. |
| Maneuverability | **61.0** | Eight-legged close control and rapid local repositioning are useful despite low travel speed. |
| Endurance | **35.0** | Excellent low-output persistence, limited evidence for sustained high-output exertion. |
| Recovery | **24.0** | Molting permits some structural renewal, but severe adult trauma remains dangerous and limb regeneration is not an instant combat benefit. |
| Tactics | **36.0** | Effective burrow ambush and threat escalation, but limited behavioral flexibility. |
| Senses | **62.0** | Strong vibration/mechanosensory detection at close range, weaker long-range visual information. |
| Ferocity | **46.0** | Will defend with hairs, threat posture and bite, but avoidance/retreat remain normal. |
| Abilities | **84.0** | Venom, urticating setae and stridulation form an unusually rich defensive/offensive toolkit for a tiny animal. |

## 6. Proposed six headline ABS ratings

| Headline | Score | Justification |
|---|---:|---|
| **Attack** | **16.0** | Fangs and venom can rapidly subdue appropriately sized prey, but absolute damage is constrained by 150 g body mass. |
| **Defense** | **12.0** | Layered deterrence is good, yet physical durability and armor are poor on the full roster. |
| **Agility** | **61.0** | Strong close-quarters multi-legged control without pretending low pursuit speed equals poor maneuverability. |
| **Stamina** | **35.0** | Low-output persistence is excellent, sustained high-output fighting is not demonstrated. |
| **Intelligence** | **31.0** | Competent ambush and threat behavior without evidence for high-order flexible cognition. |
| **Special** | **90.0** | Venom plus detachable urticating setae and audible stridulation produce major matchup effects unusual across the roster. |

## 7. Exactly two special abilities and exactly two unique traits

### Special abilities

1. **Irritant Cloud** — Kicks detachable abdominal urticating setae toward an approaching threat, creating a contact-deterrence zone around sensitive eyes, mouth and skin before the opponent reaches the fangs.
2. **Fang-and-Venom Clamp** — Uses close-range seizure and large cheliceral fangs to puncture and deliver venom into appropriately sized prey, combining mechanical restraint with biochemical subdual.

### Unique traits

1. **Heavyweight Spider** — *T. blondi* is the best-supported living spider mass extreme, reaching about 175 g, although ABS correctly treats that as tiny in absolute roster terms.
2. **Hissing Threat Display** — Stridulatory hairs can generate an audible hiss before escalation to rearing, fang display and biting, adding a rare acoustic warning layer to its defense.

## 8. Expanded profile

### Habitat and range

The World Spider Catalog recognizes *T. blondi* from Venezuela, Brazil and Guyana. Other institutional/popular accounts extend the familiar range into the Guianas/Suriname, but identification is complicated by historically confused *Theraphosa* species. For production taxonomy, use the catalog-supported range conservatively and label broader legacy locality claims where voucher identification is uncertain.

The species is terrestrial and associated with humid northern South American rainforest. Smithsonian describes silk-lined burrows and shelters under rocks and roots. Moist forest-floor structure is central to its ecology.

### Diet and ecology

It is an opportunistic nocturnal predator. Invertebrates are important prey, while sufficiently small frogs, lizards, rodents and occasional birds can also be taken. The spider is not a specialized bird hunter despite its name. Predation is short-range and mechanically assisted by venom rather than based on long pursuit.

### Social structure and life history

Adults are solitary outside reproduction. Females are dramatically longer lived than males, with Smithsonian giving up to 20 years for females versus 3-6 years for males. This sex difference is one reason the mature female is the canonical ABS specimen.

### Conservation

No current IUCN Red List assessment was verified in this run. Do not assign a fabricated global category. Habitat loss and collection/trade can be discussed as plausible pressures only with local evidence rather than presented as a quantified global trend.

### Adaptations

The combination of very large theraphosid body size, burrow use, vibration sensitivity, adhesive locomotor structures, venomous fangs, urticating setae and stridulation makes this species a highly specialized close-range forest-floor ambusher.

### Human interaction

Its size and defensive display are intimidating, but the battle profile should not equate fearsome appearance with mammal-scale lethality. Human encounters are more relevant for painful fang injury and irritating setae than for unsupported claims of extreme venom lethality. It also appears in the exotic-pet trade and is culturally notable in northern South America.

### Genuine fun facts

- It is the best-known contender for the world's heaviest living spider, with Guinness reporting up to 175 g.
- A documented 1965 specimen reached a 28 cm leg span.
- The common name exaggerates the importance of birds in its normal diet.
- Its defensive hiss is produced by stridulation rather than vocal cords.
- Females can live several times longer than males.
- The famous 23.5 cm Toulouse museum specimen is a female from French Guiana.

### Concise site-ready summary

The Goliath Birdeater is the heavyweight champion of living spiders: a burrow-dwelling South American tarantula armed with large venom-delivering fangs, vibration-sensitive hairs and a cloud of irritating defensive setae. Its weapons are formidable against small prey, but ABS's absolute scale keeps its raw power and durability far below vertebrate heavyweights.

### Rich narrative profile

At the mouth of a humid rainforest burrow, *Theraphosa blondi* is built to make a few centimeters of ground dangerous. It does not need a long chase. Vibration cues reveal movement nearby, eight legs stabilize a rapid close approach, and the chelicerae finish the capture with deep fang penetration and venom. If the contact is unwanted, the spider has a different escalation ladder: concealment, retreat, audible stridulation, urticating hairs, a raised fang display and finally a bite.

That toolkit makes the animal much more interesting than a simple 'largest spider' label, but it also illustrates why ABS must remain absolute rather than pound-for-pound. A 150 g spider can be extraordinary at controlling prey its own size and still possess very little raw force compared with a fox, eagle, wolf or megafaunal animal. Its best ratings therefore belong to Special, close maneuverability and sensory ambush, not Raw Power or Defense.

### Future structured-field proposals

- `leg_span_cm`
- `body_length_cm`
- `canonical_sex`
- `urticating_setae: true`
- `stridulation: true`
- `locomotion_mode: terrestrial/burrow ambush`
- `venom_delivery: cheliceral fangs`

## 9. Mandatory image section

- **image_status:** `SOURCE FOUND - FULL-BODY NOT VERIFIED`
- **png_repo_path:** `animal-research-for-update/images/goliath-birdeater.png` (not created)
- **source_page_url:** https://commons.wikimedia.org/wiki/File:Theraphosa_blondi_240637455.jpg
- **original_photo_url:** Source page provides the original 2048x1536 JPEG through Wikimedia Commons; direct binary URL must be copied from the Commons original-file control before cutout rather than guessed.
- **file_format_verified:** Source is a JPEG; no final PNG exists.
- **alpha_verified:** No
- **full_body_verified:** No. The candidate is a real living exact-*T. blondi* photograph, but strict visibility of every distal leg tip was not certified strongly enough in this run.
- **adult_verified:** No. Source metadata does not explicitly establish adult age.
- **sex_verified_or_unknown:** Unknown
- **license_status:** CC BY-SA 4.0 on Wikimedia Commons
- **notes:** The 2048x1536 Brazil photograph is reusable and exact-species but does not yet satisfy mandatory adulthood plus strict all-eight-leg-tip verification. A superb 5041x7360 female museum image was rejected as the primary because it is a mounted specimen, not the required healthy living adult. No PNG is claimed because the connected GitHub writer is UTF-8 text-only.

## 10. Evidence and source ledger

| Source | Direct URL | Supports | Finding | Confidence / caveat |
|---|---|---|---|---|
| Smithsonian National Zoo, Goliath bird-eating tarantula | https://nationalzoo.si.edu/animals/goliath-bird-eating-tarantula | lifespan, behavior, diet, burrow ecology, stridulation, urticating hairs | females up to 20 years; males 3-6; nocturnal/solitary; hairs + hiss + fang display | High institutional summary |
| World Spider Catalog | https://wsc.nmbe.ch/lsid/urn:lsid:nmbe.ch:spidersp:002488 | accepted taxonomy and range | accepted *T. blondi*; Venezuela, Brazil, Guyana | High taxonomic authority |
| Guinness World Records, largest spider | https://www.guinnessworldrecords.com/world-records/largest-spider | maximum mass and span | up to 175 g; 28 cm documented span | High for record context; not representative mean |
| Silva et al. 2021, J Comp Physiol A | https://pubmed.ncbi.nlm.nih.gov/33386944/ | theraphosid locomotion/adhesion | biomechanics of adhesion and locomotion in large theraphosids | High peer-reviewed; not *T. blondi*-specific maximum speed |
| Foley et al. 2019, Mol Phylogenet Evol | https://pubmed.ncbi.nlm.nih.gov/31374259/ | urticating-setae evolutionary context | theraphosid phylogenomics and urticating setae evolution | High peer-reviewed family-level context |
| Commons, *T. blondi* Brazil | https://commons.wikimedia.org/wiki/File:Theraphosa_blondi_240637455.jpg | image candidate | exact species, 2048x1536, CC BY-SA 4.0 | Reusable but adult/full-body strict verification pending |
| Commons/Muséum de Toulouse female | https://commons.wikimedia.org/wiki/File:Theraphosa_blondi_MHNT.jpg | sex and span reference | female, 23.5 cm, 5041x7360, CC BY-SA 4.0 | Excellent measurement/photo reference but mounted specimen, therefore rejected as final live-animal asset |

### Evidence conflicts and uncertainty

- Distribution differs among modern catalog treatment and broader legacy accounts, partly because similar *Theraphosa* species have historically been confused. Prefer World Spider Catalog for the conservative current species range.
- 28-30 cm and 170-175 g values are maxima/records, not adult averages. Canonical 150 g / 25 cm is deliberately below those extremes.
- No defensible *T. blondi* maximum speed was recovered, so the factual speed field remains 0.0.
- No defensible bite pressure in PSI was recovered, so `bite_force_psi` remains 0.0.
- Venom effectiveness is ecologically meaningful but was not converted into fabricated human lethality or LD50 claims.

## 11. Cross-animal normalization notes

- **Versus Giant Centipede:** Goliath Birdeater receives lower Attack because its absolute body scale remains tiny and the centipede's elongated multi-segment grapple plus forcipules provide different reach/control. Both receive high Special for biochemical/structural systems without inflating Raw Power.
- **Versus Deathstalker Scorpion:** both are small venomous arthropods; Goliath's much larger body does not justify vertebrate-level Attack or Defense. Venom system differences belong chiefly in Weaponry/Special.
- **Versus Gila Monster:** the Gila Monster is several times heavier with a far more robust vertebrate body and should remain decisively higher in absolute Attack/Defense despite the spider's impressive proportional prey capture.
- **Versus Golden Eagle:** the eagle is over 30 times heavier and can attack from the air; the spider must remain far below it in Raw Power and Attack even though the spider has the higher biochemical-defense Special.
- **Compression check:** 0.15 kg mass correctly places Size and Raw Power near the roster floor. Special 90.0 is not a claim of overall power; it isolates the unusual venom + urticating-setae + stridulation toolkit.
- **Double-counting check:** urticating hairs drive Special/Abilities and some Weaponry deterrence, but do not inflate physical Protection or Toughness.

## Final verification

- Representative healthy adult female used: **Yes**
- Record specimen avoided as canonical baseline: **Yes**
- Absolute 0.1-100 calibration used: **Yes**
- Unsupported PSI rejected: **Yes**
- Speed/agility separated: **Yes**
- Exactly two special abilities: **Yes**
- Exactly two unique traits: **Yes**
- All six headline ratings present with one decimal: **Yes**
- Current substats covered: **Yes**
- Image requirement treated separately from text completion: **Yes**
- Production data/site/live image modified: **No**
