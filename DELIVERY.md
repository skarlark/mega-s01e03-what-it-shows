# S01E03 — what it shows

Review of the support knowledge base export dated 2026-10-04.

## Deliverables

- `issues/parser.md`: shared parser, 379 distinct reports.
- `issues/hint.md`: booking-v3 hint, 33 distinct reports.
- `src/routes/kb/decisions/0002-dedupe-by-evidence/+page.svx`: signed proposed replacement for subject-only triage.
- `rendered/0002-dedupe-by-evidence.html`: standalone page rendered by Svelte, including computed tables, chart, comparison cases and desk ref.
- `analysis.json`: original classifier groups and report IDs; the five desk-noted anomalies remain in the parser group, with their symptoms preserved for investigation.

427 export rows → 412 unique report IDs → 379 + 33. The classifier's original split is 379 + 33, and intake tags misclassify 38 reports. Counts describe the export, not the live queue. No production fixes or desk adoption are claimed.

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

Proposed destination: public GitHub repository `skarlark/mega-s01e03-what-it-shows`. Issues 1 and 2 are the parser and hint problems. Issue 3 was an unnecessary symptom split. It was closed and later permanently deleted after explicit human approval; its evidence remains in issue 1. Only this folder's knowledge base, build configuration, analysis, issue drafts and rendered output should be published. Parent challenge logs and account data are excluded. Course acceptance is pending. The first submission was rejected because two tickets represented the same problem; the revised split uses the source classifier and retains unusual symptoms as notes.

## Latest verification

GitHub contains exactly two open issues: #1 (parser, 379) and #2 (hint, 33). Issue #3 no longer exists. The course still returns “Not accepted. Check your tickets against the task, then send the repo again.” with the desk hint “Two of yours are the same problem.” Both github.com-link and owner/name submissions produced that verdict. The exported causes.ts explicitly defines parser and hint as different bugs; the reason for the remaining rejection is unresolved. The challenge is not solved and no debrief has been filed.
