// As variações compartilham duas ilustrações originais geradas para este site.
const themes = [
  {id:'kawaii',name:'Kawaii original',note:'a clássica', color:'#e598aa'},
  {id:'catboy',name:'Catboy Café',note:'main character energy',color:'#bd8399',bg:'#fff3f1',panel:'#f3dee3',ink:'#573d50',accent:'#b96784',image:'cafe'},
  {id:'midnight',name:'Midnight Meow',note:'3 da manhã core',color:'#7b729d',bg:'#eae8f3',panel:'#dedbf0',ink:'#414061',accent:'#625786',image:'night'},
  {id:'matcha',name:'Matcha Neko',note:'matcha e caos',color:'#8daa8d',bg:'#f1f7ee',panel:'#e0ede0',ink:'#365443',accent:'#59866a',image:'cafe'},
  {id:'strawberry',name:'Strawberry Paw',note:'sweet but feral',color:'#df8a99',bg:'#fff1f3',panel:'#f9dfe4',ink:'#674052',accent:'#bb6279',image:'cafe'},
  {id:'cloud',name:'Cloud Nap',note:'offline por motivos',color:'#8daeca',bg:'#f0f7fc',panel:'#deecf7',ink:'#3a526a',accent:'#5984a8',image:'night'},
  {id:'lavender',name:'Lavender Haze',note:'delulu com calma',color:'#ad98cd',bg:'#f6f0fc',panel:'#ebdef5',ink:'#58466d',accent:'#8b6aaf',image:'night'},
  {id:'moka',name:'Moka Paws',note:'café e teoria',color:'#b6947e',bg:'#faf4ee',panel:'#f1e4d8',ink:'#604b42',accent:'#97705b',image:'cafe'},
  {id:'pixel',name:'Pixel Neko',note:'terminalmente online',color:'#79a7a4',bg:'#eff8f6',panel:'#d9eeeb',ink:'#355955',accent:'#4e8b84',image:'night'},
  {id:'moon',name:'Moon Milk',note:'lunar e distraído',color:'#9a9ab8',bg:'#f1f1f8',panel:'#e4e3f1',ink:'#474968',accent:'#77749c',image:'night'},
  {id:'sunset',name:'Sunset Zoomies',note:'zoomies às 18h',color:'#d6a182',bg:'#fff5ee',panel:'#fae4d8',ink:'#684c43',accent:'#bc795c',image:'cafe'},
  {id:'void',name:'Soft Void',note:'pequeno caos cósmico',color:'#897ba1',bg:'#efedf4',panel:'#e2dcea',ink:'#4c4359',accent:'#7a638b',image:'night'}
];
const themeOptions = document.querySelector('#theme-options');
const themeSettings = document.querySelector('#theme-settings');
const themeToggle = document.querySelector('#settings-toggle');
const linksShell = document.querySelector('#links-site');
function applyTheme(id) {
 const theme = themes.find(item => item.id === id) || themes[0];
 linksShell.dataset.theme = theme.id;
 for (const [property, value] of Object.entries({'--theme-bg':theme.bg,'--theme-panel':theme.panel,'--theme-ink':theme.ink,'--theme-accent':theme.accent})) {
   if (value) linksShell.style.setProperty(property,value); else linksShell.style.removeProperty(property);
 }
 linksShell.dataset.art = theme.image || '';
 for (const button of themeOptions.children) button.setAttribute('aria-pressed', String(button.dataset.themeId === theme.id));
 try { localStorage.setItem('links-theme-v1', theme.id); } catch (_) {}
}
for (const theme of themes) {
 const button = document.createElement('button'); button.type='button'; button.className='theme-choice'; button.dataset.themeId=theme.id;
 const swatch = document.createElement('span'); swatch.className='theme-swatch'; swatch.style.background=theme.color;
 const label = document.createElement('span'); const name = document.createElement('strong'); name.textContent=theme.name;
 const note = document.createElement('small'); note.textContent=theme.note; label.append(name,note); button.append(swatch,label);
 button.addEventListener('click', () => applyTheme(theme.id)); themeOptions.append(button);
}
themeToggle.addEventListener('click', () => { const open=themeSettings.hidden; themeSettings.hidden=!open; themeToggle.setAttribute('aria-expanded',String(open)); });
let savedTheme = 'kawaii'; try { savedTheme = localStorage.getItem('links-theme-v1') || 'kawaii'; } catch (_) {}
applyTheme(savedTheme);
