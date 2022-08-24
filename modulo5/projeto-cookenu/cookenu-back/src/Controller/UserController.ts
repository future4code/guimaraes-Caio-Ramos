import { Request, Response } from "express";
import { UserBusiness } from "../Business/UserBusiness";
import { UserInputDTO } from "../Model/Types/User";

export class UserController {
  private userBusiness: UserBusiness;
  constructor() {
    this.userBusiness = new UserBusiness();
  }
  public signUp = async (req: Request, res: Response) => {
    try {
      const input: UserInputDTO = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };
      const token = await this.userBusiness.createUser(input);
      res
        .status(201)
        .send({ message: `User ${input.name} was created!`, token });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
