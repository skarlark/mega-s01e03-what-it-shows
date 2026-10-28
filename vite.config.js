import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { fileURLToPath } from 'node:url';
export default defineConfig({plugins:[svelte({extensions:['.svelte','.svx'],preprocess:mdsvex({extensions:['.svx']})})],resolve:{alias:{'#lib':fileURLToPath(new URL('./src/lib',import.meta.url))}},build:{outDir:'dist'}});
