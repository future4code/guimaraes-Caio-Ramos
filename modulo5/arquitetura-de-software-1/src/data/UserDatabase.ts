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
  getAllUsers = async (): Promise<any> => {
    try {
      const users: User[] = [];
      const result = await UserDatabase.connection.select("*").from("User_Arq");
      for (let user of result) {
        users.push(user);
      }
      return users;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  deleteById = async (id:string):Promise<void> => {
    try {
     await UserDatabase.connection.where({id}).from("User_Arq").delete()
      
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  }
}
