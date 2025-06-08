import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Box,
  Button,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom"; // Import Link for internal navigation

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Your deployed API Gateway base URL
  const API_BASE_URL =
    "https://mbnhzeecc7.execute-api.eu-west-2.amazonaws.com/dev";

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/blog`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBlogPosts(data);
      } catch (err) {
        console.error("Failed to fetch blog posts:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogPosts();
  }, []);

  if (loading) {
    return (
      <Container sx={{ py: 8, textAlign: "center" }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Loading our latest insights...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h5" color="error">
          Error loading blog posts:
        </Typography>
        <Typography color="error">{error}</Typography>
        <Typography sx={{ mt: 2 }}>
          Please try refreshing the page or contact support if the issue
          persists.
        </Typography>
      </Container>
    );
  }

  if (blogPosts.length === 0) {
    return (
      <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h5" component="h2">
          No blog posts found yet.
        </Typography>
        <Typography sx={{ mt: 2 }}>Check back soon for new content!</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        align="center"
        sx={{ fontWeight: 600, mb: 6 }}
      >
        Our Latest Insights
      </Typography>
      <Grid container spacing={4}>
        {blogPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card
              elevation={2}
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
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
                <CardContent>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    Published: {new Date(post.created_at).toLocaleDateString()}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.excerpt}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Button
                size="small"
                component={Link}
                to={`/blog/${post.slug}`}
                sx={{ alignSelf: "flex-end", m: 2 }}
              >
                Read More
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Blog;
