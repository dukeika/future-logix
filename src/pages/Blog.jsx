import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia, // For images
  Button,
  Box,
  Grid,
  useTheme, // Hook to access the theme
  Divider,
  Chip,
  TextField,
} from "@mui/material";
import { Link } from "react-router-dom";

// Icons for additional elements
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CategoryIcon from "@mui/icons-material/Category";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function Blog() {
  const theme = useTheme(); // Access the theme to use its colors

  const blogPosts = [
    {
      id: 1,
      title:
        "The Complete Guide to AWS Migration for Nigerian Businesses: A Local Perspective",
      summary:
        "A step-by-step guide to migrating your infrastructure to AWS, tailored for African companies, focusing on cost optimization and data sovereignty challenges relevant to Nigeria.",
      image: "/images/blog/aws-migration-nigeria.jpg", // Placeholder image: cloud infrastructure or a map of Africa with tech overlay
      link: "/blog/aws-migration-nigeria",
      author: "Chukwudi Eze",
      date: "May 28, 2025",
      category: "Cloud Computing",
      tags: ["AWS", "Cloud Migration", "Nigeria", "Enterprise IT"],
      featured: true, // Mark as featured for the hero section
    },
    {
      id: 2,
      title:
        "Why Serverless Architecture is Perfect for African Startups: Scaling Smartly from Lekki",
      summary:
        "Explore how serverless computing helps startups in vibrant hubs like Lekki, Lagos, scale fast while minimizing upfront infrastructure costs and operational overhead.",
      image: "/images/blog/serverless-africa.jpg", // Placeholder image: startup office or a stylized code graphic
      link: "/blog/serverless-africa-startups",
      author: "Dr. Nneka Okoro",
      date: "May 20, 2025",
      category: "Software Development",
      tags: ["Serverless", "Startups", "Cost Efficiency", "Innovation"],
    },
    {
      id: 3,
      title:
        "Library Digitization: Best Practices and Lessons Learned from Nigerian Institutions",
      summary:
        "Key insights and success stories from our library automation projects across Nigeria, highlighting the impact of open-source solutions like Koha and DSpace.",
      image: "/images/blog/library-digitization.jpg", // Placeholder image: modern library interior or a digital archive
      link: "/blog/library-digitization-nigeria",
      author: "Ahmed Musa",
      date: "May 15, 2025",
      category: "Library Solutions",
      tags: ["Koha", "DSpace", "Education Tech", "Digitization"],
    },
    {
      id: 4,
      title:
        "Cybersecurity Compliance in the Nigerian Financial Sector: A FutureLogix Perspective",
      summary:
        "An in-depth look at understanding local regulations (like NDPR and CBN directives) and how financial institutions can meet them with robust, AWS-powered security solutions.",
      image: "/images/blog/cybersecurity-nigeria.jpg", // Placeholder image: cybersecurity concepts or banking interface
      link: "/blog/cybersecurity-nigerian-finance",
      author: "Fatima Bello",
      date: "May 10, 2025",
      category: "Cybersecurity",
      tags: ["Cybersecurity", "Compliance", "Finance", "NDPR"],
    },
    {
      id: 5,
      title:
        "Digital Transformation Trends in Africa 2025: What's Next for Businesses",
      summary:
        "A forward-looking analysis of the key technological trends shaping the future of business on the African continent, from AI adoption to cloud-first strategies.",
      image: "/images/blog/digital-trends-africa.jpg", // Placeholder image: abstract tech trends or African skyline with tech overlay
      link: "/blog/digital-trends-africa-2025",
      author: "Chukwudi Eze",
      date: "May 01, 2025",
      category: "Digital Transformation",
      tags: ["Digital Transformation", "Africa Tech", "AI", "Cloud"],
    },
    {
      id: 6,
      title:
        "Cost-Benefit Analysis: Cloud vs. On-Premise Solutions for African SMEs",
      summary:
        "Comparing traditional IT setups with modern cloud architectures, offering a detailed cost-benefit analysis specifically for Small and Medium Enterprises in Africa.",
      image: "/images/blog/cloud-vs-onpremise.jpg", // Placeholder image: comparison graphic or data center vs cloud
      link: "/blog/cloud-vs-onpremise-smes",
      author: "Dr. Nneka Okoro",
      date: "April 25, 2025",
      category: "IT Strategy",
      tags: ["Cloud Computing", "On-Premise", "SME", "Cost Optimization"],
    },
  ];

  const featuredPost = blogPosts.find((post) => post.featured);
  const otherPosts = blogPosts.filter((post) => !post.featured);

  // Get unique categories for sidebar
  const categories = [...new Set(blogPosts.map((post) => post.category))];

  return (
    <Box sx={{ bgcolor: theme.palette.background.default }}>
      {/* 1. Blog Hero Section */}
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
            background: "url(/images/blog-hero-pattern.png) repeat", // Placeholder for a subtle background pattern
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
            FutureLogix Insights
          </Typography>
          <Typography variant="h5" paragraph sx={{ opacity: 0.9 }}>
            Stay informed with our latest articles on technology, innovation,
            and digital transformation in Africa.
          </Typography>
        </Container>
      </Box>

      {/* 2. Featured Post Section */}
      {featuredPost && (
        <Box
          sx={{
            py: { xs: 8, md: 12 },
            bgcolor: theme.palette.background.paper,
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              component="h2"
              align="center"
              gutterBottom
              sx={{
                mb: { xs: 4, md: 8 },
                fontWeight: 600,
                color: theme.palette.primary.main,
              }}
            >
              Featured Insight
            </Typography>
            <Card
              elevation={6}
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                borderRadius: 3,
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: { xs: "100%", md: 600 },
                  height: { xs: 250, md: "auto" },
                  objectFit: "cover",
                }}
                image={featuredPost.image}
                alt={featuredPost.title}
              />
              <CardContent sx={{ flexGrow: 1, p: { xs: 3, md: 5 } }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mb: 1,
                    color: "text.secondary",
                  }}
                >
                  <PersonOutlineIcon sx={{ fontSize: 18, mr: 0.5 }} />
                  <Typography variant="body2" component="span" mr={2}>
                    {featuredPost.author}
                  </Typography>
                  <CalendarTodayIcon sx={{ fontSize: 18, mr: 0.5 }} />
                  <Typography variant="body2" component="span">
                    {featuredPost.date}
                  </Typography>
                </Box>
                <Typography
                  variant="h4"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 600, color: theme.palette.primary.main }}
                >
                  {featuredPost.title}
                </Typography>
                <Typography variant="body1" paragraph color="text.secondary">
                  {featuredPost.summary}
                </Typography>
                <Box sx={{ mt: 2 }}>
                  {featuredPost.tags.map((tag, idx) => (
                    <Chip
                      key={idx}
                      label={tag}
                      size="small"
                      color="secondary"
                      sx={{ mr: 1, mb: 1 }}
                    />
                  ))}
                </Box>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={featuredPost.link}
                  sx={{
                    mt: 3,
                    px: 3,
                    py: 1.2,
                    fontWeight: 600,
                    borderRadius: 2,
                  }}
                >
                  Read The Full Article
                </Button>
              </CardContent>
            </Card>
          </Container>
        </Box>
      )}

      {/* 3. All Blog Posts & Sidebar */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.grey[100] }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Main Content Area - Blog Posts */}
            <Grid item xs={12} md={8}>
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                sx={{
                  mb: { xs: 4, md: 6 },
                  fontWeight: 600,
                  color: theme.palette.primary.main,
                }}
              >
                Latest Articles
              </Typography>
              <Grid container spacing={4}>
                {otherPosts.map((post) => (
                  <Grid item xs={12} sm={6} key={post.id}>
                    <Card
                      elevation={2}
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        transition:
                          "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: theme.shadows[4],
                        },
                        borderRadius: 2,
                      }}
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        image={post.image}
                        alt={post.title}
                        sx={{
                          borderTopLeftRadius: theme.shape.borderRadius,
                          borderTopRightRadius: theme.shape.borderRadius,
                        }}
                      />
                      <CardContent sx={{ flexGrow: 1, p: { xs: 2, md: 3 } }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            mb: 1,
                            color: "text.secondary",
                            fontSize: "0.875rem",
                          }}
                        >
                          <PersonOutlineIcon sx={{ fontSize: 16, mr: 0.5 }} />
                          <Typography variant="body2" component="span" mr={2}>
                            {post.author}
                          </Typography>
                          <CalendarTodayIcon sx={{ fontSize: 16, mr: 0.5 }} />
                          <Typography variant="body2" component="span">
                            {post.date}
                          </Typography>
                        </Box>
                        <Typography
                          variant="h6"
                          component="h3"
                          gutterBottom
                          sx={{
                            fontWeight: 600,
                            color: theme.palette.primary.main,
                          }}
                        >
                          {post.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          paragraph
                          color="text.secondary"
                        >
                          {post.summary}
                        </Typography>
                        <Button
                          size="small"
                          color="primary"
                          component={Link}
                          to={post.link}
                          sx={{ mt: 1, fontWeight: 600 }}
                        >
                          Read More
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>

            {/* Sidebar */}
            <Grid item xs={12} md={4}>
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, color: theme.palette.primary.main }}
                >
                  Categories
                </Typography>
                <Divider sx={{ mb: 2 }} />
                {categories.map((category, index) => (
                  <Button
                    key={index}
                    component={Link}
                    to={`/blog/category/${category
                      .toLowerCase()
                      .replace(/\s/g, "-")}`}
                    sx={{
                      display: "block",
                      width: "100%",
                      justifyContent: "flex-start",
                      py: 1,
                      px: 2,
                      mb: 0.5,
                      textTransform: "none",
                      color: theme.palette.text.primary,
                      "&:hover": {
                        bgcolor: theme.palette.primary.light,
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    <CategoryIcon sx={{ mr: 1, fontSize: 18 }} />
                    {category}
                  </Button>
                ))}
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, color: theme.palette.primary.main }}
                >
                  Subscribe to Our Newsletter
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body2" paragraph color="text.secondary">
                  Get the latest insights and updates directly in your inbox.
                </Typography>
                <TextField
                  fullWidth
                  label="Your Email"
                  variant="outlined"
                  size="small"
                  sx={{ mb: 2 }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  startIcon={<MailOutlineIcon />}
                  sx={{ fontWeight: 600 }}
                >
                  Subscribe
                </Button>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: 600, color: theme.palette.primary.main }}
                >
                  Connect With Us
                </Typography>
                <Divider sx={{ mb: 2 }} />
                <Typography variant="body2" paragraph color="text.secondary">
                  Follow us on social media for daily updates and tech news.
                </Typography>
                {/* Placeholder for social media icons */}
                <Box sx={{ display: "flex", gap: 1 }}>
                  {/* <IconButton aria-label="Facebook"><FacebookIcon /></IconButton> */}
                  {/* <IconButton aria-label="Twitter"><TwitterIcon /></IconButton> */}
                  {/* <IconButton aria-label="LinkedIn"><LinkedInIcon /></IconButton> */}
                  <Button variant="outlined" size="small">
                    LinkedIn
                  </Button>
                  <Button variant="outlined" size="small">
                    X
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 4. Final Call to Action */}
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
            Have a Topic You'd Like Us to Cover?
          </Typography>
          <Typography
            variant="h6"
            paragraph
            sx={{ mb: { xs: 4, md: 6 }, opacity: 0.9 }}
          >
            We're always interested in exploring new ideas and addressing the
            tech questions that matter most to you.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            to="/contact"
            sx={{
              px: 5,
              py: 1.8,
              borderRadius: 3,
              fontWeight: 700,
              fontSize: "1.1rem",
            }}
          >
            Suggest a Topic
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
