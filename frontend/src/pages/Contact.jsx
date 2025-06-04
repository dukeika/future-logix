import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  TextField,
  useTheme,
  Paper,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";

// Icons for contact details
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SendIcon from "@mui/icons-material/Send";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X"; // Represents Twitter

export default function ContactUs() {
  const theme = useTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to handle form submission (e.g., send data to an API)
    console.log("Contact form submitted!");
    alert("Thank you for your message! We'll get back to you shortly.");
    // Optionally, clear the form fields
    event.target.reset();
  };

  return (
    <Box sx={{ bgcolor: theme.palette.background.default }}>
      {/* 1. Contact Us Hero Section */}
      <Box
        sx={{
          py: { xs: 10, md: 15 },
          bgcolor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.primary.main} 90%)`,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "url(/images/contact-hero-pattern.png) repeat",
            opacity: 0.1,
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Get In Touch
          </Typography>
          <Typography variant="h5" paragraph sx={{ opacity: 0.9 }}>
            We're here to answer your questions and help you transform your
            business.
          </Typography>
        </Container>
      </Box>

      {/* 2. Contact Information Grid (Single Row Concept) */}
      <Box
        sx={{ py: { xs: 6, md: 8 }, bgcolor: theme.palette.background.paper }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 600,
              color: theme.palette.primary.main,
              mb: { xs: 4, md: 6 },
            }}
          >
            How to Reach Us
          </Typography>
          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            {/* Phone */}
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                elevation={2}
                sx={{
                  p: { xs: 2, md: 3 },
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <PhoneIcon color="primary" sx={{ fontSize: 40, mb: 1.5 }} />
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  Call Us
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  +234 (0) 800 123 4567 <br /> +234 (0) 900 765 4321
                </Typography>
              </Paper>
            </Grid>
            {/* Email */}
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                elevation={2}
                sx={{
                  p: { xs: 2, md: 3 },
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <EmailIcon color="primary" sx={{ fontSize: 40, mb: 1.5 }} />
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  Email Us
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  info@futurelogix.com <br /> support@futurelogix.com
                </Typography>
              </Paper>
            </Grid>
            {/* Location */}
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                elevation={2}
                sx={{
                  p: { xs: 2, md: 3 },
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <LocationOnIcon
                  color="primary"
                  sx={{ fontSize: 40, mb: 1.5 }}
                />
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  Our Office
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Plot 123, Admiralty Way, Lekki Phase 1, <br /> Lagos, Nigeria
                </Typography>
              </Paper>
            </Grid>
            {/* Business Hours */}
            <Grid item xs={12} sm={6} md={3}>
              <Paper
                elevation={2}
                sx={{
                  p: { xs: 2, md: 3 },
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <AccessTimeIcon
                  color="primary"
                  sx={{ fontSize: 40, mb: 1.5 }}
                />
                <Typography variant="h6" sx={{ fontWeight: 500 }}>
                  Business Hours
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Monday - Friday: 9:00 AM - 5:00 PM <br /> (WAT)
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 3. Centralized and Wider Contact Form Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.grey[100] }}>
        <Container maxWidth="sm">
          <Paper
            elevation={4}
            sx={{ p: { xs: 4, md: 6 }, borderRadius: 3, mx: "auto" }}
          >
            <Typography
              variant="h4"
              component="h2"
              align="center"
              gutterBottom
              sx={{ fontWeight: 600, color: theme.palette.primary.main, mb: 4 }}
            >
              Send Us a Message
            </Typography>
            <Typography
              variant="body1"
              paragraph
              color="text.secondary"
              align="center"
              sx={{ mb: 4 }}
            >
              Have a question or need assistance? Fill out the form below, and
              we'll get back to you promptly.
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              sx={{ display: "flex", flexDirection: "column", gap: 3 }}
            >
              <TextField
                required
                fullWidth
                label="Your Full Name"
                variant="outlined"
                name="fullName"
              />
              <TextField
                required
                fullWidth
                label="Your Email Address"
                type="email"
                variant="outlined"
                name="email"
              />
              <TextField
                fullWidth
                label="Phone Number (Optional)"
                variant="outlined"
                name="phone"
              />
              <TextField
                required
                fullWidth
                label="Subject"
                variant="outlined"
                name="subject"
              />
              <TextField
                required
                fullWidth
                label="Your Message"
                multiline
                rows={6}
                variant="outlined"
                name="message"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                endIcon={<SendIcon />}
                sx={{ mt: 2, py: 1.5, fontWeight: 600, borderRadius: 2 }}
              >
                Submit Message
              </Button>
            </Box>
          </Paper>
        </Container>
      </Box>

      {/* 4. Connect on Social Media (Retained its position) */}
      <Box
        sx={{
          py: { xs: 6, md: 8 },
          bgcolor: theme.palette.background.paper,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontWeight: 600, color: theme.palette.primary.main, mb: 3 }}
          >
            Stay Connected
          </Typography>
          <Typography
            variant="body1"
            paragraph
            color="text.secondary"
            sx={{ mb: 4 }}
          >
            Follow us on our social channels for the latest updates, industry
            insights, and company news.
          </Typography>
          <Box sx={{ display: "flex", gap: 3, justifyContent: "center" }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<LinkedInIcon />}
              component="a"
              href="https://linkedin.com/company/futurelogix"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textTransform: "none", px: 3, py: 1 }}
            >
              LinkedIn
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<XIcon />}
              component="a"
              href="https://x.com/futurelogix"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ textTransform: "none", px: 3, py: 1 }}
            >
              X (Twitter)
            </Button>
            {/* Add more social media buttons here if needed */}
          </Box>
        </Container>
      </Box>

      {/* 5. Final Call to Action / Invitation */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: theme.palette.primary.dark,
          color: theme.palette.primary.contrastText,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Ready to Transform Your Business?
          </Typography>
          <Typography
            variant="h6"
            paragraph
            sx={{ mb: { xs: 4, md: 6 }, opacity: 0.9 }}
          >
            Schedule a free consultation with our experts to discuss your unique
            challenges and opportunities.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            to="/services"
            sx={{
              px: 5,
              py: 1.8,
              borderRadius: 3,
              fontWeight: 700,
              fontSize: "1.1rem",
            }}
          >
            Explore Our Services
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

// import React from "react";
// import { Container, Typography, TextField, Button, Box } from "@mui/material";

// export default function Contact() {
//   return (
//     <Container maxWidth="md" sx={{ py: 5 }}>
//       <Typography variant="h4" gutterBottom>
//         Contact Us
//       </Typography>
//       <Typography paragraph>
//         Ready to transform your business? Reach out to our team for a free
//         consultation.
//       </Typography>

//       <form>
//         <TextField label="Name" fullWidth margin="normal" required />
//         <TextField label="Email" fullWidth margin="normal" required />
//         <TextField label="Phone Number" fullWidth margin="normal" />
//         <TextField
//           label="Message"
//           multiline
//           rows={4}
//           fullWidth
//           margin="normal"
//           required
//         />
//         <Button type="submit" variant="contained" color="primary">
//           Send Message
//         </Button>
//       </form>

//       <Box sx={{ mt: 4 }}>
//         <Typography variant="h6">Office Address:</Typography>
//         <Typography>Lagos, Nigeria</Typography>
//         <Typography>Email: info@futurelogix.tech</Typography>
//       </Box>
//     </Container>
//   );
// }
