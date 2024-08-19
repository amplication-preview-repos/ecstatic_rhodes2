import { SortOrder } from "../../util/SortOrder";

export type VehicleOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  route?: SortOrder;
  updatedAt?: SortOrder;
  vehicleNumber?: SortOrder;
};
