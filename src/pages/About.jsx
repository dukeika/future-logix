import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
} from "@mui/material";

import LightbulbIcon from "@mui/icons-material/Lightbulb";
import VerifiedIcon from "@mui/icons-material/Verified";
import GroupIcon from "@mui/icons-material/Group";
import BuildIcon from "@mui/icons-material/Build";
import RocketIcon from "@mui/icons-material/Rocket";

export default function About() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Section 1: Company Story */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography variant="h3" gutterBottom>
          About Future Logix Limited
        </Typography>
        <Typography variant="h6" color="textSecondary" paragraph>
          Your partner in navigating the digital landscape. We empower
          organizations through technology that simplifies operations, enhances
          access to information, and fosters growth.
        </Typography>
      </Box>

      {/* Section 2: Our Mission & Vision */}
      <Grid container spacing={4} sx={{ mb: 8, textAlign: "center" }}>
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ p: 3, height: "100%" }}>
            <CardContent>
              <RocketIcon color="primary" fontSize="large" />
              <Typography variant="h5" gutterBottom sx={{ mt: 1 }}>
                Our Mission
              </Typography>
              <Typography variant="body1">
                Empowering African businesses with world-class technology
                solutions that drive growth, efficiency, and competitive
                advantage in the global marketplace.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card elevation={3} sx={{ p: 3, height: "100%" }}>
            <CardContent>
              <VerifiedIcon color="primary" fontSize="large" />
              <Typography variant="h5" gutterBottom sx={{ mt: 1 }}>
                Our Vision
              </Typography>
              <Typography variant="body1">
                To be Africa's most trusted technology transformation partner,
                leading the continent's digital revolution through innovation,
                excellence, and unwavering commitment to client success.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Section 3: Core Values */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Our Core Values
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={2} sx={{ p: 3, textAlign: "center" }}>
              <LightbulbIcon color="primary" fontSize="large" />
              <Typography variant="h6" sx={{ mt: 1 }}>
                Innovation
              </Typography>
              <Typography variant="body2">
                Constantly pushing boundaries to deliver cutting-edge solutions.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={2} sx={{ p: 3, textAlign: "center" }}>
              <BuildIcon color="primary" fontSize="large" />
              <Typography variant="h6" sx={{ mt: 1 }}>
                Excellence
              </Typography>
              <Typography variant="body2">
                Uncompromising commitment to quality in every project.
              </Typography>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={{ span: 6, offset: 3 }}
            md={{ span: 4, offset: 0 }}
          >
            {" "}
            <Card elevation={2} sx={{ p: 3, textAlign: "center" }}>
              <GroupIcon color="primary" fontSize="large" />
              <Typography variant="h6" sx={{ mt: 1 }}>
                Partnership
              </Typography>
              <Typography variant="body2">
                Creating long-term relationships that drive mutual success.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Section 4: Why Choose Us */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography variant="h4" gutterBottom>
          Why Choose Future Logix?
        </Typography>
        <Typography variant="body1" paragraph>
          With over a decade of experience and more than 500 successful projects
          delivered, we're committed to transforming your business with proven
          expertise and personalized service.
        </Typography>
        <Button variant="contained" color="primary" href="/contact">
          Get Started Today
        </Button>
      </Box>

      {/* Section 5: Team Intro (Optional) */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h5" align="center" gutterBottom>
          Meet Our Leadership
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={1} sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="h6">[Name]</Typography>
              <Typography variant="caption">CEO</Typography>
              <Typography variant="body2" display="block" sx={{ mt: 1 }}>
                A visionary leader passionate about education and digital
                transformation.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={1} sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="h6">[Name]</Typography>
              <Typography variant="caption">CTO</Typography>
              <Typography variant="body2" display="block" sx={{ mt: 1 }}>
                AWS-certified expert with deep knowledge of cloud
                infrastructure.
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card elevation={1} sx={{ p: 3, textAlign: "center" }}>
              <Typography variant="h6">[Name]</Typography>
              <Typography variant="caption">Head of Development</Typography>
              <Typography variant="body2" display="block" sx={{ mt: 1 }}>
                Passionate about user-friendly interfaces and scalable web
                applications.
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Final CTA */}
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h6" gutterBottom>
          Ready to transform your business with us?
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          href="/contact"
        >
          Schedule a Free Consultation
        </Button>
      </Box>
    </Container>
  );
}
