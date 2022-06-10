import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users, Users, UserType } from "./data";
import { v4 as generateId } from "uuid";
//Middlewares
const app = express();
app.use(express.json());
app.use(cors());
//ENDPOINTS:
//Ex1:
//A. Método HTTP - get
//B. Entidade - /users
app.get("/users", (req: Request, res: Response) => {
  let errorCode = 500;
  try {
    res.status(200).send(users);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

//Ex2:
app.get("/users/:type", (req: Request, res: Response) => {
  let errorCode = 500;
  try {
    let typeParam = req.params.type;
    if (typeParam !== UserType.ADMIN && typeParam !== UserType.NORMAL) {
      errorCode = 422;
      throw new Error(
        "Tipo de usuário inexistente. Insira 'ADMIN' ou 'NORMAL'."
      );
    }
    const filteredType = users.filter(
      (u) => u.type.toLowerCase() === typeParam.toLowerCase()
    );

    if (!filteredType) {
      errorCode = 422;
      throw new Error("Usuário não encontrado.");
    }

    res.status(200).send(filteredType);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

//Ex3:
app.get("/usersbyname", (req: Request, res: Response) => {
  let errorCode = 500;
  try {
    const name = req.query.name as string;

    if (!name) {
      errorCode = 422;
      throw new Error("Falta o parâmetro de busca! Tente Novamente.");
    }
    const userName = users.filter(
      (u) => u.name.toLowerCase() === name.toLowerCase()
    );
    if (!userName.length) {
      errorCode = 422;
      throw new Error("Nome passado errado. Tente novamente.");
    }
    res.status(200).send(userName);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});
//Ex4:
//A) Utilizando o "put" o usuário é criado, pois ainda não existia
//B) O método "put" em princípio é usado para atualizar o objeto, porém substitui o post caso não haja um objeto daquele tipo criado
app.put("/users", (req: Request, res: Response) => {
  let errorCode = 500;
  try {
    const { name, email, type, age } = req.body;
    if (!name || !email || !type || !age) {
      errorCode = 422;
      throw new Error("Algum parâmetro está faltando");
    }
    if (type !== UserType.NORMAL && type !== UserType.ADMIN) {
      errorCode = 422;
      throw new Error(
        "Tipo não aceito. Inserir tipo de usuário válido: NORMAL ou ADMIN."
      );
    }
    users.push({
      id: users.length + 1,
      name: name,
      email: email,
      type: type,
      age: age,
    });
    //Falta inserir o res sua anta
    res.status(200).send(users);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
});

//Acorda, Servidor!
app.listen(3003, () => {
  console.log("Alo Adriano tá meu ouvindo?");
});
