/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Container,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LoupeIcon from "@mui/icons-material/Loupe";
import Image from "next/image";
import Link from "next/link";

const page = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/products`, {
    cache: "no-store",
    // next: {
    //   revalidate: 30,
    // },
  });
  const products = await res.json();
  // console.log(products);
  return (
    <Container className="mb-24">
      <Box mt={5} mb={7}>
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "36px",
            color: "#3D3D3D",
          }}
        >
          Products
        </Typography>
        <Typography>
          Shop now and make the most of our Flash Sale extravaganza – because
          when it comes to your little one's happiness and comfort, every saving
          counts!
        </Typography>
      </Box>
      <Grid container spacing={5}>
        {products?.data?.map((product: any) => (
          <Grid
            key={product._id}
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            xl={3}
            sx={{
              maxWidth: "320px",
              marginLeft: {
                xs: "40px",
                sm: "0px",
                md: "0px",
                lg: "0px",
                xl: "0px",
              },
              marginRight: {
                xs: "40px",
                sm: "0px",
                md: "0px",
                lg: "0px",
                xl: "0px",
              },
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Image
                src={product.image_url}
                width={400}
                height={500}
                alt="baby image one"
                className="rounded-xl mb-2 h-[370px]"
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Box>
                  <Typography component="h6" variant="h6">
                    {product.title}
                  </Typography>
                  <Box sx={{ display: "flex", gap: "7px" }}>
                    <Typography variant="body1" component="del">
                      $230
                    </Typography>
                    <Typography>{product.price}</Typography>
                  </Box>
                </Box>

                <Link href={`/products/${products.id}`}>
                  <LoupeIcon htmlColor="black" />
                </Link>
              </Box>
              <Box
                component="span"
                bgcolor="#3D3D3D"
                sx={{
                  padding: "6px 12px",
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
          </Grid>
        ))}
      </Grid>
      <Box mt={15} mx="auto" sx={{ maxWidth: "400px" }}>
        <LinearProgress />
      </Box>
      <Box mt={5} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography
          component={Link}
          href="#"
          bgcolor="#282828"
          sx={{
            color: "white",
            py: "16px",
            px: "24px",
            borderRadius: "64px",
          }}
        >
          Load More <ChevronRightIcon fontSize="medium" />
        </Typography>
      </Box>
    </Container>
  );
};

export default page;
