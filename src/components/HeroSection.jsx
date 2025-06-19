import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#001529", // Dark blue background
        color: "#fff",
        py: [6, 8], // Padding top/bottom
        px: [2, 4], // Padding left/right
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        backgroundImage: "linear-gradient(135deg, #001529, #6A5ACD)", // Blue and Purple Gradient
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Circular Shapes */}
      <Box
        sx={{
          position: "absolute",
          top: "-50px",
          right: 0,
          zIndex: -1,
        }}
      >
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="150" cy="150" r="150" fill="#00B74A" opacity="0.2" />
          <circle cx="250" cy="250" r="150" fill="#00B74A" opacity="0.2" />
        </svg>
      </Box>

      {/* Main Content */}
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          {/* Text Content */}
          <Typography variant="h2" gutterBottom sx={{ mb: 2 }}>
            Powering Nigeria's <span style={{ color: "#00B74A" }}>Digital</span>{" "}
            Future
          </Typography>
          <Typography variant="body1" sx={{ mb: 4 }}>
            Future Logix Limited delivers innovative cloud solutions tailored
            for Nigerian businesses.
          </Typography>
          {/* Buttons */}
          <Box sx={{ display: "flex", gap: 2 }}>
            <Button variant="contained" color="success">
              Our Services
            </Button>
            <Button variant="outlined">Request a Quote</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroSection;

// // src/components/HeroSection.jsx

// import React from "react";
// import { Box, Typography, Button, Grid, Container } from "@mui/material";

// const HeroSection = () => {
//   return (
//     <Box
//       sx={{
//         position: "relative", // Parent container needs to be relative
//         height: "90vh", // Adjust height as needed
//         width: "100%",
//         overflow: "hidden", // Hide any part of the video that overflows
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         color: "#fff",
//       }}
//     >
//       {/* Background Video */}
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline // Important for mobile devices
//         style={{
//           position: "absolute",
//           width: "100%",
//           height: "100%",
//           top: "50%",
//           left: "50%",
//           objectFit: "cover", // Ensures the video covers the area without distortion
//           transform: "translate(-50%, -50%)",
//           zIndex: -1, // Places the video behind the content
//         }}
//       >
//         {/* The video source points to the file in your `public` folder */}
//         <source src="/hero-video.mp4" type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>

//       {/* Content Overlay */}
//       {/* This dark overlay ensures the white text is always readable */}
//       <Box
//         sx={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundColor: "rgba(0, 21, 41, 0.6)", // Dark overlay with 60% opacity
//         }}
//       />

//       {/* Main Content */}
//       <Container
//         maxWidth="lg"
//         sx={{ position: "relative", zIndex: 1 }} // Ensure content is above the overlay
//       >
//         <Grid container spacing={4} alignItems="center">
//           {/* Text content positioned to the left */}
//           <Grid item xs={12} md={7}>
//             <Typography
//               variant="h2"
//               component="h1"
//               gutterBottom
//               sx={{ fontWeight: 700, mb: 2 }}
//             >
//               Powering Nigeria's{" "}
//               <span style={{ color: "#00B74A" }}>Digital</span> Future
//             </Typography>
//             <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
//               FutureLogix delivers innovative cloud solutions tailored for
//               Nigerian businesses.
//             </Typography>
//             <Box sx={{ display: "flex", gap: 2 }}>
//               <Button
//                 variant="contained"
//                 color="success"
//                 size="large"
//                 href="/services"
//               >
//                 Our Services
//               </Button>
//               <Button
//                 variant="outlined"
//                 color="inherit"
//                 size="large"
//                 href="/contact"
//               >
//                 Request a Quote
//               </Button>
//             </Box>
//           </Grid>
//           {/* The right side is intentionally left empty so the floating object is visible */}
//           <Grid item xs={12} md={5}></Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// };

// export default HeroSection;
