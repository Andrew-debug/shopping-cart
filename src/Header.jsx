import {
  Button,
  OutlinedInput,
  AppBar,
  Box,
  Toolbar,
  Typography,
  InputAdornment,
} from "@mui/material";
import Badge from "@mui/material/Badge";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
//////////
import logoDark from "./assets/images/LogoDark.png";
import logoLight from "./assets/images/logoLight.png";
import ShoppingCart from "./ShoppingCart";

const pages = [
  "Mode",
  "Sell on Shopka",
  "Consumer Electronix",
  "Register",
  "Sign in",
];

const centerFlex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function Header({
  lightTheme,
  setlightTheme,
  setsearch,
  cartContent,
  setcartContent,
}) {
  const [openCart, setopenCart] = useState(false);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const themeHandleClick = () => {
    setlightTheme((prev) => !prev);
  };
  const handleClickOpenCart = () => setopenCart(true);

  const handleCloseCart = () => {
    setopenCart(false);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const shopCartLength = Object.keys(cartContent).length;
  return (
    <>
      <ShoppingCart
        cartContent={cartContent}
        setcartContent={setcartContent}
        onClose={handleCloseCart}
        openCart={openCart}
      />
      <AppBar position="static" sx={{ boxShadow: "none" }}>
        <Toolbar
          sx={{
            ...centerFlex,
            justifyContent: "space-between",
          }}
        >
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
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box
            sx={{
              ...centerFlex,
              justifyContent: "space-between",
            }}
          >
            <Box
              component="img"
              sx={{ display: { xs: "none", md: "block" } }}
              src={lightTheme ? logoLight : logoDark}
              alt="logo"
            />
            <Typography sx={{ display: { xs: "none", md: "block" }, mx: 2 }}>
              Sell on Shopka
            </Typography>
            <Typography sx={{ display: { xs: "none", md: "block" }, mx: 2 }}>
              Register
            </Typography>
          </Box>
          <Box sx={centerFlex}>
            <OutlinedInput
              size="small"
              fullWidth={true}
              sx={{
                borderRadius: 4,
                bgcolor: lightTheme ? "#ededf0" : "#121212",
              }}
              onChange={(e) => setsearch(e.target.value)}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              }
            />
            <Typography
              textAlign="center"
              sx={{
                display: { xs: "none", md: "block" },
                width: "300px",
                mx: 2,
              }}
            >
              Consumer Electronix
            </Typography>
            {!lightTheme ? (
              <Button
                sx={{
                  display: { xs: "none", md: "block" },
                  ":hover": {
                    bgcolor: "rgba(34,100,209, 0.1)",
                  },
                }}
                onClick={themeHandleClick}
              >
                <LightModeIcon color="secondary" />
              </Button>
            ) : (
              <Button
                sx={{
                  display: { xs: "none", md: "block" },
                  ":hover": {
                    bgcolor: "rgba(255,255,255,0.1)",
                  },
                }}
                onClick={themeHandleClick}
              >
                <DarkModeIcon color="secondary" />
              </Button>
            )}
          </Box>
          <Box sx={{ ...centerFlex, display: { xs: "none", md: "flex" } }}>
            <Button
              variant="outlined"
              color="secondary"
              sx={{
                p: { xs: "5px", lg: "5px 15px" },
                mr: 2,
                fontWeight: "600",
                textTransform: "none",
              }}
            >
              Sign in
            </Button>
            <Badge badgeContent={shopCartLength} color="secondary">
              <Button
                variant="outlined"
                color="secondary"
                sx={{
                  p: { xs: "5px", lg: "5px 15px" },
                  mr: 2,
                  fontWeight: "600",
                  textTransform: "none",
                }}
                onClick={handleClickOpenCart}
              >
                My cart
              </Button>
            </Badge>
          </Box>
          <Button
            variant="outlined"
            color="secondary"
            sx={{
              display: { xs: "block", md: "none" },
              p: { xs: "5px" },
              ml: 2,
              fontWeight: "600",
              textTransform: "none",
            }}
            onClick={handleClickOpenCart}
          >
            My cart
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
}
