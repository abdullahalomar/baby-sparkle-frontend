import { Box, Container, Grid, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const TrendingProducts = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/products`, {
    next: {
      revalidate: 30,
    },
  });
  const products = await res.json();
  // console.log(products);

  const sortedProducts = [...products?.data].sort(
    (product1, product2) => product2.rating - product1.rating
  );
  return (
    <Container className="mb-28">
      <Box
        sx={{
          display: {
            xs: "flex-wrap",
            sm: "flex-wrap",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            marginBottom: {
              xs: "20px",
              sm: "20px",
              md: "0px",
              lg: "0px",
              xl: "0px",
            },
          }}
        >
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "36px",
              color: "#3D3D3D",
              marginBottom: "15px",
            }}
          >
            Trending Products
          </Typography>
          <Typography
            component="h1"
            variant="h6"
            className="text-slate-600 max-w-[650px]"
          >
            Pamper your baby with our gentle bath products, skincare essentials,
            and health care items to keep them clean, happy, and healthy.
          </Typography>
        </Box>
        <Typography
          component={Link}
          href="/trending-products"
          bgcolor="#282828"
          sx={{
            color: "white",
            py: "16px",
            px: "24px",
            borderRadius: "64px",
          }}
        >
          View All <ChevronRightIcon fontSize="medium" />
        </Typography>
      </Box>
      <Grid container spacing={5} mt={2}>
        {sortedProducts.slice(0, 6).map((product: Product) => (
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
              <Box sx={{}}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography component="h6" variant="h6">
                    {product.title}
                  </Typography>
                  <Link href={`/products/${product._id}`}>
                    <RemoveRedEyeIcon htmlColor="black" />
                  </Link>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Box sx={{ display: "flex", gap: "7px" }}>
                    <Typography variant="body1" component="del">
                      $230
                    </Typography>
                    <Typography>{product.price}</Typography>
                  </Box>
                  <Typography className="">{product.rating}</Typography>
                </Box>
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
    </Container>
  );
};

export default TrendingProducts;
