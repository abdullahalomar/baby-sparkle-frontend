import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import logo from "@/assets/logo.png";
import Image from "next/image";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import Sponsor from "@/components/UI/HomePage/Sponsor/Sponsor";
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <>
      <Sponsor />
      <Box bgcolor="rgb(17, 26, 34)" py={5}>
        <Container>
          <Box
            sx={{
              paddingX: {
                xs: "120px",
                sm: "0px",
                md: "0px",
                lg: "0px",
                xl: "0px",
              },
              display: {
                xs: "flex-wrap",
                sm: "flex",
                md: "flex",
                lg: "flex",
                xl: "flex",
                justifyContent: "space-around",
              },
            }}
          >
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
                href="/trending-products"
                sx={{ mx: 3, color: "white", display: "block", my: "12px" }}
              >
                Trending Products
              </Typography>
              <Typography
                component={Link}
                href="/categories"
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
                href="about"
                sx={{ mx: 3, color: "white", display: "block" }}
              >
                Contact Us
              </Typography>
              <Typography
                component={Link}
                href="#"
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
          </Box>
          <Typography mt={4} sx={{ color: "white", textAlign: "center" }}>
            Copyright &copy; {year} all right reserved
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
