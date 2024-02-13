import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CustomProvider from "./components/CustomProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CustomProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CustomProvider>
  </React.StrictMode>
);
