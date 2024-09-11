import React from "react";
import { Box, Button, Typography, Container } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        // backgroundImage: 'url(https://source.unsplash.com/random/1600x900?nature)',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold" }}
        >
          Discover the Future of Sustainability
        </Typography>
        <Typography
          variant="h5"
          component="p"
          gutterBottom
          sx={{ marginBottom: 4 }}
        >
          Programming is the art and science of creating instructions that a
          computer can execute to perform specific tasks. It involves writing
          code in various programming languages, each designed for different
          purposes and with its own syntax and rules.
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ backgroundColor: "#1e88e5" }}
        >
          Get Started
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
