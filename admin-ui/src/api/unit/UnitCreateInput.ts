import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type UnitCreateInput = {
  name?: string | null;
  property?: PropertyWhereUniqueInput | null;
};
