import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Card,
  Grid,
  Paper,
  Divider, // Added for visual separation
} from "@mui/material";
// Assuming HeroSection, AboutSection, CoreServicesOverview are well-designed components
// and can be enhanced for a more corporate feel.
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import CoreServicesOverview from "../components/CoreServicesOverview"; // This might be integrated differently
import { CardContent, CardActionArea } from "@mui/material";

// Icons for services, potentially customized or more subtle
import CloudQueueIcon from "@mui/icons-material/CloudQueue"; // More modern cloud icon
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks"; // More corporate book icon
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode"; // More modern code icon
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser"; // More corporate shield icon

export default function Home() {
  return (
    <Container maxWidth="xl" sx={{ py: 0, bgcolor: "background.default" }}>
      {/* Hero Section - Keep this impactful and visually stunning.
        It should immediately convey the company's core value proposition.
        Consider a more abstract, high-tech background image/video.
      */}
      <HeroSection />

      {/* --- Driving Africa's Digital Future (About Snapshot) --- */}
      <Box
        sx={{
          py: 8,
          textAlign: "center",
          bgcolor: "primary.light",
          color: "primary.contrastText",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Driving Africa's Digital Future
          </Typography>
          <Typography variant="h6" paragraph sx={{ opacity: 0.9 }}>
            FutureLogix is dedicated to empowering African businesses with
            **world-class technology solutions** that simplify operations,
            enhance information access, and foster sustainable growth. We are
            your trusted partner in navigating the complex digital landscape.
          </Typography>
          <Button
            variant="outlined"
            color="inherit" // Inherits color from parent box
            href="/about"
            sx={{
              mt: 3,
              borderColor: "common.white",
              "&:hover": {
                borderColor: "common.white",
                bgcolor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            Learn More About Us
          </Button>
        </Container>
      </Box>

      {/* --- Our Core Expertise (Services Overview) --- */}
      <Box sx={{ py: 8, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 600 }}
          >
            Our Core Expertise: Driving Business Forward
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {/* Service 1: Cloud Solutions & AWS Services */}
            <Grid item xs={12} sm={6} md={3}>
              <Card
                elevation={3}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                }}
              >
                <CardActionArea
                  component="a"
                  href="/services/cloud-solutions"
                  sx={{ flexGrow: 1 }}
                >
                  <CardContent sx={{ p: 4, textAlign: "center" }}>
                    <Box sx={{ mb: 2, color: "primary.main" }}>
                      <CloudQueueIcon sx={{ fontSize: 60 }} />
                    </Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: 500 }}
                    >
                      Cloud & AWS Services
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Unlock the agility and scalability of cloud computing with
                      our expert migration, management, and optimization.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            {/* Service 2: Library Management Systems */}
            <Grid item xs={12} sm={6} md={3}>
              <Card
                elevation={3}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                }}
              >
                <CardActionArea
                  component="a"
                  href="/services/library-management-systems"
                  sx={{ flexGrow: 1 }}
                >
                  <CardContent sx={{ p: 4, textAlign: "center" }}>
                    <Box sx={{ mb: 2, color: "primary.main" }}>
                      <LibraryBooksIcon sx={{ fontSize: 60 }} />
                    </Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: 500 }}
                    >
                      Library Solutions
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Modernize library operations with tailored Koha, DSpace,
                      and custom digital repository solutions.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            {/* Service 3: Development Services */}
            <Grid item xs={12} sm={6} md={3}>
              <Card
                elevation={3}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                }}
              >
                <CardActionArea
                  component="a"
                  href="/services/development-services"
                  sx={{ flexGrow: 1 }}
                >
                  <CardContent sx={{ p: 4, textAlign: "center" }}>
                    <Box sx={{ mb: 2, color: "primary.main" }}>
                      <DeveloperModeIcon sx={{ fontSize: 60 }} />
                    </Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: 500 }}
                    >
                      Custom Development
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Build robust, scalable, and intuitive digital products
                      with our full-stack development expertise.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>

            {/* Service 4: Security & Compliance */}
            <Grid item xs={12} sm={6} md={3}>
              <Card
                elevation={3}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
                }}
              >
                <CardActionArea
                  component="a"
                  href="/services/security-compliance"
                  sx={{ flexGrow: 1 }}
                >
                  <CardContent sx={{ p: 4, textAlign: "center" }}>
                    <Box sx={{ mb: 2, color: "primary.main" }}>
                      <VerifiedUserIcon sx={{ fontSize: 60 }} />
                    </Box>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{ fontWeight: 500 }}
                    >
                      Security & Compliance
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Protect your valuable assets with comprehensive security
                      strategies and compliance adherence.
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* --- Why Choose FutureLogix (Key Differentiators/Stats) --- */}
      <Box sx={{ py: 8, bgcolor: "background.default" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 600 }}
          >
            Why Partner with FutureLogix?
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Paper
                elevation={0}
                sx={{ p: 4, textAlign: "center", bgcolor: "transparent" }}
              >
                <Typography
                  variant="h3"
                  color="primary.main"
                  sx={{ fontWeight: 700, mb: 1 }}
                >
                  AWS Advanced Partner
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Recognized expertise and trusted by leading organizations
                  across Africa.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper
                elevation={0}
                sx={{ p: 4, textAlign: "center", bgcolor: "transparent" }}
              >
                <Typography
                  variant="h3"
                  color="primary.main"
                  sx={{ fontWeight: 700, mb: 1 }}
                >
                  98%
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Client Satisfaction Rate, reflecting our results-driven
                  approach.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Paper
                elevation={0}
                sx={{ p: 4, textAlign: "center", bgcolor: "transparent" }}
              >
                <Typography
                  variant="h3"
                  color="primary.main"
                  sx={{ fontWeight: 700, mb: 1 }}
                >
                  500+
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  Successful Projects Delivered with a proven track record of
                  excellence.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Box sx={{ mt: 6, textAlign: "center" }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              href="/case-studies"
              sx={{ px: 4, py: 1.5, borderRadius: 2, fontWeight: 600 }}
            >
              Explore Our Success Stories
            </Button>
          </Box>
        </Container>
      </Box>

      {/* --- Vision & Mission --- */}
      <Box sx={{ py: 8, bgcolor: "grey.100" }}>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  bgcolor: "transparent",
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "primary.main" }}
                >
                  Our Mission
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Empowering African businesses with **world-class technology
                  solutions** that drive growth, efficiency, and competitive
                  advantage in the global marketplace.
                </Typography>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  bgcolor: "transparent",
                }}
              >
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 600, color: "primary.main" }}
                >
                  Our Vision
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  To be Africa's **most trusted technology transformation
                  partner**, leading the continent's digital revolution through
                  innovation, excellence, and unwavering commitment to client
                  success.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* --- Our Core Values --- */}
      <Box sx={{ py: 8, bgcolor: "background.paper" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            sx={{ mb: 6, fontWeight: 600 }}
          >
            Our Guiding Principles
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {["Innovation", "Excellence", "Integrity", "Partnership"].map(
              (value, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card
                    elevation={1}
                    sx={{ p: 3, textAlign: "center", height: "100%" }}
                  >
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{ fontWeight: 600, color: "primary.dark" }}
                    >
                      {value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {value === "Innovation" &&
                        "Continuously pushing boundaries to deliver cutting-edge, future-proof solutions."}
                      {value === "Excellence" &&
                        "Upholding uncompromising quality and precision in every project we undertake."}
                      {value === "Integrity" &&
                        "Building enduring trust through transparent communication and ethical practices."}
                      {value === "Partnership" &&
                        "Fostering long-term relationships that drive mutual growth and shared success."}
                    </Typography>
                  </Card>
                </Grid>
              )
            )}
          </Grid>
          <Box sx={{ mt: 6, textAlign: "center" }}>
            <Button
              variant="text"
              color="primary"
              href="/about"
              sx={{ fontWeight: 600 }}
            >
              Discover Our Full Story
            </Button>
          </Box>
        </Container>
      </Box>

      {/* --- Call to Action: Start Your Transformation --- */}
      <Box
        sx={{
          py: 8,
          bgcolor: "primary.main",
          color: "primary.contrastText",
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Ready to Accelerate Your Digital Transformation?
          </Typography>
          <Typography variant="h6" paragraph sx={{ mb: 4, opacity: 0.9 }}>
            Connect with our experts today to discuss how FutureLogix can
            empower your business with tailored technology solutions.
          </Typography>
          <Button
            variant="contained"
            color="secondary" // Use a contrasting color for the button
            size="large"
            href="/contact"
            sx={{
              px: 5,
              py: 1.8,
              borderRadius: 3,
              fontWeight: 700,
              fontSize: "1.1rem",
            }}
          >
            Schedule a Consultation
          </Button>
        </Container>
      </Box>
    </Container>
  );
}
