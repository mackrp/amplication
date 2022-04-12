import { DatumCreateNestedManyWithoutCountriesInput } from "./DatumCreateNestedManyWithoutCountriesInput";

export type CountryCreateInput = {
  data?: DatumCreateNestedManyWithoutCountriesInput;
  name: string;
};
