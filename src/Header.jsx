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
//////////
import logoDark from "./assets/images/LogoDark.png";
import logoLight from "./assets/images/logoLight.png";

const centerFlex = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export default function Header({ lightTheme, setlightTheme }) {
  const themeHandleClick = () => {
    setlightTheme((prev) => !prev);
  };
  return (
    <>
      <CssBaseline />
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
                sx={{ borderRadius: 4 }}
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
                variant="outlined"
                color="secondary"
                sx={{ mr: 2, fontWeight: "600" }}
              >
                Sign in
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                sx={{ mr: 2, fontWeight: "600" }}
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
