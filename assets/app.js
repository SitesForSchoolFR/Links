const grid = document.querySelector('#grid');
const filters = document.querySelector('#filters');
const search = document.querySelector('#search');
const groups = LINK_GROUPS.map(group => ({ ...group, urls: [...new Set(group.links.split('\n').map(x => x.trim()).filter(Boolean).map(x => /^https?:\/\//i.test(x) ? x : `https://${x}`))] }));
let category = 'Todos';
const favoritesKey = 'links-for-me-favorites-v1';
let favorites = new Set();
try { const saved = JSON.parse(localStorage.getItem(favoritesKey) || '[]'); if (Array.isArray(saved)) favorites = new Set(saved.filter(item => typeof item === 'string')); } catch (_) { /* navegação privada ou armazenamento indisponível */ }
const categories = ['Todos', 'Favoritos', ...new Set(groups.map(g => g.category))];
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
    if (category !== 'Todos' && category !== 'Favoritos' && group.category !== category) continue;
    const matching = group.urls.filter(url => (category !== 'Favoritos' || favorites.has(url)) && `${group.name} ${group.category} ${url}`.toLocaleLowerCase('pt-BR').includes(query));
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
      const favorite = document.createElement('button'); favorite.type = 'button'; favorite.className = 'favorite';
      function updateFavorite() {
        const active = favorites.has(url); favorite.textContent = active ? '♥' : '♡';
        favorite.setAttribute('aria-pressed', String(active));
        favorite.setAttribute('aria-label', `${active ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}: ${link.textContent}`);
      }
      updateFavorite();
      favorite.addEventListener('click', () => {
        if (favorites.has(url)) favorites.delete(url); else favorites.add(url);
        try { localStorage.setItem(favoritesKey, JSON.stringify([...favorites])); }
        catch (_) { document.querySelector('#favorite-status').textContent = 'Não foi possível salvar favoritos neste navegador.'; }
        if (category === 'Favoritos') render();
        else document.querySelectorAll('.favorite').forEach(button => { if (button.dataset.url === url) { const active = favorites.has(url); button.textContent = active ? '♥' : '♡'; button.setAttribute('aria-pressed', String(active)); button.setAttribute('aria-label', `${active ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}: ${link.textContent}`); } });
      });
      favorite.dataset.url = url;
      li.append(link, favorite); list.append(li);
    }
    details.append(summary, list); card.append(head, details); grid.append(card);
  }
  document.querySelector('#results').textContent = `${count} ${count === 1 ? 'coleção encontrada' : 'coleções encontradas'}`;
  document.querySelector('#empty').textContent = category === 'Favoritos' && !query ? 'Você ainda não favoritou nenhum link. ♡' : 'Nenhum link encontrado. Tente outra busca ♡';
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

// Cada abertura ou retorno do cache começa em estudos; o modo nunca é salvo.
const studyPage = document.querySelector('#study');
const linksSite = document.querySelector('#links-site');
function showMode(showLinks) {
  studyPage.hidden = showLinks; linksSite.hidden = !showLinks;
  document.title = showLinks ? 'Links for me ✿' : 'Estação de estudos';
  window.scrollTo(0, 0);
}
window.addEventListener('pageshow', event => { if (event.persisted) showMode(false); });
document.addEventListener('open-links', () => showMode(true));
const heldKeys = new Set();
document.addEventListener('keydown', event => {
  if (['KeyA', 'KeyY', 'KeyP'].includes(event.code)) heldKeys.add(event.code);
  if (event.shiftKey && heldKeys.has('KeyA') && heldKeys.has('KeyP') && !event.repeat) {
    event.preventDefault(); heldKeys.clear(); applyTheme('catboy'); showMode(true);
  } else if (event.shiftKey && heldKeys.has('KeyA') && heldKeys.has('KeyY') && !event.repeat) {
    event.preventDefault(); heldKeys.clear(); showMode(linksSite.hidden);
  }
});
document.addEventListener('keyup', event => heldKeys.delete(event.code));
window.addEventListener('blur', () => heldKeys.clear());
// Evita fragmentos na URL sem quebrar a navegação por teclado.
document.querySelectorAll('[data-scroll]').forEach(link => link.addEventListener('click', event => {
  event.preventDefault();
  if (link.dataset.scroll === 'top') window.scrollTo({ top: 0, behavior: 'smooth' });
  else document.getElementById(link.dataset.scroll).scrollIntoView({ behavior: 'smooth' });
}));
// Só normaliza o endereço no domínio oficial; previews locais continuam utilizáveis.
if (location.hostname.toLowerCase() === 'sitesforschoolfr.github.io' && location.pathname.toLowerCase().startsWith('/links/')) {
  history.replaceState(null, '', '/Links/');
}

// Ponteiro próprio e anel com leve atraso; o ponteiro nativo volta caso o mouse saia da página.
if (finePointer.matches) {
 const pointer = document.createElement('span'); pointer.className = 'cursor-pointer'; pointer.setAttribute('aria-hidden','true'); pointer.hidden = true;
 const ring = document.createElement('span'); ring.className = 'cursor-ring'; ring.setAttribute('aria-hidden','true'); ring.hidden = true;
 const ringShape = document.createElement('span'); ring.append(ringShape); document.body.append(ring, pointer);
 let x = 0, y = 0, ringX = 0, ringY = 0, visible = false, frame = null;
 function draw() {
   frame = null;
   if (!visible) return;
   if (reducedMotion.matches) { ringX = x; ringY = y; }
   else { ringX += (x - ringX) * .22; ringY += (y - ringY) * .22; }
   ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
   if (Math.abs(x - ringX) + Math.abs(y - ringY) > .3) frame = requestAnimationFrame(draw);
 }
 function move(event) {
   if (event.pointerType !== 'mouse') return;
   x = event.clientX; y = event.clientY;
   if (!visible) { ringX = x; ringY = y; visible = true; pointer.hidden = false; ring.hidden = false; document.documentElement.classList.add('custom-cursor-active'); }
   pointer.style.transform = `translate(${x}px, ${y}px) translate(-10px, -10px)`;
   const interactive = event.target instanceof Element && !!event.target.closest('a,button,summary,select,input,textarea,label');
   ring.classList.toggle('is-interactive', interactive);
   if (frame === null) frame = requestAnimationFrame(draw);
 }
 function resetCursor() {
   visible = false; pointer.hidden = true; ring.hidden = true; ring.classList.remove('is-pressed');
   document.documentElement.classList.remove('custom-cursor-active');
   if (frame !== null) { cancelAnimationFrame(frame); frame = null; }
 }
 document.addEventListener('pointermove', move, {passive:true});
 document.addEventListener('pointerdown', event => { if (event.pointerType === 'mouse') { move(event); ring.classList.add('is-pressed'); } });
 document.addEventListener('pointerup', event => { if (event.pointerType === 'mouse') ring.classList.remove('is-pressed'); });
 document.addEventListener('pointercancel', resetCursor);
 document.addEventListener('pointerout', event => { if (!event.relatedTarget) resetCursor(); });
 window.addEventListener('blur', resetCursor);
 document.addEventListener('visibilitychange', () => { if (document.hidden) resetCursor(); });
}
