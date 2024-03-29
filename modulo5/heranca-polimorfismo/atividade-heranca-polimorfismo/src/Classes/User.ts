export class User {
  private id: string;
  private name: string;
  private email: string;
  private password: string;

  constructor(id: string, name: string, email: string, password: string) {
    console.log(`Chamando o construtor na superclasse User.`);
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }

  //Getters:

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getEmail(): string {
    return this.email;
  }

  public introduceYourself(): string {
    return `Olá, sou ${this.name}. Bom dia!`;
  }
  //Setters:
}
