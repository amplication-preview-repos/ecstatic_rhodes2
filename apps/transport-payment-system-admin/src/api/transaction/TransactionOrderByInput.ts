import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  cardId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  transactionDate?: SortOrder;
  updatedAt?: SortOrder;
  vehicleId?: SortOrder;
};
