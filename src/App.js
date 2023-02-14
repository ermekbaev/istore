import React from "react";
import AddProduct from "./Components/Products/AddProduct";
import EditProduct from "./Components/Products/EditProduct";

import ProductCard from "./Components/Products/ProductCard";


import "./index.css";
import MainRoutes from "./Routes/MainRoutes";

const App = () => {
  return (
    <div>

      <Header />
      <MainRoutes />
    </div>
  );
};

export default App;
