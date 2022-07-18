import { Client } from "../Interfaces/Client";
import { Residence } from "./Residence";

export class ResidentialCLient extends Residence implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cpf: string,
    residentsQuantity: number,
    cep: string
  ) {
    super(residentsQuantity, cep);
  }

  public getName(): string {
    return this.name;
  }
  public getRegistrationNumber(): number {
    return this.registrationNumber;
  }
  public getConsumedEnergy(): number {
    return this.consumedEnergy;
  }
  public getCPF(): string {
    return this.cpf;
  }
  public getResidentsQuantity(): number {
    return this.residentsQuantity;
  }

  public getCep(): string {
    return this.cep;
  }

  public calculateBill(): number {
    return this.consumedEnergy * 0.75;
  }
}
