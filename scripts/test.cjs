// Isola os testes para que os DOMs grandes do jsdom sejam liberados entre eles.
const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');
const directory = path.join(__dirname, '..', 'tests');
for (const file of fs.readdirSync(directory).filter(name => name.endsWith('.test.cjs'))) {
  const testFile = path.join(directory, file);
  const source = fs.readFileSync(testFile, 'utf8');
  const names = [...source.matchAll(/^test\('([^']+)'/gm)].map(match => match[1]);
  for (const name of names) {
    const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const result = spawnSync(process.execPath, ['--test', '--test-name-pattern', `^${escaped}$`, testFile], { stdio: 'inherit' });
    if (result.status !== 0) process.exit(result.status || 1);
  }
}
