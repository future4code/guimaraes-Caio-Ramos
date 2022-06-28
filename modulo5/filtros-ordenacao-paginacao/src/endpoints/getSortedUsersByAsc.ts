import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { connection } from "../data/connection";
//import { user } from "../types";

export const getSortedUsersByAsc = async (req: Request, res: Response) => {
  let type = req.query.type as string;
  let sort = req.query.sort as string;
  let order = req.query.order as string;
  let errorCode = 500;
  try {
    let sortedUsersByAsc = await connection.raw(`
        SELECT * FROM aula48_exercicio 
        WHERE type LIKE '%${type}%'
        ORDER BY type 
`);
    if (!sort) {
      sort = "email";
    }
    if (order?.toUpperCase() !== "ASC" || order?.toUpperCase() !== "DESC") {
      order = "ASC";
    }

    res.status(200).send(sortedUsersByAsc[0]);
  } catch (error: any) {
    res.status(errorCode || 400).send(error.message);
  }
};
