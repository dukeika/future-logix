import React from "react";
import { Container, Typography, Box, Grid, Card } from "@mui/material";

export default function AboutSection() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={10}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography variant="h4" gutterBottom>
              About Future Logix Limited
            </Typography>
            <Typography variant="h6" color="textSecondary" paragraph>
              Your partner in navigating the digital landscape. We empower
              organizations through technology that simplifies operations,
              enhances access to information, and fosters growth.
            </Typography>
          </Box>
        </Grid>

        {/* Mission & Vision */}
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, height: "100%" }}>
            <Typography variant="h5" gutterBottom>
              Our Mission
            </Typography>
            <Typography variant="body1">
              Empowering African businesses with world-class technology
              solutions that drive growth, efficiency, and competitive advantage
              in the global marketplace.
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card sx={{ p: 3, height: "100%" }}>
            <Typography variant="h5" gutterBottom>
              Our Vision
            </Typography>
            <Typography variant="body1">
              To be Africa's most trusted technology transformation partner,
              leading the continent's digital revolution through innovation,
              excellence, and unwavering commitment to client success.
            </Typography>
          </Card>
        </Grid>

        {/* Core Values */}
        <Grid item xs={12}>
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" align="center" gutterBottom>
              Our Core Values
            </Typography>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ p: 2, textAlign: "center" }}>
                  <Typography>
                    <strong>Innovation</strong>: Pushing boundaries to deliver
                    cutting-edge solutions.
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ p: 2, textAlign: "center" }}>
                  <Typography>
                    <strong>Excellence</strong>: Uncompromising quality in every
                    project.
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ p: 2, textAlign: "center" }}>
                  <Typography>
                    <strong>Integrity</strong>: Building trust through
                    transparency.
                  </Typography>
                </Card>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Card sx={{ p: 2, textAlign: "center" }}>
                  <Typography>
                    <strong>Partnership</strong>: Creating long-term
                    relationships that drive mutual success.
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
