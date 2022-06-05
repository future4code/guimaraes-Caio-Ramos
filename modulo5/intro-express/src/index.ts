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

//Ex4:
app.get("/users", (req: Request, res: Response) => {
  const getUsers = usersArray.map((u) => u);
  res.send(getUsers);
});

//Ex7:
app.get("/posts", (req: Request, res: Response) => {
  const getPosts = postsArray.map((p) => p);
  res.status(200).send(getPosts);
});

//Ex8:
app.get("/posts/:userId", (req: Request, res: Response) => {
  const getPostsById = postsArray.filter((post) => {
    const userId = req.body.userId;
    if (userId === post.userId) {
      return post;
    }
  });

  res.status(200).send(getPostsById);
});

app.listen(3003, () => {
  console.log("alo adriano ta me ouvindo");
});
