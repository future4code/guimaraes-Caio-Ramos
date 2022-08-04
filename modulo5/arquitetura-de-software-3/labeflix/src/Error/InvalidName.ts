import { CustomError } from "./CustomError";

export class InvalidName extends CustomError {
  constructor() {
    super("Nome inválido. Tente novamente.", 406);
  }
}
