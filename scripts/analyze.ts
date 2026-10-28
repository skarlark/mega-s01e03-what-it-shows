import fs from 'node:fs';
import { uniqueById, groupByCause } from '../src/lib/kb/causes';
const reports=JSON.parse(fs.readFileSync('src/lib/data/reports-4471.json','utf8'));
const tenants=fs.readdirSync('src/lib/data/tenants').map(f=>JSON.parse(fs.readFileSync('src/lib/data/tenants/'+f,'utf8')));
const tenantOf=(r:any)=>tenants.find(t=>t.handle===r.tenant);
const unique=uniqueById(reports).filter(r=>r.mergedInto===4471);
const groups=groupByCause(unique,tenantOf);
const out={raw:reports.length,unique:unique.length,groups:groups.map(g=>({...g,reports:g.reports.map(r=>r.id)}))};
fs.writeFileSync('analysis.json',JSON.stringify(out,null,2)+'\n');
console.log(JSON.stringify(out,null,2));
console.log('Sample reports:', groups.map(g=>({cause:g.cause,samples:g.reports.slice(0,4)})));
const weekly=new Map();
for(const r of unique){ const d=r.mergedAt?.slice(0,10);weekly.set(d,(weekly.get(d)||0)+1); }
console.log('Merged per day:',[...weekly]);
console.log('One day move:',unique.filter(r=>['R-41202','R-41209','R-41236','R-41344','R-41620'].includes(r.id)));
