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

//*status : ENUM - to do, ongoing, done

//CRIAR USER:
app.post("/users", async (req: Request, res: Response) => {
  
  
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

//PEGAR USER POR ID:

app.get("/users/:id", async (req: Request, res: Response) => {
  const id: string = req.params.id;
  try {
    const userById = await connection.raw(`

SELECT * FROM UserToDoList WHERE id = '${id}'


`);
    res.status(200).send(userById[0][0]);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});
//EDITAR USER:
app.put("/users/:id", async (req: Request, res: Response) => {
  const id: string = req.params.id;
  const { name, nickname, email } = req.body;
  try {
    const updatedUser = await connection.raw(`

UPDATE UserToDoList
SET name = '${name}', nickname = '${nickname}', email = '${email}'
WHERE id =  '${id}'


`);
    res.status(200).send(updatedUser[0][0]);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

//CREATE TASK:
app.post("/tasks", async (req: Request, res: Response) => {
  const { id, title, description, deadline, status, pendingUser } = req.body;
  try {
    await connection.raw(`

INSERT INTO TasksToDoList 
(id, title, description, deadline, status, pendingUser)
VALUES(
"${id}",
"${title}",
"${description}",
"${deadline.split("-").reverse().join("-")}",
"${status}",
"${pendingUser}"
)

`);
    res.status(201).send("Tarefa criada com sucesso!");
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

//PEGAR TASK POR ID:
app.get("/tasks/:id", async (req: Request, res: Response) => {
  const id: string = req.params.id;
  try {
    const taskById = await connection.raw(`

SELECT * FROM TasksToDoList WHERE id = '${id}'


`);
    res.status(200).send(taskById[0][0]);
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
