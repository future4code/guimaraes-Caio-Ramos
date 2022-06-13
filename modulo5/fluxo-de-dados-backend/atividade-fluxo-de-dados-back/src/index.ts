import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { v4 as generateId } from "uuid";
import { produtos } from "./data";

const app = express();
app.use(express.json());
app.use(cors());

const errors = {};
//Ex1:

app.get("/test", (req: Request, res: Response) => {
  res.status(200).send("API está online!");
});

//Ex3:
app.post("/products/create", (req: Request, res: Response) => {
  //const id = generateId();
  const name = req.body.name;
  const price = req.body.price;

  produtos.push({
    id: generateId(),
    name: name,
    price: price,
  });
  res.status(201).send(produtos);
});
//Ex5:
app.put("/products/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  const price = Number(req.body.price);
  produtos.forEach((p) => {
    if (p.id === id) {
      p.price = price;
    }
  });

  res.status(200).send(produtos);
});
//Ex:6
app.delete("/products/delete/:id", (req: Request, res: Response) => {
  const id = req.params.id;
  //const name = req.query.name;
  produtos.forEach((p, i) => {
    if (p.id === id) {
      produtos.splice(i, 1);
    }
  });

  res.status(200).send(produtos);
});

//Ex4:
app.get("/products", (req: Request, res: Response) => {
  const allProducts = produtos.map((u) => u);
  res.status(200).send(allProducts);
});

app.listen(3003, () => {
  console.log("Oh Adriano tá me ouvindo");
});
