import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
///
import LineCard from "./LineCard";

function ShoppingCartItem({ product, cartContent, setcartContent }) {
  return (
    <Box sx={{ display: "flex" }}>
      <LineCard item={product} />
      <Box sx={{ ml: -2, flexBasis: "40%", display: "flex" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            color="secondary"
            onClick={() => {
              product.count += 1;
              setcartContent({ ...cartContent, [product.id]: product });
            }}
          >
            <AddIcon />
          </Button>
          <Typography sx={{ mx: 1 }}>{product.count}</Typography>
          <Button
            color="secondary"
            onClick={() => {
              if (product.count > 1) {
                setcartContent({
                  ...cartContent,
                  [product.id]: { ...product, count: product.count - 1 },
                });
              } else {
                delete cartContent[product.id];
                setcartContent({ ...cartContent });
              }
            }}
          >
            <RemoveIcon />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default ShoppingCartItem;
