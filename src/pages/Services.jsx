import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Services() {
  const serviceCards = [
    {
      title: "Cloud Migration & Management",
      desc: "Transform your IT infrastructure with our comprehensive cloud migration services.",
      link: "/services/cloud",
    },
    {
      title: "Serverless Web Development",
      desc: "Build scalable, cost-effective applications that grow with your business.",
      link: "/services/serverless",
    },
    {
      title: "Koha Library Systems",
      desc: "Complete library automation solution using open-source Koha software.",
      link: "/services/library",
    },
    {
      title: "Cybersecurity & Compliance",
      desc: "Protect your digital assets with enterprise-grade security solutions.",
      link: "/services/cybersecurity",
    },
    {
      title: "Business Process Automation",
      desc: "Streamline operations with Zoho One and custom integrations.",
      link: "/services/automation",
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Our Services
      </Typography>

      {serviceCards.map((service, index) => (
        <Card key={index} sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6">{service.title}</Typography>
            <Typography variant="body2" paragraph>
              {service.desc}
            </Typography>
            <Button
              size="small"
              color="primary"
              component={Link}
              to={service.link}
            >
              Learn More
            </Button>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
}
