import Header from "./Header";
import { useState } from "react";
import { Card } from "@mui/material";

import ProductPoup from "./ProductPopup";
import data from '../data.json'

function ProductCard({ product }) { // mock
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => setOpen(true)

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card
        onClick={handleClickOpen}
        style={{
          height: 100,
          width: 100
        }}>
        {JSON.stringify(product)}
      </Card>
      <ProductPoup
        product={product}
        onClose={handleClose}
        open={open}
      />
    </div>
  );
}
function App() {
  return (
    <>
      <Header />
      <ProductCard product={data['products'][0]} />
    </>
  );
}

export default App;
