import { CardCreateNestedManyWithoutCommutersInput } from "./CardCreateNestedManyWithoutCommutersInput";

export type CommuterCreateInput = {
  cards?: CardCreateNestedManyWithoutCommutersInput;
  email?: string | null;
  name?: string | null;
};
