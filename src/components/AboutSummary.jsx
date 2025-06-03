// src/components/AboutSummary.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

export default function AboutSummary() {
  return (
    <Box sx={{ textAlign: "center", my: 8 }}>
      <Typography variant="h4" gutterBottom>
        About Future Logix Limited
      </Typography>
      <Typography variant="h6" color="textSecondary">
        Your partner in navigating the digital landscape. We empower
        organizations through technology that simplifies operations, enhances
        access to information, and fosters growth.
      </Typography>
    </Box>
  );
}
