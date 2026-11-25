// Identificação por nome da coleção, não por verificação dos serviços externos.
// Coleções mistas (packs e "Other Links") ficam de fora para não incluir jogos por engano.
const UNBLOCKER_COLLECTIONS = new Set([
  'Estudos|Petezah', 'Estudos|Aurora', 'Estudos|Galaxy V7', 'Estudos|Revault',
  'Estudos|Solara', 'Estudos|Astra', 'Estudos|Opium', 'Estudos|Tung Tung',
  'Estudos|StudyHub', 'Estudos|Refract', 'Estudos|Astral',
  'Mais links|Space', 'Mais links|Lunar', 'Mais links|Rook', 'Mais links|N7x',
  'Mais links|Kite', 'Mais links|DogeUB', 'Mais links|C00lKid', 'Mais links|Glim',
  'Mais links|Interstellar', 'Mais links|Velara', 'Mais links|Utopia',
  'Mais links|Xylora', 'Mais links|Cherri', 'Mais links|Stroberri',
  'Mais links|Galaxy', 'Mais links|Flver', 'Mais links|Selenite',
  'Mais links|Aether', 'Mais links|Voya', 'Mais links|Nebulo', 'Mais links|Fern',
  'Mais links|Onyx', 'Mais links|Sumi', 'Mais links|Boba', 'Mais links|BrowOS',
  'Mais links|Zodiac', 'Mais links|Zaka', 'Mais links|SolaraOS',
  'Mais links|Strawberri', 'Mais links|Steobrrii', 'Mais links|TungTung',
  'Mais links|Rammerhead', 'Mais links|Desync', 'Mais links|TGLSC V5',
  'Mais links|Nexora', 'Mais links|Tung Tung Club', 'Mais links|Achroma',
  'Mais links|Achroma (Oracle Cloud)', 'Melhores|Cherri', 'Melhores|Fern',
  'Melhores|Xylora', 'Melhores|Refract', 'Melhores|Gust'
]);
