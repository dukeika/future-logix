import { createTheme } from "@mui/material/styles";

const futureLogixTheme = createTheme({
  palette: {
    primary: {
      main: "#003366", // Deep Corporate Blue
      light: "#E3F2FD", // Light Blue for backgrounds
      dark: "#001A33",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#00B8D4", // Accent Teal
      light: "#E0F7FA",
      dark: "#00838F",
      contrastText: "#FFFFFF",
    },
    text: {
      primary: "#333333", // Charcoal Gray for main text
      secondary: "#555555", // Slightly lighter gray for subtext
      disabled: "#AAAAAA",
    },
    background: {
      default: "#FFFFFF",
      paper: "#FFFFFF",
    },
    grey: {
      100: "#F5F5F5",
      200: "#EEEEEE",
    },
  },
  typography: {
    fontFamily: "Montserrat, Raleway, Open Sans, Arial, sans-serif",
    h1: { fontSize: "3.5rem", fontWeight: 700 },
    h2: { fontSize: "3rem", fontWeight: 700 },
    h3: { fontSize: "2.5rem", fontWeight: 600 },
    h4: { fontSize: "2rem", fontWeight: 600 },
    h5: { fontSize: "1.5rem", fontWeight: 600 },
    h6: { fontSize: "1.25rem", fontWeight: 600 },
    body1: { fontSize: "1rem", lineHeight: 1.7 },
    body2: { fontSize: "0.875rem", lineHeight: 1.6 },
    button: { textTransform: "none", fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

export default futureLogixTheme;