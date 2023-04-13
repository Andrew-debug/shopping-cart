import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
///
import LineCard from "./LineCard";

function ShoppingCartItem({ item, cartContent, setcartContent, index }) {
  return (
    <Box sx={{ display: "flex" }}>
      <LineCard item={item} />
      <Box sx={{ ml: -2, flexBasis: "40%", display: "flex" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            color="secondary"
            onClick={() => {
              item.count += 1;
              console.log(item.count);
            }}
          >
            <AddIcon />
          </Button>
          <Typography sx={{ mx: 1 }}>{item.count}</Typography>
          <Button
            color="secondary"
            onClick={() => {
              if (item.count > 1) {
                item.count -= 1;
              } else {
                cartContent.splice(index, 1);
                setcartContent([...cartContent]);
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
