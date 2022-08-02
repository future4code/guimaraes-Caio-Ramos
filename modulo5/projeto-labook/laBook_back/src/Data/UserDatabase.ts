import { BaseDatabase } from "./BaseDatabase";
import { user } from "../Types/user";

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

  
}
