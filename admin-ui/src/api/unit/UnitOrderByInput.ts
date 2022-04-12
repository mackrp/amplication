import { SortOrder } from "../../util/SortOrder";

export type UnitOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  propertyId?: SortOrder;
  updatedAt?: SortOrder;
};
