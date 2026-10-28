# Wrong date format hint on booking-v3 forms for day-first tenants — 33 reports

## Problem
booking-v3 displays MM/DD/YYYY to people whose tenant uses day-first input. The field interprets entered values using tenant day-first order, so following the displayed hint produces a swapped date.

## Coverage
33 unique report IDs merged into #4471, 3 tenants, 2026-04-17 to 2026-09-22. The export snapshot is 2026-10-04; overlapping rows count only once.

## Reproduction
At alder.physio (de-DE), copper.studio (es-ES), or pale.harbour (pt-PT), follow the MM/DD/YYYY hint and enter April 7 as 04/07/2026. The field reads this as 4 July. The displayed instruction and the accepted input order must agree.

## Fix and acceptance
Correct the date-field hint to match the tenant input contract, and verify the hint, validation and resulting booking on all three tenants. Check the intended date survives into the invite.

## Representative evidence
- R-41230 (copper.studio, form): My client came on 1 June instead of 6 January. We sorted it out.
- R-41241 (alder.physio, form): We had two people show up on 8 June. They were booked for 6 August.
- R-41251 (pale.harbour, form): Wednesday 7 January showed as Wednesday 1 July. I moved it myself.

## Report IDs
R-41230, R-41241, R-41251, R-41259, R-41262, R-41275, R-41294, R-41305, R-41308, R-41366, R-41372, R-41384, R-41387, R-41396, R-41400, R-41406, R-41415, R-41416, R-41418, R-41428, R-41439, R-41441, R-41449, R-41453, R-41456, R-41460, R-41472, R-41485, R-41493, R-41539, R-41572, R-41582, R-41584

## Sources
Original report export, tenant directory, and src/lib/kb/causes.ts. Tenant locale and actual input path take precedence over intake tags and browser locale.

[Signed knowledge base page](https://github.com/skarlark/mega-s01e03-what-it-shows/blob/main/src/routes/kb/decisions/0002-dedupe-by-evidence/+page.svx) · [Rendered page](https://github.com/skarlark/mega-s01e03-what-it-shows/blob/main/rendered/0002-dedupe-by-evidence.html).
