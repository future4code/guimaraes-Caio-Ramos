import { CustomError } from "./CustomError";

export class InvalidYoR extends CustomError {
  constructor() {
    super("Ano de lançamento  inválida. Tente utilizar um número.", 406);
  }
}
