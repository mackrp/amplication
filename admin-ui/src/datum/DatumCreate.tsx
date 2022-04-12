import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  SelectInput,
} from "react-admin";

export const DatumCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
