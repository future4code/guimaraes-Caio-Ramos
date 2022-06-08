import { v4 } from "uuid";
type Products = {
  id: string;
  name: string;
  price: number;
};

export const produtos: Products[] = [
  {
    id: "1A2B3C",
    name: "Havaiana de Pau",
    price: 33.45,
  },
  {
    id: "4D5E6F",
    name: "Travesseiro de Pedra",
    price: 66.9,
  },
  { id: "7G8H9I", name: "Palha de Aço", price: 133.8 },
];
