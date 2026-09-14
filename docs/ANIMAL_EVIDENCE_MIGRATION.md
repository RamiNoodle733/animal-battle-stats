# Animal evidence migration contract

## Current release boundary

The `2026-09-evidence-foundation` release is additive and intentionally contains no reviewed records. It defines the evidence schema, validation, storage model, audit command and visible profile disclosure without rewriting production animal data. Existing positive measurements remain legacy catalogue values, not evidence-backed facts. Existing zero values remain ambiguous until a cited review records `actual_zero`, `unknown`, or `not_applicable` explicitly.

Run the read-only inventory from the repository root:

```powershell
npm run evidence:audit
```

The command must report `dryRun: true`, all 225 animals, zero validation errors, and the exact counts of populated, ambiguous-zero and missing legacy values. It does not connect to MongoDB or modify files.

## Required import workflow for a future reviewed release

No future evidence import may write by default. The importer must be implemented with this sequence:

1. Validate every record with `validateEvidenceRecord` and reject the entire release on any error.
2. Confirm every animal and field against the canonical roster and supported field list.
3. Print a dry-run summary grouped by animal, field, state, source quality and measured/estimated basis.
4. Export the existing `AnimalEvidence` documents for the target `dataRelease` before applying.
5. Require an explicit `--apply` flag and release identifier. Use idempotent upserts keyed by animal, field, source URL and review date.
6. Re-read the applied release, compare counts and validation results with the dry run, then publish it only after profile and responsive checks pass.

An import must never infer sources from the legacy catalogue, translate a missing or zero value into `actual_zero`, or claim a review date/source count that is not present in validated records.

## Rollback

Before a future apply, save the export artifact outside the deployment build output and record its checksum in the release checkpoint. To roll back, delete only documents belonging to the exact failed `dataRelease`, restore the pre-apply export if that release replaced records, restore the prior evidence manifest, rebuild, and rerun the evidence audit plus profile tests. Never delete evidence using an unbounded animal or collection-wide filter.

The current foundation needs no data rollback because it performs no database or catalogue writes. Reverting its application commit removes the schema, audit, and disclosure code while leaving legacy data untouched.
