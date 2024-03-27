import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import babyImage from "@/assets/baby-pic.jpg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";
import feeding from "@/assets/categories/Feeding.jpg";
import clothing from "@/assets/categories/Clothing.jpg";
import diapering from "@/assets/categories/Diapering.jpg";
import toys from "@/assets/categories/Toys.jpg";
import health from "@/assets/categories/Health & Safety.jpg";
import bathing from "@/assets/categories/Bathing.jpg";

const TopCategories = () => {
  return (
    <Container className="my-28">
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{ fontWeight: "700", fontSize: "36px", color: "#3D3D3D" }}
        >
          Top Categories
        </Typography>
        <Typography component="h1" variant="h6" className="text-slate-600">
          Pamper your baby with our gentle bath products, skincare essentials,
          and health care items to keep them clean, happy, and healthy.
        </Typography>
      </Box>

      <Grid container spacing={3} direction="row" mt={4}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
          sx={{
            maxWidth: "320px",
            marginLeft: { xs: "40px", sm: "0px", lg: "0px", xl: "0px" },
            marginRight: { xs: "40px", sm: "0px", lg: "0px", xl: "0px" },
          }}
        >
          <Grid
            item
            sx={{
              marginBottom: "30px",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Image
                src={feeding}
                alt="baby image one"
                className="rounded-xl mb-2 h-[200px]"
              />
              <Typography
                component="h6"
                variant="h6"
                className="absolute bottom-3 left-3"
              >
                Feeding
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ position: "relative" }}>
              <Image
                src={clothing}
                alt="baby image one"
                className="rounded-xl mb-2 h-[200px]"
              />
              <Typography
                component="h6"
                variant="h6"
                className="absolute bottom-3 left-3"
              >
                Clothing
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
          sx={{
            maxWidth: "320px",
            marginLeft: { xs: "40px", sm: "0px", lg: "0px", xl: "0px" },
            marginRight: { xs: "40px", sm: "0px", lg: "0px", xl: "0px" },
          }}
        >
          <Grid
            item
            sx={{
              marginBottom: "30px",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Image
                src={diapering}
                alt="baby image one"
                className="rounded-xl mb-2 h-[200px]"
              />
              <Typography
                component="h6"
                variant="h6"
                className="absolute bottom-3 left-3"
              >
                Diapering
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ position: "relative" }}>
              <Image
                src={toys}
                alt="baby image one"
                className="rounded-xl mb-2 h-[200px]"
              />
              <Typography
                component="h6"
                variant="h6"
                className="absolute bottom-3 left-3"
              >
                Toys
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
          sx={{
            maxWidth: "320px",
            marginLeft: { xs: "40px", sm: "0px", lg: "0px", xl: "0px" },
            marginRight: { xs: "40px", sm: "0px", lg: "0px", xl: "0px" },
          }}
        >
          <Grid
            item
            sx={{
              marginBottom: "30px",
            }}
          >
            <Box sx={{ position: "relative" }}>
              <Image
                src={health}
                alt="baby image one"
                className="rounded-xl mb-2 h-[200px]"
              />
              <Typography
                component="h6"
                variant="h6"
                className="absolute bottom-3 left-3"
              >
                Health & Safety
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ position: "relative" }}>
              <Image
                src={bathing}
                alt="baby image one"
                className="rounded-xl mb-2 h-[200px]"
              />
              <Typography
                component="h6"
                variant="h6"
                className="absolute bottom-3 left-3"
              >
                Bathing
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
          sx={{
            maxWidth: "320px",
            marginLeft: { xs: "40px", sm: "0px", lg: "0px", xl: "0px" },
            marginRight: { xs: "40px", sm: "0px", lg: "0px", xl: "0px" },
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Image
              src={babyImage}
              alt="baby image one"
              className="rounded-xl mb-2 h-[430px]"
            />
            <Typography
              component="h6"
              variant="h6"
              className="absolute bottom-3 left-3"
            >
              Baby Care Store
            </Typography>
          </Box>
        </Grid> */}
      </Grid>
      <Box mt={7} sx={{ textAlign: "center" }}>
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
    </Container>
  );
};

export default TopCategories;
