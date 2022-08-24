import { User } from "../Model/Types/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  THIS_TABLE = "Auth_users";
  signUp = async (user: User): Promise<void> => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          nickname: user.nickname,
          email: user.email,
          password: user.password,
        })
        .into(this.THIS_TABLE);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  getUserByEmail = async (id: string): Promise<User> => {
    try {
      
      const result = await UserDatabase.connection(this.THIS_TABLE).select("*").where({ id })
      
      return result[0]
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
