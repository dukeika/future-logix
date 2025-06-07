import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Card,
  CardMedia,
  Chip,
  Skeleton,
} from "@mui/material";
import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import axios from "axios";

export default function BlogPostDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${API_URL}/blog/posts/${slug}`);
        setPost(res.data);
      } catch (err) {
        console.error("Error fetching blog post:", err);
        setError("Blog post not found.");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <Container sx={{ py: 8 }}>
        <Paper sx={{ p: 4, borderRadius: 3 }}>
          <Skeleton variant="rectangular" height={250} sx={{ mb: 2 }} />
          <Skeleton height={40} width="80%" />
          <Skeleton height={20} width="60%" sx={{ my: 1 }} />
          <Skeleton variant="text" sx={{ my: 1 }} />
          <Skeleton variant="text" sx={{ my: 1 }} />
        </Paper>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ py: 8 }}>
        <Paper
          sx={{
            p: 4,
            textAlign: "center",
            bgcolor: "error.light",
            color: "error.contrastText",
          }}
        >
          <Typography variant="h5">{error}</Typography>
        </Paper>
      </Container>
    );
  }

  return (
    <Box sx={{ py: 8, bgcolor: "background.default" }}>
      <Container maxWidth="md">
        <Card sx={{ borderRadius: 3, boxShadow: 4, overflow: "hidden" }}>
          {/* Featured Image */}
          {post.imageUrl ? (
            <CardMedia
              component="img"
              image={post.imageUrl}
              alt={post.title}
              sx={{ maxHeight: 400, objectFit: "cover" }}
            />
          ) : (
            <Box
              sx={{
                height: 250,
                bgcolor: "grey.300",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "text.secondary",
              }}
            >
              No Image Available
            </Box>
          )}

          {/* Content */}
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" component="h1" gutterBottom>
              {post.title}
            </Typography>

            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              {new Date(post.publishDate).toLocaleDateString()}
              {post.author && ` • by ${post.author}`}
            </Typography>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <Box
                sx={{ mt: 2, mb: 3, display: "flex", flexWrap: "wrap", gap: 1 }}
              >
                {post.tags.map((tag, idx) => (
                  <Chip
                    key={idx}
                    label={tag}
                    size="small"
                    sx={{
                      bgcolor: "primary.light",
                      color: "primary.contrastText",
                      fontSize: "0.75rem",
                    }}
                  />
                ))}
              </Box>
            )}

            {/* Post Content */}
            <Box
              sx={{
                mt: 3,
                "& h1, & h2, & h3, & h4, & h5, & h6": {
                  fontWeight: 600,
                  mt: 2,
                },
                "& p": { mb: 2 },
                "& img": { maxWidth: "100%", borderRadius: 2 },
              }}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(post.content),
              }}
            />
            {/* <Box
              sx={{
                mt: 3,
                "& h1, & h2, & h3, & h4, & h5, & h6": {
                  fontWeight: 600,
                  mt: 2,
                },
                "& p": {
                  mb: 2,
                },
                "& img": {
                  maxWidth: "100%",
                  borderRadius: 2,
                },
              }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            /> */}
          </Paper>
        </Card>
      </Container>
    </Box>
  );
}
