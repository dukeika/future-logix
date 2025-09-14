import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

// Import Material-UI components
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  CircularProgress,
  Alert,
  Paper,
} from "@mui/material";

const API_BASE_URL =
  "https://dtsevdpphf.execute-api.eu-west-2.amazonaws.com/dev"; // IMPORTANT: Replace with your actual API Gateway URL

const AddEditBlogPostForm = () => {
  const { slug } = useParams(); // Get slug from URL for edit mode
  const navigate = useNavigate(); // Hook for navigation

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
    image_url: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);

  useEffect(() => {
    if (slug) {
      setIsEditMode(true);
      const fetchBlogPost = async () => {
        setLoading(true);
        try {
          const response = await axios.get(`${API_BASE_URL}/blog/${slug}`);
          setFormData(response.data);
          setLoading(false);
        } catch (err) {
          console.error("Error fetching blog post for edit:", err);
          setError("Failed to load blog post for editing.");
          setLoading(false);
        }
      };
      fetchBlogPost();
    } else {
      setIsEditMode(false);
      setFormData({
        // Reset form for add mode
        title: "",
        content: "",
        author: "",
        image_url: "",
      });
    }
  }, [slug]); // Re-run when slug changes

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      if (isEditMode) {
        // Update existing post
        await axios.put(`${API_BASE_URL}/blog/id/${formData.id}`, formData); // Using formData.id
        setSuccess("Blog post updated successfully!");
      } else {
        // Create new post
        await axios.post(`${API_BASE_URL}/blog`, formData);
        setSuccess("Blog post created successfully!");
        setFormData({
          // Clear form after successful creation
          title: "",
          content: "",
          author: "",
          image_url: "",
        });
      }
      setLoading(false);
      // Optionally navigate back to the blog list after success
      navigate("/admin/blog");
    } catch (err) {
      console.error("Error submitting blog post:", err);
      setError(
        `Failed to ${isEditMode ? "update" : "create"} blog post: ${
          err.response?.data?.message || err.message
        }`
      );
      setLoading(false);
    }
  };

  if (loading && isEditMode && !formData.title) {
    // Show full loading only when fetching existing post
    return (
      <Container
        maxWidth="md"
        sx={{
          py: 4,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
        }}
      >
        <CircularProgress />
        <Typography variant="body1" sx={{ ml: 2 }}>
          Loading blog post...
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom sx={{ mb: 4 }}>
          {isEditMode ? "Edit Blog Post" : "Add New Blog Post"}
        </Typography>

        {error && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {error}
          </Alert>
        )}
        {success && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {success}
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={10}
            required
          />
          <TextField
            label="Author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Image URL"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <Box sx={{ mt: 3, display: "flex", justifyContent: "space-between" }}>
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => navigate("/admin/blog")} // Go back to list
              disabled={loading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={loading}
              startIcon={
                loading && <CircularProgress size={20} color="inherit" />
              }
            >
              {isEditMode ? "Update Post" : "Create Post"}
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default AddEditBlogPostForm;
