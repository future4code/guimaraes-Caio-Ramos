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
