import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import babyImage from "@/assets/baby-pic.jpg";

const TopCategories = () => {
  return (
    <Container className="my-24">
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
      <Grid container spacing={2} mt={2}>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          lg={4}
          xl={4}
          sx={{
            maxWidth: "320px",
            marginLeft: { xs: "70px", sm: "0px", lg: "0px", xl: "0px" },
          }}
        >
          <Image
            src={babyImage}
            alt="baby image one"
            className="rounded-xl mb-2 h-[420px]"
          />
          <Typography component="h6" variant="h6">
            Baby Care Store
          </Typography>
          <Box sx={{ display: "flex", gap: "7px" }}>
            <Typography variant="body1" component="del">
              $230
            </Typography>
            <Typography>$200.00</Typography>
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
            maxWidth: "320px",
            marginLeft: { xs: "70px", sm: "0px", lg: "0px", xl: "0px" },
          }}
        >
          <Image
            src={babyImage}
            alt="baby image one"
            className="rounded-xl mb-2 h-[210px]"
          />
          <Typography component="h6" variant="h6">
            Baby Care Store
          </Typography>
          <Box sx={{ display: "flex", gap: "7px" }}>
            <Typography variant="body1" component="del">
              $230
            </Typography>
            <Typography>$200.00</Typography>
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
            maxWidth: "320px",
            marginLeft: { xs: "70px", sm: "0px", lg: "0px", xl: "0px" },
          }}
        >
          <Image
            src={babyImage}
            alt="baby image one"
            className="rounded-xl mb-2 h-[370px]"
          />
          <Typography component="h6" variant="h6">
            Baby Care Store
          </Typography>
          <Box sx={{ display: "flex", gap: "7px" }}>
            <Typography variant="body1" component="del">
              $230
            </Typography>
            <Typography>$200.00</Typography>
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
            maxWidth: "320px",
            marginLeft: { xs: "70px", sm: "0px", lg: "0px", xl: "0px" },
          }}
        >
          <Image
            src={babyImage}
            alt="baby image one"
            className="rounded-xl mb-2 h-[370px]"
          />
          <Typography component="h6" variant="h6">
            Baby Care Store
          </Typography>
          <Box sx={{ display: "flex", gap: "7px" }}>
            <Typography variant="body1" component="del">
              $230
            </Typography>
            <Typography>$200.00</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TopCategories;
