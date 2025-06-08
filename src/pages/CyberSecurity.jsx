import React from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

export default function CyberSecurity() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Cybersecurity & Compliance
      </Typography>

      <Typography paragraph>
        Protect your digital assets with comprehensive security assessments,
        penetration testing, and compliance frameworks.
      </Typography>

      <Typography variant="h6" gutterBottom>
        What We Offer
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="Vulnerability Assessments" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Penetration Testing" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Compliance Planning" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Firewall Configuration" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Intrusion Detection" />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom>
        Compliance Services
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="GDPR" />
        </ListItem>
        <ListItem>
          <ListItemText primary="ISO 27001" />
        </ListItem>
        <ListItem>
          <ListItemText primary="PCI DSS" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Industry-Specific Regulations" />
        </ListItem>
      </List>
    </Container>
  );
}
