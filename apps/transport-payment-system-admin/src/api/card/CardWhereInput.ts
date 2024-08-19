import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CommuterWhereUniqueInput } from "../commuter/CommuterWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CardWhereInput = {
  balance?: FloatNullableFilter;
  commuter?: CommuterWhereUniqueInput;
  id?: StringFilter;
  transactions?: TransactionListRelationFilter;
  validTill?: DateTimeNullableFilter;
};
