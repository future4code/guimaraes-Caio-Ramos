//Ex4:
//4-B: podemos criar um script chamado 'start' e configurá-lo da seguinte forma: tsc && node ./build/ex4.js
//4-C: Seria necessário ajustar
//4-D: tsc ex1.ts ex2.ts ex3.ts
type pokemon = {
  name: string;
  types: string;
  healthPoints: number;
};

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28,
};

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31,
};

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35,
};
