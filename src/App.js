import React from "react";

import Footer from "./Components/Footer";
import Header from "./Components/Header";

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
      <Footer />

    </div>
  );
};

export default App;
