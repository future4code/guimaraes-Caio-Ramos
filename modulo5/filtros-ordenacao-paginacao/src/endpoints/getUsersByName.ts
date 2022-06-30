import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { connection } from "../data/connection";
//import { user } from "../types";

export const getUsersByName = async (req: Request, res: Response) => {
  let name = req.query.name as string;
  let errorCode = 500;
  try {
    let userByName = await connection.raw(`
        SELECT id, name, email, type 
        FROM aula48_exercicio 
        WHERE name LIKE '%${name}%'
`);
    if (!name) {
      errorCode = 404
      throw new Error("Não existe colaborador com este nome.");
    }

    res.status(200).send(userByName[0][0]);
  } catch (error: any) {
    res.status(errorCode || 400).send(error.message);
  }
};
