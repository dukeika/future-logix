// frontend/src/pages/Blog.js
import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Button,
  Card,
  CardContent,
  CardMedia, // etc.
} from "@mui/material";
import axios from "axios";
import { Link } from "react-router-dom"; // Make sure you import Link from react-router-dom

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/blog/posts`);
        setBlogPosts(response.data.posts); // Assuming your API returns { posts: [...], ... }
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError("Failed to load blog posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []); // Empty dependency array means this runs once on component mount

  if (loading) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography variant="h5" align="center">
          Loading blog posts...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography variant="h5" align="center" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  if (blogPosts.length === 0) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography variant="h5" align="center">
          No blog posts available yet.
        </Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ bgcolor: "background.default", py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h1"
          align="center"
          gutterBottom
          sx={{ fontWeight: 700, color: "primary.main", mb: { xs: 6, md: 8 } }}
        >
          Our Latest Insights
        </Typography>
        <Grid container spacing={4}>
          {blogPosts.map((post) => (
            <Grid item key={post.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              >
                {/* ... (CardMedia, CardContent for title, summary etc.) ... */}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    sx={{ fontWeight: 600 }}
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    gutterBottom
                  >
                    {new Date(post.publishDate).toLocaleDateString()}{" "}
                    {post.author && ` by ${post.author}`}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.summary}
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    {post.tags &&
                      post.tags.map((tag, index) => (
                        <span
                          key={index}
                          style={{
                            display: "inline-block",
                            backgroundColor: "#e0e0e0",
                            borderRadius: "4px",
                            padding: "4px 8px",
                            marginRight: "5px",
                            fontSize: "0.75rem",
                            color: "#555",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                  </Box>
                </CardContent>
                <Box sx={{ p: 2, pt: 0 }}>
                  {/* Updated Link for "Read More" */}
                  <Button
                    size="small"
                    variant="outlined"
                    component={Link}
                    to={`/blog/${post.slug}`}
                  >
                    Read More
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
