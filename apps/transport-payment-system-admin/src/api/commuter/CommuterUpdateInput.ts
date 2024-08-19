import { CardUpdateManyWithoutCommutersInput } from "./CardUpdateManyWithoutCommutersInput";

export type CommuterUpdateInput = {
  cards?: CardUpdateManyWithoutCommutersInput;
  email?: string | null;
  name?: string | null;
};
