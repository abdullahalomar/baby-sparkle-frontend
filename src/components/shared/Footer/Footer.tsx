import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container>
        <div className="px-10 sm:px-20 md:flex md:justify-between lg:flex lg:justify-between">
          <Box>
            <Image src={logo} width={150} alt="baby sparkle logo" />
            <Typography sx={{ mx: 3, color: "white", mb: 3 }}>
              Baby Care Store
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{
                mx: 3,
                color: "white",
                display: "block",
                fontWeight: "bold",
              }}
            >
              All Section
            </Typography>
            <hr />
            <Typography
              component={Link}
              href="/register"
              sx={{ mx: 3, color: "white", display: "block", my: "12px" }}
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
              sx={{ mx: 3, color: "white", display: "block", my: "12px" }}
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
              sx={{ mx: 3, color: "white", display: "block", my: "12px" }}
            >
              Customer Care
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ color: "white", display: "block", fontWeight: "bold" }}
            >
              Follow Us
            </Typography>
            <hr />
            <Box mt={2}>
              <Stack direction="row" gap={2}>
                <Link href="#">
                  <Facebook htmlColor="white" />
                </Link>
                <Link href="#">
                  <Instagram htmlColor="white" />
                </Link>
                <Link href="#">
                  <Twitter htmlColor="white" />
                </Link>
              </Stack>
            </Box>
          </Box>
        </div>
      </Container>
    </Box>
  );
};

export default Footer;
