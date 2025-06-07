import React from "react";
import { Container, Typography, Box } from "@mui/material";

export default function Community() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Community Engagement & Outreach
      </Typography>

      <Box sx={{ my: 4 }}>
        <Typography variant="h6">Digital Literacy Programs</Typography>
        <Typography paragraph>
          We offer digital literacy programs to improve digital skills in our
          community, focusing on library resource usage and online safety.
        </Typography>
      </Box>

      <Box sx={{ my: 4 }}>
        <Typography variant="h6">Public Access Terminals</Typography>
        <Typography paragraph>
          We set up and manage public access terminals in libraries to provide
          internet access and digital resources to the community.
        </Typography>
      </Box>
    </Container>
  );
}
