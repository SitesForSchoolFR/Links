const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const { spawnSync } = require('node:child_process');
const { JSDOM, VirtualConsole } = require('jsdom');

const root = path.resolve(__dirname, '..');
const load = name => fs.readFileSync(path.join(root, name), 'utf8');
const scripts = ['links', 'study-extra', 'study', 'themes', 'app'].map(name => load(`assets/${name}.js`)).join('\n');
function site(initial = {}) {
  const errors = [];
  const virtualConsole = new VirtualConsole();
  virtualConsole.on('jsdomError', error => errors.push(error.message));
  const dom = new JSDOM(load('index.html'), { url: 'https://sitesforschoolfr.github.io/Links/?test=1#test', runScripts: 'outside-only', pretendToBeVisual: true, virtualConsole });
  const { window } = dom;
  window.matchMedia = query => ({ matches: query === '(pointer: fine)' });
  window.scrollTo = () => {};
  window.HTMLElement.prototype.scrollIntoView = () => {};
  window.confirm = () => true;
  for (const [key, value] of Object.entries(initial)) window.localStorage.setItem(key, value);
  window.eval(scripts);
  return { dom, window, document: window.document, errors };
}
function submit(window, value) {
  const input = window.document.querySelector('#study-search-input');
  input.value = value;
  window.document.querySelector('#study-search-form').dispatchEvent(new window.Event('submit', { bubbles: true, cancelable: true }));
}

test('estudos, quiz, notas, progresso e cronômetro', () => {
  const { dom, window: w, document: d, errors } = site();
  try {
    assert.equal(w.location.href, 'https://sitesforschoolfr.github.io/Links/');
    assert.equal(d.querySelector('#study-home').hidden, false);
    assert.equal(d.querySelector('#links-site').hidden, true);
    assert.equal(d.querySelectorAll('#grade option').length, 12);
    assert.match(d.querySelector('#progress-label').textContent, /150/);
    d.querySelector('[data-subject-go="science"]').click();
    assert.equal(d.querySelectorAll('.question').length, 9);
    d.querySelectorAll('.question')[0].querySelectorAll('.answer-options button')[1].click();
    assert.match(d.querySelector('#quiz-count').textContent, /1 de 9/);
    assert.equal(d.querySelector('#progress-total').textContent, '1');
    assert.equal(d.querySelector('.progress-bar').getAttribute('aria-valuenow'), '1');
    d.querySelector('.explanation-toggle').click();
    assert.equal(d.querySelector('.explanation-text').hidden, false);
    d.querySelector('#quiz-shuffle').click();
    assert.equal(d.querySelectorAll('.question').length, 9);
    d.querySelector('#quiz-reset').click();
    assert.match(d.querySelector('#quiz-count').textContent, /0 de 9/);
    d.querySelector('[data-study-tab="home"]').click();
    d.querySelector('#study-notes').value = 'Revisar frações';
    d.querySelector('#study-notes').dispatchEvent(new w.Event('input'));
    assert.equal(w.localStorage.getItem('study-notes-v1'), 'Revisar frações');
    d.querySelector('#timer-duration').value = '5';
    d.querySelector('#timer-duration').dispatchEvent(new w.Event('change'));
    assert.equal(d.querySelector('#timer-display').textContent, '05:00');
    d.querySelector('#timer-toggle').click();
    assert.equal(d.querySelector('#timer-toggle').textContent, 'Pausar');
    d.querySelector('#timer-toggle').click();
    assert.equal(d.querySelector('#timer-status').textContent, 'Pausado.');
    d.querySelector('#timer-reset').click();
    assert.equal(d.querySelector('#timer-display').textContent, '05:00');
    assert.deepEqual(errors, []);
  } finally { dom.window.close(); }
});

test('pesquisa e acesso exato ao modo de links', () => {
  const { dom, window: w, document: d } = site();
  try {
    d.querySelector('[data-study-tab="search"]').click();
    submit(w, 'frações');
    assert.ok(d.querySelectorAll('.study-result').length > 0);
    d.querySelector('.study-result').click();
    assert.equal(d.querySelector('#study-practice').hidden, false);
    d.querySelector('[data-study-tab="search"]').click();
    submit(w, 'obrigado, ryan');
    assert.equal(d.querySelector('#links-site').hidden, true);
    submit(w, 'Obrigado, Ryan ');
    assert.equal(d.querySelector('#links-site').hidden, true);
    submit(w, 'Obrigado, Ryan');
    assert.equal(d.querySelector('#links-site').hidden, false);
    assert.equal(d.querySelector('#study-search-input').value, '');
    w.dispatchEvent(new w.PageTransitionEvent('pageshow', { persisted: true }));
    assert.equal(d.querySelector('#study').hidden, false);
  } finally { dom.window.close(); }
});

test('ao remover favoritos, mantém cartões abertos e foco de teclado', () => {
  const { dom, window: w, document: d } = site();
  try {
    submit(w, 'Obrigado, Ryan');
    d.querySelector('.card summary').click();
    const buttons = d.querySelectorAll('.card:first-child .favorite');
    buttons[0].click(); buttons[1].click();
    const filter = [...d.querySelectorAll('#filters button')].find(button => button.textContent === 'Favoritos');
    filter.click();
    const details = d.querySelector('#grid details');
    assert.equal(details.open, true);
    const first = d.querySelector('#grid .favorite');
    first.focus(); first.click();
    assert.equal(d.querySelector('#grid details').open, true);
    assert.equal(d.activeElement, d.querySelector('#grid .favorite'));
    d.activeElement.click();
    assert.equal(d.activeElement, filter);
    assert.equal(d.querySelector('#empty').hidden, false);
  } finally { dom.window.close(); }
});

test('todas as opções de tema apontam para imagens existentes', () => {
  const { dom, document: d } = site({ 'links-theme-v1': 'void' });
  try {
    assert.equal(d.querySelector('#links-site').dataset.theme, 'midnight');
    const css = load('assets/style.css');
    const images = [...css.matchAll(/data-art="(\d\d)"\] \.hero\{--theme-image:url\("([^"]+)"\)/g)];
    assert.equal(images.length, 10);
    for (const [, , image] of images) assert.ok(fs.existsSync(path.join(root, 'assets', image)), image);
  } finally { dom.window.close(); }
});

test('todos os links têm URL HTTP(S) válida e questões têm alternativas válidas', () => {
  const groups = vm.runInNewContext(load('assets/links.js') + '\nLINK_GROUPS');
  for (const group of groups) for (const line of group.links.split('\n').map(s => s.trim()).filter(Boolean)) {
    const url = new URL(/^https?:\/\//i.test(line) ? line : `https://${line}`);
    assert.ok(['http:', 'https:'].includes(url.protocol));
    assert.ok(url.hostname.includes('.'));
    assert.equal(url.username, ''); assert.equal(url.password, '');
    assert.doesNotMatch(line, /\s|\\/);
  }
  const extra = vm.runInNewContext(load('assets/study-extra.js') + '\nextraStudyQuestions');
  for (const [subject, questions] of Object.entries(extra)) {
    const entries = subject === 'math' ? Object.values(questions).flat() : questions.flat();
    for (const [question, answers, correct, explanation] of entries) {
      assert.ok(question && explanation);
      assert.equal(answers.length, 4);
      assert.equal(new Set(answers).size, 4);
      assert.ok(Number.isInteger(correct) && correct >= 0 && correct < answers.length);
    }
  }
});

test('inclusão de links recusa protocolos inválidos e credenciais', () => {
  for (const url of ['ftp://example.com/path', 'javascript:alert(1)', 'https://user:pass@example.com/', 'https://exa mple.com']) {
    const result = spawnSync(process.execPath, ['scripts/adicionar-link.cjs', url], { cwd: root, encoding: 'utf8' });
    assert.equal(result.status, 1, url);
    assert.match(result.stderr, /HTTP\(S\) válido/);
  }
});

test('quizzes oferecem questões em todos os anos e matérias', () => {
  const { dom, window: w, document: d } = site();
  try {
    const grade = d.querySelector('#grade');
    const subject = d.querySelector('#subject');
    for (const gradeOption of grade.options) {
      grade.value = gradeOption.value;
      grade.dispatchEvent(new w.Event('change'));
      for (const subjectOption of subject.options) {
        subject.value = subjectOption.value;
        subject.dispatchEvent(new w.Event('change'));
        const questions = d.querySelectorAll('.question');
        assert.ok(questions.length >= 8, `${grade.value}: ${subject.value}`);
        for (const question of questions) assert.equal(question.querySelectorAll('.answer-options button').length, 4);
      }
    }
  } finally { dom.window.close(); }
});

test('navega e apresenta avisos quando o armazenamento local está bloqueado', () => {
  const virtualConsole = new VirtualConsole();
  const errors = [];
  virtualConsole.on('jsdomError', error => errors.push(error.message));
  const dom = new JSDOM(load('index.html'), { url: 'https://sitesforschoolfr.github.io/Links/', runScripts: 'outside-only', pretendToBeVisual: true, virtualConsole });
  const w = dom.window, d = w.document;
  try {
    w.matchMedia = () => ({ matches: false });
    w.scrollTo = () => {};
    Object.defineProperty(w, 'localStorage', { get() { throw new Error('blocked'); } });
    w.eval(scripts);
    assert.equal(d.querySelector('#study-home').hidden, false);
    d.querySelector('#study-notes').value = 'anotação';
    d.querySelector('#study-notes').dispatchEvent(new w.Event('input'));
    assert.match(d.querySelector('#notes-status').textContent, /Não foi possível/);
    submit(w, 'Obrigado, Ryan');
    d.querySelector('.card summary').click();
    d.querySelector('.favorite').click();
    assert.match(d.querySelector('#favorite-status').textContent, /Não foi possível/);
    assert.deepEqual(errors, []);
  } finally { dom.window.close(); }
});
