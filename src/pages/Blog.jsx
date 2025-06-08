import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Link,
  Skeleton,
  Chip,
} from "@mui/material";
import axios from "axios";

export default function Blog() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Use environment variable for API URL
  const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000/api";

  useEffect(() => {
    const fetchBlogPosts = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`${API_URL}/blog/posts`);
        // Ensure res.data.posts exists before setting state
        if (res.data && Array.isArray(res.data.posts)) {
          setBlogPosts(res.data.posts);
        } else {
          setBlogPosts([]); // Fallback to empty array
          console.error("Unexpected blog posts response format", res.data);
        }
      } catch (err) {
        setError("Failed to load blog posts.");
        console.error("Error fetching blog posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  if (error) {
    return (
      <Container sx={{ py: 8 }}>
        <Typography variant="h5" align="center" color="error">
          {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ bgcolor: "background.default", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h1"
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            color: "primary.main",
            mb: { xs: 4, md: 6 },
          }}
        >
          Our Latest Insights
        </Typography>

        {loading ? (
          <Grid container spacing={4}>
            {[...Array(3)].map((_, index) => (
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card sx={{ borderRadius: 2, boxShadow: 3 }}>
                  <Skeleton variant="rectangular" height={200} />
                  <CardContent>
                    <Skeleton height={30} width="80%" />
                    <Skeleton height={20} width="60%" />
                    <Skeleton height={60} />
                    <Box
                      sx={{ mt: 2, display: "flex", flexWrap: "wrap", gap: 1 }}
                    >
                      <Skeleton variant="rounded" width={60} height={24} />
                      <Skeleton variant="rounded" width={50} height={24} />
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        ) : blogPosts.length === 0 ? (
          <Typography variant="h5" align="center">
            No blog posts available yet.
          </Typography>
        ) : (
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
                    transition: "transform 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-5px)",
                    },
                  }}
                >
                  {/* Featured Image */}
                  {post.imageUrl ? (
                    <CardMedia
                      component="img"
                      height="200"
                      image={post.imageUrl}
                      alt={post.title}
                      sx={{ objectFit: "cover" }}
                    />
                  ) : (
                    <Box
                      sx={{
                        height: 200,
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
                      {post.author && `by ${post.author}`}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {post.summary || "No summary available."}
                    </Typography>

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                      <Box
                        sx={{
                          mt: 2,
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                        }}
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
                  </CardContent>

                  {/* Read More Button */}
                  <Box sx={{ p: 2, pt: 0 }}>
                    <Button
                      size="small"
                      variant="contained"
                      fullWidth
                      component={Link}
                      to={`/blog/${post.slug}`}
                      sx={{
                        fontWeight: 600,
                        bgcolor: "primary.main",
                        color: "white",
                        "&:hover": {
                          bgcolor: "primary.dark",
                        },
                      }}
                    >
                      Read More
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}
