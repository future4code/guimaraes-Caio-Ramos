import { user } from "../../Types/user";

export interface UserRepository {
  createUser(user: user): Promise<void>;
}
