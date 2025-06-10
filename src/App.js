// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog"; // Import the new Blog component
import BlogPostDetail from "./pages/BlogPostDetail"; // Import the new BlogPostDetail component
import Header from "./components/Header"; // Assuming Header is your main navigation
import Footer from "./components/Footer"; // Assuming you have a Footer component
import { ThemeProvider } from "@mui/material/styles";
import theme from "./components/theme"; // Your custom MUI theme

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />{" "}
          {/* Route for the main blog page */}
          <Route path="/blog/:slug" element={<BlogPostDetail />} />{" "}
          {/* Route for individual blog posts */}
          {/* Add other routes for Services, Case Studies, etc., if they exist */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
