import { Card } from "../card/Card";
import { Vehicle } from "../vehicle/Vehicle";

export type Transaction = {
  amount: number | null;
  card?: Card | null;
  createdAt: Date;
  id: string;
  transactionDate: Date | null;
  updatedAt: Date;
  vehicle?: Vehicle | null;
};
