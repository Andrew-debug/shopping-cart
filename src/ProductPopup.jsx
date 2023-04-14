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
            if (Object.keys(cartContent).includes(product.id.toString())) {
              setcartContent({
                ...cartContent,
                [product.id]: {
                  ...product,
                  count: cartContent[product.id].count + 1,
                },
              });
            } else {
              setcartContent({
                ...cartContent,
                [product.id]: { ...product, count: 1 },
              });
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
