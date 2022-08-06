import { BaseDatabase } from "./BaseDatabase";
import { user } from "../../Types/user";

export class UserDatabase extends BaseDatabase {
  private TABLE_NAME = "labook_users";

  public createUser = async ({
    id,
    name,
    email,
    password,
  }: user): Promise<void> => {
    await UserDatabase.connection
      .insert({ id, name, email, password })
      .into(this.TABLE_NAME);
  };

  public getAllUsers = async (): Promise<user[]> => {
    try {
      const users: user[] = [];
      const result = await UserDatabase.connection()
        .select("*")
        .from(this.TABLE_NAME);
      for (let user of result) {
        users.push(user);
      }
      return users;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
