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

export default function BusinessAutomation() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Business Process Automation
      </Typography>
      <Typography paragraph>
        Streamline your operations with Zoho One integration and custom
        automation workflows designed for African businesses.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Applications Implemented
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Zoho CRM – Customer relationship management" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Zoho Projects – Project management and collaboration" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Zoho Books – Financial management and accounting" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Zoho Desk – Customer support and helpdesk" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Zoho Analytics – Business intelligence and reporting" />
        </ListItem>
      </List>

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
        <ListItem>
          <ListItemText primary="Inventory management" />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom>
        Benefits
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="45% productivity increase" />
        </ListItem>
        <ListItem>
          <ListItemText primary="60% cost reduction" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Single source of truth" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Mobile accessibility" />
        </ListItem>
      </List>

      <Box sx={{ mt: 3 }}>
        <Button variant="contained" color="primary" href="/contact">
          Start Your Automation Journey
        </Button>
      </Box>
    </Container>
  );
}
