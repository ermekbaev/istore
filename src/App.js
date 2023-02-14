import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home/Home";
import RentCar from "./Components/RentCar/RentCar";

import "./index.css";

const App = () => {
  return (
    <div>
      <Header />
      <Home />
      <RentCar />
      <Footer />
    </div>
  );
};

export default App;
