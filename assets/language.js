// Traduções da interface; conteúdo pedagógico e nomes próprios permanecem no idioma original.
(() => {
  const dictionary = {
    'Novos': ['New', 'Nuevos'], 'Jogos': ['Games', 'Juegos'], 'Estudos': ['Study', 'Estudios'],
    'Todos': ['All', 'Todos'], 'Favoritos': ['Favorites', 'Favoritos'], 'Antigos': ['Old', 'Antiguos'],
    'Mais links': ['More links', 'Más enlaces'], 'Melhores': ['Best', 'Mejores'], 'Filmes e séries': ['Movies and series', 'Películas y series'],
    'Copiar': ['Copy', 'Copiar'], 'Copiar todos os links': ['Copy all links', 'Copiar todos los enlaces'],
    'Copiar todos os links antigos': ['Copy all old links', 'Copiar todos los enlaces antiguos'],
    'Link copiado.': ['Link copied.', 'Enlace copiado.'], 'Abrir em about:blank': ['Open in about:blank', 'Abrir en about:blank'],
    '♪ Som: desligado': ['♪ Sound: off', '♪ Sonido: apagado'], '♪ Som: ligado': ['♪ Sound: on', '♪ Sonido: encendido'],
    'SUA COLEÇÃO ONLINE': ['YOUR ONLINE COLLECTION', 'TU COLECCIÓN EN LÍNEA'], 'Um mundo de links,': ['A world of links,', 'Un mundo de enlaces,'],
    'um só lugar.': ['one place.', 'un solo lugar.'], 'Explorar a coleção': ['Explore the collection', 'Explorar la colección'],
    'UM CLIQUE DE CADA VEZ': ['ONE CLICK AT A TIME', 'UN CLIC A LA VEZ'], 'DEIXE A SORTE ESCOLHER': ['LET LUCK CHOOSE', 'DEJA QUE LA SUERTE ELIJA'],
    'Roleta de links': ['Link roulette', 'Ruleta de enlaces'], 'Escolha uma categoria e descubra um link de uma coleção aleatória.': ['Choose a category and discover a link from a random collection.', 'Elige una categoría y descubre un enlace de una colección aleatoria.'],
    'Sortear Jogo': ['Random game', 'Juego aleatorio'], 'Sortear Unblocker': ['Random unblocker', 'Desbloqueador aleatorio'],
    'Escolha uma roleta para começar.': ['Choose a roulette to start.', 'Elige una ruleta para empezar.'], 'Abrir link ↗': ['Open link ↗', 'Abrir enlace ↗'],
    'ENCONTRE SEU FAVORITO': ['FIND YOUR FAVORITE', 'ENCUENTRA TU FAVORITO'], 'Explore a coleção': ['Explore the collection', 'Explora la colección'],
    'Tem um pouquinho de tudo por aqui.': ['There is a little bit of everything here.', 'Aquí hay un poco de todo.'],
    'Um lembrete carinhoso': ['A friendly reminder', 'Un recordatorio amable'],
    'Os links levam a sites de terceiros e podem mudar ou deixar de funcionar. Tenha cuidado ao acessar e não compartilhe informações pessoais.': ['Links lead to third-party sites and may change or stop working. Be careful and do not share personal information.', 'Los enlaces llevan a sitios de terceros y pueden cambiar o dejar de funcionar. Ten cuidado y no compartas datos personales.'],
    'Voltar ao topo ↑': ['Back to top ↑', 'Volver arriba ↑'], 'Início': ['Home', 'Inicio'], 'Pesquisar': ['Search', 'Buscar'], 'A turma': ['The team', 'El equipo'],
    'Matemática': ['Math', 'Matemáticas'], 'Português': ['Portuguese', 'Portugués'], 'Ciências': ['Science', 'Ciencias'], 'Matéria': ['Subject', 'Materia'], 'Ano escolar': ['School year', 'Curso escolar'],
    'Começar': ['Start', 'Comenzar'], 'Reiniciar': ['Reset', 'Reiniciar'], 'Duração': ['Duration', 'Duración'], 'Meu bloquinho': ['My notes', 'Mis notas'], 'Seu progresso': ['Your progress', 'Tu progreso'],
    'Escolha seu caminho': ['Choose your path', 'Elige tu camino'], 'Misturar questões ⤨': ['Shuffle questions ⤨', 'Mezclar preguntas ⤨'], 'Recomeçar quiz ↻': ['Restart quiz ↻', 'Reiniciar cuestionario ↻']
  };
  const toggle = document.querySelector('#language-toggle'), menu = document.querySelector('#language-menu');
  const originals = new WeakMap();
  let language = 'pt-BR';
  try { const saved = localStorage.getItem('links-language'); if (['pt-BR','en-US','es-ES'].includes(saved)) language = saved; } catch (_) {}
  // Quem já escolheu um idioma não precisa rever o painel em cada visita.
  try { if (localStorage.getItem('links-language')) { menu.hidden = true; toggle.setAttribute('aria-expanded', 'false'); } } catch (_) {}
  function translation(text) {
    const trimmed = text.trim(); const index = language === 'en-US' ? 0 : 1;
    if (language === 'pt-BR') return text;
    let result = dictionary[trimmed]?.[index];
    if (!result) {
      let m = trimmed.match(/^Ver (\d+) (links?)$/);
      if (m) result = language === 'en-US' ? `View ${m[1]} ${m[2]}` : `Ver ${m[1]} ${m[1] === '1' ? 'enlace' : 'enlaces'}`;
      m = trimmed.match(/^(\d+) coleç(?:ão encontrada|ões encontradas)$/);
      if (m) result = language === 'en-US' ? `${m[1]} collections found` : `${m[1]} colecciones encontradas`;
      m = trimmed.match(/^♡ (\d+) links na coleção$/);
      if (m) result = language === 'en-US' ? `♡ ${m[1]} links in the collection` : `♡ ${m[1]} enlaces en la colección`;
    }
    return result ? text.replace(trimmed, result) : text;
  }
  function update(node) {
    if (node.nodeType === 3) {
      if (!node.parentElement || node.parentElement.closest('#language-menu, script, style, #questions')) return;
      let saved = originals.get(node);
      if (!saved || node.nodeValue !== saved.last) saved = { source: node.nodeValue, last: node.nodeValue };
      const value = translation(saved.source); saved.last = value; originals.set(node, saved);
      if (node.nodeValue !== value) node.nodeValue = value;
    } else if (node.nodeType === 1 && !node.closest('#language-menu, script, style, #questions')) {
      for (const child of node.childNodes) update(child);
    }
  }
  function apply() {
    document.documentElement.lang = language;
    document.querySelectorAll('[data-lang]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
    update(document.body);
  }
  toggle.addEventListener('click', () => { menu.hidden = !menu.hidden; toggle.setAttribute('aria-expanded', String(!menu.hidden)); if (!menu.hidden) menu.querySelector('[data-lang]').focus(); });
  menu.addEventListener('click', event => { const button = event.target.closest('[data-lang]'); if (!button) return; language = button.dataset.lang; try { localStorage.setItem('links-language', language); } catch (_) {} apply(); menu.hidden = true; toggle.setAttribute('aria-expanded', 'false'); toggle.focus(); });
  menu.addEventListener('keydown', event => { if (event.key === 'Escape') { menu.hidden = true; toggle.setAttribute('aria-expanded', 'false'); toggle.focus(); } });
  apply();
  new MutationObserver(records => { for (const record of records) { if (record.type === 'characterData') update(record.target); else for (const node of record.addedNodes) update(node); } }).observe(document.body, { childList: true, characterData: true, subtree: true });
})();
