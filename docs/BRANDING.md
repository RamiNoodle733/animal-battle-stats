# Approved ABS logo

The current mark is **B — Satin**, approved on 2026-10-16, with the broader D proportions. The canonical approved raster master is `branding/abs-satin-v1/source.png`.

The laptop handoff is saved separately from both game and website checkouts:

- Folder: `C:\Users\User\Documents\ABS Brand Pack\ABS-Satin-v1`
- Claude guide: `README-FOR-CLAUDE.md` in that folder
- ZIP: `C:\Users\User\Desktop\ABS-Satin-Logo-Pack-v1.zip`
- Desktop pointer: `ABS Logo Pack - START HERE.txt`

The pack includes transparent PNGs at normal UI sizes, compact WebP files, a preserved master, dark/light background wordmarks, social avatar/share files, browser/app/maskable icons, and Roblox import PNGs. Its manifest records file dimensions and hashes. The approved master is not redrawn by the export script.

Regenerate with `node scripts/branding/export-logo-pack.cjs --pack-dir "C:\Users\User\Documents\ABS Brand Pack\ABS-Satin-v1"`. Add `--install` to refresh the website's committed exports. Recreate the ZIP after changing pack contents.

`data/brand.json` defines the website's asset paths. Header, home page, Roblox page, structured organization data and Discord embed branding use it. The canvas card renderer exports `BRAND_LOGO` with the matching versioned mark; both card-image hashing paths and the section-preview renderer fingerprint its image bytes. Link-preview metadata adds the brand ID to previously unversioned preview URLs; existing content fingerprints stay intact. The web manifest points to the same versioned icon set.

Keep all elements together and preserve the aspect ratio. No game files, Rojo state, Studio place or Roblox publication were modified for this change. Claude can import the supplied PNGs when ready. The wordmark SVGs contain the raster mark plus outlined site type; they are not a full vector source of the emblem.
