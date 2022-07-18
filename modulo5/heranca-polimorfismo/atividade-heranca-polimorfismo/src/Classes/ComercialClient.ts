import { Commerce } from "./Commerce";
import { Client } from "../Interfaces/Client";

export class CommercialClient extends Commerce implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private cnpj: string,
    floorsQuantity: number,
    cep: string
  ) {
    super(floorsQuantity, cep);
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
  public getCNPJ(): string {
    return this.cnpj;
  }
  public getFloorsQuantity(): number {
    return this.floorsQuantity;
  }

  public getCep(): string {
    return this.cep;
  }
  public calculateBill(): number {
    return this.consumedEnergy * 0.53;
  }
}
