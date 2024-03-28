import { Box, Container, Divider, Rating, Typography } from "@mui/material";
import Image from "next/image";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import HeartRatting from "@/utils/HeartRatting/HeartRatting";
import { Product } from "@/types";

interface ProductId {
  params: {
    productId: string;
  };
}

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/products`);
  const products = await res.json();
  return products.data.slice(0, 10).map((product: Product) => ({
    productId: product._id,
  }));
};

const ProductDetails = async ({ params }: ProductId) => {
  console.log(params);

  const res = await fetch(
    `${process.env.BACKEND_URL}/products/${params?.productId}`,
    {
      cache: "no-store",
    }
  );
  const product = await res.json();
  console.log(product);

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
          <Image
            src={product.data.image_url}
            width={400}
            height={500}
            className="h-[500px] w-[600px]"
            alt="baby image"
          />
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
              {product.data.title}
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
              {product.data.price}
            </Typography>
            <Box sx={{ display: "flex" }}>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              <Divider orientation="vertical" variant="middle" flexItem />
              <Typography>{product.data.rating}</Typography>
            </Box>
          </Box>
          <Box mt={5}>
            <Typography sx={{ fontSize: "17px", fontWeight: 400 }}>
              {product.data.description}
            </Typography>
            <Box my={4}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <FiberManualRecordIcon fontSize="small" />
                <Typography sx={{ fontSize: "17px", fontWeight: 400 }}>
                  {product.data.category}
                </Typography>
              </Box>
              {/* <Box
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
              </Box> */}
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
        {/* <Typography sx={{ fontSize: "26px", fontWeight: 700 }}>
          {product.data.description}
        </Typography> */}
        <Typography my={4} sx={{ fontSize: "17px", fontWeight: 400 }}>
          {product.data.description}
        </Typography>
        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <FiberManualRecordIcon fontSize="small" />
            <Typography sx={{ fontSize: "17px", fontWeight: 400 }}>
              {product.data.category}
            </Typography>
          </Box>
          {/* <Box my={1} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
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
          </Box> */}
        </Box>
      </Box>
    </Container>
  );
};

export default ProductDetails;
