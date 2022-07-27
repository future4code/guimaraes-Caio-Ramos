import { User } from "../types/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  insertUser = async (user: User): Promise<void> => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
        })
        .into("User_Arq");
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
