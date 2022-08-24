import { CheckMail, User } from "../../Model/Types/User";

export interface IUserRepository {
  insertUser({ id, name, email, password }: User): Promise<void>;
  findUserByEmail(email: CheckMail): Promise<string>;
}
