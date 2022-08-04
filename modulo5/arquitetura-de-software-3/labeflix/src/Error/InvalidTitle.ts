import { CustomError } from "./CustomError";

export class InvalidTitle extends CustomError {
  constructor() {
    super("Título inválido. Tente novamente.", 406);
  }
}
