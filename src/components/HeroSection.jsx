import React from "react";
import { Box, Container, Typography, Button, useTheme } from "@mui/material";

// You might have other imports or components here

export default function HeroSection({ onConsultationClick }) {
  // <--- Accept the prop here
  const theme = useTheme();

  return (
    <Box
      sx={{
        bgcolor: "primary.dark", // Or whatever your hero background color is
        color: "white",
        py: { xs: 10, md: 15 }, // Example padding
        textAlign: "center",
        position: "relative",
        overflow: "hidden", // In case of background images/patterns
      }}
    >
      <Container maxWidth="lg">
        {/* Hero content */}
        <Typography
          variant="h1"
          component="h1"
          sx={{
            fontWeight: 700,
            mb: 3,
            fontSize: { xs: "2.5rem", sm: "3.5rem", md: "4.5rem" },
            lineHeight: 1.1,
          }}
        >
          Unlock Your Digital Potential
        </Typography>
        <Typography
          variant="h5"
          component="p"
          sx={{
            mb: { xs: 4, md: 6 },
            opacity: 0.9,
            maxWidth: 800,
            mx: "auto",
            fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
          }}
        >
          Empowering businesses with cutting-edge IT solutions, cybersecurity,
          cloud services, and digital transformation strategies.
        </Typography>

        {/* Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: { xs: 2, md: 3 },
            flexDirection: { xs: "column", sm: "row" },
            mt: 4,
          }}
        >
          <Button
            variant="contained"
            color="secondary" // Assuming secondary is a good accent color for the button
            size="large"
            // Important: Use the passed onClick handler and remove href
            onClick={onConsultationClick} // <--- This is the key change
            // href="/contact"  <--- REMOVE THIS LINE IF IT EXISTS
            sx={{
              px: 5,
              py: 1.8,
              borderRadius: 3,
              fontWeight: 700,
              fontSize: "1.1rem",
              // Add any other button styles
            }}
          >
            Get a Free Consultation
          </Button>
          <Button
            variant="outlined"
            color="inherit" // Use inherit to get white color from parent Box
            size="large"
            href="/services" // Example: This button still navigates
            sx={{
              px: 5,
              py: 1.8,
              borderRadius: 3,
              fontWeight: 700,
              fontSize: "1.1rem",
              borderColor: "common.white", // Ensure white border
              "&:hover": {
                bgcolor: "rgba(255,255,255,0.1)", // Light hover effect
                borderColor: "common.white",
              },
            }}
          >
            Explore Services
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
