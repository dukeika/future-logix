// src/components/Footer.jsx
import React from "react";
import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        color: "white",
        textAlign: "center",
        p: 2,
        mt: "auto",
      }}
    >
      <Typography>© 2025 Future Logix Limited. All rights reserved.</Typography>
    </Box>
  );
}
