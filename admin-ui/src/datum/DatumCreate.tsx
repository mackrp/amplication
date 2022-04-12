import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { CountryTitle } from "../country/CountryTitle";

export const DatumCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Address" source="address" />
        <ReferenceInput source="country.id" reference="Country" label="Country">
          <SelectInput optionText={CountryTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Internal ID" source="internalId" />
        <TextInput label="Name" source="name" />
        <TextInput label="Notes" multiline source="notes" />
      </SimpleForm>
    </Create>
  );
};
