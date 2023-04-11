import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
//////////
// import LineCard from "./LineCard";
import ShoppingCartItem from "./ShoppingCartItem";

function ShoppingCart({ cartContent, setcartContent, onClose, openCart }) {
  const [goodCount, setgoodCount] = useState(1);
  return (
    <Dialog onClose={onClose} open={openCart}>
      {cartContent.length > 0 ? (
        <>
          {cartContent.map((item, index) => {
            const itemIndex = cartContent.indexOf(item);
            return (
              <ShoppingCartItem
                key={index}
                item={item}
                cartContent={cartContent}
                setcartContent={setcartContent}
                itemIndex={itemIndex}
              />
              //   <Box key={index} sx={{ display: "flex" }}>
              //     <LineCard item={item} />
              //     <Box sx={{ ml: -2, flexBasis: "40%", display: "flex" }}>
              //       <Box sx={{ display: "flex", alignItems: "center" }}>
              //         <Button
              //           color="secondary"
              //           onClick={() => setgoodCount(goodCount + 1)}
              //         >
              //           <AddIcon />
              //         </Button>
              //         <Typography sx={{ mx: 1 }}>{goodCount}</Typography>
              //         <Button
              //           color="secondary"
              //           onClick={() => {
              //             if (goodCount > 1) {
              //               setgoodCount(goodCount - 1);
              //             } else {
              //               cartContent.splice(itemIndex, 1);
              //               setcartContent([...cartContent]);
              //             }
              //           }}
              //         >
              //           <RemoveIcon />
              //         </Button>
              //       </Box>
              //     </Box>
              //   </Box>
            );
          })}
        </>
      ) : (
        <Box>no goods</Box>
      )}

      <DialogContent>
        <Typography>
          In total: ${cartContent.reduce((a, b) => a + b.price, 0)}
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
