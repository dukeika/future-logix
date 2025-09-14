import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Box,
  CircularProgress,
  useTheme,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

// API endpoint from your original file
const API_BASE_URL =
  "https://dtsevdpphf.execute-api.eu-west-2.amazonaws.com/dev";

export default function Blog() {
  const theme = useTheme();
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // This data fetching logic remains the same
  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/blog`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBlogPosts(data);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch blog posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  // Loading and Error states also remain the same
  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
        <CircularProgress color="primary" />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Loading blog posts...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container
        maxWidth="lg"
        sx={{ py: 8, textAlign: "center", color: "error.main" }}
      >
        <Typography variant="h5">Error loading blog posts.</Typography>
        <Typography variant="body1">{error.message}</Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ bgcolor: theme.palette.background.default }}>
      {/* 1. New Modern Header Section */}
      <Box
        sx={{
          bgcolor: theme.palette.grey[100],
          py: { xs: 6, md: 8 },
          textAlign: "center",
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Container maxWidth="md">
          <Typography
            variant="h2"
            component="h1"
            sx={{ fontWeight: 700, color: theme.palette.primary.main }}
          >
            FutureLogix Insights
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ mt: 2, maxWidth: "700px", mx: "auto" }}
          >
            Explore the latest in cloud technology, software development, and
            digital transformation from our team of experts.
          </Typography>
        </Container>
      </Box>

      {/* 2. Main Content Area with Search */}
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: { xs: 4, md: 6 },
          }}
        >
          <OutlinedInput
            placeholder="Search articles..."
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            }
            sx={{
              maxWidth: "500px",
              width: "100%",
              borderRadius: "50px", // Rounded search bar
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.grey[400],
              },
            }}
          />
        </Box>

        {/* 3. Redesigned Blog Grid */}
        {blogPosts.length === 0 ? (
          <Typography variant="h6" align="center" color="text.secondary">
            No blog posts found. Check back later!
          </Typography>
        ) : (
          <Grid container spacing={4}>
            {blogPosts.map((post) => (
              // Grid updated for 4 cards on large screens (12 / 3 = 4)
              <Grid item xs={12} sm={6} lg={3} key={post.id}>
                <Card
                  elevation={0}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: 3, // Softer corners
                    border: `1px solid ${theme.palette.grey[200]}`,
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      boxShadow: theme.shadows[4],
                    },
                  }}
                >
                  <CardActionArea
                    component={Link}
                    to={`/blog/${post.slug}`}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      flexGrow: 1,
                    }}
                  >
                    {post.image_url && (
                      <CardMedia
                        component="img"
                        height="160" // Reduced height for smaller card
                        image={post.image_url}
                        alt={post.title}
                        sx={{
                          transition: "transform 0.3s ease-in-out",
                          "&:hover": {
                            transform: "scale(1.05)",
                          },
                        }}
                      />
                    )}
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="h6"
                        component="h3"
                        sx={{
                          fontWeight: 600,
                          lineHeight: 1.3,
                          mb: 1,
                        }}
                      >
                        {post.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {/* A shorter snippet for the smaller card */}
                        {post.content.substring(0, 100)}...
                      </Typography>
                    </CardContent>
                    <Box
                      sx={{
                        p: 2,
                        pt: 0,
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="caption" color="text.secondary">
                        {new Date(post.published_date).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </Typography>
                    </Box>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}

// // src/pages/Blog.jsx
// import React, { useState, useEffect } from "react";
// import {
//   Container,
//   Typography,
//   Grid,
//   Card,
//   CardActionArea,
//   CardContent,
//   CardMedia,
//   Button,
//   Box,
//   CircularProgress,
// } from "@mui/material";
// import { Link } from "react-router-dom";
// import { useTheme } from "@mui/material";

// const API_BASE_URL =
//   "https://dtsevdpphf.execute-api.eu-west-2.amazonaws.com/dev"; // Make sure this is correct, Replace with your actual API Gateway endpoint for blog posts

// export default function Blog() {
//   const theme = useTheme();
//   const [blogPosts, setBlogPosts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBlogPosts = async () => {
//       try {
//         const response = await fetch(`${API_BASE_URL}/blog`); // Adjust path if necessary
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setBlogPosts(data);
//       } catch (err) {
//         setError(err);
//         console.error("Failed to fetch blog posts:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogPosts();
//   }, []);

//   if (loading) {
//     return (
//       <Container maxWidth="lg" sx={{ py: 8, textAlign: "center" }}>
//         <CircularProgress color="primary" />
//         <Typography variant="h6" sx={{ mt: 2 }}>
//           Loading blog posts...
//         </Typography>
//       </Container>
//     );
//   }

//   if (error) {
//     return (
//       <Container
//         maxWidth="lg"
//         sx={{ py: 8, textAlign: "center", color: "error.main" }}
//       >
//         <Typography variant="h5">Error loading blog posts.</Typography>
//         <Typography variant="body1">{error.message}</Typography>
//       </Container>
//     );
//   }

//   return (
//     <Box
//       sx={{ bgcolor: theme.palette.background.default, py: { xs: 8, md: 12 } }}
//     >
//       <Container maxWidth="lg">
//         <Typography
//           variant="h3"
//           component="h1"
//           align="center"
//           gutterBottom
//           sx={{ fontWeight: 700, mb: 6, color: theme.palette.primary.main }}
//         >
//           Our Latest Insights
//         </Typography>

//         {blogPosts.length === 0 ? (
//           <Typography variant="h6" align="center" color="text.secondary">
//             No blog posts found. Check back later!
//           </Typography>
//         ) : (
//           <Grid container spacing={4} justifyContent="center">
//             {blogPosts.map((post) => (
//               <Grid item xs={12} sm={6} md={4} key={post.id}>
//                 <Card
//                   elevation={2}
//                   sx={{
//                     height: "100%",
//                     display: "flex",
//                     flexDirection: "column",
//                   }}
//                 >
//                   <CardActionArea
//                     component={Link}
//                     to={`/blog/${post.slug}`}
//                     sx={{ flexGrow: 1 }}
//                   >
//                     {post.image_url && (
//                       <CardMedia
//                         component="img"
//                         height="200"
//                         image={post.image_url}
//                         alt={post.title}
//                         sx={{ objectFit: "cover" }}
//                       />
//                     )}
//                     <CardContent sx={{ p: { xs: 3, md: 4 } }}>
//                       <Typography
//                         variant="h6"
//                         component="h3"
//                         gutterBottom
//                         sx={{
//                           fontWeight: 600,
//                           color: theme.palette.primary.main,
//                         }}
//                       >
//                         {post.title}
//                       </Typography>
//                       <Typography
//                         variant="body2"
//                         color="text.secondary"
//                         sx={{ mb: 1 }}
//                       >
//                         By {post.author} on{" "}
//                         {new Date(post.published_date).toLocaleDateString()}
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary">
//                         {post.content.substring(0, 150)}...{" "}
//                         {/* Show a snippet */}
//                       </Typography>
//                     </CardContent>
//                   </CardActionArea>
//                   <Button
//                     component={Link}
//                     to={`/blog/${post.slug}`}
//                     variant="text"
//                     color="primary"
//                     sx={{
//                       alignSelf: "flex-end",
//                       mr: 2,
//                       mb: 2,
//                       fontWeight: 600,
//                     }}
//                   >
//                     Read More
//                   </Button>
//                 </Card>
//               </Grid>
//             ))}
//           </Grid>
//         )}
//       </Container>
//     </Box>
//   );
// }
