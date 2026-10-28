# S01E03 — what it shows

Two problem tickets: #1 for the parser defect (379 unique reports), #2 for the incorrect booking-v3 form hint (33). Together they cover all 412 reports once, from 427 overlapping export rows.

The source classifier and original data are preserved. Five unusual timing descriptions remain included and footnoted in the parser ticket; no third root cause is asserted. The earlier third ticket was deleted with explicit human approval after its evidence was preserved.

The student requested a trial single-ticket grouping. The course rejected it with “That's one ticket for two problems. The desk keeps one per problem.” The current revision restores two explicit problem tickets. The course accepted these two problem tickets. Its subsequently revealed engineering update says #4471 closed on 5 October: parser fixed; hint won’t fix because booking-v3 was retired. Ticket #1 is completed, ticket #2 is not planned. Final page acceptance remains pending.

## Deliverables

- `issues/parser.md` and `issues/hint.md`: current issue bodies and report IDs.
- `src/routes/kb/decisions/0002-dedupe-by-evidence/+page.svx`: signed proposed decision.
- `rendered/0002-dedupe-by-evidence.html`: Svelte-rendered standalone desk page.
- `analysis.json`: source-classifier results.

## Reproduce locally

Use Node.js 22.18 or newer:

```
npm ci
npm run analyze
node --import tsx scripts/draft-issues.ts
npm run render
npm run dev
```

Preview `/kb/decisions/0002-dedupe-by-evidence`, or open the standalone rendered HTML. The signature is `skarlark / Codex / S01E03 / 2026-10-28`; RenderStamp computes `DR-02AR-ZGBD`. The original accepted decision and classifier code are preserved.

Course acceptance is pending. Repository: https://github.com/skarlark/mega-s01e03-what-it-shows
