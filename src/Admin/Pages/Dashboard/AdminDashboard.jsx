import React from "react";
import { Admin, Resource, ListGuesser } from "react-admin";
import Dashboard from "./DashboadComponents/Dashboard";
import IncidentList from "./DashboadComponents/IncidentList";
import IncidentEdit from "./DashboadComponents/IncidentEdit";
import { Menu, AppBar } from "@mui/material";
// import dataProvider from "./dataProvider"; // This connects to a backend or an API

const AdminDashboard = () => {
  return (
    <Admin dashboard={Dashboard}>
      <Resource
        name="incidents"
        list={IncidentList}
        edit={IncidentEdit}
        icon={null}
      />
      {/* Add more resources as needed */}
    </Admin>
  );
};

export default AdminDashboard;
