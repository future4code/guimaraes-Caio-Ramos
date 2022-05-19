//Pergunta: como fazemos para acessar os parâmetros passados na linha de comando para o Node?
//R: Atribuindo à variável o processo.argv[2], [3], em diante
//O processo.argv contém um array de posição [0], cujo conteúdo é o próprio node
//A posição [1] contém o caminho para o arquivo atual
//A partir do índice [2] nós temos os argumentos que são passados pelo dev

//Ex1:
const nome = process.argv[2];
const idade = Number(process.argv[3]);
const futuro = idade + 7;
let red = "\u001b[31m";
let blue = "\u001b[34m";
let reset = "\u001b[0m";
console.log(`${red}Olá, ${nome}! Você tem ${idade} anos.`);
console.log(
  `${blue}Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${futuro} anos.`
);
//========================================================================================================================================
//Ex2:
/* const num1 = Number(process.argv[2]);
const num2 = Number(process.argv[3]);

console.log(`Somar: ${num1 + num2}`);
console.log(`Subtrair: ${num1 - num2}`);
console.log(`Multiplicar: ${num1 * num2}`);
console.log(`Dividir: ${num1 / num2}`);

const add = num1 + num2;
const sub = num1 - num2;
const mult = num1 * num2;
const div = num1 + num2; */
//========================================================================================================================================
//Ex3:
/* const activity = process.argv[2];
let tasks = ["estudar node", "realizar audiência"];
console.log(tasks);
tasks.push(activity);
console.log(tasks); */
//========================================================================================================================================
//Ex4:
