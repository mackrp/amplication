import { DatumListRelationFilter } from "../datum/DatumListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CountryWhereInput = {
  data?: DatumListRelationFilter;
  id?: StringFilter;
  name?: StringFilter;
};
