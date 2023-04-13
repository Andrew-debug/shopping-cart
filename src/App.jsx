import { useEffect, useState } from "react";
import { createTheme, ThemeProvider, CssBaseline } from "@mui/material";
/////////
import data from "../data.json";
import Header from "./Header";
import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const light = {
  palette: {
    mode: "light",
    common: {
      black: "#1d1d1f",
      white: "#f5f5f8",
    },
    primary: {
      main: "#f5f5f8",
      contrastText: "#1d1d1f",
    },
    secondary: {
      main: "#2264d1",
      contrastText: "#f5f5f8",
    },
    background: {
      default: "#f5f5f8",
    },
  },
};

const dark = {
  palette: {
    mode: "dark",
    common: {
      black: "#1d1d1f",
      white: "#f5f5f8",
    },
    primary: {
      main: "#1d1d1f",
      contrastText: "#f5f5f8",
    },
    secondary: {
      main: "#f5f5f8",
      contrastText: "#1d1d1f",
    },
  },
  background: {
    default: "#1d1d1f",
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
  const [cartContent, setcartContent] = useState(() => {
    const localValue = localStorage.getItem("ITEMS");
    if (localValue === null) return [];
    return JSON.parse(localValue);
  });
  useEffect(() => {
    cartContent.map((item) => (item.count = 1));
    localStorage.setItem("ITEMS", JSON.stringify(cartContent));
  }, [cartContent]);
  console.log(cartContent);

  return (
    <ThemeProvider theme={lightTheme ? createTheme(light) : createTheme(dark)}>
      <CssBaseline />
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
