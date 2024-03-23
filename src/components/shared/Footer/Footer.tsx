import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box bgcolor="rgb(17, 26, 34)" py={5}>
      <Container>
        <Stack direction="row" justifyContent="center" alignItems="center">
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
            About Us
          </Typography>
          <Typography
            component={Link}
            href="/register"
            sx={{ mx: 3, color: "white", display: "block" }}
          >
            Contact Us
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
