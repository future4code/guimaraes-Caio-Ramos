import { CustomError } from "./CustomError";

export class InvalidPassword extends CustomError {
  constructor() {
    super("Senha não atende aos requisitos mínimos. Tente novamente.", 406);
  }
}
