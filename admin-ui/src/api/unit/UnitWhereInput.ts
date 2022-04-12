import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { PropertyWhereUniqueInput } from "../property/PropertyWhereUniqueInput";

export type UnitWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  property?: PropertyWhereUniqueInput;
};
