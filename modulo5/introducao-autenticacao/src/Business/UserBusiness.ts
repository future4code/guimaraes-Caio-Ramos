import { UserDatabase } from "../Data/UserDatabase";
import {
  CustomError,
  InvalidName,
  InvalidEmail,
  InvalidPassword,
} from "../Error/customError";
import { User, userInputDTO } from "../Model/Types/User";
import { Authenticator } from "../Services/Authenticator";
import { IdGenerator } from "../Services/GenerateId";

const generateId = new IdGenerator();
const authenticator = new Authenticator();
export class UserBusiness {
  public signUp = async (input: userInputDTO): Promise<string> => {
    try {
      const { name, email, nickname, password } = input;
      if (!name || !email || !nickname || !password) {
        throw new CustomError(
          400,
          "Favor conferir se os elementos 'name', 'email', 'nickname', 'password' foram devidamente isneridos."
        );
      }
      if (name.length < 4) {
        throw new InvalidName();
      }
      if (!email.includes("@")) {
        throw new InvalidEmail();
      }
      if (password.length < 6) {
        throw new InvalidPassword();
      }
      const id: string = generateId.generateId();
      const user: User = { id, name, email, nickname, password };
      const userDB = new UserDatabase();
      await userDB.signUp(user);
      const token = authenticator.generateToken({ id });
      return token;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
  public getUserById = async (id: string): Promise<User> => {
    try {
      const userDB = new UserDatabase();
      const result = await userDB.getUserByEmail(id);
      return result;
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}
