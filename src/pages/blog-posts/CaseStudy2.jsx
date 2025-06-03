import React from "react";
import { Container, Typography } from "@mui/material";

export default function CaseStudy2() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        E-commerce Platform Migration
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Published: February 20, 2025
      </Typography>

      <Typography paragraph sx={{ mt: 2 }}>
        A growing retail company was experiencing frequent outages during peak
        sales. We migrated their e-commerce platform to AWS serverless
        architecture.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Outcomes
      </Typography>
      <ul>
        <li>99.99% uptime achieved</li>
        <li>500% increase in concurrent users handled</li>
        <li>300% improvement in page load speed</li>
        <li>45% hosting cost reduction</li>
      </ul>
    </Container>
  );
}
