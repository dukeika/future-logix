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
} from "@mui/material";

function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(
          "https://mbnhzeecc7.execute-api.eu-west-2.amazonaws.com/dev/blog"
        ); // Replace with your actual API URL
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBlogPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogPosts();
  }, []);

  if (loading) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography>Loading blog posts...</Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography color="error">Error: {error}</Typography>
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
                component="a"
                href={`/blog/${post.slug}`}
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
                  <Typography variant="body2" color="text.secondary">
                    {post.excerpt}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <Button
                size="small"
                component="a"
                href={`/blog/${post.slug}`}
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
