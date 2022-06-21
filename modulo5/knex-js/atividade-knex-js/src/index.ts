import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { connection } from "./connection";

const app = express();
app.use(express.json());
app.use(cors());

//Ex 1-A:
//Imprime um objeto com os dados do ator de id 001
const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT * FROM actor WHERE id = '${id}'
  `);
  return result[0][0];
};

app.get("/actors/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    console.log(await getActorById(id));
    res.end();
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("Unexpected error");
  }
});

//Ex 1-B:

const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT * FROM actor WHERE name = "${name}"`);
  return result;
};

app.get("/actors/name/:name", async (req: Request, res: Response) => {
  try {
    const name = req.params.name;
    console.log(await getActorByName(name));
    res.end();
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("Unexpected error");
  }
});

//Ex 1-C:

const getActorByGender = async (gender: string): Promise<any> => {
  const result = connection.raw(`
  
  SELECT * FROM actor WHERE gender = "${gender}"`);
  return result;
};

//EX 2-A:
app.put("/actors/:id", async (req: Request, res: Response) => {
  try {
    await connection("actor")
      .update({
        salary: req.body.salary,
      })
      .where({ id: req.params.id });
    res.send("Success!");
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send(`An unexpected error occurred`);
  }
});
//EX 2-B:
app.delete("/actors/delete/:id", async (req: Request, res: Response) => {
  try {
    await connection("actor").delete().where({ id: req.params.id });
    res.send("Ator/Atriz deletado(a) com sucesso!");
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send(`An unexpected error occurred`);
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
