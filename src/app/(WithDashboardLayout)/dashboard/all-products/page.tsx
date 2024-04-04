import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import { Product } from "@/types";

const AllProducts = async () => {
  const res = await fetch(`${process.env.BACKEND_URL}/products`);
  const products = await res.json();
  // console.log(products);
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
      <Typography mb={3} sx={{ textAlign: "center", fontSize: "20px" }}>
        All Products
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>SL NO</TableCell>
              <TableCell>Items</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Product ID</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.data.map((product: Product, index: any) => (
              <TableRow
                key={product._id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell
                  sx={{ display: "flex", alignItems: "center", gap: 2 }}
                >
                  <Image
                    src={product.image_url}
                    width={70}
                    height={10}
                    alt="baby image"
                  />
                  <Typography>{product.title}</Typography>
                </TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product._id}</TableCell>
                <TableCell>{product.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AllProducts;
