// src/pages/BlogPostDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Paper,
} from "@mui/material";
import { useTheme } from "@mui/material";

const API_BASE_URL =
  "https://dtsevdpphf.execute-api.eu-west-2.amazonaws.com/dev"; // Make sure this is correct // Replace with your actual API Gateway endpoint for blog posts

export default function BlogPostDetail() {
  const theme = useTheme();
  const { slug } = useParams(); // Get the slug from the URL
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/blog/${slug}`); // Adjust path if necessary
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch blog post:", err);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchBlogPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
        <CircularProgress color="primary" />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Loading blog post...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container
        maxWidth="md"
        sx={{ py: 8, textAlign: "center", color: "error.main" }}
      >
        <Typography variant="h5">Error loading blog post.</Typography>
        <Typography variant="body1">{error.message}</Typography>
      </Container>
    );
  }

  if (!post) {
    return (
      <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h5">Blog post not found.</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
      <Paper elevation={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2 }}>
        {post.image_url && (
          <Box
            component="img"
            src={post.image_url}
            alt={post.title}
            sx={{
              width: "100%",
              maxHeight: 400,
              objectFit: "cover",
              borderRadius: 1,
              mb: 4,
            }}
          />
        )}
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 700, color: theme.palette.primary.main }}
        >
          {post.title}
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          gutterBottom
          sx={{ mb: 3 }}
        >
          By {post.author} on{" "}
          {new Date(post.published_date).toLocaleDateString()}
        </Typography>
        <Typography
          variant="body1"
          component="div"
          sx={{ lineHeight: 1.8, color: theme.palette.text.primary }}
        >
          {/* Render content, consider a markdown renderer if content is markdown */}
          {post.content.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Typography>
      </Paper>
    </Container>
  );
}
