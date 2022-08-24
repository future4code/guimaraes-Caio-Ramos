import { UserDatabase } from "../Data/UserDatabase";
import {
  CustomError,
  InvalidEmail,
  SmallName,
  SmallPassword,
} from "../Error/CustomError";
import { User, UserInputDTO } from "../Model/Types/User";
import Authenticator from "../Services/Authenticator";
import IdGenerator from "../Services/GenerateId";
import HashManager from "../Services/HashManager";

export class UserBusiness {
  private userDB: UserDatabase;
  constructor() {
    this.userDB = new UserDatabase();
  }
  public createUser = async (input: UserInputDTO): Promise<string> => {
    try {
      const { name, email, password } = input;
      if (!name || !email || !password) {
        throw new CustomError(400, "Missing parameters");
      }
      if (name.length < 6) {
        throw new SmallName();
      }
      if (!email.includes("@")) {
        throw new InvalidEmail();
      }
      if (password.length < 6) {
        throw new SmallPassword();
      }
      const id = IdGenerator.generateId();
      const hash = await HashManager.generateHash(password);
      const user: User = { id, name, email, password: hash };
      await this.userDB.insertUser(user);
      const token = Authenticator.generateToken({ id });
      return token;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
