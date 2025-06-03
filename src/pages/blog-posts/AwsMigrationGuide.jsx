import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";

export default function AwsMigrationGuide() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        The Complete Guide to AWS Migration for Nigerian Businesses
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Published: April 5, 2025
      </Typography>

      <Typography paragraph sx={{ mt: 2 }}>
        Migrating to AWS can transform your business by reducing infrastructure
        costs, improving scalability, and enhancing security.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Why Migrate to AWS?
      </Typography>
      <ul>
        <li>Scalability without upfront costs</li>
        <li>Enterprise-grade security features</li>
        <li>99.9% uptime SLAs</li>
        <li>Global CDN and regional support</li>
      </ul>

      <Typography variant="h6" gutterBottom>
        Step-by-Step Migration Process
      </Typography>
      <ol>
        <li>
          <strong>Assessment:</strong> Evaluate current infrastructure and
          workloads
        </li>
        <li>
          <strong>Planning:</strong> Design architecture and migration roadmap
        </li>
        <li>
          <strong>Execution:</strong> Move applications, databases, and files
          securely
        </li>
        <li>
          <strong>Optimization:</strong> Right-size resources and cut costs
        </li>
        <li>
          <strong>Monitoring:</strong> Ensure performance and reliability
        </li>
      </ol>

      <Typography variant="h6" gutterBottom>
        Common Challenges & Solutions
      </Typography>
      <Typography paragraph>
        Many businesses worry about downtime or data loss during migration. We
        address these concerns through: - Incremental migration plans - Data
        encryption at rest and in transit - Rollback strategies - Post-migration
        validation checks
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Button variant="contained" color="primary" href="/contact">
          Get a Free Migration Assessment
        </Button>
      </Box>
    </Container>
  );
}
