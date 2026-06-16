import { cpSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const dist = join(root, 'dist');

cpSync(join(dist, 'index.html'), join(root, 'index.html'));

rmSync(join(root, 'assets'), { recursive: true, force: true });
cpSync(join(dist, 'assets'), join(root, 'assets'), { recursive: true });

for (const file of readdirSync(dist)) {
  if (file === 'index.html' || file === 'assets') continue;
  cpSync(join(dist, file), join(root, file), { recursive: true });
}

mkdirSync(join(root, 'public'), { recursive: true });
for (const file of ['favicon.svg', 'apple-touch-icon.svg', 'privacy.html']) {
  cpSync(join(dist, file), join(root, 'public', file));
}

console.log('Synced dist/ to repo root for GitHub Pages.');
