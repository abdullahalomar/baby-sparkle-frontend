import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container>
        <div className="flex justify-between items-center">
          <Box>
            <Image src={logo} width={150} alt="baby sparkle logo" />
            <Typography sx={{ mx: 3, color: "white" }}>
              Baby Care Store
            </Typography>
          </Box>
          <Box>
            <Typography
              component="h1"
              variant="h6"
              sx={{ mx: 3, color: "white", display: "block" }}
            >
              All Section
            </Typography>
            <hr />
            <Typography
              component={Link}
              href="/register"
              sx={{ mx: 3, color: "white", display: "block" }}
            >
              Trending Products
            </Typography>
            <Typography
              component={Link}
              href="/register"
              sx={{ mx: 3, color: "white", display: "block" }}
            >
              Categories/Brands
            </Typography>
            <Typography
              component={Link}
              href="/register"
              sx={{ mx: 3, color: "white", display: "block" }}
            >
              About Us
            </Typography>
            <Typography
              component={Link}
              href="/register"
              sx={{ mx: 3, color: "white", display: "block" }}
            >
              Contact Us
            </Typography>
            <Typography
              component={Link}
              href="/register"
              sx={{ mx: 3, color: "white", display: "block" }}
            >
              Customer Care
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ color: "white", display: "block" }}>
              Follow Us
            </Typography>
            <hr />
            <Box>
              <Facebook htmlColor="white" />
              <Instagram htmlColor="white" />
              <Twitter htmlColor="white" />
            </Box>
          </Box>
        </div>
      </Container>
    </Box>
  );
};

export default Footer;
