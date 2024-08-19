import { Transaction } from "../transaction/Transaction";

export type Vehicle = {
  createdAt: Date;
  id: string;
  route: string | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  vehicleNumber: string | null;
};
