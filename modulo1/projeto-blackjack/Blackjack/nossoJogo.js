/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log('Seja bem-vindo ao jogo de Blackjack!')
if (confirm('Quer iniciar uma nova rodada?')) {
  //Cartas da CPU
  let firstCardCpu = comprarCarta()
  let secondCardCpu = comprarCarta()

  // Cartas do Jogador
  let playerCard1 = comprarCarta()
  let playerCard2 = comprarCarta()

  //Definindo Pontuações
  let pontosCPU = firstCardCpu.valor + secondCardCpu.valor
  let pontosPlayer = playerCard1.valor + playerCard2.valor

  console.log(
    `Computador - cartas: ${primeiraCartaPc.texto} ${segundaCartaPc.texto} - ${pontosPc}`
  )
  console.log(
    `Usuário - cartas: ${userCartaUm.texto} ${userCartaDois.texto} - ${pontosUser}`
  )

  if (pontosPlayer > pontosCPU) {
    console.log('O usuário ganhou!')
  } else if (pontosCPU > pontosPlayer) {
    console.log('O computador ganhou!')
  } else if (pontosPlayer === pontosCPU) {
    console.log('Empate.')
  }
} else {
  console.log('O jogo acabou!')
}
