import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import { Button, CardActions } from "@mui/material";
////
import ProductPopup from "./ProductPopup";
function GridCard({ item, handleClickOpen }) {
  return (
    <>
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
        onClick={() => handleClickOpen(item)}
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
          <Typography
            sx={{
              fontSize: 16,
              height: 20,
              overflow: "hidden",
              px: 1,
              my: 0.2,
            }}
          >
            {item.title}
          </Typography>
          <Typography
            sx={{
              height: 60,
              overflow: "hidden",
              mb: 1,
              px: 1,
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
            <Typography
              sx={{
                mx: 1,
                px: 1,
                fontSize: "0.9rem",
                fontWeight: 600,
                color: "rgb(55,131,59)",
                bgcolor: "rgba(55,131,59, 0.2)",
                borderRadius: 1,
              }}
              variant="body2"
            >
              {item.discountPercentage &&
                `${Math.floor(item.discountPercentage)}% OFF`}
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
          <Box sx={{ display: "flex" }}>
            <Stack spacing={1} sx={{ mx: 0.5 }}>
              <Rating
                name="half-rating"
                size="small"
                value={item.rating}
                precision={0.5}
                readOnly
              />
            </Stack>
            <Typography sx={{ pt: "2px", fontSize: "0.8rem" }} variant="body2">
              {item.rating}
            </Typography>
          </Box>
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

export default GridCard;
