import React from "react";
import ReactDOM from "react-dom/client";
import { Reset } from "styled-reset";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
<<<<<<< HEAD
root.render(<RouterProvider router={router} />);
=======

root.render(
  <React.StrictMode>
    <Reset />
    <App />
  </React.StrictMode>
);
>>>>>>> main
