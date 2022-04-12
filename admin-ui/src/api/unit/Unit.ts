import { Property } from "../property/Property";

export type Unit = {
  createdAt: Date;
  id: string;
  name: string | null;
  property?: Property | null;
  updatedAt: Date;
};
