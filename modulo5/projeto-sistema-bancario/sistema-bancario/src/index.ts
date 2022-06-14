import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { v4 as generateId } from "uuid";
import { bankUsers, Account } from "./data";
//Middlewares
const app = express();
app.use(express.json());
app.use(cors());

app.get("/users/accounts", (req: Request, res: Response) => {
  try {
    const users = bankUsers;
    /* const getByCPF = users.map((u) => {
      return u.CPF;
    }); */
    res.status(200).send(users);
  } catch (error) {
    res.status(400).end("Playlists não encontradas");
  }
});

app.post("/users/accounts", (req: Request, res: Response) => {
  let errorCode = 500;
  try {
    const { name, dateOfBirth } = req.body;

    const currentYear = new Date().getFullYear();
    const splittedBirth = dateOfBirth.split("/");
    const userBirthYear = Number(splittedBirth[2]);

    const checkAge = Number(currentYear - userBirthYear);

    if (checkAge > 18) {
      bankUsers.push({
        id: bankUsers.length + 1,
        name: name,
        cpf: generateId(),
        dateOfBirth: dateOfBirth,
        balance: 0,
        bankStatement: [{ value: 0, date: "", description: "" }],
      });
    } else {
      errorCode = 422;
      throw new Error("Usuário menor de idade. Cadastro não autorizado");
    }
  } catch (error: any) {
    res.status(errorCode).end(error.message);
  }
});

/* app.get("/balance/:name", (req: Request, res: Response) => {
  try {
    const users = bankUsers;
    const name = req.params.name;
    const cpf = req.params.cpf;
    //Precisa usar o for
    const getBalance = users.forEach((u) => {
      if (u.name === name) {
        return u;
      }
    });
  } catch (error) {
    res.status(400).end("Cliente não encontrado");
  }
}); */

/* app.get("/balance/:cpf", (req: Request, res: Response) => {
  try {
    const users = bankUsers;
    // const name = req.params.name;
    const cpf = req.params.cpf;
    //Precisa usar o for
    const getBalance = users.forEach((u) => {
      if (u.cpf === cpf) {
        return u;
      }
    });
  } catch (error) {
    res.status(400).end("Cliente não encontrado");
  }
}); */

app.listen(3003, () => {
  console.log("Alo Adriano, ta me ouvindo");
});
