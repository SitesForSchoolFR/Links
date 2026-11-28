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
  Object.assign(dictionary, {
    'Idioma / Language': ['Language', 'Idioma'],
    'Escolha seu idioma / Choose your language': ['Choose your language', 'Elige tu idioma'],
    'Tradução parcial da interface; quizzes em português.': ['Quiz content is in Portuguese.', 'El contenido de los cuestionarios está en portugués.'],
    'seu cantinho de estudos': ['your little study space', 'tu rincón de estudio'],
    'Começar a estudar': ['Start studying', 'Empezar a estudiar'],
    'FEITO PARA QUEM QUER APRENDER': ['MADE FOR THOSE WHO WANT TO LEARN', 'HECHO PARA QUIENES QUIEREN APRENDER'],
    'Seu próximo passo': ['Your next step', 'Tu próximo paso'], 'começa aqui.': ['starts here.', 'empieza aquí.'],
    'O seu cantinho de estudos para aprender, praticar e descobrir coisas novas, no seu ritmo.': ['Your study space to learn, practice, and discover new things at your own pace.', 'Tu espacio de estudio para aprender, practicar y descubrir cosas nuevas a tu ritmo.'],
    'Explorar os quizzes': ['Explore the quizzes', 'Explorar los cuestionarios'],
    '⌕   O que quer aprender?': ['⌕   What do you want to learn?', '⌕   ¿Qué quieres aprender?'],
    'Um pouquinho por dia faz toda a diferença.': ['A little every day makes all the difference.', 'Un poco cada día marca la diferencia.'],
    '3 matérias': ['3 subjects', '3 materias'], 'para explorar': ['to explore', 'para explorar'],
    '12 anos e séries': ['12 school years', '12 cursos escolares'], 'do fundamental ao médio': ['from elementary to high school', 'de primaria a secundaria'],
    'Seu ritmo': ['Your pace', 'Tu ritmo'], 'sem pressa, sem pressão': ['no rush, no pressure', 'sin prisa, sin presión'],
    'Feito para você': ['Made for you', 'Hecho para ti'], 'estude quando quiser': ['study whenever you like', 'estudia cuando quieras'],
    'SEU PRÓXIMO DESAFIO': ['YOUR NEXT CHALLENGE', 'TU PRÓXIMO DESAFÍO'],
    'O que vamos aprender hoje?': ['What shall we learn today?', '¿Qué vamos a aprender hoy?'],
    'Escolha uma matéria e comece por onde quiser.': ['Choose a subject and start wherever you like.', 'Elige una materia y comienza donde quieras.'],
    'Ver todos os quizzes ↗': ['View all quizzes ↗', 'Ver todos los cuestionarios ↗'],
    'LÓGICA & NÚMEROS': ['LOGIC & NUMBERS', 'LÓGICA Y NÚMEROS'], 'LINGUAGEM & IDEIAS': ['LANGUAGE & IDEAS', 'LENGUAJE E IDEAS'], 'MUNDO & DESCOBERTAS': ['WORLD & DISCOVERIES', 'MUNDO Y DESCUBRIMIENTOS'],
    'De operações a equações: cada passo conta.': ['From operations to equations: every step counts.', 'De operaciones a ecuaciones: cada paso cuenta.'],
    'Explore palavras, textos e seus significados.': ['Explore words, texts, and their meanings.', 'Explora palabras, textos y sus significados.'],
    'Curiosidade é o começo de toda descoberta.': ['Curiosity is the beginning of every discovery.', 'La curiosidad es el comienzo de cada descubrimiento.'],
    'Começar quiz →': ['Start quiz →', 'Empezar cuestionario →'],
    'UM PASSO DE CADA VEZ': ['ONE STEP AT A TIME', 'UN PASO A LA VEZ'], 'Seu espaço, seu jeito.': ['Your space, your way.', 'Tu espacio, a tu manera.'],
    'Pequenas ferramentas para deixar o estudo mais leve.': ['Little tools to make studying easier.', 'Pequeñas herramientas para estudiar con más facilidad.'],
    'Hora de focar': ['Time to focus', 'Hora de concentrarse'], 'Reserve um tempinho só para você.': ['Set aside a little time for yourself.', 'Reserva un momento para ti.'],
    '25 minutos': ['25 minutes', '25 minutos'], '15 minutos': ['15 minutes', '15 minutos'], '5 minutos': ['5 minutes', '5 minutos'],
    'Ideias e lembretes para depois.': ['Ideas and reminders for later.', 'Ideas y recordatorios para después.'], 'Suas anotações': ['Your notes', 'Tus notas'],
    'Salvo neste navegador ♡': ['Saved in this browser ♡', 'Guardado en este navegador ♡'],
    'Cada resposta certa é uma conquista.': ['Every correct answer is an achievement.', 'Cada respuesta correcta es un logro.'],
    'Limpar progresso': ['Clear progress', 'Borrar progreso'], 'Progresso limpo.': ['Progress cleared.', 'Progreso borrado.'],
    'MELHOR JUNTOS': ['BETTER TOGETHER', 'MEJOR JUNTOS'], 'Conheça a turma do Study Hobby': ['Meet the Study Hobby team', 'Conoce al equipo de Study Hobby'],
    'Personagens fictícios criados com ajuda de IA para deixar a jornada mais divertida.': ['Fictional characters created with AI to make the journey more fun.', 'Personajes ficticios creados con ayuda de IA para hacer el viaje más divertido.'],
    'Conhecer a turma ↗': ['Meet the team ↗', 'Conocer al equipo ↗'],
    'Aprender pode ser uma das suas coisas favoritas. ♡': ['Learning can be one of your favorite things. ♡', 'Aprender puede ser una de tus cosas favoritas. ♡'],
    'Feito com curiosidade no Brasil': ['Made with curiosity in Brazil', 'Hecho con curiosidad en Brasil'],
    'HORA DO DESAFIO': ['TIME FOR A CHALLENGE', 'HORA DEL DESAFÍO'], 'Selecione uma matéria e um ano para começar o quiz.': ['Select a subject and a school year to start the quiz.', 'Selecciona una materia y un curso para empezar el cuestionario.'],
    'Escolha uma alternativa em cada questão. Você pode tentar novamente!': ['Choose an answer for each question. You can try again!', 'Elige una respuesta para cada pregunta. ¡Puedes intentarlo de nuevo!'],
    'ENCONTRE UM ASSUNTO': ['FIND A TOPIC', 'ENCUENTRA UN TEMA'], 'O que você quer aprender?': ['What do you want to learn?', '¿Qué quieres aprender?'],
    'Pesquise questões e conteúdos disponíveis nesta área.': ['Search the questions and content available here.', 'Busca preguntas y contenido disponibles aquí.'],
    'Pesquisar nos estudos': ['Search study materials', 'Buscar materiales de estudio'], 'Experimente pesquisar uma matéria, palavra ou ano.': ['Try searching for a subject, word, or school year.', 'Prueba a buscar una materia, palabra o curso.'],
    'CONHEÇA A TURMA': ['MEET THE TEAM', 'CONOCE AL EQUIPO'], 'Uma turma para aprender junto': ['A team to learn with', 'Un equipo para aprender juntos'],
    'Estes são personagens fictícios criados com ajuda de IA. Eles não são pessoas reais nem contribuidores do projeto.': ['These are fictional characters created with AI. They are not real people or project contributors.', 'Estos son personajes ficticios creados con IA. No son personas reales ni colaboradores del proyecto.'],
    'Personagem indiano apaixonado por desafios de lógica e uma boa xícara de chai.': ['An Indian character who loves logic challenges and a good cup of chai.', 'Un personaje indio apasionado por los desafíos de lógica y una buena taza de chai.'],
    'Adora fazer perguntas, explorar a natureza e colecionar curiosidades.': ['Loves asking questions, exploring nature, and collecting fun facts.', 'Le encanta hacer preguntas, explorar la naturaleza y coleccionar curiosidades.'],
    'Fã de palavras, histórias e pausas estratégicas para desenhar.': ['A fan of words, stories, and strategic drawing breaks.', 'Fan de las palabras, las historias y las pausas estratégicas para dibujar.'],
    'Acredita que toda tentativa é uma nova maneira de aprender.': ['Believes every attempt is a new way to learn.', 'Cree que cada intento es una nueva forma de aprender.'],
    'Pausar': ['Pause', 'Pausar'], 'Pausado.': ['Paused.', 'En pausa.'], 'Foco iniciado.': ['Focus started.', 'Concentración iniciada.'], 'Tempo concluído! Que tal uma pausa?': ['Time is up! How about a break?', '¡Se acabó el tiempo! ¿Qué tal una pausa?'],
    'Ver explicação': ['Show explanation', 'Ver explicación'], 'Ocultar explicação': ['Hide explanation', 'Ocultar explicación'], 'Ainda não! Tente outra alternativa.': ['Not yet! Try another answer.', '¡Todavía no! Prueba otra respuesta.'],
    'O que você quer lembrar hoje?': ['What would you like to remember today?', '¿Qué quieres recordar hoy?'],
    'Ex.: frações, ângulos, plantas...': ['E.g. fractions, angles, plants...', 'Ej.: fracciones, ángulos, plantas...'],
    'Buscar um link...': ['Search for a link...', 'Buscar un enlace...'], 'Buscar um link': ['Search for a link', 'Buscar un enlace'],
    'Filtrar por categoria': ['Filter by category', 'Filtrar por categoría'], 'Abrir busca': ['Open search', 'Abrir búsqueda'], 'Fechar busca': ['Close search', 'Cerrar búsqueda'],
    'Navegação de estudos': ['Study navigation', 'Navegación de estudios'], 'Pesquisa de estudos': ['Search studies', 'Búsqueda de estudios'],
    'Study Hobby, ir para início': ['Study Hobby, go home', 'Study Hobby, ir al inicio']
  });
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
      let m = trimmed.match(/^de (\d+) questões diferentes acertadas$/);
      if (m) result = language === 'en-US' ? `of ${m[1]} different questions answered correctly` : `de ${m[1]} preguntas diferentes respondidas correctamente`;
      m = trimmed.match(/^(\d+)º ano$/);
      if (m) result = language === 'en-US' ? `Year ${m[1]}` : `Curso ${m[1]}`;
      m = trimmed.match(/^(\d+)ª série do ensino médio$/);
      if (m) result = language === 'en-US' ? `High school year ${m[1]}` : `Secundaria curso ${m[1]}`;
      m = trimmed.match(/^(\d+) de (\d+) corretas · (.+)$/);
      if (m) result = language === 'en-US' ? `${m[1]} of ${m[2]} correct · ${m[3]}` : `${m[1]} de ${m[2]} correctas · ${m[3]}`;
      m = trimmed.match(/^QUESTÃO (\d+)$/);
      if (m) result = language === 'en-US' ? `QUESTION ${m[1]}` : `PREGUNTA ${m[1]}`;
      m = trimmed.match(/^Ver (\d+) (links?)$/);
      if (m) result = language === 'en-US' ? `View ${m[1]} ${m[2]}` : `Ver ${m[1]} ${m[1] === '1' ? 'enlace' : 'enlaces'}`;
      m = trimmed.match(/^(\d+) coleç(?:ão encontrada|ões encontradas)$/);
      if (m) result = language === 'en-US' ? `${m[1]} collections found` : `${m[1]} colecciones encontradas`;
      m = trimmed.match(/^♡ (\d+) links na coleção$/);
      if (m) result = language === 'en-US' ? `♡ ${m[1]} links in the collection` : `♡ ${m[1]} enlaces en la colección`;
    }
    return result ? text.replace(trimmed, result) : text;
  }
  const attributeOriginals = new WeakMap();
  function updateAttributes(node) {
    let originals = attributeOriginals.get(node) || {};
    for (const name of ['placeholder', 'aria-label']) {
      if (!node.hasAttribute(name)) continue;
      const current = node.getAttribute(name);
      let saved = originals[name];
      if (!saved || current !== saved.last) saved = { source: current, last: current };
      const value = translation(saved.source); saved.last = value; originals[name] = saved;
      if (value !== current) node.setAttribute(name, value);
    }
    attributeOriginals.set(node, originals);
  }
  function update(node) {
    if (node.nodeType === 3) {
      if (!node.parentElement || node.parentElement.closest('[data-lang], script, style, #questions h3, #questions .answer-options, #questions .explanation-text')) return;
      let saved = originals.get(node);
      if (!saved || node.nodeValue !== saved.last) saved = { source: node.nodeValue, last: node.nodeValue };
      const value = translation(saved.source); saved.last = value; originals.set(node, saved);
      if (node.nodeValue !== value) node.nodeValue = value;
    } else if (node.nodeType === 1 && !node.closest('[data-lang], script, style, #questions h3, #questions .answer-options, #questions .explanation-text')) {
      updateAttributes(node);
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
  new MutationObserver(records => { for (const record of records) { if (record.type === 'characterData') update(record.target); else if (record.type === 'attributes') updateAttributes(record.target); else for (const node of record.addedNodes) update(node); } }).observe(document.body, { childList: true, characterData: true, attributes: true, attributeFilter: ['placeholder', 'aria-label'], subtree: true });
})();
