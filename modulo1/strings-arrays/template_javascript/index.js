/* Exercícios de interpretação de código
======================================================================================================
Exercício 01:
a. unidentified
b. null
c. 11
d. 0
e. 18
f. 24
======================================================================================================
Exercício 02:
"SUBI NUM ÔNIBUS EM MIRROCOS", 27
======================================================================================================
*/

{
  let nomeDoUsuario = prompt('Por favor, digite seu nome:')
  let emailDoUsuario = prompt('Por favor, digite seu e-mail:')

  console.log(
    `O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vindo, ${nomeDoUsuario}!`
  )
}

//===================================================================================================
{
  let comidasPreferidas = [
    'Lasanha',
    'Sorvete',
    'Feijão',
    'Cookie',
    'Chocolate'
  ]

  console.log(comidasPreferidas)
  console.log(`Essas são minhas comidas favoritas:
Lasanha
Sorvete
Feijão
Cookie
Chocolate `)

  const comidaFavorita = prompt('Qual sua comida favorita?')

  comidasPreferidas[1] = comidaFavorita

  console.log(comidasPreferidas)
}

//====================================================================================================

let listaDeTarefas = []

let tarefa1 = prompt('Elenque uma tarefa que você precisa realizar hoje:')
let tarefa2 = prompt(
  'Elenque uma segunda tarefa que você precisa realizar hoje:'
)
let tarefa3 = prompt(
  'Elenque uma terceira tarefa que você precisa realizar hoje:'
)

listaDeTarefas.push(tarefa1)
listaDeTarefas.push(tarefa2)
listaDeTarefas.push(tarefa3)

console.log(listaDeTarefas)

let indiceDeTarefas = Number(
  prompt(
    'Indique qual atividade você já realizou hoje, inserindo o número 0, 1 ou 2:'
  )
)

listaDeTarefas.splice(indiceDeTarefas, 1)

console.log(listaDeTarefas)

//====================================================================================================

//DESAFIO 01:
let frase = prompt('Digite uma sentença pequena:')

let fraseEmSplit = frase.split(' ')
console.log(fraseEmSplit)

//====================================================================================================

//DESAFIO 02

let frutas = ['Banana', 'Morango', 'Abacaxi', 'Laranja', 'Ameixa']

let frutaAbacaxi = frutas.indexOf('Abacaxi')

console.log(frutaAbacaxi)
