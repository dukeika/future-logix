import React from "react";
import { Container, Typography } from "@mui/material";

export default function ServerlessAfrica() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Why Serverless Architecture is Perfect for African Startups
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Published: April 3, 2025
      </Typography>

      <Typography paragraph sx={{ mt: 2 }}>
        For startups in Africa, building scalable, cost-effective apps is
        critical. Serverless computing offers the perfect solution.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Advantages for Startups
      </Typography>
      <ul>
        <li>No need to manage servers</li>
        <li>Pay only for what you use</li>
        <li>Auto-scaling for traffic spikes</li>
        <li>Faster time-to-market</li>
      </ul>

      <Typography variant="h6" gutterBottom>
        Our Tech Stack
      </Typography>
      <Typography paragraph>
        We use AWS Lambda, API Gateway, DynamoDB, and React.js to build robust,
        scalable applications that grow with your startup.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Real-World Use Cases
      </Typography>
      <ul>
        <li>E-commerce platforms</li>
        <li>Mobile app backends</li>
        <li>Internal tools and dashboards</li>
        <li>Marketplaces and SaaS products</li>
      </ul>
    </Container>
  );
}
