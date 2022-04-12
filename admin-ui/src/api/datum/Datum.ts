export type Datum = {
  address: string | null;
  createdAt: Date;
  id: string;
  internalId: number | null;
  name: string | null;
  notes: string | null;
  updatedAt: Date;
  usCan?: "US" | "CA" | null;
};
