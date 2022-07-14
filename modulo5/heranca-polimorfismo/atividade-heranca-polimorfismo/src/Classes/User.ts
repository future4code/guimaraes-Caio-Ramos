export class User {
  protected id: string;
  protected name: string;
  protected email: string;
  protected password: string;

  constructor(id: string, name: string, email: string, password: string) {
    console.log(`Chamando o construtor na superclasse User.`);
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
  }
}
