import { Box, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Image from "next/image";
import babyImage from "@/assets/baby-pic.jpg";

const AllProducts = () => {
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
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                2133
              </TableCell>
              <TableCell sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Image src={babyImage} width={70} alt="baby image" />
                <Typography>Double Bed & Dressing</Typography>
              </TableCell>
              <TableCell>Renuar</TableCell>
              <TableCell>2176413876</TableCell>
              <TableCell>$168.20</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                2133
              </TableCell>
              <TableCell sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Image src={babyImage} width={70} alt="baby image" />
                <Typography>Double Bed & Dressing</Typography>
              </TableCell>
              <TableCell>Renuar</TableCell>
              <TableCell>2176413876</TableCell>
              <TableCell>$168.20</TableCell>
            </TableRow>
            <TableRow
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                2133
              </TableCell>
              <TableCell sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <Image src={babyImage} width={70} alt="baby image" />
                <Typography>Double Bed & Dressing</Typography>
              </TableCell>
              <TableCell>Renuar</TableCell>
              <TableCell>2176413876</TableCell>
              <TableCell>$168.20</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default AllProducts;
