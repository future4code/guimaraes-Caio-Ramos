import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
  createUser = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, email, password } = req.body;
      const input: any = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      const userBusiness = new UserBusiness();
      await userBusiness.createUser(input);
      res.status(201).send({ message: "Usuário criado" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  getAllUsers = async (req: Request, res: Response): Promise<any> => {
    try {
      const userBusiness = new UserBusiness();
      const showUsers = await userBusiness.getAllUsers();
      console.log(showUsers);
      res.status(200).send(showUsers);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  deleteUserById = async (req: Request, res: Response): Promise<void> => {
    try {
      const input = {
        id: req.params.id,
      };

      const userBusiness = new UserBusiness();
      await userBusiness.deleteUserId(input);
      res.status(200).send({ message: "Usuário deletado com sucesso." });
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
