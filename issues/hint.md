# booking-v3 shows MM/DD/YYYY while parsing day first — 33 reports

## Problem
On day-first tenants, booking-v3 prints MM/DD/YYYY but interprets the input using tenant order. People following the hint get swapped dates. This requires correcting the form hint to match the tenant input contract.

## Coverage
33 unique reports from #4471, across 3 tenants, 2026-04-17 to 2026-09-22. Export dated 2026-10-04. Count IDs once, not export rows. Browser locale, intake tags and subject are not reliable cause labels.

## Reproduction and expected behavior
Use the form channel on alder.physio (de-DE, booking-v3), copper.studio (es-ES, booking-v3) or pale.harbour (pt-PT, booking-v3). Follow MM/DD/YYYY to enter April 7 as 04/07/2026. Expected: 7 April. Tenant day-first interpretation yields 4 July. Check the report evidence below and verify actual UI before releasing a fix.

## Fix and acceptance
Align hint, validation and parsing with the same tenant date contract. Validate booking-v3 for all three affected locales and confirm app/email behavior separately.

## Source evidence
`src/lib/kb/causes.ts`, `src/lib/kb/locales.ts`, tenant files, and `src/lib/data/reports-4471.json`.

- R-41230 (copper.studio, form): My client came on 1 June instead of 6 January. We sorted it out.
- R-41241 (alder.physio, form): We had two people show up on 8 June. They were booked for 6 August.
- R-41251 (pale.harbour, form): Wednesday 7 January showed as Wednesday 1 July. I moved it myself.
- R-41259 (copper.studio, form): Customer booked 11 April and got an invite for 4 November. Please look at this.

## Report IDs
R-41230, R-41241, R-41251, R-41259, R-41262, R-41275, R-41294, R-41305, R-41308, R-41366, R-41372, R-41384, R-41387, R-41396, R-41400, R-41406, R-41415, R-41416, R-41418, R-41428, R-41439, R-41441, R-41449, R-41453, R-41456, R-41460, R-41472, R-41485, R-41493, R-41539, R-41572, R-41582, R-41584

## Knowledge base
[Signed review and proposed triage decision](https://github.com/skarlark/mega-s01e03-what-it-shows/blob/main/src/routes/kb/decisions/0002-dedupe-by-evidence/+page.svx) · [Rendered desk page](https://github.com/skarlark/mega-s01e03-what-it-shows/blob/main/rendered/0002-dedupe-by-evidence.html).
