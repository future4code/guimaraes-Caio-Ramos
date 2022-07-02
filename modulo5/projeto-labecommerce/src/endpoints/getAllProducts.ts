import { Request, Response } from "express";
import { connection } from "../connection";

const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const allProducts = await connection("labecommerce_products");

    res.status(200).send(allProducts);
  } catch (error) {
    console.log(error);
    res.status(500).send("Unexpected server error.");
  }
};
export default getAllProducts;
