import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
///
import ProductPopup from "./ProductPopup";

function BasicCard({ item }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ProductPopup product={item} onClose={handleClose} open={open} />
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          maxWidth: 250,
          maxHeight: 400,
          m: 2,
          cursor: "pointer",
          boxShadow: "none",
          ":hover": {
            boxShadow:
              "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.2), 0px 1px 3px 0px rgba(0,0,0,0.2)",
          },
        }}
        onClick={handleClickOpen}
      >
        <CardContent sx={{ p: 0 }}>
          <CardMedia
            component="img"
            sx={{
              width: 250,
              height: 250,
              objectFit: "contain",
            }}
            image={item.images[0]}
            alt={item.title}
          />
          <Typography sx={{ fontSize: 14 }}>{item.title}</Typography>
          <Typography
            sx={{
              height: 60,
              overflow: "hidden",
              mb: 1,
              fontSize: "0.8rem",
            }}
            color="text.secondary"
          >
            {item.description}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              height: 20,
            }}
          >
            <Typography
              sx={{ mx: 1, fontSize: "1rem", fontWeight: 600 }}
              variant="body2"
            >
              ${item.price}
            </Typography>
            <Typography sx={{ mx: 2, fontSize: "0.9rem" }} variant="body2">
              Stock: {item.stock}
            </Typography>
          </Box>
        </CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography sx={{ mx: 1, fontSize: "0.8rem" }} variant="body2">
            Rating: {item.rating}
          </Typography>
          <CardActions>
            <Button
              sx={{ textTransform: "none", p: 0 }}
              size="small"
              variant="outlined"
              color="secondary"
              onClick={handleClickOpen}
            >
              <FavoriteBorderIcon sx={{ px: 0.5 }} fontSize="small" />
              <Typography sx={{ mx: 1, fontSize: "0.9rem", fontWeight: 600 }}>
                Watch
              </Typography>
            </Button>
          </CardActions>
        </Box>
      </Card>
    </>
  );
}

function MainContent({ products, filters, lightTheme }) {
  const categorieFilterEnabled = Object.values(filters).indexOf(true) !== -1;
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {products
        .filter((item) =>
          categorieFilterEnabled ? filters[item.category] : true
        )
        .map((item, index) => {
          return <BasicCard key={index} item={item} lightTheme={lightTheme} />;
        })}
    </Box>
  );
}

export default MainContent;
