import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COUNTRY_TITLE_FIELD } from "./CountryTitle";

export const CountryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="Name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField reference="Datum" target="CountryId" label="Data">
          <Datagrid rowClick="show">
            <TextField label="Address" source="address" />
            <ReferenceField
              label="Country"
              source="country.id"
              reference="Country"
            >
              <TextField source={COUNTRY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Internal ID" source="internalId" />
            <TextField label="Name" source="name" />
            <TextField label="Notes" source="notes" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
