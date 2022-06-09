import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { users, Users, UserType } from "./data";

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
//Acorda, Servidor!
app.listen(3003, () => {
  console.log("Alo Adriano tá meu ouvindo?");
});
