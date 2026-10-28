<script>
import Runbook from './lib/layouts/runbook.svelte';
let { page }=$props();
const Content=$derived(page.default);
</script>
<Runbook {...page.metadata}><Content /></Runbook>
