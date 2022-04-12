import { Unit } from "../unit/Unit";

export type Property = {
  createdAt: Date;
  id: string;
  location: string | null;
  name: string | null;
  units?: Array<Unit>;
  updatedAt: Date;
};
