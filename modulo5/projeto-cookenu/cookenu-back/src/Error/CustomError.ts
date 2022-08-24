export class CustomError extends Error {
  constructor(statusCode: number, message: string) {
    super(message);
  }
}

export class InvalidEmail extends CustomError {
  constructor() {
    super(400, "Invalid e-mail. E-mails must have a '@' in their body.");
  }
}
export class EmailDoesntExists extends CustomError {
  constructor() {
    super(
      400,
      "This e-amil doesn't exists in this database. Try signing it up."
    );
  }
}
export class InvalidPassword extends CustomError {
  constructor() {
    super(400, "Invalid password. Please try again.");
  }
}
export class SmallPassword extends CustomError {
  constructor() {
    super(
      400,
      "Invalid passwords. E-mails must have at least 6 (six) characters."
    );
  }
}

export class SmallName extends CustomError {
  constructor() {
    super(400, "Invalid name. Names must have at least 6 (six) characters.");
  }
}
