"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./CarouselComponent.css";

// image
import babyOne from "@/assets/baby-pic.jpg";
import babyTwo from "@/assets/baby-pic-2.jpg";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
const CarouselComponent = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Box>
            <Image
              src={babyOne}
              width={500}
              height={400}
              alt="baby image one"
              className="mb-2"
            />
            <Typography component="h6" variant="h6">
              Baby Care Store
            </Typography>
            <Box sx={{ display: "flex", gap: "7px" }}>
              <Typography variant="body1" component="del">
                $230
              </Typography>
              <Typography>$200.00</Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Image
              src={babyTwo}
              width={500}
              height={400}
              alt="baby image two"
              className="mb-2"
            />
            <Typography component="h6" variant="h6">
              Baby Care Store
            </Typography>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <Typography variant="body1" component="del">
                $230
              </Typography>
              <Typography>$200.00</Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Image
              src={babyOne}
              width={500}
              height={400}
              alt="baby image three"
              className="mb-2"
            />
            <Typography component="h6" variant="h6">
              Baby Care Store
            </Typography>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <Typography variant="body1" component="del">
                $230
              </Typography>
              <Typography>$200.00</Typography>
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <Image
              src={babyTwo}
              width={500}
              height={400}
              alt="baby image four"
              className="mb-2"
            />
            <Typography component="h6" variant="h6">
              Baby Care Store
            </Typography>
            <Box sx={{ display: "flex", gap: "5px" }}>
              <Typography variant="body1" component="del">
                $230
              </Typography>
              <Typography>$200.00</Typography>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CarouselComponent;
