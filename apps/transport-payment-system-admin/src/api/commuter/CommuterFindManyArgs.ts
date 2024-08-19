import { CommuterWhereInput } from "./CommuterWhereInput";
import { CommuterOrderByInput } from "./CommuterOrderByInput";

export type CommuterFindManyArgs = {
  where?: CommuterWhereInput;
  orderBy?: Array<CommuterOrderByInput>;
  skip?: number;
  take?: number;
};
