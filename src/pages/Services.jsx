import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  Button,
} from "@mui/material";

import CloudIcon from "@mui/icons-material/Cloud";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import SecurityIcon from "@mui/icons-material/Security";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import SettingsIcon from "@mui/icons-material/Settings";

export default function Services() {
  const services = [
    {
      title: "Cloud Migration & Management",
      icon: <CloudIcon fontSize="large" color="primary" />,
      description:
        "Transform your IT infrastructure with our comprehensive cloud migration services. We specialize in AWS, Azure, and Google Cloud solutions.",
      benefits: [
        "Save up to 40% on IT costs",
        "Instant scalability",
        "99.99% uptime guarantee",
        "Enterprise-grade security",
        "Flexible, usage-based pricing",
      ],
      link: "/services/cloud-solutions",
    },
    {
      title: "Serverless Web Application Development",
      icon: <LightbulbIcon fontSize="large" color="primary" />,
      description:
        "Build scalable, cost-effective applications that grow with your business. Our stack includes React.js, Next.js, AWS Lambda, and more.",
      benefits: [
        "Auto-scaling for traffic spikes",
        "Pay-per-use model",
        "Built-in redundancy",
        "Global CDN for fast performance",
        "Enterprise-grade security",
      ],
      link: "/services/serverless-development",
    },
    {
      title: "Library Management Systems",
      icon: <LibraryBooksIcon fontSize="large" color="primary" />,
      description:
        "Modernize your library operations with tailored Koha and DSpace implementations — fully customized to your collection size and user needs.",
      benefits: [
        "Automated cataloging processes",
        "Digital resource access",
        "User management tools",
        "Custom reporting",
        "Training included",
      ],
      link: "/services/library-systems",
    },
    {
      title: "Cybersecurity & Compliance",
      icon: <SecurityIcon fontSize="large" color="primary" />,
      description:
        "Protect your valuable assets with comprehensive security strategies and compliance frameworks including ISO27001, GDPR, and PCI-DSS.",
      benefits: [
        "Vulnerability assessments",
        "Penetration testing",
        "Compliance planning",
        "Firewall configuration",
        "Ongoing monitoring",
      ],
      link: "/services/cybersecurity",
    },
    {
      title: "Business Process Automation",
      icon: <SettingsIcon fontSize="large" color="primary" />,
      description:
        "Streamline your operations with Zoho One integration and custom automation workflows.",
      benefits: [
        "45% productivity increase",
        "60% cost reduction",
        "Single source of truth",
        "Mobile accessibility",
        "Workflow automation",
      ],
      link: "/services/business-automation",
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Our Services
      </Typography>
      <Typography variant="h6" align="center" paragraph color="textSecondary">
        Comprehensive technology transformation services tailored for African
        businesses.
      </Typography>

      {services.map((service, index) => (
        <Card key={index} sx={{ mb: 4, boxShadow: 3 }}>
          <CardContent>
            <Box sx={{ textAlign: "center", mb: 2 }}>{service.icon}</Box>
            <Typography variant="h5" align="center" gutterBottom>
              {service.title}
            </Typography>
            <Typography variant="body1" paragraph>
              {service.description}
            </Typography>

            <Typography variant="subtitle1" gutterBottom>
              Key Benefits:
            </Typography>
            <ul>
              {service.benefits.map((benefit, i) => (
                <li key={i}>
                  <Typography>{benefit}</Typography>
                </li>
              ))}
            </ul>

            <Box sx={{ mt: 2, textAlign: "center" }}>
              <Button variant="contained" color="primary" href={service.link}>
                Learn More About {service.title}
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}

      <Box sx={{ mt: 5, textAlign: "center" }}>
        <Typography variant="h6" gutterBottom>
          Ready to get started?
        </Typography>
        <Button variant="contained" color="primary" href="/contact">
          Request a Free Consultation
        </Button>
      </Box>
    </Container>
  );
}

// import React from "react";
// import {
//   Container,
//   Typography,
//   Box,
//   Grid,
//   Card,
//   CardContent,
//   Button,
//   useTheme, // Hook to access the theme
// } from "@mui/material";
// import { Link } from "react-router-dom";

// // Importing specific icons for each service category
// import CloudQueueIcon from "@mui/icons-material/CloudQueue";
// import CodeIcon from "@mui/icons-material/Code"; // For Development Services
// import StorageIcon from "@mui/icons-material/Storage"; // For Library Management
// import SecurityIcon from "@mui/icons-material/Security"; // For Security & Compliance
// import TrendingUpIcon from "@mui/icons-material/TrendingUp"; // For Business Automation/Consulting

// export default function Services() {
//   const theme = useTheme(); // Access the theme to use its colors

//   const serviceCategories = [
//     {
//       title: "Cloud Solutions & AWS Services",
//       icon: (
//         <CloudQueueIcon
//           sx={{ fontSize: 60, color: theme.palette.secondary.main }}
//         />
//       ),
//       description:
//         "Harness the power of scalable, secure, and cost-efficient cloud infrastructure. We specialize in AWS cloud migration, optimization, management, and cloud-native application development, enabling your business to achieve unprecedented agility and innovation.",
//       link: "/services/cloud-solutions",
//       details: [
//         "AWS Cloud Migration & Infrastructure Setup",
//         "Cloud Cost Optimization & Management",
//         "Serverless Computing & Containerization",
//         "Disaster Recovery & Business Continuity in Cloud",
//       ],
//       image: "/images/services-cloud.jpg", // Placeholder image
//     },
//     {
//       title: "Development Services",
//       icon: (
//         <CodeIcon sx={{ fontSize: 60, color: theme.palette.secondary.main }} />
//       ),
//       description:
//         "Build robust, scalable, and intuitive digital products tailored to your unique business needs. Our full-stack development team crafts bespoke web and mobile applications that drive efficiency and enhance user experience.",
//       link: "/services/development-services",
//       details: [
//         "Custom Web & Mobile Application Development",
//         "Enterprise Software Solutions",
//         "UI/UX Design & Prototyping",
//         "API Development & Integration",
//       ],
//       image: "/images/services-development.jpg", // Placeholder image
//     },
//     {
//       title: "Library Management Systems (LMS)",
//       icon: (
//         <StorageIcon
//           sx={{ fontSize: 60, color: theme.palette.secondary.main }}
//         />
//       ),
//       description:
//         "Modernize your library operations with cutting-edge open-source solutions. We provide end-to-end implementation, customization, and support for Koha, DSpace, and other intelligent library systems, enhancing access and resource management.",
//       link: "/services/library-management-systems",
//       details: [
//         "Koha ILS Implementation & Customization",
//         "DSpace Repository Setup & Management",
//         "Library Automation & Digitalization",
//         "Training & Ongoing Technical Support",
//       ],
//       image: "/images/services-library.jpg", // Placeholder image
//     },
//     {
//       title: "Security & Compliance",
//       icon: (
//         <SecurityIcon
//           sx={{ fontSize: 60, color: theme.palette.secondary.main }}
//         />
//       ),
//       description:
//         "Protect your valuable digital assets and sensitive data from evolving threats. Our comprehensive cybersecurity services include threat assessment, compliance adherence, and robust security solutions to ensure your business is resilient.",
//       link: "/services/security-compliance",
//       details: [
//         "Cybersecurity Audits & Risk Assessments",
//         "Data Protection & Privacy Compliance (GDPR, NDPR)",
//         "Network Security & Endpoint Protection",
//         "Security Awareness Training",
//       ],
//       image: "/images/services-security.jpg", // Placeholder image
//     },
//     {
//       title: "Business Process Automation & Consulting",
//       icon: (
//         <TrendingUpIcon
//           sx={{ fontSize: 60, color: theme.palette.secondary.main }}
//         />
//       ),
//       description:
//         "Streamline your operations, reduce manual effort, and improve efficiency with intelligent automation solutions. We analyze your workflows and implement tailored strategies to optimize your business processes, including Zoho One integrations.",
//       link: "/services/automation-consulting",
//       details: [
//         "Business Process Mapping & Optimization",
//         "Workflow Automation & Integration (e.g., Zoho One)",
//         "Digital Transformation Strategy",
//         "IT Consulting & Advisory",
//       ],
//       image: "/images/services-automation.jpg", // Placeholder image
//     },
//   ];

//   return (
//     <Box sx={{ bgcolor: theme.palette.background.default }}>
//       {/* 1. Services Hero Section */}
//       <Box
//         sx={{
//           py: { xs: 10, md: 15 },
//           bgcolor: theme.palette.primary.main,
//           color: theme.palette.primary.contrastText,
//           textAlign: "center",
//           position: "relative",
//           overflow: "hidden",
//           background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.primary.main} 90%)`,
//           "&::before": {
//             content: '""',
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             background: "url(/images/services-hero-pattern.png) repeat", // Placeholder for a subtle background pattern
//             opacity: 0.1,
//             zIndex: 0,
//           },
//         }}
//       >
//         <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
//           <Typography
//             variant="h2"
//             component="h1"
//             gutterBottom
//             sx={{ fontWeight: 700 }}
//           >
//             Our Solutions & Services
//           </Typography>
//           <Typography variant="h5" paragraph sx={{ opacity: 0.9 }}>
//             Empowering your business with cutting-edge technology and strategic
//             expertise.
//           </Typography>
//         </Container>
//       </Box>

//       {/* 2. Service Categories Overview */}
//       <Box
//         sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.background.paper }}
//       >
//         <Container maxWidth="lg">
//           <Typography
//             variant="h4"
//             component="h2"
//             align="center"
//             gutterBottom
//             sx={{
//               mb: { xs: 4, md: 8 },
//               fontWeight: 600,
//               color: theme.palette.primary.main,
//             }}
//           >
//             Unlock Your Business Potential with FutureLogix
//           </Typography>

//           <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center">
//             {serviceCategories.map((category, index) => (
//               <Grid item xs={12} md={6} key={index}>
//                 <Card
//                   elevation={4}
//                   sx={{
//                     height: "100%",
//                     display: "flex",
//                     flexDirection: { xs: "column", sm: "row" },
//                     alignItems: "center",
//                     p: { xs: 2, md: 4 },
//                     transition:
//                       "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
//                     "&:hover": {
//                       transform: "translateY(-5px)",
//                       boxShadow: theme.shadows[8],
//                     },
//                   }}
//                 >
//                   <Box
//                     sx={{
//                       flexShrink: 0,
//                       mr: { xs: 0, sm: 3 },
//                       mb: { xs: 2, sm: 0 },
//                       textAlign: "center",
//                     }}
//                   >
//                     {category.icon}
//                   </Box>
//                   <CardContent
//                     sx={{ flexGrow: 1, p: 0, "&:last-child": { pb: 0 } }}
//                   >
//                     <Typography
//                       variant="h5"
//                       component="h3"
//                       gutterBottom
//                       sx={{
//                         fontWeight: 600,
//                         color: theme.palette.primary.main,
//                       }}
//                     >
//                       {category.title}
//                     </Typography>
//                     <Typography
//                       variant="body1"
//                       paragraph
//                       color="text.secondary"
//                     >
//                       {category.description}
//                     </Typography>
//                     <Button
//                       variant="outlined"
//                       color="primary"
//                       component={Link}
//                       to={category.link}
//                       sx={{ mt: 1, fontWeight: 600 }}
//                     >
//                       Learn More
//                     </Button>
//                   </CardContent>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         </Container>
//       </Box>

//       {/* 3. Detailed Service Offerings (Example for one category) */}
//       <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.grey[100] }}>
//         <Container maxWidth="lg">
//           <Typography
//             variant="h4"
//             component="h2"
//             align="center"
//             gutterBottom
//             sx={{
//               mb: { xs: 4, md: 8 },
//               fontWeight: 600,
//               color: theme.palette.primary.main,
//             }}
//           >
//             A Deeper Dive Into Our Cloud Solutions
//           </Typography>
//           <Grid container spacing={6} alignItems="center">
//             <Grid item xs={12} md={6}>
//               <Box
//                 component="img"
//                 src={serviceCategories[0].image} // Using the image from the first service category
//                 alt={serviceCategories[0].title}
//                 sx={{
//                   width: "100%",
//                   height: "auto",
//                   borderRadius: 2,
//                   boxShadow: theme.shadows[6],
//                 }}
//               />
//             </Grid>
//             <Grid item xs={12} md={6}>
//               <Typography
//                 variant="h5"
//                 component="h3"
//                 gutterBottom
//                 sx={{ fontWeight: 600, color: theme.palette.primary.main }}
//               >
//                 Comprehensive Cloud Strategies for Your Business
//               </Typography>
//               <Typography variant="body1" paragraph color="text.secondary">
//                 Our Cloud Solutions are designed to accelerate your digital
//                 transformation, providing the agility, scalability, and security
//                 essential for modern businesses. We help you navigate the
//                 complexities of cloud adoption, ensuring a seamless transition
//                 and optimized performance.
//               </Typography>
//               <Box component="ul" sx={{ pl: 2, listStyle: "none" }}>
//                 {serviceCategories[0].details.map((detail, idx) => (
//                   <Typography
//                     key={idx}
//                     variant="body1"
//                     color="text.secondary"
//                     component="li"
//                     sx={{
//                       mb: 1,
//                       "&::before": {
//                         content: '"• "',
//                         color: theme.palette.secondary.main,
//                         fontWeight: "bold",
//                       },
//                     }}
//                   >
//                     {detail}
//                   </Typography>
//                 ))}
//               </Box>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 component={Link}
//                 to={serviceCategories[0].link}
//                 sx={{ mt: 3, fontWeight: 600 }}
//               >
//                 Explore Cloud Solutions
//               </Button>
//             </Grid>
//           </Grid>
//           {/* You would repeat this pattern for other key services, or link directly to sub-pages */}
//         </Container>
//       </Box>

//       {/* 4. Why Choose FutureLogix for Your Services */}
//       <Box
//         sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.background.paper }}
//       >
//         <Container maxWidth="lg">
//           <Typography
//             variant="h4"
//             component="h2"
//             align="center"
//             gutterBottom
//             sx={{
//               mb: { xs: 4, md: 8 },
//               fontWeight: 600,
//               color: theme.palette.primary.main,
//             }}
//           >
//             Why Choose FutureLogix for Your Technology Needs?
//           </Typography>

//           <Grid container spacing={4} justifyContent="center">
//             <Grid item xs={12} sm={6} md={4}>
//               <Card
//                 elevation={2}
//                 sx={{
//                   p: { xs: 3, md: 4 },
//                   textAlign: "center",
//                   height: "100%",
//                 }}
//               >
//                 <Typography
//                   variant="h6"
//                   component="h3"
//                   sx={{ fontWeight: 600, color: theme.palette.primary.main }}
//                 >
//                   African Expertise, Global Standards
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Deep understanding of local market needs combined with
//                   adherence to international best practices ensures relevant and
//                   high-quality solutions.
//                 </Typography>
//               </Card>
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//               <Card
//                 elevation={2}
//                 sx={{
//                   p: { xs: 3, md: 4 },
//                   textAlign: "center",
//                   height: "100%",
//                 }}
//               >
//                 <Typography
//                   variant="h6"
//                   component="h3"
//                   sx={{ fontWeight: 600, color: theme.palette.primary.main }}
//                 >
//                   Certified Professional Team
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   Our team comprises AWS-certified architects, experienced
//                   developers, and cybersecurity specialists dedicated to your
//                   success.
//                 </Typography>
//               </Card>
//             </Grid>
//             <Grid item xs={12} sm={6} md={4}>
//               <Card
//                 elevation={2}
//                 sx={{
//                   p: { xs: 3, md: 4 },
//                   textAlign: "center",
//                   height: "100%",
//                 }}
//               >
//                 <Typography
//                   variant="h6"
//                   component="h3"
//                   sx={{ fontWeight: 600, color: theme.palette.primary.main }}
//                 >
//                   Tailored & Scalable Solutions
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   We don't offer one-size-fits-all. We build bespoke solutions
//                   that fit your unique challenges and scale with your growth.
//                 </Typography>
//               </Card>
//             </Grid>
//           </Grid>
//         </Container>
//       </Box>

//       {/* 5. Final Call to Action */}
//       <Box
//         sx={{
//           py: { xs: 8, md: 12 },
//           bgcolor: theme.palette.primary.main,
//           color: theme.palette.primary.contrastText,
//           textAlign: "center",
//         }}
//       >
//         <Container maxWidth="md">
//           <Typography
//             variant="h4"
//             component="h2"
//             gutterBottom
//             sx={{ fontWeight: 600 }}
//           >
//             Ready to Transform Your Business with Our Solutions?
//           </Typography>
//           <Typography
//             variant="h6"
//             paragraph
//             sx={{ mb: { xs: 4, md: 6 }, opacity: 0.9 }}
//           >
//             Our team is ready to discuss your specific needs and craft a
//             technology roadmap for your success.
//           </Typography>
//           <Button
//             variant="contained"
//             color="secondary" // Use a contrasting color for the button
//             size="large"
//             component={Link}
//             to="/contact"
//             sx={{
//               px: 5,
//               py: 1.8,
//               borderRadius: 3,
//               fontWeight: 700,
//               fontSize: "1.1rem",
//             }}
//           >
//             Schedule a Free Consultation
//           </Button>
//         </Container>
//       </Box>
//     </Box>
//   );
// }
