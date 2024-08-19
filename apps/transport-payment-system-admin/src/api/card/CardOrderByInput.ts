import { SortOrder } from "../../util/SortOrder";

export type CardOrderByInput = {
  balance?: SortOrder;
  commuterId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  validTill?: SortOrder;
};
