import { User } from "../Model/Types/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  THIS_TABLE = "Auth_users";
  signUp = async (user: User): Promise<any> => {
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
}
