import express, { Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import { connection } from "../data/connection";

export const getUsersPag = async (req: Request, res: Response) => {
  let type = req.query.type as string;
  let sort = req.query.sort as string;
  let order = req.query.order as string;
  let page = Number(req.query.page);
  let size = Number(req.query.size);
  let errorCode = 500;
  try {
    let offset = size * (page - 1);
    let usersPag = await connection.raw(`
        SELECT * FROM aula48_exercicio 
        WHERE type LIKE '%${type}%'
        ORDER BY type DESC
        LIMIT size
        OFFSET "%${offset}%"
`);
    if (!type) {
      type = "%";
    }
    if (order?.toUpperCase() !== "ASC" || order?.toUpperCase() !== "DESC") {
      order = "ASC";
    }

    res.status(200).send(usersPag[0][0]);
  } catch (error: any) {
    res.status(errorCode || 400).send(error.message);
  }
};
