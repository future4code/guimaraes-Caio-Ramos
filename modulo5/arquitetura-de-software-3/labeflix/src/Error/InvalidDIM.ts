import { CustomError } from "./CustomError";

export class InvalidDIM extends CustomError {
  constructor() {
    super("Duração em minutos inválida. Tente utilizar um número.", 406);
  }
}
