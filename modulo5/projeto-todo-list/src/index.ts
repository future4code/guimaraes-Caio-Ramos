import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { connection } from "./connection";
import { v4 as generateId } from "uuid";

const app = express();
app.use(express.json());
app.use(cors());
const id = generateId();
//Users: id, name, nickname, email

//Tasks: id, title, description, deadline, status*, pending user

//Mais de um usuário pode ser responsável pela tableta: tabela relacional N:M

//*status : ENUM - to do, doing, done

app.post("/users", async (req: Request, res: Response) => {
  //const { id, name, nickname, email } = req.body;
  try {
    await connection.raw(`

INSERT INTO UserToDoList 
(id, name, nickname, email)
VALUES(
"${req.body.id}",
"${req.body.name}",
"${req.body.nickname}",
"${req.body.email}"
)

`);
    res.status(201).send("Usuário criado com sucesso!");
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
