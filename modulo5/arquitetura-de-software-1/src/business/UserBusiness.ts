import { UserDatabase } from "../data/UserDatabase";
import { User } from "../types/User";
import { v4 as createId } from "uuid";
export class UserBusiness extends UserDatabase {
  createUser = async (input: any): Promise<void> => {
    try {
      const { name, email, password } = input;
      if (!name) {
        throw new Error("Missing 'name' parameter. Please try again.");
      }
      if (!email) {
        throw new Error("Missing 'email' parameter. Please try again.");
      }
      if (!password) {
        throw new Error("Missing 'password' parameter. Please try again.");
      }
      const id = createId();
      const userDB = new UserDatabase();
      await userDB.insertUser({ id, name, email, password });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  getAllUsers = async (): Promise<any> => {
    try {
      return await new UserDatabase().getAllUsers();
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  deleteUserId = async (input: { id: string }): Promise<void> => {
    try {
      if (!input.id) {
        throw new Error("Missing 'id' parameter. Please try again.");
      }
      const userDB = new UserDatabase();
      return await userDB.deleteById(input.id);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
