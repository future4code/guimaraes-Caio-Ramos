import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { connection } from "../data/connection";
//import { user } from "../types";

export const getUsersByType = async (req: Request, res: Response) => {
  let errorCode = 500;
  let { type } = req.params;
  try {
    let getUsersByType = await connection.raw(`
        SELECT * FROM aula48_exercicio 
        WHERE type LIKE '%${type}%'
        
`);
    if (!type) {
      throw new Error("Esta função não existe na empresa.");
    }

    res.status(200).send(getUsersByType[0]);
  } catch (error: any) {
    res.status(errorCode).send(error.message);
  }
};
