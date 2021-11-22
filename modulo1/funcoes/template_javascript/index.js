/* Exercícios de Interpteação de Código:

Exercício 01
A) Será impresso no número 10 em string, pois não foi especificado com o Number()
B) Será impresso no número 50 em string, pois não foi especificado com o Number()
======================================================================================================

Exercício 02

A) A função pedirá para o usuário inserir um texto e realizará com ele duas ações: primeiramente deixará todo o texto inserido em minúsculo. Em seguida vai buscar se no texto inserido há a palavra 'cenoura'. Se houver, retornará TRUE. Se não houver, retornará FALSE.

B) I - true; II - true; III - false.
======================================================================================================

*/

// Exercícios de Escrita de Código
//Exercício 01-A
{
  function imprimirMensagem() {
    console.log(
      'Eu sou Caio, tenho 32 anos, moro em Maceió e sou estudante da Labenu!'
    )
  }

  return imprimirMensagem()
}

//Exercício 01-B

function receberParametros(nome, idade, cidade, profissao) {
  return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade}, e trabalho como ${profissao}.`
}

console.log(receberParametros('Caio', 33, 'Maceió', 'Advogado'))

//====================================================================================================
//Exercício 02

{
  function soma(num1, num2) {
    return num1 + num2
  }
  console.log(soma(9, 10))
}

{
  function maiorQue(num1, num2) {
    return num1 >= num2
  }
  console.log(maiorQue(12, 25))
}

{
  function parOuImpar(num1) {
    return num1 % 2 === 0
  }

  console.log(parOuImpar(28))
}

{
  function receberMensagem(mensagem) {
    let comprimento = mensagem.length
    let maiuscula = mensagem.toUpperCase()
    let concatenar = comprimento + ' ' + maiuscula
    return concatenar
  }
  console.log(receberMensagem('abra a porta e a janela'))
}

//====================================================================================================
//Exercício 03
{
  function soma(numero1, numero2) {
    return soma
  }
  
}

{
  function subtracao(numero1, numero2) {
    return numero1 - numero2
  }
  
}

{
  function multiplicacao(numero1, numero2) {
    return numero1 * numero2
  }
 
}

{
  function divisao(numero1, numero2) {
    return numero1 / numero2
  }
  
}


let numero1 = Number(Prompt('Por favor digite um numero'))
let numero2 = Number(Prompt('Por favor digite um novo numero'))


console.log("Números inseridos:", numero1, numero2)
console.log("soma:", soma(numero1, numero2))
console.log("subtração", subtracao(numero1, numero2))
console.log("multiplicação": multiplicacao(numero1, numero2))
console.log("Divisão:", divisao(numero1, numero2))





//====================================================================================================
//DESAFIO 1-A
const imprimirNome = Caio => {
  return Caio
}

console.log(imprimirNome)

//Desafio 1-B

const somaNumero = Number(12, 82) => 12+82

console.log(somaNumero)

//Desafio 2




function teoPit(num1, num2, num3){
   
let cat1 = Number(num1)
let cat2 = Number(num2)
let hip = Number(num3)
let pitagoras = ((hip * hip) = (cat1*cat1) + (cat2*cat2))
return pitagoras
 }

console.log(teoPit(12, 5, 9))


