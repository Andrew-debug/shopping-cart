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
      {cartContent.length > 0 ? (
        <>
          {cartContent.map((item, index) => {
            return (
              <ShoppingCartItem
                key={index}
                item={item}
                cartContent={cartContent}
                setcartContent={setcartContent}
                index={index}
              />
            );
          })}
        </>
      ) : (
        <Box>no goods</Box>
      )}
      <DialogContent>
        <Typography>
          In total: ${cartContent.reduce((a, b) => a + b.price * b.count, 0)}
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
