import React from "react";
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  Button,
} from "@mui/material";

export default function CloudSolutions() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Cloud Migration & Management
      </Typography>
      <Typography paragraph>
        Transform your IT infrastructure with our comprehensive cloud migration
        services. We specialize in AWS, Azure, and Google Cloud solutions
        tailored to your business needs.
      </Typography>

      <Typography variant="h6" gutterBottom>
        What We Offer
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Infrastructure Assessment" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Migration Strategy" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Data Migration" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Performance Optimization" />
        </ListItem>
        <ListItem>
          <ListItemText primary="24/7 Monitoring" />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom>
        Client Benefits
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Save up to 40% on IT costs" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Instant scalability" />
        </ListItem>
        <ListItem>
          <ListItemText primary="99.99% uptime guarantee" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Enterprise-grade security" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Flexible, usage-based pricing" />
        </ListItem>
      </List>

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

      <Box sx={{ mt: 3 }}>
        <Button variant="contained" color="primary" href="/pricing">
          View Cloud Pricing Options
        </Button>
      </Box>
    </Container>
  );
}
