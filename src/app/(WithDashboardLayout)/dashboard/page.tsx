import { Box, Typography } from "@mui/material";

const page = () => {
  return (
    <Box
      sx={{
        marginLeft: {
          xs: "30px",
          sm: "270px",
          md: "270px",
          lg: "270px",
          xl: "270px",
        },
        marginRight: {
          xs: "20px",
          sm: "20px",
          md: "20px",
          lg: "20px",
          xl: "20px",
        },
      }}
    >
      <Typography>Dashboard</Typography>
    </Box>
  );
};

export default page;
