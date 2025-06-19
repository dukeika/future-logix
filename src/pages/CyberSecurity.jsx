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

import SecurityIcon from "@mui/icons-material/Security";
import ShieldIcon from "@mui/icons-material/Shield";

export default function CyberSecurity() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <SecurityIcon color="primary" fontSize="large" />
        <Typography variant="h4" gutterBottom>
          Cybersecurity & Compliance
        </Typography>
        <Typography variant="subtitle1">
          Protect your valuable assets with comprehensive security strategies
          and compliance frameworks.
        </Typography>
      </Box>

      {/* Security Audit */}
      <Card elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Security Audit
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <ShieldIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Vulnerability Assessments" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ShieldIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Penetration Testing" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <ShieldIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary="Compliance Gap Analysis" />
          </ListItem>
        </List>
      </Card>

      {/* Compliance Frameworks */}
      <Card elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Compliance Frameworks
        </Typography>
        <ul>
          <li>GDPR</li>
          <li>ISO 27001</li>
          <li>PCI DSS</li>
          <li>CBN Data Security Framework</li>
        </ul>
      </Card>

      {/* Real-World Impact */}
      <Card elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h6" gutterBottom>
          Real-World Impact
        </Typography>
        <Typography paragraph>
          One bank reduced breach risk by 90% and passed its regulatory audit
          after implementing our compliance framework.
        </Typography>
      </Card>

      {/* CTA */}
      <Box sx={{ textAlign: "center" }}>
        <Button variant="contained" color="primary" href="/contact">
          Schedule a Free Security Audit
        </Button>
      </Box>
    </Container>
  );
}
