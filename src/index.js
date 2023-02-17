import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AuthContextProvider from "./Contexts/AuthContextProvider";
import ProductContextProvider from "./Contexts/ProductContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ProductContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </ProductContextProvider>
  </BrowserRouter>
);
