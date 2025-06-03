import React from "react";
import { Container, Typography, Button, Box, Grid, Paper } from "@mui/material";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import CoreServicesOverview from "../components/CoreServicesOverview";

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: 5 }}>
      <HeroSection />
      {/* About Summary */}
      <AboutSection />

      {/* Core Services Overview */}
      <CoreServicesOverview />

      {/* Main Content */}

      <Typography variant="h3" align="center" gutterBottom>
        Transform Your Business with World-Class Technology Solutions
      </Typography>
      <Typography variant="h6" align="center" paragraph color="textSecondary">
        Empowering African businesses to thrive in the digital age through
        innovative cloud solutions, cutting-edge development services, and
        comprehensive technology transformation.
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h5">AWS Advanced Partner</Typography>
            <Typography>
              Trusted by leading organizations across Nigeria.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h5">98% Client Satisfaction Rate</Typography>
            <Typography>
              Our clients love our results-driven approach.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} sx={{ p: 3, textAlign: "center" }}>
            <Typography variant="h5">
              500+ Successful Projects Delivered
            </Typography>
            <Typography>
              Proven track record of excellence and innovation.
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box sx={{ mt: 5, textAlign: "center" }}>
        <Button variant="contained" color="primary" href="/services">
          Start Your Digital Transformation Today
        </Button>
      </Box>
    </Container>
  );
}
