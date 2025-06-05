// frontend/src/pages/BlogPostDetail.js
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"; // Import useParams and Link
import {
  Container,
  Typography,
  Box,
  Paper,
  CircularProgress,
  Button,
  useTheme,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

export default function BlogPostDetail() {
  const { slug } = useParams(); // Get the slug from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const theme = useTheme();

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/blog/posts/${slug}`);
        setPost(response.data);
      } catch (err) {
        console.error(`Error fetching blog post with slug ${slug}:`, err);
        if (err.response && err.response.status === 404) {
          setError("Blog post not found.");
        } else {
          setError("Failed to load blog post. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlogPost();
    }
  }, [slug]); // Re-run effect if slug changes

  if (loading) {
    return (
      <Container sx={{ py: 8, display: "flex", justifyContent: "center" }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ ml: 2 }}>
          Loading blog post...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h5" color="error" gutterBottom>
          {error}
        </Typography>
        <Button
          component={Link}
          to="/blog"
          variant="contained"
          startIcon={<ArrowBackIcon />}
        >
          Back to Blog
        </Button>
      </Container>
    );
  }

  if (!post) {
    return (
      <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h5">No blog post data available.</Typography>
        <Button
          component={Link}
          to="/blog"
          variant="contained"
          startIcon={<ArrowBackIcon />}
        >
          Back to Blog
        </Button>
      </Container>
    );
  }

  return (
    <Box
      sx={{ bgcolor: theme.palette.background.default, py: { xs: 8, md: 12 } }}
    >
      <Container maxWidth="md">
        <Button
          component={Link}
          to="/blog"
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          sx={{ mb: 4 }}
        >
          Back to Blog
        </Button>
        <Paper elevation={4} sx={{ p: { xs: 4, md: 6 }, borderRadius: 3 }}>
          {post.imageUrl && (
            <Box sx={{ mb: 4 }}>
              <img
                src={post.imageUrl}
                alt={post.title}
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "400px",
                  objectFit: "cover",
                  borderRadius: theme.shape.borderRadius,
                }}
              />
            </Box>
          )}
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700, color: "primary.main" }}
          >
            {post.title}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            gutterBottom
            sx={{ mb: 3 }}
          >
            Published: {new Date(post.publishDate).toLocaleDateString()}{" "}
            {post.author && ` by ${post.author}`}
            {post.category && ` | Category: ${post.category}`}
          </Typography>

          <Box sx={{ mb: 4 }}>
            {post.tags &&
              post.tags.map((tag, index) => (
                <span
                  key={index}
                  style={{
                    display: "inline-block",
                    backgroundColor: "#e0e0e0",
                    borderRadius: "4px",
                    padding: "4px 8px",
                    marginRight: "8px",
                    marginBottom: "8px",
                    fontSize: "0.8rem",
                    color: "#555",
                  }}
                >
                  {tag}
                </span>
              ))}
          </Box>

          {/* Render content using dangerouslySetInnerHTML, be cautious with untrusted HTML */}
          <Typography variant="body1" component="div" sx={{ lineHeight: 1.8 }}>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </Typography>
        </Paper>
      </Container>
    </Box>
  );
}
