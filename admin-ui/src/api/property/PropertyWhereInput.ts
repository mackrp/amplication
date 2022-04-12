import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UnitListRelationFilter } from "../unit/UnitListRelationFilter";

export type PropertyWhereInput = {
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
  units?: UnitListRelationFilter;
};
