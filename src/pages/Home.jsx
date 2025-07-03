import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Card,
  Grid,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// MUI Icons (rest of your existing icons)
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import SettingsIcon from "@mui/icons-material/Settings";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";

// Assuming existing components
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import WhyPartnerSection from "../components/WhyPartnerSection";
import TestimonialsSection from "../components/TestimonialsSection";
import InsightsSection from "../components/InsightsSection";
import NewsletterForm from "../components/NewsletterForm";

export default function Home() {
  const theme = useTheme();
  const [openConsultationDialog, setOpenConsultationDialog] = useState(false);

  const handleOpenConsultationDialog = () => {
    setOpenConsultationDialog(true);
  };

  const handleCloseConsultationDialog = () => {
    setOpenConsultationDialog(false);
  };

  const clientLogos = [
    "/images/client-logo-gtbank.png",
    "/images/client-logo-mtn.png",
    "/images/client-logo-unilag.png",
    "/images/client-logo-access.png",
    "/images/client-logo-dangote.png",
    "/images/client-logo-konga.png",
  ];

  return (
    <Box sx={{ bgcolor: theme.palette.background.default }}>
      {/* Hero Section */}
      {/* Ensure your HeroSection component passes the onClick handler to the relevant button */}
      <HeroSection onConsultationClick={handleOpenConsultationDialog} />

      {/* Services Section */}
      <ServicesSection />

      {/* Why Partner Section */}
      <WhyPartnerSection />

      {/* 5. Trusted by Leaders. Proven by Results. (Testimonials & Client Logos) */}
      <Box
        sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.background.paper }}
      >
        <Container maxWidth="lg">
          {/* Testimonials Section */}
          <TestimonialsSection />

          {/* Client Logos */}
          <Typography
            variant="h6"
            align="center"
            sx={{
              mb: 4,
              mt: { xs: 6, md: 8 },
              fontWeight: 600,
              color: theme.palette.text.primary,
            }}
          >
            Our Valued Partners
          </Typography>
          <Grid
            container
            spacing={{ xs: 2, md: 4 }}
            justifyContent="center"
            alignItems="center"
          >
            {clientLogos.map((logo, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}>
                <Box
                  component="img"
                  src={logo}
                  alt={`Client Logo ${index + 1}`}
                  sx={{
                    width: "100%",
                    height: "auto",
                    maxWidth: 120,
                    filter: "grayscale(100%) brightness(150%)",
                    opacity: 0.7,
                    transition: "opacity 0.3s ease-in-out",
                    "&:hover": { opacity: 1, filter: "none" },
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 6. Your Success, Our Structured Approach (Collaborative Approach) */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.primary.light }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              mb: { xs: 4, md: 6 },
              fontWeight: 600,
              color: theme.palette.primary.main,
            }}
          >
            Your Success, Our Structured Approach
          </Typography>
          <Typography
            variant="h6"
            align="center"
            paragraph
            sx={{ mb: { xs: 4, md: 8 }, color: theme.palette.text.primary }}
          >
            We believe in transparency, collaboration, and proven methodologies
            to deliver transformative results.
          </Typography>

          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
            {/* Step 1: Assessment Phase */}
            <Grid item xs={12} sm={6} md={3}>
              <Card
                elevation={2}
                sx={{
                  p: { xs: 3, md: 4 },
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <Box sx={{ mb: 2, color: theme.palette.secondary.main }}>
                  <CheckCircleOutlineIcon sx={{ fontSize: 50 }} />
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 600, color: theme.palette.primary.main }}
                >
                  1. Assessment Phase
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  We begin by deeply understanding your current infrastructure,
                  challenges, and aspirations through comprehensive audits and
                  discussions. This ensures our solutions are perfectly aligned
                  with your strategic goals.
                </Typography>
              </Card>
            </Grid>
            {/* Step 2: Planning Phase */}
            <Grid item xs={12} sm={6} md={3}>
              <Card
                elevation={2}
                sx={{
                  p: { xs: 3, md: 4 },
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <Box sx={{ mb: 2, color: theme.palette.secondary.main }}>
                  <SettingsIcon sx={{ fontSize: 50 }} />
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 600, color: theme.palette.primary.main }}
                >
                  2. Planning Phase
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Our experts craft a detailed, customized roadmap, outlining
                  timelines, resources, and clear milestones. Every step is
                  planned with precision and your input.
                </Typography>
              </Card>
            </Grid>
            {/* Step 3: Execution Phase */}
            <Grid item xs={12} sm={6} md={3}>
              <Card
                elevation={2}
                sx={{
                  p: { xs: 3, md: 4 },
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <Box sx={{ mb: 2, color: theme.palette.secondary.main }}>
                  <PlayCircleOutlineIcon sx={{ fontSize: 50 }} />
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 600, color: theme.palette.primary.main }}
                >
                  3. Execution Phase
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  With meticulous planning, our certified teams implement the
                  solution, adhering to best practices and rigorous quality
                  standards. We maintain open communication, providing regular
                  updates on progress.
                </Typography>
              </Card>
            </Grid>
            {/* Step 4: Support & Optimization */}
            <Grid item xs={12} sm={6} md={3}>
              <Card
                elevation={2}
                sx={{
                  p: { xs: 3, md: 4 },
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <Box sx={{ mb: 2, color: theme.palette.secondary.main }}>
                  <SupportAgentIcon sx={{ fontSize: 50 }} />
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 600, color: theme.palette.primary.main }}
                >
                  4. Support & Optimization
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Our partnership extends beyond implementation. We offer
                  continuous monitoring, tiered support, and ongoing
                  optimization to ensure long-term performance and adaptation to
                  evolving needs.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 7. Stay Ahead with FutureLogix Insights (Insights & Thought Leadership) */}
      <InsightsSection />

      {/* Newsletter Signup Section */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.grey[100] }}>
        <Container maxWidth="md">
          <NewsletterForm />
        </Container>
      </Box>

      {/* 8. Ready to Accelerate Your Digital Transformation? (Final Call to Action) */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
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
          <Typography
            variant="h6"
            paragraph
            sx={{ mb: { xs: 4, md: 6 }, opacity: 0.9 }}
          >
            Partner with FutureLogix and leverage our expertise to build a more
            efficient, secure, and future-ready business. Let's start the
            conversation today.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: { xs: 2, md: 3 },
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={handleOpenConsultationDialog}
              sx={{
                px: 5,
                py: 1.8,
                borderRadius: 3,
                fontWeight: 700,
                fontSize: "1.1rem",
              }}
            >
              Schedule a Free Consultation
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              href="/services"
              sx={{
                px: 5,
                py: 1.8,
                borderRadius: 3,
                fontWeight: 700,
                fontSize: "1.1rem",
                borderColor: "common.white",
                "&:hover": {
                  bgcolor: "rgba(255,255,255,0.1)",
                  borderColor: "common.white",
                },
              }}
            >
              View Our Services
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Zoho Consultation Form Dialog */}
      <Dialog
        open={openConsultationDialog}
        onClose={handleCloseConsultationDialog}
        maxWidth="md"
        fullWidth
        aria-labelledby="consultation-form-title"
      >
        <DialogTitle id="consultation-form-title">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h5" component="span" sx={{ fontWeight: 600 }}>
              Schedule Your Free Consultation
            </Typography>
            <IconButton
              aria-label="close"
              onClick={handleCloseConsultationDialog}
              sx={{
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent dividers sx={{ p: 0 }}>
          <Box sx={{ width: "100%", height: "600px" }}>
            <iframe
              aria-label="Consultation form"
              frameBorder="0"
              style={{ height: "100%", width: "100%", border: "none" }}
              src="https://forms.zohopublic.com/futurelogixlimited1/form/Consultationform/formperma/nLvIySWd-5puLbQ5LKOnomYpzX0oZStSTR9GYVIPgII" // <--- UPDATED SRC HERE
            ></iframe>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
