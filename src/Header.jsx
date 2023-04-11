import {
  Button,
  OutlinedInput,
  AppBar,
  Box,
  Toolbar,
  Typography,
  InputAdornment,
  CssBaseline,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useState } from "react";
//////////
import logoDark from "./assets/images/LogoDark.png";
import logoLight from "./assets/images/logoLight.png";
import ShoppingCart from "./ShoppingCart";
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
  const themeHandleClick = () => {
    setlightTheme((prev) => !prev);
  };
  const [openCart, setopenCart] = useState(false);
  const handleClickOpenCart = () => setopenCart(true);

  const handleCloseCart = () => {
    setopenCart(false);
  };
  return (
    <>
      <CssBaseline />
      <ShoppingCart
        cartContent={cartContent}
        setcartContent={setcartContent}
        onClose={handleCloseCart}
        openCart={openCart}
      />
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ boxShadow: "none" }}>
          <Toolbar
            sx={{
              ...centerFlex,
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                ...centerFlex,
                justifyContent: "space-between",
              }}
            >
              <img src={lightTheme ? logoLight : logoDark} alt="" />
              <Typography sx={{ mx: 2 }}>Sell on Shopka</Typography>
              <Typography sx={{ mx: 2 }}>Register</Typography>
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
              <Typography textAlign="center" sx={{ width: "300px", mx: 2 }}>
                Consumer Electronix
              </Typography>
              {!lightTheme ? (
                <Button
                  sx={{
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
            <Box sx={centerFlex}>
              <Button
                className="header-button"
                variant="outlined"
                color="secondary"
                sx={{ mr: 2, fontWeight: "600", textTransform: "none" }}
              >
                Sign in
              </Button>
              <Button
                className="header-button"
                variant="outlined"
                color="secondary"
                sx={{ mr: 2, fontWeight: "600", textTransform: "none" }}
                onClick={handleClickOpenCart}
              >
                My cart
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
