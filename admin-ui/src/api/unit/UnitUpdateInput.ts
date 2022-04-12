import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type UnitUpdateInput = {
  name?: string | null;
  property?: PropertyWhereUniqueInput | null;
};
