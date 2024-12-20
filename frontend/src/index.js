import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { CartContextProvider } from "./context/CartContext";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <React.StrictMode>
      <AuthContextProvider>
        <CartContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CartContextProvider>
      </AuthContextProvider>
  </React.StrictMode>
);
