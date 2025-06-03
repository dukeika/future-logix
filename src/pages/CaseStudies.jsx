import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
} from "@mui/material";

export default function CaseStudies() {
  const cases = [
    {
      title: "University Library Transformation",
      summary: "Migrated 50,000+ records with 70% time savings.",
      link: "#",
    },
    {
      title: "E-commerce Platform Migration",
      summary: "Achieved 99.99% uptime during Black Friday sales.",
      link: "#",
    },
    {
      title: "Banking Sector Security Upgrade",
      summary: "Zero breaches post-AWS secure migration.",
      link: "#",
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Case Studies
      </Typography>

      {cases.map((cs, i) => (
        <Card key={i} sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6">{cs.title}</Typography>
            <Typography variant="body2" paragraph>
              {cs.summary}
            </Typography>
            <Button size="small" color="primary" href={cs.link}>
              Read Full Study
            </Button>
          </CardContent>
        </Card>
      ))}

      <Button variant="outlined" color="primary" href="/contact">
        See How We Can Help You Too
      </Button>
    </Container>
  );
}
