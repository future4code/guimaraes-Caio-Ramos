import { User } from "../Model/Types/User";
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
}
