const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const { JSDOM } = require('jsdom');
function calculator() {
  const dom = new JSDOM(fs.readFileSync('index.html','utf8'), {url:'https://example.com/',runScripts:'outside-only'});
  const w = dom.window, d = w.document;
  w.eval(fs.readFileSync('assets/calculator.js','utf8'));
  let openings = 0; d.addEventListener('open-links', () => openings++);
  return {w,d,close:()=>w.close(), press:key=>d.querySelector(`[data-calc="${key}"]`).click(), value:()=>d.querySelector('#calculator-display').value, mode:()=>{const toggle=d.querySelector('#calculator-difficult');toggle.click();}, openings:()=>openings};
}
test('calculadora padrão calcula e não abre links com 6700', () => {
 const c=calculator(); try {
  ['2','+','3','*','4','='].forEach(c.press); assert.equal(c.value(),'14');
  c.press('clear'); ['6','7','0','0','='].forEach(c.press); assert.equal(c.value(),'6700'); assert.equal(c.openings(),0);
  c.press('clear'); ['1','/','0','='].forEach(c.press); assert.match(c.d.querySelector('#calculator-status').textContent,/inválida/);
 } finally {c.close();}
});
test('modo Difficult oferece funções e senha exata sem acionar resultados', () => {
 const c=calculator(); try {
  c.mode(); assert.equal(c.d.querySelector('#calculator-scientific').hidden,false);
  ['9','sqrt','='].forEach(c.press); assert.equal(c.value(),'3');
  ['clear','5','square','='].forEach(c.press); assert.equal(c.value(),'25');
  ['clear','2','^','3','='].forEach(c.press); assert.equal(c.value(),'8');
  ['clear','3','factorial'].forEach(c.press); assert.equal(c.value(),'6');
  ['clear','3','0','sin','='].forEach(c.press); assert.equal(c.value(),'0.5');
  ['clear','6','7','0','1','-','1','=','='].forEach(c.press); assert.equal(c.openings(),0);
  ['clear','6','7','0','0','='].forEach(c.press); assert.equal(c.openings(),1);
  c.mode(); assert.equal(c.d.querySelector('#calculator-scientific').hidden,true); assert.equal(c.value(),'0');
 } finally {c.close();}
});
test('teclado da calculadora respeita os modos', () => {
 const c=calculator(); try {
  const display=c.d.querySelector('#calculator-display');
  for(const key of ['1','2','+','8','Enter']) display.dispatchEvent(new c.w.KeyboardEvent('keydown',{key,bubbles:true,cancelable:true}));
  assert.equal(c.value(),'20');
  c.mode(); for(const key of ['6','7','0','0','Enter']) display.dispatchEvent(new c.w.KeyboardEvent('keydown',{key,bubbles:true,cancelable:true}));
  assert.equal(c.openings(),1);
 } finally {c.close();}
});
