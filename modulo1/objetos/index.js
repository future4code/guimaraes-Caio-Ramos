/*
Exercícios de INTERPRETAÇÃO de código:
1)a) Matheus Nachtergaele; Virginia Cavendish; Globo 14h.
2) Juca 3 SRD; jUBA 3 SRD; Jubo 3 SRD. 
3) a) imprime false; b) imprimirá "undefined" porque a propriedade 'altura' não foi delcarada dentro do objeto.
*/

//Exercícios de ESCRITA de código

//Questão 1 - A
{
  let nomeApelido = {
    nome: 'Caio',
    apelidos: ['Mala', 'Tapioquito', 'Tapioca']
  }

  function funcaoApelido(nomeApelido) {
    let imprimeNome = console.log(
      `Olá, o meu nome é ${nomeApelido.nome}, mas pode me chamar de ${nomeApelido.apelidos[0]}, ${nomeApelido.apelidos[1]}, ou ${nomeApelido.apelidos[2]}!`
    )

    return imprimeNome
  }

  console.log(funcaoApelido(nomeApelido))

  //Questão 1 - B

  let novosApelidos = {
    ...nomeApelido,
    apelidos: ['SuperHeroBoy', 'TomahawkCaio', 'Atlanta']
  }

  console.log(funcaoApelido(novosApelidos)) /*{
    
  let novoApelido = console.log(
    `Eu sou ${novosApelidos.nome},mas pode me chamar de ${novosApelidos.apelidos[0]}, ${novosApelidos.apelidos[1]}, ou ${novosApelidos.apelidos[2]} !`
  )
return novoApelido
}*/

  /*function funcaoApelido() {
    let imprimeNome = console.log(
      `Olá, o meu nome é ${nomeApelido.nome}, mas pode me chamar de ${nomeApelido.apelidos[0]}, ${nomeApelido.apelidos[1]}, ou ${nomeApelido.apelidos[2]}!`
    )
    return imprimeNome
  }

  console.log(funcaoApelido(nomeApelido))*/
}
//Questão 2
{
  let dadosPessoaisHomem = {
    nome: 'Caio',
    idade: Number(33),
    profissao: 'advogado'
  }

  let dadosPessoaisMulher = {
    nome: 'Lethícia',
    idade: Number(32),
    profissao: 'advogada'
  }

  function retornarValores(homemOuMulher) {
    return [
      homemOuMulher.nome,
      homemOuMulher.nome.length,
      homemOuMulher.idade,
      homemOuMulher.profissao,
      homemOuMulher.profissao.length
    ]
  }
  console.log(retornarValores(dadosPessoaisHomem))
  console.log(retornarValores(dadosPessoaisMulher))

  /* let dadosHomem = [
      dadosPessoaisHomem.nome,
      dadosPessoaisHomem.idade,
      dadosPessoaisHomem.profissao
    ]

    let dadosMulher = [
      dadosPessoaisMulher.nome,
      dadosPessoaisMulher.idade,
      dadosPessoaisMulher.profissao
    ]
    let retornarTudo = [dadosHomem, dadosMulher]
    return retornarTudo*/
}

//Questão 3
{
  var carrinho = []
  function inserirFruta() {
    var frutasSacolao = {
      fruta1: 'banana',
      disponibilidade1: true,
      fruta2: 'maçã',
      disponibilidade2: true,
      fruta3: 'abacaxi',
      disponibilidade3: true
    }

    carrinho.push(
      `fruta: ${frutasSacolao.fruta1}, disponibilidade: ${frutasSacolao.disponibilidade1}  `
    )
    carrinho.push(
      `fruta: ${frutasSacolao.fruta2}, disponibilidade: ${frutasSacolao.disponibilidade2}`
    )
    carrinho.push(
      `fruta: ${frutasSacolao.fruta3}, disponibilidade: ${frutasSacolao.disponibilidade3}`
    )

    return carrinho
  }

  console.log(inserirFruta())
}
//====================================================================================================
//Desafio 01

function dataInquiry(dadosPessoais) {
  let nome1 = prompt('Qual seu nome?')
  let idade1 = prompt('Qual sua idade?')
  let profissao1 = prompt('Qual sua profissão?')

  var dadosPessoais = [
    { Nome: nome1 },
    { Idade: idade1 },
    { Profissão: profissao1 }
  ]

  return dadosPessoais
}

console.log(dataInquiry())

//====================================================================================================
//Desafio 02
