const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const { JSDOM } = require('jsdom');

test('seletor salva idioma e traduz interface e atualizações', async () => {
  const dom = new JSDOM(`<div class="language-control"><button id="language-toggle"></button><div id="language-menu" hidden><button data-lang="pt-BR">Brasil</button><button data-lang="en-US">USA</button><button data-lang="es-ES">España</button></div></div><button id="category">Novos</button><div id="dynamic"></div>`, { url:'https://example.com/', runScripts:'outside-only' });
  const w = dom.window, d = w.document;
  try {
    w.eval(fs.readFileSync('assets/language.js', 'utf8'));
    d.querySelector('#language-toggle').click();
    assert.equal(d.querySelector('#language-menu').hidden, false);
    d.querySelector('[data-lang="en-US"]').click();
    assert.equal(d.documentElement.lang, 'en-US');
    assert.equal(d.querySelector('#category').textContent, 'New');
    assert.equal(w.localStorage.getItem('links-language'), 'en-US');
    d.querySelector('#dynamic').textContent = 'Copiar';
    await new Promise(resolve => w.setTimeout(resolve, 0));
    assert.equal(d.querySelector('#dynamic').textContent, 'Copy');
    d.querySelector('[data-lang="es-ES"]').click();
    assert.equal(d.querySelector('#category').textContent, 'Nuevos');
    d.querySelector('[data-lang="pt-BR"]').click();
    assert.equal(d.querySelector('#category').textContent, 'Novos');
    assert.equal(d.querySelector('#dynamic').textContent, 'Copiar');
  } finally { w.close(); }
});

test('endereços verificados sem data não incluem endereço DNS inválido', () => {
  const code = fs.readFileSync('assets/links.js', 'utf8');
  const data = vm.runInNewContext(code + `\n({groups: LINK_GROUPS, dates: LINK_DATES})`);
  const vale = data.groups.find(g => g.name === 'Vale');
  assert.match(vale.links, /vale5\.tbt\.mx/);
  assert.equal(data.dates.has('http://vale5.tbt.mx/'), false);
  assert.equal(data.groups.some(g => g.links.includes('study.repich.org')), false);
});

test('seletor está visível no HTML real e permite escolher uma bandeira', () => {
  const html = fs.readFileSync('index.html', 'utf8');
  const dom = new JSDOM(html, { url:'https://example.com/', runScripts:'outside-only' });
  const w = dom.window, d = w.document;
  try {
    assert.equal(d.querySelector('#language-menu').hidden, false);
    assert.match(html, /assets\/language\.js/);
    w.eval(fs.readFileSync('assets/language.js', 'utf8'));
    d.querySelector('[data-lang="en-US"]').click();
    assert.equal(d.documentElement.lang, 'en-US');
    assert.equal(d.querySelector('#language-menu').hidden, true);
    assert.equal(d.querySelector('[data-study-tab="home"]').textContent, 'Home');
    d.querySelector('#language-toggle').click();
    assert.equal(d.querySelector('#language-menu').hidden, false);
  } finally { w.close(); }
});
