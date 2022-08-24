import { CheckMail, User, UserLogin } from "../Model/Types/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  TABLE_NAME: string = "cookenu_users";
  public insertUser = async ({
    id,
    name,
    email,
    password,
  }: User): Promise<void> => {
    try {
      const newUser = await UserDatabase.connection
        .insert({ id, name, email, password })
        .into(this.TABLE_NAME);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  public findUserByEmail = async (email: string) => {
    try {
      const checkEmail = await UserDatabase.connection(this.TABLE_NAME)
        .select()
        .where({ email });
      return checkEmail[0];
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
