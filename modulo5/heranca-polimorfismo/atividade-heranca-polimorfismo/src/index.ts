import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { BaseDatabase } from "./BaseDatabase";
import { User } from "./Classes/User";
import { Customer } from "./Classes/Customer";
import { Client } from "./Interfaces/Client";
import { Residence } from "./Classes/Residence";
import { Commerce } from "./Classes/Commerce";
import { Industry } from "./Classes/Industry";
import { v4 as createId } from "uuid";

const app = express();
app.use(express.json());
app.use(cors());

//Exercício Herança 1:
let newId = createId();
const userFagudes = new User(
  newId,
  "Fagudes",
  "fagudesmail@mail.com",
  "555555"
);

//console.log(userFagudes);

//1-A:
//É possível imprimir o password no console, pois não há nada que proteja este elemento da classe
//1-B:
//A mensagem é impressa apenas 1 vez no console.

//Exercício Herança 2:

const customerCaio = new Customer(
  newId,
  "Caio",
  "caio@mail.com",
  "444555",
  "5793-8591-3264"
);
//console.log(customerCaio);

//2-A: Apenas uma vez;
//2-B: FOi chamado 2 vezes, porque a frase se encontra na super classe USer
//Logo, ela é impressa por ser da superclasse e impressa novamente pela classe filha

//Exercício Herança 3:
//console.log(customerCaio);
//3-A: É possível imprimir a senha, pois ela herda da classe User, e não há nenhuma restrição ao acesso a este elemento.

//Exercício 4 + 5 Herança:
const introduceYourself = customerCaio.introduceYourself();
//console.log(introduceYourself);

//==============================================================================================================================

//Exercícios Polimorfismo:

//Exercício Polimorfismo 1:

const clientCamila: Client = {
  name: "Camila",
  registrationNumber: 1,
  consumedEnergy: 200,
  calculateBill: () => {
    let totalBill = 2;
    return totalBill;
  },
};

//console.log(clientCamila);

//1-A: Não foi possível imprimir o resultado de calculateBill(), pois o console imprimia apenas a função, não o resultado

//Exercício Polimorfismo 2:

//const tryPlace = new Place()
//2-A: O VSCode informa que não é possível criar uma instância a partir de uma classe abstrata
//2-B:....criando uma INTERFACE com os dados da classe?

//Exercício Polimorfismo 3:

const residenceCEP = new Residence(10, "57052486");
const commerceCEP = new Commerce(3, "57035999");
const industryCEP = new Industry(25, "57052486");
console.log(residenceCEP);
console.log(commerceCEP);

console.log(industryCEP);


//3-A: Para criar uma instância de uma classe abstrata precisamos declarar uma classe filha e criar uma instância dessa última.
//3-B: Place é uma classe porque precisa ter um acesso restrito a um dos seus atributos, o que é impossível de se fazer em interfaces.
//3-C: Place é abstrata porque não enxergamos uma situação em que seria necessário criar uma instância dessa classe.

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
