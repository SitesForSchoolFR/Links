const grid = document.querySelector('#grid');
const filters = document.querySelector('#filters');
const search = document.querySelector('#search');
const groups = LINK_GROUPS.map(group => ({ ...group, urls: [...new Set(group.links.split('\n').map(x => x.trim()).filter(Boolean).map(x => /^https?:\/\//i.test(x) ? x : `https://${x}`))] }));
let category = 'Todos';
const categories = ['Todos', ...new Set(groups.map(g => g.category))];
const icons = { 'Jogos': '✳', 'Estudos': '✿', 'Filmes e séries': '♡' };
for (const name of categories) {
  const button = document.createElement('button');
  button.textContent = name;
  button.type = 'button';
  button.setAttribute('aria-pressed', String(name === category));
  button.addEventListener('click', () => { category = name; for (const b of filters.children) b.setAttribute('aria-pressed', String(b === button)); render(); });
  filters.append(button);
}
document.querySelector('#total').textContent = `♡ ${groups.reduce((n,g) => n + g.urls.length, 0)} links na coleção`;
function render() {
  const query = search.value.trim().toLocaleLowerCase('pt-BR');
  grid.replaceChildren();
  let count = 0;
  for (const group of groups) {
    if (category !== 'Todos' && group.category !== category) continue;
    const matching = group.urls.filter(url => `${group.name} ${group.category} ${url}`.toLocaleLowerCase('pt-BR').includes(query));
    if (!matching.length) continue;
    count++;
    const card = document.createElement('article'); card.className = 'card';
    const head = document.createElement('div'); head.className = 'card-head';
    const icon = document.createElement('span'); icon.className = 'card-icon'; icon.textContent = icons[group.category] || '✦';
    const info = document.createElement('div');
    const tag = document.createElement('span'); tag.className = 'tag'; tag.textContent = group.category;
    const title = document.createElement('h3'); title.textContent = group.name;
    info.append(tag, title); head.append(icon, info);
    const details = document.createElement('details');
    const summary = document.createElement('summary'); summary.textContent = `Ver ${matching.length} ${matching.length === 1 ? 'link' : 'links'}`;
    const list = document.createElement('ul');
    for (const url of matching) {
      const li = document.createElement('li'); const link = document.createElement('a');
      link.href = url; link.target = '_blank'; link.rel = 'noopener noreferrer';
      link.textContent = url.replace(/^https?:\/\//, '');
      li.append(link); list.append(li);
    }
    details.append(summary, list); card.append(head, details); grid.append(card);
  }
  document.querySelector('#results').textContent = `${count} ${count === 1 ? 'coleção encontrada' : 'coleções encontradas'}`;
  document.querySelector('#empty').hidden = count !== 0;
}
search.addEventListener('input', render); render();

// O som é opt-in e só é criado depois da interação do visitante.
const soundButton = document.querySelector('#sound');
let soundEnabled = false;
let audioContext;
function chime() {
  if (!soundEnabled) return;
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;
    audioContext ||= new AudioContextClass();
    if (audioContext.state === 'suspended') audioContext.resume().catch(() => {});
    const now = audioContext.currentTime;
    for (const [index, frequency] of [659.25, 880].entries()) {
      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      oscillator.type = 'sine'; oscillator.frequency.value = frequency;
      gain.gain.setValueAtTime(0.0001, now + index * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.035, now + index * 0.08 + 0.01);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + index * 0.08 + 0.17);
      oscillator.connect(gain); gain.connect(audioContext.destination);
      oscillator.start(now + index * 0.08); oscillator.stop(now + index * 0.08 + 0.18);
    }
  } catch (_) { /* O site continua funcionando se o navegador não oferecer áudio. */ }
}
soundButton.addEventListener('click', () => {
  soundEnabled = !soundEnabled;
  soundButton.setAttribute('aria-pressed', String(soundEnabled));
  soundButton.textContent = soundEnabled ? '♪ Som: ligado' : '♪ Som: desligado';
  chime();
});
document.addEventListener('click', event => {
  if (event.target.closest('#filters button, summary, .hero-button')) chime();
});

// A busca pode ser aberta também pelo teclado; permanece aberta enquanto houver texto.
const searchBox = document.querySelector('#search-box');
const searchToggle = document.querySelector('#search-toggle');
let searchCloseTimer;
searchToggle.addEventListener('click', () => {
  const open = searchToggle.getAttribute('aria-expanded') !== 'true';
  clearTimeout(searchCloseTimer);
  searchToggle.setAttribute('aria-expanded', String(open));
  searchToggle.setAttribute('aria-label', open ? 'Fechar busca' : 'Abrir busca');
  if (open) {
    search.hidden = false;
    requestAnimationFrame(() => { if (searchToggle.getAttribute('aria-expanded') === 'true') { searchBox.classList.add('is-open'); search.focus(); } });
  } else {
    search.value = ''; render();
    searchBox.classList.remove('is-open');
    searchCloseTimer = setTimeout(() => { search.hidden = true; }, 250);
  }
});
search.addEventListener('keydown', event => { if (event.key === 'Escape') { searchToggle.click(); searchToggle.focus(); } });

// Rastro limitado em frequência; nunca interfere em cliques, toque ou movimento reduzido.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const finePointer = window.matchMedia('(pointer: fine)');
let lastSparkle = 0;
document.addEventListener('pointermove', event => {
  if (event.pointerType !== 'mouse' || reducedMotion.matches || !finePointer.matches || event.timeStamp - lastSparkle < 80) return;
  lastSparkle = event.timeStamp;
  const particle = document.createElement('span');
  particle.className = 'sparkle-particle'; particle.setAttribute('aria-hidden', 'true');
  particle.textContent = '✦'; particle.style.left = `${event.clientX}px`; particle.style.top = `${event.clientY}px`;
  document.body.append(particle); setTimeout(() => particle.remove(), 500);
}, { passive: true });
