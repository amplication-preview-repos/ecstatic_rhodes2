import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CardWhereUniqueInput } from "../card/CardWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { VehicleWhereUniqueInput } from "../vehicle/VehicleWhereUniqueInput";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  card?: CardWhereUniqueInput;
  id?: StringFilter;
  transactionDate?: DateTimeNullableFilter;
  vehicle?: VehicleWhereUniqueInput;
};
