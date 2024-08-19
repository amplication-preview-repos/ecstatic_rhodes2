import { CommuterWhereUniqueInput } from "../commuter/CommuterWhereUniqueInput";
import { TransactionCreateNestedManyWithoutCardsInput } from "./TransactionCreateNestedManyWithoutCardsInput";

export type CardCreateInput = {
  balance?: number | null;
  commuter?: CommuterWhereUniqueInput | null;
  transactions?: TransactionCreateNestedManyWithoutCardsInput;
  validTill?: Date | null;
};
