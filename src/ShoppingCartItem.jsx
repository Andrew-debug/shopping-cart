import { Box, Button, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
///
import LineCard from "./LineCard";

function ShoppingCartItem({ item, cartContent, setcartContent, itemIndex }) {
  const [goodCount, setgoodCount] = useState(1);
  return (
    <Box sx={{ display: "flex" }}>
      <LineCard item={item} />
      <Box sx={{ ml: -2, flexBasis: "40%", display: "flex" }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button color="secondary" onClick={() => setgoodCount(goodCount + 1)}>
            <AddIcon />
          </Button>
          <Typography sx={{ mx: 1 }}>{goodCount}</Typography>
          <Button
            color="secondary"
            onClick={() => {
              if (goodCount > 1) {
                setgoodCount(goodCount - 1);
              } else {
                cartContent.splice(itemIndex, 1);
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
