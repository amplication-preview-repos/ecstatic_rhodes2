import { Commuter } from "../commuter/Commuter";
import { Transaction } from "../transaction/Transaction";

export type Card = {
  balance: number | null;
  commuter?: Commuter | null;
  createdAt: Date;
  id: string;
  transactions?: Array<Transaction>;
  updatedAt: Date;
  validTill: Date | null;
};
