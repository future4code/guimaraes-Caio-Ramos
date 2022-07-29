import { BaseDatabase } from "./BaseDatabase";
import { User } from "../types/User";
export class UserDatabase extends BaseDatabase {
  private TABLE_NAME = "LABEFLIX_USER";

  public create = async ({ id, name, email, password }: any): Promise<void> => {
    await UserDatabase.connection
      .insert({
        id,
        name,
        email,
        password,
      })
      .into(this.TABLE_NAME);
  };

  public getAll = async (): Promise<User[]> => {
    try {
      const users: User[] = [];
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
