import React from "react";

import Footer from "./Components/Footer";
import Header from "./Components/Header";

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
