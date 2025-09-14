import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
} from "@mui/material";

export default function InsightsSection({ blogPosts = [] }) {
  const theme = useTheme();

  // Default fallback if no blog posts are passed
  const defaultPosts = [
    {
      title: "The Future of Cloud Computing in Nigeria",
      summary:
        "Explore how cloud technology is shaping Nigerian businesses in 2025.",
      link: "/blog/cloud-computing-nigeria",
    },
    {
      title: "Why Cybersecurity Matters for SMEs",
      summary:
        "Cybersecurity is not just for big corporations — here's why small businesses need it too.",
      link: "/blog/cybersecurity-sme",
    },
    {
      title: "Digital Transformation in Libraries",
      summary:
        "How FutureLogix helps libraries transition to modern digital systems.",
      link: "/blog/library-digital-transformation",
    },
  ];

  const postsToShow = blogPosts.length > 0 ? blogPosts : defaultPosts;

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: theme.palette.background.paper,
      }}
    >
      <Box sx={{ maxWidth: "lg", margin: "0 auto", px: 3 }}>
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
          Stay Ahead with FutureLogix Insights
        </Typography>

        <Typography
          variant="h6"
          align="center"
          paragraph
          sx={{
            mb: { xs: 4, md: 8 },
            color: theme.palette.text.secondary,
          }}
        >
          Our team regularly shares insights on cloud computing, software
          development, cybersecurity, and more. Dive into our latest thought
          leadership articles and guides.
        </Typography>

        {/* Blog Post Cards */}
        <Grid container spacing={4}>
          {postsToShow.map((post, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={2}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 2,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: theme.shadows[4],
                  },
                }}
              >
                {/* Optional Image Placeholder */}
                <Box
                  sx={{
                    width: "100%",
                    height: 200,
                    bgcolor: theme.palette.grey[300],
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: theme.palette.text.disabled,
                    fontSize: "0.9rem",
                  }}
                >
                  [Image Placeholder]
                </Box>

                <CardContent>
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.primary.main,
                      mb: 1,
                    }}
                  >
                    {post.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {post.summary}
                  </Typography>
                  <Button
                    component="a"
                    href={post.link || "#"}
                    variant="outlined"
                    size="small"
                    sx={{
                      mt: "auto",
                      borderColor: theme.palette.primary.main,
                      color: theme.palette.primary.main,
                      "&:hover": {
                        backgroundColor: theme.palette.primary.light,
                        borderColor: theme.palette.primary.dark,
                        color: theme.palette.primary.contrastText,
                      },
                    }}
                  >
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* View All Articles Button */}
        <Box sx={{ textAlign: "center", mt: 8 }}>
          <Button
            variant="contained"
            color="primary"
            href="/blog"
            size="large"
            sx={{
              px: 4,
              py: 1.5,
              fontWeight: 600,
              borderRadius: 2,
            }}
          >
            Explore All Insights
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
