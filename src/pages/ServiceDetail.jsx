// src/pages/ServiceDetail.jsx
import React from "react";
import { Container, Typography, Box } from "@mui/material";

export default function ServiceDetail({ title, description, useCases }) {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        {title}
      </Typography>

      <Typography paragraph>{description}</Typography>

      <Typography variant="h6" gutterBottom>
        Use Cases
      </Typography>

      <ul>
        {useCases.map((item, index) => (
          <li key={index}>
            <Typography>{item}</Typography>
          </li>
        ))}
      </ul>

      <Box sx={{ mt: 3 }}>
        <Typography>
          Ready to get started with this service?{" "}
          <a
            href="/contact"
            style={{ color: "#0057A3", textDecoration: "underline" }}
          >
            Contact us today
          </a>
          .
        </Typography>
      </Box>
    </Container>
  );
}
