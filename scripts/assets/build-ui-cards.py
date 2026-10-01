"""Render the art for the full-size collectible card (the card people view in
3D and share as a picture or a video) into images/ui/:

    card-frame-<tier>.png    9-slice metal frame, slice 88: dark lips, lit
                             bevels, a brushed band with an engraved groove
                             and a domed rivet in each corner
    card-shards-<tier>.webp  the tier shards drawn at card size (900x1200)
    card-biome-<name>.webp   the biome backdrops at their drawn size (840x1120)
    holo.webp                seamless holographic foil: hex facets, each a
                             slightly different angle of a rainbow, with glints

The shards and backdrops come from the same generators as the site's small
cards (build-ui-textures.py and build-ui-scenes.py), only kept at a higher
resolution, so the big card matches the small ones exactly.

    pip install numpy pillow
    python scripts/assets/build-ui-cards.py
"""
import importlib.util
import math
import os

import numpy as np
from PIL import Image, ImageFilter

HERE = os.path.dirname(os.path.abspath(__file__))


def module(name, file):
    spec = importlib.util.spec_from_file_location(name, os.path.join(HERE, file))
    loaded = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(loaded)
    return loaded


textures = module('ui_textures', 'build-ui-textures.py')
scenes = module('ui_scenes', 'build-ui-scenes.py')

OUT = textures.OUT
TIERS = textures.TIERS
LIGHT = textures.LIGHT
SQ3 = math.sqrt(3)
rgb = textures.rgb
sd_round_rect = textures.sd_round_rect
outward_normal = textures.outward_normal
coverage = textures.coverage
save = textures.save


# ---------------------------------------------------------------- the frame (9-slice)

def card_frame(tier, light, dark, seed=21):
    """Big-card frame. 320px square, corner radius 60, band 30 wide; slice 88."""
    rng = np.random.default_rng(seed)
    size, radius, thick = 320, 60.0, 30.0
    ys, xs = np.mgrid[0:size, 0:size].astype(np.float64) + 0.5
    c = size / 2
    outer = sd_round_rect(xs, ys, c, c, c, c, radius)
    inner = sd_round_rect(xs, ys, c, c, c - thick, c - thick, radius - thick + 4)
    nx, ny = outward_normal(xs, ys, c, c, c, c, radius)
    lit = nx * LIGHT[0] + ny * LIGHT[1]
    t = np.clip(-outer / thick, 0, 1)  # 0 at the outside edge, 1 at the inside
    T, L, D = rgb(tier), rgb(light), rgb(dark)
    white = np.array([255.0, 255.0, 255.0])
    up, down = np.clip(lit, 0, 1)[..., None], np.clip(-lit, 0, 1)[..., None]

    # the brushed band: tier metal, lit edges brighter, far edges darker
    mid = T * 0.9
    col = mid + (L - mid) * up * 0.5 - (mid - D) * down * 0.6
    # brushed grain runs along the frame (rows on the top and bottom, columns on the sides)
    rows = rng.normal(0, 1, (size, 1)) * 6 + rng.normal(0, 2.5, (size, size))
    cols = rng.normal(0, 1, (1, size)) * 6 + rng.normal(0, 2.5, (size, size))
    grain = np.where(np.abs(ny) >= np.abs(nx), rows, cols)
    col = col + grain[..., None]
    # a soft sheen across the band, like light on a curved strip
    band = np.clip((t - 0.22) / 0.56, 0, 1)
    col = col + (white - col) * (np.sin(band * math.pi) ** 6)[..., None] * up * 0.22

    # outer bevel: catches the light on the lit side
    bevel_o = ((t > 0.06) & (t < 0.22))[..., None]
    across = np.clip((t - 0.06) / 0.16, 0, 1)[..., None]
    col = np.where(bevel_o, col + (white - col) * up * (0.75 - 0.4 * across) - col * down * 0.45, col)
    # engraved groove down the middle of the band (dark cut, light lower lip)
    groove = np.exp(-((t - 0.5) / 0.022) ** 2)[..., None]
    lip = np.exp(-((t - 0.545) / 0.02) ** 2)[..., None]
    col = col * (1 - groove * 0.62) + (white - col) * lip * (0.18 + 0.3 * up)
    # inner bevel: faces the other way
    bevel_i = ((t > 0.78) & (t < 0.92))[..., None]
    col = np.where(bevel_i, col + (white - col) * down * 0.45 - col * up * 0.5, col)
    # dark lips inside and out
    edge = ((t <= 0.06) | (t >= 0.92))[..., None]
    col = np.where(edge, np.array([10.0, 11.0, 13.0]) + (L * 0.12) * (t >= 0.92)[..., None], col)

    # domed rivets on the band's centre line at each corner
    reach = (radius - thick * 0.5) / math.sqrt(2)
    for sx in (-1, 1):
        for sy in (-1, 1):
            px = c + sx * (c - radius + reach)
            py = c + sy * (c - radius + reach)
            dist = np.hypot(xs - px, ys - py)
            r = thick * 0.3
            seat = coverage(dist - r - 2.4)
            col = col * (1 - seat[..., None] * 0.7)
            dome = coverage(dist - r)
            dot = ((xs - px) * LIGHT[0] + (ys - py) * LIGHT[1]) / r
            z = np.sqrt(np.clip(1 - (dist / r) ** 2, 0, 1))
            shade = np.clip(0.35 + 0.55 * dot + 0.35 * z, 0, 1.4)[..., None]
            rivet = L * 0.55 + (white - L * 0.55) * np.clip(shade - 0.55, 0, 1) - L * 0.4 * np.clip(0.4 - shade, 0, 1)
            spec = np.exp(-(((xs - (px + LIGHT[0] * r * 0.45)) ** 2 + (ys - (py + LIGHT[1] * r * 0.45)) ** 2) / (r * 0.28) ** 2))[..., None]
            rivet = rivet + (white - rivet) * spec * 0.85
            col = col * (1 - dome[..., None]) + rivet * dome[..., None]

    alpha = np.clip(coverage(outer) - coverage(inner), 0, 1)
    out = np.dstack([np.clip(col, 0, 255), alpha * 255])
    return Image.fromarray(out.astype(np.uint8), 'RGBA')


# ---------------------------------------------------------------- holographic foil

def hsv_to_rgb(h, s, v):
    i = np.floor(h * 6).astype(int) % 6
    f = h * 6 - np.floor(h * 6)
    p, q, t = v * (1 - s), v * (1 - s * f), v * (1 - s * (1 - f))
    r = np.choose(i, [v, q, p, p, t, v])
    g = np.choose(i, [t, v, v, q, p, p])
    b = np.choose(i, [p, p, t, v, v, q])
    return np.stack([r, g, b], axis=-1)


def holo(cols=12, rowpairs=7, r=17.0, seed=31):
    """A seamless tile. Each hex facet shows the rainbow at its own tilt, so as
    the card turns (the tile slides under a blend), facets flash one by one.
    Mostly dark: under color-dodge, black leaves the card untouched."""
    rng = np.random.default_rng(seed)
    w, h = round(cols * SQ3 * r), round(rowpairs * 3 * r)
    rx, ry = w / (cols * SQ3), h / (rowpairs * 3)
    ys, xs = np.mgrid[0:h, 0:w].astype(np.float64) + 0.5
    X, Y = xs / rx, ys / ry
    # axial hex coordinates (the same lattice as the site's hex plates)
    q3, z3 = SQ3 / 3 * X - Y / 3, 2 / 3 * Y
    y3 = -q3 - z3
    ax, ay, az = np.round(q3), np.round(y3), np.round(z3)
    ex, ey, ez = np.abs(ax - q3), np.abs(ay - y3), np.abs(az - z3)
    m1 = (ex > ey) & (ex > ez)
    m2 = ~m1 & (ey > ez)
    m3 = ~m1 & ~m2
    ax[m1] = -ay[m1] - az[m1]
    ay[m2] = -ax[m2] - az[m2]
    az[m3] = -ax[m3] - ay[m3]
    lx = X - SQ3 * (ax + az / 2)
    ly = Y - 1.5 * az
    angles = np.radians([0, 60, 120, 180, 240, 300])
    d = np.stack([lx * math.cos(a) + ly * math.sin(a) for a in angles]).max(axis=0) / (SQ3 / 2)
    rows = 2 * rowpairs
    cell = (np.mod(az, rows).astype(int), np.mod(ax + np.floor(az / 2), cols).astype(int))
    offset = rng.uniform(0, 1, (rows, cols))[cell]
    bright = rng.uniform(0.45, 1.0, (rows, cols))[cell]

    # the rainbow runs diagonally and wraps with the tile (whole cycles each way)
    diag = xs / w * 2 + ys / h * 1
    hue = np.mod(diag + offset * 0.22 + lx * 0.04, 1)
    # facets: a lit face with a bright rim, dark seams between them
    face = 0.42 + 0.3 * np.clip(-ly * 0.6 + lx * 0.25, -1, 1)
    rim = np.exp(-((d - 0.86) / 0.05) ** 2)
    seam = np.clip((d - 0.93) / 0.07, 0, 1)
    value = (face * bright + rim * 0.45) * (1 - seam * 0.85)
    # banding: the foil is brightest in stripes, like light raking across it
    value = value * (0.55 + 0.45 * np.cos(np.mod(diag * 3 + offset * 0.3, 1) * 2 * math.pi) ** 2)
    colour = hsv_to_rgb(hue, np.full_like(hue, 0.72), np.clip(value, 0, 1)) * 205

    # glints: tiny four-point stars, wrapped so the tile stays seamless
    glints = np.zeros((h, w))
    for _ in range(46):
        gx, gy = rng.uniform(0, w), rng.uniform(0, h)
        size = rng.uniform(2.5, 7.0)
        for ox in (-w, 0, w):
            for oy in (-h, 0, h):
                dx, dy = xs - gx - ox, ys - gy - oy
                star = np.exp(-(dx ** 2 + dy ** 2) / (size * 0.35) ** 2)
                star += np.exp(-(dx ** 2) / 0.9 - (dy ** 2) / size ** 2) * 0.7
                star += np.exp(-(dy ** 2) / 0.9 - (dx ** 2) / size ** 2) * 0.7
                glints += star * rng.uniform(0.6, 1.0)
    colour = colour + np.clip(glints, 0, 1.2)[..., None] * 255
    return Image.fromarray(np.clip(colour, 0, 255).astype(np.uint8), 'RGB')


def main():
    os.makedirs(OUT, exist_ok=True)
    for key, (tier, light, dark) in TIERS.items():
        save(card_frame(tier, light, dark), f'card-frame-{key}.png')
        save(textures.shards(tier, light, dark, scale=1.5, size=None), f'card-shards-{key}.webp', quality=80)
    for name in ('savanna', 'forest', 'jungle', 'wetlands', 'desert', 'mountains', 'arctic', 'ocean'):
        save(getattr(scenes, name)().image((scenes.W, scenes.H)), f'card-biome-{name}.webp', quality=78)
    save(holo(), 'holo.webp', quality=86)


if __name__ == '__main__':
    main()
