import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";

const Dashboard = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5">Total Incidents</Typography>
            <Typography variant="h2">25</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant="h5">Open Incidents</Typography>
            <Typography variant="h2">10</Typography>
          </CardContent>
        </Card>
      </Grid>
      {/* Add more dashboard cards as needed */}
    </Grid>
  );
};

export default Dashboard;
