//Imports
import express from "express";
import cors from "cors";
import { Request, Response } from "express";
import { toDoAll } from "./data";
//===================================================================================
//MIDDLEWARES
const app = express();

app.use(express.json());
app.use(cors());
//Ex 1
app.get("/ping", (req: Request, res: Response) => {
  res.send("pong!");
});
//Ex2 em data.ts

//Ex3 em data.ts
//Ex4:

app.get("/todos/completed", (req: Request, res: Response) => {
  try {
    const allTasks = toDoAll;
    const completedTasks = allTasks.filter((task) => {
      return task.completed === true;
    });
    /* const mappedTasks = allTasks.map((task) => {
      return task.completed === true;
    }); */
    res.status(201).send(completedTasks);
  } catch (error: any) {
    res.end(error.message);
  }
});

app.get("/todos/pending", (req: Request, res: Response) => {
  try {
    const allTasks = toDoAll;
    const completedTasks = allTasks.filter((task) => {
      return task.completed === false;
    });

    res.status(201).send(completedTasks);
  } catch (error: any) {
    res.end(error.message);
  }
});

//Ex5:

app.listen(3003, () => {
  console.log("Alo Adriano. Tá me Ouvindo.");
});
