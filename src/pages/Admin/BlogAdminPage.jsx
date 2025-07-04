import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // Import useNavigate

// Import Material-UI components
import {
  Container,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Alert,
  Box,
} from "@mui/material";

const API_BASE_URL =
  "https://0eo2680b63.execute-api.eu-west-2.amazonaws.com/dev"; // IMPORTANT: Replace with your actual API Gateway URL

const BlogAdminPage = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/blog`);
        setBlogPosts(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blog posts for admin:", err);
        setError(
          "Failed to load blog posts. Please check your backend and network."
        );
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const handleDelete = async (postId) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      try {
        await axios.delete(`${API_BASE_URL}/blog/id/${postId}`);
        setBlogPosts(blogPosts.filter((post) => post.id !== postId));
        alert("Blog post deleted successfully!"); // Consider using MUI Snackbar for better UX
      } catch (err) {
        console.error("Error deleting blog post:", err);
        alert("Failed to delete blog post."); // Consider using MUI Snackbar for better UX
      }
    }
  };

  const handleAddEdit = (slug = null) => {
    // Now accepts slug for editing
    if (slug) {
      navigate(`/admin/blog/edit/${slug}`); // Navigate to edit page with slug
    } else {
      navigate("/admin/blog/new"); // Navigate to add new page
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Manage Blog Posts
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleAddEdit()}
          sx={{ textTransform: "none" }}
        >
          Add New Blog Post
        </Button>
      </Box>

      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", my: 4 }}>
          <CircularProgress />
          <Typography variant="body1" sx={{ ml: 2 }}>
            Loading blog posts...
          </Typography>
        </Box>
      )}

      {error && (
        <Alert severity="error" sx={{ my: 4 }}>
          {error}
        </Alert>
      )}

      {!loading && !error && blogPosts.length === 0 && (
        <Alert severity="info" sx={{ my: 4 }}>
          No blog posts found. Start by adding one!
        </Alert>
      )}

      {!loading && !error && blogPosts.length > 0 && (
        <TableContainer component={Paper} elevation={3}>
          <Table sx={{ minWidth: 650 }} aria-label="blog posts table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Title
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Author
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Published Date
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography variant="subtitle1" fontWeight="bold">
                    Actions
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {blogPosts.map((post) => (
                <TableRow key={post.id}>
                  <TableCell component="th" scope="row">
                    {post.title}
                  </TableCell>
                  <TableCell>{post.author}</TableCell>
                  <TableCell>
                    {new Date(post.published_date).toLocaleDateString()}
                  </TableCell>
                  <TableCell align="right">
                    <Button
                      variant="outlined"
                      color="primary"
                      size="small"
                      onClick={() => handleAddEdit(post.slug)}
                      sx={{ mr: 1, textTransform: "none" }}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => handleDelete(post.id)}
                      sx={{ textTransform: "none" }}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default BlogAdminPage;
