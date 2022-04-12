import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";

export type DatumCreateInput = {
  address?: string | null;
  country?: CountryWhereUniqueInput | null;
  internalId?: number | null;
  name?: string | null;
  notes?: string | null;
};
