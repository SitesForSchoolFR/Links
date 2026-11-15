// Desafios autorais e explicações; a página não depende de serviços externos.
const studyQuestions = {
  '1º ano': [
    ['Quanto é 8 + 7?', ['13', '15', '16', '14'], 1, 'Somando 8 e 7, encontramos 15.'],
    ['Qual número vem imediatamente antes de 30?', ['29', '28', '31', '20'], 0, 'O antecessor de 30 é 29.'],
    ['Uma caixa tem 12 lápis. Se tirarmos 4, quantos restam?', ['6', '7', '8', '9'], 2, '12 − 4 = 8.']
  ],
  '2º ano': [
    ['Quanto é 37 + 25?', ['52', '62', '72', '60'], 1, '37 + 20 + 5 = 62.'],
    ['Quanto é 54 − 18?', ['36', '44', '38', '34'], 0, '54 − 10 − 8 = 36.'],
    ['Há 4 grupos com 3 maçãs em cada. Quantas maçãs há?', ['7', '10', '12', '14'], 2, '4 grupos de 3 correspondem a 4 × 3 = 12.']
  ],
  '3º ano': [
    ['Quanto é 7 × 8?', ['48', '54', '56', '64'], 2, '7 × 8 = 56.'],
    ['Quanto é 72 ÷ 9?', ['7', '8', '9', '6'], 1, 'Como 9 × 8 = 72, então 72 ÷ 9 = 8.'],
    ['Um retângulo mede 6 cm por 3 cm. Qual é seu perímetro?', ['9 cm', '18 cm', '12 cm', '36 cm'], 1, 'O perímetro é a soma dos lados: 6 + 3 + 6 + 3 = 18 cm.']
  ],
  '4º ano': [
    ['Qual é a metade de 3/4?', ['1/4', '3/8', '2/4', '3/2'], 1, 'A metade de 3/4 é 3/4 ÷ 2 = 3/8.'],
    ['Quanto é 125 × 4?', ['400', '450', '500', '525'], 2, '125 × 4 = 500.'],
    ['Quantos minutos há em 2 horas e meia?', ['120', '130', '150', '180'], 2, 'Duas horas são 120 minutos; mais meia hora são 150.']
  ],
  '5º ano': [
    ['Quanto é 3/4 + 1/8?', ['4/12', '7/8', '4/8', '1'], 1, '3/4 equivale a 6/8; então 6/8 + 1/8 = 7/8.'],
    ['Um produto custa R$ 80 e tem 25% de desconto. Qual é o preço final?', ['R$ 55', 'R$ 60', 'R$ 65', 'R$ 75'], 1, '25% de 80 é 20; portanto 80 − 20 = 60.'],
    ['Qual é a área de um retângulo de 9 cm por 5 cm?', ['14 cm²', '28 cm²', '45 cm²', '90 cm²'], 2, 'Área = base × altura = 9 × 5 = 45 cm².']
  ],
  '6º ano': [
    ['Quanto é 2,5 × 0,4?', ['0,1', '1', '10', '1,4'], 1, '25 × 4 = 100; com duas casas decimais no total, o resultado é 1,00.'],
    ['Qual é o mínimo múltiplo comum de 6 e 8?', ['12', '24', '48', '14'], 1, '24 é o menor número positivo divisível por 6 e por 8.'],
    ['Qual número é primo?', ['21', '27', '29', '33'], 2, '29 só tem dois divisores positivos: 1 e 29.']
  ],
  '7º ano': [
    ['Quanto é −7 + 12 − 3?', ['−2', '2', '8', '−8'], 1, '−7 + 12 = 5; 5 − 3 = 2.'],
    ['Se 3x + 5 = 20, qual é o valor de x?', ['3', '5', '7', '15'], 1, '3x = 15, portanto x = 5.'],
    ['Um triângulo tem ângulos de 45° e 65°. Quanto mede o terceiro?', ['60°', '70°', '80°', '90°'], 1, 'A soma dos ângulos internos é 180°: 180 − 45 − 65 = 70°.']
  ],
  '8º ano': [
    ['Quanto é 2³ × 2⁴?', ['2⁷', '2¹²', '4⁷', '2¹'], 0, 'Na multiplicação de potências de mesma base, somamos os expoentes: 2⁷.'],
    ['Resolva: 2(x − 3) = 10.', ['5', '7', '8', '13'], 2, 'Dividindo por 2, x − 3 = 5; logo x = 8.'],
    ['Qual é a soma dos ângulos internos de um pentágono?', ['360°', '540°', '720°', '900°'], 1, 'Para um polígono de 5 lados: (5 − 2) × 180° = 540°.']
  ],
  '9º ano': [
    ['Qual é a solução positiva de x² = 81?', ['8', '9', '−9', '18'], 1, '9² = 81; a questão pede a solução positiva.'],
    ['Um triângulo retângulo tem catetos 6 e 8. Qual é a hipotenusa?', ['10', '12', '14', '48'], 0, 'Pelo teorema de Pitágoras: √(6² + 8²) = √100 = 10.'],
    ['Para f(x) = 2x − 3, quanto vale f(5)?', ['5', '7', '10', '13'], 1, 'Substituindo x por 5: 2 × 5 − 3 = 7.']
  ],
  '1ª série do ensino médio': [
    ['Quais são as raízes de x² − 5x + 6 = 0?', ['1 e 6', '2 e 3', '−2 e −3', '0 e 5'], 1, 'Fatorando: (x − 2)(x − 3) = 0.'],
    ['Se f(x) = 3x + 2, para qual x temos f(x) = 14?', ['2', '3', '4', '6'], 2, '3x + 2 = 14, então 3x = 12 e x = 4.'],
    ['Qual é a razão da PA 4, 9, 14, 19, ...?', ['4', '5', '9', '14'], 1, 'Cada termo aumenta 5 unidades em relação ao anterior.']
  ],
  '2ª série do ensino médio': [
    ['Qual é o valor de log₁₀(1000)?', ['2', '3', '10', '100'], 1, '10³ = 1000, portanto log₁₀(1000) = 3.'],
    ['De quantas maneiras podemos ordenar 3 livros diferentes?', ['3', '6', '9', '12'], 1, 'São 3! = 3 × 2 × 1 = 6 ordenações.'],
    ['Em um triângulo retângulo, seno de um ângulo é:', ['Cateto oposto / hipotenusa', 'Cateto adjacente / hipotenusa', 'Hipotenusa / cateto oposto', 'Cateto oposto / cateto adjacente'], 0, 'O seno é a razão entre o cateto oposto e a hipotenusa.']
  ],
  '3ª série do ensino médio': [
    ['Qual é a probabilidade de tirar um número par em um dado justo?', ['1/6', '1/3', '1/2', '2/3'], 2, 'Há 3 resultados pares (2, 4, 6) em 6 possíveis: 3/6 = 1/2.'],
    ['Qual é a média dos números 3, 5, 7 e 9?', ['5', '6', '7', '8'], 1, 'A soma é 24; dividindo pelos 4 valores, obtemos 6.'],
    ['Qual é a soma dos 10 primeiros termos da PA 1, 2, 3, ...?', ['45', '50', '55', '60'], 2, 'S₁₀ = (1 + 10) × 10 / 2 = 55.']
  ]
};
const gradeSelect = document.querySelector('#grade');
const questionContainer = document.querySelector('#questions');
for (const name of Object.keys(studyQuestions)) {
  const option = document.createElement('option'); option.value = name; option.textContent = name; gradeSelect.append(option);
}
gradeSelect.value = '5º ano';
function showQuestions() {
  questionContainer.replaceChildren();
  studyQuestions[gradeSelect.value].forEach(([question, answers, correct, explanation], index) => {
    const card = document.createElement('article'); card.className = 'question';
    const number = document.createElement('span'); number.className = 'question-number'; number.textContent = `QUESTÃO ${String(index + 1).padStart(2, '0')}`;
    const title = document.createElement('h3'); title.textContent = question;
    const options = document.createElement('div'); options.className = 'answer-options'; options.setAttribute('role', 'group'); options.setAttribute('aria-label', question);
    const feedback = document.createElement('p'); feedback.className = 'answer-feedback'; feedback.setAttribute('aria-live', 'polite');
    answers.forEach((answer, answerIndex) => {
      const button = document.createElement('button'); button.type = 'button'; button.textContent = answer;
      button.addEventListener('click', () => {
        for (const other of options.children) { other.classList.remove('correct', 'incorrect'); other.removeAttribute('aria-pressed'); }
        const isCorrect = answerIndex === correct;
        button.classList.add(isCorrect ? 'correct' : 'incorrect'); button.setAttribute('aria-pressed', 'true');
        feedback.textContent = isCorrect ? `Muito bem! ${explanation}` : 'Ainda não! Tente outra alternativa.';
        feedback.className = `answer-feedback ${isCorrect ? 'success' : 'retry'}`;
      }); options.append(button);
    });
    card.append(number, title, options, feedback); questionContainer.append(card);
  });
}
gradeSelect.addEventListener('change', showQuestions); showQuestions();
