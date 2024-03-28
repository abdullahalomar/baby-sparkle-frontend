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

      <Grid container spacing={3} mt={4}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
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
              component={Link}
              href="#"
              variant="h6"
              className="absolute bottom-3 left-3 bg-green-400 px-3 rounded-lg text-slate-800"
            >
              Feeding
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
          sx={{
            marginBottom: "30px",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Image
              src={clothing}
              alt="baby image one"
              className="rounded-xl mb-2 h-[200px]"
            />
            <Typography
              component={Link}
              href="#"
              variant="h6"
              className="absolute bottom-3 left-3 bg-green-400 px-3 rounded-lg text-slate-800"
            >
              Clothing
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
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
              component={Link}
              href="#"
              variant="h6"
              className="absolute bottom-3 left-3 bg-green-400 px-3 rounded-lg text-slate-800"
            >
              Diapering
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
          sx={{
            marginBottom: "30px",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Image
              src={toys}
              alt="baby image one"
              className="rounded-xl mb-2 h-[200px]"
            />
            <Typography
              component={Link}
              href="#"
              variant="h6"
              className="absolute bottom-3 left-3 bg-green-400 px-3 rounded-lg text-slate-800"
            >
              Toys
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
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
              component={Link}
              href="#"
              variant="h6"
              className="absolute bottom-3 left-3 bg-green-400 px-3 rounded-lg text-slate-800"
            >
              Health & Safety
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
          sx={{
            marginBottom: "30px",
          }}
        >
          <Box sx={{ position: "relative" }}>
            <Image
              src={bathing}
              alt="baby image one"
              className="rounded-xl mb-2 h-[200px]"
            />
            <Typography
              component={Link}
              href="#"
              variant="h6"
              className="absolute bottom-3 left-3 bg-green-400 px-3 rounded-lg text-slate-800"
            >
              Bathing
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box mt={7} sx={{ textAlign: "center" }}>
        <Typography
          component={Link}
          href="/categories"
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
