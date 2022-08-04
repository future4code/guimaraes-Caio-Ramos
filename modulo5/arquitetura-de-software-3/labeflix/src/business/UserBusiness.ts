import { UserDatabase } from "../data/UserDatabase";
import { generateId } from '../services/generateId';
import { User } from "../Classes/User";
import { createUserDTO } from '../model/createUserDTO';

export class UserBusiness {
  async create({ email, name, password }: createUserDTO): Promise<void> {
    if (!email || !name || !password) {
      throw new Error("Dados inválidos (email, name, password)");
    }

    const id = generateId();

    const userDatabase = new UserDatabase();
    await userDatabase.create({
      id,
      name,
      email,
      password,
    });
  }
  getAll = async (): Promise<User[]> => {
    const userDB = new UserDatabase();
    return await userDB.getAll();
  };
}
