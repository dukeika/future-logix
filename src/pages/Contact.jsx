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

import ConsultationForm from "../components/ConsultationForm"; // Import the form component

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

      <Grid container spacing={5} justifyContent="center">
        {/* Contact Information Section */}
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
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <IconButton color="primary" sx={{ mr: 1 }}>
                <LocationOnIcon />
              </IconButton>
              <Typography variant="body1">
                123 Digital Way, Innovation City, State, Country
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <IconButton color="primary" sx={{ mr: 1 }}>
                <PhoneIcon />
              </IconButton>
              <Typography variant="body1">
                <Link href="tel:+1234567890" color="inherit" underline="hover">
                  +1 (234) 567-890
                </Link>
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
              <IconButton color="primary" sx={{ mr: 1 }}>
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

        {/* Consultation Form Section */}
        <Grid item xs={12} md={7}>
          <ConsultationForm />{" "}
          {/* This is where your form component is rendered */}
        </Grid>
      </Grid>

      {/* Optional: Add a map here if you have a physical location */}
      {/* <Box sx={{ mt: 8, textAlign: 'center' }}>
                <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
                    Find Us on the Map
                </Typography>
                <Paper elevation={3} sx={{ height: 400, width: '100%', overflow: 'hidden', borderRadius: 2 }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.208154148496!2d-122.4194156846817!3d37.77492977975982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580857c0f0f0f%3A0x4c2f4e8d3e6c3d8e!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1678888888888!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Our Location"
                    ></iframe>
                </Paper>
            </Box> */}
    </Container>
  );
}

export default Contact;
