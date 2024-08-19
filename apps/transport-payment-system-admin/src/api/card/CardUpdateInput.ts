import { CommuterWhereUniqueInput } from "../commuter/CommuterWhereUniqueInput";
import { TransactionUpdateManyWithoutCardsInput } from "./TransactionUpdateManyWithoutCardsInput";

export type CardUpdateInput = {
  balance?: number | null;
  commuter?: CommuterWhereUniqueInput | null;
  transactions?: TransactionUpdateManyWithoutCardsInput;
  validTill?: Date | null;
};
