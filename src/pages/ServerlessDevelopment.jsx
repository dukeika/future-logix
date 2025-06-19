import React from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  Button,
} from "@mui/material";

import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SpeedIcon from "@mui/icons-material/Speed";
import MoneyOffIcon from "@mui/icons-material/MoneyOff";
import LockIcon from "@mui/icons-material/Lock";

export default function ServerlessDevelopment() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <LightbulbIcon color="primary" fontSize="large" />
        <Typography variant="h4" gutterBottom>
          Serverless Web Application Development
        </Typography>
        <Typography variant="subtitle1">
          Build scalable, cost-effective applications that grow with your
          business.
        </Typography>
      </Box>

      {/* Tech Stack */}
      <Card elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Our Serverless Stack
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Frontend: React.js, Vue.js, Next.js" />
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
      </Card>

      {/* Features */}
      <Card elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Why Go Serverless?
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <SpeedIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Auto-scaling for traffic spikes" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MoneyOffIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Pay-per-use model" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LockIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Built-in redundancy & security" />
          </ListItem>
        </List>
      </Card>

      {/* CTA */}
      <Box sx={{ textAlign: "center" }}>
        <Button variant="contained" color="primary" href="/contact">
          Get a Free App Estimate
        </Button>
      </Box>
    </Container>
  );
}
