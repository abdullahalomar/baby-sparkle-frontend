import { Box, Container, Typography } from "@mui/material";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import CarouselComponent from "@/utils/CarouselComponent/CarouselComponent";

const HeroSection = () => {
  return (
    <Box bgcolor="#DFF5FF">
      <Container className="py-10 ">
        <Box sx={{ p: 2, textAlign: "center" }}>
          <Typography component="h3" variant="h3" sx={{ fontWeight: "bold" }}>
            Your Ultimate Destination for Quality <br /> Baby Products and
            Expert Advice.
          </Typography>
          <Typography
            component="h1"
            variant="h6"
            my={4}
            className="text-slate-600"
          >
            Embrace the magic of parenthood with our carefully selected range of
            baby care products. Our sanctuary is filled with love, warmth, and
            everything you need to create cherished memories from day one.
          </Typography>
        </Box>

        <Box>
          <CarouselComponent />
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
