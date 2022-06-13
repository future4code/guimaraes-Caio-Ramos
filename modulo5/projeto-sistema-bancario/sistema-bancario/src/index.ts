import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";

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

app.get("/balance/:name", (req: Request, res: Response) => {
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
});

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
