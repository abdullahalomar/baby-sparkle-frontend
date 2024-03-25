import { Box, Container, Grid, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LoupeIcon from "@mui/icons-material/Loupe";
import Image from "next/image";
import Link from "next/link";
import babyImage from "@/assets/baby-pic.jpg";
import babyImage2 from "@/assets/baby-pic-2.jpg";

const PopularProduct = () => {
  return (
    <Container className="mb-20">
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
            Most Popular Products
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
          href="#"
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
        <Grid
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
              src={babyImage}
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
                  Baby Care Store
                </Typography>
                <Box sx={{ display: "flex", gap: "7px" }}>
                  <Typography variant="body1" component="del">
                    $230
                  </Typography>
                  <Typography>$200.00</Typography>
                </Box>
              </Box>

              <button>
                <LoupeIcon htmlColor="black" />
              </button>
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
        <Grid
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
              src={babyImage2}
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
                  Baby Care Store
                </Typography>
                <Box sx={{ display: "flex", gap: "7px" }}>
                  <Typography variant="body1" component="del">
                    $230
                  </Typography>
                  <Typography>$200.00</Typography>
                </Box>
              </Box>

              <button>
                <LoupeIcon htmlColor="black" />
              </button>
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
        <Grid
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
              src={babyImage}
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
                  Baby Care Store
                </Typography>
                <Box sx={{ display: "flex", gap: "7px" }}>
                  <Typography variant="body1" component="del">
                    $230
                  </Typography>
                  <Typography>$200.00</Typography>
                </Box>
              </Box>

              <button>
                <LoupeIcon htmlColor="black" />
              </button>
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
        <Grid
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
              src={babyImage2}
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
                  Baby Care Store
                </Typography>
                <Box sx={{ display: "flex", gap: "7px" }}>
                  <Typography variant="body1" component="del">
                    $230
                  </Typography>
                  <Typography>$200.00</Typography>
                </Box>
              </Box>

              <button>
                <LoupeIcon htmlColor="black" />
              </button>
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

        <Grid
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
              src={babyImage2}
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
                  Baby Care Store
                </Typography>
                <Box sx={{ display: "flex", gap: "7px" }}>
                  <Typography variant="body1" component="del">
                    $230
                  </Typography>
                  <Typography>$200.00</Typography>
                </Box>
              </Box>

              <button>
                <LoupeIcon htmlColor="black" />
              </button>
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
        <Grid
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
              src={babyImage2}
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
                  Baby Care Store
                </Typography>
                <Box sx={{ display: "flex", gap: "7px" }}>
                  <Typography variant="body1" component="del">
                    $230
                  </Typography>
                  <Typography>$200.00</Typography>
                </Box>
              </Box>

              <button>
                <LoupeIcon htmlColor="black" />
              </button>
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
        <Grid
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
              src={babyImage2}
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
                  Baby Care Store
                </Typography>
                <Box sx={{ display: "flex", gap: "7px" }}>
                  <Typography variant="body1" component="del">
                    $230
                  </Typography>
                  <Typography>$200.00</Typography>
                </Box>
              </Box>

              <button>
                <LoupeIcon htmlColor="black" />
              </button>
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
        <Grid
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
              src={babyImage2}
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
                  Baby Care Store
                </Typography>
                <Box sx={{ display: "flex", gap: "7px" }}>
                  <Typography variant="body1" component="del">
                    $230
                  </Typography>
                  <Typography>$200.00</Typography>
                </Box>
              </Box>

              <button>
                <LoupeIcon htmlColor="black" />
              </button>
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
      </Grid>
    </Container>
  );
};

export default PopularProduct;
