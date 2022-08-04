import { CustomError } from "./CustomError";

export class InvalidDescription extends CustomError {
  constructor() {
    super("Descrição inválida. Tente novamente.", 406);
  }
}
