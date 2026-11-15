#!/usr/bin/env node
// Sugere uma coleção, mas nunca grava sem confirmação explícita.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const readline = require('node:readline/promises');
const { stdin, stdout } = require('node:process');

const file = path.join(__dirname, '..', 'assets', 'links.js');
const [rawUrl, ...themeWords] = process.argv.slice(2);
if (!rawUrl) {
  console.error('Uso: node scripts/adicionar-link.cjs <url> [nome ou tema]');
  process.exit(1);
}
let url;
try {
  url = new URL(/^https?:\/\//i.test(rawUrl) ? rawUrl : `https://${rawUrl}`);
  if (!['http:', 'https:'].includes(url.protocol) || url.username || url.password) throw new Error();
} catch {
  console.error('Informe um endereço HTTP(S) válido, sem credenciais.');
  process.exit(1);
}
const source = fs.readFileSync(file, 'utf8');
const groups = vm.runInNewContext(`${source}\nLINK_GROUPS`, Object.create(null), { timeout: 1000 });
const normalize = value => value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]/g, '');
const theme = themeWords.join(' ').trim();
const normalizedTheme = normalize(theme);
const aliases = { 'therook': 'rook', 'gnmathv20': 'gnmathv2', 'studyhub': 'studyhub', 'frogies': 'frogiesarcade' };
const canonical = value => aliases[normalize(value)] || normalize(value).replace(/^the/, '');
const host = url.hostname.toLowerCase();
const candidates = groups.map(group => {
  const groupName = canonical(group.name);
  let score = 0;
  if (normalizedTheme && canonical(theme) === groupName) score = 100;
  else if (normalizedTheme.length > 3 && groupName.length > 3 && (canonical(theme).includes(groupName) || groupName.includes(canonical(theme)))) score = 75;
  const hosts = group.links.split('\n').map(line => {
    try { return new URL(/^https?:\/\//i.test(line) ? line : `https://${line}`).hostname.toLowerCase(); } catch { return ''; }
  });
  if (hosts.includes(host)) score = Math.max(score, 45);
  if (groupName.length >= 4 && normalize(host).includes(groupName)) score = Math.max(score, 65);
  return { group, score };
}).filter(item => item.score).sort((a, b) => b.score - a.score);
const uniqueBest = candidates.length && (candidates.length === 1 || candidates[0].score > candidates[1].score);
const proposed = uniqueBest ? candidates[0].group : null;
const inferred = theme || url.hostname.split('.')[0];
const same = (a, b) => { try { return new URL(/^https?:\/\//i.test(a) ? a : `https://${a}`).href === b.href; } catch { return false; } };
const existing = groups.find(g => g.links.split('\n').some(link => same(link, url)));
if (existing) { console.log(`Este endereço já existe na coleção “${existing.name}”. Nenhuma alteração foi feita.`); process.exit(0); }
if (!stdin.isTTY) { console.error('A confirmação exige um terminal interativo; nenhum arquivo foi alterado.'); process.exit(1); }
(async () => {
  const rl = readline.createInterface({ input: stdin, output: stdout });
  try {
    if (!proposed && candidates.length) console.log(`Há mais de uma coleção possível: ${candidates.filter(c => c.score === candidates[0].score).map(c => c.group.name).join(', ')}. Informe um tema mais específico para evitar duplicatas.`);
    if (!proposed && candidates.length) return;
    if (proposed) console.log(`Coleção sugerida: “${proposed.name}” (${proposed.category}).`);
    else console.log(`Nova coleção sugerida: “${inferred}” (categoria Mais links).`);
    const answer = (await rl.question('Confirmar a inclusão? [s/N] ')).trim().toLowerCase();
    if (!['s', 'sim'].includes(answer)) { console.log('Cancelado. Nenhuma alteração foi feita.'); return; }
    // Rejeita alteração concorrente em vez de sobrescrevê-la.
    if (fs.readFileSync(file, 'utf8') !== source) throw new Error('O arquivo mudou durante a confirmação. Execute novamente.');
    const entry = proposed
      ? `\nLINK_GROUPS.find(g => g.name === ${JSON.stringify(proposed.name)} && g.category === ${JSON.stringify(proposed.category)}).links += ${JSON.stringify('\n' + url.href)};\n`
      : `\nLINK_GROUPS.push(${JSON.stringify({ category: 'Mais links', name: inferred, links: url.href })});\n`;
    fs.appendFileSync(file, entry);
    console.log(`Adicionado à coleção “${proposed ? proposed.name : inferred}”.`);
  } finally { rl.close(); }
})().catch(error => { console.error(error.message); process.exitCode = 1; });
