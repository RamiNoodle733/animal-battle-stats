"""Render the scene art in images/ui/: a dark backdrop for each biome (the
landscape behind an animal on its card and its page), the S-tier foil, and the
Versus stage (a spotlit arena with a perspective hex floor).

Backdrops are near-monochrome silhouettes with atmospheric depth, so each card
gets a sense of place without new colours; the tier shards stay the colour.

    pip install numpy pillow
    python scripts/assets/build-ui-scenes.py
"""
import math
import os

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
OUT = os.path.join(ROOT, 'images', 'ui')
SQ3 = math.sqrt(3)
W, H = 840, 1120  # drawn at 4x of a 210x280 card, saved at 2x
TINT = np.array([1.0, 1.02, 1.07])


def save(image, name, quality=80):
    path = os.path.join(OUT, name)
    image.save(path, 'WEBP', quality=quality, method=6)
    print(f'{name}: {image.size[0]}x{image.size[1]}, {os.path.getsize(path) / 1024:.1f} KB')


class Scene:
    """Paints silhouette layers far to near; each layer is a grey value and an alpha."""

    def __init__(self, seed):
        self.rng = np.random.default_rng(seed)
        self.rgb = np.zeros((H, W, 3))
        self.alpha = np.zeros((H, W))

    def mask(self):
        return Image.new('L', (W, H), 0)

    def paint(self, mask, grey, alpha, blur=0, fade=None, rim=0.0):
        if blur:
            mask = mask.filter(ImageFilter.GaussianBlur(blur))
        raw = np.asarray(mask, dtype=np.float64) / 255
        m = raw * alpha
        if fade is not None:
            m = m * fade
        colour = np.array([grey, grey, grey]) * TINT
        self.rgb = self.rgb * (1 - m[..., None]) + colour * m[..., None]
        self.alpha = self.alpha + m * (1 - self.alpha)
        if rim:
            # a thin light along the top edge of the silhouette (backlight)
            edge = np.clip(raw - np.roll(raw, 5, axis=0), 0, 1)
            edge = np.asarray(Image.fromarray((edge * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.2)), dtype=np.float64) / 255 * rim
            light = np.array([150.0, 150.0, 150.0]) * TINT
            self.rgb = self.rgb * (1 - edge[..., None]) + light * edge[..., None]
            self.alpha = self.alpha + edge * (1 - self.alpha)

    def horizon(self, y, strength=0.3):
        """A soft light band behind the silhouettes, so their shapes read."""
        glow = self.mask()
        ImageDraw.Draw(glow).rectangle((0, y - 40, W, y + 30), fill=255)
        self.paint(glow, 96, strength, blur=70)

    def ridge(self, base, amp, step, smooth=True):
        """A horizon line: list of points across the width."""
        xs = np.arange(-step, W + 2 * step, step)
        ys = base - self.rng.uniform(0, amp, len(xs))
        if smooth:
            fine = np.arange(0, W + 1, 6)
            ys = np.interp(fine, xs, ys)
            ys = np.convolve(np.pad(ys, 6, mode='edge'), np.ones(13) / 13, mode='valid')
            xs = fine
        return list(zip(xs.tolist(), ys.tolist())) + [(W, H), (0, H)]

    def image(self, size=(420, 560)):
        out = np.dstack([np.clip(self.rgb, 0, 255), np.clip(self.alpha, 0, 1) * 255])
        return Image.fromarray(out.astype(np.uint8), 'RGBA').resize(size, Image.LANCZOS)


def vfade(top, bottom):
    """0 above `top`, 1 below `bottom` (fractions of the height)."""
    y = np.linspace(0, 1, H)[:, None] * np.ones((1, W))
    return np.clip((y - top) / (bottom - top), 0, 1)


def savanna():
    s = Scene(1)
    s.horizon(H * 0.6, 0.35)
    sun = s.mask()
    ImageDraw.Draw(sun).ellipse((W * 0.52, H * 0.40, W * 0.86, H * 0.40 + W * 0.34), fill=255)
    s.paint(sun, 150, 0.28, blur=6)
    s.paint(sun, 170, 0.12, blur=60)
    far = s.mask()
    ImageDraw.Draw(far).polygon(s.ridge(H * 0.62, 40, 140), fill=255)
    s.paint(far, 34, 0.9, blur=1, fade=vfade(0.45, 0.6), rim=0.3)
    near = s.mask()
    d = ImageDraw.Draw(near)
    d.polygon(s.ridge(H * 0.70, 26, 90), fill=255)
    for cx, size in ((W * 0.18, 1.0), (W * 0.82, 0.7)):
        top = H * 0.70 - 240 * size
        d.polygon([(cx - 8 * size, H * 0.72), (cx - 3 * size, top + 40 * size), (cx + 3 * size, top + 40 * size), (cx + 9 * size, H * 0.72)], fill=255)
        d.line([(cx, top + 70 * size), (cx - 70 * size, top + 20 * size)], fill=255, width=int(7 * size))
        d.line([(cx, top + 60 * size), (cx + 80 * size, top + 16 * size)], fill=255, width=int(7 * size))
        d.ellipse((cx - 190 * size, top - 20 * size, cx + 190 * size, top + 38 * size), fill=255)
    for _ in range(90):
        x = s.rng.uniform(0, W)
        y = H * 0.70 + s.rng.uniform(-8, 30)
        d.line([(x, y), (x + s.rng.uniform(-8, 8), y - s.rng.uniform(10, 30))], fill=255, width=2)
    s.paint(near, 12, 1.0, fade=vfade(0.45, 0.6), rim=0.45)
    return s


def pines(d, rng, base, height, spacing, jitter):
    x = -spacing
    while x < W + spacing:
        h = height * rng.uniform(0.7, 1.15)
        w = h * 0.36
        for tier in range(4):
            top = base - h + tier * h * 0.22
            half = w * (0.45 + tier * 0.18)
            d.polygon([(x, top), (x + half, top + h * 0.3), (x - half, top + h * 0.3)], fill=255)
        d.rectangle((x - w * 0.06, base - h * 0.2, x + w * 0.06, base + 10), fill=255)
        x += spacing * rng.uniform(1 - jitter, 1 + jitter)


def forest():
    s = Scene(2)
    s.horizon(H * 0.58, 0.3)
    for base, height, spacing, grey, alpha in ((H * 0.60, 180, 70, 40, 0.8), (H * 0.66, 260, 95, 26, 0.9), (H * 0.74, 380, 150, 12, 1.0)):
        m = s.mask()
        d = ImageDraw.Draw(m)
        pines(d, s.rng, base, height, spacing, 0.3)
        d.rectangle((0, base, W, H), fill=255)
        s.paint(m, grey, alpha, blur=1, fade=vfade(0.25, 0.5), rim=0.35 if grey < 30 else 0.2)
        mist = s.mask()
        ImageDraw.Draw(mist).rectangle((0, base - 30, W, base + 30), fill=255)
        s.paint(mist, 90, 0.10, blur=30)
    return s


def jungle():
    s = Scene(3)
    s.horizon(H * 0.6, 0.3)
    back = s.mask()
    d = ImageDraw.Draw(back)
    d.polygon(s.ridge(H * 0.64, 60, 60), fill=255)
    s.paint(back, 30, 0.9, blur=1, fade=vfade(0.4, 0.58), rim=0.25)
    leaves = s.mask()
    d = ImageDraw.Draw(leaves)
    for side in (0, 1):
        for i in range(7):
            y = H * (0.18 + i * 0.1)
            length = s.rng.uniform(220, 340)
            angle = s.rng.uniform(-0.5, 0.4) + (math.pi if side else 0)
            x0 = -20 if side == 0 else W + 20
            pts = []
            for t in np.linspace(0, 1, 18):
                width = math.sin(t * math.pi) * 46
                px = x0 + math.cos(angle) * length * t
                py = y + math.sin(angle) * length * t + t * t * 60
                pts.append((px - math.sin(angle) * width, py + math.cos(angle) * width))
            for t in np.linspace(1, 0, 18):
                width = math.sin(t * math.pi) * 46
                px = x0 + math.cos(angle) * length * t
                py = y + math.sin(angle) * length * t + t * t * 60
                pts.append((px + math.sin(angle) * width, py - math.cos(angle) * width))
            d.polygon(pts, fill=255)
    for _ in range(6):
        x = s.rng.uniform(W * 0.1, W * 0.9)
        d.line([(x, 0), (x + s.rng.uniform(-30, 30), H * s.rng.uniform(0.2, 0.4))], fill=255, width=4)
    s.paint(leaves, 10, 0.92, rim=0.3)
    floor = s.mask()
    ImageDraw.Draw(floor).polygon(s.ridge(H * 0.72, 20, 80), fill=255)
    s.paint(floor, 10, 1.0, fade=vfade(0.5, 0.65), rim=0.35)
    return s


def wetlands():
    s = Scene(4)
    s.horizon(H * 0.6, 0.32)
    trees = s.mask()
    ImageDraw.Draw(trees).polygon(s.ridge(H * 0.6, 50, 50), fill=255)
    s.paint(trees, 30, 0.85, blur=2, fade=vfade(0.4, 0.56), rim=0.2)
    water = s.mask()
    d = ImageDraw.Draw(water)
    for _ in range(26):
        y = s.rng.uniform(H * 0.64, H * 0.8)
        x = s.rng.uniform(-50, W)
        d.line([(x, y), (x + s.rng.uniform(80, 260), y)], fill=255, width=3)
    s.paint(water, 140, 0.25, blur=1)
    reeds = s.mask()
    d = ImageDraw.Draw(reeds)
    for cluster in (0.12, 0.3, 0.78, 0.92):
        for _ in range(26):
            x = W * cluster + s.rng.normal(0, 30)
            h = s.rng.uniform(150, 330)
            bend = s.rng.uniform(-40, 40)
            d.line([(x, H * 0.76), (x + bend * 0.5, H * 0.76 - h * 0.6), (x + bend, H * 0.76 - h)], fill=255, width=4)
            if s.rng.uniform() < 0.3:
                d.ellipse((x + bend - 7, H * 0.76 - h - 10, x + bend + 7, H * 0.76 - h + 34), fill=255)
    d.rectangle((0, H * 0.76, W, H), fill=255)
    s.paint(reeds, 10, 1.0, rim=0.3)
    return s


def desert():
    s = Scene(5)
    s.horizon(H * 0.58, 0.36)
    mesa = s.mask()
    ImageDraw.Draw(mesa).polygon([(W * 0.55, H * 0.6), (W * 0.6, H * 0.48), (W * 0.84, H * 0.48), (W * 0.9, H * 0.6)], fill=255)
    s.paint(mesa, 38, 0.8, blur=1, rim=0.25)
    for base, amp, grey, alpha in ((H * 0.62, 70, 30, 0.9), (H * 0.68, 60, 20, 0.95), (H * 0.75, 40, 11, 1.0)):
        m = s.mask()
        ImageDraw.Draw(m).polygon(s.ridge(base, amp, 260), fill=255)
        s.paint(m, grey, alpha, blur=1, fade=vfade(0.4, 0.6), rim=0.35)
    ripples = s.mask()
    d = ImageDraw.Draw(ripples)
    for i in range(14):
        y = H * 0.77 + i * 18
        d.arc((-200, y - 40, W + 200, y + 60), 200, 340, fill=255, width=2)
    s.paint(ripples, 70, 0.18)
    return s


def mountains():
    s = Scene(6)
    s.horizon(H * 0.5, 0.32)
    for base, amp, step, grey, alpha in ((H * 0.62, 320, 90, 40, 0.85), (H * 0.68, 240, 120, 26, 0.92), (H * 0.76, 150, 160, 11, 1.0)):
        m = s.mask()
        pts = s.ridge(base, amp, step, smooth=False)
        ImageDraw.Draw(m).polygon(pts, fill=255)
        s.paint(m, grey, alpha, fade=vfade(0.15, 0.4), rim=0.35)
        if grey > 20:
            snow = s.mask()
            d = ImageDraw.Draw(snow)
            for (x0, y0), (x1, y1), (x2, y2) in zip(pts, pts[1:], pts[2:]):
                if y1 < y0 and y1 < y2 and y1 < base - amp * 0.45:
                    d.polygon([(x1, y1), (x1 + (x2 - x1) * 0.28, y1 + (y2 - y1) * 0.28), (x1 + (x0 - x1) * 0.28, y1 + (y0 - y1) * 0.28)], fill=255)
            s.paint(snow, 130, 0.4)
    return s


def arctic():
    s = Scene(7)
    s.horizon(H * 0.62, 0.3)
    aurora = s.mask()
    d = ImageDraw.Draw(aurora)
    for band in range(3):
        pts = [(x, H * (0.12 + band * 0.07) + math.sin(x / 90 + band) * 40) for x in range(-20, W + 40, 20)]
        d.line(pts, fill=255, width=36)
    s.paint(aurora, 170, 0.12, blur=22)
    bergs = s.mask()
    d = ImageDraw.Draw(bergs)
    d.polygon([(W * 0.05, H * 0.64), (W * 0.16, H * 0.5), (W * 0.24, H * 0.55), (W * 0.33, H * 0.64)], fill=255)
    d.polygon([(W * 0.6, H * 0.64), (W * 0.7, H * 0.54), (W * 0.8, H * 0.52), (W * 0.95, H * 0.64)], fill=255)
    s.paint(bergs, 44, 0.85, blur=1, rim=0.4)
    shelf = s.mask()
    d = ImageDraw.Draw(shelf)
    d.polygon(s.ridge(H * 0.7, 18, 180, smooth=False), fill=255)
    s.paint(shelf, 22, 1.0, fade=vfade(0.5, 0.62), rim=0.5)
    cracks = s.mask()
    d = ImageDraw.Draw(cracks)
    for _ in range(18):
        x = s.rng.uniform(0, W)
        d.line([(x, H * 0.7), (x + s.rng.uniform(-20, 20), H * 0.85)], fill=255, width=2)
    s.paint(cracks, 60, 0.4)
    flakes = s.mask()
    d = ImageDraw.Draw(flakes)
    for _ in range(140):
        x, y, r = s.rng.uniform(0, W), s.rng.uniform(0, H * 0.7), s.rng.uniform(1.5, 4)
        d.ellipse((x - r, y - r, x + r, y + r), fill=255)
    s.paint(flakes, 200, 0.25)
    return s


def ocean():
    s = Scene(8)
    rays = s.mask()
    d = ImageDraw.Draw(rays)
    for _ in range(7):
        x = s.rng.uniform(0, W)
        width = s.rng.uniform(30, 90)
        d.polygon([(x, -10), (x + width, -10), (x + width * 3 - 160, H * 0.8), (x - 160, H * 0.8)], fill=255)
    s.paint(rays, 170, 0.09, blur=18, fade=1 - vfade(0.1, 0.75))
    surface = s.mask()
    d = ImageDraw.Draw(surface)
    for i in range(10):
        y = 14 + i * 9
        d.line([(x, y + math.sin(x / 40 + i) * 5) for x in range(0, W + 20, 20)], fill=255, width=2)
    s.paint(surface, 180, 0.12, blur=1)
    bubbles = s.mask()
    d = ImageDraw.Draw(bubbles)
    for _ in range(40):
        x, y, r = s.rng.uniform(0, W), s.rng.uniform(H * 0.1, H * 0.7), s.rng.uniform(3, 11)
        d.ellipse((x - r, y - r, x + r, y + r), outline=255, width=2)
    s.paint(bubbles, 170, 0.25)
    bed = s.mask()
    d = ImageDraw.Draw(bed)
    d.polygon(s.ridge(H * 0.74, 60, 120), fill=255)
    for _ in range(9):
        x = s.rng.uniform(0, W)
        h = s.rng.uniform(140, 360)
        pts = [(x + math.sin(t * 6 + x) * 18, H * 0.76 - h * t) for t in np.linspace(0, 1, 16)]
        d.line(pts, fill=255, width=9)
    s.paint(bed, 10, 1.0, fade=vfade(0.35, 0.6), rim=0.3)
    return s


def foil():
    """S-tier foil: gold glints and soft light streaks, screened over the card."""
    rng = np.random.default_rng(9)
    w, h = 420, 560
    img = Image.new('RGBA', (w, h), (0, 0, 0, 0))
    streak = Image.new('L', (w, h), 0)
    d = ImageDraw.Draw(streak)
    for x0, width in ((120, 60), (230, 26), (300, 14)):
        d.polygon([(x0, 0), (x0 + width, 0), (x0 + width - 0.42 * h, h), (x0 - 0.42 * h, h)], fill=140)
    streak = streak.filter(ImageFilter.GaussianBlur(14))
    glints = Image.new('L', (w, h), 0)
    d = ImageDraw.Draw(glints)
    for _ in range(70):
        x, y = rng.uniform(0, w), rng.uniform(0, h)
        size = rng.uniform(2, 7)
        a = int(rng.uniform(120, 255))
        d.line([(x - size, y), (x + size, y)], fill=a, width=1)
        d.line([(x, y - size), (x, y + size)], fill=a, width=1)
        d.ellipse((x - 1.2, y - 1.2, x + 1.2, y + 1.2), fill=255)
    alpha = np.maximum(np.asarray(streak, dtype=np.float64) * 0.5, np.asarray(glints.filter(ImageFilter.GaussianBlur(0.5)), dtype=np.float64))
    colour = np.array([255.0, 236.0, 170.0])
    out = np.dstack([np.broadcast_to(colour, (h, w, 3)), alpha])
    return Image.fromarray(np.clip(out, 0, 255).astype(np.uint8), 'RGBA')


def stage():
    """The Versus arena: a perspective hex floor under two spotlights."""
    w, h = 1600, 900
    rng = np.random.default_rng(10)
    ys, xs = np.mgrid[0:h, 0:w].astype(np.float64) + 0.5
    horizon = h * 0.52
    img = np.zeros((h, w))
    # back wall: dark, a faint glow at the horizon
    img += 10 + 16 * np.exp(-((ys - horizon) / (h * 0.16)) ** 2)
    # floor: project each pixel below the horizon onto the ground plane
    below = ys > horizon + 1
    depth = 260.0 / np.maximum(ys - horizon, 1)
    gx = (xs - w / 2) * depth / 60.0
    gy = depth * 10.0
    q, rr = SQ3 / 3 * gx - gy / 3, 2 / 3 * gy
    cx3, cz3 = q, rr
    cy3 = -cx3 - cz3
    ax, ay, az = np.round(cx3), np.round(cy3), np.round(cz3)
    ex, ey, ez = np.abs(ax - cx3), np.abs(ay - cy3), np.abs(az - cz3)
    m1 = (ex > ey) & (ex > ez)
    m2 = ~m1 & (ey > ez)
    m3 = ~m1 & ~m2
    ax[m1] = -ay[m1] - az[m1]
    ay[m2] = -ax[m2] - az[m2]
    az[m3] = -ax[m3] - ay[m3]
    lx = gx - SQ3 * (ax + az / 2)
    ly = gy - 1.5 * az
    angles = np.radians([0, 60, 120, 180, 240, 300])
    proj = np.stack([lx * math.cos(a) + ly * math.sin(a) for a in angles])
    k = np.argmax(proj, axis=0)
    d = proj.max(axis=0) / (SQ3 / 2)
    lit = np.cos(angles)[k] * -0.3 + np.sin(angles)[k] * -0.95
    plate = 30 + np.where(d > 0.9, -18, 0) + np.where((d > 0.78) & (d <= 0.9), lit * 16, 0)
    fog = np.clip((ys - horizon) / (h - horizon), 0, 1) ** 0.8
    img = np.where(below, img * (1 - fog) + plate * fog, img)
    # spotlights: beams from above and pools on the floor where the fighters stand
    for cx in (w * 0.24, w * 0.76):
        beam = np.exp(-((xs - cx) / (30 + ys * 0.32)) ** 2)
        img += beam * 20 * np.clip(1 - ys / h * 0.35, 0, 1)
        pool = np.exp(-(((xs - cx) / 300) ** 2 + ((ys - h * 0.8) / 60) ** 2))
        img += pool * 60 * below
    # haze and dust in the beams
    img += rng.normal(0, 2.2, (h, w))
    dust = np.zeros((h, w))
    for _ in range(260):
        x, y = int(rng.uniform(0, w)), int(rng.uniform(0, h * 0.8))
        dust[y, x] = rng.uniform(80, 200)
    img += np.asarray(Image.fromarray(np.clip(dust, 0, 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(1.2)), dtype=np.float64) * 0.6
    # vignette
    img *= 1 - 0.55 * np.clip(np.hypot((xs - w / 2) / (w * 0.62), (ys - h * 0.55) / (h * 0.75)), 0, 1) ** 2
    out = np.dstack([img * 1.0, img * 1.01, img * 1.05])
    return Image.fromarray(np.clip(out, 0, 255).astype(np.uint8), 'RGB')


def main():
    os.makedirs(OUT, exist_ok=True)
    for name, build in (('savanna', savanna), ('forest', forest), ('jungle', jungle), ('wetlands', wetlands),
                        ('desert', desert), ('mountains', mountains), ('arctic', arctic), ('ocean', ocean)):
        save(build().image(), f'biome-{name}.webp', quality=78)
    save(foil(), 'foil-s.webp', quality=80)
    save(stage(), 'stage.webp', quality=82)


if __name__ == '__main__':
    main()
