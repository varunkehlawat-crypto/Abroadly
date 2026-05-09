import React from "react";

import ReactDOM from "react-dom/client";

import {
  BrowserRouter,
} from "react-router-dom";

import App from "./App";

import {
  ThemeProvider,
} from "./context/ThemeContext";
import {
  WishlistProvider,
} from "./context/WishlistContext";
import "./styles.css";

ReactDOM.createRoot(
  document.getElementById(
    "root"
  )
).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
         <WishlistProvider>
        <App />
         </WishlistProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);