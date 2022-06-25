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

//1) CRIAR USER:
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

//2) PEGAR USER POR ID:

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
//3) EDITAR USER:
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

//4 & 9)CREATE TASK:
//Todas as tasks ao serem criadas já são atribuídas a um usuário
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

//5 + 11) PEGAR TASK POR ID:
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

//6) PEGAR TODOS OS USERS:

app.get("/users", async (req: Request, res: Response) => {
  try {
    const allUsers = await connection.raw(`

SELECT * FROM UserToDoList 


`);
    res.status(200).send(allUsers[0]);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

//7) PEGAR TASK POR USUÁRIO:

app.get("/tasksbyuser/:pendingUser", async (req: Request, res: Response) => {
  const pendingUser: string = req.params.pendingUser;
  let errorCode = 500;
  try {
    const taskByUser = await connection.raw(`

SELECT * FROM TasksToDoList WHERE pendingUser = '${pendingUser}'


`);
    if (!pendingUser) {
      errorCode = 422;
      throw new Error("Usuário ainda não criou tasks");
      //Não consigo fazer a mensagem de erro aparecer
    }
    res.status(200).send(taskByUser[0][0]);
  } catch (error: any) {
    console.log("Usuário ainda não criou tasks");
    res.status(errorCode).send(error.message);
  }
});

//8) Search User:

app.get("/usersByQuery", async (req: Request, res: Response) => {
  try {
    const { id, name, nickname, email } = req.query;

    const allUsers = await connection.raw(`

SELECT * FROM UserToDoList WHERE id = '${id}' OR name = '${name}' OR nickname = '${nickname}' OR email = '${email}'


`);
    res.status(200).send(allUsers[0]);
  } catch (error: any) {
    res.status(500).send(error.message);
  }
});

//9) Conferir questão 4

//10) Pegar usuários responsáveis por uma tarefa:
//Juntar tabelas?

//11) Conferir Atividade 5

//12)


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
