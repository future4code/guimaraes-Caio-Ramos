import { user } from "../../Types/user";

export interface UserRepository {
  createUser(user: user): Promise<void>;
  getAllUsers(): Promise<user[]>;
  addFriend(id: string, friend: string): Promise<void>;
}
