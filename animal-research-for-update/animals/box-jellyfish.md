# Box Jellyfish

## 1. Identity and canonical specimen

- **Common name:** Box Jellyfish / Australian box jellyfish / sea wasp
- **Scientific name:** *Chironex fleckeri* Southcott, 1956
- **Family:** Chirodropidae; Class Cubozoa; Phylum Cnidaria
- **Living/extinct:** Living
- **Exact ABS taxon:** *Chironex fleckeri*, not a generic cubozoan and not an Irukandji jellyfish.
- **Canonical specimen:** healthy, sexually mature large medusa. Sex is not used as a combat-size selector because robust sex-specific adult size data are insufficient; adulthood and large mature medusa morphology matter more here.
- **Population variation:** venom composition and potency vary geographically and seasonally across northern Australia. ABS should not treat one locality's venom assay as a universal fixed dose-response.

## 2. Physical measurements

### Bell and tentacles
Australian Museum gives a bell up to about **30 cm** and tentacles up to **3 m**. ADW gives a usual bell around 16-24 cm, up to 35 cm, and as many as 15 tentacles on each of four pedalia, for up to roughly 60 tentacles. Mature tentacles are the real reach weapon, not the gelatinous bell.

### Mass
Published reviews report adults up to about 6 kg, while ADW reports 2 kg as its high value. This conflict likely reflects specimen size/context and weak standardization. A representative mature combat medusa should not silently use the 6 kg extreme.

- **Canonical `weight_kg`: 2.0 kg**
- **Confidence:** Moderate. This is a practical adult value supported by ADW and avoids record-size inflation.

### Height and length conventions
A standing height is meaningless for a medusa. For ABS `length_cm`, use maximum extended bell-to-tentacle reach rather than pretending the bell itself is 3 m long.

- **Canonical `height_cm`: 30.0 cm**, used as bell dimension proxy because the schema requires a height-like field.
- **Canonical `length_cm`: 300.0 cm**, extended tentacle reach.
- **Caveat:** contracted swimming tentacles can be much shorter, so 3 m is maximum weapon reach, not a rigid body length.

### Speed
Acoustic telemetry confirms that adult *C. fleckeri* actively swim and that travel rates change with habitat, tide and time of day, including movement independent of currents. A commonly repeated 2 m/s maximum is not sufficiently supported by the accessible primary telemetry abstract as an instrumented maximum.

- **Canonical `speed_mps`: 0.0** pending a directly verified maximum measurement.
- Do not copy the legacy 2 m/s figure merely because it is common online.

### Lifespan
The medusa phase is short and strongly seasonal. JCU population work found the oldest collected medusa in one study was estimated at 78 days. The full polyp-to-medusa life cycle complicates a single `lifespan_years` number.

- **Canonical `lifespan_years`: 0.0** until a defensible whole-organism lifespan convention is established.

### Bite force and natural weapons
- **Canonical `bite_force_psi`: 0.0**. There is no bite.
- Up to ~60 tentacles, each armed with dense batteries of nematocysts, form a contact-triggered venom delivery array.
- Nematocysts explosively discharge a spiny tubule that penetrates tissue and injects venom.
- The venom proteome contains many proteins, including a diversified family of potent pore-forming toxins. CfTX-1/2 produce profound cardiovascular effects experimentally, while CfTX-A/B are strongly haemolytic in vitro.

## 3. Canonical proposed factual fields

```json
{
  "weight_kg": 2.0,
  "height_cm": 30.0,
  "length_cm": 300.0,
  "speed_mps": 0.0,
  "lifespan_years": 0.0,
  "bite_force_psi": 0.0
}
```

`height_cm` is a bell-size proxy and `length_cm` is extended tentacle reach. Speed and lifespan remain unresolved rather than preserving weak legacy values.

## 4. Combat biology

### Primary weapon: nematocyst venom array
Contact with tentacles triggers microscopic stinging capsules. This is an unusual weapon because a fragile 2 kg animal can impose severe biochemical damage on vastly heavier vertebrates without needing mammal-scale muscular force. The venom's effects include intense pain, inflammation, dermonecrosis, cytotoxicity and potentially rapid cardiovascular collapse. Human severity is dose-dependent and contact-length dependent; one prospective Australian series documented cardiorespiratory arrest within minutes in a fatal pediatric case with 1.2 m of visible tentacle contact.

### Offensive mechanics
The medusa is an active predator of fish and crustaceans rather than a passive floating trap. Long tentacles create a broad contact zone. Once prey touches a tentacle, nematocysts discharge, rapidly incapacitating prey before it can damage the delicate bell. The animal then manipulates captured prey toward the bell for ingestion.

### Defense and durability
Physical defense is extremely poor. The bell and tentacles are soft, unarmored tissue vulnerable to tearing, crushing, desiccation and removal from water. Its meaningful defense is **deterrence by contact**: an attacker that bites, paws or collides with tentacles may envenom itself. That is not armor and should not be double-counted as high Protection.

### Locomotion and maneuverability
Unlike many drifting medusae, *C. fleckeri* is a capable active swimmer. Acoustic telemetry shows purposeful movements independent of tides and habitat-dependent activity. Cubozoans use a muscular bell and velarium to generate directed jet propulsion. This merits moderate aquatic maneuverability despite very low terrestrial capability.

### Endurance
The medusa can travel actively through coastal and estuarine habitats, but evidence does not support mammalian pursuit-endurance analogies. Activity changes with habitat, tide and day/night period. Stamina should therefore remain moderate rather than inheriting the old site's high score.

### Senses and nervous system
*C. fleckeri* has 24 eyes arranged on four rhopalia and no centralized vertebrate-like brain. Some cubozoan eyes are lens-bearing and support visually guided behavior. Species-specific work also shows responses to visual/light cues. This is a sophisticated sensory-control system for a cnidarian, but it is not evidence of mammalian cognition.

### Tactics and intelligence
Behavior is specialized rather than cognitively flexible: active prey search, contact capture, visually guided orientation and current-responsive movement. There is no evidence for planning, social coordination or learned tactical repertoires comparable with dolphins, primates or corvids.

### Predation and fighting behavior
Primary prey are fish and crustaceans. This animal does not wrestle or exchange strikes. Its entire combat logic is to create unavoidable tentacle contact before a fragile bell can be damaged. Intraspecific combat is not a meaningful ABS weapon source.

### Environmental strengths
- Shallow warm coastal and estuarine water
- Confined aquatic spaces where long tentacles create contact risk
- Opponents with exposed skin/gills or a tendency to bite/grapple
- Low-visibility water where the transparent bell is difficult to detect

### Environmental limitations and weaknesses
- Functionally helpless out of water
- Extremely fragile body with no armor
- Strong currents can influence travel and positioning
- Opponents resistant to cnidarian stings or able to attack without tentacle contact reduce its main advantage
- Large tentacle spread can become a liability in complex structures
- Venom effectiveness varies by target physiology, dose, contact area and geography

### Matchup archetypes
**Good:** exposed-skinned aquatic vertebrates, fish, and opponents that must physically contact the tentacles.

**Bad:** armored or sting-resistant marine animals, opponents capable of damaging the bell without prolonged tentacle contact, and every terrestrial matchup where the jellyfish is removed from water.

## 5. Proposed ABS substats

All ratings are independent re-research on the absolute 225-animal scale. Legacy site values were not used as anchors.

| Substat | Score | Justification |
|---|---:|---|
| Size | **18.0** | Roughly 2 kg bell-body is tiny on the roster, although tentacle reach can approach 3 m. Reach is not mass. |
| Raw Power | **2.0** | Negligible absolute muscular/mechanical force compared with vertebrate fighters. |
| Weaponry | **93.0** | Extraordinary contact-delivered venom over dozens of long tentacles, but not universal against every target and not a guaranteed dose. |
| Protection | **3.0** | Soft gelatinous body, essentially no physical armor. |
| Toughness | **5.0** | Severe physical trauma can rapidly disable the bell or tentacles. |
| Maneuverability | **58.0** | Strong directional swimming for a medusa, but limited acceleration/control compared with elite fish and marine mammals. |
| Speed | **38.0** | Active swimmer, but no defensible canonical maximum retained; score credits locomotor competence rather than a copied 2 m/s claim. |
| Endurance | **45.0** | Capable of sustained habitat movement, but not a demonstrated endurance specialist. |
| Recovery | **20.0** | No evidence supports rapid combat regeneration comparable with true regenerative specialists. |
| Tactics | **30.0** | Specialized active predation and orientation without broad behavioral flexibility. |
| Senses | **68.0** | Twenty-four-eye rhopalial system and visually guided movement are remarkable, but sensory range and integration are limited versus elite vertebrates. |
| Ferocity | **20.0** | Active predator, but no evidence for persistent dangerous conflict beyond feeding/escape behavior. |
| Abilities | **97.0** | The venom/nematocyst system is among the roster's strongest biochemical bypass abilities, while still target- and contact-dependent. |

## 6. Proposed six headline ABS ratings

| Rating | Score | Rationale |
|---|---:|---|
| **Attack** | **56.0** | Low physical force but extreme biochemical lethality and broad tentacle contact zone. Kept below giant predators because damage delivery is highly target/contact dependent and the body cannot overpower large animals mechanically. |
| **Defense** | **10.0** | Contact deterrence matters, but the actual body is extraordinarily fragile and unarmored. |
| **Agility** | **55.0** | Directed jet swimming and active navigation are meaningful in water, but it is not an elite high-speed pursuit animal. |
| **Stamina** | **45.0** | Sustained swimming exists, yet no evidence supports high-end endurance ranking. |
| **Intelligence** | **24.0** | Sophisticated sensory-guided behavior without a centralized brain or evidence of flexible learning/planning on the scale used for high-intelligence roster animals. |
| **Special** | **98.0** | Near-ceiling special mechanism: dozens of tentacles deploy a rapid, diversified pore-forming venom system capable of severe systemic effects. Reserved below 100 pending full-roster venom/electric/chemical normalization. |

## 7. Exactly two abilities and two traits

### Special abilities
1. **Nematocyst Curtain** — Up to roughly 60 tentacles create a large contact field packed with microscopic capsules that explosively inject venom on contact, allowing the jellyfish to damage prey without muscular grappling.
2. **Cardiotoxic Cascade** — A diversified toxin family produces rapid cytolytic and cardiovascular effects; sufficiently large envenomation can collapse vertebrate cardiovascular function within minutes.

### Unique traits
1. **Twenty-Four-Eye Navigation** — Four rhopalia carry 24 eyes, including complex lens-bearing eyes, supporting unusually directed visual behavior for a brainless cnidarian.
2. **Transparent Hunter** — The nearly transparent bell makes the animal difficult to detect in shallow water while long tentacles extend its effective contact zone far beyond its small body mass.

## 8. Expanded profile

### Habitat and range
Australian Museum places the species in tropical Australian coastal waters from Western Australia through the Northern Territory to Queensland. Field/eDNA work demonstrates both coastal and estuarine use and distinct polyp versus medusa habitat patterns. The species should not be casually assigned a global tropical-ocean range simply because other box jellyfish occur elsewhere.

### Diet and ecology
Carnivorous predator of small fish and crustaceans. Juveniles initially consume smaller planktonic prey, then shift toward larger crustaceans/fish as tentacle and nematocyst systems develop. Large medusae can move between coastal and estuarine habitats and are not merely current-driven plankton.

### Social structure
No evidence supports stable social groups or cooperative hunting. Treat as solitary for ABS.

### Reproduction and life history
The life cycle alternates between sexual medusae and tiny benthic polyps. Planula larvae settle, polyps can reproduce asexually, and metamorphosis produces juvenile medusae. Recent eDNA work detected polyps in winter when medusae were absent and found polyp detections associated with rocky substrate/shallow carbonate reef habitat rather than mangroves in the studied system.

### Conservation
No global IUCN category is used here as a canonical status because a current species-level assessment was not established in this run. Local abundance is seasonal and difficult to measure. Do not equate public-health control with conservation status.

### Adaptations
- Nematocyst venom injection
- Long extensible tentacle arrays
- Transparent bell
- Muscular velarium-assisted swimming
- Twenty-four-eye rhopalial sensory system
- Rapid ontogenetic shift from polyp to active predatory medusa

### Human interaction
This is a medically important Australian marine stinger. Severe stings can produce immediate pain, tissue injury and cardiovascular collapse. A prospective Northern Territory study of 225 confirmed stings found most were not fatal, emphasizing that contact area and venom dose matter. ABS should therefore describe the venom as extraordinarily dangerous without implying every touch kills a human.

### Genuine fun facts
- A mature *C. fleckeri* can carry up to about 60 tentacles arranged in four corner bundles.
- It has 24 eyes despite lacking a centralized brain.
- Acoustic telemetry demonstrates that adults can move independently of tidal currents.
- Venom proteomics has identified more than 250 proteins in venom preparations, including multiple pore-forming toxin-family members.
- The polyp stage is tiny and benthic, while the adult medusa becomes one of the largest cubozoans.
- Venom composition and potency can differ between Australian regions and seasons.
- A 2024 eDNA study detected winter polyps even when medusae were absent, giving researchers a way to investigate an otherwise elusive life stage.

### Concise site-ready summary
The Australian box jellyfish is a physically fragile but biochemically extreme predator. A mature *Chironex fleckeri* uses dozens of nearly invisible tentacles packed with explosive nematocysts to inject fast-acting venom into fish, crustaceans and accidental human contacts. Its soft bell offers almost no armor, but active swimming, 24 eyes and a huge contact envelope make it far more capable than a passive drifting jelly.

### Detailed narrative profile
Box Jellyfish is one of the clearest examples of why ABS cannot turn body size into combat power. At roughly a few kilograms, its bell has almost no crushing strength, no teeth, no claws and no armor. A mammal-scale Raw Power score would be indefensible. Yet a careless opponent can still lose because the animal's real weapon exists at a microscopic scale. Long tentacles carry batteries of nematocysts that fire penetrating tubules and deliver a complex toxin mixture. The result can be immediate pain, tissue damage and, at sufficient dose in susceptible vertebrates, catastrophic cardiovascular effects.

That asymmetry defines the matchup. The jellyfish does not need to overpower an opponent. It needs contact. Its long tentacle curtain turns a relatively small bell into a much larger hazard zone, while transparency makes that zone difficult to read. Active swimming and visual sensory organs improve positioning enough that calling it a passive drifter is inaccurate. But those advantages disappear if the opponent can avoid or resist the sting and directly damage the bell.

This produces deliberately polarized ratings. Raw Power, Protection and Toughness belong near the roster floor. Weaponry, Abilities and Special belong near the ceiling. Attack lands much lower than Special because ABS Attack asks about practical damage delivery across matchups, not the theoretical severity of one toxin system. Intelligence also stays low despite the fascinating 24-eye system because visual control is not equivalent to flexible cognition. This separation prevents one extraordinary adaptation from inflating every category.

### Future structured-field proposals
- `bell_diameter_cm`
- `max_tentacle_reach_cm`
- `tentacle_count_max`
- `nematocyst_delivery`: true
- `venom_mechanism`: pore-forming/cytolytic/cardiovascular toxin complex
- `life_stage`: mature medusa
- `aquatic_only`: true
- `canonical_speed_confidence`
- `venom_geographic_variation`: true

## 9. Evidence and source ledger

| Source | Supports | Finding/context | Confidence/conflicts |
|---|---|---|---|
| Australian Museum, Box Jellyfish | Taxonomy, Australian range, bell/tentacle size | *C. fleckeri*; bell up to 30 cm; tentacles up to 3 m; tropical Australian coast | **High** institutional synthesis. https://australian.museum/learn/animals/jellyfish/boxjellyfish/ |
| Animal Diversity Web, *Chironex fleckeri* | Bell range, tentacle count/reach, mass, habitat | 16-24 cm typical bell, up to 35 cm; up to 60 tentacles/3 m; high mass 2 kg | **Moderate-high** academic synthesis; mass conflicts with reviews citing larger maxima. https://animaldiversity.org/accounts/Chironex_fleckeri/ |
| Gordon & Seymour 2009, Hydrobiologia | Active swimming, habitat/tide/day-night movement | Acoustic telemetry of adults; movement occurred with and independently of currents; habitat and tide affected travel | **High** primary telemetry; accessible abstract does not justify a canonical maximum m/s. https://doi.org/10.1007/s10750-008-9594-7 |
| Brinkman et al. 2012, PLOS ONE | Venom proteome and nematocyst mechanism | 61 proteins in initial proteome; abundant toxin family; cytolytic/nociceptive/inflammatory/dermonecrotic/lethal properties | **High** peer reviewed. https://doi.org/10.1371/journal.pone.0047866 |
| Brinkman et al. 2014, JBC | CfTX toxin diversity/mechanism | CfTX-1/2 cardiovascular effects; CfTX-A/B strong haemolytic activity; pore-forming family diversification | **High** biochemical assays; animal/in-vitro findings are not direct human dose equivalents. https://pmc.ncbi.nlm.nih.gov/articles/PMC3931041/ |
| Brinkman et al. 2015, BMC Genomics | Expanded venom composition | >250 venom proteins identified; nine novel pore-forming toxin-family examples | **High** omics study. https://pmc.ncbi.nlm.nih.gov/articles/PMC4445812/ |
| Winter et al. 2010, Toxicology Letters | Geographic/seasonal venom variation | Marked composition/potency differences among Australian samples | **High** primary comparative pharmacology. https://pubmed.ncbi.nlm.nih.gov/19945518/ |
| Currie & Jacups 2005, Medical Journal of Australia | Human sting severity/dose context | 225 confirmed stings; 8% admission; one fatal arrest within minutes; sting/contact lengths recorded | **High** prospective clinical series. https://www.mja.com.au/journal/2005/183/11/prospective-study-chironex-fleckeri-and-other-box-jellyfish-stings-top-end |
| Morrissey, Jerry & Kingsford 2024, Marine Ecology Progress Series | Polyp/medusa ecology | eDNA detected winter polyps, estuarine medusae; polyp habitat associations | **High** recent peer-reviewed field ecology. https://doi.org/10.3354/meps14507 |
| Gordon 2014 JCU thesis | Life history/age and seasonality | oldest collected medusa estimated 78 d in studied population; mature medusae in estuarine habitat | **Moderate-high** detailed thesis, population-specific. https://researchonline.jcu.edu.au/45405/ |

## 10. Cross-animal normalization notes

- **Versus Black Mamba (Special 94.0) and Black Widow (92.0):** Box Jellyfish Special 98.0 is higher because dozens of long tentacles create a broad multi-contact delivery system plus a diversified, rapid toxin complex. It must not inherit their physical Attack or durability.
- **Versus Blue Whale:** the whale is incomparably larger and tougher. Box Jellyfish can outrank it in Special while remaining near the floor in Raw Power and Defense.
- **Versus Bottlenose Dolphin:** dolphin dominates mass, physical force, cognition and general maneuverability. Jellyfish dominates biochemical Special. This is exactly why Special must remain separate from overall combat power.
- **Versus Black Widow:** both are small venom specialists, but the jellyfish has far greater contact reach while remaining physically more fragile.
- **Inflation guard:** Weaponry 93.0 and Abilities 97.0 do not justify 90+ Attack. Attack is 56.0 because practical delivery across the full roster is constrained by water dependence, fragile body, target physiology and the need for tentacle contact.
- **Final-audit watch:** compare Special 98.0 against electric eel, cone snail, poison specialists and other extreme biochemical/electrical taxa before locking a roster ceiling.

## 11. Image candidate and delivery status

- `image_status`: **SOURCE FOUND - FULL-BODY NOT VERIFIED**
- `png_repo_path`: `animal-research-for-update/images/box-jellyfish.png`
- `source_page_url`: https://commons.wikimedia.org/wiki/File:Avispa_marina.jpg
- `original_photo_url`: https://commons.wikimedia.org/wiki/Special:Redirect/file/Avispa%20marina.jpg
- `file_format_verified`: source is JPEG; final PNG does not exist
- `alpha_verified`: false
- `full_body_verified`: false
- `adult_verified`: false
- `sex_verified_or_unknown`: unknown
- `license_status`: CC BY-SA 2.0 on Wikimedia Commons
- `notes`: Exact identification metadata is inconsistent: Commons structured data depicts *Chironex fleckeri*, but the description says `Chironex sp.` and calls the photographed animal tiny. At 900×1600 it also only barely meets the preferred longest-side threshold. It is therefore a discovery candidate, not an approved source. Commons' exact-*C. fleckeri* alternatives found in this run were only 260×260 or 159×248 and fail resolution requirements. Continue searching for a high-resolution exact-species mature medusa with the entire bell and every visible tentacle tip inside frame. Current GitHub writer is UTF-8 text-only, so no transparent PNG binary is claimed or committed.