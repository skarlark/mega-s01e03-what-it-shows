import {render} from 'svelte/server';
import Wrapper from './RenderPage.svelte';
import * as page from './routes/kb/decisions/0002-dedupe-by-evidence/+page.svx';
export function renderPage(){return render(Wrapper,{props:{page}})}
