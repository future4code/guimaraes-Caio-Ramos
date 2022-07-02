import { Request, Response } from "express";
import { connection } from "../connection";

const getProductValue = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req.params.id as string;
    const productValue = await connection("labecommerce_products")
      .select("price")
      .where({ id: id });

    res.status(200).send(productValue);
  } catch (error) {
    console.log(error);
    res.status(500).send("Unexpected server error.");
  }
};
export default getProductValue;
