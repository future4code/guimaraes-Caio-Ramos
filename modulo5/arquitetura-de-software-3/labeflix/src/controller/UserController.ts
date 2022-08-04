import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { InvalidEmail } from "../Error/InvalidEmail";
import { InvalidName } from "../Error/InvalidName";
import { InvalidPassword } from "../Error/InvalidPassword";

export class UserController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { email, name, password } = req.body;
      if (!email) {
        throw new InvalidEmail();
      }
      if (!name) {
        throw new InvalidName();
      }
      if (!password) {
        throw new InvalidPassword();
      }
      const userBusiness = new UserBusiness();
      await userBusiness.create({ email, name, password });

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  getAll = async (req: Request, res: Response): Promise<void> => {
    try {
      const users = await new UserBusiness().getAll();

      res.status(200).send(users);
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };
}
