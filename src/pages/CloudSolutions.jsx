import React from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Paper,
} from "@mui/material";

import CloudIcon from "@mui/icons-material/Cloud";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import SavingsIcon from "@mui/icons-material/AttachMoney";
import SecurityIcon from "@mui/icons-material/Security";

export default function CloudSolutions() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <CloudIcon color="primary" fontSize="large" />
        <Typography variant="h4" gutterBottom>
          Cloud Migration & Management
        </Typography>
        <Typography variant="subtitle1">
          Transform your IT infrastructure with our comprehensive cloud
          migration services.
        </Typography>
      </Box>

      {/* What We Offer */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          What We Offer
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Infrastructure Assessment" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Migration Strategy" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Data Migration" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Performance Optimization" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="24/7 Monitoring" />
          </ListItem>
        </List>
      </Paper>

      {/* Client Benefits */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Client Benefits
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Save up to 40% on IT costs" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Instant scalability" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="99.99% uptime guarantee" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Enterprise-grade security" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon color="success" />
            </ListItemIcon>
            <ListItemText primary="Flexible, usage-based pricing" />
          </ListItem>
        </List>
      </Paper>

      {/* Cost Savings */}
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Cost Savings Analysis
        </Typography>
        <Typography paragraph>
          - Traditional On-Premise: ₦2,400,000/year
          <br />
          - Our Cloud Solution: ₦1,440,000/year
          <br />
          <strong>Total Annual Savings: ₦960,000</strong>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          These savings increase over time as your business scales.
        </Typography>
      </Paper>

      {/* CTA */}
      <Box sx={{ textAlign: "center" }}>
        <Button variant="contained" color="primary" href="/pricing#cloud">
          View Full Cloud Pricing
        </Button>
      </Box>
    </Container>
  );
}
