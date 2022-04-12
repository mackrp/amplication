import { UnitCreateNestedManyWithoutPropertiesInput } from "./UnitCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  location?: string | null;
  name?: string | null;
  units?: UnitCreateNestedManyWithoutPropertiesInput;
};
