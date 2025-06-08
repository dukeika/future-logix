import React from "react";
import { Container, Typography } from "@mui/material";

export default function DigitalTransformationTrends() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Digital Transformation Trends in Africa 2025
      </Typography>
      <Typography variant="body2" color="textSecondary">
        Published: March 15, 2025
      </Typography>

      <Typography paragraph sx={{ mt: 2 }}>
        Africa is embracing digital transformation faster than ever. Here's
        what's driving change in 2025:
      </Typography>

      <Typography variant="h6" gutterBottom>
        1. AI and Automation
      </Typography>
      <Typography paragraph>
        From chatbots to workflow automation, AI is making processes smarter and
        more efficient.
      </Typography>

      <Typography variant="h6" gutterBottom>
        2. Cloud Adoption
      </Typography>
      <Typography paragraph>
        More organizations are moving away from legacy systems to cloud-based
        infrastructures.
      </Typography>

      <Typography variant="h6" gutterBottom>
        3. Mobile-First Development
      </Typography>
      <Typography paragraph>
        With high mobile usage, apps are being built for mobile-first
        experiences.
      </Typography>

      <Typography variant="h6" gutterBottom>
        4. Cybersecurity Investments
      </Typography>
      <Typography paragraph>
        Governments and enterprises are prioritizing secure digital
        environments.
      </Typography>
    </Container>
  );
}
