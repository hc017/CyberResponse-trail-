import React from "react";
import { List, Datagrid, TextField, DateField, EditButton } from "react-admin";

const IncidentList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source="id" />
        <TextField source="description" />
        <DateField source="date" />
        <TextField source="status" />
        <EditButton />
      </Datagrid>
    </List>
  );
};

export default IncidentList;
