import React from "react";
import { Container, Typography } from "@mui/material";

export default function CybersecurityNigeria() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Cybersecurity Compliance in the Nigerian Financial Sector
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Published: March 20, 2025
      </Typography>

      <Typography paragraph sx={{ mt: 2 }}>
        As cyber threats increase, Nigerian financial institutions must adopt
        robust security frameworks.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Key Regulations
      </Typography>
      <ul>
        <li>CBN Data Security Framework</li>
        <li>NITDA Guidelines</li>
        <li>ISO 27001 Standards</li>
        <li>PCI DSS for Payment Systems</li>
      </ul>

      <Typography variant="h6" gutterBottom>
        Our Approach
      </Typography>
      <Typography paragraph>
        We provide full compliance services including gap analysis,
        implementation, audits, and ongoing monitoring.
      </Typography>

      <Typography variant="h6" gutterBottom>
        Client Success Story
      </Typography>
      <Typography paragraph>
        One bank reduced breach risk by 90% and passed its regulatory audit
        after implementing our compliance framework.
      </Typography>
    </Container>
  );
}
