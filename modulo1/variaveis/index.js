/* Questões de interpretação de código. Respostas:

1) 10 5
2) 10 10 10
3) let horasPorDia
  let pagamentoPorDia*/

//Exercícios de escrita de código:

/* const nome =
  const idade =

  console.log (typeof nome, typeof idade) */

/*Foi não foi impresso nada. Foi considerado um erro de sintaxe pois não foi atribuído um valor à variável.*/

let nome = 'Caio'
let idade = 33

prompt('Qual seu nome?')
prompt('Qual a sua idade?')

/* Ao  utilizar o comando de prompt o console solicita informações referentes à pergunta elaborada.
A resposta da pergunta é referente à variável criada anteriormente*/

console.log('Olá, meu nome é', nome, 'e eu tenho', idade, 'anos de idade.')

let feliz = prompt('Você está se sentindo feliz hoje?')
let lanche = prompt('Toda hora é hora de um lanche?')
let exterior = prompt('Você pretende trabalhar para empresas no exterior?')

console.log('Você está se sentindo feliz hoje?', feliz)
console.log('Toda hora é hora de um lanche?' + lanche)
console.log('Você pretende trabalhar para empresas no exterior?' + exterior)

let a = 10
let b = 25

let c = a
a = b
b = c

console.log('O novo valor de a é', a) // O novo valor de a é 25
console.log('O novo valor de b é', b) // O novo valor de b é 10
