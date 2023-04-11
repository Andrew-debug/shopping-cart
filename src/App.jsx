import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
/////////
import data from "../data.json";
import Header from "./Header";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const light = {
  palette: {
    mode: "light",
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#2264d1",
    },
  },
};

const dark = {
  palette: {
    mode: "dark",
    secondary: {
      main: "#fff",
    },
  },
};

const allDataCategories = [];
for (const i in data.products) {
  allDataCategories.push(data.products[i].category);
}
const categories = new Set(allDataCategories);

const objCategories = {};
for (const key of categories) {
  objCategories[key] = false;
}

function App() {
  const [lightTheme, setlightTheme] = useState(true);
  const [filters, setfilters] = useState({ ...objCategories });
  const [search, setsearch] = useState("");
  const [cartContent, setcartContent] = useState([]);
  return (
    <ThemeProvider theme={lightTheme ? createTheme(light) : createTheme(dark)}>
      <Header
        lightTheme={lightTheme}
        setlightTheme={setlightTheme}
        setsearch={setsearch}
        cartContent={cartContent}
        setcartContent={setcartContent}
      />
      <div style={{ display: "flex" }}>
        <Sidebar filters={filters} setfilters={setfilters} />
        <MainContent
          products={data.products}
          filters={filters}
          search={search}
          cartContent={cartContent}
          setcartContent={setcartContent}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
