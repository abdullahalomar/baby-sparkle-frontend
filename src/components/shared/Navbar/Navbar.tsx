"use client";

import { Box, Container, Stack, Typography } from "@mui/material";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

import React from "react";

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position="sticky">
      <Container>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,

              textDecoration: "none",
            }}
          >
            Baby Sparkle
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {/* mobile device */}
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem className="flex flex-col" onClick={handleCloseNavMenu}>
                <Typography
                  className="hover:bg-white px-6 py-2 rounded-sm"
                  component={Link}
                  href="/"
                  textAlign="center"
                >
                  Home
                </Typography>

                <Typography
                  className="hover:bg-white px-6 py-2 rounded-sm"
                  component={Link}
                  href="/categories"
                  textAlign="center"
                >
                  Categories
                </Typography>
                <Typography
                  className="hover:bg-white px-6 py-2 rounded-sm"
                  component={Link}
                  href="/products"
                  textAlign="center"
                >
                  Products
                </Typography>
                <Typography
                  className="hover:bg-white px-6 py-2 rounded-sm"
                  component={Link}
                  href="/flash-sale"
                  textAlign="center"
                >
                  Flash Sale
                </Typography>
                <Typography
                  className="hover:bg-white px-6 py-2 rounded-sm"
                  component={Link}
                  href="/about-us"
                  textAlign="center"
                >
                  About Us
                </Typography>
                <Typography
                  className="hover:bg-white px-6 py-2 rounded-sm"
                  component={Link}
                  href="/dashboard"
                  textAlign="center"
                >
                  Dashboard
                </Typography>
              </MenuItem>
            </Menu>
            {/* mobile device */}
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Baby Sparkle
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {/* desktop/laptop device  */}
            <Stack direction="row" onClick={handleCloseNavMenu}>
              <Typography
                component={Link}
                href="/"
                sx={{ mx: 3, color: "white", display: "block" }}
              >
                Home
              </Typography>
              <Typography
                component={Link}
                href="/categories"
                sx={{ mx: 3, color: "white", display: "block" }}
              >
                Categories
              </Typography>
              <Typography
                component={Link}
                href="/products"
                sx={{ mx: 3, color: "white", display: "block" }}
              >
                Products
              </Typography>
              <Typography
                component={Link}
                href="/flash-sale"
                sx={{ mx: 3, color: "white", display: "block" }}
              >
                Flash Sale
              </Typography>
              <Typography
                component={Link}
                href="/about-us"
                sx={{ mx: 3, color: "white", display: "block" }}
              >
                About Us
              </Typography>
              <Typography
                component={Link}
                href="/dashboard"
                sx={{ mx: 3, color: "white", display: "block" }}
              >
                Dashboard
              </Typography>
            </Stack>
            {/* desktop/laptop device  */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                <ManageAccountsIcon fontSize="large" htmlColor="white" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* settings */}
              <MenuItem className="flex flex-col" onClick={handleCloseUserMenu}>
                <Typography
                  className="hover:bg-white px-6 py-2 rounded-sm"
                  component={Link}
                  href="/dashboard"
                  textAlign="center"
                >
                  Dashboard
                </Typography>
                <Typography
                  className="hover:bg-white px-6 py-2 rounded-sm"
                  component={Link}
                  href="/login"
                  textAlign="center"
                >
                  Login
                </Typography>
              </MenuItem>
              {/* settings */}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
