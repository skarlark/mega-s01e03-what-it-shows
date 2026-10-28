import {createServer} from 'vite';
import fs from 'node:fs';
const server=await createServer({server:{middlewareMode:true},appType:'custom'});
try{
 const {renderPage}=await server.ssrLoadModule('/src/ssr-entry.js');
 const out=renderPage();
 const css=fs.readdirSync('dist/assets').filter(f=>f.endsWith('.css')).map(f=>fs.readFileSync('dist/assets/'+f,'utf8')).join('\n');
 fs.mkdirSync('rendered',{recursive:true});
 fs.writeFileSync('rendered/0002-dedupe-by-evidence.html','<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">'+out.head+'<style>'+css+'</style></head><body>'+out.body+'</body></html>');
 console.log('Rendered desk page with Svelte SSR.');
}finally{await server.close()}
