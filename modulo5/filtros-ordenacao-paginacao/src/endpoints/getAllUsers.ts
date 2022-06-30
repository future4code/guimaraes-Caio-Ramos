import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { connection } from "../data/connection";
//import { user } from "../types";

export const getAllUsers = async (req: Request, res: Response) => {
  let errorCode = 500;
  try {
    let getAllUsers = await connection.raw(`
        SELECT * FROM aula48_exercicio 
        
`);

    res.status(200).send(getAllUsers[0]);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
};
