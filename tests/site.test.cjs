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
  const { dom, document: d } = site({ 'links-theme-v2': 'void' });
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

test('os novos links completos estão nas coleções confirmadas', () => {
  const groups = vm.runInNewContext(load('assets/links.js') + '\nLINK_GROUPS');
  const expected = {
    StudyHub: ['studyhub.elysiumeco.net', 'dzbjxct0c9fxq.cloudfront.net/', 'brightdesk.s3.us-east-1.amazonaws.com/index.html', 's3.amazonaws.com/brightdesk/index.html', 'brightdesk.s3.amazonaws.com/index.html'],
    Glim: ['deskloft.s3.us-east-1.amazonaws.com/index.html', 'deskloft.s3.amazonaws.com/index.html', 's3.amazonaws.com/deskloft/index.html'],
    'Tung Tung': ['tungtung.beauty', 'tungtung.top', 'tungtung.elysiumeco.net', 's3.amazonaws.com/pinepractice/index.html', 's3.us-east-1.amazonaws.com/pinepractice/index.html', 's3-external-1.amazonaws.com/pinepractice/index.html', 'pinepractice.s3.amazonaws.com/index.html'],
    Solara: ['solara.elysiumeco.net', 'quizharbor.s3.amazonaws.com/index.svg', 'quizharbor.s3.us-east-1.amazonaws.com/index.svg', 's3.amazonaws.com/quizharbor/index.svg', 's3.us-east-1.amazonaws.com/quizharbor/index.svg', 'd352b4vzc2msxr.cloudfront.net/index.svg'],
    Stroberri: ['d3ff66h1gfilcx.cloudfront.net', 'strobi.elysiumeco.net', 's3.amazonaws.com/strawberrii/index.svg', 'strawberrii.s3.amazonaws.com/index.svg', 's3.amazonaws.com/strawberrii/index.html', 'strawberrii.s3.amazonaws.com/index.html'],
    Rook: ['rook.proasist.cl', 's3.amazonaws.com/rooklearn/index.svg', 's3.us-east-1.amazonaws.com/rooklearn/index.svg', 'rooklearn.s3.amazonaws.com/index.svg', 'rooklearn.s3.us-east-1.amazonaws.com/index.svg', 'd1lm38j3y7voha.cloudfront.net/', 'd8eyjoox1mb9w.cloudfront.net/'],
    Sumi: ['sumi.elysiumeco.net', 's3.amazonaws.com/sumimath/index.html', 'sumimath.s3.amazonaws.com/index.html'],
    Onyx: ['onyx.elysiumeco.net'], Boba: ['boba.elysiumeco.net'],
    Voya: ['voya.elysiumeco.net'], Kite: ['kite.elysiumeco.net'], DogeUB: ['dogeub.elysiumeco.net'], 'Triple T HD': ['triplethd.elysiumeco.net'], Space: ['space.elysiumeco.net'], Flver: ['flver.elysiumeco.net'], Interstellar: ['interstellar.elysiumeco.net'], Aurora: ['aurora.elysiumeco.net']
  };
  const destination = value => {
    const url = new URL(/^https?:\/\//i.test(value) ? value : `https://${value}`);
    return `${url.host}${url.pathname}${url.search}${url.hash}`;
  };
  for (const [name, addresses] of Object.entries(expected)) {
    const matching = groups.filter(group => group.name === name);
    assert.equal(matching.length, 1, `coleção única: ${name}`);
    const urls = matching[0].links.split('\n').filter(Boolean).map(destination);
    for (const address of addresses) assert.ok(urls.includes(destination(address)), `${name}: ${address}`);
  }
});

test('BrowOS, Zodiac e Zaka preservam nomes e endereços fornecidos', () => {
  const groups = vm.runInNewContext(load('assets/links.js') + '\nLINK_GROUPS');
  const expected = {
    BrowOS: ['http://dqfl8ajrzillq.cloudfront.net/', 'http://browos678.s3.amazonaws.com/index.html', 'http://browos678.s3-website-us-east-1.amazonaws.com/index.html', 'http://s3.amazonaws.com/browos678/index.html', 'http://browos678.s3.amazonaws.com/index.svg', 'http://browos678.s3-website-us-east-1.amazonaws.com/index.svg', 'http://s3.amazonaws.com/browos678/index.svg', 'http://os.daylit.net/', 'http://cdn.jsdelivr.net/gh/picoskids/browos@v1.0.0/index.svg'],
    Zodiac: ['http://xju.veranda.co.id/', 'http://bqgyq.veranda.co.id/', 'http://mfci.veranda.co.id/', 'http://ysj.veranda.co.id/', 'http://zlci.corea.is/', 'http://nqoqk.corea.is/', 'http://hkjl.corea.is/', 'http://zodiac.mlr.ar/', 'http://sfmqa.mlr.ar/', 'http://rwly.mlr.ar/', 'http://dxpfv.mlr.ar/'],
    Zaka: ['http://zakasotuff.s3.us-east-2.amazonaws.com/index.html', 'http://s3.us-east-2.amazonaws.com/zakasotuff/study', 'http://zakasotuff.s3.us-east-2.amazonaws.com/index.xml', 'http://s3.us-east-2.amazonaws.com/zakasotuff/index.xml', 'http://thepawnshop.s3.us-east-2.amazonaws.com/index.html', 'http://s3.us-east-2.amazonaws.com/thepawnshop/index.html', 'http://s3.us-east-2.amazonaws.com/thepawnshop/study', 'http://thepawnshop.s3.us-east-2.amazonaws.com/index.xml', 'http://s3.us-east-2.amazonaws.com/thepawnshop/index.xml', 'http://algebrarelay.s3.us-east-2.amazonaws.com/index.html', 'http://s3.us-east-2.amazonaws.com/algebrarelay/index.html', 'http://s3.us-east-2.amazonaws.com/algebrarelay/study', 'http://algebrarelay.s3.us-east-2.amazonaws.com/index.xml', 'http://s3.us-east-2.amazonaws.com/algebrarelay/index.xml']
  };
  for (const [name, addresses] of Object.entries(expected)) {
    const matching = groups.filter(group => group.name === name);
    assert.equal(matching.length, 1, name);
    assert.deepEqual(Array.from(matching[0].links.split('\n')), addresses);
  }
});

test('novos grupos mantêm nomes literais e 2500 URLs numeradas', () => {
  const groups = vm.runInNewContext(load('assets/links.js') + '\nLINK_GROUPS');
  for (const name of ['SolaraOS', 'Strawberri', 'Steobrrii', 'TungTung', 'Rammerhead', 'Desync', 'TGLSC V5', 'Nexora', 'Other Links', 'Tung Tung Club']) {
    assert.equal(groups.filter(group => group.name === name).length, 1, name);
  }
  const urls = groups.find(group => group.name === 'Tung Tung Club').links.split('\n');
  assert.equal(urls.length, 2500);
  for (let i = 0; i < urls.length; i++) assert.equal(urls[i], `https://cdn.jsdelivr.net/gh/dxg-links/Dxglinkdrop@main/tungtunggroup.svg?creditstodxgforlinkslikethese!!${i + 1}link`);
});

test('P2P em Jogos contém as 3000 URLs da lista', () => {
  const groups = vm.runInNewContext(load('assets/links.js') + '\nLINK_GROUPS');
  const group = groups.find(item => item.name === 'P2P' && item.category === 'Jogos');
  assert.ok(group);
  const links = group.links.split('\n').filter(link => link.startsWith('https://cdn.jsdelivr.net/gh/xzvtps/index-dn372@main/'));
  assert.equal(links.length, 3000);
  assert.equal(new Set(links).size, 3000);
  for (let i = 1; i <= 100; i++) {
    const prefix = `https://cdn.jsdelivr.net/gh/xzvtps/index-dn372@main/v${String(i).padStart(4, '0')}/index.svg?`;
    assert.equal(links.filter(link => link.startsWith(prefix)).length, 30);
  }
  assert.ok(links.includes('https://cdn.jsdelivr.net/gh/xzvtps/index-dn372@main/v0100/index.svg?usp=drive_web&authuser=9810813&resourcekey=Yxo7YCSS&id=246'));
});

test('C00lKid Tech em Jogos preserva os 3459 links fornecidos', () => {
  const groups = vm.runInNewContext(load('assets/links.js') + '\nLINK_GROUPS');
  const matching = groups.filter(group => group.name === 'C00lKid Tech');
  assert.equal(matching.length, 1);
  assert.equal(matching[0].category, 'Jogos');
  const links = matching[0].links.split('\n');
  assert.equal(links.length, 3459);
  assert.equal(new Set(links).size, 3459);
  for (let i = 0; i < links.length; i++) {
    assert.equal(links[i], `https://fastly.jsdelivr.net/gh/seattleschools/media@main/batch/Linklet/hourly/20261113000117873/f6b8a5cf4254e295.svg?id=${i + 2}`);
  }
});

test('NYX em Jogos preserva as 2500 URLs na ordem fornecida', () => {
  const groups = vm.runInNewContext(load('assets/links.js') + '\nLINK_GROUPS');
  const matching = groups.filter(group => group.name === 'NYX');
  assert.equal(matching.length, 1);
  assert.equal(matching[0].category, 'Jogos');
  const origins = [
    'https://cdn.jsdelivr.net/gh/Firemon303Real/nyx-sf34n@main/',
    'https://fastly.jsdelivr.net/gh/Firemon303Real/nyx-sf34n@main/',
    'https://gcore.jsdelivr.net/gh/Firemon303Real/nyx-sf34n@main/',
    'https://testingcf.jsdelivr.net/gh/Firemon303Real/nyx-sf34n@main/',
    'https://cdn.statically.io/gh/Firemon303Real/nyx-sf34n/main/',
    'https://rawcdn.githack.com/Firemon303Real/nyx-sf34n/main/',
    'https://raw.githack.com/Firemon303Real/nyx-sf34n/main/',
    'https://raw.githubusercontent.com/Firemon303Real/nyx-sf34n/main/',
    'https://esm.sh/gh/Firemon303Real/nyx-sf34n@main/',
    'https://raw.esm.sh/gh/Firemon303Real/nyx-sf34n@main/'
  ];
  const expected = [];
  for (const dir of ['assets', 'dist', 'links', 'public', 'cdn']) {
    for (let version = 1; version <= 25; version++) {
      for (const file of ['nyx.svg', 'app.svg']) {
        for (const origin of origins) expected.push(`${origin}${dir}/v${String(version).padStart(4, '0')}/${file}`);
      }
    }
  }
  const links = matching[0].links.split('\n');
  assert.equal(links.length, 2500);
  assert.equal(new Set(links).size, 2500);
  assert.deepEqual(Array.from(links), expected);
});

test('IMPV2 em Jogos contém os 2500 links fornecidos', () => {
  const groups = vm.runInNewContext(load('assets/links.js') + '\nLINK_GROUPS');
  const matching = groups.filter(group => group.name === 'IMPV2');
  assert.equal(matching.length, 1);
  assert.equal(matching[0].category, 'Jogos');
  const urls = matching[0].links.split('\n');
  assert.equal(urls.length, 2500);
  assert.equal(new Set(urls).size, 2500);
  const bases = [
    'https://cdn.jsdelivr.net/gh/donoEla/daily-linkdrops@main/Imp%20Games.svg?',
    'https://fastly.jsdelivr.net/gh/donoEla/daily-linkdrops@main/Imp%20Games.svg?',
    'https://gcore.jsdelivr.net/gh/donoEla/daily-linkdrops@main/Imp%20Games.svg?',
    'https://testingcf.jsdelivr.net/gh/donoEla/daily-linkdrops@main/Imp%20Games.svg?',
    'https://rawcdn.githack.com/donoEla/daily-linkdrops/main/Imp%20Games.svg?',
    'https://raw.githack.com/donoEla/daily-linkdrops/main/Imp%20Games.svg?',
    'https://raw.githubusercontent.com/donoEla/daily-linkdrops/main/Imp%20Games.svg?',
    'https://esm.sh/gh/donoEla/daily-linkdrops@main/Imp%20Games.svg?raw&',
    'https://raw.esm.sh/gh/donoEla/daily-linkdrops@main/Imp%20Games.svg?',
    'https://cdn.staticdelivr.com/gh/donoEla/daily-linkdrops/main/Imp%20Games.svg?',
    'https://ghproxy.net/https://raw.githubusercontent.com/donoEla/daily-linkdrops/main/Imp%20Games.svg?'
  ];
  for (let id = 1; id <= 2500; id++) {
    const mirror = id === 1 ? 2 : id <= 10 ? 1 : Math.ceil((id - 1) / 11) + 1;
    assert.equal(urls[id - 1], `${bases[(id - 1) % 11]}id=${id}&mirror=v${mirror}`);
  }
});

test('aba Melhores mostra as coleções e os endereços informados', () => {
  const { dom, document: d } = site();
  try {
    const button = [...d.querySelectorAll('#filters button')].find(b => b.textContent === 'Melhores');
    assert.ok(button);
    button.click();
    assert.equal(button.getAttribute('aria-pressed'), 'true');
    const cards = [...d.querySelectorAll('#grid .card')];
    assert.deepEqual(cards.map(card => card.querySelector('h3').textContent), ['Bull33', 'Cherri', 'Fern', 'Xylora', 'Frogiees arcade', 'Duckmath', 'Red Exploit', 'Refract', 'Gust']);
    assert.deepEqual(cards.map(card => card.querySelectorAll('li').length), [11, 6, 6, 5, 8, 9, 5, 9, 4999]);
    assert.equal(cards[0].querySelector('a').getAttribute('href'), 'http://hcxrt.sesaech.gob.mx/');
    assert.equal(cards[7].querySelector('a').getAttribute('href'), 'https://cdn.jsdmirror.com/gh/qsnt/tinythunder46@c15440c436ad8ee3c34576f27dcb1666606da545/refract.svg');
    assert.equal(cards[8].querySelector('li:last-child a').getAttribute('href'), 'https://gcore.jsdelivr.net/gh/mayhem221-tech/gust@main/svg/site.svg?submission_id=89989977&module_item_id=8429&user_id=44192510&download=5000');
  } finally { dom.window.close(); }
});


test('Gust preserva todos os 4999 links e Truffled foi removido de Melhores', () => {
  const groups = vm.runInNewContext(load('assets/links.js') + '\nLINK_GROUPS');
  assert.equal(groups.filter(g => g.category === 'Melhores' && g.name === 'Truffled').length, 0);
  const matches = groups.filter(g => g.category === 'Melhores' && g.name === 'Gust');
  assert.equal(matches.length, 1);
  const urls = matches[0].links.split('\n');
  assert.equal(urls.length, 4999);
  for (let i = 0; i < urls.length; i++) {
    assert.equal(urls[i], `https://gcore.jsdelivr.net/gh/mayhem221-tech/gust@main/svg/site.svg?submission_id=89989977&module_item_id=8429&user_id=44192510&download=${i < 2088 ? i + 1 : i + 2}`);
  }
});

test('novos endereços ficam nas coleções correspondentes sem assumir IA', () => {
  const groups = vm.runInNewContext(load('assets/links.js') + '\nLINK_GROUPS');
  for (const [category, name, url] of [
    ['Mais links', 'Sumi', 'quillstudy.s3.amazonaws.com/index.html'],
    ['Mais links', 'Rook', 'aibabyy.s3-external-1.amazonaws.com/index.svg'],
    ['Estudos', 'Tung Tung', 'https://d39syz90mj03qm.cloudfront.net'],
    ['Mais links', 'Achroma', 'judg0kzqjeu.map.azionedge.net'],
    ['Estudos', 'Astral', 'psatprep.s3.amazonaws.com/index.html'],
    ['Mais links', 'Xylora', 'https://kick.aussieflagsandflagpoles.com.au/'],
    ['Estudos', 'Galaxy V7', 'http://wow.atlantapubliceducation.cfd/'],
    ['Mais links', 'Cherri', 'http://yean.atlantapubliceducation.cfd/'],
    ['Estudos', 'Opium', 'https://storage.googleapis.com/gclassroom/study.html']
  ]) {
    const group = groups.find(item => item.category === category && item.name === name);
    assert.ok(group && group.links.split('\n').includes(url), `${name}: ${url}`);
    assert.notEqual(group.aiVerified, true);
  }
});

test('Achroma Oracle Cloud preserva os 5000 links e aparece em IA', () => {
  const groups = vm.runInNewContext(load('assets/links.js') + '\nLINK_GROUPS');
  const group = groups.find(item => item.category === 'Mais links' && item.name === 'Achroma (Oracle Cloud)');
  assert.ok(group);
  assert.equal(group.aiConfirmed, true);
  const urls = group.links.split('\n');
  assert.equal(urls.length, 5000);
  for (let i = 0; i < urls.length; i++) {
    assert.equal(urls[i], `https://objectstorage.uk-london-1.oraclecloud.com/n/lrqakfyhovf5/b/learn-maths-7k2/o/app.html?h=ExasTMlinks${i + 1}`);
  }
  const old = groups.find(item => item.category === 'Mais links' && item.name === 'Achroma');
  assert.ok(old);
  assert.notEqual(old.aiConfirmed, true);
});

test('filtro IA mostra apenas coleções com IA confirmada', () => {
  const { dom, document: d } = site();
  try {
    const button = [...d.querySelectorAll('#filters button')].find(item => item.textContent === 'IA');
    assert.ok(button);
    button.click();
    assert.equal(button.getAttribute('aria-pressed'), 'true');
    const cards = [...d.querySelectorAll('#grid .card')];
    assert.deepEqual(cards.map(card => card.querySelector('h3').textContent), ['Achroma (Oracle Cloud)']);
    assert.equal(cards[0].querySelectorAll('li').length, 5000);
    assert.equal(cards[0].querySelector('li:last-child a').getAttribute('href'), 'https://objectstorage.uk-london-1.oraclecloud.com/n/lrqakfyhovf5/b/learn-maths-7k2/o/app.html?h=ExasTMlinks5000');
  } finally { dom.window.close(); }
});

test('seção Filmes apresenta YouShows e a frase como texto', () => {
  const { dom, document: d } = site();
  try {
    const button = [...d.querySelectorAll('#filters button')].find(item => item.textContent === 'Filmes');
    assert.ok(button);
    button.click();
    const cards = [...d.querySelectorAll('#grid .card')];
    assert.equal(cards.length, 1);
    assert.equal(cards[0].querySelector('h3').textContent, 'YouShows');
    const details = cards[0].querySelector('details');
    details.open = true;
    assert.equal(details.querySelectorAll('a').length, 1);
    assert.equal(details.querySelector('a').getAttribute('href'), 'https://youshows.org');
    const note = details.querySelector('.card-note');
    assert.equal(note.textContent, 'airport absent anger asset alter athlete brave assault amateur bullet camp awesome');
    assert.equal(note.previousElementSibling.tagName, 'UL');
    assert.equal(note.querySelector('a'), null);
  } finally { dom.window.close(); }
});

test('minimalista é padrão e Shift K A restaura Kawaii sem trocar de modo', () => {
  const { dom, window: w, document: d } = site();
  try {
    assert.equal(d.documentElement.dataset.theme, 'minimal');
    assert.equal(d.querySelector('#links-site').dataset.theme, 'minimal');
    assert.equal(d.querySelector('#study').hidden, false);
    d.dispatchEvent(new w.KeyboardEvent('keydown', { code: 'KeyK', key: 'K', shiftKey: true, bubbles: true }));
    d.dispatchEvent(new w.KeyboardEvent('keydown', { code: 'KeyA', key: 'A', shiftKey: true, bubbles: true }));
    assert.equal(d.documentElement.dataset.theme, 'kawaii');
    assert.equal(d.querySelector('#links-site').dataset.theme, 'kawaii');
    assert.equal(d.querySelector('#study').hidden, false);
    assert.equal(w.localStorage.getItem('links-theme-v2'), 'kawaii');
    d.querySelector('[data-theme-id="minimal"]').click();
    assert.equal(d.documentElement.dataset.theme, 'minimal');
    assert.equal(w.localStorage.getItem('links-theme-v2'), 'minimal');
  } finally { dom.window.close(); }
});

test('imagens de O Mentalista estão disponíveis nos dois modos', () => {
  const html = load('index.html');
  for (const image of ['mentalista-01.jpg', 'mentalista-02.jpg']) {
    assert.ok(fs.existsSync(path.join(root, 'assets', image)), image);
    assert.ok(html.includes(`assets/${image}`), image);
  }
  const css = load('assets/minimal.css');
  assert.match(css, /\.minimal-portrait\s*\{\s*display:none/);
  assert.match(css, /html\[data-theme="minimal"\] \.minimal-portrait\s*\{\s*display:block/);
});
