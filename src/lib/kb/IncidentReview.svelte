<script lang="ts">
 import raw from '#lib/data/reports-4471.json';
 import notes from '#lib/data/desk-notes.json';
 import {uniqueById,groupByCause,type Report} from '#lib/kb/causes';
 import {tenantOf} from '#lib/kb/locales';
 const reports=uniqueById(raw as Report[]).filter(r=>r.mergedInto===4471);
 const anomalyIds=new Set(notes.oneDayMove);
 const anomalies=reports.filter(r=>anomalyIds.has(r.id));
 const classified=groupByCause(reports,tenantOf);
 const groups=classified;
 const mislabeled=classified.reduce((n,g)=>n+g.reports.filter(r=>r.meta.intakeTag!==g.cause).length,0);
 const incidentUrl='https://github.com/skarlark/mega-s01e03-what-it-shows/issues/1';
</script>
<p>{raw.length} exported rows become <strong>{reports.length} distinct reports</strong> after removing {raw.length-reports.length} duplicate rows by ID.</p>
<p><a href={incidentUrl}>One date-order incident</a> covers all {reports.length} reports. The implementation paths below are corrective tasks within it.</p>
<table>
 <thead><tr><th>Corrective task / source classification</th><th>Reports</th><th>Evidence and affected path</th></tr></thead>
 <tbody>
 {#each groups as g}
 <tr><td><a href={incidentUrl}>{g.cause === 'parser' ? 'Month-first shared parser' : 'Misleading booking-v3 date hint'}</a></td><td>{g.reports.length}</td><td>{g.tenants} day-first tenants; {g.firstSeen} to {g.lastSeen}. {g.cause === 'parser' ? 'App/email and booking-v2 form paths.' : 'Form channel on booking-v3 at alder.physio, copper.studio and pale.harbour.'}</td></tr>
 {/each}
 </tbody>
</table>
<p>The existing classifier counts {classified.find(g=>g.cause==='parser')?.reports.length} parser and {classified.find(g=>g.cause==='hint')?.reports.length} hint reports. Its parser count includes the {anomalies.length} reports below, read as one-day moves or timing anomalies. These remain included in the incident, with their symptoms preserved for investigation. Intake tags disagree with tenant-based cause on {mislabeled} reports; counting tags would give the wrong split.</p>
<table><thead><tr><th>Report</th><th>Reported behavior</th><th>Tenant / channel</th></tr></thead><tbody>
{#each anomalies as r}<tr><td>{r.id}</td><td>{r.body}</td><td>{r.tenant} / {r.channel}</td></tr>{/each}
</tbody></table>
