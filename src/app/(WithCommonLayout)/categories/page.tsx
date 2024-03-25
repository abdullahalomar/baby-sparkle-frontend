import {
  Box,
  Card,
  CardContent,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  LinearProgress,
  NativeSelect,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import LoupeIcon from "@mui/icons-material/Loupe";
import babyImage from "@/assets/baby-pic.jpg";
import babyImage2 from "@/assets/baby-pic-2.jpg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Link from "next/link";

const categories = () => {
  return (
    <Container className="mt-16 mb-24">
      <Stack
        direction={{
          xs: "column",
          sm: "column",
          md: "row",
          lg: "row",
          xl: "row",
        }}
        spacing={{ xs: 6, sm: 6, md: 4, lg: 4, xl: 4 }}
      >
        <Box>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Box>
                <Typography sx={{ fontSize: "22px" }} gutterBottom>
                  Price Range
                </Typography>
              </Box>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="$20.00 - $ 50.00"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="$20.00 - $ 50.00"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="$20.00 - $ 50.00"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="$20.00 - $ 50.00"
                />
              </FormGroup>
            </CardContent>
          </Card>

          <Card sx={{ minWidth: 275, my: 5 }}>
            <CardContent>
              <Box>
                <Typography sx={{ fontSize: "22px" }} gutterBottom>
                  Categories / Brands
                </Typography>
              </Box>
              <FormControl fullWidth>
                <InputLabel variant="standard"></InputLabel>
                <NativeSelect defaultValue={30}>
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
                <NativeSelect defaultValue={30} sx={{ my: 3 }}>
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
                <NativeSelect defaultValue={30}>
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
                <NativeSelect defaultValue={30} sx={{ my: 3 }}>
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
                </NativeSelect>
              </FormControl>
            </CardContent>
          </Card>

          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Box>
                <Typography sx={{ fontSize: "22px" }} gutterBottom>
                  Ratings
                </Typography>
              </Box>
              <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="1 Star"
                />
                <FormControlLabel control={<Checkbox />} label="2 Star" />
                <FormControlLabel control={<Checkbox />} label="3 Star" />
                <FormControlLabel control={<Checkbox />} label="4 Star" />
                <FormControlLabel control={<Checkbox />} label="5 Star" />
              </FormGroup>
            </CardContent>
          </Card>
        </Box>
        <Box>
          <Grid container spacing={4}>
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              xl={4}
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
              lg={4}
              xl={4}
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
              lg={4}
              xl={4}
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
              lg={4}
              xl={4}
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
          </Grid>
        </Box>
      </Stack>
      <Box mt={15} mx="auto" sx={{ maxWidth: "400px" }}>
        <LinearProgress />
      </Box>
      <Box mt={5} sx={{ display: "flex", justifyContent: "center" }}>
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
          Load More <ChevronRightIcon fontSize="medium" />
        </Typography>
      </Box>
    </Container>
  );
};

export default categories;
