//====================================================================================
//Ex1:
//1-A:
//let minhaString: string = 32;
//Ao atribuirmos um número a uma variável tipada como string o VSCode já aponta um erro
//Isto porque o Typescript é uma linguagem fortemente tipada e possui tipagem estática
//Significa que, após a definição do tipo da variável pelo desenvolvedor,
//ele fica impedido de atribuir um valor cujo tipo seja diferente daquele estabelecido.

//====================================================================================
//1-B:
let meuNumero: number | string;
//Para atribuirmos mais de um tipo a uma variável nós utilizamos o Union Type => "|"
// O símbolo de "|" tem valor de "ou", como o "||" do JS

//====================================================================================
//1-B:
let person: { name: string; age: number; favoriteColor: string } = {
  name: "Caio",
  age: 33,
  favoriteColor: "purple",
};
type person = {
  name: string | undefined;
  age: number | undefined;
  favoriteColor: string | undefined;
};

enum Rainbow {
  VERMELHO = "Vermelho",
  LARANJA = "Laranja",
  AMARELO = "Amarelo",
  VERDE = "Verde",
  AZUL = "Azul",
  ANIL = "Anil",
  VIOLETA = "Violeta",
}

const astroGilda: person = {
  name: "Gilda",
  age: 27,
  favoriteColor: Rainbow.ANIL,
};

const astroMila: person = {
  name: "Camila",
  age: 30,
  favoriteColor: Rainbow.VERMELHO,
};

const astroIne: person = {
  name: "Laine",
  age: 30,
  favoriteColor: Rainbow.AZUL,
};
const astroAverssi: person = {
  name: "Lucas",
  age: 33,
  favoriteColor: Rainbow.VERDE,
};
