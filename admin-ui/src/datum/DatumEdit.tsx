import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  SelectInput,
} from "react-admin";

export const DatumEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <NumberInput step={1} label="Internal ID" source="internalId" />
        <TextInput label="Name" source="name" />
        <TextInput label="Notes" multiline source="notes" />
        <SelectInput
          source="usCan"
          label="US/CAN"
          choices={[
            { label: "US", value: "US" },
            { label: "Canada", value: "CA" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
