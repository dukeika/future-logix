import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
  Grid,
  useTheme, // Hook to access the theme
} from "@mui/material";
import { Link } from "react-router-dom";

// Icons for impact
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import InsightsIcon from "@mui/icons-material/Insights";

export default function CaseStudies() {
  const theme = useTheme(); // Access the theme to use its colors

  const caseStudies = [
    {
      title: "Digital Transformation for Major University Library",
      client: "University of Lagos Library",
      industry: "Education",
      challenge:
        "Outdated legacy system, inefficient record management, poor user experience for students and faculty.",
      solution:
        "Implemented and customized Koha ILS, migrated over 500,000 physical and digital records, integrated DSpace for digital archives, and provided extensive staff training.",
      results: [
        "**70% reduction** in manual processing time for new acquisitions and cataloging.",
        "**Improved user experience** with a modern, intuitive online catalog, leading to a 40% increase in digital resource usage.",
        "Seamless integration of physical and digital collections, enhancing information accessibility.",
      ],
      image: "/images/case-study-library-transformation.jpg", // Placeholder image: modern library or digital interface
      link: "/case-studies/uni-library-transformation", // Link to a dedicated detail page for this case study
    },
    {
      title: "Scalable E-commerce Platform Migration to AWS",
      client: "AfricaMart (Leading Online Retailer)",
      industry: "E-commerce",
      challenge:
        "Frequent downtime, slow loading speeds during peak seasons, and high infrastructure costs on on-premise servers.",
      solution:
        "Executed a phased migration of the entire e-commerce platform to AWS, leveraging EC2, S3, RDS, and CloudFront. Implemented auto-scaling groups and load balancing for high availability.",
      results: [
        "**99.99% uptime** achieved during major sales events (e.g., Black Friday), with zero incidents of downtime.",
        "**35% reduction** in IT operational costs due to optimized cloud resource utilization.",
        "Page load times reduced by **over 50%**, significantly improving customer experience and conversion rates.",
      ],
      image: "/images/case-study-ecommerce-aws.jpg", // Placeholder image: charts showing performance increase or a modern e-commerce site
      link: "/case-studies/ecommerce-aws-migration",
    },
    {
      title: "Enhanced Cybersecurity for a Tier-1 Bank",
      client: "ZenithTrust Bank Plc",
      industry: "Financial Services",
      challenge:
        "Increasing cyber threats, complex compliance requirements, and vulnerability gaps in existing security infrastructure.",
      solution:
        "Conducted a comprehensive cybersecurity audit, implemented advanced threat detection systems, strengthened network perimeter defenses, deployed multi-factor authentication, and provided continuous security monitoring services.",
      results: [
        "**Zero reported security breaches** post-implementation, enhancing client trust and data integrity.",
        "Achieved full compliance with **NDPR and CBN cybersecurity directives**.",
        "Proactive threat intelligence and rapid incident response capabilities significantly improved.",
      ],
      image: "/images/case-study-banking-security.jpg", // Placeholder image: cybersecurity dashboard or secure data center concept
      link: "/case-studies/banking-security-upgrade",
    },
    {
      title: "Custom CRM Development for Logistics Provider",
      client: "SwiftDeliver Logistics",
      industry: "Logistics & Supply Chain",
      challenge:
        "Disjointed customer data, manual order processing, and lack of real-time visibility into operations.",
      solution:
        "Developed a bespoke CRM system integrated with existing tracking and inventory platforms. Features included automated lead nurturing, dynamic order management, and comprehensive analytics dashboards.",
      results: [
        "**25% increase** in sales team productivity due to centralized customer information and automated tasks.",
        "**Reduced order processing errors by 40%**, improving delivery accuracy and customer satisfaction.",
        "Real-time operational insights enabled better resource allocation and faster decision-making.",
      ],
      image: "/images/case-study-logistics-crm.jpg", // Placeholder image: logistics dashboard or a warehouse operation
      link: "/case-studies/logistics-crm-development",
    },
  ];

  return (
    <Box sx={{ bgcolor: theme.palette.background.default }}>
      {/* 1. Case Studies Hero Section */}
      <Box
        sx={{
          py: { xs: 10, md: 15 },
          bgcolor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
          background: `linear-gradient(45deg, ${theme.palette.primary.dark} 30%, ${theme.palette.primary.main} 90%)`,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "url(/images/case-studies-hero-pattern.png) repeat", // Placeholder for a subtle background pattern
            opacity: 0.1,
            zIndex: 0,
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700 }}
          >
            Our Success Stories
          </Typography>
          <Typography variant="h5" paragraph sx={{ opacity: 0.9 }}>
            See how FutureLogix empowers businesses across Africa to achieve
            their digital ambitions.
          </Typography>
        </Container>
      </Box>

      {/* 2. Introduction to Case Studies */}
      <Box
        sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.background.paper }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600, color: theme.palette.primary.main }}
          >
            Driving Real-World Impact
          </Typography>
          <Typography variant="h6" paragraph color="text.secondary">
            At FutureLogix, we're not just about technology; we're about
            delivering tangible results and creating lasting value for our
            clients. Explore our case studies to understand the challenges our
            clients faced, the innovative solutions we provided, and the
            measurable outcomes we achieved together.
          </Typography>
        </Container>
      </Box>

      {/* 3. Grid of Case Study Cards */}
      <Box sx={{ py: { xs: 8, md: 12 }, bgcolor: theme.palette.grey[100] }}>
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center">
            {caseStudies.map((cs, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Card
                  elevation={4}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: theme.shadows[8],
                    },
                  }}
                >
                  <Box
                    component="img"
                    src={cs.image}
                    alt={cs.title}
                    sx={{
                      width: "100%",
                      height: 250,
                      objectFit: "cover",
                      borderTopLeftRadius: theme.shape.borderRadius,
                      borderTopRightRadius: theme.shape.borderRadius,
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: { xs: 3, md: 4 } }}>
                    <Typography
                      variant="overline"
                      color="text.secondary"
                      sx={{ mb: 1, display: "block" }}
                    >
                      Client: {cs.client} | Industry: {cs.industry}
                    </Typography>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                      }}
                    >
                      {cs.title}
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      color="text.secondary"
                    >
                      **Challenge:** {cs.challenge}
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      color="text.secondary"
                    >
                      **Solution:** {cs.solution}
                    </Typography>

                    <Box sx={{ mt: 2, mb: 3 }}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: 600,
                          color: theme.palette.secondary.main,
                          mb: 1,
                        }}
                      >
                        Key Results:
                      </Typography>
                      <Box component="ul" sx={{ pl: 2, listStyle: "none" }}>
                        {cs.results.map((result, idx) => (
                          <Typography
                            key={idx}
                            variant="body2"
                            color="text.primary"
                            component="li"
                            sx={{
                              mb: 0.5,
                              display: "flex",
                              alignItems: "flex-start",
                              "&::before": {
                                content: '""',
                                display: "inline-block",
                                width: "8px",
                                height: "8px",
                                borderRadius: "50%",
                                bgcolor: theme.palette.secondary.main,
                                mr: 1,
                                mt: "0.5em", // Align bullet vertically
                                flexShrink: 0,
                              },
                            }}
                          >
                            {/* Using dangerouslySetInnerHTML for bolding if results array has bolded text */}
                            <span
                              dangerouslySetInnerHTML={{ __html: result }}
                            />
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                    <Button
                      variant="contained"
                      color="primary"
                      component={Link}
                      to={cs.link}
                      endIcon={<ArrowForwardIcon />}
                      sx={{ mt: 2, px: 3, py: 1, fontWeight: 600 }}
                    >
                      Read Full Story
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* 4. See How We Can Help You Too (Final CTA) */}
      <Box
        sx={{
          py: { xs: 8, md: 12 },
          bgcolor: theme.palette.primary.dark,
          color: theme.palette.primary.contrastText,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ fontWeight: 600 }}
          >
            Ready to Create Your Own Success Story?
          </Typography>
          <Typography
            variant="h6"
            paragraph
            sx={{ mb: { xs: 4, md: 6 }, opacity: 0.9 }}
          >
            Your business challenges deserve expert solutions. Let's discuss how
            FutureLogix can help you achieve your strategic goals.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={Link}
            to="/contact"
            sx={{
              px: 5,
              py: 1.8,
              borderRadius: 3,
              fontWeight: 700,
              fontSize: "1.1rem",
            }}
          >
            Schedule a Free Consultation
          </Button>
        </Container>
      </Box>
    </Box>
  );
}
