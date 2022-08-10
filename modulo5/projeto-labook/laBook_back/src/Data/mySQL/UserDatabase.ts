import { BaseDatabase } from "./BaseDatabase";
import { user } from "../../Types/user";
import { friendRelation } from "../../Types/friendRelation";

export class UserDatabase extends BaseDatabase {
  private TABLE_NAME = "labook_users";

  public createUser = async ({
    id,
    name,
    email,
    password,
  }: user): Promise<void> => {
    try {
      await UserDatabase.connection
        .insert({ id, name, email, password })
        .into(this.TABLE_NAME);
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
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
  public addFriend = async ({
    id,
    friend1_id,
    friend2_id,
  }: friendRelation): Promise<void> => {
    try {
      await UserDatabase.connection
        .insert({ id, friend1_id, friend2_id })
        .into("relational_friends");
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
  /* public undoFriendship = async (friends: string): Promise<void> => {
    try {
      await UserDatabase.connection(this.TABLE_NAME)
        .where({ friends: friends })
        .del();
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }; */
}
