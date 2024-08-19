import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type VehicleWhereInput = {
  id?: StringFilter;
  route?: StringNullableFilter;
  transactions?: TransactionListRelationFilter;
  vehicleNumber?: StringNullableFilter;
};
