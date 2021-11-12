/* Exercícios de interpretação de código
------------------------------------------------------------------------------------------------------
Questão 1:
a. FALSE
b. FALSE
c. FALSE
d. typeof resultado -> boolean
------------------------------------------------------------------------------------------------------
Questão 2 & 3
Respostas: O erro se encontra no fato de que tudo o que o usuário insere dentro do promot se torna uma
STRING.

Desta forma, serão impressos os números CONCATENADOS (um do ladinho do outro), e não somados.


Logo, é necessário realizar a conversão destes dois tipos usando o comando Number()


A soluçãos seria colocar:

let primeiroNumero = prompt('Digite um numero!')
let segundoNumero = prompt('Digite outro numero!')

let numeroUm = Number(primeiroNumero)
let numeroDois = Number(segundoNumero)

const soma = numeroUm + numeroDois

console.log(soma)
------------------------------------------------------------------------------------------------------
*/

/* Exercícios de escrita de código */

//Exercício 1
{
  let idadeUsuario = Number(prompt('Qual a sua idade?'))
  let idadeAmigo = Number(
    prompt('Qual a idade do(a) seu(sua) melhor amigo (a)?')
  )
  let difencialIdade = idadeUsuario > idadeAmigo

  console.log('Sua idade é maior do que a do seu melhor amigo?', difencialIdade)
  console.log(idadeUsuario - idadeAmigo)
}
// --------------------------------------------------------------------------------------------------
// Exercício 2
{
  let numeroPar = prompt('Insira um número par!')

  let numeroPara = Number(numeroPar)
  console.log(numeroPara % 2)

  //Observa-se que o RESTO é sempre zero!
  //Se inserirmos um número ímpar o resto será sempre 1!
}
//----------------------------------------------------------------------------------------------------
//Exercício 3
{
  let idade = prompt('Qual a sua idade?')

  let idadeMeses = idade * 12
  let idadeDias = idade * 365
  let idadeHoras = idade * 8760

  console.log(idadeMeses)
  console.log(idadeDias)
  console.log(idadeHoras)
}
//----------------------------------------------------------------------------------------------------
//Exercício 4
{
  let num1 = Number(prompt('Insira um número aqui:'))
  let num2 = Number(prompt('Insira outro um número aqui:'))

  console.log('O primeiro numero é maior que segundo?', num1 > num2)
  console.log('O primeiro numero é igual ao segundo?', num1 === num2)
  console.log('O primeiro numero é divisível pelo segundo?', num1 % num2 === 0)
  console.log('O segundo numero é divisível pelo primeiro?', num2 % num1 === 0)
}
