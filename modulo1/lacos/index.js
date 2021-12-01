// Exercícios de INTERPRETAÇÃO de códigos
/*Questão 01
 O código programa um ciclo (loop), no qual a variável "valor" recebe mais uma unidade a cada volta. Quando "valor" atinge uma quantidade igual ao número 5, é somada à variável "i" e então impressa no console.*/
//=============================================================
//Questão 02-A
/* O "for..of" vai buscar um elemnto dentro do array lista. Se o número foi maior que 18,

if (numero > 18)

ele será impresso no console.
 Logo, serão impressos os números: [19, 21, 23, 25, 27, 30]
*/
//Questão 02-B
/*
Não é possível porque apesar de  o "for..of" percorre todos os elementos do array, mas não se tem acesso ao ÍNDICE dos referidos elementos.
*/
//=============================================================
// Questão 03
/* Ao se digitar 4 no prompt o programa iniciará um ciclo o qual imprimirá no console mais um asterisco  "*" a cada loop até atingir os 4.

Imprimir-se-á no console: 
*
**
***
****

*/

//=============================================================

//Exercícios de ESCRITA de código
//Questão 01
let manyPets = Number(
  prompt('Digite em números a quantidade de bichinhos que você tem.')
)
let arrayPets = []

if (manyPets === 0) {
  console.log('Que pena! Você pode adotar um pet!')
} else {
  for (i = 0; i < manyPets; i++) {
    let petName = prompt('Digite o nome do seu bichinho!')
    arrayPets.push(petName)
  }
}
console.log(arrayPets)

//==========================================================================================
//Questão 02

let arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

//Questão 02-A

function imprimirArray(arrayOriginal) {
  for (let i in arrayOriginal) {
    console.log(arrayOriginal[i])
  }
}
imprimirArray(arrayOriginal)
console.log()
//Questão 02-B

function dividirArray(arrayOriginal) {
  for (let i in arrayOriginal) {
    console.log(arrayOriginal[i] / 10)
  }
}

dividirArray(arrayOriginal)

//Questão 02-C

let arrayEven = []
const evenArrays = arrayOriginal => {
  for (let i in arrayOriginal) {
    if (arrayOriginal[i] % 2 === 0) {
      let even = arrayOriginal[i]
      arrayEven.push(even)
    }
  }
}
evenArrays(arrayOriginal)
console.log(arrayEven)

//Questão 02-D
let newArray = []
function imprimirArray(arrayOriginal) {
  for (let i in arrayOriginal) {
  }
}
let string = 'O elemento do índex ' + i + 'é: ' + arrayOriginal[i]
newArray.push(string)

imprimirArray(arrayOriginal)
console.log(newArray)

//Questão02-E

let maxValue = Math.max(...arrayOriginal)
let minValue = Math.min(...arrayOriginal)

console.log(`O maior número é ${maxValue} e o menor número é ${minValue}`)
//====================================================================================================
