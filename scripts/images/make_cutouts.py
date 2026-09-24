"""Final animal cutouts from the reviewed Commons picks.

For every picked candidate in .cache/image-pipeline/choices.json this
downloads a large rendition of the original photo, removes the background
with a high-quality segmentation model, keeps the animal (largest subject
and any sizeable attached parts), crops to it and writes
images/animals/<slug>.png. Credits go to data/image-credits.json.

Usage:
  python scripts/images/make_cutouts.py [--model birefnet-general-lite]
                                        [--out DIR] [--force] [slug ...]

--out writes somewhere else (for model comparisons) and skips credits.
Runs incrementally: a slug is redone only when its pick or model changes.
"""
import io
import json
import sys
import time
import urllib.error
import urllib.request
from pathlib import Path

import numpy as np
from PIL import Image
from rembg import new_session, remove
from scipy import ndimage

ROOT = Path(__file__).resolve().parents[2]
PIPE = ROOT / ".cache" / "image-pipeline"
FULL = PIPE / "full"
ANIMALS = ROOT / "images" / "animals"
CREDITS = ROOT / "data" / "image-credits.json"
STATE = PIPE / "cutouts.json"
USER_AGENT = "AnimalBattleStatsImagePipeline/2.0 (https://animalbattlestats.com; animalbattlestats@gmail.com)"
MAX_SIDE = 1200
LICENSE_URLS = {
    "CC0": "https://creativecommons.org/publicdomain/zero/1.0/",
    "PD": "https://en.wikipedia.org/wiki/Public_domain",
    "Public domain": "https://en.wikipedia.org/wiki/Public_domain",
}


def license_url(name):
    name = (name or "").strip()
    if name in LICENSE_URLS:
        return LICENSE_URLS[name]
    parts = name.split()
    if len(parts) >= 3 and parts[0] == "CC":
        kind = parts[1].lower()
        version = parts[2]
        return f"https://creativecommons.org/licenses/{kind}/{version}/"
    return None


def fetch(url, attempts=3):
    for attempt in range(attempts):
        request = urllib.request.Request(url, headers={"User-Agent": USER_AGENT})
        try:
            with urllib.request.urlopen(request, timeout=60) as response:
                return response.read()
        except urllib.error.HTTPError as error:
            if error.code in (400, 404):
                raise
            time.sleep(2 + attempt * 4)
        except urllib.error.URLError:
            time.sleep(2 + attempt * 4)
    raise RuntimeError(f"download failed: {url}")


def download(slug, key, candidate):
    """A ~1920px rendition (or the original when smaller), cached on disk."""
    FULL.mkdir(parents=True, exist_ok=True)
    target = FULL / f"{slug}-{key}.jpg"
    if target.exists() and target.stat().st_size > 0:
        return target
    thumb = candidate.get("thumbUrl") or ""
    urls = []
    if candidate.get("width", 0) > 1920 and "/960px-" in thumb:
        urls += [thumb.replace("/960px-", "/1920px-"), thumb.replace("/960px-", "/1280px-")]
    urls.append(candidate["url"])
    last_error = None
    for url in urls:
        try:
            data = fetch(url)
            with Image.open(io.BytesIO(data)) as image:
                image.convert("RGB").save(target, quality=95)
            return target
        except Exception as error:  # try the next rendition
            last_error = error
    raise RuntimeError(f"{slug}: {last_error}")


def clean_mask(mask):
    """Keeps the main subject plus parts at least 6% of its size (split wings,
    legs behind grass); drops specks and stray background blobs."""
    solid = mask > 96
    labels, count = ndimage.label(solid)
    if count <= 1:
        return mask
    sizes = ndimage.sum(solid, labels, range(1, count + 1))
    largest = sizes.max()
    keep = np.zeros(count + 1, dtype=bool)
    keep[1:] = sizes >= largest * 0.06
    # Soft edge pixels next to kept regions stay; everything else goes.
    kept = keep[labels]
    near = ndimage.binary_dilation(kept, iterations=4)
    return np.where(near, mask, 0).astype(np.uint8)


def neutralize(image, alpha):
    """Gray-world white balance over the subject only, for photos with a strong
    color cast (aquarium blue on a white beluga)."""
    pixels = np.asarray(image, dtype=np.float32)
    subject = pixels[alpha > 200]
    means = subject.mean(axis=0)
    gains = means.mean() / np.maximum(means, 1.0)
    return Image.fromarray(np.clip(pixels * gains, 0, 255).astype(np.uint8))


def cutout(photo, session, erase=(), neutral=False):
    with Image.open(photo) as source:
        image = source.convert("RGB")
    mask = remove(image, session=session, only_mask=True, post_process_mask=False)
    alpha = np.array(mask.convert("L"))
    # Reviewed picks can blank out boxes (fractions of the photo) that the
    # model keeps with the animal, such as a sign behind a mounted specimen.
    height, width = alpha.shape
    for x0, y0, x1, y1 in erase:
        alpha[int(y0 * height):int(y1 * height), int(x0 * width):int(x1 * width)] = 0
    alpha = clean_mask(alpha)
    if neutral:
        image = neutralize(image, alpha)
    rgba = image.copy()
    rgba.putalpha(Image.fromarray(alpha))
    ys, xs = np.nonzero(alpha > 12)
    if not len(xs):
        raise RuntimeError("empty mask")
    width, height = rgba.size
    pad = int(max(xs.max() - xs.min(), ys.max() - ys.min()) * 0.02) + 2
    box = (max(0, xs.min() - pad), max(0, ys.min() - pad), min(width, xs.max() + pad + 1), min(height, ys.max() + pad + 1))
    rgba = rgba.crop(box)
    rgba.thumbnail((MAX_SIDE, MAX_SIDE), Image.LANCZOS)
    return rgba, float((alpha > 127).sum()) / (width * height)


def main():
    args = sys.argv[1:]
    model = "birefnet-general-lite"
    out_dir = None
    if "--model" in args:
        model = args[args.index("--model") + 1]
        del args[args.index("--model"):args.index("--model") + 2]
    if "--out" in args:
        out_dir = Path(args[args.index("--out") + 1])
        del args[args.index("--out"):args.index("--out") + 2]
    force = "--force" in args
    args = [arg for arg in args if arg != "--force"]
    wanted = set(args)

    choices = json.loads((PIPE / "choices.json").read_text(encoding="utf-8"))
    candidates = json.loads((PIPE / "candidates.json").read_text(encoding="utf-8"))
    state = json.loads(STATE.read_text(encoding="utf-8")) if STATE.exists() and not out_dir else {}
    credits = json.loads(CREDITS.read_text(encoding="utf-8")) if CREDITS.exists() else {"schemaVersion": 1, "animals": {}}
    session = new_session(model)
    target_dir = out_dir or ANIMALS
    target_dir.mkdir(parents=True, exist_ok=True)
    done = 0

    for slug, choice in sorted(choices.items()):
        if wanted and slug not in wanted:
            continue
        key = choice.get("key")
        if not key:
            continue
        entry = candidates.get(slug)
        candidate = next((c for c in entry["candidates"] if Path(c.get("local", "")).stem == key), None) if entry else None
        if not candidate:
            print(f"{slug}: pick #{key} not found", flush=True)
            continue
        erase = [tuple(box) for box in choice.get("erase", [])]
        neutral = bool(choice.get("neutral"))
        stamp = f"{candidate['title']}|{model}|{MAX_SIDE}" + (f"|{erase}" if erase else "") + ("|neutral" if neutral else "")
        if not force and not out_dir and state.get(slug) == stamp and (target_dir / f"{slug}.png").exists():
            continue
        started = time.time()
        try:
            photo = download(slug, key, candidate)
            image, coverage = cutout(photo, session, erase, neutral)
        except Exception as error:
            print(f"{slug}: FAILED {error}", flush=True)
            continue
        image.save(target_dir / f"{slug}.png", optimize=True)
        done += 1
        print(f"{slug}: {image.size[0]}x{image.size[1]} subject {coverage:.0%} ({time.time() - started:.1f}s)", flush=True)
        if out_dir:
            continue
        state[slug] = stamp
        credits["animals"][slug] = {
            "title": candidate["title"].removeprefix("File:"),
            "sourcePage": candidate["sourcePage"],
            "artist": candidate.get("artist") or "Unknown",
            "license": candidate.get("license") or "",
            "licenseUrl": license_url(candidate.get("license")),
            "modified": "Background removed and cropped",
        }
        STATE.write_text(json.dumps(state, indent=1), encoding="utf-8")
        CREDITS.write_text(json.dumps(credits, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"cutouts written: {done}")


if __name__ == "__main__":
    main()
