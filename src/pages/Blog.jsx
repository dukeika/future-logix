// src/pages/Blog.jsx
import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material";

const API_BASE_URL =
  "https://dtsevdpphf.execute-api.eu-west-2.amazonaws.com/dev"; // Replace with your actual API Gateway endpoint for blog posts

export default function Blog() {
  const theme = useTheme();
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/blog`); // Adjust path if necessary
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBlogPosts(data);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch blog posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
        <CircularProgress color="primary" />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Loading blog posts...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container
        maxWidth="lg"
        sx={{ py: 8, textAlign: "center", color: "error.main" }}
      >
        <Typography variant="h5">Error loading blog posts.</Typography>
        <Typography variant="body1">{error.message}</Typography>
      </Container>
    );
  }

  return (
    <Box
      sx={{ bgcolor: theme.palette.background.default, py: { xs: 8, md: 12 } }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h1"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700, mb: 6, color: theme.palette.primary.main }}
        >
          Our Latest Insights
        </Typography>

        {blogPosts.length === 0 ? (
          <Typography variant="h6" align="center" color="text.secondary">
            No blog posts found. Check back later!
          </Typography>
        ) : (
          <Grid container spacing={4} justifyContent="center">
            {blogPosts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                <Card
                  elevation={2}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardActionArea
                    component={Link}
                    to={`/blog/${post.slug}`}
                    sx={{ flexGrow: 1 }}
                  >
                    {post.image_url && (
                      <CardMedia
                        component="img"
                        height="200"
                        image={post.image_url}
                        alt={post.title}
                        sx={{ objectFit: "cover" }}
                      />
                    )}
                    <CardContent sx={{ p: { xs: 3, md: 4 } }}>
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
                        color="text.secondary"
                        sx={{ mb: 1 }}
                      >
                        By {post.author} on{" "}
                        {new Date(post.published_date).toLocaleDateString()}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {post.content.substring(0, 150)}...{" "}
                        {/* Show a snippet */}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <Button
                    component={Link}
                    to={`/blog/${post.slug}`}
                    variant="text"
                    color="primary"
                    sx={{
                      alignSelf: "flex-end",
                      mr: 2,
                      mb: 2,
                      fontWeight: 600,
                    }}
                  >
                    Read More
                  </Button>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}
