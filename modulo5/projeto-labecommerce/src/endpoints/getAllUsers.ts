import { Request, Response } from "express";
import { connection } from "../connection";
import { v4 as generateId } from "uuid";
import knex from "knex";

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    // const { name, orderBy, orderType, page } = req.query;

    /* const result: character[] = await connection.raw(
      "SELECT * FROM character2"
    );
    res.send(result[0]); */

    //const resultsPerPage = 5;

    //pag 1 -> offset 0 === 5 * 0
    //pag 2 -> offset 5 === 5 * 1
    //pag 3 -> offset 10 === 5 * 2

    //const offset = resultsPerPage * (Number(page) - 1);

    const allUsers = await connection("labecommerce_users");
    /* .where("name", "LIKE", `%${name}%`)
      .orderBy((orderBy as string) || "name", orderType as string)
      .offset(offset);
 */
    res.status(200).send(allUsers);
  } catch (error) {
    console.log(error);
    res.status(500).send("Unexpected server error.");
  }
};
export default getAllUsers;
