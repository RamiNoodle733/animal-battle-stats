# Mandatory full-body transparent-photo standard

This document corrects the original image-search workflow. It applies retroactively to every existing animal report and to all future reports. A source photograph or image URL is NOT a completed image asset.

## Non-negotiable deliverable

The deliverable for each animal is a **real photograph of one representative healthy adult animal, isolated as a genuine transparent-background PNG, with its whole body visible**. Put the verified binary file at `animal-research-for-update/images/<animal-slug>.png` and record the original source-page URL plus the original direct-photo URL in that animal's existing research report. The repository's production images and live site must not be changed by this staging pass.

Full body means the head, entire torso, all legs and feet or equivalent appendages, and whole tail when present must be inside the image without clipping; wings should be fully visible when a wings-spread pose is chosen. Aquatic animals must show the entire head-to-tail silhouette and visible fins. Macro images of tiny animals must show the complete subject. A headshot, shoulders-only portrait, cropped tail, missing feet, crowded group, or an animal obscured by grass/water/other animals is NOT acceptable. The animal should occupy enough of the frame to yield a usable cutout. Prefer a clear three-quarter or side view with all major anatomy visible. If a standing full-body pose is unavailable, a full-body swimming or flying photograph is acceptable. Do not infer a specimen's sex from appearances alone; verified sex is preferred but not required when genuinely unconfirmed.

## Search order

1. Search broadly across Google-style image search, Wikimedia Commons, government/museum photographs, photographer pages and other websites. Do not restrict discovery to one provider or spend excessive time optimizing photographer metadata. Use terms like `adult male <species> full body side profile high resolution photograph`, `adult female <species> full body photo`, and `<species> real transparent png`, as biologically appropriate.
2. Prefer a high-resolution full-body photo with a simple contrasting background that permits a clean cutout, rather than a higher-resolution close-up. Prefer at least 1,600 pixels on the longest side; aim for 2,000+ when available, but do not compromise complete anatomy just to meet a size target. Prefer the canonical larger/fighting sex, including females for female-biased species. Exact taxon and adulthood are mandatory.
3. An existing full-body transparent PNG derived from a real photo is acceptable only when it is genuinely photographic and its transparency is verified. Reject illustration, AI-generated/stylized image, 3D render, silhouette, watermark, stock preview, or an image merely called `.png` but still containing a solid background.
4. Do not assume a Google Images thumbnail URL is the original. Record the actual source page and direct source image URL when available. Prefer images with clear permitted reuse, such as public-domain or compatible Creative Commons, and record the indicated reuse status. An online photo is not automatically licensed for redistribution. Where permission is unknown, keep only a candidate URL and mark licensing unverified; do not redistribute it as a committed asset.

## Produce and verify the actual PNG

- Download the source photograph only when reuse permits it. If already transparent, verify transparency and full-body framing. Otherwise remove only the background using reliable image-editing/cutout tools without generating, repainting, deleting or materially changing the subject.
- Preserve original anatomy, including fine fur, antennae, whiskers, horns, tail, legs and wings. Review the whole silhouette at normal size and against contrasting backgrounds. Reject halos, holes in the animal, missing appendages, obvious segmentation defects or clipped framing. Avoid aggressive automated cutouts that lose body parts.
- Save a real PNG binary with RGBA/transparency. Verify the file signature indicates PNG, the decoded image has an alpha channel, background pixels have alpha below 255 and subject pixels remain visible. A white/checkerboard background drawn into opaque pixels is a failure. A JPEG renamed `.png`, HTML page saved as PNG, placeholder or base64 text file is a failure.
- Open/review the resulting image visually. Before marking it done, verify exact species, plausible adult, complete body, image quality, genuine transparency and usable cropping. The final working file must exist on GitHub at the expected path, not merely in a tool's temporary workspace.
- Follow `CONTRIBUTING.md` for provenance and `npm run assets:audit -- --strict-provenance` / asset promotion when moving approved images to the live site later. This staging image must never be silently promoted to production before that workflow.

## Mandatory image section in each report

Include fields `image_status`, `png_repo_path`, `source_page_url`, `original_photo_url`, `file_format_verified`, `alpha_verified`, `full_body_verified`, `adult_verified`, `sex_verified_or_unknown`, `license_status`, and `notes`. Keep other metadata lightweight. Acceptable status values are:

- `COMPLETE - FULL-BODY TRANSPARENT PNG VERIFIED`: the actual correct binary is committed at the expected path and all checks passed.
- `FULL-BODY SOURCE FOUND - CUTOUT/COMMIT PENDING`: the source photo was visually checked for whole-body framing, but there is no approved committed PNG yet.
- `REPLACEMENT SOURCE NEEDED`: the previous candidate is cropped, low quality, juvenile, wrong species, poorly isolated or otherwise unsuitable.
- `SOURCE FOUND - FULL-BODY NOT VERIFIED`: a candidate URL exists but whole-body suitability cannot yet be established.
- `LICENSE UNVERIFIED - DO NOT COMMIT`: a potentially suitable source exists but permission is unclear.

Do NOT mark an image complete from the presence of a link, a `.png` extension, a plausible search-result description, or image dimensions alone. Never claim a transparent PNG was created unless the actual artifact exists and was inspected. If tools cannot write a GitHub PNG binary, say that and use a pending status rather than pretending the request was fulfilled.

## Backfill rule for existing animals

Read `IMAGE_BACKFILL.md`. The original 24 animal research files were finished while image cutouts were pending. Their image requirements are not finished. Recheck source suitability for whole-body framing, replace cropped candidates, and produce/commit real binary PNGs when tooling permits. Prioritize the oldest unverified image each run; retain the completed text-research count separately from completed image-asset count. Record verified results and remaining blockers in `IMAGE_BACKFILL.md` and `PROGRESS.md`. Do not let a missing PNG falsely imply completed image work, and do not edit any live asset.