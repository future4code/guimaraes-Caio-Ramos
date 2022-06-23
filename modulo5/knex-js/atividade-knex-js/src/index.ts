import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { connection } from "./connection";

const app = express();
app.use(express.json());
app.use(cors());

const getAllActors = async (): Promise<any> => {
  const result = await connection.raw(`
  SELECT * FROM actor 
  `);
  return result[0];
};

app.get("/actor", async (req: Request, res: Response) => {
  try {
    const actor = await getAllActors();
    console.log(actor);
    res.status(200).send(actor);
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send(`Erro inesperado.`);
  }
});

//EX1-A:
const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT * FROM actor WHERE id = '${id}'  
  `);
  return result[0][0];
};

//EX 1-B:

const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT * FROM actor WHERE name = '${name}'
  `);
  return result[0][0];
};

//EX 1-C:

const getActorByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
  SELECT COUNT(*) as count FROM actor WHERE gender = '${gender}'
    
  `);
  const count = result[0][0].count;
  return count;
};
//EX 2-A:

const updateSalary = async (salary: number, id: string): Promise<any> => {
  await connection("actor").update({ salary: salary }).where("id", id);
};

//EX2-B:
const deleteActor = async (id: string): Promise<any> => {
  await connection("actor").delete().where("id", id);
};

//EX2-C:

const averageSalary = async (gender: string, salary: number): Promise<any> => {
  const result = await connection("actor")
    .avg("average as salary")
    .where({ gender });
  return result[0].average;
};

//EX3-A:

app.get("/actor/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const actor = await getActorById(id);
    console.log(actor);
    res.status(200).send(actor);
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send(`Erro inesperado.`);
  }
});

//EX3-B:
app.get("/actor", async (req: Request, res: Response) => {
  try {
    const gender = req.query.gender;
    const actorByGender = await getActorByGender(`${gender}`);
    console.log(actorByGender);
    res.status(200).send(actorByGender);
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send(`Erro inesperado.`);
  }
});

const createActor = async (
  id: string,
  name: string,
  salary: number,
  birth_date: Date,
  gender: string
): Promise<any> => {
  const result = await connection.raw(`
  INSERT INTO actor ('${id}', '${name}', '${salary}', '${birth_date}', '${gender}' )
    
  `);

  return result;
};

app.post("/actor", async (req: Request, res: Response) => {
  try {
    await createActor(
      req.body.id,
      req.body.name,
      Number(req.body.salary),
      new Date(req.body.birth_date),
      req.body.gender
    );

    res.status(200).send();
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send(`Erro inesperado.`);
  }
});

/* app.patch("/actor/:id", async (req: Request, res: Response) => {
  try {
    await connection("actor")
      .update({ salary: req.body.salary })
      .where({ id: req.params.id });
    res.status(200).send("Success!");
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("Algo deu errado.");
  }
}); */

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
