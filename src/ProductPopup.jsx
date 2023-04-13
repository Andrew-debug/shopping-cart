import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

function ProductPopup({ product, onClose, open, cartContent, setcartContent }) {
  return (
    <Dialog onClose={onClose} open={open}>
      <img src={product.images[0]} />
      <Box display="flex" justifyContent="space-between">
        <DialogTitle>{product.title}</DialogTitle>
        <DialogTitle>
          {product.price}$
          <Typography fontSize={14}>stock:{product?.stock || "unk"}</Typography>
          <Typography fontSize={14}>
            rating:{product?.rating || "unk"}
          </Typography>
        </DialogTitle>
      </Box>
      <DialogContent>
        <Typography>{product.description}</Typography>
      </DialogContent>
      <DialogActions>
        <Button
          color="secondary"
          onClick={() => {
            const checkCart = [...cartContent].filter((item) => {
              return item.title == product.title;
            });
            if (checkCart.length !== 0) {
              if (!product.count) {
                product.count = 1;
              } else {
                product.count += 1;
              }
            } else {
              setcartContent((prev) => [...prev, product]);
            }
          }}
        >
          Add to cart
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ProductPopup;
