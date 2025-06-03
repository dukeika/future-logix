import React from "react";
import { Container, Typography, Box } from "@mui/material";

export default function About() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>

      <Typography paragraph>
        Future Logix Limited stands as Africa's premier technology
        transformation partner, dedicated to bridging the digital divide and
        empowering businesses across the continent.
      </Typography>

      <Typography paragraph>
        Founded with a vision to democratize access to world-class technology
        solutions, we've grown from a passionate startup to a trusted partner
        for organizations ranging from small enterprises to large corporations.
      </Typography>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Our Mission
        </Typography>
        <Typography>
          Empowering African businesses with world-class technology solutions
          that drive growth, efficiency, and competitive advantage in the global
          marketplace.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Our Vision
        </Typography>
        <Typography>
          To be Africa's most trusted technology transformation partner, leading
          the continent's digital revolution through innovation, excellence, and
          unwavering commitment to client success.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Core Values
        </Typography>
        <ul>
          <li>
            <strong>Innovation:</strong> Constantly pushing boundaries to
            deliver cutting-edge solutions
          </li>
          <li>
            <strong>Excellence:</strong> Uncompromising commitment to quality in
            every project
          </li>
          <li>
            <strong>Integrity:</strong> Building trust through transparency and
            ethical practices
          </li>
          <li>
            <strong>Partnership:</strong> Creating long-term relationships that
            drive mutual success
          </li>
          <li>
            <strong>Impact:</strong> Making a meaningful difference in our
            clients' business outcomes
          </li>
        </ul>
      </Box>
    </Container>
  );
}
