import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Link,
  Paper,
  CircularProgress,
} from "@mui/material";

function BlogPostDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Your deployed API Gateway base URL
  const API_BASE_URL =
    "https://mbnhzeecc7.execute-api.eu-west-2.amazonaws.com/dev";

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/blog/${slug}`);
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("Blog post not found.");
          }
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPost(data);
      } catch (err) {
        console.error(`Failed to fetch blog post with slug ${slug}:`, err);
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
        <Typography variant="h6" sx={{ mt: 2 }}>
          Loading blog post...
        </Typography>
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
            The blog post you are looking for does not exist or has been
            removed.
          </Typography>
        )}
        <Typography sx={{ mt: 2 }}>
          Please ensure the URL is correct or check our{" "}
          <Link to="/blog">main blog page</Link>.
        </Typography>
      </Container>
    );
  }

  if (!post) {
    // This case might be hit if loading finished without error but no post was set (e.g., empty response)
    return (
      <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h5">No blog post found.</Typography>
        <Typography sx={{ mt: 2 }}>
          It seems there's no content for this post yet.
        </Typography>
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
              height: { xs: 200, sm: 300 },
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
        {/* Render HTML content if your 'content' field is HTML. Be cautious with dangerouslySetInnerHTML.
                    Ensure the HTML content is sanitized on the backend if it's user-generated. */}
        <Typography variant="body1" component="div" sx={{ lineHeight: 1.8 }}>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </Typography>
      </Paper>
    </Container>
  );
}

export default BlogPostDetail;
