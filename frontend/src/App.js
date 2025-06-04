// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import CloudSolutions from "./pages/CloudSolutions";
import ServerlessWebDev from "./pages/ServerlessWebDev";
import LibrarySystems from "./pages/LibrarySystems";
import Cybersecurity from "./pages/CyberSecurity";
import BusinessAutomation from "./pages/BusinessAutomation";
import Pricing from "./pages/Pricing";
import CaseStudies from "./pages/CaseStudies";
import CaseStudy1 from "./pages/blog-posts/CaseStudy1";
import CaseStudy2 from "./pages/blog-posts/CaseStudy2";
import CaseStudy3 from "./pages/blog-posts/CaseStudy3";
import Blog from "./pages/Blog";
import AwsMigrationGuide from "./pages/blog-posts/AwsMigrationGuide";
import ServerlessAfrica from "./pages/blog-posts/ServerlessAfrica";
import LibraryDigitization from "./pages/blog-posts/LibraryDigitization";
import CybersecurityNigeria from "./pages/blog-posts/CybersecurityNigeria";
import DigitalTransformationTrends from "./pages/blog-posts/DigitalTransformationTrends";
import CloudVsOnPremise from "./pages/blog-posts/CloudVsOnPremise";
import FutureOfLibraries from "./pages/blog-posts/FutureOfLibraries";
import ScalableApplications from "./pages/blog-posts/ScalableApplications";
import Faq from "./pages/FAQ";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound"; // Optional 404 page

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />

        {/* Service Detail Pages */}
        <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
        <Route
          path="/services/serverless-web-development"
          element={<ServerlessWebDev />}
        />
        <Route path="/services/library-systems" element={<LibrarySystems />} />
        <Route path="/services/cybersecurity" element={<Cybersecurity />} />
        <Route
          path="/services/business-automation"
          element={<BusinessAutomation />}
        />

        {/* Pricing Page */}
        <Route path="/pricing" element={<Pricing />} />

        {/* Blog & Articles */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/aws-migration" element={<AwsMigrationGuide />} />
        <Route path="/blog/serverless-africa" element={<ServerlessAfrica />} />
        <Route
          path="/blog/library-digitization"
          element={<LibraryDigitization />}
        />
        <Route
          path="/blog/cybersecurity-nigeria"
          element={<CybersecurityNigeria />}
        />
        <Route
          path="/blog/digital-trends"
          element={<DigitalTransformationTrends />}
        />
        <Route path="/blog/cloud-vs-onpremise" element={<CloudVsOnPremise />} />
        <Route
          path="/blog/future-of-libraries"
          element={<FutureOfLibraries />}
        />
        <Route
          path="/blog/scalable-applications"
          element={<ScalableApplications />}
        />

        {/* Case Studies */}
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route
          path="/case-studies/university-library"
          element={<CaseStudy1 />}
        />
        <Route
          path="/case-studies/ecommerce-platform"
          element={<CaseStudy2 />}
        />
        <Route path="/case-studies/banking-sector" element={<CaseStudy3 />} />

        {/* Additional Pages */}
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />

        {/* 404 - Not Found (Optional) */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}
