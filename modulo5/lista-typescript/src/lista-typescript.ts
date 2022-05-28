//Projeto: Lista Typescript

import { EnumType } from "typescript";

//Ex1:
function apresentacao(name: string, birthday: string): string {
  let aniversario = birthday.split("/");
  let day = aniversario[0];
  let month = aniversario[1];
  let year = aniversario[2];
  switch (month) {
    case "01":
      "janeiro";
      break;
    case "02":
      "fevereiro";
      break;
    case "03":
      "março";
      break;
    case "04":
      "abril";
      break;
    case "05":
      "maio";
      break;
    case "06":
      "junho";
      break;
    case "07":
      "julho";
      break;
    case "08":
      "agosto";
      break;
    case "09":
      "setembro";
      break;
    case "10":
      "outubro";
      break;
    case "11":
      "novembro";
      break;
    case "12":
      "dezembro";
      break;
    default:
      "mês";
      break;
  }
  return `Olá, me chamo ${name}, e nasci no dia ${day} de ${month} de ${year}.`;
}
console.log(apresentacao("Caio", "19/07/1989"));
//=========================================================================================
//Ex2:
function exercicio2(param: any): void {
  let tipo = typeof param;
  console.log(`O tipo do parâmetro é "${tipo}"`);
}
exercicio2("livrinho");
//=========================================================================================
//Ex3:

enum GENERO {
  ACAO = "ação",
  DRAMA = "drama",
  COMEDIA = "comédia",
  ROMANCE = "romance",
  TERROR = "terror",
}
type filminho = {
  name: string | undefined;
  launchYear: string | number | undefined;
  genre: string;
  score?: string | number | undefined;
};

function exercicio3(
  nome: string,
  ano: number,
  genero: string,
  nota?: string | number | undefined
): filminho {
  let filme: filminho = {
    name: nome,
    launchYear: ano,
    genre: genero,
    score: nota,
  };
  return filme;
}
console.log(exercicio3("batman", 2021, GENERO.ACAO, 90));
//=========================================================================================
//Ex4:
enum SETORES {
  MARKETING = "Marketing",
  FINANCEIRO = "Financeiro",
  VENDAS = "Vendas",
}

type Colaborador = {
  name: string;
  salary: number;
  session: string;
  localWork: boolean;
};

const empregados: Array<Colaborador> = [
  { name: "Marcos", salary: 2500, session: SETORES.MARKETING, localWork: true },
  { name: "Maria", salary: 1500, session: SETORES.VENDAS, localWork: false },
  {
    name: "Salete",
    salary: 2200,
    session: SETORES.FINANCEIRO,
    localWork: true,
  },
  { name: "João", salary: 2800, session: SETORES.MARKETING, localWork: false },
  { name: "Josué", salary: 5500, session: SETORES.FINANCEIRO, localWork: true },
  { name: "Natalia", salary: 4700, session: SETORES.VENDAS, localWork: true },
  { name: "Paola", salary: 3500, session: SETORES.MARKETING, localWork: true },
];
function exercicio4(empregados: Array<Colaborador>) {
  let presencial = empregados.filter((empregado) => {
    return (
      empregado.session === SETORES.MARKETING && empregado.localWork === true
    );
  });
  return presencial;
}
console.log(exercicio4(empregados));
//=========================================================================================
//Ex5:
