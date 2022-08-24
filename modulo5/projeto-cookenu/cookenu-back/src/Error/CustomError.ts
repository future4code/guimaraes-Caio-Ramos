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
export class SmallName extends CustomError {
  constructor() {
    super(
      400,
      "Invalid name. Names must have at least 6 (six) characters."
    );
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
