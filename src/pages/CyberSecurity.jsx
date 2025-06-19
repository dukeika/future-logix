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

export default function CyberSecurity() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Cybersecurity & Compliance
      </Typography>
      <Typography paragraph>
        Protect your valuable assets with comprehensive security strategies and
        compliance frameworks including ISO27001, GDPR, and PCI-DSS.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Our Approach
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
          <ListItemText primary="Ongoing Monitoring" />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom>
        Compliance Frameworks
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
          <ListItemText primary="CBN Data Security Framework" />
        </ListItem>
      </List>

      <Typography variant="h6" gutterBottom>
        Real-World Use Case
      </Typography>
      <Typography paragraph>
        One bank reduced breach risk by 90% and passed its regulatory audit
        after implementing our compliance framework.
      </Typography>

      <Box sx={{ mt: 3 }}>
        <Button variant="contained" color="primary" href="/contact">
          Get a Free Security Audit
        </Button>
      </Box>
    </Container>
  );
}
