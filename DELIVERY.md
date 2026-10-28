# S01E03 — what it shows

Review of the support knowledge base export dated 2026-10-04.

## Deliverables

- `issues/parser.md`: shared parser, 374 distinct reports.
- `issues/hint.md`: booking-v3 hint, 33 distinct reports.
- `issues/timing.md`: timing anomalies, 5 distinct reports, cause unconfirmed.
- `src/routes/kb/decisions/0002-dedupe-by-evidence/+page.svx`: signed proposed replacement for subject-only triage.
- `rendered/0002-dedupe-by-evidence.html`: standalone page rendered by Svelte, including computed tables, chart, comparison cases and desk ref.
- `analysis.json`: original classifier groups and report IDs; the new review separates the five desk-noted anomalies from its parser group.

427 export rows → 412 unique report IDs → 374 + 33 + 5. The classifier's original split is 379 + 33, and intake tags misclassify 38 reports. Counts describe the export, not the live queue. No production fixes or desk adoption are claimed.

## Run locally

Use Node.js 22.18 or newer.

```
npm ci
npm run analyze
npm run render
npm run dev
```

Open `/kb/decisions/0002-dedupe-by-evidence` in the local server. The static HTML is also readable directly without a server. Source components and tenant data are preserved. The existing accepted decision is unchanged. The new page has frontmatter signature `skarlark / Codex / S01E03 / 2026-10-28`; RenderStamp computes `DR-02AR-ZGBD` from that signature.

## Publication scope

Proposed destination: public GitHub repository `skarlark/mega-s01e03-what-it-shows`. Create the three issues in parser, hint, timing order so the page links resolve to issues 1, 2, 3. Only this folder's knowledge base, build configuration, analysis, issue drafts and rendered output should be published. Parent challenge logs and account data are excluded. Course acceptance is still pending.
