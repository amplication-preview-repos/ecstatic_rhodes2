import { TransactionUpdateManyWithoutVehiclesInput } from "./TransactionUpdateManyWithoutVehiclesInput";

export type VehicleUpdateInput = {
  route?: string | null;
  transactions?: TransactionUpdateManyWithoutVehiclesInput;
  vehicleNumber?: string | null;
};
