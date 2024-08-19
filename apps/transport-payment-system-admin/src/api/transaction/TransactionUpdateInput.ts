import { CardWhereUniqueInput } from "../card/CardWhereUniqueInput";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  card?: CardWhereUniqueInput | null;
  transactionDate?: Date | null;
  vehicle?: VehicleWhereUniqueInput | null;
};
