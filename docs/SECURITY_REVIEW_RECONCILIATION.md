# Historical backend review reconciliation

Reviewed against current `main` after release 2.15.0. `L#` refers to the library finding and `A#` to the API/cross-cutting finding numbered in [`REVIEW.md`](../REVIEW.md). The old line numbers and prose describe an earlier implementation, so status is based on current behavior and tests rather than the old wording.

Status meanings:

- **resolved** — current code removes or safely supersedes the reported defect.
- **accepted** — current behavior is intentional and the reported condition is not a current defect.
- **transferred** — real non-P0 product/data work is explicitly owned by a later milestone; it is not silently dismissed.

## Library findings

| Findings | Status | Current evidence / disposition |
| --- | --- | --- |
| L1, L2 | resolved | `JWT_SECRET` is mandatory and never exported. Callers receive restricted verify/extract/authorize helpers plus the signing function, not secret material; sensitive-export tests enforce this boundary. |
| L3 | accepted | Token verification deliberately fails closed to `null`; public callers receive stable authentication errors without learning signature/expiry internals. |
| L4, L5 | resolved | The cached Mongo connection is reused only at ready state 1, stale cache state is cleared, rejected connection promises are reset, and cold starts no longer log successful connections. |
| L6 | resolved | Discord delivery is persisted, leased, rate-aware, retried with bounded delays, and sanitizes stored/logged delivery errors. |
| L7 | accepted | Emoji constant style has no correctness, security, accessibility, or runtime effect. |
| L8 | resolved | Shared progression output reports 100% at the level cap; leaderboard output now uses the same shared XP curve and explicit cap semantics. |
| L9 | transferred | Level-cap overflow semantics are product economy work owned by M10; current code intentionally clamps the display state and does not award unverified client XP. |
| L10, L11, L13, L24, L28, L33 | resolved | Regex escaping, redundant unique indexes, atomic visit behavior, defensive password comparison, and single-query vote aggregation are present or superseded by newer atomic stores. |
| L12, L14 | accepted | The 225-record roster is write-infrequent; current ranking reads do not database-sort by `battleRating`. Index changes require measured query evidence and belong to M07/M13 performance work. |
| L15, L30 | resolved | Duplicate explicit `createdAt` definitions were removed; Mongoose timestamps remain authoritative. |
| L16 | accepted | Default exclusion of deleted chat is a privacy-safe public-query invariant. M09 moderation history must add an explicit privileged path rather than weakening the default model behavior. |
| L17, L20, L29 | transferred | Embedded voter/history arrays remain a documented scale boundary. M09 owns normalized community ballot storage; M10 owns account-history migration. Current public mutations are bounded, atomic and never export voter arrays. |
| L18 | resolved | Comment vote mutations use one aggregation-pipeline update that changes both arrays and derives `voteScore` atomically. |
| L19 | resolved | API validation rejects blank/typed-invalid content and both comment/chat schemas now require at least one character after trimming. |
| L21 | accepted | No current query searches embedded rank history by animal name; M07 will design measured history queries and indexes together. |
| L22 | accepted | One bounded snapshot per date is intentional historical evidence for rank/changelog work; silent TTL deletion would conflict with M12 trust requirements. |
| L23 | resolved | Rank history has one unique date index rather than duplicate field/index declarations. |
| L25, L26, L27 | accepted | The flagged `SiteStats.recordVisit` path is unused. Live visit counting uses a distributed hashed visitor identity and aggregate counter; detailed analytics use `SiteActivity` with private/public serializers. The legacy static is retained only for schema compatibility and is not an API path. |
| L31 | resolved | Password policy is consistently at least eight characters in the API and model. |
| L32 | resolved | Successful username changes prune history to the active seven-day policy window before appending, preventing lifetime growth. |
| L34 | accepted | The individual animal index remains the leftmost access path for daily-vote queries; index removal requires production query/index evidence, not speculation. |
| L35 | resolved | Daily vote and XP claim keys are server-derived UTC dates; client timezone no longer selects the reward day. |

## API and cross-cutting findings

| Findings | Status | Current evidence / disposition |
| --- | --- | --- |
| A1, A2, A5, A12, A43, A45, A47, A48, A49, A50, A52, A53, A60 | resolved | Shared typed input helpers escape regex text, bound pagination/ranges, allowlist sorts, validate IDs/types, and reject malformed requests before database access. Signup now validates credential types and email syntax before account lookup. |
| A3, A8, A9 | resolved | Animal create/update/delete require an authorized admin and updates use an explicit field allowlist. |
| A4, A6, A42 | resolved | Total-stat sort direction is correct, unused diet input is explicitly ignored rather than treated as a filter, and rankings read `special_attack`. M04/M07 own any future diet taxonomy/filter contract. |
| A7, A35 | resolved | Notifications are non-critical side effects backed by durable retry state, bounded retry timing and sanitized failure logging. Vote traffic is rate limited. |
| A10, A11, A17, A57 | resolved | Shared escaped lookup and mandatory algorithm-restricted JWT handling replace the old implementations; authenticated user payloads share progression fields. |
| A13 | resolved | Direct/custom reward POSTs return 410; rewards require server-owned action claims with unique source keys. |
| A14, A59 | resolved | Handlers return after terminal errors; production 5xx bodies are generic. Development-only messages remain deliberately gated. |
| A15 | accepted | Some handlers perform explicit authentication parsing, while security-sensitive mutations use shared `getAuthUser`/`authorizeRequest`; all paths use the same restricted verifier and malformed tokens fail closed. Consolidation is cleanup, not an unresolved bypass. |
| A16 | resolved | Signup validates string types, length-constrained password policy, moderated username and bounded email syntax before user lookup/write; the model remains a second validation layer. |
| A18, A19, A22, A23 | resolved | Ranked battle/tournament mutations require expiring server-issued sessions, sequential idempotent match indexes and transaction-gated completion; ELO and placements commit only for a complete bracket. |
| A20, A21, A24 | resolved | Matchup votes require authentication, distributed budgets and unique per-user/day ballots; aggregate updates are atomic and models live under `lib/models`. |
| A25, A26, A27, A30 | resolved | Deleted/hidden content is excluded, public output is whitelist-serialized plaintext, and nested replies are traversed without leaking account/voter IDs. |
| A28, A31, A32, A33 | resolved | Owner checks tolerate legacy missing authors, comment/chat moderation uses owner/admin/mod authorization, and voting uses shared atomic helpers without shadowed mutation logic. |
| A29, A36, A41, A56 | resolved | Mongo-backed distributed budgets cover community posting/voting, visits, fight analytics, tournaments, auth and lifecycle telemetry. Comparison writes require auth, canonical animals and one accepted action per window. |
| A34 | accepted | Comment deletion intentionally removes the complete reply subtree for user privacy; chat soft deletion supports its different moderation surface. M09 owns a unified report/retention policy. |
| A37 | transferred | Presence remains best-effort and process-local, returns no account IDs, and is not used as an authoritative count. Distributed presence/pagination/notification design belongs to M09. |
| A38, A39 | resolved | Leaderboard progression imports the shared XP curve, avoids divide-by-infinity, and reports explicit level-cap completion. |
| A40 | resolved | The dispatcher enforces GET for leaderboard/presence and explicit methods for every other action. |
| A44 | transferred | Rank snapshot persistence is idempotent per date but remains best-effort on public reads. M07/M12 own a scheduled, observable ranking-history pipeline. |
| A46 | resolved | Empty random results use an explicit safe response contract after bounded canonical filtering. |
| A51 | accepted | Read-only statistics use generic production errors; cache policy is a measured M13 performance decision. |
| A54 | accepted | Historical trailing whitespace has no runtime or product effect and current lint/diff checks pass. |
| A55 | resolved | CORS reflects only configured trusted origins; cookie-authenticated unsafe requests require an allowed Origin, while public reads and explicit Bearer clients follow explicit policies. |
| A58 | resolved | All 12 serverless entrypoints enforce route-specific application body budgets before database/business work, behind the hosting platform's fixed request ceiling. |

## M01 closure boundary

All historical critical/high security, authorization, injection, brute-force, replay, privacy-export and production-error findings are resolved in current code and covered by the M01 test/release gates. Transferred items are not security exceptions: they are schema/product architecture work with explicit owners (M07, M09, M10, M12 or M13), and current behavior is bounded or non-authoritative until those milestones ship.

No production data migration is required for the M01 closure fixes. Future normalization of embedded vote arrays must include a fixture dry run, compatibility window and rollback as required by M09/M10.
