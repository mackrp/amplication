import { DatumWhereInput } from "./DatumWhereInput";
import { DatumOrderByInput } from "./DatumOrderByInput";

export type DatumFindManyArgs = {
  where?: DatumWhereInput;
  orderBy?: Array<DatumOrderByInput>;
  skip?: number;
  take?: number;
};
