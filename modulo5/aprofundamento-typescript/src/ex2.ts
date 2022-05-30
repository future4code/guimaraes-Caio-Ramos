//Ex2:
function obterEstatisticas(numeros: number[]): object {
  const numerosOrdenados: number[] = numeros.sort((a, b) => a - b);

  let soma: number = 0;

  for (let num of numeros) {
    soma += num;
    console.log(soma);
  }

  const estatisticas: { maior: number; menor: number; media: number } = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length,
  };

  return estatisticas;
}
console.log(obterEstatisticas([-5, 15]));
//2-A:
//Entrada: um array de números
//Saída:um objeto contendo os maiores e menores números e a media entre ambos
//=======================================================================================
//2-B
//numerosOrdenados => é um array de números, pois recebe o que consta no parâmetro numeros
//Soma => é do tipo number, pois receberá um número
//Estatísticas => é um objeto que receberá 3 atributos, todos números
//2-C
type amostraDeDados = {
  numeros: number[];
  obterEstatisticas: (numeros: number[]) => {};
};
