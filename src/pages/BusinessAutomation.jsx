import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function BusinessAutomation() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Business Process Automation
      </Typography>

      <Typography paragraph>
        Streamline operations with Zoho One integration and custom automation
        workflows.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Applications Implemented
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Zoho CRM" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Zoho Books" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Zoho Desk" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Zoho Analytics" />
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
    </Container>
  );
}
