import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type DatumWhereInput = {
  address?: StringNullableFilter;
  id?: StringFilter;
  internalId?: IntNullableFilter;
  name?: StringNullableFilter;
  notes?: StringNullableFilter;
  usCan?: "US" | "CA";
};
