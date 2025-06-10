import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact"; // Ensure this is imported
import Blog from "./pages/Blog";
import BlogPostDetail from "./pages/BlogPostDetail";
import ConsultationForm from "./pages/ConsultationForm"; // Ensure this is imported
import Header from "./components/Header";
import Footer from "./components/Footer";
import theme from "./components/theme"; // Your Material-UI theme

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostDetail />} />
          <Route path="/consultation" element={<ConsultationForm />} />
          {/* Add any other routes you have */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
