// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  array.sort(function (a, b) {
    return a - b
  })
  return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  array = array.filter(function (vetor) {
    if (vetor % 2 === 0) {
      return true
    }
  })
  return array
}
// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let evenArray = []
  for (const i of array) {
    if (i % 2 === 0) evenArray.push(i * i)
  }
  return evenArray
}
// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let arrayMax = array.reduce(function (a, b) {
    return Math.max(a, b)
  })

  return arrayMax
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let objetoGrande = {
    maiorNumero: '',
    maiorDivisivelPorMenor: '',
    diferenca: ''
  }
  if (num1 > num2) {
    objetoGrande.maiorNumero = num1
    if (num1 % num2 === 0) {
      objetoGrande.maiorDivisivelPorMenor = true
    } else {
      objetoGrande.maiorDivisivelPorMenor = false
    }
    objetoGrande.diferenca = num1 - num2
  } else {
    objetoGrande.maiorNumero = num2
    if (num2 % num1 === 0) {
      objetoGrande.maiorDivisivelPorMenor = true
    } else {
      objetoGrande.maiorDivisivelPorMenor = false
    }
    objetoGrande.diferenca = num2 - num1
  }
  return objetoGrande
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let soPares = []
  for (i = 0; soPares.length < n; i++) {
    if (i % 2 === 0) {
      soPares.push(i)
    }
  }
  return soPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  function avaliarTri() {
    if (ladoA === ladoB && ladoA === ladoC && ladoB === ladoC) {
      return 'Equilátero'
    } else if (ladoA === ladoB || ladoB === ladoC || ladoC === ladoA) {
      return 'Isósceles'
    } else {
      return 'Escaleno'
    }
  }
  return avaliarTri()
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let arrayNum = []
  let max = Math.max.apply(null, array)
  let max2 = array.indexOf(max)
  array[max2] = -Infinity
  let segundoMaior = Math.max.apply(null, array)
  array[max2] = max
  arrayNum.push(segundoMaior)

  let min = Infinity,
    segundoMenor = Infinity
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      segundoMenor = min
      min = array[i]
    } else if (array[i] < segundoMenor) {
      segundoMenor = array[i]
    }
  }
  arrayNum.push(segundoMenor)
  return arrayNum
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  const filmeBom = {
    nome: 'O Diabo Veste Prada',
    ano: 2006,
    diretor: 'David Frankel',
    atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }
  return `Venha assistir ao filme ${filmeBom.nome}, de ${filmeBom.ano}, dirigido por ${filmeBom.diretor} e estrelado por ${filmeBom.atores[0]}, ${filmeBom.atores[1]}, ${filmeBom.atores[2]}, ${filmeBom.atores[3]}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  const novosDados = {
    ...pessoa,
    nome: 'ANÔNIMO'
  }
  return novosDados
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  let queroEntrar = pessoas.filter(pessoa => {
    return pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60
  })

  return queroEntrar
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let naoPode = pessoas.filter(pessoa => {
    return !(pessoa.altura >= 1.5 && pessoa.idade > 14 && pessoa.idade < 60)
  })

  return naoPode
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  contas[0].saldoTotal = 500
  contas[1].saldoTotal = 6260
  contas[2].saldoTotal = -3340
  contas[3].saldoTotal = -1900
  contas[4].saldoTotal = 1300
  contas[5].saldoTotal = 1400

  contas[0].compras = []
  contas[1].compras = []
  contas[2].compras = []
  contas[3].compras = []
  contas[4].compras = []
  contas[5].compras = []

  return contas
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  consultas.sort((a, b) => (a.nome > b.nome ? 1 : -1))
  return consultas
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
