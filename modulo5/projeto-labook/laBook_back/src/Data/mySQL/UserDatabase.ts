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

  public checkFriends = async (): Promise<friendRelation[]> => {
    try {
      const friends: friendRelation[] = [];
      const result = await UserDatabase.connection()
        .select("*")
        .from("relational_friends");
      for (let friend of result) {
        friends.push(friend);
      }
      return friends;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
  public undoFriendship = async (id: string): Promise<void> => {
    try {
      await UserDatabase.connection("relational_friends")
        .where({ id: id })
        .del();
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
