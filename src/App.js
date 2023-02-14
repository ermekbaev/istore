import React from "react";
import Header from "./Components/Header";

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
