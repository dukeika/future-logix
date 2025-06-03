import React from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

export default function Contact() {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Contact Us
      </Typography>
      <Typography paragraph>
        Ready to transform your business? Reach out to our team for a free
        consultation.
      </Typography>

      <form>
        <TextField label="Name" fullWidth margin="normal" required />
        <TextField label="Email" fullWidth margin="normal" required />
        <TextField label="Phone Number" fullWidth margin="normal" />
        <TextField
          label="Message"
          multiline
          rows={4}
          fullWidth
          margin="normal"
          required
        />
        <Button type="submit" variant="contained" color="primary">
          Send Message
        </Button>
      </form>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6">Office Address:</Typography>
        <Typography>Lagos, Nigeria</Typography>
        <Typography>Email: info@futurelogix.tech</Typography>
      </Box>
    </Container>
  );
}
