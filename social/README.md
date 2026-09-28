# Social posts

Ready-to-post slideshows and videos for the Animal Battle Stats accounts
(TikTok, Instagram, YouTube Shorts, Facebook). Every post is a JSON file in
`posts/`; a script turns it into slides in both sizes, a caption and a silent
video. Animal photos, ratings and verdicts come from the site's own data and
battle model, so a post never disagrees with animalbattlestats.com.

## Make the posts

```sh
python scripts/social/fetch-media.py          # story photos listed in media.json
node scripts/social/render-posts.js [id ...]  # slides + caption per post
pip install imageio-ffmpeg
python scripts/social/make_videos.py [id ...] # silent 9:16 video per post
```

Output goes to `.cache/social/out/<id>/`: `tiktok/NN.png` (1080x1920, also
for Reels, Shorts and Stories), `instagram/NN.png` (1080x1350 carousel),
`caption.txt` and `video.mp4`. Nothing rendered is committed. In cloud
sessions Commons may answer 429 when the shared network is busy: wait and
rerun, one download at a time.

## Post types

- `story`: a true story in parts, one post per part. Each slide has an
  `image` (a key in `media.json`) and some of `kicker`, `title`, `text`.
  `"kind": "cover"` is the hook slide; `"kind": "end"` closes the part (its
  title defaults to TO BE CONTINUED...). Photo options: `focus` (which part
  of the photo to keep: north, south, centre...), `crop` ([x0, y0, x1, y1]
  fractions, for close-ups of a photo used twice) and `"fit": "contain"`
  (shows all of it over a blurred copy: maps, badges). Parts after the first
  open with a PREVIOUSLY recap slide, because many viewers of part 2 missed
  part 1. `series` is `survival` (not about animals) or `animal`.
- `versus`: `left` and `right` animal slugs, a `hook` and a `question`. The
  slides (tale of the tape, three stat rounds, verdict, call to comment) are
  built from the site's data; the verdict is the site's battle model.
- `top`: a countdown of five by one rating (`stat`: attack, defense, agility,
  stamina, intelligence, special, or `power` for the power index). `pool`:
  omit for every researched living animal, `"new"` for the latest additions,
  or list `animals`. `facts` can set the line under each animal (the
  research fun facts are written for the site and some are too technical).
- `quiz`: `rounds` of `{answer, options}` animal slugs; each round shows the
  silhouette with three options, then the reveal.

Every post has a `caption` and `hashtags`; photo credits are added to the
caption automatically from `media.json`.

## House rules

- True stories and real facts only. Something that rests only on
  eyewitness accounts says so ("soldiers said").
- No women in any post, no love stories, and no men showing awrah. Check
  every photo before adding it to `media.json`.
- No music on the videos.
- Photos are public domain, CC0 or "no known restrictions" from Wikimedia
  Commons, credited in the caption. Avoid CC BY-SA and GFDL files.
- Only animals people have seen alive (the same rule as the site).

## Posting plan and results

The first batch is a 10-day plan: one story part a day (Endurance 1-4,
the Serum Run 1-3, Wojtek 1-3) plus a quick post (versus, top 5 or quiz) on
the first six days. The owner posts from a Content Studio page that shows
every post, saves the slides and video, and logs views, likes, comments,
shares, saves and new follows per platform, then ranks series and posts
by engagement. Make the next batch from what ranks best.
