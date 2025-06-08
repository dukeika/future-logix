// frontend/src/App.js (Example - adjust based on your actual router setup)
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Import your pages/components
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact"; // Your redesigned contact page
import Blog from "./pages/Blog"; // Your main blog listing page
import BlogPostDetail from "./pages/BlogPostDetail"; // The new detail page
import Header from "./components/Header"; // Assuming you have these
import Footer from "./components/Footer"; // Assuming you have these

// Define your custom theme (if you have one)
const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Example blue
    },
    secondary: {
      main: "#dc004e", // Example pink
    },
    background: {
      default: "#f8f9fa", // Light gray background
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
    h1: { fontSize: "3rem" },
    h2: { fontSize: "2.5rem" },
    h3: { fontSize: "2rem" },
    // ... other typography settings
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Prevent uppercase buttons
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Provides a consistent baseline for styling */}
      <Router>
        <Header /> {/* Assuming you have a Header component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} /> {/* Blog listing page */}
          <Route path="/blog/:slug" element={<BlogPostDetail />} />
          {/* Individual blog post page */}
          {/* Add more routes for other pages */}
        </Routes>
        <Footer /> {/* Assuming you have a Footer component */}
      </Router>
    </ThemeProvider>
  );
}

export default App;
