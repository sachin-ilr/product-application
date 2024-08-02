import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const About = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        Welcome to our online store. We offer a wide variety of products to suit your needs.
        Our mission is to provide high-quality products at affordable prices.
      </Typography>
    </Box>
  );
};

export default About;
