//Exercícios de INTERPRETAÇÃO de código

/* 

1.a)  O teste consiste em solicitar um número ao usuário. Se o número for par (devolve o resto da divisão como zero quando o número é dividido por 2), então será true e preencherá a condição "if" e imprimirá no console a mensagem "Passou no teste".
Se o dado inserido não for um número par então cairemos em "else", que imprimirá no console a mensagem "Não passou no teste".

1.b) Para núemros pares
1.c) Para números que NÃO FOREM pares.


2.a) Trata-se do comando switch/case, no qual emite uma resposta (a variável "preco") a depender do input inserido pelo usuário no "case". 
2.b) Mensagem: "O preço da fruta Maçã é R$ 2.25"
2.c) Com retirada do "break" o código não pararia de rodar e o programa voltaria a pedir para o usuário escolher uma fruta.


3.a) A primeira linha solicita um número ao usuário e já o converte o dado inserido de string para number através do comadno Number().
3.b) Ao se digitar 10 será impresso no console a mensagem "Esse número passou no teste". Se o número for -10 não será impresso nada, pois a condição não foi cumprida e não há nenhum comando de else que puxe a "mensagem secreta".
3.c) Haverá erro no console porque a variável "let = mensagem" está no escopo local, isolada entre chaves {}, no entanto o comando de imprimir console.log() está no escopo GLOBAL, de forma que não consegue alcançar o que está isolado pelas mencionadas chaves{}.
*/

//====================================================================================================
//Exercícios de ESCRITA de CÓDIGO
//QUESTÃO 01

{
  let idade = Number(
    prompt('Digite abaixo um número correspondente à sua idade:')
  )
  if (idade > 18) {
    console.log('Parabéns! Você pode dirigir.')
  } else {
    console.log('Que pena! Você ainda não pode dirigir.')
  }
}
//====================================================================================================
//QUESTÃO 02

{
  let turnoEstudo = prompt(
    "Prezado aluno, informe o turno no qual você estuda. Utilize 'M' para matutino, 'V' para vespertino e 'N' para noturno."
  )
  if (turnoEstudo == 'M') {
    console.log('Bom dia!')
  } else if (turnoEstudo == 'T') {
    console.log('Boa tarde!')
  } else if (turnoEstudo == 'N') {
    console.log('Boa noite!')
  }
}
//====================================================================================================
//QUESTÃO 03
{
  let turnoEstudo = prompt(
    "Prezado aluno, informe o turno no qual você estuda. Utilize 'M' para matutino, 'V' para vespertino e 'N' para noturno."
  )
  switch (turnoEstudo) {
    case 'M':
      console.log('Bom dia!')
      break
    case 'T':
      console.log('Boa tarde!')
      break
    case 'N':
      console.log('Boa noite!')
      break
    default:
      console.log(
        "Turno inexistente. Por favor,informe o turno no qual você estuda. Utilize 'M' para matutino, 'V' para vespertino e 'N' para noturno."
      )
      break
  }
}
//====================================================================================================
//Questão 04
{
  let movieGenre = prompt(
    'Qual o tipo de filme que vamos assistir? Comédia ou Fantasia? Digite em minúsculo!'
  )
  let ticketPrice = Number(prompt('Qual o valor do ingresso? Digite um número'))

  if (movieGenre == 'fantasia' && ticketPrice <= Number(15)) {
    console.log('Bom filme!')
  } else {
    console.log('Escolha outro filme :(')
  }
}
//====================================================================================================
//Desafio 01
{
  let movieGenre = prompt(
    'Qual o tipo de filme que vamos assistir? Comédia ou Fantasia? Digite em minúsculo!'
  )
  let ticketPrice = Number(prompt('Qual o valor do ingresso? Digite um número'))
  let lanchinho = prompt('Qual será o seu lanchinho?')

  if (movieGenre == 'fantasia' && ticketPrice <= Number(15)) {
    console.log('Bom filme, e aproveite o seu ' + lanchinho + ' !')
  } else {
    console.log('Escolha outro filme :(')
  }
}
//====================================================================================================
//Desafio 02

//Não foi possível concluir a tempo o desafio

/* let torcedor = prompt('Olá, torcedor! Digite seu nome Completo.')
let tipoJogo = prompt(
  "Torcedor, precisamos saber qual o tipo de jogo que você pretende assistir. Digite 'IN' para partida internacional ou 'DO' para partida doméstica."
)

let etapaJogo = prompt(
  "Torcedor, precisamos saber qual a etapa do jogo que você pretende assistir. Digite 'SF' para semifinal, 'DT' para decisão de terceiro lugar,  ou 'FI' para a final de campeonato."
)
function jogoEtapa() {
  if (etapaJogo == 'SF') {
    console.log('Semifinal')
  } else if (etapaJogo == 'DT') {
    console.log('Decisão de Terceiro Lugar')
  } else if (etapaJogo == 'FI') {
    console.log('Final de Campeonato')
    return
  }
}
let categoria = Number(
  prompt(
    'Torcedor, precisamos saber qual a categoria do ingresso que você pretende comprar. Digite um número de 1 a 4 para escolher.'
  )
)
let quantidade = Number(
  prompt(
    'Torcedor, precisamos saber quantos ingressos você pretende comprar. Digite a quantidade aqui:'
  )
)
const SemiFin1 = Number(1320.0)
const SemiFin2 = Number(880.0)
const SemiFin3 = Number(550.0)
const SemiFin4 = Number(220.0)
const DecTer1 = Number(660.0)
const DecTer2 = Number(440.0)
const DecTer3 = Number(330.0)
const DecTer4 = Number(170.0)
const final1 = Number(1980.0)
const final2 = Number(1320.0)
const final3 = Number(880.0)
const final4 = Number(330.0)

function ticketNac() {
  if (etapaJogo == 'SF' && categoria === 1) {
    console.log(SemiFin1 * quantidade)
  } else if (etapaJogo == 'SF' && categoria === 2) {
    console.log(SemiFin2 * quantidade)
  } else if (etapaJogo == 'SF' && categoria === 3) {
    console.log(SemiFin3 * quantidade)
  } else if (etapaJogo == 'SF' && categoria === 4) {
    console.log(SemiFin4 * quantidade)
  } else if (etapaJogo == 'DT' && categoria === 1) {
    console.log(DecTer1 * quantidade)
  } else if (etapaJogo == 'DT' && categoria === 2) {
    console.log(DecTer2 * quantidade)
  } else if (etapaJogo == 'DT' && categoria === 3) {
    console.log(DecTer3 * quantidade)
  } else if (etapaJogo == 'DT' && categoria === 4) {
    console.log(DecTer4 * quantidade)
  } else if (etapaJogo == 'FI' && categoria === 1) {
    console.log(final1 * quantidade)
  } else if (etapaJogo == 'FI' && categoria === 2) {
    console.log(final2 * quantidade)
  } else if (etapaJogo == 'FI' && categoria === 3) {
    console.log(final3 * quantidade)
  } else if (etapaJogo == 'FI' && categoria === 4) {
    console.log(final4 * quantidade)
    return
  }
}

function ticketTotal() {
  if (tipoJogo == 'DO') {
    ticketNac()
  } else if (tipoJogo == 'IN') {
    ticketNac() * Number(4.1)
  }
  return
}

console.log(
  `  
--- Dados da Compra ---
Nome do cliente:   ${torcedor}
Tipo do jogo:  ${tipoJogo} 
Etapa do jogo: 
  ${etapaJogo}
  Categoria:  ${categoria} 
Quantidade de Ingressos:  ${quantidade} ingressos 


---Valores--- 
Valor do ingresso: 
  ${ticketNac()}
  Valor total: 
  ${ticketTotal()}`
) */
