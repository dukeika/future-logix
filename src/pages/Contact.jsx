import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper, // Paper is still used for the contact details card
  Grid,
  Link,
  useTheme,
  Avatar,
  IconButton,
  Stack,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Contact() {
  const theme = useTheme();

  return (
    <Box sx={{ bgcolor: theme.palette.grey[100] }}>
      {/* Hero-like Header Section */}
      <Box sx={{ bgcolor: "primary.main", color: "white", py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography variant="h2" component="h1" sx={{ fontWeight: 700 }}>
            Get in Touch
          </Typography>
          <Typography variant="h6" sx={{ mt: 2, opacity: 0.9 }}>
            We're here to help and answer any question you might have. We look
            forward to hearing from you.
          </Typography>
        </Container>
      </Box>

      {/* Contact Details Card (Horizontal Layout) */}
      <Container sx={{ py: 6 }}>
        <Paper elevation={4} sx={{ borderRadius: 4, p: { xs: 3, md: 5 } }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, mb: 4, textAlign: "center" }}
          >
            Our Contact Information
          </Typography>
          <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="flex-start"
          >
            {/* Phone */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <Avatar
                  sx={{ bgcolor: "primary.dark", mb: 1, width: 56, height: 56 }}
                >
                  <PhoneIcon sx={{ fontSize: 30 }} />
                </Avatar>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  Phone
                </Typography>
                <Typography>
                  <Link
                    href="tel:+2348012345678"
                    color="inherit"
                    underline="hover"
                    sx={{ opacity: 0.8 }}
                  >
                    +234 (801) 234-5678
                  </Link>
                </Typography>
              </Box>
            </Grid>

            {/* Email */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <Avatar
                  sx={{ bgcolor: "primary.dark", mb: 1, width: 56, height: 56 }}
                >
                  <EmailIcon sx={{ fontSize: 30 }} />
                </Avatar>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  Email
                </Typography>
                <Typography>
                  <Link
                    href="mailto:info@futurelogix.com"
                    color="inherit"
                    underline="hover"
                    sx={{ opacity: 0.8 }}
                  >
                    info@futurelogix.com
                  </Link>
                </Typography>
              </Box>
            </Grid>

            {/* Location */}
            <Grid item xs={12} sm={6} md={4}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <Avatar
                  sx={{ bgcolor: "primary.dark", mb: 1, width: 56, height: 56 }}
                >
                  <LocationOnIcon sx={{ fontSize: 30 }} />
                </Avatar>
                <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  Address
                </Typography>
                <Typography sx={{ opacity: 0.8 }}>
                  123 Digital Way, Lekki, Lagos, Nigeria
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Social Media Icons */}
          <Box sx={{ mt: 5, textAlign: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Follow Us
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center">
              <IconButton
                href="#"
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "primary.main" },
                }}
              >
                <FacebookIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="#"
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "primary.main" },
                }}
              >
                <TwitterIcon fontSize="large" />
              </IconButton>
              <IconButton
                href="#"
                sx={{
                  color: "text.secondary",
                  "&:hover": { color: "primary.main" },
                }}
              >
                <LinkedInIcon fontSize="large" />
              </IconButton>
            </Stack>
          </Box>
        </Paper>
      </Container>

      {/* Zoho Contact Form Section (Standing on its own) */}
      <Container sx={{ py: 6 }}>
        {/* Removed Paper component from here */}
        <Box sx={{ p: { xs: 3, md: 5 } }}>
          {" "}
          {/* Added padding directly to this Box */}
          <Typography
            variant="h5"
            sx={{ fontWeight: 600, mb: 3, textAlign: "center" }}
          >
            Send Us a Message
          </Typography>
          <Typography
            variant="body1"
            align="center"
            paragraph
            sx={{ mb: 4, color: theme.palette.text.secondary }}
          >
            Have a question or need assistance? Fill out the form below and
            we'll get back to you promptly.
          </Typography>
          <Box
            sx={{
              width: "100%",
              minHeight: "550px",
              display: "flex",
              justifyContent: "center",
              bgcolor: theme.palette.background.paper, // Added white background here
              borderRadius: 4, // Added border radius
              overflow: "hidden", // To ensure content respects border radius
            }}
          >
            <iframe
              aria-label="Contact Us"
              frameBorder="0"
              style={{
                height: "100%",
                width: "100%",
                border: "none",
                minHeight: "900px",
              }}
              src="https://forms.zohopublic.com/futurelogixlimited1/form/ContactUs/formperma/ZQ_j41Nb--BJM2NyfGWPmJOunK9U77k5gO9dH1PeDWs"
            ></iframe>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
