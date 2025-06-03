// src/components/StatsCards.jsx
import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

export default function StatsCards() {
  return (
    <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
          <Typography variant="h5">AWS Advanced Partner</Typography>
          <Typography>
            Trusted by leading organizations across Nigeria.
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
          <Typography variant="h5">98% Client Satisfaction Rate</Typography>
          <Typography>Our clients love our results-driven approach.</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
          <Typography variant="h5">
            500+ Successful Projects Delivered
          </Typography>
          <Typography>
            Proven track record of excellence and innovation.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
