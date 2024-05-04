import React from "react";
import { Edit, SimpleForm, TextInput, DateInput, SelectInput } from "react-admin";

const IncidentEdit = (props) => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="description" multiline />
        <DateInput source="date" />
        <SelectInput
          source="status"
          choices={[
            { id: "Open", name: "Open" },
            { id: "In Progress", name: "In Progress" },
            { id: "Resolved", name: "Resolved" },
          ]}
        />
      </SimpleForm>
    </Edit>
  );
};

export default IncidentEdit;
