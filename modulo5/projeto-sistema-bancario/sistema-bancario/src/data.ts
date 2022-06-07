type Account = {
  id: string;
  name: string;
  cpf: number;
  dateOfBirth: string;
  balance: number;
  bankStatement: [{ value: number; date: string; description: string }];
};

/* type BankStatement = {
    
  } */

export const bankUsers: Account[] = [
  {
    id: "1",
    name: "Caio",
    cpf: Math.random(),
    dateOfBirth: "19/07/1989",
    balance: 0,
    bankStatement: [{ value: 0, date: "", description: "" }],
  },
  {
    id: "2",
    name: "Lethícia",
    cpf: Math.random(),
    dateOfBirth: "09/08/1990",
    balance: 0,
    bankStatement: [{ value: 0, date: "", description: "" }],
  },
  {
    id: "3",
    name: "Camila",
    cpf: Math.random(),
    dateOfBirth: "19/07/1989",
    balance: 0,
    bankStatement: [{ value: 0, date: "", description: "" }],
  },
];
