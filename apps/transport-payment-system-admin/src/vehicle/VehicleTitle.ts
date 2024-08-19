import { Vehicle as TVehicle } from "../api/vehicle/Vehicle";

export const VEHICLE_TITLE_FIELD = "route";

export const VehicleTitle = (record: TVehicle): string => {
  return record.route?.toString() || String(record.id);
};
