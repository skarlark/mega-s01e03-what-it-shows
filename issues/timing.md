# One-day moves and invite timing anomalies hidden in #4471 — 5 reports

## Problem
Five distinct reports in desk-notes.json describe one-day moves or another timing anomaly. The tenant-based classifier labels all five parser, but the bodies do not establish a day/month swap. Keep a separate investigation ticket. A common root cause is unconfirmed; timezone conversion is a hypothesis, not a diagnosis.

## Coverage and evidence
5 unique reports, not included in the 374 parser or 33 hint reports.

- R-41202 (kettle.books, email, received 2026-04-02T10:41:00+02:00): Invite says Tuesday 12 May. Calendar says Monday 11 May. My client turned up on the Monday. We had coffee.
- R-41209 (alder.physio, app, received 2026-04-06T15:18:00+02:00): Every booking in June is one day off. Only June. Why only June.
- R-41236 (nine.lanterns, app, received 2026-04-20T11:52:00+02:00): The invite arrived before I made the booking. I would like to know how.
- R-41344 (pale.harbour, email, received 2026-06-12T09:58:00+01:00): Client in Lisbon got Tuesday. Client in Toronto got Monday. Same meeting. We held it twice.
- R-41620 (lantern.row, email, received 2026-10-04T21:49:00+02:00): Tuesday 6 October showed as Monday. I moved it myself. I have stopped reporting these but my colleague says it helps you.

## Investigation and acceptance
Obtain original invites, stored event and booking timestamps, intended local date, event and recipient timezones, booking creation time, and delivery logs. Reproduce a one-day discrepancy and the invite-before-booking case independently. Compare event instants and displayed dates in each recipient timezone, including DST boundaries. Determine whether each report has the same cause; split further if evidence differs. Do not close this ticket merely because the month-first parser is fixed. Confirm each observed symptom is explained and regression-checked.

## Knowledge base
[Signed review and proposed triage decision](https://github.com/skarlark/mega-s01e03-what-it-shows/blob/main/src/routes/kb/decisions/0002-dedupe-by-evidence/+page.svx) · [Rendered desk page](https://github.com/skarlark/mega-s01e03-what-it-shows/blob/main/rendered/0002-dedupe-by-evidence.html).
