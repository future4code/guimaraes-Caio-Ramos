import { addFriendDTO } from "../model/User/addFriendDTO";
import { userInputDTO } from "../model/User/userInputDTO";
import { generateId } from "../services/generateId";
import { user } from "../Types/user";
import { friendRelation } from "../Types/friendRelation";
import { UserRepository } from "./repository/UserRepository";

export class UserBusiness {
  constructor(private userDatabase: UserRepository) {}
  public createUser = async (input: userInputDTO): Promise<void> => {
    try {
      const { name, email, password } = input;
      /* if (!name ||!email || !password) {
        throw new Error(
          
          'Preencha os campos "name","nickname", "email" e "password"'
        );
      } */

      const id: string = generateId();
      const user: user = { id, name, email, password };
      await this.userDatabase.createUser(user);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public getAll = async (): Promise<user[]> => {
    try {
      const result = await this.userDatabase.getAllUsers();
      return result;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public addFriend = async (input: addFriendDTO): Promise<void> => {
    try {
      const { friend1_id, friend2_id } = input;
      const id: string = generateId();
      const newFriends: friendRelation = { id, friend1_id, friend2_id };
      await this.userDatabase.addFriend(newFriends);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
