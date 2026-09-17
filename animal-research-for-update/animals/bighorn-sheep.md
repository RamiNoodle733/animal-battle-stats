# Bighorn Sheep Research Overhaul

## 1. Identity and canonical specimen

- **Common name:** Bighorn Sheep
- **Scientific name:** *Ovis canadensis*
- **Family:** Bovidae
- **Status:** Living
- **Exact animal represented:** North American bighorn sheep, *Ovis canadensis*. For canonical combat scaling, use a healthy mature Rocky Mountain-type ram rather than a smaller desert ewe or a record trophy animal.
- **Canonical specimen:** Healthy fully mature adult male (ram), approximately **110.0 kg**, **100.0 cm at the shoulder**, and **170.0 cm head-to-tail/body-length convention**.
- **Why male:** Sexual dimorphism is major and directly combat-relevant. Rams are substantially heavier, have massive curled horns, thicker neck/chest construction, and are the sex that performs prolonged high-energy ramming contests.
- **Population variation:** Rocky Mountain, Sierra Nevada, and desert populations differ materially in body size, coat, horn form, climate adaptations, and ecology. NPS reports Rocky Mountain rams over 300 lb in some populations, while desert rams are generally smaller. The 110 kg canonical ram is large and mature without using the exceptional upper end.

## 2. Physical measurements

### Mass

Animal Diversity Web reports males at **119-127 kg** in its summary, while Yellowstone NPS reports adult males at **174-319 lb (78.9-144.7 kg)** including horns. Other NPS population pages give lower local ranges, demonstrating strong geographic variation. Desert rams can reach roughly 113 kg, while Sierra Nevada rams are reported up to about 100 kg.

- **Canonical mass:** **110.0 kg**
- **Defensible mature-male context:** roughly **79-145 kg**, population dependent
- **Rationale:** 110 kg represents a powerful mature ram while avoiding a 140+ kg exceptional individual and remaining compatible with multiple NPS population datasets.
- **Confidence:** High for broad male scale; moderate for any single species-wide average because populations differ.

### Height

Jewel Cave NPS reports rams at **2.5-3.5 ft (76-107 cm) at the shoulder**. Sierra Nevada NPS reports rams around three feet tall.

- **Canonical `height_cm`:** **100.0 cm** at shoulder
- **Reported ram context:** approximately **76-107 cm**
- **Confidence:** High.

### Length

Animal Diversity Web reports rams typically **160-180 cm from head to tail** and ewes about 150 cm.

- **Canonical `length_cm`:** **170.0 cm**
- **Reported male range:** **160-180 cm**
- **Confidence:** Moderate-high; source uses a head-to-tail convention rather than a strictly standardized head-body measurement.

### Speed and locomotion

A peer-reviewed horn-material paper states that rams hurl themselves at each other at about **9 m/s (20 mph)** during dominance fights. Canyonlands NPS independently describes head-on charges up to 20 mph. Bighorn Canyon NPS gives a much higher 40 mph claim, but without transparent measurement methodology and in conflict with the better biomechanical literature. The 9 m/s value is therefore retained as a defensible combat-charge speed, not asserted as the species' absolute maximum sprint.

- **Canonical `speed_mps`:** **9.0 m/s**
- **Context:** documented/biomechanically cited ramming approach speed, approximately 32.4 km/h or 20 mph
- **Not used:** unsupported 40 mph maximum claim
- **Confidence:** Moderate-high for ramming speed; low for true all-out maximum sprint speed.

### Lifespan

Yellowstone NPS reports average lifespan of **9-12 years for males** and **10-14 years for females**. Pipe Spring NPS gives a broader 8-15 year normal lifespan.

- **Canonical `lifespan_years`:** **10.5 years**
- **Rationale:** midpoint of Yellowstone's adult-male expectation, matching the canonical sex rather than mixing sexes.
- **Confidence:** High for a representative wild male.

### Horns and impact weaponry

Mature rams carry massive permanent keratin horns over bony horn cores. Jewel Cave NPS reports mature ram horns around **45 in (114 cm)** long. Yellowstone reports horns can weigh **40 lb (18.1 kg)** and make up **8-12% of total body weight**; other NPS pages commonly report up to roughly 30 lb (13.6 kg), illustrating population and individual variation.

Peer-reviewed biomechanics are especially strong. Scientific Reports summarizes estimated ramming forces up to **3,400 N**. CT/finite-element work shows the horn and trabecular horn core absorb impact energy and reduce brain-cavity acceleration. Materials research finds the horn's hierarchical keratin architecture highly impact-resistant and energy-absorbing.

- **Canonical horn length context:** up to about **114 cm along the curve** for mature rams
- **Canonical horn-pair mass context:** roughly **10-14 kg** is representative for a large mature ram; exceptional reports approach 18 kg
- **Measured/estimated impact context:** up to approximately **3,400 N** in biomechanical literature
- **Primary weapon:** high-energy horn ram
- **Secondary weapons:** body shove, horn hooking/wrestling at close range, hooves
- **Canonical `bite_force_psi`:** **0.0**. Biting is not the primary weapon and no defensible species-specific bite-pressure measurement was located.

### Defensive structures

Bighorn sheep do not have body armor, but the ram's head-horn complex is a specialized impact-management system. The keratin horn, tapered spiral geometry, bony horn core, and foam-like trabecular bone dissipate energy. This specialization protects against the characteristic head-on impacts of ram combat but must not be generalized into whole-body invulnerability. Mountain lions can kill adult bighorns.

The feet are another major adaptation: NPS describes specialized hooves and rubber-like pads that grip steep rocky surfaces, providing exceptional sure-footedness and escape ability on cliffs.

## 3. Canonical proposed factual fields

```json
{
  "weight_kg": 110.0,
  "height_cm": 100.0,
  "length_cm": 170.0,
  "speed_mps": 9.0,
  "lifespan_years": 10.5,
  "bite_force_psi": 0.0
}
```

### Canonical-value reasoning

- **110.0 kg:** representative mature male across strongly variable populations, below exceptional 140+ kg rams.
- **100.0 cm:** representative upper-middle adult-male shoulder height.
- **170.0 cm:** midpoint of the ADW male 160-180 cm head-to-tail range.
- **9.0 m/s:** peer-reviewed combat-charge velocity, explicitly not mislabeled as a rigorously measured species maximum sprint.
- **10.5 years:** midpoint of Yellowstone's 9-12 year male average.
- **0.0 PSI:** no reliable bite-pressure measurement and bite is not the signature weapon.

## 4. Combat biology

### Primary and secondary weapons

The ram is a specialized blunt-impact fighter. Its defining weapon is the horned head, delivered after a running charge. The large spiral horns add weapon mass, distribute and absorb impact, and allow forceful contact without the self-damage that would incapacitate an ordinary mammal after repeated collisions. At very close range, rams can also push, hook, and wrestle with the horns. Hooves and body mass are secondary tools rather than the core offensive system.

### Offensive mechanics

Rams can separate by roughly 45 ft, charge, rear at the last moment, and collide horn-to-horn. Peer-reviewed work cites approach speeds around 9 m/s and impact forces up to about 3,400 N. The attack is powerful but directional: it is most effective when the ram has enough room to align, accelerate, and bring the reinforced frontal horn system into contact. Against a fast flanking opponent or in cramped terrain, its best weapon is harder to deploy at full energy.

### Defense and toughness

The head is extraordinarily specialized for repeated impact. Horn keratin, spiral geometry, the bony horn core, and trabecular architecture absorb energy and reduce acceleration transmitted toward the brain cavity. This supports high head-impact toughness but not armor-like protection over the neck, abdomen, or hindquarters. Large cats remain capable of killing adults, so Defense must not be inflated simply because rams survive their own highly structured contests.

### Locomotion and maneuverability

Bighorns are elite steep-terrain movers. Their specialized hooves have hard outer edges and grippy, rubber-like pads suited to irregular rock. They can use cliffs and steep escape terrain that many predators cannot negotiate as safely. On flat open ground, they remain athletic ungulates but lose much of this positional advantage. Their agility is therefore strongly terrain-sensitive.

### Endurance and stamina

Rutting contests can continue for hours, and peer-reviewed literature describes repetitive high-energy cranial impacts for several hours per day across weeks of mating season. Bighorns also live and travel in rugged high-elevation or arid terrain. This supports strong stamina, though they are not specialized long-distance pursuit runners and should remain below the roster's elite migration/endurance anchors.

### Senses

NPS describes strong vision, hearing, and smell that detect danger from far away. Open mountain habitat rewards long-range visual vigilance. There is no exotic sensory modality, so this is a high conventional-senses profile rather than a Special-category mechanism.

### Intelligence and tactics

Bighorns are social and maintain dominance structures. Rams assess rivals, posture, clash, and use repeated contests to establish breeding access. This is useful opponent assessment and social memory, but there is no basis for primate-, corvid-, or cetacean-level flexible problem solving. Intelligence should remain moderate.

### Hunting behavior

None. Bighorn sheep are herbivores. Offensive behavior is primarily intraspecific competition and defensive retaliation, not prey capture.

### Intraspecific fighting

This is one of the best-documented combat systems among ungulates. Mature rams compete during the rut using ritualized high-energy head clashes. Horn size correlates with age and social rank, and mature males can engage in prolonged contests. This behavior is the main basis for the ram's elevated Weaponry, Ferocity, and Attack relative to similarly sized but poorly armed herbivores.

### Predator defense

Primary defense is early detection followed by rapid movement into steep escape terrain. Adults can also confront threats with mass and horns, but mountain lions are documented major predators and can become specialized bighorn hunters. Young animals are additionally vulnerable to coyotes and bobcats.

### Environmental strengths

- Exceptional cliff and steep-rock mobility
- Strong footing on irregular surfaces
- Open-terrain visual detection
- Cold/high-elevation tolerance in Rocky Mountain populations
- Arid-environment tolerance in desert populations
- Terrain-based escape from less sure-footed predators

### Environmental limitations

- Full ramming attack needs alignment and acceleration room
- Whole body is not armored despite specialized head protection
- Flat, soft, slick, or confined terrain reduces its strongest locomotor advantage
- Respiratory disease can severely affect populations
- Large cats can defeat adults despite horn defenses

### Major weaknesses

1. Vulnerable neck, flanks, abdomen, and hindquarters outside the reinforced head-horn system.
2. Charge is directional and easier to evade than a close-range grappling predator's offense.
3. No cutting, piercing carnivore dentition or claws.
4. Specialized cliff agility does not equal universally elite agility on every substrate.
5. Mountain lion predation demonstrates that a sufficiently capable ambush predator can bypass the frontal weapon system.

### Matchup archetypes

**Good matchups:** similarly sized unarmored animals that must contest the ram frontally, slower opponents vulnerable to a high-energy charge, and less sure-footed attackers on steep rocky terrain.

**Bad matchups:** large ambush predators that can attack neck/flanks, much larger megaherbivores that absorb or overpower the charge, highly agile opponents that repeatedly flank, and armored animals resistant to blunt impact.

## 5. Proposed ABS substats

| Substat | Score | Evidence-based rationale |
|---|---:|---|
| Size | **46.0** | A 110 kg ram is substantial but remains far below large bovids, bears, camels, rhinos, elephants, and marine megafauna. |
| Raw Power | **51.0** | Strong neck, shoulders, legs, and body mass produce serious absolute force, but this is not megafaunal power. |
| Weaponry | **67.0** | Massive permanent horns plus a highly practiced 9 m/s ramming delivery system make the ram unusually well armed for its mass. |
| Protection | **42.0** | Specialized head/horn impact protection is excellent, but the rest of the body lacks armor. |
| Toughness | **59.0** | Repeated high-energy cranial impacts and rugged-terrain life support strong toughness, while mountain-lion vulnerability limits inflation. |
| Speed | **55.0** | A defensible 9 m/s combat charge is fast enough to deliver major energy but is not an elite roster sprint ceiling. |
| Maneuverability | **75.0** | Exceptional sure-footedness and control on steep rock, tempered because flat-ground turning is less extraordinary. |
| Endurance | **72.0** | Prolonged rut contests and rugged mountain travel support strong sustained performance. |
| Recovery | **47.0** | Ordinary mammalian tissue recovery; impact mitigation prevents injury rather than regenerating it. |
| Tactics | **48.0** | Rival assessment, dominance behavior, and terrain use are useful but behaviorally narrower than top cognitive taxa. |
| Senses | **67.0** | Strong vision, smell, and hearing provide effective long-range threat detection. |
| Ferocity | **68.0** | Mature rams willingly perform repeated violent clashes during rut, though aggression is strongly context-dependent. |
| Abilities | **59.0** | Horn impact mitigation and specialized cliff locomotion are meaningful matchup-changing adaptations without being exotic offensive systems. |

## 6. Proposed six headline ABS ratings

| Headline | Score | Justification |
|---|---:|---|
| **Attack** | **58.0** | A 110 kg ram can deliver a high-energy horned collision with biomechanical estimates up to 3,400 N, but the offense is blunt, directional, and requires setup. |
| **Defense** | **48.0** | Head-on impact protection is exceptional for its size, but vulnerable soft-body regions and documented adult predation prevent a high whole-body Defense score. |
| **Agility** | **74.0** | Elite cliff footing, balance, and escape-terrain control justify a high score independent of top speed. |
| **Stamina** | **72.0** | Hours-long rut combat and rugged-terrain activity support strong endurance, below true migration and pursuit-endurance specialists. |
| **Intelligence** | **47.0** | Social rank, rival assessment, and terrain use show useful cognition without evidence for upper-tier flexible problem solving. |
| **Special** | **59.0** | The integrated horn/horncore impact system and specialized hooves materially alter matchups, but do not approach venom, electricity, echolocation, or extreme regeneration in breadth. |

## 7. Exactly two special abilities and two unique traits

### Special abilities

1. **Avalanche Ram** — A mature ram converts a roughly 9 m/s charge, body mass, and massive curled horns into a specialized frontal collision. Peer-reviewed biomechanics place impact force up to about 3,400 N, making a clean head-on hit a serious blunt-trauma weapon.
2. **Cliffline Escape** — Hard-edged hooves with compliant, grippy pads provide exceptional purchase and control on steep rock, letting the sheep reposition through terrain that can sharply reduce a pursuer's effectiveness.

### Unique traits

1. **Impact-Engineered Horncore** — Keratin horn, tapered spiral geometry, cortical shell, and foam-like trabecular horncore dissipate impact energy and reduce acceleration transmitted toward the brain during repeated ramming.
2. **Permanent Curl Arsenal** — Unlike antlers, the ram's horns are permanent and continue developing with age; mature horn mass can represent a remarkable fraction of total body mass and doubles as weapon and impact-management structure.

## 8. Expanded profile content

### Habitat

Bighorn sheep occupy steep mountainous and canyon habitats, alpine meadows, foothills, desert mountain ranges, cliffs, ledges, and adjacent grass/shrub feeding areas. Escape terrain with good visibility is especially important.

### Geographic range

Native to western North America, from parts of Canada through the western United States into Mexico. Population/subspecies geography matters: Rocky Mountain sheep occupy colder northern and high-elevation systems, while desert bighorns occupy arid southwestern mountains and canyonlands.

### Diet

Herbivorous. Grasses, sedges, forbs, herbs, shrubs, and other vegetation dominate, with diet shifting by habitat and season. They are ruminants and browse more when grasses are scarce.

### Ecology

Bighorns are important large herbivores of western mountain ecosystems. Their use of steep escape terrain strongly shapes habitat selection. Predators include mountain lions, while young animals may also be taken by coyotes and bobcats. Disease, especially respiratory disease associated with pathogens shared with domestic sheep, can cause major population declines.

### Social structure

Gregarious. Outside the rut, rams commonly live in male groups separate from ewe/lamb/yearling groups. Ram social rank is established through displays and combat. NPS reports bands ranging from small groups to much larger aggregations depending on population and season.

### Reproduction and life history

Rut occurs seasonally, with mature rams competing for access to females. Gestation is roughly six months and females generally produce one lamb. Lambs depend on mothers early in life and rapidly develop the locomotor competence needed in steep terrain.

### Conservation status

At the species scale *Ovis canadensis* remains widespread, but conservation status varies sharply by population and subspecies. The Sierra Nevada bighorn (*O. c. sierrae*) and the Peninsular Ranges population of desert bighorn have received U.S. federal protection. Historical declines were driven by overhunting, habitat change, competition, and especially disease introduced from domestic livestock. The future site should avoid applying a threatened subspecies/population status to every bighorn sheep.

### Major adaptations

- Massive permanent horns in males
- Energy-absorbing horn and horncore architecture
- Powerful neck and shoulder musculature
- Specialized gripping hooves and foot pads
- Excellent visual vigilance in open terrain
- Strong mountain/canyon locomotor control
- Population-specific adaptations to alpine cold or desert aridity

### Human interaction

Bighorn sheep are major wildlife-viewing and conservation icons and are also managed as game animals in some jurisdictions. Roads, recreation, habitat fragmentation, and contact with domestic sheep can create serious conservation problems. Direct approach or feeding is inappropriate because habituation and disease transmission can harm wild populations.

### Strong fun facts

- A mature ram's horns can account for roughly **8-12% of total body weight** in Yellowstone data.
- Peer-reviewed studies estimate ramming forces up to about **3,400 N**.
- The bony horncore contains foam-like trabecular bone that helps absorb collision energy.
- Rams can repeat high-energy head clashes over hours during mating-season contests.
- Their hooves combine a hard outer edge with a grippy inner pad, functioning like built-in mountain footwear.
- Both sexes have horns, but mature males develop the iconic massive curl.
- Unlike deer antlers, bighorn horns are not shed annually.

### Concise site-ready summary

The Bighorn Sheep is a mountain-built impact fighter. A mature ram combines a roughly 110 kg body with massive permanent horns, a reinforced energy-absorbing horncore, and a practiced high-speed ramming attack. Its specialized hooves give it exceptional control on cliffs and broken rock, making terrain part of its defense. The ram is dangerous head-on, but its protection is concentrated around the skull and horns, leaving the neck and body vulnerable to agile large predators.

### Detailed narrative profile

A mature bighorn ram is not simply a sheep with oversized horns. Its entire combat system is organized around repeated frontal impact. During the rut, rival males create distance, accelerate toward one another, rear, and collide through the horns. Biomechanical literature cites approach velocities around 9 m/s and estimated impact forces up to 3,400 N. Those collisions are possible because the horn is a layered keratin structure built for energy absorption, while the bony horncore includes cortical and trabecular architecture that helps dissipate load and reduce acceleration reaching the brain cavity.

The result is an animal whose Attack is disproportionately effective for a 110 kg herbivore without requiring fictionalized power. A clean frontal collision can deliver serious blunt trauma, and mature horns also provide leverage in close contests. Yet the specialization has clear limits. The ram's abdomen, neck, flanks, and hindquarters are not armored, and mountain lions demonstrate that an attacker capable of bypassing the frontal weapon can kill even adult bighorns.

Its second major advantage is terrain control. Bighorn hooves combine rigid edges with compliant gripping pads, allowing remarkably precise movement over ledges, cliffs, and steep broken rock. This should raise Agility through balance, turning control, footing, and evasive repositioning rather than through an inflated sprint-speed number. On flat or slippery terrain the advantage narrows considerably.

Bighorns also have meaningful endurance. Rutting rams can engage in repeated clashes over prolonged periods, and normal life demands movement through energetically expensive mountain terrain. Their social cognition supports rival assessment and dominance relationships, but there is no evidence for top-tier flexible problem solving. Overall, the bighorn ram should rank as a strong mid-sized ungulate combatant with unusually good blunt weaponry and terrain agility, while remaining clearly below large bovids, camels, bears, and megafauna in absolute power and durability.

### Useful future structured-field ideas

- `canonical_sex: male`
- `horn_length_cm: 114.0` as a mature upper-context field rather than a species average
- `horn_pair_mass_kg`
- `impact_force_n: 3400` with `impact_force_basis: biomechanical estimate`
- `charge_speed_mps: 9.0`
- `terrain_affinity: steep_rock`
- `armor_location: head_horn_complex`
- `sexual_dimorphism: high`
- `population_variant` for Rocky Mountain/desert/Sierra Nevada context
- `weapon_type: blunt_ram`

## 9. Image Asset

- **Target asset path:** `animal-research-for-update/images/bighorn-sheep.png`
- **Status:** `SOURCE FOUND - PNG COMMIT PENDING`
- **Primary candidate:** Real photograph of an adult male bighorn ram (*Ovis canadensis*) by Dean Biggins, U.S. Fish and Wildlife Service. The ram is clearly identifiable by its full curled horns and adult body form. Resolution is **1,149 × 766**. Wikimedia Commons records it as public domain.
- **Source page:** https://commons.wikimedia.org/wiki/File:Bighorn_ram_animal_ovis_canadensis.jpg
- **Direct image URL:** https://upload.wikimedia.org/wikipedia/commons/8/80/Bighorn_ram_animal_ovis_canadensis.jpg
- **Why selected:** Exact species, verified male/ram, representative mature horn development, clear near-full-body wildlife photograph, no watermark, and unusually simple reuse status.
- **Caveat:** Source JPEG is not transparent. The available GitHub contents writer safely writes UTF-8 text but not arbitrary PNG binary, so no fake or text-encoded PNG was committed. A later image-promotion pass should make a clean cutout from the original and run the repository's strict provenance workflow.

## 10. Evidence and source ledger

| Source | Direct URL | Claims supported | Reported finding/context | Confidence / caveat |
|---|---|---|---|---|
| Yellowstone National Park, NPS | https://home.nps.gov/yell/learn/nature/bighorn-sheep.htm | Male/female mass, lifespan, horn mass | Rams 174-319 lb; male lifespan 9-12 y; horns can weigh 40 lb and 8-12% of body mass | **High**; government species page, Yellowstone population context |
| Jewel Cave National Monument, NPS | https://www.nps.gov/jeca/learn/nature/bighorn-sheep-ovis-canadensis.htm | Shoulder height, mass, horn length, sex differences, diet, combat | Rams 2.5-3.5 ft shoulder, 125-325 lb, horns to 45 in; rams charge in dominance contests | **High** for local/population summary |
| Animal Diversity Web, University of Michigan | https://animaldiversity.org/accounts/Ovis_canadensis/ | Species dimensions, sexual dimorphism, habitat | Males 119-127 kg; ram length 160-180 cm; male larger | **Moderate-high**; older synthesis and some values differ among populations |
| Aguirre et al., Scientific Reports (2020) | https://www.nature.com/articles/s41598-020-76021-5 | Ramming biomechanics, impact force, horncore | Repetitive high-energy impacts; forces up to 3,400 N; horncore architecture absorbs energy | **Very high**; peer-reviewed biomechanics |
| Drake et al., Acta Biomaterialia (2016), PubMed | https://pubmed.ncbi.nlm.nih.gov/27544811/ | Horn/horncore impact absorption | CT-derived finite-element models show horn and trabecular horncore reduce brain-cavity acceleration | **Very high**; peer-reviewed primary biomechanics |
| Huang et al., Acta Biomaterialia (2017), PubMed | https://pubmed.ncbi.nlm.nih.gov/28974475/ | Charge velocity and horn material mechanics | Rams collide around 9 m/s; hierarchical horn structure provides impact resistance/energy absorption | **Very high**; peer-reviewed materials study |
| Canyonlands National Park, NPS | https://www.nps.gov/cany/learn/photosmultimedia/inside_bighornsheep.htm | Rut behavior and independent charge-speed context | Rams charge at up to 20 mph and clash during rut | **High** as corroborating government source |
| Yosemite National Park, NPS | https://www.nps.gov/yose/learn/nature/sheep-biology.htm | Hoof/terrain adaptation, Sierra population size context | Rubber-like hoof pad grips rock; Sierra rams up to 220 lb | **High**; subspecies/local context |
| Curecanti NRA, NPS | https://www.nps.gov/cure/learn/nature/mammals.htm | Senses, hooves, sociality | Vision/hearing/smell detect danger; specialized hooves grip steep terrain; sexes separate outside rut | **High**; government summary |
| USGS Southwest Biological Science Center | https://www.usgs.gov/centers/southwest-biological-science-center/science/predation-desert-bighorn-sheep-mountain-lions | Predator vulnerability and disease | Mountain lion predation can be major mortality source; respiratory disease important population limiter | **Very high** for desert-population ecology |
| Grand Canyon NPS | https://www.nps.gov/articles/desert-bighorn-sheep.htm | Desert ecology, social groups, ram combat | Desert rams to 250 lb; herds commonly 8-10; rams charge head-on for dominance | **High**; desert subspecies context |
| USFWS Peninsular Bighorn Sheep | https://www.fws.gov/species/peninsular-bighorn-sheep-ovis-canadensis-nelsoni | Desert morphology, habitat, diet, conservation nuance | Thick-necked ram with massive curl; steep terrain essential; shrubs/forbs/cacti/grasses | **High**; protected population/subspecies context |
| Wikimedia Commons / Dean Biggins USFWS | https://commons.wikimedia.org/wiki/File:Bighorn_ram_animal_ovis_canadensis.jpg | Image identity/provenance | Adult bighorn ram photograph, 1,149×766, public domain | **High** for image identity and rights metadata |

### Conflicts resolved

- **Mass:** Published institutional values vary substantially by population. The canonical 110 kg male is deliberately below exceptional Rocky Mountain upper values and above smaller desert averages.
- **Speed:** NPS pages conflict between approximately 20 mph ramming and a 40 mph claim. The peer-reviewed biomechanics value of about 9 m/s (20 mph) is used because its combat context is explicit and methodologically closer to the actual weapon-delivery question.
- **Horn mass:** 30 lb is common across NPS summaries, while Yellowstone reports as high as 40 lb. The file treats 40 lb as upper-end context, not a normal pair for every ram.
- **Defense:** Ram survival of repeated head impacts is not generalized to whole-body armor. Peer-reviewed work supports localized impact mitigation, while USGS predator evidence demonstrates vulnerability to mountain lions.

## 11. Confidence and caveats

- **Overall confidence:** High for identity, sexual dimorphism, combat mechanism, horn biomechanics, shoulder height, and broad adult-male mass scale.
- **Moderate confidence:** Exact 110 kg canonical mass and 170 cm length are representative editorial choices within heterogeneous population data.
- **Speed caveat:** 9.0 m/s is a defensible ramming/charge speed, not a rigorously established maximum sprint speed across all populations.
- **Impact caveat:** 3,400 N is an estimated biomechanical impact value from the literature, not a universal force produced by every collision.
- **Bite caveat:** No reliable species-specific PSI measurement was found; `bite_force_psi` remains 0.0.
- **Conservation caveat:** Do not assign the legal status of Sierra Nevada or Peninsular populations to the species as a whole.
- **Image caveat:** The source is a real adult ram and public-domain photograph, but a transparent derivative still requires the later asset pipeline.

## 12. Cross-animal calibration notes

- **Versus Baboon:** The 110 kg ram is far larger and has a much higher-energy primary weapon, so Attack 58.0 should sit clearly above Baboon 45.0 and raw physical power should also be substantially higher. Baboon remains much more cognitively flexible.
- **Versus Badger:** Bighorn has a major absolute mass/power advantage and stronger one-hit blunt potential, while Badger is more compact and better suited to close grappling. The ram's Attack 58.0 versus Badger 38.0 preserves that gap.
- **Versus Bactrian Camel:** Camel at 580 kg remains decisively above the ram in Size and Raw Power. Bighorn's dedicated horns justify comparable overall Attack despite far lower mass, but Camel should remain tougher in whole-body scale and superior in endurance.
- **Versus Beaver:** Beaver's incisors are excellent cutting tools at 23 kg, but the bighorn's fivefold mass and high-energy charge demand a much higher absolute Attack.
- **Versus Bald Eagle/Barn Owl:** Flying raptors remain more maneuverable in three dimensions, but their tiny body masses keep absolute Attack below the ram. Bighorn Agility 74.0 reflects terrain control, not speed inflation.
- **Versus Beluga Whale:** Beluga is over an order of magnitude heavier, so Bighorn must remain far below it in Size and whole-body durability. The ram's specialized horns allow respectable terrestrial Attack without collapsing that mass gap.
- **Normalization watch:** Weaponry 67.0 and Agility 74.0 are intentionally high for a 110 kg herbivore because they describe genuine specialization. Attack 58.0 and Defense 48.0 remain much more conservative so the adaptation is not double-counted into universal combat superiority. Revisit against Bison, Cape Buffalo, Elk, Moose, Mountain Goat, Musk Ox, and Ibex during later cross-roster audits.