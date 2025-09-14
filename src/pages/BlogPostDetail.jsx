// src/pages/BlogPostDetail.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  Paper,
  CircularProgress,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function BlogPostDetail() {
  const theme = useTheme();
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL =
    "https://dtsevdpphf.execute-api.eu-west-2.amazonaws.com/dev";

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/blog/${slug}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setPost(data);
      } catch (err) {
        setError(err);
        console.error("Error fetching blog post:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug]);

  if (loading) {
    return (
      <Container sx={{ py: 8, textAlign: "center" }}>
        <CircularProgress color="primary" />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Loading article...
        </Typography>
      </Container>
    );
  }

  if (error) {
    return (
      <Container sx={{ py: 8, textAlign: "center" }}>
        <Paper
          sx={{
            p: 4,
            bgcolor: "error.light",
            color: "common.white",
            mx: "auto",
            maxWidth: 600,
          }}
        >
          <Typography variant="h5">Article Not Found</Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            {error.message}
          </Typography>
        </Paper>
      </Container>
    );
  }

  if (!post) {
    return (
      <Container sx={{ py: 8, textAlign: "center" }}>
        <Typography variant="h6" color="error">
          No blog post found with that slug.
        </Typography>
      </Container>
    );
  }

  return (
    <Box
      sx={{ py: { xs: 6, md: 10 }, bgcolor: theme.palette.background.paper }}
    >
      <Container maxWidth="md">
        <Paper
          sx={{
            p: { xs: 3, md: 6 },
            borderRadius: 3,
            mb: 6,
          }}
        >
          {/* Title */}
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            sx={{ fontWeight: 700, color: theme.palette.primary.main }}
          >
            {post.title}
          </Typography>

          {/* Excerpt */}
          {post.excerpt && (
            <Typography
              variant="h6"
              color="text.secondary"
              gutterBottom
              sx={{ mb: 4, fontStyle: "italic" }}
            >
              {post.excerpt}
            </Typography>
          )}

          {/* Content */}
          <Box
            dangerouslySetInnerHTML={{ __html: post.content }}
            sx={{
              "& h1, & h2, & h3": {
                fontWeight: 600,
                mt: 3,
              },
              "& p": {
                mb: 2,
              },
              "& img": {
                maxWidth: "100%",
                borderRadius: 2,
                my: 2,
              },
            }}
          />
        </Paper>
      </Container>
    </Box>
  );
}

// // src/pages/BlogPostDetail.jsx
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import {
//   Container,
//   Typography,
//   Box,
//   CircularProgress,
//   Paper,
// } from "@mui/material";
// import { useTheme } from "@mui/material";

// const API_BASE_URL =
//   "https://dtsevdpphf.execute-api.eu-west-2.amazonaws.com/dev"; // Make sure this is correct // Replace with your actual API Gateway endpoint for blog posts

// export default function BlogPostDetail() {
//   const theme = useTheme();
//   const { slug } = useParams(); // Get the slug from the URL
//   const [post, setPost] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchBlogPost = async () => {
//       try {
//         const response = await fetch(`${API_BASE_URL}/blog/${slug}`); // Adjust path if necessary
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         setPost(data);
//       } catch (err) {
//         setError(err);
//         console.error("Failed to fetch blog post:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     if (slug) {
//       fetchBlogPost();
//     }
//   }, [slug]);

//   if (loading) {
//     return (
//       <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
//         <CircularProgress color="primary" />
//         <Typography variant="h6" sx={{ mt: 2 }}>
//           Loading blog post...
//         </Typography>
//       </Container>
//     );
//   }

//   if (error) {
//     return (
//       <Container
//         maxWidth="md"
//         sx={{ py: 8, textAlign: "center", color: "error.main" }}
//       >
//         <Typography variant="h5">Error loading blog post.</Typography>
//         <Typography variant="body1">{error.message}</Typography>
//       </Container>
//     );
//   }

//   if (!post) {
//     return (
//       <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
//         <Typography variant="h5">Blog post not found.</Typography>
//       </Container>
//     );
//   }

//   return (
//     <Container maxWidth="md" sx={{ py: { xs: 6, md: 10 } }}>
//       <Paper elevation={3} sx={{ p: { xs: 3, md: 5 }, borderRadius: 2 }}>
//         {post.image_url && (
//           <Box
//             component="img"
//             src={post.image_url}
//             alt={post.title}
//             sx={{
//               width: "100%",
//               maxHeight: 400,
//               objectFit: "cover",
//               borderRadius: 1,
//               mb: 4,
//             }}
//           />
//         )}
//         <Typography
//           variant="h4"
//           component="h1"
//           gutterBottom
//           sx={{ fontWeight: 700, color: theme.palette.primary.main }}
//         >
//           {post.title}
//         </Typography>
//         <Typography
//           variant="subtitle1"
//           color="text.secondary"
//           gutterBottom
//           sx={{ mb: 3 }}
//         >
//           By {post.author} on{" "}
//           {new Date(post.published_date).toLocaleDateString()}
//         </Typography>
//         <Typography
//           variant="body1"
//           component="div"
//           sx={{ lineHeight: 1.8, color: theme.palette.text.primary }}
//         >
//           {/* Render content, consider a markdown renderer if content is markdown */}
//           {post.content.split("\n").map((paragraph, index) => (
//             <p key={index}>{paragraph}</p>
//           ))}
//         </Typography>
//       </Paper>
//     </Container>
//   );
// }
