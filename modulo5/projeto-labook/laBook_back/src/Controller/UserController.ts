import { Request, Response } from "express";
import { UserBusiness } from "../Business/UserBusiness";
import { userInputDTO } from "../model/User/userInputDTO";
import { addFriendDTO } from "../model/User/addFriendDTO";

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
  public addFriend = async (req: Request, res: Response) => {
    try {
      //id-> it's the user's id
      //friend -> it's the friend's id
      const { id, friends } = req.body;
      const input: addFriendDTO = { id, friends };
      await this.userBusiness.addFriend(input);
      res.status(200).send({ message: "Mais que amigos, FRIENDS!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
