// Copies the lab's runtime files into www/, which Capacitor packs into the
// native app. www/ is a build output, never edited: the source stays ../
import { cpSync, rmSync, mkdirSync } from 'node:fs';

const src = new URL('../', import.meta.url);
const out = new URL('./www/', import.meta.url);
const files = ['index.html', 'manifest.webmanifest', 'lang', 'vendor', 'icons'];

rmSync(out, { recursive: true, force: true });
mkdirSync(out);
for (const f of files) cpSync(new URL(f, src), new URL(f, out), { recursive: true });
console.log('www/ built from', files.join(', '));
