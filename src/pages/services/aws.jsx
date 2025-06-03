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
