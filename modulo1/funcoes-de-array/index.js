//Exercícios de INTERPRETAÇÃO de código
//QUESTÃO 01-A
/*
Resposta: Vai imprimir no console o conteúdo do Array inteiro.

*/

//QUESTÃO 02-A
/*
Resposta: Será impresso no console o elemento "nome" no array usuarios.

*/
//QUESTÃO 03-A

/*
Resposta: Utilizando o "!== Chijo" o novo array criado imprimirá todos os objetos dentro do array usuarios, excluindo o que contenha "Chijo".
Logo, não será impresso nem o nome nem o apelido referidos a Chijo.

*/
//=============================================================

//Exercícios de ESCRITA de código
//Questão 01
const pets = [
  { nome: 'Lupin', raca: 'Salsicha' },
  { nome: 'Polly', raca: 'Lhasa Apso' },
  { nome: 'Madame', raca: 'Poodle' },
  { nome: 'Quentinho', raca: 'Salsicha' },
  { nome: 'Fluffy', raca: 'Poodle' },
  { nome: 'Caramelo', raca: 'Vira-lata' }
]
//01-A

const pets2 = pets.map((item, index, array) => {
  return item.nome
})

console.log(pets2)

//01-B

const petDaschund = pets.filter((item, index, array) => {
  return item.raca === 'Salsicha'
})

console.log(petDaschund)

//01-C
const poodleDeal = pets.filter((item, index, array) => {
  if (item.raca === 'Poodle') return item.nome
})

const mesageDeal = poodleDeal.map((item, index, array) => {
  return `Você ganhou um cupom de desconto de 10% para tosar o/a, ${item.nome}`
})

console.log(mesageDeal)

//=============================================================
//Questão 02

const produtos = [
  { nome: 'Alface Lavada', categoria: 'Hortifruti', preco: 2.5 },
  { nome: 'Guaraná 2l', categoria: 'Bebidas', preco: 7.8 },
  { nome: 'Veja Multiuso', categoria: 'Limpeza', preco: 12.6 },
  { nome: 'Dúzia de Banana', categoria: 'Hortifruti', preco: 5.7 },
  { nome: 'Leite', categoria: 'Bebidas', preco: 2.99 },
  { nome: 'Cândida', categoria: 'Limpeza', preco: 3.3 },
  { nome: 'Detergente Ypê', categoria: 'Limpeza', preco: 2.2 },
  { nome: 'Vinho Tinto', categoria: 'Bebidas', preco: 55 },
  { nome: 'Berinjela kg', categoria: 'Hortifruti', preco: 8.99 },
  { nome: 'Sabão em Pó Ypê', categoria: 'Limpeza', preco: 10.8 }
]

//02-A

const productName = produtos.map(item => {
  return item.nome
})
console.log(productName)

//02-B
const applyDiscount = produtos => {
  return produtos.map(produtos => {
    return {
      nome: produtos.nome,
      preco: (produtos.preco * 0.95).toFixed(2)
    }
  })
}
console.log(applyDiscount)

//02-C
const productDrinks = produtos.filter(item => produtos.categoria === 'Bebidas')
console.log(productDrinks)

//02-D
const nomeYpe = produtos.filter(item => item.nome.includes('Ypê'))
console.log(nomeYpe)

//02-E
const productYpe = produtos.map((item, index, array) => {
  return item.nome
})
const priceYpe = produtos.map((item, index, array) => {
  return item.preco
})

for (let indice = 0; indice < produtos.length; indice++)
  console.log(` Compre ${productYpe[indice]} por ${priceYpe[indice]}`)

/* const mesageYpe = produtos.map(produtos => {
  return `Compre ${produtos.nome} por ${produtos.preco}`
})
console.log(mesageYpe) */
