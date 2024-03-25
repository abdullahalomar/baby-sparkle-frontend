import { Box, Container, Divider, Rating, Typography } from "@mui/material";
import Image from "next/image";
import babyImage from "@/assets/baby-pic.jpg";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import HeartRatting from "@/utils/HeartRatting/HeartRatting";

const ProductDetails = () => {
  return (
    <Container className="mb-20">
      <Box
        my={6}
        sx={{
          display: {
            xs: "flex-wrap",
            sm: "flex-wrap",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            maxWidth: "500px",
            marginBottom: {
              xs: "14px",
              sm: "14px",
              md: "0px",
              lg: "0px",
              xl: "0px",
            },
          }}
        >
          <Image src={babyImage} className="h-[500px]" alt="baby image" />
        </Box>
        <Box sx={{ maxWidth: "500px" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography sx={{ fontSize: "26px", fontWeight: 700 }}>
              Baby Care Store
            </Typography>
            <HeartRatting />
          </Box>
          <Box
            sx={{
              display: {
                xs: "flex-wrap",
                sm: "flex-wrap",
                md: "flex",
                lg: "flex",
                xl: "flex",
              },
              gap: 2,
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontSize: "28px", fontWeight: 400 }}>
              $54.98
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              <Divider orientation="vertical" variant="middle" flexItem />
              <Typography>( 32 review )</Typography>
            </Box>
          </Box>
          <Box mt={5}>
            <Typography sx={{ fontSize: "17px", fontWeight: 400 }}>
              Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed
              diam nonummy nibh euismod tincidunt ut laoreet dolore magn. Lorem
              ipsum dolor sit amet, consectetuer adipi scing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magn.
            </Typography>
            <Box my={4}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <FiberManualRecordIcon fontSize="small" />
                <Typography sx={{ fontSize: "17px", fontWeight: 400 }}>
                  Lorem ipsum dolor sit amet, adipi scing elit
                </Typography>
              </Box>
              <Box
                my={1}
                sx={{ display: "flex", alignItems: "center", gap: 1 }}
              >
                <FiberManualRecordIcon fontSize="small" />
                <Typography sx={{ fontSize: "17px", fontWeight: 400 }}>
                  Lorem ipsum dolor sit amet, adipi scing elit
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <FiberManualRecordIcon fontSize="small" />
                <Typography sx={{ fontSize: "17px", fontWeight: 400 }}>
                  Lorem ipsum dolor sit amet, adipi scing elit
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <DeliveryDiningIcon />
                <Typography sx={{ fontSize: "17px", fontWeight: 400 }}>
                  Free worldwide shipping on all orders over $100
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <AssignmentReturnIcon />
                <Typography sx={{ fontSize: "17px", fontWeight: 400 }}>
                  Delivers in: 3-7 Working Days Shipping & Return
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography sx={{ fontSize: "26px", fontWeight: 700 }}>
          Description
        </Typography>
        <Typography my={4} sx={{ fontSize: "17px", fontWeight: 400 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Typography>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <FiberManualRecordIcon fontSize="small" />
            <Typography sx={{ fontSize: "17px", fontWeight: 400 }}>
              Lorem ipsum dolor sit amet, adipi scing elit
            </Typography>
          </Box>
          <Box my={1} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <FiberManualRecordIcon fontSize="small" />
            <Typography sx={{ fontSize: "17px", fontWeight: 400 }}>
              Lorem ipsum dolor sit amet, adipi scing elit
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <FiberManualRecordIcon fontSize="small" />
            <Typography sx={{ fontSize: "17px", fontWeight: 400 }}>
              Lorem ipsum dolor sit amet, adipi scing elit
            </Typography>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default ProductDetails;