import React from "react";
import { Container, Typography } from "@mui/material";

export default function LibraryDigitization() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Library Digitization: Best Practices and Lessons Learned
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Published: March 28, 2025
      </Typography>

      <Typography paragraph sx={{ mt: 2 }}>
        Over the years, we’ve helped dozens of libraries digitize their
        collections. Here are the top lessons learned:
      </Typography>

      <Typography variant="h6" gutterBottom>
        1. Define Clear Objectives
      </Typography>
      <Typography paragraph>
        Know what you're digitizing and why. Is it for public access? Research?
        Preservation?
      </Typography>

      <Typography variant="h6" gutterBottom>
        2. Choose the Right Tools
      </Typography>
      <Typography paragraph>
        Open-source systems like Koha and DSpace offer flexibility without
        licensing fees.
      </Typography>

      <Typography variant="h6" gutterBottom>
        3. Train Your Staff
      </Typography>
      <Typography paragraph>
        Even the best system won't help if staff aren’t trained properly.
      </Typography>

      <Typography variant="h6" gutterBottom>
        4. Plan for Long-Term Maintenance
      </Typography>
      <Typography paragraph>
        Set up regular backups, metadata standards, and workflows for new
        content addition.
      </Typography>
    </Container>
  );
}
