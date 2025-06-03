// src/components/CallToAction.jsx
import React from "react";
import { Box, Button, Typography } from "@mui/material";

export default function CallToAction() {
  return (
    <Box sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h5" paragraph>
        Ready to transform your business? Contact us for a free consultation.
      </Typography>
      <Button variant="contained" color="primary" href="/contact">
        Start Your Digital Transformation Today
      </Button>
    </Box>
  );
}
