import { SortOrder } from "../../util/SortOrder";

export type DatumOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  internalId?: SortOrder;
  name?: SortOrder;
  notes?: SortOrder;
  updatedAt?: SortOrder;
  usCan?: SortOrder;
};
