import { BaseDatabase } from './BaseDatabase';
import { CustomError } from '../customError';
import { User } from '../Model/Types/user';

export class UserDatabase extends BaseDatabase{
  public insertUser = async (user: User) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.id,
          name: user.name,
          nickname: user.nickname,
          email: user.email,
          password: user.password,
          role: user.role
        })
        .into("Auth_users");
    } catch (error: any) {
      throw new CustomError(400, error.sqlMessage);
    }
  };
}