// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // Como ainda não aprendemos o tópico "função", nomeei as variáveis para estabelecer o que seriam a base e altura e a partir daí pedi para imprimir a multiplicação de ambas.
  let base = Number(prompt('Insira o valor para base:'))
  let altura = Number(prompt('Insira o valor para altura:'))

  console.log(base * altura)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // Estabeleci as variáveis para ano de nascimento e ano atual. Em seguida as imprimi no console log subtraindo uma da outra para chegar à idade do usuário.

  let anoAtual = Number(prompt('Digite o ano atual.'))
  let anoNascimento = Number(prompt('Digite o ano de seus nascimento.'))

  console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // Como as variáveis já estão declaradas é só aplicar o "return" com a fórmula de IMC

  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // Lógica foi simples, apenas usar o prompt para perguntar as informações ao usuário. O desafio foi usar o `${string}`, cuja funcionalidade eu ainda não conhecia.
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  let nome1 = prompt('Insira seu nome aqui:')
  let idade1 = prompt('Insira sua idade aqui:')
  let email1 = prompt('Insira seu email aqui:')

  console.log(
    `Meu nome é ${nome1}, tenho ${idade1} anos, e o meu email é ${email1}.`
  )
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // Primeiramente devemos exigir  que o usuário digite suas cores favoritas, sem ordem específica. Em seguida criamos uma array contendo as 3 cores e as imprimimos no console através.
  let corA = prompt('Diga sua cor favorita!')
  let corB = prompt('Diga outra cor favorita!')
  let corC = prompt('Diga mais uma cor favorita!')

  let coresFavoritas = [corA, corB, corC]

  console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // Pegamos a variável 'string' utilizamos o método .toUpperCase() para deixar todas as letras em maiusculas

  let maiuscula = string.toUpperCase()

  return maiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // Mesma lógica do exercício 3

  let custoEspetaculo = custo / valorIngresso

  return custoEspetaculo
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // É preciso trabalhar com o métido de stirng ".length"

  let stringA = string1.length
  let stringB = string2.length

  return stringA === stringB
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // Trata-se de um método de array. O array pode armazenar inúmeras variáveis. Quando começamos a contar, nós contamos a partir do 0. Logo, o software deve retornar o array a partir do 0.

  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // Segue-se a lógica do exercício anterior. No entanto, deve-se utiizar o ___ por se solicitar a última posição. Como não sabemos o tamanho do array, em tese não podemos declarar qual caractér está na última posição.

  let ultimo = array[array.length - 1]
  return ultimo
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array, arrayIndiceZero) {
  //Foi necessário criar uma nova variável em array (arrayIndiceZero) para transferir receber o primeiro caractér do array.

  arrayIndiceZero = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = arrayIndiceZero

  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

  let comparacao = string1.toUpperCase() === string2.toUpperCase()

  return comparacao
}

// EXERCÍCIO 13
function checaRenovacaoRG() 
/*   DESISTI, NÃO DEU TEMPO
  
  
  let anoAtual = Number(prompt('Digite o ano atual.'))
  let anoNascimento = Number(prompt('Digite o ano de seus nascimento.'))
  let emissaoRg =  Number(prompt('Digite o ano no qual seu RG foi emitido.'))
 */
  









// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
}
