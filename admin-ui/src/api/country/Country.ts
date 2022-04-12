import { Datum } from "../datum/Datum";

export type Country = {
  createdAt: Date;
  data?: Array<Datum>;
  id: string;
  name: string;
  updatedAt: Date;
};
