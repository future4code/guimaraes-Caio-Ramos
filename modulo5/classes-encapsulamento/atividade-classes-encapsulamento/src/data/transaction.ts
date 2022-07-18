export class Transaction {
  private description: string;
  private value: number;
  private date: string;
  constructor(description: string, value: number, date: string) {
    console.log("Chamando o construtor da classe Transaction"),
      (this.description = description),
      (this.value = value),
      (this.date = date);
  }

  //Getters:

  getDescription(): string {
    return this.description;
  }

  getValue(): number {
    return this.value;
  }

  getDate(): string {
    return this.date;
  }
}
