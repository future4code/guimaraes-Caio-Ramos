import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { connection } from "./connection";
import { v4 } from "uuid";
import { UserAccount } from "./data/userAccount";
import { Transaction } from "./data/transaction";
const app = express();
app.use(express.json());
app.use(cors());

//QUESTÕES DISCURSIVAS:

/* 1-A: O constructor serve para inicializar a classe,
 definir variáveis, e 
 executar outros cocmandos necessários antes que outras operações possam ser feitas com ela. */

//1-B:

const caioAccount = new UserAccount("123456789-10", "Caio", 33, 585);

console.log(caioAccount);

//A mensagem foi impressa apenas UMA vez.

//1-C:
/* É possível obter acesso às propriedades privadas de uma classe através dos métodos públicos,
que por sua vez utilizam o "this." para acessar seus valores. */

//2:
const smurfAcc = new UserAccount("987654321-01", "Smurffete", 10, 900);
const compraPadaria = new Transaction("compra na padaria", 10, "2022-07-12");
smurfAcc.addTransaction(compraPadaria);
console.log(smurfAcc);
const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
