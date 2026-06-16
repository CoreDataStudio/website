import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const indexPath = join(root, 'index.html');
const html = readFileSync(indexPath, 'utf8');

if (!html.includes('src="/index.tsx"')) {
  writeFileSync(
    indexPath,
    html.replace(/src="\.\/assets\/[^"]+"/, 'src="/index.tsx"')
  );
  console.log('Restored /index.tsx entry for local development.');
}
