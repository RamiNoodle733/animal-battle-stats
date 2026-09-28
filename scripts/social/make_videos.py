"""Turns each rendered post into a silent 9:16 slideshow video.

For YouTube Shorts, Instagram Reels and Facebook Reels, which take videos
rather than photo carousels. Reads the TikTok-size slides written by
render-posts.js and writes .cache/social/out/<id>/video.mp4 (1080x1920,
30 fps, H.264, no audio track). Each slide stays up long enough to read
its text, with a short crossfade between slides.

Usage: pip install imageio-ffmpeg
       python scripts/social/make_videos.py [post-id ...]
"""
import json
import subprocess
import sys
from pathlib import Path

import imageio_ffmpeg

ROOT = Path(__file__).resolve().parents[2]
POSTS = ROOT / "social" / "posts"
OUT = ROOT / ".cache" / "social" / "out"
FADE = 0.4


def seconds_for(slide):
    """Reading time: about 3.5 words a second, between 3 and 7 seconds."""
    words = sum(len(str(slide.get(key, "")).split()) for key in ("kicker", "title", "text"))
    return max(3.0, min(7.0, 1.2 + words / 3.5))


def durations(post, count):
    if post.get("type") == "story":
        return [seconds_for(slide) for slide in post["slides"]]
    # Stat slides: numbers read fast; the first and last slides get longer.
    return [3.5 if 0 < i < count - 1 else 4.5 for i in range(count)]


def make(post_id):
    post = json.loads((POSTS / f"{post_id}.json").read_text(encoding="utf-8"))
    frames = sorted((OUT / post_id / "tiktok").glob("*.png"))
    if not frames:
        print(f"{post_id}: no slides; run render-posts.js first")
        return
    times = durations(post, len(frames))
    args = [imageio_ffmpeg.get_ffmpeg_exe(), "-y", "-loglevel", "error"]
    for frame, seconds in zip(frames, times):
        args += ["-loop", "1", "-t", f"{seconds + FADE:.2f}", "-framerate", "30", "-i", str(frame)]
    # Chain crossfades: each fade starts FADE seconds before the running end.
    chain, previous, offset = [], "0:v", 0.0
    for index in range(1, len(frames)):
        offset += times[index - 1]
        label = f"x{index}"
        chain.append(f"[{previous}][{index}:v]xfade=transition=fade:duration={FADE}:offset={offset:.2f}[{label}]")
        previous = label
    chain.append(f"[{previous}]format=yuv420p[out]")
    args += ["-filter_complex", ";".join(chain), "-map", "[out]", "-an", "-c:v", "libx264",
             "-preset", "medium", "-crf", "24", "-movflags", "+faststart", str(OUT / post_id / "video.mp4")]
    subprocess.run(args, check=True)
    size = (OUT / post_id / "video.mp4").stat().st_size / 1e6
    print(f"{post_id}: {sum(times):.0f}s, {size:.1f} MB")


def main():
    wanted = sys.argv[1:] or sorted(path.stem for path in POSTS.glob("*.json"))
    for post_id in wanted:
        make(post_id)


if __name__ == "__main__":
    main()
