"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./CarouselComponent.css";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";
// image
import babyOne from "@/assets/baby-pic.jpg";
import babyTwo from "@/assets/baby-pic-2.jpg";

// import required modules
import { Pagination as SwiperPagination, Navigation } from "swiper/modules";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
const CarouselComponent = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
          },
          // when window width is >= 1280px
          1280: {
            slidesPerView: 3,
          },
        }}
      >
        <SwiperSlide>
          <Box sx={{ position: "relative" }}>
            <Image
              src={babyOne}
              width={500}
              height={400}
              alt="baby image one"
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
            <Box
              component="span"
              bgcolor="#3D3D3D"
              sx={{
                padding: "4px 10px",
                borderRadius: "10px",
                color: "white",
                position: "absolute",
                top: 18,
                left: 18,
              }}
            >
              -13%
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ position: "relative" }}>
            <Image
              src={babyOne}
              width={500}
              height={400}
              alt="baby image one"
              className="mb-2 rounded-xl"
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
            <Box
              component="span"
              bgcolor="#3D3D3D"
              sx={{
                padding: "4px 10px",
                borderRadius: "10px",
                color: "white",
                position: "absolute",
                top: 18,
                left: 18,
              }}
            >
              -13%
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ position: "relative" }}>
            <Image
              src={babyOne}
              width={500}
              height={400}
              alt="baby image one"
              className="mb-2 rounded-xl"
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
            <Box
              component="span"
              bgcolor="#3D3D3D"
              sx={{
                padding: "4px 10px",
                borderRadius: "10px",
                color: "white",
                position: "absolute",
                top: 18,
                left: 18,
              }}
            >
              -13%
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{ position: "relative" }}>
            <Image
              src={babyOne}
              width={500}
              height={400}
              alt="baby image one"
              className="mb-2 rounded-xl"
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
            <Box
              component="span"
              bgcolor="#3D3D3D"
              sx={{
                padding: "4px 10px",
                borderRadius: "10px",
                color: "white",
                position: "absolute",
                top: 18,
                left: 18,
              }}
            >
              -13%
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Box sx={{ position: "relative" }}>
            <Image
              src={babyOne}
              width={500}
              height={400}
              alt="baby image one"
              className="mb-2 rounded-xl"
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
            <Box
              component="span"
              bgcolor="#3D3D3D"
              sx={{
                padding: "4px 10px",
                borderRadius: "10px",
                color: "white",
                position: "absolute",
                top: 18,
                left: 18,
              }}
            >
              -13%
            </Box>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Box sx={{ position: "relative" }}>
            <Image
              src={babyOne}
              width={500}
              height={400}
              alt="baby image one"
              className="mb-2 rounded-xl"
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
            <Box
              component="span"
              bgcolor="#3D3D3D"
              sx={{
                padding: "4px 10px",
                borderRadius: "10px",
                color: "white",
                position: "absolute",
                top: 18,
                left: 18,
              }}
            >
              -13%
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default CarouselComponent;
