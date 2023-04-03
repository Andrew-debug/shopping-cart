import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";

function ProductPopup({ product, onClose, open }) {
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
        <Button>Add to cart</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ProductPopup;
