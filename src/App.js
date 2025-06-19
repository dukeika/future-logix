import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPostDetail from "./pages/BlogPostDetail";
import Services from "./pages/Services";
import Header from "./components/Header";
import Footer from "./components/Footer";
import theme from "./components/theme";

// ADMIN IMPORTS
import BlogAdminPage from "./pages/Admin/BlogAdminPage";
import AddEditBlogPostForm from "./pages/Admin/AddEditBlogPostForm";
import FeedbackAdminPage from "./pages/Admin/FeedbackAdminPage"; // NEW: Import FeedbackAdminPage

import CloudSolutions from "./pages/CloudSolutions";
import LibrarySystems from "./pages/LibrarySystems";
import ServerlessDevelopment from "./pages/ServerlessDevelopment";
import CyberSecurity from "./pages/CyberSecurity";
import BusinessAutomation from "./pages/BusinessAutomation";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPostDetail />} />
          {/* ADMIN ROUTES */}
          <Route path="/admin/blog" element={<BlogAdminPage />} />
          <Route path="/admin/blog/new" element={<AddEditBlogPostForm />} />
          <Route
            path="/admin/blog/edit/:slug"
            element={<AddEditBlogPostForm />}
          />
          <Route path="/admin/feedback" element={<FeedbackAdminPage />} />{" "}
          {/* NEW: Route for Feedback Admin */}
          // Service Detail Routes
          <Route
            path="/services/cloud-solutions"
            element={<CloudSolutions />}
          />
          <Route
            path="/services/serverless-development"
            element={<ServerlessDevelopment />}
          />
          <Route
            path="/services/library-systems"
            element={<LibrarySystems />}
          />
          <Route path="/services/cybersecurity" element={<CyberSecurity />} />
          <Route
            path="/services/business-automation"
            element={<BusinessAutomation />}
          />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
