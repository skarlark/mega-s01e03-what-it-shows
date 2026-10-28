# S01E03 — what it shows

Current proposal: one date-order incident, issue #1, covering 412 unique reports, with two implementation tasks. Issue #2 is closed as merged. Issue #3 was permanently deleted with explicit human approval; its evidence is preserved in #1.

## Deliverables

- `issues/date-order.md`: the complete incident body, report IDs and corrective tasks.
- `src/routes/kb/decisions/0002-dedupe-by-evidence/+page.svx`: signed proposed incident grouping and triage guidance.
- `rendered/0002-dedupe-by-evidence.html`: actual Svelte-rendered standalone desk page.
- `analysis.json`: original classifier results, unchanged: 379 parser and 33 hint reports.

427 export rows become 412 unique report IDs. The student requested one incident after the course repeatedly said two tickets described the same problem. Source code calls parser and hint different bugs; we retain them as separately verified corrective tasks within the incident. Five unusual timing descriptions are preserved, without asserting a third root cause. Counts are the export snapshot through 2026-10-04, not the live queue. No fix or support-desk adoption is claimed.

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
