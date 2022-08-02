export class UserClass {
  constructor(
    protected id: string,
    protected name: string,
    protected email: string,
    protected password: string
  ) {}

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }
  getPassword(): string {
    return this.password;
  }
}
