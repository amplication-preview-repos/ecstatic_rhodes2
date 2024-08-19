import { CardWhereUniqueInput } from "../card/CardWhereUniqueInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type TransactionCreateInput = {
  amount?: number | null;
  card?: CardWhereUniqueInput | null;
  transactionDate?: Date | null;
  vehicle?: VehicleWhereUniqueInput | null;
};
