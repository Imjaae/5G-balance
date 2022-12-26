import React from "react";
import ReactDOM from "react-dom/client";
<<<<<<< Updated upstream
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
=======
import { Reset } from "styled-reset";
import App from "./App";
>>>>>>> Stashed changes

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
<<<<<<< Updated upstream
    <RouterProvider router={router} />
=======
    <Reset />
    <App />
>>>>>>> Stashed changes
  </React.StrictMode>
);
