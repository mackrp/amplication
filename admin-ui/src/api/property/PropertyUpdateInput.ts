import { UnitUpdateManyWithoutPropertiesInput } from "./UnitUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  location?: string | null;
  name?: string | null;
  units?: UnitUpdateManyWithoutPropertiesInput;
};
