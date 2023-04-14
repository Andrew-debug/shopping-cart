import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
//////////
import ShoppingCartItem from "./ShoppingCartItem";

function ShoppingCart({ cartContent, setcartContent, onClose, openCart }) {
  return (
    <Dialog onClose={onClose} open={openCart}>
      {Object.keys(cartContent).length > 0 ? (
        <>
          {Object.entries(cartContent).map(([key, value]) => (
            <ShoppingCartItem
              key={key}
              product={value}
              cartContent={cartContent}
              setcartContent={setcartContent}
            />
          ))}
        </>
      ) : (
        <Box>no goods</Box>
      )}
      <DialogContent>
        <Typography>
          In total: $
          {Object.values(cartContent).reduce(
            (a, b) => a + b.price * b.count,
            0
          )}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          color="secondary"
          variant="outlined"
          sx={{ textDecoration: "none" }}
          disabled={cartContent.length > 0 ? false : true}
        >
          Proceed with purchase
        </Button>
      </DialogActions>
    </Dialog>
  );
}
export default ShoppingCart;
