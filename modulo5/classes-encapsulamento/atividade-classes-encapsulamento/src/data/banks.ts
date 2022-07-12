import { UserAccount } from "./userAccount";

export class Banks {
  private name: string;
  private income: number;
  private numberOfUsers: number;
  private userAccounts: UserAccount[] = [];

  constructor(name: string, income: number, numberOfUsers: number) {
    console.log("Chamando o construtor da classe Banks!");
    (this.name = name),
      (this.income = income),
      (this.numberOfUsers = numberOfUsers);
  }
  //Getters:

  public getName = (): string => {
    return this.name;
  };
  public getIncome = (): number => {
    return this.income;
  };
  public getNumberOfUsers = (): number => {
    return this.numberOfUsers;
  };
  public getUserAccounts = (): UserAccount[] => {
    return this.userAccounts;
  };
}
