import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type DatumWhereInput = {
  address?: StringNullableFilter;
  country?: CountryWhereUniqueInput;
  id?: StringFilter;
  internalId?: IntNullableFilter;
  name?: StringNullableFilter;
  notes?: StringNullableFilter;
};
