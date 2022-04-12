import { Country } from "../country/Country";

export type Datum = {
  address: string | null;
  country?: Country | null;
  createdAt: Date;
  id: string;
  internalId: number | null;
  name: string | null;
  notes: string | null;
  updatedAt: Date;
};
