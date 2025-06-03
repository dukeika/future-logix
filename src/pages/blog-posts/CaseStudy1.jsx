import React from "react";
import { Container, Typography } from "@mui/material";

export default function CaseStudy1() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        University Library Transformation
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Published: February 28, 2025
      </Typography>

      <Typography paragraph sx={{ mt: 2 }}>
        We migrated over 50,000 records using Koha, dramatically improving
        catalog efficiency and user satisfaction.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Results Achieved
      </Typography>
      <ul>
        <li>70% reduction in cataloging time</li>
        <li>90% improvement in search accuracy</li>
        <li>₦2.4M annual operational savings</li>
        <li>300% increase in user satisfaction</li>
      </ul>
    </Container>
  );
}
