#!/usr/bin/env node
// Única fonte dos endereços: o catálogo do site e a mesma seleção usada na roleta.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const root = path.join(__dirname, '..');
const code = ['assets/links.js', 'assets/unblockers.js'].map(file => fs.readFileSync(path.join(root, file), 'utf8')).join('\n');
const groups = vm.runInNewContext(`${code}\nLINK_GROUPS.filter(g => UNBLOCKER_COLLECTIONS.has(g.category + '|' + g.name))`);
if (process.argv[2] === '--list') {
  groups.forEach((group, i) => console.log(`${i + 1}\t${group.name} (${group.category})`));
} else if (process.argv[2] === '--urls') {
  const index = Number(process.argv[3]);
  if (!Number.isInteger(index) || index < 1 || index > groups.length) process.exit(1);
  const urls = [...new Set(groups[index - 1].links.split('\n').map(x => x.trim()).filter(Boolean).map(x => /^https?:\/\//i.test(x) ? x : `https://${x}`))];
  urls.forEach((url, i) => console.log(`${i + 1}\t${url}`));
} else {
  console.error('Uso: node scripts/unblockers-data.cjs --list | --urls N');
  process.exit(1);
}
