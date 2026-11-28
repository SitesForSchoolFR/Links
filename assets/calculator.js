// Calculadora local: expressão limitada, interpretada sem eval ou código remoto.
(() => {
  const root = document.querySelector('#calculator');
  const display = document.querySelector('#calculator-display');
  const status = document.querySelector('#calculator-status');
  const advanced = document.querySelector('#calculator-difficult');
  const scientific = document.querySelector('#calculator-scientific');
  let expression = '', resultShown = false;
  function paint() { display.value = expression || '0'; }
  function calculate(input) {
    const tokens = input.match(/(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|sqrt|sin|cos|tan|log|ln|abs|pi|[()+\-*/^]/gi);
    if (!tokens || tokens.join('').toLowerCase() !== input.toLowerCase()) throw Error('invalid');
    let pos = 0;
    function primary() {
      const token = tokens[pos++];
      if (token === '(') { const value = sum(); if (tokens[pos++] !== ')') throw Error('parenthesis'); return value; }
      if (token === 'pi') return Math.PI;
      if (['sqrt', 'sin', 'cos', 'tan', 'log', 'ln', 'abs'].includes(token)) {
        if (tokens[pos++] !== '(') throw Error('function');
        const value = sum(); if (tokens[pos++] !== ')') throw Error('parenthesis');
        const functions = {sqrt: Math.sqrt, sin: x => Math.sin(x * Math.PI / 180), cos: x => Math.cos(x * Math.PI / 180), tan: x => { if (Math.abs(Math.cos(x * Math.PI / 180)) < 1e-12) throw Error('undefined'); return Math.tan(x * Math.PI / 180); }, log: Math.log10, ln: Math.log, abs: Math.abs};
        return functions[token](value);
      }
      if (!token || !/^(?:\d|\.)/.test(token)) throw Error('number');
      return Number(token);
    }
    function power() { let value = primary(); if (tokens[pos] === '^') { pos++; value = value ** unary(); } return value; }
    function unary() { if (tokens[pos] === '+') { pos++; return unary(); } if (tokens[pos] === '-') { pos++; return -unary(); } return power(); }
    function product() { let value = unary(); while (tokens[pos] === '*' || tokens[pos] === '/') { const op = tokens[pos++], right = unary(); value = op === '*' ? value * right : value / right; } return value; }
    function sum() { let value = product(); while (tokens[pos] === '+' || tokens[pos] === '-') { const op = tokens[pos++], right = product(); value = op === '+' ? value + right : value - right; } return value; }
    const value = sum();
    if (pos !== tokens.length || !Number.isFinite(value)) throw Error('invalid');
    return Number(value.toPrecision(12)).toString();
  }
  function press(key) {
    status.textContent = '';
    if (key === 'clear') { expression = ''; resultShown = false; }
    else if (key === 'back') { expression = expression.slice(0, -1); resultShown = false; }
    else if (key === '=') {
      if (advanced.checked && expression === '6700' && !resultShown) { expression = ''; paint(); document.dispatchEvent(new Event('open-links')); return; }
      try { expression = calculate(expression || '0'); resultShown = true; }
      catch (_) { status.textContent = 'Conta inválida ou resultado indefinido.'; }
    } else if (['sqrt','sin','cos','tan','log','ln','abs','square','reciprocal','percent','sign','factorial'].includes(key)) {
      if (!expression) expression = '0';
      if (key === 'factorial') {
        try { const n = Number(calculate(expression)); if (!Number.isInteger(n) || n < 0 || n > 170) throw Error(); let f = 1; for (let i = 2; i <= n; i++) f *= i; expression = Number(f.toPrecision(12)).toString(); resultShown = true; }
        catch (_) { status.textContent = 'Fatorial exige um inteiro entre 0 e 170.'; }
      } else {
        expression = key === 'square' ? `(${expression})^2` : key === 'reciprocal' ? `1/(${expression})` : key === 'percent' ? `(${expression})/100` : key === 'sign' ? `-(${expression})` : `${key}(${expression})`;
        resultShown = false;
      }
    } else {
      if (resultShown && (/^[0-9.]$/.test(key) || key === 'pi' || key === '(')) expression = '';
      resultShown = false;
      const next = expression + key;
      if (next.length <= 200) expression = next;
      else status.textContent = 'Expressão longa demais.';
    }
    paint();
  }
  root.addEventListener('click', event => { const button = event.target.closest('button[data-calc]'); if (button && !button.closest('[hidden]')) press(button.dataset.calc); });
  advanced.addEventListener('change', () => { scientific.hidden = !advanced.checked; expression = ''; resultShown = false; status.textContent = ''; paint(); });
  root.addEventListener('keydown', event => {
    if (event.target === advanced) return;
    const keys = {'Enter':'=', '=':'=', 'Escape':'clear', 'Backspace':'back', ',':'.', '×':'*', '÷':'/'};
    const key = keys[event.key] || event.key;
    if (/^[0-9.+*/-]$/.test(key) || ['=', 'clear', 'back'].includes(key) || (advanced.checked && ['(', ')', '^'].includes(key))) { event.preventDefault(); press(key); }
  });
})();
