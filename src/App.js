import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import BlogPostDetail from "./pages/BlogPostDetail"; // This is correct for single post view
import ConsultationForm from "./pages/ConsultationForm";
import Header from "./components/Header";
import Footer from "./components/Footer";
import theme from "./components/theme"; // Your Material-UI theme

// NEW ADMIN IMPORTS
import BlogAdminPage from "./pages/Admin/BlogAdminPage"; // Import the new admin page

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
          <Route path="/blog/:slug" element={<BlogPostDetail />} />{" "}
          {/* This route is correct for detailed blog post */}
          <Route path="/consultation" element={<ConsultationForm />} />
          {/* Add any other existing routes you have here */}
          {/* NEW ADMIN ROUTES */}
          <Route path="/admin/blog" element={<BlogAdminPage />} />
          {/* You can add more admin routes here as you build them, e.g.: */}
          {/* <Route path="/admin/feedback" element={<FeedbackAdminPage />} /> */}
          {/* <Route path="/admin/blog/new" element={<AddEditBlogPostForm />} /> */}
          {/* <Route path="/admin/blog/edit/:id" element={<AddEditBlogPostForm />} /> */}
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { ThemeProvider } from "@mui/material/styles";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact"; // Ensure this is imported
// import Blog from "./pages/Blog";
// import BlogPostDetail from "./pages/BlogPostDetail";
// import ConsultationForm from "./pages/ConsultationForm"; // Ensure this is imported
// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import theme from "./components/theme"; // Your Material-UI theme

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Router>
//         <Header />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/blog/:slug" element={<BlogPostDetail />} />
//           <Route path="/consultation" element={<ConsultationForm />} />
//           {/* Add any other routes you have */}
//         </Routes>
//         <Footer />
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;
