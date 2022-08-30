export class CustomError extends Error {
  statusCode: number;

  constructor(statusCode: number, message: string) {
    super(message);
    this.statusCode = statusCode;
  }
}
export class InvalidName extends CustomError {
  constructor() {
    super(400, "Nome inválido. Nome deve ter mais de 4 caracteres.");
  }
}
export class InvalidEmail extends CustomError {
  constructor() {
    super(400, "Email inválido. E-mails precisam contar arroba '@'.");
  }
}
export class InvalidPassword extends CustomError {
  constructor() {
    super(400, "Senha inválida. Senhas devem ter pelo menos 6 caracteres");
  }
}
export class Unauthorized extends CustomError {
  constructor() {
    super(401, "Usuário não autorizado. Faça login novamente.");
  }
}
