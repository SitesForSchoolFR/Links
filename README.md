# Links for me ✿

Uma coleção de links em uma página estática, pronta para o GitHub Pages. Alguns links foram creditados pelo autor ao ByePassHub no GitHub.

## Publicação

Após integrar os arquivos à branch de publicação, abra **Settings → Pages**, selecione **Deploy from a branch**, escolha a branch e a pasta `/ (root)` e salve. O endereço aparecerá na própria página de configurações. Não é necessário instalar dependências ou compilar o site.

## Editar a coleção

Os dados ficam em `assets/links.js`. Cada grupo tem `category`, `name` e `links`: coloque um endereço por linha dentro das crases. Endereços sem protocolo recebem `https://`; protocolos explícitos são preservados. Links duplicados dentro de um grupo são removidos na apresentação.

A coleção reúne os endereços fornecidos e elimina repetições dentro de cada grupo. Os rótulos sem endereço não foram transformados em links. O código HTML “GN-Math Single File” não foi incorporado: ele baixa e executa código de terceiros e precisa ser analisado antes de ser usado. Links de terceiros não foram verificados e podem mudar ou deixar de funcionar. Endereços HTTP explícitos foram preservados e não oferecem conexão segura.

O botão de som no topo ativa ou desativa um efeito curto, desligado por padrão.

### Sugerir coleção para um novo link

No terminal, com Node.js instalado, execute `node scripts/adicionar-link.cjs https://exemplo.com "nome ou tema"`. Quando um nome é informado, a ferramenta o preserva exatamente: usa uma coleção com esse nome ou sugere criá-la. Sem nome, procura possíveis coleções pelo domínio; caso não encontre uma correspondência única, peça um nome exato. Antes de salvar, revise e confirme a sugestão: domínios compartilhados e mirrors podem ser ambíguos. Para cancelar, responda `n` ou pressione Enter. Isso é uma ferramenta local de manutenção, não uma edição automática feita pelos visitantes do Pages.

## Modo de estudos e favoritos

Toda abertura da página começa no modo de estudos, mesmo quando há dados salvos no navegador. Segure **Shift + A + Y** simultaneamente para trocar entre o modo de estudos e a coleção. O modo atual não é salvo. Os exercícios cobrem do 1º ao 9º ano e as três séries do ensino médio; escolha o ano e clique nas alternativas para receber feedback.

Na coleção, o coração ao lado de cada endereço adiciona ou remove o favorito; o filtro **Favoritos** reúne os endereços salvos. Eles ficam no armazenamento local do navegador e podem não persistir se o armazenamento estiver bloqueado ou for apagado. O atalho exige um teclado físico. A navegação interna não adiciona fragmentos à URL; links externos continuam abrindo seus próprios endereços em outra aba. O site não controla URLs digitadas manualmente, domínios alternativos, nem páginas que o GitHub Pages não encontra.

### Estação de estudos e temas

A estação oferece quizzes de matemática, português e ciências, seleção de ano, pontuação, pesquisa dos conteúdos da área de estudos e personagens fictícios identificados como tal. Português e ciências compartilham exercícios por etapa escolar; matemática tem exercícios específicos por ano. As preferências de ano e matéria ficam no navegador, mas não alteram o modo inicial de estudos.

Na aba Pesquisar, enviar exatamente `Obrigado, Ryan` abre a coleção. **Esse atalho não é uma senha de segurança**: o código da página é público e executa no navegador. `Shift + A + Y` continua alternando os modos; `Shift + A + P` abre a coleção com o tema Tomboy Café. Em Temas, há a opção Kawaii e dez variações Tomboy. Cada variação usa uma ilustração em estilo anime gerada para o projeto (uma original e nove inspiradas em Tomo Aizawa) e uma paleta própria; o tema é salvo localmente sem alterar o modo inicial.

Em dispositivos com mouse, um cursor personalizado substitui temporariamente o ponteiro nativo, com um anel que o segue e reage ao clique. O ponteiro nativo volta quando o mouse sai da página ou se o JavaScript estiver desativado. A preferência de movimento reduzido é respeitada.

### Study Hobby

A página inicial do modo de estudos oferece acesso rápido aos quizzes, pesquisa, uma turma fictícia, cronômetro de foco e bloquinho de notas. O cronômetro não é salvo ao fechar a página. As notas, preferências e o progresso de questões diferentes acertadas são guardados localmente no navegador quando permitido. O progresso pode ser limpo no cartão correspondente; limpar os dados do navegador também o apaga. Os quizzes permitem misturar e reiniciar questões e consultar explicações. São 150 questões distintas: matemática por ano e português e ciências por etapa escolar.

## Testes de desenvolvimento

Com Node.js 18 ou superior, execute `npm ci` e `npm test`. As dependências são necessárias apenas para os testes; o site publicado continua estático e não precisa de instalação ou compilação. Os testes verificam os principais fluxos, formatos de links, temas e cenários com armazenamento local bloqueado, mas não verificam a disponibilidade dos sites externos.

Quando o usuário informar nomes para novas coleções, use exatamente esses nomes; não substitua por apelidos ou nomes semelhantes sem uma solicitação explícita.

As imagens de *O Mentalista* no tema minimalista são reproduções de cenas da série, obtidas de [Collider](https://collider.com/the-mentalist-series-finale-lisbon-ending/). Os direitos das imagens pertencem aos respectivos titulares.

### Menu ASCII de unblockers

No terminal, execute `./unblockers.sh` (requer Node.js). Escolha uma coleção e depois um link. O menu e a roleta compartilham a seleção em `assets/unblockers.js`; os nomes são uma classificação inicial, não uma verificação de Ultraviolet, Scramjet ou disponibilidade. Coleções mistas foram excluídas para evitar incluir jogos por engano.
