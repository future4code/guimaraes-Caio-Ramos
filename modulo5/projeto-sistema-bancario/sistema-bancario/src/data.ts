import { v4 as generateId } from "uuid";

export type Account = {
  id: string;
  name: string;
  cpf: number | string;
  dateOfBirth: string;
  balance: number;
  bankStatement: [{ value: number; date: string; description: string }];
};



export const bankUsers: Account[] = [
  {
    id: "1",
    name: "Caio",
    cpf: generateId(),
    dateOfBirth: "19/07/1989",
    balance: 0,
    bankStatement: [{ value: 0, date: "", description: "" }],
  },
  {
    id: "2",
    name: "Lethícia",
    cpf: generateId(),
    dateOfBirth: "09/08/1990",
    balance: 0,
    bankStatement: [{ value: 0, date: "", description: "" }],
  },
  {
    id: "3",
    name: "Camila",
    cpf: generateId(),
    dateOfBirth: "19/07/1989",
    balance: 0,
    bankStatement: [{ value: 0, date: "", description: "" }],
  },
  {
    id: "4",
    name: "Laíne",
    cpf: generateId(),
    dateOfBirth: "19/07/1989",
    balance: 0,
    bankStatement: [{ value: 0, date: "", description: "" }],
  },
  {
    id: "5",
    name: "Tiago",
    cpf: generateId(),
    dateOfBirth: "19/07/1989",
    balance: 0,
    bankStatement: [{ value: 0, date: "", description: "" }],
  },
  {
    id: "6",
    name: "Lucas",
    cpf: generateId(),
    dateOfBirth: "19/07/1989",
    balance: 0,
    bankStatement: [{ value: 0, date: "", description: "" }],
  },
];
