# Changelog

## 4.8.0 — 2026-10-01

The owner's Events tab (Community → World stats → Events) and the Discord activity feed, fleshed out.

- **Which page, not just "page view".** Every page is named: "Cassowary", "African Lion vs Siberian Tiger", "Versus: 10 Humans vs Gorilla" (Versus now sends the matchup it shows), "Rankings: Strongest", "BREAKOUT, Episode 1: The Transfer", "Bob's profile".
- **Accounts left out of tracking.** RamiNoodle733 is not tracked by default: nothing it does is stored, counted or posted to Discord. Add or remove accounts in Events → Settings, and delete an untracked account's past events. A browser that account signs in on stops sending page views even when logged out, and **Don't track this browser** does the same for any device.
- **Choose what goes to Discord:** page views every time, only the first page of each visit, or never; and any other event type (logins, votes, chat...) on or off. Events that are not posted are still stored and listed.
- **Better Discord posts.** Titles say what happened and link to it ("🛬 Cassowary", "⚔️ Fight: African Lion vs Siberian Tiger", "🔓 Bob logged in"). Guests get a tag (Guest a1b2c3) so one visitor can be followed; a landing says where they came from and whether they have been before ("Back for their 3rd visit, last 2 days ago"); leaving lists the whole visit ("Home → Cassowary → African Lion vs Siberian Tiger"). Players link to their profiles, animals to their pages.
- **Events tab, three views.** *Live*: who is on the site and on which page, the last 24 hours (page views, visits, visitors, sign-ups, logins, fights, votes, comments, chat, tournaments), the most viewed pages, where visitors came from this week, active players and the Discord backlog. *Events*: every event in words, filterable by type (or "all but page views"), player, page, Discord status, or one visitor; tap one for its details. *Settings*: untracked accounts, this browser, and Discord.
- Fixed: on phones a faded message ("Saved") kept catching taps meant for the buttons under it.

## 4.7.2 — 2026-10-01

- **Home page on phones:** the card ring no longer runs over the Daily matchup and Animal of the day tiles. Squeezed into one screen, the ring got what was left after the menu and its front cards (which lean toward you) hung over the tiles. On phones the home page now scrolls: the menu, then the ring at a proper size with bigger cards, then the tiles, the Roblox tile and the Just researched strip, all whole. Tablets fit it on one screen.

## 4.7.1 — 2026-10-01

- **The 3D card opens at once.** It used to be drawn on the phone each time from about 20 pictures, which was slow and, on some iPhones, never finished ("Printing the card…"). It now shows the card the build already drew (the build redraws every card whenever its stats or art change), so opening it is a ~320 KB download. The build draws two more files per animal for this, the front's background and what sits over the foil, so the foil still moves between them.
- Sharing an animal's card uses the same files, so the pictures are ready in a moment.
- If the card can't load, the viewer says so and offers Try again instead of waiting forever.

## 4.7.0 — 2026-10-01

The battle cards now go wherever the site's pages go: link previews, Google and AI assistants show the card.

- **Every card is a picture on the site.** The build draws all 344 cards, front and back, with the same code as the 3D card, and publishes them at `/images/cards/<animal>.webp`. Animal pages have a new **Card** tab with both sides, Turn it in 3D, Share and Save the card.
- **Link previews are the cards.** An animal page's preview (in Google, ChatGPT, Discord, iMessage, X...) is its card with its rank, tier, power and stat bars. A matchup page's preview is the two cards squared up with the odds, or "Dead even · A draw" for a draw; all 906 matchup pages have one, and so do the 41 Human pages and Versus. Matchup verdicts show the same picture.
- **Made for search and AI answers:** each animal page describes its card front and back as images of the page (JSON-LD `ImageObject` with a caption that reads the card out), matchup pages name their face-off as the page's main image, the image sitemap lists the cards first, and `llms.txt` / `llms-full.txt` link every card and face-off.
- Each picture's address changes when its card does, so previews never show an old card.
- The cards are drawn in Node with `@napi-rs/canvas` (`scripts/images/build-cards.mjs`) and reused between builds when nothing changed; a full redraw takes about two minutes.

## 4.6.0 — 2026-10-01

- **Fights are no longer left to chance.** On Versus the side the odds favour always wins, and the same matchup always plays out the same way, blow for blow. A matchup the odds put at 50-50 ends in a draw: the bell goes with both fighters still standing. 25 matchup pages are draws (Python vs Reticulated Python, Cape Buffalo vs Water Buffalo, Martial Eagle vs Golden Eagle...); their verdicts, descriptions and answers now say so, animal pages show D in Matchups next to W and L, and the About page explains the rule.
- **Hold to speed up.** During a fight, hold anywhere on the screen (or the Hold to speed up button, or Space) to run it at 4× speed; let go to watch at normal speed.
- **Fight calls follow the same rule:** calling the favourite is the right call. A draw can't be called, and once you've seen how a matchup ends (Show, or fighting it first) it can't be called that visit. Calls made before today keep their result.
- The share pictures and videos know draws too: "It's a draw", with a silver DRAW plate on both cards.
- `CALL_SECRET` is no longer used.

## 4.5.0 — 2026-10-01

Every animal is now a collectible card, like the Injustice trading cards, and sharing sends the card, not just a link.

- **The ABS card.** Each of the 344 animals has a full-size card. The front is the site's card at full size: the animal over its biome, the tier shards and a holographic foil, power, the tier crest, the archetype on a gold tag (Striker, Heavyweight...), the name plate and the card number (No. 114/344). The back is laid out like an Injustice card back: the barcode strip with the number and tier stars, a portrait, all six stat bars, two abilities and two traits with their metal icons, the conservation status, the measurements and the signature move with what it does.
- **The card in 3D.** Animal pages have a Card button: the card opens on the arena floor and can be turned by dragging (it keeps spinning a little and settles on a side), flipped with a tap or the arrow keys, and on a computer it leans toward the pointer. The foil and the gloss move with the light. A link like `/stats/cassowary#card` opens straight to it.
- **Share the card.** Share on an animal page offers the card, the front and back side by side (4:5, made for Instagram, X and Discord) or an 8-second video for Reels, TikTok, Shorts and Stories: the card rises in, the foil catches the light, it flips and the stat bars fill. Phones open the share sheet with the picture or video attached; anyone can save it or copy the link, which opens the card in 3D.
- **Share a fight as a face-off.** Versus shares the two cards squared up across the VS emblem: before the fight a challenge with the odds hidden ("make your call"), after it the result, with the winner's card glowing under a WINNER plate and the loser drained of colour with a K.O. stamp, and the odds. Crowds are named on a gold plate under their card ("10 Humans"). There is a face-off video too: the cards slide in, the VS slams down and the loser gets knocked out.
- New art for the cards (`scripts/assets/build-ui-cards.py`): metal frames for each tier with an engraved groove and corner rivets, the tier shards and biome backdrops at card resolution, and a holographic foil of hex facets that flash as the card turns.
- The card code loads only when someone opens a card or shares, so pages are no heavier.
- Fixed: the smallest insects (mosquito, army ant, bombardier beetle, honey bee) showed a weight of "0 g"; they now show milligrams.

## 4.4.0 — 2026-09-30

- **Halal wording across the site.** No Greek or Roman mythology, other religions' gods or figures, or superstition in anything the site says:
  - Card archetypes: Titan is now **Heavyweight** (Blue Whale, Megalodon, Sperm Whale and others), Mage is **Mastermind**, Bard is **Loudmouth**, Speed Demon is **Speedster**, Berserker is **Brawler**.
  - Ability and trait names: Titanic Lunge is **Massive Lunge**, Prairie Juggernaut **Prairie Bulldozer**, Rolling and Island Colossus **Rolling** and **Island Giant**, Flock Siren **Flock Alarm**, and the "Ghost" names are now "Shadow" or "Silent-Wing".
  - Rewards: the Oracle title is **Sure Shot**, the Oracle Eye frame **Eagle Eye**, the Aurora frame **Northern Lights** (owned items carry over).
  - Research text: "myth" and "magical" phrasing, a kraken, the Olympics, lucky storks, a totem, a Greek Fate, a "spirit" name and belief and ceremony lines are rewritten plainly; biology terms named after mythology read "jellyfish", "larvae" and "young".
- `lib/wording.js` holds the rules. The research import applies them to everything it generates, so future research stays clean, and `test/wording.test.js` fails if any of that wording comes back.

## 4.3.0 — 2026-09-30

Phones first: every page reachable, nothing cut off, tested in Safari (WebKit) at iPhone SE, iPhone 13 and Pro Max sizes.

- **Phone navigation:** the bottom bar is Animals, Versus, Tournament, Shows and Menu. Menu opens every page as a big tile (Home, Animals & rankings, Who would win?, Tournament, Tier list, Shows, Community, Rewards, Roblox, How ratings work), above the bar, with room for the iPhone home indicator.
- **Rankings are the Animals page.** /rankings and every /rankings/... page is the Animal Database opened on that ranking, with its own heading and FAQ. A Rank-by rail (Power, Strongest, Toughest, Most agile, Stamina, Smartest, Special, Heaviest, Fastest, Longest, Bite, Fan votes, A–Z) switches between them; # is the place in the current ranking, with medals for the top three.
- **Shows on phones scroll as one page:** the full description, every episode, the cast and the platforms are reachable; the tabs stay pinned while you scroll. The show-logo tabs are back (a rule had hidden them).
- **Safari fixes:** the display font is drawn at its real weight (Safari showed the variable font thin); the home card ring no longer shows mirrored cards; iPhones do not zoom into search fields; short screens (iPhone SE with toolbars) scroll without panning sideways; blur behind dialogs works.
- **Bigger touch targets:** votes, comment votes, filters, the Show odds button and small links are at least about 32px on touch screens.
- `scripts/verification/mobile-audit.mjs` checks pages in WebKit at iPhone sizes for content hidden behind the bar, clipped text, sideways overflow and small tap targets.

## 4.2.0 — 2026-09-30

Every surface is now drawn art made for the site, not CSS shapes.

- **Real textures:** seamless hex-plate textures (lit bevels, grain, wear) for the page, the panels and the cards, rendered by `scripts/assets/build-ui-textures.py`.
- **Card art:** metal tier frames with corner rivets, tier-coloured diagonal shards, and a dark biome scene behind every animal (savanna, forest, jungle, wetlands, desert, mountains, arctic, ocean; `scripts/assets/build-ui-scenes.py`). S-tier cards carry a gold foil that drifts.
- **Versus arena:** the fight happens on a spotlit hex floor.
- **Metal buttons and panel frames:** gold, steel, silver, red and green button plates and a hairline panel frame with corner brackets.
- **New icons:** 47 gold and silver metal icons replace the old cartoon icons everywhere (`scripts/assets/build-ui-icons.py`), with a new BattlePoints coin, treasure chest and XP badge. Level badges use the level emblem everywhere.
- **Voting is in the Animals page:** every row has up and down votes (one a day, BattlePoints and XP as before), and Rank by has Community votes. The Rankings pages keep their votes too.
- **Share pictures and link previews** use the same textures, shards and arena.
- Fixed: the page's own background was covering the backdrop layers behind it.

## 4.1.0 — 2026-09-29

- **Share a fight as a picture.** Versus has a Share button that draws a 4:5 card (made for Instagram, TikTok photos, X and Discord): both animals, their tier crests and power, the VS emblem and the site address. Before the fight it is a challenge ("make your call", odds hidden); after the fight or Show it names the winner and the odds. Phones open the share sheet with the picture attached; anyone can save it or copy the link.
- **High stats stand out.** In the Animal Database, 90+ ratings glow gold, 80s are bright white and weak ratings fade back; S-tier power numbers are gold. Animal pages light up elite stats the same way.
- **Rankings live in the Animals page.** "Rank by" sorts all 344 animals by overall power, strongest, toughest, most agile, most stamina, smartest, best special abilities, heaviest, fastest, longest or strongest bite. Rankings left the top menu (its pages remain, each with a Full table link), so the menu is Animals, Versus, Shows, Tiers, Tournament and Community.
- **Clearer compare picks:** the + on each row is now a gold VS button. Tap VS on two animals and fight them.
- **Random fight** on the home screen deals a surprise matchup.

## 4.0.0 — 2026-09-29

A complete redesign, modelled on the Injustice trading cards.

- **One look everywhere:** charcoal hex-mesh panels in thin silver frames, condensed white capitals, and one accent colour (gold). The old cyan, orange and navy are gone. Menus and tabs are flat and text-first, buttons come in three sizes (34, 42 and 50 px), and the top bar and phone dock use one set of clean icons.
- **Real badge art:** tier crests (S to F, and the Human) with metal rims and engraved letters, a gold hex level emblem, gold, silver and bronze medals for the top three, and a VS emblem. They are drawn from the site's own display typeface by `scripts/assets/build-ui-badges.py` and live in `images/ui/`.
- **Cards:** every card has the Injustice front: diagonal tier-coloured stripes behind the animal, the "Animal Battle Stats" band down the side, the power number, a tier crest and a dark name plate with a gold chevron.
- **Every stat has its own colour and icon** (attack red, defense blue, agility green, stamina orange, intelligence purple, special teal), on the slanted segmented bars, with MAX at 100.
- **The Animals page is a full database:** one sortable table of all 344 animals (rank, tier, power, all six stats, weight, top speed), fast filters by group and tier, search by name or species, a Cards view, and a compare tray: tap + on any two animals and fight them. On phones the table shows the column you sort by.
- **Animal pages are the back of the card:** a framed portrait with the power, crest and number, the name plate, the measurements, and the Stats, Abilities (with the card's dotted-leader layout), Facts, Matchups, Analysis, Sources and Talk tabs.
- **Versus:** gold against silver instead of blue against orange, both health bars gold, the tale of the tape in each stat's colour (the side that leads stays bright), and on phones the stats scroll with room to read while the call and the Fight button stay pinned at the bottom.
- **Tier list and rankings** use the crests and medals; the home page, rewards and community menus share one tile style; the phone home carousel no longer squeezes its cards.

## 3.11.0 — 2026-09-29

- **The slanted segmented stat bars are back**, in one colour, on animal pages, the animal list preview, the Versus tape (cyan left, orange right) and the tournament.
- **Animal pages read like a database:** weight, length, top speed, bite force, lifespan and habitat sit under the photo; the name line carries the rank and tier; the chips are plain; no glowing, pulsing podium. Tabs are named Stats, Abilities, Facts, Matchups, Analysis, Sources and Talk.
- **Body size counts in every fight:** an animal ten times heavier gains about 8 points. Close classics barely move (lion vs tiger is unchanged); big mismatches make sense now (a house cat no longer beats a German shepherd one time in three).
- **Human vs animal pages** for 41 animals (/compare/human-vs-gorilla and more), answering "can a human beat a gorilla?" and "how many humans would it take?". The Human's ratings are more realistic (one unarmed man beats a gorilla about 1 time in 5; 4 men are favoured).
- **Versus:** crowds stand as a tidy pack (the fighter in front, two more behind), the odds can be hidden again after Show, and a Random button deals a random matchup.
- **Search and AI:** titles aimed at what people search (who would win, animal matchups, compare animals, animal rankings, powerscaling), a Gila Monster vs Salamander page that answers the Siberian salamander question, and llms.txt now lists every popular matchup with its winner and odds, plus how many men it takes against 41 animals.
- **Cleaner everywhere:** every animal card has the same background (the tier frame is the only colour that means something), a quieter background, Tourney is now Tournament, the tablet Versus layout uses the whole screen, and the Community page no longer shows "[TITLE UNAVAILABLE]" for the Roblox game.

## 3.10.0 — 2026-09-29

- **Who would win, rebuilt.** All six battle stats and the key measurements (weight, top speed, bite force, size) sit side by side as one tale of the tape, readable at a glance on phones and desktops without scrolling. Each fighter has one colour (cyan on the left, orange on the right). "Change" opens a searchable picker, and the popular matchups sit at the top of it.
- **No spoilers.** The win odds stay hidden until you fight or press Show, so calling the winner is a real call.
- **Group fights.** Set how many of each side are fighting: 500 gorillas vs 23 army ants, 10 humans vs a gorilla, 2 lions vs a tiger. Numbers count for a lot, but much smaller animals get less from them against much heavier ones.
- **Human.** An average adult man (unarmed, untrained) can step into the ring, shown as a silhouette. Humans are not ranked or listed with the animals.
- **Search understands matchups.** Type "lion vs tiger" or "100 men vs gorilla" in search and go straight to the fight.
- **Cleaner look.** One colour for every stat bar across the site, flat panels without the honeycomb texture, animal pages that show the stats first, and a phone top bar with only search, rewards, your profile and the menu (sound and the Roblox game are in the menu).
- **Shows** fit the screen like the rest of the site: the hub has a tab per show and a Rewards tab; show and episode pages keep their lists and transcripts in tabs that scroll inside.

## 3.9.0 — 2026-09-29

- **Shows.** The ABS Originals series have a home on the site: [/shows](https://animalbattlestats.com/shows) lists BREAKOUT, DEDUCTION and FASTEST, each show has its own page (season poster, every episode in order, the cast linked to their animal stat cards, the full season in one video, and links to every platform), and each of the 26 episodes has a page with the player, the transcript and "up next" when it ends. Shows is in the top menu, the phone dock and the home menu.
- **Watch and earn.** Signed-in players earn 25 BattlePoints and 20 XP the first time they watch each episode to the end, a title for finishing each show (Escape Artist, Case Closed, Photo Finish), the ABS Originals card frame for all 26, and 30 BattlePoints for following Animal Battle Stats on each social account (the ABS Insider title after 3). Guests see their progress on their own device.
- **Search and AI assistants.** Show and episode pages carry TV series, episode and video structured data with transcripts; the sitemap lists every episode as a video; llms.txt and llms-full.txt describe every show and episode. The site's links to its accounts now include TikTok, Facebook and LinkedIn. The About page description no longer shows a code placeholder.
- **Google Analytics** is back (it stopped when the old app was removed): page views plus episode plays, completions, follow clicks and outbound show links. It loads after the page has finished loading.
- **Names.** New usernames and display names are checked against the owner's rules (swearing, sexual words, LGBT words, other gods and idols, slurs, drugs, alcohol and gambling, and names like "admin"), with innocent words like Essex, Godzilla, raccoon and cockatoo allowed. Names that already break the rules are hidden from everyone as "Player 1a2b" until the player picks a new one. Chat and comments mask the same words.
- **Admin.** The owner's account is an admin, and a new admin page lists players and the names to check, hides a name, restores it, renames a player, mutes or unmutes chat and comments, and gives moderators their role.
- The home page card carousel no longer picks up card pictures and links when you drag it.

## 3.8.0 — 2026-09-29

- 3 new animals join the roster, which grows from 341 to 344: Bushmaster, Goliath Grouper and Thresher Shark. Each has a full research profile and a credited photo of an adult animal from Wikimedia Commons.

## 3.7.0 — 2026-09-29

- 24 new animals join the roster, which grows from 317 to 341: Ball Python, Bearded Dragon, Bowhead Whale, Canary, Chinchilla, Corn Snake, Eclectus Parrot, False Killer Whale, Fancy Rat, Fin Whale, Guinea Pig, Humboldt Squid, Hyacinth Macaw, Japanese Spider Crab, Leopard Gecko, Maine Coon, Rabbit, Red-eared Slider, Rosy-faced Lovebird, Russian Tortoise, Sun Conure, Syrian Hamster, Wild Turkey and Yellow-naped Amazon.
- The rest of the pets arrive: more parrots (hyacinth macaw, eclectus, sun conure, lovebird, yellow-naped amazon, canary), pet reptiles (Russian tortoise, bearded dragon, leopard gecko, ball python, corn snake, red-eared slider) and small pets (hamster, guinea pig, rabbit, chinchilla, fancy rat, Maine Coon). The hyacinth macaw has the strongest bite measured in any bird so far, about 540 newtons.
- Every new animal has a full research profile and a credited photo of an adult animal from Wikimedia Commons.

## 3.6.0 — 2026-09-28

- 22 new animals join the roster, which grows from 295 to 317: African Grey Parrot, Betta Fish, Budgerigar, Cockatiel, Common Death Adder, Common Eland, Ethiopian Wolf, Fisher, Giant Forest Hog, Goblin Shark, Goldfish, Indian Rhinoceros, Mexican Red-knee Tarantula, Ocean Sunfish, Oceanic Whitetip Shark, Pygmy Hippopotamus, Red Deer, Russell's Viper, Saw-scaled Viper, South American Coati, Striped Hyena and Takin.
- The first pets arrive: parrots, a budgie and a cockatiel, a goldfish, a betta and a red-knee tarantula, each researched as an animal (wild range, measurements, measured bite force where one exists) like the rest of the roster. More pets are on the way.
- Every new animal has a full research profile and a credited photo of an adult animal from Wikimedia Commons.

## 3.5.0 — 2026-09-28

- 22 new animals join the roster, which grows from 273 to 295: Aardwolf, American Pit Bull Terrier, Basking Shark, Belgian Malinois, Binturong, Black-footed Cat, Black-necked Spitting Cobra, Boomslang, Brown Hyena, Caucasian Shepherd Dog, German Shepherd, Giant Otter, Greyhound, Jaguarundi, Kea, Martial Eagle, Northern Goshawk, Pallas's Cat, Rottweiler, Sand Cat, Southern Ground Hornbill and Wedge-tailed Eagle. Each has a full research profile and a credited photo of an adult animal from Wikimedia Commons.
- Every animal on the site is now researched. The last 26 (Spider Monkey to Zebra) still showed placeholder ratings, some of them absurd (a zebra with Attack 1.4, a walrus with 1.7); they now have researched measurements, ratings, abilities, fun facts and sources like the rest. Each profile describes the species in its photo: griffon vulture, swamp wallaby, lowland tapir, toco toucan, Pacific bluefin tuna, Przewalski's horse and plains zebra.
- Stingray has a new photo of a southern stingray, the species its profile describes (the old one showed an eagle ray).

## 3.4.1 — 2026-09-28

- Discord gets a message for every site visit again, with the visitor's page, place, device and where they came from, and the Community page's World stats (visits, page views, the globe, activity by day, top pages and places, the live event stream) count new visits again. Since the September 24 rebuild, every page view was dropped before it was saved.

## 3.4.0 — 2026-09-28

- 48 new animals join the roster, which grows from 225 to 273: Aardvark, Africanized Honey Bee, Alligator Snapping Turtle, Arapaima, Asian Elephant, Bearded Vulture, Bengal Tiger, Black Caiman, Blue-Ringed Octopus, Bombardier Beetle, Bonobo, Brazilian Wandering Spider, Crowned Eagle, Eastern Brown Snake, Elephant Seal, Eurasian Eagle-Owl, Fighting Bull, Flying Fox, Fossa, Gaur, Gharial, Giant Panda, Goliath Tigerfish, Greenland Shark, Gyrfalcon, House Cat, Humpback Whale, Indian Cobra, Inland Taipan, Kangal, Kodiak Bear, Leopard Seal, Mako Shark, Markhor, Mosquito, Nile Crocodile, Philippine Eagle, Portuguese Man o' War, Sperm Whale, Steller's Sea Eagle, Stonefish, Sydney Funnel-web Spider, Tibetan Mastiff, Titan Beetle, Vampire Bat, Water Buffalo, Wels Catfish and Whale Shark.
- Every new animal comes with a full research profile like the rest of the roster: measurements, six battle ratings and twelve detailed ratings set against the most similar animals already on the site, special abilities, fun facts, a written profile and a list of sources.
- Every new animal has a real photograph of an adult animal from Wikimedia Commons, cut out and credited (photographer and license on `/credits` and each animal's Sources tab). Each also gets its own profile, matchup and tier pages and a share card.
- Only animals people have seen alive join the roster: living species and domestic breeds, never animals known only from fossils.

## 3.3.0 — 2026-09-27

- BattlePoints, like the Roblox game's coins: every fight call, animal vote, comment and ranked tournament pays BattlePoints, XP and Season Pass XP (up to a daily limit each), and they fly into the header.
- Call it on every Who Would Win? matchup: pick the winner, then watch the fight the server drew for you. Right calls build a streak that pays a growing bonus and earns titles.
- New Rewards screen, built like the game's menus: a menu on the left (daily reward, quests, Season Pass, shop, how to earn) with badges for anything ready to claim, and one page at a time. A 7-day daily reward with a weekly streak shield, three daily quests and a chest, the free Season 1 Pass (30 tiers, ends December 1 like the game's), and a shop of profile card frames and titles. Looks only; nothing random or sold for money.
- The Roblox page is now one game screen: the game card (Play on Roblox, live numbers, Discord, your Roblox account) beside a stage with Trailer, Gameplay, Codes, Leaderboards and Questions tabs.
- Community has a World stats view again, with the in-depth numbers the old site had: who is online now, site visits and page views, members, votes, comparisons, comments and tournaments, the visitor globe, activity by day over 14 days to all time, the busiest places, pages and actions, a searchable list of places with each place's pages, actions and devices, and for the owner the live event stream with Discord delivery and retries. The Arena gains animal records (most compared, most discussed, tournament champions, best win rate, risers) and more comments on demand.
- The Discord activity feed posts every page view again (as the old site did), shows where visitors came from again, and posts deleted comments and level-ups. "Online now" counts are real again.
- Every screen fits the window without scrolling the page, on desktop and on phones: Home, Versus, animal profiles, Tournament, Rewards, Roblox and Community. The top bar no longer runs off the edge on mid-size screens.
- Profiles and the player leaderboard show the frame and title a player wears.
- The home page's spinning cards turn smoothly at the same speed on every screen and pause when off screen.
- The PLAY buttons now carry the game's website join gift, and the Roblox page lists the game's codes.

## 3.2.0 — 2026-09-27

- The Animal Battle Stats Roblox game is live: Play on Roblox buttons across the site open the game, and the site shows its live player numbers and leaderboards.
- Rebuilt the Roblox game page as the game's official page: Play on Roblox, a trailer player and screenshot row, a Gameplay video grid (muted clips that loop while on screen, or YouTube videos) with "Video pending" slots until the videos are added in `data/roblox-game.json`, live player numbers, the game's global leaderboards and a FAQ. The text-only "What's inside" section is gone.
- Added Roblox sign-in: Continue with Roblox on log in and sign up, and Connect Roblox on the Roblox page and a new Roblox tab on the profile, which shows the player's Roblox name, avatar and in-game stats. OAuth 2.0 with PKCE; switched on by `ROBLOX_CLIENT_ID` and `ROBLOX_CLIENT_SECRET`.
- The Roblox logo now marks the Play and sign-in buttons, the header, the mobile dock and the Community panel, with a trademark notice.

## 3.1.0 — 2026-09-24

- Replaced 216 animal images with real photographs of adult animals from Wikimedia Commons, cut out and credited (photographer and license on `/credits` and each animal's Sources tab). Image URLs carry a content hash so replacements reach every visitor.
- Rebuilt Tournament as a game screen: bracket size and division, pick-the-winner fights with stats odds and fan picks, stats pick and round sim, champion podium with recap, and a battle ratings leaderboard. Ranked brackets for signed-in players go through the server-owned bracket API.
- Fixed ranked tournament completions being rejected whenever the second-listed animal won a first-round fight.
- Rebuilt Community as a hub: arena discussion with replies and votes, animal comment feed, fan favorites, player leaderboard, site numbers and a Roblox game panel.
- Rebuilt log in, sign up, password reset and profile (level, XP, BattlePoints, profile animal picker, notification settings, Google link); public player cards at `/profile/<username>`.
- Added Talk tabs with comment threads to every animal page and Versus matchup.
- Generated 1200×630 social preview cards for every animal, matchup and section.
- Added IndexNow (`npm run seo:indexnow`) and a data handoff note for the Roblox game (`docs/SITE_DATA_FOR_ROBLOX.md`).

## 3.0.0 — 2026-09-24

- Redesigned the site as a game: fitted screens without page scrolling, holo animal cards, Injustice-style segmented stat meters, biome arenas, 3D card tilt, synthesized sound effects and the Roblox game's icon set.
- Imported the automated research profiles (199 animals) into the canonical catalogue, with sources, abilities and derived ratings; 0 speed or bite force now means "no reliable measurement".
- New Versus screen with animated fights, tier lists, stat leaderboards, 600+ static matchup pages, a Roblox game page, llms.txt and structured data for search and AI assistants.
- Retired Battle Lab (`/battle` redirects to Versus).

## 2.21.3 — 2026-09-14

- Repair the four-button Home grid, short-phone footer clearance, and mobile animation frame skipping.
- Load shared header corrections for direct app entry; reserve space for signed-in profile, points, audio, and About.
- Restore complete scientific-name text and fetch tournament records independently of visiting Rankings.
- Reserve the desktop Compare medal row when the roster is expanded.
- Remove the duplicate Community heading, restore message scrolling, fit the globe canvas, and expose all statistics without a dropdown.
- Extend Community browser checks to reach the last statistics block and exercise message scrolling.

## 2.21.2 — 2026-09-14

- Restored the recent, polished arcade presentation for Home, Compare, and Community rather than blending it with older archived styling.
- Kept the current routes, crawlable content, responsive image improvements, and Community Map while removing only the oversized circular Compare VS treatment.
- Gave mobile audio and About controls dedicated header slots so they cannot overlap sign-in or profile controls.

## 2.21.1 — 2026-09-14

- Restored the January 28 arcade title-screen hierarchy on Home while retaining crawlable content and the Battle Lab route.
- Returned Compare to a direct arena-first three-bay experience with the roster behind Show Menu.
- Restored a persistent Community HUD/sidebar for discussion and activity, retained the full anonymous location map, and removed the redundant visible Community heading.

## 2.21.0 — 2026-09-14

- Added a dry-run-first evidence release importer with validation, duplicate protection, explicit apply/backup controls, idempotent upserts, post-write verification, backup checksums, and scoped rollback guidance.
- Tightened the evidence contract around release identity, contextual strings, notes length, and declared confidence.
- Made animal profiles resolve only valid latest-per-field evidence and render source/context rows only when reviewed records exist; empty releases retain an explicit unavailable-confidence disclosure.
- Added fixture and browser regressions for valid/invalid imports and zero-record publication safety.

## 2.20.0 — 2026-09-14

- Replaced the stale all-roster data-entry checklist and its unsafe “zero if none” guidance with a structured animal-correction issue form.
- Correction reports now require the exact animal and claim type, current and proposed values, units and biological context, exact source URL/title/publisher/date, rationale, and anti-fabrication attestation.
- Every one of the 225 generated animal profiles links to the correction form with its animal name prefilled; the About page distinguishes public review requests from private email reports.
- Added a repository contract test that verifies the complete intake schema and correction link on every generated animal profile.

## 2.19.0 — 2026-09-14

- Rebuilt `/battle` as a compact ABS game arena with facing animal portraits, in-place selectors, a central run control, probability meter and result actions instead of a disconnected long-form tool.
- Preserved the complete static answer, model explanation, weighted ratings, physical-data disclosure and limitations in crawlable HTML while presenting them through keyboard-accessible Summary, Ratings, Physical Data and Limits panels.
- Added Battle and Tournament to the interactive app’s desktop and mobile navigation, connecting the arena directly to Stats, Compare, Rankings and Community in both directions.
- The battle browser gate now verifies portrait updates, tab visibility, arrow-key tab navigation, the six-destination shell, share/reload/back behavior, mobile overflow, no-JavaScript content and one-viewport desktop presentation.

## 2.18.0 — 2026-09-14

- Added an executable search-contract layer for canonical, robots, sitemap, social-card, structured-data, image-alt and crawlable-link validation across all 234 public URLs.
- Added local and production verification for OAI-SearchBot access, query canonicalization, clean-URL redirects, true 404 responses and reachable public destinations while preserving the independent GPTBot policy.
- The full SEO crawler now parses and validates JSON-LD and checks Open Graph, X/Twitter and image-alt contracts on every sitemap URL instead of checking only status and basic metadata.
- Corrected the homepage Open Graph URL to match its self-canonical URL and reduced the legacy multi-view document from eight H1 elements to one without changing visible route headings.
- Added a production deployment checklist that separates application-level crawler evidence from Search Console, indexing and upstream firewall checks that require external account access.

## 2.17.0 — 2026-09-14

- Added a validated per-field animal evidence contract covering values, ranges, units, explicit missing-value states, measured/estimated basis, confidence, review dates and traceable source metadata.
- Added an additive MongoDB evidence model and an empty versioned evidence manifest. No legacy measurement is silently promoted to reviewed evidence.
- Added a read-only 225-animal evidence audit. It distinguishes positive unreviewed catalogue values from ambiguous zeros, including 55 unresolved legacy bite-force zeros.
- Every static animal profile now publishes its current evidence coverage and warns when displayed physical measurements remain unreviewed, with links to the source policy and battle methodology.
- Documented the required dry-run, backup, idempotent apply verification and release-scoped rollback workflow for future reviewed evidence imports.

## 2.16.0 — 2026-09-14

- Completed the historical backend review reconciliation: all 35 library and 60 API findings now have an explicit current disposition, evidence, or named downstream milestone instead of being treated as a stale failure list.
- Signup now rejects operator-shaped/non-string credentials and invalid email syntax before account lookup or creation, while retaining model validation as a second boundary.
- Community leaderboard progression now uses the authoritative shared XP curve and reports level-100 completion without divide-by-infinity or a drifting duplicate formula.
- Legacy chat records with a missing author now fail deletion authorization safely. Comment and chat schemas enforce non-empty trimmed content.
- Username-change history is pruned to the active seven-day policy window, and duplicate explicit timestamp fields were removed in favor of Mongoose timestamps.
- Added behavioral regressions for the new boundaries and a coverage test that accounts for every numbered historical review finding.

## 2.15.0 — 2026-09-14

- Login and signup attempt budgets now use atomic MongoDB-backed buckets shared across serverless instances, with separate network and normalized-account limits instead of process-local memory.
- Throttled authentication requests stop before account lookup or creation, return a generic response plus `Retry-After`, and successful authentication clears only the account bucket so a valid login cannot reset an attacker's network budget.
- Password login now returns the same failure response for missing accounts, incorrect passwords and Google-only accounts, avoiding account-provider disclosure while retaining a general Google sign-in hint.
- Public profile responses no longer expose internal account identifiers. Authenticated self-profile responses retain the identifier required by existing owner-specific clients.
- Added endpoint-level login/signup throttle, account-disclosure and public-profile privacy regressions, plus deterministic distributed-bucket cleanup coverage.

## 2.14.0 — 2026-09-14

- Added a shared request boundary to every serverless API. Unsafe requests now have route-specific 4–64 KiB application budgets and are rejected before database access or business side effects; Vercel retains its fixed platform payload ceiling.
- Cookie-authenticated mutations require a configured trusted origin, while explicit Bearer clients and intentionally public operations follow explicit allowlists. Browser lifecycle and presence telemetry is same-origin only, and lifecycle notifications now have a distributed abuse budget.
- Public comment, chat and feed responses no longer expose author account IDs, voter ID arrays, deletion metadata or community presence/leaderboard ObjectIds. They return aggregate vote counts plus viewer-specific vote and delete permissions instead.
- Anonymous comments no longer reveal stored usernames or profile animals. Community and rankings interfaces now consume the privacy-safe response contract without losing voting, replies or owner/moderator deletion controls.
- Deleting a comment or chat message now traverses the complete nested reply subtree, preventing unreachable orphan replies. Empty presence heartbeats are handled safely, and comment read failures no longer expose internal database errors.
- Added request-origin, body-budget, response-privacy and recursive-tree regression suites, plus independent security review of the combined boundary.

## 2.13.0 — 2026-09-13

- Added MongoDB-backed rate limits for password-reset requests, community posts and votes, daily animal votes, ranked tournament actions, fight analytics and anonymous visit counting. Limits now work across serverless instances instead of relying on process memory.
- Profile, comment and chat mutations reject malformed, oversized or non-canonical values before database access. Animal and matchup discussion targets must resolve to real canonical animals, and pagination is bounded.
- Community comment/chat votes now update atomically. Daily animal voting uses its unique user/animal/day key with safe concurrent-insert recovery, preventing lost updates and duplicate rows under races.
- Prestige now commits only when level, prestige and XP still match the state the server validated, so a concurrent reward cannot be erased. Tournament quit analytics are derived from the authenticated server-issued session rather than client totals.
- Public comparison and tournament totals are incremented only on accepted server actions. Community statistics no longer substitute fabricated visit, comparison or tournament estimates when persisted totals are absent.
- Added focused mutation, atomic-vote, distributed-limit and prestige regression suites, including duplicate-bucket and concurrent-state-change cases.

## 2.12.0 — 2026-09-13

- Reoriented the homepage around the core question, “Who would win?”, with two keyboard-accessible animal selectors, one simulation action, three popular matchups, and Tournament moved into the secondary navigation.
- The selector becomes usable from the fast 32-animal home response, then hydrates all 225 canonical animals in the background. Submitted choices use stable slugs and open the reproducible `/battle` result.
- Ranked tournaments now require an authenticated, expiring server-issued session and a server-selected roster. Every match must follow the issued bracket and has an idempotent match index, so forged, reordered, replayed, or response-lost submissions cannot inflate results.
- ELO, win/loss, and placement writes are committed atomically only after a complete verified bracket. One unique ranked completion and progression reward is allowed per account per UTC day; guests can continue playing locally without ranked writes.
- Tournament validation derives placements from the bracket rather than trusting client placement fields. Recording failures keep the current match available for a safe retry and show a user-facing error.
- Homepage metadata now describes the transparent matchup experience. Responsive verification covers 320, 390, 768, 1366, and 1440px layouts, full-roster hydration, duplicate-selection errors, and actual battle URL navigation.

## 2.11.0 — 2026-09-13

- New experimental battle-model preview at `/battle`: choose any two of the 225 animals, inspect weighted ratings and physical measurements, and copy a reproducible link with model and data-release versions.
- Public `/methodology` explains the exact formula, editorial weights, low confidence, missing-data policy and known limitations. Model version: `0.1.0-preview`. This analytical rating model does not yet simulate terrain, body-size scaling, humans or groups; it reports no invented simulation count.
- Source-backed wildlife measurements, editorial scores and hypothetical probabilities are distinguished. Legacy zero/unknown physical values are shown as Unknown in the new tool; source records and existing community rankings are unchanged.
- Added battle links to animal profiles and homepage copy. All static navigation destinations now remain available on small screens.
- Search/random APIs reject operator-shaped filters and invalid or excessive pagination/sample sizes before database access; zero stat bounds now work. Malformed authentication cookies fail closed without request crashes.
- Production builds regenerate the sitemap and include the new static pages. Search crawler policy is documented separately from the unchanged training policy.
- Preserved the complete master specification and added an executable milestone plan with acceptance gates, priorities and explicit future work.

## 2.10.0 — Previous release

Arcade presentation, route-specific performance and community/tournament improvements. Historical implementation is recorded in git commit `a7aecb5`.
