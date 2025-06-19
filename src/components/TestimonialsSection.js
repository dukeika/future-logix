import React from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  useTheme,
} from "@mui/material";

export default function TestimonialsSection() {
  const theme = useTheme();

  // Sample testimonials (update these with real ones later)
  const testimonials = [
    {
      quote:
        "FutureLogix transformed our cloud infrastructure, significantly cutting costs and boosting our operational efficiency. Their team is incredibly knowledgeable and supportive.",
      client: "Uwem Ebong",
      title: "CEO",
      company: "Innovate Africa Tech",
    },
    {
      quote:
        "Implementing Koha with FutureLogix was seamless. Our library staff are now more productive, and our patrons have a much better experience. Highly recommend!",
      client: "Dr. Emeka Obi",
      title: "Library Director",
      company: "University of Lagos",
    },
    {
      quote:
        "The custom software FutureLogix developed has revolutionized our internal processes. They understood our unique needs perfectly and delivered beyond expectations.",
      client: "Sarah Kalu",
      title: "Head of Operations",
      company: "Eko Logistics",
    },
  ];

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        bgcolor: theme.palette.background.paper,
      }}
    >
      <Box sx={{ maxWidth: "lg", margin: "0 auto", px: 3 }}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          gutterBottom
          sx={{
            mb: { xs: 4, md: 6 },
            fontWeight: 600,
            color: theme.palette.primary.main,
          }}
        >
          What Our Clients Say
        </Typography>

        <Grid container spacing={4}>
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={1}
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  p: 3,
                  borderRadius: 3,
                  transition: "transform 0.3s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography
                    variant="body1"
                    fontStyle="italic"
                    sx={{
                      mb: 3,
                      color: theme.palette.text.primary,
                      fontSize: "1.1rem",
                      lineHeight: 1.7,
                    }}
                  >
                    “{testimonial.quote}”
                  </Typography>
                  <Box
                    sx={{
                      mt: "auto",
                    }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                      }}
                    >
                      — {testimonial.client}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {testimonial.title}, {testimonial.company}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
