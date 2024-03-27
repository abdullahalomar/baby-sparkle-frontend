import CountDownTimer from "@/utils/CountDownTimer/CountDownTimer";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import LoupeIcon from "@mui/icons-material/Loupe";

const FlashSale = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/products`);
  const products = await res.json();
  console.log(products);

  return (
    <Container>
      <Box my={8}>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CountDownTimer />
        </Box>
        <Box mt={10} mb={10} sx={{}}>
          <Grid container spacing={5}>
            {products?.data?.slice(0, 4).map((product: any) => (
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
        </Box>
      </Box>
    </Container>
  );
};

export default FlashSale;
