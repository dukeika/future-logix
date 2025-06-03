import React from "react";
import { Container, Typography, Box } from "@mui/material";

export default function ServiceDetail({ title, description, useCases }) {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>
      <Typography paragraph>{description}</Typography>
      <Typography variant="h6">Use Cases</Typography>
      <ul>
        {useCases.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </Container>
  );
}
ServiceDetail.defaultProps = {
  title: "Digital Repository Solutions",
  description:
    "Securely store and manage your digital assets with our content delivery solutions. Our repository services are designed to handle a wide range of digital content, ensuring easy access and management.",
  useCases: [
    "Digital asset management for libraries and archives",
    "Content delivery for educational institutions",
    "Secure storage solutions for research data",
  ],
};
