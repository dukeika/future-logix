import "./globals.css";

export const metadata = {
  title: "Future Logix - IT Solutions & Digital Transformation",
  description: "Leading IT solutions and digital transformation consulting firm in Lagos, Nigeria. Specializing in cloud migration, cybersecurity, and business automation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}