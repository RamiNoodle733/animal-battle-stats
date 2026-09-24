"""Screens downloaded Commons candidates with a fast background-removal pass.

For every candidate thumbnail in .cache/image-pipeline/candidates/<slug>/NN.jpg
this computes a subject mask and simple framing metrics:
  - area:        share of the frame covered by the subject
  - touches:     frame edges the subject runs into (a cropped animal)
  - components:  separate large blobs (several animals, or clutter)
and writes a transparent preview used by the review contact sheets.

Usage: python scripts/images/screen_candidates.py [slug ...]
Runs incrementally; results go to .cache/image-pipeline/screen.json
"""
import json
import sys
from pathlib import Path

import numpy as np
from PIL import Image
from rembg import new_session, remove
from scipy import ndimage

ROOT = Path(__file__).resolve().parents[2]
PIPE = ROOT / ".cache" / "image-pipeline"
CANDIDATES = PIPE / "candidates"
PREVIEWS = PIPE / "previews"
RESULT = PIPE / "screen.json"


def metrics(mask: np.ndarray) -> dict:
    solid = mask > 127
    h, w = solid.shape
    total = solid.sum()
    if total == 0:
        return {"area": 0.0, "touches": [], "components": 0, "largestShare": 0.0, "bbox": None}
    edge_band = max(2, int(min(h, w) * 0.006))
    touches = []
    for name, strip, length in (
        ("top", solid[:edge_band, :], w),
        ("bottom", solid[-edge_band:, :], w),
        ("left", solid[:, :edge_band], h),
        ("right", solid[:, -edge_band:], h),
    ):
        # A few stray pixels are noise; a real crop leaves a run along the edge.
        if strip.any(axis=0 if name in ("top", "bottom") else 1).sum() > length * 0.04:
            touches.append(name)
    labels, count = ndimage.label(solid)
    sizes = np.bincount(labels.ravel())[1:] if count else np.array([0])
    big = [s for s in sizes if s > total * 0.04]
    ys, xs = np.nonzero(solid)
    bbox = [int(xs.min()), int(ys.min()), int(xs.max()), int(ys.max())]
    return {
        "area": round(float(total) / (h * w), 4),
        "touches": touches,
        "components": len(big),
        "largestShare": round(float(sizes.max()) / float(total), 3),
        "bbox": bbox,
        "size": [w, h],
    }


def main() -> None:
    PREVIEWS.mkdir(parents=True, exist_ok=True)
    results = json.loads(RESULT.read_text(encoding="utf-8")) if RESULT.exists() else {}
    wanted = set(sys.argv[1:])
    session = new_session("u2net")
    slugs = sorted(p.name for p in CANDIDATES.iterdir() if p.is_dir())
    done = 0
    for slug in slugs:
        if wanted and slug not in wanted:
            continue
        out_dir = PREVIEWS / slug
        out_dir.mkdir(parents=True, exist_ok=True)
        entry = results.setdefault(slug, {})
        for image_path in sorted((CANDIDATES / slug).glob("*.jpg")):
            key = image_path.stem
            if key in entry and not wanted:
                continue
            try:
                with Image.open(image_path) as source:
                    image = source.convert("RGB")
            except Exception as error:  # corrupt or non-image download
                entry[key] = {"error": str(error)}
                continue
            mask = remove(image, session=session, only_mask=True)
            mask_array = np.array(mask.convert("L"))
            entry[key] = metrics(mask_array)
            preview = image.copy()
            preview.putalpha(mask.convert("L"))
            preview.thumbnail((360, 360))
            preview.save(out_dir / f"{key}.png")
            done += 1
        RESULT.write_text(json.dumps(results, indent=1), encoding="utf-8")
        print(f"{slug}: {len(entry)} screened", flush=True)
    print(f"screened {done} new images")


if __name__ == "__main__":
    main()
