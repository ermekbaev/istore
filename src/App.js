import React from "react";
<<<<<<< HEAD
import Header from "./Components/Header";

=======

import Footer from "./Components/Footer";
import Header from "./Components/Header";

import AddProduct from "./Components/Products/AddProduct";
import EditProduct from "./Components/Products/EditProduct";

import ProductCard from "./Components/Products/ProductCard";
>>>>>>> 9ff219f67bfa129dd7d0d073fc1aec055d7d059e
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
