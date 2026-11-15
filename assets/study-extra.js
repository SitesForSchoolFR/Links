// Questões adicionais autorais. Matemática por ano; demais matérias por etapa escolar.
const extraStudyQuestions = {
 math: {
  '1º ano': [
   ['Quanto é 9 + 6?', ['14','15','16','13'],1,'9 + 6 = 15.'],
   ['Quanto é 17 − 9?', ['7','8','9','10'],1,'17 − 9 = 8.'],
   ['Qual é o maior número?', ['21','19','12','20'],0,'21 é maior que 20, 19 e 12.'],
   ['Quantos lados tem um quadrado?', ['3','4','5','6'],1,'Um quadrado tem quatro lados.'],
   ['Ana tem 5 balas e ganha mais 8. Quantas tem agora?', ['12','13','14','15'],1,'5 + 8 = 13.']
  ],
  '2º ano': [
   ['Quanto é 46 + 27?', ['63','73','83','72'],1,'46 + 27 = 73.'],
   ['Quanto é 80 − 35?', ['45','55','35','50'],0,'80 − 35 = 45.'],
   ['Quanto é 5 × 4?', ['9','15','20','25'],2,'Cinco grupos de quatro somam 20.'],
   ['Qual é a metade de 28?', ['12','14','16','18'],1,'28 dividido em duas partes iguais resulta em 14.'],
   ['Quantos centímetros há em 1 metro?', ['10','100','1000','60'],1,'Um metro equivale a 100 centímetros.']
  ],
  '3º ano': [
   ['Quanto é 9 × 6?', ['45','54','56','63'],1,'9 × 6 = 54.'],
   ['Quanto é 63 ÷ 7?', ['7','8','9','10'],2,'7 × 9 = 63.'],
   ['Qual fração representa uma de quatro partes iguais?', ['1/2','1/3','1/4','4/1'],2,'Uma parte de quatro é 1/4.'],
   ['Quanto é 350 + 280?', ['530','620','630','730'],2,'350 + 280 = 630.'],
   ['Uma semana e três dias somam quantos dias?', ['9','10','11','12'],1,'Uma semana tem 7 dias: 7 + 3 = 10.']
  ],
  '4º ano': [
   ['Qual é o resultado de 1.248 + 576?', ['1.724','1.824','1.834','1.924'],1,'1.248 + 576 = 1.824.'],
   ['Quanto é 144 ÷ 12?', ['11','12','13','14'],1,'12 × 12 = 144.'],
   ['Qual fração equivale a 1/2?', ['2/4','1/4','3/4','2/3'],0,'2/4 simplificado por 2 é 1/2.'],
   ['Qual é a área de um quadrado de lado 5 cm?', ['10 cm²','20 cm²','25 cm²','30 cm²'],2,'Área = 5 × 5 = 25 cm².'],
   ['Um quarto de 80 é:', ['10','20','30','40'],1,'80 ÷ 4 = 20.']
  ],
  '5º ano': [
   ['Quanto é 1,5 + 2,75?', ['3,25','4,15','4,25','4,75'],2,'1,50 + 2,75 = 4,25.'],
   ['Qual é 10% de 240?', ['12','24','30','40'],1,'10% corresponde a um décimo: 240 ÷ 10 = 24.'],
   ['Quanto é 2/3 − 1/3?', ['1/3','1/6','1/9','3/3'],0,'Os denominadores são iguais, então 2/3 − 1/3 = 1/3.'],
   ['Qual é o volume de um cubo de aresta 3 cm?', ['9 cm³','18 cm³','27 cm³','36 cm³'],2,'Volume = 3 × 3 × 3 = 27 cm³.'],
   ['Uma receita usa 250 ml de leite. Para 3 receitas, quanto é necessário?', ['500 ml','650 ml','750 ml','800 ml'],2,'250 × 3 = 750 ml.']
  ],
  '6º ano': [
   ['Qual é o máximo divisor comum de 12 e 18?', ['2','3','6','12'],2,'Os divisores comuns incluem 1, 2, 3 e 6; o maior é 6.'],
   ['Quanto é 5/6 + 1/6?', ['1','6/12','5/12','1/6'],0,'5/6 + 1/6 = 6/6 = 1.'],
   ['Quanto é 3² + 4²?', ['7','12','25','49'],2,'3² + 4² = 9 + 16 = 25.'],
   ['Um ângulo de 120° é:', ['agudo','reto','obtuso','raso'],2,'Um ângulo obtuso mede mais de 90° e menos de 180°.'],
   ['Quanto é 7,2 ÷ 3?', ['2,4','2,6','3,4','24'],0,'7,2 dividido por 3 é 2,4.']
  ],
  '7º ano': [
   ['Quanto é (−4) × (−6)?', ['−24','−10','10','24'],3,'O produto de dois números negativos é positivo: 24.'],
   ['Se x/4 = 7, qual é x?', ['11','21','28','32'],2,'Multiplicando ambos os lados por 4, x = 28.'],
   ['Qual é 15% de 200?', ['15','20','30','40'],2,'10% de 200 é 20 e 5% é 10; juntos são 30.'],
   ['Qual é o oposto de −11?', ['−11','0','1','11'],3,'O oposto de −11 é 11.'],
   ['Uma razão de 2 para 5 pode ser escrita como:', ['2/5','5/2','2 + 5','5 − 2'],0,'A razão de 2 para 5 é 2/5.']
  ],
  '8º ano': [
   ['Quanto é √144?', ['10','11','12','14'],2,'A raiz quadrada principal de 144 é 12.'],
   ['Se x + y = 10 e x = 4, quanto vale y?', ['4','5','6','14'],2,'Substituindo x: 4 + y = 10, então y = 6.'],
   ['Simplifique 3a + 5a − 2a.', ['6a','8a','10a','6'],0,'Somamos os coeficientes: 3 + 5 − 2 = 6.'],
   ['Quanto vale 10⁻²?', ['0,01','0,1','10','100'],0,'10⁻² = 1/100 = 0,01.'],
   ['Qual é a média de 6, 8 e 10?', ['6','7','8','9'],2,'(6 + 8 + 10) ÷ 3 = 8.']
  ],
  '9º ano': [
   ['Qual é uma raiz de x² − 16 = 0?', ['2','4','8','16'],1,'x² = 16; as raízes são 4 e −4.'],
   ['Se f(x) = 3x + 1, quanto é f(4)?', ['7','12','13','15'],2,'f(4) = 3 × 4 + 1 = 13.'],
   ['Qual é a área de um círculo de raio 2?', ['2π','4π','8π','16π'],1,'Área = πr² = π × 2² = 4π.'],
   ['Qual é a forma decimal de 3/5?', ['0,3','0,5','0,6','0,8'],2,'3 ÷ 5 = 0,6.'],
   ['Em uma moeda justa, qual é a chance de cara?', ['1/4','1/3','1/2','1'],2,'Cara e coroa têm a mesma chance: 1/2.']
  ],
  '1ª série do ensino médio': [
   ['Qual é o vértice de f(x) = (x − 2)² + 3?', ['(2, 3)','(−2, 3)','(2, −3)','(3, 2)'],0,'Na forma de vértice, o ponto é (2, 3).'],
   ['Qual é a razão da PG 2, 6, 18, ...?', ['2','3','6','12'],1,'Cada termo é multiplicado por 3.'],
   ['Se 2x − 4 > 6, então:', ['x > 1','x > 5','x < 5','x < 1'],1,'2x > 10; dividindo por 2, x > 5.'],
   ['Qual é o domínio real de f(x) = 1/x?', ['Todos os reais','Reais exceto zero','Apenas positivos','Apenas inteiros'],1,'A divisão por zero não é definida.'],
   ['Quanto é 2⁵?', ['10','16','25','32'],3,'2 × 2 × 2 × 2 × 2 = 32.']
  ],
  '2ª série do ensino médio': [
   ['Quanto é log₂(8)?', ['2','3','4','8'],1,'2³ = 8, então log₂(8) = 3.'],
   ['Quantos resultados possíveis há ao lançar duas moedas?', ['2','3','4','6'],2,'São quatro pares possíveis: CC, CK, KC e KK.'],
   ['Qual é o cosseno de 60°?', ['0','1/2','√2/2','1'],1,'O cosseno de 60° é 1/2.'],
   ['Quanto é 5! ?', ['25','60','100','120'],3,'5! = 5 × 4 × 3 × 2 × 1 = 120.'],
   ['Um cilindro tem raio 2 e altura 3. Qual é seu volume?', ['6π','12π','18π','24π'],1,'Volume = πr²h = π × 4 × 3 = 12π.']
  ],
  '3ª série do ensino médio': [
   ['Qual é a mediana de 2, 4, 7, 9, 11?', ['4','6','7','9'],2,'O valor central dos cinco números ordenados é 7.'],
   ['Qual é o juro simples de R$ 100 a 5% ao mês durante 2 meses?', ['R$ 5','R$ 10','R$ 15','R$ 20'],1,'J = 100 × 0,05 × 2 = R$ 10.'],
   ['Qual é a probabilidade de um dado justo mostrar número maior que 4?', ['1/6','1/3','1/2','2/3'],1,'Há dois resultados favoráveis, 5 e 6: 2/6 = 1/3.'],
   ['Qual é a soma das raízes de x² − 7x + 10 = 0?', ['5','7','10','17'],1,'Pela relação de Girard, a soma é −(−7)/1 = 7.'],
   ['Qual é a distância entre os pontos (0, 0) e (3, 4)?', ['4','5','7','12'],1,'Pela distância euclidiana: √(3² + 4²) = 5.']
  ]
 },
 portuguese: [
  [
   ['Qual palavra começa com a mesma letra que bola?', ['Bala','Gato','Casa','Foca'],0,'Bola e bala começam com B.'],
   ['Qual é o plural de flor?', ['Floris','Flores','Flors','Flore'],1,'O plural de flor é flores.'],
   ['Qual palavra nomeia uma pessoa?', ['Menina','Pular','Lento','Verde'],0,'Menina é um substantivo que nomeia uma pessoa.'],
   ['Qual sinal usamos ao final de uma pergunta?', ['Vírgula','Interrogação','Hífen','Dois-pontos'],1,'O ponto de interrogação marca perguntas.'],
   ['Qual palavra é o contrário de grande?', ['Alto','Enorme','Pequeno','Largo'],2,'Pequeno é um antônimo de grande.'],
   ['Quantas sílabas tem a palavra casa?', ['Uma','Duas','Três','Quatro'],1,'Ca-sa tem duas sílabas.']
  ],
  [
   ['Em “os alunos estudam”, qual é o sujeito?', ['Estudam','Os alunos','Os','Alunos estudam'],1,'Quem estuda são os alunos.'],
   ['Qual palavra é um advérbio em “ela chegou cedo”?', ['Ela','Chegou','Cedo','Uma'],2,'Cedo indica circunstância de tempo.'],
   ['Qual frase está no passado?', ['Eu canto','Eu cantarei','Eu cantei','Eu canto agora'],2,'Cantei indica uma ação passada.'],
   ['Qual é o sinônimo de feliz?', ['Alegre','Triste','Lento','Difícil'],0,'Alegre tem sentido semelhante ao de feliz.'],
   ['Qual palavra é um pronome pessoal?', ['Ela','Casa','Bonito','Corre'],0,'Ela é um pronome pessoal.'],
   ['Na expressão “mar de gente”, ocorre:', ['Sentido literal','Sentido figurado','Pontuação','Rima'],1,'Mar de gente é uma expressão figurada para uma multidão.']
  ],
  [
   ['Qual é a função da conjunção “portanto”?', ['Conclusão','Oposição','Alternância','Tempo'],0,'Portanto introduz uma conclusão.'],
   ['Em “estudou bastante, logo passou”, “logo” indica:', ['Lugar','Conclusão','Dúvida','Condição'],1,'Nesse contexto, logo equivale a portanto.'],
   ['Em “se eu estudasse, aprenderia”, a primeira oração expressa:', ['Causa','Condição','Conclusão','Comparação'],1,'A conjunção se introduz uma condição.'],
   ['Qual figura de linguagem aparece em “o vento cantava”?', ['Personificação','Antítese','Pleonasmo','Eufemismo'],0,'Cantar é uma ação humana atribuída ao vento.'],
   ['Qual gênero textual costuma defender uma opinião com argumentos?', ['Texto dissertativo-argumentativo','Receita','Lista de compras','Bilhete de passagem'],0,'Esse gênero apresenta uma tese e argumentos.'],
   ['Em “as ideias foram discutidas”, a voz verbal é:', ['Ativa','Passiva','Reflexiva','Imperativa'],1,'O sujeito recebe a ação: voz passiva.']
  ]
 ],
 science: [
  [
   ['Qual destes animais é um mamífero?', ['Golfinho','Sapo','Borboleta','Sardinha'],0,'Golfinhos são mamíferos e amamentam seus filhotes.'],
   ['Qual sentido usamos principalmente para ouvir?', ['Audição','Olfato','Visão','Paladar'],0,'A audição permite perceber sons.'],
   ['A água sólida é chamada de:', ['Vapor','Gelo','Chuva','Nuvem'],1,'Quando congela, a água forma gelo.'],
   ['O que precisamos para manter o corpo hidratado?', ['Água','Areia','Papel','Tinta'],0,'Beber água ajuda a manter o corpo hidratado.'],
   ['Qual destes materiais pode ser reciclado?', ['Garrafa de vidro','Resto de comida','Casca de banana','Folha seca'],0,'O vidro pode ser reciclado quando descartado corretamente.'],
   ['Qual astro ilumina a Terra durante o dia?', ['Sol','Lua','Marte','Saturno'],0,'O Sol fornece luz para a Terra.']
  ],
  [
   ['Qual gás é essencial para a respiração humana?', ['Oxigênio','Hélio','Hidrogênio','Neônio'],0,'O oxigênio participa da respiração celular.'],
   ['A Terra leva aproximadamente quanto tempo para dar uma volta ao redor do Sol?', ['Um dia','Um mês','Um ano','Dez anos'],2,'A translação terrestre dura aproximadamente um ano.'],
   ['Qual é o papel dos decompositores?', ['Produzir luz','Reciclar matéria orgânica','Criar rochas','Parar o vento'],1,'Decompositores degradam matéria orgânica e reciclam nutrientes.'],
   ['Qual estrutura protege o cérebro?', ['Crânio','Fêmur','Costela','Bacia'],0,'O crânio protege o encéfalo.'],
   ['O que acontece na condensação?', ['Gás vira líquido','Líquido vira gás','Sólido vira gás','Líquido vira sólido'],0,'Na condensação, uma substância passa do estado gasoso para o líquido.'],
   ['Qual é a principal fonte de energia para a maioria dos ecossistemas?', ['Sol','Lua','Solo','Marés'],0,'A energia solar sustenta a maioria das cadeias alimentares.']
  ],
  [
   ['Qual organela produz grande parte do ATP na respiração celular?', ['Mitocôndria','Ribossomo','Lisossomo','Vacúolo'],0,'As mitocôndrias participam da respiração celular aeróbica.'],
   ['O DNA armazena principalmente:', ['Informação genética','Energia luminosa','Água','Oxigênio'],0,'O DNA contém informação genética.'],
   ['Na tabela periódica, elementos são ordenados por:', ['Número atômico','Cor','Massa do objeto','Ponto de fusão'],0,'O número atômico corresponde ao número de prótons.'],
   ['Uma solução com pH 3, a 25 °C, é:', ['Ácida','Neutra','Básica','Sempre salina'],0,'A 25 °C, pH menor que 7 indica solução ácida.'],
   ['Qual lei associa força resultante, massa e aceleração?', ['Segunda lei de Newton','Lei de Ohm','Lei de Mendel','Lei de Boyle'],0,'A segunda lei de Newton é expressa por F = m × a.'],
   ['Em uma cadeia alimentar, produtores são geralmente:', ['Organismos que produzem matéria orgânica','Predadores de topo','Animais carnívoros','Apenas fungos'],0,'Produtores como plantas fabricam matéria orgânica, geralmente por fotossíntese.']
  ]
 ]
};
