# ABS Satin logo — version 1

Approved direction: **B — Satin**, with the broader proportions from the D concept.

`source.png` is the exact approved 1254 × 1254 transparent PNG. It is the master for the exports, not a new interpretation. The connected ABS letters, geometric white paw, staggered navy stat bars, teal/red faces and silver bevels stay together.

Rebuild the handoff folder with:

```powershell
node scripts/branding/export-logo-pack.cjs --pack-dir "C:\Users\User\Documents\ABS Brand Pack\ABS-Satin-v1"
```

Add `--install` to also refresh the website assets. The site uses the versioned `/images/branding/abs-satin-v1/` paths so old cached icons do not hide the new logo. Card and social-image renderers use the same mark.

The exported guide covers the Roblox imports, file choices, palette, clear space and aspect ratio. This is raster artwork; the wordmark SVGs contain the approved raster mark plus outlined type, not a fabricated vector tracing of the logo. No game source, Studio place, or Roblox publication is changed by this export.
