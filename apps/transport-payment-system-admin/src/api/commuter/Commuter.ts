import { Card } from "../card/Card";

export type Commuter = {
  cards?: Array<Card>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
