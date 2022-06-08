import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { usersArray, postsArray } from "./data";

//Inserindo express na aplicação
const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

//Ex1
app.get("/", (req, res) => {
  res.status(200).send("Estamos no Express");
});
//Ex2 em data.ts
//Ex3 em data.ts

//Ex8:
app.get("/posts/:userId", (req: Request, res: Response) => {
  const userId = req.params.userId;
  const getPostsById = postsArray.filter((post) => {
    if (userId === post.userId) {
      return post;
    }
  });
  res.send(getPostsById);
});

//Ex10:
app.delete("/users/delete/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  usersArray.forEach((u, i) => {
    if (u.id === id) {
      usersArray.splice(i, 1);
    }
  });
  res.status(200).send(usersArray);
});
//Ex9:
app.delete("/posts/delete/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  postsArray.forEach((p, i) => {
    if (p.id === id) {
      postsArray.splice(i, 1);
    }
  });
  res.status(200).send(postsArray);
});

//Ex7:
app.get("/posts", (req: Request, res: Response) => {
  const getPosts = postsArray.map((p) => p);
  res.status(200).send(getPosts);
});
//Ex4:
app.get("/users", (req: Request, res: Response) => {
  const getUsers = usersArray.map((u) => u);
  res.send(getUsers);
});
app.listen(3003, () => {
  console.log("alo adriano ta me ouvindo");
});
