import { TransactionCreateNestedManyWithoutVehiclesInput } from "./TransactionCreateNestedManyWithoutVehiclesInput";

export type VehicleCreateInput = {
  route?: string | null;
  transactions?: TransactionCreateNestedManyWithoutVehiclesInput;
  vehicleNumber?: string | null;
};
