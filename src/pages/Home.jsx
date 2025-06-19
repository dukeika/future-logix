import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Card,
  Grid,
  Paper,
  CardContent,
  CardActionArea,
  useTheme, // Hook to access the theme
} from "@mui/material";

// MUI Icons
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"; // For process steps
import SettingsIcon from "@mui/icons-material/Settings"; // For process steps
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline"; // For process steps
import SupportAgentIcon from "@mui/icons-material/SupportAgent"; // For process steps

// Assuming HeroSection is an existing component.
// Make sure HeroSection handles its own background image/video and specific content.
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import WhyPartnerSection from "../components/WhyPartnerSection"; // Import new component
import TestimonialsSection from "../components/TestimonialsSection"; // Import new testimonials section
import InsightsSection from "../components/InsightsSection"; // Import insights section

export default function Home() {
  const theme = useTheme(); // Access the theme to use its colors

  const testimonials = [
    {
      quote:
        "FutureLogix transformed our cloud infrastructure, significantly cutting costs and boosting our operational efficiency. Their team is incredibly knowledgeable and supportive.",
      client: "Uwem Ebong",
      title: "CEO",
      company: "Innovate Africa Tech",
      avatar: "/images/aisha-mohammed-avatar.jpg", // Replace with actual path
    },
    {
      quote:
        "Implementing Koha with FutureLogix was seamless. Our library staff are now more productive, and our patrons have a much better experience. Highly recommend!",
      client: "Dr. Emeka Obi",
      title: "Library Director",
      company: "University of Lagos",
      avatar: "/images/emeka-obi-avatar.jpg", // Replace with actual path
    },
    {
      quote:
        "The custom software FutureLogix developed has revolutionized our internal processes. They understood our unique needs perfectly and delivered beyond expectations.",
      client: "Sarah Kalu",
      title: "Head of Operations",
      company: "Eko Logistics",
      avatar: "/images/sarah-kalu-avatar.jpg", // Replace with actual path
    },
  ];

  const clientLogos = [
    "/images/client-logo-gtbank.png", // Replace with actual paths and ensure grayscale
    "/images/client-logo-mtn.png",
    "/images/client-logo-unilag.png",
    "/images/client-logo-access.png",
    "/images/client-logo-dangote.png",
    "/images/client-logo-konga.png",
  ];

  const blogPosts = [
    {
      title: "The Future of Cloud in African Enterprises: Scaling for Growth",
      excerpt:
        "Explore how African businesses are leveraging AWS to achieve unprecedented scalability and cost-efficiency in a rapidly evolving digital landscape...",
      image: "/images/blog-cloud-africa.jpg", // Replace with actual path
      link: "/blog/cloud-in-african-enterprises",
    },
    {
      title:
        "Why Open Source ILS is Revolutionizing Library Management in Nigeria",
      excerpt:
        "Discover the benefits of Koha and DSpace for modernizing information access and digital preservation in academic and public libraries...",
      image: "/images/blog-library-open-source.jpg", // Replace with actual path
      link: "/blog/open-source-library-management",
    },
    {
      title:
        "Building Secure Applications from the Ground Up: A Developer's Guide",
      excerpt:
        "Understanding the crucial steps to integrate robust security practices into your development lifecycle to protect valuable data and ensure compliance...",
      image: "/images/blog-secure-dev.jpg", // Replace with actual path
      link: "/blog/secure-application-development",
    },
  ];

  return (
    <Box sx={{ bgcolor: theme.palette.background.default }}>
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Why Partner Section */}
      <WhyPartnerSection />

      {/* 5. Trusted by Leaders. Proven by Results. (Testimonials & Client Logos) */}
      <Box
        sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.background.paper }}
      >
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
            {/* 🔥 New Testimonials Section */}
            <TestimonialsSection />
          </Typography>

          {/* Client Logos */}
          <Typography
            variant="h6"
            align="center"
            sx={{ mb: 4, fontWeight: 600, color: theme.palette.text.primary }}
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
                    maxWidth: 120, // Max size for logos
                    filter: "grayscale(100%) brightness(150%)", // Grayscale for corporate look
                    opacity: 0.7,
                    transition: "opacity 0.3s ease-in-out",
                    "&:hover": { opacity: 1, filter: "none" }, // Color on hover
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
              Schedule a Free Consultation
            </Button>
            <Button
              variant="outlined"
              color="inherit" // Inherits white from parent box
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
    </Box>
  );
}
