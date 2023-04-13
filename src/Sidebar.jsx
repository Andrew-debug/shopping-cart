import * as React from "react";
import Box from "@mui/material/Box";
import { Checkbox, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Sidebar({ filters, setfilters, sort, setSort }) {
  return (
    <Box
      sx={{
        display: { xs: "none", sm: "block" },
        margin: "20px 10px",
        boxShadow: "5px 5px 5px rgba(0,0,0,0.1)",
      }}
    >
      <div style={{ borderBottom: "solid 1px black" }}>
        <h3 style={{ padding: "5px 70px" }}>Categories:</h3>
        {Object.entries(filters)
          .sort()
          .map(function ([key, value], index) {
            return (
              <Box key={index}>
                <Checkbox
                  checked={value}
                  color="secondary"
                  onChange={() => {
                    setfilters((prevState) => {
                      return {
                        ...prevState,
                        [key]: !value,
                      };
                    });
                  }}
                ></Checkbox>
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Box>
            );
          })}
      </div>
      {/* <Box sx={{ minWidth: 120 }}>
        <Typography>Sort Order</Typography>
        <FormControl fullWidth>
          <Select
            value={sort}
            onChange={(event) => {
              setSort(event.target.value);
            }}
          >
            <MenuItem value={"a_price"}>a_price</MenuItem>
            <MenuItem value={"d_price"}>d_price</MenuItem>
            <MenuItem value={"a_rating"}>a_rating</MenuItem>
            <MenuItem value={"d_rating"}>d_rating</MenuItem>
            <MenuItem value={"a_stock"}>a_stock</MenuItem>
            <MenuItem value={"d_stock"}>d_stock</MenuItem>
          </Select>
        </FormControl>
      </Box> */}
    </Box>
  );
}
