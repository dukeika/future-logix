import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme, // Hook to access the theme
} from "@mui/material";

// MUI Icons
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import VerifiedIcon from "@mui/icons-material/Verified";
import GroupIcon from "@mui/icons-material/Group";
import BuildIcon from "@mui/icons-material/Build";
import RocketIcon from "@mui/icons-material/Rocket";
import HistoryIcon from "@mui/icons-material/History"; // For Our Story
import PublicIcon from "@mui/icons-material/Public"; // For African Focus
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents"; // For Awards

export default function About() {
  const theme = useTheme(); // Access the theme to use its colors

  // Placeholder team members (replace with real data and images)
  const leadershipTeam = [
    {
      name: "Chukwudi Eze",
      title: "Chief Executive Officer",
      bio: "A visionary leader with over 15 years in tech entrepreneurship, Chukwudi founded FutureLogix with a passion for leveraging technology to unlock Africa's potential. His expertise lies in strategic digital transformation and fostering innovation.",
      image: "/images/team/chukwudi-eze.jpg", // Placeholder image
    },
    {
      name: "Dr. Nneka Okoro",
      title: "Chief Technology Officer",
      bio: "An AWS-certified solutions architect and a seasoned technologist, Dr. Okoro leads our technical vision. Her profound knowledge in cloud infrastructure, cybersecurity, and scalable system design ensures FutureLogix delivers cutting-edge solutions.",
      image: "/images/team/nneka-okoro.jpg", // Placeholder image
    },
    {
      name: "Ahmed Musa",
      title: "Head of Development",
      bio: "Ahmed is the driving force behind our innovative software solutions. With a background in full-stack development and UI/UX design, he ensures our digital products are not only robust and scalable but also intuitive and user-friendly.",
      image: "/images/team/ahmed-musa.jpg", // Placeholder image
    },
    {
      name: "Fatima Bello",
      title: "Head of Client Relations",
      bio: "Fatima is dedicated to ensuring client success and satisfaction. Her exceptional communication skills and deep understanding of business needs bridge the gap between technical solutions and tangible client benefits.",
      image: "/images/team/fatima-bello.jpg", // Placeholder image
    },
  ];

  const awardsRecognitions = [
    {
      year: "2023",
      award: "AWS Rising Star Partner - Sub-Saharan Africa",
      description:
        "Recognizing our rapid growth and impactful AWS implementations across the region.",
    },
    {
      year: "2022",
      award: "Nigerian Tech Innovation Award - Best Cloud Solution",
      description:
        "Awarded for our transformative cloud migration project with a leading Nigerian financial institution.",
    },
    {
      year: "2021",
      award: "Lagos Chamber of Commerce & Industry - Digital Excellence Award",
      description:
        "For our outstanding contributions to digitalizing local businesses and enhancing operational efficiency.",
    },
  ];

  return (
    <Box sx={{ bgcolor: theme.palette.background.default }}>
      {/* 1. Hero Section - About Us */}
      <Box
        sx={{
          py: { xs: 10, md: 15 },
          bgcolor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          // Optional: Add a subtle background pattern or gradient for depth
          background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.primary.main} 90%)`,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "url(/images/about-hero-pattern.png) repeat", // Placeholder for a subtle background pattern
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
            About FutureLogix
          </Typography>
          <Typography variant="h5" paragraph sx={{ opacity: 0.9 }}>
            Your trusted partner in navigating Africa's dynamic digital
            landscape.
          </Typography>
        </Container>
      </Box>

      {/* 2. Our Story - A Journey of Innovation and Impact */}
      <Box
        sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.background.paper }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="/images/about-story.jpg" // Placeholder image: a diverse team collaborating or a modern office space
                alt="Our Story"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 2,
                  boxShadow: theme.shadows[6],
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600, color: theme.palette.primary.main }}
              >
                Our Story: A Journey of Innovation and Impact
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary">
                Founded in 2010 in the vibrant tech hub of Lekki, Lagos,
                FutureLogix began with a singular vision: to bridge the
                technology gap for African businesses and institutions. We
                recognized the immense potential of cutting-edge digital
                solutions to transform operations, empower communities, and
                drive economic growth across the continent.
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary">
                From our humble beginnings as a specialized software development
                firm, we've evolved into a comprehensive technology partner,
                expanding our expertise into cloud solutions, intelligent
                library management systems, and robust cybersecurity. Our
                journey is marked by continuous learning, adapting to the latest
                tech trends, and an unwavering commitment to our clients'
                success.
              </Typography>
              <Button
                variant="outlined"
                color="primary"
                href="/case-studies"
                sx={{ mt: 2, fontWeight: 600 }}
              >
                See Our Impact
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 3. Mission & Vision */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.grey[100] }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ textAlign: "center" }}>
            <Grid item xs={12} md={6}>
              <Card
                elevation={3}
                sx={{
                  p: { xs: 3, md: 5 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <CardContent>
                  <RocketIcon color="primary" sx={{ fontSize: 60, mb: 2 }} />
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      mt: 1,
                      fontWeight: 600,
                      color: theme.palette.primary.main,
                    }}
                  >
                    Our Mission
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Empowering African businesses and institutions with
                    world-class technology solutions that drive efficiency,
                    foster innovation, and ensure sustainable growth in a
                    globally competitive landscape.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                elevation={3}
                sx={{
                  p: { xs: 3, md: 5 },
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <CardContent>
                  <VerifiedIcon color="primary" sx={{ fontSize: 60, mb: 2 }} />
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{
                      mt: 1,
                      fontWeight: 600,
                      color: theme.palette.primary.main,
                    }}
                  >
                    Our Vision
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    To be Africa's most trusted technology transformation
                    partner, leading the continent's digital revolution through
                    unwavering commitment to excellence, innovation, and client
                    success.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 4. Our Core Values - What Drives Us */}
      <Box
        sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.background.paper }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              mb: { xs: 4, md: 8 },
              fontWeight: 600,
              color: theme.palette.primary.main,
            }}
          >
            Our Core Values: What Drives Us
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {/* Value 1: Innovation */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                elevation={2}
                sx={{
                  p: { xs: 3, md: 4 },
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <LightbulbIcon color="secondary" sx={{ fontSize: 50, mb: 1 }} />
                <Typography
                  variant="h6"
                  sx={{
                    mt: 1,
                    fontWeight: 600,
                    color: theme.palette.primary.main,
                  }}
                >
                  Innovation
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We constantly push the boundaries of what's possible,
                  exploring new technologies and creative approaches to deliver
                  future-ready solutions.
                </Typography>
              </Card>
            </Grid>
            {/* Value 2: Excellence */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                elevation={2}
                sx={{
                  p: { xs: 3, md: 4 },
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <BuildIcon color="secondary" sx={{ fontSize: 50, mb: 1 }} />
                <Typography
                  variant="h6"
                  sx={{
                    mt: 1,
                    fontWeight: 600,
                    color: theme.palette.primary.main,
                  }}
                >
                  Excellence
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Our commitment to quality is unwavering. We strive for
                  perfection in every project, ensuring robust, reliable, and
                  high-performing outcomes.
                </Typography>
              </Card>
            </Grid>
            {/* Value 3: Partnership */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                elevation={2}
                sx={{
                  p: { xs: 3, md: 4 },
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <GroupIcon color="secondary" sx={{ fontSize: 50, mb: 1 }} />
                <Typography
                  variant="h6"
                  sx={{
                    mt: 1,
                    fontWeight: 600,
                    color: theme.palette.primary.main,
                  }}
                >
                  Partnership
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We believe in collaborative relationships. Our success is
                  intertwined with yours, and we work hand-in-hand to achieve
                  shared goals.
                </Typography>
              </Card>
            </Grid>
            {/* Value 4: Integrity (New Value) */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                elevation={2}
                sx={{
                  p: { xs: 3, md: 4 },
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <LightbulbIcon color="secondary" sx={{ fontSize: 50, mb: 1 }} />{" "}
                {/* Reusing Lightbulb, or pick another icon like GavelIcon */}
                <Typography
                  variant="h6"
                  sx={{
                    mt: 1,
                    fontWeight: 600,
                    color: theme.palette.primary.main,
                  }}
                >
                  Integrity
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  We conduct our business with the highest ethical standards,
                  ensuring transparency, honesty, and accountability in all our
                  interactions.
                </Typography>
              </Card>
            </Grid>
            {/* Value 5: African Focus (New Value) */}
            <Grid item xs={12} sm={6} md={4}>
              <Card
                elevation={2}
                sx={{
                  p: { xs: 3, md: 4 },
                  textAlign: "center",
                  height: "100%",
                }}
              >
                <PublicIcon color="secondary" sx={{ fontSize: 50, mb: 1 }} />
                <Typography
                  variant="h6"
                  sx={{
                    mt: 1,
                    fontWeight: 600,
                    color: theme.palette.primary.main,
                  }}
                >
                  African Focus
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Our solutions are designed with a deep understanding of
                  Africa's unique challenges and opportunities, fostering local
                  growth with global standards.
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 5. Our Commitment to Africa */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.primary.light }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6} sx={{ order: { xs: 2, md: 1 } }}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600, color: theme.palette.primary.main }}
              >
                Our Commitment to Africa
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary">
                Headquartered in Lagos, Nigeria, FutureLogix is deeply rooted in
                the African continent. We understand the local nuances, market
                dynamics, and immense potential that exists here. Our mission
                goes beyond just providing technology; it's about contributing
                to Africa's digital revolution, fostering local talent, and
                building sustainable solutions that empower communities.
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary">
                We are proud to be part of Africa's growth story, delivering
                solutions that are not just technically sound but are also
                culturally relevant and economically impactful for businesses
                across diverse sectors.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href="/contact" // Consider a specific page like /africa-focus
                sx={{ mt: 2, fontWeight: 600 }}
              >
                Learn About Our Local Impact
              </Button>
            </Grid>
            <Grid item xs={12} md={6} sx={{ order: { xs: 1, md: 2 } }}>
              <Box
                component="img"
                src="/images/about-africa-focus.jpg" // Placeholder image: stylized map of Africa with tech overlays, or a diverse team in an African setting
                alt="Commitment to Africa"
                sx={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 2,
                  boxShadow: theme.shadows[6],
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 6. Meet Our Leadership Team */}
      <Box
        sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.background.paper }}
      >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              mb: { xs: 4, md: 8 },
              fontWeight: 600,
              color: theme.palette.primary.main,
            }}
          >
            Meet Our Leadership Team
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {leadershipTeam.map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card
                  elevation={3}
                  sx={{
                    p: { xs: 2, md: 3 },
                    textAlign: "center",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Box
                    component="img"
                    src={member.image}
                    alt={member.name}
                    sx={{
                      width: 120,
                      height: 120,
                      borderRadius: "50%",
                      objectFit: "cover",
                      mb: 2,
                      border: `4px solid ${theme.palette.secondary.main}`,
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: theme.palette.primary.main }}
                  >
                    {member.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {member.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ flexGrow: 1 }}
                  >
                    {member.bio}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 7. Awards & Recognitions (New Section) */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.grey[100] }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{
              mb: { xs: 4, md: 8 },
              fontWeight: 600,
              color: theme.palette.primary.main,
            }}
          >
            Awards & Recognitions
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {awardsRecognitions.map((award, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  elevation={2}
                  sx={{
                    p: { xs: 3, md: 4 },
                    textAlign: "center",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <EmojiEventsIcon
                    color="primary"
                    sx={{ fontSize: 50, mb: 2 }}
                  />
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 600, color: theme.palette.primary.main }}
                  >
                    {award.year}
                  </Typography>
                  <Typography variant="h6" color="text.secondary" gutterBottom>
                    {award.award}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ flexGrow: 1 }}
                  >
                    {award.description}
                  </Typography>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 8. Final Call to Action */}
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
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Ready to Partner with a Future-Forward Leader?
          </Typography>
          <Typography
            variant="h6"
            paragraph
            sx={{ mb: { xs: 4, md: 6 }, opacity: 0.9 }}
          >
            Join the growing number of African businesses transforming their
            future with FutureLogix. Let's discuss your unique challenges and
            how we can empower your digital journey.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
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
        </Container>
      </Box>
    </Box>
  );
}
