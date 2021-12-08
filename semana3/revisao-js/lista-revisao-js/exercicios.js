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
function retornaChamadaDeFilme(filme) {}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
  const pacientes = [
    { nome: 'João', dataDaConsulta: '01/10/2021' },
    { nome: 'Pedro', dataDaConsulta: '02/07/2021' },
    { nome: 'Paula', dataDaConsulta: '03/11/2021' },
    { nome: 'Márcia', dataDaConsulta: '04/05/2021' }
  ]
}
