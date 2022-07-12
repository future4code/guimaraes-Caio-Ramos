export class Transaction {
  private description: string;
  private value: number;
  private date: string;
  constructor(description: string, value: number, date: string) {
    (this.description = description), (this.value = value), (this.date = date);
  }

  //Getters:

  getDescription = (): string => {
    return this.description;
  };

  getValue = (): number => {
    return this.value;
  };

  getDate = (): string => {
    return this.date;
  };
}
