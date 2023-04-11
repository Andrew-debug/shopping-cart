import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
///
import ProductPopup from "./ProductPopup";

function LineCard({ item, cartContent, setcartContent }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <ProductPopup
        product={item}
        onClose={handleClose}
        open={open}
        cartContent={cartContent}
        setcartContent={setcartContent}
      />
      <Card
        sx={{
          m: 2,
        }}
        onClick={handleClickOpen}
      >
        <CardActionArea
          sx={{
            display: "flex",
            justifyContent: "start",
            height: "300px",
          }}
        >
          <Box sx={{ flexBasis: "30%" }}>
            <CardMedia
              component="img"
              image={item.images[0]}
              alt={item.title}
              sx={{ width: "100%", maxHeight: "300px" }}
            />
          </Box>
          <CardContent sx={{ flexBasis: "70%", height: "100%", px: 1 }}>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              price ${item.price}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              discountPercentage{item.discountPercentage}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              rating {item.rating}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              brand{item.brand}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
}

export default LineCard;
