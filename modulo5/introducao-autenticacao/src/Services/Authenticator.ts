import * as jwt from "jsonwebtoken";
import { Unauthorized } from "../Error/customError";
import { AuthenticationData } from "../Model/Types/AuthenticationData";

export class Authenticator {
  generateToken = async ({ id }: AuthenticationData): Promise<string> => {
    try {
      const token = jwt.sign({ id }, process.env.JWT_KEY as string, {
        expiresIn: process.env.JWT_DURATION,
      });

      return token;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
