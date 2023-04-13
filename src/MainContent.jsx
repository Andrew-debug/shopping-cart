import { useState } from "react";
import Box from "@mui/material/Box";
import ViewListIcon from "@mui/icons-material/ViewList";
import WindowIcon from "@mui/icons-material/Window";
import { Button } from "@mui/material";
///
import GridCard from "./GridCard";
import LineCard from "./LineCard";

function MainContent({
  products,
  filters,
  search,
  setcartContent,
  cartContent,
}) {
  const [goodsDisplay, setgoodsDisplay] = useState("grid");
  const categorieFilterEnabled = Object.values(filters).indexOf(true) !== -1;
  return (
    <Box>
      <Box sx={{ display: "flex", mt: 2, ml: 2 }}>
        <Button
          variant="outlined"
          sx={{
            borderTop: goodsDisplay === "line" && "none",
            bgcolor: goodsDisplay === "grid" && "rgba(34,100,209,0.1)",
            boxShadow:
              goodsDisplay === "line" &&
              "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.2),3px 3px 0px 0px rgba(0,0,0,0.3)",
          }}
          onClick={() => setgoodsDisplay("line")}
        >
          <ViewListIcon
            color="secondary"
            sx={{ color: goodsDisplay === "grid" && "#9596a3" }}
          />
        </Button>
        <Button
          variant="outlined"
          sx={{
            borderTop: goodsDisplay === "grid" && "none",
            bgcolor: goodsDisplay === "line" && "rgba(34,100,209,0.1)",
            boxShadow:
              goodsDisplay === "grid" &&
              "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.2), 3px 3px 0px 0px rgba(0,0,0,0.3)",
          }}
          onClick={() => setgoodsDisplay("grid")}
        >
          <WindowIcon
            color="secondary"
            sx={{ color: goodsDisplay === "line" && "#9596a3" }}
          />
        </Button>
      </Box>
      <Box
        sx={
          goodsDisplay === "grid"
            ? {
                display: "flex",
                flexWrap: "wrap",
                justifyContent: { xs: "center", sm: "flex-start" },
              }
            : { overflow: "hidden" }
        }
      >
        {products
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.title.toLowerCase().includes(search);
          })
          .filter((item) =>
            categorieFilterEnabled ? filters[item.category] : true
          )
          .map((item, index) => {
            return goodsDisplay === "grid" ? (
              <GridCard
                key={index}
                item={item}
                cartContent={cartContent}
                setcartContent={setcartContent}
              />
            ) : (
              <LineCard
                key={index}
                item={item}
                cartContent={cartContent}
                setcartContent={setcartContent}
              />
            );
          })}
      </Box>
    </Box>
  );
}

export default MainContent;
