//Ex2:
const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);
//Desafio1:
if (nome == process.argv[2] && idade == process.argv[3]) {
} else {
  console.log("Esperava 2 parâmetros, mas algum ficou faltando");
}
let red = "\u001b[31m";
let blue = "\u001b[34m";
let reset = "\u001b[0m";
console.log(`${red}Somar: ${num1 + num2}`);
console.log(`${blue}Subtrair: ${num1 - num2}`);
console.log(`${red}Multiplicar: ${num1 * num2}`);
console.log(`${blue}Dividir: ${num1 / num2}`);

const add = num1 + num2;
const sub = num1 - num2;
const mult = num1 * num2;
const div = num1 + num2;
