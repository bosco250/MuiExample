import React, { useState } from "react";
import { Box, Button, Typography, Container, IconButton } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const carouselData = [
  {
    title: "Eco-Friendly Solutions",
    description:
      "Discover our innovative solutions for a cleaner, greener planet.",
    image: "https://source.unsplash.com/random/1600x900?environment",
  },
  {
    title: "Sustainable Future",
    description:
      "Join the movement towards sustainability and a better tomorrow.",
    image: "https://source.unsplash.com/random/1600x900?sustainability",
  },
  {
    title: "Waste Management Innovation",
    description: "Revolutionizing the way we handle waste for a cleaner world.",
    image: "https://source.unsplash.com/random/1600x900?waste",
  },
];

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? carouselData.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === carouselData.length - 1 ? 0 : prev + 1));
  };

  return (
    <Box margin={5}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        height: "70vh",
        overflow: "hidden",
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        {/* Carousel Content */}
        <Box
          sx={{
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            {carouselData[activeSlide].title}
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: 3 }}>
            {carouselData[activeSlide].description}
          </Typography>
          <Button variant="contained" sx={{ backgroundColor: "#1e88e5" }}>
            Learn More
          </Button>
        </Box>

        {/* Background Image */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${carouselData[activeSlide].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(50%)",
            zIndex: 0,
          }}
        ></Box>

        {/* Navigation Buttons */}
        <IconButton
          onClick={handlePrevSlide}
          sx={{ position: "absolute", left: 20, zIndex: 2 }}
        >
          <ArrowBackIos />
        </IconButton>
        <IconButton
          onClick={handleNextSlide}
          sx={{ position: "absolute", right: 20, zIndex: 2 }}
        >
          <ArrowForwardIos />
        </IconButton>
      </Container>
    </Box>
  );
};

export default Carousel;
