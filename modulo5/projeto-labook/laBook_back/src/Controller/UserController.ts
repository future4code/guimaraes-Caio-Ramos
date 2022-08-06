import { Request, Response } from "express";
import { UserBusiness } from "../Business/UserBusiness";
import { userInputDTO } from "../model/userInputDTO";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  public createUser = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      const input: userInputDTO = { name, email, password };

      await this.userBusiness.createUser(input);

      res.status(201).send({ message: "Usuário criado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
  public getAll = async (req: Request, res: Response) => {
    try {
      const users = await this.userBusiness.getAll();
      res.status(200).send(users);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
