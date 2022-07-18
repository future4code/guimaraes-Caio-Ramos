import { Client } from "../Interfaces/Client";
import { Industry } from "./Industry";

export class IndustrialClient extends Industry implements Client {
  constructor(
    public name: string,
    public registrationNumber: number,
    public consumedEnergy: number,
    private nri: string,
    machinesQuantity: number,
    cep: string
  ) {
    super(machinesQuantity, cep);
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
  public getMachinesQuantity(): number {
    return this.machinesQuantity;
  }
  public getNRI(): string {
    return this.nri;
  }

  public getCep(): string {
    return this.cep;
  }
  public calculateBill(): number {
    return this.consumedEnergy * 0.45 + 100;
  }
}
