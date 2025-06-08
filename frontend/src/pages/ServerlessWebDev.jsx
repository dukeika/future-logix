import React from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  Button,
  ListItemText,
} from "@mui/material";

export default function ServerlessWebDev() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Serverless Web Application Development
      </Typography>

      <Typography paragraph>
        Build scalable, cost-effective applications that grow with your
        business. Our serverless architecture ensures high availability, low
        maintenance, and pay-as-you-go pricing.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Our Stack
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Frontend: React.js, Next.js, Vue.js" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Backend: AWS Lambda, API Gateway" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Database: DynamoDB, RDS Serverless" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Authentication: Cognito, Auth0" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Deployment: AWS Amplify, CodePipeline" />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom>
        Key Features
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Auto-scaling for traffic spikes" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Pay-per-use model" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Built-in redundancy" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Global CDN for fast performance" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Enterprise-grade security" />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom>
        Cost Comparison
      </Typography>
      <Typography paragraph>
        - Traditional Hosting: ₦180,000/month
        <br />
        - Serverless Solution: ₦45,000–90,000/month
        <br />
        <strong>Potential Monthly Savings: ₦90,000–135,000</strong>
      </Typography>

      <Box sx={{ mt: 3 }}>
        <Button variant="contained" color="primary" href="/pricing/serverless">
          View Serverless Pricing Options
        </Button>
      </Box>
    </Container>
  );
}
