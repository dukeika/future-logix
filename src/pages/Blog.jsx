import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function Blog() {
  const posts = [
    {
      title: "The Complete Guide to AWS Migration for Nigerian Businesses",
      summary:
        "A step-by-step guide to migrating your infrastructure to AWS, tailored for African companies.",
      link: "/blog/aws-migration",
    },
    {
      title: "Why Serverless Architecture is Perfect for African Startups",
      summary:
        "How serverless computing helps startups scale fast while minimizing costs.",
      link: "/blog/serverless-africa",
    },
    {
      title: "Library Digitization: Best Practices and Lessons Learned",
      summary:
        "Key insights from our library automation projects across Nigeria.",
      link: "/blog/library-digitization",
    },
    {
      title: "Cybersecurity Compliance in the Nigerian Financial Sector",
      summary:
        "Understanding regulations and how to meet them with AWS solutions.",
      link: "/blog/cybersecurity-nigeria",
    },
    {
      title: "Digital Transformation Trends in Africa 2025",
      summary:
        "What’s shaping the future of business technology on the continent.",
      link: "/blog/digital-trends",
    },
    {
      title: "Cost-Benefit Analysis: Cloud vs On-Premise Solutions",
      summary:
        "Comparing traditional IT setups with modern cloud architectures.",
      link: "/blog/cloud-vs-onpremise",
    },
  ];

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" gutterBottom>
        Latest Articles
      </Typography>

      {posts.map((post, index) => (
        <Card key={index} sx={{ mb: 3 }}>
          <CardContent>
            <Typography variant="h6">{post.title}</Typography>
            <Typography variant="body2" paragraph>
              {post.summary}
            </Typography>
            <Button
              size="small"
              color="primary"
              component={Link}
              to={post.link}
            >
              Read More
            </Button>
          </CardContent>
        </Card>
      ))}

      <Box sx={{ mt: 4 }}>
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          to="/blog/case-studies"
        >
          View Case Studies
        </Button>
      </Box>
    </Container>
  );
}
