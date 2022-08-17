import { Request, Response } from "express";
import { UserBusiness } from "../Business/UserBusiness";
import { userInputDTO } from "../Model/Types/User";

export class UserController {
  public signUp = async (req: Request, res: Response) => {
    try {
      const { name, email, nickname, password } = req.body;
      const input: userInputDTO = { name, email, nickname, password };
      const userBizz = new UserBusiness();
      const token = await userBizz.signUp(input);
      res.status(201).send({ message: "User has been created!", token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
