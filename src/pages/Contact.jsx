import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Link,
  IconButton,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

// Import the form component we previously generated
//import ConsultationForm from "../components/ConsultationForm";

function Contact() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        align="center"
        sx={{ fontWeight: 600, mb: 6 }}
      >
        Get In Touch With Us
      </Typography>

      <Grid container spacing={5} justifyContent="center" alignItems="stretch">
        {/* Contact Information Section - Grid Item 1 */}
        <Grid item xs={12} md={5}>
          <Paper
            elevation={3}
            sx={{
              p: { xs: 3, md: 4 },
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 600, mb: 3 }}
            >
              Contact Information
            </Typography>

            {/* Location */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <IconButton color="primary" sx={{ mr: 1 }} aria-label="Location">
                <LocationOnIcon />
              </IconButton>
              <Typography variant="body1">
                123 Digital Way, Lekki, Lagos, Nigeria
              </Typography>
            </Box>

            {/* Phone */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <IconButton color="primary" sx={{ mr: 1 }} aria-label="Phone">
                <PhoneIcon />
              </IconButton>
              <Typography variant="body1">
                <Link
                  href="tel:+2348012345678"
                  color="inherit"
                  underline="hover"
                >
                  +234 (801) 234-5678
                </Link>
              </Typography>
            </Box>

            {/* Email */}
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <IconButton color="primary" sx={{ mr: 1 }} aria-label="Email">
                <EmailIcon />
              </IconButton>
              <Typography variant="body1">
                <Link
                  href="mailto:info@futurelogix.com"
                  color="inherit"
                  underline="hover"
                >
                  info@futurelogix.com
                </Link>
              </Typography>
            </Box>

            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              sx={{ fontWeight: 600, mt: 3, mb: 2 }}
            >
              Follow Us
            </Typography>

            {/* Social Media Icons */}
            <Box>
              <IconButton
                color="primary"
                component={Link}
                href="#"
                target="_blank"
                aria-label="Facebook"
              >
                <FacebookIcon fontSize="large" />
              </IconButton>
              <IconButton
                color="primary"
                component={Link}
                href="#"
                target="_blank"
                aria-label="Twitter"
              >
                <TwitterIcon fontSize="large" />
              </IconButton>
              <IconButton
                color="primary"
                component={Link}
                href="#"
                target="_blank"
                aria-label="LinkedIn"
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
            </Box>
          </Paper>
        </Grid>

        {/* Consultation Form Section - Grid Item 2 */}
        <Grid item xs={12} md={7}>
          <Paper elevation={5} sx={{ p: { xs: 3, sm: 5 }, height: "100%" }}>
            {/* This is where the ConsultationForm component is rendered.
              All form logic is handled inside that component.
            */}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Contact;
