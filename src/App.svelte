<script>
import Runbook from './lib/layouts/runbook.svelte';
const pages=import.meta.glob('./routes/kb/**/+page.svx',{eager:true});
const route=window.location.pathname.replace(/\/$/,'') || '/kb';
const page=pages['./routes'+route+'/+page.svx'] || pages['./routes/kb/+page.svx'];
const Content=page.default;
</script>
<Runbook {...page.metadata}><Content /></Runbook>
