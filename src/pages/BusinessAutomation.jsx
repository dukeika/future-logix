import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";

import SettingsIcon from "@mui/icons-material/Settings";

export default function BusinessAutomation() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <SettingsIcon color="primary" fontSize="large" />
        <Typography variant="h4" gutterBottom>
          Business Process Automation
        </Typography>
        <Typography variant="subtitle1">
          Streamline operations with Zoho One integration and custom workflows.
        </Typography>
      </Box>

      {/* Applications Implemented */}
      <Card elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Zoho Integration Services
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Zoho CRM – Customer relationship management" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Zoho Projects – Project management and collaboration" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Zoho Desk – Customer support and helpdesk" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Zoho Analytics – Business intelligence and reporting" />
          </ListItem>
        </List>
      </Card>

      {/* Automation Workflows */}
      <Card elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Automation Workflows
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Lead to customer conversion" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Project lifecycle management" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Support ticket routing" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Invoice generation and tracking" />
          </ListItem>
        </List>
      </Card>

      {/* Benefits */}
      <Card elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Benefits
        </Typography>
        <ul>
          <li>45% productivity increase</li>
          <li>60% cost reduction</li>
          <li>Single source of truth</li>
          <li>Mobile accessibility</li>
        </ul>
      </Card>

      {/* CTA */}
      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          color="primary"
          href="/services/business-automation/pricing"
        >
          View Pricing Options
        </Button>
      </Box>
    </Container>
  );
}
