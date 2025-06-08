import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Paper,
  CircularProgress,
} from "@mui/material";

function BlogPostDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(
          `https://mbnhzeecc7.execute-api.eu-west-2.amazonaws.com/dev/blog/${slug}`
        ); // Replace with your actual API URL
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Blog post not found.");
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogPost();
  }, [slug]);

  if (loading) {
    return (
      <Container sx={{ py: 8, textAlign: "center" }}>
        <CircularProgress />
        <Typography>Loading blog post...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h5" color="error">
          Error: {error}
        </Typography>
        {error === "Blog post not found." && (
          <Typography>
            The blog post you are looking for does not exist.
          </Typography>
        )}
      </Container>
    );
  }

  if (!post) {
    return (
      <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography>No blog post found.</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 8 }}>
      <Paper elevation={3} sx={{ p: { xs: 3, md: 5 } }}>
        {post.image_url && (
          <Box
            component="img"
            src={post.image_url}
            alt={post.title}
            sx={{
              width: "100%",
              height: 300,
              objectFit: "cover",
              mb: 4,
              borderRadius: 2,
            }}
          />
        )}
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 700 }}
        >
          {post.title}
        </Typography>
        <Typography
          variant="subtitle2"
          color="text.secondary"
          gutterBottom
          sx={{ mb: 4 }}
        >
          Published: {new Date(post.created_at).toLocaleDateString()}
        </Typography>
        <Typography variant="body1" component="div" sx={{ lineHeight: 1.8 }}>
          {/* Render HTML content if your 'content' field is HTML */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
          {/* If content is plain text, just render: */}
          {/* {post.content} */}
        </Typography>
      </Paper>
    </Container>
  );
}

export default BlogPostDetail;
